---
title: "AllUsersWebPart element (List)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- List schema
api_type:
- schema
ms.assetid: c2342ade-ffa0-4cf1-b33b-51be2d3ef6cf
description: Contains a Web Part in a form definition for list.
---

# AllUsersWebPart element (List)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains a Web Part in a form definition for list.
  
```XML
<AllUsersWebPart  WebPartOrder = Integer  WebPartZoneID = "Text">    <![CDATA[...]]></AllUsersWebPart>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**WebPartOrder** <br/> |Required **Integer**. Specifies the vertical positioning of the Web Part within a zone.  <br/> |
|**WebPartZoneID** <br/> |Required **Text**. Specifies the zone for the Web Part.  <br/> |
   
### Child elements

- CDATA 
   
### Parent elements

- [WebParts](webparts-element-list.md)
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded 
   
### Remarks

For an example of how to use this element, see [Form](form-element-list.md).
  

