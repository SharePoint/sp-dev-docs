---
title: SharePoint Embedded Authentication and Authorization
description: This article describes the authentication and authorization model for SharePoint Embedded applications.
ms.date: 11/28/2023
ms.localizationpriority: high
---

# SharePoint Embedded Authentication and Authorization

To use SharePoint Embedded (SPE), your application needs to use Microsoft Graph. Learn more about [Microsoft Graph authentication and authorization](https://learn.microsoft.com/en-us/graph/auth/auth-concepts?view=graph-rest-1.0).

## Definitions

These are important definitions to take into account to understand SPE authentication and authorization.

SharePoint Embedded application
: A Microsoft Entra ID application registration. As an owner or guest application to a container type, it will have access to containers of that container type.  

Container type
: A [container type](containertypes.md) is a SharePoint Embedded resource that defines the relationship, access privileges, and billing accountability between a SharePoint Embedded application and a set of containers. Also, the container type defines behaviors on the set of containers.

Owning Tenant
: The Microsoft Entra ID tenant where a container type is created. This is often also the tenant where your SharePoint Embedded application is registered.

Consuming Tenant
: The Microsoft Entra ID tenant where a container type is used. Only a consuming tenant may have containers of such container type. A same Microsoft Entra ID tenant may be both owning and consuming tenant of a given container type.

Container
: A container is the basic storage unit in SharePoint Embedded. Also, a container defines a security and compliance boundary.

## Pre-Requisites

* A Microsoft Entra ID application registration. See [register an application](https://learn.microsoft.com/en-us/graph/auth-register-app-v2?view=graph-rest-1.0).
* Your Microsoft Entra ID tenant has a Microsoft 365 subscription

## Authorization

SPE operations are exposed via Microsoft Graph. SPE supports [access on behalf of a user](https://learn.microsoft.com/en-us/graph/auth-v2-user?view=graph-rest-1.0&tabs=http) and also [access without a user](https://learn.microsoft.com/en-us/graph/auth-v2-service?view=graph-rest-1.0&tabs=http).

> [!IMPORTANT] 
> Microsoft Graph permissions granted to your SPE application allows it to call SPE endpoints. However, your application must be granted [permissions to a container type](#container-type-application-permissions) before it gets access to containers of that type.

### Access on behalf of a user

SPE operations [on behalf of a user](https://learn.microsoft.com/en-us/graph/auth-v2-user?view=graph-rest-1.0&tabs=http) require SPE applications to receive consent for Microsoft Graph [`FileStorageContainer.Selected`](https://learn.microsoft.com/en-us/graph/permissions-reference#filestoragecontainerselected) delegated permission. This permission requires admin consent on the consuming tenant before any user from the tenant can consent to it.

In addition to your SPE application receiving consent for `FileStorageContainer.Selected` on a consuming tenant, the user that it is acting on behalf of will be required to have [container permissions](#container-permissions). The effective permissions that the SPE application will have are the intersection of the SPE application permissions and the user permissions when acting on behalf of a user.

> [!IMPORTANT] 
> Using SPE on behalf of a user is the recommended approach. This type of access enhances the security of your application. It also improves auditability of actions performed by your SPE application.

### Access without a user

SPE operations [without a user](https://learn.microsoft.com/en-us/graph/auth-v2-service?view=graph-rest-1.0&tabs=http) require SPE applications to receive consent for Microsoft Graph [`FileStorageContainer.Selected`](https://learn.microsoft.com/en-us/graph/permissions-reference#filestoragecontainerselected) application permission. This permission requires admin consent on the consuming tenant.

> [!NOTE] 
> An administrator on the consuming tenant must consent to your SPE application's request for permissions. Learn more [here](https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/grant-admin-consent?pivots=portal).

### Exceptional access patterns

Currently, there are two types of operations that are not accessible via Microsoft Graph:
- [Container type management](containertypes.md) on owning tenants
- [Container type registration](register-api-documentation.md) on consuming tenants

These are the `Office 365 SharePoint Online` permissions that your application needs to perform those types of operations.

| Scope name | Scope Id | Type | Operation |
|:---:|:---:|:---:|:---:|
| Sites.FullControl.All | 678536fe-1083-478a-9c59-b99265e6b0d3 | Application | Enables SPE container type management on an owning tenant. |
| Container.Selected | 19766c1b-905b-43af-8756-06526ab42875 | Application | Enables SPE container type registration on a consuming tenant. |

> [!NOTE] 
> Container type management on owning tenants and registration on consuming tenants will become Microsoft Graph operations soon and this step will no longer be needed. Stay tuned.

### Container type application permissions

SPE applications need to be granted container type application permissions by the owner SPE application before they can access containers of the given container type. Container type application permissions are granted to SPE applications via [container type registration](/register-api-docuemntation.md).

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
> The combination of Microsoft Graph permissions and container type application permissions encompass the client authorization for SPE applications.

### Container permissions

Any user accessing a container must be a member of the container. Membership to a container grants users container permissions. These permissions will define the access level that users will have on a given container. Container permissions only apply to access on behalf of a user and not for access without a user. An SPE application accessing container without a user will get the full access defined in its [container type application permissions](#container-type-application-permissions) instead.

> [!IMPORTANT]
> The calling user creating a new container via delegated calls is automatically assigned the Owner role.

|  Permission | Description |
| --- | --- |
| Reader  | This role allows the user to read the properties and the contents of the container.                                                                                         |
| Writer  | This role has all permissions a Reader has, plus the permission to create, update, and delete content inside the container, and to update applicable  container properties. |
| Manager | This role has all permissions a Writer has, plus the permission to manage membership of the container.                                                                      |
| Owner   | This role has all permissions a Manager has, plus the permission to delete containers.     

## Let's recap

Here's key learnings:
1. SPE applications interact with SPE via Microsoft Graph
2. SPE applications need container type application permissions to access containers of that container type
3. When using access on behalf of a user, SPE applications can only access container that the user is a member of
4. When using access without a user, SPE applications can access containers enabled by the container type application permissions they have been granted
5. SPE applications use access on behalf of users whenever possible to enhance security and auditability

## What's next

Here's what you need to do next:
1. Configure your SPE application manifest to request the required permissions:
   - Microsoft Graph delegated `FileStorageContainer.Selected` to access containers on consuming tenants
   - Office 365 SharePoint Online application `Sites.FullControl.All` to manage container types on the owning tenant
   - Office 365 SharePoint Online application `Container.Selected` to register a container on consuming tenants
2. Grant admin consent to your SPE application on both owning and consuming tenants (which can be the same tenant).
3. [Create a new container type](containertypes.md) on the owning tenant.
4. [Register a container type](register-api-docuemntation.md) on the consuming tenant.
5. [Create a container](https://learn.microsoft.com/en-us/graph/api/filestoragecontainer-post?view=graph-rest-beta)

