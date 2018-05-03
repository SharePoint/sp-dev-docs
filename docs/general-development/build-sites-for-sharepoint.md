---
title: Build sites for SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 3b372a63-7cdf-462a-abb4-750e611e967d
---


# Build sites for SharePoint
Learn about the new site authoring and publishing model for websites in SharePoint.
## Introduction to site publishing for designers and developers in SharePoint
<a name="SP15_BuildSitesForSP2013_IntroToSitePublishing"> </a>

SharePoint introduces a site authoring and publishing model to create publishing sites. You can use publishing sites to publish content on intranet or Internet sites. Publishing sites differ from other types of SharePoint sites, such as team sites, mainly due to their purpose—many users read publishing site content, but only a few contribute by adding, updating, and deleting content from one or more site collections. Contrast these sites with team sites, where many people may collaborate and contribute to the content. 
  
    
    
You can use the SharePoint site publishing capabilities to build, customize, and maintain publishing sites that meet specific business needs. Whether you are a professional designer with HTML, CSS, and JavaScript skills or a developer who writes SharePoint apps and uses custom .NET code to build sites and farm solutions, you can use site features in SharePoint to manage all phases of the content life cycle, including:
  
    
    

- **Authoring** and reusing site content.
    
  
- **Branding** and designing your site's look, feel, and behavior.
    
  
- **Managing metadata**—you can build a taxonomy-driven site navigation system.
    
  
- **Publishing** content smoothly to the current site collection, or publishing content across site collections—even spanning the intranet and Internet site boundary.
    
  
- **Accessibility**—you can use to improve the accessibility of your published sites.
    
  
If you want to see a summary of what's new for designers and developers of publishing websites in SharePoint, see  [What's new with SharePoint site development](what-s-new-with-sharepoint-site-development.md). 
  
    
    

## Authoring, design, and branding in SharePoint
<a name="SP15_BuildSitesForSP2013_AuthoringDesignBranding"> </a>

SharePoint provides a new approach for designing websites. The content-creation workflow is revised so that you can create content using any —and author great content. To brand your site without having to write custom .NET code, use the  [Design Manager](overview-of-design-manager-in-sharepoint.md) to import design elements. With Design Manager, you can also create an HTML-based master page to define the chrome shared by all of your site's pages and create page layouts to design templates for pages. If you choose to write custom code, you can use .NET server, .NET client (CSOM.md), Silverlight, and JavaScript libraries.
  
    
    
SharePoint also provides a new approach to content and authoring. The content-creation workflow is revised so that you can create content using any authoring and branding tool and author great content. To brand your site without having to write custom ASP.NET code, use the Design Manager. You can import design elements and create an HTML-based master page to define the shared framing elements—the chrome—that all of your site's pages and page layouts share. If you choose to write custom code when branding your site, you can use the publishing and taxonomy libraries.
  
    
    

## Publishing sites, client object model programming, and the new SharePoint app model
<a name="SP15_BuildSitesForSP2013_PublishingSites"> </a>

You can use the new .NET client object model (CSOM) to develop SharePoint apps with the model for SharePoint Add-ins. You can use many of the APIs that are also available for .NET server programming in the .NET client object models, which support .NET client, Silverlight, JavaScript—and in some cases Windows Phone—development. Some ideas for developing apps for websites include surveys, account management apps, eCommerce support, integrating social features and external data into publishing websites, outsourced content additions, and mobile companion apps. 
  
    
    

## Page model for publishing websites
<a name="SP15_BuildSitesForSP2013_PageModel"> </a>

SharePoint includes a page model for publishing websites. The page model includes master pages, page layouts, and other components that render your site structure, content, look and feel, and behavior. To learn more, see  [Overview of the SharePoint page model](overview-of-the-sharepoint-page-model.md).
  
    
    

## Master pages and page layouts
<a name="SP15_BuildSitesForSP2013_MasterAndLayout"> </a>

A master page is the main template that defines the shared structural elements of your site—the chrome. All of the pages on the site share these elements, which define the regions of the page that display page layout content.
  
    
    
Page layouts are used by individual pages of a certain type. They are populated with arrangements of page fields. These pages define individual elements on the page. Individual pages are based on page layouts and are created in your web browser either by custom code or by how the site's users fill out the page's fields. To learn more about the page model in SharePoint, see  [Overview of the SharePoint page model](overview-of-the-sharepoint-page-model.md). 
  
    
    

## Client-side rendering controls
<a name="SP15_BuildSitesForSP2013_ClientSideRendering"> </a>

All new controls in SharePoint are rendered. Data is written to the controls in a client-side JSON array, and you can display content using JavaScript, CSS, and templates. As a designer or developer, you have control over how content is rendered on the page, and you can use various design techniques to get the look and behaviors you want on your published pages by using features like the  [Content Search web part in SharePoint](content-search-web-part-in-sharepoint.md) and display templates.
  
    
    

## Sites and mobile devices
<a name="SP15_BuildSitesForSP2013_SitesAndMobile"> </a>

Publishing websites in SharePoint are optimized for mobile development. You can define channels for one or more devices (device channels) and assign an alternate master page for each channel, giving it unique structural elements, or chrome. You can choose to include or exclude portions of any page layout in a channel, and preview how mobile channel design is progressing while it's being developed. 
  
    
    

## Metadata and navigation in SharePoint
<a name="SP15_BuildSitesForSP2013_MetadataNav"> </a>

Managed metadata capabilities introduced in Microsoft SharePoint Server 2010 are improved and extended in SharePoint for better performance, easier access through the user interface, and taxonomy-driven navigation—called managed navigation. You can use managed navigation or navigation based on the SharePoint website structure—called structured navigation—to build your site navigation. To learn more about managed navigation, see  [Managed metadata and navigation in SharePoint](managed-metadata-and-navigation-in-sharepoint.md) and [Managed navigation in SharePoint](managed-navigation-in-sharepoint.md).
  
    
    

## Publishing content in SharePoint
<a name="SP15_BuildSitesForSP2013_PublishingContent"> </a>

SharePoint offers the following new content publishing features that enable you to develop publishing sites that support more flexible, more accessible, and more complex topologies and scenarios. 
  
    
    

### Catalogs

SharePoint introduces catalogs, which you can use to publish content across site collections. Cross-site publishing features depend on catalogs. You can use them to reuse content across your sites and across the boundary between your intranet sites and Internet sites. For predefined search queries, catalogs are flagged in search. You can surface content stored in catalogs across site collections by using the  [Content Search web part in SharePoint](content-search-web-part-in-sharepoint.md).
  
    
    

### Cross-site publishing

SharePoint introduces a cross-site publishing feature to reuse content across multiple site collections. It uses built-in search capabilities to enable publishing scenarios and architectures. For the first time, you can design sites that cross SharePoint farms—enabling your sites to span the boundary between intranets and the Internet. You can use the CSWP to display search data published from across sites and site collections.
  
    
    

### Variations and multilingual sites

You can use the variations feature in SharePoint to create multilingual sites or other sites where you want to vary the presentation of your content. The variations feature is constrained to one site collection. That is, you can create target language/locale "variants" of a source language/locale as current websites within the same SharePoint site collection. Variations supports friendly URLs and the ability to export or import content for translation by a third party in  [XLIFF file format](the-xliff-interchange-file-format-in-sharepoint.md). You can include labels, a page for translation and replication, a variety of list items (for example, document libraries.md), and navigation in your export packages. 
  
    
    

### Accessible sites

You can use the variations feature in SharePoint to create accessible sites or other sites where you want to adapt the presentation of your content for users who have a variety of accessability needs. SharePointprovides a "More Accessible Mode", which can be activated by opening a SharePoint webpage, and pressing the TAB key until you find the "Turn on More Accessible Mode" link. This feature recreates the webpage in standard HTML, making it friendlier for screen-readers. By ensuring that users are able to press the TAB key to focus on this link, you are able to create a more accessible version of your SharePoint webpage. This includes JavaScript-based drop-down menus being converted to hyperlink lists and objects are converted to simpler HTML to allow screen-readers to understand the content. 
  
    
    

## See also
<a name="SP15_BuildSitesForSP2013_AdditionalResources"> </a>


-  [Optimize SharePoint site accessibility](optimize-sharepoint-site-accessibility.md)
    
  
-  [Set up a general development environment for SharePoint](set-up-a-general-development-environment-for-sharepoint.md)
    
  
-  [What's new with SharePoint site development](what-s-new-with-sharepoint-site-development.md)
    
  
-  [Minimal Download Strategy overview](minimal-download-strategy-overview.md)
    
  
-  [Modify SharePoint components for MDS](modify-sharepoint-components-for-mds.md)
    
  
-  [SharePoint Sites and Content server class library](http://msdn.microsoft.com/library/8a93e838-234c-41d8-b990-7ac1a415dd5e%28Office.15%29.aspx)
    
  
-  [Sites and Content client class library](http://msdn.microsoft.com/library/e6542022-a459-4c3b-aee0-e350c6397139%28Office.15%29.aspx)
    
  

