---
title: Overview of the used web part mapping
description: Explains which web parts are transformed and how
ms.date: 04/04/2019
ms.prod: sharepoint
localization_priority: Priority
---

# Overview of the used web part mapping

> [!IMPORTANT]
> The SharePoint PnP Modernization framework is continuously evolving, checkout [the release notes](https://github.com/SharePoint/sp-dev-modernization/tree/master/Tools/SharePoint.Modernization/Modernization%20Framework%20release%20notes.md) to stay up to date on the latest changes. If you encounter problems please file an issue in the [sp-dev-modernization GitHub issue list](https://github.com/SharePoint/sp-dev-modernization/issues).

When a page is transformed from a classic page into a modern client side page then the most commonly used web parts are transformed as well. Classic web parts (e.g. XSLTListView) are replaced by their OOB modern counterparts (e.g. List web part) assuming there is a modern counterpart available. The next chapter provides an overview of which classic web parts are transformed and how.

## Web part transformation list (updated for April 2018 release)

The page transformation uses a default web part mapping when it transforms classic pages to modern pages. The used mapping in this default modern is described here, but do know that you can update the mapping to for example add your own custom 3rd party web parts as a transformation target. How to extend the web part mapping model is described in the [Page transformation model](modernize-userinterface-site-pages-model.md) article.

Classic web part | Modern web part | Comments  | Cross site support
-----------------|-----------------|-----------|-------------------
Microsoft.SharePoint.WebPartPages.XsltListViewWebPart (viewing list data) | [List](https://support.office.com/en-us/article/use-the-list-and-other-web-parts-on-classic-pages-03044488-c0e4-4226-a8fb-4cd8364424fa), [Library](https://support.office.com/en-us/article/use-the-document-library-web-part-a9dfecc3-2050-4528-9f00-2c5afc5731b0) or [Events](https://support.office.com/en-us/article/use-the-events-web-part-5fe4da93-5fa9-4695-b1ee-b0ae4c981909) web part | See next chapter for more details | Yes, if a list with the same name exists
Microsoft.SharePoint.WebPartPages.ListViewWebPart (legacy viewing of list data) | [List](https://support.office.com/en-us/article/use-the-list-and-other-web-parts-on-classic-pages-03044488-c0e4-4226-a8fb-4cd8364424fa), [Library](https://support.office.com/en-us/article/use-the-document-library-web-part-a9dfecc3-2050-4528-9f00-2c5afc5731b0) or [Events](https://support.office.com/en-us/article/use-the-events-web-part-5fe4da93-5fa9-4695-b1ee-b0ae4c981909) web part | See next chapter for more details | Yes, if a list with the same name exists
Microsoft.SharePoint.Portal.WebControls.SiteFeedWebPart (Site feed on team sites) | [News](https://support.office.com/en-us/article/use-the-news-web-part-on-a-sharepoint-page-c2dcee50-f5d7-434b-8cb9-a7feefd9f165) web part | This web part typically is used to show news on a home page, hence it's replaced with the OOB news web part | Yes
Microsoft.SharePoint.WebPartPages.ContentEditorWebPart (embedding content) | [Embed](https://support.office.com/en-us/article/add-content-to-your-page-using-the-embed-web-part-721f3b2f-437f-45ef-ac4e-df29dba74de8) web part, [Text](https://support.office.com/en-us/article/add-text-and-tables-to-your-page-with-the-text-web-part-729c0aa1-bc0d-41e3-9cde-c60533f2c801) web part and/or a community open source script editor as optional target web part | See next chapter for more details | Yes
Microsoft.SharePoint.WebPartPages.ScriptEditorWebPart (embedding script) | Not transformed OOB, a community open source script editor can be configured as optional target web part | See next chapter for more details | Yes
Microsoft.SharePoint.WebPartPages.ImageWebPart | [Image](https://support.office.com/en-us/article/use-the-image-web-part-a63b335b-ad0a-4954-a65d-33c6af68beb2) web part | | Yes
Microsoft.SharePoint.WebPartPages.ClientSideWebPart (= modern SPFX based web part on classic page) | The same modern web part with it's configuration will be kept | | No
Microsoft.SharePoint.WebPartPages.ClientWebPart (= SharePoint Add-In web part on classic page) | The same add-in can work on modern pages and will be taken over including it's configuration | | No
Microsoft.SharePoint.Publishing.WebControls.MediaWebPart (embedding videos) | [File viewer](https://support.office.com/en-us/article/use-the-file-viewer-web-part-e53a9602-e7b3-4fff-9126-de2f18d1900c#bkmk_document) web part | | Yes
Microsoft.SharePoint.Publishing.WebControls.ContentByQueryWebPart (querying data and presenting it) | [Highlighted content](https://support.office.com/en-us/article/use-the-highlighted-content-web-part-e34199b0-ff1a-47fb-8f4d-dbcaed329efd) web part | | No
Microsoft.SharePoint.Publishing.WebControls.ContentBySearchWebPart (searching data and presenting it) | [Highlighted content](https://support.office.com/en-us/article/use-the-highlighted-content-web-part-e34199b0-ff1a-47fb-8f4d-dbcaed329efd) web part | | No
Microsoft.SharePoint.Publishing.WebControls.ResultScriptWebPart (searching data and presenting it) | [Highlighted content](https://support.office.com/en-us/article/use-the-highlighted-content-web-part-e34199b0-ff1a-47fb-8f4d-dbcaed329efd) web part | | No
Microsoft.Office.Excel.WebUI.ExcelWebRenderer (embedding from Excel files) | [File viewer](https://support.office.com/en-us/article/use-the-file-viewer-web-part-e53a9602-e7b3-4fff-9126-de2f18d1900c#bkmk_document) web part | | No
Microsoft.Office.Visio.Server.WebControls.VisioWebAccess (embedding from Visio files) | [File viewer](https://support.office.com/en-us/article/use-the-file-viewer-web-part-e53a9602-e7b3-4fff-9126-de2f18d1900c#bkmk_document) web part | | No
Microsoft.SharePoint.WebPartPages.PageViewerWebPart (embedding from other pages) | [Embed](https://support.office.com/en-us/article/add-content-to-your-page-using-the-embed-web-part-721f3b2f-437f-45ef-ac4e-df29dba74de8) web part | | Yes
Microsoft.SharePoint.WebPartPages.PictureLibrarySlideshowWebPart (picture slide show) | [Image gallery](https://support.office.com/en-us/article/use-the-image-gallery-web-part-bbcbe560-14a7-4369-8ef5-3255845e3bfd) web part | | Yes, if a picture library with the same name exists
Microsoft.SharePoint.WebPartPages.SimpleFormWebPart (html form embedding) | Not transformed OOB, optionally a community open source script editor can be configured | See next chapter for more details | Yes
Microsoft.SharePoint.Publishing.WebControls.SummaryLinkWebPart | [QuickLinks](https://support.office.com/en-us/article/use-the-quick-links-web-part-e1df7561-209d-4362-96d4-469f85ab2a82) web part or [Text](https://support.office.com/en-us/article/add-text-and-tables-to-your-page-with-the-text-web-part-729c0aa1-bc0d-41e3-9cde-c60533f2c801) web part | Summary links html is transformed to [QuickLinks](https://support.office.com/en-us/article/use-the-quick-links-web-part-e1df7561-209d-4362-96d4-469f85ab2a82) by default, but optionally you can generate html which then is shown using using the [Text](https://support.office.com/en-us/article/add-text-and-tables-to-your-page-with-the-text-web-part-729c0aa1-bc0d-41e3-9cde-c60533f2c801) web part. See next chapter for more details | Yes
Microsoft.SharePoint.Portal.WebControls.ContactFieldControl (person card) | [People](https://support.office.com/en-us/article/show-people-profiles-on-your-page-with-the-people-web-part-7e52c5f6-2d72-48fa-a9d3-d2750765fa05) web part | | Yes
Microsoft.SharePoint.WebPartPages.UserDocsWebPart (user documents) | [Highlighted content](https://support.office.com/en-us/article/use-the-highlighted-content-web-part-e34199b0-ff1a-47fb-8f4d-dbcaed329efd) web part | | Yes
Microsoft.SharePoint.WebPartPages.XmlWebPart (using xml and xsl to produce html) | Removed ([Text](https://support.office.com/en-us/article/add-text-and-tables-to-your-page-with-the-text-web-part-729c0aa1-bc0d-41e3-9cde-c60533f2c801) web part added to explain why) | | Yes
Microsoft.SharePoint.WebPartPages.DataFormWebPart (legacy viewing of list forms) | Removed ([Text](https://support.office.com/en-us/article/add-text-and-tables-to-your-page-with-the-text-web-part-729c0aa1-bc0d-41e3-9cde-c60533f2c801) web part added to explain why) | | Yes
Microsoft.SharePoint.WebPartPages.WikiContentWebpart | Removed ([Text](https://support.office.com/en-us/article/add-text-and-tables-to-your-page-with-the-text-web-part-729c0aa1-bc0d-41e3-9cde-c60533f2c801) web part added to explain why) | Not relevant anymore in SPO | Yes
Microsoft.SharePoint.WebPartPages.SilverlightWebPart (running Silverlight apps) | Removed ([Text](https://support.office.com/en-us/article/add-text-and-tables-to-your-page-with-the-text-web-part-729c0aa1-bc0d-41e3-9cde-c60533f2c801) web part added to explain why) | There's no modern replacement + Silverlight is not working anymore in modern browsers like Edge and Chrome | Yes
Microsoft.SharePoint.Publishing.WebControls.MembersWebPart | Removed ([Text](https://support.office.com/en-us/article/add-text-and-tables-to-your-page-with-the-text-web-part-729c0aa1-bc0d-41e3-9cde-c60533f2c801) web part added to explain why) | Managing site members now is done using the OOB site permissions functionality | Yes
Microsoft.Office.InfoPath.Server.Controls.WebUI.BrowserFormWebPart (InfoPath web part) | Removed | | Yes
Microsoft.SharePoint.WebPartPages.GettingStartedWebPart (getting started tiles) | Removed | No point in keeping a getting started for the classic team site experience | Yes
Microsoft.SharePoint.WebPartPages.SPUserCodeWebPart (Sandbox web part)| Removed | Sandboxed web parts are possible anymore in SPO | Yes
Microsoft.SharePoint.Publishing.WebControls.TableOfContentsWebPart | Removed | This data should be integrated into the site navigation if still relevant | Yes

> [!NOTE]
> All other web parts not listed in the above table will get a "default" mapping being the [Text](https://support.office.com/en-us/article/add-text-and-tables-to-your-page-with-the-text-web-part-729c0aa1-bc0d-41e3-9cde-c60533f2c801) web part stating "Web part xxx was not transformed". See the [Classic and modern web part experiences article](https://support.office.com/en-us/article/classic-and-modern-web-part-experiences-3fdae6c3-8fc1-49ab-8708-8c104b882e64) to understand how classic web parts relate to modern at a functional level.

## Mapping properties

Mapping properties allow you to define the behavior when using the OOB mapping file. A typical sample is enabling the use of the community script editor. Below table defines the available mapping properties.

Mapping property | Default | Description
-----------------|---------|-----------
UseCommunityScriptEditor | false | Configure the use of the community script editor in applicable mappings
SummaryLinksToQuickLinks | true | Configure the mapping of the summarylinks web parts to the [QuickLinks](https://support.office.com/en-us/article/use-the-quick-links-web-part-e1df7561-209d-4362-96d4-469f85ab2a82)

## Web part transformation details

### Enabling the use of the Community Script Editor web part to be used during transformation

There's no OOB modern script editor web part as embedding script is discouraged due to it's inherent security risks. If you however do want to transform classic script editor web parts then you can still do this by using an open-source community modern script editor. 

#### Installing the community script editor

Follow the instructions to install the open source script editor web part (https://github.com/SharePoint/sp-dev-fx-webparts/tree/master/samples/react-script-editor) to your tenant.

#### Set the UseCommunityScriptEditor mapping flag

You need to tell the page transformation engine you've installed the community script editor and that you want to use it during transformation. When using the `ConvertTo-PnPClientSidePage` [PnP PowerShell](https://aka.ms/sppnp-powershell) cmdlet you can specify the `-UseCommunityScriptEditor` flag. When you're using .Net then you can set the flag as shown in below sample

```csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    // If target page exists, then overwrite it
    Overwrite = true,
};

pti.MappingProperties["UseCommunityScriptEditor"] = "true";

pageTransformator.Transform(pti);
```

### XsltListViewWebPart and ListViewWebPart web parts

These web parts are quite flexible in classic and therefore are replaced by more specific modern web parts. The replacement works as follows:

- Document library: [Library](https://support.office.com/en-us/article/use-the-document-library-web-part-a9dfecc3-2050-4528-9f00-2c5afc5731b0) web part
- List: [List]([List](https://support.office.com/en-us/article/use-the-list-web-part-ef0a1b80-f8b3-443d-b04a-1e76c70b5537)) web part
- Calendar: [Events](https://support.office.com/en-us/article/use-the-events-web-part-5fe4da93-5fa9-4695-b1ee-b0ae4c981909) web part
- Issue list: [List]([List](https://support.office.com/en-us/article/use-the-list-web-part-ef0a1b80-f8b3-443d-b04a-1e76c70b5537)) web part
- Task list: [Text](https://support.office.com/en-us/article/add-text-and-tables-to-your-page-with-the-text-web-part-729c0aa1-bc0d-41e3-9cde-c60533f2c801) web part explaining this could not be mapped
- Discussion board: [Text](https://support.office.com/en-us/article/add-text-and-tables-to-your-page-with-the-text-web-part-729c0aa1-bc0d-41e3-9cde-c60533f2c801) web part explaining this could not be mapped
- Survey list: [Text](https://support.office.com/en-us/article/add-text-and-tables-to-your-page-with-the-text-web-part-729c0aa1-bc0d-41e3-9cde-c60533f2c801) web part explaining this could not be mapped

During transformation to either a List or Library web part the transformation engine will try to detect the view used to configure the web part and configure the modern Library or List web part to show the same view.

### ContentEditorWebPart web part

The content editor web part can either be used by pointing to a file somewhere else in SharePoint or alternatively it can have embedded content. Depending on the used mode the following logic is applied:

- File Link:
  - When the file is an ASPX file then this can be shown via the [Embed](https://support.office.com/en-us/article/add-content-to-your-page-using-the-embed-web-part-721f3b2f-437f-45ef-ac4e-df29dba74de8) web part
  - When the content is another type of file then the file contents is read and analyzed:
    - If the file contents does not contain JavaScript then it's transformed into a 3rd party script editor web part (when configured) or a [Text](https://support.office.com/en-us/article/add-text-and-tables-to-your-page-with-the-text-web-part-729c0aa1-bc0d-41e3-9cde-c60533f2c801) web part is shown with the cleaned file contents html
    - If the file contents contains script then it's either transformed into a 3rd party script editor web part (when configured) or replaced by a [Text](https://support.office.com/en-us/article/add-text-and-tables-to-your-page-with-the-text-web-part-729c0aa1-bc0d-41e3-9cde-c60533f2c801) web part telling this content could not be mapped
- Embedded content:
  - If the embedded content does not contain JavaScript then it's transformed into a 3rd party script editor web part (when configured) or a [Text](https://support.office.com/en-us/article/add-text-and-tables-to-your-page-with-the-text-web-part-729c0aa1-bc0d-41e3-9cde-c60533f2c801) web part is shown with the cleaned embedded html
  - If the embedded content contains script then it's either transformed into a 3rd party script editor web part (when configured) or replaced by a [Text](https://support.office.com/en-us/article/add-text-and-tables-to-your-page-with-the-text-web-part-729c0aa1-bc0d-41e3-9cde-c60533f2c801) web part telling this content could not be mapped

### ScriptEditorWebPart web part

By default a [Text](https://support.office.com/en-us/article/add-text-and-tables-to-your-page-with-the-text-web-part-729c0aa1-bc0d-41e3-9cde-c60533f2c801) web part is show to explain this that the content is not transformed, alternatively a community party script editor web part is used if configured (as shown in above)

### SummaryLinks web part

Summary links html is transformed to [QuickLinks](https://support.office.com/en-us/article/use-the-quick-links-web-part-e1df7561-209d-4362-96d4-469f85ab2a82) by default, but optionally you can generate html which then is shown using using the [Text](https://support.office.com/en-us/article/add-text-and-tables-to-your-page-with-the-text-web-part-729c0aa1-bc0d-41e3-9cde-c60533f2c801) web part. To use HTML you need to set the needed mapping property: when using the `ConvertTo-PnPClientSidePage` [PnP PowerShell](https://aka.ms/sppnp-powershell) cmdlet you can specify the `-SummaryLinksToHtml` flag. When you're using .Net then you can set the flag as shown in below sample

```csharp
PageTransformationInformation pti = new PageTransformationInformation(page)
{
    // If target page exists, then overwrite it
    Overwrite = true,
};

pti.MappingProperties["SummaryLinksToQuickLinks"] = "false";

pageTransformator.Transform(pti);
```
