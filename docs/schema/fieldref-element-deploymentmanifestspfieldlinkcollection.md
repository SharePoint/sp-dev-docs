---
title: "FieldRef Element (DeploymentManifest - SPFieldLinkCollection)"
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 6cc11fe1-c73a-4878-8d4a-b307af972dd6
description: "Last modified: March 09, 2015"
---

# FieldRef Element (DeploymentManifest - SPFieldLinkCollection)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013 
  
Represents field data to display in a view.

## Definition

```XML
DECLARATION
<xs:element name="FieldRef" 
        type="SPFieldLink" 
        minOccurs="0" maxOccurs="unbounded" 
/>
USAGE
<ViewFields>
        <FieldRef
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
        />
</ViewFields>

```

## Type

[SPFieldLink](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldLink.aspx)
  
## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Type**|**Description**|
|:-----|:-----|:-----|
|**Name** <br/> |xs:string  <br/> |Optional. Name of the field referenced.  <br/> |
|**ID** <br/> |[Guid Simple Type (DeploymentManifest)](guid-simple-type-deploymentmanifest.md) <br/> |Optional. Unique identifier of the field referenced.  <br/> |
|**Customization** <br/> |xs:string  <br/> |Optional.  <br/> |
|**Default** <br/> |xs:string  <br/> |Optional. Default value for the field referenced.  <br/> |
|**ColName** <br/> |xs:string  <br/> |Optional. Display name for the column representing the field referenced.  <br/> |
|**ColName2** <br/> |xs:string  <br/> |Optional.  <br/> |
|**RowOrdinal** <br/> |xs:int  <br/> |Optional.  <br/> |
|**RowOrdinal2** <br/> |xs:int  <br/> |Optional.  <br/> |
|**Hidden** <br/> |[TRUEFALSE Simple Type (DeploymentManifest)](truefalse-simple-type-deploymentmanifest.md) <br/> |Optional. Specifies that the field value is hidden in the user interface.  <br/> |
|**Required** <br/> |[TRUEFALSE Simple Type (DeploymentManifest)](truefalse-simple-type-deploymentmanifest.md) <br/> |Optional. Specifies that the field requires a value.  <br/> |
|**Explicit** <br/> |xs:string  <br/> |Optional.  <br/> |
|**ShowInNewForm** <br/> |xs:string  <br/> |Optional.  <br/> |
|**ShowInEditForm** <br/> |xs:string  <br/> |Optional.  <br/> |
|**DisplayName** <br/> |xs:string  <br/> |Optional. Name shown in the user interface for the field referenced.  <br/> |
|**Node** <br/> |xs:string  <br/> |Optional.  <br/> |
   
### Child elements

None
   
### Parent elements

[ViewFields Element (DeploymentManifest - SPView)](viewfields-element-deploymentmanifestspview.md)
   
## See also

- [SPFieldLink](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPFieldLink.aspx)
- [DeploymentManifest Schema](deploymentmanifest-schema.md)

