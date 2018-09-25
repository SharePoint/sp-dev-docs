---
title: Options to control the page transformation process
description: Explains how to configure the page transformation process
ms.date: 09/25/2018
ms.prod: sharepoint
---

# Page transformation configuration options

When you use the page transformation framework you do have a lot of control on how the page transformation is done. The model to control this is by specifying the correct configuration as part of the `PageTransformationInformation` instance that you use to launch page transformation. In this article you'll learn more about the available options.

> [!IMPORTANT]
> The SharePoint PnP Modernization framework is continuously evolving, checkout [the release notes](https://github.com/SharePoint/PnP-Tools/blob/master/Solutions/SharePoint.Modernization/Modernization%20Framework%20release%20notes.md) to stay up to date on the latest changes. If you encounter problems please file an issue in the [PnP Tools GitHub issue list](https://github.com/SharePoint/PnP-Tools/issues).

## Overwrite option

Type | Default value if not specified
-----|----
Bool | false

When you configure `Overwrite = true` then the page transformation framework will overwrite the target page if needed. By default the new page name has a prefix of Migrated_, which then implies that if Migrated_YourPage.aspx already exists (typically from a previous page transformation effort) it will be overwritten. Below snippet shows how to use this option.

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    Overwrite = true,
};
```

## TargetPagePrefix option

Type | Default value if not specified
-----|----
String | Migrated_

The new modern page is named as {TargetPagePrefix}{OriginalPageName} (e.g. Migrated_MyPage.aspx). If you want another prefix then use this option.

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    TargetPagePrefix = "New_",
};
```

## TargetPageTakesSourcePageName option

Type | Default value if not specified
-----|----
Bool | false

The default behavior is to give the created modern page a name that starts with the prefix Migrated_ and let the original page keep it's existing name. When this option is specified the newly created page gets the name of the original page and the original page is renamed with a prefix Previous_. Set this option if you're sure you want to move forward with the modern page as it will ensure that all links pointing the original page now result in the new modern page being loaded.

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    TargetPageTakesSourcePageName = true,
};
```

> [!IMPORTANT]
> During the rename of the original page to a page starting with the Previous_ prefix the version history of the original page is not retained.

## SourcePagePrefix option

Type | Default value if not specified
-----|----
String | Previous_

If you've set `TargetPageTakesSourcePageName = true` then the original page gets renamed with a default prefix Previous_. If you want another prefix then use this option.

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    SourcePagePrefix = "New_",
};
```

## ReplaceHomePageWithDefaultHomePage option

Type | Default value if not specified
-----|----
Bool | false

The default behavior is to transform your site's home page to a modern page like any other regular page. If you set this option to true then a site's home page will be transformed to a 'default' out-of-the-box modern home page, so the one you would get with a newly created modern team site.

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    ReplaceHomePageWithDefaultHomePage = true,
};
```

## KeepPageSpecificPermissions option

Type | Default value if not specified
-----|----
Bool | true

The default behavior is to copy over any item level permissions that might exist on the source page, if you don't want this then set this option to false

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    KeepPageSpecificPermissions = false,
};
```

## HandleWikiImagesAndVideos option

Type | Default value if not specified
-----|----
Bool | true

A wiki page can contain embedded video and text which is not possible in a modern text part. By default the wiki text will be split at each embedded image or video, a video or image web part will be added to the modern page and then the remainder of the original text. If you don't like this automatic fixing you can set this option to false which will result in each embedded image and video being replaced by a text placeholder combined with individual video and image web pars at the bottom of the page.

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    HandleWikiImagesAndVideos = false,
};
```

## PageHeader option

Type | Default value if not specified
-----|----
ClientSidePageHeader | Null

The default page header for the modern page is of type `ClientSidePageHeaderType.None` which comes closest to the the wiki page header. However if you prefer a default modern page header (the one wit the large gray zone) you can do that using this option (see below sample as well). You can also configure a custom page header with all it's associated options like background image, alignment etc.

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    PageHeader = new ClientSidePageHeader(cc, ClientSidePageHeaderType.Default, null),
};
```

## PageTitleOverride option

Type | Default value if not specified
-----|----
Func<string, string> | null

The title of the modern page is deducted from the source page by taking the page name and dropping the extension, but you can insert any custom page title in the transformation flow by this callout. The shown example adds a suffix _1 to the default title.

```Csharp
// Local functions
string titleOverride(string title)
{
    return $"{title}_1";
}

PageTransformationInformation pti = new PageTransformationInformation(page)
{
    PageTitleOverride = titleOverride,
};
```

## LayoutTransformatorOverride option

Type | Default value if not specified
-----|----
Func<ClientSidePage, ILayoutTransformator> | null

The page transformation engine has a default layout transformator that can handle all the out of the box wiki and web part page layouts, but if you want to override this one you can specify your own.

```Csharp
public class MyLayout : ILayoutTransformator
{
  private ClientSidePage page;

  public MyLayout(ClientSidePage page)
  {
    this.page = page;
  }

  public void Transform(PageLayout layout)
  {
    // custom layout transformation...add sections to the target page based upon the recieved page layout
    switch (layout)
    {
        case PageLayout.Wiki_OneColumn:
        case PageLayout.WebPart_FullPageVertical:
        case PageLayout.Wiki_Custom:
        case PageLayout.WebPart_Custom:
            {
                page.AddSection(CanvasSectionTemplate.OneColumn, 1);
                return;
            }
        // add more incoming layouts...
        default:
            {
                page.AddSection(CanvasSectionTemplate.OneColumn, 1);
                return;
            }
    }
  }
}

// Local functions
ILayoutTransformator layoutOverride(ClientSidePage cp)
{
    return new MyLayout();
}


PageTransformationInformation pti = new PageTransformationInformation(page)
{
    LayoutTransformatorOverride = layoutOverride,
};
```