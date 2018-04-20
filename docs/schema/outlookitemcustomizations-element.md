---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: bb7f173c-c9a8-4e71-94bf-743fed55378f
---

# OutlookItemCustomizations Element

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Describes how external data should appear in Microsoft Outlook 2010 and what other customizations you need in Outlook.

**Namespace**: http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest

**Schema**: SolutionManifestDefinitions

```XML
<OfficeItemCustomizations xsl:type="OutlookItemCustomizations" ItemTypeDisplayName = "String" 
MessageClass = "String" Description = "String"> </OfficeItemCustomizations>
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
<td align="left"><p>**ItemTypeDisplayName**</p></td>
<td align="left"><p>The display name of the Outlook item type.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**MessageClass**</p></td>
<td align="left"><p>Used to identify the form used to display the item. It follows the format: `IPM.<OutlookItemType>.<ContentTypeName>`.</p>
<p>Example: IPM.Contact.Customer</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>A description for the customizations.</p>
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
<td align="left"><p>**OfficeItemProperties**</p></td>
<td align="left"><p>Used to describe the fields of an external content type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FormRegions**</p></td>
<td align="left"><p>Used to describe the properties of the form region used to display the external data.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**OutlookFolder**</p></td>
<td align="left"><p>Used to describe Outlook folder that contains the external data.</p></td>
</tr>
<tr class="even">
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
<td align="left"><p>**OfficeItemCustomizations**</p></td>
<td align="left"><p>Describes Outlook-specific customizations.</p></td>
</tr>
</tbody>
</table>

<br/>

<br/>








