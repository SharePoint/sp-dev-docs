---
title: "FieldRef Element (Query)"
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
ms.assetid: 4c912a6d-0c01-4cd0-affd-6333af69bd55
description: "Last modified: March 09, 2015"
---

# FieldRef Element (Query)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents a reference to a field within a query.
  
```
<FieldRef
  Alias = "Text"
  Ascending = "TRUE" | "FALSE"
  CreateURL = "Text"
  DisplayName = "Text"
  Explicit = "TRUE" | "FALSE"    Format = "Text"
  ID = "Text"
  Key = "Text"  List = "Text"
  LookupId = "TRUE" | "FALSE"
  Name = "Text"
  RefType = "Text"
  ShowField = "Text"
  TextOnly = "TRUE" | "FALSE"
  Type = "Text">
</FieldRef>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Alias** <br/> |Optional **Text**.  <br/> |
|**Ascending** <br/> |Optional **Boolean**. This specifies the sort order on a **FieldRef** element that is defined in a view. The default value is **TRUE**.  <br/> |
|**CreateURL** <br/> |Optional **Text**. Specifies the URL for the .aspx file that is used to create a Meeting Workspace site.  <br/> |
|**DisplayName** <br/> |Optional **Text**. This attribute provides the display name of the field that is referenced.  <br/> |
|**Explicit** <br/> |Optional **Boolean**. This attribute is only supported within the **ViewFields** element. **TRUE** if the field is explicitly declared in the view definition and is not returned in a **Fields** enumeration inside a view.  <br/> |
|**Format** <br/> |Optional **Text**.  <br/> |
|**ID** <br/> |Optional **Text**. Specifies the GUID that identifies the field.  <br/> |
|**Key** <br/> |Optional **Text**. If set to **Primary**, specifies that the field is the primary key for its table and thus uniquely identifies each record in the table.  <br/> |
|**List** <br/> |Optional **Text**. Specifies the parent foreign list when the **FieldRef** element is a child of an [Eq](eq-element-query.md) element in [Join](../../collaborative-application-markup-language-caml-schemas/view-schema/join-element-view.md) element. The value is an alias for the list that is defined by the **ListAlias** attribute of the [Join](../../collaborative-application-markup-language-caml-schemas/view-schema/join-element-view.md) element.  <br/> |
|**LookupId** <br/> |Optional **Boolean**. When the field is a Lookup type, specifies that queries should look for the item by its unique item ID rather than the field value. This can be useful, for example, when multiple items have identical values in the field and you want to query for a specific item. The default is false.  <br/> |
|**Name** <br/> |Optional **Text**. This attribute provides the internal name of the field that is referenced.  <br/> |
|**RefType** <br/> |Optional **Text**. Specifies the type of reference for a field in an events list.  <br/> |
|**ShowField** <br/> |Optional **Text**. The **ShowField** attribute can be set to the field name to display. By default, a hyperlinked text from the Title field of the record in the external list is displayed. But the **ShowField** attribute can be used to override that and display another field from the external list.  <br/> The following data types are allowed as targets of a **ShowField** attribute: **Text**, **Choice**, and **Counter**.  <br/> |
|**TextOnly** <br/> |Optional **Boolean**. Specifies that the field contains only text values.  <br/> |
|**Type** <br/> | Optional **Text**. Specifies the function that is applied to a totals column or a calculated column. Possible values include the following:  <br/> **AVG** Average value. Applies to **DateTime** **Number**, **Integer**, and **Currency** field types.  <br/> **COUNT** Number of items. Applies to all field types that allow aggregation.  <br/> **MAX** Maximum value. Applies to **DateTime** **Number**, **Integer**, and **Currency** field types.  <br/> **MIN** Minimum value. Applies to **DateTime** **Number**, **Integer**, and **Currency** field types.  <br/> **SUM** Sum of values. Applies to **Number**, **Integer**, and **Currency** field types.  <br/> **STDEV** Standard deviation. Applies to **Number**, **Integer**, and **Currency** field types.  <br/> **VAR** Variance. Applies to **Number**, **Integer**, and **Currency** field types.  <br/>  The values for the **Type** attribute are not case-sensitive.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[BeginsWith](beginswith-element-query.md), [Contains](contains-element-query.md), [DateRangesOverlap](daterangesoverlap-element-query.md), [Eq](eq-element-query.md), [FieldRefs](../../collaborative-application-markup-language-caml-schemas/list-schema/fieldrefs-element-list.md), [Geq](geq-element-query.md), [GroupBy](groupby-element-query.md), [Gt](gt-element-query.md), [In](in-element-query.md), [Includes](includes-element-query.md), [IsNotNull](isnotnull-element-query.md), [IsNull](isnull-element-query.md), [Leq](leq-element-query.md), [Lt](lt-element-query.md), [Neq](neq-element-query.md), [NotIncludes](notincludes-element-query.md), [OrderBy](orderby-element-query.md)|
   
### Occurrences

||
|:-----|
|Minimum: 0  <br/> Maximum: 1 (Unbounded within [OrderBy](orderby-element-query.md))  <br/> |
   
## Example

The following example queries for cases where the Expires field is either **null** or contains a value greater than or equal to the current date. 
  
```XML
<Query>
   <Where>
      <Or>
         <IsNull>
            <FieldRef Name="Expires" />
         </IsNull>
         <Geq>
            <FieldRef Name="Expires" />
            <Value Type="DateTime">
               <Today />
            </Value>
         </Geq>
      </Or>
   </Where>
   <OrderBy>
      <FieldRef Name="Modified" Ascending="FALSE" />
   </OrderBy>
</Query>
```

The next example from the [Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56%28Office.15%29.aspx) file for contacts lists specifies fields to display in the toolbar. 
  
```XML
<ViewFields>
   <FieldRef Name="LinkTitleNoMenu"></FieldRef>
   <FieldRef Name="FirstName"></FieldRef>
   <FieldRef Name="WorkPhone"></FieldRef>
   <FieldRef Name="Email"></FieldRef>
</ViewFields>
```


