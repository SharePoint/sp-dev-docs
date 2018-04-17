---
title: "BaseType element (Site)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Site schema
api_type:
- schema
ms.assetid: 764911ab-d94c-4829-a1fb-f85d3f359c81
description: Defines the default schema (for example, the fields) that all lists derived from the base type must contain. Every list in a SharePoint website inherits its schema from a base type.
---

# BaseType element (Site)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines the default schema (for example, the fields) that all lists derived from the base type must contain. Every list in a SharePoint website inherits its schema from a base type.
  
```XML
<BaseType
  Image = "Text"
  Title = "Text"
  Type = "Text">
</BaseType>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Image** <br/> |Optional **Text**. Sets the image used by a list base type in the Lists page (_layouts/viewlsts.htm). However, all SharePoint list definitions (such as for Announcements or Events) provide their own images so that, in practice, this attribute is never used.  <br/> |
|**Title** <br/> |Required **Text**. The name of the base type.  <br/> |
|**Type** <br/> |Required **Text**. Unique ID for the base type. The following values are possible for built-in base types:  <br/> 0 — Custom List  <br/> 1 — Document Library  <br/> 2 — **Not** used  <br/> 3 — Obsolete. Use 0 for discussion boards.  <br/> 4 — Surveys  <br/> 5 — Issues List  <br/> |
   
### Child elements

- [MetaData](metadata-element-site.md)
   
### Parent elements

- [BaseTypes](basetypes-element-site.md)
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded  
   
### Remarks

The fields defined in a base type may not be deleted from a derived list without breaking the list (for example, a document library will not function without the file name column), although fields may be added to the list.
  

