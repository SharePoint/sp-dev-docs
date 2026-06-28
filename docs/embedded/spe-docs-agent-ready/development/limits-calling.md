<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->
---
title: SharePoint Embedded limits and calling patterns
description: Size limits, throttling behavior, resource-unit costs, and API rate limits for SharePoint Embedded, plus how to handle 429 and 503.
ms.topic: reference
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
agent:
  schema_version: 1
  task_type: reference
  difficulty: intermediate
  roles: [app-developer, enterprise-developer, owning-admin]
  prerequisites:
    - uri: /sharepoint/dev/embedded/development/app-architecture
      kind: concept
  api_surface: []
  next_steps:
    - uri: /sharepoint/dev/embedded/development/auth
      when: always
  related:
    - uri: /sharepoint/dev/embedded/development/app-architecture
    - uri: /sharepoint/dev/embedded/development/auth
    - uri: /sharepoint/dev/embedded/development/sharing-and-perm
  stability: preview
  last_validated: proposed
---

# SharePoint Embedded limits and calling patterns
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

This reference lists the size limits, throttling behavior, and API rate limits for SharePoint Embedded (SPE), and the calling patterns that keep an application within them.

> [!IMPORTANT]
> These are preview limits and are subject to change. Values marked with `*` can be increased on request.

## Size limits

| Resource | Limit |
|---|---|
| Container types a partner (owning) tenant can create | 25* |
| Container types an app can own | 1 |
| Containers of a container type per consuming tenant | 100,000* |
| Storage per container type per consuming tenant | 100 TB* |
| Files and folders per container | 30,000,000 |
| Storage per container | 25 TB |
| Files and folders with additive permissions per container | 5,000 |
| File size | 250 GB |
| Version count per file | 500 (automatic version history default) |
| Users shared per folder or file | 5,000 |

## Throttling responses

| Status code | Meaning | Required action |
|---|---|---|
| `429 Too Many Requests` | A service limit was hit | Honor the `Retry-After` header before retrying. |
| `503 Server Too Busy` | The service is temporarily overloaded | Honor the `Retry-After` header before retrying. |

Both responses include a `Retry-After` header indicating how long to wait before retrying or making a new request. Throttled requests count toward usage limits, so failing to honor `Retry-After` can result in more throttling.

### Best practices

| Practice | Why |
|---|---|
| Reduce the number of concurrent requests | Lowers the chance of hitting per-container and per-app limits. |
| Avoid request spikes | Smooths usage so short bursts do not trip throttling. |
| Honor the `Retry-After` header | Ignoring it increases throttling because throttled requests still count. |
| Minimize permission operations | Permission operations cost the most resource units (see below), so reducing them raises effective call rate. |

## Resource-unit cost per request

API cost is normalized and expressed in **resource units**. Different operations cost different amounts.

| Resource units per request | Operations |
|---|---|
| 1 | Single-item query, such as get item. |
| 2 | Multi-item query, such as list children, create, update, delete, and upload. |
| 5 | All permission resource operations, including `$expand=permissions`. |

> [!NOTE]
> Microsoft reserves the right to change the API resource-unit cost.

## API rate limits

Rate limits are defined in resource units per minute.

| Resource | Limit |
|---|---|
| Requests per container | 3,000 resource units per minute |
| Requests per app per tenant | 12,000 resource units per minute* |
| Requests per user | 600 resource units per minute |

To estimate the request rate from a resource-unit limit, average about two resource units per request and divide the limit by 2. Reducing permission operations notably improves the call rate, because those operations have the largest impact on resource consumption.

### Container creation rate limit

| Condition | Limit |
|---|---|
| Per consuming tenant, during the tenant's peak hours | 5 new containers per second |
| Per consuming tenant, outside peak hours | Faster than 5 per second (no fixed peak-hour cap) |

Requests beyond the peak-hour limit are rate limited.

## Examples

### Honor `Retry-After` on a throttled response

```http
HTTP/1.1 429 Too Many Requests
Retry-After: 12
Content-Type: application/json

{ "error": { "code": "activityLimitReached", "message": "The request has been throttled." } }
```

Wait the number of seconds in `Retry-After` (here, 12) before retrying, then apply exponential backoff if throttling persists.

### Estimate sustainable request rate for an app

With a per-app limit of 12,000 resource units per minute and an average of 2 resource units per request:

```text
12,000 resource units/min ÷ 2 resource units/request ≈ 6,000 requests/min ≈ 100 requests/sec
```

Permission-heavy workloads (5 units each) reach the limit far sooner: 12,000 ÷ 5 = 2,400 permission requests per minute.

## See also

- [Application architecture](/sharepoint/dev/embedded/development/app-architecture)
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth)
- [Sharing and permissions](/sharepoint/dev/embedded/development/sharing-and-perm)
- [Microsoft Graph throttling guidance](https://learn.microsoft.com/en-us/graph/throttling)
- [API surface index](/sharepoint/dev/embedded/api-surface.json)
