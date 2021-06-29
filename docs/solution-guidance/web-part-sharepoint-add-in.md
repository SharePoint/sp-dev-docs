---
title: Web part in the SharePoint Add-in model
description: The approach you take to create portable page components is different in the new SharePoint Add-in model than it was with Full Trust Code.
ms.date: 05/20/2020
localization_priority: Normal
---
# Web part in the SharePoint Add-in model

The approach you take to create portable page components is different in the new SharePoint Add-in model than it was with Full Trust Code.  In a typical Full Trust Code (FTC) / Farm Solution scenario, web parts were created to implement portable page components.

In an SharePoint Add-in model scenario, Add-in Parts (App Parts) are created to implement portable page components.  Add-in parts use client side code.

## High Level Guidelines

As a rule of a thumb, we would like to provide the following high level guidelines regarding Add-in Parts.

- You cannot run server side code in Add-in Parts.
- You cannot create custom editor parts for Add-in Parts.
- Use the Add-in Script Part to link to JavaScript that is used to interact with SharePoint and other services and create a user interface.
- By default, custom properties you add to editor parts are always shown as the final group in an editor part.
  - You can use JavaScript to override the look and feel of an editor part for an Add-in Part.
  - See the following sample that demonstrates how this is done.
  - [Core.AppPartPropertyUIOverride (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.AppPartPropertyUIOverride)

### Getting Started

Add-in Parts may be easily created by using the out-of-the-box Add-in Script Part.  This allows you to provide a link to a JavaScript file hosted anywhere.  The JavaScript file uses client side code to interact with SharePoint or other services and render a user interface.

The following article describes the Add-in Script Part pattern and how to use it.

- [Introducing app script part pattern for Office365 app model (MSDN Blog Article)](https://blogs.msdn.com/b/vesku/archive/2014/07/08/introducing-app-script-part-pattern-for-office365-app-model.aspx)

The following sample demonstrates how to use an Add-in Script Part to integrate with Yammer, Bing Maps, and Google Maps.

- [Core.AppScriptPart (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.AppScriptPart)

The following video walks you through the code sample.

- [Core.AppScriptPart (O365 PnP Video)](https://channel9.msdn.com/Blogs/Office-365-Dev/App-Script-Parts-in-SharePoint-Office-365-Developer-Patterns-and-Practices)

## Related links

- [Introducing app script part pattern for Office365 app model (MSDN Blog Article)](https://blogs.msdn.com/b/vesku/archive/2014/07/08/introducing-app-script-part-pattern-for-office365-app-model.aspx)
- [Core.AppScriptPart (O365 PnP Video)](https://channel9.msdn.com/Blogs/Office-365-Dev/App-Script-Parts-in-SharePoint-Office-365-Developer-Patterns-and-Practices)
- Guidance articles at [https://aka.ms/OfficeDevPnPGuidance](https://aka.ms/OfficeDevPnPGuidance "Guidance Articles")
- References in MSDN at [https://aka.ms/OfficeDevPnPMSDN](https://aka.ms/OfficeDevPnPMSDN "References in MSDN")
- Videos at [https://aka.ms/OfficeDevPnPVideos](https://aka.ms/OfficeDevPnPVideos "Videos")

## PnP samples

- [Core.AppPartPropertyUIOverride (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.AppPartPropertyUIOverride)
- [Core.AppScriptPart (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Core.AppScriptPart)
- Samples and content at [Microsoft 365 Patterns and Practices (PnP)](https://aka.ms/sppnp)

## Applies to

- Office 365 Multi Tenant (MT)
- Office 365 Dedicated (D)
- SharePoint 2013 on-premises
