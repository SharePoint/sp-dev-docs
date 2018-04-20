---
title: "SPListTemplateType Simple Type (DeploymentManifest)"
manager: soliver
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 089ff2a0-b7ff-4893-b243-43f76ceb5a74
description: "Last modified: July 15, 2011"
---

# SPListTemplateType Simple Type (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Establishes a base for instantiating list templates.

## Definition

```XML
<xs:simpleType name="SPListTemplateType">
        <xs:restriction base="xs:string" />
</xs:simpleType>

```

## Type

xs:string
  
### Remarks

This type represents the [SPListTemplateType](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPListTemplateType.aspx). However, it is not structured in the schema as an enumeration because it is an extensible type and can accommodate list types other than those enumerated in **SPListTemplateType**.
  
## See also

- [SPListTemplateType](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPListTemplateType.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

