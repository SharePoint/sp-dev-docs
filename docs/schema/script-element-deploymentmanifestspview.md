---
title: "Script element (DeploymentManifest - SPView)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f20d0d2f-c7aa-415a-8f89-79df17ae0840
description: "Last modified: March 09, 2015"
---

# Script element (DeploymentManifest - SPView)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents script to execute on deployment of an instance of a Windows SharePoint Services 3.0 view ([SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx)) object. 

## Definition

```XML
DECLARATION
<xs:element name="Script" minOccurs="0" maxOccurs="1" />

USAGE
<View>
        <Script />
</View>

```

## Type

xs:string 
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

None
   
### Parent elements

- [View element (DeploymentManifest)](view-element-deploymentmanifest.md)
   
## See also

- [SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

