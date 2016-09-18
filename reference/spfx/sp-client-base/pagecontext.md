# PageContext class





The page context provides standard definitions for common SharePoint objects 
that need to be shared between the client-side application, web parts, and other 
components. Typically the data is fetched via REST queries when navigating to a 
new page, but it can also be preloaded by the web server, or filled from a custom 
application cache.


## Constructor


**Signature:** constructor(serviceScope: [ServiceScope](../sp-client-base/servicescope.md))

**Returns**: [`PageContext`](../sp-client-base/pagecontext.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceScope`    | [`ServiceScope`](../sp-client-base/servicescope.md) |  |


## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`cultureInfo`     | `public` | [`CultureInfo`](../sp-client-base/cultureinfo.md) | This class is primarily used with the PageContext class. It provides culture info  for the current user of the application. |
|`isInitialized`     | `public` | `boolean` | Returns whether the PageContext has been initialized. |
|`site`     | `public` | [`SPSite`](../sp-client-base/spsite.md) | Contextual information for the SharePoint site collection ("site") that is hosting the page.  The site object will be defined if the PageContext was initialized. |
|`user`     | `public` | [`SPUser`](../sp-client-base/spuser.md) | This class is primarily used with the PageContext class. It provides contextual information  for the SharePoint user that is accessing the page. |
|`web`     | `public` | [`SPWeb`](../sp-client-base/spweb.md) | Contextual information for the SharePoint site ("web") that is hosting the page. The web object  will be defined if the PageContext was initialized. |






