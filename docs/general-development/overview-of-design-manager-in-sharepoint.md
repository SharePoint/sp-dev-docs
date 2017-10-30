---
title: Overview of Design Manager in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 29834b3f-3815-4347-91d3-296387663114
---


# Overview of Design Manager in SharePoint
Get an overview of using Design Manager to brand your SharePoint site. Design Manager is a publishing feature that is available in publishing sites in both SharePoint and Office 365. 
## Introduction to Design Manager
<a name="Introduction"> </a>

If you want your SharePoint site to represent your organization's brand and not "look like SharePoint," you can create a custom design and use Design Manager to achieve that goal. Design Manager is a feature in SharePoint that makes it easier to create a fully customized, pixel-perfect design while using the web-design tools that you're already familiar with. Design Manager is a publishing feature that is available in publishing sites in both SharePoint and Office 365. 
  
    
    
With Design Manager, you can create a visual design for your website by using whatever web design tool or HTML editor you prefer, using only HTML and CSS, and then upload that design into SharePoint. Design Manager is the central hub and interface where you manage all aspects of a custom design.
  
    
    
Creating the visual design of a site often fits into a larger process, in which multiple people or organizations are involved. For a roadmap of the tasks from a larger perspective, see  [Design and branding in SharePoint](http://go.microsoft.com/fwlink/?LinkId=262838)
  
    
    
At a high level, the designer will perform the following tasks:
  
    
    

- Understand core SharePoint design concepts. For more information, see  [Overview of the SharePoint page model](overview-of-the-sharepoint-page-model.md).
    
  
- Create a mock-up of the design in HTML and CSS. Creating the design is a core skill of a web designer, and is not covered in this article.
    
  
- Implement the design by using Design Manager. Sections of this article provide an introduction to Design Manager and the process of using Design Manager to implement a visual design.
    
 


## Use Design Manager to implement a design
<a name="Use"> </a>

When you look at Design Manager, you see a series of links on the left side that represent the high-level tasks that you have to perform. Depending on your design and your site's requirements, you may not have to perform all of these tasks, and you don't necessarily have to perform them in this order. Still, this sequence is a useful starting point.
  
    
    

### Before you begin

Before you can use Design Manager, you need a design. You can create your own, or use a ready-made website template. A "design" is simply a group of files that implement the visual design of your site, most commonly:
  
    
    

- At least one HTML file that will be converted into a SharePoint master page
    
  
- One or more CSS files
    
  
- JavaScript files
    
  
- Images
    
  
- Other supporting files
    
  
As you mock up your site in HTML and CSS, you will likely have several HTML files that implement designs for how you want different pages or types of pages to appear. Remember that only one of these HTML files will be converted into the master page (unless you have multiple device channels, where each channel has its own master page—see the following section). After you use Design Manager to create other site elements, such as page layouts or display templates, you can transfer markup from your HTML mock-ups to the HTML and CSS files associated with the page layout or display template.
  
    
    
Before you begin, you also need the required SharePoint permissions. To use Design Manager, you must have at least the Designer permission level.
  
    
    

### Manage device channels

Even before you design your site, you want to consider what devices your site should target and what will be the user experience on each device. For example, you may want to optimize your site's design for a certain class of smart phones or tablets.
  
    
    
Depending on what channels you define, you may want several designs, and so several HTML files, where each file gets converted into a separate master page. Also, each HTML file (and so each master page) can reference its own CSS file. Before you design your site, device channels are one of the first things to consider.
  
    
    
With device channels, you can render a single publishing site in multiple ways by mapping different designs to different devices. Each channel can have its own master page that links to a style sheet that is optimized for a specific device. Each channel specifies the user agent substrings for one or more devices, such as "Windows Phone OS". These are rules that determine what devices are included in each channel. Then, when visitors browse your site, each channel captures the traffic for its specified device or class of devices, such as Windows phones, and visitors see your site in a design optimized for their specific device.
  
    
    
Device channels are created and stored in a SharePoint list in which order matters, because device channels also have rankings. Device channels in the list are ordered from top to bottom, and the inclusion rules are processed in that order. This means that you want device channels with the most specific rules at the top. For example, a channel targeting "Windows Phone OS 7.0" should precede a channel targeting "Windows Phone OS".
  
    
    

### Upload design files

When you create a design, you can use whatever HTML editor you prefer and work with files locally on your computer. But, eventually, you will have to upload those files to the Master Page Gallery of your SharePoint site, so that you can use Design Manager to convert, preview, and polish your design.
  
    
    
The easiest way to upload and continue to work on design files is to map a drive on your computer to the Master Page Gallery of your SharePoint site. This connects a folder on your computer to the Master Page Gallery, so that you can work on files that reside on the server in SharePoint as if they were local files.
  
    
    
After you map a network drive, you can upload your design to SharePoint simply by copying the design files to a folder on the mapped drive of your computer that is connected to SharePoint. After you convert your HTML file to a SharePoint master page, and after you create page layouts and display templates that each have their own associated HTML file, you can continue to edit those associated HTML files in your HTML editor on your computer. Each time you save a file in the mapped drive, SharePoint automatically synchronizes the files on your computer with the Master Page Gallery. You can create your own folder structure on the mapped drive, and that structure is maintained by SharePoint and appears in the Master Page Gallery. You should keep all files related to one design in a single folder, and then copy that folder to the mapped drive when you are ready to upload your design.
  
    
    
For more information, see  [How to: Map a network drive to the SharePoint Master Page Gallery](how-to-map-a-network-drive-to-the-sharepoint-master-page-gallery.md).
  
    
    

### Edit master pages

Creating a fully branded master page that contains all of the SharePoint functionality that you want, such as navigation and search, is basically a three-step process:
  
    
    

1. Convert an HTML file into a SharePoint master page.
    
  
2. Preview the master page and fix any issues.
    
  
3. Add SharePoint snippets to the master page.
    
  
Each of these three steps is performed on a different page in Design Manager.
  
    
    

#### Convert an HTML file

The core feature of Design Manager is that it converts your HTML design into a SharePoint master page. To render successfully, a SharePoint master page must contain many ASP.NET elements and elements that are specific to SharePoint. When you convert an HTML file to a master page, Design Manager creates a .master file that contains all of these required elements, so that you don't have to know about them. During conversion, some HTML markup (such as comments) also gets added to your original HTML file.
  
    
    
After the conversion, your HTML file and the SharePoint master page are associated, so that when you edit and save the HTML file in your mapped drive, the master page is updated automatically. In Design Manager, the HTML master page has a property named **Associated File** that determines whether changes to the HTML file are synced to the .master file.
  
    
    

> **Note:**
> Design Manager also provides an option to begin your design by using a minimal master page. In this scenario, you don't have to begin with an HTML design; instead, you can create an HTML master page that contains the minimum page elements necessary to render the master page correctly in SharePoint, and then build out your design by editing the HTML master page. 
  
    
    


#### Preview the master page

In addition to converting your master page, Design Manager provides a server-side preview (vs. the design-time preview in your HTML editor), so that you can get a live preview of your master page and fix any issues that might prevent the page from rendering. For example, your HTML file must be XML-compliant, so you may have to fix minor markup issues such as providing closing tags for all elements. To fix any issues, you should edit the HTML file, save it, and then refresh the server-side preview.
  
    
    
When you preview a master page, you can use the **Change Preview Page** option in the top-left corner to preview the master page along with any existing page, or create a new page to preview with. Unlike the design-time preview of your HTML master page in an HTML editor, this server-side preview is a fully functional live preview, so you may prefer to edit the HTML file, save it so that the latest changes are synced to the associated .master file, and refresh the live preview and view your latest design changes in the browser.
  
    
    

#### Add snippets

After you convert your master page and successfully preview it, you are ready to add snippets to the master page. A snippet is an HTML representation of a SharePoint component—such as a navigation control or search box or Web Part—that you can add to your master page. Adding snippets to your master page is how you quickly build the full range of SharePoint functionality into your master page. Adding snippets is basically a three-step process:
  
    
    

1. Find and configure snippets in the Snippet Gallery.
    
  
2. Copy snippets to your HTML master page.
    
  
3. Preview and style snippets by using CSS.
    
For more information, see  [SharePoint Design Manager snippets](sharepoint-design-manager-snippets.md).
    
  

#### Find and configure snippets in the Snippet Gallery

The Snippet Gallery is where you can quickly see which components are available for the type of file you're editing, either master page or page layout. On the ribbon, you select a snippet. In the property grid on the right, you can configure the properties for this instance of a snippet, and then choose **Update** to refresh the HTML snippet on the left.
  
    
    

#### Copy snippets to your HTML master page

After you configure a snippet, you copy it to the Clipboard and then paste it at the right spot in your HTML file. Your HTML design may already contain mockup or static controls, in which case you'll want to delete them or comment them out as you replace them with dynamic snippets from the Snippet Gallery.
  
    
    

#### Preview and style snippets by using CSS

After you copy snippets into your HTML file and then save the changes, you can refresh the server-side preview of the master page to see how the control is rendered. Snippets contain markup that provides a design-time preview in an HTML editor, but the server-side preview shows a full-fidelity preview with live data—for example, a navigation control will show the site's current navigation structure with live data from your data source.
  
    
    
By default, most snippets inherit styles from the main SharePoint style sheet, corev15.css. To style a snippet, you have to identify what styles are applied to the snippet and then override them with custom CSS. To identify these default styles, you can use a browser tool such as the developer tools in Internet Explorer. While viewing your master page in the server-side preview in Internet Explorer, press **F12**, choose **Find**, and then choose **Select element by click**. This lets you click the snippet and see exactly what styles to override by adding CSS to whatever custom style sheet your master page links to.
  
    
    

### Edit display templates

If you are using an on-premises installation of SharePoint Server, you can use the Content Search Web Part and other search-driven Web Parts to display the results of search queries as content on your pages. Search-driven Web Parts use display templates for two main purposes:
  
    
    

- To map the managed properties that are returned in search-result items to properties that will be available for JavaScript, including whatever custom JavaScript you choose to implement.
    
  
- To use HTML and CSS to present and style how those properties are displayed.
    
  
With master pages and page layouts, you edit an associated HTML file but not the .master file or .aspx file. Similarly, display templates are made of an HTML file and an associated .js file, where you edit only the HTML file. Each time you save that HTML file, SharePoint automatically updates the associated .js file.
  
    
    
When you want to create a custom display template, you should begin by copying and then modifying one of the existing display templates. This is helpful because the default display templates contain information in comments in the HTML files, and you'll have the proper basic page structure and a framework in place for basic tasks like mapping input fields.
  
    
    

### Edit page layouts

The process for creating a page layout is a bit different from that for creating a master page. For a master page, you start with an HTML design, convert that into a SharePoint master page, and then continue to edit the associated HTML file. But for a page layout, you first create the page layout in Design Manager, which creates an .aspx file and an HTML file, and then you edit the associated HTML file from the mapped drive in your HTML editor. The reason you have to use Design Manager to create a page layout is so that the correct set of page fields can get added to the page layout.
  
    
    
When you create a page layout, you select a master page with which to preview your page layout, and you select a Page Layout Content Type. A content type is a schema of fields and data types, and the fields available in the page layout content type determine what page field controls are available on the page layout that you design. You create a page layout in the browser first so that the page fields can be added.
  
    
    
After you create a page layout with its associated HTML file, the remaining steps are the same as for a master page:
  
    
    

- Preview the page layout and fix any issues by editing and saving the HTML version.
    
  
- Add snippets to the page layout (configure, copy, preview, style).
    
  
In the Snippet Gallery, different snippets are available for page layouts and master pages, and the ribbon displays only the snippets that are relevant for that type of file. For example, navigation and search box snippets are available only for a master page, while page fields are available only on a page layout.
  
    
    
When you design a page layout, your basic task is to position and style the page field controls that will display content created by content authors. The styles for a page layout can reside in whatever style sheet the master page links to, or each page layout can link to its own specific style sheet. If your HTML design includes content more suitable for a page layout than a master page, you want to transfer that content out of your HTML master page, and then apply those styles to the correct controls and elements of the relevant page layout.
  
    
    
For more information, see  [How to: Create a page layout in SharePoint](how-to-create-a-page-layout-in-sharepoint.md).
  
    
    

### Create themes and composed looks

In the Office 365, but not in on-premises SharePoint installations, Design Manager has the option of creating themes and composed looks. A theme is a set of fonts and colors that can be applied to a custom design (meaning a master page). Themes are defined in .xml files that you upload to the Themes gallery. If you want a custom master page to be theme-able, you need to add special markup to the master page that SharePoint recognizes and uses to insert theme elements such as fonts and colors.
  
    
A composed look is just an association between a background image, a theme (meaning fonts and colors), and a design (meaning a master page). A composed look takes predefined design elements—themes, background images, and master pages—and enables them to be used in many different combinations.
  
    

### Publish and apply design

Most assets used by your design, such as images, HTML, CSS, and JavaScript files, will reside in the Master Page Gallery. The Master Page Gallery is a SharePoint document library that by default has versioning turned on, which creates major and minor (draft) versions each time you edit a file.
  
    
    
Before you can apply your design to a site, you first have to publish a major version of each file or asset used by your design. If you are designing your site in a test environment, you should turn off versioning for the Master Page Gallery, so that you don't have to remember to publish every file before you preview the site. But this is not a best practice if you are designing on a live site.
  
    
    
After you publish all the design files, you are ready to apply the design by assigning your finished master pages to your site. Each site can have a different master page assigned to each device channel, and this page of Design Manager is where you apply a master page to a channel.
  
    
    

### Create a design package

A design package is an easy way to collect all the files and assets used by your design, export them from one site, import them into another site, and apply the design to the new site. If you implement and polish your design in a test site collection and want to deploy it in a live site collection, you can use a design package to transfer your design.
  
    
    
A design package is a .wsp file, a SharePoint solution file, which is basically a special type of .cab file. When you create or import a design package, the .wsp file is stored in the Solutions gallery. After you import a design package, the package is automatically activated. If the master pages and page layouts were published before they were packaged, and if the master pages were assigned to device channels before they were packaged, the design will be automatically applied to the site when the design package is deployed. Otherwise, to apply the design to the new site, you just have to publish the design files and apply the master pages per device channel.
  



## Additional resources
<a name="Additional"> </a>


-  [Overview of the SharePoint page model](overview-of-the-sharepoint-page-model.md)
    
  
-  [How to: Convert an HTML file into a master page in SharePoint](how-to-convert-an-html-file-into-a-master-page-in-sharepoint.md)
    
  
-  [How to: Create a page layout in SharePoint](how-to-create-a-page-layout-in-sharepoint.md)
    
  

