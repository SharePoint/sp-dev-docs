# PageContext class





The page context provides standard definitions for common SharePoint objects 
that need to be shared between the client-side application, web parts, and other 
components. Typically the data is fetched via REST queries when navigating to a 
new page, but it can also be preloaded by the web server, or filled from a custom 
application cache.



### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`cultureInfo`     | `public` | [`CultureInfo`](../sp-client-base/cultureinfo.md) | The page context provides standard definitions for common SharePoint objects  that need to be shared between the client-side application, web parts, and other  components |
|`isInitialized`     | `public` | `boolean` | The page context provides standard definitions for common SharePoint objects  that need to be shared between the client-side application, web parts, and other  components |
|`site`     | `public` | [`SPSite`](../sp-client-base/spsite.md) | The page context provides standard definitions for common SharePoint objects  that need to be shared between the client-side application, web parts, and other  components |
|`user`     | `public` | [`SPUser`](../sp-client-base/spuser.md) | The page context provides standard definitions for common SharePoint objects  that need to be shared between the client-side application, web parts, and other  components |
|`web`     | `public` | [`SPWeb`](../sp-client-base/spweb.md) | The page context provides standard definitions for common SharePoint objects  that need to be shared between the client-side application, web parts, and other  components |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`PageContext`](../sp-client-base/pagecontext.md) | The page context provides standard definitions for common SharePoint objects  that need to be shared between the client-side application, web parts, and other  components |





### constructor

The page context provides standard definitions for common SharePoint objects 
that need to be shared between the client-side application, web parts, and other 
components. Typically the data is fetched via REST queries when navigating to a 
new page, but it can also be preloaded by the web server, or filled from a custom 
application cache.

#### Signature
`constructor(serviceScope: ServiceScope)`

#### Returns
[`PageContext`](../sp-client-base/pagecontext.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `serviceScope`    | [`ServiceScope`](../sp-client-base/servicescope.md) |  |

