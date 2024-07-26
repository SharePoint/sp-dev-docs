---
title: Avoid getting throttled or blocked in SharePoint Online
description: Learn about throttling in SharePoint Online and learn how to avoid being throttled or blocked.
ms.date: 07/26/2024
ms.assetid: 33ed8106-d850-42b1-8d7f-5ba83901149c
ms.localizationpriority: high
---

# Avoid getting throttled or blocked in SharePoint Online

Find out about throttling in SharePoint Online and learn how to avoid being throttled or blocked. 

- [What is throttling?](how-to-avoid-getting-throttled-or-blocked-in-sharepoint-online.md#what-is-throttling)
- [How to handle throttling?](how-to-avoid-getting-throttled-or-blocked-in-sharepoint-online.md#how-to-handle-throttling)
- [Common throttling scenarios in SharePoint Online](how-to-avoid-getting-throttled-or-blocked-in-sharepoint-online.md#common-throttling-scenarios-in-sharepoint-online)
- [Scenario specific limits](how-to-avoid-getting-throttled-or-blocked-in-sharepoint-online.md#scenario-specific-limits)
- [What should you do if you get blocked in SharePoint Online?](how-to-avoid-getting-throttled-or-blocked-in-sharepoint-online.md#what-should-you-do-if-you-get-blocked-in-sharepoint-online)
- [Additional resources](how-to-avoid-getting-throttled-or-blocked-in-sharepoint-online.md#see-also)

Does this sound familiar? You're running an application - for example, to scan files in SharePoint Online - but you get throttled. Or even worse, you get blocked. What's going on and what can you do to make it stop?

## What is throttling?

SharePoint Online uses throttling to maintain the optimal performance and reliability of the SharePoint Online service. Throttling limits the number of API calls or operations within a time window to prevent the overuse of resources.

### What happens when you get throttled in SharePoint Online?

When usage limits are exceeded, SharePoint Online throttles any further requests from that client for a short period.

For requests that a user performs directly in the browser, SharePoint Online redirects you to the throttling information page, and the requests fail.

For requests that an application makes, including [Microsoft Graph](/graph), CSOM, or REST calls, SharePoint Online returns HTTP status code 429 ("Too many requests") or 503 ("Server Too Busy") and the requests will fail.

- HTTP 429 indicates the calling application sent too many requests in a time window and exceeded a predetermined limit.
- HTTP 503 indicates the service isn't ready to handle the request. The common cause is that the service is experiencing more temporary load spikes than expected.

In both cases, a `Retry-After` header is included in the response indicating how long the calling application should wait before retrying or making a new request. Throttled requests count towards usage limits, so failure to honor `Retry-After` may result in more throttling.

If the offending application continues to exceed usage limits, SharePoint Online may completely block the application or specific request patterns from the application; in this case, the application will keep getting HTTP status code 503, and Microsoft will notify the tenant of the block in the Office 365 Message Center.

### User Throttling

Throttling limits the number of calls and operations collectively made by applications on behalf of a user to prevent the overuse of resources.

That said, it's rare for a user to get throttled in SharePoint Online. The service is robust, and it's designed to handle high volume. If you do get throttled, 99% of the time it is because of custom code, such as custom web parts, complex list view and queries, or custom apps users run. That doesn’t mean that there aren’t other ways to get throttled, just that they’re less common. For example, one user syncing a large amount of data across 10 machines at the same time could trigger throttling.

### Application Throttling

In addition to throttling by user account, limits are also applied to applications in a tenant. 

Every application has its own limits in a tenant, which are based on the number of licenses purchased per organization (see the plans listed on [SharePoint Limits](/office365/servicedescriptions/sharepoint-online-service-description/sharepoint-online-limits#limits-by-plan) for licenses included). Every request that an application makes across all API endpoints, including [Microsoft Graph](/graph), CSOM, and REST, counts towards the application’s usage.

SharePoint provides various APIs. Different APIs have different costs depending on the complexity of the API. The cost of APIs is normalized by SharePoint and expressed by resource units. Application’s limits are also defined using resource units.

The table below defines the resource unit limits for an application in a tenant:

|  License count  |   0 – 1k  |  1k – 5k  |  5k - 15k | 15k - 50k |    50k+   |
| --------------- | --------- | --------- | --------- | --------- | --------- |
|   App 1 minute  |   1,200   |   2,400   |   3,600   |   4,800   |   6,000   |
|    App daily    | 1,200,000 | 2,400,000 | 3,600,000 | 4,800,000 | 6,000,000 |

> [!NOTE]
> Microsoft reserves the right to change the resource unit limits.

For multitenant applications:

1. Each tenant hosting the application is considered distinct, operating independently from others. Consequently, every application is subject to its own usage limits within each tenant as defined above.
1. The consumption of resource units by the application is to be measured on a per-tenant, per-application basis. This ensures that each tenant-application pair remains within the permissible resource limits specified for that particular tenant.
1. Should the application reach its resource limit within one tenant, this occurrence will not affect other instances of the application operating in different tenants. Each tenant's resource utilization is isolated, preventing cross-tenant impact.

In terms of API costs, [Microsoft Graph APIs](/graph) have a predetermined resource unit cost per request:

| Resource units per request | Operations                                              |
| -------------------------- | ------------------------------------------------------- |
| 1	                         | <li>Single item query, such as get item <li>Delta with a token <li>Download file from drive item |
| 2	                         | <li>Multi item query, such as list children, except delta with a token <li>Create, update, delete and upload |
| 5	                         | <li>All permission resource operations, including $expand=permissions |

> [!NOTE]
> We reserve the right to change the API resource unit cost.

Delta with a token is the most efficient way to scan content in SharePoint, and we talk more in detail at the [best practices for scanning applications](https://aka.ms/ScanGuidance). To help applications that follow the guidance, we lower the resource unit cost of delta requests with a token to 1 resource unit, although it's a multi-item query. The delta request without a token is considered a multi-item query and costs 2 resource units per request.

In [batching](/graph/json-batching), requests in a batch are evaluated individually by resource units. 

CSOM and REST don't have a predetermined resource unit cost and they usually consume more resource units than [Microsoft Graph APIs](/graph) to achieve the same functionality. In addition to resource unit limits, CSOM and REST are also subject to other internal resource limits, so if applications call CSOM and REST, they may experience more throttling than the limits described in this document. We highly recommend you choose [Microsoft Graph APIs](/graph) over CSOM and REST APIs when possible.

Since application limits are in resource units, the actual request rate, such as requests per minute, depends on the application’s API choice and the corresponding API resource unit cost. In general, you can estimate the request rate using an average of 2 resource units per request and divide resource unit limits by 2 to get the estimated request rate.

Although each application has its limits within a tenant and we allow tenants to run more than one application, multiple applications running against the same tenant share the same resource bucket, and in rare occurrences can cause rate limiting when too many applications send requests at the time. 

## How to handle throttling?

Below is a quick summary of the best practices to handle throttling:

- Reduce the number of concurrent requests
- Avoid request spikes
- Choose [Microsoft Graph APIs](/graph) over CSOM and REST APIs when possible
- Use the `Retry-After` and `RateLimit` HTTP headers
- Decorate your traffic so we know who you are (see section on traffic decoration best practice more on that below)

As stated earlier, [Microsoft Graph](/graph) is cloud born APIs that have the latest improvements and optimizations. In general, [Microsoft Graph](/graph) consumes less resources than CSOM and REST to achieve the same functionality. Hence, adopting [Microsoft Graph](/graph) can improve the application's performance and reduce throttling.

If you do run into throttling, we require using the `Retry-After` HTTP header to ensure minimum delay until the throttle is removed. The `RateLimit` HTTP headers send you early signals when you're close to limits and you can proactively reduce requests to avoid hitting the throttle.

### Retry-after header

When applications experience throttling, SharePoint Online returns a `Retry-After` HTTP header in the request indicating how long in seconds the calling application should wait before retrying or making a new request. 

Honoring the `Retry-After` HTTP header is the fastest way to handle being throttled because SharePoint Online dynamically determines the right time to try again. 

Throttled requests count towards usage limits, so failure to honor `Retry-After` may result in more throttling. In other words, aggressive retries work against calling applications because even though the calls fail, they still count toward usage limits. Honoring the `Retry-After` HTTP header will ensure the shortest delay and reduce wasting quotas in throttled requests.

### RateLimit headers - preview

In addition to the `Retry-After` header in the response to throttled requests, SharePoint Online also returns the [IETF RateLimit headers](https://github.com/ietf-wg-httpapi/ratelimit-headers) for selected limits in certain conditions to help applications manage rate limiting. We recommend applications to take advantage of these headers to avoid hitting throttle. 

- `RateLimit-Limit` contains the limit in the current time window.
- `RateLimit-Remaining` indicates the remaining quota in the current window.
- `RateLimit-Reset` indicates the number of seconds until the quota is refilled.

> [!NOTE]
> These headers are currently in **beta** and subject to change. At the time when the headers were adopted, the IETF specification was in draft. The current implementation is based on the [draft-03](https://datatracker.ietf.org/doc/html/draft-ietf-httpapi-ratelimit-headers-03) of the IETF specification. There is the potential for changes when the specification is final, and we will adapt to those changes in the future.  

The `RateLimit` headers are returned on a **best-efforts** basis, so applications may not receive the headers under all conditions. Additionally, there are other limits that aren't presented in the `RateLimit` headers, so applications can get throttled even before reaching the limit described in the `RateLimit` headers. 
Below is the list of limits that we support the `RateLimit` headers for. The policies and values are subject to change:

| limit                      | Condition                 | limit value   | Description                                                                                                      |
| -------------------------- | ------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------- |
| App 1-minute resource unit | Usage >= 80% of the limit | Resource unit | When an application consumes 80% or more of its app 1-minute limit, the limit, remaining, and reset are returned.| 

Below are some examples to help you understand the `RateLimit` headers:

- An application has consumed 90% of its resource unit quota (1,080 out of 1,200), and its consumption is within all the limits that apply to it. The request succeeds and the `RateLimit` headers are returned.
```
HTTP/1.1 200 Ok
RateLimit-Limit: 1200
RateLimit-Remaining: 120
RateLimit-Reset: 5
```

- An application has consumed 100% of its resource unit quota, so it gets throttled due to this policy. The request is throttled and the `RateLimit` headers are returned. The `Retry-After` matches the `RateLimit-Reset`.
```
HTTP/1.1 429 Too Many Requests
Retry-After: 31
RateLimit-Limit: 1200
RateLimit-Remaining: 0
RateLimit-Reset: 31
```

- An application has consumed 90% of its resource unit quota but its consumption has already reached other limits that the `RateLimit` headers don't support. In this case, the request is throttled and the `RateLimit` headers aren't returned to avoid confusion although the condition to return the headers is satisfied.
```
HTTP/1.1 429 Too Many Requests
Retry-After: 9
```
Additional information can be found in [Prevent throttling in your application by using RateLimit headers in SharePoint Online](https://devblogs.microsoft.com/microsoft365dev/prevent-throttling-in-your-application-by-using-ratelimit-headers-in-sharepoint-online/)
    
### How to decorate your HTTP traffic?

Well-decorated traffic will be prioritized over traffic that isn't properly decorated.

What is the definition of undecorated traffic?

- Traffic is undecorated if there's no AppID/AppTitle and User Agent string in API calls to SharePoint Online. The User-Agent string should be in a specific format as described below.
- If you're developing a web application executing in the browser, most modern browsers don't allow overwriting the User Agent string, and you don't need to implement it.

What are the recommendations?

- If you've created an application, the recommendation is to register and use AppID and AppTitle – This will ensure the best overall experience and best path for any future issue resolution. Include also the User Agent string information as defined in the following step.
    > [!NOTE]
    > Refer to the [Microsoft identity documentation](/azure/active-directory/develop/), such as the [Quickstart: Register an application with the Microsoft identity platform](/azure/active-directory/develop/quickstart-register-app) page, for information on creating an Azure AD application.

- Make sure to include the User-Agent string in your API call to SharePoint with the following naming convention

|          Type          |                  User Agent                  |                                                                     Description                                                                     |
| ---------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| ISV Application        | ISV&#124;CompanyName&#124;AppName/Version    | Identify as ISV and include Company Name, App Name separated by a pipe character and then add Version number separated with a slash character    |
| Enterprise application | NONISV&#124;CompanyName&#124;AppName/Version | Identify as NONISV and include Company Name, App Name separated by a pipe character and then adding Version number separated with a slash character |

- If you're building your own JavaScript libraries, which are used to call SharePoint Online APIs, make sure that you include the User-Agent information to your HTTP request and potentially register your web application also as an Application, where suitable.

> [!NOTE]
> The format of the  user agent string is expected to follow [RFC2616](http://www.ietf.org/rfc/rfc2616.txt), so please follow up on the above guidance on the right separators. It is also fine to append the existing user agent string with the requested information.

## Common throttling scenarios in SharePoint Online

The most common causes of per-user throttling in SharePoint Online are client-side object model (CSOM) or Representational State Transfer (REST) code that performs too many actions too frequently.

- **Sporadic traffic**

    Constant load or repetitive complex queries against SharePoint Online must be optimized for low impact. Failing to follow [best practices for scanning applications](https://aka.ms/ScanGuidance) that process files in bulk will likely result in throttling. These apps include sync engines, backup providers, search indexers, classification engines, data loss prevention tools, and any other tool, that attempts to reason over the entirety of data and apply changes to it.

- **Overwhelming traffic**

    A single process dramatically exceeds throttling limits, continually, over a long period.

  - You used web services to build a tool to synchronize user profile properties. The tool updates user profile properties based on information from your line-of-business (LOB) human resources (HR) system. The tool makes calls at too high a frequency.
  - You're running a load-testing script on SharePoint Online and you get throttled. Load testing isn't allowed on SharePoint Online.
  - You customized your team site on SharePoint Online, for example, by adding a status indicator on the Home page. This status indicator updates frequently, which causes the page to make too many calls to the SharePoint Online service - this triggered throttling.
  - Running the OneDrive Sync client while also running migration applications or applications that crawl sites and write back data can result in high request volumes that may trigger throttling. 

- **Unsupported use cases**

    Unsupported use of SharePoint Online may experience throttling. Using SharePoint and OneDrive as an intermediary service between Microsoft 365 and another repository is an example of an unsupported use case.

- **Creating multiple AppIDs for the same application**

    Don't create separate AppIDs where the applications essentially perform the same operations, such as backup or data loss prevention. Applications running against the same tenant ultimately share the same resource as the tenant. Historically some applications have tried this approach to get around the application throttling but ended up exhausting the tenant’s resource and causing multiple applications to be throttled in the tenant.
## Scenario specific limits

### When using app-only authentication with Sites.Read.All permission

When you're using SharePoint Online search APIs with app-only authentication and the app having Sites.Read.All permission (or stronger), the app will be registered with full permissions, and is allowed to query all your SharePoint Online content (including the user’s private OneDrive for Business content).

To ensure the service remains fast and reliable, queries using such permission are throttled at 25 requests per second. The search query will return an HTTP 429 response. When waiting for throttling recovery, you should ensure to pause all search query requests you may be making to the service using similar app-only permission. Making more calls while receiving throttle responses will extend the time it takes for your app to become unthrottled.

### When searching using delegated user permissions
Searching with delegated user permissions occurs when an application submits a search query request with the signed-in user's permissions. Examples of delegated requests are as follows: the search box on a SharePoint page, a search-based web part or custom application embedded on a SharePoint page, and a Power Automate workflow querying for item information.  

To ensure service stability, the service will throttle delegated user requests that exceed 10 requests per second per user. This per-user limit aggregates across all requests from all apps. If a single user sends more than 10 search query requests per second, an HTTP 429 is returned. The requesting application should wait the duration of the timeout specified in the response header before sending subsequent requests. When designing search-based applications, SharePoint pages, and workflows, implementors should make sure the page and application do not exceed 10 requests per second in aggregate and handle 429 throttling responses. For more information and guidance on page design and search optimization, see [Optimize search requests in SharePoint Online modern site pages](/microsoft-365/enterprise/modern-search-optimization) and [Use the Page Diagnostics tool for SharePoint Online](/microsoft-365/enterprise/page-diagnostics-for-spo).

### When searching for people search results

When searching using a result source that requests people results, we may throttle any requests exceeding an organization-wide limit of 25 requests per second. This limit applies to all SharePoint search CSOM and REST requests using either the out-of-the-box "Local People Results" result source or a custom people search result source.

If you have applications or components, that are causing your people search requests to get throttled, we recommend that you:

1. Consider if the requests are necessary for your application. For example, if you're using a custom search site, that makes many simultaneous queries, check whether some of those requests can be removed without any significant impact to your organization's search experience. Alternatively, consider trying our modern people search experience in [Microsoft Search](/microsoftsearch/get-started-search-in-sharepoint-online) by searching from the [SharePoint](https://sharepoint.com/) start page. People search in Microsoft Search has been optimized for better performance and more relevant results.
1. Avoid making concurrent requests. For example, instead of issuing 10 requests all at once, issue them consecutively - only issue the next query after the previous one has been completed. You may need to consider caching these results if you need them quickly, for example of a page load.
1. Try consolidating the requests into a single query. For example, instead of making 10 simultaneous queries for `WorkEmail:user1@constoso.com`, `WorkEmail:user2@constoso.com`,..., `WorkEmail:user10@contoso.com`, try the single query, `WorkEmail:user1@constoso.com WorkEmail:user2@constoso.com ... WorkEmail:user10@contoso.com`.
1. Consider using the [Microsoft Graph API](/graph/search-concept-person) if a high-request-volume scenario (in excess of 25 requests per second) is truly necessary.

### When accessing OneDrive sites
When a client makes excessive attempts to access many OneDrive site collections that do not exist, we may throttle requests from that client's IP address. The client will receive an HTTP 429 response when accessing any OneDrive site collection during the throttling period.

## What should you do if you get blocked in SharePoint Online?

Blocking is the most extreme form of throttling. We rarely ever block a tenant unless we detect long-term, excessive traffic that may threaten the overall health of the SharePoint Online service. We apply blocks to prevent excessive traffic from degrading the performance and reliability of SharePoint Online. A block - which is placed at the app or user level - prevents the offending process from running until you fix the problem. If we block your subscription, you must take action to modify the offending processes before the block can be removed.

If we block your subscription, we'll notify you of the block in the Office 365 Message Center. The message describes what caused the block, provides guidance on how to resolve the offending issue, and tells you who to contact to get the block removed.

## See also

- [Diagnosing performance issues with SharePoint Online](https://support.office.com/article/3c364f9e-b9f6-4da4-a792-c8e8c8cd2e86)
- [Capacity planning and load testing SharePoint Online](https://support.office.com/article/capacity-planning-and-load-testing-sharepoint-online-c932bd9b-fb9a-47ab-a330-6979d03688c0)
- [Microsoft Graph dev center](/graph)
- [Microsoft Graph throttling guidance](/graph/throttling)
- [Prevent throttling in your application by using RateLimit headers in SharePoint Online](https://devblogs.microsoft.com/microsoft365dev/prevent-throttling-in-your-application-by-using-ratelimit-headers-in-sharepoint-online/)
