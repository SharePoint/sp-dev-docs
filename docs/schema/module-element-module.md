---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 1e7fd643-5029-4158-910e-2ab5396efcb4
---

# Module Element (Module)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies files with which to provision SharePoint Web sites within an element manifest.

## Definition

```XML
<Module
  HyperlinkBaseUrl = string
  IncludeFolders = "Text"
  List = "Integer"
  Name = "Text"
  Path = "Text"
  RootWebOnly = "TRUE" | "FALSE"
  SetupPath = "Text"
  Url = "Text">
</Module>
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
<td align="left"><p>**HyperlinkBaseUrl**</p></td>
<td align="left"><p>Optional **string**. Specifies an absolute URL to use as the base URL for hyperlinks.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IncludeFolders**</p></td>
<td align="left"><p> Optional **Text**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**List**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the type of list, which is defined within <a href="http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx">Onet.xml</a>.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required **Text**. Contains the name of the file set. Can only contain the following characters:</p>
<ul>
<li><p>alphanumeric</p></li>
<li><p>hyphen (`-`)</p></li>
<li><p>underscore (`_`)</p></li>
<li><p>period (`.`)</p></li>
<li><p>space ( )</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**Path**</p></td>
<td align="left"><p>Optional **Text**. Specifies the physical path to the file set relative to %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\Features\Feature. Can only contain the following characters:</p>
<ul>
<li><p>alphanumeric</p></li>
<li><p>hyphen (`-`)</p></li>
<li><p>underscore (`_`)</p></li>
<li><p>period (`.`)</p></li>
<li><p>space ( )</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**RootWebOnly**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if the files specified in the module are installed only in the top-level Web site of the site collection.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SetupPath**</p></td>
<td align="left"><p>Optional **Text**. Specifies the physical path to a folder in the SharePoint Foundation setup directory %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE) that contains a file to include in the module. Can only contain the following characters:</p>
<ul>
<li><p>alphanumeric</p></li>
<li><p>hyphen (`-`)</p></li>
<li><p>underscore (`_`)</p></li>
<li><p>period (`.`)</p></li>
<li><p>space ( )</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**Url**</p></td>
<td align="left"><p>Optional **Text**. Specifies the virtual path of the folder in which to place the files when a site is instantiated. If **Path** is not specified, the value of **Url** is used for the physical path. Use the **Url** attribute to provision a folder through the Feature.</p>
<p>The **Url** attribute cannot contain the following characters:</p>
<ul>
<li><p>\"</p></li>
<li><p>#</p></li>
<li><p>%</p></li>
<li><p>&amp;</p></li>
<li><p>*</p></li>
<li><p>:</p></li>
<li><p><</p></li>
<li><p>></p></li>
<li><p>?</p></li>
<li><p>\\</p></li>
<li><p>{</p></li>
<li><p>}</p></li>
<li><p>|</p></li>
<li><p>~</p></li>
<li><p>\x7f</p></li>
</ul></td>
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
<td align="left"><p><a href="file-element-module.md">File</a></p></td>
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
<td align="left"><p><a href="elements-element-module.md">Elements</a></p></td>
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

### Remarks

The **Module** element specifies a file or collection of files and a location where the files are installed during site creation. If the file is a Web Part Page, the module definition can specify which Web Parts should be included on the page.


## Example 

For an example of how this element is used, see [Modules](modules.md).


## See also

- [Module](http://msdn.microsoft.com/library/e5eeed6e-d785-496d-82b5-08d153588045(Office.15).aspx)
- [How to: Provision a File](http://msdn.microsoft.com/library/438d5a75-7f39-4fa9-a365-d86e8ba967b6(Office.15).aspx)







