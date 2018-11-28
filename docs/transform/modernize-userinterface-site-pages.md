---
title: Transform classic pages to modern client-side pages
description: Explains how to transform classic wiki and web part pages into modern client side pages
ms.date: 03/23/2018
ms.prod: sharepoint
---

# Transform classic pages to modern client-side pages

Classic SharePoint sites typically have classic pages being wiki pages or web part pages and these pages cannot present themselves using a modern user interface. A classic site however can host modern client side pages and this is the solution here. After you've maximized the use of the modern list and library user interface and connected your site to an Office 365 Group transforming the pages to modern client side pages is the last task to fully transform your classic site into a modern group connected site. Get inspired by the [SharePoint Look Book](https://sharepointlookbook.azurewebsites.net/) as it allows you to discover the modern experiences you can build with SharePoint in Office 365.

The SharePoint PnP Modernization framework ([Nuget](https://www.nuget.org/packages/SharePointPnPModernizationOnline), [source code](https://github.com/SharePoint/PnP-Tools/tree/master/Solutions/SharePoint.Modernization/SharePointPnP.Modernization.Framework)) does bring page transformation capabilities which will be explained in the upcoming chapters.

> [!IMPORTANT]
> - Page transformation today works for wiki and web part pages. Publishing pages is something we're evaluating for a future release.
> - The SharePoint PnP Modernization framework is continuously evolving, checkout [the release notes](https://github.com/SharePoint/PnP-Tools/blob/master/Solutions/SharePoint.Modernization/Modernization%20Framework%20release%20notes.md) to stay up to date on the latest changes. If you encounter problems please file an issue in the [PnP Tools GitHub issue list](https://github.com/SharePoint/PnP-Tools/issues).

To use page transformation for your environment you can use one or more of below described approaches:

Approach | Audience | Description
---------|----------|------------
[SharePoint Page Transformation UI](modernize-userinterface-site-pages-ui.md) | Any SharePoint user | This approach will make it possible for end users to simply click a button to request a modern version of a page. The returned page is a preview and the end user will have the option to keep or discard the generated page.
[PowerShell](modernize-userinterface-site-pages-powershell.md) | DevOps | Use the PowerShell approach to automate the generation of modern pages for a site. Pages generated using this approach can also optionally be generated as preview, allowing the actual site page users to decide on whether they want to keep or discard the pages.
[.Net](modernize-userinterface-site-pages-dotnet.md) | Developer / ISV | The core of page transformation is the .Net based SharePoint PnP Modernization framework. Using .Net you can fully tailor the transformation process, this approach is recommended whenever you want full control on the transformation process or when you want to integrate page transformation into another solution/product.

## See also

- [Modernize your classic SharePoint sites](modernize-classic-sites.md)
- [Using the SharePoint Page Transformation UI](modernize-userinterface-site-pages-ui.md)
- [Using SharePoint Page Transformation from PowerShell](modernize-userinterface-site-pages-powershell.md)
- [Using SharePoint Page Transformation from .Net](modernize-userinterface-site-pages-dotnet.md)
- [Understanding and configuring the page transformation model](modernize-userinterface-site-pages-model.md)
- [SharePoint Look Book](https://sharepointlookbook.azurewebsites.net/)
- [Classic and modern web part experiences](https://support.office.com/en-us/article/classic-and-modern-web-part-experiences-3fdae6c3-8fc1-49ab-8708-8c104b882e64)
