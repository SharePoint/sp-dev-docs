---
title: "Counter Element (View)"
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
ms.assetid: d456f350-4292-4c2d-9d7c-1daa1757a222
description: "Last modified: March 09, 2015"
---

# Counter Element (View)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Provides a counter variable whose value increments each time the tag appears within a field or view definition.
  
```
<Counter
   Type = "View">
</Counter>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Type** <br/> |Optional **Text**. If **Type="View"** is specified, the counter returns a number that increases each time a view is created for the list. This counter can be used, for example, to give unique names to elements on a page, depending on the view definition.  <br/> |
   
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
|Minimum: 0  <br/> Maximum: 1  <br/> |
   

