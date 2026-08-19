---
title: When to choose SharePoint Embedded
description: Decide when SharePoint Embedded is the right choice, and how it compares to blob storage, cloud file APIs, and SharePoint Online sites.
ms.date: 08/13/2026
ms.reviewer: shsaravanan
ms.localizationpriority: high
---

# When to choose SharePoint Embedded

**Applies to:** Developer · Architect · IT decision maker

<!-- agent:
task_type: concept
audience: all
outcome: The reader decides whether SharePoint Embedded fits their scenario and understands how it compares to common alternatives.
next: app-tenant-architecture.md
-->

SharePoint Embedded is a good fit when your app needs to store and manage files, but the files must stay inside each customer's Microsoft 365 tenant, under that customer's own compliance controls. This article helps you decide, and compares SharePoint Embedded to the alternatives developers most often consider.

## Choose SharePoint Embedded when

Choose SharePoint Embedded when most of these statements are true:

- You build a **multitenant SaaS** or **line-of-business** app that stores customer files.
- Customers require their files to **stay in their own Microsoft 365 tenant**, not in your storage.
- Customer IT teams must apply **their own** data loss prevention (DLP), retention, and eDiscovery policies.
- You want **full programmatic control** of files through Microsoft Graph, with your app as the only user interface.
- You want built-in **Office co-authoring**, versioning, search, and Copilot grounding without building them yourself.
- You don't want end users to need a Microsoft 365 license to use your app's file features.

## Reconsider SharePoint Embedded when

Reconsider or choose another option when:

- You need a **ready-made, no-code end-user UI**. SharePoint Embedded is API-only and has no interface of its own; consider **SharePoint Online** instead.
- You **don't build an application**. Every SharePoint Embedded scenario involves calling Microsoft Graph from an app.
- You need collaborative sites, portals, or intranet features. Use **SharePoint Online** instead.

## SharePoint Embedded vs blob storage

Choose SharePoint Embedded over blob storage when compliance and Office collaboration matter more than raw object storage.

| Consideration | SharePoint Embedded | Blob storage |
|---|---|---|
| Where content lives | The customer's Microsoft 365 tenant | Your storage account |
| Compliance | Inherits the customer tenant's Microsoft Purview DLP, retention, and eDiscovery | You build the compliance layer yourself |
| Office co-authoring | Built in for Word, Excel, and PowerPoint | Not generally available |
| Search and Copilot grounding | Microsoft Search API and Copilot discoverability built in | You build indexing and grounding yourself |
| Access model | Microsoft Graph, per-container permissions | Blob SAS tokens and cloud IAM roles |

## SharePoint Embedded vs Google Drive, Box, or Dropbox APIs

Choose SharePoint Embedded over consumer or third-party file APIs when your enterprise customers must control their own data and policies.

| Consideration | SharePoint Embedded | Google Drive, Box, or Dropbox APIs |
|---|---|---|
| Data residency | Stays in the customer's Microsoft 365 tenant | Stored in the provider's cloud |
| Customer-enforced policy | Customer's existing Microsoft 365 policies apply | Limited customer control |
| End-user licensing | No per-seat license required for end users | Often per-seat licensing |
| Office co-authoring | Built-in Word, Excel, and PowerPoint co-authoring | Conversion or add-ons required |

## SharePoint Embedded vs SharePoint Online sites

Choose SharePoint Embedded over SharePoint Online sites when your app must be the only interface to the content.

| Consideration | SharePoint Embedded | SharePoint Online sites |
|---|---|---|
| User interface | Headless and API-only; your app owns the UX | Built-in site UI users can browse |
| Content isolation | Dedicated containers your app controls | Shared site and library structure |
| Storage entitlements | Separate, metered billing | Counts against Microsoft 365 storage |
| Bypass risk | Users can't bypass your app through a site | Users with permission can open the site directly |

> [!NOTE]
> SharePoint Embedded containers get a higher Microsoft Graph API request quota than SharePoint Online sites, so app-driven, high-volume file operations scale further before throttling.

## Next steps

- [Understand app and tenant architecture](app-tenant-architecture.md)
- [Add Office co-authoring without building it](office-collaboration-instead-of-building.md)
- [Ground AI on enterprise content without an external vector database](ground-ai-without-a-vector-db.md)
- [Scenarios and use cases](../scenarios-and-use-cases.md)
