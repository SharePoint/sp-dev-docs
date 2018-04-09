---
title: "Format Element"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 55dae1d8-d415-445c-8c6c-5d9a1b140b64
description: "Last modified: March 09, 2015"
---

# Format Element

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains definitions of column and row formatting that are used in a Datasheet view.
  
```
<Format
  Name = "Text">
    <FormatDef
      Type = "Text"
      Value = "Text">
        </FormatDef>
    ...
</Format>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Name** <br/> |Required **Text**. Contains the name of the field to which the format applies.  <br/> |
   
### Child elements

||
|:-----|
|[FormatDef](formatdef-element.md)|
   
### Parent elements

||
|:-----|
|[Formats](formats-element.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Example

The following example shows the definitions of column and row formatting used in a Datasheet view.
  
```XML
<Formats>
   <FormatDef Type="RowHeight" Value="67" />
   <Format Name="Attachments">
      <FormatDef Type="ColWidth" Value="75" />
   </Format>
   <Format Name="LinkTitle">
      <FormatDef Type="WrapText" Value="1" />
      <FormatDef Type="ColWidth" Value="236" />
   </Format>
</Formats>
```


