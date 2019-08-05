---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 7aa5ec15-223f-4cf2-868f-2b10f27ade65
---

# Property element (Module)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a custom property value to implement within the file.

## Definition

```XML
<Property
  Name = "Text"
  Value = "Text">
  Type = integer | string | DateTime/>
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
<td align="left"><p>Required **Text**. Specifies the name of the property.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Value**</p></td>
<td align="left"><p>Required **Text**. Specifies the value of the property.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Optional **integer**, **string**, or **DateTime**. Specifies the type of property.</p></td>
</tr>
</tbody>
</table>

### Child elements

None

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="file-element-module.md">File</a></p></td>
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
<p>Maximum: Unbounded</p></td>
</tr>
</tbody>
</table>

## Example 

For an example of how this element is used, see [Modules](modules.md).


## See also

- [Module](http://msdn.microsoft.com/library/e5eeed6e-d785-496d-82b5-08d153588045(Office.15).aspx)
- [How to: Provision a File](http://msdn.microsoft.com/library/438d5a75-7f39-4fa9-a365-d86e8ba967b6(Office.15).aspx)






