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

SharePoint admin APIs are accessible via [SharePoint client object model (CSOM)](./complete-basic-operations-using-sharepoint-client-library-code), [SharePoint REST service](./get-to-know-the-sharepoint-rest-service), and [Microsoft Graph](../apis/sharepoint-rest-graph).

## Overview

Here are some key principles about SharePoint admin APIs authentication and authorization:

- Admin APIs can be called by administrators (including users with [granular delegated admin privileges (GDAP)](/partner-center/gdap-supported-workloads#sharepoint)) and applications registered in Microsoft Entra.
- Each admin API defines the least-permissive permission a caller should have to call the API.
- We use role-based access control to assert a caller can call a particular admin API. If the caller has not been granted the required permission, they'll get an unauthorized access error.

## Pre-Requisites

- Caller is a user with an assigned administrator role in Microsoft Entra, or
- Caller is a registered Microsoft Entra application with the right application permissions.

## Authorization

SharePoint admin APIs can be called by users with assigned administrator roles in Microsoft Entra, or by applications registered in Microsoft Entra configured with [access on behalf of a user](/graph/auth-v2-user) or [access without a user](/graph/auth-v2-service).

### Access via administrator role

Users in a tenant can be granted administrator roles via [Microsoft admin center](/microsoft-365/admin/add-users/about-admin-roles) or [Microsoft Entra](/entra/fundamentals/users-assign-role-azure-portal). Not all administrator roles have access to all the admin APIs, and some administrator roles do not have access to any admin APIs at all. For example, users with [Global Reader](/entra/identity/role-based-access-control/permissions-reference#global-reader) role have access to read admin APIs, but have no access to admin APIs that make any updates.

### Application access on behalf of a user

Admin API operations [on behalf of a user](/graph/auth-v2-user) require applications to receive consent for SharePoint `AllSites.FullControl` application permission. This permission requires admin consent on the consuming tenant before any user from the tenant can consent to it.

### Application access without a user

Admin API operations [without a user](/graph/auth-v2-service) require applications to receive consent for Microsoft Graph [`Sites.FullControl.All`](/graph/permissions-reference#sitesfullcontrolall) application permission. This permission requires admin consent on the consuming tenant.

> [!IMPORTANT]
> When an application is to be used, using one with user-delegated application permissions is the recommended approach. This type of access enhances the security of your tenant and improves auditability of actions performed by the application. For all applications, an administrator on the consuming tenant must consent to your application's request for permission. Learn more [here](/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal).

> [!NOTE]
> We are currently working on providing more granular, less-permissive scopes for applications to use based on what admin APIs the applications want to have access to. We'll share more information in due course when this is ready for adoption.

## What's next

Here are some actions you can take next to use applications for admin API calls:

1. Configure your [application manifest](/entra/identity-platform/reference-app-manifest#requiredresourceaccess-attribute) to request the required permissions for Office 365 SharePoint Online (resourceAppId: `00000003-0000-0ff1-ce00-000000000000`).
1. [Grant admin consent](/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal) to your application on the target tenant.

| Access type         | Permission name         | resourceAccess Id                      | resourceAccess type |
| :------------------ | :---------------------- | :------------------------------------- | :------------------ |
| On behalf of a user | `AllSites.FullControl`  | `56680e0d-d2a3-4ae1-80d8-3c4f2100e3d0` | Scope               |
| Without a user      | `Sites.FullControl.All` | `a82116e5-55eb-4c41-a434-62fe8a61c773` | Role                |

1. Use your application to [invoke admin APIs](./get-to-know-the-sharepoint-rest-service).
