---
title: DeploymentLookupListMap schema
description: The DeploymentLookupListMap schema provides validation for the LookupListMap.xml file that is exported to the content migration package.
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 14383af3-0e57-443a-97eb-3e0a714d9639
---

# DeploymentLookupListMap schema

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The DeploymentLookupListMap schema provides validation for the LookupListMap.xml file that is exported to the content migration package. The LookupListMap.xml file maintains a simple lookup list that records SharePoint Foundation list item references (that is, list item to list item references). This list provides a performance enhancement by relieving the need for SharePoint Foundation to repeatedly loop recursively over list item structures.

## DeploymentLookupListMap schema elements and types

The following table lists elements in the DeploymentLookupListMap.xsd schema file.

<br/>

  
| Element | Description |
| --- | --- |
| [LookupItem element (DeploymentLookupListMap)](lookupitem-element-deploymentlookuplistmap.md) | Represents specific list item-to-list item lookup reference objects (**SPLookupItem**) exported to the content migration package. |
| [LookupItems element (DeploymentLookupListMap)](lookupitems-element-deploymentlookuplistmap.md) | Represents a container object for lookup item (**SPLookupItem**) instances. It provides a list of specific list item-to-list item lookup references. |
| [LookupList element (DeploymentLookupListMap)](lookuplist-element-deploymentlookuplistmap.md) | Represents a lookup list object instance (**SPLookupList**) for export to a content migration package. |
| [LookupLists element (DeploymentLookupListMap)](lookuplists-element-deploymentlookuplistmap.md) | Represents a container object for deployment lookup list objects (**SPLookupLists**) exported to the content migration package. |
| [Guid Simple Type (DeploymentLookupListMap)](guid-simple-type-deploymentlookuplistmap.md) | Unique identifier for the lookup list map. |

<br/>

## See also

- [Content migration schemas](content-migration-schemas.md)








