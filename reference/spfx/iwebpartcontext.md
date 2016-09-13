# IWebPartContext interface

_Extends: `IClientSideComponentContext<IClientSideWebPartManifestInstance<any>>`_



Web part context interface.




### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`basicHttpClient`      | [`BasicHttpClient`](basichttpclient.md) | BasicHttpClient instance scoped to this web part |
|`configureStart`      | `function` | Function to open the PropertyPane to help configure this web part |
|`domElement`      | `HTMLElement` | Reference to the DOM element that hosts this client side component |
|`environment`      | [`Environment`](environment.md) | Environment that webparts are hosted in |
|`host`      | [`IWebPartHost`](iwebparthost.md) | Web part host |
|`httpClient`      | [`HttpClient`](httpclient.md) | HttpClient instance scoped to this web part |
|`instanceId`      | `string` | Web part instance id |
|`manifest`      | `TManifest` | Client side component manifest |
|`pageContext`      | [`PageContext`](pagecontext.md) | SharePoint page context |
|`serviceScope`      | [`ServiceScope`](servicescope.md) | Service scope instance that is scoped to this particular web part |
|`statusRenderer`      | [`IClientSideWebPartStatusRenderer`](iclientsidewebpartstatusrenderer.md) | Web part status renderer |
|`webPartTag`      | `string` | Web part tag to be used for logging and telemetry |





