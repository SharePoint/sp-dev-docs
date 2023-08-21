---
title: FilterValues Element in Query
description: Describes the FilterValues Element in Query, which specifies the list of filter values for this query execution.
manager: soliver
ms.date: 06/13/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 41eea6a6-336c-1397-41fb-b0b0bd389d60
---

# FilterValues Element in Query

(Subscription Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the list of filter values for this query execution.

**Namespace**: `http://schemas.microsoft.com/office/2006/03/BusinessDataCatalog`

**Schema**: Subscription

```XML
<FilterValues></FilterValues>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None.

### Child elements

| Element | Description |
|---------|-------------|
| [FilterValue Element in FilterValues (Subscription Schema)](filtervalue-element-in-filtervalues-subscription-schema.md) | A filter value for this query execution. If filter values are not provided, any filter values provided in the model for this method instance are used. If the model does not contain filter values, default values are used. |

### Parent elements

| Element | Description |
|---------|-------------|
| [Query Element in Queries (Subscription Schema)](query-element-in-queries-subscription-schema.md) | The query that this list of filter values belongs to. |
