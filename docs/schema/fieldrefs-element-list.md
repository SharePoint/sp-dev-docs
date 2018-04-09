---
title: "FieldRefs Element (List)"
ms.author: NormSohl
author: NormSohl
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
description: "Last modified: March 09, 2015"
---

# FieldRefs Element (List)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Contains a collection of [FieldRef](../../collaborative-application-markup-language-caml-schemas/query-schema/fieldref-element-query.md) elements that specifiy field references for a field. 
  
```
<FieldRefs>
  <FieldRef></FieldRef>
  <FieldRef></FieldRef>
  ...
</FieldRefs>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|[FieldRef](../../collaborative-application-markup-language-caml-schemas/query-schema/fieldref-element-query.md)|
   
## Parent Elements

||
|:-----|
|[Field](field-element-list.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Example

The following example creates a computed field called myField that combines values of the Title and ID fields to form a hyperlink such as  `<a href="form.htm?ID="` _ID_ `">` _Title_ `</a>.`
  
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


