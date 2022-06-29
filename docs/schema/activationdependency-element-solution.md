---
title: "ActivationDependency element (Solution)"
description: Discusses the definition, elements and attributes for specifies the activation dependencies for a solution.
manager: soliver
ms.date: 06/14/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
api_name:
- Solution Schema
api_type:
- schema
ms.assetid: b8ab216f-4363-44f3-b79e-eaa7262f44ee
---

# ActivationDependency element (Solution)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the activation dependencies for a solution.

```XML
<ActivationDependency
  SolutionId = string
  SolutionName = string
  SolutionTitle = string
  SolutionUrl = string />
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**SolutionId**  |Required **string**. Specifies the solution ID of the dependency.   |
|**SolutionName**  |Optional **string**. Specifies the name of the solution dependency.   |
|**SolutionTitle**  |Optional **string**. Specifies the title of the solution dependency.   |
|**SolutionUrl**  |Optional **string**. Specifies the URL of the solution dependency.   |

### Child elements

None

### Parent elements

- [ActivationDependencies](activationdependencies-element-solution.md)

## Example

For an example of how this element is used, see [Solution schema](solution-schema.md).
