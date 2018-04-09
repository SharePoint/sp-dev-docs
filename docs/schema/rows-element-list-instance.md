---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 28b2c8b4-5df8-4430-97ef-663a7cc30142
---

# Rows Element (List Instance)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Contains a collection of [Row](row-element-site.md) elements.

## Definition

```XML
<Rows>
  <Row></Row>
  <Row></Row>
  .
  .
  .
</Rows>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None

### Child elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="row-element-list-instance.md">Row</a></p></td>
</tr>
</tbody>
</table>

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="data-element-list-instance.md">Data</a></p></td>
</tr>
</tbody>
</table>

### Occurrences

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Minimum: 0</p>
<p>Maximum: 1</p></td>
</tr>
</tbody>
</table>

### Remarks

The **Rows** element is used within the [Data](data-element-site.md) element of a list instance definition to provide a set of default data when a list is instantiated during site provisioning.

## Example

For an example of how this element is used, see [List Instances](list-instances.md).

<br/>








