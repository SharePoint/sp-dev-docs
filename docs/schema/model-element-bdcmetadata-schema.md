---
title: Model Element (BDCMetadata Schema)
description: Specifies the root element that represents an application definition. Models define external content types that are contained by external applications.
manager: soliver
ms.date: 01/27/2021
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.Model
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: d7823090-b20d-2c96-c359-081c055d0e65
---
# Model Element (BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the root element that represents an application definition. Models define external content types that are contained by external applications.

**Namespace**: `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema**: BDCMetadata

```XML
<Model Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </Model>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|       Attribute        |                                                                                                       Description                                                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Name**               | The name of the **Model** (Required) Attribute type: **String**                                                                                                                                                          |
| **DefaultDisplayName** | The default display name of the **Model**. (Optional) Attribute type: **String**                                                                                                                                         |
| **IsCached**           | Specifies whether the **Model** is used frequently. If this is set to **true**, the **Model** is cached by the Business Data Connectivity (BDC) service. (Optional) Default value: **true**, Attribute type: **Boolean** |

### Child elements

|                                                                    Element                                                                    |                     Description                     |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)](localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md) | The localized names of the **Model**.               |
| [Properties Element in MetadataObject (BDCMetadata Schema)](properties-element-in-metadataobject-bdcmetadata-schema.md)                       | The properties of the **Model**.                    |
| [AccessControlList Element (BDCMetadata Schema)](accesscontrollist-element-bdcmetadata-schema.md)                                             | The access control list (ACL) of the **Model**.     |
| [LobSystems Element in Model (BDCMetadata Schema)](lobsystems-element-in-model-bdcmetadata-schema.md)                                         | The **LobSystems** contained inside this **Model**. |

### Parent elements

None.
