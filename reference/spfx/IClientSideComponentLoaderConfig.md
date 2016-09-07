# IClientSideComponentLoaderConfig interface





framework. It contains all data for loading an entrypoint script and its dependency scripts. 





### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`entryModuleId`      | `string` | Definition: This is the ID of one of the entries in the "scriptResources" dictionary |
|`exportedModuleName`      | `string` | Definition: The module referenced by the "entryModuleId" field may export an object with several fields |
|`internalModuleBaseUrls`      | `string` | Definition: This is an array of fully-qualified paths to be prepended to each of the script resource paths with the  "internal" or "localized" type |




