# IPath interface





This is the base interface for a set of debug and non-debug/minimized paths. The paths in this object are 
loaded in exactly the same way as any other internal path. 





## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`debug`      | `string` | Definition: A path to this module's debug javascript resource either as a fully-qualified URL or as a path under  the paths provided in the "internalModuleBaseUrls" field. The script referenced by this field is only loaded if  it is present and debug scripts are explicitly requested.  Required: no  Supported values: The path to the debug script either as a fully-qualified URL or as a path under the  paths providedin the "internalModuleBaseUrls" field.  Example: "master_2015-04-20/my-application.bundle_18182c39.debug.js" |
|`default`      | `string` | Definition: A path to this module's javascript resource either as a fully-qualified URL or as a path under the  paths provided in the "internalModuleBaseUrls" field. The script referenced by this field is loaded by default  unless a debug version of the script is provided and explicitly requested.  Required: yes  Supported values: The path to the default/non-debug script either as a fully-qualified URL or as a path under the  paths providedin the "internalModuleBaseUrls" field.  Example: "master_2015-04-20/my-application.bundle_1928f8a0.js" |





