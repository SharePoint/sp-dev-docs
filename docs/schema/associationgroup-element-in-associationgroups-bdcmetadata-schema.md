---
title: AssociationGroup element in AssociationGroups (BDCMetadata Schema)
description: Details on the AssociationGroup element in AssociationGroups (BDCMetadata Schema)
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.AssociationGroup
ms.localizationpriority: medium
ms.assetid: db30622e-3c2b-2735-9360-a702196cbcff
---

# AssociationGroup element in AssociationGroups (BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies an **AssociationGroup**, which is a construct that ties the related **AssociationMethods** together. For example, **GetOrdersForCustomer**, **GetCustomerForOrder**, and **AssociateCustomerToOrder** are all association methods that work on the same relationship between Customer and Order.

**Namespace**: `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema**: BDCMetadata

**AssociationGroup** must be defined on the Entity element that is the Destination of the **AssociationReferences** that are not marked as **Reverse**, or the Source of the **AssociationReferences** that are marked as **Reverse**.

```XML
<AssociationGroup Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </AssociationGroup>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="80%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the **AssociationGroup**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DefaultDisplayName**</p></td>
<td align="left"><p>Optional.</p>
<p>The default display name of the **AssociationGroup**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IsCached**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies whether the **AssociationGroup** is used frequently.</p>
<p>Default value: **true**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
</tbody>
</table>

### Child elements

| Element | Description |
| --- | --- |
| [LocalizedDisplayNames element in MetadataObject (BDCMetadata Schema)](localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md) | The localized names of the **AssociationGroup**|
| [Properties element in MetadataObject (BDCMetadata Schema)](properties-element-in-metadataobject-bdcmetadata-schema.md) | The properties of the **AssociationGroup**. |
| [AssociationReference element in AssociationGroup (BDCMetadata Schema)](associationreference-element-in-associationgroup-bdcmetadata-schema.md) | An **AssociationReference** of an **AssociationGroup**. |

### Parent elements

| Element | Description |
| --- | --- |
| [AssociationGroups element in Entity (BDCMetadata Schema)](associationgroups-element-in-entity-bdcmetadata-schema.md) | The **AssociationGroups** element that contains this **AssociationGroup**. |
