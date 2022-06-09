---
title: Method element in Methods (BDCMetadata)
description: Describes the definition, element, and attribute information for the Method element in Methods (BDCMetadata), which specifies a method of an external content type.
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.Method
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 70e87a9e-4959-0a7b-3f37-ddec36473ff4
---

# Method element in Methods (BDCMetadata)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a method of an external content type.

**Namespace**: `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema**: BDCMetadata

## Definition

```XML
<Method IsStatic = "Boolean" LobName = "String" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </Method>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|Attribute|Description|
|---------|-----------|
|**IsStatic**|Optional.<br /><br />Specifies whether the execution of this method requires an external item (**EntityInstance**) to serve as a context for execution. If set to **true**, the method represents a static method and does not require a specific **EntityInstance** to provide context for execution. If set to **false**, the method represents an instance method and requires an **EntityInstance** to provide the context for execution.<br /><br />Default value: **true**<br /><br />Attribute type: **Boolean**|
|**LobName**|Optional.<br /><br />The name of the operation defined in the external system that is represented by this method.<br /><br />Attribute type: **String**|
|**Name**|Required.<br /><br />The name of this method.<br /><br />Attribute type: **String**|
|**DefaultDisplayName**|Optional.<br /><br />The default display name of the method.<br /><br />Attribute type: **String**|
|**IsCached**|Optional.<br /><br />Specifies whether this method is used frequently. If set to **true**, Business Data Connectivity (BDC) service caches this method in memory.<br /><br />Default value: **true**<br /><br />Attribute type: **Boolean**|

### Child elements

|Element|Description|
|-------|-----------|
|[LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)](localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md)|The localized display names of the method.|
|[Properties Element in MetadataObject (BDCMetadata Schema)](properties-element-in-metadataobject-bdcmetadata-schema.md)|The properties of the method.|
|[AccessControlList Element (BDCMetadata Schema)](accesscontrollist-element-bdcmetadata-schema.md)|The access control list (ACL) of this method.|
|[FilterDescriptors Element in Method (BDCMetadata Schema)](filterdescriptors-element-in-method-bdcmetadata-schema.md)|The filter descriptors of the method.|
|[Parameters Element in Method (BDCMetadata Schema)](parameters-element-in-method-bdcmetadata-schema.md)|The parameters of the method. A method cannot have more than one return parameter.|
|[MethodInstances Element in Method (BDCMetadata Schema)](methodinstances-element-in-method-bdcmetadata-schema.md)|The method instances of the method.|

### Parent elements

|Element|Description|
|-------|-----------|
|[Methods Element in Entity (BDCMetadata Schema)](methods-element-in-entity-bdcmetadata-schema.md)|A list of methods of an external content type.|








