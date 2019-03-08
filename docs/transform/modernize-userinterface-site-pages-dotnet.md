---
title: Transform classic pages to modern client-side pages using .Net
description: Explains how to transform classic wiki and web part pages into modern client side pages using the SharePoint .Net
ms.date: 03/06/2019
ms.prod: sharepoint
localization_priority: Normal
---

# Transforming to modern site pages using .Net

> [!IMPORTANT]
> The SharePoint PnP Modernization framework is continuously evolving, checkout [the release notes](https://github.com/SharePoint/sp-dev-modernization/tree/master/Tools/SharePoint.Modernization/Modernization%20Framework%20release%20notes.md) to stay up to date on the latest changes. If you encounter problems please file an issue in the [sp-dev-modernization GitHub issue list](https://github.com/SharePoint/sp-dev-modernization/issues).

The page transformation engine is built using .Net and is distributed as a [nuget](https://www.nuget.org/packages/SharePointPnPModernizationOnline) package. Once you've added the nuget package you'll see that 2 additional files are added to your solution:

![page transformation solution files](media/modernize/pagetransformation_2.png)

> [!Note]
> The minimal .Net Framework version for this solution to work is 4.5.

The `webpartmapping.xml` and `webpartmapping_latestfrompackage.xml` represent the transformation model that describes how the transformation will happen. You typically will tweak the `webpartmapping.xml` file to your needs by for example adding additional mappings to your own web parts. If you later on install an updated version of the nuget package your `webpartmapping.xml` will not be overwritten by default but the `webpartmapping_latestfrompackage.xml` will be. You can use this latter file to compare the latest out-the-box mapping with your mapping and take over the changes you need.

With the mapping file in place you now can use below snippet (coming from the [Modernization.PageTransformation sample on GitHub](https://github.com/SharePoint/PnP/tree/dev/Samples/Modernization.PageTransformation)) to transform all the pages in a given site:

```csharp
string siteUrl = "https://contoso.sharepoint.com/sites/mytestsite";
string userName = "joe@contoso.onmicrosoft.com";
AuthenticationManager am = new AuthenticationManager();
using (var cc = am.GetSharePointOnlineAuthenticatedContextTenant(siteUrl, userName, GetSecureString("Password")))
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

### I want to set mapping properties (as of March 2019 release, version 1.0.1903.*)

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

### I want to transform pages into another site collection (as of March 2019 release, version 1.0.1903.*)

The default transformation behavior is doing an in-place transformation, meaning the modern client side page is created in the same location as the classic page was. You can however also create the modern version of the page in another site collection by providing a client context object for the target site collection.

```csharp
string siteUrl = "https://contoso.sharepoint.com/sites/mytestsite";
string targetSiteUrl = "https://contoso.sharepoint.com/sites/mytargetsite";
string userName = "joe@contoso.onmicrosoft.com";
AuthenticationManager am = new AuthenticationManager();
using (var cc = am.GetSharePointOnlineAuthenticatedContextTenant(siteUrl, userName, GetSecureString("Password")))
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

### I choose the "AddPageAcceptBanner" option but don't see the banner web part on the created pages

In order to make the banner webpart work there are 2 requirements that have to be met:

- The banner web part must have been installed in your tenant app catalog
- The banner web part must have been referenced in the used webpartmapping.xml file

#### Installing the banner web part

To install the default banner web part follow these steps:

- Open your tenant app catalog site collection and go to the **Apps for SharePoint** list
- Download the banner web part solution (**sharepointpnp-pagetransformation-client.sppkg**) from the [sp-dev-modernization](https://github.com/SharePoint/sp-dev-modernization/blob/master/Solutions/PageTransformationUI/assets/sharepointpnp-pagetransformation-client.sppkg?raw=true) repository
- Drag and drop the sppkg file in the **Apps for SharePoint** list. Doing so will ask to **make this solution available to all sites in your organization**. Check the box and click on **Deploy**.

> [!NOTE]
> The page banner web part is configured to **not** be visible in the web part picker...so even if you've deployed it to all sites in your tenant it will still not be visible for your users. It can only programmatically be added to a page

#### Checking your webpartmapping.xml file

When the page transformation engine puts the banner web part on a page it gets it's definition from the webpartmapping.xml file. Check if you find a web part of type **SharePointPnP.Modernization.PageAcceptanceBanner** in your mapping file. Below sample shows the default configuration using the default web part uploaded in the previous step.

```xml
      <WebPart Type="SharePointPnP.Modernization.PageAcceptanceBanner">
        <Properties>
          <Property Name="SourcePage" Type="string"/>
          <Property Name="TargetPage" Type="string"/>
        </Properties>
        <Mappings>
          <Mapping Default="true" Name="default">
            <ClientSideWebPart Type="Custom" ControlId="d462a7c4-b2e1-4e80-867a-7b46d279c161" Order="10" JsonControlData="&#123;&quot;serverProcessedContent&quot;:&#123;&quot;htmlStrings&quot;:&#123;&#125;,&quot;searchablePlainTexts&quot;:&#123;&#125;,&quot;imageSources&quot;:&#123;&#125;,&quot;links&quot;:&#123;&#125;&#125;,&quot;dataVersion&quot;:&quot;1.0&quot;,&quot;properties&quot;:&#123;&quot;description&quot;:&quot;modernizationPageDemo&quot;,&quot;sourcePage&quot;:&quot;{SourcePage}&quot;,&quot;targetPage&quot;:&quot;{TargetPage}&quot;&#125;&#125;"/>
          </Mapping>
        </Mappings>
      </WebPart>
```

> [!NOTE]
> - The default mapping file already contains the correct configuration
> - You can use your own custom banner web part by simply deploying it and then updating the mapping in the used webpartmapping.xml file.

### Modern site pages don't work on the site I want to transform pages in

By default the modern site page capability is enabled on most sites but maybe it was turned off afterwards. If that's the case the [SharePoint Modernization scanner](https://aka.ms/sppnp-modernizationscanner) will tell you which sites have turned of the modern page feature. To remediate this use below sample PnP PowerShell script:

```PowerShell
$minimumVersion = New-Object System.Version("2.24.1803.0")
if (-not (Get-InstalledModule -Name SharePointPnPPowerShellOnline -MinimumVersion $minimumVersion -ErrorAction Ignore))
{
    Install-Module SharePointPnPPowerShellOnline -MinimumVersion $minimumVersion -Scope CurrentUser
}
Import-Module SharePointPnPPowerShellOnline -DisableNameChecking -MinimumVersion $minimumVersion

Connect-PnPOnline -Url "<your web url>"

# Enable modern page feature
Enable-PnPFeature -Identity "B6917CB1-93A0-4B97-A84D-7CF49975D4EC" -Scope Web -Force
```

## See also

- [Modernize your classic SharePoint sites](modernize-classic-sites.md)
- [Modernization.PageTransformation sample on GitHub](https://github.com/SharePoint/PnP/tree/dev/Samples/Modernization.PageTransformation)
- [YouTube recording from May 3rd SIG call containing a page transformation demo](https://youtu.be/Uf2f8ISBpVg?t=15m31s)
- [Understanding and configuring the page transformation model](modernize-userinterface-site-pages-model.md)
- [Classic and modern web part experiences](https://support.office.com/en-us/article/classic-and-modern-web-part-experiences-3fdae6c3-8fc1-49ab-8708-8c104b882e64)
