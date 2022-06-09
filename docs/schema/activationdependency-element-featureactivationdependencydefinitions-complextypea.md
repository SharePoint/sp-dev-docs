---
title: ActivationDependency element (FeatureActivationDependencyDefinitions complexType)
description: Discusses the definition, elements and attributes of the ActivationDependency element (FeatureActivationDependencyDefinitions complexType).
manager: soliver
ms.date: 9/16/2015
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: f022cb63-3d73-bc27-dc13-e1d172b6082d
---

# ActivationDependency element (FeatureActivationDependencyDefinitions complexType) 

(AppHostWebFeatures)

> [!NOTE]
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed. 

## Element information

|Information|Location|
|---|---|
| **Element type**  | FeatureActivationDependencyDefinition |
| **Namespace**  | `http://schemas.microsoft.com/sharepoint/` |
| **Schema file**  | apphostwebfeatures.xsd |

## Definition

```XML
    <xs:element name="ActivationDependency" type="FeatureActivationDependencyDefinition" minOccurs="0" maxOccurs="unbounded"></xs:element>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Parent elements
  
| Element | Type | Description |
| --- | --- | --- |
| [ActivationDependencies](activationdependencies-element-featuredefinition-complextypeapphostwebfeatures.md) | [FeatureActivationDependencyDefinitions](featureactivationdependencydefinitions-complextype-apphostwebfeatures.md) |     |

</br>

### Child elements

None.

</br>

### Attributes
  
| Attribute | Type | Required | Description | Possible values |
| --- | --- | --- | --- | --- |
| FeatureDescription | xs:string | optional |     | Values of the xs:string type. |
| FeatureId | UniqueIdentifier | required |     | Values of the UniqueIdentifier type. |
| FeatureTitle | xs:string | optional |     | Values of the xs:string type. |
| MinimumVersion | [FeatureVersion](featureversion-simpletype-apphostwebfeatures.md) | optional |     | Values of the FeatureVersion type. |
| SolutionId | UniqueIdentifier | optional |     | Values of the UniqueIdentifier type. |
| SolutionName | xs:string | optional |     | Values of the xs:string type. |
| SolutionTitle | xs:string | optional |     | Values of the xs:string type. |
| SolutionUrl | xs:string | optional |     | Values of the xs:string type. |
