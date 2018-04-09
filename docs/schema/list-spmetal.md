---
title: "List (SPMetal)"
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
ms.assetid: fa18201b-ff94-40e9-8b2c-95af81a311cc
description: "Last modified: March 09, 2015"
---

# List (SPMetal)

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Specifies that a list should be included in code generation and modifies which content types in the list are included in code generation.
  
[Web (SPMetal)](web-spmetal.md)
  
[List (SPMetal)](list-spmetal.md)
  
```XML
<List Name="Calendar" Member="ScheduledEvents"> ... </List>
```

 **Complex**
## Attributes and elements

The following sections describe attributes, child elements, and parent elements.
  
#### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|Name (required)  <br/> |The name of the list in SharePoint Foundation.  <br/> |
|Member (optional)  <br/> |The name SPMetal gives to the property that it generates to represent the list.  <br/> |
|Type (optional)  <br/> |Specifies the return type of the property.  <br/> |
   
#### Child elements

|**Element**|**Description**|
|:-----|:-----|
|[ContentType](contenttype-spmetal.md) <br/> |Includes a content type for code generation and modifies which fields (columns) in the content type are included in code generation.  <br/> |
|[ExcludeContentType](excludecontenttype-spmetal.md) <br/> |Excludes a content type from code generation.  <br/> |
   
#### Parent elements

|**Element**|**Description**|
|:-----|:-----|
|[Web (SPMetal)](web-spmetal.md) <br/> |Specifies the name and access level (public or internal) of the class (derived from **DataContext**) that SPMetal generates.  <br/> |
   
## Remarks

A List element cannot have both a ContentType element and an ExcludeContentType element that name the same content type. 
  
## Example

The following is an example of a List element in use. If this is a hidden list, the presence of the element ensures that it is included in code generation. The example also contains a ContentType element that ensures that the content type class for the list content type is named "TeamMember" instead of the default "TeamMembersItem". 
  
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
    <ContentType Name="Item" Class="TeamMember"" />
  </List>
</Web>

```

## See also

#### Other resources

[SPMetal Default Code Generation Rules](http://msdn.microsoft.com/library/873ac65e-425e-40f3-9ef6-753d3cda1436%28Office.15%29.aspx)
  
[Overriding SPMetal Defaults by Using a Parameters XML File](http://msdn.microsoft.com/library/209359b2-bd46-47b6-837d-3c0c2005cb19%28Office.15%29.aspx)

