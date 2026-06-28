---
title: What's new in SharePoint Embedded
description: Dated log of SharePoint Embedded releases — new Graph APIs, GA and preview milestones, cloud availability, and tooling.
ms.topic: reference
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
agent:
  schema_version: 1
  task_type: reference
  difficulty: beginner
  roles: [app-developer, enterprise-developer, consuming-admin, owning-admin, m365-admin, migration-engineer]
  prerequisites:
    - uri: /sharepoint/dev/embedded/overview
      kind: concept
  api_surface: []
  next_steps:
    - uri: /sharepoint/dev/embedded/overview
      when: always
  related:
    - uri: /sharepoint/dev/embedded/overview
    - uri: /sharepoint/dev/embedded/development/auth
    - uri: /sharepoint/dev/embedded/development/limits-calling
    - uri: /sharepoint/dev/embedded/api-surface.json
  stability: ga
  last_validated: proposed
---

# What's new in SharePoint Embedded
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

This page is a dated log of SharePoint Embedded releases. Entries are listed newest first. Endpoint availability (beta versus v1.0) is recorded per entry; confirm any operation's method, path, and permissions against [`/sharepoint/dev/embedded/api-surface.json`](/sharepoint/dev/embedded/api-surface.json) before relying on it.

> [!NOTE]
> Some links below point to Microsoft Graph reference, Microsoft Purview, PowerShell, or training pages outside the SharePoint Embedded doc set; those keep their full `https://learn.microsoft.com` URLs.

## Release log

### March 2026

| Change | Status / endpoint | Details |
|---|---|---|
| SharePoint Embedded agent SDK deprecated | Deprecated | Replaced by the [SharePoint Embedded knowledge source in Microsoft Foundry](/sharepoint/dev/embedded/development/declarative-agent/sharepoint-embedded-knowledge-source). |
| `fileStorageContainerType` **permissions** relationship | beta | Manages the container type's owners. See [Managing SharePoint Embedded applications created in the owning tenant](/sharepoint/dev/embedded/development/auth#managing-sharepoint-embedded-applications-created-in-the-owning-tenant) and the [`fileStorageContainerType` resource](https://learn.microsoft.com/en-us/graph/api/resources/filestoragecontainertype). |
| `fileStorageContainer` **informationBarrier** property | beta | Manages the container's information barrier. See [Information barriers for SharePoint](https://learn.microsoft.com/en-us/purview/information-barriers-sharepoint) and the [`fileStorageContainer` resource](https://learn.microsoft.com/en-us/graph/api/resources/filestoragecontainer). |
| Native PDF viewing — search, comments and sticky notes, printing | beta + v1.0 | Delivered via the [`driveItem: preview`](https://learn.microsoft.com/en-us/graph/api/driveitem-preview) API. |

### February 2026

| Change | Status / endpoint | Details |
|---|---|---|
| SharePoint Embedded connector for Power Platform | GA | The [SharePoint Embedded connector](https://learn.microsoft.com/en-us/connectors/sharepointembedded/) for [Power Platform](https://learn.microsoft.com/en-us/power-platform/) is now generally available. |
| Availability in Microsoft 365 operated by 21Vianet (China) | GA | See [Microsoft Graph national cloud deployments](https://learn.microsoft.com/en-us/graph/deployments). |
| Migration APIs support file version history | — | [SharePoint Embedded migration](https://learn.microsoft.com/en-us/graph/api/resources/sharepointmigration-api-overview) APIs now support migrating file version history. |

### January 2026

| Change | Status / endpoint | Details |
|---|---|---|
| Container column APIs | v1.0 | [List columns](https://learn.microsoft.com/en-us/graph/api/filestoragecontainer-list-columns), [create column](https://learn.microsoft.com/en-us/graph/api/filestoragecontainer-post-columns), [update column](https://learn.microsoft.com/en-us/graph/api/filestoragecontainer-update-column), and [delete column](https://learn.microsoft.com/en-us/graph/api/filestoragecontainer-delete-column) are now available on v1.0. |

### December 2025

| Change | Status / endpoint | Details |
|---|---|---|
| `fileStorageContainerType` APIs | v1.0 | See the [`fileStorageContainerType` resource](https://learn.microsoft.com/en-us/graph/api/resources/filestoragecontainertype). |
| `fileStorageContainerTypeRegistration` APIs | v1.0 | See the [`fileStorageContainerTypeRegistration` resource](https://learn.microsoft.com/en-us/graph/api/resources/filestoragecontainertyperegistration). |

### November 2025

| Change | Status / endpoint | Details |
|---|---|---|
| Availability in Microsoft 365 GCC | GA (not GCC High or DoD) | For US Government customers. See [Microsoft Graph national cloud deployments](https://learn.microsoft.com/en-us/graph/deployments). |
| Migration APIs | v1.0 | [SharePoint Embedded migration](https://learn.microsoft.com/en-us/graph/api/resources/sharepointmigration-api-overview) APIs are now available on v1.0. |

### October 2025

| Change | Status / endpoint | Details |
|---|---|---|
| `recycleBinItem: restore` accepts `driveItemId` | — | [recycleBinItem: restore](https://learn.microsoft.com/en-us/graph/api/filestoragecontainer-restore-recyclebinitem) supports `driveItemId` as an alternate key, enabling restore when the original `driveItem` ID is known. |
| Microsoft 365 Archive support | Private preview | [Microsoft 365 Archive](https://learn.microsoft.com/en-us/microsoft-365/archive/archive-overview) is previewing SharePoint Embedded support for a limited number of customers. [Sign up for the private preview](https://forms.office.com/r/98Z4iqSKya). |

### September 2025

| Change | Status / endpoint | Details |
|---|---|---|
| Migration APIs | beta | [SharePoint Embedded migration](https://learn.microsoft.com/en-us/graph/api/resources/sharepointmigration-api-overview) APIs available on beta. |
| `driveItem: invite` documentation | Docs update | Clarified restrictions for the root item of OneDrive for home drives and inviting *new* guests via app-only access. See [driveItem: invite](https://learn.microsoft.com/en-us/graph/api/driveitem-invite). |
| `driveItem: copy` documentation | Docs update | Clarified behaviors for metadata, versions, cross-geo operations, and known issues. See [driveItem: copy](https://learn.microsoft.com/en-us/graph/api/driveitem-copy). |
| Container membership cmdlets | PowerShell | New cmdlets for consuming tenant administrators: [add](https://learn.microsoft.com/en-us/powershell/module/microsoft.online.sharepoint.powershell/add-spocontaineruser), [remove](https://learn.microsoft.com/en-us/powershell/module/microsoft.online.sharepoint.powershell/remove-spocontaineruser), and [change](https://learn.microsoft.com/en-us/powershell/module/microsoft.online.sharepoint.powershell/set-spocontaineruser) container membership, in the [SharePoint Online Management Shell](https://learn.microsoft.com/en-us/powershell/sharepoint/sharepoint-online/introduction-sharepoint-online-management-shell). |

### August 2025

| Change | Status / endpoint | Details |
|---|---|---|
| `fileStorageContainerType` APIs | beta | See the [`fileStorageContainerType` resource](https://learn.microsoft.com/en-us/graph/api/resources/filestoragecontainertype). |
| `fileStorageContainerTypeRegistration` APIs | beta | See the [`fileStorageContainerTypeRegistration` resource](https://learn.microsoft.com/en-us/graph/api/resources/filestoragecontainertyperegistration). |

### July 2025

| Change | Status / endpoint | Details |
|---|---|---|
| `driveItem: copy` request parameters | v1.0 | Now supports `childrenOnly` and `includeAllVersionHistory`. See [driveItem: copy](https://learn.microsoft.com/en-us/graph/api/driveitem-copy). |

### June 2025

| Change | Status / endpoint | Details |
|---|---|---|
| `CopilotEmbeddedChatHosts` container type setting now required for SharePoint Embedded agent | Config change | Set by the application owner via [`Set-SPOContainerTypeConfiguration`](https://learn.microsoft.com/en-us/powershell/module/sharepoint-online/set-spocontainertypeconfiguration); optionally overridden by consuming tenant administrators via [`Set-SPOApplication`](https://learn.microsoft.com/en-us/powershell/module/sharepoint-online/set-spoapplication). See [CSP policies](/sharepoint/dev/embedded/development/declarative-agent/spe-da-adv#csp-policies). |

### May 2025

| Change | Status / endpoint | Details |
|---|---|---|
| Default container type limit raised to 25 per partner tenant | Limit change | See [Limits and calling patterns](/sharepoint/dev/embedded/development/limits-calling#size-limits). |
| SharePoint Embedded agent moved to consumption-based model | Billing change | Applies to all users regardless of Copilot license. See [SharePoint Embedded agent](/sharepoint/dev/embedded/development/declarative-agent/spe-da). |
| Admin-consent guidance updated to URL-based admin consent | Docs update | See [Authentication and authorization](/sharepoint/dev/embedded/development/auth#whats-next). |
| Documented access pattern for operations requiring a user license | Docs update | See [Operations that require a user license](/sharepoint/dev/embedded/development/auth#operations-that-require-a-user-license). |

## Examples

The release log drives a few common reader decisions:

- **Choosing an endpoint version.** Operations such as `fileStorageContainerType` and `fileStorageContainerTypeRegistration` graduated from beta (August 2025) to v1.0 (December 2025). Prefer v1.0 for production. Container type create/list/update/delete in [`/sharepoint/dev/embedded/api-surface.json`](/sharepoint/dev/embedded/api-surface.json) are still tracked as `beta` there; reconcile against the live `$metadata` before publishing.
- **Migrating with version history.** Migration APIs reached v1.0 in November 2025, and file version history migration was added in February 2026. Plan migrations against v1.0.
- **Checking cloud availability.** SharePoint Embedded reached GCC in November 2025 (not GCC High or DoD) and Microsoft 365 operated by 21Vianet in February 2026. Confirm your target cloud via [Microsoft Graph national cloud deployments](https://learn.microsoft.com/en-us/graph/deployments).

## See also

- [SharePoint Embedded overview](/sharepoint/dev/embedded/overview)
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth)
- [Limits and calling patterns](/sharepoint/dev/embedded/development/limits-calling)
- [API surface index](/sharepoint/dev/embedded/api-surface.json)
- [Microsoft Graph SharePoint Embedded API reference](https://learn.microsoft.com/en-us/graph/api/resources/filestoragecontainer)
