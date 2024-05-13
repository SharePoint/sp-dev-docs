---
title: Sharing and Permissions
description: Outlines Permission Model for SharePoint Embedded
ms.date: 11/28/2023
ms.localizationpriority: high
---

# Sharing and Permissions in SharePoint Embedded

## Sharing

The permission model used in SharePoint Embedded is different from the traditional SharePoint model and follows the OneDrive Consumer model. That is, Unlike SharePoint you can't break the permission inheritance. However, you can apply “additive permissions” to the Content (files and folders) that are in a Container.

### Container Roles

Every Container has four predefined roles (that can't be extended or modified) that users or Microsoft Entra security groups can be added or removed from:

- **Owner**: Has full control over the Container
- **Manager**: And being to add, update, and delete content in the Container, they can also maintain permissions of the Container and the content in the Container
- **Writer**: Can add, update, and delete content in the Container
- **Reader**: Can only view content in the Container
If a user is a member of a role, then those permissions apply to all of the content (files and folders) that in that Container. For example, if *UserA* is made a member of the Reader role, then *UserA* is able to view and read all content (files and folders) in that Container.

## Permissions

### Additive Permissions

Your app might have the scenario that you might want to grant extra permissions to a user beyond what they have on the Container. For example, if *UserA* is member of the Reader role, you might want to allow that user to be able to edit a specific document in that Container. To support this scenario, you add and delete additive permissions using the Microsoft Graph APIs:

|           Scenario            |                                                                           Microsoft Graph API(s)                                                                            |                                                                                                          Notes                                                                                                          |
| :---------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Grant an additive permission  | [POST /drives/{drive-id}/items/{item-id}/invite](/graph/api/driveitem-invite)                                                                                               | The sendInvitation property must always be false. You can't grant additive permissions to the root folder in a Container as this is essentially the same as adding a User to a role. You can't use AppOnly permissions. |
| Retrieve permissions          | [GET /drives/{drive-id}/items/{item-id}/permissions](/graph/api/permission-get) & [GET /drives/{drive-id}/items/{item-id}/permissions/{perm-id}](/graph/api/permission-get), |                                                                                                                                                                                                                         |
| Delete an additive permission | [DELETE /drives/{drive-id}/items/{item-id}/permissions/{perm-id}](/graph/api/permission-delete)                                                                             | You can only delete the additive permission on the drive item where it was originally added.                                                                                                                            |

In addition, using these APIs have the following dependencies:

- How Sharing has been configured in the Consuming Tenant
- The type of user that is invoking the API when you're using delegated authorization.


## Application Owner Developers Sharing Settings

SharePoint Embedded offers a role-based sharing model that allows developers to configure file-sharing permissions based on container membership,  offering a choice between restrictive and open sharing model. This sharing setting is part of container type configuration. This configuration can only be set by application owner developers.

### Restrictive Sharing Model

In the restrictive sharing model, only users who are a member of either the Owner or Manager roles are permitted to add new permissions to a files.

### Non-restrictive Sharing Model (default)

The non-restrictive sharing model allows any users with edit permissions to a file to add new permissions to this file.

This can be configured using the PowerShell cmdlet [Set-SPOContainerTypeConfiguration](/powershell/module/sharepoint-online/set-SPOContainerTypeConfiguration) as per this example:

```powershell
Set-SPOContainerTypeConfiguration
    -ContainerTypeID <Identifier>
    -sharingRestricted $True
```
Invoking the additive permission API with different roles will have different outcomes:
|      Container Role      | SharingRestricted: False |  SharingRestricted: True  |
| :-------------------- | :-------------------------------------: | :--------: |
| Owner                 |                  Sucess                 | Success   |
| Manager               |                  Sucess                 | Success   |
| Writer                |                  Sucess                 | **Fails** |
| Reader                |                  Fails                 | **Fails**   |
| Guest User (with edit permission on the file) |                   Sucess                   | **Fails**  |
| Guest User (without edit permission on the file) |                Fails                 | **Fails**  |



## Consuming Tenand Admin Sharing Configuration Settings

By default, SharePoint Embedded app sharing configuration will be the same as consuming tenant sharing configuration. For example, if the consuming Tenant has been configured to disable sharing to Guest users, then your SharePoint Embedded application won’t be able to add Guest Users to the Container roles or grant them additive permissions.

### Application Sharing Configuration Settings override

For sharePoint Embedded apps, sharing configurations can be adjusted at the application level, Consuming tenant admin can config permissions that are either more restrictive or more permissive than tenant level sharing settings. For example, even if a tenant's settings prohibit sharing with guest users, a SharePoint Embedded application can be configured to allow guest sharing. Consequently, all containers within that SharePoint Embedded application would have the ability to include guest users or extend additional permissions, while other SharePoint Embedded applications and SharePoint sites maintain restricted sharing permissions.

This setting can only be set by SharePoint Embedded admins, and can be configured using powershell cmdlet [Set-SPOApplication](/powershell/module/sharepoint-online/set-SPOApplication) as per this example:

```powershell
Set-SPOApplication <OwningApplicationID>
    -OverrideTenantSharingCapability $true
    -SharingCapability ExistingExternalUserSharing
```

Note the following:

- [Microsoft.Online.SharePoint.PowerShell](/powershell/sharepoint/sharepoint-online/connect-sharepoint-online) version 16.0.23701.0 or later is required to configure sharing capability at an application level

