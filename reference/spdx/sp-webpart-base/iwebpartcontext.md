# IWebPartContext interface





The base context interface for client-side web parts.




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`domElement`      | `HTMLElement` | Reference to the DOM element that hosts this client side component. |
|`httpClient`      | [`HttpClient`](../sp-http/httpclient.md) | HttpClient instance scoped to this web part. |
|`instanceId`      | `string` | Web part instance id. This is a globally unique value. |
|`manifest`      | `IClientSideWebPartManifestInstance<any>` | Manifest for the client side web part. |
|`pageContext`      | [`PageContext`](../sp-page-context/pagecontext.md) | SharePoint page context. |
|`propertyPane`      | `IPropertyPaneAccessor` | Accessor for common web part property pane operations. |
|`spHttpClient`      | [`SPHttpClient`](../sp-http/sphttpclient.md) | SPHttpClient instance scoped to this web part. |
|`statusRenderer`      | [`IClientSideWebPartStatusRenderer`](../sp-webpart-base/iclientsidewebpartstatusrenderer.md) | Web part status renderer. |
|`webPartTag`      | `string` | Web part tag to be used for logging and telemetry. |





