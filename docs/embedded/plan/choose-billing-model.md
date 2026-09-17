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

For consuming-tenant pass-through setup, see [Set up billing in Microsoft 365 admin center](../admin/setup-billing-microsoft-365-admin-center.md).

## Billing models

SharePoint Embedded provides two billing models:

- Standard billing.
- Pass-through billing.

Both models use the same billing meters.

The model determines which tenant is billed and who configures the billing profile.

> [!IMPORTANT]
> Once a container type is created, its billing model can't be changed. To switch models, you must delete and re-create the container type with the desired billing model.

| Billing model | Who is billed | Who configures billing |
| --- | --- | --- |
| Standard | Tenant that owns or develops the application. | Container type owner, SharePoint Embedded Administrator, or Global Administrator in the developer tenant. |
| Pass-through | Tenant registered to use the SharePoint Embedded application. | Billing Administrator or Global Administrator in the consuming tenant. |

## Standard billing

With standard billing, all consumption-based charges are directly billed to the tenant that owns or develops the application.

A container type owner can create and manage a billing profile for a container type they own. The owner doesn't need the SharePoint Embedded Administrator or Global Administrator role.

SharePoint Embedded Administrators and Global Administrators can manage billing for any standard-billed container type in the developer tenant.

Use standard billing when:

- The developer tenant wants to centralize usage charges.
- The app is an internal enterprise line-of-business (LOB) app.
- The independent software vendor (ISV) or developer tenant plans to absorb or separately recover usage costs.
- Consuming tenants shouldn't configure their own SharePoint Embedded billing profile.

The billing setup requires:

- An existing SharePoint tenant.
- An Azure subscription in the developer tenant.
- A resource group attached to the Azure subscription.
- A container type owner, SharePoint Embedded Administrator, or Global Administrator in the developer tenant.
- [Owner](/azure/role-based-access-control/built-in-roles/privileged#owner) or [Contributor](/azure/role-based-access-control/built-in-roles/privileged#contributor) access to the Azure subscription for the person who sets up billing.

### Manage standard billing as a container type owner

A non-administrator container type owner can create and manage a standard billing profile for a container type they own through the SharePoint Embedded Visual Studio Code extension or Model Context Protocol (MCP) server.

The owner also needs Owner or Contributor access to the Azure subscription. Choose one of these facilities:

- In the [SharePoint Embedded Visual Studio Code extension](../build/quickstart-vscode.md#configure-standard-billing), select the container type and use **Attach billing**. Then select the Azure subscription and resource group.
- In the [SharePoint Embedded MCP server](../build/sharepoint-embedded-mcp-server.md#available-tools), use `billing_setup` to connect the container type to an Azure subscription and resource group. Use `billing_check` to inspect the billing configuration.

The SharePoint Embedded billing service verifies that the signed-in user owns the container type.

A user who doesn't own the container type needs the SharePoint Embedded Administrator or Global Administrator role.

### Manage standard billing as an administrator

SharePoint Embedded Administrators and Global Administrators can use the SharePoint Online Management Shell to manage billing for any standard-billed container type in the developer tenant.

Create the container type:

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

SharePoint Embedded Administrators and Global Administrators in the developer tenant don't set up a billing profile when creating a pass-through container type.

After the container type is registered in the consuming tenant, a Billing Administrator or Global Administrator in that tenant sets up the billing profile.

Use pass-through billing when:

- Each consuming tenant should pay for its own SharePoint Embedded usage.
- The app is an ISV multitenant application.
- The consuming tenant controls the Azure subscription used for pay-as-you-go charges.
- A Billing Administrator or Global Administrator in the consuming tenant completes billing onboarding.

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
- Admin actions taken through SharePoint admin center or SharePoint PowerShell.

## Egress meter

Egress is data that exits the SharePoint Embedded platform, such as a document downloaded to a customer client device or data transferred to a server operated by the customer. Charges are based on the total volume of data transferred out (GB).

Downloads from the SharePoint Embedded application server to Office desktop clients or Office for the web through Web Application Companion (WAC) are exempt from egress charges.

Review pricing and cost management in Azure Cost Management as part of your operations plan.

## Billing responsibilities

Plan these responsibilities by billing model.

| Responsibility | Standard billing | Pass-through billing |
| --- | --- | --- |
| Create container type | Developer in the developer tenant | Developer in the developer tenant |
| Attach or manage billing profile | Container type owner for a container type they own; SharePoint Embedded Administrator or Global Administrator for any standard-billed container type in the developer tenant | Not in developer tenant |
| Register container type | Owning app in consuming tenant | Owning app in consuming tenant |
| Set up consuming tenant billing | Not required for app usage billing | Billing Administrator or Global Administrator in the consuming tenant |
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
- Set up pass-through billing: [Set up billing in Microsoft 365 admin center](../admin/setup-billing-microsoft-365-admin-center.md).
- Review meters: [SharePoint Embedded billing meters](../reference/billing-meters.md).
- Register a consuming tenant: [Register file storage container type application permissions](../build/register-application-permissions.md).

## Planning checklist

- Decide whether the developer tenant or consuming tenant pays.
- Confirm the app model.
- Confirm whether the container type is standard or pass-through.
- Identify the Azure subscription and resource group if using standard billing.
- Identify a Billing Administrator or Global Administrator in the consuming tenant if using pass-through billing.
- Confirm container type owner access or the SharePoint Embedded Administrator or Global Administrator role for standard billing.
- Confirm Billing Administrator or Global Administrator access for pass-through billing.
- Confirm Owner or Contributor access to the Azure subscription.
- Plan cost monitoring in Azure Cost Management.
- Plan storage lifecycle to control storage consumption.
- Plan calling patterns to manage API transaction cost.

## Next steps

Plan governance responsibilities for tenant content: [Plan security, compliance, and governance](../plan/security-compliance-governance.md).
