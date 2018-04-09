---
title: "AllUsersWebPart Element (Site)"
ms.author: rickki
author: rickki
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Site schema
api_type:
- schema
ms.assetid: 14b304f8-c887-4199-92dc-712407a0d6d3
description: "Last modified: March 09, 2015"
---

# AllUsersWebPart Element (Site)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Contains a Web Part in a module of a site definition.
  
```
<AllUsersWebPart
  ID = "Text"    WebPartOrder = "Integer"
  WebPartZoneID = "Text">
</AllUsersWebPart>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**ID** <br/> |Optional **Text**.  <br/> |
|**WebPartOrder** <br/> |Optional **Integer**. Specifies the vertical positioning of the Web Part within a zone.  <br/> |
|**WebPartZoneID** <br/> |Optional **Text**. Specifies the zone for the Web Part.  <br/> |
   
## Child Elements

|**Element**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
## Parent Elements

||
|:-----|
|[File](file-element.md)|
   
## Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Remarks

See [Module Element (Site)](module-element-site.md) for an example that uses the **AllUsersWebPart** element. 
  
## See also

#### Other resources

[Module Element (Site)](module-element-site.md)

