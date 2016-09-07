# SPPermission class





This class can be used to determine if the current user has a requested set of permissions. 
Specifies the built-in permissions available in SharePoint Foundation 
Derived from OneDriveWeb/ODBNext/odsp-shared 
https:



### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`addAndCustomizePages`     | `public` | [`SPPermission`](SPPermission.md) | Add,change,or delete HTML pages or web part Pages,and edit the Web site using a SharePoint  Foundation–compatible editor |
|`addDelPrivateWebParts`     | `public` | [`SPPermission`](SPPermission.md) | Add or remove personal web parts on a web part Page |
|`addListItems`     | `public` | [`SPPermission`](SPPermission.md) | Add items to lists,add documents to document libraries,and add Web discussion comments |
|`applyStyleSheets`     | `public` | [`SPPermission`](SPPermission.md) | Apply a style sheet ( |
|`applyThemeAndBorder`     | `public` | [`SPPermission`](SPPermission.md) | Apply a theme or borders to the entire Web site |
|`approveItems`     | `public` | [`SPPermission`](SPPermission.md) | Approve a minor version of a list item or document |
|`browseDirectories`     | `public` | [`SPPermission`](SPPermission.md) | Enumerate files and folders in a Web site using Microsoft Office SharePoint Designer 2007 and WebDAV interfaces |
|`browserUserInfo`     | `public` | [`SPPermission`](SPPermission.md) | View information about users of the Web site |
|`cancelCheckout`     | `public` | [`SPPermission`](SPPermission.md) | Discard or check in a document which is checked out to another user |
|`createAlerts`     | `public` | [`SPPermission`](SPPermission.md) | Create e-mail alerts |
|`createGroups`     | `public` | [`SPPermission`](SPPermission.md) | Create a group of users that can be used anywhere within the site collection |
|`createSSCSite`     | `public` | [`SPPermission`](SPPermission.md) | Create a Web site using Self-Service Site Creation |
|`deleteListItems`     | `public` | [`SPPermission`](SPPermission.md) | Delete items from a list,documents from a document library,and Web discussion comments in documents |
|`deleteVersions`     | `public` | [`SPPermission`](SPPermission.md) | Delete past versions of a list item or document |
|`editListItems`     | `public` | [`SPPermission`](SPPermission.md) | Edit items in lists,edit documents in document libraries,edit Web discussion comments in documents,  and customize web part Pages in document libraries |
|`editMyUserInfo`     | `public` | [`SPPermission`](SPPermission.md) | Allows a user to change his or her user information,such as adding a picture |
|`emptyMask`     | `public` | [`SPPermission`](SPPermission.md) | Has no permissions on the Web site |
|`enumeratePermissions`     | `public` | [`SPPermission`](SPPermission.md) | Enumerate permissions on the Web site,list,folder,document,or list item |
|`fullMask`     | `public` | [`SPPermission`](SPPermission.md) | Has all permissions on the Web site |
|`layoutsPage`     | `public` | [`SPPermission`](SPPermission.md) | View the layouts page? |
|`manageAlerts`     | `public` | [`SPPermission`](SPPermission.md) | Manage alerts for all users of the Web site |
|`manageLists`     | `public` | [`SPPermission`](SPPermission.md) | Create and delete lists,add or remove columns in a list,and add or remove public views of a list |
|`managePermissions`     | `public` | [`SPPermission`](SPPermission.md) | Create and change permission levels on the Web site and assign permissions to users and groups |
|`managePersonalViews`     | `public` | [`SPPermission`](SPPermission.md) | Create,change,and delete personal views of lists |
|`manageSubwebs`     | `public` | [`SPPermission`](SPPermission.md) | Create subsites such as team sites,Meeting Workspace sites,and Document Workspace sites |
|`manageWeb`     | `public` | [`SPPermission`](SPPermission.md) | Grant the ability to perform all administration tasks for the Web site as well as manage content |
|`open`     | `public` | [`SPPermission`](SPPermission.md) | Allow users to open a Web site,list,or folder to access items inside that container |
|`openItems`     | `public` | [`SPPermission`](SPPermission.md) | View the source of documents with server-side file handlers |
|`updatePersonalWebParts`     | `public` | [`SPPermission`](SPPermission.md) | Update web parts to display personalized information |
|`useClientIntegration`     | `public` | [`SPPermission`](SPPermission.md) | Use features that launch client applications otherwise,users must work on documents locally and upload changes |
|`useRemoteAPIs`     | `public` | [`SPPermission`](SPPermission.md) | Use SOAP,WebDAV,or Microsoft Office SharePoint Designer 2007 interfaces to access the Web site |
|`value`     | `public` | [`IODataBasePermission`](IODataBasePermission.md) | Returns the value of this SPPermission object |
|`viewFormPages`     | `public` | [`SPPermission`](SPPermission.md) | View forms,views,and application pages,and enumerate lists |
|`viewListItems`     | `public` | [`SPPermission`](SPPermission.md) | View items in lists,documents in document libraries,and view Web discussion comments |
|`viewPages`     | `public` | [`SPPermission`](SPPermission.md) | View pages in a Web site |
|`viewUsageData`     | `public` | [`SPPermission`](SPPermission.md) | View reports on Web site usage |
|`viewVersions`     | `public` | [`SPPermission`](SPPermission.md) | View past versions of a list item or document |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`IODataBasePermission`](IODataBasePermission.md) |  |
|[`hasAllPermissions`](#hasallpermissions)     | `public` | `boolean` | Function for determining if a given permission mask has all of the requested permissions |
|[`hasAnyPermissions`](#hasanypermissions)     | `public` | `boolean` | Function for determining if a given permission mask has any of the requested permissions |
|[`hasPermission`](#haspermission)     | `public` | `boolean` | Function for checking if a given permission mask has the requested permission |




### constructor



#### Signature
`constructor(value: IODataBasePermission)`

#### Returns
[`IODataBasePermission`](IODataBasePermission.md)

#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | [`IODataBasePermission`](IODataBasePermission.md) |  |


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
| `requestedPerm`    | [`SPPermission`](SPPermission.md) |  |

