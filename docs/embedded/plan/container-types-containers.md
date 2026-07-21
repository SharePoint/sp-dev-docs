---
title: Understand container types and containers
description: Learn how SharePoint Embedded container types define app access and how containers store files in consuming tenants.
ms.date: 07/10/2026
ms.reviewer: shsaravanan
ms.author: mawin
ms.localizationpriority: high
ai-usage: ai-assisted
---

# Understand container types and containers

**Applies to:** Developer

<!-- agent:
task_type: concept
audience: developer
outcome: Distinguish container types from containers and plan how developers and admins use each object.
next: ../plan/authentication-permissions.md
-->

Use this article to understand the two core storage objects in SharePoint Embedded: container types and containers.

For the full creation and management reference, see [SharePoint Embedded container types](../build/create-container-type.md).

## Object model

SharePoint Embedded stores files and documents in containers, which are grouped by container type. You create a container type before you can create any containers for an application.

| Object | What it represents | Who usually manages it |
| --- | --- | --- |
| Container type | Relationship between an app and a set of containers, including access, behavior, and billing accountability. | Developer or container type owner. |
| Container | The storage and security boundary for files and folders. | Application through Microsoft Graph, and admins for governance operations. |

## Container type concept

A container type is a SharePoint Embedded resource. It defines:

- The owning application.
- The access privileges between applications and containers.
- The billing accountability model.
- Selected behaviors that apply to containers of that type.

Each container type is strongly coupled with one SharePoint Embedded application, called the owning application. SharePoint Embedded requires a 1:1 relationship between the owning application and the container type. The owning application developer is responsible for creating and managing the container type.

## Container type identity

The container type is represented on each container as an immutable property named `ContainerTypeID`. The property is used across the SharePoint Embedded ecosystem. It affects:

- Access authorization.
- Trial exploration.
- Billing.
- Configurable behavior.

> [!IMPORTANT]
> Plan the container type carefully. Some creation choices, such as trial versus production and standard versus pass-through billing, can't be converted after creation. To switch, you must delete and re-create the container type.

## Containers

A container is the basic storage unit in SharePoint Embedded, and it defines a security and compliance boundary. Applications create containers in consuming tenants by using Microsoft Graph.

Files, folders, metadata, versions, and recycle bin content are stored within containers and are subject to current SharePoint Embedded limits.

For limits, see [Understand limits and calling patterns](../plan/limits-calling-patterns.md).

## Ownership

Container type ownership and container residency are different. The developer tenant creates the container type. The consuming tenant uses the container type and hosts containers.

All container content created through the application is stored within the consuming tenant's Microsoft 365 tenant boundary.

For tenant architecture, see [Understand app and tenant architecture](../plan/app-tenant-architecture.md).

## Access authorization

A SharePoint Embedded application must be associated with a container type to access containers of that type. After association, the application has access to containers of that type according to application-container type permissions. The owning application has full access privilege by default to containers of the container type it's coupled with. Actual access also depends on whether the app uses delegated access or app-only access.

For permission planning, see [Plan authentication and permissions](../plan/authentication-permissions.md).

## Trial container types

Use a trial container type to explore SharePoint Embedded development without linking an Azure billing profile.

For trial container types:

- The developer tenant is the same as the consuming tenant.
- Each developer can have only one trial container type in their tenant at a time.
- The trial is valid for up to 30 days.
- Up to five containers of the container type can be created, including active containers and containers in the recycle bin.
- Each container has up to 1 GB of storage.
- The container type is restricted to the developer tenant.

A trial container type can't be converted to production.

To create a trial container type, developers can use the SharePoint Embedded Visual Studio Code extension or the Microsoft Graph container type API.

Container types are created with the Microsoft Graph `POST /v1.0/storage/fileStorage/containerTypes` endpoint, using the `trial` billing classification. This call requires the `FileStorageContainerType.Manage.All` delegated permission; app-only access isn't supported. The calling user must be a non-guest member of the developer tenant (no admin role required) and is automatically assigned as an owner of the new container type.

## Standard container types

A standard container type is used for non-trial scenarios.

By default, each tenant can have 25 container types at a time; one can be a free trial container type, and the rest are standard container types. You can request an increase through Microsoft support or your SharePoint Embedded onboarding contact.

Standard container types are billable and must use a billing model.

SharePoint Embedded supports:

- Standard billing (`standard` billing classification).
- Pass-through billing (`directToCustomer` billing classification).

For billing selection, see [Choose a billing model](../plan/choose-billing-model.md).

## Standard billing container type

With standard billing, consumption-based charges are billed to the tenant that owns or develops the application.

The developer tenant attaches a billing profile after creating the standard container type.

Create the container type with the Microsoft Graph `POST /v1.0/storage/fileStorage/containerTypes` endpoint using the `standard` billing classification, then attach an Azure billing profile:

```http
POST https://graph.microsoft.com/v1.0/storage/fileStorage/containerTypes
```

```json
{
  "name": "{ContainerTypeName}",
  "owningAppId": "{OwningApplicationId}",
  "billingClassification": "standard"
}
```

## Pass-through billing container type

With pass-through billing, charges are billed directly to the consuming tenant.

The developer creates the container type with the `directToCustomer` billing classification and doesn't attach a billing profile in the developer tenant.

```json
{
  "name": "{ContainerTypeName}",
  "owningAppId": "{OwningApplicationId}",
  "billingClassification": "directToCustomer"
}
```

After registration, a Global Administrator in the consuming tenant sets up billing in the consuming tenant.

## Admin and developer interaction

Developers and admins interact with different layers.

| Activity | Container type | Container |
| --- | --- | --- |
| Create the app's storage family | Yes | No |
| Configure owning app relationship | Yes | No |
| Configure billing accountability | Yes | No |
| Create app storage instances | No | Yes |
| Store files and folders | No | Yes |
| Apply container-specific governance | No | Yes |
| Delete the storage family | Yes, after containers are removed | No |

## Container type configuration

Developers can configure selected container type settings after creation.

You can configure these container type settings:

- `ApplicationRedirectUrl`
- `DiscoverabilityDisabled`
- `SharingRestricted`

Use the Microsoft Graph [Update fileStorageContainerType](/graph/api/filestoragecontainertype-update) API for supported container type updates. For administrative settings, see [Create apps with PowerShell](../admin/create-apps-powershell.md).

## Registration

To create and interact with containers in a consuming tenant, the container type must be registered in that tenant.

The owning application invokes the registration API to define application permissions for the container type.

For full details, see [Register file storage container type application permissions](../build/register-application-permissions.md).

## Planning checklist

- Choose trial or standard.
- Choose standard billing or pass-through billing for production.
- Identify the owning application.
- Confirm the container type name.
- Confirm the consuming tenant or tenants.
- Plan container type registration.
- Plan application permissions.
- Plan which container type settings are required.
- Plan container lifecycle and deletion.

## Next steps

Plan authentication and authorization: [Plan authentication and permissions](../plan/authentication-permissions.md).
