---
title: SharePoint Embedded Overview
description: Microsoft SharePoint Embedded is an API-only file and document management platform built on Microsoft 365. Start here and route to the right task.
ms.date: 07/10/2026
ms.reviewer: shsaravanan
ms.localizationpriority: high
---

# What is SharePoint Embedded?

Microsoft SharePoint Embedded is a cloud-based, API-only file and document management system you can use in any application. It lets app developers harness the Microsoft 365 file and document storage platform, and is suitable for enterprises building line-of-business applications and ISVs building multitenant applications.

SharePoint Embedded has no standalone end-user UI and no no-code option. You access it programmatically through Microsoft Graph, so using SharePoint Embedded always involves building or deploying an application.

SharePoint Embedded brings advanced Microsoft 365 capabilities into your app, including Office collaboration, Microsoft Purview security and compliance, and Copilot.

> [!IMPORTANT]
> Help us shape the future of SharePoint Embedded! Take our [quick survey](https://forms.microsoft.com/r/1YpGd2pAUS) and share your thoughts.

<!-- agent:
task_type: concept
audience: all
outcome: The reader understands what SharePoint Embedded is and is routed to the correct task area (plan, build, publish, or administer).
next: plan/app-tenant-architecture.md
-->

## Choose your path

This page is a router. Pick the row that matches what you're trying to do.

> [!TIP]
> **Not sure which path?** Ask one question: *do you write code, or manage a tenant?*
> **Developers** write and deploy applications that call SharePoint Embedded APIs — start with **Build an app**.
> **Administrators** install, consent to, and manage SharePoint Embedded apps inside a Microsoft 365 tenant — start with **Install or manage apps**.

| I want to… | Start here |
|---|---|
| **Understand SharePoint Embedded and decide if it fits** | [Scenarios and use cases](scenarios-and-use-cases.md) · keep reading below |
| **Plan a solution** (architect, IT decision maker) | [Plan a SharePoint Embedded solution](plan/app-tenant-architecture.md) |
| **Build an app** (developer) | [Quickstart: build your first app with VS Code](build/quickstart-vscode.md) |
| **Ship my app to customers** (ISV / developer) | [Publish and onboard customers](publish/prepare-customer-installation.md) |
| **Install or manage apps in my tenant** (admin) | [Install and manage apps](admin/admin-overview.md) |
| **Govern and secure content** (compliance admin) | [Apply security and compliance controls](admin/apply-security-compliance-controls.md) |
| **Look something up** | [Reference](reference/glossary.md) · [Graph API](/graph/api/resources/filestoragecontainer) |

## Key concepts in 60 seconds

### App documents stay in the customer's Microsoft 365 tenant

When a customer uses a SharePoint Embedded application, SharePoint Embedded creates a dedicated storage partition inside that customer's Microsoft 365 tenant. The partition has no user experience of its own — its documents are reachable only through Microsoft Graph APIs. Content is accessible to the developer's application, but it physically resides in the customer's tenant.

### File Storage Containers

SharePoint Embedded apps store files in an entity called a **File Storage Container** (or *container*). Think of a container as an API-only document library. Your app can create many containers in each tenant that uses it, and each container can be permissioned separately and hold terabytes of content. Containers are dedicated to — and accessible only by — your app, keeping your data isolated within the tenant boundary.

To learn how containers and container types relate, see [Understand container types and containers](plan/container-types-containers.md).

### App-managed content experiences

By default, content stored by a SharePoint Embedded app is accessible only through that owning app, which also provides the user experience for it. You can light up rich Microsoft 365 capabilities, including:

- Core content management — any file type, folders, search, sharing, versioning, recycle bin.
- Office collaboration — view, edit, and co-author Word, Excel, and PowerPoint on the web and desktop.
- Low-code integration — the [SharePoint Embedded connector](/connectors/sharepointembedded/) for [Power Platform](/power-platform/) (generally available February 2026).

SharePoint Embedded is used by Microsoft products (such as Loop and Designer), by ISVs embedding content management in their apps, and by enterprises storing content outside their regular Microsoft 365 entitlements.

### Compliance and billing follow the tenant

Because content lives in the customer's Microsoft 365 tenant, it's subject to that tenant's settings — including Microsoft Purview compliance (eDiscovery, auditing, DLP, retention, sensitivity labels, conditional access). The SharePoint Embedded partition doesn't count against Microsoft 365 storage entitlements; it's billed separately through an Azure subscription on a pay-as-you-go, metered model based on storage and API usage. See [Choose a billing model](plan/choose-billing-model.md) and [Billing meters](reference/billing-meters.md).

### Availability

SharePoint Embedded is available in the Microsoft 365 commercial cloud, in [Microsoft 365 GCC](/office365/servicedescriptions/office-365-platform-service-description/office-365-us-government/gcc) (November 2025, not yet GCC High or DoD), and in [Microsoft 365 operated by 21Vianet](/office365/servicedescriptions/office-365-platform-service-description/microsoft-365-operated-by-21vianet) for customers in China (February 2026). See [Microsoft Graph national cloud deployments](/graph/deployments).

## Next steps

- New to SharePoint Embedded? Read [Scenarios and use cases](scenarios-and-use-cases.md), then [Plan a solution](plan/app-tenant-architecture.md).
- Ready to build? Jump to the [VS Code quickstart](build/quickstart-vscode.md).
- Administering a tenant? Start at the [Admin overview](admin/admin-overview.md).
- See [What's new](whats-new.md) for the latest releases.
