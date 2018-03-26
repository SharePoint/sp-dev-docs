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
ms.assetid: 37a89367-4fed-46b9-afe9-386844f3e82c
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
<td align="left"># ListTemplate Element (Site)</td>
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

Specifies a list definition that is available as an option for creating
lists on the <span class="ui">Create Page</span>.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;ListTemplate
  AllowDeletion = &quot;TRUE&quot; | &quot;FALSE&quot;
  AllowEveryoneViewItems = &quot;TRUE&quot; | &quot;FALSE&quot;
  AlwaysIncludeContent = &quot;TRUE&quot; | &quot;FALSE&quot;
  BaseType = &quot;0&quot; | &quot;1&quot; |&quot;3&quot; | &quot;4&quot; | &quot;5&quot;
  CacheSchema = &quot;TRUE&quot; | &quot;FALSE&quot;
  Catalog = &quot;TRUE&quot; | &quot;FALSE&quot;
  Category = &quot;Libraries&quot; | &quot;Communications&quot; | &quot;Tracking&quot; | 
    &quot;Custom Lists&quot;
  Default = &quot;TRUE&quot; | &quot;FALSE&quot;
  Description = &quot;Text&quot;
  DisableAttachments = &quot;TRUE&quot; | &quot;FALSE&quot;
  DisallowContentTypes = &quot;TRUE&quot; | &quot;FALSE&quot;
  DisplayName = &quot;Text&quot;  DocumentAsEnclosure = &quot;TRUE&quot; | &quot;FALSE&quot;
  DocumentTemplate = &quot;Integer&quot;
  DontSaveInTemplate = &quot;TRUE&quot; | &quot;FALSE&quot;
  EditPage = &quot;Text&quot;
  EnableModeration = &quot;TRUE&quot; | &quot;FALSE&quot;  EnablePeopleSelector = &quot;TRUE&quot; | &quot;FALSE&quot;  EnableResourceSelector = &quot;TRUE&quot; | &quot;FALSE&quot;
  FeatureId = &quot;Text&quot;
  FolderCreation = &quot;TRUE&quot; | &quot;FALSE&quot;
  Hidden = &quot;TRUE&quot; | &quot;FALSE&quot;
  HiddenList = &quot;TRUE&quot; | &quot;FALSE&quot;
  Image = &quot;URL&quot;
  MultipleMtgDataList = &quot;TRUE&quot; | &quot;FALSE&quot;
  MustSaveRootFiles = &quot;TRUE&quot; | &quot;FALSE&quot;  MultipleTypes = &quot;TRUE&quot; | &quot;FALSE&quot;
  Name = &quot;Text&quot;
  NewPage = &quot;Text&quot;
  NoCrawl = &quot;TRUE&quot; | &quot;FALSE&quot;
  OnQuickLaunch = &quot;TRUE&quot; | &quot;FALSE&quot;
  Path = &quot;Text&quot;
  RootWebOnly = &quot;TRUE&quot; | &quot;FALSE&quot;
  SecurityBits = &quot;Text&quot;
  Sequence = &quot;Integer&quot;
  SetupPath = &quot;Text&quot;
  SyncType = &quot;Text&quot;
  Type = &quot;Integer&quot;
  Unique = &quot;TRUE&quot; | &quot;FALSE&quot;
  UseRootFolderForNavigation = &quot;TRUE&quot; | &quot;FALSE&quot;
  VersioningEnabled = &quot;TRUE&quot; | &quot;FALSE&quot;&gt;
&lt;/ListTemplate&gt;</code></pre></td>
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
<td align="left"><p>**AllowDeletion**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that lists created through the list definition cannot be deleted; otherwise, <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AllowEveryoneViewItems**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to allow any user to view items in the library. The <span class="keyword">AllowEveryoneViewItems** attribute is used, for example, in the Master Page gallery to give all users access to master pages.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AlwaysIncludeContent**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that list content be included by default when lists created through the list definition are saved as list templates in the user interface; otherwise, <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**BaseType**</p></td>
<td align="left"><p>Required **Integer**. Specifies the base type, or default schema, for lists created from the definition. In SharePoint Foundation, this can be 0, 1, 3, 4, or 5. It cannot be 2.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CacheSchema**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to enable schema caching of the list when provisioning a site. The <span class="keyword">CacheSchema** attribute is used, for example, in the global <a href="http://msdn.microsoft.com/library/b99d6657-d9ae-4135-a43c-c58cdfcdc6c1(Office.15).aspx">Onet.xml</a> file to enable caching of the user list for the current site collection.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Catalog**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to specify that the list definition is for a site gallery, a list gallery, or a Web Part gallery.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Category**</p></td>
<td align="left"><p>Optional **Text**. Specifies the category with which to associate lists created through the list definition. Possible values include the following:</p>
<ul>
<li><p>**Libraries**</p></li>
<li><p>**Communications**</p></li>
<li><p>**Tracking**</p></li>
<li><p>**Custom Lists**</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**Default**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to specify that new SharePoint sites will include this list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional **Text**. Provides a description of the list definition.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisableAttachments**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that users can attach files to items in lists created through the list definition; otherwise, <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DisallowContentTypes**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that content types can be managed on lists created through the list definition; otherwise, <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>Required **Text**. Specifies the display name of the list definition.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DocumentAsEnclosure**</p></td>
<td align="left"><p>Optional **Boolean**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DocumentTemplate**</p></td>
<td align="left"><p>Optional **Integer</span>. Currently unused. This is only valid in a <span class="keyword">ListTemplate</span> element whose <span class="keyword">BaseType</span> is set to 1 (document libraries). For future compatibility, this should either be left blank or correspond to the <span class="keyword">Type</span> attribute of a <span class="keyword">DocumentTemplate</span> element in the <span class="keyword">DocumentTemplates** enumeration. This attribute has been deprecated in SharePoint Foundation.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DontSaveInTemplate**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to exclude the content of the list when the list is saved as a custom list template or when the site to which the list belongs is saved as a custom site template through the user interface.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EditPage**</p></td>
<td align="left"><p>Optional **Text**. Specifies the name of a custom form to use as the page for editing items in lists created through the list definition.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EnableModeration**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that content approval is enabled by default in lists created through the list definition; otherwise, <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EnablePeopleSelector**</p></td>
<td align="left"><p>Optional **Boolean**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EnableResourceSelector**</p></td>
<td align="left"><p>Optional **Boolean**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FeatureId**</p></td>
<td align="left"><p>Optional **Text**. Specifies the GUID that identifies the Feature with which the list definition is associated.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FolderCreation**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to enable folder creation within the list and to specify that the <span class="ui">New Folder</span> command appears on the <span class="ui">New</span> menu in list views; otherwise, <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that the list definition is not available on the <span class="ui">Create Page** for creating lists.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**HiddenList**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to specify that a list created from the list definition is hidden.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Image**</p></td>
<td align="left"><p>Optional **URL**. Specifies a URL to an icon used to represent a list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**MultipleMtgDataList**</p></td>
<td align="left"><p>Optional **Boolean</span>. If <span class="keyword">MultipleMtgDataList=&quot;TRUE&quot;** is specified, the list within a Meeting Workspace site contains data for multiple meeting instances within the site.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**MultipleTypes**</p></td>
<td align="left"><p>Optional **Boolean**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**MustSaveRootFiles**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to save the pages contained within a special document library that is used internally for a Meeting Workspace site when the list template is saved without content. This attribute is not intended for public use.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required **Text**. Specifies the internal name of the list definition. No spaces or special characters can be used. This name is also used to find the folder that contains the Schema.xml file that defines the schema in use.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**NewPage**</p></td>
<td align="left"><p>Optional **Text**. Specifies the name of a custom form to use as the page for creating items in lists created through the list definition.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**NoCrawl**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that the list not be visible in search results; otherwise, <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**OnQuickLaunch**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to display lists created from the list definition on the <span class="ui">Quick</span><span class="ui">Launch** bar, if that bar has a Lists node.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Path**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the name of the site definition that contains the list definition, for example, <span class="keyword">STS**. This path is assumed to be relative to the 12\TEMPLATE directory. The path can be directed at a features schema, for example, Features\Announcements. This attribute has been deprecated in SharePoint Foundation.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RootWebOnly**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to specify that the list created from the definition exists only in the root Web site of a site collection. This attribute has been deprecated in SharePoint Foundation.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SecurityBits**</p></td>
<td align="left"><p>Optional **Text</span>. Defines the item-level permissions in the list for users with sufficient permission to read or edit list items. The <span class="keyword">SecurityBits** attribute contains a 2-digit string. The first digit in the string controls the read access, while the second digit in the string controls the edit access. For read access, the following are valid digits:</p>
<p>**1** Users can read all items.</p>
<p>**2** Users can read only their own items.</p>
<p>For edit access, the following are valid digits:</p>
<p>**1** Users can edit all items.</p>
<p>**2** Users can edit only their own items.</p>
<p>**4** Users cannot edit items.</p>
<p><span class="label">Note</span>   Users with the <span sdata="cer" target="F:Microsoft.SharePoint.SPBasePermissions.ManageLists"><span class="nolink">ManageLists</span></span> permission can read and edit all items, regardless of the **SecurityBits** attribute value.</p>
<p>This attribute does not apply to document libraries.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Sequence**</p></td>
<td align="left"><p>Optional **Integer</span>. Specifies the ordering priority to use for the list definition on the <span class="ui">Create</span> page. If <span class="keyword">Sequence</span> is not set, the list definition shows up last in arbitrary order with any other list definitions that also lack a <span class="keyword">Sequence** value. Two list definitions that specify the same sequence are sorted together in an arbitrary order.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SetupPath**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the path to a folder in the SharePoint Foundation setup directory (<span class="code">\\Program Files\Common Files\Microsoft Shared\web server extensions\12\TEMPLATE**) that contains a file to be included in the list definition.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SyncType**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to override the default client list type associated with a SharePoint Foundation base template.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Optional **Integer**. Provides a unique identifier for the list definition. This identifier must be unique within the feature, but need not be unique across all feature definitions or site definitions. SharePoint Foundation includes the following list types by default.</p>
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
<p>For custom list templates this attribute should be set to a number above 10000 to ensure that it does not conflict with any present or future Microsoft supplied list types.</p>
<p>This attribute corresponds to the **Type** attribute of the <a href="list-element-list.htm">List</a> element.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Unique**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that the list definition or list template can only be used to create a list during site creation and cannot be used to create a list through the object model or user interface after the site template or definition is applied. Setting this attribute to <span class="keyword">TRUE</span> has the effect of making the list hidden so that it does not appear as an option on the <span class="ui">Create Page</span> or on the <span class="ui">Documents and Lists** page.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**UseRootFolderForNavigation**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that a link to the list that is displayed in <span class="ui">Quick Launch** points to the root folder so that users go to a custom welcome page, instead of to the default list view page.</p>
<div class="alert">
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
<td align="left"><p>If a custom welcome URL is not set for the list, rendering a link to the root folder is functionally equivalent to linking to the default list view.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="odd">
<td align="left"><p>**VersioningEnabled**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that versioning is enabled by default in lists created through the list definition; otherwise, <span class="keyword">FALSE**.</p></td>
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
<td align="left"><p><a href="listtemplates-element-site.htm">ListTemplates</a></p></td>
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

In SharePoint Foundation the list template for a standard SharePoint
list is usually defined within the element manifest file of the Feature
that contains the list definition. For more information about list
template Features, see <span sdata="link">[List Template
Files](list-template-files.htm)</span>.








