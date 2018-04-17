---
title: "PagedClientCallbackRowset element (DeploymentManifest - SPWebPart)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 7ce7e786-c712-4a8c-95bc-77be740c55f2
description: "Last modified: March 09, 2015"
---

# PagedClientCallbackRowset element (DeploymentManifest - SPWebPart)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a row set returned from a callback to a paged client on an instance of SharePoint Web Part ([WebPart](https://msdn.microsoft.com/library/Microsoft.SharePoint.WebPartPages.WebPart.aspx)) object. 

## Definition

```XML
DECLARATION
<xs:element name="PagedClientCallbackRowset" minOccurs="0" maxOccurs="unbounded" />

USAGE
<WebPart>
        < PagedClientCallbackRowset />
</WebPart>

```

## Type

**xs:string**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

None
   
### Parent elements

- [WebPart element (DeploymentManifest)](webpart-element-deploymentmanifest.md)
   
## See also

- [WebPart](https://msdn.microsoft.com/library/Microsoft.SharePoint.WebPartPages.WebPart.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

