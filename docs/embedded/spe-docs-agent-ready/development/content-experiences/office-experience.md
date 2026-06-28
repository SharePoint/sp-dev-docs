---
title: Open and edit Office documents stored in SharePoint Embedded
description: Launch, co-author, version, and share Office files held in SharePoint Embedded containers from your application.
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
  outcome: An end user opens an Office document stored in a SharePoint Embedded container for view or edit, co-authors in real time, restores a prior version, and shares it with the correct access level.
  estimated_minutes: 20
  difficulty: intermediate
  roles: [app-developer, end-user]
  prerequisites:
    - uri: /sharepoint/dev/embedded/overview
      kind: concept
    - uri: /sharepoint/dev/embedded/development/content-experiences/user-experiences-overview
      kind: concept
    - uri: /sharepoint/dev/embedded/development/auth
      kind: how-to
    - capability: container-type-owner
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
  inputs:
    - name: container-id
      type: string
      source: prior-step
    - name: drive-id
      type: string
      source: prior-step
    - name: item-id
      type: string
      source: prior-step
  outputs:
    - name: web-url
      type: uri
      verify: The driveItem webUrl opens the document in Office for the web for view or edit.
  next_steps:
    - uri: /sharepoint/dev/embedded/development/tutorials/launch-experience
      when: always
    - uri: /sharepoint/dev/embedded/development/content-experiences/search-content
      when: needs-search
  related:
    - uri: /sharepoint/dev/embedded/development/content-experiences/user-experiences-overview
    - uri: /sharepoint/dev/embedded/development/sharing-and-perm
    - uri: /sharepoint/dev/embedded/development/auth
  stability: ga
  last_validated: proposed
---

# Open and edit Office documents stored in SharePoint Embedded
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

At the end of this how-to you can open a Word, Excel, or PowerPoint file stored in a SharePoint Embedded container from your application, hand the user to Office for the web or the desktop Office app for view or edit, let multiple users co-author in real time with AutoSave, restore a prior version, and share the file at a defined access level. Office file experiences on SharePoint Embedded behave the same as on the Microsoft 365 platform: AutoSave and versioning are enabled automatically for every Word, Excel, and PowerPoint file in a container.

> [!NOTE]
> Documents in an **archived** container cannot be viewed or accessed. Your application must detect the archived container state, show an appropriate error, and guide the user to reactivate the container before retrying.

## Prerequisites

- [SharePoint Embedded overview](/sharepoint/dev/embedded/overview) — understand containers, container types, and `driveItem` content.
- [Content experiences overview](/sharepoint/dev/embedded/development/content-experiences/user-experiences-overview) — how launch, preview, download, and discoverability fit together.
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth) — acquire a token with `FileStorageContainer.Selected`. Co-author and share require **delegated** (on-behalf-of-user) tokens.
- Capability: `container-type-owner` — the container type that holds the file is registered and consented in the consuming tenant.
- For [@mention](#step-3) to deliver, each mentioned user must [have a Microsoft 365 license assigned](/sharepoint/dev/embedded/development/auth#mention-users-in-office-documents).

## Inputs

| Placeholder | Type | Where it comes from |
|---|---|---|
| `{container-id}` | string | A prior step (the container holding the document) |
| `{drive-id}` | string | [Step 1](#step-1) — `drive.id` from `getContainerDrive` |
| `{item-id}` | string | [Step 2](#step-2) — `id` of the `driveItem` to open |

## Steps

### Step 1 — Resolve the container's drive {#step-1}
Every file in a container lives under the container's single drive. Get the drive to obtain the `{drive-id}` used by the file operations.

```http
GET https://graph.microsoft.com/v1.0/storage/fileStorage/containers/{container-id}/drive
Authorization: Bearer {token}
```

**Expected response:** `200 OK` with a `drive` resource whose `id` is your `{drive-id}`.

**On failure:**
- `404 Not Found` → the container is archived or soft-deleted. Reactivate it, then retry. See the archived-container note above.
- `403 Forbidden` (`accessDenied`) → the token lacks `FileStorageContainer.Selected`, or the app is not permitted on this container type.

### Step 2 — List items and select the Office document {#step-2}
List the children of the drive root (or a folder) to find the `driveItem` to open. The `webUrl` on the item is the Office launch URL.

```http
GET https://graph.microsoft.com/v1.0/drives/{drive-id}/items/root/children
Authorization: Bearer {token}
```

**Expected response:** `200 OK` with a collection of `driveItem` objects. Each Office file carries a `webUrl` that opens it in Office for the web.

**On failure:**
- `404 Not Found` → wrong `{drive-id}`; re-run [Step 1](#step-1).
- `403 Forbidden` → the signed-in user has no permission on the container.

### Step 3 — Open, co-author, and @mention {#step-3}
Open the document by directing the user to the item's `webUrl`. Office for the web (or, when chosen, the desktop Office app) renders the file; AutoSave persists every change. To open in a specific mode (view for read-only, edit for editing), configure the launch URL as described in [Set up Office launch experience](/sharepoint/dev/embedded/development/tutorials/launch-experience).

When two or more users open the same document, Office shows a presence indicator at each editor's location and streams changes live; use `@mention` in a comment to tag a peer for feedback.

```manual:
  description: Open the document for the signed-in user and co-author in Office for the web.
  ui_path: Your application UI → open the driveItem.webUrl returned in Step 2 (append edit/view launch parameters per the Launch experience tutorial)
  api_equivalent: none — Office co-authoring is a client experience reached via driveItem.webUrl; there is no Graph "co-author" operation. See /sharepoint/dev/embedded/development/tutorials/launch-experience
  verify:
    method: GET
    path: /drives/{drive-id}/items/{item-id}
```

**Expected response:** The `webUrl` opens the file in Office for the web; presence indicators appear for concurrent editors and AutoSave is on.

**On failure:**
- Document opens read-only when edit was intended → the delegated token or the user's container permission grants only `reader`; grant `writer` or higher. See [Sharing and permissions](/sharepoint/dev/embedded/development/sharing-and-perm).
- `@mention` is not delivered → the mentioned user has no Microsoft 365 license, or is a guest/external user. Mentions are restricted to people inside the consuming tenant's organization and exclude guests and users from other tenants.

### Step 4 — View or restore a previous version {#step-4}
Versioning is automatic for Word, Excel, and PowerPoint files. Users compare versions and restore a chosen version when a mistake was made, a previous version is preferred, or unwanted co-authoring changes need to be reverted. Version history is reached from the open document in Office.

```manual:
  description: View and restore a prior version of the Office document.
  ui_path: Open the document via driveItem.webUrl → File → Info → Version history → select a version → Restore
  api_equivalent: none — restore from Office version history is a client experience; no SPE Graph "restore version" operation is published in api-surface.json
  verify:
    method: GET
    path: /drives/{drive-id}/items/{item-id}
```

**Expected response:** The selected version becomes the current version; `lastModifiedDateTime` on the `driveItem` updates.

**On failure:**
- Version history unavailable → the container is archived (reactivate it) or the file is not a versioned Office file type.

### Step 5 — Share the document at the correct access level {#step-5}
Users share a document by sending an email invite, by creating a shareable link, or by tagging a peer with `@mention`. Choose the sharing setting that matches the intended audience.

| If you want to… | Sharing setting |
|---|---|
| Allow anyone who receives the link to access the file | **Anyone** — access for anyone who receives the link, directly or forwarded, including people outside your organization. |
| Allow anyone in your organization to access the file | **People in &lt;Your Organization&gt;** — anyone in your organization who has the link. |
| Limit access to named people and block forwarding | **Specific people** — only the people you specify; if the invitation is forwarded, only people who already have access can use the link. |
| Reshare with someone who already has access | **People with existing access** — sends a link without changing permissions. |

```manual:
  description: Share the document with the chosen access level.
  ui_path: Open the document via driveItem.webUrl → Share → enter recipients or Copy link → set link permission to Anyone / People in <org> / Specific people / People with existing access → Send
  api_equivalent: POST /storage/fileStorage/containers/{container-id}/permissions (addContainerPermission) grants container-level access programmatically; see /sharepoint/dev/embedded/development/sharing-and-perm
  verify:
    method: GET
    path: /storage/fileStorage/containers/{container-id}/permissions
```

**Expected response:** The recipient receives access at the chosen level; `listContainerPermissions` reflects any granted container permission.

**On failure:**
- External recipient cannot open with **Specific people** → external sharing is not enabled for the consuming tenant, or the link audience excludes external users.
- Recipient sees access denied on a direct file link → a raw file URL lacks app authorization. Share the `webUrl` or generate a sharing link instead of a direct content URL.

## Verify {#verify}
Confirm the document is reachable and editable for the signed-in user.

```http
GET https://graph.microsoft.com/v1.0/drives/{drive-id}/items/{item-id}
Authorization: Bearer {token}
```

Returns `200 OK` with a `driveItem` that has a `file` facet and a `webUrl`. Opening `webUrl` renders the document in Office for the web for view or edit.

## Troubleshooting {#troubleshooting}
| Symptom | Likely cause | Fix |
|---|---|---|
| Document cannot be opened or accessed | Container is archived (cold storage tier) | Reactivate the container, then retry. See [Content experiences overview](/sharepoint/dev/embedded/development/content-experiences/user-experiences-overview#archived-containers) |
| Opens read-only when edit expected | Delegated permission or container role grants only read | Grant `writer` or higher. See [Sharing and permissions](/sharepoint/dev/embedded/development/sharing-and-perm) |
| `@mention` not delivered | Mentioned user lacks a Microsoft 365 license, or is a guest/external user | Assign a license; mentions are limited to the consuming tenant's organization |
| Office breadcrumb missing or stale | Container properties not configured, or Office not on Current Channel | Configure container properties; specify **Current Channel** for [Office update channels](/deployoffice/updates/overview-update-channels) |
| `401 Unauthorized` | Token missing/expired or wrong scope | Re-acquire a delegated token with `FileStorageContainer.Selected` |
| `429 Too Many Requests` | Throttled | Honor `Retry-After`; back off exponentially. See [Limits](/sharepoint/dev/embedded/development/limits-calling) |

## Next steps
- [Set up the launch experience (Office client modes)](/sharepoint/dev/embedded/development/tutorials/launch-experience)
- [Offer file preview experiences](/sharepoint/dev/embedded/development/tutorials/using-file-preview)
- [Search content](/sharepoint/dev/embedded/development/content-experiences/search-content)

## Related
- [Content experiences overview](/sharepoint/dev/embedded/development/content-experiences/user-experiences-overview)
- [Sharing and permissions](/sharepoint/dev/embedded/development/sharing-and-perm)
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth)
- [Office update channels](/deployoffice/updates/overview-update-channels)
