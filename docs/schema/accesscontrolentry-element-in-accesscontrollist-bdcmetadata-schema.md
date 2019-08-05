---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.AccessControlEntry
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 85e24489-0a6b-dfda-fb03-474fe7b0d947
---

# AccessControlEntry element in AccessControlList 

(BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Contains an access control entry (ACE) which specifies access rights for the parent element.

To learn more about the Business Connectivity Services and security, see [Business Connectivity Services Security Overview](http://technet.microsoft.com/en-us/library/ee661734(office.14).aspx).

**Namespace**: http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

**Schema**: BDCMetadata

```XML
    <AccessControlEntry Principal = "String"> </AccessControlEntry>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="30%" />
<col width="70%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Principal**</p></td>
<td align="left"><p>Required.</p>
<p>The name of the security principal that has this ACE.</p>
<p>Attribute type: **String**</p></td>
</tr>
</tbody>
</table>

### Child elements

<table>
<colgroup>
<col width="30%" />
<col width="70%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="right-element-in-accesscontrolentry-bdcmetadata-schema.md">Right element in AccessControlEntry (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>A **Right** element that specifies the permissions available to the security principal.</p></td>
</tr>
</tbody>
</table>

### Parent elements

<table>
<colgroup>
<col width="30%" />
<col width="70%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="accesscontrollist-element-bdcmetadata-schema.md">AccessControlList element (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The access control list (ACL) that contains this ACE.</p></td>
</tr>
</tbody>
</table>








