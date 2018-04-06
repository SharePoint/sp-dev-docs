---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: adbf1d38-f80f-45b0-b3c9-ceabcc1a75bd
---

# DeploymentManifest Schema

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The DeploymentManifest.xsd schema file supports validation of the Manifest.xml file (or files) on export. This manifest file is the core migration file, as it captures a record of the contents and structure of the source site so that the migration operation can fully reconstitute the source site and its components upon import to the destination site.

The DeploymentManifest Schema (as with the other seven deployment schemas) reflects inputs provided using APIs provided in the Microsoft.SharePoint.Deployment namespace.

## DeploymentManifest schema elements

The following table lists elements in the DeploymentManifest.xsd schema file. The **Type** column lists the type declaration when the element has a custom type declaration. The types are not documented unless documentation of the element fails to expose the structure of the corresponding type (in cases where there is no one-to-one mapping between a type declaration and its corresponding element).

For documentation of types that are not exposed as elements, see [Selected Type Definitions](selected-type-definitions.md).

> [!NOTE] 
> Where an element is declared more than once, but in different type definitions, the type definition in which each element is declared is listed in parentheses beside the element. 
>
> For example, the **EventReceivers** element is declared four times, but each time in a different complex type definition: EventReceivers (SPFile), EventReceivers (SPList), EventReceivers (SPListItem), and EventReceivers (SPWeb).

<br/>

<table>
<colgroup>
<col width="60%" />
<col width="40%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Type</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="aggregations-element-deployment-manifestspview.md">Aggregations Element (Deployment Manifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="aggregations-element-deploymentmanifestspwebpart.md">Aggregations Element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="assignment-element-deploymentmanifest.md">Assignment Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DeploymentAssignment**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="attachment-element-deploymentmanifest.md">Attachment Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPAttachment**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="attachments-element-deploymentmanifest.md">Attachments Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPAttachmentCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="calendarviewstyles-element-deploymentmanifestspview.md">CalendarViewStyles Element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="calendarviewstyles-element-deploymentmanifestspwebpart.md">CalendarViewStyles Element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="contenttype-element-deploymentmanifest.md">ContentType Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPContentType**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="contenttypes-element-deploymentmanifest.md">ContentTypes Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPContentTypeCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="deletedfield-element-deploymentmanifest.md">DeletedField Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DeletedField**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="deletedfields-element-deploymentmanifest.md">DeletedFields Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**ListDeletedFields**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="documentlibrary-element-deploymentmanifest.md">DocumentLibrary Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPDocumentLibrary**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="documenttemplate-element-deploymentmanifest.md">DocumentTemplate Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPDocTemplate**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="eventreceiver-element-deploymentmanifest.md">EventReceiver Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPEventReceiverDefinition**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="eventreceivers-element-deploymentmanifestspfile.md">EventReceivers Element (DeploymentManifest - SPFile)</a></p></td>
<td align="left"><p>**SPEventReceiverDefinitionCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="eventreceivers-element-deploymentmanifestsplist.md">EventReceivers Element (DeploymentManifest - SPList)</a></p></td>
<td align="left"><p>**SPEventReceiverDefinitionCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="eventreceivers-element-deploymentmanifestsplistitem.md">EventReceivers Element (DeploymentManifest - SPListItem)</a></p></td>
<td align="left"><p>**SPEventReceiverDefinitionCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="eventreceivers-element-deploymentmanifestspweb.md">EventReceivers Element (DeploymentManifest - SPWeb)</a></p></td>
<td align="left"><p>**SPEventReceiverDefinitionCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="feature-element-deploymentmanifest.md">Feature Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPFeature**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="field-element-deploymentmanifestspfieldcollection.md">Field Element (DeploymentManifest - SPFieldCollection)</a></p></td>
<td align="left"><p>**SPField**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="field-element-deploymentmanifestfielddatacollection.md">Field Element (DeploymentManifest - FieldDataCollection)</a></p></td>
<td align="left"><p>**DictionaryEntry**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="field-element-deploymentmanifestdeploymentfieldtemplate.md">Field Element (DeploymentManifest - DeploymentFieldTemplate)</a></p></td>
<td align="left"><p>**SPField**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="fieldref-element-deploymentmanifestspfieldcollection.md">FieldRef Element (DeploymentManifest - SPFieldCollection)</a></p></td>
<td align="left"><p>**SPFieldLink**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="fieldref-element-deploymentmanifestspfieldlinkcollection.md">FieldRef Element (DeploymentManifest - SPFieldLinkCollection)</a></p></td>
<td align="left"><p>**SPFieldLink**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="fields-element-deploymentmanifestsplist.md">Fields Element (DeploymentManifest - SPList)</a></p></td>
<td align="left"><p>**SPFieldCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="fields-element-deploymentmanifestsplist.md">Fields Element (DeploymentManifest - SPList)</a></p></td>
<td align="left"><p>**SPFieldCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="fieldtemplate-element-deploymentmanifest.md">FieldTemplate Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DeploymentFieldTemplate**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="file-element-deploymentmanifestspgenericobject.md">File Element (DeploymentManifest - SPGenericObject)</a></p></td>
<td align="left"><p>**SPFile**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="file-element-deploymentmanifestspfileversioncollection.md">File Element (DeploymentManifest - SPFileVersionCollection)</a></p></td>
<td align="left"><p>**SPFile**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="folder-element-deploymentmanifest.md">Folder Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPFolder**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="form-element-deploymentmanifest.md">Form Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPForm**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="formats-element-deploymentmanifestspview.md">Formats Element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="formats-element-deploymentmanifestspwebpart.md">Formats Element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="forms-element-deploymentmanifest.md">Forms Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPFormCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="groupbyfooter-element-deploymentmanifestspview.md">GroupByFooter Element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="groupbyfooter-element-deploymentmanifestspwebpart.md">GroupByFooter Element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="groupbyheader-deploymentmanifestspview.md">GroupByHeader (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="groupbyheader-deploymentmanifestspwebpart.md">GroupByHeader (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="groupx-element-deploymentmanifest.md">GroupX Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DeploymentGroupX**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="link-element-deploymentmanifest.md">Link Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPLink**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="links-element-deploymentmanifestspfile.md">Links Element (DeploymentManifest - SPFile)</a></p></td>
<td align="left"><p>**SPLinkCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="links-element-deploymentmanifestsplistitem.md">Links Element (DeploymentManifest - SPListItem)</a></p></td>
<td align="left"><p>**SPLinkCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="list-element-deploymentmanifest.md">List Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPList**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="listformbody-element-deploymentmanifestspview.md">ListFormBody Element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="listformbody-element-deploymentmanifestspwebpart.md">ListFormBody Element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="listitem-element-deploymentmanifestspgenericobject.md">ListItem Element (DeploymentManifest - SPGenericObject)</a></p></td>
<td align="left"><p>**SPListItem**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="listitem-element-deploymentmanifestsplistitemversioncollection.md">ListItem Element (DeploymentManifest - SPListItemVersionCollection)</a></p></td>
<td align="left"><p>**SPListItem**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="listtemplate-element-deploymentmanifest.md">ListTemplate Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPListTemplate**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="module-element-deploymentmanifest.md">Module Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPModule**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="pagedclientcallbackrowset-element-deploymentmanifestspview.md">PagedClientCallbackRowset Element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="pagedclientcallbackrowset-element-deploymentmanifestspwebpart.md">PagedClientCallbackRowset Element (DeploymentManifest - SPWebPart)</a>)</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="pagedrecurrencerowset-element-deploymentmanifestspview.md">PagedRecurrenceRowset Element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="pagedrecurrencerowset-element-deploymentmanifestspwebpart.md">PagedRecurrenceRowset Element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="pagedrowset-element-deploymentmanifestspview.md">PagedRowset Element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="pagedrowset-element-deploymentmanifestspwebpart.md">PagedRowset Element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="personalization-element-deploymentmanifest.md">Personalization Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPPersonalization**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="personalizations-element-deploymentmanifest.md">Personalizations Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPPersonalizationCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="picturelibrary-element-deploymentmanifest.md">PictureLibrary Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPPictureLibrary**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="properties-element-deploymentmanifestspmodule.md">Properties Element (DeploymentManifest - SPModule)</a></p></td>
<td align="left"><p>**Dictionary**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="properties-element-deploymentmanifestspfolder.md">Properties Element (DeploymentManifest - SPFolder)</a></p></td>
<td align="left"><p>**Dictionary**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="properties-element-deploymentmanifestspfile.md">Properties Element (DeploymentManifest - SPFile)</a></p></td>
<td align="left"><p>**Dictionary**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="properties-element-deploymentmanifestspattachment.md">Properties Element (DeploymentManifest - SPAttachment)</a></p></td>
<td align="left"><p>**Dictionary**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="properties-element-deploymentmanifestspweb.md">Properties Element (DeploymentManifest - SPWeb)</a></p></td>
<td align="left"><p>**Dictionary**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="property-element-deploymentmanifest.md">Property Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DictionaryEntry**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="query-element-deploymentmanifestspview.md">Query Element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="query-element-deploymentmanifestspwebpart.md">Query Element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="role-element-deploymentmanifest.md">Role Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DeploymentRole**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="roleassignment-element-deploymentmanifest.md">RoleAssignment Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DeploymentRoleAssignment**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="roleassignments-element-deploymentmanifest.md">RoleAssignments Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DeploymentRoleAssigments**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="roles-element-deploymentmanifest.md">Roles Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DeploymentRoles**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="rolex-element-deploymentmanifest.md">RoleX Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DeploymentRoleX**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="rowlimit-element-deploymentmanifestspview.md">RowLimit Element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="rowlimit-element-deploymentmanifestspwebpart.md">RowLimit Element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="rowlimitexceeded-element-deploymentmanifestspview.md">RowLimitExceeded Element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="rowlimitexceeded-element-deploymentmanifestspwebpart.md">RowLimitExceeded Element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="script-element-deploymentmanifestspview.md">Script Element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="script-element-deploymentmanifestspwebpart.md">Script Element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="site-element-deploymentmanifest.md">Site Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPSite**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="spobject-element-deploymentmanifest.md">SPObject Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPGenericObject**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="spobjects-element-deploymentmanifest.md">SPObjects Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPGenericObjectCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="toolbar-element-deploymentmanifestspview.md">Toolbar Element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="toolbar-element-deploymentmanifestspwebpart.md">Toolbar Element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="userx-element-deploymentmanifest.md">UserX Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DeploymentUserX**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="versions-element-deploymentmanifestspfile.md">Versions Element (DeploymentManifest - SPFile)</a></p></td>
<td align="left"><p>**SPFileVersionCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="versions-element-deploymentmanifestsplistitem.md">Versions Element (DeploymentManifest - SPListItem)</a></p></td>
<td align="left"><p>**SPListItemVersionCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="view-element-deploymentmanifest.md">View Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPView**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="viewbidiheader-element-deploymentmanifestspview.md">ViewBidiHeader Element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="viewbidiheader-element-deploymentmanifestspwebpart.md">ViewBidiHeader Element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="view-body-element-deploymentmanifestspview.md">View Body Element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="view-body-element-deploymentmanifestspwebpart.md">View Body Element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="viewdata-element-deploymentmanifestspview.md">ViewData Element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="viewdata-element-deploymentmanifestspwebpart.md">ViewData Element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="viewempty-element-deploymentmanifestspview.md">ViewEmpty Element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="viewempty-element-deploymentmanifestspwebpart.md">ViewEmpty Element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="viewfields-element-deploymentmanifestspview.md">ViewFields Element (DeploymentManifest - SPView)</a></p></td>
<td align="left"><p>**SPFieldLinkCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="viewfields-element-deploymentmanifestspwebpart.md">ViewFields Element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"><p>**SPFieldLinkCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="viewfooter-element-deploymentmanifestspview.md">ViewFooter Element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="viewfooter-element-deploymentmanifestspwebpart.md">ViewFooter Element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="viewheader-element-deploymentmanifestspview.md">ViewHeader Element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="viewheader-element-deploymentmanifestspwebpart.md">ViewHeader Element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="views-element-deploymentmanifest.md">Views Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPViewCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="viewstyle-element-deploymentmanifestspview.md">ViewStyle Element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="viewstyle-element-deploymentmanifestspwebpart.md">ViewStyle Element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="web-element-deploymentmanifest.md">Web Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPWeb**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="webpart-element-deploymentmanifest.md">WebPart Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPWebPart**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="webparts-element-deploymentmanifest.md">WebParts Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPWebPartCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="webstructure-element-deploymentmanifest.md">WebStructure Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DeploymentWebStructure**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="webtemplate-element-deploymentmanifest.md">WebTemplate Element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPWebTemplate**</p></td>
</tr>
</tbody>
</table>

## Selected DeploymentManifest type definitions

This table describes simple types that do not have a one-to-one mapping with a documented element, and are therefore documented individually.

<br/>

<table>
<colgroup>
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Type</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="anonymousstate-simple-type-deploymentmanifest.md">AnonymousState Simple Type (DeploymentManifest)</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="defaultitemopen-simple-type-deploymentmanifest.md">DefaultItemOpen Simple Type (DeploymentManifest)</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="draftvisibilitytype-simple-type-deploymentmanifest.md">DraftVisibilityType Simple Type (DeploymentManifest)</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="guid-simple-type-deploymentmanifest.md">Guid Simple Type (DeploymentManifest)</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="listitemdoctype-simple-type-deploymentmanifest.md">ListItemDocType Simple Type (DeploymentManifest)</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="securitymodificationtype-simple-type-deploymentmanifest.md">SecurityModificationType Simple Type (DeploymentManifest)</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="spbasetype-simple-type-deploymentmanifest.md">SPBaseType Simple Type (DeploymentManifest)</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="spdictionaryentryaccess-simple-type-deploymentmanifest.md">SPDictionaryEntryAccess Simple Type (DeploymentManifest)</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="spdictionaryentryvaluetype-simple-type-deploymentmanifest.md">SPDictionaryEntryValueType Simple Type (DeploymentManifest)</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="speventhosttype-simple-type-deploymentmanifest.md">SPEventHostType Simple Type (DeploymentManifest)</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="speventreceivertype-simple-type-deploymentmanifest.md">SPEventReceiverType Simple Type (DeploymentManifest)</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="splisttemplatetype-simple-type-deploymentmanifest.md">SPListTemplateType Simple Type (DeploymentManifest)</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="spmoderationstatustype-simple-type-deploymentmanifest.md">SPModerationStatusType Simple Type (DeploymentManifest)</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="spobjecttype-simple-type-deploymentmanifest.md">SPObjectType Simple Type (DeploymentManifest)</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="spviewscope-simple-type-deploymentmanifest.md">SPViewScope Simple Type (DeploymentManifest)</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="truefalse-simple-type-deploymentmanifest.md">TRUEFALSE Simple Type (DeploymentManifest)</a></p></td>
</tr>
</tbody>
</table>

<br/>

## See also

- [Selected Type Definitions](selected-type-definitions.md)
- [Content migration schemas](content-migration-schemas.md)








