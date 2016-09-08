# SPPermission class





This class can be used to determine if the current user has a requested set of permissions. 
Specifies the built-in permissions available in SharePoint Foundation 
Derived from OneDriveWeb/ODBNext/odsp-shared 
https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spbasepermissions.aspx



### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`addAndCustomizePages`     | `public` | [`SPPermission`](sppermission.md) | Add,change,or delete HTML pages or web part Pages,and edit the Web site using a SharePoint  Foundation–compatible editor |
|`addDelPrivateWebParts`     | `public` | [`SPPermission`](sppermission.md) | Add or remove personal web parts on a web part Page |
|`addListItems`     | `public` | [`SPPermission`](sppermission.md) | Add items to lists,add documents to document libraries,and add Web discussion comments |
|`applyStyleSheets`     | `public` | [`SPPermission`](sppermission.md) | Apply a style sheet ( |
|`applyThemeAndBorder`     | `public` | [`SPPermission`](sppermission.md) | Apply a theme or borders to the entire Web site |
|`approveItems`     | `public` | [`SPPermission`](sppermission.md) | Approve a minor version of a list item or document |
|`browseDirectories`     | `public` | [`SPPermission`](sppermission.md) | Enumerate files and folders in a Web site using Microsoft Office SharePoint Designer 2007 and WebDAV interfaces |
|`browserUserInfo`     | `public` | [`SPPermission`](sppermission.md) | View information about users of the Web site |
|`cancelCheckout`     | `public` | [`SPPermission`](sppermission.md) | Discard or check in a document which is checked out to another user |
|`createAlerts`     | `public` | [`SPPermission`](sppermission.md) | Create e-mail alerts |
|`createGroups`     | `public` | [`SPPermission`](sppermission.md) | Create a group of users that can be used anywhere within the site collection |
|`createSSCSite`     | `public` | [`SPPermission`](sppermission.md) | Create a Web site using Self-Service Site Creation |
|`deleteListItems`     | `public` | [`SPPermission`](sppermission.md) | Delete items from a list,documents from a document library,and Web discussion comments in documents |
|`deleteVersions`     | `public` | [`SPPermission`](sppermission.md) | Delete past versions of a list item or document |
|`editListItems`     | `public` | [`SPPermission`](sppermission.md) | Edit items in lists,edit documents in document libraries,edit Web discussion comments in documents,  and customize web part Pages in document libraries |
|`editMyUserInfo`     | `public` | [`SPPermission`](sppermission.md) | Allows a user to change his or her user information,such as adding a picture |
|`emptyMask`     | `public` | [`SPPermission`](sppermission.md) | Has no permissions on the Web site |
|`enumeratePermissions`     | `public` | [`SPPermission`](sppermission.md) | Enumerate permissions on the Web site,list,folder,document,or list item |
|`fullMask`     | `public` | [`SPPermission`](sppermission.md) | Has all permissions on the Web site |
|`layoutsPage`     | `public` | [`SPPermission`](sppermission.md) | View the layouts page? |
|`manageAlerts`     | `public` | [`SPPermission`](sppermission.md) | Manage alerts for all users of the Web site |
|`manageLists`     | `public` | [`SPPermission`](sppermission.md) | Create and delete lists,add or remove columns in a list,and add or remove public views of a list |
|`managePermissions`     | `public` | [`SPPermission`](sppermission.md) | Create and change permission levels on the Web site and assign permissions to users and groups |
|`managePersonalViews`     | `public` | [`SPPermission`](sppermission.md) | Create,change,and delete personal views of lists |
|`manageSubwebs`     | `public` | [`SPPermission`](sppermission.md) | Create subsites such as team sites,Meeting Workspace sites,and Document Workspace sites |
|`manageWeb`     | `public` | [`SPPermission`](sppermission.md) | Grant the ability to perform all administration tasks for the Web site as well as manage content |
|`open`     | `public` | [`SPPermission`](sppermission.md) | Allow users to open a Web site,list,or folder to access items inside that container |
|`openItems`     | `public` | [`SPPermission`](sppermission.md) | View the source of documents with server-side file handlers |
|`updatePersonalWebParts`     | `public` | [`SPPermission`](sppermission.md) | Update web parts to display personalized information |
|`useClientIntegration`     | `public` | [`SPPermission`](sppermission.md) | Use features that launch client applications otherwise,users must work on documents locally and upload changes |
|`useRemoteAPIs`     | `public` | [`SPPermission`](sppermission.md) | Use SOAP,WebDAV,or Microsoft Office SharePoint Designer 2007 interfaces to access the Web site |
|`value`     | `public` | [`IODataBasePermission`](iodatabasepermission.md) | Returns the value of this SPPermission object |
|`viewFormPages`     | `public` | [`SPPermission`](sppermission.md) | View forms,views,and application pages,and enumerate lists |
|`viewListItems`     | `public` | [`SPPermission`](sppermission.md) | View items in lists,documents in document libraries,and view Web discussion comments |
|`viewPages`     | `public` | [`SPPermission`](sppermission.md) | View pages in a Web site |
|`viewUsageData`     | `public` | [`SPPermission`](sppermission.md) | View reports on Web site usage |
|`viewVersions`     | `public` | [`SPPermission`](sppermission.md) | View past versions of a list item or document |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`IODataBasePermission`](iodatabasepermission.md) |  |
|[`hasAllPermissions`](#hasallpermissions)     | `public` | `boolean` | Function for determining if a given permission mask has all of the requested permissions |
|[`hasAnyPermissions`](#hasanypermissions)     | `public` | `boolean` | Function for determining if a given permission mask has any of the requested permissions |
|[`hasPermission`](#haspermission)     | `public` | `boolean` | Function for checking if a given permission mask has the requested permission |




### constructor



#### Signature
`constructor(value: IODataBasePermission)`

#### Returns
[`IODataBasePermission`](iodatabasepermission.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | [`IODataBasePermission`](iodatabasepermission.md) |  |


### hasAllPermissions

Function for determining if a given permission mask has all of the requested permissions.

#### Signature
`public hasAllPermissions(...requestedPerms: SPPermission[]): boolean`

#### Returns
`boolean`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `...requestedPerms`    | `SPPermission[]` |  |


### hasAnyPermissions

Function for determining if a given permission mask has any of the requested permissions.

#### Signature
`public hasAnyPermissions(...requestedPerms: SPPermission[]): boolean`

#### Returns
`boolean`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `...requestedPerms`    | `SPPermission[]` |  |


### hasPermission

Function for checking if a given permission mask has the requested permission.

#### Signature
`public hasPermission(requestedPerm: SPPermission): boolean`

#### Returns
`boolean`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `requestedPerm`    | [`SPPermission`](sppermission.md) | - The SPPermission object to be compared against the original |

