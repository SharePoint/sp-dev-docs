# SPPermission class





This class can be used to determine if the current user has a requested set of permissions. 
Specifies the built-in permissions available in SharePoint Foundation 
Derived from OneDriveWeb/ODBNext/odsp-shared 
https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spbasepermissions.aspx


## Constructor


**Signature:** constructor(value: [IODataBasePermission](../sp-client-base/iodatabasepermission.md))

**Returns**: [`SPPermission`](../sp-client-base/sppermission.md)



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | [`IODataBasePermission`](../sp-client-base/iodatabasepermission.md) |  |


## Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`addAndCustomizePages`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Add,change,or delete HTML pages or web part Pages,and edit the Web site using a SharePoint  Foundation–compatible editor. |
|`addDelPrivateWebParts`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Add or remove personal web parts on a web part Page. |
|`addListItems`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Add items to lists,add documents to document libraries,and add Web discussion comments. |
|`applyStyleSheets`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Apply a style sheet (.css file) to the Web site. |
|`applyThemeAndBorder`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Apply a theme or borders to the entire Web site. |
|`approveItems`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Approve a minor version of a list item or document. |
|`browseDirectories`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Enumerate files and folders in a Web site using Microsoft Office SharePoint Designer 2007 and WebDAV interfaces. |
|`browserUserInfo`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | View information about users of the Web site. |
|`cancelCheckout`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Discard or check in a document which is checked out to another user. |
|`createAlerts`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Create e-mail alerts. |
|`createGroups`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Create a group of users that can be used anywhere within the site collection. |
|`createSSCSite`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Create a Web site using Self-Service Site Creation. |
|`deleteListItems`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Delete items from a list,documents from a document library,and Web discussion comments in documents. |
|`deleteVersions`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Delete past versions of a list item or document. |
|`editListItems`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Edit items in lists,edit documents in document libraries,edit Web discussion comments in documents,  and customize web part Pages in document libraries. |
|`editMyUserInfo`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Allows a user to change his or her user information,such as adding a picture. |
|`emptyMask`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Has no permissions on the Web site. Not available through the user interface. |
|`enumeratePermissions`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Enumerate permissions on the Web site,list,folder,document,or list item. |
|`fullMask`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Has all permissions on the Web site. Not available through the user interface. |
|`layoutsPage`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | View the layouts page? |
|`manageAlerts`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Manage alerts for all users of the Web site. |
|`manageLists`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Create and delete lists,add or remove columns in a list,and add or remove public views of a list. |
|`managePermissions`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Create and change permission levels on the Web site and assign permissions to users and groups. |
|`managePersonalViews`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Create,change,and delete personal views of lists. |
|`manageSubwebs`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Create subsites such as team sites,Meeting Workspace sites,and Document Workspace sites. |
|`manageWeb`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Grant the ability to perform all administration tasks for the Web site as well as manage content.  Activate, deactivate,or edit properties of Web site scoped Features through the object model or  through the user interface (UI). When grantedon the root Web site of a site collection, activate,  deactivate, or edit properties of site collection scoped Features through the object model. To  browse to the Site Collection Features page and activate or deactivate site collection scoped  Features through the UI, you must be a site collection administrator. |
|`open`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Allow users to open a Web site,list,or folder to access items inside that container. |
|`openItems`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | View the source of documents with server-side file handlers. |
|`updatePersonalWebParts`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Update web parts to display personalized information. |
|`useClientIntegration`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Use features that launch client applications otherwise,users must work on documents locally and upload changes. |
|`useRemoteAPIs`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | Use SOAP,WebDAV,or Microsoft Office SharePoint Designer 2007 interfaces to access the Web site. |
|`value`     | `public` | [`IODataBasePermission`](../sp-client-base/iodatabasepermission.md) | Returns the value of this SPPermission object |
|`viewFormPages`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | View forms,views,and application pages,and enumerate lists. |
|`viewListItems`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | View items in lists,documents in document libraries,and view Web discussion comments. |
|`viewPages`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | View pages in a Web site. |
|`viewUsageData`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | View reports on Web site usage. |
|`viewVersions`     | `public` | [`SPPermission`](../sp-client-base/sppermission.md) | View past versions of a list item or document. |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`hasAllPermissions(...requestedPerms)`](#hasallpermissions...requestedperms)     | `public` | `boolean` | Function for determining if a given permission mask has all of the requested permissions. |
|[`hasAnyPermissions(...requestedPerms)`](#hasanypermissions...requestedperms)     | `public` | `boolean` | Function for determining if a given permission mask has any of the requested permissions. |
|[`hasPermission(requestedPerm)`](#haspermissionrequestedperm)     | `public` | `boolean` | Function for checking if a given permission mask has the requested permission. |





### hasAllPermissions(...requestedPerms)

Function for determining if a given permission mask has all of the requested permissions.

**Signature:** _hasAllPermissions(...requestedPerms: [SPPermission](../sp-client-base/sppermission.md)[]): boolean_

**Returns**: `boolean`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `...requestedPerms`    | [`SPPermission[]`](../sp-client-base/sppermission.md) |  |


### hasAnyPermissions(...requestedPerms)

Function for determining if a given permission mask has any of the requested permissions.

**Signature:** _hasAnyPermissions(...requestedPerms: [SPPermission](../sp-client-base/sppermission.md)[]): boolean_

**Returns**: `boolean`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `...requestedPerms`    | [`SPPermission[]`](../sp-client-base/sppermission.md) |  |


### hasPermission(requestedPerm)

Function for checking if a given permission mask has the requested permission.

**Signature:** _hasPermission(requestedPerm: [SPPermission](../sp-client-base/sppermission.md)): boolean_

**Returns**: `boolean`



#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `requestedPerm`    | [`SPPermission`](../sp-client-base/sppermission.md) | - The SPPermission object to be compared against the original |

