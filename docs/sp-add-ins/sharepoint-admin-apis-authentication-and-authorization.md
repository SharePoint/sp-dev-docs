---
title: SharePoint admin APIs authentication and authorization
description: This article describes the authentication and authorization model for SharePoint admin APIs.
author: samkabue
ms.author: samkabue
ms.date: 06/28/2024
ms.localizationpriority: high
ms.service: sharepoint
---

# SharePoint admin APIs authentication and authorization

SharePoint admin APIs are accessible via [SharePoint client object model (CSOM)](./complete-basic-operations-using-sharepoint-client-library-code.md), [SharePoint REST service](./get-to-know-the-sharepoint-rest-service.md), and [Microsoft Graph](../apis/sharepoint-rest-graph.md).

## Overview

Here are some key principles about SharePoint admin APIs authentication and authorization:

- Each admin API defines the least-permissive permission a caller should have to call the API.
- We use role-based access control to assert a caller can call a particular admin API. If the caller has not been granted the required permission, they'll get an unauthorized access error.

## Pre-Requisites

- Caller is a registered Microsoft Entra application with the right application permissions.

## Authorization

SharePoint admin APIs can be called by applications registered in Microsoft Entra configured with [access on behalf of a user](/graph/auth-v2-user) or [access without a user](/graph/auth-v2-service).

### Application access on behalf of a user

Admin API operations [on behalf of a user](/graph/auth-v2-user) require applications to receive consent for SharePoint `AllSites.FullControl` application permission. This permission requires admin consent on the consuming tenant before any user from the tenant can consent to it.

### Application access without a user

Admin API operations [without a user](/graph/auth-v2-service) require applications to receive consent for `Sites.FullControl.All` application permission on the SharePoint resource. This permission requires admin consent on the consuming tenant.

> [!IMPORTANT]
> Using application access on behalf of a user is the recommended approach. This type of access enhances the security of your tenant and improves auditability of actions performed by the application. For all applications, an administrator on the consuming tenant must consent to your application's request for permission. Learn more [here](/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal).

> [!NOTE]
> We are currently working on providing more granular, less-permissive scopes for applications to use based on what admin APIs the applications want to have access to. We'll share more information in due course when this is ready for adoption.

## What's next

Here are some actions you can take next to use applications for admin API calls:

1. Configure your [application manifest](/entra/identity-platform/reference-app-manifest#requiredresourceaccess-attribute) to request the required permissions for Office 365 SharePoint Online (resourceAppId: `00000003-0000-0ff1-ce00-000000000000`).
1. [Grant admin consent](/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal) to your application on the target tenant.

    | Access type         | Permission name         | `resourceAccess` id                    | `resourceAccess` type |
    | :------------------ | :---------------------- | :------------------------------------- | :-------------------- |
    | On behalf of a user | `AllSites.FullControl`  | `56680e0d-d2a3-4ae1-80d8-3c4f2100e3d0` | Scope                 |
    | Without a user      | `Sites.FullControl.All` | `a82116e5-55eb-4c41-a434-62fe8a61c773` | Role                  |

1. Use your application to [invoke admin APIs](./get-to-know-the-sharepoint-rest-service.md).
