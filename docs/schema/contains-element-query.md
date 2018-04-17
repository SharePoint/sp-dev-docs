---
title: Contains element (Query)
ms.manager: soliver
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
description: In CAML, searches for a string anywhere within a column that holds Text or Note field type values. 
---

# Contains element (Query)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Searches for a string anywhere within a column that holds **Text** or **Note** field type values. 
  
```XML
<Contains>
  <FieldRef Name = "Field_Name"/>
  <Value Type = "Field_Type"/>
  <XML />
</Contains>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [FieldRef](fieldref-element-query.md)
- [Value](value-element-query.md)
- [XML](xml-element.md)
   
### Parent elements

- [And](and-element-query.md)
- [Expr1](expr1-element-view.md)
- [Expr2](expr2-element-view.md)
- [Or](or-element-query.md)
- [Where](writesecurity-element.md)
   
### Occurrences

- Minimum: 0
- Maximum: Unbounded
   
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

- [BeginsWith element (Query)](beginswith-element-query.md)

