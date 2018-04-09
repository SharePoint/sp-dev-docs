---
title: "ExcludeContentType (SPMetal)"
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
ms.assetid: a8206a4e-1e0a-4dab-bc83-3213b3074b9b
description: "Last modified: March 09, 2015"
---

# ExcludeContentType (SPMetal)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Specifies that no class is generated for a content type.
  
[Web (SPMetal)](web-spmetal.md)
  
[ExcludeContentType (SPMetal)](excludecontenttype-spmetal.md)
  
```XML
<ExcludeContentType Name="Announcements" />
```

 **Complex**
## Attributes and elements

The following sections describe attributes, child elements, and parent elements.
  
#### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|Name  <br/> |The content type that is excluded from code generation.  <br/> |
   
#### Child elements

None.
  
#### Parent elements

|**Element**|**Description**|
|:-----|:-----|
|[Web (SPMetal)](web-spmetal.md) <br/> |Specifies the name and access level (public or internal) of the class (derived from **DataContext**) that SPMetal generates.  <br/> |
|[List (SPMetal)](list-spmetal.md) <br/> |Includes a list in code generation and modifies how code is generated for list-scoped content types.  <br/> |
   
## Remarks

A Web element cannot have both a ContentType element and an ExcludeContentType element that name the same content type. An ExcludeContentType element that names a hidden content type may not be present in the same Web element that has an IncludeHiddenContentTypes element. Finally, a Web element cannot have both an ExcludeOtherContentTypes element and an IncludeHiddenContentTypes element.
  
## Example

The following is an example of a ExcludeContentType element in use. 
  
```XML
<?xml version="1.0" encoding="utf-8"?>
<Web AccessModifier="Internal" xmlns="http://schemas.microsoft.com/SharePoint/2009/spmetal">
  <ContentType Name="Contact" Class="Contact">
    <Column Name="ContId" Member="ContactId" />
    <Column Name="ContactName" Member="ContactName1" />
    <Column Name="Category" Member="Cat" Type="String"/>
    <ExcludeColumn Name="HomeTelephone" />
  </ContentType>
  <ExcludeContentType Name="Order"/>
  <List Name="Team Members" Type="TeamMember">
    <ContentType Name="Item" Class="TeamMember" />
  </List>
</Web>

```

## See also

#### Other resources

[SPMetal Default Code Generation Rules](http://msdn.microsoft.com/library/873ac65e-425e-40f3-9ef6-753d3cda1436%28Office.15%29.aspx)
  
[Overriding SPMetal Defaults by Using a Parameters XML File](http://msdn.microsoft.com/library/209359b2-bd46-47b6-837d-3c0c2005cb19%28Office.15%29.aspx)

