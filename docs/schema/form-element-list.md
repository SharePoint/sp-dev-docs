---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- List schema
api_type:
- schema
ms.assetid: e91480cc-5dfd-4626-a73f-e4c6d5e2d6a1
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
<td align="left"># Form Element (List)</td>
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

Describes the forms in a base list type.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Form  Default = &quot;TRUE&quot; | &quot;FALSE&quot;  MobileUrl = &quot;Text&quot;
  Path = &quot;Text&quot;
  SetupPath = &quot;Text&quot;
  Template = &quot;Text&quot;
  Type = &quot;DisplayForm&quot; | &quot;EditForm&quot; | &quot;NewForm&quot;
  Url = &quot;URL&quot;  UseDefaultListFormWebPart = &quot;TRUE&quot; | &quot;FALSE&quot;
  UseLegacyForm = &quot;TRUE&quot; | &quot;FALSE&quot;
  WebPartZoneID = &quot;Text&quot;&gt;  &lt;WebParts&gt;    &lt;AllUsersWebPart      WebPartOrder = Integer      WebPartZoneID = &quot;Text&quot;&gt;        &lt;![CDATA[...]]&gt;    &lt;/AllUsersWebPart&gt;  &lt;/WebParts&gt;
&lt;/Form&gt;</code></pre></td>
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
<td align="left"><p>**Default**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies whether the form is the default form to use for the specified **Type</span>. For example, one can define multiple forms for which **Type</span> equals **DisplayForm</span>. If this is the case, then a default display form must be established so that a list can determine which display form to use. If multiple forms are defined that have the same **Type</span>, and a default form is not established by specifying **Default=&quot;TRUE&quot;</span>, then a default form will be chosen programmatically. If there is only one form that is defined for a specified **Type</span>, then **Default=&quot;TRUE&quot;** is enforced programmatically.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**MobileUrl**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Path**</p></td>
<td align="left"><p>Optional **Text**. Specifies the file system path, including the leaf name, of the file containing the template used for the list of document libraries that is rendered in a file dialog box. The value of this attribute is relative to the _layouts directory and does not start with a forward slash (&quot;/&quot;).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SetupPath**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the relative path to the folder in the setup directory that contains the .aspx page of the form, for example, <span class="code">pages/form.aspx**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Template**</p></td>
<td align="left"><p>Optional **Text**. Specifies the list template to which the form belongs.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Required **Text</span>. Indicates the type of form being described and can be one of the following values: **DisplayForm</span>, **EditForm</span>, or **NewForm**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Url**</p></td>
<td align="left"><p>Required **URL**. Specifies the path to the ASP.NET file used for the form.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**UseDefaultListFormWebPart**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies whether a ListFormWebPart should be created when the form is provisioned. By default, a <span sdata="cer" target="T:Microsoft.SharePoint.WebPartPages.ListFormWebPart"><span class="nolink">ListFormWebPart</span></span> object is created unless this attribute is set to **FALSE</span>. If this attribute equals **FALSE**, use the <a href="webparts-element-list.md">WebParts</a> child element to define your customized list form Web Part.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**UseLegacyForm**</p></td>
<td align="left"><p>Optional **Boolean**. Used during upgrade to specify that Microsoft SharePoint Foundation use Collaborative Application Markup Language (CAML), as in previous versions of the technology, instead of Web controls, to define the view of an item within a form.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**WebPartZoneID **</p></td>
<td align="left"><p>Optional **Text**. Specifies the zone for the Web Part.</p></td>
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
<td align="left"><p><a href="listformbody-element-list.md">ListFormBody</a>, <a href="listformbuttons-element-list.md">ListFormButtons</a>, <a href="listformclosing-element-list.md">ListFormClosing</a>, <a href="listformopening-element-list.md">ListFormOpening</a>, <a href="webparts-element-list.md">WebParts</a></p></td>
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
<td align="left"><p><a href="forms-element-list.md">Forms</a></p></td>
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

The following example shows the form definitions that are specified in
the
[Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56(Office.15).aspx)
file for Announcements lists.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <Forms>
          <Form Type="DisplayForm" Url="DispForm.aspx" SetupPath="pages\form.aspx" WebPartZoneID="Main" />
          <Form Type="EditForm" Url="EditForm.aspx" SetupPath="pages\form.aspx" WebPartZoneID="Main" />
          <Form Type="NewForm" Url="NewForm.aspx" SetupPath="pages\form.aspx" WebPartZoneID="Main" />
        </Forms>








