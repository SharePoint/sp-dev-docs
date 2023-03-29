---
title: TypeDescriptor Element
description: Describes the TypeDescriptor element and provides the elements and attributes.
manager: soliver
ms.date: 03/28/2023
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.TypeDescriptor
ms.localizationpriority: medium
ms.assetid: ae423de8-c13b-aea5-d47b-17ef786fb5a7
---

# TypeDescriptor Element

(BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies a **TypeDescriptor**.

**Namespace**: `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema**: BDCMetadata

```XML
<TypeDescriptor
  TypeName="String"
  LobName="String"
  IdentifierEntityNamespace="String"
  IdentifierEntityName="String"
  IdentifierName="String"
  ForeignIdentifierAssociationName="String"
  ForeignIdentifierAssociationEntityName="String"
  ForeignIdentifierAssociationEntityNamespace="String"
  AssociatedFilter="String"
  IsCollection="Boolean"
  ReadOnly="Boolean"
  CreatorField="Boolean"
  UpdaterField="Boolean"
  PreUpdaterField="Boolean"
  Significant="Boolean"
  Name="String"
  DefaultDisplayName="String"
  IsCached="Boolean">
</TypeDescriptor>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|Attribute|Description|
| -- | -- |
|**TypeName**|Required. The identifier of the data type of the data structure that is represented by the **TypeDescriptor**.Attribute type: **String**|
|**LobName**|Optional. The data structure that is represented by the **TypeDescriptor**. The default value of this attribute is the name of the **TypeDescriptor**. For example, a line-of-business (LOB) system data structure named "CN1A" can be represented by a **TypeDescriptor** with **Name** attribute equal to "Customer Name", if the **LobName** attribute of this **TypeDescriptor** is equal to "CN1A". Attribute type: **String**|
|**IdentifierEntityNamespace**|Optional. The namespace of the external content type that contains the identifier that the **TypeDescriptor** references. If the **TypeDescriptor** does not reference an **Identifier**, this attribute must not be present. When this attribute is present, the **IdentifierEntityName** and **IdentifierName** attributes must also be present. The default value of this attribute is the namespace of the external content type that contains the method containing the parameter that contains the **TypeDescriptor**. Attribute type: **String**|
|**IdentifierEntityName**|Optional. The name of the **Entity** that contains the **Identifier** that the **TypeDescriptor** references. If the **TypeDescriptor** does not reference an **Identifier**, this attribute must not be present. When this attribute is present, the **IdentifierEntityNamespace** and **IdentifierName** attributes must also be present. The default value of this attribute is the name of the **Entity** that contains the **Method** containing the **Parameter** that contains the **TypeDescriptor**. Attribute type: **String**|
|**IdentifierName**|Optional. The name of the **Identifier** referenced by the **TypeDescriptor**. If the **TypeDescriptor** does not reference an **Identifier**, this attribute must not be present. Attribute type: **String**|
|**ForeignIdentifierAssociationName**|Optional. The name of the **Association** referenced by the **TypeDescriptor**. If the **TypeDescriptor** does not reference an **Association**, this attribute must not be present. When this attribute is present, the **IdentifierName** attribute must also be present. The **ForeignIdentifierAssociationName** attribute must be specified when the **Identifier** referenced by this **TypeDescriptor** is related to an **Association**, and the **Identifier** is contained by a source **Entity** of the **Association**. Attribute type: **String**|
|**ForeignIdentifierAssociationEntityName**|Optional. The name of the **Entity** that contains the **Association** referenced by the **TypeDescriptor**. If the **TypeDescriptor** does not reference an **Association**, this attribute must not be present. When this attribute is present, the **ForeignIdentifierAssociationEntityNamespace** and **ForeignIdentifierAssociationName** attributes must also be present. The default value of this attribute is the name of the **Entity** that contains the **Method** containing the **Parameter** that contains the **TypeDescriptor**. Attribute type: **String**|
|**ForeignIdentifierAssociationEntityNamespace**|Optional. The namespace of the **Entity** that contains the **Association** referenced by the **TypeDescriptor**. If the **TypeDescriptor** does not reference an **Association**, this attribute must not be present. When this attribute is present, the **ForeignIdentifierAssociationEntityName** and **ForeignIdentifierAssociationName** attributes must also be present. The default value of this attribute is the namespace of the **Entity** that contains the **Method** containing the **Parameter** that contains the **TypeDescriptor**. Attribute type: **String**|
|**AssociatedFilter**|Optional. The name of a **FilterDescriptor** that is associated with the **TypeDescriptor**. If the **TypeDescriptor** is not associated with a **FilterDescriptor**, this attribute must not be present. Attribute type: **String**|
|**IsCollection**|Optional. Specifies whether the **TypeDescriptor** represents a single data structure or a collection of data structures. Default value: **false** Attribute type: **Boolean**|
|**ReadOnly**|Optional. Specifies whether the data stored by the data structure represented by the **TypeDescriptor** can be modified. This attribute must not be specified if the value of the **Direction** attribute of the **Parameter** that contains the **TypeDescriptor** is "In". Default value: **false** Attribute type: **Boolean**|
|**CreatorField**|Optional. Specifies whether the **TypeDescriptor** represents a field for **MethodInstances** of type **Creator** that are contained by the **Method** that contains the **Parameter** containing the **TypeDescriptor**. Default value: **false** Attribute type: **Boolean**|
|**UpdaterField**|Optional. Specifies whether the **TypeDescriptor** represents a field for **MethodInstances** of type **Updater** that are contained by the **Method** that contains the **Parameter** containing the **TypeDescriptor**. When this attribute is specified, a **PreUpdaterField** attribute must not be specified. Default value: **false** Attribute type: **Boolean**|
|**PreUpdaterField**|Optional. Specifies whether data structure represented by the **TypeDescriptor** stores the latest data value received from the external system of a field for **MethodInstances** of type **Updater**. When this attribute is specified, an **UpdaterField** attribute must not be specified. Default value: **false** Attribute type: **Boolean**|
|**Significant**|Optional. Specifies whether values stored by the data structure represented by this **TypeDescriptor** are included in calculating a hash code or comparing values stored in the data structures. For example, a **TypeDescriptor** representing a customer's last name is taken into account when determining whether a record has been modified, and so it is significant, whereas the **TypeDescriptor** representing the date on which the customer record is last modified typically is not taken into account to determine whether a record has been modified, and so it is not significant. Default value: **true** Attribute type: **Boolean**|
|**Name**|Required. The name of the **TypeDescriptor**. Attribute type: **String** **Note**: The name of a **TypeDescriptor** should not contain the special characters for forward slash ("/"), period ("."), or opening bracket ("[").|
|**DefaultDisplayName**|Optional. The display name of the **TypeDescriptor**. Attribute type: **String**|
|**IsCached**|Optional. Specifies whether the **TypeDescriptor** is used frequently. Default value: **true** Attribute type: **Boolean**|

### Child elements

| Element | Description |
| --- | --- |
| [LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)](localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md) | The localized names of the **TypeDescriptor**. |
| [Properties Element in MetadataObject (BDCMetadata Schema)](properties-element-in-metadataobject-bdcmetadata-schema.md) | The properties of the **TypeDescriptor**.<br /><br />When the TypeDescriptor is of type **System.String**, the **Properties** element can contain a **Property** of type **System.Int32** with the **Name** attribute set to **Size**. The value of the **Property** specifies the expected maximum string length of the value of the data structure described by this **TypeDescriptor**. |
| [Interpretation Element in TypeDescriptor (BDCMetadata Schema)](interpretation-element-in-typedescriptor-bdcmetadata-schema.md) | The rules for the data stored by the data structure represented by the **TypeDescriptor**. |
| [DefaultValues Element in TypeDescriptor (BDCMetadata Schema)](defaultvalues-element-in-typedescriptor-bdcmetadata-schema.md) | The default values of the **TypeDescriptor**. |
| [TypeDescriptors Element in TypeDescriptor (BDCMetadata Schema)](typedescriptors-element-in-typedescriptor-bdcmetadata-schema.md) | The child **TypeDescriptors** of the **TypeDescriptor**. |

### Parent elements

| Element | Description |
| --- | --- |
| [TypeDescriptors Element in TypeDescriptor (BDCMetadata Schema)](typedescriptors-element-in-typedescriptor-bdcmetadata-schema.md) |     |
