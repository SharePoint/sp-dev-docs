---
title: Process documents in a container with Azure AI Document Intelligence
description: Extract invoice fields from files added to a SharePoint Embedded container and write the results back as JSON, triggered by webhooks.
ms.topic: how-to
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
search.appverid: MET150
agent:
  schema_version: 1
  task_type: how-to
  outcome: When a supported file is added or updated in a container, the app reads the change via the drive delta feed, extracts invoice fields with Azure AI Document Intelligence, and writes a `<name>-extracted-fields.json` file back to the same folder.
  estimated_minutes: 40
  difficulty: intermediate
  roles: [app-developer]
  prerequisites:
    - uri: /sharepoint/dev/embedded/development/tutorials/using-webhooks
      kind: how-to
    - uri: /sharepoint/dev/embedded/development/auth
      kind: concept
    - capability: azure-subscription
  api_surface:
    - id: getContainerDrive
      method: GET
      path: /storage/fileStorage/containers/{container-id}/drive
      permissions: [FileStorageContainer.Selected]
    - id: listDriveItems
      method: GET
      path: /drives/{drive-id}/items/{item-id}/children
      permissions: [FileStorageContainer.Selected]
    - id: downloadFile
      method: GET
      path: /drives/{drive-id}/items/{item-id}/content
      permissions: [FileStorageContainer.Selected]
    - id: uploadFile
      method: PUT
      path: /drives/{drive-id}/items/{parent-id}:/{filename}:/content
      permissions: [FileStorageContainer.Selected]
  inputs:
    - name: drive-id
      type: string
      source: prior-step
    - name: item-id
      type: string
      source: prior-step
    - name: parent-id
      type: string
      source: prior-step
    - name: filename
      type: string
      source: generated
    - name: delta-token
      type: string
      source: prior-step
    - name: dac-resource-endpoint
      type: string
      source: azure-portal
    - name: dac-resource-key
      type: string
      source: azure-portal
  outputs:
    - name: extracted-fields-json
      type: string
      verify: GET /drives/{drive-id}/items/{item-id}/children lists a new `<name>-extracted-fields.json` item
  next_steps:
    - uri: /sharepoint/dev/embedded/development/tutorials/metadata
      when: always
    - uri: /sharepoint/dev/embedded/development/declarative-agent/sharepoint-embedded-knowledge-source
      when: needs-search
  related:
    - uri: /sharepoint/dev/embedded/development/tutorials/using-webhooks
    - uri: /sharepoint/dev/embedded/development/limits-calling
  stability: ga
  last_validated: proposed
---

# Process documents in a container with Azure AI Document Intelligence
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

At the end of this how-to, your SharePoint Embedded application reacts to a webhook notification by reading the container's drive delta feed, downloading each newly added or updated invoice (JPEG, JPG, PNG, BMP, TIFF, or PDF), extracting fields with the Azure AI Document Intelligence `prebuilt-invoice` model, and writing the extracted fields back to the same folder as a `<name>-extracted-fields.json` file.

> [!NOTE]
> Azure AI Document Intelligence was previously branded Azure Cognitive Services Form Recognizer. The `@azure/ai-form-recognizer` SDK client (`DocumentAnalysisClient`) is used here.

## Prerequisites

- [Using webhooks](/sharepoint/dev/embedded/development/tutorials/using-webhooks) — this how-to extends the webhook sample app; you need a working change-notification subscription on your container's drive before you start.
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth) — the app must hold a Microsoft Graph token with `FileStorageContainer.Selected`.
- Capability: `azure-subscription` — required to create the Azure AI multi-service or Document Intelligence resource.
- An Azure AI Document Intelligence (or multi-service) resource. Create one with [Create a multi-service resource for Azure AI services](https://learn.microsoft.com/azure/ai-services/multi-service-resource?tabs=windows&pivots=azportal) or [Get started with Document Intelligence](https://learn.microsoft.com/azure/ai-services/document-intelligence/quickstarts/get-started-sdks-rest-api). After creation you have an endpoint and a key.

## Inputs

| Placeholder | Type | Where it comes from |
|---|---|---|
| `{drive-id}` | string | The container's drive `id` from [`getContainerDrive`](/sharepoint/dev/embedded/development/tutorials/using-webhooks) |
| `{item-id}` | string | The changed `driveItem` `id` from the delta feed |
| `{parent-id}` | string | `parentReference.id` of the changed item |
| `{filename}` | string | Generated as `<source-name>-extracted-fields.json` |
| `{delta-token}` | string | The `token` query value carried forward from the previous delta response (`@odata.nextLink` / `@odata.deltaLink`) |
| `{dac-resource-endpoint}` | string | Azure portal → your Document Intelligence resource → Keys and Endpoint (`DAC_RESOURCE_ENDPOINT`) |
| `{dac-resource-key}` | string | Azure portal → your Document Intelligence resource → Keys and Endpoint (`DAC_RESOURCE_KEY`) |

## Steps

### Step 1 — Read drive changes from the delta feed {#step-1}

When a webhook notification arrives, enumerate the items that changed since your last delta token so you process only new or updated files. In `GraphProvider.ts`, implement `getDriveChanges` to page through the delta feed and persist the latest token per drive.

```typescript
public static async getDriveChanges(driveId: string): Promise<any[]> {
  let changedItems: any[] = [];
  const driveDeltaBasePath: string = `/drives/${driveId}/items/root/delta`;
  let driveDeltaTokenParams: string = "";
  let hasMoreChanges: boolean = true;
  try {
    do {
      if (this.changeTokens.has(driveId)) {
        driveDeltaTokenParams = `?token=${this.changeTokens.get(driveId)}`;
      }
      const response = await this.graphClient.api(driveDeltaBasePath + driveDeltaTokenParams).get();
      changedItems.push(...response.value);
      if (response['@odata.nextLink']) {
        const token = new URL(response['@odata.nextLink']).searchParams.get('token');
        this.changeTokens.set(driveId, token);
      } else {
        hasMoreChanges = false;
        const token = new URL(response['@odata.deltaLink']).searchParams.get('token');
        this.changeTokens.set(driveId, token);
      }
    } while (hasMoreChanges);
  } catch (err) {
    console.log(err);
  }
  return changedItems;
}
```

The underlying call is `GET /drives/{drive-id}/items/root/delta?token={delta-token}`.

**Expected response:** `200 OK`. Each page carries a `value` array of changed `driveItem` resources plus either an `@odata.nextLink` (more pages) or an `@odata.deltaLink` (caught up). Persist the `token` from whichever link is present.

**On failure:**
- `404 Not Found` (`itemNotFound`) → `{drive-id}` is wrong, or the container was deleted. Re-fetch the drive id with `GET /storage/fileStorage/containers/{container-id}/drive`.
- `410 Gone` (`resyncRequired`) → the stored `{delta-token}` expired. Drop the token and re-run the loop from `.../root/delta` to do a full resync.

### Step 2 — Fetch each changed item's metadata {#step-2}

You need the item's name (to test the extension) and its `@microsoft.graph.downloadUrl` (to stream the content). In `GraphProvider.ts`, add `getDriveItem`.

```typescript
public static async getDriveItem(driveId: string, itemId: string): Promise<any> {
  return await this.graphClient.api(`/drives/${driveId}/items/${itemId}`).get();
}
```

The underlying call is `GET /drives/{drive-id}/items/{item-id}`.

**Expected response:** `200 OK` with a `driveItem` that includes `name`, `parentReference.id`, and a short-lived `@microsoft.graph.downloadUrl`.

**On failure:**
- `404 Not Found` → the item was deleted between the delta read and this fetch. Skip it and continue.
- `403 Forbidden` (`accessDenied`) → the app token lacks `FileStorageContainer.Selected` on this container. Re-acquire the token. See [Authentication and authorization](/sharepoint/dev/embedded/development/auth).

### Step 3 — Configure the Document Intelligence client {#step-3}

Store the Azure resource credentials so the analyzer can call Document Intelligence. Create `ReceiptProcessor.ts` and add the `dac` client, reading the endpoint and key from environment variables.

```typescript
private static dac = new DocumentAnalysisClient(
  `${process.env["DAC_RESOURCE_ENDPOINT"]}`,
  new AzureKeyCredential(`${process.env["DAC_RESOURCE_KEY"]}`)
);
```

Set `DAC_RESOURCE_ENDPOINT` to `{dac-resource-endpoint}` and `DAC_RESOURCE_KEY` to `{dac-resource-key}`.

> [!WARNING]
> `{dac-resource-key}` is a secret. Keep it in an environment variable or a secret store; do not commit it to source control. Rotate it in the Azure portal if it leaks.

This step has no Graph call. Verify it by confirming both environment variables resolve at startup (the constructor throws if the endpoint is empty).

**On failure:**
- Constructor throws `Endpoint URL is malformed` → `DAC_RESOURCE_ENDPOINT` is empty or not a valid URL. Re-copy the endpoint from the Azure portal Keys and Endpoint blade.

### Step 4 — Download the file content as a stream {#step-4}

Stream the file bytes from the container so you can pass them straight to the analyzer without buffering the whole file. In `ReceiptProcessor.ts`, add `getDriveItemStream`, authorizing the request with the Graph access token.

```typescript
private static async getDriveItemStream(url: string): Promise<Readable> {
  const token = GraphProvider.graphAccessToken;
  const config: AxiosRequestConfig = {
    method: "get",
    url: url,
    headers: {
      "Authorization": `Bearer ${token}`
    },
    responseType: 'stream'
  };
  const response = await axios.get<Readable>(url, config);
  return response.data;
}
```

The `url` is the item's `@microsoft.graph.downloadUrl`; this is equivalent to `GET /drives/{drive-id}/items/{item-id}/content`.

**Expected response:** `200 OK` with the raw file bytes as a readable stream.

**On failure:**
- `401 Unauthorized` → the `@microsoft.graph.downloadUrl` is pre-authorized and short-lived; if it expired, re-fetch the item ([#step-2](#step-2)) to get a fresh URL.
- `403 Forbidden` → token missing `FileStorageContainer.Selected`. Re-acquire it.

### Step 5 — Extract invoice fields {#step-5}

Run the `prebuilt-invoice` model over the stream and strip bulky positional fields you do not need to store. In `ReceiptProcessor.ts`, add `analyzeReceiptStream` and `removeUnwantedFields`.

```typescript
private static async analyzeReceiptStream(stream: Readable): Promise<any> {
  const poller = await this.dac.beginAnalyzeDocument("prebuilt-invoice", stream, {
    onProgress: ({ status }) => {
      console.log(`status: ${status}`);
    },
  });

  const {
    documents: [result] = [],
  } = await poller.pollUntilDone();

  const fields = result?.fields;
  this.removeUnwantedFields(fields);
  return fields;
}

private static removeUnwantedFields(fields: any) {
  for (const prop in fields) {
    if (prop === 'boundingRegions' || prop === 'content' || prop === 'spans') {
      delete fields[prop];
    }
    if (typeof fields[prop] === 'object') {
      this.removeUnwantedFields(fields[prop]);
    }
  }
}
```

> [!NOTE]
> `prebuilt-invoice` is one of several prebuilt models. Swap the first argument of `beginAnalyzeDocument` to use a different model (for example `prebuilt-receipt` or a custom model id).

**Expected response:** the long-running analyze operation reaches `succeeded` and returns a `documents` array; `documents[0].fields` holds the extracted invoice fields.

**On failure:**
- `InvalidRequest` / `InvalidContent` → the file is not a supported format or is corrupt. Confirm the extension is JPEG, JPG, PNG, BMP, TIFF, or PDF before calling.
- `401` / `403` from the Document Intelligence endpoint → `{dac-resource-key}` is wrong or revoked. Re-copy the key from the Azure portal.
- `429 Too Many Requests` → the Document Intelligence resource is throttling. Honor `Retry-After` and back off.

### Step 6 — Write the extracted fields back to the container {#step-6}

Persist the result as a JSON file in the same folder as the source file so it travels with the document. In `GraphProvider.ts`, add `addDriveItem`.

```typescript
public static async addDriveItem(driveId: string, parentId: any, fileName: string, receiptString: string) {
  await this.graphClient.api(`/drives/${driveId}/items/${parentId}:/${fileName}:/content`).put(receiptString);
}
```

The underlying call is `PUT /drives/{drive-id}/items/{parent-id}:/{filename}:/content`.

```http
PUT https://graph.microsoft.com/v1.0/drives/{drive-id}/items/{parent-id}:/{filename}:/content
Authorization: Bearer {token}
Content-Type: application/json

{ "...extracted invoice fields..." }
```

**Expected response:** `201 Created` (or `200 OK` if the JSON file already existed) with the new `driveItem`.

**On failure:**
- `403 Forbidden` (`accessDenied`) → token lacks write access (`FileStorageContainer.Selected`). Re-acquire the token.
- `423 Locked` → the container is locked read-only. Unlock it before writing. See [Limits and calling patterns](/sharepoint/dev/embedded/development/limits-calling).
- `507 Insufficient Storage` → the container or container type quota is exhausted.

### Step 7 — Drive the pipeline from a change notification {#step-7}

Tie the steps together so each changed, supported file is downloaded, analyzed, and written back. In `ReceiptProcessor.ts`, add `processDrive`.

```typescript
export abstract class ReceiptProcessor {

  public static async processDrive(driveId: string): Promise<void> {
    const changedItems = await GraphProvider.getDriveChanges(driveId);
    for (const changedItem of changedItems) {
      try {
        const item = await GraphProvider.getDriveItem(driveId, changedItem.id);
        const extension = this.getFileExtension(item.name);
        if (this.SUPPORTED_FILE_EXTENSIONS.includes(extension.toLowerCase())) {
          const url = item["@microsoft.graph.downloadUrl"];
          const receipt = await this.analyzeReceiptStream(await this.getDriveItemStream(url));
          const receiptString = JSON.stringify(receipt, null, 2);
          const fileName = this.getFileDisplayName(item.name) + "-extracted-fields.json";
          const parentId = item.parentReference.id;
          await GraphProvider.addDriveItem(driveId, parentId, fileName, receiptString);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}
```

Restart the app, re-establish the ngrok tunnel, and recreate the delta-change subscription on the container (per [Using webhooks](/sharepoint/dev/embedded/development/tutorials/using-webhooks)).

**Expected response:** the console logs each changed file name; for each supported file a `<name>-extracted-fields.json` item appears in the same folder.

**On failure:**
- No items logged after uploading a file → the webhook subscription expired or the tunnel is down. Recreate both, then upload again.

## Verify {#verify}

Upload a supported invoice file (JPEG, JPG, PNG, BMP, TIFF, or PDF) to the container, wait for the notification to process, then list the folder's children.

```http
GET https://graph.microsoft.com/v1.0/drives/{drive-id}/items/{parent-id}/children
Authorization: Bearer {token}
```

Returns `200 OK` and the `value` array contains a `<name>-extracted-fields.json` item whose name matches the uploaded file. Download it to confirm it holds the extracted invoice fields.

## Troubleshooting {#troubleshooting}

| Symptom | Likely cause | Fix |
|---|---|---|
| `410 Gone` (`resyncRequired`) on delta | Stored `{delta-token}` expired | Discard the token and call `.../root/delta` with no token to resync |
| No JSON file produced for an uploaded file | Extension not in the supported set | Upload JPEG, JPG, PNG, BMP, TIFF, or PDF only |
| `401`/`403` from Document Intelligence | Wrong or revoked `{dac-resource-key}` or `{dac-resource-endpoint}` | Re-copy both from the Azure portal Keys and Endpoint blade |
| `401 Unauthorized` on download stream | Pre-authorized `@microsoft.graph.downloadUrl` expired | Re-fetch the item ([#step-2](#step-2)) for a fresh URL |
| `423 Locked` on write-back | Container is locked read-only | Unlock the container, then retry |
| `429 Too Many Requests` | Graph or Document Intelligence throttling | Honor `Retry-After`; back off exponentially. See [Limits](/sharepoint/dev/embedded/development/limits-calling) |

## Next steps

- [Using metadata on containers](/sharepoint/dev/embedded/development/tutorials/metadata) — promote extracted fields into queryable container columns.
- [AI knowledge source in Microsoft Foundry](/sharepoint/dev/embedded/development/declarative-agent/sharepoint-embedded-knowledge-source) — ground an agent on the processed content.

## Related

- [Using webhooks](/sharepoint/dev/embedded/development/tutorials/using-webhooks)
- [Limits and calling patterns](/sharepoint/dev/embedded/development/limits-calling)
- [Track changes for a drive (delta)](https://learn.microsoft.com/graph/api/driveitem-delta)
- [Upload or replace the contents of a driveItem](https://learn.microsoft.com/graph/api/driveitem-put-content)
