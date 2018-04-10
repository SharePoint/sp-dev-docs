---
title: "CheckBox Element"
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
ms.assetid: 34effc7f-c03d-48b0-bc77-6685087cb2a5
description: "Last modified: March 09, 2015"
---

# CheckBox Element

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines a check box control.
  
```
<CheckBox
     Alt="Text"
     Command="Text"
     Id="Text"
     LabelText="Text"
     MenuItemId="Text"
     QueryCommand="Text"
     Sequence="Integer"
     TemplateAlias="Text"
     ToolTipImage32by32="Url"
     ToolTipImage32by32Class="CSS Class Selector"
     ToolTipImage32by32Left="Negative Integer"
     ToolTipImage32by32Top="Negative Integer"
     ToolTipTitle="Text"
     ToolTipDescription="Text"
     ToolTipHelpKeyWord="Text"
     ToolTipShortcutKey="Text"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Alt** <br/> |Optional. Alternative text that is used for the check box.  <br/> |
|**Command** <br/> |Optional. The name of the command to execute when the control is clicked. If the control is in a [CommandUIDefinition](commanduidefinition-element.md) element, the value of the **Command** attribute of the control should be the same as the value of the **Command** attribute of a corresponding [CommandUIHandler](commanduihandler-element.md) element.  <br/> |
|**Id** <br/> |Required. Identifies the control. The value can be a string representation of a GUID or a unique term, such as "Ribbon.Library.Share.NewRibbonCheckBox".  <br/> |
|**LabelText** <br/> |Optional. The text to label the control.  <br/> |
|**MenuItemId** <br/> |Optional. A string that identifies the menu item where the button is located.  <br/> |
|**QueryCommand** <br/> |Optional. The name of the command to execute when polling for state information.  <br/> |
|**Sequence** <br/> |Optional. An integer that specifies the order of placement among sibling XML nodes.  <br/> |
|**TemplateAlias** <br/> |Optional. A string that matches the value of the **TemplateAlias** attribute for a [ControlRef](controlref-element.md) element, an [OverflowArea](overflowarea-element.md) element, or an [OverflowSection](overflowsection-element.md) element in a [GroupTemplate](grouptemplate-element.md) element. The **TemplateAlias** attribute is used to size and position controls within a group when a template is applied to the group.  <br/> |
|**ToolTipImage32by32** <br/> |Optional. A server-relative URL to a file that contains a 32-by-32-pixel image to be used in the tooltip, such as "/_layouts/1033/images/formatmap32x32.png".  <br/> |
|**ToolTipImage32by32Class** <br/> |Optional. The name of a CSS class selector to be applied to the tooltip image.  <br/> |
|**ToolTipImage32by32Left** <br/> |Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **ToolTipImage32by32** attribute points to an image file that contains images for many icons. The value of the **ToolTipImage32by32Left** attribute is used to set the CSS **left** attribute for the inline style of an HTML **img** tag.  <br/> |
|**ToolTipImage32by32Top** <br/> |Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **ToolTipImage32by32** attribute points to an image file that contains the images for many icons. The value of the **ToolTipImage32by32Top** attribute is used to set the CSS **top** attribute for the inline style of an HTML **img** tag.  <br/> |
|**ToolTipTitle** <br/> |Optional. The text that appears as the title of the tooltip.  <br/> |
|**ToolTipDescription** <br/> |Optional. The text that appears in the body of the tooltip.  <br/> |
|**ToolTipHelpKeyWord** <br/> |Optional. The keyword that is used by context-sensitive Help.  <br/> |
|**ToolTipShortcutKey** <br/> |Optional. The text to display for the shortcut key in the tooltip. For example, if the shortcut key for the control is ALT + J, the value for this attribute is "ALT + J". The tooltip will display the text for the shortcut key in parentheses after the tooltip title: "(ALT + J)".  <br/> |
   
### Child elements

None
  
### Parent elements

||
|:-----|
|[CommandUIDefinition](commanduidefinition-element.md) <br/> |
|[Controls](controls-element-group.md) (Group)  <br/> |
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: unbounded  <br/> |
   
## Example

The following example is an XML fragment that defines a group of controls that includes a **CheckBox** element. 
  
```XML
<Group 
  Id="Ribbon.Image.Image.Size"
  Sequence="50"
  Command="ImageSizeGroup"
  Description=""
  Title="$Resources:core,GrpSize;"
  Image32by32Popup="/_layouts/$Resources:core,Language;/images/formatmap32x32.png" Image32by32PopupTop="-128" Image32by32PopupLeft="0"
  Template="Ribbon.Templates.Flexible2"
>
  <Controls Id="Ribbon.Image.Image.Size.Controls">
    <Label
      Id="Ribbon.Image.Image.Size.HorizontalSizeLabel"
      LabelText="$Resources:core,LabelHorizSize;"
      Command="ImageHorizontalLabel"
      ForId="Ribbon.Image.Image.Size.HorizontalSize"
      Image16by16="/_layouts/$Resources:core,Language;/images/formatmap16x16.png" Image16by16Top="-80" Image16by16Left="-16"
      TemplateAlias="o1"
      Sequence="10" 
    />
    <Spinner
       Id="Ribbon.Image.Image.Size.HorizontalSize"
       DefaultUnit="pixel"
       DefaultValue="10"
       AltUpArrow="$Resources:core,cui_spnUpAlt;"
       AltDownArrow="$Resources:core,cui_spnDownAlt;"
       AccelerationInterval="125"
       MultiplierInterval="2000"
       ImeEnabled="false"
       Command="ImageWidth"
       QueryCommand="QueryImageWidth"
       ToolTipTitle="$Resources:core,LabelHorizSize;"
       ToolTipDescription="$Resources:core,cui_stt_ButSizeMenuHorizontalSizeTooltip;"
       TemplateAlias="o2"
      Sequence="20" 
    >
      <Unit
          Name="pixel"
          MinimumValue="1"
          MaximumValue="2000"
          DecimalDigits="0"
          Interval="5"
        >
        <UnitAbbreviation Value="px" />
      </Unit>
      <Unit
          Name="percent"
          MinimumValue="1"
          MaximumValue="100"
          DecimalDigits="0"
          Interval="1"
        >
        <UnitAbbreviation Value="%" />
      </Unit>
    </Spinner>
    <Label
      Id="Ribbon.Image.Image.Size.VertSizeLabel"
      LabelText="$Resources:core,LabelVertSize;"
      Command="ImageVerticalLabel"
      ForId="Ribbon.Image.Image.Size.VerticalSize" 
      Image16by16="/_layouts/$Resources:core,Language;/images/formatmap16x16.png" Image16by16Top="-208" Image16by16Left="-224"
      TemplateAlias="o1"
      Sequence="30" 
    />
    <Spinner
      Id="Ribbon.Image.Image.Size.VerticalSize"
      DefaultUnit="pixel"
      DefaultValue="10"
      AltUpArrow="$Resources:core,cui_spnUpAlt;"
      AltDownArrow="$Resources:core,cui_spnDownAlt;"
      AccelerationInterval="125"
      MultiplierInterval="2000"
      Command="ImageHeight"
      ImeEnabled="false"
      QueryCommand="QueryImageHeight"
      ToolTipTitle="$Resources:core,LabelVertSize;"
      ToolTipDescription="$Resources:core,cui_stt_ButSizeMenuVerticalSizeTooltip;"
      TemplateAlias="o2"
      Sequence="40" 
    >
      <Unit
          Name="pixel"
          MinimumValue="1"
          MaximumValue="2000"
          DecimalDigits="0"
          Interval="5"
        >
        <UnitAbbreviation Value="px" />
      </Unit>
      <Unit
          Name="percent"
          MinimumValue="1"
          MaximumValue="100"
          DecimalDigits="0"
          Interval="1"
        >
        <UnitAbbreviation Value="%" />
      </Unit>
    </Spinner>
    <CheckBox
      Id="Ribbon.Image.Image.Size.LockAspect"
      Command="ImageLockRatio"
      QueryCommand="QueryImageLockRatio"
      LabelText="$Resources:core,LabelLockAspect;"
      Alt="$Resources:core,ButLockAspectAlt;"
      TemplateAlias="o2"
      Sequence="50" 
    />
  </Controls>
</Group>
```


