---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 903d18c8-eb4e-46a4-8350-480e5906eebf
---

# DeploymentUserGroupMap schema

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The DeploymentUserGroupMap schema provides validation for the UserGroup.xml file exported into the content migration package. The UserGroup.xml file maintains a list of users and user security groups with respect to access security and permissions.

## DeploymentUserGroupMap schema elements

The following table lists elements in the DeploymentUserGroupMap.xsd schema file.

<br/>

<table>
<colgroup>
<col width="40%" />
<col width="60%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="group-element-deploymentusergroupmap.md">Group element (DeploymentUserGroupMap)</a></span></p></td>
<td align="left"><p>Represents a deployment group object instance (**DeploymentGroup**) exported to the content migration package.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="groups-element-deploymentusergroupmap.md">Groups element (DeploymentUserGroupMap)</a></span></p></td>
<td align="left"><p>Represents a container object that holds deployment group (**DeploymentGroup**) object instances.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="user-element-deploymentusergroupmap.md">User element (DeploymentUserGroupMap)</a></span></p></td>
<td align="left"><p>Represent a deployment user object instance (**DeploymentUser**) for export to the content migration package.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="users-element-deploymentusergroupmap.md">Users element (DeploymentUserGroupMap)</a></span></p></td>
<td align="left"><p>Represents a container object that holds deployment user object instances (**DeploymentUser**).</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="member-element-deploymentusergroupmap.md">Member element (DeploymentUserGroupMap)</a></span></p></td>
<td align="left"><p>Represents a member of a Microsoft SharePoint Foundation deployment group object (**DeploymentGroup**).</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="usergroupmap-element-deploymentusergroupmap.md">UserGroupMap element (DeploymentUserGroupMap)</a></span></p></td>
<td align="left"><p>Represents an object (**DeploymentUserGroupMap**) that holds mappings for the Microsoft SharePoint Foundation deployment users and deployment groups that are exported to the content migration package.</p></td>
</tr>
</tbody>
</table>

<br/>

## See also

- [Content migration schemas](content-migration-schemas.md)







