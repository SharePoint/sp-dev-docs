---
title: Terms and Definitions
description: Important Concepts in SharePoint Embedded
ms.date: 11/28/2023
ms.service: sharepoint-online
ms.localizationpriority: high
---

# Terms and Definitions

Short definitions to key concepts in SharePoint Embedded Application Architecture. 
> All terms are explained in the [Concepts](../app-concepts/app-architecture.md) section.

<br></br>

**Application Workload:** The collection of applications that have access to a Container type

**Consuming Tenant:** The tenant in which the SharePoint Embedded Application has been registered and will execute in. 

**Container Type:** A property of Containers that uniquely identifies the SharePoint Embedded application workload the Container is associated with.

**Container Type Permissions:** Container Type level configuration describing permissions that SharePoint Embedded applications have to Container instances of a Container Type. The Owning SharePoint Embedded Application manages the Container Type Permissions. 

**ContainerTypeId:** A GUID specifying which workload owns the Container. For example, the Owning Tenant would generate a ContainerTypeID that is stamped on each of their Containers. 

**Drive:** SharePoint Embedded Containers are considered Drives in Graph. Container IDs and Drive IDs are synonymous. 

**Drive Item:** Any file or folder stored in Drives or Containers are called DriveItems. Containers hold DriveItems.

**Owning SharePoint Embedded Application:** The SharePoint Embedded Application that was used to originally register the Container Type. 

**Partner Tenant:** Also known as the "Owning Tenant" or "Partner Tenant." The tenant that developed the SharePoint Embedded Application. This is also the tenant that will be invoiced for any instances and usage of Storage Containers of the Container Type that they own. For example, a company Contoso develops a SharePoint Embedded application that Fabrikam has registered to run. In this case, Contoso is the owning tenant and Fabrikam is the consuming tenant.

**SharePoint Embedded Application:** An application that leverages Storage Containers for storing content.  

**SharePoint Embedded Developer:** The application developer who built the SharePoint Embedded Application.  

**SharePoint Embedded Storage Container (“Container”):** A storage Container is the top-level Container in SharePoint Embedded. A StorageContainer holds content in the form of Drive and DriveItems.  
