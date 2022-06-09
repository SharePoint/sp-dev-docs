---
title: ActionParameter element in ActionParameters (BDCMetadata Schema)
description: Details on the  ActionParameter element in ActionParameters (BDCMetadata Schema).
manager: soliver
ms.date: 01/27/2021
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.ActionParameter
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: 1f5fa96a-1bff-f007-984d-a644cbbb2648
---

# ActionParameter element in ActionParameters (BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies the parameters of a URL-based action. Defines how to parameterize the URL of an action with EntityInstance-specific data.

**Namespace**: `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema**: BDCMetadata

The URL attribute of a URL-based action can receive parameters by using the ActionParameter element.

> [!IMPORTANT]
> **ActionParameters** can either represent identifier values, or values that correspond to **TypeDescriptors** in a **SpecificFinder** of the **Entity**.
>
> The **ActionParameter** represents an identifier value when the **IdOrdinal** property is present. The value of the property specifies the index of the identifier whose value this **ActionParameter** represents. If the **IdOrdinal** property is not specified, the **ActionParameter** represents a **TypeDescriptor**, and the **Name** attribute specifies which type descriptor is being represented. The **Name** attribute is specified as a **Dotted Path**.

The **ActionParameter** element accepts the following property.

> [!IMPORTANT]
> Properties are case-sensitive.

### Properties
  
| Property | Type | Description | Required | Default Value | Limits/Accepted Values |
| --- | --- | --- | --- | --- | --- |
| **IdOrdinal** | **System.Int32** | Specifies if the **ActionParameter** represents an identifier instead of a field. | Optional |     |     |

</br>

```XML
<ActionParameter Index = "Integer" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"> </ActionParameter>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes
  
| Attribute | Description |
| --- | --- |
| **Index** | Required.</br>An ordinal attribute that specifies the position of this **ActionParameter** among other **ActionParameters** in the URL.</br>Attribute type: **Integer** |
| **Name** | Required.</br>The name of the **ActionParameter**.</br>Attribute type: **String** |
| **DefaultDisplayName** | Optional.</br>The default display name for the **ActionParameter**.</br>Attribute type: **String** |
| **IsCached** | Optional.</br>Specifies whether this **ActionParameter** is used frequently. This attribute is used by the BDC client runtime to cache this **Action**.</br>Default value: **true**</br>Attribute type: **Boolean** |

</br>

### Child elements
  
| Element | Description |
| --- | --- |
| [LocalizedDisplayNames element in MetadataObject (BDCMetadata Schema)](localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md) | The localized display names for the **ActionParameter**. |
| [Properties element in MetadataObject (BDCMetadata Schema)](properties-element-in-metadataobject-bdcmetadata-schema.md) | The properties of the **ActionParameter**. |

</br>

### Parent elements
  
| Element | Description |
| --- | --- |
| [ActionParameters element in Action (BDCMetadata Schema)](actionparameters-element-in-action-bdcmetadata-schema.md) | The **ActionParameters** element that contains this **ActionParameter**. |
