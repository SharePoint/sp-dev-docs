---
title: How to Make custom CSS files themable in SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: b8c82c77-c836-47f9-a11e-6c9c656d436b
---


# How to: Make custom CSS files themable in SharePoint 2013
Learn how to add comment-style markup to a CSS file so that it can be used in the SharePoint 2013 theming engine.
## Introduction to annotations
<a name="Intro"> </a>

Annotations are special comment-style markup that tell the SharePoint theming engine how to theme properties in a CSS file. When a theme is applied to a site, the theming engine replaces the CSS property values with the appropriate theme values. In SharePoint 2013, you can use annotations to change the color, font, or background image. You can also recolor an image. If you are using custom CSS files, you must add these annotations to the CSS files if you want to use them with the SharePoint theming engine. If you apply a theme to a site that uses custom CSS files, and you haven't added annotations, the CSS properties remain unchanged. This can result in a site that has a mismatched design.
  
    
    
This article describes the available annotations and how to register CSS files.
  
    
    
For more information about custom themes, see  [How to: Deploy a custom theme in SharePoint 2013](how-to-deploy-a-custom-theme-in-sharepoint.md) and [How to: Create a master page preview file in SharePoint 2013](how-to-create-a-master-page-preview-file-in-sharepoint.md).
  
    
    

## Add annotations to custom CSS files
<a name="annotations"> </a>

Annotations tell the SharePoint theming engine how to theme properties in a CSS file. This section describes the available annotations and how they can be used.
  
    
    

### ReplaceColor annotation
<a name="replaceColor"> </a>

The **ReplaceColor** annotation replaces the color value with the specified theme color. It can be used with CSS properties that define a color value, such as **color**, **background-color**, **border**, and so on.
  
    
    
The following shows the format for the **ReplaceColor** annotation.
  
    
    



```

/* [ReplaceColor(themeColor:"ColorSlot"[, themeShade:"ShadeValue"][, themeTint:"TintValue"][, opacity:"OpacityValue"])] */

```

Replace  _ColorSlot_ with the annotation name of the color slot to use. To see a list of available color slots, see the [Color slot mapping](color-palettes-and-fonts-in-sharepoint.md#colorSlots) section in [Color palettes and fonts in SharePoint 2013](color-palettes-and-fonts-in-sharepoint.md).
  
    
    
Use the optional **themeShade** parameter if you want to darken the theme color. Replace _ShadeValue_ with a numeric value from 0.0 (no change) to 1.0 (darkest).
  
    
    
Use the optional **themeTint** parameter if you want to lighten the theme color. Replace _TintValue_ with a numeric value from 0.0 (no change) to 1.0 (lightest).
  
    
    
Use the optional **opacity** parameter if you want to specify the opacity of the theme color. Replace _OpacityValue_ with a numeric value that specifies the opacity setting. The opacity setting ranges from 0.0 (fully transparent) to 1.0 (fully opaque).
  
    
    
The following shows examples of the **ReplaceColor** annotation being used in a CSS file.
  
    
    

-  `/* [ReplaceColor(themeColor:"BodyText")] */ color:#444;`
    
  
-  `/* [ReplaceColor(themeColor:"BackgroundOverlay",opacity:"0.5")] */ background-color:#fff;`
    
  
-  `/* [ReplaceColor(themeColor:"EmphasisBackground",themeTint:"0.05")] */ background-color:#f2faff;`
    
  

### ReplaceFont annotation
<a name="replaceFont"> </a>

The **ReplaceFont** annotation adds the specified theme font to the list of available fonts. It can be used with the **font** and **font-family** CSS properties.
  
    
    
The following shows the format for the **ReplaceFont** annotation.
  
    
    



```

/* [ReplaceFont(themeFont:"FontSlot")] */
```

Replace  _FontSlot_ with the name of the font slot to use. To see a list of available font slots, see the [Font slots](color-palettes-and-fonts-in-sharepoint.md#fontSlot) section in [Color palettes and fonts in SharePoint 2013](color-palettes-and-fonts-in-sharepoint.md).
  
    
    
The following shows an example of the **ReplaceFont** annotation. In this example, if the **body** font slot is defined as Courier in the theme, Courier will be added as the first item in the list of available fonts in the **Choose the Look** wizard.
  
    
    

-  `/* [ReplaceFont(themeFont:"body")] */ font-family:"Segoe UI","Segoe",Tahoma,Helvetica,Arial,sans-serif;`
    
  

### ReplaceBGImage annotation
<a name="replaceBGimage"> </a>

The **ReplaceBGImage** annotation replaces the background image in the CSS file with the theme background image. It can be used with the **background** and **background-image** CSS properties.
  
    
    
The following shows the format for the **ReplaceBGImage** annotation. The **ReplaceBGImage** annotation can also be used with the **AlphaImageLoader** filter to support earlier versions of Internet Explorer.
  
    
    



```
/* [ReplaceBGImage] */
```


### RecolorImage annotation
<a name="replaceBGimage"> </a>

The **RecolorImage** annotation recolors the image specified.
  
    
    
The following describes the format of the **RecolorImage** annotation.
  
    
    



```
/* [RecolorImage(themeColor:"ColorSlot"[, method:["Tinting"|"Blending"|"Filling"]][, includeRectangle: {x:x-Setting,y:y-Setting,width:RegionWidth,height:RegionHeight})] */

```

Replace  _ColorSlot_ with the annotation name of the color slot. To see a list of available color slots, see the [Color slot mapping](color-palettes-and-fonts-in-sharepoint.md#colorSlots) section in [Color palettes and fonts in SharePoint 2013](color-palettes-and-fonts-in-sharepoint.md).
  
    
    
Use the optional **method** parameter if you want to specify the recoloring method.
  
    
    
Use the optional **includeRectangle** parameter if you want to recolor only a specific region of an image. Replace _x-Setting_,  _y-Setting_,  _RegionWidth_, and  _RegionHeight_ with the x-coordinate, y-coordinate, width, and height of the region that you want to recolor.
  
    
    
The following shows examples of the **RecolorImage** annotation being used in a CSS file.
  
    
    

-  `/* [RecolorImage(themeColor:"SubtleBodyText",method:"Tinting")] */ background-image:url("/_layouts/15/images/tabtitlerowbottombg.png?rev=23");`
    
  
-  `/* [RecolorImage(themeColor:"BodyText",method:"Filling",includeRectangle:{x:161,y:178,width:16;height:16})] */ background:url("/_layouts/15/images/spcommon.png?rev=23") no-repeat -161px -178px;`
    
  

## Upload the CSS file to the Themable folder in the Style library
<a name="uploadCSS"> </a>

Place the custom CSS files in the Themable folder in the Style library (not the Themable folder in the Master Page Gallery). Only CSS files that are stored in the Themable folder in the Style library are recognized by the theming engine. The Themable folder is created automatically for publishing sites. Otherwise, you can create the Themable folder in the correct location (http://  _SiteCollectionName_/Style Library/ _language_/Themable/).
  
    
    

> **Note:**
> The name of the  _language_ folder must be in the 4-digit format _ll-cc_ to identify the language and culture, respectively. For example, en-us or ar-sa. For more information, see [Language identifiers and OptionState Id values in Office 2013](http://technet.microsoft.com/en-us/library/cc179219.aspx). 
  
    
    

CSS files must be checked in and published. If CSS files are changed, you must reapply the theme for the changes to be recognized.
  
    
    

## Register the CSS file
<a name="registerCSS"> </a>

You must register the CSS file with a master page before the CSS file can be used by the theming engine. This directs the master page to the CSS file when you apply a theme to a site. To register a CSS file, you add a **<SharePoint:CssRegistration>** element to the **<head>** element of the master page. The following shows the format of the **<SharePoint:CssRegistration>** element.
  
    
    

```HTML

<SharePoint:CssRegistration Name="CSSFileLocation" runat="server" />
```

Replace  _CSSFileLocation_ with the location of the CSS file.
  
    
    
The following is an example of an **<SharePoint:CssRegistration>** element.
  
    
    



```HTML
<head>
…
<SharePoint:CssRegistration Name="<%$SPUrl:~SiteCollection/Style Library/~language/Themable/MyCustomFile.css%>" runat="server" />
</head>
```


> **Note:**
> The **%$SPUrl** token cannot be used on SharePoint Foundation 2013. You must use a URL to specify the location of the CSS file.
  
    
    


## Additional resources
<a name="addresources"> </a>


-  [Themes overview for SharePoint 2013](themes-overview-for-sharepoint.md)
    
  
-  [How to: Deploy a custom theme in SharePoint 2013](how-to-deploy-a-custom-theme-in-sharepoint.md)
    
  
-  [Upgrade custom themes and CSS to SharePoint 2013](upgrade-custom-themes-and-css-to-sharepoint.md)
    
  
-  [How to: Create a master page preview file in SharePoint 2013](how-to-create-a-master-page-preview-file-in-sharepoint.md)
    
  
-  [Color palettes and fonts in SharePoint 2013](color-palettes-and-fonts-in-sharepoint.md)
    
  
-  [SharePoint Team Blog: Show off your style with SharePoint theming](http://blogs.office.com/b/sharepoint/archive/2012/10/29/show-off-your-style-with-sharepoint-theming.aspx)
    
  
-  [SharePoint 2013 Design Manager branding and design capabilities](sharepoint-design-manager-branding-and-design-capabilities.md)
    
  

