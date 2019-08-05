---
title: "Aggregations element (List)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- List schema
api_type:
- schema
ms.assetid: 8671bf2b-829a-4c9d-a315-f4bde3563b64
description: Contains field references for totals columns or calculated columns; in other words, for fields to which a function is applied.
---

# Aggregations element (List)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains field references for totals columns or calculated columns; in other words, for fields to which a function is applied.
  
```XML
<Aggregations
  Value = "Text">
  <FieldRef />
  ...
</Aggregations>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Value** <br/> |Optional **Text**. Set **On** to specify that total rows are enabled for the datasheet view; otherwise, do not specify this attribute.  <br/> |
   
### Child elements

- [FieldRef](fieldref-element-list.md)
   
### Parent elements

- [View](view-element-list.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1 
   
## Example

The following example uses the **Aggregations** element to contain references for a totals column and a calculated column in a datasheet view. The first reference specifies that the Count function is applied to the **Title** column; the second reference specifies that the Sum function is applied to the **Number** column. 
  
```XML
<View>
   ...
   <Aggregations Value="On">
      <FieldRef Name="Title" Type="Count">
      <FieldRef Name="Number" Type="Sum">
   </Aggregations>
</View>
```

<br/>

