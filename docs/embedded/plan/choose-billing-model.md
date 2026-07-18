---
title: Choose a billing model
description: Compare standard and pass-through SharePoint Embedded billing models before you create production container types.
ms.date: 07/13/2026
ms.reviewer: shsaravanan
ms.author: mawin
ms.localizationpriority: high
ai-usage: ai-assisted
---

# Choose a billing model

**Applies to:** Architect

<!-- agent:
task_type: concept
audience: architect
outcome: Choose whether the developer tenant or consuming tenant is billed for SharePoint Embedded usage.
next: ../plan/security-compliance-governance.md
-->

Use this article to choose a billing model for production SharePoint Embedded container types. SharePoint Embedded is a consumption-based, pay-as-you-go offering, and you select billing at the container type level.

For the full billing setup procedure, see [PAYG billing for SharePoint Embedded](../admin/setup-billing-microsoft-365-admin-center.md).

## Billing models

SharePoint Embedded provides two billing models:

- Standard billing.
- Pass-through billing.

Both models use the same billing meters.

The model determines which tenant is billed and which admin configures the billing profile.

> [!IMPORTANT]
> Once a container type is created, its billing model can't be changed. To switch models, you must delete and re-create the container type with the desired billing model.

| Billing model | Who is billed | Who configures billing |
| --- | --- | --- |
| Standard | Tenant that owns or develops the application. | Admin in the developer tenant. |
| Pass-through | Tenant registered to use the SharePoint Embedded application. | Admin in the consuming tenant. |

## Standard billing

With standard billing, all consumption-based charges are directly billed to the tenant that owns or develops the application.

The admin in the developer tenant must establish a valid billing profile when creating a standard container type.

Use standard billing when:

- The application owner wants to centralize usage charges.
- The app is an internal enterprise LOB app.
- The ISV or developer tenant plans to absorb or separately recover usage costs.
- Customer tenants shouldn't configure their own SharePoint Embedded billing profile.

The billing setup requires:

- An existing SharePoint tenancy.
- An Azure subscription in the tenancy.
- A resource group attached to the Azure subscription.
- A SharePoint Embedded Administrator or Global Administrator to operate billing cmdlets.
- Owner or contributor permissions on the Azure subscription for the admin who sets up billing.

The standard billing pattern creates the container type and then attaches an Azure billing profile (see [Create and configure a container type](../build/create-container-type.md)):

```powershell
New-SPOContainerType -ContainerTypeName <ContainerTypeName> -OwningApplicationId <OwningApplicationId> -ApplicationRedirectUrl <ApplicationRedirectUrl>
```

Attach the Azure billing profile:

```powershell
Add-SPOContainerTypeBilling -ContainerTypeId <ContainerTypeId> -AzureSubscriptionId <AzureSubscriptionId> -ResourceGroup <ResourceGroup> -Region <Region>
```

> [!IMPORTANT]
> Every container type must have an owning application. A single owning app can only own one container type at a time.

## Pass-through billing

With pass-through billing, consumption-based charges are billed directly to the tenant registered to use the SharePoint Embedded application.

Admins in the developer tenant don't need to set up a billing profile when creating a pass-through container type.

After the container type is registered in the consuming tenant, the consuming tenant admin sets up the billing profile in that tenant.

Use pass-through billing when:

- Each customer tenant should pay for its own SharePoint Embedded usage.
- The app is an ISV multitenant application.
- The customer tenant controls the Azure subscription used for pay-as-you-go charges.
- The consuming tenant admin is expected to complete billing onboarding.

Use this pass-through creation pattern:

```powershell
New-SPOContainerType -ContainerTypeName <ContainerTypeName> -OwningApplicationId <OwningApplicationId> -IsPassThroughBilling
```

> [!NOTE]
> Use the `-IsPassThroughBilling` switch with `New-SPOContainerType` when the consuming tenant pays for usage.

## Billing meters

SharePoint Embedded billing is determined by usage. The supported meters are described in [SharePoint Embedded billing meters](../reference/billing-meters.md).

The current meters include:

- Storage.
- Archived storage.
- API transactions.
- Egress.

Both standard billing container types and pass-through billing container types use the same meters.

## Storage meter

Storage consumption includes files and documents with their metadata and versions, in both active and archived states.

Storage consumption also includes content in the recycle bin and deleted container collection within SharePoint Embedded.

Plan lifecycle and deletion policies with storage cost in mind.

## Archived storage meter

The archived storage meter measures storage consumed by archived containers. Archiving a container moves its data to the cold storage tier, which offers lower storage costs than active storage.

## API transactions meter

Each Microsoft Graph call made explicitly by the SharePoint Embedded application is counted as one transaction.

Customers are billed based on transaction count.

Calls made by internal services to containers aren't charged when the application has no control over those calls.

Nonchargeable transactions include:

- eDiscovery queries that search through container content for compliance or legal purposes.
- Admin actions taken through SharePoint Admin Center or SharePoint PowerShell.

## Egress meter

Egress is data that exits the SharePoint Embedded platform, such as a document downloaded to a customer client device or data transferred to a server operated by the customer. Charges are based on the total volume of data transferred out (GB).

Downloads from the SharePoint Embedded application server to Office desktop clients or Web Application Companion are exempt from egress charges.

Review pricing and cost management in Azure Cost Management as part of your operations plan.

## Admin responsibilities

Plan these responsibilities by billing model.

| Responsibility | Standard billing | Pass-through billing |
| --- | --- | --- |
| Create container type | Developer tenant admin | Developer tenant admin |
| Attach billing profile at creation | Developer tenant admin | Not in developer tenant |
| Register container type | Owning app in consuming tenant | Owning app in consuming tenant |
| Set up consuming tenant billing | Not required for app usage billing | Consuming tenant admin |
| Monitor Azure cost | Developer tenant | Consuming tenant |

## Relationship to app model

Billing model and app model are related but separate decisions.

An enterprise LOB app often uses standard billing because the developer and consuming tenant are the same organization.

An ISV multitenant app often uses pass-through billing when each customer should pay for their own usage.

An ISV can use standard billing when the ISV wants to own all usage charges.

For model selection, see [Choose an app model: single-tenant or multitenant](../plan/choose-app-model.md).

## Setup links

Use these setup references after you choose a model:

- Create and configure container types: [SharePoint Embedded container types](../build/create-container-type.md).
- Set up billing: [PAYG billing for SharePoint Embedded](../admin/setup-billing-microsoft-365-admin-center.md).
- Review meters: [SharePoint Embedded billing meters](../reference/billing-meters.md).
- Register a consuming tenant: [Register file storage container type application permissions](../build/register-application-permissions.md).

## Planning checklist

- Decide whether the developer tenant or consuming tenant pays.
- Confirm the app model.
- Confirm whether the container type is standard or pass-through.
- Identify the Azure subscription and resource group if using standard billing.
- Identify the consuming tenant admin if using pass-through billing.
- Confirm SharePoint Embedded Administrator or Global Administrator roles.
- Confirm owner or contributor permissions on the Azure subscription.
- Plan cost monitoring in Azure Cost Management.
- Plan storage lifecycle to control storage consumption.
- Plan calling patterns to manage API transaction cost.

## Next steps

Plan governance responsibilities for tenant content: [Plan security, compliance, and governance](../plan/security-compliance-governance.md).
