---
title: Delegate controls in the SharePoint add-in model
ms.date: 11/03/2017
---
Delegate controls in the SharePoint add-in model
================================================

Summary
-------

The approach you take to implement delegate controls in your code is different in the new SharePoint Add-in model than it was with Full Trust Code.  In a typical Full Trust Code (FTC) / Farm Solution scenario, delegate controls were built as user controls or web controls, registered with features, and deployed via SharePoint Solutions.

In an SharePoint Add-in model scenario, JavaScript is embedded in SharePoint pages to implement the same functionality as delegate controls.

High Level Guidelines
---------------------

As a rule of a thumb, we would like to provide the following high level guidelines for creating delegate controls in the new SharePoint Add-in model.

- There is no direct delegate control replacement in the SharePoint Add-in model.
- Use embedded JavaScript to implement the same functionality as delegate controls from an end-user's perspective.
- Use the SharePoint JavaScript Client Side Object Model (JSOM), and/or the SharePoint/Office365 REST APIs to interact with SharePoint data and services.

See the [User controls and web controls (SharePoint Add-in Model Recipe)](user-controls-and-web-controls-sharepoint-add-in.md) to learn how to embed JavaScript to all SharePoint pages with custom user actions and how to embed JavaScript directly into page layouts and master pages.

Related links
=============
- [Cross site collection navigation (O365 PnP Video)](http://channel9.msdn.com/blogs/OfficeDevPnP/Cross-site-collection-navigation)
- Guidance articles at [http://aka.ms/OfficeDevPnPGuidance](http://aka.ms/OfficeDevPnPGuidance "Guidance Articles")
- References in MSDN at [http://aka.ms/OfficeDevPnPMSDN](http://aka.ms/OfficeDevPnPMSDN "References in MSDN")
- Videos at [http://aka.ms/OfficeDevPnPVideos](http://aka.ms/OfficeDevPnPVideos "Videos")

Related PnP samples
===================
- [OD4B.NavLinksInjection (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/OD4B.NavLinksInjection)
- Samples and content at [http://aka.ms/OfficeDevPnP](http://aka.ms/OfficeDevPnP)

Applies to
==========
- Office 365 Multi Tenant (MT)
- Office 365 Dedicated (D)
- SharePoint 2013 on-premises
