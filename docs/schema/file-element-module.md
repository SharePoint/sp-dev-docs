---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: c270e4ce-8110-4da7-b0e7-c223604bfce7
---

# File Element (Module)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a file to include within a module in a site definition.

## Definition

```XML
<File
  DocumentTemplateForList = string
  DoGUIDFixUp = "TRUE" | "FALSE"
  IgnoreIfAlreadyExists = "TRUE" | "FALSE"
  Level = Draft
  Name = string
  NavBarHome = "TRUE" | "FALSE"
  Path = string  ReplaceContent = "TRUE" | "FALSE" 
  Type = "Ghostable" | "GhostableInLibrary"
  Url = string>
  <AllUsersWebPart />
  <BinarySerializedWebPart />
  <NavBarPage />
  <Property />
  <View />
  <WebPartConnection />
</File>
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
<td align="left"><p>**IgnoreIfAlreadyExists**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to provision the view even if the file already exists at the specified URL; otherwise, **FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Optional **Text**. Specifies the virtual path for the file. Cannot contain the following characters:</p>
<ul>
<li><p>`"`</p></li>
<li><p>`#`</p></li>
<li><p>`%`</p></li>
<li><p>`&`</p></li>
<li><p>`*`</p></li>
<li><p>`:`</p></li>
<li><p>`<`</p></li>
<li><p>`>`</p></li>
<li><p>`?`</p></li>
<li><p>`\`</p></li>
<li><p>`{`</p></li>
<li><p>`}`</p></li>
<li><p>`|`</p></li>
<li><p>`~`</p></li>
<li><p>`\x7f`</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**NavBarHome**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** if the file is the destination URL for the **Home** link in the top navigation bar used throughout the site.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Path**</p></td>
<td align="left"><p>Optional **Text**. Specifies the physical path to the file relative to %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\Features\Feature. Can only contain the following characters:</p>
<ul>
<li><p>alphanumeric</p></li>
<li><p>hyphen (`-`)</p></li>
<li><p>underscore (`_`)</p></li>
<li><p>period (`.`)</p></li>
<li><p>space ( )</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Optional **Text**. Specifies that the file be cached in memory on the front-end Web server. Possible values include **Ghostable** and **GhostableInLibrary**. Both values specify that the file be cached, but **GhostableInLibrary** specifies that the file be cached as part of a list whose base type is **DocumentLibrary**.</p>
<p>When changes are made, for example, to the home page through the UI, only the differences from the original page definition are stored in the database, while default.aspx is cached in memory along with the schema files. The HTML page that is displayed in the browser is constructed through the combined definition resulting from the original definition cached in memory and from changes stored in the database.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ReplaceContent**</p></td>
<td align="left"><p>Optional **Boolean**. **TRUE** to overwrite the previously installed version of the file with a new version when the element manifest is being applied as part of an upgrade of the parent Feature; otherwise **FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Url**</p></td>
<td align="left"><p>Required **Text**. Specifies the virtual path for the file. If the **Name** attribute is specified, its value is used for the virtual path. If **Path** is not specified, the value of **Url** is used for the physical path. Cannot contain the following characters:</p>
<ul>
<li><p>`"`</p></li>
<li><p>`#`</p></li>
<li><p>`%`</p></li>
<li><p>`&`</p></li>
<li><p>`*`</p></li>
<li><p>`:`</p></li>
<li><p>`<`</p></li>
<li><p>`>`</p></li>
<li><p>`?`</p></li>
<li><p>`\`</p></li>
<li><p>`{`</p></li>
<li><p>`}`</p></li>
<li><p>`|`</p></li>
<li><p>`~`</p></li>
<li><p>`\x7f`</p></li>
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
<td align="left"><p><a href="alluserswebpart-element-module.md">AllUsersWebPart</a>, <a href="binaryserializedwebpart-element-module.md">BinarySerializedWebPart Element (Module)</a>, <a href="navbarpage-element-module.md">NavBarPage</a>, <a href="property-element-module.md">Property</a>, <a href="view-element-module.md">View</a>, <a href="webpartconnection-element-module.md">WebPartConnection Element (Module)</a></p></td>
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
<td align="left"><p><a href="module-element-module.md">Module</a></p></td>
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







