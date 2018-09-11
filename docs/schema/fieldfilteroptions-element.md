---
title: "FieldFilterOptions element"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: b409e73c-bdca-4299-860d-13ac0b470c37
description: Used in the HeaderPattern sections of the FldTypes.xml file to display filtered drop-down menus. 
---

# FieldFilterOptions element

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used in the HeaderPattern sections of the [FldTypes.xml](http://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6%28Office.15%29.aspx) file to display filtered drop-down menus. 
  
```XML
<FieldFilterOptions
  AllItems = "Text"
  BooleanFalse = "Yes" | "No"
  BooleanTrue = "Yes" | "No"
  NullString = "Text">
</FieldFilterOptions>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**AllItems** <br/> |Required **Text**. Specifies a localized string that is displayed when filtering a drop-down list; used to indicate all items.  <br/> |
|**BooleanFalse** <br/> |Required **Text**. Specifies the string that is displayed if the user wants to select rows based on the falseness of a Boolean field.  <br/> |
|**BooleanTrue** <br/> |Required **Text**. Specifies the string that is displayed if the user wants to select rows based on the trueness of a Boolean field.  <br/> |
|**NullString** <br/> |Required **Text**. Specifies the text that is displayed to represent an empty item.  <br/> |
   
### Child elements

None
   
### Parent elements

Numerous 
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded  
   
## Example

The following example defines options for filtering.
  
```XML
<FieldFilterOptions BooleanTrue="Yes" BooleanFalse="No" 
   NullString="(Empty)" AllItems="(All)">
```


