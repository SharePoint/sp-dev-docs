---
title: SharePoint Embedded Authentication and Authorization
description: This article describes the authentication and authorization model for SharePoint Embedded applications.
ms.date: 01/20/2026
ms.localizationpriority: high
---

# SharePoint Embedded authentication and authorization

To use SharePoint Embedded, your application must utilize Microsoft Graph. Learn more about [Microsoft Graph authentication and authorization](/graph/auth/auth-concepts). Learn more about the [SharePoint Embedded architecture](./app-architecture.md).

## Overview

Here are some key principles of SharePoint Embedded authentication and authorization:

- Applications interact with SharePoint Embedded via Microsoft Graph.
- Applications need container type application permissions to access containers of that container type.
- Applications can only access containers that the user is a member of when using access on behalf of a user.
- Applications can access all containers enabled by their container type application permissions when using access without a user.
- Applications use access on behalf of users whenever possible to enhance security and accountability

## Pre-Requisites

- A Microsoft Entra ID application registration. See [register an application](/graph/auth-register-app-v2).
- Your Microsoft Entra ID tenant has a Microsoft 365 subscription

## Authorization

SharePoint Embedded operations are exposed via Microsoft Graph. SharePoint Embedded supports [access on behalf of a user](/graph/auth-v2-user) and also [access without a user](/graph/auth-v2-service).

> [!IMPORTANT]
> Microsoft Graph permissions granted to your application allow it to call SharePoint Embedded endpoints. However, your application must be granted [permission to a container type](#container-type-application-permissions) before it gets access to containers of that type.

### Access on behalf of a user

SharePoint Embedded operations [on behalf of a user](/graph/auth-v2-user) require applications to receive consent for Microsoft Graph [`FileStorageContainer.Selected`](/graph/permissions-reference#filestoragecontainerselected) delegated permission. This permission requires admin consent on the consuming tenant before any user from the tenant can consent to it.

In addition to your application receiving consent for `FileStorageContainer.Selected` on a consuming tenant, the user that it's acting on behalf of is required to have [container permissions](#container-permissions). The effective permissions that the application has are the intersection of the application permissions and the user permissions when acting on behalf of a user.

> [!IMPORTANT]
> Using SharePoint Embedded on behalf of a user is the recommended approach. This type of access enhances the security of your application. It also improves the auditability of actions performed by your application.

### Access without a user

SharePoint Embedded operations [without a user](/graph/auth-v2-service) require applications to receive consent for Microsoft Graph [`FileStorageContainer.Selected`](/graph/permissions-reference#filestoragecontainerselected) application permission. This permission requires admin consent on the consuming tenant.

> [!NOTE]
> An administrator on the consuming tenant must consent to your application's request for permissions. Learn more [here](/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal).

### Exceptional access patterns

Currently, there are two types of operations with exceptional access patterns:

- [Hidden permissions in Microsoft Graph](#hidden-microsoft-graph-permissions)
- [Operations not exposed via Microsoft Graph](#operations-not-exposed-via-microsoft-graph)
- [Operations involving searching SharePoint Embedded content](#operations-involving-searching-sharepoint-embedded-content)
- [Operations that require a user license](#operations-that-require-a-user-license)

> [!IMPORTANT]
> Consider the repercussions of these exceptional access patterns on how your application and other applications can access SharePoint Embedded content in your container type.

### Hidden Microsoft Graph permissions

The following operations require permissions that are currently hidden in Microsoft Graph:

- [Container type management](../getting-started/containertypes.md) on owning tenants.
- [Container type registration](../getting-started/register-api-documentation.md) on consuming tenants.

The Microsoft Graph permissions are rolling out to all tenants in the near future and will be visible once the rollout completes.

#### Granting admin consent for hidden permissions

[Granting admin consent](/entra/identity-platform/v2-admin-consent) for applications requesting hidden permission MUST be done by using the [admin consent URL](/entra/identity-platform/v2-admin-consent#request-the-permissions-from-a-directory-admin). Provide the consent URL to the Microsoft Entra directory administrator and ensure they [confirm a successful response](/entra/identity-platform/v2-admin-consent#successful-response). The consent URL may look like this:

```http
https://login.microsoftonline.com/{tenant}/v2.0/adminconsent?client_id={client_id}&scope=https://graph.microsoft.com/.default
```

> [!IMPORTANT]
> Do not use the App registrations pane in the Azure portal to grant admin consent for applications that request hidden permissions. The App registrations pane will fail to validate the requested hidden permissions and will remove them from the manifest.

#### Operations not exposed via Microsoft Graph

There is one scenario that isn't accessible via Microsoft Graph today:

- [SharePoint Embedded agent](./declarative-agent/spe-da.md) exposed via SharePoint REST API v2 permissions.

To use the [SharePoint Embedded agent](./declarative-agent/spe-da.md) experience (in Preview stage) in your application, you need the `Container.Selected` permission on the `Office 365 SharePoint Online` resource:

|      Scope name       |               Scope ID               |    Type     |                                             Operation                                             |
| :-------------------: | :----------------------------------: | :---------: | :-----------------------------------------------------------------------------------------------: |
| Container.Selected   | 19766c1b-905b-43af-8756-06526ab42875 | Application | In the context of SharePoint Embedded, enables container type registration on a consuming tenant. |


#### Operations involving searching SharePoint Embedded content

This section refers only to the search scenarios in [Search Content](./content-experiences/search-content.md), and not the enumeration scenarios.

To use [Microsoft Search](/microsoftsearch/overview-microsoft-search) on SharePoint Embedded content, you must request the Delegated [`Files.Read.All`](/graph/permissions-reference#filesreadall) Microsoft Graph permission on top of `FileStorageContainer.Selected`, normally used for SharePoint Embedded access. During the Preview stage of this feature, the `Files.Read.All` application permission grants applications access to search capabilities on all SharePoint Embedded content.

> [!NOTE]
> Microsoft Search support for SharePoint Embedded content is in Preview and is subject to change. The access requirements for Microsoft Search on SharePoint Embedded content will align with the SharePoint Embedded authorization model in the future. Stay tuned.

#### Operations that require a user license

SharePoint Embedded is designed to work without the need for end users to have any kind of Microsoft 365 product licenses assigned to them. However, there are certain operations     that don't abide by this principle yet.

##### List containers

The [List containers](/graph/api/filestorage-list-containers?tabs=http) operation returns a `403 Forbidden` response code if called on behalf of a user who doesn't have a OneDrive. There are plans to remove this dependency soon. This dependency doesn't apply to the List containers operation when called without a user context (app-only mode).

##### Mention users in Office documents

The common [Office experience](./content-experiences/office-experience.md) includes reviewing documents and adding comments to those documents. For users to show up in the @mentions people picker, they need to have a Microsoft 365 license assigned to them.

### Container type application permissions

SharePoint Embedded applications need to be granted container type application permissions by the owner application before they can access containers of the given container type. Container type application permissions are granted to applications via [container type registration](../getting-started/register-api-documentation.md).

|      Permission      |                                                    Description                                                     |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ |
| None                 | Has no permissions to any containers or content of this container type.                                            |
| ReadContent          | Can read the content of containers of this container type.                                                         |
| WriteContent         | Can write content to containers for this container type. This can't be granted without the ReadContent permission. |
| Create               | Can create containers of this container type.                                                                      |
| Delete               | Can delete containers of this container type.                                                                      |
| Read                 | Can read the metadata of containers of this container type.                                                        |
| Write                | Can update the metadata of containers of this container type.                                                      |
| EnumeratePermissions | Can enumerate the members of a container and their roles for containers of this container type.                    |
| AddPermissions       | Can add members to the container for containers of this container type.                                            |
| UpdatePermissions    | Can update (change roles of) existing memberships in the container for containers of this container type.          |
| DeletePermissions    | Can delete other members (but not self) from the container for containers of this container type.                  |
| DeleteOwnPermissions | Can remove own membership from the container for containers of this container type.                                |
| ManagePermissions    | Can add, remove (including self), or update members in the container roles for containers of this container type.  |
| ManageContent        | Can manage the content of the container                                                                            |
| Full                 | Has all permissions for containers of this container type.                                                         |

> [!NOTE]
> The combination of Microsoft Graph permissions and container type application permissions encompasses the client authorization for applications.

### Container permissions

Any user accessing a container must be a member of the container. Membership to a container [grants users container permissions](/graph/api/filestoragecontainer-post-permissions). These permissions define the access level that users have on a given container. Container permissions only apply to access on behalf of a user and not to access without a user. A SharePoint Embedded application accessing containers without a user gets the full access defined in its [container type application permissions](#container-type-application-permissions) instead.

> [!IMPORTANT]
> The calling user creating a new container via delegated calls is automatically assigned the Owner role.

| Permission |                                                                                 Description                                                                                 |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reader     | This role allows the user to read the properties and the contents of the container.                                                                                         |
| Writer     | This role has all the permissions a Reader has, plus the permission to create, update, and delete content inside the container, and to update applicable  container properties. |
| Manager    | This role has all the permissions a Writer has, plus the permission to manage membership of the container.                                                                      |
| Owner      | This role has all the permissions a Manager has, plus the permission to delete containers.                                                                                      |

## What's next

Here are some actions you can take next:

1. Configure your SharePoint Embedded [application manifest](/entra/identity-platform/reference-app-manifest#requiredresourceaccess-attribute) (you can use [Microsoft Entra PowerShell](/powershell/entra-powershell/manage-apps#assign-permissions-to-an-app) or the [Azure CLI](/cli/azure/ad/app/permission#az-ad-app-permission-add)) to request the required permissions on your _owning_ tenant:
    - Microsoft Graph (resourceAppId: `00000003-0000-0000-c000-000000000000`)
      - Add: `FileStorageContainerType.Manage.All` (type: `Role`, ID: `8e6ec84c-5fcd-4cc7-ac8a-2296efc0ed9b`) to create container types on the _owning_ tenant
1. [Grant admin consent](#granting-admin-consent-for-hidden-permissions) to your application on your _owning_ tenant
1. [Create a new container type](../getting-started/containertypes.md) on the _owning_ tenant.
1. Reconfigure your SharePoint Embedded [application manifest](/entra/identity-platform/reference-app-manifest#requiredresourceaccess-attribute) to request only the required permissions on consuming tenants:
    - Microsoft Graph (resourceAppId: `00000003-0000-0000-c000-000000000000`)
      - Remove: `FileStorageContainerType.Manage.All` (type: `Role`, ID: `8e6ec84c-5fcd-4cc7-ac8a-2296efc0ed9b`) as this is only needed to create the container type on the _owning_ tenant
        > [!NOTE]
        > After creating the container type on the _owning_ tenant, you should remove the `FileStorageContainerType.Manage.All` permission from your application's manifest.
        > Your application DOES NOT need this on _consuming_ tenants, only on the _owning_ tenant to create the container type. Failure to remove this permission from the application's manifest will lead to your customers being concerned about the excessive permissions requested by your application.
      - Add: `FileStorageContainerTypeReg.Selected` (type: `Role`, ID: `2dcc6599-bd30-442b-8f11-90f88ad441dc`) to register the container type on _consuming_ tenants
      - Add: `FileStorageContainer.Selected` (type: `Scope`, ID: `085ca537-6565-41c2-aca7-db852babc212`) to access containers on _consuming_ tenants on behalf of users
      - Optionally add: `FileStorageContainer.Selected` (type: `Role`, ID: `40dc41bc-0f7e-42ff-89bd-d9516947e474`) to access container on _consuming_ tenants without a user
    - Office 365 SharePoint Online (resourceAppId: `00000003-0000-0ff1-ce00-000000000000`)
      - `Container.Selected` (type: `Role`, ID: `19766c1b-905b-43af-8756-06526ab42875`) to use SharePoint Embedded Agent
1. [Grant admin consent](#granting-admin-consent-for-hidden-permissions) to your application on a _consuming_ tenant (which can be the same as the owning tenant).
1. [Register the container type](../getting-started/register-api-documentation.md) on the _consuming_ tenant.
1. [Create a container](/graph/api/filestoragecontainer-post) on the _consuming_ tenant
