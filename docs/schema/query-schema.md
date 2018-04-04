---
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Query schema
api_type:
- schema
ms.assetid: 7cc82402-1f1d-4825-81cb-abc5f99a219c
---

# Query Schema

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The Query schema of [Collaborative Application Markup Language (CAML)](introduction-to-collaborative-application-markup-language-caml.md) is used in various ways within the context of Microsoft SharePoint Foundation to define queries against list data. 

For example, you can assign CAML query strings to the **Query** property of several classes in the server and client object models to return data, or to method parameters of the **Lists** web service to work remotely with data. CAML queries are also used in the context of CAML views to return specific data. 

The [Query](query-element-list.md) element of the [List schema](list-schema.md) contains elements of the Query schema.


- [Where](where-element-query.md)

## Logical Joins

[And](and-element-query.md)

- [Logical Joins]

- [Comparison Operators]

- [Membership](membership-element-query.md)

[Or](or-element-query.md)

- [Logical Joins]

- [Comparison Operators]

- [Membership](membership-element-query.md)

## Comparison Operators

[BeginsWith](beginswith-element-query.md)

- [FieldRef](fieldref-element-query.md)

- [Value](value-element-query.md)

- [XML](xml-element.md)

[Contains](contains-element-query.md)

- [FieldRef](fieldref-element-query.md)

- [Value](value-element-query.md)

- [XML](xml-element.md)

[DateRangesOverlap](daterangesoverlap-element-query.md)

- [FieldRef](fieldref-element-query.md)

- [Value](value-element-query.md)

[Eq](eq-element-query.md)

- [FieldRef](fieldref-element-query.md)

- [Value](value-element-query.md)

- [XML](xml-element.md)

[Geq](geq-element-query.md)

- [FieldRef](fieldref-element-query.md)

- [Value](value-element-query.md)

- [XML](xml-element.md)

[Gt](gt-element-query.md)

- [FieldRef](fieldref-element-query.md)

- [Value](value-element-query.md)

- [XML](xml-element.md)

[In](in-element-query.md)

- [FieldRef](fieldref-element-query.md)

- [Values](values-element-query.md)
            
[Value](value-element-query.md)

- [XML](xml-element.md)

[Includes](includes-element-query.md)

- [FieldRef](fieldref-element-query.md)

- [Value](value-element-query.md)

- [XML](xml-element.md)

[IsNotNull](isnotnull-element-query.md)

- [FieldRef](fieldref-element-query.md)

[IsNull](isnull-element-query.md)

- [FieldRef](fieldref-element-query.md)

[Leq](leq-element-query.md)

- [FieldRef](fieldref-element-query.md)

- [Value](value-element-query.md)

- [XML](xml-element.md)

[Lt](lt-element-query.md)

- [FieldRef](fieldref-element-query.md)

- [Value](value-element-query.md)

- [XML](xml-element.md)

[Membership](membership-element-query.md)

[Neq](neq-element-query.md)

- [FieldRef](fieldref-element-query.md)

- [Value](value-element-query.md)

- [XML](xml-element.md)

[NotIncludes](notincludes-element-query.md)

- [FieldRef](fieldref-element-query.md)

- [Value](value-element-query.md)

- [XML](xml-element.md)

## Group/Order Operators

[GroupBy](groupby-element-query.md)

- [FieldRef](fieldref-element-query.md)

[OrderBy](orderby-element-query.md)

- [FieldRef](fieldref-element-query.md)

## Value Child Elements

[ListProperty](listproperty-element-query.md)

[Month](month-element-query.md)

[Now](now-element-query.md)

[Today](today-element-query.md)

[UserID](userid-element-query.md)

[XML](xml-element.md)

## See also

- [View Schema](view-schema.md)

- [List Schema](list-schema.md)








