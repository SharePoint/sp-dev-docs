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
ms.assetid: 9ded692b-91e0-43aa-a142-12aaeeee8a90
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
<td align="left"># FieldSortParams Element (View)</td>
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

Returns the sort direction on a list, rendering <span
class="keyword">Asc</span> or **Desc** based on
whether the field has been sorted and on the current default sort
direction for the field. Rendering of this field is conditional and
depends on the current sorting URL sent in the request to the server.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><FieldSortParams
  AutoHyperLink = "TRUE" | "FALSE"
  AutoHyperLinkNoEncoding = "TRUE" | "FALSE"
  AutoNewLine = "TRUE" | "FALSE"
  Default = "Text"
..ExpandXML = "TRUE" | "FALSE"
  HTMLEncode = "TRUE" | "FALSE"
  StripWS = "TRUE" | "FALSE"
  URLEncode = "TRUE" | "FALSE"
  URLEncodeAsURL = "TRUE" | "FALSE">
</FieldSortParams></code></pre></td>
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
<td align="left"><p>Optional **Boolean</span>. **TRUE** to surround text with <A> tags if the text appears like a hyperlink (for example, www.microsoft.com).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AutoHyperLinkNoEncoding**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to surround text with <A> tags if the text appears like a hyperlink (for example, www.microsoft.com) but without HTML encoding.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AutoNewLine**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to insert <BR> tags into the text stream and to replace multiple spaces with a nonbreaking space (&amp;nbsp;).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Default**</p></td>
<td align="left"><p>Optional **Text**. Renders the text assigned to this attribute if the value returned by a selection is an empty string ("").</p></td>
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
<td align="left"><p>**StripWS**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to remove white space from the beginning and end of the value returned by the element.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**URLEncode**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to convert special characters, such as spaces, to quoted UTF-8 format (for example, %c3%ab for character ë).</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**URLEncodeAsURL**</p></td>
<td align="left"><p>Optional **Boolean</span>. Like **URLEncode</span>, but **TRUE** to specify that the string to encode is a path component of a URL so that forward slashes ("/") are not encoded.</p></td>
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


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example creates a default URL for a sort on a list. The
**FieldSortParams** element is used to return
the sort direction, which is assigned to the <span
class="keyword">SORTINGFIELDS</span> attribute in the resulting \<A\>
tag.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <Default>
       <HTML><![CDATA[<A ID="diidSort]]></HTML>
       <Property Select='Name'/>
       <HTML><![CDATA[" TITLE=]]></HTML>
       <HTML>"Sort by </HTML>
       <Property Select='DisplayName' HTMLEncode='TRUE'/>
       <HTML><![CDATA[" SORTINGFIELDS="]]></HTML>
       <FieldSortParams/>
       <HTML><![CDATA[" HREF="javascript:" 
          OnClick='javascript:SubmitFormPost("]]></HTML>
       <ScriptQuote NotAddingQuote="TRUE">
          <PageUrl/>
          <HTML><![CDATA[?]]></HTML>
          <FieldSortParams/>
       </ScriptQuote>
       <HTML><![CDATA[");javascript:return false;'>]]></HTML>
       <Property Select='DisplayName' HTMLEncode="TRUE"/>
       <HTML><![CDATA[</A><IMG SRC="]]></HTML>
       <FieldSortImageURL/>
       <HTML><![CDATA[" ALT=]]></HTML>
       <Switch>
          <Expr>
             <GetVar Name='SortDir'/>
          </Expr>
          <Case Value='Asc'>
             <HTML>"Sort Ascending"</HTML>
          </Case>
          <Case Value='Desc'>
             <HTML>"Sort Descending"</HTML>
          </Case>
          <Default>
             <HTML>""</HTML>
          </Default>
       </Switch>
       <HTML><![CDATA[ BORDER=0>]]></HTML>
    </Default>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

[FieldFilterImageURL
Element](fieldfilterimageurl-element.md)</span>

[FieldSortImageURL
Element](fieldsortimageurl-element.md)</span>








