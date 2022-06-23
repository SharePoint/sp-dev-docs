---
title: "Links Element (DeploymentManifest - SPFile)"
description: Outlines a definition, type, attributes, child elements, and parent elements for the Links element (DeploymentManifest - SPFile) in Sharepoint.
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 85bb7ee2-900c-492c-988b-92a3ba7bea87
---

# Links Element (DeploymentManifest - SPFile)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a collection of Windows SharePoint Services 3.0 link object instances ([SPLinkCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPLinkCollection.aspx)) on a file ([SPFile](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFile.aspx)) object. 

## Definition

```XML
DECLARATION
<xs:element name="Links" type="SPLinkCollection" minOccurs="0" maxOccurs="1" />

USAGE
<File>
        <Links 
                <Link />
        />
</File>

```

## Type

[SPLinkCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPLinkCollection.aspx)
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

[Link Element (DeploymentManifest)](link-element-deploymentmanifest.md)
   
### Parent elements

[File Element (DeploymentManifest - SPGenericObject)](file-element-deploymentmanifestspgenericobject.md)
   
## See also

- [SPLinkCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPLinkCollection.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

