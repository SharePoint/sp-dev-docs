---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: b754baf8-6db5-4f40-a1b3-67fb925d0319
---

# DeploymentRootObjectMap schema

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The DeploymentRootObjectMap schema provides validation for the RootObjectMap.xml file exported into the content migration package. The RootObjectMap.xml file maintains a list of mappings of secondary, or dependent objects, to the root objects that are exported to the migration package. This allows the import phase of the migration operation to correctly place the dependent objects in mappings relative to the locations of the root objects.

## DeploymentRootObjectMap schema elements and types

The following table lists elements in the DeploymentRootObjectMap.xsd schema file.

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
<td align="left"><p><span sdata="link"><a href="rootobject-element-deploymentrootobjectmap.md">RootObject element (DeploymentRootObjectMap)</a></span></p></td>
<td align="left"><p>Represents an instance of a root object in a root object map exported to the content migration package.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="rootobjects-element-deploymentrootobjectmap.md">RootObjects element (DeploymentRootObjectMap)</a></span></p></td>
<td align="left"><p>Represents a container of listed root object (**SPRootObject**) instances.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="spdeploymentobjecttype-simple-type-deploymentrootobjectmap.md">SPDeploymentObjectType Simple Type (DeploymentRootObjectMap)</a></span></p></td>
<td align="left"><p>Enumeration simple type that provides values for the **Type** attribute on the <span sdata="link"><a href="rootobject-element-deploymentrootobjectmap.md">RootObject element (DeploymentRootObjectMap)</a>. The value specifies the object type of the root object specified in the root object map.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="guid-simple-type-deploymentrootobjectmap.md">Guid Simple Type (DeploymentRootObjectMap))</a></span></p></td>
<td align="left"><p>Supports the use of a unique identifier (GUID) as a **Guid** attribute field value in the <span sdata="link"><a href="rootobject-element-deploymentrootobjectmap.md">RootObject element (DeploymentRootObjectMap)</a> of the DeploymentLRootObjectMap schema.</p></td>
</tr>
</tbody>
</table>

<br/>

## See also

- [Content migration schemas](content-migration-schemas.md)







