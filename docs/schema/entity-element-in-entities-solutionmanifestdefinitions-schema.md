---
title: Entity Element in Entities (SolutionManifestDefinitions Schema)
description: Details on the Entity Element in Entities (SolutionManifestDefinitions Schema)
manager: soliver
ms.date: 03/28/2023
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 02ff2123-1176-8c8d-4f6b-3aa6962e2b4f
---

# Entity Element in Entities (SolutionManifestDefinitions Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Defines the external content type that this context definition is associated with.

**Namespace**: `http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest`

**Schema**: SolutionManifestDefinitions

```XML
<Entity EntityTypeName="String"
        EntityTypeNamespace="String"
        Name="String"
        Description="String">
</Entity>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|        Attribute        |                                                                                                                                Description                                                                                                                                |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **EntityTypeName**      | Required. The name of the external content type as defined in the BDC model. Attribute type: **String**                                                                                                                                                                   |
| **EntityTypeNamespace** | Required. The namespace this external content type belongs to, as defined in the BDC model. Attribute type: **String**                                                                                                                                                    |
| **Name**                | Required. The name of the external content type in the solution manifest. This value can be different from the name defined in the BDC model and is used to identify the external content type only within the scope of the solution manifest. Attribute type: **String** |
| **Description**         | Optional. A description for the external content type. Attribute type: **String**                                                                                                                                                                                         |

### Child elements

| Element | Description |
| --- | --- |
| [View Element in EntityInstanceDefinition (SolutionManifestDefinitions Schema)](view-element-in-entityinstancedefinition-solutionmanifestdefinitions-schema.md) | Specifies the **SpecificFinder** method instance of the external content type that should be run to get the external data. |

### Parent elements

| Element | Description |
| --- | --- |
| [Entities Element in ContextDefinition (SolutionManifestDefinitions Schema)](entities-element-in-contextdefinition-solutionmanifestdefinitions-schema.md) | Contains this external content type. |
