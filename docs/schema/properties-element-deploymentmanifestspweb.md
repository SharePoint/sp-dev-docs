---
title: "Properties Element (DeploymentManifest - SPWeb)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 846e7a27-468e-4b7f-a911-5c923f4e774c
description: "Last modified: March 09, 2015"
---

# Properties Element (DeploymentManifest - SPWeb)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a collection of properties on an instance of a Windows SharePoint Services 3.0 Web ([SPWeb](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWeb.aspx) ) object. 
  
```
DECLARATION
<xs:element name="Properties" type="Dictionary" />
USAGE
<Web>
        <Properties
                <Property />
        />
</Web>

```

## Type

[Dictionary](https://msdn.microsoft.com/library/System.Collections.Generic.Dictionary.aspx)
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
### Child elements

||
|:-----|
|[Property Element (DeploymentManifest)](property-element-deploymentmanifest.md)
   
### Parent elements

||
|:-----|
|[Web Element (DeploymentManifest)](web-element-deploymentmanifest.md)
   
## See also



[SPWeb](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWeb.aspx)
  
[Dictionary](https://msdn.microsoft.com/library/System.Collections.Generic.Dictionary.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

