# Placeholder class





> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

A content placeholder is a designated region on the page (i.e. empty HTML "div" element) where third party extensions can inject HTML content.



## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`domElement`     | `public` | `HTMLDivElement` | _Read-only._ The HTML element on which the placeholder will be attached. This property is undefined if PlaceHolderCollection.tryAttach() was not been called, or if dispose() was called after the last call to PlaceHolderCollection.tryAttach(). |
|`name`     | `public` | `string` | _Read-only._ A symbolic name used to identify the placeholder. Example: "PageHeader" |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`dispose()`](dispose-placeholder.md)     | `public` | `void` | Diposes the attached DOM tree. |





