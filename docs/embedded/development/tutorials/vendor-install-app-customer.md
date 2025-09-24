---
title: Install your SharePoint Embedded application for customers.
description: Install your SharePoint Embedded application on your customers' tenant seamlessly.
ms.date: 09/25/2025
ms.localizationpriority: medium
---

# Install your SharePoint Embedded application for customers

This guide provides instructions for developers looking to get their SharePoint Embedded (SPE) app installed on a Microsoft 365 consuming tenant.

## Prerequisites

This guide assumes that you created a SharePoint Embedded container type and developed your application. Learn more about [container types](../../getting-started/containertypes.md).

The consuming tenant can be any Microsoft 365 tenant (including your own), but it must have at least one SharePoint license.

## Overview

Developers looking to get their SharePoint Embedded app installed on a tenant have a few tasks to complete:

- Get the required admin permission grants for your app on the consuming tenant
- Register your app's container type on the consuming tenant
- Ensure your customer’s tenant completed [SharePoint Embedded pay-as-you-go billing setup](../../administration/consuming-tenant-admin/cta.md#set-up-billing-for-pass-through-app) if your container type is [configured for pass-through billing](../../administration/billing/billing.md#pass-through)

### Application permissions to request

Your app needs a minimum set of Microsoft Graph permissions to be installed on a consuming tenant. For more information, see [SharePoint Embedded authentication and authorization](../auth.md).

1. [`FileStorageContainerTypeReg.Selected`](/graph/permissions-reference#filestoragecontainertyperegselected) delegated or application permission to register the SPE container type in the consuming tenant. When your app uses the delegated permission, the user performing the container type registration must be a [SharePoint Embedded Admin](/entra/identity/role-based-access-control/permissions-reference#sharepoint-embedded-administrator) or [Global Admin](/entra/identity/role-based-access-control/permissions-reference#global-administrator). The application permission requires admin consent, but the delegate permission doesn't require admin consent.
1. [`FileStorageContainer.Selected`](/graph/permissions-reference#filestoragecontainerselected) delegated or application permission to interact with SharePoint Embedded content for the container type in the consuming tenant. This permission requires admin consent.

> [!IMPORTANT]
> Using SharePoint Embedded on behalf of a user is the recommended approach. This type of access enhances the security of your application. It also improves the auditability of actions performed by your application.

### Request admin consent

Single-tenant apps (when the app is registered and is used in the same tenant) can benefit from getting admin consent from the Microsoft Entra directory administrator in a simplified manner. [Construct the admin consent URL](/entra/identity-platform/v2-admin-consent#request-the-permissions-from-a-directory-admin) and provide it to your Microsoft Entra directory administrator for them to grant admin consent. For example:

```http
https://login.microsoftonline.com/{tenant}/v2.0/adminconsent?client_id={client_id}&redirect_uri={redirect_uri}
```

> [!NOTE]
> Make sure your app's [redirect URI](/entra/identity-platform/reply-url) can [handle admin consent flows](/entra/identity-platform/v2-admin-consent#successful-response).

## In-app installation experience (recommended)

You can facilitate the installation of your SharePoint Embedded app within your own app experience. We recommended that you use the [Microsoft Authentication Library (MSAL)](/entra/identity-platform/msal-overview) to handle all authorization steps. Here's the high-level process:

1. Provide a [sign-in experience in your app](/entra/identity-platform/quickstart-web-app-sign-in) and obtain an [ID token](/entra/identity-platform/id-tokens) for the user
1. Inspect and [validate the token](/entra/identity-platform/claims-validation) to extract the tenant ID and roles assigned to the user
1. Determine if your app is already installed on the tenant
   1. Request a Microsoft Graph access token with `FileStorageContainerTypeReg.Selected` application permission
   1. Try to [get the registration for your container type](/graph/api/filestoragecontainertyperegistration-get). If your container type is already registered in the consuming tenant, you're done!
1. Determine if the user has either the [Privileged Role Administrator](/entra/identity/role-based-access-control/permissions-reference#privileged-role-administrator) or [Global Administrator](/entra/identity/role-based-access-control/permissions-reference#global-administrator) roles by validating the `wids` claim in the ID token.
   1. If the user isn't a Privileged Role Admin or Global Admin, it's unlikely that they can provide admin consent in the following steps.
1. [Request admin consent](#request-admin-consent) for your app by navigating the user to the admin consent URL.
   1. Ensure your app's redirect URI can handle this redirection appropriately so you can proceed with the next steps within the app experience.
1. Once admin consent is granted, request a Microsoft Graph access token with `FileStorageContainerTypeReg.Selected` application permission
1. [Create your container type registration](/graph/api/filestorage-post-containertyperegistrations) on the consuming tenant
1. If your container type is [configured for pass-through billing](../../administration/billing/billing.md#pass-through), you should make a billable API call to confirm that billing is set up. For example, [create a container](/graph/api/filestoragecontainer-post).
   1. If the call fails with a billing error, point the user to [set up SharePoint Embedded pay-as-you-go billing](../../administration/consuming-tenant-admin/cta.md#set-up-billing-for-pass-through-app).
