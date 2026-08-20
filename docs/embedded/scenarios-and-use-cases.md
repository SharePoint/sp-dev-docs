---
title: Scenarios and use cases
description: Common developer problems that SharePoint Embedded solves, from multitenant SaaS storage to Office co-authoring, AI grounding, and compliant document management.
ms.date: 07/13/2026
ms.reviewer: shsaravanan
ms.localizationpriority: high
---

# Scenarios and use cases for SharePoint Embedded

**Applies to:** All

<!-- agent:
task_type: concept
audience: all
outcome: The reader matches a real-world problem to a SharePoint Embedded scenario and understands why SharePoint Embedded fits better than common alternatives.
next: plan/when-to-choose-sharepoint-embedded.md
-->

Use these scenarios to decide whether SharePoint Embedded fits your app. Each one starts with a problem developers actually face, shows why the usual approaches fall short, and explains why SharePoint Embedded is the right choice.

> [!NOTE]
> This article isn't an exhaustive list. Each scenario shows one way to combine SharePoint Embedded features to solve a common problem.

## Scenario: Store files for a multitenant SaaS app

### The problem

You build a multitenant SaaS product, such as contract management for enterprise legal teams. Your biggest blocker is file storage. Enterprise customers won't accept their documents living in your storage. Their IT teams want to apply their own security and compliance policies, like data loss prevention (DLP) and retention rules. You still need full control of the files from your app: create, read, organize, permission, and delete, all through APIs.

### Why the usual approaches fall short

- **Your own blob storage** puts customer data outside the customer's tenant, which enterprise IT rejects.
- **Google Drive, Box, or Dropbox APIs** use per-seat licensing and give the customer's admin little policy control.

### Why SharePoint Embedded

SharePoint Embedded stores each customer's files inside that customer's own Microsoft 365 tenant, while your app keeps full programmatic control:

- Content lives in the **customer's Microsoft 365 tenant**, not yours.
- Storage uses **File Storage Containers**, an API-only unit your app controls.
- The API surface is **Microsoft Graph**; your app owns the entire user experience.
- Content **inherits the customer tenant's Microsoft Purview** compliance, including DLP and retention.

See [Choose an app model](plan/choose-app-model.md) and [Create and manage containers](build/create-manage-containers.md).

## Scenario: Add Office co-authoring to your app

### The problem

You have a custom app, and your top feature request is "let me edit Office documents the same way I'm used to." Today you store files and hand out download links. Perhaps you even use a Web Application Open Platform Interface (WOPI) host. But your users want to open a Word or Excel file and co-author it in real time. They expect AutoSave, version history, and sharing, plus the full experience of Office for the web, Office desktop, and Microsoft 365 for mobile.

### Why the usual approaches fall short

- **Building co-authoring yourself** with conflict-free replicated data types takes months and still lacks native Office rendering.
- **A non-Microsoft collaboration engine** doesn't open `.docx`, `.xlsx`, and `.pptx` with full fidelity.

### Why SharePoint Embedded

Store the files in a SharePoint Embedded container and launch them in Office. Your app links to the same Office service Microsoft 365 uses, so you don't build a collaboration engine:

- **Real-time co-authoring** in Office for the web and Office desktop clients.
- **AutoSave** and **automatic version history** for Word, Excel, and PowerPoint.
- **Sharing** through shareable links, plus @mentions for licensed users.
- **Scoped access levels**: Anyone, People in your organization, Specific people, and People with existing access.

Editing opens in Office, not inside your app. Office for the web opens in a new browser tab or window, and desktop clients open in their own app. To keep users in your app's UI, embed a read-only [file preview](build/preview-files.md); use Office launch for editing.

See [Add Office co-authoring without building it](plan/office-collaboration-instead-of-building.md) and [Open Office files from your app](build/open-office-files.md).

## Scenario: Ground an AI agent on enterprise content

### The problem

You build an internal "ask the knowledge base" agent over thousands of documents spread across file shares and a legacy system. You want to consolidate them, make them searchable, and use them to ground a large language model. Your security team rejects copying everything into an external vector database, and the content must keep its retention and eDiscovery controls.

### Why the usual approaches fall short

- **An external vector database** moves content out of the tenant and breaks the compliance boundary.
- **Blob storage plus a custom index** forces you to rebuild DLP, retention, and eDiscovery yourself.

### Why SharePoint Embedded

Store the documents in SharePoint Embedded containers and ground your agent in place:

- Content **stays in the customer's Microsoft 365 tenant**.
- **Content discoverability is a setting on the container type.** It governs whether SharePoint Embedded content surfaces in Microsoft 365 experiences, including Copilot. Tenant governance controls this setting, so an app can't expose content by changing its own configuration.
- Retrieve content with the **Microsoft Search API**, scoped by the container type ID (`ContainerTypeId`), or with a Microsoft Foundry knowledge source.
- **Microsoft Purview** data loss prevention (DLP), retention, and eDiscovery apply. Nothing is exposed to Copilot until discoverability is enabled on the container type.

See [Ground AI without an external vector database](plan/ground-ai-without-a-vector-db.md) and [Set up SharePoint Embedded as a Foundry knowledge source](build/sharepoint-embedded-knowledge-source.md).

## Scenario: Run a compliant, API-only document store

### The problem

Your app collects documents from customers, inside or outside your organization, as part of a workflow. Examples include attaching evidence to a mortgage application or verifying an identity document. You want a simple upload experience plus Microsoft 365 storage and compliance, without giving users access to your tenant.

### Why the usual approaches fall short

- **SharePoint Online sites** expose an interface users can browse, which you don't want.
- **Blob storage** leaves you to build recycle bin, restore, search, and compliance yourself.

### Why SharePoint Embedded

SharePoint Embedded gives you an API-only document store with Microsoft 365 capabilities built in:

- **API-only through Microsoft Graph**: every file and container operation uses Microsoft Graph, with no SharePoint UI for users to bypass.
- **Full content lifecycle**: upload and download, folder structure, and versioning.
- **Two-level soft delete**: deleted items go to a container recycle bin you can restore from, and deleted containers move to a deleted container collection that stays restorable for **93 days** before permanent purge.
- **Search** through the **Microsoft Search API**, scoped to your app's containers.
- **Microsoft Purview compliance** inherited from the consuming tenant: DLP, retention policies, sensitivity labels, and eDiscovery.
- Your app's end users **don't need a Microsoft 365 license** for basic file operations.

See [Upload, download, and manage files](build/manage-files.md) and [Archive and restore containers](build/archive-restore-containers.md).

## Related content

- [What is SharePoint Embedded?](overview.md)
- [When to choose SharePoint Embedded](plan/when-to-choose-sharepoint-embedded.md)
- [Understand app and tenant architecture](plan/app-tenant-architecture.md)
- [Quickstart: Build your first app with VS Code](build/quickstart-vscode.md)
