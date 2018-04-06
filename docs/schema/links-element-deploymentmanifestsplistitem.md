---
title: "Links Element (DeploymentManifest - SPListItem)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 50cf43a9-8c80-4bc7-9b57-a18f9dd59f94
description: "Last modified: March 09, 2015"
---

# Links Element (DeploymentManifest - SPListItem)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a collection of Windows SharePoint Services 3.0 link ([SPLinkCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPLinkCollection.aspx) ) object instances on a SharePoint [SPListItem](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPListItem.aspx) object. 
  
```
DECLARATION
<xs:element name="Links" 
        type="SPLinkCollection" 
        minOccurs="0" maxOccurs="1" 
/>
USAGE
<ListItem>
        <Links 
                <Link />
        />
</ListItem>

```

## Type

 **SPLinkCollection**
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
### Child elements

||
|:-----|
|[Link Element (DeploymentManifest)](link-element-deploymentmanifest.md)
   
### Parent elements

||
|:-----|
|[ListItem Element (DeploymentManifest - SPGenericObject)](listitem-element-deploymentmanifestspgenericobject.md)
   
## See also



[SPLinkCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPLinkCollection.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

