<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->
---
title: SharePoint Embedded application architecture
description: How SPE apps, container types, containers, and owning vs consuming tenants fit together across the control and content planes.
ms.topic: concept-article
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
agent:
  schema_version: 1
  task_type: concept
  difficulty: beginner
  roles: [app-developer, enterprise-developer, owning-admin, consuming-admin]
  prerequisites:
    - uri: /sharepoint/dev/embedded/overview
      kind: concept
  api_surface: []
  next_steps:
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
      when: always
    - uri: /sharepoint/dev/embedded/development/auth
      when: always
  related:
    - uri: /sharepoint/dev/embedded/overview
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
    - uri: /sharepoint/dev/embedded/development/auth
    - uri: /sharepoint/dev/embedded/development/sharing-and-perm
    - uri: /sharepoint/dev/embedded/api-surface.json
  stability: ga
  last_validated: proposed
---

# SharePoint Embedded application architecture
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

## What it is

SharePoint Embedded (SPE) stores all files and documents in **containers**. Every container and all of its content is created and stored inside a Microsoft 365 tenant, and is created, managed, and accessed exclusively through a SharePoint Embedded application calling Microsoft Graph. There is no SharePoint user interface in the path; the application is the only client.

An SPE architecture is defined by four resources and their relationships:

| Resource | What it is |
|---|---|
| SharePoint Embedded application | A Microsoft Entra ID application registration. As the owning or guest application of a container type, it has access to containers of that type. |
| Container | The basic storage unit. A container is also a security and compliance boundary. Each container holds one drive of standard `driveItem` content. |
| Container type | A resource that defines the relationship, access privileges, and billing accountability between an application and a set of containers. It also defines behaviors on that set of containers. |
| Owning application | The single application strongly coupled to a container type. SPE mandates a 1:1 relationship between owning application and container type. |

The container type is stamped on each container as an **immutable property** and is used across the entire SPE ecosystem. For how to create and configure container types, see [Container types](/sharepoint/dev/embedded/getting-started/containertypes).

## Why it matters / when to use

Understand this model before you register an app, request permissions, or create a container — the owning/consuming split and the 1:1 app-to-container-type rule determine where each Graph call must run and which permissions it requires.

Use SPE when an application needs first-class document storage and collaboration that belongs to the application rather than to an end user's SharePoint site, and where storage must remain inside each customer's Microsoft 365 tenant boundary. The architecture supports three common deployment shapes:

- An ISV ships one application (one container type) to many customer tenants.
- An enterprise builds a line-of-business (LOB) application for internal use.
- Multiple applications operate side by side in one tenant, each scoped to the containers of the container type it owns.

## When NOT to use

- When end users should own and manage their own files in personal OneDrive or a standard SharePoint site — use SharePoint or OneDrive directly.
- When you need raw object/blob storage with no document semantics — use Azure Blob Storage.
- When the application has no Microsoft Entra ID identity context to authenticate Graph calls.

## Key terms

| Term | Meaning |
|---|---|
| Owning tenant | The Microsoft Entra ID tenant where a container type is created. Often the same tenant where the SPE application is registered. |
| Consuming tenant | A Microsoft Entra ID tenant where a container type is used. Only a consuming tenant may hold containers of that type; all containers and content are stored within the consuming tenant's Microsoft 365 boundary. |
| Owning application | The single application coupled 1:1 to a container type. Its developer (the owning tenant) creates and manages the container type. |
| Guest application | An application granted access to containers of a container type it does not own. |
| Container | `fileStorageContainer`; the storage unit and the security/compliance boundary. |
| Container type | The resource defining access, behavior, and billing for a set of containers; immutable on each container. |
| Access model | The set of permissions configured between an application and a container type, set at container-type creation for the owning application. |

> [!NOTE]
> The same Microsoft Entra ID tenant can be both the owning tenant and a consuming tenant of a given container type.

## How it fits together

### Owning tenant vs consuming tenant

The **owning tenant** is where a container type is created and managed. This is the control-plane home of the container type: the owning application developer is responsible for creating it, configuring its permissions, and setting its behaviors. Because SPE mandates a 1:1 relationship between owning application and container type, exactly one application owns each container type.

The **consuming tenant** is where the container type is registered and used. Containers — and all `driveItem` content within them — are created and stored inside the consuming tenant's Microsoft 365 boundary. A single tenant can act as both owning and consuming tenant for the same container type (common during development and for internal LOB apps).

### Access model

An application's access to containers and container content is determined by the set of permissions configured between the application and the container type it is accessing. For the owning application, this permission set is determined at container-type creation time. The ecosystem also allows an application to access containers of a container type it does **not** own, when granted guest access.

- **Dedicated container types:** When multiple applications are deployed in one tenant — for example two ISV apps (App 1, App 2) and one LOB app (App 3) — each application can access only the stack of containers of the container type it owns.
- **Shared container types:** When App 1 and App 2 are both granted access to the same container type, both applications can access the stack of containers of that type.

For the full permission and consent details — Microsoft Graph permissions, container type application permissions, and user permissions — see [Authentication and authorization](/sharepoint/dev/embedded/development/auth). Permissions are granted to a container type in a consuming tenant through [container type registration](/sharepoint/dev/embedded/getting-started/register-api-documentation).

### Worked example

Contoso, an ISV, builds a human-resources management application on SPE. The application is registered and deployed in Fabrikam, an auditing firm. Fabrikam also develops its own internal LOB auditing application on SPE.

- Each application has its own container type. Contoso is the **owning tenant** of the HR app, and that app is the **owning application** of its container type.
- Fabrikam is the **owning tenant** of the auditing app, and that app is the **owning application** of its container type.
- Fabrikam is the **consuming tenant** for both applications — both apps' containers and content are stored inside Fabrikam's Microsoft 365 boundary.

## Related

- [SharePoint Embedded overview](/sharepoint/dev/embedded/overview)
- [Container types](/sharepoint/dev/embedded/getting-started/containertypes)
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth)
- [Sharing and permissions](/sharepoint/dev/embedded/development/sharing-and-perm)
- [Register container type](/sharepoint/dev/embedded/getting-started/register-api-documentation)
- [API surface index](/sharepoint/dev/embedded/api-surface.json)
