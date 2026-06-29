---
title: Share content in SharePoint Embedded
description: How sharing works in SharePoint Embedded. The sharing settings, the sharing endpoints, and how each one interacts with the permission model.
ms.date: 06/04/2026
ms.topic: concept-article
ms.service: sharepoint-embedded
author: cindylay
ms.author: cindylay
ms.localizationpriority: high
---

# Share content in SharePoint Embedded

Sharing in SharePoint Embedded (SPE) is how you grant access to a file or folder beyond the people who already hold a container role. A sharing call creates a permission on the item. After that, the permission flows through the hierarchy the same way every other permission does, as described in [SharePoint Embedded permission model](./permission-model.md).

This article covers two layers:

- **Sharing settings.** Policy controls that gate what sharing operations are even allowed. The container-type developer sets a default; a consuming-tenant admin can override.
- **Sharing operations.** The Microsoft Graph endpoints your app calls to actually share an item: `invite`, `createPermission`, and `createLink`.

## Before you share

Three prerequisites for every sharing call:

- **Container role of the caller.** A user's container role sets the upper bound on what they can share. Owners and Managers can share anything in the container; Writers can share items they can already access; Readers can't share. For role definitions, see [Authentication and authorization with SharePoint Embedded](./auth.md).
- **Sharing settings.** The container type's `isSharingRestricted` and `sharingCapability` settings can further narrow who can share and with whom (covered below).
- **Microsoft Graph permissions.** Every sharing call needs the `FileStorageContainer.Selected` scope, plus the standard `Files` or `Sites` permission for the endpoint you're calling. Required scopes are listed inline in each section under [Sharing operations](#sharing-operations).

A container role is necessary but not sufficient. If any of the three prerequisites isn't met, the call fails.

## Sharing settings

SPE has two settings that gate sharing at the policy level:

| Setting | Layer | What it controls |
|---|---|---|
| `isSharingRestricted` | Container type | Whether only Owners and Managers can share files in containers of this type. |
| `sharingCapability` | Container type, with per-application override | Whether sharing with users outside the consuming tenant is allowed, and which kind of external sharing. |

You, as the owning-application developer, set both on the container type at registration. A consuming-tenant admin can override `sharingCapability` per application with a PowerShell cmdlet.

When you update a container type's settings, the change reaches each container type registration (one per consuming tenant) within 48 hours. Registrations that a tenant admin has overridden aren't touched by the update. For details, see [Update fileStorageContainerType](/graph/api/filestoragecontainertype-update).

### Restricted sharing

`isSharingRestricted` controls who can share files in containers of a given type. The setting lives on the [fileStorageContainerTypeSettings](/graph/api/resources/filestoragecontainertypesettings) resource.

| State | `isSharingRestricted` | Who can share files |
|---|---|---|
| Unrestricted sharing (default) | `false` | Any container member whose role allows sharing. |
| Restricted sharing | `true` | Only the container's Owners and Managers. |

Restricted sharing doesn't change who can read or write a file; it only narrows who can grant new permissions on it.

To change the setting for a container type, call [Update fileStorageContainerType](/graph/api/filestoragecontainertype-update):

```http
PATCH https://graph.microsoft.com/v1.0/storage/fileStorage/containerTypes/{containerTypeId}
Content-Type: application/json

{
  "settings": {
    "isSharingRestricted": true
  },
  "etag": "<current etag>"
}
```

This call needs the `FileStorageContainerType.Manage.All` delegated permission. The signed-in user must be a SharePoint Embedded Administrator or Global Administrator in the owning tenant.

### External sharing

`sharingCapability` controls whether containers can be shared with users outside the tenant. The setting lives on [fileStorageContainerTypeSettings](/graph/api/resources/filestoragecontainertypesettings) and accepts these values:

| Value | What it allows |
|---|---|
| `disabled` | No external sharing. Only people in the consuming tenant can be granted access. |
| `existingExternalUserSharingOnly` | Sharing only with guests already in the consuming tenant's directory (for example, guests previously added through earlier shares or Microsoft Entra B2B). New guests can't be invited, and `createLink` doesn't issue anonymous links. |
| `externalUserSharingOnly` | New and existing guests can be invited by email or object ID; recipients must sign in to access the item. `createLink` doesn't issue anonymous links. |
| `externalUserAndGuestSharing` | New and existing guests can be invited as above, **and** `createLink` can issue anonymous "Anyone with the link" URLs (`scope: anonymous`). |

The effective capability for an application in a consuming tenant works like this:

- By default, the application follows the consuming tenant's SharePoint Online sharing capability.
- When a SharePoint Embedded administrator in the consuming tenant runs [Set-SPOApplication](/powershell/module/sharepoint-online/set-spoapplication) with `-OverrideTenantSharingCapability $true`, the application uses the value passed to `-SharingCapability` instead, independent of the tenant-level setting.

```powershell
Set-SPOApplication `
    -OwningApplicationId <owningApplicationId> `
    -OverrideTenantSharingCapability $true `
    -SharingCapability <sharingCapability>
```

To share with users outside the consuming tenant at all, [Microsoft Entra B2B](/sharepoint/sharepoint-azureb2b-integration) must be enabled in that tenant.

## Sharing operations

This article covers the main Microsoft Graph sharing endpoints for SPE content. Each one solves a different scenario:

| Endpoint | Use it to |
|---|---|
| [`invite`](/graph/api/driveitem-invite) | Add a specific user or group to an item by email or object ID, optionally with a notification. |
| [`createPermission`](/graph/api/driveitem-post-permissions) | Grant a SharePoint group access to an item from an application-only flow. |
| [`createLink`](/graph/api/driveitem-createlink) | Generate a sharing link whose audience is controlled by the link `scope`. |

All three create a [permission](/graph/api/resources/permission) resource on the target item. Once that permission exists, it behaves like any other permission described in the [permission model](./permission-model.md).

### Add a user or group with `invite`

Use [driveItem: invite](/graph/api/driveitem-invite) when you want to grant access to a known user or group.

SPE-specific requirements:

- Set `sendInvitation` to `false`. SPE doesn't deliver invitation emails.
- New guest users require delegated permissions. Inviting an existing guest (already in the consuming tenant's directory) works with either delegated or application permissions.
- **Permissions:** `Files.ReadWrite` (delegated) or `Files.ReadWrite.All` (application), plus `FileStorageContainer.Selected`. See the [endpoint reference](/graph/api/driveitem-invite#permissions) for higher-privileged alternatives.

```http
POST https://graph.microsoft.com/v1.0/drives/{driveId}/items/{itemId}/invite
Content-Type: application/json

{
  "recipients": [
    { "email": "user@contoso.com" }
  ],
  "roles": ["read"],
  "requireSignIn": true,
  "sendInvitation": false
}
```

By default, `invite` is additive: `retainInheritedPermissions` defaults to `true`, so the call grants the new permission without removing what the item already inherits. Setting `retainInheritedPermissions` to `false` on the first share of an item breaks inheritance. See [Inheritance behavior of sharing calls](#inheritance-behavior-of-sharing-calls) below.

To grant access to everyone in a container, assign a container role instead of inviting on the container's root item.

### Grant a SharePoint group with `createPermission`

Use [driveItem: createPermission](/graph/api/driveitem-post-permissions) when you need an application-only flow that grants access to a SharePoint group.

SPE-specific rules from the Graph reference:

- Application permissions only. Delegated calls aren't supported on SPE items for this endpoint.
- The `grantedToV2` value must be a `sharePointGroup`. No other user or group types are supported on this endpoint in SPE.
- The call isn't allowed on a container's root item.
- **Permissions:** `Files.ReadWrite.All` (application), plus `FileStorageContainer.Selected`. See the [endpoint reference](/graph/api/driveitem-post-permissions#permissions) for higher-privileged alternatives.

```http
POST https://graph.microsoft.com/v1.0/drives/{driveId}/items/{itemId}/permissions
Content-Type: application/json

{
  "roles": ["read"],
  "grantedToV2": {
    "sharePointGroup": {
      "id": "<sharePointGroupId>"
    }
  }
}
```

#### Getting a SharePoint group ID

A SharePoint group in SPE exists within the scope of a single container. To obtain the `id` you pass in `grantedToV2.sharePointGroup.id`:

- **Create a new group** in the container with [Create sharePointGroup](/graph/api/filestoragecontainer-post-sharepointgroups). A container can hold up to 10,000 SharePoint groups. The response includes the `id` to pass to `createPermission`.
- **List existing groups** in the container with [List sharePointGroups](/graph/api/filestoragecontainer-list-sharepointgroups) to look up the `id` of a group you've already created.

Always use the `id` field, not `principalId`. `principalId` is only unique within a single site, while `id` is globally unique. Both group endpoints require application permissions and the `FileStorageContainer.Selected` scope.

### Share with a link using `createLink`

Use [driveItem: createLink](/graph/api/driveitem-createlink) when you want a URL recipients can use to access the item, instead of granting access to specific users or groups up front.

The `type` parameter controls what the link grants:

| `type` | Effect |
|---|---|
| `view` | Read-only access via the link. |
| `edit` | Read-write access via the link. |

The `embed` type doesn't apply to SPE; it's OneDrive personal only.

The `scope` parameter controls who can use the link:

| `scope` | Who the link works for |
|---|---|
| `anonymous` | Anyone with the link, no sign-in required. Subject to tenant and application sharing policy. |
| `organization` | Anyone signed into the consuming tenant. |
| `users` | A specific set of users listed in the request. |

```http
POST https://graph.microsoft.com/v1.0/drives/{driveId}/items/{itemId}/createLink
Content-Type: application/json

{
  "type": "view",
  "scope": "organization"
}
```

Like `invite`, `createLink` accepts `retainInheritedPermissions`; setting it to `false` on the first share breaks inheritance. See the next section.

**Permissions:** `Files.ReadWrite` (delegated) or `Files.ReadWrite.All` (application), plus `FileStorageContainer.Selected`. See the [endpoint reference](/graph/api/driveitem-createlink#permissions) for higher-privileged alternatives.

### Inheritance behavior of sharing calls

Both `invite` and `createLink` accept a `retainInheritedPermissions` parameter. The default is `true`.

- `true` (default). The new permission is added; everything the item already inherited stays in place.
- `false`. On the first share of an item, the item's item-level inherited permissions are removed and the item starts holding only the permissions you specify. Container-role assignments still apply. This breaks inheritance at this item, the same way the [permission model article describes](./permission-model.md#breaking-inheritance). Use `false` with caution; broken inheritance is hard to undo.

`createPermission` doesn't expose `retainInheritedPermissions`; calls to it are always additive.

> [!WARNING]
> Setting `retainInheritedPermissions` to `false` is the only way a sharing call breaks inheritance. Calls without it are purely additive; they don't change anything an item already inherits.

## Manage existing shares

Once a sharing call creates a permission on an item, you can list, update, or remove it like any other permission.

### List the permissions on an item

```http
GET https://graph.microsoft.com/v1.0/drives/{driveId}/items/{itemId}/permissions
```

The response includes permissions granted directly on the item plus those it inherits. Inherited permissions are marked with an `inheritedFrom` property pointing at the ancestor that owns them. Permissions created by `createLink` show up with a `link` property describing the link's type and scope.

**Permissions:** `Files.Read` (delegated) or `Files.Read.All` (application), plus `FileStorageContainer.Selected`. See the [endpoint reference](/graph/api/driveitem-list-permissions#permissions) for higher-privileged alternatives.

### Remove a share

Call [delete permission](/graph/api/permission-delete) to revoke a permission you previously granted:

```http
DELETE https://graph.microsoft.com/v1.0/drives/{driveId}/items/{itemId}/permissions/{permissionId}
```

You can only delete permissions that were granted directly on the target item. To remove an inherited permission, delete it on the ancestor where it was granted, or break inheritance on the child first. See [Breaking inheritance](./permission-model.md#breaking-inheritance).

Container-level permissions—the four container roles—can't be removed from individual `driveItem` objects through this API. Anyone holding a container role has access to every item in the container. To revoke that access, change the user's role on the container itself rather than calling `delete permission` on an item.

**Permissions:** `Files.ReadWrite` (delegated) or `Files.ReadWrite.All` (application), plus `FileStorageContainer.Selected`. See the [endpoint reference](/graph/api/permission-delete#permissions) for higher-privileged alternatives.

## How sharing interacts with the permission model

Every successful sharing call creates a permission on the target item. From that point on, the permission follows the same rules as any other:

- It applies to the item it was created on.
- It flows down to children of that item, unless a child has broken inheritance.
- It can be removed with [delete permission](/graph/api/permission-delete) on the item where it was granted.
- If `retainInheritedPermissions` was `false` on the sharing call, the item stops picking up changes from its parent chain.

For the full mechanics, see [SharePoint Embedded permission model](./permission-model.md).

## Common errors

| Symptom | Likely cause |
|---|---|
| `403 Forbidden` on any sharing call | Missing `FileStorageContainer.Selected`, or the caller's container role doesn't allow sharing. |
| `403 Forbidden` for a Writer trying to share | The container type has restricted sharing on (`isSharingRestricted = true`). Only Owners and Managers can share. |
| External recipient is rejected | The application's effective `sharingCapability` doesn't allow this kind of external sharing, or Microsoft Entra B2B isn't enabled in the consuming tenant. |
| Inviting a new guest with an app-only token fails | New guest invitations require delegated permissions on `invite`. Use a delegated flow for first-time guests. |
| `createPermission` is rejected with a non-group recipient | `createPermission` accepts only `sharePointGroup` in `grantedToV2` for SPE. Use `invite` for users or non-SharePoint groups. |
| `createPermission` is rejected on a container root | `createPermission` isn't allowed on the container root item. Grant a container role instead, or call the endpoint on a child item. |

## Related content

- [SharePoint Embedded permission model](./permission-model.md)
- [Authentication and authorization with SharePoint Embedded](./auth.md)
- [driveItem: invite](/graph/api/driveitem-invite)
- [driveItem: createPermission](/graph/api/driveitem-post-permissions)
- [driveItem: createLink](/graph/api/driveitem-createlink)
- [Create sharePointGroup](/graph/api/filestoragecontainer-post-sharepointgroups)
- [List sharePointGroups](/graph/api/filestoragecontainer-list-sharepointgroups)
- [delete permission](/graph/api/permission-delete)
- [Update fileStorageContainerType](/graph/api/filestoragecontainertype-update)
- [fileStorageContainerTypeSettings](/graph/api/resources/filestoragecontainertypesettings)
- [Set-SPOApplication](/powershell/module/sharepoint-online/set-spoapplication)
