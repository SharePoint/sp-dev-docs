---
title: SharePoint Embedded Authentication and Authorization
description: This article describes the authentication and authorization model for SharePoint Embedded applications.
ms.date: 05/21/2024
ms.localizationpriority: high
---

# SharePoint Embedded authentication and authorization

To use SharePoint Embedded, your application needs to use Microsoft Graph. Learn more about [Microsoft Graph authentication and authorization](https://learn.microsoft.com/graph/auth/auth-concepts?view=graph-rest-1.0). Learn more about the [SharePoint Embedded architecture](./app-architecture.md).

## Overview

Here are some key principles with SharePoint Embedded authentication and authorization:
- Applications interact with SharePoint Embedded via Microsoft Graph.
- Applications need container type application permissions to access containers of that container type.
- When using access on behalf of a user,  applications can only access containers that the user is a member of.
- When using access without a user,  applications can access containers enabled by the container type application permissions they have been granted.
- Applications use access on behalf of users whenever possible to enhance security and auditability


## Pre-Requisites

* A Microsoft Entra ID application registration. See [register an application](https://learn.microsoft.com/graph/auth-register-app-v2?view=graph-rest-1.0).
* Your Microsoft Entra ID tenant has a Microsoft 365 subscription

## Authorization

SharePoint Embedded operations are exposed via Microsoft Graph. SharePoint Embedded supports [access on behalf of a user](https://learn.microsoft.com/graph/auth-v2-user?view=graph-rest-1.0&tabs=http) and also [access without a user](https://learn.microsoft.com/graph/auth-v2-service?view=graph-rest-1.0&tabs=http).

> [!IMPORTANT] 
> Microsoft Graph permissions granted to your application allows it to call SharePoint Embedded endpoints. However, your application must be granted [permissions to a container type](#container-type-application-permissions) before it gets access to containers of that type.

### Access on behalf of a user

SharePoint Embedded operations [on behalf of a user](https://learn.microsoft.com/graph/auth-v2-user?view=graph-rest-1.0&tabs=http) require applications to receive consent for Microsoft Graph [`FileStorageContainer.Selected`](https://learn.microsoft.com/graph/permissions-reference#filestoragecontainerselected) delegated permission. This permission requires admin consent on the consuming tenant before any user from the tenant can consent to it.

In addition to your application receiving consent for `FileStorageContainer.Selected` on a consuming tenant, the user that it's acting on behalf of is required to have [container permissions](#container-permissions). The effective permissions that the application has are the intersection of the application permissions and the user permissions when acting on behalf of a user.

> [!IMPORTANT] 
> Using SharePoint Embedded on behalf of a user is the recommended approach. This type of access enhances the security of your application. It also improves auditability of actions performed by your application.

### Access without a user

SharePoint Embedded operations [without a user](https://learn.microsoft.com/graph/auth-v2-service?view=graph-rest-1.0&tabs=http) require applications to receive consent for Microsoft Graph [`FileStorageContainer.Selected`](https://learn.microsoft.com/graph/permissions-reference#filestoragecontainerselected) application permission. This permission requires admin consent on the consuming tenant.

> [!NOTE] 
> An administrator on the consuming tenant must consent to your application's request for permissions. Learn more [here](https://learn.microsoft.com/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal).

### Exceptional access patterns

Currently, there are two types of operations that aren't accessible via Microsoft Graph:
- [Container type management](containertypes.md) on owning tenants
- [Container type registration](register-api-documentation.md) on consuming tenants

These are the `Office 365 SharePoint Online` permissions that your application needs to perform those types of operations.

| Scope name | Scope ID | Type | Operation |
|:---:|:---:|:---:|:---:|
| Sites.FullControl.All | 678536fe-1083-478a-9c59-b99265e6b0d3 | Application | In the context of SharePoint Embedded, enables container type management on an owning tenant. |
| Container.Selected | 19766c1b-905b-43af-8756-06526ab42875 | Application | In the context of SharePoint Embedded, enables container type registration on a consuming tenant. |

> [!NOTE] 
> Container type management on owning tenants and registration on consuming tenants will become Microsoft Graph operations soon and this step will no longer be needed. Stay tuned.

### Container type application permissions

SharePoint Embedded applications need to be granted container type application permissions by the owner application before they can access containers of the given container type. Container type application permissions are granted to applications via [container type registration](/register-api-docuemntation.md).

|      Permission      |                                                    Description                                                     |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ |
| None                 | Has no permissions to any containers or content of this container type.                                            |
| ReadContent          | Can read content of containers of this container type.                                                             |
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
| ManagePermissions    | Can add, remove (including self) or update members in the container roles for containers of this container type.   |
| Full                 | Has all permissions for containers of this container type.                                                         |

> [!NOTE]
> The combination of Microsoft Graph permissions and container type application permissions encompass the client authorization for applications.

### Container permissions

Any user accessing a container must be a member of the container. Membership to a container grants users container permissions. These permissions define the access level that users have on a given container. Container permissions only apply to access on behalf of a user and not for access without a user. An SharePoint Embedded application accessing container without a user gets the full access defined in its [container type application permissions](#container-type-application-permissions) instead.

> [!IMPORTANT]
> The calling user creating a new container via delegated calls is automatically assigned the Owner role.

|  Permission | Description |
| --- | --- |
| Reader  | This role allows the user to read the properties and the contents of the container.                                                                                         |
| Writer  | This role has all permissions a Reader has, plus the permission to create, update, and delete content inside the container, and to update applicable  container properties. |
| Manager | This role has all permissions a Writer has, plus the permission to manage membership of the container.                                                                      |
| Owner   | This role has all permissions a Manager has, plus the permission to delete containers.     

## What's next

Here are some actions you can take next:
1. Configure your SharePoint Embedded [application manifest](https://learn.microsoft.com/entra/identity-platform/reference-app-manifest#requiredresourceaccess-attribute) to request the required permissions:
   - Microsoft Graph (resourceAppId: `00000003-0000-0000-c000-000000000000`)
     - `FileStorageContainer.Selected` (type: `Scope`, ID: `085ca537-6565-41c2-aca7-db852babc212`) to access containers on consuming tenants
   - Office 365 SharePoint Online (resourceAppId: `00000003-0000-0ff1-ce00-000000000000`)
     - `Sites.FullControl.All` (type: `Role`, ID: `678536fe-1083-478a-9c59-b99265e6b0d3`) to manage container types on the owning tenant
     - `Container.Selected` (type: `Role`, ID: `19766c1b-905b-43af-8756-06526ab42875`) to register a container on consuming tenants
2. [Grant admin consent](https://learn.microsoft.com/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal) to your application on both owning and consuming tenants (which can be the same tenant).
3. [Create a new container type](containertypes.md) on the owning tenant.
4. [Register a container type](register-api-docuemntation.md) on the consuming tenant.
5. [Create a container](https://learn.microsoft.com/graph/api/filestoragecontainer-post?view=graph-rest-beta)

