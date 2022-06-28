---
title: "Menu element (Server Ribbon)"
description: "Describes the definition, element, and attribute information for the Menu element (Server Ribbon), which defines a menu control."
manager: soliver
ms.date: 06/09/2022
ms.audience: Developer
ms.topic: reference
ms.localizationpriority: medium
api_name:
- Server Ribbon schema
api_type:
- schema
ms.assetid: 1bc70fb9-bcf5-4758-a3dd-a3af3b4a745f
---

# Menu element (Server Ribbon)

**Applies to:** SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Defines a menu control.

```XML
<Menu
  Id="Text"
  MaxWidth="Integer"
/>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

|**Attribute**|**Description**|
|:-----|:-----|
|**Id** <br/> |Required. A string that identifies the element, such as "Ribbon.WikiPageTab.EditAndCheckout.SaveEdit.Menu".  <br/> |
|**MaxWidth** <br/> |Optional. The maximum width in pixels.  <br/> |

### Child elements

- [MenuSection](menusection-element.md)

### Parent elements

- [CommandUIDefinition](commanduidefinition-element.md)
- [ComboBox](combobox-element.md)
- [DropDown](dropdown-element.md)
- [FlyoutAnchor](flyoutanchor-element.md)
- [Jewel](jewel-element.md)
- [MRUSplitButton](mrusplitbutton-element.md)
- [SplitButton](splitbutton-element.md)

### Occurrences

- Minimum: 0
- Maximum: 1
