---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 92b6f66c-a2af-4505-9287-91c29716a052
---

# Assembly Element (Event)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Contains the strong name of the assembly to use to handle events through the receiver.

## Definition

```XML
<Assembly>
</Assembly>
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

The **Assembly** element contains a string in the following format:

```MyEventHandler, Version=1.0.0.0, Culture=neutral, PublicKeyToken=10b23036c9b36d6d```

## Example

For an example of how this element is used, see [Event Registrations](event-registrations.md).








