---
title: "IfNew Element (View)"
ms.author: NormSohl
author: NormSohl
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- View schema
api_type:
- schema
ms.assetid: e4cfba73-cad9-42ed-8dc2-a1ef05412201
description: "Last modified: March 09, 2015"
---

# IfNew Element (View)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Returns **TRUE** if the item is considered new. Usually, this means that the item was created after midnight the day before. This element renders its contents if the item was created today, that is, after only one day has passed, the number of days being a registry setting for which the default value is 1. 
  
```
<IfNew
  Name = "Text">
</IfNew>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Name** <br/> |Optional **Text**. Specifies the name of a field. The default value is **Created**.  <br/> |
   
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

The following example displays a particular logo if the display pattern of the field is new.
  
```XML
<DisplayPattern>
  <IfNew>
    <HTML>
      <![CDATA[ <IMG SRC=" ]]>
    </HTML>
    <ImagesPath />
    <HTML>
      <![CDATA[ newlink.gif" alt=" ]]>
    </HTML>
    <HTML>
      New
    </HTML>
    <HTML>
      <![CDATA["> ]]>
    </HTML>
  </IfNew>
</DisplayPattern>
```

## See also

#### Other resources

[DisplayPattern Element (List)](../../collaborative-application-markup-language-caml-schemas/list-schema/displaypattern-element-list.md)

