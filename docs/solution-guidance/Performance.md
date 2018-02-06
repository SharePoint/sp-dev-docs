---
title: Performance
ms.date: 02/01/2018
---
# Performance

## Summary


## High-level guideline/general rules



## Available options

### General recommendations

### Handling SharePoint Online throttling

_**Applies to:** Office 365_

SharePoint Online uses throttling to prevent users from over-consuming resources. When a user runs CSOM or REST code that exceeds usage limits, SharePoint Online throttles any further request from the user for a period of time.

#### Related resources

##### Articles

- [Handle SharePoint Online throttling by using exponential back off](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/handle-sharepoint-online-throttling-by-using-exponential-back-off)
- [Avoid getting throttled or blocked in SharePoint Online](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/how-to-avoid-getting-throttled-or-blocked-in-sharepoint-online)

##### Samples

- [SharePoint Online Throttling](https://github.com/SharePoint/PnP/tree/master/Samples/Core.Throttling)

### SharePoint Framework

_**Applies to:** Office 365 | SharePoint Server_

#### Related resources

##### Articles

- [Optimize builds for production](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/toolchain/optimize-builds-for-production)
- [JavaScript Patterns and Performance](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/javascript-patterns-and-performance)
- [Make batch requests with the REST APIs](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/make-batch-requests-with-the-rest-apis)
- [SharePoint Framework (SPFx) enterprise guidance](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/enterprise-guidance)
- [Use existing JavaScript libraries in SharePoint Framework client-side web parts](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/web-parts/guidance/use-existing-javascript-libraries)
- [Use the Office 365 content delivery network (CDN)](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/office-365-cdn)

### SharePoint Add-ins

_**Applies to:** Office 365 | SharePoint Server_

The approaches you take to ensure optimal performance with SharePoint is different in the new SharePoint Add-in model than it was with Full Trust Code. In a typical Full Trust Code (FTC) / Farm Solution scenario most code operations took place in the SharePoint Server-side Object Model code.

#### Related resources

##### Articles

- [JavaScript Patterns and Performance](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/javascript-patterns-and-performance)
- [Performance considerations in the SharePoint add-in model](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/performance-considerations-sharepoint-add-in)
- [Improve performance in SharePoint provider-hosted add-ins](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/improve-performance-in-sharepoint-provider-hosted-add-ins)
- [Make batch requests with the REST APIs](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/make-batch-requests-with-the-rest-apis)

##### Videos

- [Office Dev PnP Web Cast – JavaScript performance considerations with SharePoint](https://dev.office.com/blogs/javascript-performance-considerations-with-sharepoint)

##### Samples

- [Caching examples](https://github.com/SharePoint/PnP/tree/master/Samples/Performance.Caching)

### Portals

_**Applies to:** Office 365 | SharePoint Server_

#### Related resources

##### Articles

- [Proven Practices for SharePoint Online Portals - Performance](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/portal-performance)
- [Proven Practices for SharePoint Online Portals - Navigation Solutions](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/portal-navigation)
- [JavaScript Patterns and Performance](https://docs.microsoft.com/en-us/sharepoint/dev/solution-guidance/javascript-patterns-and-performance)
- [Optimize page performance in SharePoint](https://docs.microsoft.com/en-us/sharepoint/dev/general-development/optimize-page-performance-in-sharepoint)

##### Videos

- [Learn how to build a fast, responsive SharePoint portal in SharePoint Online](https://www.youtube.com/watch?v=tD3mkbfhIbM)