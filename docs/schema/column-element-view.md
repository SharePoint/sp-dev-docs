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
ms.assetid: 577395b8-0a8d-4317-85cf-b0f674c93b92
---

![Collapse
section]![Expand
section] "Expand section")![]()![])![]![]()![Copy
code] "Copy code")![Copy code
hover]( "Copy code hover")
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
<td align="left"># Column Element (View)</td>
</tr>
<tr class="odd">
<td align="left"><a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

Returns the raw data value for a particular field, as opposed to the
formatted version provided by the
[Field](field-element-view.md) element. In the case
of a **Lookup** field, <span
class="keyword">Column</span> returns the local value (an ID number in
the list that references another list), while the
[LookupColumn](lookupcolumn-element-view.md) element returns
the data from the foreign table.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Column
  AutoHyperLink = &quot;TRUE&quot; | &quot;FALSE&quot;
  AutoHyperLinkNoEncoding = &quot;TRUE&quot; | &quot;FALSE&quot;
  AutoNewLine = &quot;TRUE&quot; | &quot;FALSE&quot;
    Default = &quot;Text&quot;
  Format=&quot;DateTime&quot;
    HTMLEncode = &quot;TRUE&quot; | &quot;FALSE&quot;
    Name = &quot;Text&quot;
    ShowField = &quot;Text&quot; 
    StripWS = &quot;TRUE&quot; | &quot;FALSE&quot;
  SubColumnNumber = Integer
    URLEncode = &quot;TRUE&quot; | &quot;FALSE&quot;
    URLEncodeAsURL = &quot;TRUE&quot; | &quot;FALSE&quot;&gt;
&lt;/Column&gt;</code></pre></td>
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
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to surround text with &lt;A&gt; tags if the text appears like a hyperlink (for example, www.microsoft.com).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AutoHyperLinkNoEncoding**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to surround text with &lt;A&gt; tags if the text appears like a hyperlink (for example, www.microsoft.com) but without HTML encoding.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AutoNewLine**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to insert &lt;BR&gt; tags into the text stream and to replace multiple spaces with a nonbreaking space (&amp;nbsp;).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Default**</p></td>
<td align="left"><p>Optional **Text**. Renders the text assigned to this attribute if the value returned by a selection is an empty string (&quot;&quot;).</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Format**</p></td>
<td align="left"><p>Optional **Text</span>. Controls the date formatting for date fields. Supported formats include <span class="keyword">DateTime</span>, <span class="keyword">DateOnly</span>, <span class="keyword">TimeOnly</span>, <span class="keyword">ISO8601</span>, <span class="keyword">ISO8601Basic</span>, and <span class="keyword">ISO8601Gregorian**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**HTMLEncode**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Optional **Text</span>. Allows the <span class="keyword">Column</span> element to be used outside the field rendering context by supplying an ID (for example, <span class="code">&lt;Column Name=&quot;</span><span class="placeholder">ID</span><span class="code">&quot;/&gt;**).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowField**</p></td>
<td align="left"><p>Optional **Text</span>. The <span class="keyword">ShowField</span> attribute can be set to the column name to display. By default, a hyperlinked text from the <span class="keyword">Title</span> column of the record in the external list is displayed. But the <span class="keyword">ShowField** attribute can be used to override that and display another field from the external list.</p>
<p>The following data types are allowed as targets of a **ShowField</span> attribute: <span class="keyword">Text</span>, <span class="keyword">Choice</span>, and <span class="keyword">Counter**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**StripWS**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to remove white space from the beginning and end of the value returned by the element.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SubColumnNumber**</p></td>
<td align="left"><p>Optional **Integer**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**URLEncode**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to convert special characters, such as spaces, to quoted UTF-8 format (for example, %c3%ab for character ë).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**URLEncodeAsURL**</p></td>
<td align="left"><p>Optional **Boolean</span>. Like <span class="keyword">URLEncode</span>, but <span class="keyword">TRUE** to specify that the string to encode is a path component of a URL so that forward slashes (&quot;/&quot;) are not encoded.</p></td>
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
<p>Maximum: Unbounded (1 within <a href="limit-element-view.md">Limit</a>)</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Note that when an empty **Column** element
(<span class="code">\<Column/\>)</span> is used, it is sensitive to the
current setting of the <span class="code">DisplayMode</span> variable.
The display mode is set implicitly according to the current command
being used. If a view or item is being displayed, <span
class="code">DisplayMode</span> is set to <span
class="keyword">Display</span>. If an item is being created from a form,
<span class="code">DisplayMode</span> is set to <span
class="keyword">New</span>. If an existing item is being edited, <span
class="code">DisplayMode</span> is set to <span
class="keyword">Edit</span>. The <span class="code">DisplayMode</span>
variable can be overridden in the page by setting it directly, for
example, <span class="code">\<SetVar
Name="DisplayMode"\>Edit\</SetVar\></span>.

Using <span class="code">\<Column/\></span> to render a date field or a
number field will render the data in the locale of the server because
<span class="code">\<Column/\></span> renders numeric values according
to the locale-specific rules of the server.


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[Column2 Element
(View)](column2-element-view.md)</span>

[Field Element
(View)](field-element-view.md)</span>

[LookupColumn Element
(View)](lookupcolumn-element-view.md)</span>








