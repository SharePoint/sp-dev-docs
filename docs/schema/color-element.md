---
title: "Color Element"
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
ms.assetid: 86127151-d2e8-474d-aefb-5f66d834d53e
description: "Last modified: March 09, 2015"
---

# Color Element

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines a color.
  
```
<Color
     Sequence="Integer"
     Title="Text"
     Style="CSS Selector"
     Color="Color string"
     DisplayColor="#hexdec"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Sequence** <br/> |Optional. An integer that specifies the order of placement among sibling XML nodes.  <br/> |
|**Title** <br/> |Optional. Specifies text for the **Title** attribute of the HTML anchor tag that renders the color.  <br/> |
|**Style** <br/> |Optional. The name of a CSS selector to apply to the table cell that represents the color.  <br/> |
|**Color** <br/> |Optional. A color string to be passed with the command event when the color is selected.  <br/> |
|**DisplayColor** <br/> |Optional. A hexadecimal color code to use for the background color of the table cell, such as "#FF0000" (red).  <br/> |
   
### Child elements

None
  
### Parent elements

||
|:-----|
|[Colors](colors-element.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: unbounded  <br/> |
   
## Example

The following example defines a section of a menu that includes a color picker control with several **Color** elements. 
  
```XML
<MenuSection
    Id="fontColor"
    Title="Standard Colors">
    <Controls Id="Font.Color.Menu.Controls">
        <ColorPicker
            Id="fontColor"
            Command="FontColor">
            <Colors>
                <Color Color="0000C0" Title="Dark Red" DisplayColor="#C00000"/>
                <Color Color="0000FF" Title="Red" DisplayColor="#FF0000" />
                <Color Color="00C0FF" Title="Orange" DisplayColor="#FFC000"/>
                <Color Color="00FFFF" Title="Yellow" DisplayColor="#FFFF00" />
                <Color Color="50D092" Title="Light Green" DisplayColor="#92D050"/>
                <Color Color="50B000" Title="Dark Green" DisplayColor="#00B050"/>
                <Color Color="F0B000" Title="Light Blue" DisplayColor="#00B0F0"/>
                <Color Color="C07000" Title="Blue" DisplayColor="#0070C0"/>
                <Color Color="602000" Title="Dark Blue" DisplayColor="#002060" />
                <Color Color="A03070" Title="Purple" DisplayColor="#7030A0"/>
            </Colors>
        </ColorPicker>
    </Controls>
</MenuSection>
```


