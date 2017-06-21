# FieldCustomizerContext class





> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

This object provides contextual information for BaseFieldCustomizer.



## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`column`     | `public` | [`ColumnAccessor`](../../sp-listview-extensibility/class/columnaccessor.md) | _Read-only._ Provides access to the column that the customizer will operate on. |
|`field`     | `public` | [`SPField`](../../sp-page-context/class/spfield.md) | _Read-only._ Provides access to the SharePoint field that the customizer will operate on. |
|`listView`     | `public` | [`ListViewAccessor`](../../sp-listview-extensibility/class/listviewaccessor.md) | _Read-only._ Provides access to the ListView control that the customizer will operate on. |
|`pageContext`     | `public` | [`PageContext`](../../sp-page-context/class/pagecontext.md) | _Read-only._ The page context provides standard definitions for common SharePoint objects that need to be shared between the client-side application, web parts, and other components. |







