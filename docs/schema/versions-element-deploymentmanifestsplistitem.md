---
title: "Versions Element (DeploymentManifest - SPListItem)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: fb081445-e5f9-4f0b-b087-acea040309e1
description: "Last modified: March 09, 2015"
---

# Versions Element (DeploymentManifest - SPListItem)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a collection of list item version collection objects ([SPFileVersionCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFileVersionCollection.aspx) ) specifying the versions of the list item. 
  
```
DECLARATION
<xs:element name="Versions" type="SPListItemVersionCollection" minOccurs="0" maxOccurs="1" />
USAGE
<SPObject>
        <ListItem>
                <Versions>
                        <ListItem />
                </Versions>
        </ListItem>
</SPObject>

```

## Type

 **SPListItemVersionCollection**
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
## Child Elements

||
|:-----|
|[ListItem Element (DeploymentManifest - SPListItemVersionCollection)](listitem-element-deploymentmanifestsplistitemversioncollection.md)|
   
## Parent Elements

||
|:-----|
|[ListItem Element (DeploymentManifest - SPGenericObject)](listitem-element-deploymentmanifestspgenericobject.md)|
   
## See also

#### Reference

[SPListItemVersionCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPListItemVersionCollection.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

