---
title: "NotIncludes Element (Query)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Query schema
api_type:
- schema
ms.assetid: fab5013e-7283-42f5-b4a7-d614415ec05c
description: "Last modified: March 09, 2015"
---

# NotIncludes Element (Query)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
If the specified field is a Lookup field that allows multiple values, specifies that the [Value](values-element-query.md) element is excluded from the list item for the field that is specified by the [FieldRef](fieldref-element-query.md) element. 
  
```
<NotIncludes>
  <FieldRef    Name = "Field_Name"/>
  <Value    Type = "Field_Type"/>
  <XML />
</NotIncludes>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
### Child elements

||
|:-----|
|[FieldRef](fieldref-element-query.md), [Values](values-element-query.md), [XML](xml-element.md)|
   
### Parent elements

||
|:-----|
|[And](and-element-query.md), [Or](or-element-query.md), [Where](where-element-query.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   

