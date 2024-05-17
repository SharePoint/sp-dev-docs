---
title: App Architecture
description: Anatomy of a SharePoint Embedded application
ms.date: 05/17/2024
ms.localizationpriority: high
---

# SharePoint Embedded App Architecture

All files and documents in SharePoint Embedded (SPE) are stored in Containers. All Containers are created and stored within a Microsoft 365 Tenant. The SPE app then uses Microsoft Graph to interact with its Containers. The Containers are within the consuming Microsoft 365 tenant's boundary.

![SharePoint Embedded Capabilities](../../images/apparc-2.png)


## SharePoint Embedded Containers and Container Types

Every SharePoint Embedded Container has a Container Type which links the Container to its owning application. The Owning Application is the application that owns the [Container Types](containertypes.md) and therefore any and all Containers of that type.

A Container Type is a property stamped on every Container instance. Each Container Type is owned by one Application; and each Application can own only one Container Type. To learn more about Container Types, see [Container Type](./containertypes.md)

### The Consuming Tenant
The SharePoint Embedded model uses an Owning Tenant and a Consuming Tenant; all SharePoint Embedded content is stored within Containers in the Consuming Tenant. The tenant where the application has been registered and will execute in is the Consuming Tenant.

#### Use Case
Take for example, Contoso as the owning tenant. Contoso uses SharePoint Embedded to build a finance app called Fabrikam. Fabrikam securely stores important financial documents. The company Northwind Traders decides to install Fabrikam to help them be more efficient and store client ledgers.

In this case, Northwind Traders are the Consuming Tenant. Contoso is the Owning Tenant. All Fabrikam documents that 

![SharePoint Embedded Flow](../../images/apparc-1.png)

