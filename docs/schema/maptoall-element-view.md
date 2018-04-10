---
title: "MapToAll Element (View)"


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
ms.assetid: 95ac3390-76f6-4de5-9492-8ce8a97f76de
description: "Last modified: March 09, 2015"
---

# MapToAll Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Combines the functionality of the [MapToIcon](maptoicon-element-view.md), [MapToText](maptotext-element.md), and [MapToControl](maptocontrol-element-view.md) elements. 
  
```
<MapToAll>
</MapToAll>
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
|Numerous |
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
### Remarks

The **MapToAll** element improves performance by preventing the need to make multiple requests to the server for data. 
  
Using this element is the same as using the following:
  
```XML
<MapToIcon>ProgID|File_Extension</MapToIcon>|
<MapToText>ProgID|File_Extension</MapToText>|
<MapToControl>ProgID|File_Extension</MapToControl>
```


