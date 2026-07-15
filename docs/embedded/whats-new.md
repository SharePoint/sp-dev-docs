---
title: What's new in SharePoint Embedded?
description: Updates about Microsoft SharePoint Embedded.
ms.date: 06/04/2025
ms.reviewer: dilucesr
ms.localizationpriority: high
ai-usage: ai-assisted
---

# What's new in SharePoint Embedded

**Applies to:** All

<!-- agent:
task_type: reference
audience: all
outcome: Review recent SharePoint Embedded feature and documentation updates.
next: overview.md
-->

## July 2026

- You can [use the MCP server to build apps with a coding agent](./build/sharepoint-embedded-mcp-server.md). The open-source SharePoint Embedded MCP server npm package ([`@microsoft/spe-mcp`](https://github.com/microsoft/SharePoint-Embedded-MCP-Server)) lets MCP-compatible AI clients—such as GitHub Copilot in Visual Studio Code or the CLI, Claude, or Cursor—provision and manage SharePoint Embedded applications through natural language.

## June 2026

- [fileStorageContainerType](/graph/api/resources/filestoragecontainertype) has a new `urlTemplate` [setting](/graph/api/resources/filestoragecontainertypesettings). For more information on what the `urlTemplate` setting does, see [Create and configure a container type](./build/create-container-type.md#configure-container-type-behavior).
- The [`FileStorageContainerType.Manage.All`](/graph/permissions-reference#filestoragecontainertypemanageall) Microsoft Graph permission no longer requires the [SharePoint Embedded Administrator](./admin/admin-overview.md#assign-the-sharepoint-embedded-administrator-role) or [Global Administrator](/entra/identity/role-based-access-control/permissions-reference#global-administrator) role. Any non-guest user in the owning tenant can [create a container type](./build/create-container-type.md) and is automatically assigned as an [owner of that container type](./build/configure-authentication-authorization.md#manage-container-type-owners).

## May 2026

- [fileStorageContainerType](/graph/api/resources/filestoragecontainertype) operations now emit audit logs for `ContainerTypeCreated`, `ContainerTypeDeleted`, `ContainerTypeUpdated`, and `ContainerTypeOwnersUpdated`. For more information, see [Audit events](./reference/audit-events.md#container-type-activities).
- [fileStorageContainer](/graph/api/resources/filestoragecontainer) supports bulk creation and update of `permissions` using delta patch. For more information, see [Upsert permissions](/graph/api/filestoragecontainer-patch-permissions).
- Clarified the authorization model for administrative actions on containers. For more information, see [Handle operations not exposed through Graph](./build/configure-authentication-authorization.md#handle-operations-not-exposed-through-graph).

## March 2026

- [SharePoint Embedded agent SDK](./build/agent-experiences.md) has been deprecated in favor of the new [SharePoint Embedded knowledge source in Microsoft Foundry](./build/sharepoint-embedded-knowledge-source.md).
- [fileStorageContainerType](/graph/api/resources/filestoragecontainertype) resource has a new `permissions` relationship that allows management of the container type's owners. This is available in the beta Microsoft Graph endpoint. For more information, see [Manage container type owners](./build/configure-authentication-authorization.md#manage-container-type-owners).
- [fileStorageContainer](/graph/api/resources/filestoragecontainer) resource has a new `informationBarrier` property that allows management of the container's information barrier. This is available in the beta Microsoft Graph endpoint. For more information, see [Information Barriers](/purview/information-barriers-sharepoint).
- The SharePoint Embedded native PDF viewing experience now supports searching within the file, viewing comments and sticky notes embedded on the file, and printing. The new features are now available through the [driveItem: preview](/graph/api/driveitem-preview) API in both the beta and v1.0 Microsoft Graph endpoints.

## February 2026

- [SharePoint Embedded connector](/connectors/sharepointembedded/) for [Power Platform](/power-platform/) is now generally available.
- [SharePoint Embedded](./overview.md) is now available in [Microsoft 365 operated by 21Vianet](/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-operated-by-21vianet) for customers in China. For more information, see [Microsoft Graph national cloud deployments](/graph/deployments).
- [SharePoint Embedded migration](/graph/api/resources/sharepointmigration-api-overview) APIs now support migrating file version history.

## January 2026

- [fileStorageContainer](/graph/api/resources/filestoragecontainer) APIs to [list columns](/graph/api/filestoragecontainer-list-columns), [create column](/graph/api/filestoragecontainer-post-columns), [update column](/graph/api/filestoragecontainer-update-column), and [delete column](/graph/api/filestoragecontainer-delete-column) are now available in the v1.0 Microsoft Graph endpoint.

## December 2025

- [fileStorageContainerType](/graph/api/resources/filestoragecontainertype) APIs are now available in the v1.0 Microsoft Graph endpoint.
- [fileStorageContainerTypeRegistration](/graph/api/resources/filestoragecontainertyperegistration) APIs are now available in the v1.0 Microsoft Graph endpoint.

## November 2025

- [SharePoint Embedded](./overview.md) is now available in [Microsoft 365 GCC](/office365/servicedescriptions/office-365-platform-service-description/office-365-us-government/gcc) (not yet GCC High or DoD) for US Government customers. For more information, see [Microsoft Graph national cloud deployments](/graph/deployments).
- [SharePoint Embedded migration](/graph/api/resources/sharepointmigration-api-overview) APIs are now available in the v1.0 Microsoft Graph endpoint.

## October 2025

- [recycleBinItem: restore](/graph/api/filestoragecontainer-restore-recyclebinitem) supports `driveItemId` as an alternate key to enable restoring a `recycleBinItem` if the ID of the original `driveItem` is known.
- [Microsoft 365 Archive](/microsoft-365/archive/archive-overview) is previewing support for [SharePoint Embedded](./overview.md) to a limited number of customers. You can [sign up for the private preview](https://forms.office.com/r/98Z4iqSKya) today.

## September 2025

- [SharePoint Embedded migration](/graph/api/resources/sharepointmigration-api-overview) APIs are now available in the beta Microsoft Graph endpoint.
- [driveItem: invite](/graph/api/driveitem-invite) has clearer documentation on restrictions for the root item of drives in OneDrive for home, and inviting _new_ guests by using app-only access.
- [driveItem: copy](/graph/api/driveitem-copy) has clearer documentation on behaviors around metadata, versions, cross-geo operations, and known issues.
- New cmdlets for consuming tenant administrators to [add](/powershell/module/microsoft.online.sharepoint.powershell/add-spocontaineruser), [remove](/powershell/module/microsoft.online.sharepoint.powershell/remove-spocontaineruser), or [change](/powershell/module/microsoft.online.sharepoint.powershell/set-spocontaineruser) container membership were added to the [SharePoint Embedded Containers Management Shell](/powershell/sharepoint/sharepoint-online/introduction-sharepoint-online-management-shell).

## August 2025

- [fileStorageContainerType](/graph/api/resources/filestoragecontainertype) APIs are now available in the beta Microsoft Graph endpoint.
- [fileStorageContainerTypeRegistration](/graph/api/resources/filestoragecontainertyperegistration) APIs are now available in the beta Microsoft Graph endpoint.

## July 2025

- [driveItem: copy](/graph/api/driveitem-copy) now supports the `childrenOnly` and `includeAllVersionHistory` request parameters in the v1.0 Microsoft Graph endpoint.

## May 2025

- The limit of container types that a partner tenant can create has been increased to 25 by default. For more information, see [Limits and Calling Patterns](./plan/limits-calling-patterns.md#size-limits).
- SharePoint Embedded agent switched to a consumption-based model for all users regardless of whether they have a Copilot license or not. For more information, see [SharePoint Embedded agent](./build/agent-experiences.md).
- The guidance on how to grant admin consent to a SharePoint Embedded application has been updated to use URL-based admin consent. For more information, see [Grant admin consent](./build/register-application-permissions.md#grant-admin-consent).
- Documented an exceptional access pattern for operations that may require a user license. For more information, see [Handle operations not exposed through Graph](./build/configure-authentication-authorization.md#handle-operations-not-exposed-through-graph).
