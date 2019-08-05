---
title: Apply a master page to a site in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 04861390-84d5-40ea-b0db-6c0748eff196
localization_priority: Priority
---


# Apply a master page to a site in SharePoint
Learn how to map a master page to a SharePoint site.
## Mapping a master page to a site

In SharePoint, a master page defines the shared framing elements such as the chrome for all pages in your site. After a master page is created, it can be mapped to a site. This could be for all publishing pages designated for all users, or for the administrative pages used for site maintenance. Alternatively, if you are configuring a child site of a parent site, you can inherit the master page from the parent. This article provides the steps to map a created master page to a site, inherit the master page from a parent site, or map a master page to a specific device channel.
  
> [!NOTE]
> For more information about Design Manager and master pages, see  [Overview of Design Manager in SharePoint](overview-of-design-manager-in-sharepoint.md). For more information about how to create device channels, see  [SharePoint Design Manager device channels](sharepoint-design-manager-device-channels.md). 
  
    
    


### To map a master page to a SharePoint site


1.  In **Site Settings** for the designated site, under the **Look and Feel** section, choose **Master Page**.
    
    > [!NOTE]
    > If the **Master Page** link is not there, you need to enable the publishing feature with these steps. Navigate to **Site Settings | Site Collection Administration | Site Collection Features**. Scroll down to the **SharePoint Server Publishing Infrastructure** feature and press **Activate**. 

2. On **Site Master Page Settings**, select one of the two options for the **Site Master Page** or **System Master Page** sections:
    
  - **Inherit site master page from parent site** Choose this option if you are configuring a child SharePoint site and want to use the parent master page.
    
    > [!NOTE]
    > If you are working on the top-level parent site this option is unavailable. 

  - **Specify a master page to be used by this site and all sites that inherit from it** Choose this option if you want to map a specific master page to the site, or if you want to map a specific master page for administrative pages. A drop-down box named **Default** or **All Channels** is available for you, depending on your site or system configuration, so you can select a specific master page stored in the master page gallery. Select the desired master page from the drop-down box.
    
    > [!NOTE]
    > If you have any device channels configured, there are additional drop-down boxes available for additional master page mapping options. 

3. Choose **OK**.
    
  

## See also
<a name="bk_addresources"> </a>


-  [Develop the site design in SharePoint](develop-the-site-design-in-sharepoint.md)
    
  
-  [Overview of Design Manager in SharePoint](overview-of-design-manager-in-sharepoint.md)
    
  
-  [What's new with SharePoint site development](what-s-new-with-sharepoint-site-development.md)
    
  

