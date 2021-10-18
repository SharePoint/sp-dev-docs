---
title: Use view formatting to customize SharePoint
description: Customize how views in SharePoint lists and libraries are displayed by constructing a JSON object that describes the elements that are displayed in a list view, and the styles to be applied to those elements.
ms.date: 10/08/2021
ms.localizationpriority: high
---

## Detailed syntax reference

### rowFormatter

Optional element. Specifies a JSON object that describes a list row format. The schema of this JSON object is identical to the schema of a column format. For details on this schema and its capabilities, see [Column Format Detailed syntax reference](column-formatting.md#detailed-syntax-reference). Only valid for 'List' and 'Compact List' layouts.

> [!NOTE]
> Using the `rowFormatter` property will override anything specified in the `additionalRowClass` property. They are mutually exclusive.

#### Differences in behavior between the rowFormatter element and column formatting

Despite sharing the same schema, there are some differences in behavior between elements inside a `rowFormatter` element and those same elements in a column formatting object.

- `@currentField` always resolves to the value of the `Title` field inside a `rowFormatter`.

### additionalRowClass

Optional element. Specifies a CSS class(es) that is applied to the entire row. Supports expressions. Only valid for 'List' and 'Compact List' layouts.

`additionalRowClass` only takes effect when there is no `rowFormatter` element specified. If a `rowFormatter` is specified, then `additionalRowClass` is ignored.

### hideSelection

Optional element. Specifies whether the ability to select rows in the view is disabled or not. `false` is the default behavior inside a list view (meaning selection is visible and enabled). `true` means that users will not be able to select list items. Valid in 'List', 'Compact List' and 'Gallery' layouts.

For list & compact list layout, `hideSelection` only takes effect when there's a `rowFormatter` element specified. If no `rowFormatter` is specified, then `hideSelection` is ignored.

### fillHorizontally

Optional element. Specifies whether the cards in the row should be stretched horizontally to fill the row. `false` is the default behavior (meaning cards in a row are stacked without resizing until they overflow). `true` means cards in the row are stretched horizontally only if necessary to fill the row. Only valid for 'Gallery' layout.

### hideColumnHeader

Optional element. Specifies whether the column headers in the view are hidden or not. `false` is the default behavior inside a list view (meaning column headers will be visible). `true` means that the view will not display column headers. Only valid for 'List' and 'Compact List' layouts.

### height

Optional element. Defines the height of the card in pixels for 'Gallery' layout. Only valid for 'Gallery' layout.

### width

Optional element. Defines the width of the card in pixels for 'Gallery' layout. Can go from height/2 to 3 x height. Only valid for 'Gallery' layout.

### formatter

JSON object that defines the layout of cards for 'Gallery' layout. The schema of this JSON object is identical to the schema of a column format (and that of rowFormatter). For details on this schema and its capabilities, see the [Column Format Detailed syntax reference](column-formatting.md#detailed-syntax-reference). Only valid for 'Gallery' layout.

### groupProps

Groups the group related customization options. Valid in 'List', 'Compact List' and 'Gallery' layouts.

### headerFormatter

JSON object that defines the format for group header. The schema of this JSON object is identical to the schema of a column format. For details on this schema and its capabilities, see the [Column Format Detailed syntax reference](column-formatting.md#detailed-syntax-reference). Valid in 'List', 'Compact List' and 'Gallery' layouts.

### footerFormatter

JSON object that defines the format for group and list footer. The schema of this JSON object is identical to the schema of a column format (and that of rowFormatter). For details on this schema and its capabilities, see the [Column Format Detailed syntax reference](column-formatting.md#detailed-syntax-reference). Valid in 'List' and 'Compact List' layouts.

### hideFooter

Optional element. Specifies whether the list footers or the group footers in the view are hidden or not. `false` is the default behavior (meaning footer is visible). `true` means that view will not display footers. Valid in 'List' and 'Compact List' layouts.

For list & compact list layout, `hideFooter` overrides the `footerFormatter`, if present.

### Special string values

The values for `txtContent`, styles, and attributes can be either strings or expression objects. A few special string patterns for retrieving values from group and aggregate are supported.

#### "@group"

Provides access to the grouped column's data, display name and item count. Valid in 'List', 'Compact List' and 'Gallery' layouts. Available only inside `groupProps`.

The `@group` object has the following properties (with example values):

```JSON
{
    "fieldData": "California",
    "columnDisplayName": "City",
    "count": 3
}
```

You can also access sub properties for fields with rich data, e.g. People field, as mentioned under [Column Format Special string values](column-formatting.md#special-string-values).

```JSON
{
  "fieldData": {
    "id": "122",
    "title": "Kalya Tucker",
    "email": "kaylat@contoso.com",
    "sip": "kaylat@contoso.com",
    "picture": "https://contoso.sharepoint.com/kaylat_contoso_com_MThumb.jpg?t=63576928822",
    "department": "Human Resources",
    "jobTitle": "HR Manager"
  },
  "columnDisplayName": "Author",
  "count": 5
}

```

#### "@columnAggregate"

Provides access to the aggregated column's value, display name and aggregate type. Valid in 'List' and 'Compact List' layouts. Available only inside `footerFormatter`.

The `@columnAggregate` object has the following properties (with example values):

```JSON
{
  "value": "3",
  "columnDisplayName": "Approved",
  "type": "Count"
}
```

#### "@aggregates"

Provides access to array of aggregated column's value, display name and aggregate type. Valid in 'List', 'Compact List' and 'Gallery' layouts. Available only inside `groupProps`.

The `@aggregates` object has the following properties (with example value), and can be iterated on using for [Column Format forEach](column-formatting.md#foreach) property.

```JSON
[
  {
    "value": "3",
    "columnDisplayName": "Approved",
    "type": "Count"
  },
  {
    "value": "1.2",
    "columnDisplayName": "Growth",
    "type": "Average"
  },
  {
    "value": "0.33%",
    "columnDisplayName": "Rate of change",
    "type": "Variance"
  }
]
```
