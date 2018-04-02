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
ms.assetid: d0f8e100-2b24-4296-bc8d-75431a8b0655
---

![Collapse
section]![Expand
section] "Expand section")![]()![])![]![]()![Copy
code] "Copy code")![Copy code
hover]
<table>
<tbody>
<tr class="odd">
<td align="left"></td>
</tr>
</tbody>
</table>

Visual Basic  
C\#  
C++  
JavaScript  

<table>
<tbody>
<tr class="odd">
<td align="left"><span id="runningHeaderText"></span></td>
</tr>
<tr class="even">
<td align="left"># DocIcons Element (Document Icons)</td>
</tr>
<tr class="odd">
<td align="left"><a href="#exampleToggle">Example</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"></td>
</tr>
</tbody>
</table>

**Last modified:** March 09, 2015

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013

Top-level element in the
[DocIcon.xml](http://msdn.microsoft.com/library/ef6acad0-0a1a-457c-bc9b-ff1e368e59fb(Office.15).aspx)
file that defines the mapping between file types and their corresponding
document library icons.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><DocIcons>
</DocIcons></code></pre></td>
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
<td align="left"><p><a href="byextension-element-document-icons.md">ByExtension</a>, <a href="byprogid-element-document-icons.md">ByProgID</a></p></td>
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
<td align="left"><p>None</p></td>
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
<p>Maximum: 1</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

In general, there are two ways that mapping can be performed: by
extension (for example, the
[ByExtension](byextension-element-document-icons.md) element can be
used to map .xls to the appropriate icon for a Microsoft Excel file) and
by ProgID.

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
<td align="left"><p>A ProgId is a registry entry that associates the program identifier (ProgID) of a COM object with its class identifier (CLSID). For example, the registry key <span class="code">HKLM\Software\Classes\Word.Document</span> has a subkey named <span class="code">CLSID</span> with a value of <span class="code">{F4754C9B-64F5-4B40-8AF4-679732AC0607}</span>. In this case, the key name <span class="code">Word.Document</span> is a ProgId, a shorthand way of saying <span class="code">{F4754C9B-64F5-4B40-8AF4-679732AC0607}</span>. For more information, see <a href="http://msdn.microsoft.com/library/f9ef2934-0815-4a6f-9283-8f748eee083b(Office.15).aspx">DOCS-LESSTHANProgIdDOCS-GREATERTHAN Key (COM)</a>.</p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example defines file icons by both <span
class="keyword">ProgIDs</span> and file extensions, but it also sets a
default icon for new documents.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <DocIcons>
      <ByProgID>
        <Mapping Key="Excel.Sheet" Value="ichtmxls.gif"/>
        <Mapping Key="PowerPoint.Slide" Value="ichtmppt.gif"/>
        <Mapping Key="Word.Document" Value="ichtmdoc.gif"/>
      </ByProgID>
      <ByExtension>
        <Mapping Key="doc" Value="icdoc.gif"/>
        <Mapping Key="gif" Value="icgif.gif"/>
        <Mapping Key="htm" Value="ichtm.gif"/>
        <Mapping Key="html" Value="ichtm.gif"/>
        <Mapping Key="ppt" Value="icppt.gif"/>
      </ByExtension>
      <Default>
        <Mapping Value="icgen.gif"/>
      </Default>
    </DocIcons>








