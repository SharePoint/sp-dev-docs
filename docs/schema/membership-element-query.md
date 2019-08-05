---
title: Membership element (Query)
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Query schema
api_type:
- schema
ms.assetid: c86b1110-ad5e-46f0-9a6a-b651565ad778
description: Defines a filter based on the type of membership for the user.
---

# Membership element (Query)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines a filter based on the type of membership for the user.
  
```XML
<Membership
  Type = "Text">
</ Membership>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Type** <br/> | Required **Text**. Specifies the type of membership for the user. Possible values include the following:<br/><br/> **SPWeb.AllUsers** <br/> **SPGroup** <br/> **SPWeb.Groups** <br/> **CurrentUserGroups** <br/> **SPWeb.Users** <br/> |
   
### Child elements

- [FieldRef](fieldref-element-query.md)
   
### Parent elements

- [And](and-element-query.md)
- [Or](or-element-query.md)
- [Where](where-element-query.md)
   
### Occurrences

- Minimum: 0 
- Maximum: Unbounded
   
### Remarks

The following example defines a filter for cases where the user is either assigned a task based on membership in a group or assigned a task directly.
  
```XML
<Or>
  <Membership Type=\"CurrentUserGroups\">
    <FieldRef Name=\"AssignedTo\"/>
  </Membership>
  <Eq>
    <FieldRef Name=\"AssignedTo\"></FieldRef>
    <Value Type=\"Integer\">
      <UserID/>
    </Value>
  </Eq>
</Or>
```

<br/>

