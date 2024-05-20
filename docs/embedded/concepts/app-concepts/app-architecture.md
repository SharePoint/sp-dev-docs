---
title: App Architecture
description: Anatomy of a SharePoint Embedded application
ms.date: 05/21/2024
ms.localizationpriority: high
---

# SharePoint Embedded App Architecture

All files and documents in SharePoint Embedded (SPE) are stored in containers, with all containers and container content created and stored within a Microsoft 365 Tenant. All containers and container content are created, managed, and interacted via the SPE application using Microsoft Graph. 

![SharePoint Embedded Architecture](../../images/SPEArch.png)

## SharePoint Embedded application
A Microsoft Entra ID application registration. As an owning or guest application to a Container Type, it has access to containers of that Container Type.  

## Owning Tenant and Consuming Tenant
SPE introduces the concepts of owning tenant and consuming tenant. Owning tenant is a Microsoft Entra ID tenant where a Container Type is created. This is often also the tenant where your SharePoint Embedded application is registered. Consuming tenant is a Microsoft Entra ID tenant where a Container Type is used. Only a consuming tenant may have containers of such Container Type. All container and content created via the SPE application is stored within the consuming tenant's Microsoft 365 tenant boundary. 

The same Microsoft Entra ID tenant can be both owning and consuming tenant of a given Container Type in the SPE ecosystem. 

## Container, Container Type, and Owning Application

A container is the basic storage unit in SPE. Also, a container defines a security and compliance boundary.

A Container Type is a SPE resource that defines the relationship, access privileges, and billing accountability between a SPE application and a set of containers. Also, the Container Type defines behaviors on the set of containers. Learn more about [Container Types](./containertypes.md).

Container Type is represented on each container as an immutable property and is used across the entire SPE ecosystem. Each Container Type is strongly coupled with one SPE application, which is referred to as the owning application. The owning application developer (the owning tenant) is responsible for creating and managing their Container Types. SharePoint Embedded mandates a 1:1 relationship between owning application and Container Type.

## Access Model
An SPE application's access to containers and container content is determined by a set of permissions configured between the application and the Container Type it attempts to access. This set of permission is determined at Container Type creation time for owning application. The SPE ecosystem allows SPE applications to access containers of Container Types it doesn't own.

In this illustration, multiple SPE applications are deployed in the tenancy, including two apps developed by ISVs (App 1 and 2) and a LOB app (App 3). Each application can access only to the stack of containers of the Container Type they own. 
![SharePoint Container Type](../../images/SPECTDedicated.png)

In this illustration, both App 1 and App 2 in the tenancy have access to the same Container Type. Both apps can access the stack of the containers of that type.
![SharePoint Container Type](../../images/SPECTShared.png)

#### Example
Contoso is an ISV and built a human resource management application on SPE. The application is registered and deployed in Fabrikam, an auditing firm. Fabrikam also developed an LOB auditing application on SPE that is used internally.

In this scenario, both the human resource management application developed by Contoso and the auditing application developed by Fabrikam have their own Container Type. Contoso is the owning tenant of the human resource management application; and the application is the owning app for its Container Type. Likewise, Fabrikam is the owning tenant the auditing application; and the application is the owning app for its Container Type. In addition, Fabrikam is the consuming tenant for both applications. 

![Example](../../images/apparchexample.png)

