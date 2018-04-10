---
title: "ContentType (SPMetal)"


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
ms.assetid: 02f66b11-8514-4643-a304-49586c29df6f
description: "Last modified: March 09, 2015"
---

# ContentType (SPMetal)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies that a content type should be included in code generation and modifies which columns in the content type are included in code generation.
  
[Web (SPMetal)](web-spmetal.md)
  
[ContentType (SPMetal)](contenttype-spmetal.md)
  
```XML
<ContentType Name="Contact" Class="Contact"> ... </ContentType>
```

 **Complex**
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|Name (required)  <br/> |The name of the content type in SharePoint Foundation.  <br/> |
|Member (optional)  <br/> |The name SPMetal should give to the property that it generates to represent the list.  <br/> |
|AccessModifier (optional)  <br/> |Specifies whether the class is public or internal.  <br/> |
   
#### AccessModifier Attribute Possible Values:

|**Value**|**Description**|
|:-----|:-----|
|Internal  <br/> |The class will be **internal** (**Friend** in Visual Basic).  <br/> |
|Public  <br/> |DEFAULT: The class will be **public** (**Public** in Visual Basic).  <br/> |
   
### Child elements

|**Element**|**Description**|
|:-----|:-----|
|[Column](column-spmetal.md) <br/> |Includes a column (field) in code generation.  <br/> |
|[ExcludeColumn](excludecolumn-spmetal.md) <br/> |Excludes a column in code generation.  <br/> |
|[ExcludeOtherColumns](excludeothercolumns-spmetal.md) <br/> |Excludes from code generation all columns not explicitly included with a Column element.  <br/> |
|[IncludeHiddenColumns](includehiddencolumns-spmetal.md) <br/> |Includes hidden columns in code generation.  <br/> |
   
### Parent elements

|**Element**|**Description**|
|:-----|:-----|
|[Web (SPMetal)](web-spmetal.md) <br/> |Specifies the name and access level (public or internal) of the class (derived from **DataContext**) that SPMetal generates.  <br/> |
|[List (SPMetal)](list-spmetal.md) <br/> |Includes a list in code generation and modifies how code is generated for list-scoped content types.  <br/> |
   
### Remarks

A ContentType element cannot have both a Column element and an ExcludeColumn element that name the same column. An ExcludeColumn element that names a hidden column may not be present in the same ContentType element that has an IncludeHiddenColumns element. Finally, a ContentType element cannot have both an ExcludeOtherColumns element and an IncludeHiddenColumns element.
  
## Example

The following is an example of a ContentType element in use. If this was a hidden content type, the presence of the element would ensure that it was included in code generation. The Class attribute in the element ensures that the class is named "Contract" instead of the default name "ContractsItem". A list-scoped ContentType element ensures that the class that represents the content type of the list is named "TeamMember" instead of "TeamMembersItem".
  
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
  <List Name="Team Members">
    <ContentType Name="Item" Class="TeamMember" />
  </List>
</Web>

```

## See also



[SPMetal Default Code Generation Rules](http://msdn.microsoft.com/library/873ac65e-425e-40f3-9ef6-753d3cda1436%28Office.15%29.aspx)
  
[Overriding SPMetal Defaults by Using a Parameters XML File](http://msdn.microsoft.com/library/209359b2-bd46-47b6-837d-3c0c2005cb19%28Office.15%29.aspx)

