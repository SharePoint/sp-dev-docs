---
title: User controls and Web controls in the SharePoint Add-in model
ms.date: 11/03/2017
localization_priority: Normal
---
User controls and Web controls in the SharePoint Add-in model
=============================================================

Summary
-------

The approach you take to implement custom controls in your code is different in the new SharePoint Add-in model than it was with Full Trust Code. In a typical Full Trust Code (FTC) / Farm Solution scenario, custom controls were built as user controls or web controls and deployed via SharePoint Solutions.

In a SharePoint Add-in model scenario, the JavaScript is embedded in SharePoint pages to implement custom controls.

High-level Guidelines
---------------------

As a rule of a thumb, we would like to provide the following high-level guidelines for creating custom controls in the new SharePoint Add-in model.

- Use embedded JavaScript to create custom controls.
- Use the SharePoint ECMA Client Side Object Model (CSOM), and/or the SharePoint/Office 365 REST APIs to interact with SharePoint data and services.

Options to embed JavaScript in SharePoint pages
-----------------------------------------------
You have a few options to embed JavaScript in SharePoint pages.

- Use custom user actions
- Embed JavaScript directly into page layouts
- Embed JavaScript directly into custom master pages (not recommended)

Use custom user actions
-----------------------
In this pattern, custom user actions are used to embed JavaScript into a page at run time.

- This approach is absolutely supported and is a valid approach.

**When is it a good fit?**

When you need to embed JavaScript into all of your SharePoint pages, this option is a good fit.

**Getting started**

The following article and accompanying video demonstrates how to use custom user actions to embed JavaScript into SharePoint pages.

- [Core.EmbedJavaScript (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.EmbedJavaScript)
- [OD4B.NavLinksInjection (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/OD4B.NavLinksInjection)
- [Cross site collection navigation (O365 PnP Video)](http://channel9.msdn.com/blogs/OfficeDevPnP/Cross-site-collection-navigation)

Embed JavaScript directly into page layouts
-------------------------------------------

In this pattern, JavaScript is embedded directly in page layouts in publishing sites.  

- This approach is absolutely supported and is a valid approach.
- This approach works with publishing sites.

**When is it a good fit?**

When you need to embed JavaScript into specific SharePoint page layouts in publishing sites in a WCM scenario, this option is a good fit.

Embed JavaScript directly into custom master pages
--------------------------------------------------

In this pattern, JavaScript is embedded directly in custom master pages.  

- This approach is not recommended.
- This approach is a valid approach.
- You can embed JavaScript directly in custom master pages, but keep in mind this will cause you additional long-term costs and challenges with future updates.
	+ If you chose to use custom master pages, be prepared to apply changes to the custom master pages when major functional updates are applied to Office 365.

**When is it a good fit?**

When you need to embed JavaScript on a per master page basis, this is a good option because it allows you to control which master pages the JavaScript is embedded in.

Related links
=============
- [Cross site collection navigation (O365 PnP Video)](http://channel9.msdn.com/blogs/OfficeDevPnP/Cross-site-collection-navigation)
- Guidance articles at [http://aka.ms/OfficeDevPnPGuidance](http://aka.ms/OfficeDevPnPGuidance "Guidance Articles")
- References in MSDN at [http://aka.ms/OfficeDevPnPMSDN](http://aka.ms/OfficeDevPnPMSDN "References in MSDN")
- Videos at [http://aka.ms/OfficeDevPnPVideos](http://aka.ms/OfficeDevPnPVideos "Videos")

Related PnP samples
===================
- [Core.EmbedJavaScript (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.EmbedJavaScript)
- [OD4B.NavLinksInjection (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/OD4B.NavLinksInjection)
- [Core.EmbedJavaScript.WeekNumbers (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.EmbedJavaScript.WeekNumbers)
- [Core.EmbedJavaScriptJSOM (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.EmbedJavaScriptJSOM)
- [Core.JavaScriptCustomization (O365 PnP Scenario using PnP Core component)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.JavaScriptCustomization)
- Samples and content at [http://aka.ms/OfficeDevPnP](http://aka.ms/OfficeDevPnP)

Applies to
==========
- Office 365 Multi Tenant (MT)
- Office 365 Dedicated (D)
- SharePoint 2013 on-premises
