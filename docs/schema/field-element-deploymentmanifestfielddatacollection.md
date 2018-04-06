---
title: "Field Element (DeploymentManifest - FieldDataCollection)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 0b17884d-95b4-4b23-b74c-07a6957ae14a
description: "Last modified: March 09, 2015"
---

# Field Element (DeploymentManifest - FieldDataCollection)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents field values for the specified type instance.
  
```
DECLARATION
<xs:element name="Field" 
        type="DictionaryEntry" 
        minOccurs="0" maxOccurs="unbounded" 
/>
USAGE
<Fields>
        <Field
      Name="xs:string"
      Value="xs:string"
      Value2="xs:string"
      Id="Guid"
      Type="SPDictionaryEntryValueType"
      Access="SPDictionaryEntryAccess"
        />
</Fields>

```

## Type

[DictionaryEntry](https://msdn.microsoft.com/library/System.Collections.DictionaryEntry.aspx)
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Name** <br/> |xs:string  <br/> |Required. Literal name of the specified field.  <br/> |
|**Value** <br/> |xs:string  <br/> |Optional. Representation of the field value.  <br/> |
|**Value2** <br/> |xs:string  <br/> |Optional.  <br/> |
|**Id** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the field.  <br/> |
|**Type** <br/> |[SPDictionaryEntryValueType Simple Type (DeploymentManifest)](spdictionaryentryvaluetype-simple-type-deploymentmanifest.md) <br/> |Optional. Data type of the field value. Must be a value type defined in the **SPDictionaryEntryValueType** simple type.  <br/> |
|**Access** <br/> |[SPDictionaryEntryAccess Simple Type (DeploymentManifest)](spdictionaryentryaccess-simple-type-deploymentmanifest.md) <br/> |Optional. Specifies the allowable access modes for the field value. Must be a value defined in the **SPDictionaryEntryAccess** simple type: **ReadOnly** or **ReadWrite**.  <br/> |
   
### Child elements

||
|:-----|
|None |
   
### Parent elements

||
|:-----|
|[Fields Element (DeploymentManifest - SPList)](fields-element-deploymentmanifestsplist.md)
   
## See also



[DictionaryEntry](https://msdn.microsoft.com/library/System.Collections.DictionaryEntry.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

