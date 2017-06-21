# PlaceholderCollection class





> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

Exposes a collection of content placeholders for use by third parties.



## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`placeholderNames`     | `public` | `ReadonlyArray<string>` | _Read-only._ Returns the names of the currently available placeholders. |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`tryAttach(name,options)`](tryattach-placeholdercollection.md)     | `public` | [`Placeholder `](../../sp-application-base.api/class/placeholder.md),` undefined` | Searches for a content placeholder with the specified name. If none is found, then the function returns undefined. If one is found, we try to attach to it. If the caller tries to re-attached a placeholder, an exception will be thrown. A dispose has to happen before re-attach can happen. |





