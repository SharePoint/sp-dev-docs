---
title: "IncludeHiddenColumns (SPMetal)"


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
ms.assetid: 325341cb-56d0-4736-8152-de8d1f0d59ad
description: "Last modified: March 09, 2015"
---

# IncludeHiddenColumns (SPMetal)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies that hidden columns are included in code generation.
  
[Web (SPMetal)](web-spmetal.md)
  
[ContentType (SPMetal)](contenttype-spmetal.md)
  
[IncludeHiddenColumns (SPMetal)](includehiddencolumns-spmetal.md)
  
```XML
<IncludeHiddenColumns />
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
|[ContentType (SPMetal)](contenttype-spmetal.md) <br/> |Specifies that a content type should be included in code generation and modifies which columns in the content type are included in code generation.  <br/> |
   
### Remarks

A ContentType element cannot have both an ExcludeOtherColumns element and an IncludeHiddenColumns element.
  
## Example

The following shows the IncludeHiddenColumns element in use. The presence of the element ensures that the code that is generated for the Contact content type class will have properties for the content type's hidden columns.
  
```XML
<?xml version="1.0" encoding="utf-8"?>
<Web AccessModifier="Internal" xmlns="http://schemas.microsoft.com/SharePoint/2009/spmetal">
  <ContentType Name="Contact" Class="Contact">
    <Column Name="ContId" Member="ContactId" />
    <Column Name="ContactName" Member="ContactName1" />
    <Column Name="Category" Member="Cat" Type="String"/>
    <IncludeHiddenColumns />
  </ContentType>
  <ExcludeContentType Name="Order"/>
  <List Name="Team Members" Type="TeamMember">
    <ContentType Name="Item" Class="TeamMember" />
  </List>
</Web>

```

## See also



[SPMetal Default Code Generation Rules](http://msdn.microsoft.com/library/873ac65e-425e-40f3-9ef6-753d3cda1436%28Office.15%29.aspx)
  
[Overriding SPMetal Defaults by Using a Parameters XML File](http://msdn.microsoft.com/library/209359b2-bd46-47b6-837d-3c0c2005cb19%28Office.15%29.aspx)

