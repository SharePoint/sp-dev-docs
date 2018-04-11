---
title: "AllUsersWebPart element (Site)"
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
description: Contains a Web Part in a module of a site definition.
---

# AllUsersWebPart element (Site)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains a Web Part in a module of a site definition.
  
```XML
<AllUsersWebPart
  ID = "Text"    WebPartOrder = "Integer"
  WebPartZoneID = "Text">
</AllUsersWebPart>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**ID** <br/> |Optional **Text**.  <br/> |
|**WebPartOrder** <br/> |Optional **Integer**. Specifies the vertical positioning of the Web Part within a zone.  <br/> |
|**WebPartZoneID** <br/> |Optional **Text**. Specifies the zone for the Web Part.  <br/> |
   
### Child elements

None
   
### Parent elements

- [File](file-element.md)
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded
   
### Remarks

For an example that uses the **AllUsersWebPart** element, see [Module element (Site)](module-element-site.md). 
  


