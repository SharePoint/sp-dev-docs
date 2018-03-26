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
ms.assetid: 68a1f7e8-480a-4a9b-8436-745b8eb87cd0
---

![Collapse
section](../icons/collapse_all.gif "Collapse section")![Expand
section](../icons/expand_all.gif "Expand section")![](../icons/collapse_all.gif)![](../icons/expand_all.gif)![](../icons/dropdown.gif)![](../icons/dropdownHover.gif)![Copy
code](../icons/copycode.gif "Copy code")![Copy code
hover](../icons/copycodeHighlight.gif "Copy code hover")
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
<td align="left"># MapToIcon Element (View)</td>
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

Returns the file name of the icon associated with a given file name
extension and **ProgID**.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;MapToIcon&gt;
    ProgID|File_Extension
&lt;/MapToIcon&gt;</code></pre></td>
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
<td align="left"><p>Numerous</p></td>
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
<p>Maximum: Unbounded</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The **MapToIcon** element uses the following
syntax, separating the **ProgID** from the file
name extension with a pipe symbol ("|"):

<span codelanguage="other"></span>
 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <MapToIcon>ProgID|File_Extension </MapToIcon>

This element can be used in any rendering scenario (for example in a
view, or as stand-alone element in a document), but it is most useful in
a view of a document library.

For example, <span class="code">\<MapToIcon\>|xls\</MapToIcon\></span>
renders the Microsoft Excel .gif file defined within the
[ByExtension](byextension-element-document-icons.htm) element of the
[DocIcon.xml](http://msdn.microsoft.com/library/ef6acad0-0a1a-457c-bc9b-ff1e368e59fb(Office.15).aspx)
file, and using <span
class="code">\<MapToIcon\>Excel.Sheet|htm\</MapToIcon\></span> renders
the Excel .gif file defined in the
[ByProgID](byprogid-element-document-icons.htm) element of
DocIcon.xml, but <span
class="code">\<MapToIcon\>CustomApp.Baz|htm\</MapToIcon\></span> would
render the generic HTML icon because the <span
class="keyword">ProgID</span>, "CustomApp.Baz," is unknown.

Note that the set of file name extensions and <span
class="keyword">ProgIDs</span> that are supported are extensible by the
system administrator. They can be edited in DocIcon.xml, and then the
image files can be included in the <span
class="code">\\TEMPLATES\\1033</span> directory. After such a
modification, Microsoft Internet Information Services (IIS) needs to be
restarted. Subsequently, any new Web sites based on Microsoft SharePoint
Foundation will support the new file types and display the correct
icons. The number of icons and **ProgIDs** that
can be supported is limited only by system resources (memory and disk
space).


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example creates the linked application icon that appears
on the toolbar in the Edit Properties view for a document library item.
The example uses the **MapToIcon** element to
construct the URL of the icon based on the file extension of the
document and the **ProgID** of the application
associated with the document.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <HTML><![CDATA[
       <a tabindex=2 class="ms-toolbar" target=_self href="javascript:" 
        onclick="javascript:editDocumentWithProgID2(' ]]>
    </HTML>
    <ScriptQuote NotAddingQuote="TRUE">
       <Field Name="ServerUrl" URLEncodeAsURL="TRUE" />
    </ScriptQuote>
    <HTML><![CDATA[ ',' ]]></HTML>
    <GetVar Name="ProgID" />
    <HTML><![CDATA[ ',' ]]></HTML>
    <GetVar Name="Editor" />
    <HTML><![CDATA[ ');javascript:return false;" ACCESSKEY=I 
       ID=diidEditItem> <IMG BORDER=0 ALT=" ]]>
    </HTML>
    <HTML>Icon</HTML>
    <HTML><![CDATA[ " SRC=" ]]></HTML>
    <ImagesPath />
    <MapToIcon>
       <Column Name="HTML_x0020_File_x0020_Type" />
       <HTML>|</HTML>
       <Column Name="File_x0020_Type" />
    </MapToIcon>
    <HTML><![CDATA[ "></a>]]></HTML>








