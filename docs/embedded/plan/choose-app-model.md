---
title: "Choose an App Model: Single-Tenant or Multitenant"
description: Compare single-tenant and multitenant SharePoint Embedded app models before you create container types and containers.
ms.date: 06/25/2026
ms.reviewer: mawin
ms.localizationpriority: high
---

# Choose an App Model: Single-Tenant or Multitenant

**Applies to:** Architect

<!-- agent:
task_type: concept
audience: architect
outcome: Select the SharePoint Embedded app model and setup path that matches your ownership, billing, and admin responsibilities.
next: ../plan/container-types-and-containers.md
-->

Use this article to choose between an enterprise line-of-business (LOB) model and an ISV multitenant model for SharePoint Embedded.

The app model determines who owns the app, who installs it, where containers are created, who pays, and which admins must consent or configure billing.

For architecture details, see [Understand app and tenant architecture](../plan/app-tenant-architecture.md).

## Decision summary

| Requirement | Choose single-tenant LOB | Choose multitenant ISV |
| --- | --- | --- |
| App is built for one organization | Yes | No |
| App is sold or provided to multiple customer tenants | No | Yes |
| Owning tenant and consuming tenant are usually the same | Yes | No |
| Customer tenants host their own containers and files | Not usually | Yes |
| App owner pays for all usage by default | Often | Depends on billing model |
| Customer tenant admin must onboard the app | Sometimes | Yes |

Both models use the same SharePoint Embedded primitives:

- Microsoft Entra ID application registration.
- Container type.
- Container type registration.
- Containers.
- Microsoft Graph access.
- Pay-as-you-go billing meters.

## Enterprise LOB model

Use the enterprise LOB model when an organization builds an app for internal users.

In this model:

- The enterprise owns or develops the app.
- The app registration is in the enterprise tenant.
- The enterprise tenant creates the container type.
- The enterprise tenant is also the consuming tenant.
- Containers are created in the enterprise Microsoft 365 tenant.
- Files remain in the enterprise tenant boundary.
- Enterprise tenant settings apply to the content.

This model is usually single-tenant because the same tenant owns and consumes the application.

> [!NOTE]
> The same Microsoft Entra ID tenant can be both the owning tenant and the consuming tenant for a container type.

## Multitenant ISV model

Use the multitenant ISV model when an ISV builds one app for multiple customer tenants.

In this model:

- The ISV owns or develops the app.
- The ISV tenant usually owns the app registration.
- The ISV tenant creates the container type.
- Each customer is a consuming tenant.
- Containers are created in each customer Microsoft 365 tenant.
- Files remain in the customer tenant boundary.
- Customer Microsoft 365 settings apply to that customer's content.

The ISV app provides the user experience and calls Microsoft Graph. Customer content stays with the consuming tenant.

## Who owns the app

App ownership is tied to the Microsoft Entra ID application registration and the container type.

Every container type has one owning application.

SharePoint Embedded requires a 1:1 relationship between an owning app and a container type.

For an LOB app, the enterprise owns both.

For an ISV app, the ISV owns both.

## Who installs or onboards the app

In a single-tenant LOB model, admins in the same tenant can create the container type, grant consent, and configure billing.

In a multitenant ISV model, customer tenant admins must onboard the app for their tenant.

The owning app must have a service principal in the consuming tenant and must receive admin consent to perform container type registration.

For the registration flow, see [Register file storage container type application permissions](../build/register-application-permissions.md).

## Where containers are created

Containers are created in the consuming tenant.

For an enterprise LOB app, that is usually the enterprise tenant.

For an ISV app, each customer tenant has its own containers.

This separation keeps customer files in the customer's Microsoft 365 tenant boundary.

> [!IMPORTANT]
> Don't design an ISV architecture that stores all customer files in the ISV tenant. SharePoint Embedded stores app documents in the consuming tenant.

## Who pays

SharePoint Embedded is pay-as-you-go.

Billing is based on meters such as storage, API transactions, and egress.

The billing model is selected for the container type.

SharePoint Embedded supports two billing models:

- Standard billing.
- Pass-through billing.

For details, see [Choose a billing model](../plan/choose-billing-model.md).

## Standard billing

With standard billing, consumption-based charges are billed to the tenant that owns or develops the application.

An Azure subscription from the developer tenant is used when creating a standard container type.

Use standard billing when the app owner wants to absorb or centrally manage SharePoint Embedded usage charges.

## Pass-through billing

With pass-through billing, charges are billed directly to the tenant registered to use the SharePoint Embedded application.

The developer tenant admin doesn't set up a billing profile when creating the pass-through container type.

After the container type is registered in the consuming tenant, the consuming tenant admin sets up the billing profile.

Use pass-through billing when each customer tenant should pay for its own usage.

## Consent and admin responsibilities

Plan these responsibilities before implementation.

| Responsibility | LOB single-tenant | ISV multitenant |
| --- | --- | --- |
| Create app registration | Enterprise tenant | ISV tenant |
| Create container type | Enterprise tenant | ISV tenant |
| Register container type | Same tenant | Each customer consuming tenant |
| Grant Microsoft Graph consent | Enterprise admin | Customer tenant admin for consuming tenant access |
| Configure standard billing | Enterprise/developer | ISV/developer |
| Configure pass-through billing | Consuming tenant admin | Customer tenant admin |
| Govern content | Enterprise compliance admin | Customer compliance admin |

## Which setup path to follow next

If you're building an internal enterprise app:

1. Plan authentication with [Plan authentication and permissions](../plan/authentication-permissions.md).
1. Understand container type design with [Understand container types and containers](../plan/container-types-and-containers.md).
1. Create the container type by using the guidance in [SharePoint Embedded container types](../build/create-container-type.md).
1. Configure billing by using [PAYG billing for SharePoint Embedded](../admin/setup-billing-m365-admin-center.md).

If you're building an ISV app:

1. Plan tenant relationships with [Understand app and tenant architecture](../plan/app-tenant-architecture.md).
1. Choose standard or pass-through billing with [Choose a billing model](../plan/choose-billing-model.md).
1. Create the container type in the owning tenant.
1. Register the container type in each consuming tenant by using [Register file storage container type application permissions](../build/register-application-permissions.md).

## Planning checklist

- Identify whether the app is internal or customer-facing.
- Identify the owning tenant.
- Identify all consuming tenants.
- Confirm who owns the Microsoft Entra ID application registration.
- Confirm where the container type is created.
- Confirm where containers are created.
- Choose standard or pass-through billing.
- Identify who grants admin consent.
- Identify who configures billing.
- Identify who manages compliance policies.

## Next steps
Review the storage model: [Understand container types and containers](../plan/container-types-and-containers.md).
