---
title: App Architecture
description: Anatomy of a SharePoint Embedded application 
ms.date: 11/14/2023
ms.service: sharepoint-online
ms.localizationpriority: high
---

# SharePoint Embedded App Architecture

### Anatomy of a SharePoint Embedded application 

All files and documents in SharePoint Embedded are stored in Containers. All Containers are created and stored within an M365 Tenant. The ISV or LOB app then uses the Microsoft Graph API to interact with the dedicated Container(s) for that app. The Containers are part of the M365 customer’s tenant regardless of how the app is deployed.

<img src="../../images/architecture-overview.png" alt="SharePoint Embedded Capabilities" width="10000"/>

**Container Relationship**

- Every Container type is owned by one SharePoint Embedded Application
- Only the app owning a Container type may create instances of a Container.
- Container instances must belong to a Container type.
- An app may instantiate zero or more Container instances for a given Container type.
- Apps can grant permission to other apps to create, read, update, and/or delete Container instances of Container types of the owning app , e.g. to allow backup/restore or DLP apps to operate on content in those Containers and/or create instances of the Container type. Note, the owning application is charged for storage in all instances of a Container type regardless of which app originally instantiated the Container.

### **SharePoint Embedded Containers and Container Types**
SharePoint Embedded Containers (Container) are the basic unit of storage on the SharePoint Embedded platform; every SharePoint Embedded Container is created and stored in an M365 Tenant. SharePoint Embedded Containers are similar to Drives in Microsoft Graph. Files and documents stored in Containers/Drives can be referenced as Drive Items.

When a Container is created, it must have a specific ContainerType. ContainerTypes define the permissions and controls and manage access for all Containers of that type. This includes read/write access to various Containers. See a more detailed explanation of Container Types in the section below.

A Container Type is a SharePoint Embedded-Container level property stamped on every instance of SharePoint Embedded Containers. Its primary function is to identify the application workloads that can access a Container instance.

In the Microsoft ecosystem, each application needs to be registered with Azure AD to obtain a unique Azure ID (referred here as AppID or ClientID). This rule applies to all variants of the same app. For example, if a developer launches an application on the Web, iOS, and Android, that developer would register these variants as three separate apps on Azure. This will generate three AppIDs. The same Containers can be accessed by all three apps.

#### More on SharePoint Embedded Container Types
Container Types are the way SharePoint Embedded supports this relationship and authorizes requests:

1) Each Container instance is associated to one immutable Container type; and 2) each Container type is associated to at least one AppID and a set of Container operations on SharePoint Embedded (permission mapping). The permission mapping determines the operations an application has permission to invoke against all Container instances of a specific type.

- Each Container instance is tied to one and only one Container type. Container types are immutable.
- Each Container type is tied to at least one application. Association between Container type and application can be changed
- Each Container type and application pairing are mapped to a set of permissions. This set of permissions determines the operations an application can invoke against all Container instances of that Container type.
- A SharePoint Embedded application can only access Containers it is authorized to access.


<img src="../../images/app-flow7.jpg" alt="SharePoint Embedded Flow"/>
