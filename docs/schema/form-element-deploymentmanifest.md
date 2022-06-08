---
title: "Form Element (DeploymentManifest)"
description: "Form Element (DeploymentManifest) represents an instance of a Windows SharePoint Services 3.0 form (SPForm) object."
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 865e48d3-f44f-4df6-be5c-7ecb035b29cf
---

# Form Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents an instance of a Windows SharePoint Services 3.0 form ([SPForm](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPForm.aspx)) object. 

## Definition

```XML
DECLARATION
<xs:element name="Form" 
        type="SPForm" 
        minOccurs="0" maxOccurs="unbounded" 
/>
USAGE
<Forms>
        <Form
                Name="Guid"
                Type="xs:string"
                Url="xs:string"
        />
</Forms>

```

## Type

[SPForm](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPForm.aspx)
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Name** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the form.  <br/> |
|**Type** <br/> |xs:string  <br/> |Optional. Specifies the page type of the form as specified in the [PAGETYPE](https://msdn.microsoft.com/library/Microsoft.SharePoint.PAGETYPE.aspx) enumeration.  <br/> |
|**Url** <br/> |xs:string  <br/> |Optional. URL to the form.  <br/> |
   
### Child elements

None
   
### Parent elements

[Forms Element (DeploymentManifest)](forms-element-deploymentmanifest.md)
   
## See also

- [SPForm](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPForm.aspx)
- [PAGETYPE](https://msdn.microsoft.com/library/Microsoft.SharePoint.PAGETYPE.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

