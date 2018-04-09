---
title: "RightsChoices Element (View)"
ms.author: rickki
author: rickki
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
ms.assetid: d9a55f3c-1490-4808-9af0-7d6c46efc01f
description: "Last modified: March 09, 2015"
---

# RightsChoices Element (View)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Contains specification of the permissions that current users must have in order for the contents of the [Then](then-element-view.md) clause within an [IfHasRight](ifhasrights-element-view.md) element to be displayed. 
  
```
<RightsChoices>
  <RightsGroup
        Permission = "Required">/>
  <RightsGroup>
</RightsChoices>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|[RightsGroup](rightsgroup-element-view.md)|
   
## Parent Elements

||
|:-----|
|[IfHasRights](ifhasrights-element-view.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   

