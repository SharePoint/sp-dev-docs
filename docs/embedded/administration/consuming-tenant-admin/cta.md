---
title: Consuming Tenant Admin
description: This article describes the role and responsibilities of Consuming Tenant Admin in SharePoint Embedded.
ms.date: 05/21/2024
ms.localizationpriority: high
---

# Consuming Tenant Admin

> [!IMPORTANT]
> Assign the SharePoint Embedded Administrator role available in M365 Admin Center or Microsoft Entra to execute SharePoint Embedded Container cmdlets mentioned in this article.
>
> Global Administrators can continue to execute SharePoint Embedded container cmdlets.
>
> A global administrator can assign a user the SharePoint Embedded administrator role to act as a consuming tenant admin for SharePoint Embedded.

The organizations that use the SharePoint Embedded applications on their Microsoft 365 (Microsoft 365) tenants are the consuming tenants and the persona that is responsible for managing these applications on their Microsoft 365 tenancy is the consuming tenant administrator. Consuming tenant administrators can perform various administrative actions on the SharePoint Embedded applications registered on their Microsoft 365 tenant and on the containers that hold the content. They can also manage tenant level configurations and ensure that data is stored in a secure, protected way that meets customers’ business and compliance policies. In this article, we describe the enterprise manageability features that are supported and can be performed by the consuming tenant administrator. They can do so either using the PowerShell cmdlets or through the SharePoint Administrator Center (SPAC).

## Consuming Tenant Admin Role

Microsoft 365 SharePoint Embedded Administrator serves as the consuming tenant admin. Global Administrators in Microsoft 365 can assign users the SharePoint Embedded Administrator. The Global Administrator role already has all the permissions of the SharePoint Embedded Administrator role. The SharePoint Embedded Role is available in Microsoft Entra and Microsoft 365 Admin Center.
For information on [SharePoint Embedded Admin](../adminrole.md)

## Administration Tools

Consuming tenant admins can manage SharePoint Embedded applications with

### SharePoint Online Management Shell

On PowerShell, the SharePoint Embedded Admin can run the following cmdlets:

1. Enumerate applications in a tenant
1. Enumerate containers of an application in a tenant
1. Enumerate containers of an application sorted basis storage
1. Edit the sensitivity label on a container
1. Set sharing capability configuration on a container

For information on consuming tenant admin in [PowerShell](./ctapowershell.md)

### SharePoint Administrator Center

The SharePoint Embedded Admin can access the Active and Deleted containers page on SPAC and perform SharePoint Embedded application level and container level actions. This includes the following:

1. View the Active container page
1. View the Deleted container page
1. View the detailed information of a container
1. Soft delete, restore, and purge deleted containers

For information on consuming tenant admin in SharePoint Admin see [container management](ctaUX.md)

## Security and Compliance Administration

SharePoint Embedded uses Microsoft’s comprehensive compliance and data governance solutions to help organizations manage risks, protect, and govern sensitive data, and respond to regulatory requirements. Security and compliance solutions work in a similar manner in the SharePoint Embedded platform as they do today in the Microsoft 365 platform so that data is stored in a secure, protected way that meets customers’ business and compliance policies while making it easy for Compliance and SharePoint Administrators to enforce critical security and compliance policies on the content. For information on supported security and compliance capabilities, see [Security and Compliance](../../security-and-compliance.md).

## Set Up Billing for Pass-through App

To use Pass-through SharePoint Embedded App, SharePoint Embedded Admin needs to set up Microsoft Syntex billing in [Microsoft 365 admin center](https://admin.microsoft.com/). No user can access any Pass-through SharePoint Embedded apps before a valid billing is set up for SharePoint Embedded platform.

### [Meters](../billing/meters.md)

SharePoint Embedded employs a pay-as-you-go (PAYG) billing model through an Azure subscription. Billing is determined by how much data in GB you store in SharePoint Embedded, transactions used to access and modify the container and container contents, and data that is egressed from the SharePoint Embedded platform. Each of these factors contributes to the overall cost, ensuring that you only pay for the resources and services you use. You can view this usage and billing details in the [Azure Cost Management](https://ms.portal.azure.com/).

SharePoint Embedded has three billing meters as shown. Refer to the [product page](https://adoption.microsoft.com/en-us/sharepoint/embedded/) for pricing details 

| SharePoint Embedded Service Meters |   Meter Unit   |
| :--------------------------------: | :------------: |
|              Storage               |      $/GB      |
|          API Transactions          | $/Transactions |
|               Egress               |      $/GB      |

### Set Up Guide

1. A valid Azure subscription is required. You can create one by following the steps here to [create an Azure subscription](/azure/cloud-adoption-framework/ready/azure-best-practices/initial-subscriptions).
1. A valid Azure resource group is required. You can create one by following the steps here to [create a resource group](/azure/azure-resource-manager/management/manage-resource-groups-portal).
1. In [Microsoft 365 admin center](https://admin.microsoft.com/), select **Setup**, and the view the **Files and Content** section. Select **Automate Content with Microsoft Syntex.**

  ![Microsoft 365 admin center Files and Content](../../../images/DTCBilling1.png)

1. Select **Go to Syntex settings**.
1. Select **Apps** under **Syntex services for**, select **SharePoint Embedded**
![Microsoft 365 admin center SharePoint Embedded Billing setting](../../../images/DTCBilling2.png)
1. Follow the instructions on the **SharePoint Embedded** flyer to turn on SharePoint Embedded apps.

### [Billing Management](../billing/billingmanagement.md)

The [Microsoft Cost Management portal](https://portal.azure.com/#view/Microsoft_Azure_CostManagement/Menu/~/overview/openedBy/AzurePortal) provides a comprehensive overview of your costs, allowing you to track and analyze your spending for SharePoint Embedded application. This guide walks you through the steps to view your billing details and SharePoint Embedded consumption in the Microsoft Cost Management portal.

### Invalid Billing/Turn off SharePoint Embedded

If you turn off SharePoint Embedded or disconnect the linked Azure subscription, all users will immediately lose access to any application built on the service along with any read and write permissions.
