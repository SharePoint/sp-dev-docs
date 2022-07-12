---
title: ActivationDependency element (Feature)
description: Discusses the definition, elements and attributes for ActivationDependency element (Feature).
manager: soliver
ms.date: 07/12/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: d0a43250-3ad2-4f55-8ac5-7d82e32eb9cb
---

# ActivationDependency element (Feature)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a Feature on which activation of the current Feature depends.

## Definition

```xml
<ActivationDependency
  FeatureDescription = string
  FeatureId = Guid
  FeatureTitle = string
  MinimumVersion = string
  SolutionId = Guid
  SolutionName = string
  SolutionTitle = string
  SolutionUrl = string>
</ActivationDependency>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|       Attribute        |                                                                             Description                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **FeatureDescription** | Optional **string**. The description of the Feature dependency.                                                                                                     |
| **FeatureId**          | Required **Guid**. The ID of the Feature dependency.                                                                                                                |
| **FeatureTitle**       | Optional **string**. The title of the Feature dependency.                                                                                                           |
| **MinimumVersion**     | Optional **string**. The minimum version of the Feature dependency. This attribute must use the pattern *n.n.n.n*, where each occurrence of *n* is a numeric value. |
| **SolutionId**         | Optional **Guid**. The ID of the solution dependency.                                                                                                               |
| **SolutionName**       | Optional **string**. The name of the solution dependency.                                                                                                           |
| **SolutionTitle**      | Optional **string**. The title of the solution dependency.                                                                                                          |
| **SolutionUrl**        | Optional **string**. The URL of the solution dependency.                                                                                                            |

### Child elements

None

### Parent elements

- [ActivationDependencies](activationdependencies-element-feature.md)

### Occurrences

-Minimum: 0
-Maximum: Unbounded

### Remarks

Microsoft SharePoint Foundation does not support a cross-scope activation dependency if the current Feature depends upon another Feature at a more restrictive scope, or if the current Feature depends on a hidden Feature.

## Example

For an example of how this element is used, see [Feature.xml Files](feature-xml-files.md).
