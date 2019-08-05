---
title: "IncludeHiddenContentTypes element (SPMetal)"
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
ms.assetid: dee878c6-637d-4075-b920-6e715c49e1bf
description: Specifies that SPMetal generates classes for hidden content types.
---

# IncludeHiddenContentTypes element (SPMetal)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies that SPMetal generates classes for hidden content types.
  
```XML
<IncludeHiddenContentTypes />
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
|[Web](web-spmetal.md) <br/> |Specifies the name and access level (public or internal) of the class (derived from **DataContext**) that SPMetal generates.  <br/> |
   
### Remarks

A **Web** element cannot have both an **ExcludeOtherContentTypes** element and an **IncludeHiddenContentTypes** element.
  
## Example

The following is an example of an **IncludeHiddenContentTypes** element in use. 
  
```XML
<?xml version="1.0" encoding="utf-8"?>
<Web AccessModifier="Internal" xmlns="http://schemas.microsoft.com/SharePoint/2009/spmetal">
  <ContentType Name="Contact" Class="Contact">
    <Column Name="ContId" Member="ContactId" />
    <Column Name="ContactName" Member="ContactName1" />
    <Column Name="Category" Member="Cat" Type="String"/>
    <ExcludeColumn Name="HomeTelephone" />
  </ContentType>
  <IncludeHiddenContentTypes />
  <List Name="Team Members">
    <ContentType Name="Item" Class="TeamMember" />
  </List>
</Web>

```

## See also

- [SPMetal Default Code Generation Rules](http://msdn.microsoft.com/library/873ac65e-425e-40f3-9ef6-753d3cda1436%28Office.15%29.aspx)  
- [Overriding SPMetal Defaults by Using a Parameters XML File](http://msdn.microsoft.com/library/209359b2-bd46-47b6-837d-3c0c2005cb19%28Office.15%29.aspx)

