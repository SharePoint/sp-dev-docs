---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Document Icons schema
api_type:
- schema
ms.assetid: dc0afe03-3169-4ad0-8f0a-26206f0002f0
---

# ByProgID Element (Document Icons)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Defines icons for documents according to their programmatic identifiers.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><ByProgID>
</ByProgID></code></pre></td>
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
<td align="left"><p>None</p></td>
<td align="left"><p>N/A</p></td>
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
<td align="left"><p><a href="mapping-element.md">Mapping</a></p></td>
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
<td align="left"><p><a href="docicons-element-document-icons.md">DocIcons</a></p></td>
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
<p>Maximum: Unbounded</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This element is used in the
[DocIcon.xml](http://msdn.microsoft.com/library/ef6acad0-0a1a-457c-bc9b-ff1e368e59fb(Office.15).aspx)
file to drive mapping between **ProgIDs** and
their corresponding document library icons.

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="" title="Note" alt="Note" /><strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>A ProgId is a registry entry that associates the program identifier (ProgID) of a COM object with its class identifier (CLSID). For example, the registry key <span class="code">HKLM\Software\Classes\Word.Document</span> has a subkey named <span class="code">CLSID</span> with a value of <span class="code">{F4754C9B-64F5-4B40-8AF4-679732AC0607}</span>. In this case, the key name <span class="code">Word.Document</span> is a ProgId, a shorthand way of saying <span class="code">{F4754C9B-64F5-4B40-8AF4-679732AC0607}</span>. For more information, see <a href="http://msdn.microsoft.com/library/f9ef2934-0815-4a6f-9283-8f748eee083b(Office.15).aspx">ProgId Key (COM)</a>.</p></td>
</tr>
</tbody>
</table>

For example, an HTML document that contains <span class="code">\<META
Name="ProgId" Content="Word.Document"\></span> would map to the icon
that is specified for the ProgId "Word.Document" by a
[Mapping](mapping-element-document-icons.md) element inside the
[ByProgID](byprogid-element-document-icons.md) element.

<span codelanguage="other"></span>
 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <ByProgID>
        <Mapping Key="Word.Document" Value="ichtmdoc.gif"/>
    </ByProgID>

For more information, see [DocIcons Element (Document
Icons)](docicons-element-document-icons.md)</span> for an extended
example that shows how to use the **ByProgID**
element.








