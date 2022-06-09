---
title: Action element in Actions (BDCMetadata Schema)
description: Details on the Action element in Actions (BDCMetadata Schema).
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.Action Element
ms.prod: sharepoint
ms.localizationpriority: medium
ms.assetid: f58b96c0-77a8-69d3-8710-fff03d4970b9
---

# Action element in Actions (BDCMetadata Schema)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies an action supported by an external content type.

**Namespace**: `http://schemas.microsoft.com/windows/2007/BusinessDataCatalog`

**Schema**: BDCMetadata

Actions bridge the gap between Microsoft SharePoint 2010 and Microsoft Office 2010 and an external system's user interface by providing a link back to the external system.

By default, the Business Data Connectivity (BDC) service provides actions such as **View Item**, **Edit Item**, and **Delete Item** after you model these operations in the BDC model. In addition to these default actions, you can create actions for other functionality that you want to attach to your external content type. For example, you can use actions to perform simple actions such as to send email messages to a customer from the Customer external content type or to open a customer's home page in a browser.

Actions travel with an external content type. That is, after you define an action for an external content type, the action appears everywhere you display that external content type—whether in an external list or Business Data web part or in an External Data column.

```XML
<Action Position = "Integer" IsOpenedInNewWindow = "Boolean" Url = "String" ImageUrl = "String" Name = "String" DefaultDisplayName = "String" IsCached = "Boolean"></Action>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes
  
| Attribute | Description |
| --- | --- |
| **Position** | Required.</br>The suggested position of this action among the other actions of this external content type.</br>Attribute type: **Integer** |
| **IsOpenedInNewWindow** | Optional.</br>Specifies whether the results of executing an action are presented in a new user interface window.</br>Default value: **false**</br>Attribute type: **Boolean** |
| **Url** | Required.</br>The URL to go to when the action is invoked. The URL string is a Microsoft .NET Framework format string. Each format specifier (for example, {0}) corresponds to an **Action** parameter.</br>Attribute type: **String** |
| **ImageUrl** | Optional.</br>The absolute or relative path to the icon image for the action. The icon image should be 16 x 16 pixels.</br>Attribute type: **String** |
| **Name** | Required.</br>The name of this action.</br>Attribute type: **String** |
| **DefaultDisplayName** | Optional.</br>The default display name for this action.</br>Attribute type: **String** |
| **IsCached** | Optional.</br>Specifies whether this action is used frequently. This is used by the BDC client runtime to cache this action.</br>Default value: **true**</br>Attribute type: **Boolean** |

</br>

### Child elements
  
| Element | Description |
| --- | --- |
| [LocalizedDisplayNames element in MetadataObject (BDCMetadata Schema)](localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.md) | The localized names of the action. |
| [Properties element in MetadataObject (BDCMetadata Schema)](properties-element-in-metadataobject-bdcmetadata-schema.md) | The properties of the action. |
| [ActionParameters element in Action (BDCMetadata Schema)](actionparameters-element-in-action-bdcmetadata-schema.md) | The parameters of the action. |

</br>

### Parent elements
  
| Element | Description |
| --- | --- |
| [Actions element in Entity (BDCMetadata Schema)](actions-element-in-entity-bdcmetadata-schema.md) | The list of actions of an external content type. |
