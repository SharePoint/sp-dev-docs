# PageContext class





The page context provides standard definitions for common SharePoint objects 
that need to be shared between the client-side application, web parts, and other 
components. Typically the data is fetched via REST queries when navigating to a 
new page, but it can also be preloaded by the web server, or filled from a custom 
application cache.



### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`cultureInfo`     | `public` | [`CultureInfo`](cultureinfo.md) | This class is primarily used with the PageContext class |
|`isInitialized`     | `public` | `boolean` | Returns whether the PageContext has been initialized |
|`site`     | `public` | [`SPSite`](spsite.md) | Contextual information for the SharePoint site collection ("site") that is hosting the page |
|`user`     | `public` | [`SPUser`](spuser.md) | This class is primarily used with the PageContext class |
|`web`     | `public` | [`SPWeb`](spweb.md) | Contextual information for the SharePoint site ("web") that is hosting the page |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`ServiceScope`](servicescope.md) |  |




### constructor



#### Signature
`constructor(serviceScope: ServiceScope)`

#### Returns
[`ServiceScope`](servicescope.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceScope`    | [`ServiceScope`](servicescope.md) |  |

