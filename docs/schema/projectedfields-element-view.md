---
title: "ProjectedFields Element (View)"
ms.author: rickki
author: rickki
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
ms.assetid: 40188d7d-3206-4162-b2c5-58cd9ef97e1d
description: "Last modified: March 09, 2015"
---

# ProjectedFields Element (View)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Specifies the fields in joined lists that can be included in the view when one or more other lists have been joined in a query.
  
```
<ProjectedFields>   
  <Field ... />  
  <Field ... />
</ProjectedFields>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
  
### Child elements

||
|:-----|
|[Field](../../collaborative-application-markup-language-caml-schemas/list-schema/field-element-list.md)|
   
> [!NOTE]
> There is a maximum number of [Field](../../collaborative-application-markup-language-caml-schemas/list-schema/field-element-list.md) child elements. It is defined as the difference between the maximum number of allowed fields in the list and the number of fields that are already in the list. 
  
### Parent elements

||
|:-----|
|[View](../../collaborative-application-markup-language-caml-schemas/list-schema/view-element-list.md)|
   
### Occurrences

> [!NOTE]
> The [View](../../collaborative-application-markup-language-caml-schemas/list-schema/view-element-list.md) element cannot have a **ProjectedFields** element unless it has a [Joins](joins-element-view.md) element that has at least one [Join](join-element-view.md) child element. However, a **ProjectedFields** element that forms the value of a **SPQuery.ProjectedFields** property, and therefore, is not a child of a [View](../../collaborative-application-markup-language-caml-schemas/list-schema/view-element-list.md) element, can be used to support an implicit join without a [Joins](joins-element-view.md) element. We do not recommend working without a [Joins](joins-element-view.md) element. You will maximize your solution's chances of being compatible with future releases of Microsoft SharePoint Foundation by always using an explicit **Join** element. For more information about implicit joins with **ProjectedFields** elements, see [List Joins and Projections](http://msdn.microsoft.com/library/f8e07793-3053-4930-97aa-556e38b9f21b%28Office.15%29.aspx). 
  
||
|:-----|
|Minimum: 0  <br/> Maximum: 1  <br/> |
   
### Remarks

If a field from a joined list is not represented in **ProjectedFields**, it cannot be included in the [ViewFields](../../collaborative-application-markup-language-caml-schemas/list-schema/viewfields-element-list.md) element. 
  
## Example

The following example shows how to add another field to the results that are returned by the query. The value of the **List** attribute is an alias to the foreign list. The alias is defined in a [Join Element (View)](join-element-view.md). The **ShowField** attribute must be set to the internal name of the foreign field. 
  
The **Type** attribute does not indicate the data type of the field as it usually does in a [Field](../../collaborative-application-markup-language-caml-schemas/list-schema/field-element-list.md) element. When a [Field](../../collaborative-application-markup-language-caml-schemas/list-schema/field-element-list.md) element is a child of a **ProjectedFields** element, **Type** simply indicates whether the [Join](join-element-view.md) element (in the [Joins](joins-element-view.md) element on which the **ProjectedFields** element depends) is based on an existing lookup relation between the lists. As of SharePoint Foundation 2010, all joins must be based on an existing lookup relation, so **Type** always has the value "Lookup". The actual data type of the field is not indicated when it is a child of the **ProjectedFields** element. However, the field's data type does matter because only the following types of fields can be included in a **ProjectedFields** element: 
  
- Calculated (treated as plain text)
    
- ContentTypeId
    
- Counter
    
- Currency
    
- DateTime
    
- Guid
    
- Integer
    
- Note (one-line only)
    
- Number
    
- Text
    
```XML
<ProjectedFields>
  <Field
    Name='CustomerCity'
    Type='Lookup'
    List='customerCities'
    ShowField='Title' />
</ProjectedFields>
```

For an example of a **ProjectedFields** element whose child **Field** element has a **FieldRef** attribute instead of a **List** attribute, see [List Joins and Projections](http://msdn.microsoft.com/library/f8e07793-3053-4930-97aa-556e38b9f21b%28Office.15%29.aspx).
  

