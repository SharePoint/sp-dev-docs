---
title: "Button Element"
ms.author: ricardol
author: ricardol
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Server Ribbon schema
api_type:
- schema
ms.assetid: 2e49d1b4-8bab-4671-b843-5beec6767417

description: "Last modified: March 09, 2015"
---

# Button Element

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Defines a push button control.
  
```
<Button
     Alt="Text"
     Command="Text"
     CommandType="General | OptionSelect | IgnoredByMenu"
     CommandValueId="Text"
     Description="Text"
     Id="Text"
     Image32by32="Url"
     Image32by32Class="CSS Class Selector"
     Image32by32Left="Negative Integer"
     Image32by32Top="Negative Integer"
     Image16by16="Url"
     Image16by16Class="CSS Class Selector"
     Image16by16Left="Negative Integer"
     Image16by16Top="Negative Integer"
     LabelCss="Text"
     LabelText="Text"
     MenuItemId="Text"
     Sequence="Integer"
     TemplateAlias="Text"
     ToolTipImage32by32="Url"
     ToolTipImage32by32Class="Text"
     ToolTipImage32by32Left="Negative Integer"
     ToolTipImage32by32Top="Negative Integer"
     ToolTipTitle="Text"
     ToolTipDescription="Text"
     ToolTipHelpKeyWord="Text"
     ToolTipShortcutKey="Text"
/>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Alt** <br/> |Optional. Alternative text for the button.  <br/> |
|**Command** <br/> |Optional. The name of the command to execute when the control is clicked. If the control is in a [CommandUIDefinition](../../sharepoint-features-schemas/custom-action-definition-schema/commanduidefinition-element.md) element, the value of the **Command** attribute of the control should be the same as the value of the **Command** attribute of a corresponding [CommandUIHandler](../../sharepoint-features-schemas/custom-action-definition-schema/commanduihandler-element.md) element.  <br/> |
|**CommandType** <br/> | Optional. An enumeration value that specifies the type of command.  <br/> **General**. Not a specific type of command.  <br/> **OptionSelection**. A command that is generated when a user selects one option in an option group.  <br/> **IgnoredByMenu**. A command that is used for controls that should not close the menu when clicked.  <br/> |
|**CommandValueId** <br/> |Optional. A string that is sent with the command event when the button is clicked.  <br/> |
|**Description** <br/> |Optional. A string that describes the button. The description is displayed only when the button is in a menu and is being rendered with the **Menu32** display mode.  <br/> |
|**Id** <br/> |Required. A string that identifies the control, such as "Ribbon.Library.Share.NewRibbonButton".  <br/> |
|**Image32by32** <br/> |Optional. A server-relative URL to a file that contains a 32-by-32-pixel image to be used as an icon, such as "/_layouts/1033/images/formatmap32x32.png".  <br/> |
|**Image32by32Class** <br/> |Optional. The name of a CSS class selector to be applied to the image.  <br/> |
|**Image32by32Left** <br/> |Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **Image32by32** attribute points to an image file that contains images for many icons.  <br/> The value of the **Image32by32Left** attribute is used to set the CSS **left** attribute for the inline style of an HTML **img** tag. For example, setting the **Image32by32Left** attribute to "-160" and the **Image32by32Top** attribute to "-448" results in an inline style that is similar to the one in the following HTML markup:  <br/> ```HTML<img src="/_layouts/1033/images/formatmap32x32.png" style="position: absolute;left: -160px;top: -448px;" />```|
|**Image32by32Top** <br/> |Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **Image32by32** attribute points to an image file that contains the images for many icons. The value of the **Image32by32Top** attribute is used to set the CSS **top** attribute for the inline style of an HTML **img** tag.  <br/> |
|**Image16by16** <br/> |Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to be used as an icon, such as "/_layouts/1033/images/formatmap16x16.png".  <br/> |
|**Image16by16Class** <br/> |Optional. The name of a CSS class selector to be applied to the image.  <br/> |
|**Image16by16Left** <br/> |Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **Image16by16** attribute points to an image file that contains images for many icons. The value of the **Image16by16Left** attribute is used to set the CSS **left** attribute for the inline style of an HTML **img** tag.  <br/> |
|**Image16by16Top** <br/> |Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **Image16by16** attribute points to an image file that contains images for many icons. The value of the **Image16by16Top** attribute is used to set the CSS **top** attribute for the inline style of an HTML **img** tag.  <br/> |
|**LabelCss** <br/> |Optional. The name of a CSS class selector to be applied to the control's label.  <br/> |
|**LabelText** <br/> |Optional. The text to label the control.  <br/> |
|**MenuItemId** <br/> |Optional. A string that identifies the menu item where the button is located.  <br/> |
|**Sequence** <br/> |Optional. An integer that specifies the order of placement among sibling XML nodes.  <br/> |
|**TemplateAlias** <br/> |Optional. A string that matches the value of the **TemplateAlias** attribute for a [ControlRef](controlref-element.md) element, an [OverflowArea](overflowarea-element.md) element, or an [OverflowSection](overflowsection-element.md) element in a [GroupTemplate](grouptemplate-element.md) element. The **TemplateAlias** attribute is used to size and position controls within a group when a template is applied to the group.  <br/> |
|**ToolTipImage32by32** <br/> |Optional. A server-relative URL to a file that contains a 32-by-32-pixel image to be used in the tooltip, such as "/_layouts/1033/images/formatmap32x32.png".  <br/> |
|**ToolTipImage32by32Class** <br/> |Optional. The name of a CSS class selector to be applied to the image.  <br/> |
|**ToolTipImage32by32Left** <br/> |Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ToolTipImage32by32** attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Left** attribute is used to set the CSS **left** attribute when the page is created.  <br/> |
|**ToolTipImage32by32Top** <br/> |Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ToolTipImage32by32** attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Top** attribute is used to set the CSS **top** attribute when the page is created.  <br/> |
|**ToolTipTitle** <br/> |Optional. The text that appears as the title of the tooltip.  <br/> |
|**ToolTipDescription** <br/> |Optional. The text that appears in the body of the tooltip.  <br/> |
|**ToolTipHelpKeyWord** <br/> |Optional. The keyword that is used by context-sensitive Help.  <br/> |
|**ToolTipShortcutKey** <br/> |Optional. The text to display for the shortcut key in the tooltip. For example, if the shortcut key for the control is ALT + J, the value for this attribute is "ALT + J". The tooltip will display the text for the shortcut key in parentheses after the tooltip title: "(ALT + J)".  <br/> |
   
## Child Elements

None
  
## Parent Elements

||
|:-----|
|[CommandUIDefinition](../../sharepoint-features-schemas/custom-action-definition-schema/commanduidefinition-element.md) <br/> |
|[Controls](controls-element-group.md) (Group)  <br/> |
|[Controls](controls-element-menusection.md) (MenuSection)  <br/> |
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: unbounded  <br/> |
   
## Example

The following example shows how to add a button control to the Server ribbon. The example adds a "Help" button to the ribbon in the same group as the built-in **New Document**, **New Folder**, and **Upload Document** controls: 
  
```XML
<?xml version="1.0" encoding="utf-8"?>
<Elements xmlns="http://schemas.microsoft.com/sharepoint/">
  <CustomAction
    Id="NewUIRibbonControl"
    RegistrationType="List"
    RegistrationId="101"
    Location="CommandUI.Ribbon">
    <CommandUIExtension>
      <CommandUIDefinitions>
        <CommandUIDefinition
           Location="Ribbon.Documents.New.Controls._children">
          <Button
             Id="NewUIRibbonControl.ShowHelp"
             Alt="Help"
             Sequence="1981"
             Command="ShowHelp"
             Image32by32="/_layouts/images/newui/dochelp.png"
             LabelText="Help"
             TemplateAlias="o1"/>
        </CommandUIDefinition>
      </CommandUIDefinitions>
      <CommandUIHandlers>
        <CommandUIHandler
         Command="ShowHelp"
         CommandAction="javascript:window.open('http://msdn.microsoft.com/en-us/library/ee539395%28office.14%29.aspx');" />
      </CommandUIHandlers>
    </CommandUIExtension>
  </CustomAction>
</Elements>
```

## See also

#### Other resources

[Walkthrough: Adding a Button to the Server Ribbon](http://msdn.microsoft.com/library/82d7078a-696d-4c93-99bf-d40cfb4db305%28Office.15%29.aspx)

