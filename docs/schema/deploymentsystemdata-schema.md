---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 5b098a6e-37ea-4155-b234-1649edd2495a
---

# DeploymentSystemData Schema

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The DeploymentSystemData Schema provides validation for the SystemData.xml file exported into the content migration package. The SystemData file collects a variety of low-level system data. It records the number and names of Manifest.xml files (in cases where the migration uses multiple manifests), and it also supports schema versioning. Additionally, it holds a list of system files that are required by SharePoint Foundation.

## DeploymentSystemData schema elements and types

The following table lists elements in the schema file DeploymentSystemData.xsd file.

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
<td align="left"><p><span sdata="link"><a href="manifestfile-element-deploymentsystemdata.md">ManifestFile Element (DeploymentSystemData)</a></span></p></td>
<td align="left"><p>Represents system data files exported to the content migration package and listed on the deployment manifest.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="manifestfiles-element-deploymentsystemdata.md">ManifestFiles Element (DeploymentSystemData)</a></span></p></td>
<td align="left"><p>Represents a collection of system data files exported to the content migration package.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="schemaversion-element-deploymentsystemdata.md">SchemaVersion Element (DeploymentSystemData)</a></span></p></td>
<td align="left"><p>Represents an object (**SPSchemaVersion**) that lists versioning data for the content migration manifest schema.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="systemobject-element-deploymentsystemdata.md">SystemObject Element (DeploymentSystemData)</a></span></p></td>
<td align="left"><p>Represents a SharePoint Foundation system object instance (**SPSystemObject**) exported to the content migration package.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="systemobjects-element-deploymentsystemdata.md">SystemObjects Element (DeploymentSystemData)</a></span></p></td>
<td align="left"><p>Represents a collection of SharePoint Foundation system object (**SPSystemObject**) instances.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="systemdata-element-deploymentsystemdata.md">SystemData Element (DeploymentSystemData)</a></span></p></td>
<td align="left"><p>Represents a system data wrapper object (**SPSystemData**) that contains the deployment system data object collections. This is the schema root element.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="spdeploymentobjecttype-simple-type-deploymentsystemdata.md">SPDeploymentObjectType Simple Type (DeploymentSystemData)</a></span></p></td>
<td align="left"><p>Enumeration simple type that provides values for the **Type** attribute on the <span sdata="link"><a href="systemobject-element-deploymentsystemdata.md">SystemObject Element (DeploymentSystemData)</a>. The value specifies the system object type.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentsystemdata.md">Guid Simple Type (DeploymentSystemData)</a></span></p></td>
<td align="left"><p>Supports the use of a unique identifier (GUID) as a **Guid** attribute field value in the <span sdata="link"><a href="systemobject-element-deploymentsystemdata.md">SystemObject Element (DeploymentSystemData)</a> of the DeploymentLRootObjectMap Schema.</p></td>
</tr>
</tbody>
</table>

<br/>

## See also

- [Content migration schemas](content-migration-schemas.md)








