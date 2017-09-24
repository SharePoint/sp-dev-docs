---
title: Themes overview for SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: ae585dd3-82fe-46bb-ac93-065edc0a16f4
---


# Themes overview for SharePoint
Learn about the theming experience in SharePoint and how themes can be used to customize the look and feel of sites.
## Themes overview
<a name="section1"> </a>

Themes provide a quick and easy way to apply lightweight branding to a SharePoint site. A theme lets a site owner, or a user who has designer rights, customize a site by changing the site layout, color palette, font scheme, and background image.
  
    
    
The theming experience in SharePoint was redesigned to simplify the process of customizing sites. The themes user interface was redesigned and there is a set of new file formats related to themes. The **Change the look** wizard is the entry point to the theming experience where you can change the look and feel of your site. You can select a design for the site. Then, you can customize the design by changing the site layout, background, color palette, or font scheme. You can preview the site before applying the design. For more information, see [Choose a theme for your publishing site](http://office.microsoft.com/en-us/office365-sharepoint-online-enterprise-help/choose-a-theme-for-your-publishing-site-HA102891580.aspx) on Office.com.
  
    
    

> **Note:**
> Themes created in SharePoint 2010 cannot be used on SharePoint sites. But, themes created in SharePoint 2010 can still be used on site collections that have not been upgraded or on site collections that use the 2010 experience version. 
  
    
    


## Theming experience components
<a name="section2"> </a>

The theming experience includes the following:
  
    
    
 **Color palette** A color palette, or color scheme, defines the combination of colors that are used in a site. Thirty-two color palettes are installed with SharePoint. They are available to users when they choose to modify a design in the design gallery.
  
    
    
Color palettes are XML files (.spcolor files). They are stored in the Theme Gallery of the root site of the site collection in the **15** folder (http:// _SiteCollectionName_/_catalogs/theme/15/).
  
    
    
 **Font scheme** A font scheme defines the fonts that are used in a site. Seven font schemes are included in SharePoint. They are available to users when they choose to modify a design in the design gallery.
  
    
    
Font schemes are XML files (.spfont files). They are stored in the Theme Gallery of the root site of the site collection in the **15** folder (http:// _SiteCollectionName_/_catalogs/theme/15/).
  
    
    
 **Background image** The background image that is used in the site.
  
    
    
 **Master page** A master page defines the chrome (the shared framing elements) of a site. The theming experience lets users select the master page to apply to a site.
  
    
    
 **Master page preview** A master page preview is used to render a preview image of the selected theme components. Each master page must have a corresponding master page preview file for the master page to be available in the theming experience.
  
    
    
Master page preview files (.preview files) are stored in the Master Page Gallery of the site (http://  _SiteName_/_catalogs/masterpage/).
  
    
    
 **Composed look** A composed look, or design, is the color palette, font scheme, background image, and master page that determine the look and feel of a site. Design and theme can be used interchangeably to describe the overall look of a site.
  
    
    
The theming experience uses the Composed Looks list to determine the available designs. You can create additional designs by creating list items in the Composed Looks list. To access the composed looks list, on the **Site Settings** page, under **Web Designer Galleries**, choose **Composed looks**.
  
    
    
 **Change the look** The **Change the look** wizard is the entry point to the theming experience that lets users change the look and feel of their site. To access the **Change the look** wizard, choose the **Settings** icon, and then choose **Change the look**.
  
    
    
 **Design gallery** The design gallery is the first page in the **Change the look** wizard. The design gallery shows a thumbnail view of available designs.
  
    
    

## Using themes
<a name="section3"> </a>

SharePoint includes preinstalled themes (also referred to as designs or composed looks). You can use the preinstalled themes or create custom themes.
  
    
    

### Preinstalled themes

The theming experience lets users customize the preinstalled themes by changing the colors, fonts, layout, or background image. You do not have to create custom themes unless you want additional font schemes or color palettes.
  
    
    
When a preinstalled theme is modified, a new theme named Current is created automatically after the theme changes are applied. There is only one Current theme for a site. SharePoint does not give the user a way to save themes from the user interface. If you modify a preinstalled theme, apply the changes (creating a new theme named Current), and then modify a second preinstalled theme, the second preinstalled theme becomes the Current theme when the settings are applied. To save a modified theme, you can create a list item in the Composed Looks list that contains the same master page, color palette, font scheme, and background image URLs of the modified theme (the modified theme is listed as Current in the Composed Looks list).
  
    
    

### Custom themes

You can create custom themes by creating additional color palettes and font schemes and uploading them to the Theme Gallery. The new color palettes and font schemes are then available to you in the theming experience or when you want to apply a theme programmatically. Similarly, if you want to have additional site layouts to choose from, you can upload additional master pages, and corresponding preview files, to the Master Page Gallery.
  
    
    
You can create new designs by creating new list items in the Composed Looks list. Create a list item and specify the master page, color palette, font scheme, and background image for the new design.
  
    
    

## Additional resources
<a name="section4"> </a>


-  [SharePoint Design Manager branding and design capabilities](sharepoint-design-manager-branding-and-design-capabilities.md)
    
  
-  [How to: Create a master page preview file in SharePoint](how-to-create-a-master-page-preview-file-in-sharepoint.md)
    
  
-  [How to: Deploy a custom theme in SharePoint](how-to-deploy-a-custom-theme-in-sharepoint.md)
    
  
-  [Color palettes and fonts in SharePoint](color-palettes-and-fonts-in-sharepoint.md)
    
  
-  [SharePoint Team Blog: Show off your style with SharePoint theming](http://blogs.office.com/b/sharepoint/archive/2012/10/29/show-off-your-style-with-sharepoint-theming.aspx)
    
  

