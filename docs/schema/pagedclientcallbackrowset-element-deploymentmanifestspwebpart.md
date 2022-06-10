---
title: "PagedClientCallbackRowset element (DeploymentManifest - SPWebPart)"
description: "PagedClientCallbackRowset element (DeploymentManifest - SPWebPart) represents a row set returned from a callback to a paged client on an instance of SharePoint web part (WebPart) object."
manager: soliver
ms.date: 06/10/2022
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 7ce7e786-c712-4a8c-95bc-77be740c55f2
---

# PagedClientCallbackRowset element (DeploymentManifest - SPWebPart)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a row set returned from a callback to a paged client on an instance of SharePoint web part ([WebPart](https://msdn.microsoft.com/library/Microsoft.SharePoint.WebPartPages.WebPart.aspx)) object. 

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

