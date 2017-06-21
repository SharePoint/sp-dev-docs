# IWebPartContext interface







The base context interface for client-side web parts.




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`domElement`      | `HTMLElement` | Reference to the DOM element that hosts this client side component. |
|`graphHttpClient`      | [`GraphHttpClient`](../../sp-http.api/class/graphhttpclient.md) | GraphHttpClient instance scoped to this web part._This API is provided as a preview for developers and may change based on feedback that we receive.  Do not use this API in a production environment._ |
|`httpClient`      | [`HttpClient`](../../sp-http.api/class/httpclient.md) | HttpClient instance scoped to this web part. |
|`instanceId`      | `string` | Web part instance id. This is a globally unique value. |
|`manifest`      | `IClientSideWebPartManifestInstance<any>` | Manifest for the client side web part. |
|`pageContext`      | [`PageContext`](../../sp-page-context.api/class/pagecontext.md) | SharePoint page context. |
|`propertyPane`      | [`IPropertyPaneAccessor`](../../sp-webpart-base.api/interface/ipropertypaneaccessor.md) | Accessor for common web part property pane operations. |
|`spHttpClient`      | [`SPHttpClient`](../../sp-http.api/class/sphttpclient.md) | SPHttpClient instance scoped to this web part. |
|`statusRenderer`      | [`IClientSideWebPartStatusRenderer`](../../sp-webpart-base.api/interface/iclientsidewebpartstatusrenderer.md) | Web part status renderer. |
|`webPartTag`      | `string` | Web part tag to be used for logging and telemetry. |






### Remarks

A "context" object is a collection of well-known services and other objects that are likely to be needed by any business logic working with a component. Each component type has its own specialized extension of this interface, e.g. IWebPartContext for web parts, IExtensionContext for client-side extensions, etc.

