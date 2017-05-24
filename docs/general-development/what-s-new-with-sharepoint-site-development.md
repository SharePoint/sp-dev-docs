---
title: What's new with SharePoint site development
ms.prod: SHAREPOINT
ms.assetid: ac1e9891-5ce9-4707-84e5-6e2fc02fda6b
---


# What's new with SharePoint site development
Learn about the new site authoring and publishing model in SharePoint that enables you to create publishing sites.
## Introduction to site publishing for designers and developers in SharePoint
<a name="SP15_WhatsNewSiteDevelopment_IntroductionToSitePublishing"> </a>

The following features are new in SharePoint and support the enterprise content management (ECM) site creation workflow for publishing sites.
  
    
    

### Client programming models for publishing site development

In SharePoint, you can use the .NET client object model (CSOM), Silverlight, and JavaScript programming models to develop custom sites, site components, branding elements, and behavior. Most APIs available for .NET server programming are available in corresponding .NET client (CSOM), Silverlight, and JavaScript assemblies. In some cases, corresponding APIs are also available in Windows Phone libraries.
  
    
    
To learn more, see the reference home pages for sites and content for  [.NET server](http://msdn.microsoft.com/library/8a93e838-234c-41d8-b990-7ac1a415dd5e%28Office.15%29.aspx),  [.NET client](http://msdn.microsoft.com/library/e6542022-a459-4c3b-aee0-e350c6397139%28Office.15%29.aspx), and  [JavaScript](http://msdn.microsoft.com/library/1ead2f8d-a541-4a50-89fa-f195f2ba14e5%28Office.15%29.aspx). Or, start with the  [reference home page](http://msdn.microsoft.com/library/7940ba4e-f6f0-4bc0-b995-ceb2d358ca0d%28Office.15%29.aspx) if you want to start at the top and then explore the contents of each programming model.
  
    
    

### Using publishing and taxonomy APIs with the new SharePoint app model

You can write custom client and server code in SharePoint Add-ins that extend the SharePoint publishing and taxonomy functionality that's available to users through the user interface (UI). 
  
    
    
Some ideas for developing apps that enhance site publishing include surveys, account management apps, eCommerce support, apps that integrate social features and external data into publishing sites, outsourced content additions to your sites, and mobile companion apps.
  
    
    

## Authoring, design, and branding features
<a name="SP15_WhatsNewSiteDevelopment_AuthoringAndBranding"> </a>

SharePoint includes features and APIs that you can use to author, design, brand, and extend your site, site design and branding elements, and behaviors. 
  
    
    

### Design Manager

In previous versions of SharePoint, branding a site required specific technical expertise about things like what content placeholders are required on a master page, or how a master page implements certain classes of styles. SharePoint introduces  [Design Manager](overview-of-design-manager-in-sharepoint)—a new interface and central hub for managing all aspects of branding your SharePoint site. You can find the Design Manager in the top-level site for your site collection. It is a part of the Publishing Portal site collection template in SharePoint.
  
    
    
Design Manager enables a step-by-step approach for creating design assets that you can use to brand sites. Upload design assets—images, HTML, CSS, and so on—and then create your master pages and page layouts. You can preview how your design looks either in a client-side code editor or on the server as you are designing it. You can add custom SharePoint components and ribbon elements by using the Design Manager UI. The Design Manager generates HTML  [snippets](sharepoint-design-manager-snippets) that can be used by any web design tool—it renders HTML and ignores ASP.NET and SharePoint markup (while SharePoint renders only ASP.NET and SharePoint markup and ignores HTML).
  
    
    
You can use your expertise in HTML, CSS, and JavaScript to design master pages in HTML, and design HTML page layouts in the HTML editor of your choice. To connect your favorite authoring and design tool to your SharePoint site,  [map a network drive](how-to-map-a-network-drive-to-the-sharepoint-master-page-gallery) and then edit the SharePoint file as if it were a local file. When your site design is ready, upload the HTML and supporting files and use Design Manager to [convert the HTML file into an ASP.NET master page (.master) file](how-to-convert-an-html-file-into-a-master-page-in-sharepoint). Now,  [apply the master page](how-to-apply-a-master-page-to-a-site-in-sharepoint) to your SharePoint site. Use Design Manager to [create a new page layout](how-to-create-a-page-layout-in-sharepoint), and the HTML version of it is automatically associated with the corresponding ASP.NET page (.aspx file) that SharePoint interprets. 
  
    
    
After you convert your HTML files, you can use your HTML editor to continue to refine your design, preview your files, and save them. Every time you save the HTML versions of the master page or page layout files, SharePoint automatically updates the associated SharePoint master page and page layouts to reflect your changes. 
  
    
    
With Design Manager, you only have to edit the HTML files—while you can continue to write custom master pages and page layouts using your ASP.NET and SharePoint development skills, Design Manager enables you to design great sites without SharePoint developer expertise.
  
    
    
If you prefer, SharePoint also includes HTML versions of several master pages and page layouts that you can use as starter templates. If you want to start from these files, create a copy of the HTML file (the associated ASP.NET file will be taken care of for you), and then edit the HTML file as you normally would. You can also start from just a basic template by using the **master page from minimal template** option, which automatically creates the associated .master file.
  
    
    

### Snippet Gallery

SharePoint contains many ready-to-use components—like Web Parts and controls—that you can add to your site's pages. For example, by inserting a SharePoint component such as a search box or navigation control into your HTML master page, you can quickly and easily build a lot of functionality into your pages.
  
    
    
On the ribbon, in the **Snippet Gallery** group, you can select a component, configure its properties and update the snippet, copy the HTML snippet that's generated, and paste that HTML snippet into your HTML file. The HTML snippet gives you a high-fidelity preview of that component, both in the server-side preview and in your HTML editor of choice. After you add SharePoint components to your HTML files, you can use CSS to fully brand them. And just like any update to the HTML file, after you add SharePoint components and brand them, the changes are automatically synchronized to the associated master page or page layout. The HTML snippets are automatically converted into SharePoint components.
  
    
    
 Whether your HTML file is a master page or a page layout, the Snippet Gallery shows you the components that you need. If you don't see the snippet you want, you can create an HTML snippet of ASP.NET markup and add that to your HTML master page or page layout.
  
    
    
Design Manager generates HTML snippets that can be used by any web design tool—it just renders HTML and ignores ASP.NET and SharePoint markup. SharePoint renders only ASP.NET and SharePoint markup and ignores HTML.
  
    
    

### Device channels

In Design Manager, you create  [device channels](sharepoint-design-manager-device-channels), and then you map them to mobile devices or browsers by using substrings of each incoming device's user agent string. A device can belong to multiple channels, so channels can be ranked. For example, if you create device channels for "smart phones" and "Windows Phone 8", you can rank the channels so that devices running Windows Phone 8 get the channel specifically assigned to them, while all other smart phones get content associated with the "smart phones" channel.
  
    
    
After you define channels, map a master page to each one. This master page can reference a different CSS file than the master page for the default channel. All page layouts that you create will work with all of the channels that you create; to differentiate page layout designs between channels, use the **Device Channel Panel** control.
  
    
    
Publishing sites in SharePoint are optimized for mobile development. You can use the device channels feature to define channels for one or more devices—giving you finely-tuned control over how mobile users experience your site. You can assign an alternate master page to each channel, giving it a unique chrome. You can choose to include or exclude portions of any page layout in a channel and preview how mobile channel design is progressing while it is being developed. Device channels are designed with search engine optimization (SEO) in mind. You can use them to transform the look and feel of existing pages to support mobile scenarios.
  
    
    
You can use channels to force specific renderings to appear on specific devices—this is called forcing channels. This is useful in mobile scenarios where you have defined a rendering that is optimal for a specific mobile device.
  
    
    

### Device Channel Panel control

The Device Channel Panel is a new control that you can include in a page layout to control what content is rendered in which channel. The Device Channel Panel is a container that is mapped to one or more channels: If one or more of those channels are active when the page is rendered, all of the contents of the Device Channel Panel are rendered. The Device Channel Panel helps you determine when to include specific content for specific channels.
  
    
    

### Display templates
<a name="SP15_BuildSitesForSP2013_DisplayTemplates"> </a>

You may want to control the format and presentation of search results on your website. You can do that using display templates, which extend the options available for customizing search results through the user interface beyond mapping the predefined fields that you want to display.
  
    
    
There are three contexts when you may want to use display templates with search results—when you want to map how the overall structure of search results are presented, when you want to show groups of results, and when you want to show how each result, or item, in the result set is displayed. These are called Control, Group, and Item templates, respectively.
  
    
    
To learn more about display templates, see  [SharePoint Design Manager display templates](sharepoint-design-manager-display-templates).
  
    
    

### Image renditions
<a name="SP15_BuildSitesForSP2013_DisplayTemplates"> </a>

You can use  [image renditions](sharepoint-design-manager-image-renditions) to display uploaded images in predefined sizes, widths, and crops. You can create more than one rendition of a source image file, which means that you can set the display characteristics once and apply them to any number of images. For example, a rendition named **Article_image** displays a full-sized image in an article, while the rendition named **Thumbnail_small** displays a smaller version of the image in a context that you define.
  
    
    
Before you can use image renditions, ensure that the BLOB cache is enabled on the server, which you can do in the Administration tools in Internet Information Services (IIS). Find your **web.config** file there and enable the BLOB cache. Refresh the page, and image renditions will be available.
  
    
    

## Managed metadata and navigation in SharePoint
<a name="SP15_WhatsNewSiteDevelopment_MetadataAndNavigation"> </a>

Enterprise managed metadata (EMM) capabilities introduced in are improved and extended in SharePoint for better performance, easier access through the UI, and taxonomy-driven navigation—called managed navigation.
  
    
    

### Managed navigation

Managed navigation is the taxonomy-based alternative to the traditional SharePoint navigation feature—called structured navigation—that is based on the structure of SharePoint. The  [managed navigation](managed-navigation-in-sharepoint) feature enables you to design a site navigation that is driven by managed metadata. Managed navigation creates SEO-friendly URLs that are derived from the managed navigation structure. Because managed navigation is driven by taxonomy, you can use it to design site navigation around important business concepts without changing the structure of your sites or site components.
  
    
    

### Content Search Web Part
<a name="SP15_BuildSitesForSP2013_ContentSearchWebPart"> </a>

You can use the  [Content Search Web Part (CSWP)](content-search-web-part-in-sharepoint) to display search data on your pages. It serves a function similar to that of the Content Query Web Part, but it serves different site design goals. CSWP styles are easier to customize than Content Query Web Part styles. CSWP returns client-side results in JSON format. On the server, you can customize results by using display templates.
  
    
    

### Other managed metadata improvements for sites
<a name="SP15_BuildSitesForSP2013_ContentSearchWebPart"> </a>

SharePoint introduces several improvements to the managed metadata UI and functionality. To learn more, see  [Managed metadata and navigation in SharePoint](managed-metadata-and-navigation-in-sharepoint).
  
    
    

## Publishing content in SharePoint
<a name="SP15_WhatsNewSiteDevelopment_Publishing"> </a>

SharePoint offers new content publishing features that enable you to develop publishing sites that support new, more flexible, and more complex topologies and scenarios. 
  
    
    

### Design packages

If you're a professional web designer, you may want to create and test a design in your own environment or site collection before handing it off to install in other site collections. If you're using cross-site publishing to share content across site collections, you may want to package and install the same design on each site.
  
    
    
In previous versions of SharePoint, if you wanted to reuse a design, you had to use Visual Studio to create a SharePoint Solution Package (.wsp file). Then, in the destination site, you would upload the package to the Solutions Gallery and execute it. Now, in SharePoint, after you finish designing your site, you can choose **Export Package** in Design Manager to export a single .wsp file called a [design package](sharepoint-design-manager-design-packages). When you export a design package, SharePoint automatically packages all of the contents that you have added or changed in the Master Page Gallery, Style Library, Theme Gallery, the Device Channels list, and Page content types into a design package. 
  
    
    

> **Note:**
> A design package does not include pages, navigation settings, or the term store. 
  
    
    

For Office 365 public websites, design packages do not overwrite existing files. Installing a design package creates a new folder in the Master Page Gallery, Style Gallery, and Theme Gallery where design assets are isolated. 
  
    
    
When you import a design package, the design assets in the package overwrite any existing files and are applied as the current design of the site. The site's default and system master page, theme, and alternate CSS are all set from the files in the design package. With design packages, a design built in one environment can easily be applied to another, separate environment.
  
    
    

### Catalogs

SharePoint site publishing introduces catalogs, which enable you to incorporate lists into your publishing sites. Catalogs enable content to be published across site collections—the cross-site publishing features depend on catalogs. You can use catalogs to truly reuse content across your sites and across the boundary between your intranet sites, Internet sites, and extranet sites. For predefined search queries, catalogs are flagged in search. You can surface content stored in catalogs across site collections by using the  [Content Search Web Part (CSWP)](content-search-web-part-in-sharepoint). You can write custom code to populate catalogs, connect a product catalog to a site, and curate individual pages with custom page layouts, Web Parts, and HTML content that appears only in the defined context.
  
    
    

### Client-side rendering controls

All new controls in SharePoint are rendered client-side. As a designer or a developer, you have control over how content is rendered on the page, and you can use various design techniques to get the look and behaviors you want on your published pages by using features including the Content Search Web Part and display templates. Data is written to the controls in a client-side JSON array, and you can display content using JavaScript, CSS, and templates. 
  
    
    

### Cross-site publishing

Microsoft SharePoint introduces a cross-site publishing feature that enables you to reuse content across multiple site collections. It uses built-in search capabilities to enable publishing scenarios and architectures. For the first time, you can design sites that cross SharePoint farms—enabling your sites to span the boundary between intranets and the Internet. 
  
    
    
Use the topic pages feature to customize the landing page experience for content that is published across sites. Use SEO-friendly URLs to manage and more easily persist and maintain site structure across a broad range of scenarios—including complex multilingual site topologies.
  
    
    
To learn more about cross-site publishing, see  [Scenario: Create SharePoint sites by using cross-site publishing in SharePoint](http://technet.microsoft.com/en-us/sharepoint/jj872721). To learn more about development options for cross-site publishing, see  [Cross-site publishing in SharePoint](cross-site-publishing-in-sharepoint).
  
    
    

### SEO enhancements

Many business site users are referred to Internet business sites from large search engines like Bing and its global competitors. SharePoint includes features like friendly URLs, home page redirects, XML sitemaps, custom SEO properties that enable you to flexibly define the browser title and **<Meta>** tag descriptions and keywords, and easier-to-understand URLs for multilingual site variations.
  
    
    
In Office 365, the site infrastructure generates an updated XML sitemap for you within 24 hours of a site change. With an on-premises installation, you can tune the freshness of your sitemaps and specify which search engines you want Microsoft to ping when we update the sitemap.
  
    
    
What your friends like on Facebook affects what you see in the search results returned by Bing and other large search engines. You can use APIs in SharePoint programming models to customize how search is optimized for your site.
  
    
    

### Analytics and recommendations

You can track how people use publishing sites and their components using the SharePoint analytics feature, which is deeply integrated with the search engine. Analytics drives recommendations capabilities on content, and injects calculations into the search index as managed properties. The recommendations provided by search analytics, which include page views and unique items per day, can influence the relevance of search results.
  
    
    
Analytics makes data anonymous and rolls it up every 15 days. Analytics purges events every 15 days and then monthly after 3 years. Lifetime views are always retained. The least-visited content is trimmed before analytics pushes aggregate data to a reporting database. You can use custom code to export data to Excel from the reporting database, customize the weight of the **View** event, and create custom events—including those submitted by JavaScript.
  
    
    

### Variations and multilingual sites

You can use the variations feature in SharePoint to create multilingual sites or other sites where you want to vary the presentation of your content. The variations feature is constrained to one site collection. That is, you can create target language/locale "variants" of a source language/locale as current websites within the same SharePoint site collection. Variations supports friendly URLs and the ability to export or import content for translation by a third party in  [XLIFF file format](the-xliff-interchange-file-format-in-sharepoint). You can include labels, a page for translation and replication, a variety of list items (for example, document libraries), and navigation in your export packages. 
  
    
    

## Additional resources
<a name="SP15_WhatsNewSiteDevelopment_AdditionalResources"> </a>


-  [Complete basic operations using SharePoint client library code](http://msdn.microsoft.com/library/5a69c9e3-73bf-4ed5-bc19-182056bdb394%28Office.15%29.aspx)
    
  
-  [Complete basic operations using JavaScript library code in SharePoint](http://msdn.microsoft.com/library/29089af8-dbc0-49b7-a1a0-9e311f49c826%28Office.15%29.aspx)
    
  
-  [How to: Customize page layouts for a catalog-based site in SharePoint](how-to-customize-page-layouts-for-a-catalog-based-site-in-sharepoint)
    
  
-  [How to: Change the preview page in SharePoint Design Manager](how-to-change-the-preview-page-in-sharepoint-design-manager)
    
  
-  [How to: Resolve errors and warnings when previewing a page in SharePoint](how-to-resolve-errors-and-warnings-when-previewing-a-page-in-sharepoint)
    
  
-  [Themes overview for SharePoint](themes-overview-for-sharepoint)
    
  
-  [Managed metadata and navigation in SharePoint](managed-metadata-and-navigation-in-sharepoint)
    
  
-  [What's new in SharePoint search for developers](what-s-new-in-sharepoint-search-for-developers)
    
  

