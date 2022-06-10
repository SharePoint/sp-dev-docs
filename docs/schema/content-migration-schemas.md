---
title: Content migration schemas
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
keywords:
- content migration [sharepoint 2010],content migration schema
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 6741b149-815d-48eb-91d9-691a47195faf
---

# Content migration schemas 

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

SharePoint Foundation content migration is supported by APIs that are provided in the **Microsoft.SharePoint.Deployment** namespace. Additionally, migration implementations are supported by XML schemas provided with the SharePoint SDK.

The SharePoint Foundation content migration architecture provides a public schema to support the migration of export packages. You can create a package to import content into SharePoint.

## Deployment schema files

The SharePoint Foundation provides eight schema (.xsd) files to support content migration, as described in the following table.

<br/>

  
| Schema File | Description |
| --- | --- |
| [DeploymentManifest schema](deploymentmanifest-schema.md) | Provides validation for the Manifest.xml file that is exported into the content migration package.</br></br>Provides a comprehensive manifest containing listings of both the contents and the structure of the source site. The migration operation uses the manifest file to reconstitute the source site and its components when it is imported to the destination site. |
| [DeploymentExportSettings schema](deploymentexportsettings-schema.md) | Provides validation for the ExportSettings.xml file exported into the content migration package.</br></br>ExportSettings.xml does the following:</br></br>* Contains the export settings specified by using the SPExportSettings class and other classes that are part of the content migration object model.</br></br>* Ensures that the subsequent import process (at the migration target site) enforces the directives specified in the export settings.</br></br>* Maintains a catalog of all objects exported to the migration package. |
| [DeploymentLookupListMap schema](deploymentlookuplistmap-schema.md) | Provides validation for the LookupListMap.xml file exported into the content migration package.</br></br>LookupListMap.xml maintains a simple lookup list that records SharePoint list item (list item to list item) references. |
| [DeploymentRequirements schema](deploymentrequirements-schema.md) | Provides validation for the Requirements.xml file exported into the content migration package.</br></br>Requirements.xml maintains list of deployment requirements in the form of installation requirements on the migration target, such as feature definitions, template versions, web part assemblies, language packs, and so forth. |
| [DeploymentRootObjectMap schema](deploymentrootobjectmap-schema.md) | Provides validation for the RootObjectMap.xml file exported into the content migration package.</br></br>RootObjectMap.xml maintains a list of mappings of secondary (dependent) objects, which allows the import phase of the migration operation to correctly place the dependent objects relative to the locations of the root object mappings. |
| [DeploymentSystemData schema](deploymentsystemdata-schema.md) | Provides validation for the SystemData.xml file exported into the content migration package.</br></br>SystemData.xml does the following:</br></br>* Collects a variety of low-level system data.</br></br>* Records the number and names of Manifest.xml files (in cases where the migration uses multiple manifests). |
| [DeploymentUserGroupMap schema](deploymentusergroupmap-schema.md) | Provides validation for the UserGroup.xml file exported into the content migration package.</br></br>UserGroup.xml maintains a list of users and user security groups with respect to access security and permissions. |
| [DeploymentViewFormsList schema](deploymentviewformslist-schema.md) | Provides validation for the ViewFormsList.xml file exported into the content migration package.</br></br>ViewFormsList.xml maintains a list of web parts and tracks whether each is a view or form. |



## See also

- [Content Migration](https://msdn.microsoft.com/library/626286f9-71b3-4b3c-9bac-a7bca059463f(Office.15).aspx)







