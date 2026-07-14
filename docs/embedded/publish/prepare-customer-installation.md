---
title: Prepare Your App for Customer Installation
description: Prepare a multitenant SharePoint Embedded app, container type, permissions, billing choice, and admin handoff for customer tenants.
ms.date: 07/13/2026
ms.reviewer: stpuceli
ms.author: mawin
ms.localizationpriority: high
ai-usage: ai-assisted
---
# Prepare your app for customer installation

**Applies to:** ISV

<!-- agent:
task_type: how-to
audience: isv
outcome: Package customer-ready installation requirements and handoff materials for a multitenant SharePoint Embedded app.
next: choose-app-billing-model.md
-->

Use this article before you send a SharePoint Embedded application to a customer tenant.
SharePoint Embedded is API-only, so customer installation depends on container type registration, consent, permissions, and billing configuration instead of a traditional SharePoint site deployment.
Your goal is to give the customer administrator a complete, repeatable onboarding package.

> [!IMPORTANT]
> Prepare production container types in your developer tenant before customer onboarding.
> Trial container types are for exploration and can't be deployed to other consuming tenants.

## Customer installation flow

A customer-ready SharePoint Embedded application usually follows this sequence:

1. Choose the application model and tenant model for your product.
1. Register or configure the owning application in your developer tenant.
1. Create a standard production container type for that owning application.
1. Choose standard billing or pass-through billing for the container type.
1. Prepare Microsoft Entra consent information for the customer's admin.
1. Give the customer tenant setup instructions.
1. Ask the customer to complete container type registration, admin consent, and billing setup when required.
1. Validate that the application can create and use containers in the consuming tenant.

For the next decision in the publishing path, see [Choose a billing model for your app](choose-app-billing-model.md).

## Prerequisites

Before you prepare customer installation materials, confirm the following items in your developer tenant.

| Area | Requirement |
| --- | --- |
| Microsoft 365 tenant | An active SharePoint tenant is available. |
| Admin role | A Global Administrator or SharePoint Embedded Administrator can manage container types. |
| Application | You have a Microsoft Entra application that will own the container type. |
| Container type | You have a production standard container type, not a trial container type. |
| Billing decision | You know whether the app uses standard or pass-through billing. |
| Customer package | You can provide app IDs, redirect URLs, permissions, support contacts, and validation steps. |

## Understand the developer responsibility

The developer manages the SharePoint Embedded application and the container types that back it.
A container type defines the relationship between a SharePoint Embedded application and the containers that store content.
Each container type is associated with an owning application.
The owning application has default full access to containers of that type.

Developers can use the SharePoint Embedded Visual Studio Code extension or Microsoft Graph `fileStorageContainerType` APIs to create, list, update, and delete container types. Graph creation is delegated-only and requires no admin role. For details, see [Create and configure a container type](../build/create-container-type.md).

For model and tenant decisions, see [Choose an app model](../plan/choose-app-model.md).

## Package the application configuration

Give customers the exact identifiers and URLs they need to review and approve the app.
Don't ask a customer admin to infer these values from code.

Include the following information in your installation package:

- Product name and publisher name.
- Owning application ID.
- Container type ID, after it has been created.
- Container type name.
- Billing model: standard or pass-through.
- Application redirect URL, if configured on the container type.
- Customer-facing sign-in URL.
- Customer-facing support URL.
- List of Microsoft Entra permissions requested by the app.
- Whether the app uses delegated permissions, application permissions, or both.
- Whether a guest application requires access to the owning application.
- Data residency, retention, and support boundaries for your app.
- Validation steps the customer can run after setup.

## Confirm the owning app and container type relationship

Every production container type must have an owning application.
A single owning application can own only one container type at a time.
Don't reuse one owning application across multiple production container types.
If you need multiple isolation or billing boundaries, plan separate owning applications and container types.

Create the production container type with the SharePoint Embedded Visual Studio Code extension or the Microsoft Graph [Create fileStorageContainerType](/graph/api/filestorage-post-containertypes) API. Microsoft Graph creation is delegated-only and doesn't require an admin role.

## Configure a production container type

Create a standard container type for customer use.
SharePoint Embedded supports two production billing choices:

- Standard billing, where the developer tenant is billed.
- Pass-through billing, where the consuming tenant is billed after registration and setup.

For standard billing, the developer must provide an Azure subscription, resource group, and region when attaching billing information.
For pass-through billing, the developer creates the container type with pass-through billing enabled, and the customer admin later sets up billing in the consuming tenant.

> [!IMPORTANT]
> Standard and pass-through billing choices can't be converted after the container type is created.
> If you choose the wrong billing model, create a new container type with the intended billing model.

## Decide what the customer must do

Your customer handoff should clearly separate ISV tasks from customer administrator tasks.

### ISV tasks

Complete these tasks before the customer starts setup:

1. Create or configure the owning Microsoft Entra application.
1. Create the production container type.
1. Configure container type settings that apply to all containers.
1. Document Microsoft Entra consent requirements.
1. Document whether pass-through billing is required.
1. Prepare the validation checklist.
1. Provide escalation contacts for installation failures.

### Customer admin tasks

Ask the customer administrator to complete these tasks in their tenant:

1. Review the app publisher, permissions, and data handling documentation.
1. Grant admin consent when required.
1. Register the container type in the consuming tenant through the app's registration flow.
1. Set up billing if the app uses pass-through billing.
1. Validate that the app appears in tenant administration experiences.
1. Confirm that containers can be created and managed.

For customer-facing steps, see [Guide customers through tenant setup](customer-tenant-setup-guide.md).

## Prepare permission guidance

Document the permissions your app requests and why each permission is needed.
Use product-specific descriptions instead of copying permission display names without context.

At minimum, a SharePoint Embedded app installed on a consuming tenant requests these Microsoft Graph permissions:

| Permission | Type | Purpose |
| --- | --- | --- |
| [`FileStorageContainerTypeReg.Selected`](/graph/permissions-reference#filestoragecontainertyperegselected) | Delegated or application | Register your container type in the consuming tenant. With the delegated permission, the user performing registration must be a [SharePoint Embedded Administrator](/entra/identity/role-based-access-control/permissions-reference#sharepoint-embedded-administrator) or Global Administrator. The application permission requires admin consent; the delegated permission doesn't. |
| [`FileStorageContainer.Selected`](/graph/permissions-reference#filestoragecontainerselected) | Delegated or application | Interact with SharePoint Embedded content for the container type. The application permission requires admin consent; the delegated permission does not. |

> [!IMPORTANT]
> Using SharePoint Embedded on behalf of a user (delegated access) is the recommended approach. It improves both the security and the auditability of actions performed by your application.

For single-tenant apps, you can [construct an admin consent URL](/entra/identity-platform/v2-admin-consent#request-the-permissions-from-a-directory-admin) and provide it to the tenant's Microsoft Entra administrator, for example:

```http
https://login.microsoftonline.com/{tenant}/v2.0/adminconsent?client_id={client_id}&redirect_uri={redirect_uri}
```

Ensure your app's [redirect URI](/entra/identity-platform/reply-url) can handle admin consent flows. For the full permission model, see [Authentication and authorization](../build/configure-authentication-authorization.md).

If your app uses guest application access, explain how the consuming tenant admin can view guest application permissions in administrative tools.

> [!CAUTION]
> Don't hide optional or elevated permissions in an installation script.
> Customer admins should be able to review the requested permissions before they grant consent.

## Prepare billing guidance

Tell customers which billing model applies before they install the app.

For standard billing:

- Explain that your developer tenant owns the SharePoint Embedded consumption billing relationship.
- Tell the customer whether SharePoint Embedded usage is included in your commercial agreement.
- Confirm that the customer doesn't need to configure an Azure subscription for SharePoint Embedded billing.

For pass-through billing:

- Explain that consumption charges are billed to the consuming tenant.
- Tell the customer that no user can access pass-through SharePoint Embedded apps until valid billing is configured.
- Send the customer to [Guide customers through tenant setup](customer-tenant-setup-guide.md) and [Install a SharePoint Embedded app](../admin/install-sharepoint-embedded-app.md).

## Prepare admin handoff materials

Create a concise admin handoff packet that includes:

- Installation overview.
- Publisher and app identity information.
- Security and compliance summary.
- Billing model summary.
- Microsoft Entra consent steps.
- Tenant setup steps.
- Validation checklist.
- Rollback or uninstall guidance.
- Support contacts and expected response times.

Keep the handoff specific to one product and one container type.
If you publish multiple products, provide a separate handoff for each app.

## Provide a validation checklist

Include a checklist the customer can complete with you after installation:

- The customer admin can identify the SharePoint Embedded application in the tenant.
- The customer admin has granted the expected consent.
- Pass-through billing is enabled when required.
- The application can create a test container.
- The application can upload, read, and delete test content.
- The customer admin can view container details.
- External sharing behavior matches the customer's policy.
- The test data is removed after validation.

For detailed validation, see [Validate customer app installation](validate-customer-installation.md).

## Next steps

Choose the correct billing option before you send installation instructions to a customer: [Choose a billing model for your app](choose-app-billing-model.md).
