---
title: Container Type
description: Describing how Container Types work
ms.date: 11/14/2023
ms.service: sharepoint-online
ms.localizationpriority: high
---


# SharePoint Embedded Container Types

In SharePoint Embedded, all files and documents are stored in Containers and each Container has a specific Container Type.  

A Container Type is a SharePoint Embedded-Container level property stamped on every instance of a Container. An applications will own one or more Container Types to create Containers. An application can have multiple Containers that share the same Container Type. For instance, it is entirely possible for an Application to own only one Container Type but have multiple Containers of that type.  

The primary function of a Container Type  is to identify the application workloads that can access a specific Container. Container Types define the permissions and controls and manage access for all Containers of that type. This includes read/write access to various Containers. Container Types are important since they are how SharePoint Embedded supports and authorizes requests. 

In the Microsoft ecosystem, each application needs to be registered with Microsoft Entra to obtain a unique Azure ID (referred here as AppID or ClientID). This rule applies to all variants of the same app. For example, if a developer launches an application on the Web, iOS, and Android, that developer would register these variants as three separate apps on Azure. This will generate three AppIDs. The same Containers can be accessed by all three apps. 


### General guidelines for Container Types: 

1. Each Container is associated to one immutable Container Type, represented by a ContainerTypeID. Each Container Type is associated to at least one Application, represented by an AppID. Each ContainerTypeID-AppID pair is associated to an independent set of operations on SharePoint Embedded (permission mapping)  

2. The permission mapping between a ContainerTypeID-AppID pair determines the operations  the application is authorized to invoke against all containers of a specific Container Type and their content. 

3. Associations between Container Types and Applications can be changed. 

4. Permission mapping between a ContainerTypeID-AppID pair can be changed 

5. An application can be associated with multiple Container Types.

> Read more in [Application Architecture](./app-architecture.md)

<br></br>

# SharePoint Embedded Trial Containers 

To aid customers with the development of applications to be used with SharePoint Embedded, we are allowing the creation of a Trial Container Type. Customers will be allowed 1 Trial Container Type at any time in their tenant. The Trial Container Type will *not* be linked to billing and can only be consumed by the Partner tenant.  

> Note: The Trial Container Type is the only container type that is restricted to the Partner (creating) tenant and cannot be shared with other consuming tenants. 

Tenants can create a maximum of 5 container types. Trial Container Types do not count against the maximum number of Container Types that a Partner Tenant can create. 

Once the Trial Container Type has been created, the customer can create as many as 5 active Containers of that type. Trial Containers will be allotted 1GB of storage space. A Trial Container Type will expire after 30 days. Once the Trial Container Type is expired, access will be lost to all Containers created using that container type. A new Trial container type can be created; however, it will require the deletion of ALL existing Trial Containers. 

To delete a trial Container Type, you must remove all Containers of that type first, including from the recycle bin. You can run the following PowerShell commands to purge a container and the Trial Container Type: 

[`Remove-SPOContainer`](https://learn.microsoft.com/powershell/module/sharepoint-online/remove-spocontainer?view=sharepoint-ps)

[`Remove-SPODeletedContainer`](https://learn.microsoft.com/powershell/module/sharepoint-online/remove-spodeletedcontainer?view=sharepoint-ps)

`Remove-SPOContainerType`

> Note: the command `Remove-SPOContainerType` will only delete trial container types. 

 
Customers can choose to create a new Trial Container Type at any time, if the above steps are performed to remove any pre-existing Trial container type, are performed. The Trial container type is valid for up to 30 days but can be removed at any time within the 30-day window. 

Also note that it is *not possible* to convert a Trial Container Type and/or the associated Containers to a Standard Container Type. 

