---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
api_name:
- Site schema
api_type:
- schema
ms.assetid: 8aeb55e1-2661-400d-a2d8-036c08fe9f30
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
<td align="left"># List Element (Site)</td>
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

Specifies a list instance to include in sites created through a site
definition configuration or Web template configuration.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;List
  CustomSchema = &quot;Text&quot;
  Description = &quot;Text&quot;
  EmailAlias = &quot;Text&quot;
  EnableContentTypes = &quot;TRUE&quot; | &quot;FALSE&quot;
  EnableMinorVersions = &quot;TRUE&quot; | &quot;FALSE&quot;
  FeatureId = &quot;GUID&quot;
  ForceCheckout = &quot;TRUE&quot; | &quot;FALSE&quot;  HyperlinkBaseUrl = Text
  QuickLaunchUrl = Text
  RootWebOnly = &quot;TRUE&quot; | &quot;FALSE&quot;
  Title = &quot;Text&quot;
  Type = Integer
  Url = &quot;Text&quot;
  VersioningEnabled = &quot;TRUE&quot; | &quot;FALSE&quot;&gt;
&lt;/List&gt;</code></pre></td>
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
<td align="left"><p>**CustomSchema**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional **Text**. Provides a description for the list. This attribute must be specified within a configuration in an <a href="http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx">Onet.xml</a> file when you are adding a custom list definition to a site definition. The value of this attribute overrides the value contained with the <a href="defaultdescription-element-list.htm">DefaultDescription</a> element of a <a href="http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56(Office.15).aspx">Schema.xml</a> file.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EmailAlias**</p></td>
<td align="left"><p>Optional **Text**. If e-mail notification is enabled, specifies the e-mail address to use to notify to the owner of an item when an assignment has changed or the item has been updated.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EnableContentTypes**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to enable management of content types in lists created through the list definition.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EnableMinorVersions**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to enable minor versions for items in the list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FeatureId**</p></td>
<td align="left"><p>Optional **GUID**. Specifies the GUID of a Feature to associate with the list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ForceCheckout**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to require that documents be checked out from the document library in order to be edited.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**HyperlinkBaseUrl**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**QuickLaunchUrl**</p></td>
<td align="left"><p>Optional **Text**. Specifies the URL of the view page to open for the list through Quick Launch navigation.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RootWebOnly**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to specify that the list created from the definition exists only in the root Web site of a site collection.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>Required **Text**. The generic display name of the list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the list template type of the list. The following values are the default list template types.</p>
<ul>
<li><p>**100**   Generic list</p></li>
<li><p>**101**   Document library</p></li>
<li><p>**102**   Survey</p></li>
<li><p>**103**   Links list</p></li>
<li><p>**104**   Announcements list</p></li>
<li><p>**105**   Contacts list</p></li>
<li><p>**106**   Events list</p></li>
<li><p>**107**   Tasks list</p></li>
<li><p>**108**   Discussion board</p></li>
<li><p>**109**   Picture library</p></li>
<li><p>**110**   Data sources</p></li>
<li><p>**111**   Site template gallery</p></li>
<li><p>**112**   User Information list</p></li>
<li><p>**113**   Web Part gallery</p></li>
<li><p>**114**   List template gallery</p></li>
<li><p>**115**   XML Form library</p></li>
<li><p>**116**   Master pages gallery</p></li>
<li><p>**117**   No-Code Workflows</p></li>
<li><p>**118**   Custom Workflow Process</p></li>
<li><p>**119**   Wiki Page library</p></li>
<li><p>**120**   Custom grid for a list</p></li>
<li><p>**130**   Data Connection library</p></li>
<li><p>**140**   Workflow History</p></li>
<li><p>**150**   Gantt Tasks list</p></li>
<li><p>**200**   Meeting Series list</p></li>
<li><p>**201**   Meeting Agenda list</p></li>
<li><p>**202**   Meeting Attendees list</p></li>
<li><p>**204**   Meeting Decisions list</p></li>
<li><p>**207**   Meeting Objectives list</p></li>
<li><p>**210**   Meeting text box</p></li>
<li><p>**211**   Meeting Things To Bring list</p></li>
<li><p>**212**   Meeting Workspace Pages list</p></li>
<li><p>**301**   Blog Posts list</p></li>
<li><p>**302**   Blog Comments list</p></li>
<li><p>**303**   Blog Categories list</p></li>
<li><p>**1100**   Issue tracking</p></li>
<li><p>**1200**   Administrator tasks list</p></li>
</ul>
<p></p>
<p>This attribute corresponds to the **Type** attribute of the <a href="listtemplate-element-site.htm">ListTemplate</a> element.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Url**</p></td>
<td align="left"><p>Optional **Text**.</p>
<p>Specifies the path to the root of the directory that contains the ASPX files to which the list definition applies, relative to the root URL of the Web site.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**VersioningEnabled**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify within a <a href="http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56(Office.15).aspx">Schema.xml</a> file that versioning is enabled by default for document libraries that are created through the list definition. Setting this attribute has no effect on existing document libraries. If <span class="keyword">TRUE**, versioning can still be disabled for a document library on the New Document Library page when the library is being created.</p></td>
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
<td align="left"><p><a href="data-element-site.htm">Data</a></p></td>
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
<td align="left"><p><a href="globallists-element.htm">GlobalLists</a>, <a href="lists-element-site.htm">Lists</a></p></td>
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








