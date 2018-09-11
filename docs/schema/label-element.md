---
title: "Label element (Server Ribbon)"
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
ms.assetid: 6b271365-08bf-470c-9e5d-8f9240e79baa
description: Defines a label control.
---

# Label element (Server Ribbon)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines a label control.
  
```XML
<Label
  ForId="Text"
  Id="Text"
  LabelText="Text"
  Image16by16="Url"
  Image16by16Class="CSS Class Selector"
  Image16by16Left="Negative Integer"
  Image16by16Top="Negative Integer"
  Sequence="Integer"
  TemplateAlias="Text"
  QueryCommand="Text"
  Command="Text"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**ForId** <br/> |Optional. The ID of the control that this control labels.  <br/> |
|**Id** <br/> |Required. A string that identifies the control, such as "Ribbon.Image.Image.Size.HorizontalSizeLabel".  <br/> |
|**LabelText** <br/> |Optional. The text of the label.  <br/> |
|**Image16by16** <br/> |Optional. A server-relative URL to a file that contains a 16-by-16-pixel image to be used as an icon, such as "/_layouts/1033/images/formatmap16x16.png".  <br/> |
|**Image16by16Class** <br/> |Optional. The name of a CSS class selector to be applied to the image.  <br/> |
|**Image16by16Left** <br/> |Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **Image16by16** attribute points to an image file that contains images for many icons. The value of the **Image16by16Left** attribute is used to set the CSS **left** attribute for the inline style of an HTML **img** tag.  <br/> |
|**Image16by16Top** <br/> |Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **Image16by16** attribute points to an image file that contains images for many icons. The value of the **Image16by16Top** attribute is used to set the CSS **top** attribute for the inline style of an HTML **img** tag.  <br/> |
|**Sequence** <br/> |Optional. An integer that specifies the order of placement among sibling XML nodes.  <br/> |
|**TemplateAlias** <br/> |Optional. A string that matches the value of the **TemplateAlias** attribute for a [ControlRef](controlref-element.md) element, an [OverflowArea](overflowarea-element.md) element, or an [OverflowSection](overflowsection-element.md) element in a [GroupTemplate](grouptemplate-element.md) element. The **TemplateAlias** attribute is used to size and position controls within a group when a template is applied to the group.  <br/> |
|**QueryCommand** <br/> |Optional. The name of the command to execute when polling for state information.  <br/> |
|**Command** <br/> |Optional. The name of the command to execute when the label receives focus.  <br/> |
   
### Child elements

None
  
### Parent elements

- [CommandUIDefinition](commanduidefinition-element.md) 
- [Controls](controls-element-group.md) 

### Occurrences

- Minimum: 0
- Maximum: 1 
   
## Example

The following example is an XML fragment that shows a **Controls** element that contains two text box controls and two labels for them. 
  
```XML
<Controls Id="Ribbon.Link.Link.Properties.Controls">
  <Label
    Id="Ribbon.Link.Link.Properties.LinkAddressLabel"
    LabelText="$Resources:core,LabelLinkAddress;"
    Command="LinkUrlLabel"
    ForId="Ribbon.Link.Link.Properties.LinkAddress"
    Sequence="10"
    Image16by16="/_layouts/$Resources:core,Language;/images/formatmap16x16.png" Image16by16Top="-160" Image16by16Left="-224"
    TemplateAlias="o1"/>
  <TextBox
    Id="Ribbon.Link.Link.Properties.LinkAddress"
    Command="LinkUrlChanged"
    ToolTipTitle="$Resources:core,cui_LinkAddress;"
    ToolTipDescription="$Resources:core,cui_STT_LinkAddress;"
    QueryCommand="QueryLinkUrl"
    MaxLength="512"
    TemplateAlias="o2"
    Sequence="20"
                />
  <Label
    Id="Ribbon.Link.Link.Properties.LinkTooltipLabel"
    LabelText="$Resources:core,LabelLinkTooltip;"
    Command="LinkAltLabel"
    ForId="Ribbon.Link.Link.Properties.LinkTooltip"
    Image16by16="/_layouts/$Resources:core,Language;/images/formatmap16x16.png" Image16by16Top="0" Image16by16Left="-88"
    Sequence="30"
    TemplateAlias="o1"/>
  <TextBox
    ToolTipTitle="$Resources:core,cui_LinkTooltip;"
    ToolTipDescription="$Resources:core,cui_STT_LinkTooltip;"
    Id="Ribbon.Link.Link.Properties.LinkTooltip"
    Command="LinkTitleChanged"
    QueryCommand="QueryLinkTitle"
    MaxLength="128"
    Sequence="40"
    TemplateAlias="o2"/>
</Controls>
```


