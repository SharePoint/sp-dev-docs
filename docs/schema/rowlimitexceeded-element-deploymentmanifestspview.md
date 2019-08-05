---
title: "RowLimitExceeded element (DeploymentManifest - SPView)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 5b148f83-0a2c-4f00-9f6f-2de20f830ab7
description: "Last modified: March 09, 2015"
---

# RowLimitExceeded element (DeploymentManifest - SPView)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents the means for displaying overflow data when a row limit on a specified instance of a Windows SharePoint Services 3.0 view ([SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx)) object is exceeded. 

## Definition

```XML
DECLARATION
<xs:element name="RowLimitExceeded" minOccurs="0" maxOccurs="unbounded" />

USAGE
<View>
        <RowLimitExceeded />
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

- [RowLimitExceeded](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.RowLimitExceeded.aspx)
- [SPView](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPView.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

