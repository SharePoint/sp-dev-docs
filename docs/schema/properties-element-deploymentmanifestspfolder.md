---
title: "Properties Element (DeploymentManifest - SPFolder)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: b2bdf3ad-5452-4c44-bdca-304597b0efd2
description: "Last modified: March 09, 2015"
---

# Properties Element (DeploymentManifest - SPFolder)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a collection of properties on an instance of a Windows SharePoint Services 3.0 folder ([SPFolder](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFolder.aspx)) object. 

## Definition

```XML
DECLARATION
<xs:element name="Properties" type="Dictionary" minOccurs="0" />

USAGE
<Folder>
        <Properties
                <Property />
        />
</Folder>

```

## Type

[Dictionary](https://docs.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

[Property Element (DeploymentManifest)](property-element-deploymentmanifest.md)
   
### Parent elements

[Folder Element (DeploymentManifest)](folder-element-deploymentmanifest.md)
   
## See also

- [SPFolder](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFolder.aspx)
- [Dictionary](https://docs.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

