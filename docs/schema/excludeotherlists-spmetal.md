---
title: "ExcludeOtherLists (SPMetal)"
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
ms.assetid: 681e25ee-a1b7-4adf-9aa6-393917292bb9
description: "Last modified: March 09, 2015"
---

# ExcludeOtherLists (SPMetal)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Specifies that SPMetal generates code only for lists that are explicitly represented by List elements. 
  
[Web (SPMetal)](web-spmetal.md)
  
[ExcludeOtherLists (SPMetal)](excludeotherlists-spmetal.md)
  
```XML
<ExcludeOtherLists />
```

## Attributes and elements

The following sections describe attributes, child elements, and parent elements.
  
#### Attributes

None.
  
#### Child elements

None.
  
#### Parent elements

|**Element**|**Description**|
|:-----|:-----|
|[Web (SPMetal)](web-spmetal.md) <br/> |Specifies the name and access level (public or internal) of the class (derived from **DataContext**) that SPMetal generates.  <br/> |
   
## Remarks

A Web element cannot have both an ExcludeOtherLists element and an IncludeHiddenLists element. 
  
## Example

The following is an example of an ExcludeOtherLists element in use. In this case, it ensures that the "Team Members" list is the only one for which SPMetal generates a property declaration.
  
```XML
<?xml version="1.0" encoding="utf-8"?>
<Web AccessModifier="Internal" xmlns="http://schemas.microsoft.com/SharePoint/2009/spmetal">
  <List Name="Team Members">
    <ContentType Name="Item" Class="TeamMember" />
  </List>
 <ExcludeOtherLists />
</Web>

```

## See also

#### Other resources

[SPMetal Default Code Generation Rules](http://msdn.microsoft.com/library/873ac65e-425e-40f3-9ef6-753d3cda1436%28Office.15%29.aspx)
  
[Overriding SPMetal Defaults by Using a Parameters XML File](http://msdn.microsoft.com/library/209359b2-bd46-47b6-837d-3c0c2005cb19%28Office.15%29.aspx)

