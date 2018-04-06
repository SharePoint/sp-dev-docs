---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 20bf718c-4ba6-4808-a014-f17ce9b9bde0
---

# WebPartConnection Element (Module)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the Web Part connections for a module.

## Definition

```XML
<WebPartConnection 
   ID = string 
   ConsumerID = string 
   ProviderID = string 
   ConsumerConnectionPointID = string 
   ProviderConnectionPointID = string 
   TargetPageUrl = string 
   CrossPageConnectionID = string 
   CrossPageSchema = string />
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
<td align="left"><p>Optional **string**. Specifies the ID of the Web Part connection.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ConsumerID**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ProviderID**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ConsumerConnectionPointID**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ProviderConnectionPointID**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**TargetPageUrl**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CrossPageConnectionID**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CrossPageSchema**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
</tbody>
</table>

### Child elements

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
<td align="left"><p><a href="webparttransformer-element-module.md">WebPartTransformer Element (Module)</a></p></td>
<td align="left"><p></p></td>
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







