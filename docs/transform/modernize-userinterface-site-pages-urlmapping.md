---
title: URL mapping during cross site page transformation
description: Explains how to the default URL mapping works when transforming pages cross site collection + also explains how to use a custom URL mapping file
ms.date: 06/24/2019
ms.prod: sharepoint
localization_priority: Priority
---

# URL mapping during cross site page transformation

When you perform a cross site page transformation then by default URL mapping is used. Cross site page transformation is mandatory when you modernize your publishing pages as you always create the modern pages inside a modern (communication) site. When you do in-place team site modernization there's no reason to map URL's, when doing cross-site URL mapping is applied. URL mapping will automatically replace URL's pointing to "source" locations with similar URL's but then pointing towards "target" locations. There's a default URL mapping component which is active by default (but can be disabled) plus there's an optional custom URL mapping component that can be used.

## Where does URL mapping apply?

URL mapping/rewriting applies to the following locations:

- All content ending up as text parts on the modern page (as of May 2019 release)
- SummaryLinks transformation into either text content or the modern QuickLinks web part (as of May 2019 release)

## Default URL mapping logic

As stated above whenever you a cross site transformation by default URL mapping is applied. The default URL mapping mechanism will map the current web and site full and relative URL's + it will handle the switch from the classic publishing "Pages" library to new modern SitePages library. Below sample shows how the default URL mapping works. Assuming the source site is the following http://contoso.com/sites/portal/hr and the target communication site lives in https://contoso.sharepoint.com/sites/hr then the following URL rewrites are applied:

- http://contoso.com/sites/portal -> https://contoso.sharepoint.com/sites/hr
- http://contoso.com/sites/portal/pages -> https://contoso.sharepoint.com/sites/hr/sitepages
- /sites/portal -> /sites/hr
- /sites/portal/pages -> /sites/hr/sitepages
- http://contoso.com/sites/portal/hr -> https://contoso.sharepoint.com/sites/hr
- http://contoso.com/sites/portal/hr/pages -> https://contoso.sharepoint.com/sites/hr/sitepages
- /sites/portal/hr -> /sites/hr
- /sites/portal/hr/pages -> /sites/hr/sitepages

### Turning off URL mapping

If you don't want URL mapping to happen you can disable it via the `-SkipUrlRewriting` flag in PnP PowerShell or via the `SkipUrlRewrite` attribute of the .Net page transformation configuration objects (`PageTransformationInformation` and `PublishingPageTransformationInformation`).

## Custom URL mapping

If you want to perform additional mappings than the ones handle by the default mapping logic then you need to provide a file listing your custom URL mapping definitions. This is a simple CSV file without header listing the source and target URL values. You can use either a comma (,) or semicolon (;) as delimiter in your CSV file.

```Text
https://contoso.com/intranet,https://contoso.sharepoint.com/sites/intranet
/sites/hr,/sites/myhrportal
```

To use this custom URL mapping file you simply point the page transformation engine to your file. When using PnP PowerShell you can use the `-UrlMappingFile` parameter of the `ConvertTo-ClientSidePage` cmdlet (e.g. `-UrlMappingFile "c:\temp\urlmap.csv"`) or you use the `UrlMappingFile` attribute of the .Net page transformation configuration objects (`PageTransformationInformation` and `PublishingPageTransformationInformation`).

### Custom URL mapping versus default URL mapping

When you use custom URL mapping it's important to understand how it works together with the default URL mapping:

- Custom URL mapping is executed **before** the default URL mapping, which allows you to change the default URL mapping behavior by specifying a custom mapping for the default rewritten urls
- When you disable URL mapping you also disable custom URL mapping

