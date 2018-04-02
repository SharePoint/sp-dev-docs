---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Query schema
api_type:
- schema
ms.assetid: 43b14808-e65a-402a-8fd4-fb3dc133ea34
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
<td align="left"># ListProperty Element (Query)</td>
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

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013

Returns the value of a specified column in the List of Lists table.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><ListProperty
  AutoHyperLink = "TRUE" | "FALSE"
  AutoHyperLinkNoEncoding = "TRUE" | "FALSE"
  AutoNewLine = "TRUE" | "FALSE"
  Default = "Text"
  ExpandXML = "TRUE" | "FALSE"
  HTMLEncode = "TRUE" | "FALSE"
  Select = "Text"
  StripWS = "TRUE" | "FALSE"
  URLEncode = "TRUE" | "FALSE"
  URLEncodeAsURL = "TRUE" | "FALSE">
</ListProperty></code></pre></td>
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
<td align="left"><p>Optional **Boolean</span>. **TRUE</span> to surround text with **DOCS-LESSTHANADOCS-GREATERTHAN** tags if the text appears like a hyperlink, for example, www.microsoft.com.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AutoHyperLinkNoEncoding**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to surround text with <A> tags if the text appears like a hyperlink (for example, www.microsoft.com) but without HTML encoding.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AutoNewLine**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE</span> to insert **DOCS-LESSTHANBRDOCS-GREATERTHAN** tags into the text stream and to replace multiple spaces with a nonbreaking space (&amp;nbsp;).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Default**</p></td>
<td align="left"><p>Optional **Text</span>. Sets the default **ProgID** for the application that created the list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ExpandXML**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to re-pass the rendered content through the Collaborative Application Markup Language (CAML) interpreter, which allows CAML to render CAML.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**HTMLEncode**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Select**</p></td>
<td align="left"><p>Required **Text**. Specifies a field in the List of Lists table.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**StripWS**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to remove white space from the beginning and end of the value returned by the element.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**URLEncode**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to convert special characters, such as spaces, to quoted UTF-8 format, for example, %c3%ab for character ë.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**URLEncodeAsURL**</p></td>
<td align="left"><p>Optional **Boolean</span>. Like **URLEncode</span>, but **TRUE</span> to specify that the string to encode is a path component of a URL and not to encode the forward slash (**/**).</p></td>
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
<td align="left"><p><a href="value-element-query.md">Value</a></p></td>
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








