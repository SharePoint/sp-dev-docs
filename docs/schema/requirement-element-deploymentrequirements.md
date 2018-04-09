---
title: "Requirement Element (DeploymentRequirements)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 52eb5087-e0ca-45f8-8137-e6350cfb0481
description: "Last modified: March 09, 2015"
---

# Requirement Element (DeploymentRequirements)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents specific deployment export requirement ( **SPRequirement**) objects provided to the content migration package.
  
```
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
|Type  <br/> |[SPRequirementObjectType Simple Type (DeploymentRequirements)](sprequirementobjecttype-simple-type-deploymentrequirements.md) <br/> |Specifies the requirement object type as defined in the **SPRequirementObjectType** simple type: **FeatureDefinition**, **WebTemplate**, **WebPart**, or **Language**.  <br/> |
|Id  <br/> |xs:string  <br/> |ID of the requirement instance.  <br/> |
|Name  <br/> |xs:string  <br/> |Name of the requirement instance.  <br/> |
|Data  <br/> |xs:string  <br/> |Information about the requirement.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[Requirements Element (DeploymentRequirements)](requirements-element-deploymentrequirements.md)|
   
## See also



[DeploymentRequirements Schema](deploymentrequirements-schema.md)

