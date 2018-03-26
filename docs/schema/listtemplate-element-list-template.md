---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: e565ead9-adcb-4a90-97e3-04850719420a
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
<td align="left"># ListTemplate Element (List Template)</td>
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
SharePoint Online | SharePoint Server 2013*

Specifies a list definition that is available as an option for creating
lists on the <span class="ui">Create</span> page.

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
  BaseType = &quot;0&quot; | &quot;1&quot; | &quot;3&quot; |&quot;4&quot; | &quot;5&quot;
  CacheSchema = &quot;TRUE&quot; | &quot;FALSE&quot;
  Catalog = &quot;TRUE&quot; | &quot;FALSE&quot;
  Category = &quot;Libraries&quot; | &quot;Communications&quot; | &quot;Tracking&quot; | 
    &quot;Custom Lists&quot;
  Default = &quot;TRUE&quot; | &quot;FALSE&quot;
  Description = &quot;Text&quot;
  DisableAttachments = &quot;TRUE&quot; | &quot;FALSE&quot;
  DisallowContentTypes = &quot;TRUE&quot; | &quot;FALSE&quot;
  DisplayName = &quot;Text&quot;
  DocumentAsEnclosure = &quot;TRUE&quot; | &quot;FALSE&quot;
  DocumentTemplate = &quot;Integer&quot;
  DontSaveInTemplate = &quot;TRUE&quot; | &quot;FALSE&quot;
  EditPage = &quot;Text&quot;
  EnableModeration = &quot;TRUE&quot; | &quot;FALSE&quot;
  EnablePeopleSelector = &quot;TRUE&quot; | &quot;FALSE&quot;
  EnableResourceSelector = &quot;TRUE&quot; | &quot;FALSE&quot;
  FeatureId = &quot;Text&quot;
  FolderCreation = &quot;TRUE&quot; | &quot;FALSE&quot;
  Hidden = &quot;TRUE&quot; | &quot;FALSE&quot;
  HiddenList = &quot;TRUE&quot; | &quot;FALSE&quot;
  Image = &quot;URL&quot;
  MultipleTypes = &quot;TRUE&quot; | &quot;FALSE&quot;
  MustSaveRootFiles = &quot;TRUE&quot; | &quot;FALSE&quot;
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
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that lists created through the template cannot be deleted; otherwise, <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AllowEveryoneViewItems**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to allow any user to view items in the library. The <span class="keyword">AllowEveryoneViewItems** attribute is used, for example, in the Master Page gallery to give all users access to master pages.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**AlwaysIncludeContent**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that list content be included by default when lists created through the template are saved as list templates in the user interface; otherwise, <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**BaseType**</p></td>
<td align="left"><p>Required **Integer**. Specifies the base type, or default schema, for lists created from the definition.</p>
<ul>
<li><p>0 -- GenericList</p></li>
<li><p>1 -- DocumentLibrary</p></li>
<li><p>3 -- DiscussionBoard</p></li>
<li><p>4 -- Survey</p></li>
<li><p>5 -- Issue</p></li>
</ul></td>
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
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that users can attach files to items in lists created through the template; otherwise, <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DisallowContentTypes**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that content types cannot be managed on lists created through the template; otherwise, <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>Required **Text**. Specifies the display name of the list definition.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DocumentAsEnclosure**</p></td>
<td align="left"><p>Optional **Boolean**. Specifies if the list includes documents as an enclosure object.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DocumentTemplate**</p></td>
<td align="left"><p>Optional **Integer</span>. Currently unused. This is valid only in a <span class="keyword">ListTemplate</span> element whose <span class="keyword">BaseType</span> is set to 1 (document libraries). For future compatibility, this should either be blank or correspond to the <span class="keyword">Type</span> attribute of a <span class="keyword">DocumentTemplate</span> element in the <span class="keyword">DocumentTemplates** enumeration. [Same as previous version, but deprecated.]</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DontSaveInTemplate**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to exclude the content of the list when the list is saved as a custom list template or when the site to which the list belongs is saved as a custom site template through the user interface.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EditPage**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the name of a custom application page (<span class="code">/_layouts**) to use as the page for editing list properties for lists created through the list template.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EnableModeration**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that content approval is enabled by default in lists created through the template; otherwise, <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EnablePeopleSelector**</p></td>
<td align="left"><p>Optional **Boolean</span>. Specifies the value for the <span sdata="cer" target="P:Microsoft.SharePoint.SPList.EnablePeopleSelector"><span class="nolink">EnablePeopleSelector</span>** property.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EnableResourceSelector**</p></td>
<td align="left"><p>Optional **Boolean</span>. Specifies the value for the <span sdata="cer" target="P:Microsoft.SharePoint.SPList.EnableResourceSelector"><span class="nolink">EnableResourceSelector</span>** property.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FeatureId**</p></td>
<td align="left"><p>Optional **Text**. Specifies the GUID that identifies the Feature with which the template is associated.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FolderCreation**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to enable folder creation within the list and to specify that the <span class="ui">New Folder</span> command appears on the <span class="ui">New</span> menu in list views; otherwise, <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that the list definition is not available on the <span class="ui">Create** page for creating lists.</p></td>
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
<td align="left"><p>Optional **Boolean</span>. If <span class="code">MultipleMtgDataList=&quot;TRUE&quot;** is specified, the list within a Meeting Workspace site contains data for multiple meeting instances within the site.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**MultipleTypes**</p></td>
<td align="left"><p>Optional **Boolean**. Specifies if there are multiple list types.</p></td>
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
<td align="left"><p>Optional **Text**. Specifies the name of a custom page to use as the page for creating a new list through the list template.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**NoCrawl**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that the list not be visible in search results; otherwise, <span class="keyword">FALSE**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**OnQuickLaunch**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to display lists created from the list definition on the <span class="ui">Quick</span><span class="ui">Launch** bar.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Path**</p></td>
<td align="left"><p>Optional **Text</span>. Specifies the name of the site definition that contains the list definition; for example, <span class="keyword">STS**. This path is assumed to be relative to the 12\TEMPLATE directory. The path can be directed at a Features schema; for example, Features\Announcements. [Same as previous version, but deprecated.]</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RootWebOnly**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to specify that the list created from the definition exists only in the root Web site of a site collection. [Same as previous version, but deprecated.]</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SecurityBits**</p></td>
<td align="left"><p>Optional **Text</span>. Defines the item-level permissions in the list for users with sufficient permission to read or edit list items. The <span class="keyword">SecurityBits** attribute contains a 2-digit string. The first digit in the string controls the read access; the second digit in the string controls the edit access. For read access, the following are valid digits:</p>
<ul>
<li><p>**1**   Users can read all items.</p></li>
<li><p>**2**   Users can read only their own items.</p></li>
</ul>
<p>For edit access, the following are valid digits:</p>
<ul>
<li><p>**1**   Users can edit all items.</p></li>
<li><p>**2**   Users can edit only their own items.</p></li>
<li><p>**4**   Users cannot edit items.</p></li>
</ul>
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
<td align="left"><p>Users with the <span sdata="cer" target="F:Microsoft.SharePoint.SPBasePermissions.ManageLists"><span class="nolink">ManageLists</span></span> permission can read and edit all items, regardless of value of the **SecurityBits** attribute.</p></td>
</tr>
</tbody>
</table>
</div>
<p>This attribute does not apply to document libraries.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Sequence**</p></td>
<td align="left"><p>Optional **Integer</span>. Specifies the ordering priority to use for the list template on the <span class="ui">Create</span> page. If <span class="keyword">Sequence</span> is not set, the template appears last in arbitrary order with any other templates that also lack a <span class="keyword">Sequence** value. Two templates that specify the same sequence are sorted together in an arbitrary order.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SetupPath**</p></td>
<td align="left"><p>Optional **Text**. Specifies the path to a folder in the SharePoint Foundation setup directory (%ProgramFiles%\Common Files\Microsoft Shared\web server extensions\15\\TEMPLATE) that contains a file to include in the template.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SyncType**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE** to override the default client list type associated with a SharePoint Foundation base template.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Optional **Integer</span>. Provides a unique identifier for the template. This identifier must be unique within the feature, but need not be unique across all feature definitions or site definitions. For a list of the default list template types, see <span sdata="cer" target="T:Microsoft.SharePoint.SPListTemplateType"><span class="nolink">SPListTemplateType</span>**.</p>
<p>This attribute corresponds to the **Type** attribute of the <a href="list-element-list.htm">List</a> element.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Unique**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that the list definition or list template can be used to create a list only during site creation and cannot be used to create a list through the object model or user interface after the site template or definition is applied. Setting this attribute to <span class="keyword">TRUE</span> has the effect of making the list hidden so that it does not appear as an option on the <span class="ui">Create</span> page or on the <span class="ui">Documents and Lists** page.</p></td>
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
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">TRUE</span> to specify that versioning is enabled by default in lists created through the template; otherwise, <span class="keyword">FALSE**.</p></td>
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
<td align="left"><p><a href="elements-element-list-template.htm">Elements</a></p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

For an example of how this element is used, see <span sdata="link">[List
Template Files](list-template-files.htm)</span>.








