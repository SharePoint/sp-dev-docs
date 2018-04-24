---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 83ad21a9-edcd-40fa-9989-b62ea3f225fa
---

# WebPart Element (Module)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the configuration information for a web part that has been serialized to binary data.

## Definition

```XML
<WebPart 
   AllUsers = string 
   Assembly = string 
   Cache = string 
   Class = string 
   DisplayName = string 
   Flags = string 
   FrameState = integer 
   IsIncluded = "TRUE" | "FALSE" 
   List = string 
   PerUser = string 
   SolutionId = string 
   Src = string 
   Type = integer 
   Url = string 
   Version = string 
   View = string 
   WebId = string 
   WebPartIdProperty = string 
   WPTypeId = string />
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
<td align="left"><p>**AllUsers**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Assembly**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Cache**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Class**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Flags**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FrameState**</p></td>
<td align="left"><p>Optional **integer**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IsIncluded**</p></td>
<td align="left"><p>Optional **Boolean**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**List**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PerUser**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SolutionId**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Src**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Url**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Version**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**View**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**WebId**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**WebPartIdProperty**</p></td>
<td align="left"><p>Optional **string**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**WPTypeId**</p></td>
<td align="left"><p>Optional **string**.</p></td>
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
<td align="left"><p><a href="binaryserializedwebpart-element-module.md">BinarySerializedWebPart Element (Module)</a></p></td>
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
<td align="left"><p>Minimum: 1</p>
<p>Maximum: Unbounded</p></td>
</tr>
</tbody>
</table>


## See also

- [Modules](modules.md)
- [Module](http://msdn.microsoft.com/library/e5eeed6e-d785-496d-82b5-08d153588045(Office.15).aspx)
- [How to: Provision a File](http://msdn.microsoft.com/library/438d5a75-7f39-4fa9-a365-d86e8ba967b6(Office.15).aspx)







