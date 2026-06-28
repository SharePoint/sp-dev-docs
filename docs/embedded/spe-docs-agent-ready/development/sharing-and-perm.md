<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->
---
title: Share files and manage permissions in a SharePoint Embedded container
description: Grant additive item-level permissions, retrieve and remove them, and configure role-based and external sharing for a container.
ms.topic: how-to
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
agent:
  schema_version: 1
  task_type: how-to
  outcome: A specific file or folder in a container is shared with a user at a chosen permission level, and the container's sharing model is configured.
  estimated_minutes: 20
  difficulty: intermediate
  roles: [app-developer, enterprise-developer, owning-admin, consuming-admin]
  prerequisites:
    - uri: /sharepoint/dev/embedded/development/auth
      kind: how-to
    - capability: container-type-owner
  api_surface:
    - id: getContainerDrive
      method: GET
      path: /storage/fileStorage/containers/{container-id}/drive
      permissions: [FileStorageContainer.Selected]
    - id: addContainerPermission
      method: POST
      path: /storage/fileStorage/containers/{container-id}/permissions
      permissions: [FileStorageContainer.Selected]
    - id: listContainerPermissions
      method: GET
      path: /storage/fileStorage/containers/{container-id}/permissions
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
    - name: permission-id
      type: string
      source: prior-step
    - name: user-email
      type: string
      source: user-supplied
    - name: container-type-id
      type: uuid
      source: prior-step
  outputs:
    - name: item-permission
      type: object
      verify: GET /drives/{drive-id}/items/{item-id}/permissions returns 200 listing the new grant
  next_steps:
    - uri: /sharepoint/dev/embedded/development/limits-calling
      when: always
    - uri: /sharepoint/dev/embedded/development/content-experiences/office-experience
      when: always
  related:
    - uri: /sharepoint/dev/embedded/development/auth
    - uri: /sharepoint/dev/embedded/development/app-architecture
    - uri: /sharepoint/dev/embedded/development/limits-calling
  stability: ga
  last_validated: proposed
---

# Share files and manage permissions in a SharePoint Embedded container
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

By the end of this how-to, you can grant a single file or folder in a container an extra ("additive") permission for a specific user, read and remove that grant, and configure the container type's role-based and external sharing models. In SharePoint Embedded (SPE), content always inherits permissions from its parent hierarchy; you cannot alter that inheritance, but you can **extend** access to individual items.

## Prerequisites

- [Authentication and authorization](/sharepoint/dev/embedded/development/auth) — the app must hold `FileStorageContainer.Selected` and be registered on the consuming tenant.
- Capability: an existing, active container and a delegated (on-behalf-of-user) token. Additive permissions cannot be granted with app-only permissions.
- Capability: container-type-owner rights to change the role-based sharing model (set by the owning application's developers).

## Inputs

| Placeholder | Type | Where it comes from |
|---|---|---|
| `{container-id}` | string | A prior step (create/list containers). |
| `{drive-id}` | string | From [Step 1](#step-1) — the container's drive. |
| `{item-id}` | string | The file or folder `driveItem` ID being shared. |
| `{permission-id}` | string | Returned when a permission is created; used to read or delete it. |
| `{user-email}` | string | User-supplied recipient address. |
| `{container-type-id}` | uuid | The container type whose sharing model is being configured. |

## Steps

### Step 1 — Get the container's drive {#step-1}

Additive permissions are applied to `driveItem` resources, so first resolve the container's drive to obtain `{drive-id}`.

```http
GET https://graph.microsoft.com/v1.0/storage/fileStorage/containers/{container-id}/drive
Authorization: Bearer {token}
```

**Expected response:** `200 OK` with a `drive` whose `id` is `{drive-id}`.

**On failure:**
- `403 Forbidden` → app not registered or not consented on this tenant. See [Authentication and authorization](/sharepoint/dev/embedded/development/auth).
- `404 Not Found` → `{container-id}` is wrong or the container is deleted.

### Step 2 — Grant an additive permission on a file or folder {#step-2}

Extend access to one item for a user beyond their container role. Use the `driveItem` invite endpoint; `sendInvitation` must be `false`.

```http
POST https://graph.microsoft.com/v1.0/drives/{drive-id}/items/{item-id}/invite
Authorization: Bearer {token}
Content-Type: application/json

{
  "recipients": [ { "email": "{user-email}" } ],
  "roles": [ "write" ],
  "sendInvitation": false,
  "requireSignIn": true
}
```

**Expected response:** `200 OK` with the created `permission` whose `id` is `{permission-id}`.

**On failure:**
- `400 Bad Request` → the target `{item-id}` is the container's root folder. Additive permissions cannot be applied to root (equivalent to adding a container role); grant a [container permission](/sharepoint/dev/embedded/development/auth#container-user-permission-roles) instead.
- `403 Forbidden` → an app-only token was used. Additive permissions require a delegated token.
- `403 Forbidden` → guest sharing is blocked by the consuming tenant configuration. See [Step 6](#step-6).

### Step 3 — Retrieve item permissions {#step-3}

Read the permissions on the item to confirm the grant and capture `{permission-id}` values.

```http
GET https://graph.microsoft.com/v1.0/drives/{drive-id}/items/{item-id}/permissions
Authorization: Bearer {token}
```

**Expected response:** `200 OK` with a collection of `permission` objects including the grant from [Step 2](#step-2).

**On failure:**
- `404 Not Found` → `{item-id}` or `{drive-id}` is wrong.

### Step 4 — Delete an additive permission {#step-4}

Remove the additive grant. You can delete it only on the `driveItem` where it was originally added.

```http
DELETE https://graph.microsoft.com/v1.0/drives/{drive-id}/items/{item-id}/permissions/{permission-id}
Authorization: Bearer {token}
```

**Expected response:** `204 No Content`.

**On failure:**
- `404 Not Found` → `{permission-id}` does not exist on this item, or you are targeting an item other than the one where the permission was added.

### Step 5 — Set the role-based sharing model on the container type {#step-5}

Choose who may add new permissions to files. The **open** model (default) lets any member or guest with edit permission add permissions; the **restrictive** model limits this to `owner` and `manager` roles. This is part of [container type configuration](/sharepoint/dev/embedded/getting-started/containertypes) and is set by the owning application's developers.

```pwsh
Set-SPOContainerTypeConfiguration `
  -ContainerTypeId {container-type-id} `
  -SharingRestricted $false
```

**Expected response:** the cmdlet returns the updated container type configuration with `SharingRestricted` set as specified.

**On failure:**
- `Access denied` → the account is not a developer/owner of the container type. Run as the owning application's developer admin.
- Cmdlet not found → install the latest SharePoint Online Management Shell.

> [!NOTE]
> This is a control-plane action with no Microsoft Graph equivalent today. See `api-surface.json` gap `setUpContainerTypeBilling` for related control-plane gaps; container type sharing configuration is likewise PowerShell-only.

### Step 6 — Override tenant sharing capability for the application {#step-6}

A consuming-tenant SharePoint Embedded admin can let one application's containers use a sharing capability different from the tenant default (for example, allow guest sharing where the tenant blocks it).

```pwsh
Set-SPOApplication `
  -OwningApplicationId {owning-application-id} `
  -OverrideTenantSharingCapability $true `
  -SharingCapability ExternalUserSharingOnly
```

**Expected response:** the cmdlet confirms the override is applied to the application's containers.

**On failure:**
- `Access denied` → the account is not a consuming-tenant SharePoint Embedded admin. Use that role.

## Verify {#verify}

List the item's permissions and confirm the additive grant from [Step 2](#step-2) is present (or absent after [Step 4](#step-4)).

```http
GET https://graph.microsoft.com/v1.0/drives/{drive-id}/items/{item-id}/permissions
Authorization: Bearer {token}
```

Returns `200 OK`. The collection contains the expected `permission` with the role you granted.

## Troubleshooting {#troubleshooting}

| Symptom | Likely cause | Fix |
|---|---|---|
| `401 Unauthorized` | Token missing/expired or wrong scope | Re-acquire a delegated token with `FileStorageContainer.Selected`. |
| `403 Forbidden` on invite | App-only token used, or guest sharing blocked | Use a delegated token; override sharing via [Step 6](#step-6) if guests are required. |
| `400 Bad Request` on invite | Targeting the container root folder | Apply additive permissions to a non-root item; use container roles for whole-container access. |
| Cannot delete a permission | Deleting from a different item than where it was added | Delete on the originating `driveItem` only. |
| `429 Too Many Requests` | Throttled; permission operations cost 5 resource units | Honor `Retry-After`; reduce permission calls. See [Limits and calling patterns](/sharepoint/dev/embedded/development/limits-calling). |

## Next steps

- [Limits and calling patterns](/sharepoint/dev/embedded/development/limits-calling)
- [Office experiences](/sharepoint/dev/embedded/development/content-experiences/office-experience)

## Related

- [Authentication and authorization](/sharepoint/dev/embedded/development/auth)
- [Application architecture](/sharepoint/dev/embedded/development/app-architecture)
- [Limits and calling patterns](/sharepoint/dev/embedded/development/limits-calling)
- [driveItem: invite (Microsoft Graph)](https://learn.microsoft.com/en-us/graph/api/driveitem-invite)
- [API surface index](/sharepoint/dev/embedded/api-surface.json)
