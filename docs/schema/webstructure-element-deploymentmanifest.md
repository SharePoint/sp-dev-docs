---
title: "WebStructure Element (DeploymentManifest)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 574ed628-f2bf-44d7-8c76-7c4dc07f9c4e
description: "Last modified: March 09, 2015"
---

# WebStructure Element (DeploymentManifest)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a specification of an instance of a Web site structure object type ([SPObjectType](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPObjectType.aspx) ) for implementation on content migration. 
  
```
DECLARATION
<xs:element name="WebStructure" type="DeploymentWebStructure" />
USAGE
<SPObject>
        <WebStructure
                WebId="Guid"
                WebUrl="xs:string"
                UseSharedNavigation="xs:boolean"
        />
</SPObject>

```

## Type

 **DeploymentWebStructure** (based on [SPObjectType](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPObjectType.aspx) ) 
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**WebId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the Web site for which the structure is provided.  <br/> |
|**WebUrl** <br/> |xs:string  <br/> |Optional. URL to the Web site.  <br/> |
|**UserSharedNavigation** <br/> |xs:boolean  <br/> |Optional.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[SPObject Element (DeploymentManifest)](spobject-element-deploymentmanifest.md)|
   
## See also



[SPObjectType](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPObjectType.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

