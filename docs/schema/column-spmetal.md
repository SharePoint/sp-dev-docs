---
title: "Column (SPMetal)"
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
ms.assetid: 4e931e29-6b4a-4926-867c-4d059b4dad44
description: "Last modified: March 09, 2015"
---

# Column (SPMetal)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies that a column (field) is included in code generation.
  
[Web (SPMetal)](web-spmetal.md)
  
[ContentType (SPMetal)](contenttype-spmetal.md)
  
[Column (SPMetal)](column-spmetal.md)
  
```XML
<Column Name="Category" Member="Cat" Type="String"/>
```

 **Complex**
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|Name (required)  <br/> |The  *internal*  Microsoft SharePoint Foundation name of the column (field).  <br/> |
|Member (optional)  <br/> |The name SPMetal gives to the property that it generates to represent the column.  <br/> |
|Type (optional)  <br/> |Used only for Choice and MultiChoice columns that do not allow 'Fill-in' choices. If present and set to "String", forces SPMetal to generate a class of [String](https://msdn.microsoft.com/library/System.String.aspx) constants to represent the possible choices rather than an enum class. For more information about how LINQ to SharePoint maps Choice and MultiChoice fields to .NET 3.5 data types, see [Type Mapping: From LINQ to SharePoint Provider to .NET](http://msdn.microsoft.com/library/6a1dff92-d3cf-46ec-9e51-372e5b9ff7c4%28Office.15%29.aspx).  <br/> |
   
#### Possible Values of Type Attribute

|**Value**|**Description**|
|:-----|:-----|
|String  <br/> |Tells SPMetal to generate a class of [String](https://msdn.microsoft.com/library/System.String.aspx) constants to represent the possible choices rather than an enum class.  <br/> |
   
### Child elements

None.
  
### Parent elements

|**Element**|**Description**|
|:-----|:-----|
|[ContentType (SPMetal)](contenttype-spmetal.md) <br/> |Specifies that a content type should be included in code generation and modifies which columns in the content type are included in code generation.  <br/> |
   
### Remarks

A ContentType element cannot have both a Column element and an ExcludeColumn element that name the same column. 
  
## Example

The following shows some Column elements in use. Each of them ensures that the column it names is included in code generation even if it is a hidden column. The Member attribute in each case gives the property that represents the column a name that differs from the internal SharePoint Foundation column name. One Column element represents the Choice column "Category". It uses the Type parameter to force SPMetal to generate a set of [String](https://msdn.microsoft.com/library/System.String.aspx) constants to represent the possible choices rather than an enum. 
  
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



[SPMetal Default Code Generation Rules](http://msdn.microsoft.com/library/873ac65e-425e-40f3-9ef6-753d3cda1436%28Office.15%29.aspx)
  
[Overriding SPMetal Defaults by Using a Parameters XML File](http://msdn.microsoft.com/library/209359b2-bd46-47b6-837d-3c0c2005cb19%28Office.15%29.aspx)
  
[Type Mapping: From LINQ to SharePoint Provider to .NET](http://msdn.microsoft.com/library/6a1dff92-d3cf-46ec-9e51-372e5b9ff7c4%28Office.15%29.aspx)

