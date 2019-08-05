---
title: "IfHasRights element (View)"
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
ms.assetid: 3f164acc-398c-4c1a-b498-1c2f4509b524
description: Allows for conditional rendering of a field or of a toolbar item based on whether the current user has the specified permission.
---

# IfHasRights element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Allows for conditional rendering of a field or of a toolbar item based on whether the current user has the specified permission.
  
```XML
<IfHasRights>
  <RightsChoices>
    <RightsGroup
            Right = "required" />
  </RightsChoices>
</IfHasRights>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [Else](else-element-view.md)
- [RightsChoices](rightschoices-element-view.md)
- [Then](then-element-view.md)
   
### Parent elements

Numerous 
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded  

<br/> 
   

