---
title: Sandbox solution transformation guidance - Event receivers
description: Identify options and strategies for replacing existing event receivers from your sandbox solutions.
ms.date: 5/4/2018
---

# Sandbox solution transformation guidance - Event receivers 

The approach you take to handle events in SharePoint is slightly different in the SharePoint Add-in model than it was with Full Trust Code or in coded-sandbox solutions. In typical previous solutions, event receivers were created using the SharePoint Server-Side Object Model and deployed via solutions packages, which executed the code on the SharePoint servers. 

In the SharePoint Add-in model, however, the event receiver implementation executes on the web server that is hosting the event receiver; these are called remote event receivers (RERs). Event receivers can in many cases be replaced with a remote event receiver implementation. 

This article describes various options and design considerations.

> [!NOTE] 
> [Code-based sandbox solutions were deprecated](https://blogs.msdn.microsoft.com/sharepointdev/2014/01/14/deprecation-of-custom-code-in-sandboxed-solutions/) in 2014, and SharePoint Online has started the process to completely remove this capability. Code-based sandbox solutions are also deprecated in SharePoint 2013 and in SharePoint 2016.

## Options for replacing event receivers

|Approach|More information|
|:-----|:-----|
|Remote event receiver|<ul><li>[Use remote event receivers in SharePoint](use-remote-event-receivers-in-sharepoint.md)</li><li>[How to use remote event receivers for your SharePoint Add-ins](https://channel9.msdn.com/blogs/OfficeDevPnP/How-to-use-remote-event-receivers-for-your-SharePoint-add-ins)</li><li>[Event receivers and list event receivers in the SharePoint Add-in model](event-receiver-and-list-event-receiver-sharepoint-add-in.md)</li><li>[Auto-tagging sample SharePoint Add-in](autotagging-sample-app-for-sharepoint.md)</li><li>[Handle events in SharePoint Add-ins](../sp-add-ins/handle-events-in-sharepoint-add-ins.md)</li></ul>|
|Webhooks|<ul><li>[Overview of SharePoint webhooks](/apis/webhooks/overview-sharepoint-webhooks)</li><li>[Introducing SharePoint Webhooks](https://dev.office.com/blogs/introducing-sharepoint-webhooks)</li></ul>
|Remote timer job to monitor changes|<p>Use the **ChangeQuery** object to monitor a site or list for modifications. This pattern is an alternative to remote event receivers.<ul><li>[SharePoint List Item Change Monitor](https://github.com/SharePoint/PnP/tree/master/Samples/Core.ListItemChangeMonitor)</li><li>[Remote Timer Job Pattern](https://github.com/SharePoint/PnP/tree/master/Samples/Core.SimpleTimerJob)</ul></p>|

## Design considerations

### Remote event receivers

- Require hosting infrastructure.
- Hosting infrastructure must be highly available.
- The service endpoint that hosts the remote event receiver must be configured for anonymous authentication.
- Requires a trusted third-party certificate if you are using SharePoint Online.
- Not intended for long running operations.
- Remote event receivers that are attached outside the context of add-ins, attached by using a console application or PowerShell will not receive a SharePoint context token when invoked, and you must defer to add-in-only permissions or use the SharePointOnlineCredentials class.
- There is no retry mechanism. 

### Webhooks

- Require hosting infrastructure.
- Hosting infrastructure must be highly available.
- Does not support synchronous events.
- Process changes after the event has occurred.
- Not available in SharePoint on-premises builds at this time.

### Remote timer job

- Requires hosting infrastructure.
- Process changes after the event has occurred.
- Uses a polling mechanism to process changes.

## Removing your sandbox code from your site

When you deactivate your existing sandbox solution from your sites, any assets or files deployed by using declarative options are not removed. However, the features in the sandbox solution are automatically deactivated and the event receiver is removed.

## See also

- [Transform sandbox solutions to the SharePoint Add-in model](sandbox-solution-transformation-guidance.md)
