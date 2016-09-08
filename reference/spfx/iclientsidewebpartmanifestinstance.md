# IClientSideWebPartManifestInstance `<TProperties>` interface



_Type parameters: `<TProperties>`_

Manifest that is relevant to a Web Part instance. 





### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`componentType`      | `'Application' `,` 'WebPart' `,` 'Library'` | Definition: Type of client side component |
|`description`      | [`ILocalizedString`](ilocalizedstring.md) | Definition: Description of the web part represented as a dictionary of locale keys to description values |
|`group`      | [`ILocalizedString`](ilocalizedstring.md) |  |
|`groupId`      | `string` |  |
|`iconImageUrl`      | `string` | Definition: The icon for the WebPart,to be displayed in the toolbox,represented an image URL |
|`id`      | `string` | Definition: A universally unique component id |
|`imageLinkPropertyNames`      | `string` | Definition: List of names of Web Part properties that are image sources and need to be link fixed up  and potentially preloaded for performance reasons |
|`linkPropertyNames`      | `string` | Definition: List of names of Web Part properties that are links and need to be link fixed up |
|`loaderConfig`      | [`IClientSideComponentLoaderConfig`](iclientsidecomponentloaderconfig.md) | Definition: This portion of the configuration describes how the component is to be loaded and initialized by a  client |
|`manifestVersion`      | `number` | Definition: Version of the component manifest schema |
|`officeFabricIconFontName`      | `string` | Definition: The icon for the Web Part,to be displayed in the toolbox,represented as a character name in the  Office 365 icon font file |
|`properties`      | `TProperties` | Definition: every Web Part is expected to have some custom properties |
|`searchablePropertyNames`      | `string` | Definition: List of names of Web Part properties that need to be indexed for search |
|`title`      | [`ILocalizedString`](ilocalizedstring.md) | Definition: Title of the web part represented as a single a dictionary of locale keys to title values |
|`version`      | `string` | Definition: Client side component version |




