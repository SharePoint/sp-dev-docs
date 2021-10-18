---
title: Group formatting detailed syntax reference	
description: Group formatting detailed syntax reference	
ms.date: 10/08/2021
ms.localizationpriority: high
---

# Group formatting detailed syntax reference

## groupProps

Groups the group related customization options. Valid in 'List', 'Compact List' and 'Gallery' layouts.

## headerFormatter

JSON object that defines the format for group header. The schema of this JSON object is identical to the schema of a column format. For details on this schema and its capabilities, see the [Formatting detailed syntax reference](./formatting-syntax-reference). Valid in 'List', 'Compact List' and 'Gallery' layouts.

## footerFormatter

JSON object that defines the format for group and list footer. The schema of this JSON object is identical to the schema of a column format (and that of rowFormatter). For details on this schema and its capabilities, see the [Formatting detailed syntax reference](./formatting-syntax-reference). Valid in 'List' and 'Compact List' layouts.

## hideFooter

Optional element. Specifies whether the list footers or the group footers in the view are hidden or not. `false` is the default behavior (meaning footer is visible). `true` means that view will not display footers. Valid in 'List' and 'Compact List' layouts.

For list & compact list layout, `hideFooter` overrides the `footerFormatter`, if present.

## Special string values

The values for `txtContent`, styles, and attributes can be either strings or expression objects. A few special string patterns for retrieving values from group and aggregate are supported.

### "@group"

Provides access to the grouped column's data, display name and item count. Valid in 'List', 'Compact List' and 'Gallery' layouts. Available only inside `groupProps`.

The `@group` object has the following properties (with example values):

```JSON
{
    "fieldData": "California",
    "columnDisplayName": "City",
    "count": 3
}
```

You can also access sub properties for fields with rich data, e.g. People field, as mentioned under [Formatting Special string values](./formatting-syntax-reference#special-string-values).

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

### "@columnAggregate"

Provides access to the aggregated column's value, display name and aggregate type. Valid in 'List' and 'Compact List' layouts. Available only inside `footerFormatter`.

The `@columnAggregate` object has the following properties (with example values):

```JSON
{
  "value": "3",
  "columnDisplayName": "Approved",
  "type": "Count"
}
```

### "@aggregates"

Provides access to array of aggregated column's value, display name and aggregate type. Valid in 'List', 'Compact List' and 'Gallery' layouts. Available only inside `groupProps`.

The `@aggregates` object has the following properties (with example value), and can be iterated on using for [Formatting forEach](./formatting-syntax-reference#foreach) property.

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
