---
title: Embed a SharePoint Embedded file preview in an iFrame
description: Get a preview URL for a file in a SharePoint Embedded container with Microsoft Graph and render it in an iFrame, including PDF previewer options.
ms.topic: how-to
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
agent:
  schema_version: 1
  task_type: how-to
  outcome: A short-lived preview URL for a file in a SharePoint Embedded container is obtained from Microsoft Graph and rendered inside an iFrame in the reader's application.
  estimated_minutes: 20
  difficulty: intermediate
  roles: [app-developer]
  prerequisites:
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
      kind: how-to
    - uri: /sharepoint/dev/embedded/development/auth
      kind: concept
    - capability: container-type-owner
  api_surface:
    # previewDriveItem is a standard Graph driveItem operation, not yet curated in api-surface.json.
    # Validate against https://learn.microsoft.com/graph/api/driveitem-preview before publishing.
    - id: previewDriveItem
      method: POST
      path: /drives/{driveId}/items/{itemId}/preview
      permissions: [FileStorageContainer.Selected]
      stability_note: not-in-api-surface.json — standard Graph driveItem:preview
    - id: getContainerDrive
      method: GET
      path: /storage/fileStorage/containers/{containerId}/drive
      permissions: [FileStorageContainer.Selected]
  inputs:
    - name: drive-id
      type: string
      source: prior-step
    - name: item-id
      type: string
      source: prior-step
    - name: token
      type: string
      source: prior-step
    - name: file-name
      type: string
      source: prior-step
  outputs:
    - name: preview-url
      type: uri
      verify: the URL loads the file render inside an iFrame
  next_steps:
    - uri: /sharepoint/dev/embedded/development/tutorials/launch-experience
      when: always
    - uri: /sharepoint/dev/embedded/development/content-experiences/office-experience
      when: always
  related:
    - uri: /sharepoint/dev/embedded/development/tutorials/launch-experience
    - uri: /sharepoint/dev/embedded/development/content-experiences/office-experience
  stability: ga
  last_validated: proposed
---

# Embed a SharePoint Embedded file preview in an iFrame
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

By the end of this how-to, you have a short-lived preview URL for a file in a SharePoint Embedded container and render it inside an iFrame in your application — without the user needing a dedicated application. A wide range of file types is supported, including PDF, JPG, and MP4. The flow is two parts: call the Graph `driveItem` preview endpoint to obtain a `getUrl`, then point an iFrame at that URL.

## Prerequisites

- [Container types](/sharepoint/dev/embedded/getting-started/containertypes) — you have an active container holding the file to preview.
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth) — you can acquire a bearer token with `FileStorageContainer.Selected`.
- Capability: `container-type-owner` — your app owns the container type for the target container.

## Inputs

| Placeholder | Type | Where it comes from |
|---|---|---|
| `{token}` | string | A bearer token with `FileStorageContainer.Selected` ([auth](/sharepoint/dev/embedded/development/auth)) |
| `{container-id}` | string | The container holding the file (a prior step) |
| `{drive-id}` | string | The container's drive `id` (from [Step 1](#step-1)); starts with `b!` |
| `{item-id}` | string | The `driveItem` id of the target file (user-supplied / prior step) |
| `{file-name}` | string | The file name shown in the preview page (a prior step) |

## Steps

### Step 1 — Resolve the container's drive id {#step-1}

The preview endpoint is addressed by `driveId`. Read the container's drive to get it; the value starts with `b!`.

```http
GET https://graph.microsoft.com/v1.0/storage/fileStorage/containers/{container-id}/drive
Authorization: Bearer {token}
```

**Expected response:** `200 OK` with a `drive` resource. Record its `id` as `{drive-id}`.

**On failure:**
- `404 Not Found` (`itemNotFound`) → the container is inactive or `{container-id}` is wrong. Activate the container, then retry.
- `403 Forbidden` (`accessDenied`) → the token lacks `FileStorageContainer.Selected`.

### Step 2 — Get the preview URL from Graph {#step-2}

Call the `driveItem` preview endpoint to obtain an embeddable URL for the file. The response carries the URL in `getUrl`.

```http
POST https://graph.microsoft.com/v1.0/drives/{drive-id}/items/{item-id}/preview
Authorization: Bearer {token}
Content-Type: application/json

{}
```

**Expected response:** `200 OK` with a body like:

```json
{
  "getUrl": "https://www.onedrive.com/embed?foo=bar&bar=baz",
  "postParameters": "param1=value&param2=another%20value",
  "postUrl": "https://www.onedrive.com/embed_by_post"
}
```

Use the `getUrl` value as `{preview-url}`.

**On failure:**
- `404 Not Found` → `{drive-id}` or `{item-id}` is wrong. Re-run [Step 1](#step-1) and confirm the item id.
- `403 Forbidden` → the app or user has no permission on the container. Grant access via [Sharing and permissions](/sharepoint/dev/embedded/development/sharing-and-perm).

> [!CAUTION]
> Today `getUrl` carries an encrypted token usable only with your application, so the iFrame loads without an extra auth header. This may change; you may later be required to add an `Authorization` header as with other Graph requests.

If you use the Microsoft Graph C# SDK, the equivalent call is:

```csharp
ItemPreviewInfo preview = await graphServiceClient
    .Drives[driveId]
    .Items[itemId]
    .Preview()
    .Request()
    .PostAsync();
```

> [!TIP]
> To remove the banner at the top of the preview, append `nb=true` to the URL, for example `https://contoso.sharepoint.com/restOfUrl/embed.aspx?param1=value&nb=true`.

### Step 3 — Render the preview in an iFrame {#step-3}

Serve a page in your application that embeds `{preview-url}` in an `iframe`.

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>Preview</h2>
    <p>Preview of {file-name}:</p>
    <iframe src="{preview-url}" height="200" width="300" id="preview" title="File preview"></iframe>
  </body>
</html>
```

**Expected response:** No service call. The browser loads the rendered file inside the iFrame.

**On failure:**
- Blank iFrame or `X-Frame-Options` error → `{preview-url}` expired or was truncated. Re-run [Step 2](#step-2) to get a fresh URL.
- The page hangs → the file type is not previewable. See [supported file types](https://support.microsoft.com/office/file-types-supported-for-previewing-files-in-onedrive-sharepoint-and-teams-e054cd0f-8ef2-4ccb-937e-26e37419c5e4).

### Step 4 — Load the preview dynamically without a CORS error {#step-4}

Calling the Graph preview endpoint directly from browser script triggers a CORS error. Route it through a server endpoint in your application that returns the URL, then `fetch` it client-side.

Server side (C#), obtain the preview URL and suppress the banner:

```csharp
[HttpGet]
[AuthorizeForScopes(Scopes = new string[] { "FileStorageContainer.Selected" })]
public async Task<ActionResult<string>> GetPreviewUrl(string driveId, string itemId)
{
    // Acquire a token, then call the preview endpoint (see Step 2).
    return url + "&nb=true"; // nb=true suppresses the banner
}
```

Client side (JavaScript), fetch the URL and inject it into the iFrame:

```javascript
async function preview(driveId, itemId) {
  const url = `/GetPreviewUrl?driveId=${driveId}&itemId=${itemId}`;
  const response = await fetch(url, { credentials: 'include' })
    .then(response => response.text());

  document.getElementById('preview').src = response + "&nb=true"; // nb=true suppresses the banner
}
```

**Expected response:** The server returns `200 OK` with the preview URL string; the iFrame `src` updates and renders the file.

**On failure:**
- `401 Unauthorized` from your endpoint → the server could not acquire a token. Confirm the app registration and consent for `FileStorageContainer.Selected`.
- CORS error persists → the browser is still calling Graph directly. Route all preview calls through your server endpoint.

## Verify {#verify}

Load the page from [Step 3](#step-3) (or trigger `preview(driveId, itemId)` from [Step 4](#step-4)) in a browser. The iFrame renders the file. For a PDF, the SharePoint Embedded PDF previewer loads.

> [!NOTE]
> The PDF previewer accepts options through a JSON-encoded `embed` query string appended to the file's `webUrl` (from [driveItem GET](https://learn.microsoft.com/graph/api/driveitem-get), for example `GET /drives/{drive-id}/items/{item-id}?$select=webUrl`): `{web-url}?&embed={"mpp":true}` enables the print icon and Ctrl+P; `{web-url}?&embed={"mpsn":true}` shows sticky-note content when present. Combine options in one object.

## Troubleshooting {#troubleshooting}

| Symptom | Likely cause | Fix |
|---|---|---|
| `401 Unauthorized` | Token missing/expired or wrong scope | Re-acquire a token with `FileStorageContainer.Selected` (see **Inputs**) |
| `403 Forbidden` | App or user has no permission on the container | Grant a role via [Sharing and permissions](/sharepoint/dev/embedded/development/sharing-and-perm) |
| CORS error in browser console | Calling Graph preview directly from script | Route the call through a server endpoint ([Step 4](#step-4)) |
| iFrame blank / `X-Frame-Options` error | `getUrl` expired or truncated | Re-run [Step 2](#step-2) for a fresh `getUrl` |
| Banner still shown | `nb=true` not appended | Append `nb=true` to the preview URL |
| `429 Too Many Requests` | Throttled | Honor `Retry-After`; back off exponentially. See [Limits](/sharepoint/dev/embedded/development/limits-calling) |

## Next steps

- [Configure the launch mode for Office files](/sharepoint/dev/embedded/development/tutorials/launch-experience)
- [Office experiences](/sharepoint/dev/embedded/development/content-experiences/office-experience)

## Related

- [Configure the launch mode for Office files](/sharepoint/dev/embedded/development/tutorials/launch-experience)
- [Microsoft Graph driveItem: preview](https://learn.microsoft.com/graph/api/driveitem-preview)
- [API surface index](/sharepoint/dev/embedded/api-surface.json)
