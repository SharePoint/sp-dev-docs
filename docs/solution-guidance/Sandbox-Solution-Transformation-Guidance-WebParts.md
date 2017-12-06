---
title: Sandbox solution transformation guidance - Web Parts
ms.date: 11/03/2017
---
# Sandbox solution transformation guidance - Web Parts
Transform or convert your code-based sandbox solutions to the SharePoint add-in model. Learn about the options and strategies of converting existing functionality to SharePoint add-in model or alternative solutions.

_**Applies to:** Add-ins for SharePoint | SharePoint 2013 | SharePoint 2016 | SharePoint Online_


## Summary

One of the reasons many developers have leveraged code-based sandbox solutions is a desire to utilize visual web parts. This provides a great way to separate code from layout as well as
utilize the ASP.net controls. You can of course continue to use visual web parts in a provider hosted add-in via client web parts. This is a great approach and provides a direct migration path for many applications.

Another method is to re-write the web part as a client side solution. This will involve redesigning the solution to use JavaScript, HTML fragments, and one or more supporting frameworks. While this is net-new work, it has the added benefit of setting up your solution to easily integrate into the upcoming SharePoint Framework. This is a great choice for simple display or data entry web parts and can scale up to full page client applications.


## Options for replacing Web Parts
<a name="sectionSection2"> </a>

|**Approach**|**Additional Information**|
|:-----|:-----|
|Provider Hosted Add-In Client Webpart|<ul><li>[Get started creating provider-hosted SharePoint Add-ins](https://msdn.microsoft.com/en-us/library/office/fp142381.aspx)</li><li>[Create add-in parts to install with your SharePoint Add-in](https://msdn.microsoft.com/en-us/library/a2664289-6c56-4cb1-987a-22367fad55eb)</li><li>[Client Web Part Definition Schema](https://msdn.microsoft.com/en-us/library/office/dn481208.aspx)</li><li>[Set up an on-premises development environment for SharePoint Add-ins](https://msdn.microsoft.com/en-us/library/office/fp179923.aspx)</li></ul>|
|Client Side Solution|<ul><li>[Simple React Form Sample](https://github.com/SharePoint/PnP/tree/dev/Samples/SharePoint.React.SupportTicket)</li><li>[JavaScript Embedding Samples](https://github.com/SharePoint/PnP/tree/master/Samples/Core.JavaScript) [*](#actionsupportnote)</li><li>[Patterns and Practices JS Core](https://github.com/SharePoint/PnP-JS-Core/)</li></ul>|


## Design Considerations

### Provider Hosted Add-In

<ul>
<li>Requires hosting infrastructure</li>
<li>Hosting infrastructure must be highly available</li>
<li>Client part is displayed in an iframe limiting communication with the rest of the page</li>
<li>Must use remote APIs either via CSOM or REST</li>
</ul>

### Client Side Solution

<ul>
<li>
<a name="actionsupportnote"></a>
Please note that the ability to embed JavaScript in the prescribed way (through a UserCustomAction) does not work currently outside of the classic experience. For these cases you can link to the files using a script editor web part.</li>
<li>Cannot elevate permissions, instead use a micro-service with add-in only permissions</li>
<li>Limited by permissions of current user</li>
</ul>


## Removing your sandbox code from your site
<a name="sectionSection3"> </a>
When you deactivate your existing sandbox solution from your sites, any assets or files deployed using declarative options will not be removed however, the features in the sandbox solution will automatically be deactivated and the event receiver will be removed.


## See also
<a name="bk_addresources"> </a>
-  [Removing Code-Based Sandbox Solutions in SharePoint Online](http://dev.office.com/blogs/removing-code-based-sandbox-solutions-in-sharepoint-online)
-  [Sandbox solution transformation guidance](https://msdn.microsoft.com/en-us/pnp_articles/sandbox-solution-transformation-guidance)
-  [Remove assembly reference from your Sandbox solution created in Visual Studio](https://support.microsoft.com/en-us/kb/3183084)
-  [Build add-ins for SharePoint](https://msdn.microsoft.com/library/office/fp179930.aspx)
-  [Office 365 development and SharePoint patterns and practices solution guidance](https://msdn.microsoft.com/en-us/pnp_articles/office-365-development-patterns-and-practices-solution-guidance)
