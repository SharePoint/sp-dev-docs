---
title: "Fields Element (DeploymentManifest - SPListItem)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 3cc3a411-0d17-4281-a4d5-0d20ba307b75
description: "Last modified: March 09, 2015"
---

# Fields Element (DeploymentManifest - SPListItem)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a collection of [SPField](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPField.aspx) object instances on a Windows SharePoint Services 3.0 [SPListItem](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPListItem.aspx) object. 
  
```
DECLARATION
<xs:element name="Fields" 
        type="SPFieldCollection" 
        minOccurs="0" maxOccurs="1" 
/>
USAGE
<ListItem>
        <Fields 
                <FieldRef />
                <Field />
        />
</ListItem>

```

## Type

[SPFieldCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldCollection.aspx)
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|None  <br/> |||
   
### Child elements

||
|:-----|
|[Field Element (DeploymentManifest - SPFieldCollection)](field-element-deploymentmanifestspfieldcollection.md) <br/> |
|[FieldRef Element (DeploymentManifest - SPFieldCollection)](fieldref-element-deploymentmanifestspfieldcollection.md) <br/> |
   
### Parent elements

||
|:-----|
|[ListItem Element (DeploymentManifest - SPGenericObject)](listitem-element-deploymentmanifestspgenericobject.md)
   
## See also



[SPFieldCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldCollection.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

