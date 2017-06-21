# sp-loader package

The SharePoint Framework loader

Built on familiar standards such as SystemJS and WebPack, the loader is the first part of the SharePoint Framework to load on a page. It manages versioning and loading of client-side components, web parts, and other assets. It also implements the developer dashboard.


## Classes

| Class	   |  Description |
|:-------------|:---------------|
| [`SPComponentLoader`](./sp-loader.api/class/spcomponentloader.md)     | Component loader. Needs to be initialized with an implemented ISPComponentLoader. |



## Interfaces

| Interface	   |  Description |
|:-------------|:---------------|
| [`ILoadScriptOptions`](./sp-loader.api/interface/iloadscriptoptions.md)   | Options for the loadScript() method in ISPComponentLoader  |
| [`ISPComponentLoader`](./sp-loader.api/interface/ispcomponentloader.md)   | Interface for the module loader. It allows to load modules and scripts (through SystemJS) and CSS on the page. Also allows access to the manifests that exist in the page.  |






