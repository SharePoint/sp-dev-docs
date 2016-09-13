# SPPermission class





This class can be used to determine if the current user has a requested set of permissions. 
Specifies the built-in permissions available in SharePoint Foundation 
Derived from OneDriveWeb/ODBNext/odsp-shared 
https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spbasepermissions.aspx



### Properties

| Property	   | Access Modifier | Type	| Description|
|:-------------|:----|:-------|:-----------|
|`public`     | `null` | [`SPPermission`](sppermission.md) | This class can be used to determine if the current user has a requested set of permissions |




## Methods

| Method	   | Access Modifier | Returns	| Description|
|:-------------|:----|:-------|:-----------|
|[`constructor`](#constructor)     | `public` | [`SPPermission`](sppermission.md) | This class can be used to determine if the current user has a requested set of permissions |
|[`hasAllPermissions`](#hasallpermissions)     | `public` | `boolean` | This class can be used to determine if the current user has a requested set of permissions |
|[`hasAnyPermissions`](#hasanypermissions)     | `public` | `boolean` | This class can be used to determine if the current user has a requested set of permissions |
|[`hasPermission`](#haspermission)     | `public` | `boolean` | This class can be used to determine if the current user has a requested set of permissions |





### constructor

This class can be used to determine if the current user has a requested set of permissions. 
Specifies the built-in permissions available in SharePoint Foundation 
Derived from OneDriveWeb/ODBNext/odsp-shared 
https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spbasepermissions.aspx

#### Signature
`constructor(value: IODataBasePermission)`

#### Returns
[`SPPermission`](sppermission.md)


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `value`    | [`IODataBasePermission`](iodatabasepermission.md) |  |


### hasAllPermissions

This class can be used to determine if the current user has a requested set of permissions. 
Specifies the built-in permissions available in SharePoint Foundation 
Derived from OneDriveWeb/ODBNext/odsp-shared 
https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spbasepermissions.aspx

#### Signature
`hasAllPermissions(...requestedPerms: SPPermission[]): boolean`

#### Returns
`boolean`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `...requestedPerms`    | `SPPermission[]` |  |


### hasAnyPermissions

This class can be used to determine if the current user has a requested set of permissions. 
Specifies the built-in permissions available in SharePoint Foundation 
Derived from OneDriveWeb/ODBNext/odsp-shared 
https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spbasepermissions.aspx

#### Signature
`hasAnyPermissions(...requestedPerms: SPPermission[]): boolean`

#### Returns
`boolean`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `...requestedPerms`    | `SPPermission[]` |  |


### hasPermission

This class can be used to determine if the current user has a requested set of permissions. 
Specifies the built-in permissions available in SharePoint Foundation 
Derived from OneDriveWeb/ODBNext/odsp-shared 
https://msdn.microsoft.com/en-us/library/microsoft.sharepoint.spbasepermissions.aspx

#### Signature
`hasPermission(requestedPerm: SPPermission): boolean`

#### Returns
`boolean`


#### Parameters


| Parameter	   | Type    | Description |
|:-------------|:---------------|:------------|
| `requestedPerm`    | [`SPPermission`](sppermission.md) | - The SPPermission object to be compared against the original  Function for checking if a given permission mask has the requested permission |

