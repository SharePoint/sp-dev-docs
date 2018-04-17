---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: adbf1d38-f80f-45b0-b3c9-ceabcc1a75bd
---

# DeploymentManifest schema

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The DeploymentManifest.xsd schema file supports validation of the Manifest.xml file (or files) on export. This manifest file is the core migration file, as it captures a record of the contents and structure of the source site so that the migration operation can fully reconstitute the source site and its components upon import to the destination site.

The DeploymentManifest schema (as with the other seven deployment schemas) reflects inputs provided using APIs provided in the Microsoft.SharePoint.Deployment namespace.

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
<th align="left"><p>element</p></th>
<th align="left"><p>Type</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="aggregations-element-deployment-manifestspview.md">Aggregations element (Deployment Manifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="aggregations-element-deploymentmanifestspwebpart.md">Aggregations element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="assignment-element-deploymentmanifest.md">Assignment element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DeploymentAssignment**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="attachment-element-deploymentmanifest.md">Attachment element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPAttachment**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="attachments-element-deploymentmanifest.md">Attachments element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPAttachmentCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="calendarviewstyles-element-deploymentmanifestspview.md">CalendarViewStyles element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="calendarviewstyles-element-deploymentmanifestspwebpart.md">CalendarViewStyles element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="contenttype-element-deploymentmanifest.md">ContentType element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPContentType**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="contenttypes-element-deploymentmanifest.md">ContentTypes element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPContentTypeCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="deletedfield-element-deploymentmanifest.md">DeletedField element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DeletedField**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="deletedfields-element-deploymentmanifest.md">DeletedFields element (DeploymentManifest)</a></p></td>
<td align="left"><p>**ListDeletedFields**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="documentlibrary-element-deploymentmanifest.md">DocumentLibrary element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPDocumentLibrary**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="documenttemplate-element-deploymentmanifest.md">DocumentTemplate element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPDocTemplate**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="eventreceiver-element-deploymentmanifest.md">EventReceiver element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPEventReceiverDefinition**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="eventreceivers-element-deploymentmanifestspfile.md">EventReceivers element (DeploymentManifest - SPFile)</a></p></td>
<td align="left"><p>**SPEventReceiverDefinitionCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="eventreceivers-element-deploymentmanifestsplist.md">EventReceivers element (DeploymentManifest - SPList)</a></p></td>
<td align="left"><p>**SPEventReceiverDefinitionCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="eventreceivers-element-deploymentmanifestsplistitem.md">EventReceivers element (DeploymentManifest - SPListItem)</a></p></td>
<td align="left"><p>**SPEventReceiverDefinitionCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="eventreceivers-element-deploymentmanifestspweb.md">EventReceivers element (DeploymentManifest - SPWeb)</a></p></td>
<td align="left"><p>**SPEventReceiverDefinitionCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="feature-element-deploymentmanifest.md">Feature element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPFeature**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="field-element-deploymentmanifestspfieldcollection.md">Field element (DeploymentManifest - SPFieldCollection)</a></p></td>
<td align="left"><p>**SPField**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="field-element-deploymentmanifestfielddatacollection.md">Field element (DeploymentManifest - FieldDataCollection)</a></p></td>
<td align="left"><p>**DictionaryEntry**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="field-element-deploymentmanifestdeploymentfieldtemplate.md">Field element (DeploymentManifest - DeploymentFieldTemplate)</a></p></td>
<td align="left"><p>**SPField**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="fieldref-element-deploymentmanifestspfieldcollection.md">FieldRef element (DeploymentManifest - SPFieldCollection)</a></p></td>
<td align="left"><p>**SPFieldLink**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="fieldref-element-deploymentmanifestspfieldlinkcollection.md">FieldRef element (DeploymentManifest - SPFieldLinkCollection)</a></p></td>
<td align="left"><p>**SPFieldLink**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="fields-element-deploymentmanifestsplist.md">Fields element (DeploymentManifest - SPList)</a></p></td>
<td align="left"><p>**SPFieldCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="fields-element-deploymentmanifestsplist.md">Fields element (DeploymentManifest - SPList)</a></p></td>
<td align="left"><p>**SPFieldCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="fieldtemplate-element-deploymentmanifest.md">FieldTemplate element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DeploymentFieldTemplate**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="file-element-deploymentmanifestspgenericobject.md">File element (DeploymentManifest - SPGenericObject)</a></p></td>
<td align="left"><p>**SPFile**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="file-element-deploymentmanifestspfileversioncollection.md">File element (DeploymentManifest - SPFileVersionCollection)</a></p></td>
<td align="left"><p>**SPFile**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="folder-element-deploymentmanifest.md">Folder element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPFolder**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="form-element-deploymentmanifest.md">Form element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPForm**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="formats-element-deploymentmanifestspview.md">Formats element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="formats-element-deploymentmanifestspwebpart.md">Formats element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="forms-element-deploymentmanifest.md">Forms element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPFormCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="groupbyfooter-element-deploymentmanifestspview.md">GroupByFooter element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="groupbyfooter-element-deploymentmanifestspwebpart.md">GroupByFooter element (DeploymentManifest - SPWebPart)</a></p></td>
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
<td align="left"><p><a href="groupx-element-deploymentmanifest.md">GroupX element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DeploymentGroupX**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="link-element-deploymentmanifest.md">Link element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPLink**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="links-element-deploymentmanifestspfile.md">Links element (DeploymentManifest - SPFile)</a></p></td>
<td align="left"><p>**SPLinkCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="links-element-deploymentmanifestsplistitem.md">Links element (DeploymentManifest - SPListItem)</a></p></td>
<td align="left"><p>**SPLinkCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="list-element-deploymentmanifest.md">List element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPList**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="listformbody-element-deploymentmanifestspview.md">ListFormBody element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="listformbody-element-deploymentmanifestspwebpart.md">ListFormBody element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="listitem-element-deploymentmanifestspgenericobject.md">ListItem element (DeploymentManifest - SPGenericObject)</a></p></td>
<td align="left"><p>**SPListItem**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="listitem-element-deploymentmanifestsplistitemversioncollection.md">ListItem element (DeploymentManifest - SPListItemVersionCollection)</a></p></td>
<td align="left"><p>**SPListItem**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="listtemplate-element-deploymentmanifest.md">ListTemplate element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPListTemplate**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="module-element-deploymentmanifest.md">Module element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPModule**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="pagedclientcallbackrowset-element-deploymentmanifestspview.md">PagedClientCallbackRowset element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="pagedclientcallbackrowset-element-deploymentmanifestspwebpart.md">PagedClientCallbackRowset element (DeploymentManifest - SPWebPart)</a>)</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="pagedrecurrencerowset-element-deploymentmanifestspview.md">PagedRecurrenceRowset element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="pagedrecurrencerowset-element-deploymentmanifestspwebpart.md">PagedRecurrenceRowset element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="pagedrowset-element-deploymentmanifestspview.md">PagedRowset element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="pagedrowset-element-deploymentmanifestspwebpart.md">PagedRowset element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="personalization-element-deploymentmanifest.md">Personalization element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPPersonalization**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="personalizations-element-deploymentmanifest.md">Personalizations element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPPersonalizationCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="picturelibrary-element-deploymentmanifest.md">PictureLibrary element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPPictureLibrary**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="properties-element-deploymentmanifestspmodule.md">Properties element (DeploymentManifest - SPModule)</a></p></td>
<td align="left"><p>**Dictionary**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="properties-element-deploymentmanifestspfolder.md">Properties element (DeploymentManifest - SPFolder)</a></p></td>
<td align="left"><p>**Dictionary**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="properties-element-deploymentmanifestspfile.md">Properties element (DeploymentManifest - SPFile)</a></p></td>
<td align="left"><p>**Dictionary**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="properties-element-deploymentmanifestspattachment.md">Properties element (DeploymentManifest - SPAttachment)</a></p></td>
<td align="left"><p>**Dictionary**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="properties-element-deploymentmanifestspweb.md">Properties element (DeploymentManifest - SPWeb)</a></p></td>
<td align="left"><p>**Dictionary**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="property-element-deploymentmanifest.md">Property element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DictionaryEntry**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="query-element-deploymentmanifestspview.md">Query element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="query-element-deploymentmanifestspwebpart.md">Query element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="role-element-deploymentmanifest.md">Role element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DeploymentRole**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="roleassignment-element-deploymentmanifest.md">RoleAssignment element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DeploymentRoleAssignment**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="roleassignments-element-deploymentmanifest.md">RoleAssignments element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DeploymentRoleAssigments**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="roles-element-deploymentmanifest.md">Roles element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DeploymentRoles**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="rolex-element-deploymentmanifest.md">RoleX element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DeploymentRoleX**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="rowlimit-element-deploymentmanifestspview.md">RowLimit element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="rowlimit-element-deploymentmanifestspwebpart.md">RowLimit element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="rowlimitexceeded-element-deploymentmanifestspview.md">RowLimitExceeded element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="rowlimitexceeded-element-deploymentmanifestspwebpart.md">RowLimitExceeded element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="script-element-deploymentmanifestspview.md">Script element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="script-element-deploymentmanifestspwebpart.md">Script element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="site-element-deploymentmanifest.md">Site element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPSite**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="spobject-element-deploymentmanifest.md">SPObject element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPGenericObject**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="spobjects-element-deploymentmanifest.md">SPObjects element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPGenericObjectCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="toolbar-element-deploymentmanifestspview.md">Toolbar element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="toolbar-element-deploymentmanifestspwebpart.md">Toolbar element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="userx-element-deploymentmanifest.md">UserX element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DeploymentUserX**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="versions-element-deploymentmanifestspfile.md">Versions element (DeploymentManifest - SPFile)</a></p></td>
<td align="left"><p>**SPFileVersionCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="versions-element-deploymentmanifestsplistitem.md">Versions element (DeploymentManifest - SPListItem)</a></p></td>
<td align="left"><p>**SPListItemVersionCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="view-element-deploymentmanifest.md">View element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPView**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="viewbidiheader-element-deploymentmanifestspview.md">ViewBidiHeader element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="viewbidiheader-element-deploymentmanifestspwebpart.md">ViewBidiHeader element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="view-body-element-deploymentmanifestspview.md">View Body element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="view-body-element-deploymentmanifestspwebpart.md">View Body element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="viewdata-element-deploymentmanifestspview.md">ViewData element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="viewdata-element-deploymentmanifestspwebpart.md">ViewData element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="viewempty-element-deploymentmanifestspview.md">ViewEmpty element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="viewempty-element-deploymentmanifestspwebpart.md">ViewEmpty element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="viewfields-element-deploymentmanifestspview.md">ViewFields element (DeploymentManifest - SPView)</a></p></td>
<td align="left"><p>**SPFieldLinkCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="viewfields-element-deploymentmanifestspwebpart.md">ViewFields element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"><p>**SPFieldLinkCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="viewfooter-element-deploymentmanifestspview.md">ViewFooter element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="viewfooter-element-deploymentmanifestspwebpart.md">ViewFooter element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="viewheader-element-deploymentmanifestspview.md">ViewHeader element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="viewheader-element-deploymentmanifestspwebpart.md">ViewHeader element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="views-element-deploymentmanifest.md">Views element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPViewCollection**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="viewstyle-element-deploymentmanifestspview.md">ViewStyle element (DeploymentManifest - SPView)</a></p></td>
<td align="left"></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="viewstyle-element-deploymentmanifestspwebpart.md">ViewStyle element (DeploymentManifest - SPWebPart)</a></p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p><a href="web-element-deploymentmanifest.md">Web element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPWeb**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="webpart-element-deploymentmanifest.md">WebPart element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPWebPart**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="webparts-element-deploymentmanifest.md">WebParts element (DeploymentManifest)</a></p></td>
<td align="left"><p>**SPWebPartCollection**</p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="webstructure-element-deploymentmanifest.md">WebStructure element (DeploymentManifest)</a></p></td>
<td align="left"><p>**DeploymentWebStructure**</p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="webtemplate-element-deploymentmanifest.md">WebTemplate element (DeploymentManifest)</a></p></td>
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








