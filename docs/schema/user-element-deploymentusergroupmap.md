---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 16571086-f2bc-49f5-8dd8-d2ce064de700
---

# User Element (DeploymentUserGroupMap)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents an instance of a deployment user (**DeploymentUser**) object included in the user group map (UserGroup.xml) file for export to the content migration package.

```XML
DECLARATION
<xs:element 
    name="User" 
    type="DeploymentUser" 
    minOccurs="0" maxOccurs="unbounded" 
/>

USAGE
<Users>
    <User
        Id="xs:string"
        Name="xs:string"
        Login="xs:string"
        Email="xs:string"
        IsDomainGroup="xs:boolean"
        IsSiteAdmin="xs:boolean"
        SystemId="xs:string"
        IsDeleted="xs:boolean"
    />
</Users>
```

### Type

**DeploymentUser**

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="60%" />
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
<td align="left"><p>**Id**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Identifier of the user.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Name of the user.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Login**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Required. Login name for the user.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Email**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. E-mail address for the user.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IsDomainGroup**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the user identity represents a domain group; **true** if the user is a domain group.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IsSiteAdmin**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the user is a Microsoft SharePoint Foundation site administrator; **true** if the user is a site administrator.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**SystemId**</p></td>
<td align="left"><p>xs:string</p></td>
<td align="left"><p>Optional. Represents the value of the Active Directory SID, which is converted to a base64 data type by using the <a href="https://msdn.microsoft.com/en-us/library/office/ee658990(v=office.14).aspx">ToBase64String</a> method.<br/><br/>Note that functionality provided by the SPExport type does not validate the data that is passed through the **SystemId** attribute.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**IsDeleted**</p></td>
<td align="left"><p>xs:boolean</p></td>
<td align="left"><p>Optional. Specifies whether the user has been deleted; **true** if the user has been deleted.</p></td>
</tr>
</tbody>
</table>

<br/>

### Child elements

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

<br/>

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="users-element-deploymentusergroupmap.md">Users Element (DeploymentUserGroupMap)</a></span></p></td>
</tr>
</tbody>
</table>

## See also

- [DeploymentUserGroupMap Schema](deploymentusergroupmap-schema.md)








