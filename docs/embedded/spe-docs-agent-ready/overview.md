---
title: SharePoint Embedded overview
description: API-only file and document storage on Microsoft 365, with containers, container types, and Purview-backed compliance.
ms.topic: concept-article
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
agent:
  schema_version: 1
  task_type: concept
  difficulty: beginner
  roles: [app-developer, enterprise-developer, consuming-admin, owning-admin, m365-admin, compliance-officer, end-user, migration-engineer]
  prerequisites: []
  next_steps:
    - uri: /sharepoint/dev/embedded/scenarios-and-use-cases
      when: always
    - uri: /sharepoint/dev/embedded/getting-started/spembedded-for-vscode
      when: always
    - uri: /sharepoint/dev/embedded/development/app-architecture
      when: always
  related:
    - uri: /sharepoint/dev/embedded/scenarios-and-use-cases
    - uri: /sharepoint/dev/embedded/development/app-architecture
    - uri: /sharepoint/dev/embedded/development/auth
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
    - uri: /sharepoint/dev/embedded/compliance/security-and-compliance
    - uri: /sharepoint/dev/embedded/administration/billing/billing
    - uri: /sharepoint/dev/embedded/whats-new
  stability: ga
  last_validated: proposed
---

# SharePoint Embedded overview
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

## What it is

SharePoint Embedded is a cloud-based, API-only file and document management system that any application can use. It lets app developers harness the Microsoft 365 file and document storage platform without surfacing the SharePoint user interface. Every operation is a Microsoft Graph call; the full operation index is published at [`/sharepoint/dev/embedded/api-surface.json`](/sharepoint/dev/embedded/api-surface.json).

Content lives in **File Storage Containers** (`fileStorageContainer`), often called containers for short. A container is similar to an API-only document library: it holds a single drive whose files and folders are standard `driveItem` resources, supports any file type and folder structure, and can store multiple terabytes of content. Each container belongs to exactly one **container type**, which is owned 1:1 by a single application — the container type is the unit of ownership, billing, and permission scope.

When an application is used in a Microsoft 365 tenant, SharePoint Embedded creates a separate storage partition within that tenant. The partition has no user experience of its own; its documents are accessible only through APIs and only to the owning application. Containers in that partition are dedicated to and accessible by just that app, so the app's content is isolated within the tenant boundary.

> [!NOTE]
> SharePoint Embedded content inherits Microsoft Purview compliance from the tenant where it is stored (the consuming tenant): eDiscovery, auditing, data loss prevention (DLP), retention policies, sensitivity labels, and conditional access apply to that content because it resides in the consumer's Microsoft 365 tenant.

SharePoint Embedded lets developers integrate advanced Microsoft 365 features into their apps, including collaborative Office capabilities, Microsoft Purview security and compliance tools, and Copilot capabilities.

## Why it matters / when to use

Use SharePoint Embedded when an application needs first-class document storage and collaboration — view, edit, and co-authoring of Word, Excel, and PowerPoint in Office Web and Desktop, plus search, sharing, automatic versioning, and a recycle bin — while the storage belongs to the app rather than to an end user's personal OneDrive or SharePoint site.

It serves two primary audiences:

- **Enterprises** building line-of-business applications that store and manage content within their own Microsoft 365 tenant, outside of regular Microsoft 365 entitlements.
- **ISVs** building multitenant applications that manage content within each customer's Microsoft 365 tenant.

Certain Microsoft products, such as Loop and Designer, also use SharePoint Embedded to manage customer content.

The application supplies the entire user experience layer; SharePoint Embedded supplies the API-driven storage, collaboration, and compliance underneath. For worked examples by persona, see [Scenarios and use cases](/sharepoint/dev/embedded/scenarios-and-use-cases).

Billing is **pay-as-you-go (PAYG)**. The storage partition does not count toward a tenant's other Microsoft 365 entitlements, including total SharePoint storage. Instead it is billed separately through an Azure subscription on a metered consumption model based on storage in active and archived state and the number of API calls. See [Billing overview](/sharepoint/dev/embedded/administration/billing/billing).

## When NOT to use

- When end users need to own and manage their own files in their personal OneDrive or a standard SharePoint site — use SharePoint or OneDrive directly.
- When you need raw object/blob storage with no document semantics (no co-authoring, previews, search, or Purview) — use Azure Blob Storage.
- When users need the full, flexible SharePoint site experience and direct site navigation — SharePoint Embedded is headless and exposes no UI other than your application's.
- When the app has no Microsoft 365 / Microsoft Entra identity context to authenticate Graph calls.

## Key terms

| Term | Meaning |
|---|---|
| Container | A `fileStorageContainer`; the storage boundary holding one drive of `driveItem` content. Each can store multiple terabytes and is permissioned independently. |
| Container type | The definition bound 1:1 to an application that governs ownership, billing classification, and the permissions the app may hold. |
| Owning tenant | The tenant of the application/ISV that creates and owns the container type. |
| Consuming tenant | The tenant where the app is registered and containers are created and stored. For an enterprise building for itself, the owning and consuming tenant are the same. |
| Storage partition | The separate, API-only partition SharePoint Embedded creates inside a consuming tenant; it holds the app's containers and has no user experience. |
| Content plane | Operations on containers and their `driveItem` content. |
| Control plane | Operations on container types, registrations, billing, and consent. |

## How it fits together

In the **owning tenant**, an ISV or enterprise developer registers a Microsoft Entra application and creates a container type bound 1:1 to that app (a **control plane** operation). The container type carries a billing classification and the set of permissions the app may hold. For the full conceptual model, see [Application architecture](/sharepoint/dev/embedded/development/app-architecture).

In each **consuming tenant**, the same app is registered, the container type is registered on that tenant, and admin consent is granted. Containers are then created and their `driveItem` content managed there (the **content plane**). The storage partition — the actual files, and the Microsoft Purview compliance that governs them — lives in the consuming tenant and is subject to that tenant's Microsoft 365 settings. For an ISV, this is the customer's tenant; for an enterprise building for itself, it is the enterprise's own tenant.

Because the consuming tenant's Microsoft 365 settings apply, app documents are automatically in scope for that tenant's Purview compliance, risk, and security controls. See [Security and compliance](/sharepoint/dev/embedded/compliance/security-and-compliance).

To get started, you can create a container in 15 minutes or less with the [SharePoint Embedded extension for Visual Studio Code](/sharepoint/dev/embedded/getting-started/spembedded-for-vscode), or follow the guided training:

- [Microsoft Learning: SharePoint Embedded — overview & configuration](https://learn.microsoft.com/en-us/training/modules/sharepoint-embedded-setup)
- [Microsoft Learning: SharePoint Embedded — building applications](https://learn.microsoft.com/en-us/training/modules/sharepoint-embedded-create-app)

## Related

- [Scenarios and use cases](/sharepoint/dev/embedded/scenarios-and-use-cases)
- [Application architecture](/sharepoint/dev/embedded/development/app-architecture)
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth)
- [Container types](/sharepoint/dev/embedded/getting-started/containertypes)
- [Security and compliance](/sharepoint/dev/embedded/compliance/security-and-compliance)
- [Billing overview](/sharepoint/dev/embedded/administration/billing/billing)
- [What's new](/sharepoint/dev/embedded/whats-new)
- [API surface index](/sharepoint/dev/embedded/api-surface.json)
