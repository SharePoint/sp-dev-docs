---
title: How to Resolve errors and warnings when previewing a page in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 03f72f65-b22b-4304-be92-f44ce0619372
---


# How to: Resolve errors and warnings when previewing a page in SharePoint
After you convert an HTML file into a SharePoint master page, or after you create a page layout, you can preview that page in the browser. But before you can preview a master page or page layout, you may have to resolve any issues that prevent the server-side preview from rendering your page.
## Introduction to resolving preview errors
<a name="Introduction"> </a>

After you convert an HTML file into a SharePoint master page, or after you create a page layout, you can preview that page in the browser. As you edit and save your HTML master page or page layout, you can refresh the preview to see exactly how SharePoint renders your page.
  
    
    
The preview in Design Manager is a live server-side preview, so any snippets or controls on your page, such as a navigation control or a search-driven Web Part, use live data. Also, when you preview a master page or page layout, you can choose a generic preview of just that file, or you can choose to preview how a specific page in your site renders with that master page or page layout. The server-side preview is a highly useful tool that complements the design-time preview in an HTML editor. For more information, see  [How to: Change the preview page in SharePoint Design Manager](how-to-change-the-preview-page-in-sharepoint-design-manager.md).
  
    
    
But before you can preview a master page or page layout, you may have to resolve any issues that prevent the server-side preview from rendering your page. If the server-side preview isn't working, this means that the master page or page layout also won't work after they're applied to your site. In Design Manager, after you convert a master page or create a page layout, you can click the file name or conversion status to preview that file. On the preview page, the notification area at the top of the page displays any errors or warnings.
  
    
    
Here are the preview errors and warnings that you might encounter, and help for how to resolve them.
  
    
    

## HTML file cannot contain \<form\> tags
<a name="FormTags"> </a>


### Message

 **Your Master Page has one or more HTML \<FORM\> tags. For your master page to work, remove the tags (but you can leave the content in them).**
  
    
    

### Resolution

SharePoint pages are already wrapped in a **\<form\>** tag so that ASP.NET can do post-backs (specifically, a SharePoint.master page contains the **<SharePoint:SharePointForm>** tag that creates an actual **\<form\>** tag when an associated content page is rendered). So, including a **\<form\>** tag on your master page or page layout means that there would be nested **\<form\>** tags on the final rendering of the page, which is not valid in HTML. In your HTML editor, delete any **\<form\>** tags, save the page, and then refresh the preview.
  
    
    
If you want an HTML **\<form\>** tag in the page layout, you should put the form within a content placeholder with the ID **PlaceHolderUtilityContent** by adding this code to your HTML page layout:
  
    
    



```HTML

<!--CS: Start Create Snippets From Custom ASP.NET Markup Snippet-->
<!--SPM:<SharePoint:AjaxDelta id="DeltaPlaceHolderUtilityContent" runat="server">-->
<!--SPM:<asp:ContentPlaceHolder id="PlaceHolderUtilityContent" runat="server" />-->
<!--SPM:</SharePoint:AjaxDelta>-->
<!--CE: End Create Snippets From Custom ASP.NET Markup Snippet-->
```

You can also add the HTML Form Web Part or the InfoPath Form Web Part to your page from the Snippet Gallery. For more information, see  [SharePoint Design Manager snippets](sharepoint-design-manager-snippets.md).
  
    
    

## HTML file must be XML-compliant
<a name="XMLCompliant"> </a>


### Message

 **SharePoint requires HTML files to be XML-compliant. Your file isn't XML-compliant, likely because of tag properties without quotes, missing closing tags, or invalid properties in tags. {Type of error, location of error}. Occurred at: {Time}.**
  
    
    

### Resolution

For an HTML file to be converted into the corresponding ASP.NET file, the HTML file must be XML-compliant. This error identifies specific markup in your HTML file that is not XML-compliant. Run the HTML file through an XML validator, fix any issues in your HTML editor, save the file, and then refresh the preview.
  
    
    

> **Note:**
> This requirement overrides some HTML 5 standards. For example, in HTML 5 you can specify the doctype in lowercase, but in XML the doctype must be uppercase. 
  
    
    


  
    
    

## HTML file contains problematic markup
<a name="ProblematicMarkup"> </a>


### Message

 **SharePoint can't parse this file, most likely because of an incorrectly formatted SharePoint snippet. The markup at the following location is causing problems. Edit the markup manually to fix it, or replace it with a new snippet from the Snippet Gallery. {Type of error, location of error}. Occurred at: {Time}.**
  
    
    

### Resolution

You see this error when there is a problem with a SharePoint snippet in your HTML file. To fix this error, undo whatever change caused the error, or replace the problematic snippet with a new one, either from the Snippet Gallery or from a different master page or page layout file that has a working version of the snippet. In your HTML editor, after you fix or replace the snippet, save the page, and then refresh the preview.
  
    
    

## Master page for a page layout has changed
<a name="PageLayoutChanged"> </a>


### Message

 **This page layout's master page has changed, which will cause inconsistencies across your site. Click here to update the sections of your page layout that represent master page regions.**
  
    
    

### Resolution

For a page layout to work with a given master page, the two must have the same set of content placeholders. If you create a page layout based on a particular master page, and then edit that HTML master page, you'll see this message. Even if you know that changes to the master page didn't add or remove content placeholders, you should update the content regions of your page layout anyway, so that you can preview any changes from the master page that might affect your page layout.
  
    
    

## Reset the preview
<a name="ResetPreview"> </a>


### Message

 **Your master page (page layout) doesn't have any warnings or errors. Reset the preview to its original state.**
  
    
    

### Explanation

This message simply confirms that the conversion process worked with no errors or issues. However, when you preview a page, you may navigate away from that specific page or change the preview in some other way. If this happens, you can always choose **Reset the preview** in the message area. Doing so refreshes the preview so that it uses the specific master page or page layout that you're working on, and whatever page you've selected in the **Change Preview Page** option in the upper-left corner.
  
    
    

## Change the preview page
<a name="ChangePreviewPage"> </a>


### Message

 **You're currently previewing your master page (page layout) without any content. You can change the page you're previewing from the menu above.**
  
    
    

### Explanation

You see this message when you aren't using a live SharePoint page with which to preview your master page or page layout. For example, if you're previewing a page layout, you can choose **Change Preview Page** in the upper-left corner, and then select a specific content page to preview with your page layout. This way, you can preview the page layout with actual page content in the page fields. If you want the preview to show just the positions of **ContentPlaceHolderMain** or page fields, you can always use **Change Preview Page** to switch back to a generic preview.
  
    
    

## Additional resources
<a name="bk_addresources"> </a>


-  [Develop the site design in SharePoint](develop-the-site-design-in-sharepoint.md)
    
  
-  [How to: Change the preview page in SharePoint Design Manager](how-to-change-the-preview-page-in-sharepoint-design-manager.md)
    
  
-  [SharePoint Design Manager snippets](sharepoint-design-manager-snippets.md)
    
  

