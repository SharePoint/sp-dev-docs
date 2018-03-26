---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: b280a03d-dfdc-4d29-98b0-3e4bcb0f8231
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
<td align="left"># Mapping Element</td>
</tr>
<tr class="odd">
<td align="left"><span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

***Applies to:** SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013*

Used in an HtmlTransInfo.xml file (<span class="code">\\Program
Files\\Common Files\\Microsoft Shared\\web server
extensions\\12TEMPLATE\\XML</span>) to direct requests to the URL for
handling the requests when the client computer does not have the 2007
Microsoft Office system installed.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Mapping
  AcceptHeader = &quot;Text&quot;
  Extension = &quot;Text&quot;
  HandlerUrl = &quot;Text&quot;
  ProgId = &quot;Text&quot;&gt;
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
<td align="left"><p>**AcceptHeader **</p></td>
<td align="left"><p>Optional **Text**. Specifies the application to use to open a file in a document library. If HTML viewing is enabled, Microsoft SharePoint Foundation compares the value of this attribute with the Accept-Header HTTP header of the request, and either opens the document in its native format through the specified application, or offers to convert the document to HTML. For more information, see <a href="http://msdn.microsoft.com/library/ed3b5457-0dbd-49f7-b60e-545b44d4a2b2(Office.15).aspx">Programming with the Microsoft.HtmlTrans Namespace</a>.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Extension**</p></td>
<td align="left"><p>Optional **Text**. Specifies the file name extension for the document type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**HandlerUrl**</p></td>
<td align="left"><p>Optional **Text**. Specifies the URL of a converter program used by the server to handle a request when the client computer does not have Microsoft Office system installed.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ProgId**</p></td>
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
<td align="left"><p><a href="htmltrinfo-element.htm">HtmlTrInfo</a></p></td>
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








