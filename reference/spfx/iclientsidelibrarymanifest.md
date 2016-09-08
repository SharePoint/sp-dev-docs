# IClientSideLibraryManifest interface

_Extends: [`IClientSideComponentManifest`](iclientsidecomponentmanifest.md)_



A library is defined by this manifest. Libraries currently do not have any additional properties. 





### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`componentType`      | `'Application' `,` 'WebPart' `,` 'Library'` | Definition: Type of client side component |
|`id`      | `string` | Definition: A universally unique component id |
|`loaderConfig`      | [`IClientSideComponentLoaderConfig`](iclientsidecomponentloaderconfig.md) | Definition: This portion of the configuration describes how the component is to be loaded and initialized by a  client |
|`manifestVersion`      | `number` | Definition: Version of the component manifest schema |
|`version`      | `string` | Definition: Client side component version |




