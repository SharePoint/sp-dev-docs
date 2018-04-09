---
title: "Joins Element (View)"
ms.

manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- View schema
api_type:
- schema
ms.assetid: 3fd26dab-9ba5-43a5-9af7-c566c343875e
description: "Last modified: March 09, 2015"
---

# Joins Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Contains [Join elements](join-element-view.md) needed for a query. 
  
```
<Joins>  <Join ... >  </Join>    <Join ... >  </Join>  ...</Joins>
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
|[Join](join-element-view.md)|
   
### Parent elements

||
|:-----|
|[View](../../collaborative-application-markup-language-caml-schemas/list-schema/view-element-list.md)|
   
> [!NOTE]
> When a **Joins** element is used as part of a dynamic query instead of as part of the definition of a list view; that is, when it is the value of the [SPQuery.Joins](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPQuery.Joins.aspx) property rather than the [Joins](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.Joins.aspx) property, then it does not really have a parent element. 
  
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
## Example

The following is an example of a **Joins** element with two left outer joins. CustomerName is a lookup field on an Orders list. It looks up to the ID field of a Customers list. The Customer list, in turn, has a CityName field that is a lookup field to a Cities list. The first [Join](join-element-view.md) element assigns 'customers' as an alias for the Customers list. The [Eq](../../collaborative-application-markup-language-caml-schemas/query-schema/eq-element-query.md) element child defines the join using the same source and target fields that constitute the lookup relation. The second Join element assigns 'customerCities' as an alias to the Cities list. It defines the join in parallel to the existing lookup relation between the Customer and Cities lists. 
  
Aliases are needed for the lists because there can be more than one join to the same list and different aliases are needed to differentiate the joins. For example, in addition to the joins from Orders to Customer and from Customer to Cities, there could also be joins from Orders to Suppliers and from Suppliers to Cities. In the case of the last join, a different alias, say 'supplierCities', would be assigned to the Cities list from the one that is used for the Customer to Cities join.
  
```XML
<Joins>
  <Join Type='LEFT' ListAlias='customers'>
    <Eq>
      <FieldRef Name='CustomerName' RefType='Id' />
      <FieldRef List='customers' Name='ID' />
    </Eq>
  </Join>
  <Join Type='LEFT' ListAlias='customerCities'>
    <Eq>
      <FieldRef List='customer' Name='CityName' RefType='Id' />
      <FieldRef List='customerCities' Name='ID' />
    </Eq>
  </Join>
</Joins>

```


