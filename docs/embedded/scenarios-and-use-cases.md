---
title: Scenarios and Use Cases
description: Explore scenarios and use cases for SharePoint Embedded.
ms.date: 07/13/2026
ms.reviewer: stpuceli
ms.localizationpriority: high
ai-usage: ai-assisted
---

# Scenarios and use cases for SharePoint Embedded

**Applies to:** All

Use these example scenarios to spark ideas for how your custom application can use SharePoint Embedded. Each scenario combines several features to solve a common content-management problem.

<!-- agent:
task_type: concept
audience: all
outcome: Understand common SharePoint Embedded scenarios and when they fit a custom application.
next: overview.md
-->

> [!NOTE]
> This article isn't an exhaustive list of SharePoint Embedded features and scenarios. Each scenario shows one way to combine features in context.

## Scenario: Structured user experience

### Description

Choose this pattern when your application needs a guided experience. You want users to work in a structured way rather than in the flexible SharePoint Online interface.

This pattern also suits business-critical or time-sensitive processes. SharePoint Embedded allocates dedicated resources, so you can manage throttling more easily.

### Examples

- Extended Relationship Management (XRM) applications
- Engagement-based applications
- Workflow-based collaboration with defined state

### Why use SharePoint Embedded instead of SharePoint Online?

- Your application is the only user interface, so you control the entire user experience.
- Resources sit apart from your Microsoft 365 entitlements, which simplifies resource management.

## Scenario: Highly controlled collaboration

### Description

When you build on SharePoint Online directly, a user with permissions can still open the underlying site without awareness from your application. Depending on their permission level, that user might change site settings or take other actions your application didn't intend. Those actions can have unintended consequences for your application or content.

SharePoint Embedded is headless, so your custom application provides the only interface. If your application doesn't expose a way to change content or settings, a user can't bypass it through SharePoint Online. You decide which collaborative features, such as sharing, your application offers.

### Examples

- Deal room applications
- Shared research environments

### Why use SharePoint Embedded instead of SharePoint Online?

- You need SharePoint's collaborative capabilities, but only through a highly customized interface.
- You handle high-value content and want to limit who can discover or alter the repository.
- Every container in the application can share default sharing settings that stay separate from your OneDrive and SharePoint Online settings.
- Content stays logically separated from your other Microsoft 365 content.

## Scenario: Customer-facing document upload

### Description

Your application serves an end customer, inside or outside your organization, who uploads a file as part of an interaction. You want a simple end-user experience plus the Microsoft 365 capabilities for document storage and compliance.

SharePoint Embedded supports this scenario. The users of your application don't need access or entitlement to your Microsoft 365 tenant.

### Examples

- Attaching evidence to a mortgage application
- Verifying an identity document

### Why use SharePoint Embedded instead of SharePoint Online?

- You must segregate this data from the rest of your Microsoft 365 storage, yet keep it in scope for compliance tools like eDiscovery.
- Users need no Microsoft 365 licensing, and you avoid adding external users to SharePoint Online.
- Containers give you a simple, flexible unit of data storage.

## Related content

- [What is SharePoint Embedded?](overview.md)
- [Understand app and tenant architecture](plan/app-tenant-architecture.md)
- [Quickstart: Build your first app with VS Code](build/quickstart-vscode.md)
