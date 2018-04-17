---
title: "RowLimit element (List)"
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
ms.assetid: 09906cae-0023-4a4f-94e5-4e167fd08773
description: Sets the row limit for the number of items to display in a view.
---

# RowLimit element (List)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Sets the row limit for the number of items to display in a view.
  
```XML
<RowLimit
  Paged = "TRUE" | "FALSE">
</RowLimit>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Paged** <br/> |Optional **Boolean**. **TRUE** to specify that the list supports displaying more items page by page. If **FALSE** or unspecified, the row limit is absolute, and there is no link to see more items.  <br/> |
   
### Child elements

None
   
### Parent elements

- [View](view-element-list.md)
- [ViewStyle](viewstyle-element-list.md)
   
### Occurrences

- Minimum: 0
- Maximum: 1 
   
### Remarks

When **Paged** is set to **TRUE**, a [PagedRowset](pagedrowset-element-list.md) element must be implemented. Otherwise, the server provides a generic implementation of a paged rowset that is defined in the STDVIEW.XML file. 
  
If **Paged** is not **TRUE** and the row limit is exceeded, the server renders a [RowLimitExceeded](rowlimitexceeded-element-list.md) element in the view if this element is specified. Otherwise, the default behavior is to give no indication to the user that the row limit has been exceeded. 
  
If **Paged** is **TRUE**, the number of items per page is displayed, and a **Next** button provides a link to the next set of items. 
  
## Example

The following line sets 100 as the row limit and specifies that a link be provided to see items that exceed the limit.
  
```XML
<RowLimit Paged="TRUE">100</RowLimit>
```

## See also

- [List Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17%28Office.15%29.aspx)

