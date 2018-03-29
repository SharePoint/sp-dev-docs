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
ms.assetid: 238311d9-6dc4-4864-a3a9-120475f3de20
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
<td align="left"># Mapping Element (Document Icons)</td>
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

Used in the
[DocIcon.xml](http://msdn.microsoft.com/library/ef6acad0-0a1a-457c-bc9b-ff1e368e59fb(Office.15).aspx)
file to map particular document types to their respective icons.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Mapping
  Key = &quot;Text&quot;
  Value = &quot;Text&quot;&gt;
  EditText = &quot;Text&quot;
  OpenControl = &quot;Text&quot;
&lt;/Mapping&gt;</code></pre></td>
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
<td align="left"><p>**Key**</p></td>
<td align="left"><p>Required **Text</span>. Specifies either a **ProgID** or a file name extension.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Value **</p></td>
<td align="left"><p>Required **Text**. Specifies the image file name and extension. The file must exist in the %ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\TEMPLATE\IMAGES folder.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EditText**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies text that displays in drop-down menus as the editing item (&quot;Edit in <span class="placeholder">Application Name**&quot;) for a file that has been uploaded to a list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**OpenControl**</p></td>
<td align="left"><p>Optional **Text**. Specifies the name of the ActiveX control used to open the type of document.</p></td>
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
<td align="left"><p><a href="byextension-element-document-icons.md">ByExtension</a>, <a href="byprogid-element-document-icons.md">ByProgID</a></p></td>
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


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example maps **ProgIDs** and file
name extensions as follows:

-   For different values of the **ProgID**
    \<META\> tag, it maps **ProgIDs** to the
    icons representing the applications. For example, "Excel.Sheet" maps
    to ichtmxls.gif.

-   It maps file name extensions to appropriate icons. For example,
    "docx" maps to icdocx.png.

-   If neither of the above causes a match, it provides a default value,
    icgen.gif, for the mapping.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <DocIcons>
      <ByProgID>
        <Mapping Key="Excel.Sheet" Value="ichtmxls.gif" EditText="Microsoft Excel" OpenControl="SharePoint.OpenDocuments" />
        <Mapping Key="PowerPoint.Slide" Value="ichtmppt.gif" EditText="Microsoft PowerPoint" OpenControl="SharePoint.OpenDocuments" />
        <Mapping Key="Word.Document" Value="ichtmdoc.gif" EditText="Microsoft Word" OpenControl="SharePoint.OpenDocuments"/>
      </ByProgID>
      <ByExtension>
        <Mapping Key="docx" Value="icdocx.png" EditText="Microsoft Word" OpenControl="SharePoint.OpenDocuments"/>
        <Mapping Key="pptx" Value="icpptx.png" EditText="Microsoft PowerPoint" OpenControl="SharePoint.OpenDocuments"/>
        <Mapping Key="xlsx" Value="icxlsx.png" EditText="Microsoft Excel" OpenControl="SharePoint.OpenDocuments"/>
        <Mapping Key="zip" Value="iczip.gif" OpenControl=""/>
      </ByExtension>
      <Default>
        <Mapping Value="icgen.gif"/>
      </Default>
    </DocIcons>








