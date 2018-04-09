---
title: "DisplayPattern Element (List)"


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
ms.assetid: 231cb9a0-b1c0-4c70-985f-44e6bbe429f5
description: "Last modified: March 09, 2015"
---

# DisplayPattern Element (List)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used in computed fields to define how the field is rendered. The **DisplayPattern** section in the declaration for a computed field describes how the constituent fields are combined to form the computed field. For example, **LinkTitle** is a computed field type that combines Title and ID fields for a particular list item. 
  
```
<DisplayPattern>
</DisplayPattern>
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
|Numerous |
   
### Parent elements

||
|:-----|
|[Field](field-element-list.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
### Remarks

The **DisplayPattern** element is used in [Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx), [Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1%28Office.15%29.aspx) and [Base.xml](../../collaborative-application-markup-language-caml-schemas/major-caml-files.md) files. 
  
The built-in data types (such as **Integer**, **Text**, etc.) also have display patterns, which are defined in the [FldTypes.xml](http://msdn.microsoft.com/library/8f8db866-03f8-4001-aae3-4c4102a7aed6%28Office.15%29.aspx) file. The [Field](field-element-list.md) element can contain display patterns and, for this reason, can be used to apply rich formatting to values (unlike the [Column](../../collaborative-application-markup-language-caml-schemas/view-schema/column-element-view.md) element, which simply returns raw data). 
  
## Example

The following example creates a computed field called **LinkField** that combines values of the **Title** and **ID** fields to form links such as  `<a href="form.htm?ID=7">This is the title</a>`.
  
```XML
<Field Name="LinkField" Type="Computed">
   <FieldRefs>
      <FieldRef Name="Title"/>
      <FieldRef Name="ID"/>
   <FieldRefs>
   <DisplayPattern>
      <HTML><![CDATA[<a href="form.htm?ID="]]></HTML>
      <Column Name="ID"/>
      <HTML><![CDATA[">]]></HTML>
      <Column Name="Title"/>
      <HTML><![CDATA[</a>]]></HTML>
   </DisplayPattern>
</Field>
```


