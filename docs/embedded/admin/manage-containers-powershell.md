---
title: Manage containers with PowerShell
description: Use SharePoint Online Management Shell to inventory and manage SharePoint Embedded apps and containers.
ms.date: 07/13/2026
ms.reviewer: shsaravanan
ms.author: mawin
ms.localizationpriority: high
ai-usage: ai-assisted
---

# Manage containers with PowerShell

**Applies to:** Consuming tenant admin — SharePoint Embedded admin / Global admin

<!-- agent:
task_type: how-to
audience: administrator
outcome: Use supported SharePoint PowerShell cmdlets to manage SharePoint Embedded applications and containers.
next: monitor-usage-billing-cost.md
-->

Use SharePoint Online Management Shell to automate SharePoint Embedded application and container administration.

PowerShell is useful for inventory, reporting, lifecycle operations, sensitivity label updates, sharing configuration, and permission review.

This article lists the supported administrator cmdlets and links to canonical cmdlet references for deeper syntax details.

> [!IMPORTANT]
> Use the latest version of SharePoint Online Management Shell before running SharePoint Embedded container administration cmdlets.

## Before you begin

Confirm these prerequisites.

- Your account has the SharePoint Embedded Administrator role or Global Administrator role.
- You can connect to the tenant with SharePoint Online Management Shell.
- You know the tenant admin URL.
- You know the owning application ID when filtering application or container results.
- You understand the business impact before deleting containers.

For role details, see [SharePoint Embedded administrator](admin-overview.md).

## Install SharePoint Online Management Shell

Install the [SharePoint Online Management Shell](https://www.microsoft.com/download/details.aspx?id=35588).

Open it from the Start menu or use a supported PowerShell host with the module available.

Install the latest shell and connect to SharePoint Online before you run SharePoint Embedded cmdlets.

For connection details, see [Connect-SPOService](/powershell/module/sharepoint-online/connect-sposervice).

## Connect to SharePoint Online

Connect to your tenant admin endpoint.

```powershell
Connect-SPOService -Url https://<tenant>-admin.sharepoint.com
```

Replace `<tenant>` with your tenant name.

Sign in with an account that has the required admin role.

> [!TIP]
> Use a dedicated administrative account that follows your organization's privileged access policies.

## Inventory SharePoint Embedded applications

List SharePoint Embedded applications registered in the tenant.

```powershell
Get-SPOApplication
```

View details for a specific owning application.

```powershell
Get-SPOApplication -OwningApplicationId <OwningApplicationId>
```

For command details, see [Get-SPOApplication](/powershell/module/sharepoint-online/get-spoapplication).

## View guest application permissions

View guest application permissions for a SharePoint Embedded application.

```powershell
Get-SPOApplication -OwningApplicationId <OwningApplicationId> -ApplicationId <ApplicationId>
```

`OwningApplicationId` is the ID of the SharePoint Embedded owning application.
`ApplicationId` is the guest application ID that has access to the SharePoint Embedded application.

Application administration cmdlets don't apply to Microsoft Loop.

## Configure application sharing

Consuming tenant admins can configure the external sharing capability at the application level.

```powershell
Set-SPOApplication -OwningApplicationId <OwningApplicationId> -SharingCapability <SharingCapability> -OverrideTenantSharingCapability <OverrideTenantSharingCapability>
```

`SharingCapability` supports these values:

- `Disabled`
- `ExistingExternalUserSharingOnly`
- `ExternalUserSharingOnly`
- `ExternalUserAndGuestSharing`

The `OverrideTenantSharingCapability` value can be `$true` or `$false`.
Review your tenant sharing policy before overriding tenant sharing behavior.

## List active containers

List active containers for a SharePoint Embedded application.

```powershell
Get-SPOContainer -OwningApplicationId <OwningApplicationId> | FT
```

The `OwningApplicationId` is the ID of the SharePoint Embedded application.

For Microsoft Loop containers, use this owning app ID with container administration cmdlets:

```text
a187e399-0c36-4b98-8f04-1edc167a0996
```

For command details, see [Get-SPOContainer](/powershell/module/sharepoint-online/get-spocontainer).

## List containers sorted by storage

Sort containers by storage when investigating cost or growth.

```powershell
Get-SPOContainer -OwningApplicationId <OwningApplicationId> -SortByStorage <value> | FT
```

Use `Ascending` or `Descending` for `<value>`.

Use this view with [Monitor usage, billing, and cost](monitor-usage-billing-cost.md) to find high-growth apps or containers.

## Get container details

View details for a specific container by container ID or site URL.

```powershell
Get-SPOContainer -Identity <ContainerId>
Get-SPOContainer -Identity <SiteURL>
```

The detailed result can include storage, ownership details, site URL, label information, and owner count.

Use the site URL when configuring some compliance controls in Microsoft Purview.

## Set or remove a sensitivity label

Set the sensitivity label for a container.

```powershell
Set-SPOContainer -Identity <ContainerID> -SensitivityLabel <SensitivityLabel>
```

Remove the sensitivity label from a container.

```powershell
Set-SPOContainer -Identity <ContainerID> -RemoveLabel
```

Coordinate sensitivity label changes with compliance administrators.

For compliance guidance, see [Apply security and compliance controls](apply-security-compliance-controls.md).

## Manage container membership

Consuming-tenant administrators can add, remove, or change a user's role on a container directly:

```powershell
Add-SPOContainerUser -ContainerId <ContainerId> -LoginName <UserPrincipalName> -Role <Reader|Writer|Manager|Owner>
Set-SPOContainerUser -ContainerId <ContainerId> -LoginName <UserPrincipalName> -Role <Reader|Writer|Manager|Owner>
Remove-SPOContainerUser -ContainerId <ContainerId> -LoginName <UserPrincipalName>
```

For command details, see [Add-SPOContainerUser](/powershell/module/microsoft.online.sharepoint.powershell/add-spocontaineruser), [Set-SPOContainerUser](/powershell/module/microsoft.online.sharepoint.powershell/set-spocontaineruser), and [Remove-SPOContainerUser](/powershell/module/microsoft.online.sharepoint.powershell/remove-spocontaineruser).

A user can have only one role in a container at a time.

## Delete a container

Move a container to the deleted container collection.

```powershell
Remove-SPOContainer -Identity <ContainerId>
```

Deleting a container can cause data loss, broken links, application failures, and permission issues.

Notify container owners and app owners before deleting.

> [!WARNING]
> Deleting a container may interrupt usage of the SharePoint Embedded application that owns it.

For command details, see [Remove-SPOContainer](/powershell/module/sharepoint-online/remove-spocontainer).

## View deleted containers

List deleted containers in the deleted container collection.

```powershell
Get-SPODeletedContainer
```

For command details, see [Get-SPODeletedContainer](/powershell/module/sharepoint-online/get-spodeletedcontainer).

## Restore a deleted container

Restore a deleted container from the deleted container collection.

```powershell
Restore-SPODeletedContainer -Identity <ContainerId>
```

After restore, validate the container in the SharePoint admin center and ask the app owner to test the app.

## Permanently delete a container

Permanently delete a container from the deleted container collection when recovery is no longer required.

```powershell
Remove-SPODeletedContainer -Identity <ContainerId>
```

For command details, see [Remove-SPODeletedContainer](/powershell/module/sharepoint-online/remove-spodeletedcontainer).

> [!CAUTION]
> Permanent deletion can't be reversed.
> Confirm retention and legal requirements before running this command.

## Manage guest application permissions

If permitted, admins can add, edit, and remove guest application access to SharePoint Embedded applications.
Use `Set-SPOApplicationPermission` for this scenario.

```powershell
Set-SPOApplicationPermission
   [-OwningApplicationId] <OwningApplicationid>
   [-GuestApplicationId] <GuestApplicationId>
   [-PermissionAppOnly] <AppOnlyPermission>
   [[-PermissionDelegated] <DelegatedPermission>]
```

For command details, see [Set-SPOApplicationPermission](/powershell/module/sharepoint-online/set-spoapplicationpermission).

## Script safely

Follow these operational practices.

- Export inventory before lifecycle changes.
- Test filters with read-only commands first.
- Use explicit container IDs for delete and restore operations.
- Log command output for change records.
- Notify app owners before deleting or restoring containers.
- Review storage-heavy containers before making cost decisions.
- Coordinate label and compliance changes with compliance admins.

## Related content

- [Manage containers in SharePoint admin center](manage-containers-sharepoint-admin-center.md)
- [Monitor usage, billing, and cost](monitor-usage-billing-cost.md)
- [Review audit events](review-audit-events.md)
- [Apply security and compliance controls](apply-security-compliance-controls.md)

## Next steps

Monitor consumption in [Monitor usage, billing, and cost](monitor-usage-billing-cost.md).
