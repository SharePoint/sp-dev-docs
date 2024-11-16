---
title: Limits and Calling Patterns
description: This article explains the limits of SharePoint Embedded.
ms.date: 11/16/2024
ms.localizationpriority: high
---

# Limits and Calling Patterns

This document explains the limits of SharePoint Embedded during public preview.

> [!NOTE]
> These are preview limits which are subject to change.

## Size limits

The following table defines the size limits of containers"

|                         Resource                          |                         Limit                          |
| --------------------------------------------------------- | ------------------------------------------------------ |
| Container types that a partner tenant can create          | 5*                                                     |
| Container types that an app can own                       | 1                                                      |
| Containers of a container type per consuming tenant       | 100k*                                                  |
| Storage per container type per consuming tenant           | 100 TB*                                                |
| Files and folders per container                           | 30M                                                    |
| Storage per container                                     | 25 TB                                                   |
| Files and folders with additive permissions per container | 5k                                                     |
| File size                                                 | 250 GB                                                  |
| Version count per file                                    | 500 (Automatic Version History Limits Default Setting) |
| Number of users shared per folder or file                 | 5k                                                     |

> [!NOTE]
> Limit can be increased per request.

## Throttling

### Patterns and best practices

When applications hit service limits, you receive an HTTP status code 429 ("Too many requests"). You might also receive an HTTP status code 503 ("Server Too Busy").

In general, the following are the best practices to handle throttling:

- Reduce the number of concurrent requests.
- Avoid request spikes.
- Honor the `Retry-After` HTTP header.

In both cases, a `Retry-After` header is included in the response indicating how long the calling application should wait before retrying or making a new request. Throttled requests count towards usage limits, so failure to honor `Retry-After` might result in more throttling.

## API rate limits

SharePoint Embedded provides various APIs. Different APIs have different costs depending on the functionality and complexity of the API. The cost of APIs is normalized and expressed by resource units. API rate limits are also defined using resource units.

| Resource units per request |                                 Operations                                 |
| -------------------------- | -------------------------------------------------------------------------- |
| 1                          | Single item query, such as get item                                        |
| 2                          | Multi-item query, such as list children  Create, update, delete, and upload |
| 5                          | All permission resource operations, including $expand=permissions          |

> [!NOTE]
> We reserve the right to change the API resource unit cost.

The following table lists the API rate limits for applications and containers.

|          Resource           |           Limits            |
| --------------------------- | --------------------------- |
| Requests per container      | 3k resource units per min   |
| Requests per app per tenant | 12k resource units per min* |
| Requests per user           | 600 resource units per min  |

> [!NOTE]
> \* Limit can be increased per request.

Application limits are defined in resource units, and the actual request rate, such as requests per minute, varies based on the chosen API and its corresponding resource unit cost. As a general rule, you can estimate the request rate by averaging about two resource units per request and dividing application resource unit limits by 2. Reducing the usage of permission operations can notably improve the call rate since these operations have the most significant impact on overall resource consumption.
