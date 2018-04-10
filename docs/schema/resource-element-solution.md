---
title: "Resource Element (Solution)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Solution Schema
api_type:
- schema
ms.assetid: 3d416397-8688-4e0f-b0fd-a0af8cb66629
description: "Last modified: March 09, 2015"
---

# Resource Element (Solution)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies a binary resource to deploy to an existing Feature folder.
  
```
<Resource
  Location="Text">
</Resource>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|Location  <br/> |Required **Text**. Specifies a location relative to %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\FEATURES.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[Resources](resources-element-solution.md)|
   
### Remarks

Use this element to deploy a binary resource to an existing Feature folder.
  

