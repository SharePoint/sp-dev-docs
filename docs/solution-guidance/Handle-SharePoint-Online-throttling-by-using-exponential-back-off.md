---
title: Handle SharePoint Online throttling by using exponential back off
description: Learn how to handle throttling in SharePoint Online by using the exponential back-off technique.
ms.date: 01/16/2020
localization_priority: Priority
---

# Handle SharePoint Online throttling by using exponential back off

Learn how to handle throttling in SharePoint Online by using the exponential back-off technique.

_**Applies to:** Office 365 | SharePoint Online | SharePoint Server 2013_

> [!NOTE]
> This page references the **Core.Throttling** sample project from the SharePoint PnP group. While this project does demonstrate the exponential backoff strategy, you should make yourself aware of the `Retry-After` HTTP header that is also returned. This was added to the SharePoint REST API after the **Core.Throttling** project was created.
>
> You can learn more about this HTTP header in the following article: [Avoid getting throttled or blocked in SharePoint Online](../general-development/how-to-avoid-getting-throttled-or-blocked-in-sharepoint-online.md)

SharePoint Online uses throttling to prevent users from over-consuming resources. When a user runs CSOM or REST code that exceeds usage limits, SharePoint Online throttles any further request from the user for a period of time.

The [Core.Throttling](https://github.com/pnp/PnP/tree/master/Samples/Core.Throttling) code sample in the [SharePoint Patterns and Practices](https://github.com/pnp/PnP) organization shows how to implement the exponential back off technique to handle throttling in SharePoint Online. When you get throttled in SharePoint Online, the exponential back off technique waits progressively longer periods of time before retrying the code that was throttled.

For more information about throttling in SharePoint Online (*for example, causes, limits, and so on), and an explanation of the Core.Throttling code sample, see [Avoid getting throttled or blocked in SharePoint Online](../general-development/how-to-avoid-getting-throttled-or-blocked-in-sharepoint-online.md)*).

Also, in the [ClientContextExtensions.cs](https://github.com/pnp/PnP-Sites-Core/blob/master/Core/OfficeDevPnP.Core/Extensions/ClientContextExtensions.cs) sample, check out the `ExecuteQueryImplementation` extension method. `ExecuteQueryImplementation` is included in [OfficeDevPnP.Core](https://github.com/pnp/PnP-Sites-Core/tree/master/Core/OfficeDevPnP.Core).

## See also

- [Solution guidance](Office-365-development-patterns-and-practices-solution-guidance.md)
- [ClientContextExtensions.cs sample](https://github.com/pnp/PnP-Sites-Core/blob/master/Core/OfficeDevPnP.Core/Extensions/ClientContextExtensions.cs)
- [Avoid getting throttled or blocked in SharePoint Online](https://github.com/SharePoint/sp-dev-docs/blob/master/docs/general-development/how-to-avoid-getting-throttled-or-blocked-in-sharepoint-online.md)
