---
title: Add a Device Channel Panel snippet in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 612780a8-6267-49f6-a32d-33600bb5f6b4
localization_priority: Normal
---


# Add a Device Channel Panel snippet in SharePoint

A Device Channel Panel is a snippet that you can add to a master page or page layout to control what content is rendered for each channel that you create. The primary purpose of a Device Channel Panel is to selectively display different page fields on different channels from a single page layout.

## Introduction to the Device Channel Panel snippet
<a name="Introduction"> </a>

A Device Channel Panel is a control that you can add to a master page or page layout to control what content is rendered in each channel that you create. A Device Channel Panel is a container that specifies one or more channels; if one or more of those channels are active when the page is rendered, all of the contents of the Device Channel Panel are also rendered. A Device Channel Panel can include almost any type of content, including a link to a CSS file or a .js file. It is an easy way to include specific content for specific channels.
  
    
    
Perhaps the most common scenario for using Device Channel Panels is to selectively include parts of a page layout for specific channels. For example, you may have a page layout with separate text fields for a long greeting and a short greeting. By placing the page fields inside Device Channel Panels, you can display the short greeting only to phones and the long greeting only to the desktop. The content of a Device Channel Panel is not displayed on non-included channels—in fact, the content is not rendered at all, which prevents bytes from going across the wire. For this reason, using Device Channel Panels is a better way to display content on specific channels than using a CSS class with  `Display:None` because Device Channel Panels help to reduce the page weight for a specific channel.
  
    
    
You can also use Device Channel Panels on master pages. For example, if you have a master page that can accommodate two different devices (or two different browsers) with only minimal changes, you can use Device Channel Panels to hold the content on the master page that is specific to either of those devices.
  
    
    
There are two limitations to using a Device Channel Panel:
  
    
    

- **Display templates** Because display templates are rendered on the client side and Device Channel Panels run on the server side, you cannot use a Device Channel Panel within a display template. Instead, you should use two different Content Search web parts within Device Channel Panels on your page layout, or use the JavaScript variable to trigger the behavior you want within the display template itself.
    
  
- **Web part zones** You cannot insert a web part zone inside a Device Channel Panel. If you want to allow authors to add web parts to a page, and if you are not concerned about the page weight for mobile devices, you can add a Rich Text Editor page field to a Device Channel Panel, and then instruct authors to add web parts there. You can add web parts directly to a Device Channel Panel (without a web part zone).
    
  

## Inserting a Device Channel Panel snippet
<a name="InsertSnippet"> </a>

Like all snippets, you add a Device Channel Panel snippet from the Snippet Gallery. To navigate to the Snippet Gallery, you must first select a master page or page layout to edit.
  
    
    

### To insert a Device Channel Panel snippet


1. Browse to your publishing site.
    
  
2. In the upper-right corner of the page, choose the Settings gear, and then choose **Design Manager**.
    
  
3. In Design Manager, in the left navigation pane, choose **Edit Master Pages** or **Edit Page Layouts**, depending on what type of file you're editing.
    
  
4. Select the name of the master page or page layout that you want to add the snippet to.
    
  
5. To open the Snippet Gallery, choose **Snippets** in the upper-right corner of the server-side preview.
    
  
6. On the ribbon, on the **Design** tab, choose **Device Channel Panel**.
    
  
7. On the right side of the Snippet Gallery, under **About this Component**, click or select section headers to expand or collapse groups of properties, and then configure any custom settings that you want.
    
    The section named **Important** contains the properties that are key to how this particular snippet works. For a Device Channel Panel, the **IncludedChannels** property is the most important. For this property, enter the alias of each Device Channel that you want to display the content contained in this Device Channel Panel. If you enter more than one alias, separate each with a comma.
    
    > [!NOTE]
    > If you edit the alias of a channel in the Device Channels list, you must manually find and update that alias wherever it appears in your design files, including updating the **IncludedChannels** property for every Device Channel Panel that uses that alias.

8. After you configure any other properties, choose **Update**. This updates the HTML snippet on the left side of the page, so that the markup reflects your custom settings. You can always choose **Reset** to return all properties to their default settings.
    
  
9. On the left side of the Snippet Gallery, under **HTML Snippet**, choose **Copy to Clipboard**.
    
  
10. In your HTML editor, open the mapped network drive on your computer, and then open the HTML file for the master page or page layout that you're adding the snippet to.
    
    For more information, see  [How to: Map a network drive to the SharePoint Master Page Gallery](how-to-map-a-network-drive-to-the-sharepoint-master-page-gallery.md).
    
  
11. In the HTML file, paste the snippet where you want the markup to appear.
    
    If you are adding the snippet to a page layout, make sure to paste the snippet inside **PlaceHolderMain**.
    
  
12. Replace the **<div>** where `class="DefaultContentBlock"` with your own specific content.
    
    Typically, if you're adding a Device Channel Panel to a page layout, you replace the **<div>** by copying page fields inside the panel.
    
  
13. Save the page, and then refresh the server-side preview in Design Manager to make sure the Device Channel Panel appears as expected.
    
    To preview the panel on different channels, you can add query string parameters to the URL. For example, you can append the query string variable  `"DeviceChannel=YourChannelAlias"` to the URL of any page in the server-side preview.
    
  

## Understanding the snippet markup
<a name="UnderstandMarkup"> </a>

The two most important parts of a Device Channel Panel snippet are the **IncludedChannels** property and the **<div>** where `class="DefaultContentBlock"`. By default, the **IncludedChannels** property is empty. In the **Important** section of the property grid, you should enter the aliases, separated by commas, of the device channels that you want to display the content in this panel.
  
> [!NOTE]
> If you change an alias in the Device Channels list, you must also change that alias wherever it appears in your markup, including in the **IncludedChannels** property for every Device Channel Panel that uses that alias.
  
    
    

The **<div>** where `class="DefaultContentBlock"` should be replaced with whatever specific content you want to display for the included channels. A Device Channel Panel can include almost any type of content, including a link to a CSS file or a .js file. The most common scenario for using Device Channel Panels is to include specific page fields from a page layout for specific channels. In this case, you copy the page field markup where the **<div>** is positioned inside the Device Channel Panel.
  
    
    



```HTML

<div data-name="DeviceChannelPanel">
    <!--CS: Start Device Channel Panel Snippet-->
    <!--SPM:<%@Register Tagprefix="Publishing" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
    <!--MS:<Publishing:DeviceChannelPanel runat="server" IncludedChannels="MyPhoneChannel, MyTabletChannel">-->
        <!--PS: Start of READ-ONLY PREVIEW (do not modify)--><!--PE: End of READ-ONLY PREVIEW-->
       <div class="DefaultContentBlock" style="border:medium black solid; background:yellow; color:black; margin:20px; padding:10px;">
        You should replace this div with content that renders based on your Device Channel Panel Properties.    
        </div>
        <!--PS: Start of READ-ONLY PREVIEW (do not modify)--><!--PE: End of READ-ONLY PREVIEW-->
    <!--ME:</Publishing:DeviceChannelPanel>-->
    <!--CE: End Device Channel Panel Snippet-->
</div>

```


## See also
<a name="AdditionalResources"> </a>


-  [SharePoint Design Manager snippets](sharepoint-design-manager-snippets.md)
    
  
-  [SharePoint Design Manager device channels](sharepoint-design-manager-device-channels.md)
    
  
-  [Build sites for SharePoint](build-sites-for-sharepoint.md)
    
  
-  [Develop the site design in SharePoint](develop-the-site-design-in-sharepoint.md)
    
  

