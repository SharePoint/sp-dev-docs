---
title: Container Type
description: This article explains how Container Types work.
ms.date: 11/28/2023
ms.localizationpriority: high
---

# SharePoint Embedded Container Types

In SharePoint Embedded, all files and documents are stored in Containers, and each Container is identified by a Container Type.

Container Type is a property stamped on every Container instance. Each Container Type is owned by one Application; and each Application can own only one Container Type.

The primary function of a Container Type is to manage the application workload that can access the Containers. Container Type defines the access permissions an Application has towards all Containers of that type, including create, read, write, delete containers; manage container permissions, etc.

## Here are some general guidelines for Container Types:

Each Container is associated to one immutable Container Type, represented by a ContainerTypeID. Each Container Type is associated to at least one Application, represented by an AppID. Each ContainerTypeID-AppID pair is associated to an independent set of operations on SharePoint Embedded (permission mapping)

The permission mapping between a ContainerTypeID-AppID pair determines the operations the application is authorized to invoke against all containers of a specific Container Type and their content.

> [!TIP]
> To learn more about application architecture, see [Application Architecture](./app-architecture.md).

## SharePoint Embedded Trial Container Types

To aid customers with the development of applications to be used with SharePoint Embedded, we're allowing the creation of a Trial Container Type. Customers are allowed one Trial Container Type at any time in their tenant. The Trial Container Type won't be linked to billing and can only be consumed by the Partner tenant.

> [!NOTE]
> The Trial Container Type is the only Container Type that is restricted to the Partner (creating) tenant and cannot be shared with other consuming tenants.

Tenants can create a maximum of five Container Types. Trial Container Types don't count against the maximum number of Container Types that a Partner tenant can create.

Once the Trial Container Type is created, the customer can create as many as five active Containers of that type. Trial Containers are allotted 1 GB of storage space. A Trial Container Type will expire after 30 days. Once the Trial Container Type is expired, access will be lost to all Containers created using that Container Type. A new Trial Container Type can be created; however, it requires the deletion of ALL existing Trial Containers.

To delete a trial Container Type, you must remove all Containers of that type first, including from the recycle bin. You can run the following PowerShell commands to purge a container and the Trial Container Type:

- [`Remove-SPOContainer`](/powershell/module/sharepoint-online/remove-spocontainer)
- [`Remove-SPODeletedContainer`](/powershell/module/sharepoint-online/remove-spodeletedcontainer)
- Remove-SPOContainerType

> [!NOTE]
> The command `Remove-SPOContainerType` will only delete trial Container Types.

Customers can choose to create a new Trial Container Type at any time, if the above steps are performed to remove any pre-existing Trial Container Type, are performed. The Trial Container Type is valid for up to 30 days but can be removed at any time within the 30-day window.

Also note that it isn't possible* to convert a Trial Container Type and/or the associated Containers to a Standard Container Type.
