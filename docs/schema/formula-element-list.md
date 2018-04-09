---
title: "Formula Element (List)"


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
ms.assetid: 5e9634dc-f6f6-453a-b0bf-070ec3d764b8
description: "Last modified: March 09, 2015"
---

# Formula Element (List)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains a formula used in the definition of a field.
  
```
<Formula>
</Formula>
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
|None |
   
### Parent elements

||
|:-----|
|[Field](field-element-list.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Example

The following example defines a calculated field containing a formula that multiplies the value of another field by 100.
  
```XML
<Field Type="Calculated" DisplayName="Field_Display_Name" 
  ResultType="Number" ReadOnly="TRUE" Name="Field_Internal_Name">
  <Formula>=Other_Field_Name*100</Formula>
  <FieldRefs>
    <FieldRef Name="Other_Field_Name"/>
  </FieldRefs>
</Field>
```


