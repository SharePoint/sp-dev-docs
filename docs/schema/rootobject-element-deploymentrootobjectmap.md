---
title: "RootObject Element (DeploymentRootObjectMap)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 4ca81cf3-22b7-48e0-81ee-eb0399cfef05
description: "Last modified: March 09, 2015"
---

# RootObject Element (DeploymentRootObjectMap)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013
  
Represents an instance of a root object in a root object map exported to the content migration package.
  
```
DECLARATION
<xs:element
    name="RootObject" type="SPRootObject"
    minOccurs="0" maxOccurs="unbounded" 
/>
USAGE
<RootObjects>
    <RootObject
        Id="Guid"
        Type="SPDeploymentObjectType"
        ParentId="Guid"
        WebUrl="xs:string"
        Url="xs:string"
        IsDependency="xs:boolean"
    />
</RootObjects>

```

## Type

 **SPRootObject**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|Id  <br/> |[Guid Simple Type (DeploymentRootObjectMap))](guid-simple-type-deploymentrootobjectmap.md) <br/> |Optional. Unique identifier of the root object.  <br/> |
|Type  <br/> |[SPDeploymentObjectType Simple Type (DeploymentRootObjectMap)](spdeploymentobjecttype-simple-type-deploymentrootobjectmap.md) <br/> |Optional. Specifies the object type of the root object: **Site**, **Web**, **Folder**, **List**, **ListItem**, or **File**.  <br/> |
|ParentId  <br/> |[Guid Simple Type (DeploymentRootObjectMap))](guid-simple-type-deploymentrootobjectmap.md) <br/> |Optional. Unique identifier of the parent Web.  <br/> |
|WebUrl  <br/> |xs:string  <br/> |Optional. URL to the parent Web site.  <br/> |
|Url  <br/> |xs:string  <br/> |Optional. URL to the root object.  <br/> |
|IsDependency  <br/> |xs:boolean  <br/> |Optional. Specifies whether the object is a dependent object. The value is **true** if the object is dependent; otherwise, **false**.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[RootObjects Element (DeploymentRootObjectMap)](rootobjects-element-deploymentrootobjectmap.md)|
   
## See also



[DeploymentRootObjectMap Schema](deploymentrootobjectmap-schema.md)

