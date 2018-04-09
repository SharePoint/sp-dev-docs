---
title: "IfHasRights Element (View)"
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
ms.assetid: 3f164acc-398c-4c1a-b498-1c2f4509b524
description: "Last modified: March 09, 2015"
---

# IfHasRights Element (View)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Allows for conditional rendering of a field or of a toolbar item based on whether the current user has the specified permission.
  
```
<IfHasRights>
  <RightsChoices>
    <RightsGroup
            Right = "required" />
  </RightsChoices>
</IfHasRights>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|[Else](else-element-view.md), [RightsChoices](rightschoices-element-view.md), [Then](then-element-view.md)|
   
## Parent Elements

||
|:-----|
|Numerous |
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   

