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

Your app may have the scenario that you may want to grant extra permissions to a user beyond what they have on the Container. For example, if *UserA* is member of the Reader role, you may want to allow that user to be able to edit a specific document in that Container. To support this scenario, you add and delete additive permissions using the Graph APIs:

|           Scenario            |                                                                           Microsoft Graph API(s)                                                                            |                                                                                                          Notes                                                                                                          |
| :---------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Grant an additive permission  | [POST /drives/{drive-id}/items/{item-id}/invite](/graph/api/driveitem-invite)                                                                                               | The sendInvitation property must always be false. You can't grant additive permissions to the root folder in a Container as this is essentially the same as adding a User to a role. You can't use AppOnly permissions. |
| Retrieve permissions          | [GET /drives/{drive-id}/items/{item-id}/permissions](/graph/api/permission-get) & [GET /drives/{drive-id}/items/{item-id}/permissions/{perm-id}](/graph/api/permission-get), |                                                                                                                                                                                                                         |
| Delete an additive permission | [DELETE /drives/{drive-id}/items/{item-id}/permissions/{perm-id}](/graph/api/permission-delete)                                                                             | You can only delete the additive permission on the drive item where it was originally added.                                                                                                                            |

In addition, using these APIs have the following dependencies:

- How Sharing has been configured in the Consuming Tenant
- The type of user that is invoking the API when you're using delegated authorization.

## Sharing Configuration Settings

Invoking the additive permission APIs and sharing content is dependent on the Sharing configuration settings in the Consuming Tenant. For example, if the Consuming Tenant has been configured to disable sharing to Guest Users, then your SharePoint Embedded application won't be able to add Guest Users to the Container roles or grant them additive permissions.

For more information, see:

- [Sharing & permissions in the SharePoint modern experience - SharePoint in Microsoft 365 | Microsoft Learn](/sharepoint/modern-experience-sharing-permissions#guest-sharing)
- [Manage sharing settings - SharePoint in Microsoft 365 | Microsoft Learn](/sharepoint/turn-external-sharing-on-or-off)

### Container “Partition”

The Sharing settings can be defined at the Tenant level and separately at the SharePoint Site and OneDrive “partitions”. For SharePoint Embedded, we have introduced a new “partition” called Containers that will apply to all SharePoint Embedded applications in the Consuming Tenant.

This can be configured using the PowerShell cmdlet [Set-SPOTenant](/powershell/module/sharepoint-online/set-spotenant) as per this example:

```powershell
Set-SPOTenant
    -SharingCapability ExternalUserAndGuestSharing
    -CoreSharingCapability ExistingExternalUserSharing
    -OneDriveSharingCapability Disabled
    -ContainerSharingCapability ExternalUserAndGuestSharing
```

![Sharing Partitions](../../images/SharingPartitions.png)

Note the following:

- [Microsoft.Online.SharePoint.PowerShell](/powershell/sharepoint/sharepoint-online/connect-sharepoint-online) version 16.0.23701.0 or later is required to configure the Container “partition”
- Sharing settings for a “partition” can never be more permissive than the Tenant level setting.

## Guest User Dependencies

In addition to the Sharing configuration settings, there are a couple of scenarios relating to Guest Users and sharing to be aware of:

- Guest Users can get unexpected results when granting additive permissions
- Guest Users may not be able to be added via the SharePoint Embedded App

## Guest User granting Additive Permissions

When granting additive permissions and the user invoking the API is a Guest User, then you may get unexpected results.

|      Admin User       | User being granted additive permissions |  Outcome  |
| :-------------------- | :-------------------------------------: | :-------- |
| Consuming Tenant user |                   New                   | Success   |
| Consuming Tenant user |                Existing                 | Success   |
| Guest user            |                   New                   | **Fails** |
| Guest user            |                Existing                 | Success   |

The user being granted additive permissions indicates whether that user has previously been granted additive permissions for any content in that specific Container.

The failure scenario is expected behavior depending on the Consuming Tenant configuration settings.

If this scenario is required to also succeed for Guest Users, then the following settings need to be set to `True` using the [Set-SPOTenant](/powershell/module/sharepoint-online/set-spotenant) PowerShell cmdlet in the Consuming Tenant:

- `-AllowGuestUserShareToUsersNotInSiteCollection`
  - Setting this to `True` also requires [SharePoint and OneDrive integration with Azure AD B2B](/sharepoint/sharepoint-azureb2b-integration) to be enabled.
- `-ShowPeoplePickerSuggestionsForGuestUsers`

## Adding Guest Users

If your SharePoint Embedded application requires the ability to add Guest Users then Sharing must be enabled on the SharePoint content root in the Consuming Tenant (`https://contoso.sharepoint.com`).

By default, sharing is enabled on the SharePoint content root. However, some Consuming Tenants may have this disabled.

If this scenario is required, then the SharePoint content root SharingCapability setting needs to be set to any value except disabled using the [Set-SPOSite](/powershell/module/sharepoint-online/set-sposite) PowerShell cmdlet in the Consuming Tenant:

```powershell
Set-SPOSite -Identity https://contoso.sharepoint.com `
            -SharingCapability ExistingExternalUserSharingOnly
```
