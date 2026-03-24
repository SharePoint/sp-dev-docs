---
title: SharePoint Embedded Authentication and Authorization
description: This article describes the authentication and authorization model for SharePoint Embedded applications.
ms.date: 03/20/2026
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

### Application permissions

SharePoint Embedded applications need to request the following Microsoft Graph permissions in their application manifest to work with SharePoint Embedded:

- [FileStorageContainerType.Manage.All](/graph/permissions-reference#filestoragecontainermanageall) to allow an application to create and manage container types on the owning tenant. This permission is only needed on the owning tenant where the container type is created.
- [FileStorageContainerTypeReg.Selected](/graph/permissions-reference#filestoragecontainertyperegselected) to allow an application to register the container type on consuming tenants.
- [FileStorageContainer.Selected](/graph/permissions-reference#filestoragecontainerselected) to allow an application to access containers of the given container type on consuming tenants.

#### Access on behalf of a user

SharePoint Embedded operations [on behalf of a user](/graph/auth-v2-user) require applications to receive consent for Microsoft Graph [`FileStorageContainer.Selected`](/graph/permissions-reference#filestoragecontainerselected) delegated permission.

In addition to your application receiving consent for `FileStorageContainer.Selected` on a consuming tenant, the user that it's acting on behalf of is required to have [user permissions](#user-permissions). The effective permissions that the application has are the intersection of the application permissions and the user permissions when acting on behalf of a user.

> [!IMPORTANT]
> Using SharePoint Embedded on behalf of a user is the recommended approach. This type of access enhances the security of your application. It also improves the auditability of actions performed by your application.

#### Access without a user

SharePoint Embedded operations [without a user](/graph/auth-v2-service) require applications to receive consent for Microsoft Graph [`FileStorageContainer.Selected`](/graph/permissions-reference#filestoragecontainerselected) application permission. This permission requires admin consent on the consuming tenant.

> [!NOTE]
> An administrator on the consuming tenant must consent to your application's request for permissions. To learn more, see [Grant admin consent](/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal).

### Container type application permissions

SharePoint Embedded applications need to be granted container type application permissions by the owning application before they can access containers of the given container type. Container type application permissions are granted to applications via [container type registration](../getting-started/register-api-documentation.md) in a consuming tenant.

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
| DeleteOwnPermission | Can remove own membership from the container for containers of this container type.                                |
| ManagePermissions    | Can add, remove (including self), or update members in the container roles for containers of this container type.  |
| ManageContent        | Can manage the content of the container (WriteContent plus discard checkout permission in app-only mode).          |
| Full                 | Has all permissions for containers of this container type.                                                         |

> [!NOTE]
> The combination of Microsoft Graph permissions and container type application permissions encompasses the client authorization for applications.

### User permissions

Users are granted different access levels to SharePoint Embedded based on the scenario:

- [Accessing content in containers](#accessing-content-in-containers)
- [Managing SharePoint Embedded applications installed in the consuming tenant](#managing-sharepoint-embedded-applications-installed-in-the-consuming-tenant)
- [Managing SharePoint Embedded applications created in the owning tenant](#managing-sharepoint-embedded-applications-created-in-the-owning-tenant)

#### Accessing content in containers

There are two ways in which users can gain access to content in containers:

- [Container permissions](#container-permissions)
- [Access to specific items in a container](#access-to-specific-items-in-a-container)

##### Container permissions

Users can be assigned container permissions in two ways:

- Direct membership. A user is directly added as a member of a container with specific permissions.
- Transitive membership. A user is a member of an [M365 group](/microsoft-365/admin/create-groups/office-365-groups) that is itself a member of a container with specific permissions.

Membership to a container [grants users container permissions](/graph/api/filestoragecontainer-post-permissions). These permissions define the access level that users have on a given container. Container permissions only apply to access on behalf of a user and not to access without a user. A SharePoint Embedded application accessing containers without a user gets the full access defined in its [container type application permissions](#container-type-application-permissions) instead.

> [!IMPORTANT]
> The calling user creating a new container via delegated calls is automatically assigned the Owner role.

| Permission | Description |
| --- | ---- |
| Reader | This role allows the user to read the properties and the contents of the container. |
| Writer | This role has all the permissions a Reader has, plus the permission to create, update, and delete content inside the container, and to update applicable  container properties. |
| Manager | This role has all the permissions a Writer has, plus the permission to manage membership of the container. |
| Owner | This role has all the permissions a Manager has, plus the permission to delete containers and restore deleted containers. |

##### Access to specific items in a container

Specific items in a container can be shared with users via the [driveItem invite](/graph/api/driveitem-invite) or the [permission create](/graph/api/driveitem-post-permissions) endpoints. Sharing grants users access to the specific items, but it doesn't grant them access to the container itself or any other item in the container. For information on the access levels supported, see [permission roles](/graph/api/resources/permission#roles-property-values).

> [!NOTE]
> For more information about sharing, see [Sharing and permissions in SharePoint Embedded](./sharing-and-perm.md).

#### Managing SharePoint Embedded applications installed in the consuming tenant

[SharePoint Embedded Administrators](/entra/identity/role-based-access-control/permissions-reference#sharepoint-embedded-administrator) can manage all SharePoint Embedded applications installed in the **consuming** tenant. To learn more about managing installed applications in the consuming tenant, see [Manage SharePoint Embedded applications installed in the consuming tenant](../administration/consuming-tenant-admin/cta.md).

> [!NOTE]
> [Global Administrators](/entra/identity/role-based-access-control/permissions-reference#global-administrator) have all the permissions that SharePoint Embedded Administrators have and more, so they can also manage SharePoint Embedded applications installed in the consuming tenant. However, you should assign the least privileged role necessary to perform administrative tasks, so using the SharePoint Embedded Administrator role is recommended for managing SharePoint Embedded applications.

#### Managing SharePoint Embedded applications created in the owning tenant

[SharePoint Embedded Administrators](/entra/identity/role-based-access-control/permissions-reference#sharepoint-embedded-administrator) can manage all SharePoint Embedded applications created in the **owning** tenant. Additionally, any Microsoft Entra user that isn't an external identity can be assigned as an owner of a [container type](/graph/api/resources/filestoragecontainertype). Container type owners can manage that specific container type. To learn more about managing applications created in the owning tenant, see [SharePoint Embedded developer administrator](../administration/developer-admin/dev-admin.md).

### Exceptional access patterns

Currently, there are two types of operations with exceptional access patterns:

- [Operations involving searching SharePoint Embedded content](#operations-involving-searching-sharepoint-embedded-content)
- [Operations that require a user license](#operations-that-require-a-user-license)

> [!IMPORTANT]
> Consider the repercussions of these exceptional access patterns on how your application and other applications can access SharePoint Embedded content in your container type.

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

## What's next

Here are some actions you can take next:

1. Configure your SharePoint Embedded [application manifest](/entra/identity-platform/reference-app-manifest#requiredresourceaccess-attribute) (you can use [Microsoft Entra PowerShell](/powershell/entra-powershell/manage-apps#assign-permissions-to-an-app) or the [Azure CLI](/cli/azure/ad/app/permission#az-ad-app-permission-add)) to request the required permissions on your _owning_ tenant:
    - Microsoft Graph (resourceAppId: `00000003-0000-0000-c000-000000000000`)
      - Add: `FileStorageContainerType.Manage.All` (type: `Role`, ID: `8e6ec84c-5fcd-4cc7-ac8a-2296efc0ed9b`) to create container types on the _owning_ tenant
1. [Grant admin consent](/entra/identity-platform/v2-admin-consent) to your application on your _owning_ tenant
1. [Create a new container type](../getting-started/containertypes.md) on the _owning_ tenant.
1. Reconfigure your SharePoint Embedded [application manifest](/entra/identity-platform/reference-app-manifest#requiredresourceaccess-attribute) to request only the required permissions on consuming tenants:
    - Microsoft Graph (resourceAppId: `00000003-0000-0000-c000-000000000000`)
      - Remove: `FileStorageContainerType.Manage.All` (type: `Role`, ID: `8e6ec84c-5fcd-4cc7-ac8a-2296efc0ed9b`) as this is only needed to create the container type on the _owning_ tenant
        > [!NOTE]
        > After creating the container type on the _owning_ tenant, you should remove the `FileStorageContainerType.Manage.All` permission from your application's manifest.
        > Your application DOES NOT need this on _consuming_ tenants, only on the _owning_ tenant to create the container type. Failure to remove this permission from the application's manifest will lead to your customers being concerned about the excessive permissions requested by your application.
      - Add: `FileStorageContainerTypeReg.Selected` (type: `Role`, ID: `2dcc6599-bd30-442b-8f11-90f88ad441dc`) to register the container type on _consuming_ tenants
      - Add: `FileStorageContainer.Selected` (type: `Scope`, ID: `085ca537-6565-41c2-aca7-db852babc212`) to access containers on _consuming_ tenants on behalf of users
      - Optionally add: `FileStorageContainer.Selected` (type: `Role`, ID: `40dc41bc-0f7e-42ff-89bd-d9516947e474`) to access the container on _consuming_ tenants without a user
1. [Grant admin consent](/entra/identity-platform/v2-admin-consent) to your application on a _consuming_ tenant (which can be the same as the owning tenant).
1. [Register the container type](../getting-started/register-api-documentation.md) on the _consuming_ tenant.
1. [Create a container](/graph/api/filestoragecontainer-post) on the _consuming_ tenant
