---
title: SharePoint pages and the page model
ms.date: 11/03/2017
---
# SharePoint pages and the page model

This article introduces the SharePoint page model, including master pages, content pages, parts of a SharePoint page, and default page file types. 

_**Applies to:** Office 365 | SharePoint 2013 | SharePoint Online_

A rendered SharePoint page is a combination of three page types: 

- A master page, which controls the layout and appearance of the content.
    
- A content page, which contains the page field controls.
    
- A user-friendly authoring page, which is where the user adds content.
    
This article provides an overview of the SharePoint page model, including the page types, the default page files that are available in SharePoint 2013 and SharePoint Online, and information about how pages are processed. 

## Key terms and concepts related to the SharePoint page model
<a name="sectionSection0"> </a>

|**Term or concept**|**Definition**|**Access via**|**More information**|
|:-----|:-----|:-----|:-----|
|Collaboration site|A team site.|||
|Content placeholder|An entry in a master page that reserves a space for controls or content that can be programmatically replaced later.|All SharePoint master pages|Content placeholders are the building blocks of SharePoint master pages.|
|Master page|A page that standardizes the behavior and presentation of the left and top navigation elements of a SharePoint page.|SharePoint file system Master Page Gallery||
|Master page gallery|A special document library in SharePoint 2013 where all branding elements - master pages, page layouts, JavaScript files, CSS, and images - are stored by default. Every site has its own Master Page Gallery.| **Settings** > **Site Settings** > **Master Pages and Page Layouts**|The Master Page Gallery contains catalogs that store branding assets such as master pages and CSS files.<br/>**Tip**  When you create custom branding elements, store custom assets in the default Master Page Gallery file structure.<br/>[Master pages, the Master Page Gallery, and page layouts in SharePoint 2013](http://msdn.microsoft.com/library/80b9a360-bc2e-46c6-b0ca-1bc487b73db6.aspx)|
|Minimal Download Strategy (MDS)|A strategy that reduces the amount of data that the browser must download when users navigate from one SharePoint page to another.|Site settings|When MDS is active, SharePoint passes all page requests through  `/_layouts/15/start.aspx` and checks for visual differences between new page requests and the previously loaded page.<br/>[Optimize page performance in SharePoint 2013](http://msdn.microsoft.com/library/262caeef-64fd-4e02-b947-d772faf01159.aspx)<br/>[Minimal Download Strategy overview](http://msdn.microsoft.com/library/9caa7d99-1e74-4889-96c7-ba5a10772ad7.aspx)|
|Navigation|Functionality that enables users to move around the information architecture of a SharePoint site. Navigation elements in SharePoint include search, tree controls, buttons, the ribbon, hyperlinks, tabs, menus, and taxonomy.||[Navigation class](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.navigation.aspx)<br/>[NavigationNode class](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.navigationnode.aspx)|
|Oslo master|A default master page in SharePoint 2013.|SharePoint file system Master Page Gallery|Unlike the seattle.master master page, the current navigation is in the same position as the top navigation area.|
|Page content control|A control on a publishing site where a Web Part can be added.|||
|Page layout|A template applied to a Publishing page that enforces the consistent presentation of content.|SharePoint file system Master Page Gallery| [How to: Create a page layout in SharePoint 2013](http://msdn.microsoft.com/library/5447e6a1-2f14-4667-81d0-7514b468be80.aspx)|
|Page model|The files, content, and interactions that result in a SharePoint page rendered to users in a browser.|| [Overview of the SharePoint 2013 page model](http://msdn.microsoft.com/library/808b1af3-89ab-4f02-89cc-ea86cb1f9a6e.aspx)|
|Publishing page|An .aspx page in a Publishing site.|| [PublishingPage class](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.publishingpage.aspx)|
|Publishing site|A SharePoint site that can access publishing sites and pages, which include page layouts, taxonomy, managed navigation, and other web content management and enterprise content management features. || [PublishingWeb class](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.publishing.publishingweb.aspx) [What's new with SharePoint 2013 site development](https://msdn.microsoft.com/en-us/library/office/jj163942.aspx)|
|Seattle.master|A default master page in SharePoint 2013.|SharePoint file system Master Page Gallery||
|Team site|A site designed for users to collaborate on documents, wikis, ideas, processes, and so on.|||
|Text layout|Defines the content areas that appear on a Wiki page.|||
|Text layout control|A wiki page control that can contain text, images, Web Parts, and App Parts.|||
|Top-level site|The default, top-level site provided by the server.|| [Create a SharePoint site](https://support.office.com/en-us/article/Create-a-SharePoint-site-4b1c153a-ec2b-45df-9dd9-e31d25563d1b?CorrelationId=ad2fc24e-9e3e-4da4-be0f-500d2e89fc64&amp;ui=en-US&amp;rs=en-US&amp;ad=US)|
|Web Part|Server-side controls that run inside the context of site pages.|| [Custom actions and property bag entries from a SharePoint app](http://blogs.msdn.com/b/vesku/archive/2013/10/02/ftc-to-cam-custom-actions-and-property-bag-entries.aspx)|
|Web Part page|A content page made up of Web part zones, which can contain Web Parts. Web Parts are represented on Web Part pages by  [WebPartDefinition](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.webparts.webpartdefinition.aspx) objects.|| [Microsoft.SharePoint.Client.WebParts namespace](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.webparts.aspx)|
|Web Part zone|An area on a page where a Web Part can be added.|||
|Wiki page|A content page that uses the Enterprise Wiki site template.|| [Provisioning.Pages sample app](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Pages)|

## SharePoint master pages
<a name="sectionSection1"> </a>

A master page is an ASP.NET file with a .master extension. It includes a  `<%@ Master` directive, and defines the top-level HTML elements such as **HTML**,  **Head**, and  **Form**. It first lists controls and assemblies, and then declares a Document Type Definition of  **DOCTYPE**, which tells the browser how to render the HTML. SharePoint 2013 is tuned to work best with the  **XHTML 1.0** and **HTML5** DOCTYPES.

SharePoint includes several master pages by default. These master pages provide the default structure and chrome of a given SharePoint page that is appropriate for the SKU and site type, where these are applicableâ€”specifically, on the top and left sides of the page. Table 2 lists the default SharePoint 2013 and SharePoint Online master pages.

**Table 2. Default SharePoint master pages**

|**Master page**|**Description**|
|:-----|:-----|
|Custom.master|System pages, such as forms and views. Used by all SharePoint 2013 and SharePoint Online SKUs.|
|Default.master|Site pages in publishing sites. Included in all SharePoint 2013 and SharePoint Online SKUs. Available when the publishing feature is activated.|
|Application.master|Some system pages, such as scope.aspx and keyword.aspx. Included in all SharePoint 2013 and SharePoint Online SKUs.|
|Minimal.master|Available default master page option in all SharePoint 2013 SKUs.|
|Seattle.master|Available default master page option in all SharePoint 2013 and SharePoint Online SKUs.|
|Oslo.master|Available default master page option in all SharePoint 2013 and SharePoint Online SKUs.|
|Kyoto.master|A master page available in SharePoint Online. |
|Berlin.master|A master page available in SharePoint Online. |
|Lyon.master|A master page available in SharePoint Online. |
|Mysite15.master|OneDrive for Business sites (previously: My Site, personal sites, or OneDrive Pro sites).|
Each default SharePoint master page includes controls that are required for common web programming technologies such as HTML, CSS, and JavaScript, to function in SharePoint.

Content placeholders hold the place for information defined in content pages. Content placeholders correspond to areas of a page. Each area of a .master page is defined by between a few and hundreds of content placeholders.

SharePoint master pages use a mix of ASP.NET ( `<asp:`) and SharePoint ( `<SharePoint:`) declarations. The text after the colon in a declaration defines the control's functionality; for example,  `SharePoint:PlaceholderGlobalNavigation` embeds the global navigation of a SharePoint page into the relevant HTML tags on that page. Content controls in a master page bind content placeholders to content with the **ContentPlaceHolderID**.

SharePoint provides two types of master pages: system master pages andsite master pages. System master pages are applied to all form pages and view pages on a SharePoint site. Site master pages, on the other hand, are used by all pages in a Publishing site. You can tell which kind of master page a site is using by opening the .master page file and viewing the  **Page** directive. A system master page has a page directive as follows: `~masterurl/default.master`. A site master page has the following page directive:  `~masterurl/custom.master`.

You can use CSOM code to set master page propertiesâ€”mainly by writing code against the [Web](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.web.aspx) object. Change the system master page by using its [MasterUrl](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.web.masterurl.aspx) property, and change the site master page by using the object's [CustomMasterUrl](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.web.custommasterurl.aspx) property.

Content placeholders often include dynamic tokens, which are important pieces of code that form part of a SharePoint page URL. SharePoint parses URL strings according to the rules of protocols, such as HTTP, that define how hypertext information is transferred between the server and a SharePoint page. Usually, a content placeholder that points to a CSS or theme control will use a relative URL, which in the SharePoint server-side object model is represented as  `~SPUrl`.

SharePoint uses dynamic tokens to bind the master page to the content page, which is defined in  `<asp:content>` declaration of .master page code. Table 3 lists dynamic tokens that are found in SharePoint master pages, and either the CSOM properties that replace them when the page is processed, or the form of the URL string that SharePoint renders for that content placeholder.

**Table 3. Dynamic tokens in master pages replaced by property values**

|**Dynamic token**|**Replaced with**|
|:-----|:-----|
|~masterurl/default.master|SPWeb.MasterUrl|
|~masterurl/custom.master|SPWeb.CustomMasterUrl|
|~site/&lt;xyz&gt;.master|http://&lt;siteColl&gt;/&lt;subsite1&gt;/&lt;subsite2&gt;/&lt;xyz&gt;.master|
|~sitecollection/&lt;abc&gt;.master|http://&lt;siteColl&gt;/&lt;abc&gt;.master|

**Note**  The dynamic tokens in content placeholders correspond to server-side API properties and methods. When using remote provisioning, write code in CSOM or REST.To learn more about dynamic tokens and SharePoint URLs, see  [URLs and Tokens in SharePoint 2013](http://msdn.microsoft.com/library/161418d7-8123-4c4e-91a1-97e43c17f0e6.aspx). Add-ins for SharePoint use some tokens that apply to site URLs.

## Web Part pages and Wiki pages
<a name="sectionSection2"> </a>

Web Part pages can contain structured and unstructured information. They are made up of Web Part zones. Web Parts placed in Web Part zones can display data from lists, search results, and queries, and can present custom views of data from multiple sources. A Web Part page contains most of the same elements as a standard SharePoint Team site. The Title bar can contain a title, caption, description, company logo, or other image. The Web Part Page adds the following elements:

- A Web Part Page menu that can be used to add or modify Web Parts, design the page layout, and switch between personal and shared views.
    
- A tool pane used to find and add Web Parts and edit properties related to Web Parts and the Web Part page.
    
Compared to Web Part pages, wiki pages are less structured. Because of their semi-structured to unstructured form, they make it easy for users to create content and collaborate with each other. By default, SharePoint displays a wiki page the first time you view a new Team site.

Enterprise wiki functionality is available in all versions of SharePoint. The Enterprise Wiki template makes it possible to create and use page layouts with wiki pages. When you edit a wiki page, Web Parts, text, and other content is displayed in the text layout. The text layout arranges content areas on a wiki page.

You can use the remote provisioning pattern to create a wiki page. The [WikiPageCreationInformation](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.utilities.wikipagecreationinformation.aspx) class provides methods you can use to create the wiki page, while the **WikiHtmlContent** property gets and sets HTML content on the page. The [Utility](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.utilities.utility.aspx) class includes a **CreateWikiPageInContextWeb** method, which SharePoint uses to create the wiki page in the client runtime context using parameters from the **WikiPageCreationInformation** class.

## Page layouts
<a name="sectionSection3"> </a>

The page layout is the content page of choice for Publishing sites. Page layouts are templates that define different kinds of pages in a SharePoint site, such as articles, by customizing the structure of the body of the page. Just as the Web Part page is a template that exists to arrange Web Part zones and Web Parts on a page, page layouts exist to arrange fields on a page. The field controls defined in a page layout will contain content that an author creates, and the structure of that content will be based on the page layout.

**Note**  Page layouts can include Web Part zones.

Designers can apply styles to page field controls. This gives designers control over how CSS is applied to each field and rendered, yet allows users to create and manage content in each page field.

In SharePoint, content types are reusable collections of metadata (also known as columns) and behavior that define specific items and documents. For example, you might want to create a kind of content that looks and behaves the way you think an online magazine article would. Content types make it possible for you to do that. You might also want to create other unique kinds of content, but reuse and share characteristics of one content type in others. Every page layout is based on exactly one content type. Every content type is assigned a unique  [Content Type ID](https://msdn.microsoft.com/en-us/library/office/aa543822%28v=office.14%29.aspx).

To learn more about content types, see  [Introduction to Content Types](https://msdn.microsoft.com/en-us/library/office/ms472236%28v=office.14%29.aspx),  [Columns](https://msdn.microsoft.com/en-us/library/office/ms196085%28v=office.14%29.aspx), and  [Custom Information in Content Types](https://msdn.microsoft.com/en-us/library/office/ms468437%28v=office.14%29.aspx).

**Important**   Currently, you can use the remote provisioning pattern to apply out-of-the-box page layouts to a SharePoint site. Although you can provision custom content types on a site by using CSOM code via custom add-ins for SharePoint code, and setting custom **ContentTypeId** via CSOM is supported in SharePoint Online, setting the ContentTypeId for a custom content type via remote provisioning on on-premises SharePoint sites is not currently supported. For more information, see [How to: Create a page layout in SharePoint 2013](http://msdn.microsoft.com/library/5447e6a1-2f14-4667-81d0-7514b468be80.aspx).

## SharePoint page processing model
<a name="sectionSection4"> </a>

SharePoint is a template-based page rendering system that combines master pages, content pages, and authored content to render pages. The page rendering system is known as the  [page processing model](https://msdn.microsoft.com/en-us/library/office/ms498550%28v=office.14%29.aspx). Master pages are used by all page instances in the site to which they are applied, and content pages are used by all instances of the page that are based on that content page.

The page processing model interprets and runs all the requests that user agents such as web browsers make to the server. For example, consider a user requesting a page called contoso.aspx. To complete the request, the ASP.NET engine retrieves two pages: the content page associated with contoso.aspx, and the master page that the file provider associated with the SharePoint site. The engine also retrieves the field controls and Web Parts from fields and renders them on the page.

**Note**  The page processing logic for Team sites and sites is similar to that for Publishing pages. 

### Page processing

When a SharePoint user loads a Web Part page, SharePoint gets it by parsing the path to its template, page content, and context. It also sets the Web Parts associated with the Web Part page, assigns a  [WebPartCollection](http://msdn2.microsoft.com/EN-US/library/k41e9930) instance to the page, and populates the Web Part page and its Web Parts with content.

When a SharePoint user loads a wiki page (either by using the Enterprise Wiki template on a Team site or a Publishing site), SharePoint gets it by parsing the path to its template, page content, and context. It also sets the text layout control associated with the wiki page, and populates the enterprise wiki page and its text layout with content. To learn more about how to provision a wiki page by using the remote provisioning pattern, see the  [Provisioning.Pages](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Pages) sample.

### Minimal download strategy and <AjaxDelta> controls

In SharePoint, the minimal download strategy feature manages which specific content on a master page to refresh before the page renders. When the strategy is enabled, the content associated with content placeholders wrapped in  `<SharePoint:AjaxDelta>` tags on the master page refreshes before the page renders. Conversely, content placeholders not wrapped in `<SharePoint:AjaxDelta>` tags does not render when the minimal download strategy is enabled.

You can enable or disable the minimal download strategy through central site administration or by using the SharePoint client-side object model (CSOM). You can activate the feature by using the  [EnableMinimalDownload](https://msdn.microsoft.com/en-us/library/office/microsoft.sharepoint.client.web.enableminimaldownload.aspx) property. For more information, see [Minimal Download Strategy overview](http://msdn.microsoft.com/library/9caa7d99-1e74-4889-96c7-ba5a10772ad7.aspx). For more information about how to optimize a master page to work well with the minimal download strategy, see  [Modify SharePoint components for MDS](http://msdn.microsoft.com/library/c967be7c-f29f-481a-9ce2-915ead315dcd.aspx).

The minimal download strategy feature is enabled by default on SharePoint Team sites, and disabled by default on SharePoint Publishing sites and SharePoint Team sites with Publishing enabled.

### Creating a custom master page based on seattle.master

You can use remote provisioning to provision site branding elements such as themes to a site, and you can use CSS or JavaScript to show or hide elements or page controls. Customizing a master page provides an additional level of control over the page structure. When you create a custom master page, do not edit and then save a default master pageby using its default name (for example, seattle.master). Instead, make a copy of the default master page you want to modify, and rename it.

**Important**   Because of the potential long-term impact of ongoing support costs and maintenance, we recommend that you do not change the structure of a new master page. You can make changes to the master page that support branding that don't affect the structure, such as changing colors in the header, adding a color background to specific elements of a page, or showing and hiding a site logo. If the default .master page you're using does not include a structural element, such as a footer, that you want to include on your page, use a different out-of-the-box master page.

To help maintain consistency in a custom master page, follow the existing coding pattern. For example, in areas of the page that use tables, reinforce the coding pattern by using tables. In areas where  `<DIV>` tags or HTML5 are used, match any custom code with `<DIV>` tags or HTML5. In the long run, this will make any custom master pages that you have to create easier to maintain, and therefore, less expensive.

## Additional resources
<a name="bk_addresources"> </a>

-  [Branding and site provisioning solutions for SharePoint 2013 and SharePoint Online](Branding-and-site-provisioning-solutions-for-SharePoint.md)
    
-  [Master pages, the Master Page Gallery, and page layouts in SharePoint 2013](http://msdn.microsoft.com/library/80b9a360-bc2e-46c6-b0ca-1bc487b73db6.aspx)
    
-  [How to: Create a page layout in SharePoint 2013](http://msdn.microsoft.com/library/5447e6a1-2f14-4667-81d0-7514b468be80.aspx)
    
-  [SharePoint 2013: Use an app for SharePoint to provision a wiki page](https://code.msdn.microsoft.com/SharePoint-2013-Use-an-app-5db977e8)
    
-  [Minimal Download Strategy overview](http://msdn.microsoft.com/library/9caa7d99-1e74-4889-96c7-ba5a10772ad7.aspx)
    
-  [Introduction to Content Types](https://msdn.microsoft.com/en-us/library/office/ms472236%28v=office.14%29.aspx)
