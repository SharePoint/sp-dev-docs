---
title: "IfNeg Element (View)"
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
ms.assetid: 34b025da-e8d2-4bf8-933e-6b6e18997a26
description: "Last modified: March 09, 2015"
---

# IfNeg Element (View)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Contains two Collaborative Application Markup Language (CAML) expressions and allows for conditional rendering based on whether the first expression contains a negative value. The first expression is rendered if it contains a negative value, but if not, the second expression is rendered.
  
```
<IfNeg>
   <Expr1></Expr1>
   <Expr2></Expr2>   
</IfNeg>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|[Expr1](expr1-element-view.md), [Expr2](expr2-element-view.md)|
   
## Parent Elements

||
|:-----|
|Numerous |
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   

