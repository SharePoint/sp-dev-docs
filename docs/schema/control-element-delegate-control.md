---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 8ba77ea5-4625-42d9-a535-1703bb5801f9
---

# Control Element (Delegate Control)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Identifies the control to implement in a delegate control.

## Definition

```XML
<Control
  ControlAssembly = "Text"
  ControlClass = "Text"
  ControlSrc = "Text"
  Id = "Text"
  Sequence = "Integer">
</Control>
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
<td align="left"><p>**ControlAssembly**</p></td>
<td align="left"><p>Optional **Text**. Specifies the strong name of the assembly for the control.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ControlClass**</p></td>
<td align="left"><p>Optional **Text**. Specifies the fully qualified name of the class for the control.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ControlSrc**</p></td>
<td align="left"><p>Optional **Text**. Specifies the relative URL of the .ascx file that serves as the source for the control.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Optional **Text**. Specifies the ID of the control.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Sequence**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the sequence number for the control, which determines whether the control is added to the control tree for a page. The control with the lowest sequence number is added to the tree.</p></td>
</tr>
</tbody>
</table>

### Child elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="property-element-delegate-control.md">Property</a></p></td>
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
<td align="left"><p><a href="elements-element-delegate-control.md">Elements</a></p></td>
</tr>
</tbody>
</table>

## Example

When implementing a user control, use the **ControlSrc** attribute. When implementing a server control, use both the **ControlAssembly** and **ControlClass** attributes. For an example of how this element is used, see [Delegate Controls](delegate-controls.md).

## See also

- [How to: Customize a Delegate Control](http://msdn.microsoft.com/library/9db44a39-33df-43d9-b873-3b41310090af(Office.15).aspx)








