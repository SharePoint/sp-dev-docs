---
title: "ViewEmpty Element (DeploymentManifest - SPWebPart)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 5eced88b-1b29-442c-8df6-b4637c521dc9
description: "Last modified: March 09, 2015"
---

# ViewEmpty Element (DeploymentManifest - SPWebPart)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a parameter that determines what is displayed in a Windows SharePoint Services 3.0 Web Part when a query returns no list data for the Web Part.

## Definition

```XML
DECLARATION
<xs:element name="ViewEmpty" minOccurs="0" maxOccurs="unbounded" />

USAGE
<WebPart>
        <ViewEmpty />
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

[WebPart Element (DeploymentManifest)](webpart-element-deploymentmanifest.md)
   
## See also

- [SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx)
- [ViewEmpty](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.ViewEmpty.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

