---
title: Choose a billing model for your app
description: Compare standard and pass-through billing for SharePoint Embedded apps before onboarding customer tenants.
ms.date: 07/10/2026
ms.reviewer: cindylay
ms.author: mawin
ms.localizationpriority: high
ai-usage: ai-assisted
---
# Choose a billing model for your app

**Applies to:** ISV

<!-- agent:
task_type: concept
audience: isv
outcome: Select the SharePoint Embedded billing model that matches the commercial and onboarding model for a customer-facing app.
next: customer-tenant-setup-guide.md
-->

SharePoint Embedded is a consumption-based pay-as-you-go service.
As an ISV, you choose the billing model when you create the production container type for your app.
That choice affects who pays for storage, API transactions, and egress, and it changes what the customer administrator must do during onboarding.

Use this article to decide between standard billing and pass-through billing before you publish customer setup instructions.

## Billing choices

SharePoint Embedded supports two production billing models for standard container types.

| Billing model | Who is billed | Who configures billing | Typical ISV use |
| --- | --- | --- | --- |
| Standard billing | Developer tenant | Developer | You include SharePoint Embedded consumption in your product price or centralize billing. |
| Pass-through billing | Consuming tenant | Customer admin | The customer pays Microsoft directly for their SharePoint Embedded consumption. |

For current billing details, see [PAYG billing for SharePoint Embedded](../admin/setup-billing-microsoft-365-admin-center.md).

> [!IMPORTANT]
> Choose the billing model before you create the container type.
> Standard and pass-through billing can't be converted after creation.

## How billing relates to container types

A container type defines access, behavior, and billing accountability for a set of containers.
Each container type is strongly coupled with one owning application.
The owning application developer creates and manages the container type.

Container types are used for:

- Access authorization between the app and containers.
- Trial exploration during development.
- Billing for non-trial workloads.
- Shared configuration settings such as discoverability and sharing behavior.

For more about container types, see [Create New SharePoint Embedded Container Types](../plan/container-types-containers.md).

## Standard billing

With standard billing, all consumption-based SharePoint Embedded charges are billed to the tenant that owns or develops the application.
The developer must establish a valid Azure billing profile for the container type.

Choose standard billing when:

- You sell a bundled SaaS price and absorb or allocate SharePoint Embedded usage internally.
- You want a simpler customer setup path.
- Customers shouldn't configure an Azure subscription for your app.
- You operate a managed service where your tenant owns the consumption relationship.
- Your commercial agreement already covers storage and transaction costs.

Standard billing usually reduces customer onboarding steps because the customer doesn't need to set up a SharePoint Embedded billing profile in the consuming tenant.
However, you must manage your own Azure subscription, resource group, cost tracking, and customer usage allocation.

### Standard billing dependencies

Before you create or activate a standard billing container type, confirm that your developer tenant has:

- An active SharePoint tenant.
- A Microsoft Entra owning application.
- A SharePoint Embedded Administrator or Global Administrator.
- An Azure subscription in the developer tenant.
- A resource group attached to the subscription.
- Owner or contributor permissions for the admin who sets up the billing relationship.

When you set up standard billing, provide the Azure subscription, resource group, and region for the billing profile.

> [!NOTE]
> Standard billing doesn't remove the need for customer consent, container type registration, or validation.
> It only changes who configures and pays for SharePoint Embedded consumption.

## Pass-through billing

With pass-through billing, consumption charges are billed directly to the tenant registered to use the SharePoint Embedded application.
The developer creates the container type with pass-through billing enabled.
The customer administrator then configures billing in the consuming tenant before users can access the app.

Choose pass-through billing when:

- Customers must pay Microsoft directly for their own SharePoint Embedded usage.
- Your product contract excludes Microsoft 365 consumption charges.
- Customers require billing visibility in their own Azure Cost Management environment.
- Each tenant's storage, transaction, and egress costs should stay with that tenant.
- You want a cleaner separation between app subscription revenue and platform consumption.

Pass-through billing adds customer onboarding work.
The customer admin must set up pay-as-you-go billing in the Microsoft 365 admin center and connect a valid Azure subscription and resource group.

### Pass-through billing dependencies

Before a customer can use a pass-through SharePoint Embedded app, the consuming tenant needs:

- A SharePoint tenant.
- A Global Administrator or SharePoint Embedded Administrator.
- A valid Azure subscription.
- A valid Azure resource group.
- Owner or contributor permissions for the admin who creates the billing relationship.
- Completed app registration and consent steps.

No user can access any pass-through SharePoint Embedded app before valid billing is set up for the SharePoint Embedded platform in the consuming tenant.
For the customer-facing setup path, see [Guide customers through tenant setup](customer-tenant-setup-guide.md).

## Impact on customer onboarding

Your billing choice changes the customer handoff.

### If you choose standard billing

Tell the customer:

1. Your organization owns the SharePoint Embedded consumption billing relationship.
1. The customer still needs to review and consent to the app.
1. The customer still needs to complete tenant setup and validation.
1. The customer doesn't need to configure SharePoint Embedded pay-as-you-go billing for this app.
1. Any product charges are handled through your commercial agreement.

### If you choose pass-through billing

Tell the customer:

1. The app uses SharePoint Embedded pass-through billing.
1. The customer must provide an Azure subscription and resource group.
1. The customer admin must turn on billing for SharePoint Embedded apps.
1. Users can't use the app until billing is valid.
1. The customer can track usage in Azure Cost Management.

> [!TIP]
> Put the billing model in the first page of your installation guide.
> Customer admins often need to involve both Microsoft 365 and Azure billing owners.

## Decision checklist

Use this checklist before you create the production container type.

| Question | Prefer standard billing when | Prefer pass-through billing when |
| --- | --- | --- |
| Who should receive Microsoft consumption charges? | You should. | The customer should. |
| Who owns Azure cost management? | Your operations team. | The customer's operations team. |
| How simple should customer setup be? | Minimize billing steps. | Customer billing control is required. |
| How is your product priced? | SharePoint Embedded consumption is bundled. | SharePoint Embedded consumption is separate. |
| Do customers require tenant-level billing visibility? | Not required. | Required. |
| Can customer admins configure Azure billing? | Not necessary. | Required before use. |

## Avoid common mistakes

Avoid these publishing mistakes:

- Creating a trial container type for production customer tenants.
- Creating a standard-billed container type when the contract expects pass-through billing.
- Creating a pass-through container type without telling customers they must configure billing.
- Omitting Azure subscription and resource group prerequisites from customer setup instructions.
- Reusing one owning application for multiple container types.
- Sending cmdlet snippets without explaining the required parameters and owner responsibilities.

## Communicate metering boundaries

SharePoint Embedded billing uses consumption meters.
Storage, archived storage, API transactions, and egress are the major service meters.
Customers using pass-through billing should understand that the meter usage appears through their Azure billing relationship.
For pricing details, link to the product pricing page and the current [SharePoint Embedded meters](../reference/billing-meters.md) article.

## Record your decision

Before you proceed, record:

- Billing model.
- Owning application ID.
- Container type name.
- Container type ID after creation.
- Azure subscription and resource group owner, if standard billing.
- Customer billing prerequisites, if pass-through billing.
- Commercial explanation to include in the installation guide.

Use these values in [Prepare your app for customer installation](prepare-customer-installation.md) and [Guide customers through tenant setup](customer-tenant-setup-guide.md).

## Next steps
After you choose a billing model, prepare customer-facing tenant setup instructions: [Guide customers through tenant setup](customer-tenant-setup-guide.md).
