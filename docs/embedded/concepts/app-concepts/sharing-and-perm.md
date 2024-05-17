---
title: Sharing and Permissions
description: Outlines Permission Model for SharePoint Embedded
ms.date: 5/17/24
ms.localizationpriority: high
---

# Sharing and Permissions in SharePoint Embedded


## Additive Permissions
In SharePoint Embedded, users cannot break the permission inheritance; they can only add "additive permissions" to content such as files and folders within a container. To grant extra permissions to a user beyond what they have on the Container, for example, if *UserA* is member of the Reader role, you can allow that user to edit a specific document in that Container using the Microsoft Graph: 

|           Scenario            |                                                                           Microsoft Graph API(s)                                                                            |                                                                                                          Notes                                                                                                          |
| :---------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Grant an additive permission  | [POST /drives/{drive-id}/items/{item-id}/invite](/graph/api/driveitem-invite)                                                                                               | The sendInvitation property must always be false. You can't grant additive permissions to the root folder in a Container as this is essentially the same as adding a User to a role. You can't use AppOnly permissions. |
| Retrieve permissions          | [GET /drives/{drive-id}/items/{item-id}/permissions](/graph/api/permission-get) & [GET /drives/{drive-id}/items/{item-id}/permissions/{perm-id}](/graph/api/permission-get), |                                                                                                                                                                                                                         |
| Delete an additive permission | [DELETE /drives/{drive-id}/items/{item-id}/permissions/{perm-id}](/graph/api/permission-delete)                                                                             | You can only delete the additive permission on the drive item where it was originally added.                                                                                                                            |


## Role-based Sharing Setting

SharePoint Embedded offers a role-based sharing model that allows developers to configure file-sharing permissions based on container permission roles,  offering a choice between restrictive and open sharing model (default). This sharing setting is part of [container type configuration](containertypes.md#configuring-container-types). This configuration can only be set by application owner's developers. To learn more about container permission roles, please refer to [Authentication and Authorization with SharePoint Embedded](auth.md#container-permissions).

### Restrictive Sharing Model

Only container memebers who are either the Owner or Manager roles are permitted to add new permissions to files.

### Open Sharing Model

Any container members and guest users with edit permissions to add new permissions to this file.

This can be configured using the PowerShell cmdlet [Set-SPOContainerTypeConfiguration]([/powershell/module/sharepoint-online/set-SPOApplication) as per this example:

```powershell
Set-SPOContainerTypeConfiguration
    -ContainerTypeID <Identifier>
    -sharingRestricted $True
```

## Sharing Configuration Setting

By default, SharePoint Embedded app sharing configuration is the same as consuming tenant sharing configuration. For example, if the consuming Tenant disabled sharing to Guest users, then your SharePoint Embedded application won’t be able to add Guest Users to the Container roles or grant them additive permissions.

### Application External Sharing Override

For SharePoint Embedded apps, sharing configurations can be adjusted at the application level. Consuming tenant admin can configure permissions that are different than tenant level sharing settings. For example, if a tenant's sharing setting prohibits sharing with guest users, SharePoint Embedded applications can be configured to allow guest sharing. Consequently, all containers within that SharePoint Embedded application would have the ability to include guest users or extend additional permissions, while other SharePoint Embedded applications and SharePoint maintain restricted sharing permissions.

This setting can only be set by consuming tenant SharePoint Embedded admin, and can be configured using the latest powershell cmdlet [Set-SPOApplication](/powershell/module/sharepoint-online/set-SPOApplication) as shown in this example:

```powershell
Set-SPOApplication 
    -OwningApplicationID <indentifier>
    -OverrideTenantSharingCapability $true
    -SharingCapability ExistingExternalUserSharing
```


