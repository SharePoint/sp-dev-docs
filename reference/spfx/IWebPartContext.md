# IWebPartContext interface

_Extends: `IClientSideComponentContext<IClientSideWebPartManifestInstance<any>>`_



Web part context interface.




### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`basicHttpClient`      | [`BasicHttpClient`](BasicHttpClient.md) | BasicHttpClient instance scoped to this web part |
|`configureStart`      | `function` | Function to open the PropertyPane to help configure this web part |
|`domElement`      | `HTMLElement` | Reference to the DOM element that hosts this client side component |
|`environment`      | [`Environment`](Environment.md) | Environment that webparts are hosted in |
|`host`      | [`IWebPartHost`](IWebPartHost.md) | Web part host |
|`httpClient`      | [`HttpClient`](HttpClient.md) | HttpClient instance scoped to this web part |
|`instanceId`      | `string` | Web part instance id |
|`manifest`      | `TManifest` | Client side component manifest |
|`pageContext`      | [`PageContext`](PageContext.md) | SharePoint page context |
|`serviceScope`      | [`ServiceScope`](ServiceScope.md) | Service scope instance that is scoped to this particular web part |
|`statusRenderer`      | [`IClientSideWebPartStatusRenderer`](IClientSideWebPartStatusRenderer.md) | Web part status renderer |
|`webPartTag`      | `string` | Web part tag to be used for logging and telemetry |




