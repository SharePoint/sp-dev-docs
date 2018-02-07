---
title: SharePoint Online tenant properties
description: Manage and read tenant properties, which allow tenant administrators to add properties in the App Catalog that can be read by various SharePoint Framework components.
ms.date: 02/02/2018
ms.prod: sharepoint
---

# SharePoint Online tenant properties

Tenant properties allow tenant administrators to add properties in the App Catalog that can be read by various SharePoint Framework components. The tenant properties are managed by tenant administrators by using the [Microsoft SharePoint Online Management Shell](https://technet.microsoft.com/en-us/library/fp161372.aspx), which is a PowerShell module to manage your SharePoint Online subscription in Office 365.

Alternatively, the [Office 365 CLI](https://sharepoint.github.io/office365-cli?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties) can be used to manage the tenant properties. The Office 365 CLI is a cross-platform command line interface that can be used on any platform, including Windows, MacOS and Linux.

## Manage tenant properties

Using the [Microsoft SharePoint Online Management Shell](https://www.microsoft.com/en-us/download/details.aspx?id=35588), tenant administrators can use PowerShell to add and remove tenant properties. 

The following PowerShell cmdlets are available to manage the tenant properties. Because tenant properties are stored in the tenant App Catalog, you must provide the tenant App Catalog site collection URL in the following cmdlets.

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

## Office 365 CLI commands to get, set, remove and list tenant properties cross-platform

Using the [Office 365 CLI](https://sharepoint.github.io/office365-cli?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties), tenant administrators can use shell commands to manage tenant properties.

Before using the commands, connect to a SharePoint Online site, using the `spo connect` command.

### Get details for the specified tenant property

The [spo storageentity get](https://sharepoint.github.io/office365-cli/cmd/spo/storageentity/storageentity-get/?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties) command can be used to get details for Office 365, SharePoint Online tenant property

```shell
spo storageentity get --key <key>
```

### List tenant properties stored on the specified SharePoint Online app catalog

The [spo storageentity list](https://sharepoint.github.io/office365-cli/cmd/spo/storageentity/storageentity-list/?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties) command can be used to list all the tenant properties.

```shell
spo storageentity list --appCatalogUrl <appCatalogUrl>
```

### Set tenant property on a specified SharePoint Online app catalog

The [spo storageentity set](https://sharepoint.github.io/office365-cli/cmd/spo/storageentity/storageentity-set/?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties) command can be used to set tenant property

```shell
spo storageentity set --appCatalogUrl <appCatalogUrl> --key <key> --value <value>
```

### Remove tenant property stored on the specified SharePoint Online app catalog

The [spo storageentity remove](https://sharepoint.github.io/office365-cli/cmd/spo/storageentity/storageentity-remove/?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties) command can be used to remove tenant property

```shell
spo storageentity remove --appCatalogUrl <appCatalogUrl> --key <key>
```

### Remarks when using the Office 365 CLI set and remove commands

To set or remove a tenant property, you have to first connect to a tenant admin site using the spo connect command, eg. spo connect https://contoso-admin.sharepoint.com. If you are connected to a different site and will try to manage tenant properties, you will get an error.

Tenant properties are stored in the app catalog site associated with that tenant. To set or remove a property, you have to specify the absolute URL of the app catalog site. If you specify the URL of a site different than the app catalog, you will get an access denied error.

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

## See also

- [Overview of the SharePoint Framework](sharepoint-framework-overview.md)
- [Office 365 CLI](https://sharepoint.github.io/office365-cli?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties)