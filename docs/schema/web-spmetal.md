---
title: "Web (SPMetal)"
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
ms.assetid: 96f7c4e1-530d-4148-ac5c-8132565ece1d
description: "Last modified: March 09, 2015"
---

# Web (SPMetal)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies the name and access level (public or internal) of the class (derived from [DataContext](https://msdn.microsoft.com/library/Microsoft.SharePoint.Linq.DataContext.aspx)) that SPMetal generates. 
  
For information about the default behavior of SPMetal when an optional element or attribute is not present, see [SPMetal Default Code Generation Rules](http://msdn.microsoft.com/library/873ac65e-425e-40f3-9ef6-753d3cda1436%28Office.15%29.aspx). 
  
[Web (SPMetal)](web-spmetal.md)
  
```XML
<Web Class="TeamSite" AccessModifier="Internal"> ... </Web>
```

 **Complex**
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|Class (optional)  <br/> |Specifies a name for the class (derived from [DataContext](https://msdn.microsoft.com/library/Microsoft.SharePoint.Linq.DataContext.aspx)) that SPMetal generates.  <br/> |
|AccessModifier (optional)  <br/> |Specifies whether the class (derived from [DataContext](https://msdn.microsoft.com/library/Microsoft.SharePoint.Linq.DataContext.aspx)) is public or internal.  <br/> |
   
#### AccessModifier Attribute Possible Values:

|**Value**|**Description**|
|:-----|:-----|
|Internal  <br/> |The class will be **internal** (**Friend** in Visual Basic).  <br/> |
|Public  <br/> |DEFAULT: The class will be **public** (**Public** in Visual Basic).  <br/> |
   
### Child elements

|**Element**|**Description**|
|:-----|:-----|
|[ContentType](contenttype-spmetal.md) <br/> |Includes a content type for code generation and modifies which fields (columns) in the content type are included in code generation.  <br/> |
|[ExcludeContentType](excludecontenttype-spmetal.md) <br/> |Excludes a content type from code generation.  <br/> |
|[ExcludeOtherContentTypes](excludeothercontenttypes-spmetal.md) <br/> |Excludes from code generation all content types not explicitly included in a ContentType element.  <br/> |
|[IncludeHiddenContentTypes](includehiddencontenttypes-spmetal.md) <br/> |Includes hidden content types in code generation.  <br/> |
|[List](list-spmetal.md) <br/> |Includes a list for code generation and modifies which content types in the list are included in code generation.  <br/> |
|[ExcludeList](excludelist-spmetal.md) <br/> |Excludes a list from code generation.  <br/> |
|[ExcludeOtherLists](excludeotherlists-spmetal.md) <br/> |Excludes from code generation all lists not explicitly included in a List element.  <br/> |
|[IncludeHiddenLists](includehiddenlists-spmetal.md) <br/> |Includes hidden lists in code generation.  <br/> |
   
### Parent elements

|**Element**|**Description**|
|:-----|:-----|
|None ||
   
### Remarks

A Web element cannot have both a ContentType element and an ExcludeContentType element that name the same content type. An ExcludeContentType element that names a hidden content type may not be present in the same Web element that has an IncludeHiddenContentTypes element. Finally, a Web element cannot have both an ExcludeOtherContentTypes element and an IncludeHiddenContentTypes element.
  
## Example

The following is an example of a Web element.
  
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

