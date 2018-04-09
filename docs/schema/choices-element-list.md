---
title: "CHOICES Element (List)"


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
ms.assetid: 43754a61-a86e-4720-870b-1a328bdb4e0d
description: "Last modified: March 09, 2015"
---

# CHOICES Element (List)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used to define several choices within a field for a drop-down list.
  
```
<CHOICES>
  <CHOICE
    Value = "Text">
  </CHOICE>
  <CHOICE
    Value = "Text">
  </CHOICE>
  ...
</CHOICES>
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
|[CHOICE](choice-element-list.md)|
   
### Parent elements

||
|:-----|
|[Field](field-element-list.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
### Remarks

Within a **CHOICES** element, each **CHOICE** element contains a value that appears in the list. 
  
Remember that CAML is case-sensitive; the **CHOICE** and **CHOICES** elements are in all capital letters. 
  
## Example

This example defines a **Choice** field with three choices. 
  
```XML
<CHOICES>
  <CHOICE>Not Started</CHOICE>
  <CHOICE>In Progress</CHOICE>
  <CHOICE>Completed</CHOICE>
</CHOICES>
```


