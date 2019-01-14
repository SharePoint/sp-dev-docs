---
title: Add a web part zone snippet in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 7583b217-200c-4569-8f88-fe975c8ebd72
localization_priority: Priority
---


# Add a web part zone snippet in SharePoint

A web part zone is a snippet that you can add to a page layout so that content authors can add, edit, or delete web parts in that zone.

## Introduction to the web part zone snippet
<a name="Introduction"> </a>

A web part is a server control that provides a specific piece of SharePoint functionality, and a web part zone is a container that determines the layout, behavior, and other properties of the web parts contained in that zone. For example, a web part zone can specify whether the web parts in the zone:
  
    
    

- Are arranged in a horizontal or vertical layout. 
    
  
- Display common user interface (UI) elements such as a title bar or border.
    
  
- Can be customized by content authors when they edit a page in the browser.
    
  
- Can be personalized by site visitors who create a personal view of a web part when they view a page in the browser.
    
  
In a publishing site, content authors with the necessary permissions can create or edit pages that reside in the Pages library. As a designer, you can add a web part zone to a page layout. When a content author creates or edits a page based on that page layout, the author can add, edit, or delete web parts in that zone. For example, you may want to add a web part zone to a page layout so that content authors can:
  
    
    

- Display the results of a search query by using a Content Search web part. Authors can update or modify the search query when a search-driven web part resides inside a web part zone.
    
  
- Embed video or audio clips in a webpage by using a Media web part.
    
  
- Create lists of hyperlinks that are easily edited, grouped, or reordered by using a Summary Link web part.
    
  
- Create a site map that lists all pages in a site and that is automatically updated whenever a page is added, deleted, renamed, or moved by using a Table of Contents web part.
    
  

### When to use web part zones

When a page layout includes one or more web part zones, the web part zones are available on all pages that use that layout, which enables authors to insert web parts onto those pages. If you enable authors to insert web parts on pages, you reduce your control over the users' experience of the site. For example, an author could insert a Table of Contents web part onto a page that exposes parts of your site that you don't want visitors to navigate to from the current page.
  
    
    
If you want complete control over how a web part appears on your site, and if you want that web part to appear on all pages of a certain type, add the web part directly to a page layout. If you want a web part to appear on all pages in a site, you can also add a web part directly to a master page.
  
> [!NOTE]
> Web part zones are available on page layouts but not on master pages—the purpose of zones is to allow authors to modify web parts, and authors typically don't edit a master page. 
  
    
    

You can also add web part zones to a page layout but restrict their use. For example, you can add web parts to a zone, and then set a property of that zone so that content authors can edit the properties of existing web parts but not add or remove web parts from the zone. web part zones have a set of properties that serve a dual purpose. You can use one subset of properties to organize the layout and format of web parts on the page. You can use another subset of properties to provide an additional level of protection from modification (or "lock down") of the web parts within the zone.
  
    
    
For varying levels of control over how web parts are presented on your site, you can:
  
    
    

- Add web parts directly to a master page or page layout. This means content authors cannot modify the web parts.
    
  
- Add web parts to zones on page layouts, but restrict those zones to only the default web parts that you add.
    
  
- Add web part zones to page layouts, and give content authors complete control over what web parts appear in those zones and how they are configured.
    
  
The properties of a web part zone can specify whether content authors are allowed to change:
  
    
    

- The layout of web parts in the zone by adding, deleting, resizing, or moving the web parts.
    
  
- The web part settings for all users (the shared view of a web part).
    
  
- Their personal web part settings (the personal view of a web part).
    
  
Table 1 shows important properties to consider when you want to restrict a web part zone.
  
    
    

**Table 1. Web part zone properties used to restrict content authors**


|**Property Name**|**Description**|
|:-----|:-----|
|**AllowLayoutChange** <br/> |Specifies whether web parts within the zone can be closed, minimized, deleted, or restored.  <br/> If set to **False**, users cannot close, minimize, delete, or restore web parts in the zone, drag web parts to a different zone, or rearrange or move web parts within the zone. Users also cannot add web parts from the web part catalog, and several properties that affect the UI of web parts in the zone are disabled. This property does not affect the ability to change the layout programmatically.  <br/> If set to **True**, users with appropriate permissions can perform these actions.  <br/> |
|**LockLayout** <br/> |Specifies whether web parts within the zone can be added, deleted, resized, or moved. This property works the same whether the web part page is in personal view or shared view.  <br/> If set to **True**, the specific web part properties for each web part in the zone that are affected are: **Zone (ZoneID)**, **Part Order (PartOrder)**, **Visible on Page (IsVisible)**, **Height (Height)**, **Width (Width)**, **Allow Close (AllowRemove)**, and **IsIncluded** (the **Close** command on the **web part** menu). Other web part properties are not affected. <br/> If set to **False**, the web part properties determine whether modifications can be made (together with the appropriate site permissions).  <br/> |
|**AllowCustomization** <br/> |Specifies whether shared property values of web parts within the zone can be modified.  <br/> If set to **True**, users with appropriate permissions can make changes to the web parts in the zone for all users.  <br/> If set to **False**, users cannot make changes to the web parts in the zone in the UI in shared view. But, changes can still be made programmatically and by using the web part Maintenance page.  <br/> |
|**AllowPersonalization** <br/> |Specifies whether personal property values of web parts within the zone can be modified.  <br/> If set to **True**, users with appropriate permissions can make personal changes to the web parts in the zone.  <br/> If set to **False**, users cannot make personal changes to the web parts through the UI, unless the web part is a private web part and they have appropriate permissions.  <br/> |
   
> [!NOTE]
> You cannot insert a web part zone inside a Device Channel Panel. If you want to allow authors to add web parts to a page, and if you are not concerned about the page weight for mobile devices, you can add a Rich Text Editor page field to a Device Channel Panel, and then instruct authors to add web parts there. You can add web parts directly to a Device Channel Panel (without a web part zone). For more information, see  [How to: Add a Device Channel Panel snippet in SharePoint](how-to-add-a-device-channel-panel-snippet-in-sharepoint.md). 
  
    
    


## Inserting a web part zone snippet
<a name="InsertSnippet"> </a>

Like all snippets, you add this snippet from the Snippet Gallery. To navigate to the Snippet Gallery, you must first select a page layout to edit. Web part zones can be added to page layouts but cannot be added to master pages.
  
    
    

### To insert a web part zone snippet


1. Browse to your publishing site.
    
  
2. In the upper-right corner of the page, choose the Settings gear, and then choose **Design Manager**.
    
  
3. In Design Manager, in the left navigation pane, choose **Edit Page Layouts**.
    
  
4. Select the name of the page layout that you want to add the snippet to.
    
  
5. To open the Snippet Gallery, choose **Snippets** in the upper-right corner of the server-side preview.
    
  
6. On the ribbon, on the **Design** tab, choose **web part zone**.
    
  
7. On the right side of the Snippet Gallery, under **About this Component**, click or select section headers to expand or collapse groups of properties, and then configure any custom settings that you want.
    
    The section named **Important** contains the properties that are key to how this particular snippet works. For a web part zone, the snippet has a unique ID. After you copy the snippet into your page layout, you should not reuse this ID. If you want to add another web part zone snippet, choose **Refresh** to generate a new ID for the next snippet.
    
    For descriptions of properties that are necessary for restricting a web part zone ( **LockLayout**, **AllowCustomization**, and **AllowPersonalization**), see Table 1.
    
    > [!NOTE]
    > You may notice that some property names are bold in the property grid of the Snippet Gallery. These properties have values that have been changed from the default setting for this component, but these properties are not necessarily relevant to a designer scenario. In other words, a property may be bold but not necessarily important for your scenario. 

8. After you configure any properties, choose **Update**. This updates the HTML snippet on the left side of the page, so that the markup reflects your custom settings. You can always choose **Reset** to return all properties to their default settings.
    
  
9. On the left side of the Snippet Gallery, under **HTML Snippet**, choose **Copy to Clipboard**.
    
  
10. In your HTML editor, open the mapped network drive on your computer, and then open the HTML file for the master page or page layout that you're adding the snippet to.
    
    For more information, see  [How to: Map a network drive to the SharePoint Master Page Gallery](how-to-map-a-network-drive-to-the-sharepoint-master-page-gallery.md).
    
  
11. In the HTML file, paste the snippet where you want the markup to appear.
    
    When you are adding the snippet to a page layout, make sure to paste the snippet inside **PlaceHolderMain**.
    
  
12. Replace the **<div>** where `class="DefaultContentBlock"` with your own specific content.
    
  
13. If you want to prepopulate the zone with web parts—for example, if the zone will restrict content authors to modifying only existing web parts and not adding new ones—insert web part snippets where the **<!--DC … -->** tag appears.
    
  
14. Save the page, and then refresh the server-side preview in Design Manager to make sure the page appears as expected.
    
  

## Understanding the snippet markup
<a name="UnderstandMarkup"> </a>

The two most important parts of a web part zone snippet are the **ID** property and the **<!--DC … -->** comment. Each zone should have a unique ID. If you want to add more than one web part zone to your page layout, make sure to choose **Refresh** in the Snippet Gallery before copying each snippet so that a new ID is generated. The **<!--DC … -->** comment should be replaced with any web parts that you want to appear in the zone by default.
  
    
    
Additional properties that can be used to restrict how content authors can use zones ( **AllowCustomization**, **AllowPersonalization**, and **LockLayout**) are shown in the following code.
  
> [!NOTE]
> The **AllowCustomization**, **AllowPersonalization**, and **LockLayout** properties appear in the markup only if you change their default values in the property grid.
  
    
    




```HTML

<div data-name="WebPartZone">
    <!--CS: Start web part zone Snippet-->
    <!--SPM:<%@Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
    <div xmlns:ie="ie">
        <!--MS:<WebPartPages:WebPartZone runat="server" ID="x0e5f5212505f48a9aac43df13eeae4f9" AllowCustomization="True" AllowPersonalization="False" FrameType="TitleBarOnly" LockLayout="True" Orientation="Vertical">-->
            <!--MS:<ZoneTemplate>-->
               <!--DC: Replace this comment with default web parts for new pages. -->
            <!--ME:</ZoneTemplate>-->
        <!--ME:</WebPartPages:WebPartZone>-->
    </div>
    <!--CE: End web part zone Snippet-->
</div>

```


## See also
<a name="AdditionalResources"> </a>


-  [SharePoint Design Manager snippets](sharepoint-design-manager-snippets.md)
    
  
-  [WebPartZone class](http://msdn.microsoft.com/en-us/library/system.web.ui.webcontrols.webparts.webpartzone.aspx)
    
  
-  [WebPartZoneBase properties](http://msdn.microsoft.com/en-us/library/335sw9k3.aspx)
    
  
-  [Build sites for SharePoint](build-sites-for-sharepoint.md)
    
  
-  [Develop the site design in SharePoint](develop-the-site-design-in-sharepoint.md)
    
  

