---
title: App Architecture
description: Anatomy of a SharePoint Embedded application
ms.date: 11/28/2023
ms.localizationpriority: high
---

# SharePoint Embedded App Architecture

All files and documents in SharePoint Embedded (SPE) are stored in Containers. All Containers are created and stored within a Microsoft 365 Tenant. The SPE app then uses Microsoft Graph to interact with its Containers. The Containers are within the consuming Microsoft 365 tenant's boundary.

![SharePoint Embedded Capabilities](../../images/apparc-2.png)



## SharePoint Embedded Containers and Container Types

Container Type is a property stamped on every Container instance. Each Container Type is owned by one Application; and each Application can own only one Container Type. To learn more about Container Types, see [Container Type](./containertypes.md)

![SharePoint Embedded Flow](../../images/apparc-1.png)

All content is stored in the Consuming Tenant...
