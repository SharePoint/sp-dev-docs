---
title: "PagedRecurrenceRowset element (DeploymentManifest - SPWebPart)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 5178c6d7-f7b2-4ccd-bb3a-18e43886b841
description: "Last modified: March 09, 2015"
---

# PagedRecurrenceRowset element (DeploymentManifest - SPWebPart)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a row set returned from a paged recurrence on an instance of a SharePoint Web Part ([WebPart](https://msdn.microsoft.com/library/Microsoft.SharePoint.WebPartPages.WebPart.aspx)) object. 

## Definition

```XML
DECLARATION
<xs:element name="PagedRecurrenceRowset" minOccurs="0" maxOccurs="unbounded" />
USAGE
<WebPart>
        < PagedRecurrenceRowset />
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

