---
title: Transform classic pages to modern client-side pages using PowerShell
description: Explains how to transform classic wiki and web part pages into modern client side pages using the SharePoint PowerShell
ms.date: 11/19/2018
ms.prod: sharepoint
localization_priority: Priority
---

# Transforming to modern site pages using PowerShell

> [!IMPORTANT]
> The SharePoint PnP Modernization framework is continuously evolving, checkout [the release notes](https://github.com/SharePoint/sp-dev-modernization/tree/master/Tools/SharePoint.Modernization/Modernization%20Framework%20release%20notes.md) to stay up to date on the latest changes. If you encounter problems please file an issue in the [PnP Tools GitHub issue list](https://github.com/SharePoint/sp-dev-modernization/issues).

The page transformation engine can also be used from PowerShell. This allows it to be integrated in a site modernization script that besides page transformation also does other things like installing solution, connecting the site to an Office 365 group and applying tenant branding. A good example of an all-up modernization script can be found [in the Office 365 Group connect article](modernize-connect-to-office365-group.md).

> [!NOTE]
> Below scripts shows how to transform pages. It requires [PnP PowerShell](https://aka.ms/sppnp-powershell) version 3.4.1812.0 (December 2018 release) or higher.

[!code-powershell[transformpages](../../sp-dev-modernization/Scripts/PageTransformation/TransformPages.ps1 "Transform pages to modern pages using PowerShell")]

## Options for the ConvertTo-PnPClientSidePage cmdlet

The **ConvertTo-PnPClientSidePage** cmdlet is the key cmdlet to modernize a given page. Below table lists the command line parameters that you can use to control the page transformation via this cmdlet.

Parameter | Default | Description
----------|---------|------------
Identity (*) | | The page name (e.g. pageA.aspx)
WebPartMappingFile | |  Page transformation is driven by a mapping file. The cmdlet has a default mapping file embedded, but you can also specify your custom web part mapping file (`webpartmapping.xml`) to fit your page transformation needs (e.g. transforming to 3rd party custom web parts). You do this by specifying the path to the file via the `-WebPartMappingFile` parameter.
Overwrite | $false | When you add `-Overwrite` then the page transformation framework will overwrite the target page if needed. By default the new page name has a prefix of Migrated_, which then implies that if Migrated_YourPage.aspx already exists (typically from a previous page transformation effort) it will be overwritten.
AddPageAcceptBanner | $false | Using `-AddPageAcceptBanner` will make the page transformation framework put the configured PageAcceptBanner web part on top of the created modern page. Using this web part the users accessing the page can decide whether they want to keep or discard the created modern page. See the [Page Transformation UI](modernize-userinterface-site-pages-ui.md) article to learn more on how to install and configure the default page banner web part.
ReplaceHomePageWithDefault | $false | The default behavior is to transform your site's home page to a modern page like any other regular page. If you use `-ReplaceHomeWithDefault` then a site's home page will be transformed to a 'default' out-of-the-box modern home page, so the one you would get with a newly created modern team site.
TakeSourcePageName | $false | The default behavior is to give the created modern page a name that starts with the prefix Migrated_ and let the original page keep it's existing name. When `-TakeSourcePageName` is specified the newly created page gets the name of the original page and the original page is renamed with a prefix Previous_. Set this option if you're sure you want to move forward with the modern page as it will ensure that all links pointing the original page now result in the new modern page being loaded.

(*) Mandatory command line parameter

## FAQ

### I used the "AddPageAcceptBanner" switch but don't see the banner web part on the created pages

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
> You can use your own custom banner web part by simply deploying it and then updating the mapping in the used webpartmapping.xml file.

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
- [Understanding and configuring the page transformation model](modernize-userinterface-site-pages-model.md)
- [Classic and modern web part experiences](https://support.office.com/en-us/article/classic-and-modern-web-part-experiences-3fdae6c3-8fc1-49ab-8708-8c104b882e64)
