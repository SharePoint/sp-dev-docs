# IModuleConfig interface





This is the base interface for a script module's definition. 





## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`shouldNotPreload`      | `boolean` | Definition: If set to "true",this module should not be preloaded when loading the component. The most common case  for setting this property to "true" is when a module is defined in a manifest, but is not required for the  module referenced in "entryModuleId" to load. Modules may be defined that are loaded asynchronously, and these  modules do not need to be preloaded. This field implicitly defaults to "false".  Usage: Instructs the module loader to not preload this module.  Required: no  Example: true |
|`type`      | `'internal' `,` 'framework' `,` 'localized'` | Definition: The type of the script block. "framework" modules are expected to be provided by the framework runtime,  "internal" and "localized" modules must be available on the paths provided in the "internalModuleBaseUrls" field.  Modules with the "internal" type use the "IInternalModuleConfig" interface. Modules with the "framework" type use  the "IFrameworkModuleConfig" interface. Modules with the "localized" type use the "ILocalizedInternalModuleConfig"  interface.  Required: yes  Localized: no  Supported values: "internal", "framework", "localized"  Example: "localized" |





