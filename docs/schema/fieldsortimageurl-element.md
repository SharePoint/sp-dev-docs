---
title: "FieldSortImageURL Element"
ms.author: NormSohl
author: NormSohl
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 1b2ced37-1ef8-4774-9fdd-610be88b8ba0
description: "Last modified: March 09, 2015"
---

# FieldSortImageURL Element

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Returns the URL to the image file that is used to indicate how a column is sorted. Rendering of this field is conditional, based on the current sorting URL that is sent in the request to the server.
  
```
<FieldSortImageURL>
</FieldSortImageURL>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|None |
   
## Parent Elements

||
|:-----|
|Numerous |
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Example

The following example creates an <IMG> tag for the icon that is used to reflect the direction of a sort. The **FieldSortImageURL** element returns the URL to the image. 
  
```XML
<HTML><![CDATA[<IMG SRC="]]></HTML>
<FieldSortImageURL/>
<HTML><![CDATA[" ALT=]]></HTML>
<Switch>
   <Expr>
      <GetVar Name='SortDir'/>
   </Expr>
   <Case Value='Asc'>
      <HTML>"Sort Ascending"</HTML>
   </Case>
   <Case Value='Desc'>
      <HTML>"Sort Descending"</HTML>
   </Case>
   <Default>
      <HTML>""</HTML>
   </Default>
</Switch>
<HTML><![CDATA[ BORDER=0>]]></HTML>
```

## See also

#### Reference

[FieldFilterImageURL Element](fieldfilterimageurl-element.md)
#### Other resources

[FieldSortParams Element (View)](../../collaborative-application-markup-language-caml-schemas/view-schema/fieldsortparams-element-view.md)

