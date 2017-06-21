# SPField class





> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

The client-side equivalent for SharePoint SPField class. Used in Fields property of SPList and SPListItem classes. A field represents the data model for a column in SharePoint list view.



## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`clientSideComponentId`     | `public` | [`Guid `](../../sp-core-library/class/guid.md),` undefined` | _Read-only._ The unique identifier of the client-side component associated with the field. |
|`clientSideComponentProperties`     | `public` | `string` | _Read-only._ This property is only used when a ClientSideComponentId is specified. It is optional. If non-empty, the string must contain a JSON object with custom initialization properties whose format and meaning are defined by the client-side component. |
|`displayName`     | `public` | `string` | _Read-only._ The display name of the field. This name is shown as column name in UI. |
|`fieldType`     | `public` | `string` | _Read-only._ The type of the field represented as a string |
|`id`     | `public` | [`Guid`](../../sp-core-library/class/guid.md) | _Read-only._ The GUID identifier for this field. |
|`internalName`     | `public` | `string` | _Read-only._ The internal name of the field. This name is usually used to find the field. |
|`isRequired`     | `public` | `boolean` | _Read-only._ Whether the field is required for each list item in the list |







