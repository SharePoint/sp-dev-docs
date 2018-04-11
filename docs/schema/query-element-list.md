---
title: "Query element (List)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- List schema
api_type:
- schema
ms.assetid: 9eff67cc-9877-43ba-8868-c017cb1df4bd
description: Defines the query for a view.
---

# Query element (List)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Defines the query for a view.
  
```XML
<Query>  <Where>
    ...
    </Where>  <GroupBy>
    ...
    </GroupBy>
  <OrderBy>
    ...
    </OrderBy>
</Query>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [GroupBy](groupby-element-query.md)
- [OrderBy](orderby-element-query.md)
- [Where](where-element-query.md)
   
### Parent elements

- [View](view-element-list.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1 
   
## Example

The following example queries the Status field for cases where the value does not equal Completed or is **null**, returning the results according to a descending sort on the Modified field. The **Where** element contains an **Or** element to group the filters. 
  
```XML
<Query>
  <OrderBy>
    <FieldRef Name="Modified" Ascending="FALSE"></FieldRef>
  </OrderBy>
  <Where>
    <Or>
      <Neq>
        <FieldRef Name="Status"></FieldRef>
        <Value Type="Text">Completed</Value>
      </Neq>
      <IsNull>
        <FieldRef Name="Status"></FieldRef>
      </IsNull>
    </Or>
  </Where>
</Query>
```

## See also

- [Query schema](query-schema.md)
- [List Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17%28Office.15%29.aspx)

