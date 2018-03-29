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
ms.assetid: 2d716503-4843-4f8c-86d6-392707ce9095
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
<td align="left"># Batch Element (View)</td>
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

Provides batch processing of commands within HTTP protocol.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Batch
  OnError = &quot;Return&quot; | &quot;Continue&quot;
  ListVersion = &quot;&quot;
  Version = &quot;&quot;
  ViewName = &quot;&quot;&gt;
  &lt;Method&gt;
  ...
  &lt;/Method&gt;
  ...
&lt;/Batch&gt;</code></pre></td>
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
<td align="left"><p>**ListVersion**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the version number of the list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**OnError**</p></td>
<td align="left"><p>Optional. The following values are possible:</p>
<ul>
<li><p>**Return** — Stops execution of any more methods after the first error is encountered. This is the default.</p></li>
<li><p>**Continue** — After an error is encountered, continues executing subsequent methods.</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**Version**</p></td>
<td align="left"><p>Optional **String</span>. Specifies the version number of Microsoft SharePoint Foundation that is running on the server. A version number consists of four integers in the format <span class="placeholder">N.N.N.NNNN**, which represent the major, minor, phase, and incremental versions of the product.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ViewName**</p></td>
<td align="left"><p>Optional **Guid**. Specifies the GUID for the view.</p></td>
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
<td align="left"><p><a href="method-element-view.md">Method</a></p></td>
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

The **Batch** element must contain at least one
[Method](method-element-view.md) element. The <span
class="keyword">Batch</span> element allows the client application to
post more than one command to the server at a time.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following code example, if contained within HTTP protocol, would
return a list named "Documents" from the server.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <?xml version="1.0" encoding="UTF-8"?>
    <ows:Batch Version="6.0.2.5608" OnError="Return">
      <Method ID="0,ExportList">
        <SetList Scope="Request">Documents</SetList>
        <SetVar Name="Cmd">ExportList</SetVar>
      </Method> 
    </ows:Batch>








