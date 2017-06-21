# PageContext class







The page context provides standard definitions for common SharePoint objects that need to be shared between the client-side application, web parts, and other components. Typically the data is fetched via REST queries when navigating to a new page, but it can also be preloaded by the web server, or filled from a custom application cache.


## Constructor


**Signature:** _constructor(serviceScope: [ServiceScope](../../sp-core-library.api/class/servicescope.md));_

**Returns**: 



#### Parameters
None


## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`cultureInfo`     | `public` | [`CultureInfo`](../../sp-page-context.api/class/cultureinfo.md) | _Read-only._ It provides culture info for the current user of the application. This class is primarily used with the PageContext class. |
|`isInitialized`     | `public` | `boolean` | _Read-only._ Returns whether the PageContext has been initialized. |
|`legacyPageContext`     | `public` | `any` | _Read-only._ This property is provided to facilitate migration of legacy code. It returns a JavaScript object whose contents are similar to the _spPageContextInfo window variable from classic pages. The contents of this variable may change in future releases of SharePoint. New projects are encouraged to use the framework APIs instead, since they are documented and provide reliable backwards compatibility guarantees. |
|`list`     | `public` | [`SPList `](../../sp-page-context.api/class/splist.md),` undefined` | _Read-only._ Contextual information for the SharePoint list that is hosting the page. If there is no list associated to the current page, this property will be undefined. |
|`listItem`     | `public` | [`SPListItem `](../../sp-page-context.api/class/splistitem.md),` undefined` | _Read-only._ Contextual information for the SharePoint list item that is hosting the page. If there is no list item associated to the current page, this property will be undefined. |
|`serviceKey`     | `public` | [`ServiceKey`](../../sp-core-library.api/class/servicekey.md)<[`PageContext`](../../sp-page-context.api/class/pagecontext.md)> | The service key for PageContext. |
|`site`     | `public` | [`SPSite`](../../sp-page-context.api/class/spsite.md) | _Read-only._ Contextual information for the SharePoint site collection ("site") that is hosting the page. |
|`user`     | `public` | [`SPUser`](../../sp-page-context.api/class/spuser.md) | _Read-only._ It provides contextual information for the SharePoint user that is accessing the page. This class is primarily used with the PageContext class. |
|`web`     | `public` | [`SPWeb`](../../sp-page-context.api/class/spweb.md) | _Read-only._ Contextual information for the SharePoint site ("web") that is hosting the page. |







