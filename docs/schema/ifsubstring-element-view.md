---
title: "IfSubString Element (View)"
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
ms.assetid: b4e1b20c-bc22-4d91-8a00-70a02033409b
description: "Last modified: March 09, 2015"
---

# IfSubString Element (View)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Allows for conditional rendering based on whether a first expression ([Expr1](expr1-element-view.md)) is contained within a second expression ([Expr2](expr2-element-view.md)).
  
```
<IfSubString>
  <Expr1></Expr1>
  <Expr2></Expr2>
    <Then></Then>
  <Else></Else>
</IfSubString>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|[Else](else-element-view.md), [Expr1](expr1-element-view.md), [Expr2](expr2-element-view.md), [Then](then-element-view.md)|
   
## Parent Elements

||
|:-----|
|Numerous |
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   

