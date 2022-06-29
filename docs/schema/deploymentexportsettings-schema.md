---
title: DeploymentExportSettings schema
description: The DeploymentExportSettings schema provides validation for the ExportSettings.xml file.
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: f5deff87-c593-41b9-840e-43da5649a7dc
---

# DeploymentExportSettings schema

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The DeploymentExportSettings schema provides validation for the ExportSettings.xml file. This file contains the export settings that you can specify by using the **SPExportSettings** class and other classes that are part of the content migration object model represented in the **Microsoft.SharePoint.Deployment** namespace.

In addition to cataloging export settings, the ExportSettings.xml file also ensures that the subsequent import process (at the migration target site) enforces the directives specified in the export settings.

The ExportSettings.xml file also maintains a catalog of all objects exported to the migration package.

## DeploymentExportSettings schema elements

The following table lists elements in the DeploymentExportSettings.xsd schema file.

<br/>

| Element | Description |
| --- | --- |
| [ExportSettings element (DeploymentExportSettings)](exportsettings-element-deploymentexportsettings.md) | Root element, which provides an XML wrapper for the deployment export settings container object and a means for specifying security, versioning, and how to export. |
| [DeploymentObject element (DeploymentExportSettings)](deploymentobject-element-deploymentexportsettings.md) | Represents instances of deployment objects (SPExportObject) marked for export to the content migration package. |
| [ExportObjects element (DeploymentExportSettings)](exportobjects-element-deploymentexportsettings.md) | Represents a collection of deployment export object instances for inclusion in the content migration package. |

<br/>

The following table lists simple types that are defined in the schema but are not exposed in documented elements. Rather, they appear as element attribute types, most commonly as enumeration types, which specify allowable attribute values.

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
<td align="left"><p><a href="spincludesecurity-simple-type-deploymentexportsettings.md">SPIncludeSecurity Simple Type (DeploymentExportSettings)</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="spincludesecurity-simple-type-deploymentexportsettings.md">SPIncludeSecurity Simple Type (DeploymentExportSettings)</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="spexportmethodtype-simple-type-deploymentexportsettings.md">SPExportMethodType Simple Type (DeploymentExportSettings)</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="guid-simple-type-deploymentexportsettings.md">Guid Simple Type (DeploymentExportSettings)</a></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="spdeploymentobjecttype-simple-type-deploymentexportsettings.md">SPDeploymentObjectType Simple Type (DeploymentExportSettings)</a></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="spincludedescendents-simple-type-deploymentexportsettings.md">SPIncludeDescendents Simple Type (DeploymentExportSettings)</a></p></td>
</tr>
</tbody>
</table>

<br/>

## See also

- [Content migration schemas](content-migration-schemas.md)
