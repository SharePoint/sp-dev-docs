# IWebPartContext interface

_Extends: `IClientSideComponentContext<IClientSideWebPartManifestInstance<any>>`_



Web part context interface.




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`basicHttpClient`      | [`BasicHttpClient`](../sp-client-base/basichttpclient.md) | BasicHttpClient instance scoped to this web part. |
|`configureStart`      | `function` | Function to open the PropertyPane to help configure this web part. |
|`domElement`      | `HTMLElement` | Reference to the DOM element that hosts this client side component. |
|`environment`      | [`Environment`](../sp-client-base/environment.md) | Environment that webparts are hosted in. |
|`host`      | [`IWebPartHost`](../sp-client-preview/iwebparthost.md) | Web part host. |
|`httpClient`      | [`HttpClient`](../sp-client-base/httpclient.md) | HttpClient instance scoped to this web part. |
|`instanceId`      | `string` | Web part instance id. This is a globally unique value. |
|`manifest`      | `TManifest` | Client side component manifest. |
|`pageContext`      | [`PageContext`](../sp-client-base/pagecontext.md) | SharePoint page context. |
|`serviceScope`      | [`ServiceScope`](../sp-client-base/servicescope.md) | Service scope instance that is scoped to this particular web part. |
|`statusRenderer`      | [`IClientSideWebPartStatusRenderer`](../sp-client-preview/iclientsidewebpartstatusrenderer.md) | Web part status renderer. |
|`webPartTag`      | `string` | Web part tag to be used for logging and telemetry. |





