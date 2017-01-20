# IWebPartContext interface







The base context interface for client-side web parts.




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`domElement`      | `HTMLElement` | Reference to the DOM element that hosts this client side component. |
|`httpClient`      | [`HttpClient`](../sp-http/class/httpclient.md) | HttpClient instance scoped to this web part. |
|`instanceId`      | `string` | Web part instance id. This is a globally unique value. |
|`manifest`      | `IClientSideWebPartManifestInstance<any>` | Manifest for the client side web part. |
|`pageContext`      | [`PageContext`](../sp-page-context/class/pagecontext.md) | SharePoint page context. |
|`propertyPane`      | `IPropertyPaneAccessor` | Accessor for common web part property pane operations. |
|`spHttpClient`      | [`SPHttpClient`](../sp-http/class/sphttpclient.md) | SPHttpClient instance scoped to this web part. |
|`statusRenderer`      | [`IClientSideWebPartStatusRenderer`](../sp-webpart-base/interface/iclientsidewebpartstatusrenderer.md) | Web part status renderer. |
|`webPartTag`      | `string` | Web part tag to be used for logging and telemetry. |






### Remarks

A "context" object is a collection of well-known services and other objects that are likely to be needed by any business logic working with a component. Each component type has its own specialized extension of this interface, e.g. IWebPartContext for web parts, ICodePartContext for code parts, etc.

