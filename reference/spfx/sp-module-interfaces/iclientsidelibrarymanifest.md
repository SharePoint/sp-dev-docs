# IClientSideLibraryManifest interface

_Extends: [`IClientSideComponentManifest`](../sp-client-base/iclientsidecomponentmanifest.md)_



A library is defined by this manifest. Libraries currently do not have any additional properties. 





## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`componentType`      | `'Application' `,` 'WebPart' `,` 'Library'` | Definition: Type of client side component. Components with the "Application" type are defined by the  "IClientSideApplicationManifest" interface. Components with the "WebPart" type are defined by the  "IClientSideWebPartManifest" interface. Components with the "Library" type are defined by the  "IClientSideLibraryManifest" interface.  Usage: To help bundling, loading, enumeration, and initialization of components based on their contents.  Required: yes  Localized: no  Supported values: "Application", "WebPart", "Library"  Example: "Application" |
|`id`      | `string` | Definition: A universally unique component id. Each client side component is required to have this id. Once an  id has been used for a component, it cannot be changed. A change in this value is treated same as the creation of  a new component. Two components are never expected to have the same id.  Usage: Uniquely identify a client side component.  Required: yes  Localized: no  Supported values: any GUID  Example: "dbef608d-3ad5-4f8f-b139-d916f2f0a294" |
|`loaderConfig`      | [`IClientSideComponentLoaderConfig`](../sp-module-interfaces/iclientsidecomponentloaderconfig.md) | Definition: This portion of the configuration describes how the component is to be loaded and initialized by a  client. It contains an enumeration of scripts that the component requires along with a single entrypoint script.  Usage: Loading a component.  Required: yes   |
|`manifestVersion`      | `number` | Definition: Version of the component manifest schema. The value of this field is controlled by Microsoft. The  purpose of this field is to help manage upgrades of the component manifest schema. A component developer needs to  only confirm that they are using the correct value per the manifest schema. Please read the "manifest upgrade  rules" for more details on when the schema could change. Note, manifest schema version upgrade will be considered  a big API change event and will be advertised broadly.  Usage: To help support multiple manifest schema versions.  Required: yes  Localized: no  Supported values: +ve integer.  Example: 1 |
|`version`      | `string` | Definition: Client side component version. The value of this field is expected to be controlled by the developer  of the client side component. The purpose of this field is to help client side component developers upgrade their  client side components in a managed way. This helps the consumers of the client side component make decisions  about when and how to upgrade the client side component. As the developer evolves the code for their client side  component, they can decide to bump the MAJOR, MINOR or PATCH version of the component. All incompatible API  changes should result in a MAJOR version bump. Backwards compatible functionality changes should result in a  MINOR version bump, and backwards compatible bug fixes should result in a PATCH version bump. Please see  http://semver.org for more details on how to manage the version of your components.  Usage: Versioning and evolving a client side component safely in a controlled way.  Required: yes  Localized: no  Supported values: string representing a semantic version (http://semver.org) i.e. MAJOR.MINOR.PATCH  Example: "1.0.0" |





