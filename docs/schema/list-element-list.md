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
ms.assetid: b2b26fee-eb45-48ac-99f1-65f725da293f
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
<td align="left"># List Element (List)</td>
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

Top-level element that contains the definition of a list.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;List
  BaseType = &quot;Integer&quot; | &quot;Text&quot;
  Default = &quot;TRUE&quot; | &quot;FALSE&quot;
  DefaultItemOpen = &quot;Integer&quot;
  Description = &quot;Text&quot;
  Direction = &quot;Text&quot;
  DisableAttachments = &quot;TRUE&quot; | &quot;FALSE&quot;
  DraftVersionVisibility = &quot;Integer&quot;
  EnableContentTypes = &quot;TRUE&quot; | &quot;FALSE&quot;  EnableMinorVersions = &quot;TRUE&quot; | &quot;FALSE&quot;  EnableThumbnails = &quot;TRUE&quot; | &quot;FALSE&quot;
  EventSinkAssembly = &quot;Text&quot;
  EventSinkClass = &quot;Text&quot;
  EventSinkData = &quot;Text&quot;
  FolderCreation = &quot;TRUE&quot; | &quot;FALSE&quot;
  Id = &quot;GUID&quot;
  ModeratedList = &quot;TRUE&quot; | &quot;FALSE&quot;
  ModerationType = &quot;TRUE&quot; | &quot;FALSE&quot;
  Name = &quot;Text&quot;
  OrderedList = &quot;TRUE&quot; | &quot;FALSE&quot;
  PrivateList = &quot;TRUE&quot; | &quot;FALSE&quot;
  QuickLaunchUrl = &quot;URL&quot;
  RootWebOnly = &quot;TRUE&quot; | &quot;FALSE&quot;
  ThumbnailSize = &quot;Integer&quot;
  Title = &quot;Text&quot;
  Type = &quot;Integer&quot;
  Url = &quot;URL&quot;
  URLEncode = &quot;TRUE&quot; | &quot;FALSE&quot;
  VersioningEnabled = &quot;TRUE&quot; | &quot;FALSE&quot; 
  WebImageHeight = &quot;Integer&quot;
  WebImageWidth = &quot;Integer&quot;&gt;
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
<td align="left"><p>**BaseType**</p></td>
<td align="left"><p>Optional **Text</span>. The <span class="keyword">BaseType</span> attribute can be set to <span class="keyword">Integer</span>, which stores values as integers, or to <span class="keyword">Text** (default), which stores values as text. Note that it is not possible to create integer base-type choice fields.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Default**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to specify that the list referenced in the <a href="http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx">Onet.xml</a> file be created whenever a site is created. Otherwise, the list will not be created during site creation but will be available for later instantiation.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DefaultItemOpen**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">1</span> to specify that applications which generate server transformations of items in the list open the items in a browser rather than in a separate client-side application; otherwise, <span class="keyword">0**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional **Text**. Provides a description for the list. This attribute must be specified within a configuration in an <a href="http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx">Onet.xml</a> file when adding a custom list definition to a site definition. The value of this attribute overrides the value contained with the <a href="defaultdescription-element-list.htm">DefaultDescription</a> element of a <a href="http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56(Office.15).aspx">Schema.xml</a> file.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Direction**</p></td>
<td align="left"><p>Required **Text</span>. Specifies the direction of the reading order for the list. Possible values include <span class="keyword">RTL</span> (right-to-left), <span class="keyword">LTR</span> (left-to-right), or <span class="keyword">none**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisableAttachments**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to disable attachments in the list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DraftVersionVisibility**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the rights that are required to see drafts. The following values are possible:</p>
<ul>
<li><p>**1**   Edit rights</p></li>
<li><p>**2**   Approval rights</p></li>
<li><p>All other values   Read rights</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**EnableContentTypes**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to enable management of content types in lists created through the list definition.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EnableMinorVersions**</p></td>
<td align="left"><p>Optional **Boolean**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EnableThumbnails**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to specify that document parsers in this list generate thumbnail files that correspond to documents that are saved to this list. This attribute only applies to document libraries.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EventSinkAssembly**</p></td>
<td align="left"><p>Optional **Text</span>. This option is specified only for schemas upgraded from Windows SharePoint Services 2.0. Specifies the strong name of a file in the Global Assembly Cache (GAC) that provides an event handler for document library events. For example, <span class="code">Microsoft.SharePoint, Version=11.0.0.0, Culture=Neutral, PublicKeyToken=71e9bce111e9429c** This attribute has been deprecated in SharePoint Foundation.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EventSinkClass**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the fully qualified, case-sensitive name of a class that defines an event handler for document library events in the form <span class="placeholder">Namespace_Name.Class_Name**. This attribute has been deprecated in SharePoint Foundation.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EventSinkData**</p></td>
<td align="left"><p>Optional **Text**. Contains an arbitrary string for use by an event handler for document library events. This attribute has been deprecated in SharePoint Foundation.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FolderCreation**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to display the <span class="ui">New Folder</span> command on the <span class="ui">New** menu.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Optional **GUID**. Specifies the GUID of the list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ModeratedList**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to require content approval for submitted items.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ModerationType**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to specify that the list has moderation enabled, requiring an approval process when content is created or modified.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required **Text**. The internal name of a list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**OrderedList**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to specify that the option to allow users to reorder items in the list is available on the Edit View page for the list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PrivateList**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to specify that the list is private.</p></td>
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
<td align="left"><p>**ThumbnailSize**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the width of thumbnails to display in picture libraries.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>Required **Text**. The generic display name of the list.</p></td>
</tr>
<tr class="odd">
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
<tr class="even">
<td align="left"><p>**Url**</p></td>
<td align="left"><p>Optional **Text**.</p>
<p>Specifies the path to the root of the directory that contains the ASPX files to which the list definition applies, relative to the root URL of the Web site.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**URLEncode**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to convert special characters, such as spaces, to quoted UTF-8 format, for example, %c3%ab for character ë.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**VersioningEnabled**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify within a <a href="http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56(Office.15).aspx">Schema.xml</a> file that versioning be enabled by default for document libraries created through the list definition. Setting this attribute has no effect on existing document libraries. If <span class="keyword">TRUE**, versioning can still be disabled for a document library on the New Document Library page when the library is being created.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**WebImageHeight**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the height, in pixels, of an image in a picture library.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**WebImageWidth**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the width, in pixels, of an image in a picture library.</p></td>
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
<td align="left"><p><a href="metadata-element-list.htm">MetaData</a></p></td>
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

When used as the root element in the schema file for a list, the <span
class="keyword">List</span> element must contain the Microsoft
SharePoint Foundation**ows:** namespace
declaration. The following lines show the opening of a
[Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56(Office.15).aspx)
file for document libraries:

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <List 
      xmlns:ows="Microsoft SharePoint" 
      Name="Documents" 
      Title="$Resources:shareddocuments_Title;" 
      Direction="$Resources:Direction;" 
      Url="Shared Documents" 
      BaseType="1">

In a list schema, the
[MetaData](http://msdn.microsoft.com/library/649bbdbd-7de2-4921-bbce-13bdd7509205(Office.15).aspx)
element contains the different parts of the list definition. Use an
empty **List** element (<span
class="keyword">DOCS-LESSTHANList /DOCS-GREATERTHAN</span>) to return
the title of the current list.

In a site definition
([Onet.xml](http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx)),
the **List** element does not contain a
[MetaData](http://msdn.microsoft.com/library/649bbdbd-7de2-4921-bbce-13bdd7509205(Office.15).aspx)
section, but it can contain a
[Data](data-element-site.htm) section through which
to specify default column values for the given list type.








