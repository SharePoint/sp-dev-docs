---
title: What's new in SharePoint Embedded?
description: Updates about Microsoft SharePoint Embedded.
ms.date: 11/12/2025
ms.localizationpriority: medium
---

# What's new in SharePoint Embedded

## October 2025

- [recycleBinItem: restore](/graph/api/filestoragecontainer-restore-recyclebinitem) supports `driveItemId` as an alternate key to enable restoring a **recycleBinItem** if the ID of the original **driveItem** is known.
- [Microsoft 365 Archive](/microsoft-365/archive/archive-overview) is previewing support for [SharePoint Embedded](./overview.md) to a limited number of customers. You can [sign up for the private preview](https://forms.office.com/r/98Z4iqSKya) today.

## September 2025

- [SharePoint Embedded migration](/graph/api/resources/sharepointmigration-api-overview) APIs are now available in the beta Microsoft Graph endpoint.
- [driveItem: invite](/graph/api/driveitem-invite) has clearer documentation on restrictions for the root item of drives in OneDrive for home, as well as inviting _new_ guests via app-only access.
- [driveItem: copy](/graph/api/driveitem-copy) has clearer documentation on behaviors around metadata, versions, cross-geo operations, and known issues.
- New cmdlets for consuming tenant administrators to [add](/powershell/module/microsoft.online.sharepoint.powershell/add-spocontaineruser), [remove](/powershell/module/microsoft.online.sharepoint.powershell/remove-spocontaineruser), or [change](/powershell/module/microsoft.online.sharepoint.powershell/set-spocontaineruser) container membership were added to the [SharePoint Embedded Containers Management Shell](/powershell/sharepoint/sharepoint-online/introduction-sharepoint-online-management-shell).

## August 2025

- [fileStorageContainerType](/graph/api/resources/filestoragecontainertype) APIs are now available in the beta Microsoft Graph endpoint.
- [fileStorageContainerTypeRegistration](/graph/api/resources/filestoragecontainertyperegistration) APIs are now available in the beta Microsoft Graph endpoint.

## July 2025

- [driveItem: copy](/graph/api/driveitem-copy) now supports the `childrenOnly` and `includeAllVersionHistory` request parameters in the v1.0 Microsoft Graph endpoint.

## June 2025

- The `CopilotEmbeddedChatHosts` container type setting is now required to use [SharePoint Embedded agent](./development/declarative-agent/spe-da-adv.md#csp-policies). It must be set by the application owner via [`Set-SPOContainerTypeConfiguration`](/powershell/module/sharepoint-online/set-spocontainertypeconfiguration) and can optionally be overridden by consuming tenant administrators via [`Set-SPOApplication`](/powershell/module/SharePoint-online/set-spoapplication).

## May 2025

- The limit of container types that a partner tenant can create has been increased to 25 by default. See [Limits and Calling Patterns](./development/limits-calling.md#size-limits).
- SharePoint Embedded agent switched to a consumption-based model for all users regardless of whether they have a Copilot license or not. See [SharePoint Embedded agent](./development/declarative-agent/spe-da.md).
- The guidance on how to grant admin consent to a SharePoint Embedded application has been updated to use URL-based admin consent. See [Authentication and authorization](./development/auth.md#whats-next).
- Documented an exceptional access pattern for operations that may require a user license. See [Authentication and authorization](./development/auth.md#operations-that-require-a-user-license).
