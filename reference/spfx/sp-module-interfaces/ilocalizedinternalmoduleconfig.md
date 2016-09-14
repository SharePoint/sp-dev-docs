# ILocalizedInternalModuleConfig interface

_Extends: [`IModuleConfig`](../sp-module-interfaces/imoduleconfig.md)_



This is the interface for a script module with the "localized" type. Modules of this type must be provided by the 
component developer. These script resources are similar to those of the "internal" type, but they may be present 
at a number of different paths, to be selected by the user's locale. Paths in this module type are loaded exactly 
the same way as "internal" modules are. 



## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`defaultPath`      | `string `,[` IPath`](../sp-module-interfaces/ipath.md) | This is the interface for a script module with the "localized" type |
|`shouldNotPreload`      | `boolean` | This is the interface for a script module with the "localized" type |
|`type`      | `'internal' `,` 'framework' `,` 'localized'` | This is the interface for a script module with the "localized" type |





