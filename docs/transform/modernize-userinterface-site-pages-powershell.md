---
title: Transform classic pages to modern client-side pages using PowerShell
description: Explains how to transform classic wiki and web part pages into modern client side pages using the SharePoint PowerShell
ms.date: 06/07/2019
ms.prod: sharepoint
localization_priority: Priority
---

# Transforming to modern site pages using PowerShell

> [!IMPORTANT]
> The SharePoint PnP Modernization framework is continuously evolving, checkout [the release notes](https://github.com/SharePoint/sp-dev-modernization/tree/master/Tools/SharePoint.Modernization/Modernization%20Framework%20release%20notes.md) to stay up to date on the latest changes. If you encounter problems please file an issue in the [sp-dev-modernization GitHub issue list](https://github.com/SharePoint/sp-dev-modernization/issues).

The page transformation engine can also be used from PowerShell. This allows it to be integrated in a site modernization script that besides page transformation also does other things like installing solution, connecting the site to an Office 365 group and applying tenant branding. A good example of an all-up modernization script can be found [in the Office 365 Group connect article](modernize-connect-to-office365-group.md).

> [!NOTE]
> Below scripts shows how to transform pages. It requires [PnP PowerShell](https://aka.ms/sppnp-powershell) version 3.4.1812.0 (December 2018 release) or higher.

[!code-powershell[transformpages](../../sp-dev-modernization/Scripts/PageTransformation/TransformPages.ps1 "Transform pages to modern pages using PowerShell")]

## Options for the ConvertTo-PnPClientSidePage cmdlet

The **ConvertTo-PnPClientSidePage** cmdlet is the key cmdlet to modernize a given page. Below table lists the command line parameters that you can use to control the page transformation via this cmdlet.

Parameter | Default | Supported For | Description
----------|---------|---------------|------------
Identity (`*`) | | All page types | The page name (e.g. pageA.aspx)
Library (as of May 2019 release, version 3.9.1905.*) | | Wiki/webpart pages | The library holding the page. Use this `-Library` parameter when your wiki or web part page lives outside of the default SitePages library.
Folder (as of May 2019 release, version 3.9.1905.*) | | All page types | When the page you want to transform lives in a folder then you can specify that folder (e.g. `-Folder "Folder1/SubFolder"`).
WebPartMappingFile | |  All page types | Page transformation is driven by a mapping file. The cmdlet has a default mapping file embedded, but you can also specify your custom web part mapping file (`webpartmapping.xml`) to fit your page transformation needs (e.g. transforming to 3rd party custom web parts). You do this by specifying the path to the file via the `-WebPartMappingFile` parameter.
Overwrite | $false | All page types | When you add `-Overwrite` then the page transformation framework will overwrite the target page if needed. By default the new page name has a prefix of Migrated_, which then implies that if Migrated_YourPage.aspx already exists (typically from a previous page transformation effort) it will be overwritten.
AddPageAcceptBanner | $false | Wiki/webpart pages | Using `-AddPageAcceptBanner` will make the page transformation framework put the configured PageAcceptBanner web part on top of the created modern page. Using this web part the users accessing the page can decide whether they want to keep or discard the created modern page. See the [Page Transformation UI](modernize-userinterface-site-pages-ui.md) article to learn more on how to install and configure the default page banner web part.
ReplaceHomePageWithDefault | $false | Wiki/webpart pages | The default behavior is to transform your site's home page to a modern page like any other regular page. If you use `-ReplaceHomeWithDefault` then a site's home page will be transformed to a 'default' out-of-the-box modern home page, so the one you would get with a newly created modern team site.
TakeSourcePageName | $false | Wiki/webpart pages | The default behavior is to give the created modern page a name that starts with the prefix Migrated_ and let the original page keep it's existing name. When `-TakeSourcePageName` is specified the newly created page gets the name of the original page and the original page is renamed with a prefix Previous_. Set this option if you're sure you want to move forward with the modern page as it will ensure that all links pointing the original page now result in the new modern page being loaded.
ClearCache (as of January 2019 release, version 3.5.1901.*) | $false | All page types | To optimize performance certain data (e.g. list of available client side web parts, calculated list of fields to copy metadata for) is cached after the first execution. This cache will stay valid during the complete PowerShell session unless you use the `-ClearCache` switch. Restarting your PowerShell session also clears the cache.
SkipItemLevelPermissionCopyToClientSidePage | $false | All page types | By default item level permissions are copied over to the modern page, use the `-SkipItemLevelPermissionCopyToClientSidePage` to prevent this.
CopyPageMetadata (as of February 2019 release, version 3.6.1902.*) | $false | Wiki/webpart pages | The default behavior is to not copy page metadata (so additional columns added to the site pages library). When `-CopyPageMetadata` is specified the values of the custom metadata fields of the page to transform are copied to the newly created page.
TargetWebUrl (`**`) (as of March 2019 release, version 3.7.1903.*) | | All page types | If you want to create the transformed modern pages in another site collection then specify the URL to that other site collection. Consult the [web part transformation list](modernize-userinterface-site-pages-webparts.md) article to understand which web parts are transformed in a cross site collection transformation.
TargetConnection (`**`) (as of the June 2019 release, version 3.8.1906.) | | All page types | Allows for a more flexible definition of the target via a connection object. This allows for example to perform cross tenant transformation of transformation from on-premises to online.
UseCommunityScriptEditor (as of March 2019 release, version 3.7.1903.*) | $false | All page types | Use `-UseCommunityScriptEditor` if you've installed the community script editor and want to use it during transformation. Consult the [web part transformation list](modernize-userinterface-site-pages-webparts.md) article to learn more.
SummaryLinksToHtml (as of March 2019 release, version 3.7.1903.*) | $false | All page types | Use `-SummaryLinksToHtml` if you prefer to transform the SummaryLinks web part to HTML hosted in the text web part instead of the default transformation using the QuickLinks web part. Consult the [web part transformation list](modernize-userinterface-site-pages-webparts.md) article to learn more.
LogType (as of April 2019 release, version 3.8.1904.*) | None | All page types | Use `-LogType` to enabled logging: `File` will log to disk, `SharePoint` will create a log page in the SharePoint SitePages library.
LogFolder (as of April 2019 release, version 3.8.1904.*) |  | All page types | If `LogType` is set to `File` then you can use `-LogFolder` to specify the folder where the log will be created.
LogVerbose (as of April 2019 release, version 3.8.1904.*) | $false | All page types | Use `-LogVerbose` to generate a verbose log.
LogSkipFlush (as of April 2019 release, version 3.8.1904.*) | $false | All page types | By default each cmdlet call generates a unique log file, use the `-LogSkipFlush` parameter to accumulate log entries. Note that you'll have to end with a call without LogSkipFlush to persist the assembled log file entries.
DontPublish (as of April 2019 release, version 3.8.1904.*) | $false | All page types | Use the `-DontPublish` option to not publish the created modern page.
DisablePageComments (as of April 2019 release, version 3.8.1904.*) | $false | All page types | Use `-DisablePageComments` if you want to disable the commenting option on the created page
PublishingPage (as of April 2019 release, version 3.8.1904.*) | $false | Publishing pages | Set the `-PublishingPage` parameter if you're transforming a publishing page. For wiki and web part pages this parameter must be omitted or set to false.
PageLayoutMapping (as of April 2019 release, version 3.8.1904.*) |  | Publishing pages |Via `-PageLayoutMapping` you can specify the path the [page layout mapping file](modernize-userinterface-site-pages-model-publishing.md) that you'll use for your publishing page transformations when the publishing page is using a non out of the box page layout
PublishingTargetPageName (as of May 2019 release, version 3.9.1905.*) |  | Publishing pages | Use the `-PublishingTargetPageName` parameter to override the name for the modern page
SkipUrlRewriting (as of May 2019 release, version 3.9.1905.*) | $false | Publishing pages | During publishing page transformation URL's are rewritten to be valid in the target site collection, but using the `-SkipUrlRewriting` you can disable the URL rewriting

(`*`) Mandatory command line parameter / (`**`) Mandatory when the `-PublishingPage` parameter was set (either `-TargetWebUrl` or `-TargetConnection`)

## FAQ

### How do I transform publishing pages

Above shown sample shows in-place page transformation, for transforming publishing pages you need a slightly different syntax. Below sample shows how to modernize the mypage.aspx page and create a modern version of it in a communication site. During this transformation the page transformation will either use the built-in page layout mapping if the page is using an out of the box page layout or it will generate a page layout mapping on the fly for custom page layouts:

```Powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com/sites/portaltomodernize

ConvertTo-PnPClientSidePage -PublishingPage -Identity mypage.aspx -Overwrite -TargetWebUrl https://contoso.sharepoint.com/sites/moderncommunicationsite
```

If you're using custom page layouts it's highly recommended to tweak the used page layout mapping file before using it. To do so follow these steps:

#### Generate a custom page layout mapping file

Use PnP PowerShell to analyze your existing page layouts and generate a mapping file:

```Powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com/sites/portaltomodernize

Export-PnPClientSidePageMapping -CustomPageLayoutMapping -Folder c:\temp
```

If you want to generate the mapping files for OOB page layouts then specify the `AnalyzeOOBPageLayouts` switch.

#### Tune the generated mapping file

Open the [created mapping file](modernize-userinterface-site-pages-model-publishing.md) and review each mapping:

- Set the row and column values correctly for web parts, web part zones and fixed web parts so that content shows up on the right spot on the modern page. You can have as many rows as you want, each row will be a section on the modern page. Column values are restricted to 1, 2 or 3 which translates to the possible column options in a modern page
- Define the fields that need to be transformed as metadata
- Review the generated mapping of fields to web parts
- Review the generated mapping of fields to header

#### Use the custom mapping file

Using the cleaned custom mapping file is simple via the `PageLayoutMapping` parameter:

```Powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com/sites/portaltomodernize

ConvertTo-PnPClientSidePage -PublishingPage -Identity mypage.aspx -Overwrite -TargetWebUrl https://contoso.sharepoint.com/sites/moderncommunicationsite -PageLayoutMapping c:\temp\mypagelayouts.xml
```

### Use the logging features (as of June 2019 release, version 3.10.1906.*)

```Powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com/sites/portaltomodernize

# Convert a series of pages, logs are not yet written
ConvertTo-PnPClientSidePage -PublishingPage -Identity mypage.aspx -Overwrite -TargetWebUrl https://contoso.sharepoint.com/sites/moderncommunicationsite -LogSkipFlush -LogType SharePoint -LogVerbose
ConvertTo-PnPClientSidePage -PublishingPage -Identity mypage.aspx -Overwrite -TargetWebUrl https://contoso.sharepoint.com/sites/moderncommunicationsite -LogSkipFlush -LogType SharePoint -LogVerbose

# persist the log data from all previous page transformations to the defined log
Save-PnPClientSidePageConversionLog
```

### Transform a pages that lives at the root of the site (so outside of a library)

Some older sites might have web part pages living outside of a library. If you want to modernize these you need to indicate that the page lives in the root of the site via `-Folder "<root>"` as shown below:

```Powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com/sites/sitetomodernize

ConvertTo-PnPClientSidePage -Identity pageinroot.aspx -Overwrite -Folder "<root>"
```

### I used the "AddPageAcceptBanner" switch but don't see the banner web part on the created pages

In order to make the banner webpart work there are 2 requirements that have to be met:

- The banner web part must have been installed in your tenant app catalog
- The banner web part must have been referenced in the used webpartmapping.xml file

#### Installing the banner web part

To install the default banner web part follow these steps:

- Open your tenant app catalog site collection and go to the **Apps for SharePoint** list
- Download the latest banner web part solution (**sharepointpnp-pagetransformation-client.sppkg**) from the [sp-dev-modernization](https://github.com/SharePoint/sp-dev-modernization/blob/dev/Solutions/PageTransformationUI/assets/sharepointpnp-pagetransformation-client.sppkg?raw=true) repository
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
