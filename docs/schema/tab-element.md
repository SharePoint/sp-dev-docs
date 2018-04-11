---
title: "Tab Element"


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
ms.assetid: e9ec3dc0-79a2-4ac6-bd01-7195425c248b
description: "Last modified: March 09, 2015"
---

# Tab Element

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents a tab control.
  
```
<Tab
  Command="Text"
  CssClass="Text"
  Description="Text"
  Id="Text"
  Sequence="Text"
  Title="Text"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Command** <br/> |Optional. The **Id** of the command to execute when the tab is clicked.  <br/> |
|**CssClass** <br/> |Optional. The name of the CSS class (such as "ms-browseTab") to apply when the tab is rendered.  <br/> |
|**Description** <br/> |Optional. A description of the tab.  <br/> |
|**Id** <br/> |Required. A string that identifies the control, such as "Ribbon.CustomTabExample".  <br/> |
|**Sequence** <br/> |Optional. An integer that specifies the order of placement among other tab controls.  <br/> |
|**Title** <br/> |Optional. The title to display on the tab.  <br/> |
   
### Child elements

||
|:-----|
|[Scaling](scaling-element.md) <br/> |
|[Groups](groups-element.md) <br/> |
   
### Parent elements

||
|:-----|
|[ContextualGroup](contextualgroup-element.md) <br/> |
|[Tabs](tabs-element.md) <br/> |
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: unbounded  <br/> |
   
## See also



[Walkthrough: Adding a Tab to the Server Ribbon](http://msdn.microsoft.com/library/3d1fb8b6-4c9b-4801-9bba-6d2f5caee0d9%28Office.15%29.aspx)

