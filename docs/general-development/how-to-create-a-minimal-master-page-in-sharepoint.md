---
title: Create a minimal master page in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 634aa471-07e1-41d6-aa80-27f7ef7e9dc8
---


# Create a minimal master page in SharePoint

A minimal master page contains only those page elements that are required by SharePoint to render the page correctly in the browser. With Design Manager, you can quickly create a minimal master page without first having to design and convert an HTML file.

## Introduction to the minimal master page
<a name="Introduction"> </a>

With Design Manager, you can convert a typical HTML file into a SharePoint master page. But, if you don't have a prebuilt mock-up, you can still quickly start from scratch by creating a minimal master page. The minimal master page contains only those page elements required by SharePoint to render the page in the browser.
  
    
    
When you create a minimal master page, Design Manager creates both the .master file and an associated HTML file, so that you can still work with only the HTML file if you prefer. Working with a minimal master page is exactly the same as working with a master page that you convert from an HTML file. The HTML file and master page are associated, so that whenever you edit and save the HTML file, those changes are synced to the associated master page. And the HTML file contains special types of markup that make syncing with the .master file possible. For more information about this association and these types of markup, see  [How to: Convert an HTML file into a master page in SharePoint](how-to-convert-an-html-file-into-a-master-page-in-sharepoint.md).
  
    
    
Starting with a minimal master page is useful when:
  
    
    

- You want to start quickly from scratch, and then build out your design in the HTML file that's associated with the minimal master page, instead of starting with a mock-up HTML file.
    
  
- You want to rapidly test or prototype a design element that requires a working SharePoint master page. For example, creating a minimal master page does not require preparing an HTML file for conversion or resolving any preview errors that result from markup that is not valid in the HTML file. This means you can immediately work with the server-side preview or the Snippet Gallery.
    
  
- You want to work directly with the .master file. If you're an ASP.NET developer or a SharePoint developer, you can create a minimal master page, remove the association between the HTML file and the .master file by clearing the **Associated File** check box in the properties of the HTML file, and then work directly with the .master file.
    
  

## Create a minimal master page
<a name="CreateMinimalMaster"> </a>


  
    
    

### To create a minimal master page


1. Browse to your publishing site.
    
  
2. In the upper-right corner of the page, choose **Settings**, and then choose **Design Manager**.
    
  
3. In Design Manager, in the left navigation pane, choose **Edit Master Pages**.
    
  
4. Choose **Create a minimal master page**.
    
  
5. In the **Create a Master Page** dialog box, enter a name for the master page, and then choose **OK**.
    
    At this point, SharePoint creates both a .master file and an associated HTML file with the same name in the Master Page Gallery.
    
    In Design Manager, your HTML file now appears with **Conversion successful** displayed in the Status column.
    
  
6. Follow the link in the Status column to preview the file.
    
    The preview page is a live server-side preview of your master page.
    
    For more information about previewing the master page with different pages, see  [How to: Change the preview page in SharePoint Design Manager](how-to-change-the-preview-page-in-sharepoint-design-manager.md).
    
    The preview page also contains a **Snippets** link in the upper-right corner. This link opens the Snippet Gallery, where you can begin replacing static or mock-up controls in your design with dynamic SharePoint controls. For more information, see [SharePoint Design Manager snippets](sharepoint-design-manager-snippets.md).
    
    After your master page previews successfully, you will see a **\<div\>** tag that gets added to your HTML file. You may have to scroll to the bottom of the page to see the **\<div\>** tag.
    
    This **\<div\>** is the main content block. It resides inside a content placeholder named **ContentPlaceHolderMain**. At run time, when a visitor browses your site and requests a page, this content placeholder gets filled with content from a page layout that contains content in a matching content region. You should position this **\<div\>** where you want your page layouts to appear on the master page.
    
  
7. You can edit the HTML file that resides directly on the server by using an HTML editor to open and edit the HTML file in a mapped drive. Each time you save the HTML file, any changes are synced to the associated .master file. For more information, see  [How to: Map a network drive to the SharePoint Master Page Gallery](how-to-map-a-network-drive-to-the-sharepoint-master-page-gallery.md).
    
  
8. To work only with the .master file and not the HTML file, you must break the association between the two files. In Design Manager, on the Edit Master Pages page, select the HTML file, open the **Properties** menu, and then choose **Edit Properties**. On the **Edit** tab, clear the **Associated File** check box, and then choose **Save**.
    
    Breaking the association enables you to work directly with the .master file and save changes without having them overwritten by any changes made to the HTML file. You can restore this association at any time. If you restore the association, the associated HTML file will sync to the .master file and overwrite it.
    
  

## Understand the associated HTML file
<a name="UnderstandHTML"> </a>

When you create a minimal master page, an HTML file is created that's associated with the .master file, and this HTML file contains many lines of markup that are specific to how SharePoint works. You can safely ignore most of this markup, and most of it does not appear in the final markup of your site when you view source in the browser, but this markup is critical for syncing changes from the HTML file to the .master file that SharePoint actually uses. Each time you save a change to your HTML file, this SharePoint markup makes it possible for that same change to be made to the associated .master file in the background. For more information, see the markup samples in  [How to: Convert an HTML file into a master page in SharePoint](how-to-convert-an-html-file-into-a-master-page-in-sharepoint.md).
  
    
    

## Additional resources
<a name="Additional"> </a>


-  [Overview of Design Manager in SharePoint](overview-of-design-manager-in-sharepoint.md)
    
  
-  [How to: Create a page layout in SharePoint](how-to-create-a-page-layout-in-sharepoint.md)
    
  
-  [How to: Convert an HTML file into a master page in SharePoint](how-to-convert-an-html-file-into-a-master-page-in-sharepoint.md)
    
  
-  [SharePoint Design Manager snippets](sharepoint-design-manager-snippets.md)
    
  

