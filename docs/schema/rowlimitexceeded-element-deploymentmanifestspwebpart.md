---
title: "RowLimitExceeded Element (DeploymentManifest - SPWebPart)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 5fe03d39-4800-4333-ab03-377c6fa3871b
description: "Last modified: March 09, 2015"
---

# RowLimitExceeded Element (DeploymentManifest - SPWebPart)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents the means for displaying overflow data when a row limit on a specified instance of a Windows SharePoint Services 3.0 Web Part object is exceeded.

## Definition

```XML
DECLARATION
<xs:element name="RowLimitExceeded" minOccurs="0" maxOccurs="unbounded" />

USAGE
<WebPart>
        <RowLimitExceeded />
</ WebPart >

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

- [DeploymentManifest Schema](deploymentmanifest-schema.md)

