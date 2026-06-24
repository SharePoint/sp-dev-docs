---
title: SharePoint Embedded scenarios and use cases
description: When to choose SharePoint Embedded over SharePoint — structured UX, controlled collaboration, and customer document upload.
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
  roles: [app-developer, enterprise-developer, owning-admin]
  prerequisites:
    - uri: /sharepoint/dev/embedded/overview
      kind: concept
  next_steps:
    - uri: /sharepoint/dev/embedded/getting-started/spembedded-for-vscode
      when: always
    - uri: /sharepoint/dev/embedded/development/app-architecture
      when: always
  related:
    - uri: /sharepoint/dev/embedded/overview
    - uri: /sharepoint/dev/embedded/development/app-architecture
    - uri: /sharepoint/dev/embedded/development/sharing-and-perm
    - uri: /sharepoint/dev/embedded/compliance/security-and-compliance
  stability: ga
  last_validated: proposed
---

# SharePoint Embedded scenarios and use cases
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

## What it is

This page presents example scenarios that show how a custom application can use SharePoint Embedded. The scenarios are contextualized examples of how combinations of SharePoint Embedded features fit common application patterns; they are not an exhaustive list of every feature or scenario.

Each scenario describes the situation it addresses, gives concrete example applications, and explains why SharePoint Embedded is a better fit than building directly on SharePoint.

> [!NOTE]
> A common thread across these scenarios: your application is the only user interface, and content is logically separated from the rest of a tenant's Microsoft 365 storage while remaining in scope for Microsoft Purview compliance tools.

## Why it matters / when to use

Use the scenarios below to match your application pattern to SharePoint Embedded and to articulate why it is preferable to SharePoint for that pattern.

### Scenario: Structured user experience

The application requires a guided experience that makes users work in a structured way, rather than the flexible, open-ended experience of SharePoint. Where the application drives a business-critical or time-sensitive process, the dedicated resource allocation of SharePoint Embedded simplifies management of throttling.

**Example applications:**

- Extended Relationship Management (XRM) applications
- Engagement-based applications
- Workflow-based collaboration, with a defined state

**Why SharePoint Embedded instead of SharePoint:**

- Your application is the only user interface, allowing you to create a prescriptive user experience.
- Resources are separate from your Microsoft 365 entitlements, allowing for simpler resource management.

### Scenario: Highly controlled collaboration

When you build on top of SharePoint, a user with permissions can still navigate to the underlying site and, depending on their permission level, take actions the application did not intend — such as changing site settings — with unintended consequences for the application or its content.

Because SharePoint Embedded is headless, there is no user interface other than the one the custom application provides. If the application does not supply a way to change content or settings, a user cannot circumvent the application through SharePoint. You choose which collaborative features, such as sharing, are available in your application.

**Example applications:**

- Deal room applications
- Shared research environments

**Why SharePoint Embedded instead of SharePoint:**

- You need the collaborative capabilities of SharePoint, but only through a highly customized user interface.
- You are handling high-value content and want to manage risk by removing a user's ability to discover or alter the content repository.
- All containers for the application can share default sharing settings that are separate from your OneDrive and SharePoint settings.
- Content is logically separated from other Microsoft 365 content.

### Scenario: Customer-facing document upload

The application is aimed at an end customer — inside or outside your organization — who needs to upload a file as part of their interaction. You want a simplified end-user experience in your custom application together with the Microsoft 365 capabilities of document storage and compliance. SharePoint Embedded supports this without requiring the application's users to have access or entitlement to your Microsoft 365 tenant.

**Example applications:**

- Applying evidence to a mortgage application
- Identity document verification

**Why SharePoint Embedded instead of SharePoint:**

- It is critical to segregate this data from the rest of your Microsoft 365 storage, while keeping it in scope for compliance tools like eDiscovery.
- No Microsoft 365 licensing is required for users, and there is no need to use external users in SharePoint.
- Containers offer a simple, flexible unit of data storage.

## When NOT to use

- When users need the full, flexible SharePoint site experience and direct site navigation — SharePoint Embedded deliberately removes that surface.
- When end users should own and manage their own files in their personal OneDrive or a standard SharePoint site.
- When the content has no document semantics and you only need raw object storage — use Azure Blob Storage instead.
- When users must have direct, licensed access to your Microsoft 365 tenant for reasons unrelated to the application's content.

## Key terms

| Term | Meaning |
|---|---|
| Headless | SharePoint Embedded exposes no end-user UI of its own; the application provides the entire experience. |
| Container | A `fileStorageContainer`; the unit of storage the application creates and permissions independently. |
| Dedicated resource allocation | Resources separate from a tenant's Microsoft 365 entitlements, which simplifies throttling and resource management for business-critical flows. |
| Logical separation | App content is segregated from other Microsoft 365 content while remaining in scope for Purview compliance tools. |

## How it fits together

Each scenario relies on the same model: the application owns a container type, creates containers in the relevant tenant, and exposes only the collaboration features it chooses. Content stays in the consuming tenant and inherits that tenant's Microsoft Purview compliance, while users interact solely through the application.

For the underlying architecture, see [Application architecture](/sharepoint/dev/embedded/development/app-architecture). For the foundational concepts behind these scenarios, see the [SharePoint Embedded overview](/sharepoint/dev/embedded/overview).

## Related

- [SharePoint Embedded overview](/sharepoint/dev/embedded/overview)
- [Application architecture](/sharepoint/dev/embedded/development/app-architecture)
- [Sharing and permissions](/sharepoint/dev/embedded/development/sharing-and-perm)
- [Security and compliance](/sharepoint/dev/embedded/compliance/security-and-compliance)
