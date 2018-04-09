---
title: "Field Element (Site)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Site schema
api_type:
- schema
ms.assetid: 4acc310c-8e6f-4750-846a-c39548a1d4fe
description: "Last modified: March 09, 2015"
---

# Field Element (Site)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines default data to include in the specified column of a list, or contains a reference to a field used in the definition of a base Microsoft SharePoint Foundation field type in [FldTypes.xml](http://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6%28Office.15%29.aspx).
  
```
<Field
    Name = "Text">
</Field>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Name** <br/> |Optional **Text**. The internal name of a field, which is unique with respect to the set of fields in a list. The name is auto-generated based on the user-defined name for a field.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[Row](row-element-site.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   

