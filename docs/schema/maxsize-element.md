---
title: "MaxSize element (Server Ribbon)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Server Ribbon schema
api_type:
- schema
ms.assetid: d2869fff-f9a3-4179-94c0-7774285f71e7
description: Specifies the maximum size for a group of controls.
---

# MaxSize element (Server Ribbon)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies the maximum size for a group of controls.
  
```XML
<MaxSize
  GroupId="Text"
  Id="Text"
  Sequence="Text"
  Size="Text"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**GroupId** <br/> |Required. A string that identifies the **Group** that this element pertains to.  <br/> |
|**Id** <br/> |Required. A string that identifies the element, such as "Ribbon.Library.Scaling.ViewFormat.MaxSize".  <br/> |
|**Sequence** <br/> |Optional. An integer that specifies the order of placement among sibling XML nodes.  <br/> |
|**Size** <br/> |Required. A string that corresponds to the value of the **Title** attribute of a [Layout](layout-element.md) element that defines the size.  <br/> |
   
### Child elements

None
  
### Parent elements

- [Scaling](scaling-element.md)
   
### Occurrences

- Minimum: 0
- Maximum: unbounded  
   
## See also

- [Server Ribbon XML](http://msdn.microsoft.com/library/5eeb45be-4af7-4a38-8ba0-3aafc62aed4b%28Office.15%29.aspx)

