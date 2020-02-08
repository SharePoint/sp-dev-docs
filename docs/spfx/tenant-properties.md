---
title: SharePoint Online tenant properties
description: Manage and read tenant properties, which allow tenant administrators to add properties in the app catalog that can be read by various SharePoint Framework components.
ms.date: 02/02/2018
ms.prod: sharepoint
localization_priority: Priority
---

# SharePoint Online tenant properties

Tenant properties allow tenant administrators to add properties in the app catalog that can be read by various SharePoint Framework components. The tenant properties are managed by tenant administrators by using the [Microsoft SharePoint Online Management Shell](https://technet.microsoft.com/library/fp161372.aspx), which is a PowerShell module to manage your SharePoint Online subscription in Office 365.

Alternatively, the [Office 365 CLI](https://pnp.github.io/office365-cli?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties) can be used to manage the tenant properties. The Office 365 CLI is a cross-platform command line interface that can be used on any platform, including Windows, MacOS and Linux.

Yet another alternative for managing tenant properties is [PnP PowerShell](https://aka.ms/sppnp-powershell). The advantage of PnP PowerShell is that it does not require tenant administrator privileges to set those properties. Any member of the Owners group of an app catalog site can do this. This applies to the tenant app catalog site as well as [site collection app catalogs](../general-development/site-collection-app-catalog.md).

## Use Microsoft SharePoint Online Management Shell commands to get, set and remove tenant properties

Using the [Microsoft SharePoint Online Management Shell](https://www.microsoft.com/download/details.aspx?id=35588), tenant administrators can use PowerShell to add and remove tenant properties. 

The following PowerShell cmdlets are available to manage the tenant properties. Because tenant properties are stored in the tenant app catalog, you must provide the tenant app catalog site collection URL in the following cmdlets.

Before running the following script, connect to your SharePoint Online tenant using the `Connect-SPOService` cmdlet when using the SharePoint Online PowerShell.

### Get-SPOStorageEntity

- **Applies to** Office 365, SharePoint Online

- **Syntax** Get-SPOStorageEntity [-Site] <AppCatalogSiteURL> [-Key] <String>

### Set-SPOStorageEntity

- **Applies to** Office 365, SharePoint Online

- **Syntax** Set-SPOStorageEntity [-Site] <AppCatalogSiteURL> [-Key] <String> [-Value] <String> [-Description] <String> [-Comments] <String>

### Remove-SPOStorageEntity

- **Applies to** Office 365, SharePoint Online

- **Syntax** Remove-SPOStorageEntity [-Site] <AppCatalogSiteURL> [-Key] <String>

## Use Office 365 CLI commands to get, set, remove and list tenant properties cross-platform

Using the [Office 365 CLI](https://pnp.github.io/office365-cli?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties), tenant administrators can use shell commands to manage tenant properties.

Before using the commands, connect to a SharePoint Online site, using the `spo connect` command.

### Get details for the specified tenant property

The [spo storageentity get](https://pnp.github.io/office365-cli/cmd/spo/storageentity/storageentity-get/?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties) command can be used to get details for Office 365, SharePoint Online tenant property

```shell
spo storageentity get --key <key>
```

### List tenant properties stored on the specified SharePoint Online app catalog

The [spo storageentity list](https://pnp.github.io/office365-cli/cmd/spo/storageentity/storageentity-list/?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties) command can be used to list all the tenant properties.

```shell
spo storageentity list --appCatalogUrl <appCatalogUrl>
```

### Set tenant property on a specified SharePoint Online app catalog

The [spo storageentity set](https://pnp.github.io/office365-cli/cmd/spo/storageentity/storageentity-set/?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties) command can be used to set tenant property

```shell
spo storageentity set --appCatalogUrl <appCatalogUrl> --key <key> --value <value>
```

### Remove tenant property stored on the specified SharePoint Online app catalog

The [spo storageentity remove](https://pnp.github.io/office365-cli/cmd/spo/storageentity/storageentity-remove/?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties) command can be used to remove tenant property

```shell
spo storageentity remove --appCatalogUrl <appCatalogUrl> --key <key>
```

### Remarks when using the Office 365 CLI set and remove commands

To set or remove a tenant property, you have to first connect to a tenant admin site using the spo connect command, eg. spo connect https://contoso-admin.sharepoint.com. If you are connected to a different site and will try to manage tenant properties, you will get an error.

Tenant properties are stored in the app catalog site associated with that tenant. To set or remove a property, you have to specify the absolute URL of the app catalog site. If you specify the URL of a site different than the app catalog, you will get an access denied error.


## Use PnP PowerShell cmdlets to get, set, remove and list tenant properties

Using [PnP PowerShell](https://aka.ms/sppnp-powershell), site owners and site collection administrators can use PowerShell cmdlets to manage tenant properties.

Before using the cmdlets, connect to a SharePoint Online site, using the `Connect-PnPOnline` cmdlet.

### Get details for the specified tenant property

The [Get-PnPStorageEntity](/powershell/module/sharepoint-pnp/get-pnpstorageentity) cmdlet can be used to get details for a SharePoint Online tenant property

Get property from tenant app catalog:
```powershell
Get-PnPStorageEntity -Key <key>
```

Get property from a site collection app catalog:
```powershell
Get-PnPStorageEntity -Key <key> -Scope Site
```

### List tenant properties stored on a SharePoint Online app catalog

The [Get-PnPStorageEntity](/powershell/module/sharepoint-pnp/get-pnpstorageentity) cmdlet can be used to list all the tenant properties.

List properties of tenant app catalog:
```powershell
Get-PnPStorageEntity
```
List properties of site collection app catalog:
```powershell
Get-PnPStorageEntity -Scope Site
```

### Set tenant property on a SharePoint Online app catalog

The [Set-PnPStorageEntity](/powershell/module/sharepoint-pnp/set-pnpstorageentity) cmdlet can be used to set a tenant property.

Set property for tenant app catalog:
```powershell
Set-PnPStorageEntity -Key <key> -Value <value>
```
Set property for site collection app catalog:
```powershell
Set-PnPStorageEntity -Key <key> -Value <value> -Scope Site
```

### Remove tenant property stored on a SharePoint Online app catalog

The [Remove-PnPStorageEntity](/powershell/module/sharepoint-pnp/remove-pnpstorageentity) cmdlet can be used to remove a tenant property.

Remove property from tenant app catalog:
```powershell
Remove-PnPStorageEntity -Key <key>
```
Remove property from site collection app catalog:
```powershell
Remove-PnPStorageEntity -Key <key> -Scope Site
```

### Remarks when using the PnP PowerShell cmdlets

You can connect to any site using the `Connect-PnPOnline` cmdlet, eg. Connect-PnPOnline https://contoso.sharepoint.com/sites/marketing. When you omit the `-Scope` parameter or set it to `Tenant` (which is the default value) all cmdlets apply to the tenant app catalog regardless of the site you connected to. If you set the `-Scope` parameter to `Site` all cmdlets will apply to the site collection app catalog of the site you connected to. 

## Read tenant properties

Developers can read tenant properties by using the SharePoint REST APIs and use them in SharePoint Framework components such as web parts and extensions.

## HTTP request

### Get a tenant property

```text
GET _api/web/GetStorageEntity('key')
```

#### Example

```text
GET _api/web/GetStorageEntity('AnalyticsKey')
```

#### Request body

Do not supply a request body for this method.

#### Response

This returns the storage entity information for the given key.

```text
HTTP/1.1 200 OK
Content-Type: application/json
{
    "Comment":"Tenant property comment.",
    "Description":"Tenant property description",
    "Value":"Tenant property key value"
}
```

## Custom script and site collection app catalogs

It is only allowed to set tenant properties on site collection app catalogs in sites that have custom scripts enabled. When you try to set a tenant property in a "no-script site" the following error will be shown: 

> Access denied. You do not have permission to perform this action or access this resource.

You can learn more about custom scripts here: [Allow or prevent custom script](/sharepoint/allow-or-prevent-custom-script).

Note that above error message will also be shown if you are not owner or site collection administrator of the site.

## See also

- [Overview of the SharePoint Framework](sharepoint-framework-overview.md)
- [Office 365 CLI](https://pnp.github.io/office365-cli?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties)
