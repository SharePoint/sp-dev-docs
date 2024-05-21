---
title: Consuming Tenant Admin
description: This article describes the role and responsibilities of Consuming Tenant Admin in SharePoint Embedded.
ms.date: 04/09/2024
ms.localizationpriority: high
---


# Consuming Tenant Admin

> [!IMPORTANT]
> Assign the SharePoint Embedded Administrator role available in M365 Admin Center or Microsoft Entra to execute SharePoint Embedded Container commandlets mentioned in this article.
> 
> Global Administrators can continue to execute SharePoint Embedded container cmdlets.
> 
> If you are a SharePoint Administrator, grant yourself the SharePoint Embedded Admin role as well to execute these cmdlets.

The organizations that use the SharePoint Embedded applications on their Microsoft 365 (M365) tenants are the consuming tenants and the persona that is responsible for managing these applications on their Microsoft 365 tenancy is the consuming tenant administrator. Consuming tenant administrators can perform various administrative actions on the SharePoint Embedded applications registered on their Microsoft 365 tenant and on the containers that hold the content. They can also manage tenant level configurations and ensure that data is stored in a secure, protected way that meets customers’ business and compliance policies. In this article, we describe the enterprise manageability features that are supported and can be performed by the consuming tenant administrator. They can do so either using the PowerShell cmdlets or through SharePoint Administrator Center (SPAC).

## Consuming Tenant Admin Role

Microsoft 365 SharePoint Embedded Administrator serves as the consuming tenant admin. Global Administrators in Microsoft 365 can assign users the SharePoint Embedded Administrator. The Global Administrator role already has all the permissions of the SharePoint Embedded Administrator role. A SharePoint Administrator can assign themselves the SharePoint Embedded Administrator role to act as a Consuming Tenant Admin for SharePoint Embedded. The SharePoint Embedded Role is available in Microsoft Entra and Microsoft 365 Admin Center. 
For information on [SharePoint Embedded Admin](../adminrole.md)


## Administration Tools

Consuming tenant admins can manage SharePoint Embedded applications with

### SharePoint Online Management Shell

On PowerShell, the SharePoint Embedded Admin can run the following cmdlets:
1.	Enumerate applications in a tenant
2.	Enumerate containers of an application in a tenant
3.	Enumerate containers of an application sorted basis storage
4.	Edit sensitivity label on a container
5.	Set sharing capability configuration on a container

For information on consuming tenant admin in [PowerShell](./ctapowershell.md)


### SharePoint Administrator Center

The SharePoint Embedded Admin can access the Active and Deleted containers page on SPAC and perform SharePoint Embedded application level and container level actions. This includes the following:
1. 	View Active container page
2. 	View Deleted container page
3.  View the detailed information of a container
4.  Soft delete, restore and purge deleted containers
   
For information on consuming tenant admin in SharePoint Admin see [container management](ctaUX.md)


## Security and Compliance Administration

SharePoint Embedded uses Microsoft’s comprehensive compliance and data governance solutions to help organizations manage risks, protect, and govern sensitive data, and respond to regulatory requirements. Security and compliance solutions work in a similar manner in the SharePoint Embedded platform as they do today in Microsoft 365 platform so that data is stored in a secure, protected way that meets customers’ business and compliance policies while making it easy for Compliance and SharePoint Administrators to enforce critical security and compliance policies on the content. For information on supported security and compliance capabilities, see [Security and Compliance](../../security-and-compliance.md).
