# SPComponentLoader class





Component loader. Needs to be initialized with an implemented ISPComponentLoader.






## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`initialize()`](initialize-gjny9.md)     | `public, static` | `void` | Initializes the component loader with an implementation. Must be called once before it can be used. |
|[`loadComponent()`](loadcomponent-v7c49.md)     | `public, static` | `Promise<TComponent>` | {@inheritdoc ISPComponentLoader.loadComponent} |
|[`loadCss()`](loadcss-ezhy9.md)     | `public, static` | `void` | {@inheritdoc ISPComponentLoader.loadCss} |
|[`loadScript()`](loadscript-glni9.md)     | `public, static` | `Promise<TModule>` | {@inheritdoc ISPComponentLoader.loadScript} |




