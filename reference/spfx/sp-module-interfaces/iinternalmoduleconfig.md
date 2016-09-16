# IInternalModuleConfig interface

_Extends: [`IModuleConfig`](../sp-module-interfaces/imoduleconfig.md)_



This is the interface for a script module with the "internal" type. Modules of this type must be provided by the 
component developer. 





## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`globalDependencies`      | `string[]` | Definition: For non-AMD/module-pattern scripts that have dependencies (for example,jQuery plugins),the module  loader will ensure that those dependencies are already loaded. Entries in the array specified in this field must  refer to other non-AMD modules in this component. This field is not required to have a value for  non-AMD modules. If any values are specified that do not refer to other modules in the same component manifest  that this module is specified, the module loader will throw an exception and the component will fail to load.  Required: no  Supported values: Names of other non-AMD-pattern modules in this loader configuration, as specified by the key  IClientSideComponentLoaderConfig.scriptResources[]  Example: ["jquery"] |
|`globalName`      | `string` | Definition: In order to load scripts that don't follow the AMD/module-pattern where "define" or "require" is  called and dependencies are explicitly listed and exports are explicitly returned, the module loader needs to  know which global variable must be examined. If this propery is specified, this module is considered non-AMD and  the module loader will not expect "define" or "require" to be called. Instead, it will wait for the script to  finish loading and examine the global variable specified in this field.  Required: no  Localized: no  Supported values: Variable names that are expected to be populated after this module is loaded. For example,  if this module is describing jQuery, this value should probably be "$". If an empty string is specified,  the module loader will throw an exception and the component will fail to load.  Example: "$" |
|`path`      | `string `,[` IPath`](../sp-module-interfaces/ipath.md) | Definition: A path to this module's javascript resource either as a fully-qualified URL or as a path under the  paths provided in the "internalModuleBaseUrls" field. For example, if this field's value is  "master_2015-04-20/my-application.bundle_1928f8a0.js" and the "internalModuleBaseUrls" field's value is  [ "https://contoso.akamaihd.net/files/", "https://contoso.msecnd.net/files/" ], the loader will first attempt to  load this script resource from the URL  "https://contoso.akamaihd.net/files/master_2015-04-20/my-application.bundle_1928f8a0.js". If loading from that URL  fails, the loader will then attempt to load this script resource from  "https://contoso.msecnd.net/files/master_2015-04-20/my-application.bundle_1928f8a0.js". If that URL fails to load,  the component will fail to load and an error will be returned.  Required: yes  Localized: no  Supported values: The path to the module either as a fully-qualified URL or as a path under the  paths providedin the "internalModuleBaseUrls" field.  Example: "master_2015-04-20/my-application.bundle_1928f8a0.js" |
|`shouldNotPreload`      | `boolean` | Definition: If set to "true",this module should not be preloaded when loading the component. The most common case  for setting this property to "true" is when a module is defined in a manifest, but is not required for the  module referenced in "entryModuleId" to load. Modules may be defined that are loaded asynchronously, and these  modules do not need to be preloaded. This field implicitly defaults to "false".  Usage: Instructs the module loader to not preload this module.  Required: no  Example: true |
|`type`      | `'internal' `,` 'framework' `,` 'localized'` | Definition: The type of the script block. "framework" modules are expected to be provided by the framework runtime,  "internal" and "localized" modules must be available on the paths provided in the "internalModuleBaseUrls" field.  Modules with the "internal" type use the "IInternalModuleConfig" interface. Modules with the "framework" type use  the "IFrameworkModuleConfig" interface. Modules with the "localized" type use the "ILocalizedInternalModuleConfig"  interface.  Required: yes  Localized: no  Supported values: "internal", "framework", "localized"  Example: "localized" |





