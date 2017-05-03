---
title: How to Deploy a custom theme in SharePoint
ms.prod: SHAREPOINT
ms.assetid: f703df24-8e56-4e6a-bc37-95acbb3c83e8
---


# How to: Deploy a custom theme in SharePoint
Learn how to deploy a custom theme to a SharePoint site by using the user interface or by implementing a feature receiver.
SharePoint includes preinstalled themes. You can create custom themes by creating additional color palettes, font schemes, and master pages. After the files are uploaded to the Theme Gallery and the Master Page Gallery, you can deploy a theme to a site by using the user interface or by using code. For more information about color palettes and font schemes, see  [Color palettes and fonts in SharePoint](color-palettes-and-fonts-in-sharepoint.md).
  
    
    


## Core concepts to know to deploy a theme
<a name="core"> </a>

Table 1 lists articles that can help you understand the core concepts of deploying themes.
  
    
    

**Table 1. Core concepts to deploy a theme**


|**Article title**|**Description**|
|:-----|:-----|
| [Themes overview for SharePoint](themes-overview-for-sharepoint.md) <br/> |Learn about the theming experience in SharePoint.  <br/> |
| [Feature Events](http://msdn.microsoft.com/en-us/library/ms469501.aspx) <br/> |Learn about feature events, which enable you to trap and respond to an event that occurs when a feature is installed in the server farm.  <br/> |
   

## Upload files to the Theme Gallery and the Master Page Gallery
<a name="section1"> </a>

You can create custom themes by creating additional color palettes and font schemes and uploading them to the Theme Gallery. The new color palettes and font schemes are then available to you when you modify a design in the theming experience or when you apply a theme programmatically. Similarly, if you want to have additional site layouts to choose from, you can upload additional master pages, and corresponding preview files, to the Master Page Gallery. The following list describes where to place the files:
  
    
    

- **Master Page Gallery** Lists the master page files, and their corresponding preview files (.preview files). A master page preview file is required if you want the master page to be available in the **Change the look** wizard. JavaScript files and other design assets can also be uploaded to the Master Page Gallery.
    
    To access the Master Page Gallery from the SharePoint user interface, on the **Site Settings** page, under **Web Designer Galleries**, choose **Master pages**. You can also navigate directly to the site (http://  _SiteName_/_catalogs/masterpage/).
    
  
- **Theme Gallery** Lists the color palettes and font schemes that are available to the theming experience. SharePoint looks in the **15** folder to determine the available color palettes and font schemes.
    
    To access the Theme Gallery from the SharePoint user interface, on the **Site Settings** page, under **Web Designer Galleries**, choose **Themes**. You can also navigate directly to the site (http:// _SiteCollectionName_/_catalogs/theme/15/).
    
  
- **Style library** Lists custom CSS files that you want to use in the theming experience. You can navigate directly to the Style library (replace _SiteCollectionName_ and _language_ in this URL: http:// _SiteCollectionName_/Style Library/ _language_/Themable/).
    
    > **Note:**
      > Place the custom CSS files in the Themable folder in the Style library, not the Themable folder in the Master Page Gallery. Only CSS files that are stored in the Themable folder in the Style library are recognized by the theming engine. 

> **Note:**
> If you have versioning enabled on the Master Page Gallery and the Theme Gallery, you must also publish the design files before they can be used by the theming engine. 
  
    
    


## Deploy a theme by using the user interface
<a name="section2"> </a>

A composed look, or design, is the color palette, font scheme, background image, and master page that determine the look and feel of a site. The Composed Looks list contains the composed looks that are available in the design gallery. You create a design by adding a list item in the Composed Looks list and specifying the master page, color palette, font scheme, and background image to use.
  
    
    

> **Note:**
> A master page preview file is required if you want the master page to be available in the design gallery. 
  
    
    


### To add a composed look


1. Choose the **Settings** icon, and then choose **Site settings**.
    
  
2. Under **Web Designer Galleries**, choose **Composed looks**.
    
  
3. In the **Composed Looks** list, select **new item**.
    
  
4. In the **Title** text box, enter a title for the design.
    
  
5. In the **Name** text box, enter a name for the design. The name appears in the Composed Looks list and in the design gallery.
    
  
6. In the **Master Page URL** text box, enter the URL of the master page. The URL can be a relative URL.
    
  
7. In the **Theme URL** text box, enter the URL of the color palette (the URL to the .spcolor file). The URL can be a relative URL.
    
  
8. In the **Image URL** text box, enter the URL of the background image. This is optional. The URL can be a relative URL.
    
  
9. In the **Font Scheme URL** text box, enter the URL of the font scheme (the URL to the .spfont file). This is optional. The URL can be a relative URL.
    
  
10. In the **Display Order** text box, enter the display order number. This determines where the design appears in the design gallery.
    
  
11. Choose **Save**.
    
    > **Note:**
      > If there is an issue with the composed look values, the composed look is not added to the design gallery, and no message is recorded in the log files. The following are possible reasons why a composed look cannot be added: a file cannot be found, there is a formatting issue with one of the files, or SharePoint is unable to access the files. 
You can now use the design gallery to apply the new design to your site. For more information, see  [Choose a theme for your publishing site](http://office.microsoft.com/en-us/office365-sharepoint-online-enterprise-help/choose-a-theme-for-your-publishing-site-HA102891580.aspx) on Office.com.
  
    
    

## Deploy a theme by using code
<a name="section3"> </a>

You can deploy a theme by implementing a feature receiver.
  
    
    

### To deploy a theme by using a feature receiver


1. Create a feature receiver class that inherits from the  [SPFeatureReceiver](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFeatureReceiver.aspx) class.
    
  
2. In the  [FeatureActivated](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFeatureReceiver.FeatureActivated.aspx) method, create an [SPTheme](https://msdn.microsoft.com/library/Microsoft.SharePoint.Utilities.SPTheme.aspx) object that uses the color palette and font scheme, and then apply the theme to your site.
    
    The following code example shows how to deploy a custom color palette and font scheme to a site.
    


```cs
  
// Get the SPColor file. Replace with the path to your SPColor file.
SPFile colorPaletteFile = Web.GetFile("path to .spcolor file");
if (null == colorPaletteFile || !colorPaletteFile.Exists)
{
    // TODO: handle the error.
    return;
}

// Get the SPFont file. Replace with the path to your SPFont file.
SPFile fontSchemeFile = Web.GetFile("path to .spfont file");
if (null == fontSchemeFile || !fontSchemeFile.Exists)
{
    // TODO: handle the error.
    return;
}

// Open an SPTheme with the two files. Replace NewTheme with the name for your theme.
// Note: If you have a background image, you can specify the following:
// SPTheme.Open("NewTheme", colorPaletteFile, fontSchemeFile, backgroundURI)
SPTheme theme = SPTheme.Open("NewTheme", colorPaletteFile, fontSchemeFile);


// Now apply your theme to the site.
// The themed CSS output files are stored in the Themed folder of the Theme Gallery of the root web
// of the site collection. To specify that the files should be stored in the _themes folder within the root 
// web, pass false to the ApplyTo method.
theme.ApplyTo(Web, true);
```


    > **Note:**
      > The  _shareGenerated_ parameter in the **ApplyTo** method specifies whether the themed files can be shared across sites in a site collection. In general, it is set to **true** for SharePoint Server and SharePoint Online sites and set to **false** for SharePoint Foundation sites. The _shareGenerated_ parameter must be set to **true** if you intend the themed files to be shared. For more information, see [ApplyTo(SPWeb, Boolean)](https://msdn.microsoft.com/library/Microsoft.SharePoint.Utilities.SPTheme.ApplyTo.aspx) .

    When a user applies a theme in the **Change the look** wizard, the wizard also updates a theme named Current in the Composed Looks list and the design gallery. When you apply a theme programmatically, you have to update the Current theme manually. The following example shows how to update the Current theme.
    


```cs
  
SPList designGallery = Web.GetCatalog(SPListTemplateType.DesignCatalog);
if (null == designGallery)
{
    // TODO: Handle the error.
    return;
}

SPQuery q = new SPQuery();
q.RowLimit = 1;
q.Query = "<Where><Eq><FieldRef Name='DisplayOrder'/><Value Type='Number'>0</Value></Eq></Where>";
q.ViewFields = "<FieldRef Name='DisplayOrder'/>";
q.ViewFieldsOnly = true;

SPListItemCollection currentItems = designGallery.GetItems(q);

If (currentItems.Count == 1)
{
    // Remove the old Current item.
    currentItems[0].Delete();
}

SPListItem currentItem = designGallery.AddItem();

currentItem["Name"] = SPResource.GetString(CultureInfo.CurrentUICulture, Strings.DesignGalleryCurrentItemName);
currentItem["Title"] = SPResource.GetString(CultureInfo.CurrentUICulture, Strings.DesignGalleryCurrentItemName);

// Change this line if you want to specify a different master page.
currentItem["MasterPageUrl"] = Web.MasterUrl;

// Replace with the path to your SPColor file.
currentItem["ThemeUrl"] = "path to .spcolor file";

// Delete the following line if you do not have a background image. Otherwise, replace with the path to
// the background image.
currentItem["ImageUrl"] = "path to background image"; 

// Replace with the path to your SPFont file. Or, you can delete this line if you want to use
// the default font scheme of the selected master page.
currentItem["FontSchemeUrl"] = "path to .spfont file"; 

currentItem["DisplayOrder"] = 0;
currentItem.Update();

```


## Additional resources
<a name="bk_addresources"> </a>


-  [Develop the site design in SharePoint](develop-the-site-design-in-sharepoint.md)
    
  
-  [Color palettes and fonts in SharePoint](color-palettes-and-fonts-in-sharepoint.md)
    
  
-  [How to: Create a master page preview file in SharePoint](how-to-create-a-master-page-preview-file-in-sharepoint.md)
    
  
-  [SharePoint Team Blog: Show off your style with SharePoint theming](http://blogs.office.com/b/sharepoint/archive/2012/10/29/show-off-your-style-with-sharepoint-theming.aspx)
    
  

