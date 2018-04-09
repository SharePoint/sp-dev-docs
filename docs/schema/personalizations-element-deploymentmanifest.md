---
title: "Personalizations Element (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: a771f7ce-7108-4dc7-a14d-7f2e5ec59fe8
description: "Last modified: March 09, 2015"
---

# Personalizations Element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a collection of personalization elements pertaining to an instance of a Windows SharePoint Services 3.0 file ([SPFile](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFile.aspx)) object. 

## Definition

```XML
DECLARATION
<xs:element name="Personalizations" 
        type="SPPersonalizationCollection" 
        minOccurs="0" maxOccurs="1" 
/>
USAGE
<File>
        <Personalizations
                <Personalization />
        />
</File>

```

## Type

**SPPersonalizationCollection**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

[Personalization Element (DeploymentManifest)](personalization-element-deploymentmanifest.md)
   
### Parent elements

[File Element (DeploymentManifest - SPGenericObject)](file-element-deploymentmanifestspgenericobject.md)
   
## See also

- [SPFile](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFile.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

