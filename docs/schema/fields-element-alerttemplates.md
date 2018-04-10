---
title: "Fields Element (AlertTemplates)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- AlertTemplates schema
api_type:
- schema
ms.assetid: 199b07a2-2b6b-4f40-9c34-046b712d69d0
description: "Last modified: March 09, 2015"
---

# Fields Element (AlertTemplates)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies the fields to display in the alert message. Use `<GetVar Name="OldValue#{Field}" />` or  `<GetVar Name="NewValue#{Field}" />` to specify the fields. To exclude fields, use the [DigestNotificationExcludedFields](digestnotificationexcludedfields-element-alerttemplates.md) and [ImmediateNotificationExcludedFields](immediatenotificationexcludedfields-element-alerttemplates.md) elements. 

## Definition

```VB.net
<Fields>
  <GetVar>
  </GetVar>
</Fields>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

[GetVar](view-schema/getvar-element-view.md)
   
### Parent elements

[Immediate](immediate-element-alerttemplates.md)
   

