---
title: "Join element (View)"
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
ms.assetid: 26ceade6-f193-4d5b-bad2-11ab05e2baa7
description: Used to join two lists for queries.
---

# Join element (View)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Used to join two lists for queries.
  
```XML
<Join   Type= "LEFT" | "INNER"  ListAlias= "TEXT"></Join>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|Type  <br/> |Required. "LEFT" means a left outer join. "INNER" means an inner join.  <br/> |
|ListAlias  <br/> | Optional. Specifies an alternate name for the foreign list. This can be useful when there are two joins to the same list. Different aliases are needed to differentiate the joins.<br/><br/>  There is no need to explicitly map the alias onto the real name of the foreign list because joins are only allowed through a lookup field relation, and the foreign list is specified in the Lookup field definition.<br/><br/>After this value is defined in a **Join** element, it is used as the value of a **List** attribute in two places:<br/>- In a [FieldRef](fieldref-element-query.md) element that is a child to the [Eq](eq-element-query.md) element of the **Join** element.  <br/>- In a [Field](field-element-list.md) element that is a child of a [ProjectedFields](projectedfields-element-view.md) element.  <br/> |
   
### Child elements

- [Eq](eq-element-query.md)
   
### Parent elements

- [Joins](joins-element-view.md)
   
### Occurrences

- Minimum: 1  
- Maximum: The value of the [MaxQueryLookupFields](https://msdn.microsoft.com/library/Microsoft.SharePoint.Administration.SPWebApplication.MaxQueryLookupFields.aspx) property for the [SPWebApplication](https://msdn.microsoft.com/library/Microsoft.SharePoint.Administration.SPWebApplication.aspx) object that contains the primary list that is being queried. The system default is 8.  
   
### Remarks

The **Join** element translates into the SQL **JOIN** statement. The **Join** element refactors the [Eq](eq-element-query.md) element to specify the primary and foreign fields on which to make the join. The primary field must be defined as a Lookup field to the foreign field. 
  
## Example

The following is an example of two **Join** elements; both are left outer joins. CustomerName is a lookup field on an Orders list. It looks up to the ID field of a Customers list. The Customer list, in turn, has a CityName field that is a lookup field to a Cities list. 

The first **Join** element assigns 'customers' as an alias for the Customers list. The [Eq](eq-element-query.md) element child defines the join using the same source and target fields that constitute the lookup relation. The second **Join** element assigns 'customerCities' as an alias to the Cities list. It defines the join in parallel to the existing lookup relation between the Customer and Cities lists. 
  
Aliases are valuable for the lists because there can be more than one join to the same list and different aliases are needed to differentiate the joins. For example, in addition to the joins from Orders to Customer and from Customer to Cities, there could also be joins from Orders to Suppliers and from Suppliers to Cities. In the case of the last join, a different alias, say 'supplierCities', would be assigned to the Cities list from the one that is used for the Customer to Cities join.
  
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
      <FieldRef List='customers' Name='CityName' RefType='Id' />
      <FieldRef List='customerCities' Name='ID' />
    </Eq>
  </Join>
</Joins>

```

<br/>
