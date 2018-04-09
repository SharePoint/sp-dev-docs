---
title: "Query Element (DeploymentManifest - SPWebPart)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 6f38c731-c8b2-44e4-8292-b65f888870c8
description: "Last modified: March 09, 2015"
---

# Query Element (DeploymentManifest - SPWebPart)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a query on an instance of a Windows SharePoint Services 3.0 Web Part ([WebPart](https://msdn.microsoft.com/library/Microsoft.SharePoint.WebPartPages.WebPart.aspx)) object. 

## Definition

```XML
DECLARATION
<xs:element name="Query" minOccurs="0" maxOccurs="unbounded" />

USAGE
<WebPart>
        <Query />
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
   
## Remarks

Web Parts can derive from either of two base classes - an ASP.NET Web Part ([WebPart](https://msdn.microsoft.com/library/System.Web.UI.WebControls.WebParts.WebPart.aspx)), or a SharePoint Foundation Web Part ([WebPart](https://msdn.microsoft.com/library/Microsoft.SharePoint.WebPartPages.WebPart.aspx)). 
  
## See also

- [SPQuery](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPQuery.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

