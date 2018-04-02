---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 12fd8fb9-91eb-4f23-89d6-2870fb9e30a8
---

# OfficeItemProperty Element

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Describes how to display a field of an external content type in Microsoft Outlook 2010.

**Namespace**: http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest

**Schema**: SolutionManifestDefinitions

```XML
<OfficeItemProperty PropertyName = "String" PropertyType = "PropertyType" ReadOnly = "Bolean" OutlookDisplayFormat = "String" Name = "String" Description = 
"String"> </OfficeItemProperty>
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
<td align="left"><p>**PropertyName**</p></td>
<td align="left"><p>The name of the Outlook property this field maps to.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**PropertyType**</p></td>
<td align="left"><p>The data type of the Outlook property.</p>
<p>Required.</p>
<p>The following lists the possible values for this attribute:</p>
<p>**OutlookCurrency**</p>
<p>**OutlookDateTime**</p>
<p>**OutlookDuration**</p>
<p>**OutlookEnumeration**</p>
<p>**OutlookInteger**</p>
<p>**OutlookKeywords**</p>
<p>**OutlookNumber**</p>
<p>**OutlookPercent**</p>
<p>**OutlookText**</p>
<p>**OutlookYesNo**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ReadOnly**</p></td>
<td align="left"><p>Specifies whether this field should be read-only in Outlook.</p>
<p>Optional.</p>
<p>Attribute type: **Boolean**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**OutlookDisplayFormat**</p></td>
<td align="left"><p>The display format to be used for this field.</p>
<p>Optional.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>The name of the **OfficeItemProperty</span> from the **Entities** section in the solution manifest for this field.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>A description for the property.</p>
<p>Optional.</p>
<p>Attribute type: **String**</p></td>
</tr>
</tbody>
</table>

### Child elements

None.

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
<td align="left"><p>**OfficeItemProperties**</p></td>
<td align="left"><p>The **OfficeItemProperties** element.</p></td>
</tr>
</tbody>
</table>

<br/>

<br/>








