---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f07210c3-2c1a-4c4d-b9b8-d9d30c57d8c8
---

# DeploymentRequirements Schema

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The DeploymentRequirements Schema provides validation for the Requirements.xml file exported to the content migration package. The Requirements.xml file maintains a list of deployment requirements in the form of installation requirements on the migration target, such as Feature definitions, template versions, Web Part assemblies, language packs, and so forth.

The following table lists elements in the DeploymentRequirements.xsd schema file.

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
<td align="left"><p><span sdata="link"><a href="requirement-element-deploymentrequirements.md">Requirement Element (DeploymentRequirements)</a></span></p></td>
<td align="left"><p>Represents specific deployment export requirement objects (**SPRequirement**).</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="requirements-element-deploymentrequirements.md">Requirements Element (DeploymentRequirements)</a></span></p></td>
<td align="left"><p>Represents a container of deployment export requirement objects.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="sprequirementobjecttype-simple-type-deploymentrequirements.md">SPRequirementObjectType Simple Type (DeploymentRequirements)</a></span></p></td>
<td align="left"><p>Enumeration simple type that provides values for the **Type** attribute on the <span sdata="link"><a href="requirement-element-deploymentrequirements.md">Requirement Element (DeploymentRequirements)</a>. The value specifies the object type of the deployment requirement specified with the content migration package.</p></td>
</tr>
</tbody>
</table>

<br/>

## See also

- [Content migration schemas](content-migration-schemas.md)








