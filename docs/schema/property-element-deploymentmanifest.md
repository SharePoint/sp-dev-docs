---
title: "Property Element (DeploymentManifest)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: bb088270-da19-42a2-85ef-7555a57e8d69
description: "Last modified: March 09, 2015"
---

# Property element (DeploymentManifest)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents a property value on an instance of a Windows SharePoint Services 3.0 object.

## Definition

```XML
DECLARATION
<xs:element name="Property" type="DictionaryEntry" minOccurs="0" maxOccurs="unbounded" />

USAGE
<Properties>
        <Property
                Name="xs:string"
                Value="xs:string"
                Value2="xs:string"
                Id="Guid"
                Type="SPDictionaryEntryValueType"
                Access="SPDictionaryEntryAccess"
        />
</Properties>

```

## Type

[DictionaryEntry](https://msdn.microsoft.com/library/System.Collections.DictionaryEntry.aspx)
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|Name  <br/> |xs:string  <br/> |Required. Name of the property.  <br/> |
|Value  <br/> |xs:string  <br/> |Optional. Property value.  <br/> |
|Value2  <br/> |xs:string  <br/> |Optional.  <br/> |
|Id  <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the property.  <br/> |
|Type  <br/> |[SPDictionaryEntryValueType Simple Type (DeploymentManifest)](spdictionaryentryvaluetype-simple-type-deploymentmanifest.md) <br/> |Optional. Enumeration of property value types.  <br/> The default type is **string**.  <br/> |
|Access  <br/> |[SPDictionaryEntryAccess Simple Type (DeploymentManifest)](spdictionaryentryaccess-simple-type-deploymentmanifest.md) <br/> |Optional. An enumeration of two available access modes settings: **ReadOnly** and **ReadWrite**.  <br/> The default access mode is **ReadWrite**.  <br/> |
   
### Child elements

None
   
### Parent elements

[Properties Element (DeploymentManifest - SPAttachment)](properties-element-deploymentmanifestspattachment.md)
   
## See also

- [DictionaryEntry](https://msdn.microsoft.com/library/System.Collections.DictionaryEntry.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

