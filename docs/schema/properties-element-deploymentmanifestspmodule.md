---
title: "Properties Element (DeploymentManifest - SPModule)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 2804fb78-9819-4cbb-b0fd-44eb0645a3b4
description: "Last modified: March 09, 2015"
---

# Properties Element (DeploymentManifest - SPModule)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a collection of properties on an instance of a Windows SharePoint Services 3.0 module ([SPModule](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPModule.aspx) ) object. 
  
```
DECLARATION
<xs:element name="Properties" type="Dictionary" />
USAGE
<Module>
        <Properties
                <Property />
        />
</Module>

```

## Type

[Dictionary](https://msdn.microsoft.com/library/System.Collections.Generic.Dictionary.aspx)
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
## Child Elements

||
|:-----|
|[Property Element (DeploymentManifest)](property-element-deploymentmanifest.md)|
   
## Parent Elements

||
|:-----|
|[Module Element (DeploymentManifest)](module-element-deploymentmanifest.md)|
   
## See also

#### Reference

[SPModule](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPModule.aspx)
  
[Dictionary](https://msdn.microsoft.com/library/System.Collections.Generic.Dictionary.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

