---
title: FilterValue Element in FilterValues
description: Describes the FilterValue Element in FilterValues, which specifies a filter value for a query or association. The element can contain a mix of character data and child elements.
manager: soliver
ms.date: 06/13/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 6b5cd80c-fd89-8ea1-3657-d711dc513976
---

# FilterValue Element in FilterValues 

(Subscription Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a filter value for a query or association. The FilterValue element can contain a mix of character data and child elements.

**Namespace**: `http://schemas.microsoft.com/office/2006/03/BusinessDataCatalog`

**Schema**: Subscription

```XML
<FilterValue FilterDescriptorName = "String" Type = "String" FilterIndex = "Integer"> </FilterValue>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

| Attribute | Description |
|-----------|-------------|
| **FilterDescriptorName** | Required.</br></br>The name of the filter descriptor in the model.</br></br>Attribute type: **String** |
| **Type** | Required.</br></br>The data type of the filter value.</br></br>Attribute type: **String** |
| **FilterIndex** | Required.</br></br>Must always be set to zero.</br></br>Attribute type: **Integer** |

### Child elements

None.

### Parent elements

| Element | Description |
|---------|-------------|
| [FilterValues Element in Query (Subscription Schema)](filtervalues-element-in-query-subscription-schema.md) | The **FilterValues** element that contains this filter value. |
| [FilterValues Element in Association (Subscription Schema)](filtervalues-element-in-association-subscription-schema.md) | The **FilterValues** element that contains this filter value. |








