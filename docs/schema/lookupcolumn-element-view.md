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
ms.assetid: b0174c70-04ea-43ea-b4e7-ce584d2a6ab0
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
<td align="left"># LookupColumn Element (View)</td>
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

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013

Functions similarly to the
[Column](column-element-view.md) element but only
valid when referring to a **Lookup** field. The
only distinction between the **Column** and
**LookupColumn** elements for <span
class="keyword">Lookup</span> fields is that <span
class="keyword">LookupColumn</span> retrieves the raw value of the
column from the foreign list, while **Column**
retrieves the raw value of the column in the local list.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;LookupColumn
    HTMLEncode = &quot;TRUE&quot; | &quot;FALSE&quot;    IncludeVersions = &quot;TRUE&quot; | &quot;FALSE&quot; 
    Name = &quot;Text&quot;
    ShowField = &quot;Text&quot;
    StripWS = &quot;TRUE&quot; | &quot;FALSE&quot;
    URLEncode = &quot;TRUE&quot; | &quot;FALSE&quot;
    URLEncodeAsURL = &quot;TRUE&quot; | &quot;FALSE&quot;&gt;
&lt;/LookupColumn&gt;</code></pre></td>
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
<td align="left"><p>**HTMLEncode**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to convert embedded characters so that they are displayed as text in the browser. In other words, characters that could be confused with HTML tags are converted to entities.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IncludeVersions**</p></td>
<td align="left"><p>Optional **Boolean**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required **Text</span>. Specifies the name of the lookup column. Allows the <span class="keyword">LookupColumn** element to be used outside the field rendering context by supplying an ID.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowField**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the field to be displayed in the list that is referenced through the <span class="keyword">Lookup</span> field. If this attribute is not specified, the default is to display the value contained in the <span class="keyword">Title** field.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**StripWS**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to remove white space from the beginning and end of the value returned by the element.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**URLEncode**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to convert special characters, such as spaces, to quoted UTF-8 format, for example, %c3%ab for character ë.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**URLEncodeAsURL**</p></td>
<td align="left"><p>Optional **Boolean</span>. Like <span class="keyword">URLEncode</span>, but <span class="keyword">TRUE** to specify that the string to encode is a path component of a URL and not to encode the forward slash (&quot;/&quot;).</p></td>
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
<p>Maximum: Unbounded (1 within <a href="expr1-element-view.htm">Expr1</a>, <a href="expr2-element-view.htm">Expr2</a>, and <a href="urlbasename-element-view.htm">UrlBaseName</a>)</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

In the case of a **Lookup** field called
LookupTitle that points to the title of item 1 in an announcements list,
<span class="code">\<LookupColumn Name="LookupTitle"/\></span> would
render "Get Started with SharePoint Foundation!" while <span
class="code">\<Column Name="LookupTitle"/\></span> would render "1".
Consequently, in most situations involving <span
class="keyword">Lookup</span> fields, use the <span
class="keyword">LookupColumn</span> element instead of the
[Column](column-element-view.md) element. The only
time to use the **Column** element is when you
need a raw reference to the ID of the item in the target list, perhaps
for constructing your own link to the target item.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example uses the **LookupColumn**
element to return a value that is used in creating a complete URL for a
page on the server.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <HTML><![CDATA[ <a href="  ]]></HTML>
    <HttpHost URLEncodeAsURL="TRUE" />
    <LookupColumn URLEncodeAsURL="TRUE" />
    <HTML><![CDATA[ ">  ]]></HTML>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[Column Element
(View)](column-element-view.md)</span>








