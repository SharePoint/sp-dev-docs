---
title: Pay-as-you-go billing for SharePoint Embedded
description: How SharePoint Embedded meters consumption and the two billing models — standard and passthrough — that a container type can use.
ms.topic: concept-article
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
agent:
  schema_version: 1
  task_type: concept
  difficulty: beginner
  roles: [owning-admin, consuming-admin, app-developer, enterprise-developer]
  prerequisites:
    - uri: /sharepoint/dev/embedded/overview
      kind: concept
    - capability: azure-subscription
  api_surface: []
  next_steps:
    - uri: /sharepoint/dev/embedded/administration/billing/billingmanagement
      when: always
    - uri: /sharepoint/dev/embedded/administration/billing/meters
      when: always
  related:
    - uri: /sharepoint/dev/embedded/administration/billing/meters
    - uri: /sharepoint/dev/embedded/administration/billing/billingmanagement
    - uri: /sharepoint/dev/embedded/administration/developer-admin/dev-admin
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
    - uri: /sharepoint/dev/embedded/administration/consuming-tenant-admin/cta
  stability: ga
  last_validated: proposed
---

# Pay-as-you-go billing for SharePoint Embedded
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

## What it is

SharePoint Embedded is a consumption-based, pay-as-you-go (PAYG) offering: you pay only for what you use, metered through an Azure subscription. Consumption is measured across four meters — storage, archived storage, API transactions, and egress. For the meter definitions, see [SharePoint Embedded meters](/sharepoint/dev/embedded/administration/billing/meters).

Each container type carries one of two **billing models**, chosen when the container type is created. The billing model determines which tenant is charged for the consumption that the container type's application generates.

| Billing model | Also called | Who is charged | Who sets up the billing profile |
|---|---|---|---|
| Standard | — | The developer (owning) tenant that creates and owns the application | Developer admin, in the owning tenant |
| Passthrough | Direct-to-customer (`directToCustomer`) | The consuming tenant registered to use the application | Consuming tenant admin (SharePoint admin or Global admin), in the consuming tenant |

> [!IMPORTANT]
> Once a container type is created, its billing model can't be changed. To change the billing model, create a new container type with the desired model.

## Why it matters / when to use

Choose a billing model to match who bears the storage and transaction cost of your application.

- **Standard billing** centralizes all consumption charges on the developer tenant. After creating the container type, the developer admin must establish a valid billing profile before the container type can be used. That profile is charged for all consumption incurred by every consuming tenant that uses the application associated with the container type. Use standard billing when the ISV absorbs storage cost (for example, a SaaS product with usage priced into the subscription). To set up the profile, see [set the billing profile](/sharepoint/dev/embedded/getting-started/containertypes#set-the-billing-profile).
- **Passthrough billing** charges each consuming tenant directly for its own consumption. The developer admin does **not** set up a billing profile for a passthrough container type. After the container type is registered in a consuming tenant, the consuming tenant admin sets up the billing profile there. Use passthrough billing when each customer pays for their own storage and transactions.

Both billing models use the same four meters. See [SharePoint Embedded meters](/sharepoint/dev/embedded/administration/billing/meters).

## When NOT to use

- Do not expect to defer billing setup for a **standard** container type. The container type can't be used until a valid billing profile exists in the developer tenant.
- Do not use a **trial** container type for production. Trial container types exist to evaluate SharePoint Embedded and expire after 30 days; they are not a billing model and don't carry production consumption guarantees. See [creating container types](/sharepoint/dev/embedded/getting-started/containertypes#creating-container-types).
- Do not attempt to switch an existing container type's billing model. Create a new container type instead.

## Key terms

| Term | Meaning |
|---|---|
| Pay-as-you-go (PAYG) | Consumption-based pricing metered through an Azure subscription; you pay only for what you use. |
| Standard billing | All consumption-based charges are billed to the developer (owning) tenant. |
| Passthrough billing | Consumption-based charges are billed to the consuming tenant; also called direct-to-customer billing. |
| `billingClassification` | The container type property set to `directToCustomer` for passthrough billing. |
| Billing profile | The Azure subscription association that consumption charges are billed against. |
| Container type | The 1:1-with-app definition that carries the billing model. Up to 25 standard container types per owning tenant. |
| Meter | A unit of metered consumption: storage, archived storage, API transactions, or egress. |

## How it fits together

In the **owning (developer) tenant**, the developer admin creates a container type and selects its billing model. For **standard** billing, the same admin attaches a billing profile backed by an Azure subscription on which they hold owner or contributor permissions; that profile is charged for all downstream consumption. For **passthrough** billing, the developer admin sets `billingClassification` to `directToCustomer` and attaches no profile.

In each **consuming tenant**, the container type is registered and containers are created and used. For a **passthrough** container type, the consuming tenant admin sets up a billing profile in the consuming tenant before the application can be used there; that profile is charged for the consuming tenant's own consumption. See the [setup guide in the consuming tenant admin center](/sharepoint/dev/embedded/administration/consuming-tenant-admin/cta#set-up-billing-for-passthrough-container-type).

You can read billing properties of a standard container type with the `fileStorageContainerType` APIs — [list container types](https://learn.microsoft.com/graph/api/filestorage-list-containertypes) and [get container type](https://learn.microsoft.com/graph/api/filestoragecontainertype-get). To create or update the billing profile, see [Billing management](/sharepoint/dev/embedded/administration/billing/billingmanagement) and [Developer admin](/sharepoint/dev/embedded/administration/developer-admin/dev-admin).

> [!NOTE]
> Setting up the billing profile for a standard container type has no Microsoft Graph API today; it is done through the SharePoint Online Management Shell. See [Billing management](/sharepoint/dev/embedded/administration/billing/billingmanagement) and api-surface.json gap `setUpContainerTypeBilling`.

## Related

- [SharePoint Embedded meters](/sharepoint/dev/embedded/administration/billing/meters)
- [Billing management](/sharepoint/dev/embedded/administration/billing/billingmanagement)
- [Developer admin](/sharepoint/dev/embedded/administration/developer-admin/dev-admin)
- [Container types](/sharepoint/dev/embedded/getting-started/containertypes)
- [Consuming tenant admin overview](/sharepoint/dev/embedded/administration/consuming-tenant-admin/cta)
- [SharePoint Embedded product page (pricing)](https://adoption.microsoft.com/en-us/sharepoint/embedded/)
