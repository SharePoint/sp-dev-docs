---
title: "IncludeHiddenLists (SPMetal)"
ms.author: rickki
author: rickki
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- SPMetal Parameters XML
api_type:
- schema
ms.assetid: 88a9d4fe-6cf3-4ef9-8486-977ea391a987
description: "Last modified: March 09, 2015"
---

# IncludeHiddenLists (SPMetal)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies that code is generated for all hidden lists.
  
[Web (SPMetal)](web-spmetal.md)
  
[IncludeHiddenLists (SPMetal)](includehiddenlists-spmetal.md)
  
```XML
<IncludeHiddenLists />
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None.
  
### Child elements

None.
  
### Parent elements

|**Element**|**Description**|
|:-----|:-----|
|[Web (SPMetal)](web-spmetal.md) <br/> |Specifies the name and access level (public or internal) of the class (derived from **DataContext**) that SPMetal generates.  <br/> |
   
### Remarks

A Web element cannot have both an ExcludeOtherLists element and an IncludeHiddenLists element. 
  
## Example

The following is an example of an ExcludeOtherLists element in use. In this case, it ensures that the "Team Members" list is the only one for which SPMetal generates a property declaration.
  
```XML
<?xml version="1.0" encoding="utf-8"?>
<Web AccessModifier="Internal" xmlns="http://schemas.microsoft.com/SharePoint/2009/spmetal">
  <List Name="Team Members">
    <ContentType Name="Item" Class="TeamMember" />
  </List>
 <IncludeHiddenLists />
</Web>

```

## See also



[SPMetal Default Code Generation Rules](http://msdn.microsoft.com/library/873ac65e-425e-40f3-9ef6-753d3cda1436%28Office.15%29.aspx)
  
[Overriding SPMetal Defaults by Using a Parameters XML File](http://msdn.microsoft.com/library/209359b2-bd46-47b6-837d-3c0c2005cb19%28Office.15%29.aspx)

