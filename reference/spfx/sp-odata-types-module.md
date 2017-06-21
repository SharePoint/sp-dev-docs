# sp-odata-types package

TypeScript interfaces for working with SharePoint REST APIs

This package defines TypeScript interfaces that describe various ODATA objects returned by SharePoint REST APIs. It is useful when implementing data layers that interpret these types. This package has no performance cost because it does not contain any runtime code; it consists only of type definitions.



## Interfaces

| Interface	   |  Description |
|:-------------|:---------------|
| [`IODataBasePermission`](./sp-odata-types/interface/iodatabasepermission.md)   | Data used for creating a SPPermission object.  |
| [`IODataChangeToken`](./sp-odata-types/interface/iodatachangetoken.md)   | Represents an OData SP.ChangeToken object. For more information about this object  |
| [`IODataContextWebInformation`](./sp-odata-types/interface/iodatacontextwebinformation.md)   | Represents an OData SP.ContextWebInformation object. For more information about this object  |
| [`IODataList`](./sp-odata-types/interface/iodatalist.md)   | Represents an OData SP.List object. For more information about this object see the MSDN documentation here: https://msdn.microsoft.com/en-us/library/office/jj860569.aspx  |
| [`IODataListItem`](./sp-odata-types/interface/iodatalistitem.md)   | Represents an OData SP.ListItem object. For more information about this object see the MSDN documentation here: https://msdn.microsoft.com/en-us/library/office/jj860569.aspx  |
| [`IODataNavigationNode`](./sp-odata-types/interface/iodatanavigationnode.md)   | Represents an OData SP.NavigationNode object. https://msdn.microsoft.com/en-us/library/office/jj246311.aspx  |
| [`IODataNavigationNodeCollection`](./sp-odata-types/interface/iodatanavigationnodecollection.md)   | Represents an OData Microsoft.SharePoint.Navigation.SPNavigation object. https://msdn.microsoft.com/en-us/library/office/ee557907.aspx  |
| [`IODataUser`](./sp-odata-types/interface/iodatauser.md)   | Represents an OData SP.User object. For more information about this object see the MSDN documentation here: https://msdn.microsoft.com/en-us/library/office/jj860569.aspx  |
| [`IODataUserCustomAction`](./sp-odata-types/interface/iodatausercustomaction.md)   | Represents an OData SP.UserCustomAction object. For more information about this object see the MSDN documentation here: https://msdn.microsoft.com/en-us/library/office/dn531432.aspx#bk_UserCustomAction  |
| [`IODataWeb`](./sp-odata-types/interface/iodataweb.md)   | Represents an OData SP.Web object. For more information about this object see the MSDN documentation here: https://msdn.microsoft.com/en-us/library/office/jj860569.aspx  |






