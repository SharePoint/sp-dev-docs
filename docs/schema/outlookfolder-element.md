---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: c4b78ba3-f271-4d7a-9e7a-ed3ec809ae65
---

# OutlookFolder Element

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Describes the Microsoft Outlook 2010 folder that contains the external data.

**Namespace**: http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest

**Schema**: SolutionManifestDefinitions

```XML
<OutlookFolder FolderDisplayName = "String" NativeType = "NativeFolderType"
 SubscriptionName = "String" FolderName = "String" FolderGroup = "String" CanCreate = 
"Boolean" CanUpdate = "Boolean" CanDelete = "Boolean" Name = "String"
 Description  = "String"> </OutlookFolder>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="80%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**FolderDisplayName**</p></td>
<td align="left"><p>The display name of the Outlook folder.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**NativeType**</p></td>
<td align="left"><p>The type of the Outlook folder.</p>
<p>Required.</p>
<p>The following are the possible values for this attribute:</p>
<ul>
<li><p>FolderCalendar</p></li>
<li><p>FolderContacts</p></li>
<li><p>FolderInbox</p></li>
<li><p>FolderTasks</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**SubscriptionName**</p></td>
<td align="left"><p>The name of the cache subscription.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FolderName**</p></td>
<td align="left"><p>The name of the Outlook folder.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**FolderGroup**</p></td>
<td align="left"><p>The folder group name.</p>
<p>Optional.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CanCreate**</p></td>
<td align="left"><p>Specifies whether users can create items in this folder.</p>
<p>Optional.</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**CanUpdate**</p></td>
<td align="left"><p>Specifies whether users can update items in this folder.</p>
<p>Optional.</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CanDelete**</p></td>
<td align="left"><p>Specifies whether users can delete items in this folder.</p>
<p>Optional.</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>The name of the folder.</p>
<p>Required.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>A description for the folder.</p>
<p>Optional.</p>
<p>Attribute type: **String**</p></td>
</tr>
</tbody>
</table>

<br/>

### Child elements

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Views**</p></td>
<td align="left"><p>Use to describe Outlook views.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Associations**</p></td>
<td align="left"><p>Used to describe associations.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Picture**</p></td>
<td align="left"><p>Used to describe the icon to use in Microsoft Outlook 2010.</p></td>
</tr>
</tbody>
</table>

<br/>

### Parent elements

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**OutlookItemCustomizations**</p></td>
<td align="left"><p>Used to describe Outlook-specific customizations.</p></td>
</tr>
</tbody>
</table>

<br/>

<br/>








