---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.AssociationReference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: e32c5267-53b0-9ff0-6e9a-1cb00d9f1d57
---

# AssociationReference Element in AssociationGroup 

(BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies an **AssociationReference** in an **AssociationGroup**.

**Namespace**: http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

**Schema**: BDCMetadata

```XML
<AssociationReference EntityNamespace = "String" EntityName = "String" AssociationName = "String" Reverse = "Boolean"> </AssociationReference>
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
<td align="left"><p>**EntityNamespace**</p></td>
<td align="left"><p>Optional.</p>
<p>The namespace of the external content type where the **Association** is defined. If **EntityName** is specified, **EntityNamespace** is required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EntityName**</p></td>
<td align="left"><p>Optional.</p>
<p>The name of the external content type where the **Association** is defined. If **EntityNamespace** is specified, **EntityName** is required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AssociationName**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the **Association**.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Reverse**</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies that the referenced **Association** has its source and destination reversed. This would indicate the **Association** is working in the opposite direction compared to other associations in the same **AssociationGroup**.</p><p>For example, if the **AssociationGroup** references an **Association** "GetOrdersForCustomer", returning Order items for the given Customer item, the **AssociationGroup** is in the direction of Customer to Order. The other **AssociationReference**, referencing another association "GetCustomerForOrder", must be marked as reverse, because this association is in the direction of Order to Customer.</p>
<p>Default value: **false**</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
</tbody>
</table>

### Child elements

None.

### Parent elements

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="associationgroup-element-in-associationgroups-bdcmetadata-schema.md">AssociationGroup Element in AssociationGroups (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The **AssociationGroup** that this **AssociationReference** belongs to.</p></td>
</tr>
</tbody>
</table>








