---
title: Variations in the SharePoint Add-in model
ms.date: 11/03/2017
localization_priority: Normal
---
Variations in the SharePoint Add-in model
=========================================

Summary
-------

The approach you take to configure variations is different in the new SharePoint Add-in model than it was with Full Trust Code. In a typical Full Trust Code (FTC) / Farm Solution scenario, the SharePoint Server-side Object Model (Microsoft.SharePoint.Publishing.Variations) was used to configure variations, and features that executed the code were deployed via SharePoint Solutions.

In an SharePoint Add-in model scenario, you use the SharePoint Client-side Object Model (CSOM) or REST API to configure variations. This pattern is commonly referred to as the *remote provisioning pattern*.

High-level guidelines
---------------------

As a rule of a thumb, we would like to provide the following high-level guidelines to configure variations in the new SharePoint Add-in model.

- Use the SharePoint Client-side Object Model (CSOM) API to configure variations whenever possible.
	- .Net Client side object model [Variations class (MSDN API Documentation)](https://msdn.microsoft.com/library/office/microsoft.sharepoint.client.publishing.variations.aspx)
	- JavaScript Client side object model [Variations class (MSDN API Documentation)](https://msdn.microsoft.com/library/office/jj994778.aspx)
- Not all variation configuration settings are currently available via the SharePoint CSOM API Variations classes listed above.
- You can go beyond what the CSOM API Variations classes listed above provide and configure some variations settings.  To do this, you set the values for variations settings stored in site property bags and/or modify list items in the lists associated with variations.
	+ The [VariationsExtensions.cs class (O365 PnP Sample)](https://github.com/SharePoint/PnP-Sites-Core/tree/master/Core/OfficeDevPnP.Core/Extensions/VariationExtensions.cs) contains several examples that modify property bag and list item values to configure variations settings.
	+ The [VariationsExtensions.cs class (O365 PnP Sample)](https://github.com/SharePoint/PnP-Sites-Core/blob/master/Core/OfficeDevPnP.Core/Extensions/VariationExtensions.cs) illustrates how to configure ***all of the settings*** that you can set in the variations settings page.
	+ The [Choose the languages you want to make available for a site’s user interface (O365 Support Article)](https://support.office.com/article/choose-the-languages-you-want-to-make-available-for-a-site-s-user-interface-16d3a83c-05ab-4b50-8fbb-ff576a3351e8) addresses some of the multilingual capabilities of Office 365.

Related links
=============

- Guidance articles at [https://aka.ms/OfficeDevPnPGuidance](https://aka.ms/OfficeDevPnPGuidance "Guidance Articles")
- References in MSDN at [https://aka.ms/OfficeDevPnPMSDN](https://aka.ms/OfficeDevPnPMSDN "References in MSDN")
- Videos at [https://aka.ms/OfficeDevPnPVideos](https://aka.ms/OfficeDevPnPVideos "Videos")

Related PnP samples
===================

- [VariationsExtensions.cs class (O365 PnP Sample)](https://github.com/SharePoint/PnP-Sites-Core/blob/master/Core/OfficeDevPnP.Core/Extensions/VariationExtensions.cs)
- Samples and content at [https://aka.ms/OfficeDevPnP](https://aka.ms/OfficeDevPnP)

Applies to
==========
- Office 365 Multi Tenant (MT)
- Office 365 Dedicated (D)
- SharePoint 2013 on-premises
