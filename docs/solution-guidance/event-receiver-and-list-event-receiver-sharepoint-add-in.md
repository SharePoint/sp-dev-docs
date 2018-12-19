---
title: Event receivers and list event receivers in the SharePoint Add-in model
ms.date: 11/03/2017
---
Event receivers and list event receivers in the SharePoint Add-in model
=======================================================================

Summary
-------

The approach you take to handle events in SharePoint is different in the new SharePoint Add-in model than it was with Full Trust Code.  
In a typical Full Trust Code (FTC) / Farm Solution scenario, Event Receivers and List Event Receivers were created with the SharePoint 
Server Side Object Model code and deployed via Solutions.  In this scenario, the event receiver code runs on the SharePoint server.

In an SharePoint Add-in model scenario, event receivers are created outside of SharePoint inside a web service and registered with SharePoint.  
These are called as *Remote Event Recivers (RER)*. In this scenario, the event receiver code runs on the web server where the web service is hosted.

>**Important**
>As of January 2017 SharePoint Online does support list webhooks which you can use instead of "-ed" remote event receivers. Checkout [Overview of SharePoint webhooks](https://dev.office.com/sharepoint/docs/apis/webhooks/overview-sharepoint-webhooks) to learn more about webhooks. Also note that several webhook samples are available from the [sp-dev-samples](https://github.com/SharePoint/sp-dev-samples/tree/master/Samples) GitHub repository.

High-Level Guidelines
---------------------

As a rule of a thumb, we would like to provide the following high-level guidelines for creating event receivers.

- The service end point that implements a event receiver must be accessible by anonymous users.
- Event receivers added to the Add-in web allow you to return an access token.
- Event receivers added to the host web will return access token, if they are applied from app context using app access token and operation in the host web is end user driven (ItemAdded etc.)
- AppInstalled event must complete within 30 seconds or SharePoint will think it has failed. SharePoint will rerun the event 3 times and after fourth execution SharePoint will consider add-in installation to be failed
- Normal events like ItemAdded have also timeout of 30 seconds, but there's no retry mechanism
- Event receivers added to host web without app context, for example with SharePointOnlineCredentials or other means, will not return access token and you'll have to access the host web with app-only access token
- Adding event receivers to the host web is supported.
	+ It is only possible to do this via CSOM/REST APIs, not by using Visual Studio wizards.
- SharePoint will absolutely call the event receiver end points configured for a given event.  However, there is no guarantee that the code in the event receiver end points will execute because the code is not running on the SharePoint server.
	
	For example:
	
	If the event receiver end point URL is unavailable the event receiver code will not execute.  The URL might be unavailable due to several reasons.  Some of the most common reasons include a misconfiguration when the end point URL is registered, DNS issues when trying to resolve the URL, or the website hosting the end point is shut down or in an inoperable state.

	Additionally, if there is a bug in poorly written event receiver code there is no way to notify SharePoint the bug occurred and the event should be executed again.  You can work around this to some degree with event receivers attached to SharePoint lists.  See below for more information about this approach.  
- When an event receiver executes a significant amount of code an asynchronous pattern should be used.
	+ See the following MSDN blog post for more information about this pattern. [Using Azure storage queues and WebJobs for async actions in Office 365 (MSDN Blog Post)](http://blogs.msdn.com/b/vesku/archive/2015/03/02/using-azure-storage-queues-and-webjobs-for-async-actions-in-office-365.aspx)
	+ See the following MSDN article for more information about timeouts in event receivers.  (Search for timeout in the article.)  [Handle events in add-ins for SharePoint (MSDN Article)](https://msdn.microsoft.com/en-us/library/office/jj220048.aspx)
- When event receivers operate on SharePoint lists we recommend using a specific change tracking mechanism along with the event receiver to ensure higher quality processing.
	+ See the following O365 PnP Code Sample for more information about this pattern and how to implement it.  [Core.ListItemChangeMonitor (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.ListItemChangeMonitor)


Debugging Event Receivers
-------------------------
To debug event receivers you need to configure a few different things in Azure and Visual Studio.  The following articles provide step by step instructions and more information related to debugging. 
- [Debug and troubleshoot a remote event receiver in an add-in for SharePoint MSDN Blog Post)](https://msdn.microsoft.com/en-us/library/office/dn275975.aspx) 
- [Debugging Remote Event Receivers with Visual Studio (MSDN Blog Post)](http://blogs.msdn.com/b/officeapps/archive/2013/01/03/debugging-remote-event-receivers-with-visual-studio.aspx)
- [Update to debugging SharePoint 2013 remote events using Visual Studio 2012 (MSDN Blog Post)](http://blogs.msdn.com/b/officeapps/archive/2013/03/21/update-to-debugging-sharepoint-2013-remote-events-using-visual-studio-2012.aspx)
- [Creating and Debugging Remote Event Receiver “Installer Apps” in SharePoint Online (Scott Hillier)](http://www.itunity.com/article/create-debug-remote-event-receiver-installer-apps-sharepoint-online-775)

More Examples
-------------
- [Core.EventReceivers (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.EventReceivers)
	+ This sample hows how a SharePoint Add-in can use the App Installed event to perform additional work in the host web, such as attaching event receivers to lists in the host web.
	+ See the following MSDN blog post for more information about this pattern. [Attaching Remote Event Receivers to Lists in the Host Web (MSDN Blog Post)](http://blogs.msdn.com/b/kaevans/archive/2014/02/26/attaching-remote-event-receivers-to-lists-in-the-host-web.aspx)
- [Core.AppEvents.HandlerDelegation (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.AppEvents.HandlerDelegation)
	+ This sample shows how to implement handlers for the AppInstalled and AppUninstalling events that:
		1. Incorporate rollback logic if the handler encounters an error.
		2. Incorporate "already done" logic to accommodate the fact that SharePoint retries the handler up to three more times if it fails or takes more than 30 seconds to complete.
		3. Use the handler delegation strategy to minimize calls from the handler web service to SharePoint.
		4. Use the CSOM classes ExceptionHandlingScope and ConditionalScope.
- [Core.AppEvents (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.AppEvents)
	+ This sample shows how to implement handlers for the AppInstalled and AppUninstalling events that:
		1. Incorporate rollback logic if the handler encounters an error.
		2. Incorporate "already done" logic to accommodate the fact that SharePoint retries the handler up to three more times if it fails or takes more than 30 seconds to complete.

Related links
=============
- [Remote event receivers in SharePoint 2013 FAQ (MSDN Article)](https://msdn.microsoft.com/EN-US/library/office/dn456315.aspx)
- [Create a remote event receiver in add-ins for SharePoint (MSDN Article)](https://msdn.microsoft.com/EN-US/library/office/jj220043.aspx)
- [Create an app event receiver in SharePoint 2013 (MSDN Article)](https://msdn.microsoft.com/EN-US/library/office/jj220052.aspx)
- Guidance articles at [http://aka.ms/OfficeDevPnPGuidance](http://aka.ms/OfficeDevPnPGuidance "Guidance Articles")
- References in MSDN at [http://aka.ms/OfficeDevPnPMSDN](http://aka.ms/OfficeDevPnPMSDN "References in MSDN")
- Videos at [http://aka.ms/OfficeDevPnPVideos](http://aka.ms/OfficeDevPnPVideos "Videos")

Related PnP samples
===================

- [Core.ListItemChangeMonitor (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.ListItemChangeMonitor)
- [Core.EventReceivers (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.EventReceivers)
- [Core.AppEvents.HandlerDelegation (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.AppEvents.HandlerDelegation)
- [Core.AppEvents (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.AppEvents)
- Samples and content at https://github.com/SharePoint/PnP

Applies to
==========
- Office 365 Multi Tenant (MT)
- Office 365 Dedicated (D) 
- SharePoint 2013 on-premises
