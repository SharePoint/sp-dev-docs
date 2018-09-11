---
title: "RightsChoices element (View)"
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
ms.assetid: d9a55f3c-1490-4808-9af0-7d6c46efc01f
description: Contains specification of the permissions that current users must have in order for the contents of the Then clause within an IfHasRight element to be displayed. 
---

# RightsChoices element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains specification of the permissions that current users must have in order for the contents of the [Then](then-element-view.md) clause within an [IfHasRight](ifhasrights-element-view.md) element to be displayed. 
  
```XML
<RightsChoices>
  <RightsGroup
        Permission = "Required">/>
  <RightsGroup>
</RightsChoices>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [RightsGroup](rightsgroup-element-view.md)
   
### Parent elements

- [IfHasRights](ifhasrights-element-view.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1  

<br/> 
   

