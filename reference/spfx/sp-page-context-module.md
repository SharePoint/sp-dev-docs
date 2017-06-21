# sp-page-context package

Page context services for the SharePoint Framework

The page context allows an application and its web parts to share common data about the current page, such as its contents, URL, list, user, permissions, navigation menu, etc.


## Classes

| Class	   |  Description |
|:-------------|:---------------|
| [`CultureInfo`](./sp-page-context/class/cultureinfo.md)     | This class is primarily used with the PageContext class. It provides culture info for the current user of the application. |
| [`PageContext`](./sp-page-context/class/pagecontext.md)     | The page context provides standard definitions for common SharePoint objects that need to be shared between the client-side application, web parts, and other components. Typically the data is fetched via REST queries when navigating to a new page, but it can also be preloaded by the web server, or filled from a custom application cache. |
| [`SPField`](./sp-page-context/class/spfield.md)     | The client-side equivalent for SharePoint SPField class. Used in Fields property of SPList and SPListItem classes. A field represents the data model for a column in SharePoint list view. |
| [`SPList`](./sp-page-context/class/splist.md)     | This class is primarily used with the PageContext class. It provides contextual information for the SharePoint list that hosts the page. |
| [`SPListItem`](./sp-page-context/class/splistitem.md)     | This class is primarily used with the PageContext class. It provides contextual information for the SharePoint list item that hosts the page. |
| [`SPPermission`](./sp-page-context/class/sppermission.md)     | This class can be used to determine if the current user has a requested set of permissions. Specifies the built-in permissions available in SharePoint Foundation Derived from OneDriveWeb/ODBNext/odsp-shared https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spbasepermissions.aspx |
| [`SPSite`](./sp-page-context/class/spsite.md)     | This class is primarily used with the PageContext class. It provides contextual information for the SharePoint site collection ("site") that hosts the page. |
| [`SPUser`](./sp-page-context/class/spuser.md)     | This class is primarily used with the PageContext class. It provides contextual information for the SharePoint user that is accessing the page. |
| [`SPWeb`](./sp-page-context/class/spweb.md)     | This class is primarily used with the PageContext class. It provides contextual information for the SharePoint site ("web") that hosts the page. |







