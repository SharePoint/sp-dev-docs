---
title: "dsQueryResponse"
ms.author: rickki
author: rickki
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- dsQueryResponse XML
ms.assetid: 4c8c17dc-af06-4ef1-a1ad-831a1ea19e06
description: "Last modified: March 09, 2015"
---

# dsQueryResponse

 **Last modified:** March 09, 2015 
  
 * **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 * 
  
Top-level element that contains the list data that is rendered by [the XSLT list view rendering system](http://msdn.microsoft.com/library/7c1e0b6f-f53f-4379-a2b3-fbbaf2e00593%28Office.15%29.aspx).
  
```
<dsQueryResponse 
  ViewStyleID="Integer" 
  BaseViewID="Integer" 
  TemplateType="Integer" 
  RowLimit="Integer">
</dsQueryResponse>
```

## Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**ViewStyleID** <br/> |The ID of the view style of the view.  <br/> |
|**BaseViewID** <br/> |The ID of the base view of the list. This is the same value as [BaseViewID](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.BaseViewID.aspx) .  <br/> |
|**TemplateType** <br/> |The ID of the type of the list template. Must be the numerical version of one of the [SPListTemplateType](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPListTemplateType.aspx) enumeration values. This is the same value as [BaseTemplate](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPList.BaseTemplate.aspx) .  <br/> |
|**RowLimit** <br/> |The maximum number of rows to be displayed on a single list view page.  <br/> |
   
## Child Elements

||
|:-----|
|[Rows](rows-dsqueryresponse.md)|
   
## Parent Elements

None
  
## Occurrences

||
|:-----|
|Minimum: 1  <br/> Maximum: 1  <br/> |
   
## Example

For an example, see [Examples of Input and Result Node Trees in XSLT Transformations](http://msdn.microsoft.com/library/cbe88144-25ac-4cd2-8f2a-50e8c271c6ae%28Office.15%29.aspx).
  

