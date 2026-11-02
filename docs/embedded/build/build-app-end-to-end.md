---
title: Build a SharePoint Embedded app end to end
description: Follow the complete sequence to create, register, and use a SharePoint Embedded app in a developer or consuming tenant.
ms.date: 10/29/2026
ms.reviewer: shsaravanan
ms.localizationpriority: high
ai-usage: ai-assisted
---

# Build a SharePoint Embedded app end to end

**Applies to:** Developer

<!-- agent:
task_type: how-to
audience: developer
outcome: Complete the required SharePoint Embedded setup sequence from prerequisites through the first file operation.
next: quickstart-vscode.md
-->

Use this article as the canonical build sequence for a SharePoint Embedded app. Each step links to the detailed procedure for that task.

Follow this order:

1. Prepare the tenants and app registration.
1. Create a container type.
1. Configure standard billing when the app owner pays.
1. Register the container type in each consuming tenant.
1. Activate pay-as-you-go billing in the consuming tenant when the customer pays.
1. Create a container from a confidential-client backend.
1. Work with files through Microsoft Graph.

> [!IMPORTANT]
> Register the container type in the consuming tenant before you create or access containers. Microsoft Graph consent alone doesn't grant access to containers.

## Choose a build path

| Goal | Recommended path |
| --- | --- |
| Evaluate SharePoint Embedded for 30 days | Create a trial container type in your developer tenant. |
| Build a production app where the developer pays | Create a standard container type and attach an Azure billing profile. |
| Build a multitenant app where each customer pays | Create a `directToCustomer` container type and have each consuming tenant activate pay-as-you-go billing. |
| Start with guided tooling | Use the [Visual Studio Code quickstart](quickstart-vscode.md). |
| Build with a coding agent | Use the [SharePoint Embedded Model Context Protocol (MCP) server](sharepoint-embedded-mcp-server.md). |

A trial is single-tenant and can't convert to production. A tenant can have one trial container type with up to five containers, including containers in the recycle bin. Each container has 1 GB of storage, and the trial expires after 30 days.

## 1. Prepare the prerequisites

Before you build, prepare:

- A Microsoft 365 tenant with SharePoint available.
- A Microsoft 365 administrator who can complete consent and tenant setup. Use a Global Administrator or SharePoint Embedded Administrator where the linked procedure requires that role.
- Microsoft Entra ID member or guest accounts for every user who authenticates to the app.
- A Microsoft Entra ID application registration that owns the container type.
- For standard production billing, an Azure subscription and resource group. The person who attaches billing needs Owner or Contributor access.
- Visual Studio Code, Node.js, and npm if you use the quickstart sample.

For the tenant model, see [Understand app and tenant architecture](../plan/app-tenant-architecture.md).

## 2. Create the owning Microsoft Entra application

Create or select the Microsoft Entra ID application that owns the SharePoint Embedded container type. One owning application can own exactly one container type.

Configure the Microsoft Graph permissions needed for the operations your app performs:

| Permission | Use |
| --- | --- |
| `FileStorageContainerType.Manage.All` | Create and manage the container type in the owning tenant. |
| `FileStorageContainerTypeReg.Selected` | Register the container type and its application permissions in a consuming tenant. |
| `FileStorageContainer.Selected` | Access containers and files of the registered container type. |

Consent requirements depend on the permission type and access mode. Application permissions require administrator consent. Delegated `FileStorageContainer.Selected` doesn't require administrator consent, but the signed-in user still needs a container role.

For the complete permission model, see [Plan authentication and permissions](../plan/authentication-permissions.md) and [Configure authentication and authorization](configure-authentication-authorization.md).

## 3. Create the container type

Create a container type in the owning tenant with:

- A durable display name.
- The owning application ID.
- A billing classification: `trial`, `standard`, or `directToCustomer`.
- Optional behavior settings for sharing, search, discoverability, Office integration, versioning, redirects, and storage.

Use Microsoft Graph:

```http
POST https://graph.microsoft.com/v1.0/storage/fileStorage/containerTypes
```

Record the returned container type ID. Every container created from this type carries that ID, which controls access, settings, and billing.

For the request and configuration choices, see [Create and configure a container type](create-container-type.md).

## 4. Configure standard billing

Skip this step for a trial.

- For `standard`, attach an Azure subscription and resource group in the developer tenant.
- For `directToCustomer`, continue to registration. The consuming tenant activates pay-as-you-go billing after registration.

Billing choices are permanent for a container type. To change from trial to production or from standard to pass-through billing, create a new container type.

For the decision and setup paths, see [Choose a billing model](../plan/choose-billing-model.md).

## 5. Register the container type in the consuming tenant

Repeat this step for every tenant that uses the app.

1. Create the owning application's service principal in the consuming tenant.
1. Have the consuming tenant administrator grant the required Microsoft Graph consent.
1. Use the owning application to register the container type with the Microsoft Graph `containerTypeRegistrations` API.
1. Grant the owning app and any guest apps only the container type application permissions they need.
1. Validate the registration before creating containers. Registration updates and permission grants can take up to one hour to propagate, so retry with bounded backoff before treating a successful registration request as invalid.

For a trial, the owning tenant and consuming tenant are the same tenant, but registration is still part of the setup flow.

For `directToCustomer`, the consuming tenant activates pay-as-you-go billing after registration and before container creation.

Registration creates the middle layer of the SharePoint Embedded permission model:

1. Microsoft Graph permission lets the app call the API.
1. Container type application permission lets the app work with containers of the registered type.
1. A container role controls what a signed-in user can do in one container.

For the API procedure, see [Register application permissions](register-application-permissions.md).

## 6. Choose delegated or app-only access

Use delegated access for user-driven operations when possible. Effective access is the intersection of the app's container type permissions and the user's container role.

Use app-only access for background operations that don't act for a user. App-only access reaches the containers allowed by the app's container type permissions, so apply least privilege.

Container roles are:

- `Reader`
- `Writer`
- `Manager`
- `Owner`

When a delegated user creates a container, SharePoint Embedded automatically assigns that user the `Owner` role.

## 7. Create the first container

After registration and billing are valid, create a File Storage Container through Microsoft Graph. Container creation requires a token acquired by a confidential client, including when the request uses delegated permissions. Route creation through a backend or another component that can securely hold an application credential; don't call this API directly from a single-page, mobile, or desktop public client. Treat the returned container ID as its Graph drive ID.

```http
POST https://graph.microsoft.com/v1.0/storage/fileStorage/containers
```

A container is an isolated content and security boundary. Choose a container granularity that matches a business object, such as one project, claim, case, customer workspace, or data room.

For the complete procedure, see [Create and manage containers](create-manage-containers.md).

## 8. Perform the first file operation

Address container content through Microsoft Graph DriveItem APIs under `/drives/{containerId}/items`.

For a first smoke test:

1. Create a folder.
1. Upload a small file with a single `PUT` request.
1. Read the returned DriveItem.
1. Download the file with `GET /drives/{containerId}/items/{itemId}/content`.
1. Delete and restore the test file.

Use an upload session for files larger than 250 MB. Download responses can redirect to a short-lived preauthenticated URL. Don't store or cache that URL; request a new URL for a later download.

For file and folder operations, see [Upload, download, and manage files](manage-files.md).

## 9. Add the app experiences you need

| Task | Built-in capability and next article |
| --- | --- |
| Open and coauthor Office files | Office for the web and desktop support coauthoring, AutoSave, and automatic version history. See [Open Office files from your app](open-office-files.md). |
| Preview PDFs and other supported files | Generate an embeddable preview URL with the DriveItem preview API. See [Preview files in your app](preview-files.md). |
| Share one file without container-wide access | Add a DriveItem permission. See [Share files and manage permissions](share-files-manage-permissions.md). |
| Query known metadata values | Store values in `listItem/fields` and use supported OData filters. See [Store and query container metadata](container-metadata.md). |
| Recover deleted content | Restore files from the recycle bin and containers from the deleted container collection. The normal deleted-container recovery window is 93 days, unless an administrator permanently deletes the container or retention requirements affect final deletion. |

SharePoint Embedded supports any file type. Office-specific collaboration and version-history experiences apply to supported Word, Excel, and PowerPoint files.

## 10. Validate the production path

Before onboarding users or customers, verify:

- The owning app and container type have a one-to-one relationship.
- Each consuming tenant has the service principal, consent, and container type registration.
- Billing is valid for standard or pass-through production use.
- The app requests only the Microsoft Graph and container type permissions it needs.
- User-driven operations use delegated access where possible.
- Container roles and item-level sharing match your access model.
- Upload, download, Office launch, preview, delete, and restore flows handle errors and expired URLs.
- The consuming tenant can apply audit, retention, data loss prevention, eDiscovery, sensitivity-label, and Conditional Access policies.

For customer onboarding, continue to [Prepare your app for customer installation](../publish/prepare-customer-installation.md).

## Next steps

- Start with guided tooling: [Quickstart: Build your first app with VS Code](quickstart-vscode.md).
- Create the core resource manually: [Create and configure a container type](create-container-type.md).
- Review the access design: [Plan authentication and permissions](../plan/authentication-permissions.md).
