---
title: Handle SharePoint Online throttling by using exponential back off
ms.date: 11/03/2017
localization_priority: Priority
---
# Handle SharePoint Online throttling by using exponential back off

Learn how to handle throttling in SharePoint Online by using the exponential back-off technique. 
    
_**Applies to:** Office 365 | SharePoint Online | SharePoint Server 2013_

SharePoint Online uses throttling to prevent users from over-consuming resources. When a user runs CSOM or REST code that exceeds usage limits, SharePoint Online throttles any further request from the user for a period of time. 
    
The [Core.Throttling](https://github.com/SharePoint/PnP/tree/master/Samples/Core.Throttling) code sample in the [Office 365 Developer Patterns and Practices repository](https://github.com/SharePoint/PnP) shows how to implement the exponential back off technique to handle throttling in SharePoint Online. When you get throttled in SharePoint Online, the exponential back off technique waits progressively longer periods of time before retrying the code that was throttled.
    
For more information about throttling in SharePoint Online (for example, causes, limits, and so on), and an explanation of the Core.Throttling code sample, see [How to: Avoid getting throttled or blocked in SharePoint Online](https://msdn.microsoft.com/library/office/dn889829.aspx). 

Also, in the [ClientContextExtensions.cs](https://github.com/SharePoint/PnP/blob/dev/Samples/Core.Throttling/Core.Throttling/ClientContextExtensions.cs) sample, check out the ExecuteQueryImplementation extension method. ExecuteQueryImplementation is included in [OfficeDevPnP.Core](https://github.com/SharePoint/PnP-Sites-Core/tree/master/Core/OfficeDevPnP.Core).    

## See also
<a name="bk_addresources"> </a>

-  [Solution guidance](Office-365-development-patterns-and-practices-solution-guidance.md)
    
-  [ClientContextExtensions.cs sample](https://github.com/SharePoint/PnP/blob/dev/Samples/Core.Throttling/Core.Throttling/ClientContextExtensions.cs)
    
-  [How to: Avoid getting throttled or blocked in SharePoint Online](https://msdn.microsoft.com/library/office/dn889829.aspx)
