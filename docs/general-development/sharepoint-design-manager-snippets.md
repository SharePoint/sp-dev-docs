---
title: SharePoint 2013 Design Manager snippets
ms.prod: SHAREPOINT
ms.assetid: 68caef4c-5941-4a88-b34b-f88122801cef
---


# SharePoint 2013 Design Manager snippets
A snippet is an HTML representation of a SharePoint component or control such as a navigation bar or a Web Part. By using the Snippet Gallery in Design Manager, you can quickly add SharePoint functionality to your HTML master page or page layout.
## Introduction to snippets and the Snippet Gallery
<a name="Introduction"> </a>

After you convert a master page or create a page layout, you have an HTML version of that page. With the Snippet Gallery, you can quickly add specific SharePoint functionality, such as search or navigation or device channel panels, to the HTML file associated with your master page or page layout. The Snippet Gallery is a page in Design Manager where you can:
  
    
    

- Choose a SharePoint component from those available on the ribbon.
    
  
- Configure the properties for that component.
    
  
- Preview its appearance in the browser.
    
  
- Copy the HTML code snippet to the Clipboard so that you can paste the snippet at the location you want in the HTML file.
    
  
The Snippet Gallery displays different options on the ribbon, depending on whether you're editing a master page or page layout—for example, navigation controls are displayed only for master pages, and Web Part zones and page field controls are displayed only for page layouts. Also, when you are editing a page layout, the page fields that are available depend on the content type of the page layout that you're editing.
  
    
    
After you paste a snippet into your HTML file, you get a design-time preview from the HTML provided in the snippet. You can also use the server-side preview in Design Manager to see how the control will appear on the live site. The design-time preview may include static sample data, but the server-side preview uses live data, if available. For example, a navigation control that draws navigation links from a term set will display those terms dynamically in the server-side preview, but the design-time preview will have a static snapshot of the terms at the time you created the snippet. Live data is not available in the server-side preview for some snippets, however, including many Web Parts. In this case, the server-side preview may say **Preview Not Available**.
  
    
    

> **Note:**
> A snippet contains HTML markup that gives you a design-time preview in your HTML editor, but the HTML markup contained in "start preview" and "end preview" comments should not be edited because it affects only the design-time preview, not how SharePoint ultimately renders that snippet. Instead, to style your snippet, you typically have to identify and override the default SharePoint styles that are applied to the snippet. 
  
    
    


  
    
    

## Insert a snippet from the Snippet Gallery
<a name="InsertSnippet"> </a>

The Snippet Gallery displays different options depending on the file that you're editing. For example, different page layouts have different sets of page fields available to them. For this reason, to navigate to the Snippet Gallery, you must first select a master page or page layout to edit.
  
    
    

### To insert a snippet


1. Browse to your publishing site.
    
  
2. In the upper-right corner of the page, choose the Settings gear, and then choose **Design Manager**.
    
  
3. In Design Manager, in the left navigation pane, choose **Edit Master Pages** or **Edit Page Layouts**, depending on what type of file you're editing.
    
  
4. Select the name of the master page or page layout that you want to add snippets to.
    
  
5. To open the Snippet Gallery, choose **Snippets** in the upper-right corner of the server-side preview.
    
  
6. On the ribbon, on the **Design** tab, choose the snippet that you want to add to your page.
    
    When you select a snippet, the Snippet Gallery refreshes so that the page shows you a preview of that snippet, the properties available for that snippet, and the HTML code snippet that you can copy into your HTML master page or page layout.
    
  
7. On the right side of the Snippet Gallery, under **About this Component**, click or select section headers to expand or collapse groups of properties, and then configure any custom settings that you want.
    
    The properties that are most important for the core purpose of the snippet appear in the top section named Important. These are the key properties that you have to understand when using a snippet.
    
    
    
    > **Note:**
      > If the property grid has a header that ends with AjaxDelta, you should ignore those properties because they apply to the controls related to the Minimal Download Strategy, which is disabled for master pages and page layouts created through Design Manager. 
8. After you configure any properties, choose **Update**. This updates both the preview and the HTML snippet on the left side of the page, so that the markup reflects your custom settings. You can always choose **Reset** to return all properties to their default settings.
    
  
9. On the left side of the Snippet Gallery, under **HTML Snippet**, choose **Copy to Clipboard**.
    
  
10. In your HTML editor, open the mapped network drive on your computer, and then open the HTML file for the master page or page layout that you're adding the snippet to.
    
  
11. In the HTML file, paste the snippet where you want the markup to appear.
    
    Each snippet contains HTML that provides a visual preview of the component and sample data. You shouldn't modify this HTML for the read-only preview inside the **<!--PS>** and **<!--PE>** tags because this markup affects only the design-time preview of the snippet, not how the snippet will appear on the live site.
    
  
12. To see the server-side preview of the snippet, save the HTML file to sync the changes to the associated ASP.NET file, and then refresh the server-side preview in Design Manager.
    
    Unlike the design-time preview, the server-side preview shows the control as rendered by SharePoint.
    
  

## Understand the markup in an HTML snippet
<a name="UnderstandMarkup"> </a>

A snippet contains four basic sections:
  
    
    

- **Header** with starting **<div>** and **<!--CS>** tags (except custom ASP.NET snippets, which are not wrapped in a **<div>** tag)
    
  
- **SharePoint markup** where snippets are enclosed in **<!--MS>** start and **<!--ME>** end tags
    
  
- **HTML preview** enclosed in **<!--PS>** start and **<!--PE>** end tags
    
  
- **Footer** with closing **<!--CE>** and **</div>** tags
    
  
All sections of a snippet, except the HTML preview, are enclosed in HTML comments to avoid interactions with the Document Object Model (DOM) and existing styling. A snippet starts with the name of a component, and then includes its actual ASP.NET markup, an HTML preview for design-time rendering, and then ending tags. The ASP.NET markup is commented out, but SharePoint strips out the comment tags and uses this markup when the HTML file is synced to the .master or .aspx file. If you know ASP.NET, you can customize this markup in the snippet.
  
    
    
As an example, the following is the default markup for an Edit Mode Panel, which is simply a container that conditionally displays other content and controls.
  
    
    

### Header


```HTML

<div data-name="EditModePanelShowInEdit">
    <!--CS: Start Edit Mode Panel Snippet-->
```


### SharePoint markup


```HTML

<!--SPM:<%@Register Tagprefix="Publishing" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
    <!--MS:<Publishing:EditModePanel runat="server" CssClass="edit-mode-panel">-->
```


### HTML preview


```HTML

<!--PS: Start of READ-ONLY PREVIEW (do not modify)--><!--PE: End of READ-ONLY PREVIEW-->
        <div class="DefaultContentBlock" style="border:medium black solid; background:yellow; color:black; margin:20px; padding:10px;">
        You should replace this div with content that renders based on your Edit Mode Panel Properties.
    
        </div>
        <!--PS: Start of READ-ONLY PREVIEW (do not modify)--><!--PE: End of READ-ONLY PREVIEW-->
```


### Footer


```HTML

<!--ME:</Publishing:EditModePanel>-->
    <!--CE: End Edit Mode Panel Snippet-->
</div>
```

The following is the default markup for a Top Navigation snippet, which is more complex because this snippet contains several different controls, with some nested inside each other, including a data source for the navigation terms, a delegate control, and a content placeholder.
  
    
    

> **Note:**
> Some of the controls, such as the content placeholder, contain empty tags for an HTML preview because that element does not require a visual representation on the page. 
  
    
    


### Header


```HTML

<div data-name="TopNavigationNoFlyoutWithStartNode">
<!--CS: Start Top Navigation Snippet-->    <!--SPM:<%@Register Tagprefix="Publishing" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
    <!--MS:<Publishing:EditModePanel runat="server" CssClass="edit-mode-panel">-->
```


### SharePoint markup


```HTML

<!--SPM:<%@Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
<!--MS:<SharePoint:AjaxDelta ID="DeltaTopNavigation" BlockElement="true" CssClass="ms-displayInline ms-core-navigation ms-dialogHidden" runat="server">-->
```


### HTML preview


```HTML

<!--PS: Start of READ-ONLY PREVIEW (do not modify)-->
<!--PE: End of READ-ONLY PREVIEW-->
```


### SharePoint markup


```HTML

<!--MS:<SharePoint:DelegateControl runat="server" ControlId="TopNavigationDataSource" Id="topNavigationDelegate">-->
```


### HTML preview


```HTML
<!--PS: Start of READ-ONLY PREVIEW (do not modify)-->
<span style="display:none">
<table cellpadding="4" cellspacing="0" style="font:messagebox;color:buttontext;background-color:buttonface;border: solid 1px;border-top-color:buttonhighlight;border-left-color:buttonhighlight;border-bottom-color:buttonshadow;border-right-color:buttonshadow">
<tr><td nowrap="nowrap">
<span style="font-weight:bold">PortalSiteMapDataSource</span> - topSiteMap</td></tr><tr><td></td></tr></table></span>
<!--PE: End of READ-ONLY PREVIEW-->
```


### SharePoint markup


```HTML

<!--MS:<Template_Controls>-->
<!--MS:<asp:SiteMapDataSource ShowStartingNode="True" SiteMapProvider="SPNavigationProvider" ID="topSiteMap" runat="server" StartingNodeUrl="sid:1002">-->
```


### SharePoint markup


```HTML

<!--ME:</asp:SiteMapDataSource>-->
<!--ME:</Template_Controls>-->
<!--ME:</SharePoint:DelegateControl>--><a name="startNavigation"></a>
```


### SharePoint markup


```HTML

<!--MS:<asp:ContentPlaceHolder ID="PlaceHolderTopNavBar" runat="server">-->
<!--MS:<SharePoint:AspMenu ID="TopNavigationMenu" runat="server" EnableViewState="false" DataSourceID="topSiteMap" AccessKey="&amp;#60;%$Resources:wss,navigation_accesskey%&amp;#62;" UseSimpleRendering="true" UseSeparateCss="false" Orientation="Horizontal" StaticDisplayLevels="2" AdjustForShowStartingNode="false" MaximumDynamicDisplayLevels="0" SkipLinkText="">-->
```


### HTML preview


```HTML

<!--PS: Start of READ-ONLY PREVIEW (do not modify)-->
<link rel="stylesheet" type="text/css" href="/_layouts/15/1033/styles/menu-21.css" />
<div id="zz7_TopNavigationMenu" class=" noindex ms-core-listMenu-horizontalBox">
<ul id="zz9_RootAspMenu" class="root ms-core-listMenu-root static">
<li class="static">
<a class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" tabindex="0" title="Default Publishing Site" href="/sites/PubSite/Pages/default.aspx" accesskey="1">
<span class="additional-background ms-navedit-flyoutArrow">
<span class="menu-item-text">Default Publishing Site</span></span></a></li></ul></div>
<!--PE: End of READ-ONLY PREVIEW-->
```


### SharePoint markup


```HTML

<!--ME:</SharePoint:AspMenu>-->
<!--ME:</asp:ContentPlaceHolder>-->
```


### HTML preview


```HTML

<!--PS: Start of READ-ONLY PREVIEW (do not modify)-->
<!--PE: End of READ-ONLY PREVIEW-->
```


### SharePoint markup


```HTML

<!--ME:</SharePoint:AjaxDelta>-->
```


### Footer


```HTML
<!--CE: End Top Navigation Snippet-->
</div>
```


### Types of markup

Here is a breakdown of the types of markup that are included in a snippet.
  
    
    
 **SharePoint namespace registration** SPM ("SharePoint markup") indicates a line registering a SharePoint namespace.
  
    
    



```HTML

<!--SPM:<%@Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
```

 **Comments** CS and CE ("Comment start" and "comment end") help you parse the lines of markup.
  
    
    



```HTML
<!--CS: Start Top Navigation Snippet-->
…
<!--CE: End Top Navigation Snippet-->

```

 **Snippets** MS and ME ("markup start" and "markup end") denote the beginning and end of a SharePoint control or a snippet. Some snippets, like the ribbon or the Top Navigation control above, contain several controls nested within a single snippet.
  
    
    



```HTML

<!--MS:<SharePoint:DelegateControl runat="server" ControlId="TopNavigationDataSource" Id="topNavigationDelegate">-->
…
<!--ME:</SharePoint:DelegateControl>--><a name="startNavigation"></a>

<!--MS:<Template_Controls>-->
…
<!--ME:</Template_Controls>-->

<!--MS:<asp:SiteMapDataSource ShowStartingNode="True" SiteMapProvider="SPNavigationProvider" ID="topSiteMap" runat="server" StartingNodeUrl="sid:1002">-->
…
<!--ME:</asp:SiteMapDataSource>-->

```

 **Preview blocks** PS and PE ("Preview start" and "preview end") surround a section of HTML code that you should not edit. These preview sections are a snapshot in time of the SharePoint control that snippet is inserting. A preview makes it possible for you to work more meaningfully on the HTML file in a client-side HTML editor. But, changing the content or styling within that preview has no lasting effect on the .master file, which is what SharePoint is ultimately using. To style a snippet, you have to identify and override the SharePoint styles with your own custom CSS.
  
    
    



```HTML

<!--PS: Start of READ-ONLY PREVIEW (do not modify)--><span style="display:none"><table cellpadding="4" cellspacing="0" style="font:messagebox;color:buttontext;background-color:buttonface;border: solid 1px;border-top-color:buttonhighlight;border-left-color:buttonhighlight;border-bottom-color:buttonshadow;border-right-color:buttonshadow"><tr><td nowrap="nowrap"><span style="font-weight:bold">PortalSiteMapDataSource</span> - topSiteMap</td></tr><tr><td></td></tr></table></span><!--PE: End of READ-ONLY PREVIEW-->

<!--PS: Start of READ-ONLY PREVIEW (do not modify)--><link rel="stylesheet" type="text/css" href="/_layouts/15/1033/styles/menu-21.css" /><div id="zz7_TopNavigationMenu" class=" noindex ms-core-listMenu-horizontalBox"><ul id="zz9_RootAspMenu" class="root ms-core-listMenu-root static"><li class="static"><a class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" tabindex="0" title="Default Publishing Site" href="/sites/PubSite/Pages/default.aspx" accesskey="1"><span class="additional-background ms-navedit-flyoutArrow"><span class="menu-item-text">Default Publishing Site</span></span></a></li></ul></div><!--PE: End of READ-ONLY PREVIEW-->
```


## Additional resources
<a name="Resources"> </a>


-  [How to: Convert an HTML file into a master page in SharePoint 2013](how-to-convert-an-html-file-into-a-master-page-in-sharepoint.md)
    
  
-  [How to: Create a page layout in SharePoint 2013](how-to-create-a-page-layout-in-sharepoint.md)
    
  
-  [How to: Add an Edit Mode Panel snippet in SharePoint 2013](how-to-add-an-edit-mode-panel-snippet-in-sharepoint.md)
    
  
-  [How to: Add a Security Trim snippet in SharePoint 2013](how-to-add-a-security-trim-snippet-in-sharepoint.md)
    
  

