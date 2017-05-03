---
title: Upgrade custom themes and CSS to SharePoint
ms.prod: SHAREPOINT
ms.assetid: 8d1a4e3a-ae6f-41a5-bd80-3398ba541207
---


# Upgrade custom themes and CSS to SharePoint
Learn about upgrade issues with themes customizations, such as custom CSS and custom master pages, and how to update customizations to work in SharePoint.
## Introduction to themes customizations and upgraded SharePoint sites
<a name="Intro"> </a>

The theming experience in SharePoint was redesigned to simplify the process of customizing sites by changing the site layout, color palette, font scheme, and background image. The themes user interface was redesigned and there is a set of new file formats related to themes. Custom themes that were created in SharePoint 2010 cannot be used on SharePoint sites, you must re-create them. Custom CSS files may not work successfully on SharePoint sites until after they are updated to work with the new master pages, color slots, and other theming changes.
  
    
    
This article describes the issues that may occur when you try to use custom SharePoint 2010 themes, SharePoint 2010 CSS, and custom CSS with the new theming experience. It also explains the changes you have to make to your custom SharePoint 2010 themes, SharePoint 2010 CSS, and custom CSS if you want to use them in SharePoint sites.
  
    
    

> **Note:**
> SharePoint 2010 themes can be used on site collections that are running in 2010 mode. For more information about site collection modes, see  [Plan for site collection upgrades in SharePoint](http://technet.microsoft.com/en-us/library/ff191199.aspx) or [Plan for upgrade to SharePoint](https://technet.microsoft.com/en-us/library/cc303429.aspx). 
  
    
    

For more information about themes, see  [Themes overview for SharePoint](themes-overview-for-sharepoint.md).
  
    
    

## Custom SharePoint 2010 themes in SharePoint
<a name="themes"> </a>

In SharePoint 2010, themes were stored in THMX files. In SharePoint, there is a set of new file formats related to themes. Color palettes and font schemes are stored in separate XML files (.spcolor and .spfont files, respectively). 
  
    
    
You cannot upgrade a THMX file from SharePoint 2010 to SharePoint. If you applied a custom theme to your SharePoint 2010 site, when you upgrade to SharePoint, the theme files remain in place, but the theme is no longer applied to the site, and the site reverts to the default theme. If you want to use your SharePoint 2010 themes customizations on SharePoint sites, you must re-create them using the SharePoint theming guidance.
  
    
    
For more information about creating themes customizations, see  [How to: Deploy a custom theme in SharePoint](how-to-deploy-a-custom-theme-in-sharepoint.md) and [Color palettes and fonts in SharePoint](color-palettes-and-fonts-in-sharepoint.md). You can also use the SharePoint color palette tool to help you create SharePoint designs. You can  [ download the SharePoint color palette tool](http://www.microsoft.com/en-us/download/details.aspx?id=38182) from the Microsoft Download Center.
  
    
    

> **Tip:**
> You can open a THMX file in PowerPoint to see how the colors are defined in the custom theme and then use the color palette tool to re-create the colors as a color palette file (an .spcolor file). A color palette is the combination of colors that are used in a SharePoint site. 
  
    
    

You can also decide to use one of the preinstalled SharePoint themes. For more information, see  [Choose a theme for your publishing site](http://office.microsoft.com/en-us/office365-sharepoint-online-enterprise-help/choose-a-theme-for-your-publishing-site-HA102891580.aspx?CTT=1) on Office.com.
  
    
    

## Upgrading customized master pages
<a name="MasterPages"> </a>

When you upgrade a SharePoint 2010 site to SharePoint, the site is configured to use the default master page for SharePoint. If you had a custom master page for your SharePoint 2010 site, it still resides in the site and you can apply it to the SharePoint site. You can use the SharePoint user interface or the **SPWeb** class to apply the custom master page to the upgraded site. For more information about how to change the master page, see [How to: Apply a master page to a site in SharePoint](how-to-apply-a-master-page-to-a-site-in-sharepoint.md).
  
    
    
Consider the following before you decide whether to apply the SharePoint 2010 custom master page to the upgraded SharePoint site:
  
    
    

- **If the custom master page depends on custom CSS files:** Applying the custom master page to the upgraded site should return the site to its original 2010 experience. But, you will be unable to apply a SharePoint theme to the site.
    
    If you want to use the custom master page and custom CSS files together with the SharePoint theming experience, you must update the CSS files to use the new SharePoint color slots. If you want to access the custom master page from the themes user interface, you also have to create a master page preview file. For more information, see  [How to: Create a master page preview file in SharePoint](how-to-create-a-master-page-preview-file-in-sharepoint.md).
    
  
- **If the custom master page depends on SharePoint 2010 CSS files:** CSS files have changed significantly from SharePoint 2010 to SharePoint. In many cases, you will have to rework the master page so that it can work with new classes before you can successfully apply it to the upgraded site. For more information about CSS classes, see the **Using the host web CSS in apps for SharePoint** section in [SharePoint Add-ins UX design guidelines](http://msdn.microsoft.com/library/a4a8f53c-27d7-43dc-b6db-aa7b1f1c7d45%28Office.15%29.aspx).
    
  

## SharePoint 2010 CSS and custom CSS files
<a name="CSS"> </a>

Unmodified SharePoint 2010 CSS files and custom CSS files cannot be used on SharePoint sites. The following describes SharePoint changes that apply to SharePoint 2010 CSS and custom CSS files:
  
    
    

- **Color slots**. The number of available color slots has increased significantly in SharePoint. You must update the color slots in SharePoint 2010 CSS files before they can be used in the new theming experience. For more information, see the  [Color slot mapping](color-palettes-and-fonts-in-sharepoint.md#colorSlots) section in [Color palettes and fonts in SharePoint](color-palettes-and-fonts-in-sharepoint.md).
    
  
- **Font slots**. You should review the list of available font slots and verify that the CSS files you want to use in SharePoint are using the correct font slots. For more information, see the  [Font slots](color-palettes-and-fonts-in-sharepoint.md#fontSlot) section in [Color palettes and fonts in SharePoint](color-palettes-and-fonts-in-sharepoint.md).
    
  
- **New annotation**. SharePoint has a new annotation that lets you replace the background image. For more information, see  [How to: Make custom CSS files themable in SharePoint](how-to-make-custom-css-files-themable-in-sharepoint.md).
    
  
- **New classes**. You may have to update CSS files to work with the new classes in SharePoint. For more information about CSS classes (also referred to as CSS styles), see the **Using the host web CSS in apps for SharePoint** section in [SharePoint Add-ins UX design guidelines](http://msdn.microsoft.com/library/a4a8f53c-27d7-43dc-b6db-aa7b1f1c7d45%28Office.15%29.aspx).
    
  

## Additional resources
<a name="addresources"> </a>


-  [Themes overview for SharePoint](themes-overview-for-sharepoint.md)
    
  
-  [How to: Create a master page preview file in SharePoint](how-to-create-a-master-page-preview-file-in-sharepoint.md)
    
  
-  [How to: Deploy a custom theme in SharePoint](how-to-deploy-a-custom-theme-in-sharepoint.md)
    
  
-  [Color palettes and fonts in SharePoint](color-palettes-and-fonts-in-sharepoint.md)
    
  
-  [SharePoint Team Blog: Show off your style with SharePoint theming](http://blogs.office.com/b/sharepoint/archive/2012/10/29/show-off-your-style-with-sharepoint-theming.aspx)
    
  
-  [SharePoint Design Manager branding and design capabilities](sharepoint-design-manager-branding-and-design-capabilities.md)
    
  

