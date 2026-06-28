---
title: Configure the launch mode for Office files in SharePoint Embedded
description: Force view or edit mode for Office files and open them directly in Office desktop clients from a SharePoint Embedded container.
ms.topic: how-to
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
agent:
  schema_version: 1
  task_type: how-to
  outcome: A reader-supplied Office file in a SharePoint Embedded container opens in a controlled launch mode — forced view, forced edit, or directly in an Office desktop client.
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
    - id: getContainer
      method: GET
      path: /storage/fileStorage/containers/{containerId}
      permissions: [FileStorageContainer.Selected]
    - id: getContainerDrive
      method: GET
      path: /storage/fileStorage/containers/{containerId}/drive
      permissions: [FileStorageContainer.Selected]
    - id: listDriveItems
      method: GET
      path: /drives/{driveId}/items/{itemId}/children
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
    - name: launch-mode
      type: enum
      source: user-supplied
    - name: file-name
      type: string
      source: prior-step
    - name: folder-web-url
      type: string
      source: prior-step
  outputs:
    - name: modified-web-url
      type: uri
      verify: opening the URL renders the file in the requested action mode
  next_steps:
    - uri: /sharepoint/dev/embedded/development/tutorials/using-file-preview
      when: always
    - uri: /sharepoint/dev/embedded/development/content-experiences/office-experience
      when: always
  related:
    - uri: /sharepoint/dev/embedded/development/content-experiences/office-experience
    - uri: /sharepoint/dev/embedded/development/tutorials/using-file-preview
  stability: ga
  last_validated: proposed
---

# Configure the launch mode for Office files in SharePoint Embedded
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

By the end of this how-to, you have a launch URL that opens an Office file from a SharePoint Embedded container in the mode you choose: forced read-only view, forced edit, or directly in an Office desktop client. The web rendering uses the file's `webUrl` (a Web Application Open Platform Interface, or WOPI, link); the desktop launch uses an Office URI scheme.

## Prerequisites

- [Container types](/sharepoint/dev/embedded/getting-started/containertypes) — you have an active container holding at least one Office file.
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth) — you can acquire a bearer token with `FileStorageContainer.Selected`.
- Capability: `container-type-owner` — your app owns the container type for the target container.

## Inputs

| Placeholder | Type | Where it comes from |
|---|---|---|
| `{token}` | string | A bearer token with `FileStorageContainer.Selected` ([auth](/sharepoint/dev/embedded/development/auth)) |
| `{container-id}` | string | The container holding the file (a prior step) |
| `{drive-id}` | string | The container's drive `id` (from [Step 1](#step-1)) |
| `{item-id}` | string | The `driveItem` id of the target file (from [Step 2](#step-2)) |
| `{launch-mode}` | enum | One of `view`, `edit`, or `desktop` (user-supplied) |
| `{file-name}` | string | The file name, for example `MyDocument.docx` (from [Step 2](#step-2)) |
| `{folder-web-url}` | string | The `webUrl` of the parent folder (from [Step 2](#step-2)) |

## Steps

### Step 1 — Resolve the container's drive id {#step-1}

WOPI and drive-item operations are addressed by `driveId`. Read the container's drive to get it.

```http
GET https://graph.microsoft.com/v1.0/storage/fileStorage/containers/{container-id}/drive
Authorization: Bearer {token}
```

**Expected response:** `200 OK` with a `drive` resource. Record its `id` as `{drive-id}`.

**On failure:**
- `404 Not Found` (`itemNotFound`) → the container is inactive or `{container-id}` is wrong. Activate the container, then retry.
- `403 Forbidden` (`accessDenied`) → the token lacks `FileStorageContainer.Selected` or the app has no permission on this container.

### Step 2 — Read the file's webUrl and parent folder {#step-2}

You need the file's `webUrl` for web modes and the parent folder `webUrl` plus the file name for desktop mode. List the children of the target folder and select those fields.

```http
GET https://graph.microsoft.com/v1.0/drives/{drive-id}/root/children?$select=id,name,webUrl,parentReference,folder,file
Authorization: Bearer {token}
```

**Expected response:** `200 OK` with a `value` array. For the target file, record `id` as `{item-id}`, `name` as `{file-name}`, and `webUrl`. Read the parent folder's `webUrl` as `{folder-web-url}` (the folder's own `driveItem`).

**On failure:**
- `400 Bad Request` (`invalidRequest`) → malformed `$select`. Remove unsupported fields and retry.
- `404 Not Found` → `{drive-id}` is wrong. Re-run [Step 1](#step-1).

> [!NOTE]
> For an Office document, the `webUrl` returned by Graph is a WOPI link of the form `https://host/:w:r/contentstorage/.../doc2.aspx?sourcedoc={guid}&file={file-name}&action=default&mobileredirect=true`. The `action=default` segment determines the launch mode.

### Step 3 — Force a web launch mode (view or edit) {#step-3}

The default WOPI link opens with `action=default`. To force read-only view or forced edit, rewrite the `action` query parameter on the `webUrl`. This C# example parses the existing query and sets `action` to `view` (use `edit` for the editor).

```csharp
string webUrl = "{web-url}"; // the WOPI webUrl from Step 2

System.UriBuilder builder = new System.UriBuilder(webUrl);
var queryDictionary = System.Web.HttpUtility.ParseQueryString(builder.Query);
queryDictionary["action"] = "view";   // set to "edit" to force the editor
builder.Query = queryDictionary.ToString();
string modifiedWebUrl = builder.ToString();
```

**Expected response:** No service call. `modifiedWebUrl` is a string carrying `action=view` (or `action=edit`); opening it renders the file in that mode.

**On failure:**
- Empty or unchanged `action` → the source `webUrl` was not a WOPI link (the file type is not WOPI-renderable). Fall back to download or [file preview](/sharepoint/dev/embedded/development/tutorials/using-file-preview).
- Malformed URL exception → `{web-url}` was truncated. Re-read it from [Step 2](#step-2).

> [!TIP]
> For the full set of WOPI `action` values, see [WOPI Discovery — WOPI Actions](https://learn.microsoft.com/microsoft-365/cloud-storage-partner-program/online/discovery#wopi-actions).

### Step 4 — Build a desktop-client launch URI {#step-4}

To open the file directly in an Office desktop client, build an Office URI scheme instead of a WOPI link. The scheme format is `<scheme-name>:<command-name>|<descriptor>|<command-argument>`.

Choose the scheme and command for `{launch-mode}`:

| Scheme name | App | Command name | Meaning |
|---|---|---|---|
| `ms-word` | Word | `ofv` | Open File View |
| `ms-excel` | Excel | `ofe` | Open File Edit |
| `ms-powerpoint` | PowerPoint | `nft` | New From Template |

Because the document `webUrl` points to Office Online, build the file URL in two parts — the parent folder `webUrl`, then the file name — and assemble the scheme:

```text
ms-word:ofe|u|{folder-web-url}/{file-name}
```

This resolves to a launch URI such as:

```text
ms-word:ofe|u|https://contoso.sharepoint.com/contentstorage/CSP_1234765465/Document%20Library/MyDocument.docx
```

**Expected response:** No service call. The string is a valid Office URI; opening it in a blank window or new tab launches the desktop client at the requested file.

**On failure:**
- Nothing launches → the URI was opened in the same tab. Open it in a blank window or new tab.
- Office prompts repeatedly for sign-in → the user lacks permission on the container. Grant the user a role with [Add container permission](/sharepoint/dev/embedded/development/sharing-and-perm).

> [!NOTE]
> The `nft` (New From Template) command uses a `|s|{save-location}` descriptor and may not behave as expected, because the container permission schema differs from SharePoint sites. For the full grammar, see [Office URI Schemes](https://learn.microsoft.com/office/client-developer/office-uri-schemes).

## Verify {#verify}

Open `modifiedWebUrl` (from [Step 3](#step-3)) in a blank browser tab. The file renders, and the mode matches `{launch-mode}`:

- `action=view` → read-only; no editing surface.
- `action=edit` → the editor toolbar is present and the document is writable.

For the desktop URI (from [Step 4](#step-4)), open it in a new tab; the corresponding Office desktop app launches with the file loaded.

## Troubleshooting {#troubleshooting}

| Symptom | Likely cause | Fix |
|---|---|---|
| `401 Unauthorized` on Graph calls | Token missing/expired or wrong scope | Re-acquire a token with `FileStorageContainer.Selected` (see **Inputs**) |
| `403 Forbidden` | App or user has no permission on the container | Grant a role via [Sharing and permissions](/sharepoint/dev/embedded/development/sharing-and-perm) |
| `webUrl` has no `action` parameter | File type is not WOPI-renderable | Use [file preview](/sharepoint/dev/embedded/development/tutorials/using-file-preview) or download instead |
| Forced mode is ignored | The WOPI link was opened in the same tab/frame | Open the URI in a blank window or new tab |
| Desktop URI does nothing | Office desktop client not installed, or URI opened in same tab | Install the client; open the URI in a new tab |
| `429 Too Many Requests` | Throttled | Honor `Retry-After`; back off exponentially. See [Limits](/sharepoint/dev/embedded/development/limits-calling) |

## Next steps

- [File preview in an iFrame](/sharepoint/dev/embedded/development/tutorials/using-file-preview)
- [Office experiences](/sharepoint/dev/embedded/development/content-experiences/office-experience)

## Related

- [Office experiences](/sharepoint/dev/embedded/development/content-experiences/office-experience)
- [WOPI Discovery — WOPI Actions](https://learn.microsoft.com/microsoft-365/cloud-storage-partner-program/online/discovery#wopi-actions)
- [Office URI Schemes](https://learn.microsoft.com/office/client-developer/office-uri-schemes)
- [API surface index](/sharepoint/dev/embedded/api-surface.json)
