---
title: ListInstance Element (List Instance)
description: Specifies default data with which to provision the given list type.
manager: soliver
ms.date: 12/14/2020
ms.audience: Developer
ms.topic: reference
ms.service: sharepoint
ms.localizationpriority: medium
ms.assetid: cfefe8e5-2656-4d71-bb4e-5f991a800598
---

# ListInstance Element (List Instance)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Specifies default data with which to provision the given list type.

## Definition

```XML
<ListInstance
  CustomSchema = string
  Description = "Text"
  DocumentTemplate = integer
  FeatureId = "Text"
  Hidden = "TRUE" | "FALSE"
  HyperlinkBaseUrl = string
  Id = Text
  OnQuickLaunch = "TRUE" | "FALSE"
  QuickLaunchUrl = "Text"
  RootWebOnly = "TRUE" | "FALSE"
  TemplateType = Integer
  Title = "Text"
  Url = "Text"
  VersioningEnabled = "TRUE" | "FALSE"
</ListInstance>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

| Attribute             | Description                                                                                                                                                                                                                                                                                                                                                                                       |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **CustomSchema**      | Optional **string**. Specifies the custom schema to use for the list instance.                                                                                                                                                                                                                                                                                                                    |
| **Description**       | Optional **Text**. Contains a description of the list.                                                                                                                                                                                                                                                                                                                                            |
| **DocumentTemplate**  | Optional **string**. Specifies the document template to use for the list instance.                                                                                                                                                                                                                                                                                                                |
| **FeatureId**         | Required **Text**. Specifies the GUID of the Feature. If you do not specify a Feature GUID, Microsoft SharePoint Foundation uses the ID of the default Feature, in other words, the one containing the **ListInstance** element. If the list template for the list instance is contained within a different Feature, you must specify the ID of that Feature through the **FeatureId** attribute. |
| **Hidden**            | Optional **Boolean**. Specifies if the list is hidden.                                                                                                                                                                                                                                                                                                                                            |
| **HyperlinkBaseUrl**  | Optional **string**. Specifies the absolute URL used for hyperlinks in the list.                                                                                                                                                                                                                                                                                                                  |
| **Id**                | Optional **Text**. Specifies a unique identifier for the list instance. The integer must be unique across the Feature definition.                                                                                                                                                                                                                                                                 |
| **OnQuickLaunch**     | Optional **Boolean**. **TRUE** to display lists created from the list definition on the Quick Launch bar.                                                                                                                                                                                                                                                                                         |
| **QuickLaunchUrl**    | Optional **Text**. Specifies the URL of the view page to open for the list through Quick Launch navigation.                                                                                                                                                                                                                                                                                       |
| **RootWebOnly**       | Optional **Boolean**. **TRUE** to specify that the list created from the definition exists only in the root website of a site collection.                                                                                                                                                                                                                                                         |
| **TemplateType**      | Required **Integer**. Returns the integer identifier of the list template to use.                                                                                                                                                                                                                                                                                                                 |
| **Title**             | Required **Text**. Title of the list in the schema. This must also be unique.                                                                                                                                                                                                                                                                                                                     |
| **Url**               | Required **Text**. Returns the site-relative URL at which to place the list.                                                                                                                                                                                                                                                                                                                      |
| **VersioningEnabled** | Optional **Boolean**. Specifies if versioning is enabled on the list.                                                                                                                                                                                                                                                                                                                             |

### Child elements

[Data](data-element-list-instance.md), [DataSource Element (List Instance)](datasource-element-list-instance.md)

### Parent elements

[Elements](elements-element-list-instance.md)

### Occurrences

- Minimum: 0
- Maximum: Unbounded

### Remarks

The **ListInstance** Feature element maps to the [List](list-element-list.md) element as used in SharePoint Foundation within the [Configuration](configuration-element-site.md) element in **onet.xml**.

## Example

For an example of how this element is used, see [List Instances](list-instances.md).
