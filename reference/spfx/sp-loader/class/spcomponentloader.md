# SPComponentLoader class







Component loader. Needs to be initialized with an implemented ISPComponentLoader.






## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`initialize()`](initialize-spcomponentloader.md)     | `public, static` | `void` | Initializes the component loader with an implementation. Must be called once before it can be used. |
|[`loadComponent(manifest)`](loadcomponent-spcomponentloader.md)     | `public, static` | [`Promise`](../../web-apis/class/promise.md)<TComponent> | Loads a component from a manifest. |
|[`loadCss(url)`](loadcss-spcomponentloader.md)     | `public, static` | `void` | Inserts a <link ... /> tag for a stylesheet. |
|[`loadScript(url,options)`](loadscript-spcomponentloader.md)     | `public, static` | [`Promise`](../../web-apis/class/promise.md)<TModule> | Given a URL, load a script. |





