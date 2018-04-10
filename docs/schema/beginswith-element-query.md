---
title: "BeginsWith Element (Query)"
ms.

manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Query schema
api_type:
- schema
ms.assetid: cfd39267-dfc5-4685-9bde-e7e58cd5ba92
description: "Last modified: March 09, 2015"
---

# BeginsWith Element (Query)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Searches for a string at the start of a column that holds **Text** or **Note** field type values. 
  
```
<BeginsWith>
  <FieldRef Name = "Field_Name"/>
  <Value Type = "Field_Type"/>
  <XML />
</BeginsWith>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|None  <br/> |N/A  <br/> |
   
### Child elements

||
|:-----|
|[FieldRef](fieldref-element-query.md), [Value](value-element-query.md), [XML](xml-element.md)|
   
### Parent elements

||
|:-----|
|[And](and-element-query.md), [Expr1](expr1-element-view.md), [Expr2](expr2-element-view.md), [Or](or-element-query.md), [Where](where-element-query.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Example

The following example uses the **BeginsWith** element within a string that is assigned to the **Query** property to return the titles of items within a list where a Journal column begins with "City". 
  
```XML
SPWeb mySite = SPControl.GetContextWeb(Context);
SPList list = mySite.Lists["List_Name "];
SPQuery query = new SPQuery();
query.Query = "<Where><BeginsWith><FieldRef Name="Journal"/>" + 
   "<Value Type="Note">City</Value></BeginsWith></Where>";
SPListItemCollection myItems = list.GetItems(query);
foreach (SPListItem item in myItems)
{
   Label1.Text += item["Title"] + "<BR>";
}
```

## See also



[Contains Element (Query)](contains-element-query.md)

