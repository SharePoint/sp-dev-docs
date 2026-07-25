---
title: Glossary
description: Concise definitions of common SharePoint Embedded terms and concepts.
ms.date: 06/25/2026
ms.reviewer: pemtaira
ms.author: mawin
ms.localizationpriority: high
ai-usage: ai-assisted
---

# Glossary

**Applies to:** Developer

<!-- agent:
task_type: reference
audience: developer
outcome: Understand key SharePoint Embedded terminology.
next: ../plan/choose-app-model.md
-->

| Term | Definition |
| --- | --- |
| Container | A File Storage Container: the basic SharePoint Embedded storage unit and security and compliance boundary for files. See [SharePoint Embedded overview](../overview.md). |
| Container type | A SharePoint Embedded resource that defines the relationship, access privileges, billing accountability, and behavior for a set of containers. See [container types](../plan/container-types-containers.md). |
| Developer tenant | The tenant that develops or owns the SharePoint Embedded application and creates its container type. See [container types](../plan/container-types-containers.md). |
| Consuming tenant | The Microsoft 365 tenant where a SharePoint Embedded app is used and where containers and content are stored. See [app architecture](../plan/app-tenant-architecture.md). |
| Container type registration | Registration of a container type in a consuming tenant so the app can perform allowed operations against containers of that type. See [register container type application permissions](../build/register-application-permissions.md). |
| Single-tenant app | An application model intended for use in one tenant, commonly for enterprise line-of-business scenarios. See [choose an app model](../plan/choose-app-model.md). |
| Multitenant app | An application model intended for use across customer tenants, commonly for independent software vendor (ISV) scenarios. See [choose an app model](../plan/choose-app-model.md). |
| Standard billing | A billing model where consumption charges are billed to the tenant that owns or develops the application. See [choose a billing model](../plan/choose-billing-model.md). |
| Pass-through (customer) billing | A billing model where consumption charges are billed directly to the consuming tenant registered to use the app. See [choose a billing model](../plan/choose-billing-model.md). |
| Owning application | The Microsoft Entra ID application registration strongly coupled with a container type; each owning app can own one container type at a time. See [app architecture](../plan/app-tenant-architecture.md). |
| Partition | The API-only SharePoint storage partition created in a consuming tenant for SharePoint Embedded app documents. See [SharePoint Embedded overview](../overview.md). |

## Related resources

- [What is SharePoint Embedded?](../overview.md)
- [Understand app and tenant architecture](../plan/app-tenant-architecture.md)
