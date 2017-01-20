# SPComponentLoader class







Component loader. Needs to be initialized with an implemented ISPComponentLoader.






## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`initialize()`](initialize-spcomponentloader.md)     | `public, static` | `void` | Initializes the component loader with an implementation. Must be called once before it can be used. |
|[`loadComponent()`](loadcomponent-spcomponentloader.md)     | `public, static` | `Promise<TComponent>` | {@inheritdoc ISPComponentLoader.loadComponent} |
|[`loadCss()`](loadcss-spcomponentloader.md)     | `public, static` | `void` | {@inheritdoc ISPComponentLoader.loadCss} |
|[`loadScript()`](loadscript-spcomponentloader.md)     | `public, static` | `Promise<TModule>` | {@inheritdoc ISPComponentLoader.loadScript} |





