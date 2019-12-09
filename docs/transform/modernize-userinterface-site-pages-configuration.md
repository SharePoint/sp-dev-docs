---
title: Options to control the page transformation process
description: Explains how to configure the page transformation process
ms.date: 11/27/2019
ms.prod: sharepoint
localization_priority: Normal
---

# Page transformation configuration options

When you use the page transformation framework you do have a lot of control on how the page transformation is done. The model to control this is by specifying the correct configuration as part of the `PageTransformationInformation` instance for wiki and web part pages or a `PublishingPageTransformationInformation` instance for publishing pages. The created transformation instance is what you use to launch page transformation. In this article you'll learn more about the available options.

> [!IMPORTANT]
> The SharePoint PnP Modernization framework is continuously evolving, checkout [the release notes](https://github.com/SharePoint/sp-dev-modernization/tree/master/Tools/SharePoint.Modernization/Modernization%20Framework%20release%20notes.md) to stay up to date on the latest changes. If you encounter problems please file an issue in the [sp-dev-modernization GitHub issue list](https://github.com/SharePoint/sp-dev-modernization/issues).

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

```Csharp
PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
{
    Overwrite = true,
};
```

## SourcePage option

Type | Default value if not specified
-----|----
ListItem | null

Typically set via the constructor as shown in below sample. This indicates the page to modernized when the page lives in a list

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    Overwrite = true,
};
```

```Csharp
PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
{
    Overwrite = true,
};
```

## SourceFile option (as of June 2019 release)

Type | Default value if not specified
-----|----
File | null

Used to define a page to be modernized when the page lives outside of a list, so in the root folder of the site. These pages can only be web part pages.

```Csharp
var fileToModernize = cc.Web.GetFileByServerRelativeUrl("/sites/myspecialsite/default.aspx");
cc.Load(fileToModernize);
cc.ExecuteQueryRetry();

PageTransformationInformation pti = new PageTransformationInformation(null)
{
    SourceFile = true,
};
```

## AddPageAcceptBanner option

Type | Default value if not specified
-----|----
Bool | false

Setting this option will make the page transformation framework put the configured PageAcceptBanner web part on top of the created modern page. Using this web part the users accessing the page can decide whether they want to keep or discard the created modern page. See the [Page Transformation UI](modernize-userinterface-site-pages-ui.md) article to learn more on how to install and configure the default page banner web part.

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    // Modernization center setup
    ModernizationCenterInformation = new ModernizationCenterInformation()
    {
        AddPageAcceptBanner = true,
    },
};
```

> [!NOTE]
> This option is not available for publishing page transformation.

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

> [!NOTE]
> This option is not available for publishing page transformation.

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


> [!NOTE]
> This option is not available for publishing page transformation.

## SourcePagePrefix option

Type | Default value if not specified
-----|----
String | Previous_

If you've set `TargetPageTakesSourcePageName = true` then the original page gets renamed with a default prefix Previous_. If you want another prefix then use this option.

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    SourcePagePrefix = "Old_",
};
```

> [!NOTE]
> This option is not available for publishing page transformation.

## TargetPageName option

Type | Default value if not specified
-----|----
String | empty

You can optionally override the page name of the target page. By default the page transformation engine will generate one, but sometimes it's needed to override (e.g. default.aspx will collide with the default.aspx view page of the SitePages library).

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    TargetPageName = "mypage.aspx",
};
```

```Csharp
PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
{
    TargetPageName = "mypage.aspx",
};
```

## TargetPageFolder option (as of November 2019 release)

Type | Default value if not specified
-----|----
String | empty

You can optionally specify the folder in which the target page will be created. Note that if a folder was created automatically (e.g. because you were transforming from an extra wiki page library) then the folder specified by this parameter will be combined with the auto-generated folder. You can specify a folder like this: `MyFolder` or `MyFolder/SubFolder` when you want to create a nested folder structure.

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    TargetPageFolder = "MyFolder",
};
```

```Csharp
PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
{
    TargetPageFolder = "MyFolder",
};
```

## TargetPageFolderOverridesDefaultFolder option (as of December 2019 release)

Type | Default value if not specified
-----|----
Bool | false

You can force page transformation to use the folder specified via the `TargetPageFolder` property, regardless whether there was an automatically created folder or not.

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    TargetPageFolderOverridesDefaultFolder = true,
};
```

```Csharp
PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
{
    TargetPageFolderOverridesDefaultFolder = true,
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

> [!NOTE]
> This option is not available for publishing page transformation.

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

```Csharp
PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
{
    KeepPageSpecificPermissions = false,
};
```

## CopyPageMetadata option (as of February 2019 release)

Type | Default value if not specified
-----|----
Bool | false

If you've extended your wiki page library with additional columns to collect page metadata and you want to copy this metadata to the created modern client side page then set this option to true

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    CopyPageMetadata = true,
};
```

> [!NOTE]
> This option is not available for publishing page transformation. Use the publishing page layout mapping model to define if metadata needs to be copied and how that needs to happen.

> [!NOTE]
> As of the October 2019 release copying page metadata also works for when you do a cross site transformation, so when you create the modern page in a different site collection than the original source page.

## RemoveEmptySectionsAndColumns option (as of March 2019 release)

Type | Default value if not specified
-----|----
Bool | true

The default behavior is to remove all empty sections and columns (e.g. you transform from a 3 column layout and only have one web part in the middle column) as that will result in better use of the screen real estate, if you don't want this then set this option to false

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    RemoveEmptySectionsAndColumns = false,
};
```

```Csharp
PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
{
    RemoveEmptySectionsAndColumns = false,
};
```

## MappingProperties dictionary (as of March 2019 release)

Type | Default value if not specified
-----|----
Dictionary<string,string> | empty

The default mapping file can be configured by setting mapping properties

```csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    // If target page exists, then overwrite it
    Overwrite = true,
};

pti.MappingProperties["SummaryLinksToQuickLinks"] = "false";

pageTransformator.Transform(pti);
```

```csharp
PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
{
    // If target page exists, then overwrite it
    Overwrite = true,
};

pti.MappingProperties["SummaryLinksToQuickLinks"] = "false";

pageTransformator.Transform(pti);
```

## PublishCreatedPage option (as of April 2019 release)

Type | Default value if not specified
-----|----
Bool | true

The default behavior is to publish the created modern page, use this option if you want to prevent that.

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    PublishCreatedPage = false,
};
```

```Csharp
PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
{
    PublishCreatedPage = false,
};
```

### KeepPageCreationModificationInformation option (as of October 2019 release)

Type | Default value if not specified
-----|----
Bool | false

The default behavior is to not keep the author, editor, create data and modification date of the source page. Use this option to change that.

> [!NOTE]
> This option only works for when the source page is in the same SPO tenant as the target destination of the modern page.

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    KeepPageCreationModificationInformation = true,
};
```

```Csharp
PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
{
    KeepPageCreationModificationInformation = true,
};
```

### PostAsNews option (as of October 2019 release)

Type | Default value if not specified
-----|----
Bool | false

Post the created page as news. This implies that the page also will be published, even if you've used the `PublishCreatedPage` to prevent page publishing. 

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    PostAsNews = true,
};
```

```Csharp
PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
{
    PostAsNews = true,
};
```

## DisablePageComments option (as of April 2019 release)

Type | Default value if not specified
-----|----
Bool | false

The default behavior is to leave page comments enabled, use this option if you want to create a page with disabled page comments

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    DisablePageComments = true,
};
```

```Csharp
PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
{
    DisablePageComments = true,
};
```

## SkipUrlRewrite option (as of May 2019 release)

Type | Default value if not specified
-----|----
Bool | false

The default behavior is to leave URL rewriting enabled, use this option if you want to create a page with disabled URL rewriting. See the [URL mapping](modernize-userinterface-site-pages-urlmapping.md) article to learn more.

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    SkipUrlRewrite = true,
};
```

```Csharp
PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
{
    SkipUrlRewrite = true,
};
```

## UrlMappingFile option (as of July 2019 release)

Type | Default value if not specified
-----|----
String | empty

You can optionally specify a file with custom URL mappings. See the [URL mapping](modernize-userinterface-site-pages-urlmapping.md) article to learn more.

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    UrlMappingFile = @"c:\temp\urlmappingfile.csv",
};
```

```Csharp
PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
{
    UrlMappingFile = @"c:\temp\urlmappingfile.csv",
};
```

## SkipDefaultUrlRewrite option (as of September 2019 release)

Type | Default value if not specified
-----|----
Bool | false

The default behavior is to perform default URL rewriting. In case you're using a custom URL mapping file and you do not want to apply the default URL rewrite logic then set this property. See the [URL mapping](modernize-userinterface-site-pages-urlmapping.md) article to learn more.

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    SkipDefaultUrlRewrite = true,
};
```

```Csharp
PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
{
    SkipDefaultUrlRewrite = true,
};
```

## AddTableListImageAsImageWebPart option (as of October 2019 release)

Type | Default value if not specified
-----|----
Bool | true

Images living inside a table/list are also created as separate image web parts underneath that table/list. Set the `AddTableListImageAsImageWebPart` property to false if you want to stop the creation of these separate image web parts.

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    AddTableListImageAsImageWebPart = false,
};
```

```Csharp
PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
{
    AddTableListImageAsImageWebPart = false,
};
```

## UserMappingFile option (as of November 2019 release)

Type | Default value if not specified
-----|----
String | empty

You can optionally specify a file with custom user mappings. See the [User mapping](modernize-userinterface-site-pages-usermapping.md) article to learn more.

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    UserMappingFile = @"c:\temp\usermappingfile.csv",
};
```

```Csharp
PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
{
    UserMappingFile = @"c:\temp\usermappingfile.csv",
};
```

## LDAPConnectionString option (as of November 2019 release)

Type | Default value if not specified
-----|----
String | empty

You can optionally specify a custom LDAP connection string towards your Active Directory environment. See the [User mapping](modernize-userinterface-site-pages-usermapping.md) article to learn more.

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    LDAPConnectionString = "LDAP://OU=Test,DC=CONTOSO,DC=COM",
};
```

```Csharp
PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
{
    LDAPConnectionString = "LDAP://OU=Test,DC=CONTOSO,DC=COM",
};
```

## SkipUserMapping option (as of November 2019 release)

Type | Default value if not specified
-----|----
Bool | false

The default behavior is to always perform user mapping when you are transforming pages coming from SharePoint on-premises, use this option to disable that. See the [URL mapping](modernize-userinterface-site-pages-urlmapping.md) article to learn more.

```Csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    SkipUserMapping = true,
};
```

```Csharp
PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
{
    SkipUserMapping = true,
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

```Csharp
PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
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

> [!NOTE]
> This option is not available for publishing page transformation. Use the page layout mapping model to determine how the page header must be constructed.

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

```Csharp
// Local functions
string titleOverride(string title)
{
    return $"{title}_1";
}

PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
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
