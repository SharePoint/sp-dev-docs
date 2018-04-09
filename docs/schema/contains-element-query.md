---
title: "Contains Element (Query)"
ms.author: rickki
author: rickki
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
ms.assetid: 0eefc273-c539-4d82-84ef-338bb0a2021f
description: "Last modified: March 09, 2015"
---

# Contains Element (Query)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Searches for a string anywhere within a column that holds **Text** or **Note** field type values. 
  
```
<Contains>
  <FieldRef Name = "Field_Name"/>
  <Value Type = "Field_Type"/>
  <XML />
</Contains>
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
|[And](and-element-query.md), [Expr1](../../collaborative-application-markup-language-caml-schemas/view-schema/expr1-element-view.md), [Expr2](../../collaborative-application-markup-language-caml-schemas/view-schema/expr2-element-view.md), [Or](or-element-query.md), [Where](../../collaborative-application-markup-language-caml-schemas/general-schema/writesecurity-element.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: Unbounded  <br/> |
   
## Example

The following example uses the **Contains** element within a string that is assigned to the **Query** property to return the titles of items where the Conference column value begins with "Morning" and contains "discussion session". 
  
```cs
SPWeb mySite = SPControl.GetContextWeb(Context);
SPList list = mySite.Lists["List_Name"];
SPQuery query = new SPQuery();
query.Query = "<Where><And><BeginsWith><FieldRef Name="Conference"/>" + 
   "<Value Type="Note">Morning</Value></BeginsWith>" + 
      "<Contains><FieldRef Name="Conference" />
   <Value Type="Note">discussion session</Value>" + 
      "</Contains></And></Where>";
SPListItemCollection myItems = list.GetItems(query);
foreach (SPListItem item in myItems)
{
   Label1.Text += item["Title"] + "<BR>";
}
```

## See also



[BeginsWith Element (Query)](beginswith-element-query.md)

