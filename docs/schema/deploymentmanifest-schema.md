---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- schemas [sharepoint 2010], deploymentmanifest,content migration [SharePoint 2010],content migration schema
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: adbf1d38-f80f-45b0-b3c9-ceabcc1a75bd
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
<td align="left"># DeploymentManifest Schema</td>
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

The DeploymentManifest.xsd schema file supports validation of the
Manifest.xml file (or files) on export. This manifest file is the core
migration file, as it captures a record of the contents and structure of
the source site so that the migration operation can fully reconstitute
the source site and its components upon import to the destination site.

The DeploymentManifest Schema (as with the other seven deployment
schemas) reflect inputs provided using APIs provided in the <span
sdata="cer" target="N:Microsoft.SharePoint.Deployment"><span
class="nolink">Microsoft.SharePoint.Deployment</span></span> namespace.


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following table lists elements in the DeploymentManifest.xsd schema
file. The **Type** column lists the type
declaration when the element has a custom type declaration. The types
are not documented unless documentation of the element fails to expose
the structure of the corresponding type (in cases where there is no
one-to-one mapping between a type declaration and its corresponding
element).

For documentation of types that are not exposed as elements, see <span
sdata="link">[Selected Type
Definitions](selected-type-definitions.htm)</span>.

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
<td align="left"><p>Where an element is declared more than once, but in different type definitions, the type definition in which each element is declared is listed in parentheses beside the element. For example, the **EventReceivers</span> element is declared four times, but each time in a different complex type definition: <span class="keyword">EventReceivers (SPFile)</span>, <span class="keyword">EventReceivers (SPList)</span>, <span class="keyword">EventReceivers (SPListItem)</span>, and <span class="keyword">EventReceivers (SPWeb)**.</p></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Type</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="aggregations-element-deployment-manifestspview.htm">Aggregations Element (Deployment Manifest - SPView)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="aggregations-element-deploymentmanifestspwebpart.htm">Aggregations Element (DeploymentManifest - SPWebPart)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="assignment-element-deploymentmanifest.htm">Assignment Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**DeploymentAssignment**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="attachment-element-deploymentmanifest.htm">Attachment Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPAttachment**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="attachments-element-deploymentmanifest.htm">Attachments Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPAttachmentCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="calendarviewstyles-element-deploymentmanifestspview.htm">CalendarViewStyles Element (DeploymentManifest - SPView)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="calendarviewstyles-element-deploymentmanifestspwebpart.htm">CalendarViewStyles Element (DeploymentManifest - SPWebPart)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="contenttype-element-deploymentmanifest.htm">ContentType Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPContentType**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="contenttypes-element-deploymentmanifest.htm">ContentTypes Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPContentTypeCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="deletedfield-element-deploymentmanifest.htm">DeletedField Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**DeletedField**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="deletedfields-element-deploymentmanifest.htm">DeletedFields Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**ListDeletedFields**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="documentlibrary-element-deploymentmanifest.htm">DocumentLibrary Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPDocumentLibrary**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="documenttemplate-element-deploymentmanifest.htm">DocumentTemplate Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPDocTemplate**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="eventreceiver-element-deploymentmanifest.htm">EventReceiver Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPEventReceiverDefinition**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="eventreceivers-element-deploymentmanifestspfile.htm">EventReceivers Element (DeploymentManifest - SPFile)</a></span></p></td>
<td align="left"><p>**SPEventReceiverDefinitionCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="eventreceivers-element-deploymentmanifestsplist.htm">EventReceivers Element (DeploymentManifest - SPList)</a></span></p></td>
<td align="left"><p>**SPEventReceiverDefinitionCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="eventreceivers-element-deploymentmanifestsplistitem.htm">EventReceivers Element (DeploymentManifest - SPListItem)</a></span></p></td>
<td align="left"><p>**SPEventReceiverDefinitionCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="eventreceivers-element-deploymentmanifestspweb.htm">EventReceivers Element (DeploymentManifest - SPWeb)</a></span></p></td>
<td align="left"><p>**SPEventReceiverDefinitionCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="feature-element-deploymentmanifest.htm">Feature Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPFeature**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="field-element-deploymentmanifestspfieldcollection.htm">Field Element (DeploymentManifest - SPFieldCollection)</a></span></p></td>
<td align="left"><p>**SPField**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="field-element-deploymentmanifestfielddatacollection.htm">Field Element (DeploymentManifest - FieldDataCollection)</a></span></p></td>
<td align="left"><p>**DictionaryEntry**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="field-element-deploymentmanifestdeploymentfieldtemplate.htm">Field Element (DeploymentManifest - DeploymentFieldTemplate)</a></span></p></td>
<td align="left"><p>**SPField**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="fieldref-element-deploymentmanifestspfieldcollection.htm">FieldRef Element (DeploymentManifest - SPFieldCollection)</a></span></p></td>
<td align="left"><p>**SPFieldLink**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="fieldref-element-deploymentmanifestspfieldlinkcollection.htm">FieldRef Element (DeploymentManifest - SPFieldLinkCollection)</a></span></p></td>
<td align="left"><p>**SPFieldLink**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="fields-element-deploymentmanifestsplist.htm">Fields Element (DeploymentManifest - SPList)</a></span></p></td>
<td align="left"><p>**SPFieldCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="fields-element-deploymentmanifestsplist.htm">Fields Element (DeploymentManifest - SPList)</a></span></p></td>
<td align="left"><p>**SPFieldCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="fieldtemplate-element-deploymentmanifest.htm">FieldTemplate Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**DeploymentFieldTemplate**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="file-element-deploymentmanifestspgenericobject.htm">File Element (DeploymentManifest - SPGenericObject)</a></span></p></td>
<td align="left"><p>**SPFile**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="file-element-deploymentmanifestspfileversioncollection.htm">File Element (DeploymentManifest - SPFileVersionCollection)</a></span></p></td>
<td align="left"><p>**SPFile**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="folder-element-deploymentmanifest.htm">Folder Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPFolder**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="form-element-deploymentmanifest.htm">Form Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPForm**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="formats-element-deploymentmanifestspview.htm">Formats Element (DeploymentManifest - SPView)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="formats-element-deploymentmanifestspwebpart.htm">Formats Element (DeploymentManifest - SPWebPart)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="forms-element-deploymentmanifest.htm">Forms Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPFormCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="groupbyfooter-element-deploymentmanifestspview.htm">GroupByFooter Element (DeploymentManifest - SPView)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="groupbyfooter-element-deploymentmanifestspwebpart.htm">GroupByFooter Element (DeploymentManifest - SPWebPart)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="groupbyheader-deploymentmanifestspview.htm">GroupByHeader (DeploymentManifest - SPView)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="groupbyheader-deploymentmanifestspwebpart.htm">GroupByHeader (DeploymentManifest - SPWebPart)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="groupx-element-deploymentmanifest.htm">GroupX Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**DeploymentGroupX**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="link-element-deploymentmanifest.htm">Link Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPLink**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="links-element-deploymentmanifestspfile.htm">Links Element (DeploymentManifest - SPFile)</a></span></p></td>
<td align="left"><p>**SPLinkCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="links-element-deploymentmanifestsplistitem.htm">Links Element (DeploymentManifest - SPListItem)</a></span></p></td>
<td align="left"><p>**SPLinkCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="list-element-deploymentmanifest.htm">List Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPList**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="listformbody-element-deploymentmanifestspview.htm">ListFormBody Element (DeploymentManifest - SPView)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="listformbody-element-deploymentmanifestspwebpart.htm">ListFormBody Element (DeploymentManifest - SPWebPart)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="listitem-element-deploymentmanifestspgenericobject.htm">ListItem Element (DeploymentManifest - SPGenericObject)</a></span></p></td>
<td align="left"><p>**SPListItem**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="listitem-element-deploymentmanifestsplistitemversioncollection.htm">ListItem Element (DeploymentManifest - SPListItemVersionCollection)</a></span></p></td>
<td align="left"><p>**SPListItem**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="listtemplate-element-deploymentmanifest.htm">ListTemplate Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPListTemplate**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="module-element-deploymentmanifest.htm">Module Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPModule**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="pagedclientcallbackrowset-element-deploymentmanifestspview.htm">PagedClientCallbackRowset Element (DeploymentManifest - SPView)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="pagedclientcallbackrowset-element-deploymentmanifestspwebpart.htm">PagedClientCallbackRowset Element (DeploymentManifest - SPWebPart)</a></span>)</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="pagedrecurrencerowset-element-deploymentmanifestspview.htm">PagedRecurrenceRowset Element (DeploymentManifest - SPView)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="pagedrecurrencerowset-element-deploymentmanifestspwebpart.htm">PagedRecurrenceRowset Element (DeploymentManifest - SPWebPart)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="pagedrowset-element-deploymentmanifestspview.htm">PagedRowset Element (DeploymentManifest - SPView)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="pagedrowset-element-deploymentmanifestspwebpart.htm">PagedRowset Element (DeploymentManifest - SPWebPart)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="personalization-element-deploymentmanifest.htm">Personalization Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPPersonalization**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="personalizations-element-deploymentmanifest.htm">Personalizations Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPPersonalizationCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="picturelibrary-element-deploymentmanifest.htm">PictureLibrary Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPPictureLibrary**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="properties-element-deploymentmanifestspmodule.htm">Properties Element (DeploymentManifest - SPModule)</a></span></p></td>
<td align="left"><p>**Dictionary**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-deploymentmanifestspfolder.htm">Properties Element (DeploymentManifest - SPFolder)</a></span></p></td>
<td align="left"><p>**Dictionary**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="properties-element-deploymentmanifestspfile.htm">Properties Element (DeploymentManifest - SPFile)</a></span></p></td>
<td align="left"><p>**Dictionary**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-deploymentmanifestspattachment.htm">Properties Element (DeploymentManifest - SPAttachment)</a></span></p></td>
<td align="left"><p>**Dictionary**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="properties-element-deploymentmanifestspweb.htm">Properties Element (DeploymentManifest - SPWeb)</a></span></p></td>
<td align="left"><p>**Dictionary**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="property-element-deploymentmanifest.htm">Property Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**DictionaryEntry**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="query-element-deploymentmanifestspview.htm">Query Element (DeploymentManifest - SPView)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="query-element-deploymentmanifestspwebpart.htm">Query Element (DeploymentManifest - SPWebPart)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="role-element-deploymentmanifest.htm">Role Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**DeploymentRole**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="roleassignment-element-deploymentmanifest.htm">RoleAssignment Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**DeploymentRoleAssignment**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="roleassignments-element-deploymentmanifest.htm">RoleAssignments Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**DeploymentRoleAssigments**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="roles-element-deploymentmanifest.htm">Roles Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**DeploymentRoles**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="rolex-element-deploymentmanifest.htm">RoleX Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**DeploymentRoleX**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="rowlimit-element-deploymentmanifestspview.htm">RowLimit Element (DeploymentManifest - SPView)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="rowlimit-element-deploymentmanifestspwebpart.htm">RowLimit Element (DeploymentManifest - SPWebPart)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="rowlimitexceeded-element-deploymentmanifestspview.htm">RowLimitExceeded Element (DeploymentManifest - SPView)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="rowlimitexceeded-element-deploymentmanifestspwebpart.htm">RowLimitExceeded Element (DeploymentManifest - SPWebPart)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="script-element-deploymentmanifestspview.htm">Script Element (DeploymentManifest - SPView)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="script-element-deploymentmanifestspwebpart.htm">Script Element (DeploymentManifest - SPWebPart)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="site-element-deploymentmanifest.htm">Site Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPSite**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="spobject-element-deploymentmanifest.htm">SPObject Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPGenericObject**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="spobjects-element-deploymentmanifest.htm">SPObjects Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPGenericObjectCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="toolbar-element-deploymentmanifestspview.htm">Toolbar Element (DeploymentManifest - SPView)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="toolbar-element-deploymentmanifestspwebpart.htm">Toolbar Element (DeploymentManifest - SPWebPart)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="userx-element-deploymentmanifest.htm">UserX Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**DeploymentUserX**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="versions-element-deploymentmanifestspfile.htm">Versions Element (DeploymentManifest - SPFile)</a></span></p></td>
<td align="left"><p>**SPFileVersionCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="versions-element-deploymentmanifestsplistitem.htm">Versions Element (DeploymentManifest - SPListItem)</a></span></p></td>
<td align="left"><p>**SPListItemVersionCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="view-element-deploymentmanifest.htm">View Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPView**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="viewbidiheader-element-deploymentmanifestspview.htm">ViewBidiHeader Element (DeploymentManifest - SPView)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="viewbidiheader-element-deploymentmanifestspwebpart.htm">ViewBidiHeader Element (DeploymentManifest - SPWebPart)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="view-body-element-deploymentmanifestspview.htm">View Body Element (DeploymentManifest - SPView)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="view-body-element-deploymentmanifestspwebpart.htm">View Body Element (DeploymentManifest - SPWebPart)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="viewdata-element-deploymentmanifestspview.htm">ViewData Element (DeploymentManifest - SPView)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="viewdata-element-deploymentmanifestspwebpart.htm">ViewData Element (DeploymentManifest - SPWebPart)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="viewempty-element-deploymentmanifestspview.htm">ViewEmpty Element (DeploymentManifest - SPView)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="viewempty-element-deploymentmanifestspwebpart.htm">ViewEmpty Element (DeploymentManifest - SPWebPart)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="viewfields-element-deploymentmanifestspview.htm">ViewFields Element (DeploymentManifest - SPView)</a></span></p></td>
<td align="left"><p>**SPFieldLinkCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="viewfields-element-deploymentmanifestspwebpart.htm">ViewFields Element (DeploymentManifest - SPWebPart)</a></span></p></td>
<td align="left"><p>**SPFieldLinkCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="viewfooter-element-deploymentmanifestspview.htm">ViewFooter Element (DeploymentManifest - SPView)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="viewfooter-element-deploymentmanifestspwebpart.htm">ViewFooter Element (DeploymentManifest - SPWebPart)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="viewheader-element-deploymentmanifestspview.htm">ViewHeader Element (DeploymentManifest - SPView)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="viewheader-element-deploymentmanifestspwebpart.htm">ViewHeader Element (DeploymentManifest - SPWebPart)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="views-element-deploymentmanifest.htm">Views Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPViewCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="viewstyle-element-deploymentmanifestspview.htm">ViewStyle Element (DeploymentManifest - SPView)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="viewstyle-element-deploymentmanifestspwebpart.htm">ViewStyle Element (DeploymentManifest - SPWebPart)</a></span></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="web-element-deploymentmanifest.htm">Web Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPWeb**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="webpart-element-deploymentmanifest.htm">WebPart Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPWebPart**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="webparts-element-deploymentmanifest.htm">WebParts Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPWebPartCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="webstructure-element-deploymentmanifest.htm">WebStructure Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**DeploymentWebStructure**</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="webtemplate-element-deploymentmanifest.htm">WebTemplate Element (DeploymentManifest)</a></span></p></td>
<td align="left"><p>**SPWebTemplate**</p></td>
</tr>
</tbody>
</table>


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The table describes simple types that do not have a one-to-one mapping
with a documented element, and are therefore documented individually.

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Type</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="anonymousstate-simple-type-deploymentmanifest.htm">AnonymousState Simple Type (DeploymentManifest)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="defaultitemopen-simple-type-deploymentmanifest.htm">DefaultItemOpen Simple Type (DeploymentManifest)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="draftvisibilitytype-simple-type-deploymentmanifest.htm">DraftVisibilityType Simple Type (DeploymentManifest)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentmanifest.htm">Guid Simple Type (DeploymentManifest)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="listitemdoctype-simple-type-deploymentmanifest.htm">ListItemDocType Simple Type (DeploymentManifest)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="securitymodificationtype-simple-type-deploymentmanifest.htm">SecurityModificationType Simple Type (DeploymentManifest)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="spbasetype-simple-type-deploymentmanifest.htm">SPBaseType Simple Type (DeploymentManifest)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="spdictionaryentryaccess-simple-type-deploymentmanifest.htm">SPDictionaryEntryAccess Simple Type (DeploymentManifest)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="spdictionaryentryvaluetype-simple-type-deploymentmanifest.htm">SPDictionaryEntryValueType Simple Type (DeploymentManifest)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="speventhosttype-simple-type-deploymentmanifest.htm">SPEventHostType Simple Type (DeploymentManifest)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="speventreceivertype-simple-type-deploymentmanifest.htm">SPEventReceiverType Simple Type (DeploymentManifest)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="splisttemplatetype-simple-type-deploymentmanifest.htm">SPListTemplateType Simple Type (DeploymentManifest)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="spmoderationstatustype-simple-type-deploymentmanifest.htm">SPModerationStatusType Simple Type (DeploymentManifest)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="spobjecttype-simple-type-deploymentmanifest.htm">SPObjectType Simple Type (DeploymentManifest)</a></span></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="spviewscope-simple-type-deploymentmanifest.htm">SPViewScope Simple Type (DeploymentManifest)</a></span></p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="truefalse-simple-type-deploymentmanifest.htm">TRUEFALSE Simple Type (DeploymentManifest)</a></span></p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Reference

<span sdata="cer" target="N:Microsoft.SharePoint.Deployment"><span
class="nolink">Microsoft.SharePoint.Deployment</span></span>

#### Concepts

<span sdata="link">[Selected Type
Definitions](selected-type-definitions.htm)</span>








