# BaseExtension <TProperties> class



_Type parameters: `<TProperties>`_

> _This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._

The base class for all client-side extensions.



## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`context`     | `public` | [`ExtensionContext`](../../sp-extension-base/class/extensioncontext.md) | Use context object to access common services and state associated with the component. |
|`properties`     | `public` | `TProperties` | _Read-only._ Extension properties is a JavaScript object that are passed in by the application that initializes the extension. |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`onDispose()`](ondispose-baseextension.md)     | `public` | `void` | This event hook is called immediately before the extension stops being used. It provides an opportunity to release any associated resources, cancel any outstanding requests, etc. |
|[`onInit()`](oninit-baseextension.md)     | `public` | [`Promise`](../../web-apis/class/promise.md)<void> | This event hook is called when the client-side extension is first activated on the page. |





### Remarks

The constructor for this class is marked as internal; third party code should not inherit directly from this base class.

