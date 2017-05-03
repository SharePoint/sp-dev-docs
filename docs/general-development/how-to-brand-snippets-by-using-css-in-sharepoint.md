---
title: How to Brand snippets by using CSS in SharePoint
ms.prod: SHAREPOINT
ms.assetid: d18d07b6-1a6b-4589-a65c-932b67cef595
---


# How to: Brand snippets by using CSS in SharePoint
To style a snippet, you override the default styles with custom CSS. You can use CSS IDs and element selectors to override all the default styles applied to elements, or you can use an HTML editor or a tool such as the F12 developer tools in Internet Explorer to identify and override specific default styles.
## Introduction to styling snippets with CSS
<a name="Introduction"> </a>

After you convert an HTML master page or create an HTML page layout, you can preview that page in the Design Manager server-side preview. From the preview page, you can navigate to the Snippet Gallery and then copy snippets to your HTML file. A snippet is an HTML representation of a SharePoint control such as a top navigation control or a search box.
  
    
    
After you copy a snippet into the HTML file in your mapped drive and then save the changes, you can refresh the server-side preview of the HTML file to see how the control is rendered. Snippets contain markup that provides a design-time preview in your HTML editor of choice, but you shouldn't edit this markup because it's read-only and doesn't affect how the control is rendered on the server. By contrast, the server-side preview shows a full-fidelity preview with live data, if available—for example, a navigation control will show the site's current navigation structure with live data from your data source, such as a SharePoint term store for managed navigation.
  
    
    

> **Note:**
> For more information about mapping a network drive, see  [How to: Map a network drive to the SharePoint Master Page Gallery](how-to-map-a-network-drive-to-the-sharepoint-master-page-gallery.md). 
  
    
    

By default, snippets inherit their styles from SharePoint style sheets such as corev15.css. To style a snippet, you have to override these default styles with your custom CSS. To do this, you can:
  
    
    

- Use CSS IDs and element selectors to completely override the default styles applied to the chosen elements.
    
  
- Use a browser-based tool such as the F12 developer tools in Internet Explorer to inspect the default styles in the server-side preview in Design Manager, and then identify specific styles to override.
    
  
- Use the features of your HTML editor to inspect the default styles in the read-only preview of a snippet, and then identify specific styles to override. 
    
  
To identify the default styles by using the developer tools in Internet Explorer, you should use the server-side preview in Design Manager to view your HTML master page or page layout, press **F12** to start the developer tools, choose the **Find** menu, and then choose **Select element by click**. This enables you to click elements on the page and see exactly what styles to override by adding CSS to the custom style sheet that your HTML master page or page layout links to.
  
    
    
The default SharePoint style sheets contain many styles, which can make it challenging to identify specific styles. As an alternative to browser-based tools, and depending on your HTML editor, you may find it easier to copy the snippet from the Snippet Gallery into your HTML file, and then use the HTML editor to identify the styles. In the Snippet Gallery, when you choose **Update** and then choose **Copy to Clipboard**, the snippet contains an HTML preview of that snippet. After you copy the snippet into your HTML file, you can inspect the styles used in the read-only preview contained in the snippet. This way, you are parsing a smaller subset of the default styles.
  
    
    
Depending on the snippet and the extent of your customization, you may want to use CSS IDs and element selectors to completely override all of the default styles, instead of choosing specific default styles to override. The following example demonstrates how to use this method to apply custom styles to the top navigation snippet.
  
    
    

## Example: Style the top navigation snippet
<a name="Example"> </a>

The top navigation snippet is one of the most commonly used snippets, so it's also one of the most commonly branded snippets. In a SharePoint site, you can select an option to use managed navigation, so that a term store becomes the data source for the top navigation snippet. This way, you can use the Term Store Management tool in **Site Settings** to add or delete navigation terms and to manage the navigation taxonomy that is displayed by the Top Navigation snippet.
  
    
    
In this example, the site uses managed navigation, so the top navigation control pulls its entries from a term store. There is one level of flyouts that appear when you hover over a top-level navigation term, such as **Computers**. This section demonstrates how these custom styles override the default SharePoint styles.
  
    
    

### Sample 1: Navigation <div> from the HTML mockup file

Before you use Design Manager, when you design the HTML mockup for your master page, you'll likely use HTML and CSS to design a functional top navigation element. This HTML sample uses a basic structure for the top navigation: a **<div>** element with an ID and class name, a list for the top-level navigation entries, and a nested list for each flyout submenu.
  
    
    

```HTML

<div id="navigation" class="msax-Navigation">
   <ul>
      <li><a href="#">Cameras</a>
         <ul>
            <li><a href="#">Camcorders</a></li>
            <li><a href="#">Digital cameras</a></li>
            <li><a href="#">Disposable cameras</a></li>
            <li><a href="#">Film cameras</a></li>
         </ul>
      </li>
      <li><a href="#">Computers</a>
         <ul>
            <li><a href="#">Desktops</a></li>
            <li><a href="#">Laptops</a></li>
            <li><a href="#">Netbooks</a></li>
            <li><a href="#">Tablets</a></li>
         </ul>
      </li>
      <li><a href="#">Media</a>
         <ul>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Music</a></li>
            <li><a href="#">TV shows </a></li>
            <li><a href="#">Video games </a></li>
         </ul>
      </li>
      <li></li>
   </ul>
</div>

```


### Sample 2: Navigation <div> styled with custom CSS

To override the default SharePoint styles, in the mockup HTML file, include a standard link to your CSS file  `(<link rel="stylesheet" type="text/css" href="URLtoYourCustomCSSFile"/>`) just before the closing **</head>** tag.
  
    
    
In these HTML and CSS samples, note the following:
  
    
    

- Navigation entries are styled by using the format  `.msax-Navigation ul li` instead of applying classes directly to the **<ul>** or **<li>** tags.
    
  
- Styles use the syntax  `.msax-Navigation ul li` instead of `.msax-Navigation ul>li` because the snippet markup may contain intervening **<div>** tags between the selected elements.
    
  
- The HTML mockup contains an empty **<li></li>** element as the last entry of the top-level **<ul>**. This is because, with managed navigation turned on, SharePoint adds an **Edit Links** command as the final entry to the top-level navigation, and the final site typically does not need to display this option. The CSS sample uses `.msax-Navigation ul li:last-child` to select this entry and set the display value to `none`. The empty **<li></li>** element in the HTML file is a temporary substitute for the default **Edit Links** entry. Be aware of this final **<li>** element if your site uses managed navigation and your CSS uses any `li:last-child` selectors.
    
  



```HTML

.msax-Navigation {
margin: 10px 0px; top: 0px; position: relative;
z-index:200;
}
.msax-Navigation a {
margin: 0px; padding: 0px; border: 0px currentColor;
}
.msax-Navigation ul {
list-style: none; margin: 0px; padding: 0px; font-size: 16px; z-index:200;
}
.msax-Navigation ul li {
padding: 10px; display: inline-block; position: relative; z-index:200;
}
.msax-Navigation ul li:first-child {
margin: 0px;
}
.msax-Navigation ul li:last-child {
margin: 0px; padding: 0px; display: none;
}
.msax-Navigation ul li a.selected, .msax-Navigation ul li.selected {
background-color: rgb(58,60,62) !important;
color:rgb(255,255,255) !important;
}
.msax-Navigation ul li a {
width: 100%; color: rgb(58,60,62); font-size: 16px;
}
.msax-Navigation ul li:hover {
background-color: rgb(58,60,62);
color:rgb(255,255,255) !important;
}
.msax-Navigation ul li a:hover {
text-decoration: none;
color:rgb(255,255,255) !important;
}
.msax-Navigation li ul {
left: 0px; top: 35px; display: none; position: absolute; min-width: 100px; box-shadow: 5px 5px 10px 0px rgb(0,0,0); background-color: rgb(58,60,62);
}
.msax-Navigation li:hover ul {
display: block; z-index: 150;
}
.msax-Navigation li li {
margin: 0px; padding: 5px 10px 5px 0px; border-top-width: 0px; display: block; min-width: 100px;
}
.msax-Navigation li li:last-child {
margin: 0px; padding: 5px 10px 5px 0px; border-top-width: 0px; display: block; min-width: 100px;
}
.msax-Navigation li li a {
width: 100%; padding-left: 10px; display: block; color:rgb(255,255,255) !important;
}
.msax-Navigation li li:hover {
background-color: rgb(120, 120, 120);
}

```


### Sample 3: Read-only preview of the top navigation snippet

After your custom styles are implemented in your HTML mockup and you have a functional top navigation element, follow the usual steps:
  
    
    

1. Map a network drive.
    
  
2. Upload your design files.
    
  
3. Convert the HTML file into a master page.
    
  
4. Preview and fix any issues.
    
  
5. Add the top navigation snippet to the HTML master page by using the Snippet Gallery.
    
  
In the Snippet Gallery, when you configure the properties of the top navigation snippet, note the following:
  
    
    

- In the **Important** section at the top, do not make any changes to the **CssClass** property.
    
  
- Do not make any changes to properties under the **AjaxDelta** heading because these properties are related to the MDS properties that SharePoint uses to convert the HTML snippet into the corresponding ASP.NET snippet. This applies to any snippet, not just the top navigation snippet.
    
  
- If you're planning to override the default SharePoint styles, in the Snippet Gallery, in the **Behavior** section under **AspMenu** (there may be more than one **Behavior** section if the snippet contains more than one control, such as a delegate control), set **ClientIDMode** to **Static**. If you leave **ClientIDMode** set to the default setting, **Inherit**, the snippet's applied CSS classes will change based on the ordering of snippets on the page. For more information about **ClientIDMode**, see  [Control.ClientIDMode property](http://msdn.microsoft.com/en-us/library/system.web.ui.control.clientidmode.aspx).
    
    For example, by default, the top navigation control uses default SharePoint ID attributes such as **zz5_TopNavigationMenu** and **zz6_RootAspMenu**. By changing **ClientIDMode** to **Static**, you make it possible to use these default IDs as selectors in your own CSS to override the default SharePoint styles.
    
  
- Some properties are already configured to make branding the top navigation snippet easier by eliminating the default dynamic CSS and JavaScript behaviors—for example, by default **UseSimpleRendering** is set to **True** and **MaximumDynamicDisplayLevels** is set to **0**. For more information about specific properties of the top navigation snippet, see  [AspMenu properties](http://msdn.microsoft.com/en-us/library/ms412476.aspx) and [Menu properties](http://msdn.microsoft.com/en-us/library/282668a1.aspx).
    
  
After you configure the top navigation snippet in the Snippet Gallery, choose **Update**, and then choose **Copy to Clipboard**. In the HTML master page, delete the contents of the navigation  `<div id="navigation" class="msax-Navigation">` that contains your mockup control (delete just the contents of the **<div>** tag, not the **<div>** tag itself), and then copy the snippet into the navigation **<div>**. If necessary, reposition the navigation **<div>**, typically just after the start of the  `<div id="s4-bodyContainer">` tag but before the **<div>** containing `PlaceHolderMain`.
  
    
    
For easy comparison with the HTML of the navigation **<div>** above, the following sample contains the navigation **<div>** portion of the top navigation snippet. Note that this is not the entire snippet.
  
    
    



```HTML

<div id="zz7_TopNavigationMenu" class=" noindex ms-core-listMenu-horizontalBox">
     <ul id="zz9_RootAspMenu" class="root ms-core-listMenu-root static">
          <li class="static">
          <a accesskey="1" class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" href="/sites/PubSite/cameras" tabindex="0">
          <span class="additional-background ms-navedit-flyoutArrow">
          <span class="menu-item-text">Cameras</span></span></a><ul class="static">
               <li class="static">
               <a class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" href="/sites/PubSite/cameras/camcorders" tabindex="0">
               <span class="additional-background ms-navedit-flyoutArrow">
               <span class="menu-item-text">Camcorders</span></span></a></li>
               <li class="static">
               <a class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" href="/sites/PubSite/cameras/digital-cameras" tabindex="0">
               <span class="additional-background ms-navedit-flyoutArrow">
               <span class="menu-item-text">Digital cameras</span></span></a></li>
               <li class="static">
               <a class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" href="/sites/PubSite/cameras/disposable-cameras" tabindex="0">
               <span class="additional-background ms-navedit-flyoutArrow">
               <span class="menu-item-text">Disposable cameras</span></span></a></li>
               <li class="static">
               <a class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" href="/sites/PubSite/cameras/film-cameras" tabindex="0">
               <span class="additional-background ms-navedit-flyoutArrow">
               <span class="menu-item-text">Film cameras</span></span></a></li>
          </ul>
          </li>
          <li class="static">
          <a class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" href="/sites/PubSite/computers" tabindex="0">
          <span class="additional-background ms-navedit-flyoutArrow">
          <span class="menu-item-text">Computers</span></span></a><ul class="static">
               <li class="static">
               <a class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" href="/sites/PubSite/computers/desktops" tabindex="0">
               <span class="additional-background ms-navedit-flyoutArrow">
               <span class="menu-item-text">Desktops</span></span></a></li>
               <li class="static">
               <a class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" href="/sites/PubSite/computers/laptops" tabindex="0">
               <span class="additional-background ms-navedit-flyoutArrow">
               <span class="menu-item-text">Laptops</span></span></a></li>
               <li class="static">
               <a class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" href="/sites/PubSite/computers/netbooks" tabindex="0">
               <span class="additional-background ms-navedit-flyoutArrow">
               <span class="menu-item-text">Netbooks</span></span></a></li>
               <li class="static">
               <a class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" href="/sites/PubSite/computers/tablets" tabindex="0">
               <span class="additional-background ms-navedit-flyoutArrow">
               <span class="menu-item-text">Tablets</span></span></a></li>
          </ul>
          </li>
          <li class="static">
          <a class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" href="/sites/PubSite/media" tabindex="0">
          <span class="additional-background ms-navedit-flyoutArrow">
          <span class="menu-item-text">Media</span></span></a><ul class="static">
               <li class="static">
               <a class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" href="/sites/PubSite/media/movies" tabindex="0">
               <span class="additional-background ms-navedit-flyoutArrow">
               <span class="menu-item-text">Movies</span></span></a></li>
               <li class="static">
               <a class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" href="/sites/PubSite/media/music" tabindex="0">
               <span class="additional-background ms-navedit-flyoutArrow">
               <span class="menu-item-text">Music</span></span></a></li>
               <li class="static">
               <a class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" href="/sites/PubSite/media/tv-shows" tabindex="0">
               <span class="additional-background ms-navedit-flyoutArrow">
               <span class="menu-item-text">TV shows</span></span></a></li>
               <li class="static">
               <a class="static menu-item ms-core-listMenu-item ms-displayInline ms-navedit-linkNode" href="/sites/PubSite/media/video-games" tabindex="0">
               <span class="additional-background ms-navedit-flyoutArrow">
               <span class="menu-item-text">Video games</span></span></a></li>
          </ul>
          </li>
          <li class="static ms-verticalAlignTop ms-listMenu-editLink ms-navedit-editArea">
          <span id="zz7_TopNavigationMenu_NavMenu_Edit" class="ms-navedit-editSpan">
          <a id="zz7_TopNavigationMenu_NavMenu_EditLinks" class="ms-navedit-editLinksText" href="#" onclick="g_QuickLaunchMenu = null; EnsureScriptParams('quicklaunch.js', 'QuickLaunchInitEditMode', 'zz7_TopNavigationMenu', 2, 0, 0, ''); cancelDefault(event); return false;">
          <span class="ms-displayInlineBlock">
          <span class="ms-navedit-editLinksIconWrapper ms-verticalAlignMiddle">
          <img class="ms-navedit-editLinksIcon" src="/_layouts/15/images/spcommon.png?rev=23" /></span><span class="ms-metadata ms-verticalAlignMiddle">Edit Links</span></span></a><span id="zz7_TopNavigationMenu_NavMenu_Loading" class="ms-navedit-menuLoading ms-hide"><a id="zz7_TopNavigationMenu_NavMenu_GearsLink" href="#" onclick="HideGears(); return false;" title="This animation indicates the operation is in progress. Click to remove this animated image."><img id="zz7_TopNavigationMenu_NavMenu_GearsImage" src="/_layouts/15/images/loadingcirclests16.gif?rev=23" /></a></span><div id="zz7_TopNavigationMenu_NavMenu_ErrorMsg" class="ms-navedit-errorMsg">
          </div>
          </span></li>
     </ul>
</div>

```

Instead of using only custom styles, you may have a scenario where you want to override just a specific style. For example, to hide the **Edit Links** node, you can create a custom style that uses the default id **zz7_TopNavigationMenu_NavMenu_Edit** to set the display setting to `none`.
  
    
    

## Additional resources
<a name="Additional"> </a>


-  [SharePoint Design Manager snippets](sharepoint-design-manager-snippets.md)
    
  
-  [Overview of Design Manager in SharePoint](overview-of-design-manager-in-sharepoint.md)
    
  
-  [How to: Convert an HTML file into a master page in SharePoint](how-to-convert-an-html-file-into-a-master-page-in-sharepoint.md)
    
  
-  [How to: Create a page layout in SharePoint](how-to-create-a-page-layout-in-sharepoint.md)
    
  
-  [Develop the site design in SharePoint](develop-the-site-design-in-sharepoint.md)
    
  

