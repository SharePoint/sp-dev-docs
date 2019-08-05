---
title: "Requirements Element (DeploymentRequirements)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 1e817b26-085f-46da-9f1a-d24047b21078
description: "Last modified: March 09, 2015"
---

# Requirements Element (DeploymentRequirements)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents a collection of deployment export requirement objects.

## Definition

```XML
DECLARATION
<xs:element 
    name="Requirements" 
    type="SPImportRequirements" 
/>
USAGE
<Requirements>
    <Requirement />
</Requirements>

```

## Type

**SPImportRequirements**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

[Requirement Element (DeploymentRequirements)](requirement-element-deploymentrequirements.md)
   
### Parent elements

None
   
### Remarks

The **Requirements** element is the root element in the DeploymentRequirements Schema, and therefore has no parent element. 
  
## See also

- [DeploymentRequirements Schema](deploymentrequirements-schema.md)

