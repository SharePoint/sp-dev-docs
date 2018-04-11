---
title: "Group Element (Ribbon)"


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
ms.assetid: ac68e3f5-6d5d-4384-86d4-4e94132d06d4
description: "Last modified: March 09, 2015"
---

# Group Element (Ribbon)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines a group of controls.
  
```
<Group
  Command="Text"
  Description="Text"
  Id="Text"
  Image32by32Popup="Url"
  Image32by32PopupClass="CSS Class Selector"
  Image32by32PopupLeft="Negative Integer"
  Image32by32PopupTop="Negative Integer"
  Sequence="Integer"
  Template="Text"
  Title="Text"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Command** <br/> |Optional. The value is used to enable or disable the controls in the group. If the **Command** attribute is present and has a value, the ribbon polls to see if the command is disabled. If it is disabled, the ribbon does not poll for any commands that are associated with the controls in the group; the controls are also effectively disabled.  <br/> |
|**Description** <br/> |Optional. A description of the group.  <br/> |
|**Id** <br/> |Required. A string that identifies the group, such as "Ribbon.DocLibListForm.Edit.Clipboard".  <br/> |
|**Image32by32Popup** <br/> |Optional. A server-relative URL to a file that contains a 32-by-32-pixel image to be used to represent the group, such as "/_layouts/1033/images/formatmap32x32.png".  <br/> |
|**Image32by32PopupClass** <br/> |Optional. The name of a CSS class selector to be applied to the image.  <br/> |
|**Image32by32PopupLeft** <br/> |Optional. A negative integer that represents an offset for the left edge of the image. Use this attribute when the **Image32by32Popup** attribute points to an image file that contains images for many icons. The value of the **Image32by32PopupLeft** attribute is used to set the CSS **left** attribute for the inline style of an HTML **img** tag.  <br/> |
|**Image32by32PopupTop** <br/> |Optional. A negative integer that represents an offset for the top edge of the image. Use this attribute when the **Image32by32Popup** attribute points to an image file that contains images for many icons. The value of the **Image32by32PopupTop** attribute is used to set the CSS **top** attribute for the inline style of an HTML **img** tag.  <br/> |
|**Sequence** <br/> |Optional. An integer that specifies the order of placement among sibling XML nodes.  <br/> |
|**Template** <br/> |Optional. A string that corresponds to the **Id** attribute of a [GroupTemplate](grouptemplate-element.md) element.  <br/> |
|**Title** <br/> |Optional. The text that is displayed as the group's title on the ribbon and in the tooltip.  <br/> |
   
### Child elements

||
|:-----|
|[Controls](controls-element-group.md)|
   
### Parent elements

||
|:-----|
|[CommandUIDefinition](commanduidefinition-element.md) <br/> |
|[Groups](groups-element.md) <br/> |
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: unbounded  <br/> |
   
## Example

The following XML fragment defines a group that contains two buttons.
  
```XML
<Group
  Id="Ribbon.WikiPageTab.CustomGroup"
  Sequence="55"
  Description="Custom Group"
  Title="Custom"
  Command="EnableCustomGroup"
  Template="Ribbon.Templates.Flexible2">
  <Controls Id="Ribbon.WikiPageTab.CustomGroup.Controls">
    <Button
      Id="Ribbon.WikiPageTab.CustomGroup.CustomGroupHello"
      Command="CustomGroupHelloWorld"
      Image16by16="/_layouts/images/FILMSTRP.GIF"
      Image32by32="/_layouts/images/PPEOPLE.GIF"
      LabelText="Hello, World"
      TemplateAlias="o2"
      Sequence="15" />
    <Button
      Id="Ribbon.WikiPageTab.CustomGroup.CustomGroupGoodbye"
      Command="CustomGroupGoodbyeWorld"
      Image16by16="/_layouts/images/FILMSTRP.GIF"
      Image32by32="/_layouts/images/PPEOPLE.GIF"
      LabelText="Good-bye, World"
      TemplateAlias="o2"
      Sequence="18" />
  </Controls>
</Group>
```

## See also



[Walkthrough: Adding a Group to the Server Ribbon](http://msdn.microsoft.com/library/0696705f-e805-49e7-90c5-0e9e5f894d6a%28Office.15%29.aspx)

