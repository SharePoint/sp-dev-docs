---
title: Color palettes and fonts in SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: c17d375b-151f-48ae-ac32-f2ce9e68d63f
---


# Color palettes and fonts in SharePoint 2013
Use this reference to define the color palette or font scheme that is used in a SharePoint 2013 site.
## Color palettes
<a name="color"> </a>

A color palette is the combination of colors that are used in a SharePoint site. The color palette for a SharePoint site is defined in a color palette file. Color slots are also used by the master page preview file to generate thumbnail and preview images of a site. The following describes the structure of the color palette file and the master page preview file:
  
    
    

- **Color palette file (.spcolor)**
    
    Color palette files are used in the **Change the look** wizard, which enables users to change the look and feel of their site by using the SharePoint themes user interface. By default, 32 color palette files are installed with SharePoint 2013. You can also create additional color palette files. The following example shows the format of a color palette file.
    

```xml  
<s:colorPalette isInverted="InvertedSetting" previewSlot1="Slot1" previewSlot2="Slot2" previewSlot3="Slot3" xmlns:s="http://schemas.microsoft.com/sharepoint/">
    <s:color name="ColorSlot" value="Color" />
    <!--additional color slots-->
</s:colorPalette>
```


  In a color palette file, the following placeholders are replaced:
    
-  _InvertedSetting_ is a Boolean value. **true** if the color palette is generally light text on a dark background. **false** if the color palette is generally dark text on a light background.
    
  
-  _Slot1_ is the annotation name of the color slot to use as the first block of the palette icon in the color palette picker of the theming experience.
    
  
-  _Slot2_ is the annotation name of the color slot to use as the second block of the palette icon in the color palette picker of the theming experience.
    
  
-  _Slot3_ is the annotation name of the color slot to use as the third block of the palette icon in the color palette picker of the theming experience.
    
  
-  _ColorSlot_ is the annotation name of the color slot that you are defining (for example, SiteTitle).
    
  
-  _Color_ is the hexadecimal value of the color to use for the specified color slot. This may be in 6 digits (RRGGBB) or 8 digits (AARRGGBB). If the hexadecimal value is 8 digits, the first two digits represent the opacity level (00-FF, which maps to 0-255). If the hexadecimal value is 6 digits, the default opacity is 100% or FF.
    
  

  The color palette files are located in the Theme Gallery of the root site, in the site collection in the **15** folder (http:// _SiteCollectionName_/_catalogs/theme/15/). To access the Theme Gallery from the SharePoint user interface, on the **Site Settings** page, under **Web Designer Galleries**, select **Themes**, and then select **15**.
    
  
- **Master page preview file (.preview)**
    
  Master page preview files are used to generate thumbnail images and preview images when you use the **Change the look** wizard. A master page must have a corresponding preview file to be used in the **Change the look** wizard. A preview file is a specially formatted file that has sections for the default color palette, default font scheme, tokenized CSS, and tokenized HTML. It uses string tokens to get the value of color slots, font names, and localized UI strings. The following example shows color slots being used in the master page preview file.
    


```HTML
  
[ID] #dgp-pageContainer
{
    background-color: [T_THEME_COLOR_PAGEBACKGROUND];
    color: [T_THEME_COLOR_BODYTEXT];
    width: 100%;
    height:100%;     
    background-image: url('[T_IMAGE]');       
    background-size: cover;
    font-family: [T_BODY_FONT];   
}
```


  For more information, see  [How to: Create a master page preview file in SharePoint 2013](how-to-create-a-master-page-preview-file-in-sharepoint.md)
    
  

> [!TIP]
> You can use the SharePoint color palette tool to help you create SharePoint designs. You can  [download the SharePoint color palette tool](http://www.microsoft.com/en-us/download/details.aspx?id=38182) from the Microsoft Download Center.
  
    
    


### Color slot mapping
<a name="colorSlots"> </a>

Table 1 describes the color slots that are available and where color slots are used in a SharePoint site.
  
    
    

> [!NOTE]
>  When discussing navigation items,pressed applies to when a user clicks or touches a navigation item.Selected applies to when a user is navigated to the page.>  The following summarizes a normal flow of actions and the color slot that applies to the navigation item link at each step:>  The base text of a navigation item link: HeaderNavigationText>  A user hovers the cursor over the navigation item link: HeaderNavigationHoverText>  A user clicks, touches, or chooses the navigation item link: HeaderNavigationPressedText>  The user is navigated to the chosen page. The color slot that applies to the navigation item for the page the user is now on: HeaderNavigationSelectedText
  
    
    


**Table 1. Color slots**


|**Annotation Name**|**Where the Color Is Used in the UI**|**Token Name**|
|:-----|:-----|:-----|
|BodyText  <br/> |Normal body text.  <br/> |[T_THEME_COLOR_BODYTEXT]  <br/> |
|SubtleBodyText  <br/> |Body text that must be lighter than normal. An example is metadata text.  <br/> |[T_THEME_COLOR_SUBTLEBODYTEXT]  <br/> |
|StrongBodyText  <br/> |Body text color for text that must stand out from normal body text.  <br/> |[T_THEME_COLOR_STRONGBODYTEXT]  <br/> |
|DisabledText  <br/> |Disabled text. For example, unavailable items in menus.  <br/> |[T_THEME_COLOR_DISABLEDTEXT]  <br/> |
|SiteTitle  <br/> |The text color of the page title.  <br/> |[T_THEME_COLOR_SITETITLE]  <br/> |
|WebPartHeading  <br/> |Text color for Web Part headings.  <br/> |[T_THEME_COLOR_WEBPARTHEADING]  <br/> |
|ErrorText  <br/> |The main error color that is used for error text, borders, and backgrounds, as needed.  <br/> |[T_THEME_COLOR_ERRORTEXT]  <br/> |
|AccentText  <br/> |Text color for accented body text.  <br/> |[T_THEME_COLOR_ACCENTTEXT]  <br/> |
|SearchURL  <br/> |Text color for the URL found in search results. Also used to highlight new items or successful status notifications.  <br/> |[T_THEME_COLOR_SEARCHURL]  <br/> |
|Hyperlink  <br/> |Text color for hyperlinks.  <br/> |[T_THEME_COLOR_HYPERLINK]  <br/> |
|HyperlinkFollowed  <br/> |Text color for followed hyperlinks.  <br/> |[T_THEME_COLOR_HYPERLINKFOLLOWED]  <br/> |
|HyperlinkActive  <br/> |Hyperlink color when pressed.  <br/> |[T_THEME_COLOR_HYPERLINKACTIVE]  <br/> |
|CommandLinks  <br/> |Large command links that must be a bit lighter than body text because of their size.  <br/> |[T_THEME_COLOR_COMMANDLINKS]  <br/> |
|CommandLinksSecondary  <br/> |Command link color for links that are smaller, and therefore have a stronger color to stand out.  <br/> |[T_THEME_COLOR_COMMANDLINKSSECONDARY]  <br/> |
|CommandLinksHover  <br/> |Command link color on hover.  <br/> |[T_THEME_COLOR_COMMANDLINKSHOVER]  <br/> |
|CommandLinksPressed  <br/> |Command link color when pressed.  <br/> |[T_THEME_COLOR_COMMANDLINKSPRESSED]  <br/> |
|CommandLinksDisabled  <br/> |Command link color when command link is disabled.  <br/> |[T_THEME_COLOR_COMMANDLINKSDISABLED]  <br/> |
|BackgroundOverlay  <br/> |The main background color that is visible between the optional background image and the page content.  <br/> |[T_THEME_COLOR_BACKGROUNDOVERLAY]  <br/> |
|DisabledBackground  <br/> |Background for disabled elements such as browser controls, for example, input box or select box (except buttons).  <br/> |[T_THEME_COLOR_DISABLEDBACKGROUND]  <br/> |
|PageBackground  <br/> |The background color of the page. Appears behind the optional background image.  <br/> |[T_THEME_COLOR_PAGEBACKGROUND]  <br/> |
|HeaderBackground  <br/> |The background color for the header area of the page.  <br/> |[T_THEME_COLOR_HEADERBACKGROUND]  <br/> |
|FooterBackground  <br/> |The background color for the footer area of the page.  <br/> |[T_THEME_COLOR_FOOTERBACKGROUND]  <br/> |
|SelectionBackground  <br/> |The background color for selected list items and drop-down menu items.  <br/> |[T_THEME_COLOR_SELECTIONBACKGROUND]  <br/> |
|HoverBackground  <br/> |The background color for list items and drop-down menu items on hover.  <br/> |[T_THEME_COLOR_HOVERBACKGROUND]  <br/> |
|RowAccent  <br/> |The accented left border on selected list items.  <br/> |[T_THEME_COLOR_ROWACCENT]  <br/> |
|StrongLines  <br/> |Borders for browser controls on hover.  <br/> |[T_THEME_COLOR_STRONGLINES]  <br/> |
|Lines  <br/> |Borders for browser controls.  <br/> |[T_THEME_COLOR_LINES]  <br/> |
|SubtleLines  <br/> |Subtle border color. For example, gridlines for inline editing.  <br/> |[T_THEME_COLOR_SUBTLELINES]  <br/> |
|DisabledLines  <br/> |Border color for disabled browser controls such as input boxes and select boxes.  <br/> |[T_THEME_COLOR_DISABLEDLINES]  <br/> |
|AccentLines  <br/> |Focused border color for selected browser controls.  <br/> |[T_THEME_COLOR_ACCENTLINES]  <br/> |
|DialogBorder  <br/> |Dialog box border color.  <br/> |[T_THEME_COLOR_DIALOGBORDER]  <br/> |
|Navigation  <br/> |Text color for horizontal and vertical navigation items.  <br/> |[T_THEME_COLOR_NAVIGATION]  <br/> |
|NavigationAccent  <br/> |Text color for a selected horizontal navigation item.  <br/> |[T_THEME_COLOR_NAVIGATIONACCENT]  <br/> |
|NavigationHover  <br/> |Navigation text color on hover. Applies to top navigation, and to Quick Launch in horizontal mode.  <br/> |[T_THEME_COLOR_NAVIGATIONHOVER]  <br/> |
|NavigationPressed  <br/> |Text color of navigation item when pressed. Applies to top navigation, and to Quick Launch in horizontal mode.  <br/> |[T_THEME_COLOR_NAVIGATIONPRESSED]  <br/> |
|NavigationHoverBackground  <br/> |Background color of Quick Launch items in vertical mode on hover over the navigation item.  <br/> |[T_THEME_COLOR_NAVIGATIONHOVERBACKGROUND]  <br/> |
|NavigationSelectedBackground  <br/> |Background color of Quick Launch items in vertical mode after the navigation item is selected.  <br/> |[T_THEME_COLOR_NAVIGATIONSELECTEDBACKGROUND]  <br/> |
|EmphasisText  <br/> |The text color that appears on top of emphasis background.  <br/> |[T_THEME_COLOR_EMPHASISTEXT]  <br/> |
|EmphasisBackground  <br/> |The accented background color that appears directly behind emphasis text.  <br/> |[T_THEME_COLOR_EMPHASISBACKGROUND]  <br/> |
|EmphasisHoverBackground  <br/> |Background color on hover, for elements that are using emphasis background.  <br/> |[T_THEME_COLOR_EMPHASISHOVERBACKGROUND]  <br/> |
|EmphasisBorder  <br/> |Border color for elements that are using emphasis background.  <br/> |[T_THEME_COLOR_EMPHASISBORDER]  <br/> |
|EmphasisHoverBorder  <br/> |Border color on hover for elements that are using emphasis background.  <br/> |[T_THEME_COLOR_EMPHASISHOVERBORDER]  <br/> |
|SubtleEmphasisText  <br/> |Text that appears on top of subtle emphasis background.  <br/> |[T_THEME_COLOR_SUBTLEEMPHASISTEXT]  <br/> |
|SubtleEmphasisCommandLinks  <br/> |Command link color for links that appear on top of subtle emphasis background.  <br/> |[T_THEME_COLOR_SUBTLEEMPHASISCOMMANDLINKS]  <br/> |
|SubtleEmphasisBackground  <br/> |Background that appears directly behind subtle emphasis text.  <br/> |[T_THEME_COLOR_SUBTLEEMPHASISBACKGROUND]  <br/> |
|TopBarText  <br/> |Text and glyph color for the welcome menu, quick access toolbar icons, and closed ribbon tabs.  <br/> |[T_THEME_COLOR_TOPBARTEXT]  <br/> |
|TopBarBackground  <br/> |The background color for the top bar, which is seen below and to the right of the suite navigation.  <br/> |[T_THEME_COLOR_TOPBARBACKGROUND]  <br/> |
|TopBarHoverText  <br/> |Text and glyph color on hover for the welcome menu, quick access toolbar icons, and closed ribbon tabs.  <br/> |[T_THEME_COLOR_TOPBARHOVERTEXT]  <br/> |
|TopBarPressedText  <br/> |Text and glyph color for when the welcome menu, quick access toolbar icons, or closed ribbon tabs are pressed.  <br/> |[T_THEME_COLOR_TOPBARPRESSEDTEXT]  <br/> |
|HeaderText  <br/> |The base text color for anything in the header area.  <br/> |[T_THEME_COLOR_HEADERTEXT]  <br/> |
|HeaderSubtleText  <br/> |Helper text for the search box when in the header area.  <br/> |[T_THEME_COLOR_HEADERSUBTLETEXT]  <br/> |
|HeaderDisableText  <br/> |Text for the search box, if the search box is disabled when in the header area.  <br/> |[T_THEME_COLOR_HEADERDISABLETEXT]  <br/> |
|HeaderNavigationText  <br/> |Base text color for navigation links in the header area.  <br/> |[T_THEME_COLOR_HEADERNAVIGATIONTEXT]  <br/> |
|HeaderNavigationHoverText  <br/> |Text color for navigation links in the header area when you hover over the link.  <br/> |[T_THEME_COLOR_HEADERNAVIGATIONHOVERTEXT]  <br/> |
|HeaderNavigationPressedText  <br/> |Text color for navigation links in the header area when you press the link.  <br/> |[T_THEME_COLOR_HEADERNAVIGATIONPRESSEDTEXT]  <br/> |
|HeaderNavigationSelectedText  <br/> |Text color for navigation links in the header area after the link is selected.  <br/> |[T_THEME_COLOR_HEADERNAVIGATIONSELECTEDTEXT]  <br/> |
|HeaderLines  <br/> |Search box lines when the search box is in the header area.  <br/> |[T_THEME_COLOR_HEADERLINES]  <br/> |
|HeaderStrongLines  <br/> |Search box lines on hover when the search box is in the header area.  <br/> |[T_THEME_COLOR_HEADERSTRONGLINES]  <br/> |
|HeaderAccentLines  <br/> |Search box lines on focus when the search box is in the header area.  <br/> |[T_THEME_COLOR_HEADERACCENTLINES]  <br/> |
|HeaderSublteLines  <br/> |Subtle lines found inside the header area. Not used in default CSS.  <br/> |[T_THEME_COLOR_HEADERSUBTLELINES]  <br/> |
|HeaderDisabledLines  <br/> |Search box lines if the search box is disabled when it's in the header area.  <br/> |[T_THEME_COLOR_HEADERDISABLEDLINES]  <br/> |
|HeaderDisabledBackground  <br/> |Search box background if the search box is disabled when it's in the header area.  <br/> |[T_THEME_COLOR_HEADERDISABLEDBACKGROUND]  <br/> |
|HeaderFlyoutBorder  <br/> |Border for drop-down menus when originating from the header area.  <br/> |[T_THEME_COLOR_HEADERFLYOUTBORDER]  <br/> |
|HeaderSiteTitle  <br/> |Text color for the site title when in the header area.  <br/> |[T_THEME_COLOR_HEADERSITETITLE]  <br/> |
|SuiteBarBackground  <br/> |Background color for the suite navigation.  <br/> |[T_THEME_COLOR_SUITEBARBACKGROUND]  <br/> |
|SuiteBarHoverBackground  <br/> |Background color on hover for the suite navigation.  <br/> |[T_THEME_COLOR_SUITEBARHOVERBACKGROUND]  <br/> |
|SuiteBarText  <br/> |Text and glyph color for the suite navigation items.  <br/> |[T_THEME_COLOR_SUITEBARTEXT]  <br/> |
|SuiteBarDisabledText  <br/> |Text and glyph color for disabled suite items. Not used in default CSS.  <br/> |[T_THEME_COLOR_SUITEBARDISABLEDTEXT]  <br/> |
|ButtonText  <br/> |Text color for buttons.  <br/> |[T_THEME_COLOR_BUTTONTEXT]  <br/> |
|ButtonDisabledText  <br/> |Text color for disabled buttons.  <br/> |[T_THEME_COLOR_BUTTONDISABLEDTEXT]  <br/> |
|ButtonBackground  <br/> |Background color for buttons.  <br/> |[T_THEME_COLOR_BUTTONBACKGROUND]  <br/> |
|ButtonHoverBackground  <br/> |Background color for buttons on hover.  <br/> |[T_THEME_COLOR_BUTTONHOVERBACKGROUND]  <br/> |
|ButtonPressedBackground  <br/> |Background color for buttons while pressed.  <br/> |[T_THEME_COLOR_BUTTONPRESSEDBACKGROUND]  <br/> |
|ButtonDisabledBackground  <br/> |Background color for disabled buttons.  <br/> |[T_THEME_COLOR_BUTTONDISABLEDBACKGROUND]  <br/> |
|ButtonBorder  <br/> |Border color for buttons.  <br/> |[T_THEME_COLOR_BUTTONBORDER]  <br/> |
|ButtonHoverBorder  <br/> |Border color for buttons on hover.  <br/> |[T_THEME_COLOR_BUTTONHOVERBORDER]  <br/> |
|ButtonPressedBorder  <br/> |Border color for buttons while pressed.  <br/> |[T_THEME_COLOR_BUTTONPRESSEDBORDER]  <br/> |
|ButtonDisabledBorder  <br/> |Border color for buttons that are disabled.  <br/> |[T_THEME_COLOR_BUTTONDISABLEDBORDER]  <br/> |
|ButtonGlyph  <br/> |Glyph color for a glyph that appears in a button.  <br/> |[T_THEME_COLOR_BUTTONGLYPH]  <br/> |
|ButtonGlyphActive  <br/> |Glyph color on hover, for a glyph that appears in a button.  <br/> |[T_THEME_COLOR_BUTTONGLYPHACTIVE]  <br/> |
|ButtonGlyphDisabled  <br/> |Glyph color for a disabled button.  <br/> |[T_THEME_COLOR_BUTTONGLYPHDISABLED]  <br/> |
|TileText  <br/> |The text that appears on top of the tile background overlay.  <br/> |[T_THEME_COLOR_TILETEXT]  <br/> |
|TileBackgroundOverlay  <br/> |The background overlay color for tiles.  <br/> |[T_THEME_COLOR_TILEBACKGROUNDOVERLAY]  <br/> |
|ContentAccent1  <br/> |The first accent color that a user can select from the Rich Text Editor color picker.  <br/> |[T_THEME_COLOR_CONTENTACCENT1]  <br/> |
|ContentAccent2  <br/> |The second accent color that a user can select from the Rich Text Editor color picker.  <br/> |[T_THEME_COLOR_CONTENTACCENT2]  <br/> |
|ContentAccent3  <br/> |The third accent color that a user can select from the Rich Text Editor color picker.  <br/> |[T_THEME_COLOR_CONTENTACCENT3]  <br/> |
|ContentAccent4  <br/> |The fourth accent color that a user can select from the Rich Text Editor color picker.  <br/> |[T_THEME_COLOR_CONTENTACCENT4]  <br/> |
|ContentAccent5  <br/> |The fifth accent color that a user can select from the Rich Text Editor color picker.  <br/> |[T_THEME_COLOR_CONTENTACCENT5]  <br/> |
|ContentAccent6  <br/> |The sixth accent color that a user can select from the Rich Text Editor color picker.  <br/> |[T_THEME_COLOR_CONTENTACCENT6]  <br/> |
   

## Font schemes
<a name="font"> </a>

Fonts are defined in the font scheme (.spfont file) and the master page preview (.preview file) for a given SharePoint site. The font scheme defines the fonts that are used in four areas: title, navigation, heading, and body. Seven font schemes are included in SharePoint 2013. You can create additional font schemes. The font scheme files are located in the **15** subfolder of the Theme Gallery of the root site of the site collection (http:// _SiteCollectionName_/_catalogs/theme/15/). To access the Theme Gallery from the SharePoint user interface, on the **Site Settings** page, under **Web Designer Galleries**, select **Themes**, and then select **15**.
  
    
    
The following example describes the format for an .spfont file.
  
    
    



```xml

<?xml version="1.0" encoding="utf-8"?>
<s:fontScheme name="FontSchemeName" previewSlot1="Slot1" previewSlot2="Slot2" xmlns:s="http://schemas.microsoft.com/sharepoint/">
  <s:fontSlots>
    <s:fontSlot name="FontSlotName">
      <s:latin typeface="LatinScriptFont" />
      <s:ea typeface="EAScriptFont"/>
      <s:cs typeface="CSFont" />
      <s:font script="Language" typeface="ScriptFont" />
      <!--Additional fonts-->
  </s:fontSlots>
  <!--Additional font slots-->
</s:fontScheme>
```

In an .spfont file, the following placeholders are replaced:
  
    
    

-  _FontSchemeName_ is the name of the font scheme.
    
  
-  _Slot1_ is the name of the font slot that you want to use as the first block of the font icon in the font scheme picker in the **Change the look** wizard.
    
  
-  _Slot2_ is the name of the font slot that you want to use as the second block of the font icon in the font scheme picker in the **Change the look** wizard.
    
  
-  _FontSlotName_ is the name of the font slot that you are defining (for example, title).
    
  
-  _LatinScriptFont_ is the font to use for Latin scripts. This font is also the fallback font. That is, this is the font that is used for a language that does not have a script that is explicitly set in the font scheme.
    
    > [!NOTE]
      > You must provide additional information to use web fonts in your font scheme. For more information, see the  [Web fonts](#webFont) section in this article.
-  _EAScriptFont_ is the font to use for East Asia scripts. The **<s:ea>** element is not currently used by SharePoint. But, the **<s:ea>** element is still required in the font scheme.
    
  
-  _CSFont_ is the font to use for complex scripts. The **<s:cs>** element is not currently used by SharePoint. But, the **<s:cs>** element is still required in the font scheme.
    
  
-  _Language_ is the language script.
    
  
-  _ScriptFont_ is the font to use for the specified language script.
    
  
The following example shows a portion of an .spfont file.
  
    
    



```xml

<s:fontScheme name="Georgia" previewSlot1="title" previewSlot2="body" xmlns:s="http://schemas.microsoft.com/sharepoint/">
    <s:fontSlots>
        <s:fontSlot name="title">
            <s:latin typeface="Georgia"/>
            <s:ea typeface=""/>
            <s:cs typeface="Segoe UI Light" />
            <s:font script="Arab" typeface="Tahoma" />
            <s:font script="Deva" typeface="Mangal" />
            <s:font script="Grek" typeface="Segoe UI Light" />
            <s:font script="Hang" typeface="Malgun Gothic" />
            <s:font script="Hans" typeface="Microsoft YaHei" />
            <s:font script="Hant" typeface="Microsoft JhengHei" />
            <s:font script="Hebr" typeface="Tahoma" />
            <s:font script="Hira" typeface="Meiryo" />
            <s:font script="Thai" typeface="Tahoma" />
            <s:font script="Armn" typeface="Tahoma" />
            <s:font script="Beng" typeface="Vrinda" />
            <s:font script="Cher" typeface="Plantagenet Cherokee" />
            <s:font script="Ethi" typeface="Nyala" />
            <s:font script="Geor" typeface="Sylfaen" />
            <s:font script="Gujr" typeface="Shruti" />
            <s:font script="Guru" typeface="Raavi" />
            <s:font script="Knda" typeface="Tunga" />
            <s:font script="Khmr" typeface="DaunPenh" />
            <s:font script="Laoo" typeface="DokChampa" />
            <s:font script="Mlym" typeface="Kartika" />
            <s:font script="Mymr" typeface="Myanmar Text" />
            <s:font script="Orya" typeface="Kalinga" />
            <s:font script="Sinh" typeface="Iskoola Pota" />
            <s:font script="Syrc" typeface="Estrangelo Edessa" />
            <s:font script="Taml" typeface="Latha" />
            <s:font script="Telu" typeface="Gautami" />
            <s:font script="Thaa" typeface="MV Boli" />
            <s:font script="Tibt" typeface="Cordia New" />
            <s:font script="Yiii" typeface="Microsoft Yi Baiti" />
        </s:fontSlot>
…
```

SharePoint 2013 includes support for web fonts. You must provide additional information to use web fonts in your font scheme. For more information, see the  [Web fonts](#webFont) section in this article.
  
    
    

### Web-safe fonts
<a name="websafeFont"> </a>

Web-safe fonts are a set of fonts that are widely used and available on most devices by default. To specify a web-safe font in the font scheme, include the name of the font in the **typeface** attribute of the font slot. The following example shows a web-safe font used in a font scheme.
  
    
    

```xml

<s:fontSlot name="title">
  <s:latin typeface="Georgia"/>
…
</s:fontSlot>
```


### Web fonts
<a name="webFont"> </a>

Web fonts are fonts that are available on the Internet. When a user views a site that uses web fonts, the web browser downloads the necessary font files along with the rest of the page. To specify a web font, you must provide the URL to your web font files in four font formats (for support across browsers), and a small and large thumbnail image to use to render the font names in the font scheme picker.
  
    
    
The following example describes the information that is required to use a web font in an **<s:latin>** element.
  
    
    



```xml

<s:latin typeface="FontName"
  eotsrc="EotFile"
  woffsrc="WoffFile"
  ttfsrc="TtfFile"
  svgsrc="SvgFile"
  largeimgsrc="LargeImgFile"
  smallimgsrc="SmallImgFile" />

```

In this example of using a web font, the following placeholders would be replaced:
  
    
    

-  _FontName_ is the name of the web font.
    
  
-  _EotFile_ is the relative URL to the Embedded Open Type font file.
    
  
-  _WoffFile_ is the relative URL to the Web Open Font Format font file.
    
  
-  _TtfFile_ is the relative URL to the TrueType font file.
    
  
-  _SvgFile_ is the relative URL to the Scalable Vector Graphics font file.
    
  
-  _LargeImgFile_ is the relative URL to the large thumbnail image that you want to use in the font scheme picker.
    
  
-  _SmallImgFile_ is the relative URL to the small thumbnail image that you want to use in the font scheme picker.
    
  

### Font slots
<a name="fontSlot"> </a>

Table 1 describes the available font slots and where they are used in a page.
  
    
    

**Table 1. Font slots**


|**Font Slot Name**|**Description**|
|:-----|:-----|
|title  <br/> |Used for the page title.  <br/> |
|navigation  <br/> |Used for the horizontal and vertical navigation elements on the page.  <br/> |
|large-heading  <br/> |Used for the H1 heading.  <br/> |
|heading  <br/> |Used for H2 and H3 headings, Web Part titles, dialog box titles, and callout titles.  <br/> |
|small-heading  <br/> |Used for H4 headings.  <br/> |
|large-body  <br/> |Used for large body text (15 pixels and 19 pixels).  <br/> |
|body  <br/> |The base font that is used everywhere else on the page.  <br/> |
   

## Additional resources
<a name="bk_addresources"> </a>


-  [Themes overview for SharePoint 2013](themes-overview-for-sharepoint.md)
    
  
-  [How to: Deploy a custom theme in SharePoint 2013](how-to-deploy-a-custom-theme-in-sharepoint.md)
    
  
-  [Upgrade custom themes and CSS to SharePoint 2013](upgrade-custom-themes-and-css-to-sharepoint.md)
    
  
-  [How to: Create a master page preview file in SharePoint 2013](how-to-create-a-master-page-preview-file-in-sharepoint.md)
    
  
-  [SharePoint Team Blog: Show off your style with SharePoint theming](http://blogs.office.com/b/sharepoint/archive/2012/10/29/show-off-your-style-with-sharepoint-theming.aspx)
    
  
-  [SharePoint 2013 Design Manager branding and design capabilities](sharepoint-design-manager-branding-and-design-capabilities.md)
    
  

  
    
    

