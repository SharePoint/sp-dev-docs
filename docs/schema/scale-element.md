---
title: "Scale Element"
ms.author: ricardol
author: ricardol
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
ms.assetid: 65065281-a30c-4654-bbb4-3c622add0174
description: "Last modified: March 09, 2015"
---

# Scale Element

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines how a group of controls on a tab are sized.
  
```
<Scale
  GroupId="Text"
  Id="Text"
  Sequence="Integer"
  Size="Text"
  PopupSize="Text"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**GroupId** <br/> |Required. A string that identifies the [Group](scaling-element.md) that this scale applies to.  <br/> |
|**Id** <br/> |Required. A string that identifies the element, such as "Ribbon.WikiPageTab.Scaling.PageActions.MediumSmall".  <br/> |
|**Sequence** <br/> |Optional. An integer that specifies the order of placement among sibling XML nodes.  <br/> |
|**Size** <br/> |Required. A string that corresponds to the value of the **Title** attribute of a [Layout](layout-element.md) element that defines the size.  <br/> |
|**PopupSize** <br/> |Optional. A string that corresponds to the value of the **Title** attribute of a [Layout](layout-element.md) element that defines the size.  <br/> |
   
### Child elements

None
  
### Parent elements

||
|:-----|
|[Scaling](scaling-element.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: unbounded  <br/> |
   
## See also



[Server Ribbon XML](http://msdn.microsoft.com/library/5eeb45be-4af7-4a38-8ba0-3aafc62aed4b%28Office.15%29.aspx)

