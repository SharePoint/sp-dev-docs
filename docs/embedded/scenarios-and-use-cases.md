---
title: Scenarios and Use Cases
description: Scenarios and Use Cases for SharePoint Embedded
ms.date: 05/21/2024
ms.localizationpriority: high
---

# Scenarios and use cases for SharePoint Embedded

Use these example scenarios to prompt ideas about how custom applications can use SharePoint Embedded.

> [!NOTE]
> This article is not intended to be an exhaustive list of all SharePoint Embedded features and scenarios. The intention is that these scenarios are contextualized examples of how combinations of features can be used.

## Scenario: Structured user experience

### Description

Where your application requires a guided user experience to make users work in a structured way, rather than the flexible experience of SharePoint.

Where your application is enabling a business-critical or time sensitive process, use the dedicated resource allocation of SharePoint Embedded to simplify management of throttling.

### Examples

- Extended Relationship Management (XRM) applications
- Engagement-based applications
- Workflow-based collaboration, with defined state

### Why use SharePoint Embedded instead of SharePoint?

- Your application is the only user interface, allowing you to create a prescriptive user experience
- Resources are separate from your Microsoft 365 entitlements– allowing for simpler resource management.

## Scenario: Highly controlled collaboration

### Description

When building applications on top of SharePoint, it will still be possible for a user with permissions to navigate to the underlying site. Based on their permission level, a user might complete actions in the SharePoint interface that weren't intended by your application, for example changing site settings. These actions might have unintended consequences for your application or content.

Because SharePoint Embedded is headless, there's no user interface other than what is provided by your custom application. If you don't supply a method to change content or settings through your application, then it won’t be possible for a user to circumvent this through SharePoint. You have the choice for which collaborative features are available in your application, for example sharing.

### Examples

- Deal room applications
- Shared research environments

### Why use SharePoint Embedded instead of SharePoint?

- You need the collaborative capabilities of SharePoint, only via a highly customized user interface
- You're handling high-value content, where you want to manage risk by removing abilities for a user to discover or alter the content repository
- All containers for the application can share default sharing settings that are separate from your OneDrive and SharePoint settings
- Content is logically separated from other Microsoft 365 content

## Scenario: Customer facing document upload

### Description

Your application is aimed at an end customer, either within your organization or externally, who needs to upload a file as part of their interaction. You require a simplified end-user experience in your custom application, along with the Microsoft 365 capabilities of document storage and compliance.

Using SharePoint Embedded will support this scenario, while not requiring the users of your application to have access or entitlement to your Microsoft 365 tenant.

### Examples

- Applying evidence to mortgage application
- Identity document verification

### Why use SharePoint Embedded instead of SharePoint?

- It's critical to segregate this data from the rest of your Microsoft 365 storage, while still being in scope for compliance tools like eDiscovery
- No Microsoft 365 licensing is required for users, or the use of external users in SharePoint
- Containers offer a simple, flexible unit of data storage
