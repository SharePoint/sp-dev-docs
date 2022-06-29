---
title: "Requirement Element (DeploymentRequirements)"
manager: soliver
ms.date: 06/13/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
ms.assetid: 52eb5087-e0ca-45f8-8137-e6350cfb0481
description: "Describes the Requirement Element, which represents specific deployment export requirement (SPRequirement) objects provided to the content migration package."
---

# Requirement Element (DeploymentRequirements)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents specific deployment export requirement (**SPRequirement**) objects provided to the content migration package.

## Definition

```XML
DECLARATION
<xs:element
    name="Requirement"
    type="SPRequirement"
    minOccurs="0" maxOccurs="unbounded"
/>
USAGE
<Requirements>
    <Requirement
        Type="SPRequirementObjectType"
        Id="xs:string"
        Name="xs:string"
        Data="xs:string"
    />
</Requirements>

```

## Type

**SPRequirement**

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|Type|[SPRequirementObjectType Simple Type (DeploymentRequirements)](sprequirementobjecttype-simple-type-deploymentrequirements.md)|Specifies the requirement object type as defined in the **SPRequirementObjectType** simple type: **FeatureDefinition**, **WebTemplate**, **WebPart**, or **Language**.|
|Id|xs:string|ID of the requirement instance.|
|Name|xs:string|Name of the requirement instance.|
|Data|xs:string|Information about the requirement.|

### Child elements

None

### Parent elements

[Requirements Element (DeploymentRequirements)](requirements-element-deploymentrequirements.md)

## See also

- [DeploymentRequirements Schema](deploymentrequirements-schema.md)
