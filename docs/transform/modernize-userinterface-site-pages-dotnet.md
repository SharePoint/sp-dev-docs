---
title: Transform classic pages to modern pages using .NET
description: Explains how to transform classic wiki and web part pages into modern modern pages using the SharePoint .NET
ms.date: 04/29/2021
ms.service: sharepoint
ms.localizationpriority: medium
---

# Transforming to modern site pages using .NET

> [!IMPORTANT]
> SharePoint PnP Modernization is part of the [PnP Framework](https://github.com/pnp/pnpframework) and is continuously evolving, checkout [the release notes](https://github.com/pnp/pnpframework/blob/dev/src/lib/CHANGELOG.md) to stay up to date on the latest changes. If you encounter problems please file an issue in the [PnP Framework GitHub issue list](https://github.com/pnp/pnpframework/issues).

The page transformation engine is built using .NET and is distributed as a [nuget](https://www.nuget.org/packages/PnP.Framework) package. Once you've added the nuget package you'll see that 2 additional files are added to your solution:

![page transformation solution files](media/modernize/pagetransformation_2.png)

> [!Note]
> The PnP Framework nuget package contains a .NET Standard 2.0 version and a .NET 5.0 version, allowing you to embed page transformation in any .NET project.

The `webpartmapping.xml` and `webpartmapping_latestfrompackage.xml` represent the transformation model that describes how the transformation will happen. You typically will tweak the `webpartmapping.xml` file to your needs by for example adding additional mappings to your own web parts. If you later on install an updated version of the nuget package your `webpartmapping.xml` will not be overwritten by default but the `webpartmapping_latestfrompackage.xml` will be. You can use this latter file to compare the latest out-the-box mapping with your mapping and take over the changes you need.

With the mapping file in place you now can use below snippet (coming from the [Modernization.PageTransformation sample on GitHub](https://github.com/pnp/PnP/tree/master/Samples/Modernization.PageTransformation)) to transform all the pages in a given site:

```csharp
string siteUrl = "https://contoso.sharepoint.com/sites/mytestsite";
AuthenticationManager am = new AuthenticationManager("<Azure AD client id>", "joe@contoso.onmicrosoft.com", "Pwd as SecureString");
using (var cc = am.GetSharePointOnlineAuthenticatedContextTenant(siteUrl))
{
    var pageTransformator = new PageTransformator(cc);
    var pages = cc.Web.GetPages();
    foreach (var page in pages)
    {
        PageTransformationInformation pti = new PageTransformationInformation(page)
        {
            // If target page exists, then overwrite it
            Overwrite = true,
            // Migrated page gets the name of the original page
            TargetPageTakesSourcePageName = true,
        };

        try
        {
            Console.WriteLine($"Transforming page {page.FieldValues["FileLeafRef"]}");
            pageTransformator.Transform(pti);
        }
        catch(ArgumentException ex)
        {
            Console.WriteLine($"Page {page.FieldValues["FileLeafRef"]} could not be transformed: {ex.Message}");
        }
    }
}
```

## FAQ

### I want to set mapping properties

Mapping properties are set to drive mapping behavior (e.g. configure the use of the community script editor). You can configure mapping properties like shown in below sample code:

```csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    // If target page exists, then overwrite it
    Overwrite = true,
};

pti.MappingProperties["UseCommunityScriptEditor"] = "true";

pageTransformator.Transform(pti);
```

Consult the [web part transformation list](modernize-userinterface-site-pages-webparts.md) article to learn more on the possible mapping properties.

### I want to transform pages into another site collection

The default transformation behavior is doing an in-place transformation, meaning the modern page is created in the same location as the classic page was. You can however also create the modern version of the page in another site collection by providing a client context object for the target site collection.

```csharp
string siteUrl = "https://contoso.sharepoint.com/sites/mytestsite";
string targetSiteUrl = "https://contoso.sharepoint.com/sites/mytargetsite";
AuthenticationManager am = new AuthenticationManager("<Azure AD client id>", "joe@contoso.onmicrosoft.com", "Pwd as SecureString");
using (var cc = am.GetSharePointOnlineAuthenticatedContextTenant(siteUrl))
{
    using (var ccTarget = cc.Clone(targetSiteUrl))
    {  
      var pageTransformator = new PageTransformator(cc, ccTarget);
      var pages = cc.Web.GetPages();
      foreach (var page in pages)
      {
          PageTransformationInformation pti = new PageTransformationInformation(page)
          {
              // If target page exists, then overwrite it
              Overwrite = true,
          };

          try
          {
              Console.WriteLine($"Transforming page {page.FieldValues["FileLeafRef"]}");
              pageTransformator.Transform(pti);
          }
          catch(ArgumentException ex)
          {
              Console.WriteLine($"Page {page.FieldValues["FileLeafRef"]} could not be transformed: {ex.Message}");
          }
      }
    }
}
```

> [!Note]
> Not all web parts lend themselves well for a cross site transfer, check the **Cross site support** column in [web part transformation list](modernize-userinterface-site-pages-webparts.md) to learn more.

### I want to transform publishing pages

Publishing page transformation always will be a cross site transformation as mixing modern pages with publishing pages is unsupported. Below sample shows how all publishing pages starting with an "a" are transformed to modern pages in the https://contoso.sharepoint.com/sites/mycommunicationsite site. This sample also shows how to provide a custom page layout mapping file.

```csharp
string siteUrl = "https://contoso.sharepoint.com/sites/mytestportal";
string targetSiteUrl = "https://contoso.sharepoint.com/sites/mycommunicationsite";
AuthenticationManager am = new AuthenticationManager("<Azure AD client id>", "joe@contoso.onmicrosoft.com", "Pwd as SecureString");
using (var cc = am.GetSharePointOnlineAuthenticatedContextTenant(siteUrl))
{
    using (var ccTarget = cc.Clone(targetSiteUrl))
    {  
      var pageTransformator = new PublishingPageTransformator(cc, ccTarget, "C:\\temp\\custompagelayoutmapping.xml");
      var pages = cc.Web.GetPagesFromList("Pages", "a");
      foreach (var page in pages)
      {
          PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
          {
              // If target page exists, then overwrite it
              Overwrite = true,
          };

          try
          {
              Console.WriteLine($"Transforming publishing page {page.FieldValues["FileLeafRef"]}");
              pageTransformator.Transform(pti);
          }
          catch(ArgumentException ex)
          {
              Console.WriteLine($"Page {page.FieldValues["FileLeafRef"]} could not be transformed: {ex.Message}");
          }
      }
    }
}
```

> [!Note]
> Not all web parts lend themselves well for a cross site transfer, check the **Cross site support** column in [web part transformation list](modernize-userinterface-site-pages-webparts.md) to learn more.

### Read publishing page in on-premises SharePoint and create the modern page in SharePoint Online

When you want to bring over your classic on-premises publishing portals you could first move the complete portal from on-premises to a classic portal in SharePoint Online and then do the modernization work. However, often it's easier to directly read the classic publishing page from your SharePoint on-premises portal and create the modern version in SharePoint Online.

```csharp
string siteUrl = "https://sp.contoso.com/sites/myonpremisesportal";
string targetSiteUrl = "https://contoso.sharepoint.com/sites/mycommunicationsite";
AuthenticationManager am = new AuthenticationManager("<Azure AD client id>", "joe@contoso.onmicrosoft.com", "Pwd as SecureString");

// Setup on-premises client context
using (var cc = new ClientContext(siteUrl))
{
    cc.Credentials = CredentialCache.DefaultCredentials;

    // Setup SharePoint Online context
    using (var ccTarget = am.GetSharePointOnlineAuthenticatedContextTenant(targetSiteUrl))
    {  
      var pageTransformator = new PublishingPageTransformator(cc, ccTarget, "C:\\temp\\custompagelayoutmapping.xml");
      
      // Register the log observers
      pageTransformator.RegisterObserver(new MarkdownObserver(folder: "c:\\temp", includeVerbose:true));
      pageTransformator.RegisterObserver(new MarkdownToSharePointObserver(ccTarget, includeVerbose: true));
      
      var pages = cc.Web.GetPagesFromList("Pages", "a");
      foreach (var page in pages)
      {
          PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
          {
              // If target page exists, then overwrite it
              Overwrite = true,
          };

          try
          {
              Console.WriteLine($"Transforming publishing page {page.FieldValues["FileLeafRef"]}");
              pageTransformator.Transform(pti);
          }
          catch(ArgumentException ex)
          {
              Console.WriteLine($"Page {page.FieldValues["FileLeafRef"]} could not be transformed: {ex.Message}");
          }
      }

      // Flush the log data
      pageTransformator.FlushObservers();
    }
}
```

> [!NOTE]
> - This feature supports SharePoint 2013, 2016 and 2019 as source. Target is always SharePoint Online
> - It's important to run your code on a machine that is able to connect to both the on-premises SharePoint server as the SharePoint Online environment
> - This approach can also be used for page transformation across tenants (whenever that would make sense)

### I want to use the logging features

By default there are three possible log observers (Console, Markdown and MarkdownToSharePoint). The latter two create an MD based report and put them on disk or in SharePoint as a modern page, whereas the first one simply outputs console messages. Below sample shows how you can use the loggers from .NET:

```csharp
string siteUrl = "https://contoso.sharepoint.com/sites/mytestportal";
string targetSiteUrl = "https://contoso.sharepoint.com/sites/mycommunicationsite";
AuthenticationManager am = new AuthenticationManager("<Azure AD client id>", "joe@contoso.onmicrosoft.com", "Pwd as SecureString");
using (var cc = am.GetSharePointOnlineAuthenticatedContextTenant(siteUrl))
{
    using (var ccTarget = cc.Clone(targetSiteUrl))
    {  
      var pageTransformator = new PublishingPageTransformator(cc, ccTarget, "C:\\temp\\custompagelayoutmapping.xml");
      
      // Register the log observers
      pageTransformator.RegisterObserver(new MarkdownObserver(folder: "c:\\temp", includeVerbose:true));
      pageTransformator.RegisterObserver(new MarkdownToSharePointObserver(ccTarget, includeVerbose: true));
      
      var pages = cc.Web.GetPagesFromList("Pages", "a");
      foreach (var page in pages)
      {
          PublishingPageTransformationInformation pti = new PublishingPageTransformationInformation(page)
          {
              // If target page exists, then overwrite it
              Overwrite = true,
          };

          try
          {
              Console.WriteLine($"Transforming publishing page {page.FieldValues["FileLeafRef"]}");
              pageTransformator.Transform(pti);
          }
          catch(ArgumentException ex)
          {
              Console.WriteLine($"Page {page.FieldValues["FileLeafRef"]} could not be transformed: {ex.Message}");
          }
      }

      // Flush the log data
      pageTransformator.FlushObservers();
    }
}
```

### Modern site pages don't work on the site I want to transform pages in

By default the modern site page capability is enabled on most sites but maybe it was turned off afterwards. If that's the case the [SharePoint Modernization scanner](https://aka.ms/sppnp-modernizationscanner) will tell you which sites have turned of the modern page feature. To remediate this use below sample PnP PowerShell script:

```PowerShell
$minimumVersion = New-Object System.Version("1.3.0")
if (-not (Get-InstalledModule -Name PnP.PowerShell -MinimumVersion $minimumVersion -ErrorAction Ignore))
{
    Install-Module PnP.PowerShell -MinimumVersion $minimumVersion -Scope CurrentUser
}
Import-Module PnP.PowerShell -DisableNameChecking -MinimumVersion $minimumVersion

Connect-PnPOnline -Url "<your web url>" -Interactive

# Enable modern page feature
Enable-PnPFeature -Identity "B6917CB1-93A0-4B97-A84D-7CF49975D4EC" -Scope Web
```

[!INCLUDE [pnp-powershell](../../includes/snippets/open-source/pnp-powershell.md)]

## See also

- [Modernize your classic SharePoint sites](modernize-classic-sites.md)
- [Modernization.PageTransformation sample on GitHub](https://github.com/SharePoint/PnP/tree/dev/Samples/Modernization.PageTransformation)
- [YouTube recording from May 3rd SIG call containing a page transformation demo](https://youtu.be/Uf2f8ISBpVg?t=15m31s)
- [Understanding and configuring the page transformation model](modernize-userinterface-site-pages-model.md)
- [Classic and modern web part experiences](https://support.office.com/article/classic-and-modern-web-part-experiences-3fdae6c3-8fc1-49ab-8708-8c104b882e64)
