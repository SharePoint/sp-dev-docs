---
title: "Personalization Element (DeploymentManifest)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: dc42dabd-68d3-4bba-bbe6-3e5571620ead
description: "Last modified: March 09, 2015"
---

# Personalization Element (DeploymentManifest)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents personalization data pertaining to an instance of a Windows SharePoint Services 3.0 file ([SPFile](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFile.aspx) ) object. 
  
```
DECLARATION
<xs:element name="Personalization" 
        type="SPPersonalization" 
        minOccurs="1" maxOccurs="unbounded" 
/>
USAGE
<Personalizations>
        <Personalization
                WebPartId="Guid"
                UserId="xs:int"
                WebPartOrder="xs:string"
                WebPartZoneId="xs:string"
                IsIncluded="xs:string"
                FrameState="xs:string"
                UserProperties="xs:string"
        />
</Personalizations>
```

## Type

 **SPPersonalization**
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**WebPartId** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Required. Unique identifier of the Web Part for which the personalization is associated.  <br/> |
|**UserId** <br/> |xs:int  <br/> |Required. Identifier of the user for whom the personalization is associated.  <br/> |
|**WebPartOrder** <br/> |xs:string  <br/> |Optional. The order of Web Parts ordered in a Web Part zone.  <br/> |
|**WebPartZoneId** <br/> |xs:string  <br/> |Optional. Identifier of the Web Part zone in which the associated Web Part is located.  <br/> |
|**IsIncluded** <br/> |xs:string  <br/> |Optional.  <br/> |
|**FrameState** <br/> |xs:string  <br/> |Optional.  <br/> |
|**UserProperties** <br/> |xs:string  <br/> |Optional.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[Personalizations Element (DeploymentManifest)](personalizations-element-deploymentmanifest.md)
   
## See also



[SPFile](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFile.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

