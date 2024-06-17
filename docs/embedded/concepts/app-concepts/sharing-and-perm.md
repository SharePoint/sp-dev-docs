---
title: Sharing and Permissions
description: Outlines Permission Model for SharePoint Embedded
ms.date: 05/21/2024
ms.localizationpriority: high
---

# Sharing and permissions in SharePoint Embedded

## Additive permissions

In SharePoint Embedded, content always inherits permissions from its parent hierarchy. While you can't alter this inherited permission structure, you can extend access within a container by applying "additive permissions" to specific files and folders. For instance, if _UserA_ belongs to the Reader role, you can grant the user edit permission to a particular document in that container using Microsoft Graph:

|           Scenario            |                                                                           Microsoft Graph API(s)                                                                            |                                                                                                          Notes                                                                                                          |
| :---------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Grant an additive permission  | [POST /drives/{drive-id}/items/{item-id}/invite](/graph/api/driveitem-invite)                                                                                               | The sendInvitation property must always be false. You can't grant additive permissions to the root folder in a container as this is essentially the same as adding a User to a role. You can't use AppOnly permissions. |
| Retrieve permissions          | [GET /drives/{drive-id}/items/{item-id}/permissions](/graph/api/permission-get) & [GET /drives/{drive-id}/items/{item-id}/permissions/{perm-id}](/graph/api/permission-get), |                                                                                                                                                                                                                         |
| Delete an additive permission | [DELETE /drives/{drive-id}/items/{item-id}/permissions/{perm-id}](/graph/api/permission-delete)                                                                             | You can only delete the additive permission on the drive item where it was originally added.                                                                                                                            |

## Role-based sharing setting

SharePoint Embedded offers a role-based sharing model that allows developers to configure file-sharing permissions based on container permission roles,  offering a choice between restrictive and open sharing model. By default, the sharing setting is configured to the open model, permitting unrestricted content sharing by all users. This sharing setting is part of [container type configuration](containertypes.md#configuring-container-types). This configuration can only be set by application owner's developers. To learn more about container permission roles, refer to [Authentication and Authorization with SharePoint Embedded](auth.md#container-permissions).

### Restrictive sharing model

Only container members who are either the Owner or Manager roles are permitted to add new permissions to files.

### Open sharing model

Any container members and guests with edit permissions can add new permissions to this file.

This can be configured using the PowerShell cmdlet [Set-SPOcontainerTypeConfiguration](../admin-exp/developer-admin/dev-admin.md#container-type-configuration-properties) as per this example:

```powershell
Set-SPOcontainerTypeConfiguration
    -containerTypeID <containerTypeID>
    -sharingRestricted $false
```

## Sharing configuration setting

By default, SharePoint Embedded application sharing configuration is the same as the consuming tenant-sharing configuration. For example, if the consuming tenant is configured to disable sharing for guests, then the SharePoint Embedded application is unable to add guests to container roles or grant them additive permissions.

### Application external sharing override

For SharePoint Embedded applications, sharing configurations can be adjusted at the application level. Consuming tenant admin can configure permissions that are different than tenant level sharing settings. For example, if a tenant's sharing setting prohibits sharing with guests, SharePoint Embedded applications can be configured to allow guest sharing. So, all containers within that SharePoint Embedded application would have the ability to include guests or extend another permissions, while other SharePoint Embedded applications and SharePoint maintain restricted sharing permissions.

This setting can only be set by consuming tenant SharePoint Embedded admin, and can be configured using the latest PowerShell cmdlet [Set-SPOApplication](../admin-exp/consuming-tenant-admin/ctapowershell.md#set-sharing-capability-of-applications) as shown in this example:

```powershell
Set-SPOApplication
    -OwningApplicationID <OwningApplicationId>
    -OverrideTenantSharingCapability $true
    -SharingCapability <SharingCapability>
```
