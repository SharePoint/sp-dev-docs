---
title: FieldRefs Element (ContentType)
manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: sharepoint
localization_priority: Normal
ms.assetid: e7a61a08-dd2a-4ce8-8e1b-d4fbbdc4749d
---

# FieldRefs Element (ContentType)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a collection of column references included in the content type.

## Definition

```XML
<FieldRefs>
</FieldRefs>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|   |   |
|---|---|
| **Attribute** | **Description** |
| **None** |   |

### Child elements

|   |
|---|
| [FieldRef](fieldref-element-contenttype.md) | 
| [RemoveFieldRef](removefieldref-element-contenttype.md) |  
| [DocumentTemplate](https://msdn.microsoft.com/library/a4ae965b-6ac7-41f6-9a11-47f3d2b06cd0(Office.15).aspx) |

### Parent elements

|   |
|---|
| [ContentType](contenttype-element-contenttype.md) |

### Occurrences

|   |
|---|
| Minimum: 1 |
| Maximum: 1 |

### Remarks

The **FieldRefs** element contains a collection of [FieldRef](fieldref-element-contenttype.md) elements. The **FieldRef** element is a reference to a column defined elsewhere, either at the site or list level. In the field reference, you can override a subset of the column properties, such as the following:

- Display name

- XML promotion and demotion attributes

- Whether the field is read-only, required, or hidden

Changing these properties in the field reference only changes them as they apply to the specific content type that contains the field reference.

> [!NOTE]
> The order in which **FieldRef** elements are listed determines the order of fields shown on NewForm.aspx.

The [DocumentTemplate](https://msdn.microsoft.com/library/a4ae965b-6ac7-41f6-9a11-47f3d2b06cd0(Office.15).aspx)
child element is obsolete. Instead use the [DocumentTemplate](documenttemplate-element-contenttype.md) element
that is a child of the [ContentType](contenttype-element-contenttype.md) element.

For more information about field references, see [Fields and Field References](https://msdn.microsoft.com/library/6b536c1a-719c-4203-8006-c162de199bfc(Office.15).aspx).
