---
title: Transform classic pages to modern pages
description: Explains how to transform classic wiki and web part pages into modern pages
ms.date: 01/16/2020
ms.prod: sharepoint
localization_priority: Priority
---

# Transform classic pages to modern pages

Classic SharePoint sites typically have classic pages being wiki pages, web part pages, blog pages or publishing pages and these pages cannot present themselves using a modern user interface. A classic site however can host modern pages which enable great end user experiences. You can find inspiration via the [SharePoint Look Book](https://sharepointlookbook.azurewebsites.net/) as it allows you to discover the modern experiences you can build with SharePoint in Office 365.

The SharePoint PnP Modernization framework ([Nuget](https://www.nuget.org/packages/SharePointPnPModernizationOnline), [source code](https://github.com/SharePoint/sp-dev-modernization/tree/master/Tools/SharePoint.Modernization/SharePointPnP.Modernization.Framework)) does bring page transformation capabilities which will be explained in the upcoming chapters.

> [!IMPORTANT]
> - Page transformation today works for wiki pages, web part pages, (Delve) blog pages and publishing pages.
> - The SharePoint PnP Modernization framework is continuously evolving, checkout [the release notes](https://github.com/SharePoint/sp-dev-modernization/tree/master/Tools/SharePoint.Modernization/Modernization%20Framework%20release%20notes.md) to stay up to date on the latest changes. If you encounter problems please file an issue in the [sp-dev-modernization GitHub issue list](https://github.com/SharePoint/sp-dev-modernization/issues).

> [!IMPORTANT]
> Modernization tooling and all other PnP components are open-source tools backed by an active community providing support for them. There is no SLA for open-source tool support from official Microsoft support channels.

Page transformation can be used in one or more of the below models:

Model | Technique | Audience | Publishing Page support | Comments
------|---------- |----------|-------------------------|---------
I want to transform pages for my users | [PowerShell](modernize-userinterface-site-pages-powershell.md) | DevOps | Yes | Typically used when you want to modernize pages for multiple site collections. Using [PowerShell](modernize-userinterface-site-pages-powershell.md) is the **easiest and recommended** approach.
I want to have full control on the page transformation process | [.Net](modernize-userinterface-site-pages-dotnet.md) | DevOps | Yes | Typically used when you integrate page transformation into existing services or tools. The core of page transformation is the .Net based SharePoint PnP Modernization framework. Using .Net you can fully tailor the transformation process, this approach is recommended whenever you want full control on the transformation process or when you want to integrate page transformation into another solution/product.

Page transformation supports a wide range of SharePoint versions and page types as source, **all of these result in modern pages in SharePoint Online** as a result. Below table shows the possible page types versus pages sources that can be transformed to modern pages using the latest page transformation release.

Page Type | SharePoint 2010 | SharePoint 2013 | SharePoint 2016 | SharePoint 2019 | SharePoint Online
----------|-----------------|-----------------|-----------------|-----------------|------------------
Wiki page | x | x | x | x | x
Webpart page | x | x | x | x | x
Blog page | x (as of the November 2019 release) | x | x | x | x
Delve Blog page |   |   |   |   | x (as of the December 2019 release)
Publishing page | x | x | x | x | x

## See also

- [Modernize your classic SharePoint sites](modernize-classic-sites.md)
- [Using SharePoint Page Transformation from PowerShell](modernize-userinterface-site-pages-powershell.md)
- [Using SharePoint Page Transformation from .Net](modernize-userinterface-site-pages-dotnet.md)
- [Understanding and configuring the page transformation model](modernize-userinterface-site-pages-model.md)
- [SharePoint Look Book](https://sharepointlookbook.azurewebsites.net/)
- [Classic and modern web part experiences](https://support.office.com/article/classic-and-modern-web-part-experiences-3fdae6c3-8fc1-49ab-8708-8c104b882e64)
