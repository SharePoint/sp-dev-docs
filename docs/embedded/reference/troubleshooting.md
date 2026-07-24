---
title: Troubleshooting
description: Common SharePoint Embedded setup, auth, billing, Office, search, webhook, and admin issues.
ms.date: 07/09/2026
ms.reviewer: pemtaira
ms.author: mawin
ms.localizationpriority: high
ai-usage: ai-assisted
---

# Troubleshooting

**Applies to:** Developer

<!-- agent:
task_type: reference
audience: developer
outcome: Diagnose common SharePoint Embedded implementation and administration issues.
next: ../build/create-manage-containers.md
-->

Use this reference to identify likely causes and fixes. For end-to-end setup, see [create and manage containers](../build/create-manage-containers.md), [manage files](../build/manage-files.md), and [monitor usage, billing, and cost](../admin/monitor-usage-billing-cost.md).

| Issue | Likely cause | Fix | Related task |
| --- | --- | --- | --- |
| Container type creation fails. | The user doesn't have the required permission, the owning app configuration is incomplete, or billing setup is missing. | Confirm the user can create container types with Microsoft Graph or the SharePoint Embedded Visual Studio Code extension. For admin-only operations, confirm the required role. | [Create and configure a container type](../build/create-container-type.md) |
| Standard container type billing setup fails with `SubscriptionNotRegistered`. | `Microsoft.Syntex` isn't registered as a resource provider in the subscription. | Wait 5-10 minutes after the cmdlet sends the registration request, then retry. Ensure the admin has Owner or Contributor permissions on the Azure subscription. | [Choose a billing model](../plan/choose-billing-model.md) |
| Access denied when calling container or file APIs. | The container type hasn't been registered in the consuming tenant, or the application lacks container type application permissions. | Grant admin consent, call the container type registration API, and verify delegated or app-only permissions include the required operations. | [Create and manage containers](../build/create-manage-containers.md) |
| Delegated API calls return `403 Forbidden` when listing containers. | The signed-in user doesn't have a OneDrive. The List containers operation on behalf of a user requires the user to have a OneDrive. | Use app-only mode for list containers, or ensure the user has a OneDrive until this dependency is removed. | [Create and manage containers](../build/create-manage-containers.md) |
| Pass-through app users can't create new containers (or can't use the app before billing is first configured). | Pass-through billing hasn't been configured, SharePoint Embedded was turned off, or the linked Azure subscription was disconnected. A Global Administrator must set up billing in the Microsoft 365 admin center. | Have a Global Administrator configure pay-as-you-go services for SharePoint Embedded in the Microsoft 365 admin center and confirm the Azure subscription remains linked. Existing containers stay accessible while billing is misconfigured or disconnected. | [Monitor usage, billing, and cost](../admin/monitor-usage-billing-cost.md) |
| Office documents open but mentions don't resolve expected users. | Mentions require target users to have a Microsoft 365 license and are restricted to people inside the consuming tenant organization. | Assign the required Microsoft 365 license to internal target users; don't expect guest or cross-tenant users in the mentions picker. | [Manage files](../build/manage-files.md) |
| Search returns unexpected containers or content. | Microsoft Search runs in the context of the signed-in user and can return content the user can access unless scoped. | Include `ContainerTypeId` or `ContainerId` in the query string. If discoverability is disabled, set `includeHiddenContent` to `true` as described in [Build search experiences](../build/search-containers-files.md). | [Build search experiences](../build/search-containers-files.md) |
| Search API calls fail because of permissions. | Search scenarios require delegated Microsoft Graph permissions during preview, including `Files.Read.All` in addition to `FileStorageContainer.Selected`. | Request and consent to the required delegated permissions and retest with a signed-in user. | [Build search experiences](../build/search-containers-files.md) |
| Webhook subscription validation fails. | The notification endpoint doesn't echo the `validationToken` as plain text, or the endpoint isn't publicly reachable. | Return `200` with the `validationToken` and `Content-Type: text/plain`; expose the endpoint through a reachable public URL. | [Use webhooks](../build/respond-to-changes-webhooks.md) |
| Webhook notifications don't identify the intended container. | The subscription notification URL doesn't carry the container ID, or the handler doesn't read it. | Append `driveId={{ContainerId}}` to the notification URL and have the handler read the `driveId` query parameter. | [Use webhooks](../build/respond-to-changes-webhooks.md) |
| Container isn't visible in SharePoint admin center. | The admin is using the wrong owning application ID, identity, or role. | Confirm the owning application ID and admin role, then refresh the admin experience. | [Admin overview](../admin/admin-overview.md) |

## Diagnostic links

- [Authentication and authorization](../build/configure-authentication-authorization.md)
- [Container types](../plan/container-types-containers.md)
- [Billing](../admin/setup-billing-microsoft-365-admin-center.md)
- [Admin overview](../admin/admin-overview.md)
- [Microsoft Graph API reference links](graph-api-links.md)

## Related resources

- [Configure authentication and authorization](../build/configure-authentication-authorization.md)
- [Plan authentication and permissions](../plan/authentication-permissions.md)
