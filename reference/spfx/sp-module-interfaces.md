# sp-module-interfaces external module




## Interfaces

| Interface	   |  Description |
|:-------------|:---------------|
| [`IBundleReference`](./sp-module-interfaces/ibundlereference.md)   |   |
| [`IClientSideComponentLoaderConfig`](./sp-module-interfaces/iclientsidecomponentloaderconfig.md)   |   |
| [`IClientSideLibraryManifest`](./sp-module-interfaces/iclientsidelibrarymanifest.md)   | A library is defined by this manifest. Libraries currently do not have any additional properties.    |
| [`IClientSideWebPartManifestEntry`](./sp-module-interfaces/iclientsidewebpartmanifestentry.md)   | This interface specifies the set of properties that can be pre-configured by a Web Part developer. Each  pre-configured instance of the Web Part will need a copy of these properties. Organization admins and  content authors can modify these properties on a need basis.    |
| [`IClientSideWebPartManifestInstance`](./sp-module-interfaces/iclientsidewebpartmanifestinstance.md)   | Manifest that is relevant to a Web Part instance.    |
| [`IClientSideWebPartManifestSharedProperties`](./sp-module-interfaces/iclientsidewebpartmanifestsharedproperties.md)   | This interface specifies the set of common properties that are shared between all instances of the Web Part.    |
| [`IFrameworkModuleConfig`](./sp-module-interfaces/iframeworkmoduleconfig.md)   | This is the interface for a script module with the "framework" type. Modules of this type will be provided by the  framework runtime. The key in the "scriptResources" dictionary must be the name of a standard framework library.    |
| [`IInternalModuleConfig`](./sp-module-interfaces/iinternalmoduleconfig.md)   | This is the interface for a script module with the "internal" type. Modules of this type must be provided by the  component developer.    |
| [`ILocalizedInternalModuleConfig`](./sp-module-interfaces/ilocalizedinternalmoduleconfig.md)   | This is the interface for a script module with the "localized" type. Modules of this type must be provided by the  component developer. These script resources are similar to those of the "internal" type, but they may be present  at a number of different paths, to be selected by the user's locale. Paths in this module type are loaded exactly  the same way as "internal" modules are.    |
| [`ILocalizedString`](./sp-module-interfaces/ilocalizedstring.md)   | Definition: A set of localized strings.  Supported values: a dictionary of locale keys to strings. Should always have a 'default' key.  Example: "My Application"  {  "default": "My Application"  "en-us": "My Application",  "fr-fr": "Ma demande",  "zh": "我的應用程式"  }  |
| [`IModuleConfig`](./sp-module-interfaces/imoduleconfig.md)   | This is the base interface for a script module's definition.    |
| [`IPath`](./sp-module-interfaces/ipath.md)   | This is the base interface for a set of debug and non-debug/minimized paths. The paths in this object are  loaded in exactly the same way as any other internal path.    |
| [`IStandardLibraryModule`](./sp-module-interfaces/istandardlibrarymodule.md)   |   |






