---
title: "FieldRef Element (DeploymentManifest - SPFieldCollection)"


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 1af74fb6-0e33-4e84-8b49-5e7027100699
description: "Last modified: March 09, 2015"
---

# FieldRef Element (DeploymentManifest - SPFieldCollection)

 
  
 **Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents field data to display in a Windows SharePoint Services 3.0 list ([SPList](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPList.aspx) ). 
  
```
DECLARATION
<xs:element name="FieldRef" 
        type="SPFieldLink" 
        minOccurs="0" maxOccurs="unbounded" 
/>
USAGE
<Fields>
        <FieldRef>
                <Field />
                        Name="xs:string"
                        ID="Guid"
                        Customization="xs:string"
                        Default="xs:string"
                        ColName="xs:string"
                        ColName2="xs:string"
                        RowOrdinal="xs:int"
                        RowOrdinal2="xs:int"
                        Hidden="TRUEFALSE"
                        Required="TRUEFALSE"
                        Explicit="xs:string"
                        ShowInNewForm="xs:string"
                        ShowInEditForm="xs:string"
                        DisplayName="xs:string"
                        Node="xs:string"
        <FieldRef />
</Fields>

```

## Type

[SPField](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPField.aspx)
  
## Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Name** <br/> |xs:string  <br/> |Optional. Name of the field in which to display the data.  <br/> |
|**ID** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the field in which to display the data.  <br/> |
|**Customization** <br/> |xs:string  <br/> |Optional.  <br/> |
|**Default** <br/> |xs:string  <br/> |Optional. Default value for data to display in the field.  <br/> |
|**ColName** <br/> |xs:string  <br/> |Optional. Display name of the column representing the field.  <br/> |
|**ColName2** <br/> |xs:string  <br/> |Optional.  <br/> |
|**RowOrdinal** <br/> |xs:int  <br/> |Optional.  <br/> |
|**RowOrdinal2** <br/> |xs:int  <br/> |Optional.  <br/> |
|**Hidden** <br/> |[TRUEFALSE Simple Type (DeploymentManifest)](truefalse-simple-type-deploymentmanifest.md) <br/> |Optional. Specifies whether the field value is hidden in the user interface. **TRUE** if the value is hidden. The default is **FALSE**.  <br/> |
|**Required** <br/> |[TRUEFALSE Simple Type (DeploymentManifest)](truefalse-simple-type-deploymentmanifest.md) <br/> |Optional. Specifies whether the field requires a value (cannot be **null**). **TRUE** if the field value is required. The default is **FALSE**.  <br/> |
|**Explicit** <br/> |xs:string  <br/> |Optional.  <br/> |
|**ShowInNewForm** <br/> |xs:string  <br/> |Optional.  <br/> |
|**ShowInEditForm** <br/> |xs:string  <br/> |Optional.  <br/> |
|**DisplayName** <br/> |xs:string  <br/> |Optional.  <br/> |
|**Node** <br/> |xs:string  <br/> |Optional.  <br/> |
   
## Child Elements

||
|:-----|
|[Field Element (DeploymentManifest - SPFieldCollection)](field-element-deploymentmanifestspfieldcollection.md) <br/> |
|[FieldRef Element (DeploymentManifest - SPFieldCollection)](fieldref-element-deploymentmanifestspfieldcollection.md) <br/> |
   
## Parent Elements

||
|:-----|
|[Fields Element (DeploymentManifest - SPList)](fields-element-deploymentmanifestsplist.md)|
   
## Remarks

This element can contain instances of itself, and can therefore be either a parent or child of itself.
  
## See also

#### Reference

[SPFieldLink](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldLink.aspx)


[DeploymentManifest Schema](deploymentmanifest-schema.md)

