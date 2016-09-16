# ILocalizedInternalModuleConfig interface

_Extends: [`IModuleConfig`](../sp-module-interfaces/imoduleconfig.md)_



This is the interface for a script module with the "localized" type. Modules of this type must be provided by the 
component developer. These script resources are similar to those of the "internal" type, but they may be present 
at a number of different paths, to be selected by the user's locale. Paths in this module type are loaded exactly 
the same way as "internal" modules are. 





## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`defaultPath`      | `string `,[` IPath`](../sp-module-interfaces/ipath.md) | Definition: A path to this module's default locale javascript resource either as a fully-qualified URL or as a  path under the paths provided in the "internalModuleBaseUrls" field. If the user's locale does not resolve to one  of the paths specified in the "paths" field, the path in this field is used. Paths in this module type are  treated exactly the same way paths in modules of the "internal" type are treated.  Required: yes  Localized: no  Supported values: The path to the default locale version of the module either as a fully-qualified URL or as a path  under the paths providedin the "internalModuleBaseUrls" field.  Example: "master_2015-04-20/my-application_strings_default_af378e0d.js" |
|`shouldNotPreload`      | `boolean` | Definition: If set to "true",this module should not be preloaded when loading the component. The most common case  for setting this property to "true" is when a module is defined in a manifest, but is not required for the  module referenced in "entryModuleId" to load. Modules may be defined that are loaded asynchronously, and these  modules do not need to be preloaded. This field implicitly defaults to "false".  Usage: Instructs the module loader to not preload this module.  Required: no  Example: true |
|`type`      | `'internal' `,` 'framework' `,` 'localized'` | Definition: The type of the script block. "framework" modules are expected to be provided by the framework runtime,  "internal" and "localized" modules must be available on the paths provided in the "internalModuleBaseUrls" field.  Modules with the "internal" type use the "IInternalModuleConfig" interface. Modules with the "framework" type use  the "IFrameworkModuleConfig" interface. Modules with the "localized" type use the "ILocalizedInternalModuleConfig"  interface.  Required: yes  Localized: no  Supported values: "internal", "framework", "localized"  Example: "localized" |





