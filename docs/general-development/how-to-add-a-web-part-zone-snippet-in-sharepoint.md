---
title: Add a Web Part zone snippet in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 7583b217-200c-4569-8f88-fe975c8ebd72
---


# Add a Web Part zone snippet in SharePoint

A Web Part zone is a snippet that you can add to a page layout so that content authors can add, edit, or delete Web Parts in that zone.

## Introduction to the Web Part zone snippet
<a name="Introduction"> </a>

A Web Part is a server control that provides a specific piece of SharePoint functionality, and a Web Part zone is a container that determines the layout, behavior, and other properties of the Web Parts contained in that zone. For example, a Web Part zone can specify whether the Web Parts in the zone:
  
    
    

- Are arranged in a horizontal or vertical layout. 
    
  
- Display common user interface (UI) elements such as a title bar or border.
    
  
- Can be customized by content authors when they edit a page in the browser.
    
  
- Can be personalized by site visitors who create a personal view of a Web Part when they view a page in the browser.
    
  
In a publishing site, content authors with the necessary permissions can create or edit pages that reside in the Pages library. As a designer, you can add a Web Part zone to a page layout. When a content author creates or edits a page based on that page layout, the author can add, edit, or delete Web Parts in that zone. For example, you may want to add a Web Part zone to a page layout so that content authors can:
  
    
    

- Display the results of a search query by using a Content Search Web Part. Authors can update or modify the search query when a search-driven Web Part resides inside a Web Part zone.
    
  
- Embed video or audio clips in a webpage by using a Media Web Part.
    
  
- Create lists of hyperlinks that are easily edited, grouped, or reordered by using a Summary Link Web Part.
    
  
- Create a site map that lists all pages in a site and that is automatically updated whenever a page is added, deleted, renamed, or moved by using a Table of Contents Web Part.
    
  

### When to use Web Part zones

When a page layout includes one or more Web Part zones, the Web Part zones are available on all pages that use that layout, which enables authors to insert Web Parts onto those pages. If you enable authors to insert Web Parts on pages, you reduce your control over the users' experience of the site. For example, an author could insert a Table of Contents Web Part onto a page that exposes parts of your site that you don't want visitors to navigate to from the current page.
  
    
    
If you want complete control over how a Web Part appears on your site, and if you want that Web Part to appear on all pages of a certain type, add the Web Part directly to a page layout. If you want a Web Part to appear on all pages in a site, you can also add a Web Part directly to a master page.
  
    
    

> **Note:**
> Web Part zones are available on page layouts but not on master pages—the purpose of zones is to allow authors to modify Web Parts, and authors typically don't edit a master page. 
  
    
    

You can also add Web Part zones to a page layout but restrict their use. For example, you can add Web Parts to a zone, and then set a property of that zone so that content authors can edit the properties of existing Web Parts but not add or remove Web Parts from the zone. Web Part zones have a set of properties that serve a dual purpose. You can use one subset of properties to organize the layout and format of Web Parts on the page. You can use another subset of properties to provide an additional level of protection from modification (or "lock down") of the Web Parts within the zone.
  
    
    
For varying levels of control over how Web Parts are presented on your site, you can:
  
    
    

- Add Web Parts directly to a master page or page layout. This means content authors cannot modify the Web Parts.
    
  
- Add Web Parts to zones on page layouts, but restrict those zones to only the default Web Parts that you add.
    
  
- Add Web Part zones to page layouts, and give content authors complete control over what Web Parts appear in those zones and how they are configured.
    
  
The properties of a Web Part zone can specify whether content authors are allowed to change:
  
    
    

- The layout of Web Parts in the zone by adding, deleting, resizing, or moving the Web Parts.
    
  
- The Web Part settings for all users (the shared view of a Web Part).
    
  
- Their personal Web Part settings (the personal view of a Web Part).
    
  
Table 1 shows important properties to consider when you want to restrict a Web Part zone.
  
    
    

**Table 1. Web Part zone properties used to restrict content authors**


|**Property Name**|**Description**|
|:-----|:-----|
|**AllowLayoutChange** <br/> |Specifies whether Web Parts within the zone can be closed, minimized, deleted, or restored.  <br/> If set to **False**, users cannot close, minimize, delete, or restore Web Parts in the zone, drag Web Parts to a different zone, or rearrange or move Web Parts within the zone. Users also cannot add Web Parts from the Web Part catalog, and several properties that affect the UI of Web Parts in the zone are disabled. This property does not affect the ability to change the layout programmatically.  <br/> If set to **True**, users with appropriate permissions can perform these actions.  <br/> |
|**LockLayout** <br/> |Specifies whether Web Parts within the zone can be added, deleted, resized, or moved. This property works the same whether the Web Part Page is in personal view or shared view.  <br/> If set to **True**, the specific Web Part properties for each Web Part in the zone that are affected are: **Zone (ZoneID)**, **Part Order (PartOrder)**, **Visible on Page (IsVisible)**, **Height (Height)**, **Width (Width)**, **Allow Close (AllowRemove)**, and **IsIncluded** (the **Close** command on the **Web Part** menu). Other Web Part properties are not affected. <br/> If set to **False**, the Web Part properties determine whether modifications can be made (together with the appropriate site permissions).  <br/> |
|**AllowCustomization** <br/> |Specifies whether shared property values of Web Parts within the zone can be modified.  <br/> If set to **True**, users with appropriate permissions can make changes to the Web Parts in the zone for all users.  <br/> If set to **False**, users cannot make changes to the Web Parts in the zone in the UI in shared view. But, changes can still be made programmatically and by using the Web Part Maintenance page.  <br/> |
|**AllowPersonalization** <br/> |Specifies whether personal property values of Web Parts within the zone can be modified.  <br/> If set to **True**, users with appropriate permissions can make personal changes to the Web Parts in the zone.  <br/> If set to **False**, users cannot make personal changes to the Web Parts through the UI, unless the Web Part is a private Web Part and they have appropriate permissions.  <br/> |
   

> **Note:**
> You cannot insert a Web Part zone inside a Device Channel Panel. If you want to allow authors to add Web Parts to a page, and if you are not concerned about the page weight for mobile devices, you can add a Rich Text Editor page field to a Device Channel Panel, and then instruct authors to add Web Parts there. You can add Web Parts directly to a Device Channel Panel (without a Web Part zone). For more information, see  [How to: Add a Device Channel Panel snippet in SharePoint](how-to-add-a-device-channel-panel-snippet-in-sharepoint.md). 
  
    
    


## Inserting a Web Part zone snippet
<a name="InsertSnippet"> </a>

Like all snippets, you add this snippet from the Snippet Gallery. To navigate to the Snippet Gallery, you must first select a page layout to edit. Web Part zones can be added to page layouts but cannot be added to master pages.
  
    
    

### To insert a Web Part zone snippet


1. Browse to your publishing site.
    
  
2. In the upper-right corner of the page, choose the Settings gear, and then choose **Design Manager**.
    
  
3. In Design Manager, in the left navigation pane, choose **Edit Page Layouts**.
    
  
4. Select the name of the page layout that you want to add the snippet to.
    
  
5. To open the Snippet Gallery, choose **Snippets** in the upper-right corner of the server-side preview.
    
  
6. On the ribbon, on the **Design** tab, choose **Web Part zone**.
    
  
7. On the right side of the Snippet Gallery, under **About this Component**, click or select section headers to expand or collapse groups of properties, and then configure any custom settings that you want.
    
    The section named **Important** contains the properties that are key to how this particular snippet works. For a Web Part zone, the snippet has a unique ID. After you copy the snippet into your page layout, you should not reuse this ID. If you want to add another Web Part zone snippet, choose **Refresh** to generate a new ID for the next snippet.
    
    For descriptions of properties that are necessary for restricting a Web Part zone ( **LockLayout**, **AllowCustomization**, and **AllowPersonalization**), see Table 1.
    
    > **Note:**
      > You may notice that some property names are bold in the property grid of the Snippet Gallery. These properties have values that have been changed from the default setting for this component, but these properties are not necessarily relevant to a designer scenario. In other words, a property may be bold but not necessarily important for your scenario. 
8. After you configure any properties, choose **Update**. This updates the HTML snippet on the left side of the page, so that the markup reflects your custom settings. You can always choose **Reset** to return all properties to their default settings.
    
  
9. On the left side of the Snippet Gallery, under **HTML Snippet**, choose **Copy to Clipboard**.
    
  
10. In your HTML editor, open the mapped network drive on your computer, and then open the HTML file for the master page or page layout that you're adding the snippet to.
    
    For more information, see  [How to: Map a network drive to the SharePoint Master Page Gallery](how-to-map-a-network-drive-to-the-sharepoint-master-page-gallery.md).
    
  
11. In the HTML file, paste the snippet where you want the markup to appear.
    
    When you are adding the snippet to a page layout, make sure to paste the snippet inside **PlaceHolderMain**.
    
  
12. Replace the **<div>** where `class="DefaultContentBlock"` with your own specific content.
    
  
13. If you want to prepopulate the zone with Web Parts—for example, if the zone will restrict content authors to modifying only existing Web Parts and not adding new ones—insert Web Part snippets where the **<!--DC … -->** tag appears.
    
  
14. Save the page, and then refresh the server-side preview in Design Manager to make sure the page appears as expected.
    
  

## Understanding the snippet markup
<a name="UnderstandMarkup"> </a>

The two most important parts of a Web Part zone snippet are the **ID** property and the **<!--DC … -->** comment. Each zone should have a unique ID. If you want to add more than one Web Part zone to your page layout, make sure to choose **Refresh** in the Snippet Gallery before copying each snippet so that a new ID is generated. The **<!--DC … -->** comment should be replaced with any Web Parts that you want to appear in the zone by default.
  
    
    
Additional properties that can be used to restrict how content authors can use zones ( **AllowCustomization**, **AllowPersonalization**, and **LockLayout**) are shown in the following code.
  
    
    

> **Note:**
> The **AllowCustomization**, **AllowPersonalization**, and **LockLayout** properties appear in the markup only if you change their default values in the property grid.
  
    
    




```HTML

<div data-name="WebPartZone">
    <!--CS: Start Web Part Zone Snippet-->
    <!--SPM:<%@Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
    <div xmlns:ie="ie">
        <!--MS:<WebPartPages:WebPartZone runat="server" ID="x0e5f5212505f48a9aac43df13eeae4f9" AllowCustomization="True" AllowPersonalization="False" FrameType="TitleBarOnly" LockLayout="True" Orientation="Vertical">-->
            <!--MS:<ZoneTemplate>-->
               <!--DC: Replace this comment with default web parts for new pages. -->
            <!--ME:</ZoneTemplate>-->
        <!--ME:</WebPartPages:WebPartZone>-->
    </div>
    <!--CE: End Web Part Zone Snippet-->
</div>

```


## Additional resources
<a name="AdditionalResources"> </a>


-  [SharePoint Design Manager snippets](sharepoint-design-manager-snippets.md)
    
  
-  [WebPartZone class](http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.webparts.webpartzone.aspx)
    
  
-  [WebPartZoneBase properties](http://msdn.microsoft.com/en-us/library/335sw9k3.aspx)
    
  
-  [Build sites for SharePoint](build-sites-for-sharepoint.md)
    
  
-  [Develop the site design in SharePoint](develop-the-site-design-in-sharepoint.md)
    
  

