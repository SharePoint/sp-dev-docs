---
title: Format board view to customize SharePoint
description: Customize how board views in SharePoint lists and libraries are displayed by constructing a JSON object that describes the elements and the styles to be applied to those elements.
ms.date: 02/09/2022
ms.localizationpriority: high
---

# Board view customizations

## Build custom cards

You can use Board **`formatter`** to define a totally custom layout of field values inside a card using the same syntax used in [Column Formatting](column-formatting.md).

## Detailed syntax reference

### hideSelection

Optional element. Specifies whether the ability to select cards in the view is disabled or not. `false` is the default behavior inside a board view (meaning selection is visible and enabled). `true` means that users will not be able to select list items.

### formatter

JSON object that defines the layout of cards. The schema of this JSON object is identical to the schema of a column format (and that of rowFormatter). For details on this schema and its capabilities, see the [Formatting syntax reference](./formatting-syntax-reference.md).

## See also
- [Advanced formatting concepts](./formatting-advanced.md)
- [Formatting syntax reference](./formatting-syntax-reference.md)