# IFrameworkModuleConfig interface

_Extends: [`IModuleConfig`](../sp-module-interfaces/imoduleconfig.md)_



This is the interface for a script module with the "framework" type. Modules of this type will be provided by the 
framework runtime. The key in the "scriptResources" dictionary must be the name of a standard framework library. 





## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`failoverPath`      | `string `,[` IPath`](../sp-module-interfaces/ipath.md) | Definition: A path to the framework-supplied module in case the framework fails to load the requested version. This  must be either a fully-qualified URL, or a path under the paths specified in the "internalModuleBaseUrls" field.  If this field is not specified and the version is not available in the framework runtime, the closest matching  version of the module will be provided instead.  Required: no  Localized: no  Supported values: The path to the module either as a fully-qualified URL or as a path under the  paths providedin the "internalModuleBaseUrls" field.  Example: "https://code.jquery.com/jquery-2.2.4.min.js" |
|`shouldNotPreload`      | `boolean` | Definition: If set to "true",this module should not be preloaded when loading the component. The most common case  for setting this property to "true" is when a module is defined in a manifest, but is not required for the  module referenced in "entryModuleId" to load. Modules may be defined that are loaded asynchronously, and these  modules do not need to be preloaded. This field implicitly defaults to "false".  Usage: Instructs the module loader to not preload this module.  Required: no  Example: true |
|`type`      | `'internal' `,` 'framework' `,` 'localized'` | Definition: The type of the script block. "framework" modules are expected to be provided by the framework runtime,  "internal" and "localized" modules must be available on the paths provided in the "internalModuleBaseUrls" field.  Modules with the "internal" type use the "IInternalModuleConfig" interface. Modules with the "framework" type use  the "IFrameworkModuleConfig" interface. Modules with the "localized" type use the "ILocalizedInternalModuleConfig"  interface.  Required: yes  Localized: no  Supported values: "internal", "framework", "localized"  Example: "localized" |
|`version`      | `string` | Definition: The version of the framework-supplied module to be loaded. For framework runtime modules such as  "@microsoft/sp-client-base," it is recommended the version of the framework module the component was developed  against be specified.  Required: yes  Localized: no  Supported values: string representing a semantic version (http://semver.org), or "latest".  Example: "2.2.4" |





