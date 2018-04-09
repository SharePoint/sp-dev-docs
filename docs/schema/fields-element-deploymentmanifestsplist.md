---
title: "Fields Element (DeploymentManifest - SPList)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 6d5c3c13-3268-4e61-94c1-bf39b53d9d9b
description: "Last modified: March 09, 2015"
---

# Fields Element (DeploymentManifest - SPList)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a collection of Field ([SPField](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPField.aspx)) instances on a Windows SharePoint Services 3.0 List object ([SPList](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPList.aspx)). 

## Definition

```XML
DECLARATION
<xs:element name="Fields" 
        type="SPFieldCollection" 
        minOccurs="0" maxOccurs="1" 
/>
USAGE
<List>
        <Fields 
                <FieldRef />
                <Field />
        />
</List>

```

## Type

[SPFieldCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldCollection.aspx)
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

None
   
### Child elements

- [Field Element (DeploymentManifest - SPFieldCollection)](field-element-deploymentmanifestspfieldcollection.md)
- [FieldRef Element (DeploymentManifest - SPFieldCollection)](fieldref-element-deploymentmanifestspfieldcollection.md)
   
### Parent elements

[List Element (DeploymentManifest)](list-element-deploymentmanifest.md)
   
## See also

- [SPFieldCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldCollection.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

