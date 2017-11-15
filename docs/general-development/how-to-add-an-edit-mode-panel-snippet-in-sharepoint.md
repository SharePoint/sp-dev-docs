---
title: Add an Edit Mode Panel snippet in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 39fa1e32-9129-407d-914f-96f4c6e66dc8
---


# Add an Edit Mode Panel snippet in SharePoint

An Edit Mode Panel is a snippet that you can use to display instructions or other content to content authors, who see the contents of that panel only when they edit a page. Conversely, this snippet can also be configured to display its contents only in regular (view) mode instead of in edit mode.

## Introduction to the Edit Mode Panel
<a name="Introduction"> </a>

In a publishing site, content authors with the necessary permissions can create or edit pages that reside in the Pages library. Typically, an author chooses to create or edit a page, and then adds content to the various page fields.
  
    
    
As a designer, you can add an Edit Mode Panel to a master page or page layout, and the contents of that snippet will be visible to content authors only when they choose to edit a page based on that page layout or a page associated with that master page. For example, you can use an Edit Mode Panel to display the following content only to content authors when the page is in edit mode:
  
    
    

- A page field, such as **Schedule Publishing Date**, that's important to the content author but not to visitors viewing the page on the live site.
    
  
- A description of what kind of content should be entered in a page field.
    
  
- A note to content authors that they should consider how the page looks for different device channels.
    
  
You can also put links to different style sheets in an Edit Mode Panel so that you can provide different styling for edit mode vs. view mode.
  
    
    
You should add the Edit Mode Panel to a page layout when the notes for content authors are specific to the content type on which that page layout is based. You can also add this snippet to a master page when the notes for authors are applicable to all pages that will be associated with that master page—for example, if the panel will contain instructions for supplying content for a specific device channel that uses that master page.
  
    
    
You can also set an Edit Mode Panel to display its contents only in regular mode, instead of edit mode, if you have a scenario where it's useful or helpful to display content only to site visitors (but not content authors) when they're editing a page.
  
    
    

### Insert an Edit Mode Panel
<a name="InsertSnippet"> </a>

Like all snippets, you add this snippet from the Snippet Gallery. To navigate to the Snippet Gallery, you must first select a master page or page layout to edit.
  
    
    

### To insert an Edit Mode panel


1. Browse to your publishing site.
    
  
2. In the upper-right corner of the page, choose the Settings gear, and then choose **Design Manager**.
    
  
3. In Design Manager, in the left navigation pane, choose **Edit Master Pages** or **Edit Page Layouts**, depending on what type of file you're editing.
    
  
4. Select the name of the master page or page layout that you want to add the snippet to.
    
  
5. To open the Snippet Gallery, choose **Snippets** in the upper-right corner of the server-side preview.
    
  
6. On the ribbon, on the **Design** tab, choose **Edit Mode Panel**, and then choose the mode that you want your snippet to be displayed in.
    
  
7. On the right side of the Snippet Gallery, under **About this Component**, click or select section headers to expand or collapse groups of properties, and then configure any custom settings that you want.
    
    The section named Important contains the properties that are most important to how this particular snippet works. For an Edit Mode Panel, the **PageDisplayMode** property will be set to either **Edit** or **Display**, depending on the mode that you selected on the ribbon.
    
  
8. After you configure any properties, choose **Update**. This updates the HTML snippet on the left side of the page, so that the markup reflects your custom settings. You can always choose **Reset** to return all properties to their default settings.
    
  
9. On the left side of the Snippet Gallery, under **HTML Snippet**, choose **Copy to Clipboard**.
    
  
10. In your HTML editor, open the mapped network drive on your computer, and then open the HTML file for the master page or page layout that you're adding the snippet to. For more information, see  [How to: Map a network drive to the SharePoint Master Page Gallery](how-to-map-a-network-drive-to-the-sharepoint-master-page-gallery.md).
    
  
11. In the HTML file, paste the snippet where you want the markup to appear.
    
    If you're adding the Edit Mode Panel to a page layout, make sure to paste the snippet inside **PlaceHolderMain** so that the panel is visible to content authors in edit mode. You can paste the snippet immediately before a specific page field, or you can put one or more page fields inside the Edit Mode Panel.
    
  
12. Replace the **<div>** where `class="DefaultContentBlock"` with your own specific content—for example, with notes or instructions to content authors, or specific page fields that are useful for authors but not site visitors.
    
  
13. Save the page, and then refresh the server-side preview in Design Manager to make sure the Edit Mode Panel appears as expected.
    
  

## Understand the snippet markup
<a name="UnderstandMarkup"> </a>

The two most important parts of an Edit Mode Panel snippet are the **PageDisplayMode** property and the **<div>** where `class="DefaultContentBlock"`. The **PageDisplayMode** property determines whether the contents of the panel are displayed only in edit mode or in regular/display mode (meaning whenever the page is not in edit mode).
  
    
    

> **Note:**
> This property doesn't appear in the markup unless you change the value to **Display**. When the property does not appear in the markup, the default mode for the snippet is Edit mode. 
  
    
    

The **<div>** where `class="DefaultContentBlock"` is what you replace with your own content, which can include other snippets and controls.
  
    
    



```HTML

<div data-name="EditModePanelShowInEdit">
    <!--CS: Start Edit Mode Panel Snippet-->
    <!--SPM:<%@Register Tagprefix="Publishing" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
    <!--MS:<Publishing:EditModePanel runat="server" PageDisplayMode="Display" CssClass="edit-mode-panel">-->
        <!--PS: Start of READ-ONLY PREVIEW (do not modify)--><!--PE: End of READ-ONLY PREVIEW-->
        <div class="DefaultContentBlock" style="border:medium black solid; background:yellow; color:black; margin:20px; padding:10px;">
        You should replace this div with content that renders based on your Edit Mode Panel Properties.
        </div>
        <!--PS: Start of READ-ONLY PREVIEW (do not modify)--><!--PE: End of READ-ONLY PREVIEW-->
    <!--ME:</Publishing:EditModePanel>-->
    <!--CE: End Edit Mode Panel Snippet-->
</div>
```


## Additional resources
<a name="AdditionalResources"> </a>


-  [SharePoint Design Manager snippets](sharepoint-design-manager-snippets.md)
    
  
-  [How to: Add a Security Trim snippet in SharePoint](how-to-add-a-security-trim-snippet-in-sharepoint.md)
    
  
-  [Build sites for SharePoint](build-sites-for-sharepoint.md)
    
  
-  [Develop the site design in SharePoint](develop-the-site-design-in-sharepoint.md)
    
  

