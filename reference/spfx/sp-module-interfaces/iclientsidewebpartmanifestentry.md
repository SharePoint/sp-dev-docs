# IClientSideWebPartManifestEntry interface





This interface specifies the set of properties that can be pre-configured by a Web Part developer. Each 
pre-configured instance of the Web Part will need a copy of these properties. Organization admins and 
content authors can modify these properties on a need basis. 





## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`description`      | [`ILocalizedString`](../sp-module-interfaces/ilocalizedstring.md) | Definition: Description of the web part represented as a dictionary of locale keys to description values. This  value will be displayed to the user in the toolbox. This description should be used in the Toolbox tooltip and  other display areas. The Web Part developer may give an initial description to the webpart. The organization admin  and page author will have the ability to change this description as per need.  Usage: display the description of the webpart in the toolbox tooltip, webpart gallery and the page.  Required: yes  Type: Object  Localized: yes  Supported values: a dictionary of locale keys to strings. Should always have a 'default' key.  Example: "A tool for displaying neat information."  {  "default": "A tool for displaying neat information.",  "en-us": "A tool for displaying neat information.",  "fr-fr": "Un outil d’affichage des informations soignées.",  "zh": "用於顯示整潔資訊的工具。"  } |
|`group`      | [`ILocalizedString`](../sp-module-interfaces/ilocalizedstring.md) |  |
|`groupId`      | `string` |  |
|`iconImageUrl`      | `string` | Definition: The icon for the WebPart,to be displayed in the toolbox,represented an image URL. The image at the  URL must be exactly 38x38 px (SPPPLAT VSO#218660 to fix the size of the icon image).  If the '{@link officeFabricIconFontName}' field does not have a value, this field must have a value.  Required: no  Type: string  Localized: no  Supported values: Any absolute URL.  Example: "https://contoso.akamaihd.net/files/myWebpartIcon.png" |
|`officeFabricIconFontName`      | `string` | Definition: The icon for the Web Part,to be displayed in the toolbox,represented as a character name in the  Office 365 icon font file. The icon font is specified here: http://o365icons.cloudapp.net/. If this field has  a value, the '{@link iconImageUrl}' field will be ignored.  Required: no  Type: string  Localized: no  Supported values: Any character name in the Office 365 Icon Font.  Example: "graph" |
|`properties`      | `TProperties` | Definition: every Web Part is expected to have some custom properties. e.g. an image Web Part may have the image  url and caption text as custom properties, a list Web Part may have the list id and list title as custom  properties, and so on. The Web Part framework is transparent to these properties. It just acts as a conduit to  pass these properties in and out to the Web Parts. The Web Part developer fully controls the schema of these  properties. The Web Part developer should follow versioning rules (@todo: pointer to Web Part versioning document)  to evolve these properties.    Usage: rendering of the Web Part.  Required: yes  Localized: no  Supported values: any  Example: {"imageSource": "https://contoso.akamaihd.net/files/contosoLogo.jpg", "captionText": "Contoso logo"}" |
|`title`      | [`ILocalizedString`](../sp-module-interfaces/ilocalizedstring.md) | Definition: Title of the web part represented as a single a dictionary of locale keys to title values. This  value will be displayed to the user in the toolbox. This title should be used in the Toolbox and other display  areas. The Web Part developer may give an initial title to the webpart. The organization admin and page author  will have the ability to change this title as per need.  Usage: display the name of the webpart in the toolbox, webpart gallery and the page.  Required: yes  Type: Object  Localized: yes  Supported values: a dictionary of locale keys to strings. Should always have a 'default' key.  Example: "My Webpart"  {  "default": "My WebPart"  "en-us": "My WebPart",  "fr-fr": "Ma WebPart",  "zh": "我的 web 部件"  } |





