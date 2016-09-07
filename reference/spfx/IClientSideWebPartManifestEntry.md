# IClientSideWebPartManifestEntry `<TProperties>` interface



_Type parameters: `<TProperties>`_

This interface specifies the set of properties that can be pre-configured by a Web Part developer. Each 
pre-configured instance of the Web Part will need a copy of these properties. Organization admins and 
content authors can modify these properties on a need basis. 





### Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`description`      | [`ILocalizedString`](ILocalizedString.md) | Definition: Description of the web part represented as a dictionary of locale keys to description values |
|`group`      | [`ILocalizedString`](ILocalizedString.md) |   Definition: This field is used to help decide the Toolbox group for the Web Part in the authoring  experience |
|`groupId`      | `string` |   Definition: This field is used to help decide the Toolbox group for the Web Part in the authoring  experience |
|`iconImageUrl`      | `string` | Definition: The icon for the WebPart,to be displayed in the toolbox,represented an image URL |
|`officeFabricIconFontName`      | `string` | Definition: The icon for the Web Part,to be displayed in the toolbox,represented as a character name in the  Office 365 icon font file |
|`properties`      | `TProperties` | Definition: every Web Part is expected to have some custom properties |
|`title`      | [`ILocalizedString`](ILocalizedString.md) | Definition: Title of the web part represented as a single a dictionary of locale keys to title values |




