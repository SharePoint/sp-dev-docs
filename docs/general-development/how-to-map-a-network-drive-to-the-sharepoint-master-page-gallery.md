---
title: How to Map a network drive to the SharePoint Master Page Gallery
ms.prod: SHAREPOINT
ms.assetid: 7d416f6e-2471-4d03-97ae-4e8d907784c6
---


# How to: Map a network drive to the SharePoint Master Page Gallery
Learn how to map a network drive to the Master Page Gallery so that you can use Design Manager to upload design files in SharePoint.
You can create a visual design for your website by using any web design tool or HTML editor, and then use Design Manager to import the design into SharePoint. To do this, you have to make sure that the design tool stores its files in your site's Master Page Gallery, which is where SharePoint expects to find the files. We recommend that you map a network drive to the Master Page Gallery to make it easier to save files in the correct location.
  
    
    

First, find the location of the Master Page Gallery.
### To find the location of the Master Page Gallery


1. On the site for which you are creating a design, start Design Manager. (For example, on the **Settings** menu, choose **Design Manager**.)
    
    > **Important:**
      > If your site is hosted in SharePoint Online, when you sign in to the site by using your Office 365 credentials, make sure that you select the **Keep me signed in** check box. For more information, see [How to configure and to troubleshoot mapped network drives that connect to SharePoint Online sites in Office 365 for enterprises](http://support.microsoft.com/kb/2616712). 
2. In the numbered list, select **Upload Design Files**.
    
  
3. The Design Manager: Upload Design Files page contains the location of the Master Page Gallery. The location probably ends in  `/_catalogs/masterpage/`. This is the location to which you will map a network drive.
    
  
4. Make a note of the location of the Master Page Gallery, or copy it to the Clipboard.
    
  
On the computer that runs your design tool or HTML editor, map a network drive to the location that you just copied. The procedure for mapping a network drive differs depending on the computer's operating system:
- If the computer is running Windows 8, follow the steps that are described in the Windows 8 version of the article  [Create a shortcut to (map) a network drive](http://windows.microsoft.com/en-us/windows-8/create-shortcut-to-map-network-drive).
    
  
- If the computer is running Windows 7, follow the steps that are described in the Windows 7 version of the article  [Create a shortcut to (map) a network drive](http://windows.microsoft.com/en-US/windows7/Create-a-shortcut-to-map-a-network-drive).
    
  
- If the computer is running Windows Vista, follow the steps that are described in the version of the article  [Create a shortcut to (map) a network drive](http://windows.microsoft.com/en-US/windows-vista/Create-a-shortcut-to-map-a-network-drive).
    
  
- If the computer is running Windows XP, follow the steps that are described in the article  [How to connect and disconnect a network drive in Windows XP](http://support.microsoft.com/kb/308582).
    
  
- ***If the computer is running another operating system, follow the instructions for creating a shortcut to a new location for that operating system.*** You might have to provide different credentials for connecting to the SharePoint site, and you might have to specify that the connection be re-established every time that you log on to the computer.
    
  

## Additional resources
<a name="bk_addresources"> </a>


-  [How to: Apply a master page to a site in SharePoint](how-to-apply-a-master-page-to-a-site-in-sharepoint.md)
    
  
-  [Develop the site design in SharePoint](develop-the-site-design-in-sharepoint.md)
    
  
-  [SharePoint Design Manager device channels](sharepoint-design-manager-device-channels.md)
    
  
-  [How to: Change the preview page in SharePoint Design Manager](how-to-change-the-preview-page-in-sharepoint-design-manager.md)
    
  
-  [SharePoint Design Manager image renditions](sharepoint-design-manager-image-renditions.md)
    
  

