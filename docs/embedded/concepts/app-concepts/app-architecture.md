---
title: App Architecture
description: Anatomy of a SharePoint Embedded application
ms.date: 11/28/2023
ms.localizationpriority: high
---

# SharePoint Embedded App Architecture

All files and documents in SharePoint Embedded are stored in Containers. All Containers are created and stored within an Microsoft 365 Tenant. The ISV or LOB app then uses the Microsoft Graph API to interact with the dedicated Container(s) for that app. The Containers are part of the M365 customer’s tenant regardless of how the app is deployed.

![SharePoint Embedded Capabilities](../../images/architecture-overview.png)

## Container Relationship

- Every Container type is owned by one SharePoint Embedded Application
- Only the app owning a Container type may create instances of a Container.
- Container instances must belong to a Container type.
- An app may instantiate zero or more Container instances for a given Container type.
- Apps can grant permission to other apps to create, read, update, and/or delete Container instances of Container types of the owning app, for example, to allow backup/restore or DLP apps to operate on content in those Containers and/or create instances of the Container type. Note, the owning application is charged for storage in all instances of a Container type regardless of which app originally instantiated the Container.

## SharePoint Embedded Containers and Container Types

Container Type is a property stamped on every Container instance. Each Container Type is owned by one Application; and each Application can own only one Container Type. To learn more about Container Types, see [Container Type](./containertypes.md)

![SharePoint Embedded Flow](../../images/app-flow7.jpg)
