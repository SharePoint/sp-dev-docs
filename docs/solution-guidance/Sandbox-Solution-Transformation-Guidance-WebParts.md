---
title: Replace web parts in sandbox solutions
description: Learn about the options and strategies of converting existing functionality to the SharePoint Add-in model or alternative solutions.
ms.date: 5/7/2018
---

# Replace web parts in sandbox solutions

One of the reasons many developers have leveraged code-based sandbox solutions is a desire to utilize visual web parts. This provides a great way to separate code from layout as well as utilize the ASP.NET controls. You can continue to use visual web parts in a provider-hosted add-in via client web parts. This is a great approach and provides a direct migration path for many applications.

Another option is to rewrite the web part as a client-side solution. This involves redesigning the solution to use JavaScript, HTML fragments, and one or more supporting frameworks. While this is net-new work, it has the added benefit of setting up your solution to easily integrate into the upcoming SharePoint Framework. This is a great choice for simple display or data entry web parts, and can scale up to full-page client applications.

> [!NOTE] 
> [Code-based sandbox solutions were deprecated](https://blogs.msdn.microsoft.com/sharepointdev/2014/01/14/deprecation-of-custom-code-in-sandboxed-solutions/) in 2014, and SharePoint Online has started the process to completely remove this capability. Code-based sandbox solutions are also deprecated in SharePoint 2013 and in SharePoint 2016.

## Options for replacing web parts

|Approach|Design considerations and more information|
|:-----|:-----|
|Provider-hosted add-in client web part|<ul><li>Requires hosting infrastructure.</li><li>Hosting infrastructure must be highly available.</li><li>Client part is displayed in an iframe limiting communication with the rest of the page.</li><li>Must use remote APIs either via CSOM or REST.</li></ul><ul><li>[Get started creating provider-hosted SharePoint Add-ins](../sp-add-ins/get-started-creating-provider-hosted-sharepoint-add-ins.md)</li><li>[Create add-in parts to install with your SharePoint Add-in](../sp-add-ins/create-add-in-parts-to-install-with-your-sharepoint-add-in.md)</li><li>[Client Web Part Definition schema](../schema/client-web-part-definition-schema.md)</li><li>[Set up an on-premises development environment for SharePoint Add-ins](../sp-add-ins/set-up-an-on-premises-development-environment-for-sharepoint-add-ins.md)</li></ul>|
|Client-side solution|<ul><li>The ability to embed JavaScript in the prescribed way (through a UserCustomAction) does not work currently outside of the classic experience. For these cases you can link to the files by using a Script Editor web part.</li><li>Cannot elevate permissions, instead use a micro-service with add-in-only permissions.</li><li>Limited by permissions of current user.</li></ul><ul><li>[Simple React Form Sample](https://github.com/SharePoint/PnP/tree/dev/Samples/SharePoint.React.SupportTicket)</li><li>[JavaScript Embedding Samples](https://github.com/SharePoint/PnP/tree/master/Samples/Core.JavaScript)</li><li>[Patterns and Practices JS Core](https://github.com/SharePoint/PnP-JS-Core/)</li></ul>|


## Removing sandbox code from your site

When you deactivate your existing sandbox solution from your sites, any assets or files deployed by using declarative options are not removed. However, the features in the sandbox solution are automatically deactivated and the event receiver is removed.


## See also

- [Transform sandbox solutions to the SharePoint Add-in model](sandbox-solution-transformation-guidance.md)