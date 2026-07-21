---
title: Consuming tenant admin
description: Understand the consuming tenant admin role and responsibilities for SharePoint Embedded.
ms.date: 07/21/2026
ms.reviewer: shsaravanan
ms.localizationpriority: high
ai-usage: ai-assisted
---

# Consuming tenant admin

**Applies to:** Consuming tenant admin — SharePoint Embedded admin / Global admin

<!-- agent:
task_type: concept
audience: administrator
outcome: Understand the consuming tenant administrator role and the admin tools available for SharePoint Embedded apps.
next: install-sharepoint-embedded-app.md
-->

> [!IMPORTANT]
> Assign the SharePoint Embedded Administrator role available in Microsoft 365 admin center or Microsoft Entra ID to execute SharePoint Embedded container cmdlets mentioned in this article.
>
> Global Administrators can continue to execute SharePoint Embedded container cmdlets.
>
> A Global Administrator can assign a user the SharePoint Embedded Administrator role to act as a consuming tenant admin for SharePoint Embedded.

Organizations that use SharePoint Embedded applications in their Microsoft 365 tenants are consuming tenants. The consuming tenant administrator manages these applications and the containers that hold content.

Consuming tenant administrators can manage applications registered in their tenant, tenant-level configurations, and security and compliance settings. They use PowerShell cmdlets or the SharePoint admin center for enterprise management tasks.

## Consuming tenant admin role

Microsoft 365 SharePoint Embedded Administrator serves as the consuming tenant admin. Global Administrators in Microsoft 365 can assign users the SharePoint Embedded Administrator role. The Global Administrator role already has all the permissions of the SharePoint Embedded Administrator role. The SharePoint Embedded Administrator role is available in Microsoft Entra ID and Microsoft 365 admin center.

For information on the SharePoint Embedded Administrator role, see [Admin overview](admin-overview.md).

## Administration tools

Consuming tenant admins can manage SharePoint Embedded applications with the following options:

### Microsoft Graph APIs

The [fileStorageContainerTypeRegistration](/graph/api/resources/filestoragecontainertyperegistration) resource represents the registration of a container type in a consuming tenant. To manage all container type registrations in the consuming tenant, the `FileStorageContainerTypeReg.Manage.All` delegated permission is required.

- [List container type registrations](/graph/api/filestorage-list-containertyperegistrations)
- [Get container type registrations](/graph/api/filestoragecontainertyperegistration-get)
- [Update container type registrations](/graph/api/filestoragecontainertyperegistration-update)
- [Delete container type registrations](/graph/api/filestorage-delete-containertyperegistrations)

### SharePoint Online Management Shell

In PowerShell, the SharePoint Embedded Administrator can run the following cmdlets:

- Enumerate applications in a tenant
- Enumerate containers of an application in a tenant
- Enumerate containers of an application sorted by storage usage
- Enumerate archived containers of an application
- Edit the sensitivity label on a container
- Set the sharing capability configuration on a container

For information on consuming tenant admin in PowerShell, see [Manage containers with PowerShell](manage-containers-powershell.md).

### SharePoint admin center

The SharePoint Embedded Administrator can access the Active and Deleted containers page in the SharePoint admin center and perform SharePoint Embedded application-level and container-level actions. This includes the following:

- View the Active container page
- View the Archived container page
- View the Deleted container page
- View the detailed information of a container
- Archive and reactivate containers
- Soft delete, restore, and purge deleted containers

For information on consuming tenant admin in SharePoint admin center, see [Manage containers in SharePoint admin center](manage-containers-sharepoint-admin-center.md).

## Security and compliance administration

SharePoint Embedded uses Microsoft 365 compliance and data governance solutions to help organizations manage risk, protect and govern sensitive data, and respond to regulatory requirements. Security and compliance solutions work in SharePoint Embedded in a similar way to Microsoft 365. These solutions help Compliance Administrators and SharePoint Embedded Administrators enforce security and compliance policies on content. For information on supported security and compliance capabilities, see [Plan security, compliance, and governance](../plan/security-compliance-governance.md).

## Set up billing for pass-through container type

To use a pass-through billing SharePoint Embedded app, a Global Administrator needs to set up pay-as-you-go services in the [Microsoft 365 admin center](https://admin.microsoft.com/). The SharePoint Embedded Administrator role can't configure billing. No user can access any pass-through SharePoint Embedded apps before valid billing is set up for the SharePoint Embedded platform.

### Meters

For detailed meter information, see [Billing meters](../reference/billing-meters.md).

SharePoint Embedded uses a pay-as-you-go (PAYG) billing model through an Azure subscription. Billing is determined by how much data in GB you store in SharePoint Embedded in active and archived states, transactions used to access and modify the container and container contents, and data that's egressed from the SharePoint Embedded platform. You can view usage and billing details in [Microsoft Cost Management](https://portal.azure.com/).

SharePoint Embedded has four generally available billing meters, as shown. For the private preview agent message meter, see [Billing meters](../reference/billing-meters.md). Refer to the [product page](https://adoption.microsoft.com/sharepoint/embedded/) for pricing details.

| SharePoint Embedded Service Meters |   Meter Unit   |
| ---------------------------------- | -------------- |
| Storage                            | $/GB           |
| Archived Storage                   | $/GB           |
| API Transactions                   | $/Transactions |
| Egress                             | $/GB           |

### Set up guide

1. A valid Azure subscription is required. You can create one by following the steps here to [create an Azure subscription](/azure/cloud-adoption-framework/ready/azure-best-practices/initial-subscriptions).
1. A valid Azure resource group is required. You can create one by following the steps here to [create a resource group](/azure/azure-resource-manager/management/manage-resource-groups-portal).
1. In the [Microsoft 365 admin center](https://admin.microsoft.com/), open **Setup** > **Billing and licenses**, and then select **Activate pay-as-you-go services**.
1. Follow the SharePoint Embedded setup prompts to connect the approved Azure subscription and resource group.

For detailed setup steps, see [Set up billing in Microsoft 365 admin center](setup-billing-microsoft-365-admin-center.md).

### Billing management

For detailed billing management steps, see [Monitor usage, billing, and cost](monitor-usage-billing-cost.md).

The [Microsoft Cost Management portal](https://portal.azure.com/#view/Microsoft_Azure_CostManagement/Menu/~/overview/openedBy/AzurePortal) provides a comprehensive overview of your costs, allowing you to track and analyze your spending for the SharePoint Embedded application. This guide walks you through the steps to view your billing details and SharePoint Embedded consumption in the Microsoft Cost Management portal.

### Invalid billing / turn off SharePoint Embedded

If you turn off SharePoint Embedded or disconnect the linked Azure subscription, all users immediately lose access to any application built on the service along with any read and write permissions.

## Next steps

- [Install a SharePoint Embedded app](install-sharepoint-embedded-app.md)
- [Manage containers in SharePoint admin center](manage-containers-sharepoint-admin-center.md)
