---
title: "FieldRefs element (List)"
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
ms.assetid: 05dc8355-2458-4012-ba5d-8c64cff983e7
description: Contains a collection of FieldRef elements that specifiy field references for a field. 
---

# FieldRefs element (List)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains a collection of [FieldRef](fieldref-element-query.md) elements that specifiy field references for a field. 
  
```XML
<FieldRefs>
  <FieldRef></FieldRef>
  <FieldRef></FieldRef>
  ...
</FieldRefs>
```

## Attributes

None
   
### Child elements

- [FieldRef](fieldref-element-query.md)
   
### Parent elements

- [Field](field-element-list.md)
   
### Occurrences

- Minimum: 0 
- Maximum: 1 
   
## Example

The following example creates a computed field called myField that combines values of the Title and ID fields to form a hyperlink such as `<a href="form.htm?ID="ID">Title</a>`.
  
```XML
<Field Name="myField" Type="Computed">
  <FieldRefs>
    <FieldRef Name="Title"/>
    <FieldRef Name="ID"/>
  </FieldRefs>
  <DisplayPattern>
    <HTML><![CDATA[<a href="form.htm?ID="]]></HTML>
    <Column Name="ID"/>
    <HTML><![CDATA[">]]></HTML>
    <Column Name="Title"/>
    <HTML><![CDATA[</a>]]></HTML>
  </DisplayPattern>
</Field>
```

<br/>

