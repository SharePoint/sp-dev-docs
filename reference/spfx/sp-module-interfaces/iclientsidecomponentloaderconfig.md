# IClientSideComponentLoaderConfig interface










## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`entryModuleId`      | `string` | Definition: This is the ID of one of the entries in the "scriptResources" dictionary. The loader will download and  evaluate the script resource referenced in this field, resolve all dependencies against the keys in the  "scriptResources", and return the exported object to the loader's calling function. The entry referenced in the  "scriptResources" dictionary must be of the "internal" or the "localized" type.  Required: yes  Localized: no  Supported values: An entry in the "scriptResources" dictionary that defines the base exported module of the  component.  Example: "myApplication.bundle" |
|`exportedModuleName`      | `string` | Definition: The module referenced by the "entryModuleId" field may export an object with several fields. This value  optionally references the name of a field on the object exported by the module referenced by the "entryModuleId"  field. When this field has a value, the value of the referenced field on the object exported by the module  referenced by the "entryModuleId" field is returned when this manifest is loaded instead of the base exported  object. For example, if entryModuleId refers to a module with with a top-level export of  "{ foo: 'bar', baz: 123 }" and:  - if this field is unset, the value returned by the modue loader is "{ foo: 'bar', baz: 123 }"  - if this field is set to "foo", the value returned by the modue loader is "bar"  - if this field is set to "bar", the value returned by the modue loader is undefined (as "bar" is not a key in  the top-level export).    Usage: To reference a field in the top-level export.  Required: no  Example: mySpWebpart |
|`internalModuleBaseUrls`      | `string[]` | Definition: This is an array of fully-qualified paths to be prepended to each of the script resource paths with the  "internal" or "localized" type. If one fails to load, the loader will attempt to load from the next until there  are no base paths remaning. All "internal" and "localized" script resources that do not have fully-qualified URLs  as their "path" field values must be hosted under each of the paths listed in this property. For example, if an  internal module's "path" field value is "master_2015-04-20/my-application.bundle_1928f8a0.js" and this field's  value is [ "https://contoso.akamaihd.net/files/", "https://contoso.msecnd.net/files/" ], the loader will first  attempt to load this script resource from the URL  "https://contoso.akamaihd.net/files/master_2015-04-20/my-application.bundle_1928f8a0.js". If loading from  that URL fails, the loader will then attempt to load this script resource from  "https://contoso.msecnd.net/files/master_2015-04-20/my-application.bundle_1928f8a0.js". If that URL fails to load,  the component will fail to load and an error will be returned. It is important to note that the support for  multiple base URLs is purely for failover support. This means that all files must be present on all hosts  listed in this field.  Usage: Base URLs for script resources with the "internal" or "localized" type.  Required: yes  Localized: no  Supported values: Any URL that contains all internal scripts referenced in the "scriptResources" dictionary.  Example: [ "https://contoso.akamaihd.net/files/", "https://contoso.msecnd.net/files/" ] |





