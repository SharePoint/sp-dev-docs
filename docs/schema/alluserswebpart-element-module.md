---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: fb0f93f5-1bb9-4c27-9d07-1dcd3872f908
---

# AllUsersWebPart element (Module)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Contains a web part in a module of a site definition.

## Definition

```XML
<AllUsersWebPart 
   ID = string 
   WebPartOrder = integer 
   WebPartZoneID = string>
</AllUsersWebPart>
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
<td align="left"><p>**ID**</p></td>
<td align="left"><p>Optional **string**. Specifies the ID of the web part.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**WebPartOrder**</p></td>
<td align="left"><p>Required **integer**. Specifies the vertical positioning of the web part within a zone.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**WebPartZoneID**</p></td>
<td align="left"><p>Required **string**. Specifies the zone for the web part.</p></td>
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


## See also

- [Modules](modules.md)
- [Module](http://msdn.microsoft.com/library/e5eeed6e-d785-496d-82b5-08d153588045(Office.15).aspx)
- [How to: Provision a File](http://msdn.microsoft.com/library/438d5a75-7f39-4fa9-a365-d86e8ba967b6(Office.15).aspx)







