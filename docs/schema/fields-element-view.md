---
title: Fields element (View)
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
ms.assetid: 17518be2-0b60-4920-b049-66aa607ceffc
description: Used within a view to render the list for the browser by iterating over the view fields. When used outside a view, the Fields element iterates over all the nonhidden fields in the list. 
---

# Fields element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used within a view to render the list for the browser by iterating over the view fields. When used outside a view, the **Fields** element iterates over all the nonhidden fields in the list. 
  
```XML
<Fields>
</Fields>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**FormAggregation** <br/> |**TRUE** to enable Merge Forms within a form library.  <br/> |
   
### Child elements

Numerous 
   
### Parent elements

Numerous 
   
### Occurrences

- Minimum: 0 
- Maximum: Unbounded  
   
### Remarks

Use of the `<Fields>` tag is synonymous with specifying `<ForEach Select="Fields/Field">`.
  
<br/>
