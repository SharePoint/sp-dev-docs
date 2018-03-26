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
ms.assetid: c01137cb-20ca-4574-b843-31d046388897
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
<td align="left"># Property Element (View)</td>
</tr>
<tr class="odd">
<td align="left"><a href="#exampleToggle">Example</a>  <a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

Returns the property from the context of the current
[ForEach](foreach-element-view.htm) loop. When a view or
field is selected, the **Property** element can
be used to retrieve a specific attribute value from it.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Property
  AutoHyperLink = &quot;TRUE&quot; | &quot;FALSE&quot;
  AutoHyperLinkNoEncoding = &quot;TRUE&quot; | &quot;FALSE&quot;
  AutoNewLine = &quot;TRUE&quot; | &quot;FALSE&quot;
  Default = &quot;Text&quot;
..ExpandXML = &quot;TRUE&quot; | &quot;FALSE&quot;
  HTMLEncode = &quot;TRUE&quot; | &quot;FALSE&quot;
  Name = &quot;Text&quot;
  OuterLookupField = &quot;TRUE&quot; | &quot;FALSE&quot;
  Select = &quot;Text&quot;
  StripWS = &quot;TRUE&quot; | &quot;FALSE&quot;
  URLEncode = &quot;TRUE&quot; | &quot;FALSE&quot;
  URLEncodeAsURL = &quot;TRUE&quot; | &quot;FALSE&quot;&gt;
&lt;/Property&gt;</code></pre></td>
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
<td align="left"><p>**ExpandXML**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to re-pass the rendered content through the Collaborative Application Markup Language (CAML) interpreter, which allows CAML to render CAML.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**HTMLEncode**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Optional **Text**. Specifies the name of the property.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**OuterLookupField**</p></td>
<td align="left"><p>Optional **Text**. Used in field definitions</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Select**</p></td>
<td align="left"><p>Required **Text**. Specifies the name of the property to select.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**StripWS**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to remove white space from the beginning and end of the value returned by the element.</p></td>
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
<p>Maximum: Unbounded</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The line <span class="code">\<Property Select="."/\></span> returns the
body of the element in the schema that is being enumerated. For example,
within a **ForEach** statement such as <span
class="code">\<ForEach Select="CHOICES/CHOICE"\></span>, specifying
<span class="code">\<Property Select="."/\></span> would return the text
of one of the conditionals.

If a property cannot be found, a subelement of the current element in
the schema enumeration is evaluated whose name is equal to the text
specified by **Select**. For example, if a
**Field** element has no property called <span
class="keyword">Default</span>, then <span class="code">\<Property
Select="Default"/\></span> will also search for a subelement called
**Default** and render its body text if found.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following line of code returns the **Name**
property from the current field or view.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <Property Select="Name"/>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

<span sdata="link">[ListProperty Element
(View)](listproperty-element-view.htm)</span>

<span sdata="link">[ProjectProperty Element
(View)](projectproperty-element-view.htm)</span>








