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
ms.assetid: 2fb39435-2943-40c7-8f08-fda3bc99de5d
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
<td align="left"># View Element (List)</td>
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

In a list definition
([Schema.xml](http://msdn.microsoft.com/library/c2f01064-80d8-47ee-b602-ecf4c480ac56(Office.15).aspx)),
defines a view for a list in a Web site based on Microsoft SharePoint
Foundation, where each list can contain a number of views.

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="../icons/alert_note.gif" title="Note" alt="Note" /><strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>SharePoint Foundation 2010 uses XSLT to define list views, and the <a href="view-schema.htm">View schema</a> is maintained for backward compatibility. For information about XSLT list views, see <a href="http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17(Office.15).aspx">List Views</a>.</p></td>
</tr>
</tbody>
</table>

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;View
  AggregateView = &quot;TRUE&quot; | &quot;FALSE&quot;
  BaseViewID = &quot;Integer&quot;
  ContentTypeID = &quot;Text&quot;  CssStyleSheet = &quot;Text&quot;
  DefaultView = &quot;TRUE&quot; | &quot;FALSE&quot;
  DefaultViewForContentType = &quot;TRUE&quot; | &quot;FALSE&quot;
  DisplayName = &quot;Text&quot;
  FailIfEmpty = &quot;TRUE&quot; | &quot;FALSE&quot;
  FileDialog = &quot;TRUE&quot; | &quot;FALSE&quot;
  FPModified = &quot;TRUE&quot; | &quot;FALSE&quot;
  FreeForm = &quot;TRUE&quot; | &quot;FALSE&quot;
  Hidden = &quot;TRUE&quot; | &quot;FALSE&quot;
  ImageUrl = &quot;Text&quot;
  IncludeRootFolder = &quot;TRUE&quot; | &quot;FALSE&quot;
  List = &quot;Integer&quot; | &quot;Text&quot;
  MobileDefaultView = &quot;TRUE&quot; | &quot;FALSE&quot;  MobileItemLimit = &quot;Integer&quot;  MobileUrl = &quot;Text&quot;
  MobileView = &quot;TRUE&quot; | &quot;FALSE&quot;
  ModerationType = &quot;Text&quot;
  Name = &quot;Text&quot;
  OrderedView = &quot;TRUE&quot; | &quot;FALSE&quot;
  PageType = &quot;Text&quot;
  Path = &quot;Text&quot;
  ReadOnly = &quot;TRUE&quot; | &quot;FALSE&quot;
  RecurrenceRowset = &quot;TRUE&quot; | &quot;FALSE&quot;
  ReqAuth = &quot;TRUE&quot; | &quot;FALSE&quot;
  RequiresClientIntegration = &quot;TRUE&quot; | &quot;FALSE&quot;
  RowLimit = &quot;Integer&quot;
  Scope = &quot;Text&quot;
  SetupPath = &quot;Text&quot;
  ShowHeaderUI = &quot;TRUE&quot; | &quot;FALSE&quot;  TabularView = &quot;TRUE&quot; | &quot;FALSE&quot;
  TargetId = &quot;Text&quot;
  TargetType = &quot;List&quot; | &quot;ContentType&quot;
  Threaded = &quot;TRUE&quot; | &quot;FALSE&quot;
  ToolbarTemplate = &quot;Text&quot;
  Type = &quot;HTML&quot; | &quot;Chart&quot; | &quot;Pivot&quot;
  Url = &quot;Text&quot;
  WebPartOrder = &quot;Integer&quot;
  WebPartZoneID = &quot;Text&quot;&gt;
&lt;/View&gt;</code></pre></td>
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
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that the view is a Merge Forms view used in an XML Form library. By default, an XML Form library has a Merge Forms view that is initially hidden. When an XML editor is used to publish an XML Form Properties (XFP) file to the Forms directory of the library, along with a template used by the editor, the <span class="keyword">AggregateView** attribute identifies the Merge Forms view. This view can be made visible or hidden, depending on whether the list template or definition for the library supports data merging.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**BaseViewID**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the ID of the base view.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ContentTypeID**</p></td>
<td align="left"><p>Optional **Text**. Specifies the ID of the content type with which the view is associated.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CssStyleSheet**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DefaultView**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to specify that the view is the default view.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DefaultViewForContentType**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to specify that the view is the default view for a content type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the name of the view that is displayed on the <span class="ui">Quick Launch** bar.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FailIfEmpty**</p></td>
<td align="left"><p>Optional **Boolean</span>. If the view returns no items, <span class="keyword">TRUE</span> to return a blank page and an HTTP error code instead of rendering the <span class="keyword">ViewEmpty** element. Used for programmatic manipulation of views from a client application, so that the client application will not have to parse a document in order to discover whether the view is empty.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FileDialog**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to specify that the view is displayed in file dialog boxes for applications that are used within the context of SharePoint Foundation, and that parse the output HTML to determine the contents of the list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FPModified**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** if the view has been altered through editing in a Web page editor, and the view is no longer customizable by the SharePoint Foundation user interface (UI).</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FreeForm**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to specify alternate field formatting for certain field types when fields are rendered. In particular, this attribute affects the alignment of number columns, which is particularly useful in custom nontabular view types.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to hide the view.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ImageUrl**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the server-relative URL for the image that is displayed in the title area of the list view, for example, <span class="code">/_layouts/images/pgrpicon.png**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IncludeRootFolder**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to specify that the root folder is returned in the list view.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**List**</p></td>
<td align="left"><p>Optional **Integer</span> or <span class="keyword">Text</span>. Specifies the type of list. This value can be either the ID of the template for a list (an integer), or the URL to a list provisioned in the site (a string). Best practice is to use <span class="keyword">Text</span>, because <span class="keyword">Integer</span> might not be specific enough (e.g., if there are two announcements lists in the site and you specify <span class="keyword">List=104**).</p></td>
</tr>
<tr class="even">
<td align="left"><p>**MobileDefaultView**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to specify that the standard SharePoint list view is the default mobile view. Only one view per list can be designated as the default mobile view.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**MobileItemLimit**</p></td>
<td align="left"><p>Optional **Integer**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**MobileUrl**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**MobileView**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to specify that the standard SharePoint list view is also a mobile view. This attribute does not apply to Calendar, Datasheet, or Gantt views.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ModerationType**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the Content Approval type, which can be <span class="keyword">HideUnapproved</span>, <span class="keyword">Contributor</span>, or <span class="keyword">Moderator</span>. The <span class="keyword">HideUnapproved</span> view hides unapproved draft items from users who only have permission to read items. The <span class="keyword">Contributor</span> view shows the pending and rejected items for the current user. The <span class="keyword">Moderator** view is accessible only to users who have managed list permissions and shows the pending and rejected items for all users.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Optional **Text</span>. The name given to the view; used to select a different named view in the UI as well as to refer to a named view when specifying a filter for a <span class="keyword">Lookup** field.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**OrderedView**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to specify that the view is ordered.</p></td>
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
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to make the view read-only.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RecurrenceRowset**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to expand recurring events in the view and display each instance of each recurring event. The default value is <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ReqAuth**</p></td>
<td align="left"><p>Optional **Boolean**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RequiresClientIntegration**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to use features that launch client applications; otherwise, users must work on documents locally and upload changes. </p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RowLimit**</p></td>
<td align="left"><p>Optional **Integer</span>. Applies to the HTML view type only. Specifies the maximum number of rows to render on any one page. When the row limit is exceeded, the <span class="keyword">Next</span> and <span class="keyword">Previous** buttons allow all of the returned recordset to be viewed.</p>
<p>If **RowLimit** is not specified, the default number of Rows returned is 50. If &quot;None&quot; is specified for the view type, all the rows of the recordset are returned in one view.</p>
<p>When a view is rendered, the render variables <span class="code">ViewHasNext</span> and <span class="code">ViewHasPrev</span> are set to **TRUE</span> or <span class="keyword">FALSE</span>, based on whether the current view has reached the row limit from the dataset. These variables can be used in successive page definitions to render <span class="keyword">Next</span> and <span class="keyword">Previous** buttons on the page, as in the following example:</p>
<div class="code">
<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)" onkeypress="CopyCode_CheckKey(this, event)" onmouseover="ChangeCopyCodeIcon(this)" onmouseout="ChangeCopyCodeIcon(this)" tabindex="0"><img src="../icons/copycode.gif" title="Copy code" alt="Copy code" />Copy code</span>
<pre><code>&lt;Switch&gt;
  &lt;Expr&gt;&lt;GetVar Name=&quot;ViewHasPrev&quot;/&gt;&lt;/Expr&gt;
  &lt;Case Value=&quot;TRUE&quot;&gt;
    &lt;![CDATA[...Previous button defined here... ]]&gt;
  &lt;/Case&gt;
&lt;/Switch&gt;</code></pre>
</div>
<p>The variables <span class="code">NextPageURL</span> and <span class="code">PrevPageURL</span> are also set to nonblank values when there is forward or backward paging content from the current display. These variables can be used by constructing the **Next</span> and <span class="keyword">Previous** buttons so that they have the correct URL to access the next page of content.</p></td>
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
<td align="left"><p>**SetupPath**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the site-relative path to the folder in the setup directory that contains the .aspx page for the view, for example, <span class="code">pages\viewpage.aspx**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowHeaderUI**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">FALSE</span> to render all <span class="keyword">FieldRef</span> elements used in the header display mode without decorating the UI with HTML. In other words, when this mode is set, the UI does not provide sorting and filtering as hyperlinks in the column header. The default value is <span class="keyword">TRUE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TabularView**</p></td>
<td align="left"><p>Optional **Boolean**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**TargetId**</p></td>
<td align="left"><p>Optional **Text**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TargetType**</p></td>
<td align="left"><p>Optional **Text</span>. Possible values include <span class="keyword">List</span> and <span class="keyword">ContentType**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Threaded**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to apply inner grouping in the view. A threaded view is constructed based on the built-in threading column (assumed to exist for the list). The view is sorted on this field as the secondary sort. If other columns in the view are specified as sorted or grouped, those rules are applied before the threading column sort order. As a result, all discussions grouped by a topic can be collected together, and the message threading can be displayed beneath the collection.</p>
<p>When **TRUE</span>, the <a href="rowlimit-element-list.htm">RowLimit</a> element has a different meaning when used on a threaded discussion board list view. Instead of specifying the number of items to return, it specifies the number of discussion threads to return, where a thread could consist of one or more items. In addition to having the <span class="keyword">Threaded</span> attribute set to <span class="keyword">TRUE**, a threaded view must be sorted by the thread ID; otherwise, this row limit behavior does not take effect.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ToolbarTemplate**</p></td>
<td align="left"><p>Optional **Text**. Specifies the name of the predefined toolbar template that is used for the view toolbar.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the rendering type of the view. The type is the common enumerated HTML view and can be set to <span class="keyword">HTML</span>, <span class="keyword">Chart</span>, or <span class="keyword">Pivot**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Url**</p></td>
<td align="left"><p>Optional **Text**. Specifies the URL for the view.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**WebPartOrder**</p></td>
<td align="left"><p>Optional **Integer**. Specifies the vertical positioning of the Web Part within a zone.</p></td>
</tr>
<tr class="odd">
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
<td align="left"><p><a href="aggregations-element-list.htm">Aggregations</a>, <a href="groupbyfooter-element-list.htm">GroupByFooter</a>, <a href="groupbyheader-element-list.htm">GroupByHeader</a>, <a href="joins-element-view.htm">Joins</a>, <a href="pagedclientcallbackrowset-element-list.htm">PagedClientCallbackRowset</a>, <a href="pagedrecurrencerowset-element-list.htm">PagedRecurrenceRowset</a>, <a href="pagedrowset-element-list.htm">PagedRowset</a>, <a href="parameterbindings-element-list.htm">ParameterBindings</a>, <a href="projectedfields-element-view.htm">ProjectedFields</a>, <a href="query-element-list.htm">Query</a>, <a href="rowlimit-element-list.htm">RowLimit</a>, <a href="rowlimitexceeded-element-list.htm">RowLimitExceeded</a>, <a href="http://msdn.microsoft.com/library/23251c2b-1172-4ac8-bde2-46c1e682a91c(Office.15).aspx">Toolbar</a>, <a href="viewbidiheader-element-list.htm">ViewBidiHeader</a>, <a href="viewbody-element-list.htm">ViewBody</a>, <a href="viewdata-element-list.htm">ViewData</a>, <a href="viewempty-element-list.htm">ViewEmpty</a>, <a href="viewfields-element-list.htm">ViewFields</a>, <a href="viewfooter-element-list.htm">ViewFooter</a>, <a href="viewheader-element-list.htm">ViewHeader</a>, <a href="viewstyle-element-list.htm">ViewStyle</a>, <a href="xsllink-element-list.htm">XslLink</a></p></td>
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
<td align="left"><p><a href="views-element-list.htm">Views</a></p></td>
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

The principal view type for list and document summary information is the
HTML view. An HTML view is generally a columnar view that displays
information from one or more lists. The data to be displayed is
described by the fields that are shown in the view. For information
about how views work in Microsoft SharePoint Foundation 2010, see [List
Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17(Office.15).aspx).

The primary attributes that define an HTML view are as follows:

-   Its name.

-   The data source specification (usually a single list or document
    library).

-   The filter to be applied to the data source.

-   The collection of fields to be displayed.

-   The sort order of the items to be displayed. A special case of sort
    order is grouping.

-   An HTML template for rendering the view.

The **View** element is central to page
rendering and generates a SQL query for the fields, sorts, and filters
that are applied in a particular view. The <span
class="keyword">View</span> element iterates through the data set
returned by the query and executes the
[ViewBody](viewbody-element-list.htm) element for each
row that is returned. Within the **ViewBody**
element, a [Fields](fields-element-view.htm) element
enumeration can be used to handle each field, or each field can be
referred to individually by name within a
[Field](field-element-list.htm) element.

Each view has an internal name that is typically represented by a GUID.
The view can be rendered on a page by using the
DOCS-LESSTHANView/DOCS-GREATERTHAN tag.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example illustrates the use of a fields enumeration within
a view body, laying out a basic table for displaying a list in the
browser.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <View Name="MyCustomView">
        <ViewHeader>
          <HTML><![CDATA[<TABLE><TR>]]></HTML>
          <Fields>
            <HTML><![CDATA[<TH>]]></HTML>
            <Field/>
            <HTML><![CDATA[</TH>]]></HTML>
          </Fields>
          <HTML><![CDATA[</TR>]]></HTML>
        </ViewHeader>

        <ViewBody>
          <HTML><![CDATA[<TR>]]></HTML>
            <Fields>
              <HTML><![CDATA[<TD>]]></HTML>
              <Field/>
              <HTML><![CDATA[</TD>]]></HTML>
            </Fields>
          <HTML><![CDATA[</TR>]]></HTML>
        </ViewBody>

        <ViewFooter>
          <HTML><![CDATA[</TABLE>]]></HTML>
        </ViewFooter>

Notice that in the previous section the fields enumeration is used
within a [ViewHeader](viewheader-element-list.htm) section
to create column headers for the view.

In the following section of the example a
[ViewFields](viewfields-element-list.htm) section is
included within the **View** element in order
to specify which fields will be enumerated in the view.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
        <ViewFields>
          <FieldRef Name="Created_x0020_By"/>
          <FieldRef Name="Last_x0020_Modified"/>
        </ViewFields>

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="../icons/alert_note.gif" title="Note" alt="Note" /><strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>If the view has a <a href="joins-element-view.htm">Joins</a> element, fields from the joined lists can be included in <a href="viewfields-element-list.htm">ViewFields</a>, provided that they are also itemized in a <a href="projectedfields-element-view.htm">ProjectedFields</a> element.</p></td>
</tr>
</tbody>
</table>

In the last section of the example the
[Query](query-element-list.htm) element is used to
specify a result set that meets certain criteria, as in the following
example, which returns a list of all the documents in a library that are
written by Mary or John.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
        <Query>
          <Where>
            <Or>
              <Eq>
                <FieldRef Name="Created_x0020_By"/>
                <Value Type="Text">
                  Mary
                </Value>
              </Eq>
              <Eq>
                <FieldRef Name="Created_x0020_By"/>
                <Value Type="Text">
                  John
                </Value>
              </Eq>
            </Or>
          </Where>
          <OrderBy>
            <FieldRef Name="Last_x0020_Modified"/>
          </OrderBy>
        </Query>
    </View>

The next view example displays a sequence of paragraphs. The <span
class="keyword">Query</span> element specifies not only a sort order (in
order of modification date), but also a filter (only show items whose
**Expires** property is greater than or equal
to today's date).

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <View Type="HTML" Name="Summary">
      <ViewBody ExpandXML="TRUE">
        <![CDATA[ <p><SPAN class=DocTitle><ows:Field Name="Title"/></SPAN>
          (<ows:Field Name="Author"/>, <ows:Field Name="Modified"/>)
          <ows:Limit><Field Name="Body"/></ows:Limit>
          </p>  ]]>
      </ViewBody>
      <Query>
        <Where>
          <Geq>
            <FieldRef Name="Expires"/>
            <Value Type="DateTime">
              <Today/>
            </Value>
          </Geq>
        </Where>
        <OrderBy>
          <FieldRef Name="Modified"/>
        </OrderBy>
      </Query>
      <ViewFields>
        <FieldRef Name="Summary"/>
        <FieldRef Name="Author"/>
        <FieldRef Name="Modified"/>
        <FieldRef Name="Body"/>
      </ViewFields>
    </View>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[List
Views](http://msdn.microsoft.com/library/43e6ba7e-eddb-418a-a570-c0815016fc17(Office.15).aspx)








