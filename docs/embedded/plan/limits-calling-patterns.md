---
title: Understand limits and calling patterns
description: Plan SharePoint Embedded service limits, throttling behavior, retry handling, and performance-sensitive calling patterns.
ms.date: 07/13/2026
ms.reviewer: mawin
ms.author: mawin
ms.localizationpriority: high
ai-usage: ai-assisted
---

# Understand limits and calling patterns

**Applies to:** Developer

<!-- agent:
task_type: concept
audience: developer
outcome: Design SharePoint Embedded calls that respect service limits, throttling, and resource unit costs.
next: ../build/quickstart-vscode.md
-->

Use this article to plan SharePoint Embedded calling patterns before you build high-volume container and content operations. SharePoint Embedded expresses throughput as **resource units per minute** (a normalized request-cost model) rather than as a fixed requests-per-second rate; the [API rate limits](#api-rate-limits) section explains how to translate resource units into an expected request rate.

Limits marked with `*` can be increased on request through Microsoft support or your SharePoint Embedded onboarding contact; plan for the default limit and request an increase before you approach it in production.

## Limit categories

SharePoint Embedded limits affect:

- Container type counts*
- Container counts*
- Storage per container type and container
- Files and folders
- Permissions
- File size
- Version count
- API rate limits*
- Requests per app, container, and user*

> [!NOTE]
> These limits can change. Verify the current limits before you launch to production.

## Size limits

SharePoint Embedded enforces the following size limits.

| Resource | Limit |
| --- | --- |
| Container types that a developer tenant can create | 25* |
| Container types that an app can own | 1 |
| Containers of a container type per consuming tenant | 100,000* |
| Storage per container type per consuming tenant | 100 TB* |
| Files and folders per container | 30 million |
| Storage per container | 25 TB |
| Files and folders with additive permissions per container | 5,000 |
| File size | 250 GB |
| Version count per file | 500 (default automatic version history limit) |
| Number of users shared per folder or file | 5,000 |

An asterisk (`*`) indicates a limit you can request to increase.

Of the container types a tenant creates, one can be a free **trial container type** for development and testing, and the rest are **standard** (billed) container types. New tenants start with a lower default that can be raised on request. For trial-versus-standard details, see [Create and configure a container type](../build/create-container-type.md).

## Design for container type limits

An app can own one container type.

Don't model each customer, project, workspace, or user as a separate container type.

Use containers for application storage instances within the container type.

Choose a container type for app-level behavior, access relationship, and billing accountability.

For container type planning, see [Understand container types and containers](../plan/container-types-containers.md).

## Design for container limits

Containers provide the storage and security boundary.

Plan how many containers each consuming tenant might create.

Account for active containers and any deleted container lifecycle that might affect quotas or storage.

Keep container boundaries aligned with access, lifecycle, and governance requirements.

## Design for permission limits

SharePoint Embedded allows up to 5,000 files and folders with additive permissions per container.

Avoid designing every file or folder to have unique permissions when a container-level or folder-level model is sufficient.

Use container membership and roles where possible.

For permission concepts, see [Plan authentication and permissions](../plan/authentication-permissions.md).

## Throttling responses

When applications hit service limits, SharePoint Embedded can return:

- HTTP `429 Too Many Requests`.
- HTTP `503 Server Too Busy`.

Both responses include a `Retry-After` header.

The header tells the app how long to wait before retrying or making a new request.

> [!IMPORTANT]
> Throttled requests count toward usage limits. If you ignore `Retry-After`, your app can cause more throttling.

## Retry guidance

Implement retry logic that:

- Detects HTTP `429` and `503`.
- Reads the `Retry-After` header.
- Waits for the specified duration before retrying.
- Reduces concurrency after throttling.
- Avoids immediate retry loops.
- Avoids request spikes after a wait period.

Use bounded retries and surface persistent failures to operations telemetry. For general guidance on handling throttling responses, see [Microsoft Graph throttling guidance](/graph/throttling).

## Concurrency guidance

Reduce the number of concurrent requests when throttling occurs.

Avoid burst patterns that send many requests at the same instant.

Distribute work over time when processing large sets of containers or files.

Use queues or background workers to smooth traffic.

Prioritize user-visible operations over background maintenance when near limits.

## API resource units

Different APIs have different costs depending on functionality and complexity.

The cost is normalized and expressed as resource units.

API rate limits are also defined using resource units.

Each request costs resource units based on its complexity:

| Resource units per request | Operations |
| --- | --- |
| 1 | Single item query, such as get item. |
| 2 | Multi-item query, such as list children, create, update, delete, and upload. |
| 5 | All permission resource operations, including `$expand=permissions`. |

> [!NOTE]
> Resource unit costs can change.

## API rate limits

SharePoint Embedded enforces these API rate limits.

| Resource | Limit |
| --- | --- |
| Requests per container | 3,000 resource units per minute |
| Requests per app per tenant | 12,000 resource units per minute* |
| Requests per user | 600 resource units per minute |

An asterisk (`*`) indicates a limit you can request to increase.

Application limits are defined in resource units.

The actual requests per minute depends on the APIs you call and their resource unit cost.

To estimate your request rate, average about two resource units per request and divide the application resource unit limit by two.

## Container creation rate limiting

Per consuming tenant, and during the tenant's peak hours, container creation is limited to 5 new containers per second. Requests beyond this limit are rate limited. Outside of peak hours, containers can be created at a faster rate.

## Permission operation costs

Permission resource operations have a higher resource unit cost.

Operations that include `$expand=permissions` are listed at five resource units.

Reduce unnecessary permission expansion.

Cache permission-derived decisions only when it is safe for your security model.

Refresh permission data when membership or role changes occur.

## Batching considerations

Batching can reduce client overhead, but it doesn't remove service limits or billing impact.

Count each underlying operation when you estimate resource unit consumption and transaction cost.

Avoid creating batches that concentrate too much work against one container, app, tenant, or user in a short interval.

Honor throttling responses for batched operations according to the response details returned by the platform.

## Performance considerations

Design for:

- Fewer permission-heavy calls.
- Predictable concurrency.
- Incremental synchronization.
- Backoff after throttling.
- Separation of foreground and background work.
- Tenant-level fairness for multitenant apps.
- Monitoring of request rate, response codes, and latency.

For billing impact of API transactions, see [Choose a billing model](../plan/choose-billing-model.md).

## Operational monitoring

Track:

- HTTP `429` and `503` response rates.
- Retry counts and wait durations.
- Resource-intensive operations.
- Requests by app, tenant, user, and container.
- Background job queue length.
- Storage growth per container and tenant.
- Permission operation frequency.

Use these signals to tune concurrency and identify tenants or workflows that need design changes.

## Planning checklist

- Confirm current size limits before production launch.
- Model containers instead of creating many container types.
- Estimate storage per container and per consuming tenant.
- Estimate file and folder counts.
- Avoid unnecessary additive permissions.
- Implement `Retry-After` handling for `429` and `503`.
- Limit concurrency and avoid spikes.
- Estimate resource unit usage by operation type.
- Reduce permission-heavy operations.
- Monitor throttling and latency.
- Include billing impact in API design.

## Related planning articles

- [Understand app and tenant architecture](../plan/app-tenant-architecture.md)
- [Understand container types and containers](../plan/container-types-containers.md)
- [Plan authentication and permissions](../plan/authentication-permissions.md)
- [Choose a billing model](../plan/choose-billing-model.md)

## Next steps

Start building with [Quickstart: Build your first app with VS Code](../build/quickstart-vscode.md).
