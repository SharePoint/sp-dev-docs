# PageContext class





The page context provides standard definitions for common SharePoint objects 
that need to be shared between the client-side application, web parts, and other 
components. Typically the data is fetched via REST queries when navigating to a 
new page, but it can also be preloaded by the web server, or filled from a custom 
application cache.



### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`cultureInfo`     | `public` | [`CultureInfo`](CultureInfo.md) | This class is primarily used with the PageContext class |
|`isInitialized`     | `public` | `boolean` | Returns whether the PageContext has been initialized |
|`site`     | `public` | [`SPSite`](SPSite.md) | Contextual information for the SharePoint site collection ("site") that is hosting the page |
|`user`     | `public` | [`SPUser`](SPUser.md) | This class is primarily used with the PageContext class |
|`web`     | `public` | [`SPWeb`](SPWeb.md) | Contextual information for the SharePoint site ("web") that is hosting the page |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`ServiceScope`](ServiceScope.md) |  |




### constructor



#### Signature
`constructor(serviceScope: ServiceScope)`

#### Returns
[`ServiceScope`](ServiceScope.md)

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceScope`    | [`ServiceScope`](ServiceScope.md) |  |

