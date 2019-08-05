---
title: "Script element (DeploymentManifest - SPWebPart)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 15350a26-d4bd-444e-a707-b2fc5cb3fcf7
description: "Last modified: March 09, 2015"
---

# Script element (DeploymentManifest - SPWebPart)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents script to execute on deployment of an instance of a web part ([WebPart](https://msdn.microsoft.com/library/Microsoft.SharePoint.WebPartPages.WebPart.aspx)) object. 

## Definition

```XML
DECLARATION
<xs:element name="Script" minOccurs="0" maxOccurs="1" />

USAGE
<WebPart>
        <Script />
</WebPart>

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

- [WebPart element (DeploymentManifest)](webpart-element-deploymentmanifest.md)
   
### Remarks

Web parts can derive from either of two base classes - an ASP.NET web part ([WebPart](https://msdn.microsoft.com/library/System.Web.UI.WebControls.WebParts.WebPart.aspx)), or a SharePoint Foundation web part ([WebPart](https://msdn.microsoft.com/library/Microsoft.SharePoint.WebPartPages.WebPart.aspx)). 
  
## See also

- [WebPart](https://msdn.microsoft.com/library/Microsoft.SharePoint.WebPartPages.WebPart.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

