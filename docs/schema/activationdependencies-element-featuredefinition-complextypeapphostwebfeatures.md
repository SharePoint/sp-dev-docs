---
title: ActivationDependencies element (FeatureDefinition complexType)
description: Discusses the definition, elements and attributes for ActivationDependencies element (FeatureDefinition complexType).
manager: soliver
ms.date: 07/12/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 79b463d1-7b48-a56d-f9b5-0b0a3f91375b
---

# ActivationDependencies element (FeatureDefinition complexType)

(AppHostWebFeatures)

> [!NOTE]
> The string `app` appears as part of or all of some element, attribute, and file names because SharePoint Add-ins were originally called "apps for SharePoint." To ensure backward compatibility, the schemas have not been changed.

## Element information

| Name  | Details  |
|---|---|
| **Element type**  | FeatureActivationDependencyDefinitions |
| **Namespace**  | `http://schemas.microsoft.com/sharepoint/` |
| **Schema file**  | apphostwebfeatures.xsd |

## Definition

```xml
<xs:element name="ActivationDependencies" type="FeatureActivationDependencyDefinitions" minOccurs="0" maxOccurs="1"></xs:element>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Parent elements

|                     Element                      |                                   Type                                   | Description |
| ------------------------------------------------ | ------------------------------------------------------------------------ | ----------- |
| [Feature](feature-element-apphostwebfeatures.md) | [FeatureDefinition](featuredefinition-complextype-apphostwebfeatures.md) |             |

### Child elements

|                                                   Element                                                   |                                                       Type                                                       | Description |
| ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ----------- |
| [ActivationDependency](activationdependency-element-featureactivationdependencydefinitions-complextypea.md) | [FeatureActivationDependencyDefinition](featureactivationdependencydefinition-complextype-apphostwebfeatures.md) |             |

### Attributes

None.
