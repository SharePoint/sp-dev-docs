---
title: "MapToControl Element (View)"
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
ms.assetid: cb544d36-be51-402e-8f67-19a4c6b4e499
description: "Last modified: March 09, 2015"
---

# MapToControl Element (View)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Returns the name of the application in which a document can be edited based on the file name extension and ProgID.
  
```
<MapToControl>
      ProgID|File_Extension
</MapToControl>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Child Elements

||
|:-----|
|Numerous |
   
## Parent Elements

||
|:-----|
|Numerous |
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Remarks

The **MapToControl** element uses the following syntax, separating the ProgID from the file name extension with a pipe symbol ("|"): 
  
```XML
<MapToControl>ProgID|File_Extension </MapToControl>
```

## Example

The following example uses the **MapToControl** element to assign the name of the application to an Editor variable. 
  
```XML
<SetVar Name="Editor" Scope="Request">
   <MapToControl>
      <Column Name="HTML_x0020_File_x0020_Type" />
      <HTML>|</HTML>
      <Column Name="File_x0020_Type" />
   </MapToControl>
</SetVar>
```


