# IODataList interface







Represents an OData SP.List object. For more information about this object see the MSDN documentation here: https://msdn.microsoft.com/en-us/library/office/jj860569.aspx




## Properties

| Property	   | Type	| Description|
|:-------------|:-------|:-----------|
|`BaseTemplate`      | `number` | The list definition type on which the list is based. |
|`Created`      | `string` | Example: "/Date(1453294804000)/" |
|`CurrentChangeToken`      | [`IODataChangeToken`](../sp-odata-types/iodatachangetoken.md) | The change token that will be used in logging the next change to the list. |
|`Description`      | `string` | A description of the List. |
|`EntityTypeName`      | `string` | Example: "MyListTitleList" |
|`Hidden`      | `boolean` | A hidden list does not appear on the Documents and Lists page, Quick Launch bar, the Modify Site Content page, or the Add Column page as an option for lookup fields. |
|`Id`      | `string` | Example: "/Guid(9fb9199b-65f2-4a4a-b597-11d1a44422c1)/" |
|`LastItemDeletedDate`      | `string` | Example: "/Date(1453294809000)/" |
|`LastItemModifiedDate`      | `string` | Example: "/Date(1453294809000)/" |
|`ListItemEntityTypeFullName`      | `string` | Example: "SP.Data.MyListTitleListItem" |
|`ParentWebUrl`      | `string` | Example: "/sites/PubSite" |
|`TemplateFeatureId`      | `string` | Example: "/Guid(22a9ef51-737b-4ff2-9346-694633fe4416)/" |
|`Title`      | `string` | Example: "Pages" |






