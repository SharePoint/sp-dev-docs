---
title: Apply styles to page fields in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: e227613d-0e4d-4312-924d-bb55e1fe4293
---


# Apply styles to page fields in SharePoint
In a page layout, you can apply styles to a page field, and those styles are applied to any content added by content authors when they create a page from that page layout. Also, you have further options to control how content in a RichHtmlField page field is styled.
## Introduction to applying styles to page fields
<a name="Introduction"> </a>

As a designer, you have ultimate control over the positioning and styling of page fields on a page layout and on any pages created from that page layout. When content authors create pages from a browser, they can't move page fields on the page or override the styles that you specify. This helps to ensure that your branding remains consistent through all pages in the site.
  
    
    
When you apply styles to page fields, there are two basic categories of field types to consider:
  
    
    

- **Field types other than RichHtmlField** The page fields that make up a page layout conform to the content type for that page layout. A page field can be of many types, such as a Single Line of Text (TextField) or Multiple Lines of Text (NoteField). As a designer, you can apply styles to all of these page fields in the same way, by applying styles to the page field directly on the page layout.
    
  
- **RichHtmlField** The rich HTML field control (also known as a Publishing HTML field) is one of the most powerful and frequently used controls in page layouts. By default, in a rich HTML field, content authors use the ribbon to format and apply styles to content, and to insert tables, media such as images and video, and Web Parts. This field type is useful when you want to give content authors the freedom to add and style content within parameters that you can control. You can control a RichHtmlField in two ways:
    
  - **Create a custom style sheet** By default, the styles available on the ribbon of a RichHtmlField come from a style sheet named HtmlEditorStyles.css. You can configure the **PrefixStyleSheet** property for this snippet so that your own custom styles appear on the ribbon for content authors to use.
    
  
  - **Configure the Allow properties** A snippet for a RichHtmlField has 28 available properties that start with **Allow**, and you can use these properties to make specific commands or groups of commands on the ribbon unavailable to content authors. For example, if you set the **AllowFontsMenu** property to **False**, authors cannot use the Font menu on the ribbon to change what font is applied to text; instead, they can use only the CSS styles that you specify.
    
  
For all types of page fields, including the RichHtmlField, the designer determines how the content is styled. You can use the RichHtmlField to give content authors the freedom to insert rich content and apply styles; you still have ultimate control over what content can be added and what styles can be applied.
  
    
    

## Applying styles to page fields other than RichHtmlField
<a name="Applying"> </a>

With a page field control, you can define the styles used by the content. Authors can add content to a page, but the designer controls how that content is rendered through CSS applied to those controls.
  
    
    
In the HTML page layout, each page field is wrapped in a **\<div\>** tag. To apply a style to a page field, you can simply add a style to the **\<div\>**—for example,  `<div style="font-weight:bold"`. But the more common and useful scenario is that you add an **id** attribute to the **\<div\>** for each page field in the page layout, and then use the **id** as a selector for styles that reside in an external style sheet. This way, if you have multiple device channels, and each channel has its own style sheet, you can apply different styles to each page field for each channel. For example, the following page field of the type TextField (also called Multiple Lines of Text) might have only an **id** attribute on the **\<div\>** tag.
  
    
    



```HTML

<div id="ShortSummaryPageField">
<!--CS: Start Page Field: ShortSummary Snippet-->
<!--SPM:<%@Register Tagprefix="PageFieldNoteField" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
<!--MS:<PageFieldNoteField:NoteField FieldName="a5249942-2dc5-4917-85e2-661d019ad548" runat="server">-->
<!--PS: Start of READ-ONLY PREVIEW (do not modify)--><div align="left" class="ms-formfieldcontainer"><div class="ms-formfieldlabelcontainer" nowrap="nowrap"><span class="ms-formfieldlabel" nowrap="nowrap">ShortSummary</span></div><div class="ms-formfieldvaluecontainer"><div class="ms-rtestate-field">ShortSummary field value.</div></div></div><!--PE: End of READ-ONLY PREVIEW-->
<!--ME:</PageFieldNoteField:NoteField>-->
<!--CE: End Page Field: ShortSummary Snippet-->
</div>
```

For more information about where styles and style references for a page layout should go, see  [How to: Create a page layout in SharePoint](how-to-create-a-page-layout-in-sharepoint.md).
  
    
    

## Disabling options on the ribbon of a RichHtmlField
<a name="Disabling"> </a>

When content authors create or edit a page and then add content to a RichHtmlField using a browser, they can use commands on the ribbon for that field to format, style, or insert rich content and media. 
  
    
    
In the Snippet Gallery, you can configure the properties of a page field of the type RichHtmlField, so that specific commands or groups of commands on the ribbon are made unavailable to authors. For example, by setting the **AllowFontSizesMenu** property to **False**, you can disable the **Font Size** menu on the ribbon. By setting the **AllowFonts** property to **False**, you can disable the entire **Font** group on the ribbon.
  
    
    
After you configure these properties in the Snippet Gallery and then update the snippet, the properties appear in the snippet markup inside the  `<!--MS:>` comment.
  
    
    



```HTML

<div data-name="Page Field: ArticleBody">
<!--CS: Start Page Field: ArticleBody Snippet-->
<!--SPM:<%@Register Tagprefix="PageFieldRichHtmlField" Namespace="Microsoft.SharePoint.Publishing.WebControls" Assembly="Microsoft.SharePoint.Publishing, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"%>-->
<!--MS:<PageFieldRichHtmlField:RichHtmlField runat="server" AllowFonts="False" FieldName="db3168db-8778-4fb6-a48f-57f598497388">-->
<!--PS: Start of READ-ONLY PREVIEW (do not modify)--><div id="ctl02_label" style="display:none">ArticleBody</div><div id="ctl02__ControlWrapper_RichHtmlField" class="ms-rtestate-field" style="display:inline" aria-labelledby="ctl02_label"><div align="left" class="ms-formfieldcontainer"><div class="ms-formfieldlabelcontainer" nowrap="nowrap"><span class="ms-formfieldlabel" nowrap="nowrap">ArticleBody</span></div><div class="ms-formfieldvaluecontainer"><div class="ms-rtestate-field">ArticleBody field value. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></div></div></div>
<!--PE: End of READ-ONLY PREVIEW-->
<!--ME:</PageFieldRichHtmlField:RichHtmlField>-->
<!--CE: End Page Field: ArticleBody Snippet-->
</div>
```


> **Note:**
> If you set **AllowFonts** to **False**, content authors can still use keyboard shortcuts such as CTRL+B (strong) to format text. To prevent authors from adding any styles to text, you can set **AllowTextMarkup** to **False**. With this setting, when content authors attempt to save content that contains styles applied to text, the HTML editor in the browser returns an error and prompts the author to remove the markup that is not valid. 
  
    
    

A RichHtmlField page field contains 28 different **Allow** properties. For more information about what specific properties control, see [RichHtmlField properties](http://msdn.microsoft.com/en-us/library/microsoft.sharepoint.publishing.webcontrols.richhtmlfield_properties) For more information about adding and configuring snippets, see [SharePoint Design Manager snippets](sharepoint-design-manager-snippets.md).
  
    
    

## Controlling the styles available in a RichHtmlField
<a name="Controlling"> </a>

In a RichHtmlField, content authors can use options on the ribbon to format content. These formatting options are implemented by using CSS, and these styles are defined in a SharePoint style sheet named HtmlEditorStyles.css that resides on the server at one of the following locations:
  
    
    

- C:\\Program Files\\Common Files\\Microsoft Shared\\Web Server Extensions\\15\\TEMPLATE\\LAYOUTS\\1033\\STYLES 
    
  
- C:\\Program Files\\Common Files\\Microsoft Shared\\Web Server Extensions\\15\\TEMPLATE\\FEATURES\\PublishingLayouts\\en-us
    
  
Because the RichHtmlField in the browser uses CSS to implement its styles, you can create your own styles that are consistent with the branding of your site, and then you can make those styles available on the ribbon for content authors to use. To make minor changes to the default styles, you can copy an existing style from HtmlEditorStyles.css to your style sheet that is referenced by the page layout, and then modify that style by changing the CSS properties and values (but not the selector). You can also hide default styles from the ribbon by copying them to your style sheet and then setting  `display:none`.
  
    
    
To implement custom styles, you can also build a style sheet from scratch by changing the **PrefixStyleSheet** property for the RichHtmlField snippet. By default, this property is set to **ms-rte**, and the styles in the default style sheet HtmlEditorStyles.css each begin with this prefix—for example:
  
    
    



```HTML

H1. ms-rteElement-H1
{
-ms-name:"Heading 1";
-ms-element:"true";
}
```

When you change the value of the **PrefixStyleSheet** property, none of the existing **ms-rte** styles are available in the rich HTML editor, and only styles that you create that use the new prefix are available to content authors. This means if you want to use some of the default styles, they must be copied to your style sheet and modified so that they use the new prefix.
  
    
    

> **Note:**
> The **PrefixStyleSheet** property is defined per each RichHtmlField page field, but multiple page fields can use the same value for this property. So, if multiple page layouts reference the same style sheet, it's possible for multiple RichHtmlFields on those page layouts to have the same style prefix and reference the same styles.
  
    
    


### To define a new list of styles for a RichHtmlField


1. Browse to your publishing site.
    
  
2. In the upper-right corner of the page, choose **Settings**, and then choose **Design Manager**.
    
  
3. In Design Manager, in the left navigation pane, choose **Edit Page Layouts**.
    
  
4. Choose the page layout on which the RichHtmlField page field will reside.
    
  
5. In the upper-right corner of the server-side preview, choose **Snippet Gallery**.
    
  
6. On the ribbon, choose **Page Fields**, and then choose a page field of the type **RichHtmlField**.
    
  
7. In the property grid, expand the **Misc** section, and then change the **PrefixStyleSheet** property to a value other than **ms-rte**—for example, change the value to be **customstyle**.
    
    > **Important:**
      > This property value must be all lowercase. 
8. Choose **Update**.
    
  
9. On the left side of the Snippet Gallery, choose **Copy to Clipboard**.
    
  
10. In the mapped network drive on your computer, open the HTML page layout in your HTML editor.
    
    > **Note:**
      > For more information, see  [How to: Map a network drive to the SharePoint Master Page Gallery](how-to-map-a-network-drive-to-the-sharepoint-master-page-gallery.md). 
11. In the HTML page layout, paste the HTML snippet inside **PlaceHolderMain**.
    
  
12. Save the HTML page layout. The changes to the HTML file are synced to the associated .aspx page layout.
    
    At this point, if a content author creates or edits a page based on this page layout, no styles are available on the ribbon of the HTML editor because this specific page field uses only styles that begin with the new prefix **customstyle**, but those styles have not yet been defined.
    
  
13. On the server, browse to the following location and open HtmlEditorStyles.css:
    
    C:\\Program Files\\Common Files\\Microsoft Shared\\Web Server Extensions\\15\\TEMPLATE\\LAYOUTS\\1033\\STYLES
    
    It's useful to view the default styles, understand how they're written, and possibly reuse some of them by copying them to your style sheet and then modifying them. If you do this, replace the default **ms-rte** prefix with your own prefix.
    
    > **Important:**
      > Do not modify the default style sheet, HtmlEditorStyles.css. This style sheet provides styles for every RichHtmlField in the farm. Also, service updates or an upgrade may overwrite this file, causing you to lose any changes. 
14. In your style sheet, create a list of new styles that start with the new prefix.
    
    For example, if **customstyle** is the new prefix, your style sheet might contain the following style.
    


```HTML
  
H2.customstyleElement-H2
{
-ms-name:"Heading 2";
-ms-element:"true";
}
customstyleElement-H2
{
font-weight: bold;
font-family: Cambria;
font-size: 16pt;
} 

```


    For clarity, the class name and the name of the style as it appears on the ribbon are defined separately from the style properties. In this example, **H2** is the element selector for the style, and **customstyleElement-H2** is the class name of the style. The class name has two parts: **customstyle** is the prefix that you specified for this page field, and **Element** specifies that this style will appear in the **Page Elements** section of the **Styles** gallery on the ribbon of the HTML editor. The **-ms-name** property sets the display name that appears to content authors in the Styles gallery.
    
    SharePoint maps a style to a menu or command on the ribbon by parsing the class name immediately after the prefix and looking for one of these strings:
    
  - **Element**: The Page Elements section of the Styles gallery
    
  
  - **Style**: The Text Styles section of the Styles gallery
    
  
  - **FontSize**: The Font Size menu
    
  
  - **ThemeFontFace**: The Font menu
    
  
  - **ForeColor**: The Font Color menu
    
  
  - **BackColor**: The Highlight Color menu
    
  
  - **Image**: The Image menu
    
  
  - **Table**: The Table menu
    
  
  - **Position**: The Align buttons in the Paragraph group
    
  

    For more information about where styles for a page layout should reside, see  [How to: Create a page layout in SharePoint](how-to-create-a-page-layout-in-sharepoint.md).
    
  

## Additional resources
<a name="Additional"> </a>


-  [Overview of Design Manager in SharePoint](overview-of-design-manager-in-sharepoint.md)
    
  
-  [How to: Create a page layout in SharePoint](how-to-create-a-page-layout-in-sharepoint.md)
    
  
-  [SharePoint Design Manager snippets](sharepoint-design-manager-snippets.md)
    
  

