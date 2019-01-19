---
title: Modernize classic publishing portals
description: Modernize your classic publishing portals
ms.date: 10/08/2018
ms.prod: sharepoint
localization_priority: Normal
---

# Modernize classic publishing portals

A classic publishing portal uses publishing functionalities like page layouts, custom branding, page approvals, audience targeting and many more. For most classic publishing portal functionalities there's a modern equivalent enabling you to build a similar modern publishing portal. This modern publishing portal will then take advantage of all the modern capabilities like beautiful pages that work on any device, flexible page approval using Microsoft Flow etc as described in the [Guide to to Modern experience in SharePoint](https://docs.microsoft.com/en-us/sharepoint/guide-to-sharepoint-modern-experience).

Before modernizing your classic publishing portals it's useful to understand which publishing features are used and for that you can use the [SharePoint Modernization scanner](https://aka.ms/sppnp-modernizationscanner). Using this scanner you can scan your complete tenant or a subset of site collections for their readiness in three categories: "Office 365 Group connection", "Page transformation" and "Publishing Portal Modernization". You can have the scanner collect all three categories but you can also scope the scan to only get the "Publishing Portal Modernization" information by using the `-m PublishingOnly` option. The result of the scan will be an Excel based dashboard which will allow you to analyze the publishing feature usage of all your portals.

![publishing portal dashboard](media/modernize/publishingscanner_1.png)

## See also

- [Guide to to Modern experience in SharePoint](https://docs.microsoft.com/en-us/sharepoint/guide-to-sharepoint-modern-experience)
- [SharePoint Modernization scanner](https://aka.ms/sppnp-modernizationscanner)
