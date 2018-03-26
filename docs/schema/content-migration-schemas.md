---
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- content migration [sharepoint 2010],content migration schema
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 6741b149-815d-48eb-91d9-691a47195faf
---

# Content migration schemas

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

SharePoint Foundation content migration is supported by APIs that are provided in the **Microsoft.SharePoint.Deployment** namespace. Additionally, migration implementations are supported by XML schemas provided with the SharePoint SDK.

The SharePoint Foundation content migration architecture provides a public schema to support the migration of export packages. You can create a package to import content into SharePoint.

The SharePoint Foundation provides eight schema (.xsd) files to support content migration, as described in the following table.

<table>
<colgroup>
<col width="35%" />
<col width="65%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Schema File</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="deploymentmanifest-schema.md">DeploymentManifest Schema</a></span></p></td>
<td align="left">
<p>Provides validation for the Manifest.xml file that is exported into the content migration package.</p>
<p>Provides a comprehensive manifest containing listings of both the contents and the structure of the source site. The migration operation uses the manifest file to reconstitute the source site and its components when it is imported to the destination site.</p>
</td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="deploymentexportsettings-schema.md">DeploymentExportSettings Schema</a></span></p></td>
<td align="left"><p>Provides validation for the ExportSettings.xml file exported into the content migration package.</p>
<p>ExportSettings.xml does the following:</p>
<ul>
<li><p>Contains the export settings specified by using the <span sdata="cer" target="T:Microsoft.SharePoint.Deployment.SPExportSettings"><span class="nolink">SPExportSettings</span></span> class and other classes that are part of the content migration object model.</p></li>
<li><p>Ensures that the subsequent import process (at the migration target site) enforces the directives specified in the export settings.</p></li>
<li><p>Maintains a catalog of all objects exported to the migration package.</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="deploymentlookuplistmap-schema.md">DeploymentLookupListMap Schema</a></span></p></td>
<td align="left"><p>Provides validation for the LookupListMap.xml file exported into the content migration package.</p>
<p>LookupListMap.xml maintains a simple lookup list that records SharePoint list item (list item to list item) references.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="deploymentrequirements-schema.md">DeploymentRequirements Schema</a></span></p></td>
<td align="left"><p>Provides validation for the Requirements.xml file exported into the content migration package.</p>
<p>Requirements.xml maintains list of deployment requirements in the form of installation requirements on the migration target, such as feature definitions, template versions, Web Part assemblies, language packs, and so forth.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="deploymentrootobjectmap-schema.md">DeploymentRootObjectMap Schema</a></span></p></td>
<td align="left"><p>Provides validation for the RootObjectMap.xml file exported into the content migration package.</p>
<p>RootObjectMap.xml maintains a list of mappings of secondary (dependent) objects, which allows the import phase of the migration operation to correctly place the dependent objects relative to the locations of the root object mappings.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="deploymentsystemdata-schema.md">DeploymentSystemData Schema</a></span></p></td>
<td align="left"><p>Provides validation for the SystemData.xml file exported into the content migration package.</p>
<p>SystemData.xml does the following:</p>
<ul>
<li><p>Collects a variety of low-level system data.</p></li>
<li><p>Records the number and names of Manifest.xml files (in cases where the migration uses multiple manifests).</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="deploymentusergroupmap-schema.md">DeploymentUserGroupMap Schema</a></span></p></td>
<td align="left"><p>Provides validation for the UserGroup.xml file exported into the content migration package.</p>
<p>UserGroup.xml maintains a list of users and user security groups with respect to access security and permissions.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="deploymentviewformslist-schema.md">DeploymentViewFormsList Schema</a></span></p></td>
<td align="left"><p>Provides validation for the ViewFormsList.xml file exported into the content migration package.</p>
<p>ViewFormsList.xml maintains a list of Web Parts and tracks whether each is a view or form.</p></td>
</tr>
</tbody>
</table>

## See also

- [Content Migration](http://msdn.microsoft.com/library/626286f9-71b3-4b3c-9bac-a7bca059463f(Office.15).aspx)








