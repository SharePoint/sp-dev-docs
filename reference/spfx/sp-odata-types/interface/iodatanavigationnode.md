# IODataNavigationNode interface







Represents an OData SP.NavigationNode object. https://msdn.microsoft.com/en-us/library/office/jj246311.aspx




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`Children`      | [`IODataNavigationNode`](../sp-odata-types/interface/iodatanavigationnode.md)[] | Gets or sets an array of Navigation Nodes that are children to the current node. |
|`Id`      | `number` | Gets a value that specifies the identifier for the navigation node. |
|`IsDocLib`      | `boolean` |  |
|`IsExternal`      | `boolean` | Gets or sets a value that specifies whether the navigation node URL potentially corresponds to pages outside of the site collection. |
|`IsVisible`      | `boolean` | Gets or sets a value that specifies if the node navigation link should be visible. |
|`Title`      | `string` | Gets or sets a value that specifies the anchor text for the node navigation link. |
|`Url`      | `string` | Gets or sets a value that specifies the URL to be stored with the navigation node. It must be a URL of relative form if IsExternal is false. It must be a URL of relative or absolute form. |






