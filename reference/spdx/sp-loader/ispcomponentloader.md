# ISPComponentLoader interface





Interface for the module loader. It allows to load modules and scripts (through SystemJS) and CSS on the page. Also allows access to the manifests that exist in the page.







## Methods

| Method	   |  Returns	| Description|
|:-------------|:-------|:-----------|
|[`loadComponent(manifest)`](loadcomponent-v7c49.md)      | `Promise<TComponent>` | Loads a component from a manifest. |
|[`loadCss(url)`](loadcss-ezhy9.md)      | `void` | Inserts a <link ... /> tag for a stylesheet. |
|[`loadScript(url,options)`](loadscript-glni9.md)      | `Promise<TModule>` | Given a URL, load a script. |



