---
title: DeploymentViewFormsList schema
description: The DeploymentViewFormsList schema provides validation for the ViewFormsList.xml file exported into the content migration package.
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 03e692c1-b27c-465b-8714-d169cf1fc10c
---

# DeploymentViewFormsList schema

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The DeploymentViewFormsList schema provides validation for the ViewFormsList.xml file exported into the content migration package. The ViewFormsList.xml file maintains a list of web parts and tracks whether each is a view or form.

## DeploymentViewFormsList schema elements

The following table lists elements in the schema file DeploymentViewFormsList.xsd file.

<br/>

| Element | Description |
| --- | --- |
| [ViewForm element (DeploymentViewFormsList)](viewform-element-deploymentviewformslist.md) | Represents the specific web part object instances (**SPViewForm**) that are exported to the content migration package and lists whether each is a view or a form. |
| [ViewFormsList element (DeploymentViewFormsList)](viewformslist-element-deploymentviewformslist.md) | Represents a collection object (**SPViewFormsList**) that lists view form (**SPViewForm**) instances exported to the content migration package. |

<br/>

## See also

- [Content migration schemas](content-migration-schemas.md)








