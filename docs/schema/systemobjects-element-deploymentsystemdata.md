---
title: "SystemObjects Element (DeploymentSystemData)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 7100c23d-ec75-489d-8549-8ea765820489
description: "Last modified: March 09, 2015"
---

# SystemObjects Element (DeploymentSystemData)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents a collection of SharePoint Foundation system object (**SPSystemObject**) instances.

## Definition

```XML
DECLARATION
<xs:element 
    name="SystemObjects" 
    type="SPSystemObjects" 
    minOccurs="1" maxOccurs="1" 
/>
USAGE
<SystemData>
    <SystemObjects>
        <SystemObject />
    </SystemObjects>
</SystemData>

```

## Type

**SPSystemObject**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

[SystemObject Element (DeploymentSystemData)](systemobject-element-deploymentsystemdata.md)
   
### Parent elements

[SystemData Element (DeploymentSystemData)](systemdata-element-deploymentsystemdata.md)
   
## See also

- [DeploymentSystemData Schema](deploymentsystemdata-schema.md)

