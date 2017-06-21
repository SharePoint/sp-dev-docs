# ISPComponentLoader interface







Interface for the module loader. It allows to load modules and scripts (through SystemJS) and CSS on the page. Also allows access to the manifests that exist in the page.







## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`loadComponent(manifest)`](loadcomponent-ispcomponentloader.md)      | [`Promise`](../../web-apis/class/promise.md)<TComponent> | Loads a component from a manifest. |
|[`loadCss(url)`](loadcss-ispcomponentloader.md)      | `void` | Inserts a <link ... /> tag for a stylesheet. |
|[`loadScript(url,options)`](loadscript-ispcomponentloader.md)      | [`Promise`](../../web-apis/class/promise.md)<TModule> | Given a URL, load a script. |




