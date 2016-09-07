# ILocalizedInternalModuleConfig interface

_Extends: [`IModuleConfig`](IModuleConfig.md)_



This is the interface for a script module with the "localized" type. Modules of this type must be provided by the 
component developer. These script resources are similar to those of the "internal" type, but they may be present 
at a number of different paths, to be selected by the user's locale. Paths in this module type are loaded exactly 
the same way as "internal" modules are. 





### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`defaultPath`      | `string `,[` IPath`](IPath.md) | Definition: A path to this module's default locale javascript resource either as a fully-qualified URL or as a  path under the paths provided in the "internalModuleBaseUrls" field |
|`shouldNotPreload`      | `boolean` | Definition: If set to "true",this module should not be preloaded when loading the component |
|`type`      | `'internal' `,` 'framework' `,` 'localized'` | Definition: The type of the script block |




