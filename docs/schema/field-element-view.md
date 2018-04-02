---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- View schema
api_type:
- schema
ms.assetid: 491dd867-2dea-485e-a0b8-b33e53094bba
---

# Field Element (View)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Returns the formatted value of a field for use within a view definition.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><Field
  AutoHyperLink = "TRUE" | "FALSE"
  AutoHyperLinkNoEncoding = "TRUE" | "FALSE"
  AutoNewLine = "TRUE" | "FALSE"
  HTMLEncode = "TRUE" | "FALSE"
  Name = "Text"
  StripWS = "TRUE" | "FALSE"
  URLEncode = "TRUE" | "FALSE"
  URLEncodeAsURL = "TRUE" | "FALSE">
</Field></code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**AutoHyperLink**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to surround text with <A> tags if the text appears to be a hyperlink (for example, www.microsoft.com).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AutoHyperLinkNoEncoding**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to surround text with <A> tags if the text appears to be a hyperlink (for example, www.microsoft.com) but without HTML encoding.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AutoNewLine**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to insert <BR> tags into the text stream and to replace multiple spaces with a nonbreaking space (&amp;nbsp;).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**HTMLEncode**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Optional **Text</span>. Allows the **Field</span> element to be used outside the field rendering context by supplying an ID (for example, <span class="code"><Field Name="</span><span class="placeholder">ID</span><span class="code">"/>**).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**StripWS**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to remove white space from the beginning and end of the value returned by the element.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**URLEncode**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to convert special characters, such as spaces, to quoted UTF-8 format (for example, %c3%ab for character ë).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**URLEncodeAsURL**</p></td>
<td align="left"><p>Optional **Boolean</span>. Like **URLEncode</span>, but **TRUE** to specify that the string to encode is a path component of a URL so that forward slashes ("/") are not encoded.</p></td>
</tr>
</tbody>
</table>


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>None</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Numerous</p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Minimum: 0</p>
<p>Maximum: Unbounded (1 within <a href="urlbasename-element-view.md">UrlBaseName</a>)</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Use the **Field (View)** element to return a
formatted field value for display within a view, and use the
[Column](column-element-view.md) element to return the
raw data value of the field. The **Field**
element does not specify attributes when it is used within
[UrlBaseName](urlbasename-element-view.md), and only <span
class="keyword">Name</span> is specified when it is used within
[Expr1](expr1-element-view.md),
[Expr2](expr2-element-view.md), or
[Row](row-element-site.md).

To create a custom field definition as a pluggable Feature that is based
on a default SharePoint Foundation field type and that can be reused
across sites and lists, use the [Field
(Field)](field-element-field.md) element to define a
custom [site
column](http://msdn.microsoft.com/library/0402b3a7-3665-43df-9769-85e3aa1b2432(Office.15).aspx).
To create a custom field definition for a list definition based on a
default field type, use the [Field (List -
Definition)](field-element-list.md) element within a
[Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56(Office.15).aspx)
file. To create a [custom field
type](http://msdn.microsoft.com/library/1345b345-226d-443a-918f-af123a3c7b13(Office.15).aspx)
that implements a custom class for special data validation and field
rendering, use the [Field (Field
Types)](field-element-field-types.md) element.








