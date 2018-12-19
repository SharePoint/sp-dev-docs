---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 749fc52f-df5a-4fe6-9aea-6f6a6f0edd73
---

# NavBarPage element (Module)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Provides information about the file specified as the home page in a module so that other pages can be linked to the page.

## Definition

```XML
<NavBarPage
  ID = "Integer"
  Name = "Text"
  Position = "Text">
</NavBarPage>
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
<td align="left"><p>Required **Integer**. Specifies the ID for the page.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required **Text**. Specifies the text that appears in the navigation area of other pages that link to the page.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Position**</p></td>
<td align="left"><p>Optional **Text**. Specifies the position of the UI element represented by the **NavBarPage** element with respect to the top navigational area on a page. Possible values include the following:</p>
<ul>
<li><p>**Start** — add the node at the start (left/top in English) of the top navigational area.</p></li>
<li><p>**End** — add the node to the end (right/bottom in English) of the top navigational area. Default.</p></li>
<li><p>**Number between 1001 and 2000** — add the node after (right/below in English) another **NavBarPage** element whose ID matches the specified value.</p></li>
</ul></td>
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
<p>Maximum: 1</p></td>
</tr>
</tbody>
</table>


## See also

- [Modules](modules.md)
- [Module](http://msdn.microsoft.com/library/e5eeed6e-d785-496d-82b5-08d153588045(Office.15).aspx)
- [How to: Provision a File](http://msdn.microsoft.com/library/438d5a75-7f39-4fa9-a365-d86e8ba967b6(Office.15).aspx)






