# ColumnAccessor class





> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

Provides access to a ListView column, which is the visual presentation of a field.



## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`field`     | `public` | [`SPField`](../../sp-page-context.api/class/spfield.md) | _Read-only._ The server-side definition of the field. This property is read-only. |
|`visible`     | `public` | `boolean` | _Read-only._ Whether to show this column in the list view. This property is read-only. |







### Remarks

A SharePoint "field" (SPField) defines the data storage for a property of a list item. (If the list item represents a document, then the field is sometimes called a "property".) A "column" is the visual presentation of a field, when displayed by the ListView.

