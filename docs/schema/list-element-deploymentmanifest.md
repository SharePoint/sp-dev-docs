---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: c9fd975a-7133-4d0a-a3a2-9072ef08feee
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
<td align="left"># List Element (DeploymentManifest)</td>
</tr>
<tr class="odd">
<td align="left"><a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

Represents an instance of a Windows SharePoint Services 3.0 list (<span
sdata="cer" target="T:Microsoft.SharePoint.SPList"><span
class="nolink">SPList</span></span>) object.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>DECLARATION
&lt;xs:element name=&quot;List&quot; type=&quot;SPList&quot; /&gt;

USAGE
&lt;SPObject
        &lt;List
                Id=&quot;Guid&quot;
                Title=&quot;xs:string&quot;
                RootFolderId=&quot;Guid&quot;
                RootFolderUrl=&quot;xs:string&quot;
                ParentWebId=&quot;Guid&quot;
                ParentWebUrl=&quot;xs:string&quot;
                BaseType=&quot;SPBaseType&quot;
                BaseTemplate=&quot;SPListTemplateType&quot;
                TemplateFeatureId=&quot;Guid&quot;
                Description=&quot;xs:string&quot;
                Direction=&quot;xs:string&quot;
                DocumentTemplateId=&quot;Guid&quot;
                EventSinkAssembly=&quot;xs:string&quot;
                SendToLocationName=&quot;xs:string&quot;
                SendToLocationUrl=&quot;xs:string&quot;
                EventSinkClass=&quot;xs:string&quot;
                EventSinkData=&quot;xs:string&quot;
                ImageUrl=&quot;xs:string&quot;
                AllowDeletion=&quot;xs:boolean&quot;
                AllowMultiResponses=&quot;xs:boolean&quot;
                EnableAttachments=&quot;xs:boolean&quot;
                EnableModeration=&quot;xs:boolean&quot;
                EnableVersioning=&quot;xs:boolean&quot;
                EnableMinorVersions=&quot;xs:boolean&quot;
                RequestAccessEnabled=&quot;xs:boolean&quot;
                DraftVersionVisibility=&quot;DraftVisibilityType&quot;
                ForceCheckout=&quot;xs:boolean&quot;
                ExcludeFromTemplate=&quot;xs:boolean&quot;
                Hidden=&quot;xs:boolean&quot;
                MultipleDataList=&quot;xs:boolean&quot;
                Ordered=&quot;xs:boolean&quot;
                ShowUser=&quot;xs:boolean&quot;
                Author=&quot;xs:string&quot;
                Created=&quot;xs:dateTime&quot;
                OnQuickLaunch=&quot;xs:boolean&quot;
                ReadSecurity=&quot;xs:int&quot;
                WriteSecurity=&quot;xs:int&quot;
                Version=&quot;xs:int&quot;
                MajorVersionLimit=&quot;xs:int&quot;
                MajorWithMinorVersionsLimit=&quot;xs:int&quot;
                EmailAlias=&quot;xs:string&quot;
                EnableContentTypes=&quot;xs:boolean&quot;
                EnableDeployWithDependentList=&quot;xs:boolean&quot;
                EnableFolderCreation=&quot;xs:boolean&quot;
                DefaultItemOpen=&quot;DefaultItemOpen&quot;
                DefaultContentApprovalWorkflowId=&quot;Guid&quot;
                EnableAssignToEmail=&quot;xs:boolean&quot;
                EnableSyndication=&quot;xs:boolean&quot;
                   &lt;Fields /&gt;
           &lt;ContentTypes /&gt;
           &lt;Views /&gt;
           &lt;Forms /&gt;
           &lt;EventReceivers /&gt;
           &lt;DeleteFields /&gt;
        /&gt;
/&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span sdata="cer" target="T:Microsoft.SharePoint.SPList"><span
class="nolink">SPList</span></span>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**AllowDeletion**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the list can be deleted.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**AllowMultiResponses**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether users are allowed to make multiple responses to a survey.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Author**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. User who created the list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**BaseTemplate**</p></td>
<td align="left"><p><span sdata="link"><a href="splisttemplatetype-simple-type-deploymentmanifest.htm">SPListTemplateType Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Required. Specifies a base type for instantiating list templates. Includes, but is not limited to, types enumerated in **SPListTemplateType**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**BaseType**</p></td>
<td align="left"><p><span sdata="link"><a href="spbasetype-simple-type-deploymentmanifest.htm">SPBaseType Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Specifies the base type for the list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Created**</p></td>
<td align="left"><p>xs:dateTime</p></td>
<td align="left"><p>Optional. Specifies the time and date the list was created.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DefaultContentApprovalWrokFlowId**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Unique identifier of the default content approval workflow that is associated with the list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DefaultItemOpen**</p></td>
<td align="left"><p><span sdata="link"><a href="defaultitemopen-simple-type-deploymentmanifest.htm">DefaultItemOpen Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Specifies whether to open list items in a client application or in the browser.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Provides a description for the list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Direction**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Specifies the direction of the reading order for the list. The string value &quot;**ltr</span>&quot; specifies left-to-right; the string &quot;<span class="keyword">rtl**&quot; specifies either right-to-left, or that no reading order is specified.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DocumentTemplateId**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Unique identifier of the document template.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DraftVersionVisibility**</p></td>
<td align="left"><p><span sdata="link"><a href="draftvisibilitytype-simple-type-deploymentmanifest.htm">DraftVisibilityType Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Specifies user types that can view minor versions of document drafts within the list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EmailAlias**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. When e-mail notification is enabled (**EnableAssignToEmail=true**), specifies the e-mail address to use to notify the owner of an item when the item has been updated or the assignment has changed.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EnableAssignToEmail**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether e-mail notification is enabled for the list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EnableAttachments**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether attachments can be added to items in the list; **true</span> if attachments can be added, otherwise <span class="keyword">false**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EnableContentTypes**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EnableDeployWithDependentList**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the list can be deployed with a dependent list; **true</span> if the list can be deployed with a dependent list, otherwise <span class="keyword">false**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EnableFolderCreation**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether folders can be created in the list; **true</span> if folders can be created, otherwise <span class="keyword">false**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EnableMinorVersions**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. When versioning is enabled for a document library (**EnableVersioning=true**), specifies whether the minor versions are enabled.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EnableModeration**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the Content Approval feature is enabled for the list; **true</span> if approval feature is enabled, otherwise <span class="keyword">false**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EnableSyndication**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether RSS syndication is enabled for the list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EnableVersioning**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether versioning is enabled for the document library; **true</span> if versioning is enabled, otherwise <span class="keyword">false**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EventSinkAssembly**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Strong name of a file in the global assembly cache (GAC) that provides an event handler for document library events.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EventSinkClass**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Fully qualified, case-sensitive name of a class that defines an event handler for document library events.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EventSinkData**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Arbitrary string for use by an event handler for document library events.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ExcludeFromTemplate**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the content of the list is included when the list is saved as a list template or when the site to which the list belongs is saved as a site template. The value is **true</span> if the content is excluded, otherwise <span class="keyword">false**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ForceCheckout**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether Forced Checkout is enabled for the document library; **true</span> if forced checkout is enabled, otherwise <span class="keyword">false**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the list is hidden; **true</span> if the list is hidden, otherwise <span class="keyword">false**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Id**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Required. Unique identifier of the list in the database.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ImageUrl**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. The server-relative URL for the icon that represents the list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**MajorVersionLimit**</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Optional. For document library that uses version control with major versions only, specifies the maximum number of major versions allowed for an item.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**MajorWithMinorVersionsLimit**</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Optional. For a document library that uses version control with both major and minor versions, specifies the number of major versions allowed for an item.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**MultipleDataList**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the list in a Meeting Workspace site contains data for multiple meeting instances within the site.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**OnQuickLaunch**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the list provides Quick Launch on the home page; **true</span> if Quick Launch is enabled, otherwise <span class="keyword">false**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Ordered**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the option to allow users to reorder items in the list is available on the Edit View page for the list; **true</span> if ordering is enabled, otherwise <span class="keyword">false**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ParentWebId**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Required. Unique identifier for the parent Web site for the list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ParentWebUrl**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. The URL of the parent Web site for the list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ReadSecurity**</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Optional. Specifies the Read security setting for the list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RequestAccessEnabled**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the option to allow users to request access to the list is available; **true</span> if requesting access is enabled, otherwise <span class="keyword">false**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RootFolderId**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Unique identifier of the folder that contains all of the files used in working with the list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RootFolderUrl**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Server-relative URL to the folder that contains files used in working with the list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**SendToLocationName**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. File name to use when copying an item in the list to another document library.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SendToLocationUrl**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. URL to use when copying an item in the list to another document library.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowUser**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether user names are shown in the results of a survey; **true</span> if user names are shown, otherwise <span class="keyword">false**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TemplateFeatureId**</p></td>
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
<td align="left"><p>Optional. Unique identifier of a template feature that is associated with the list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Title**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Display title for the list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Version**</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Optional. Version number of the list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**WriteSecurity**</p></td>
<td align="left"><p>xs:int</p></td>
<td align="left"><p>Optional. Specifies the Write security setting for the list.</p></td>
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
<td align="left"><p><span sdata="link"><a href="contenttypes-element-deploymentmanifest.htm">ContentTypes Element (DeploymentManifest)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="deletedfields-element-deploymentmanifest.htm">DeletedFields Element (DeploymentManifest)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="eventreceivers-element-deploymentmanifestsplist.htm">EventReceivers Element (DeploymentManifest - SPList)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="fields-element-deploymentmanifestsplist.htm">Fields Element (DeploymentManifest - SPList)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="forms-element-deploymentmanifest.htm">Forms Element (DeploymentManifest)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="views-element-deploymentmanifest.htm">Views Element (DeploymentManifest)</a></span></p></td>
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
<td align="left"><p><span sdata="link"><a href="spobject-element-deploymentmanifest.htm">SPObject Element (DeploymentManifest)</a></span></p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer" target="T:Microsoft.SharePoint.SPList"><span
class="nolink">SPList</span></span>

<span sdata="cer"
target="T:Microsoft.SharePoint.SPListTemplateType"><span
class="nolink">SPListTemplateType</span></span>

#### Concepts

<span sdata="link">[DeploymentManifest
Schema](deploymentmanifest-schema.htm)</span>








