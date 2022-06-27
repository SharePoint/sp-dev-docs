---
title: "SystemObject Element (DeploymentSystemData)"
manager: soliver
ms.date: 06/14/2022
description: Describes SystemObject Element (DeploymentSystemData) and provides information elements and attributes, attributes, and type.
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 45f77771-640b-432f-afd0-65d3f43332df
---

# SystemObject Element (DeploymentSystemData)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents a SharePoint Foundation system object instance (**SPSystemObject**) exported to the content migration package.

## Definition

```XML
DECLARATION
<xs:element 
    name="SystemObject" 
    type="SPSystemObject" 
    minOccurs="0" maxOccurs="unbounded" 
/>
USAGE
<SystemObjects>
    <SystemObject
        Id="Guid"
        Type="SPDeploymentObjectType"
        Url="xs:string"
    />
</SystemObjects>

```

## Type

**SPSystemObject**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Id**  <br/> |[Guid Simple Type (DeploymentSystemData)](guid-simple-type-deploymentsystemdata.md) <br/> |Optional. Unique identifier of the system object.  <br/> |
|**Type**  <br/> |[SPDeploymentObjectType Simple Type (DeploymentSystemData)](spdeploymentobjecttype-simple-type-deploymentsystemdata.md) <br/> |Optional. Specification of the object type: **Site**, **Web**, **Folder**, **List**, **ListItem**, or **File**.  <br/> |
|**Url**  <br/> |xs:string  <br/> |Optional. URL to the system object.  <br/> |
   
### Child elements

None
   
### Parent elements

[SystemObjects Element (DeploymentSystemData)](systemobjects-element-deploymentsystemdata.md)
   
## See also

- [DeploymentSystemData Schema](deploymentsystemdata-schema.md)

