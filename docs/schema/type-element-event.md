---
title: Type Element (Event)
description: Describes the Type element (Event) and provides a definition, the elements and attributes, and an example.
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 8eb27a56-626b-430e-9e67-61f77b7b0db5
---

# Type Element (Event)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the type of event for which to register the event handler.

## Definition

```XML
<Type />
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None

### Child elements

None

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="receiver-element-event.md">Receiver</a></p></td>
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

The **Type** element contains an integer corresponding to one of the **Microsoft.SharePoint.SPEventReceiverType** values.

## Example

For an example of how this element is used, see [Event Registrations](event-registrations.md).
