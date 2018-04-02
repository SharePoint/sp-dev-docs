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
ms.assetid: 2ed12ad6-57ee-4479-a409-155fcabbb501
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
<td align="left"># View Element (Site)</td>
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

Used within a site definition to specify a list view for a page within a
module.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><View
  AggregateView = "TRUE" | "FALSE"
  BaseViewID = "Integer"
  DefaultView = "TRUE" | "FALSE"
  DisplayName = "Text"
  FailIfEmpty = "TRUE" | "FALSE"
  FileDialog = "TRUE" | "FALSE"
  FPModified = "TRUE" | "FALSE"
  FreeForm = "TRUE" | "FALSE"
  Hidden = "TRUE" | "FALSE"
  List = "Integer" } "Text"
  Name = "Text"
  OrderedView = "TRUE" | "FALSE"
  PageType = "Text"
  Path = "Text"
  ReadOnly = "TRUE" | "FALSE"
  RecurrenceRowset = "TRUE" | "FALSE"
  RowLimit = "Integer"
  Scope = "Text"
  ShowHeaderUI = "TRUE" | "FALSE"
  Threaded = "TRUE" | "FALSE"
  Type = "HTML" | "Chart" | "Pivot"
  Url = "URL"
  WebPartOrder = "Integer"
  WebPartZoneID = "Text">
</View></code></pre></td>
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
<td align="left"><p>**AggregateView**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE</span> to specify that the view is a Merge Forms view used in an XML Form library. By default, an XML Form library is provisioned with a Merge Forms view that is initially hidden. When an XML editor is used to publish an XML Form Properties (XFP) file to the Forms directory of the library along with a template used by the editor, the **AggregateView** attribute identifies the Merge Forms view, which can be made visible or hidden depending on whether the list template or definition for the library supports data merging.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**BaseViewID**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the ID of the base view.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DefaultView**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to specify that the view is the default view.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the name of the view that is displayed on the <span class="ui">Quick Launch** bar.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FailIfEmpty**</p></td>
<td align="left"><p>Optional **Boolean</span>. If the view returns no items, **TRUE</span> to return a blank page and an HTTP error code instead of rendering the **ViewEmpty** element. Used for programmatic manipulation of views from a client application, preventing the client application from having to parse a document to discover whether the view is empty.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FileDialog**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to specify that the view is displayed in file dialog boxes for applications used within the context of Microsoft SharePoint Foundation, which parse the output HTML to determine the contents of the list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FPModified**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** if the view has been altered through editing in a Web page editor, and the view is no longer customizable by the SharePoint Foundation user interface (UI).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FreeForm**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to specify alternate field formatting for rendering certain field types. In particular, this affects the alignment of number columns, which is particularly useful in custom nontabular view types.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to hide the view.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**List**</p></td>
<td align="left"><p>Optional **Integer</span> or **Text</span>. Specifies the type of list. This value can be either the ID of the template for a list (an integer), or the URL to a list provisioned in the site (a string). Best practice is to use **Text</span>, because **Integer</span> might not be specific enough (e.g., if there are two announcements lists in the site and you specify **List=104**).</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Optional **Text</span>. The name given to the view (used to select a different named view in the UI as well as to refer to a named view in specifying a filter for a **Lookup** field).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**OrderedView**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to specify that the view is ordered.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**PageType**</p></td>
<td align="left"><p>Optional **Text**. Specifies the type of form in which the view is used. Possible values include the following:</p>
<ul>
<li><p>**DEFAULTVIEW**   Default view.</p></li>
<li><p>**DIALOGVIEW**   File dialog box view.</p></li>
<li><p>**DISPLAYFORM**   Display form for list items.</p></li>
<li><p>**DISPLAYFORMDIALOG**   Display form for a file dialog box.</p></li>
<li><p>**EDITFORM**   Edit form for list items.</p></li>
<li><p>**EDITFORMDIALOG**   Edit form for a file dialog box.</p></li>
<li><p>**INVALID**   Not used.</p></li>
<li><p>**MAXITEMS**   Not used.</p></li>
<li><p>**NEWFORM**   New form for list items.</p></li>
<li><p>**NEWFORMDIALOG**   New form for a file dialog box.</p></li>
<li><p>**NORMALVIEW**   Normal view.</p></li>
<li><p>**SOLUTIONFORM**   Solution form.</p></li>
<li><p>**VIEW**   View, including both default view and normal view.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**Path**</p></td>
<td align="left"><p>Optional **Text**. Specifies the file name for the view.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ReadOnly**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to make the view read-only.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RecurrenceRowset**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE</span> to expand recurring events in the view and display each instance of each recurring event. The default value is **FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RowLimit**</p></td>
<td align="left"><p>Optional **Integer</span>. Applies to the HTML view type only. Specifies the maximum number of rows to render on any one page. When the row limit is exceeded, the **Next</span> and **Previous** buttons on the page allow for viewing other parts of the returned recordset.</p>
<p>If **RowLimit** is not specified, the default number of Rows returned is 50. If "None" is specified for the view type, all the rows of the recordset are returned in one view.</p>
<p>When a view is rendered, the render variables <span class="code">ViewHasNext</span> and <span class="code">ViewHasPrev</span> are set to **TRUE</span> or **FALSE</span>, based on whether the current view has reached the row limit from the dataset. These variables can be used in successive page definitions to render **Next</span> and **Previous** buttons on the page, as in the following example:</p>
<div class="code">
<span codelanguage="other"></span>
 
<span class="copyCode" onclick="CopyCode(this)" onkeypress="CopyCode_CheckKey(this, event)" onmouseover="ChangeCopyCodeIcon(this)" onmouseout="ChangeCopyCodeIcon(this)" tabindex="0"><img src=".." title="Copy code" alt="Copy code" />Copy code</span>
<pre><code><Switch>
  <Expr><GetVar Name="ViewHasPrev"/></Expr>
  <Case Value="TRUE">
    <![CDATA[...Previous button defined here... ]]>
  </Case>
</Switch></code></pre>
</div>
<p>The variables <span class="code">NextPageURL</span> and <span class="code">PrevPageURL</span> are also set to nonblank values when there is forward or backward paging content from the current display. These variables can be used by constructing the **Next</span> and **Previous** buttons to have the correct URL for accessing the next page of content.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Scope**</p></td>
<td align="left"><p>Optional **Text**. Specifies the recursive scope for a view of a document library. Possible values include the following:</p>
<ul>
<li><p>**FilesOnly**—Show only the files of a specific folder.</p></li>
<li><p>**Recursive**—Show all files of all folders.</p></li>
<li><p>**RecursiveAll**—Show all files and all subfolders of all folders.</p></li>
</ul>
<p>If this attribute is not set, the view displays only the files and subfolders of a specific folder. The value of this attribute corresponds to the <span sdata="cer" target="P:Microsoft.SharePoint.SPView.Scope"><span class="nolink">Scope</span></span> property of the <span sdata="cer" target="T:Microsoft.SharePoint.SPView"><span class="nolink">SPView</span></span> class.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ShowHeaderUI**</p></td>
<td align="left"><p>Optional **Boolean</span>. **FALSE</span> to render all **FieldRef</span> elements used in the header display mode without decorating the UI with HTML. In other words, when this mode is set, the UI does not provide sorting and filtering as hyperlinks in the column header. The default value is **TRUE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Threaded**</p></td>
<td align="left"><p>Optional **Boolean</span>. **TRUE** to apply inner grouping in the view. A threaded view is constructed based on the built-in threading column (assumed to exist for the list). The view is sorted on this field as the secondary sort. If other columns in the view are specified as sorted or grouped, those are applied before the threading column sort order. As a result, all discussions grouped by a topic can be collected together, and the message threading can be displayed beneath the collection.</p>
<p>When **TRUE</span>, the <a href="rowlimit-element-list.md">RowLimit</a> element has a different meaning when used on a threaded discussion board list view. Instead of specifying the number of items to return, it specifies the number of discussion threads to return, where a thread could consist of one or more items. In addition to having the **Threaded</span> attribute set to **TRUE**, a threaded view must be sorted by the thread ID in order for this row limit behavior to take effect.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the rendering type of the view. The type is the common enumerated HTML view and can be set to **HTML</span>, **Chart</span>, **Pivot</span>, **GANTT</span>, or **CALENDAR**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Url**</p></td>
<td align="left"><p>Optional **URL**. Specifies the URL for the view.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**WebPartOrder**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the vertical positioning of the Web Part within a zone.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**WebPartZoneID**</p></td>
<td align="left"><p>Optional **Text**. Specifies the zone for the Web Part.</p></td>
</tr>
</tbody>
</table>


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="binaryserializedwebpart-element-site.md">BinarySerializedWebPart</a></p></td>
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
<td align="left"><p><a href="file-element.md">File</a></p></td>
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

For more information, see [Module Element
(Site)](module-element-site.md)</span> for an example
that uses the **View** element.








