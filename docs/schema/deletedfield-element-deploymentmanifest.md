---
title: "DeletedField Element (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: fdaa2f2f-7a04-4224-a584-b4010b5c5188
description: "Last modified: March 09, 2015"
---

# DeletedField Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a data field that was deleted from a SharePoint list.

## Definition
  
```XML
DECLARATION
<xs:element name="DeletedField" type="DeletedField" minOccurs="0" maxOccurs="unbounded" />

USAGE
<DeletedFields>
   <DeletedField
      FieldId="Guid"
   />
</DeletedFields>

```

## Type

**DeletedField**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**FieldId**  <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Unique identifier of the deleted field.  <br/> |
   
### Child elements

None
   
### Parent elements

[DeletedFields Element (DeploymentManifest)](deletedfields-element-deploymentmanifest.md)
   
### Remarks

This element represents a change event as is typically used for event logging.
  
## See also

- [DeploymentManifest Schema](deploymentmanifest-schema.md)

