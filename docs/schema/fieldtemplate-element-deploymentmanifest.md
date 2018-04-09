---
title: "FieldTemplate Element (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 0f78149f-bd51-4108-982b-c2f1b5a1509c
description: "Last modified: March 09, 2015"
---

# FieldTemplate Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a template for a Windows SharePoint Services 3.0 field object (**SPField**).

## Definition

```XML
DECLARATION
<xs:element name="FieldTemplate" type="DeploymentFieldTemplate" />

USAGE
<SPObject>
        <FieldTemplate>
                Id="Guid"
                Name="xs:string"
                ParentWebId="Guid"
                Scope="xs:string"
                Description="xs:string"
                Group="xs:string"
            <Field />
        </FieldTemplate>
</SPObject>

```

## Type

**DeploymentFieldTemplate**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Id** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the field template.  <br/> |
|**Name** <br/> |xs:string  <br/> |Optional. Name of the field template.  <br/> |
|**ParentWebId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Unique identifier of the parent Web site.  <br/> Optional on export; required on import.  <br/> |
|**Scope** <br/> |xs:string  <br/> |Specifies the scope for which the field template applies.  <br/> Optional on export; required on import.  <br/> |
|**Description** <br/> |xs:string  <br/> |Optional. Description of the field template.  <br/> |
|**Group** <br/> |xs:string  <br/> |Optional.  <br/> |
   
### Child elements

[Field Element (DeploymentManifest - DeploymentFieldTemplate)](field-element-deploymentmanifestdeploymentfieldtemplate.md)
   
### Parent elements

[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)
   
## See also

- [DeploymentManifest Schema](deploymentmanifest-schema.md)

