# IODataWeb interface







Represents an OData SP.Web object. For more information about this object see the MSDN documentation here: https://msdn.microsoft.com/en-us/library/office/jj860569.aspx




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`Created`      | `string` | Gets a value that specifies when the site was created. Example: "/Date(2016,0,20,12,58,7,0)/" |
|`CurrentChangeToken`      | [`IODataChangeToken`](../sp-odata-types/interface/iodatachangetoken.md) | Represents the unique sequential location of a change within the change log. |
|`CustomMasterUrl`      | `string` | Gets or sets the URL for a custom master page file to apply to the website. Example: "/sites/PubSite/_catalogs/masterpage/seattle.master" |
|`Description`      | `string` | Gets or sets the description for the site. |
|`Id`      | `string` | Gets a value that specifies the site identifier for the site. Example: "/Guid(92ea328e-9f50-49a6-9da5-2f2dd5577041)/" |
|`IsMultilingual`      | `boolean` | Value that represents if the web was |
|`Language`      | `number` | Gets a value that specifies the LCID for the language that is used on the site. Example: 1033 |
|`LastItemModifiedDate`      | `string` | Gets a value that specifies when an item was last modified in the site. Example: "/Date(1453618828000)/" |
|`MasterUrl`      | `string` | Gets or sets the URL of the master page that is used for the website. Example: "/sites/PubSite/_catalogs/masterpage/seattle.master" |
|`NoCrawl`      | `boolean` | Determines if a particular web will be crawled by search or not. |
|`QuickLaunchEnabled`      | `boolean` | Gets or sets a value that specifies whether the Quick Launch area is enabled on the site. |
|`RecycleBinEnabled`      | `boolean` | Gets or sets a value that determines whether the recycle bin is enabled for the website. |
|`ServerRelativeUrl`      | `string` | Gets or sets the server-relative URL for the Web site. Example: "/sites/PubSite" |
|`SiteLogoUrl`      | `string` | Gets the url for the logo of this particular site. |
|`Title`      | `string` | The title of the web. |
|`UIVersion`      | `number` | Gets or sets the user interface (UI) version of the Web site. Example: 15 |
|`Url`      | `string` | Gets the absolute URL for the website. Example: "http://example.com/sites/PubSite" |
|`WebTemplate`      | `string` | Gets the name of the site definition or site template that was used to create the site. Example: "BLANKINTERNET" |






