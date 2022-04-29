---
title: SharePoint Online tenant properties
description: Manage and read tenant properties, which allow tenant administrators to add properties in the app catalog that can be read by various SharePoint Framework components.
ms.date: 09/07/2020
ms.service: sharepoint
ms.subservice: sharepoint-framework
ms.localizationpriority: high
---

# SharePoint Online tenant properties

Tenant properties allow tenant administrators to add properties in the app catalog that can be read using the SharePoint REST API.

## Options for working with tenant properties

The tenant properties are managed by tenant administrators by using one of the following options:

### SharePoint REST API

Learn more here: [SharePoint REST API](../sp-add-ins/get-to-know-the-sharepoint-rest-service.md)

### Microsoft SharePoint Online Management Shell

The tenant properties are managed by tenant administrators by using the **Microsoft SharePoint Online Management Shell**, a PowerShell module from Microsoft used to manage your SharePoint Online subscription in Office 365.

Before using any of the cmdlets in the Microsoft SharePoint Online Management Shell module, you must first connect to SharePoint Online using the `Connect-SPOService` cmdlet. All tenant properties are managed using the `*-SPOStorageEntity` cmdlets.

Learn more here: [Microsoft SharePoint Online Management Shell](https://technet.microsoft.com/library/fp161372.aspx)

### PnP PowerShell

The advantage of PnP PowerShell is that it doesn't require tenant administrator privileges to set those properties. Any member of the Owners group of an app catalog site can do this. This applies to the tenant app catalog site and [site collection app catalogs](../general-development/site-collection-app-catalog.md).

Prior to using any of the cmdlets in the PnP PowerShell module, you must first connect to SharePoint Online using the `Connect-PnPOnline` cmdlet. All tenant properties are managed using the `*-PnPStorageEntity` cmdlets.

Learn more here: [PnP PowerShell](https://aka.ms/sppnp-powershell)

> [!IMPORTANT]
> You can connect to any site using the `Connect-PnPOnline` cmdlet. When you omit the `-Scope` parameter or set it to `Tenant`, which is the default value, all cmdlets apply to the tenant app catalog regardless of the site you connected to. If you set the `-Scope` parameter to `Site` all cmdlets will apply to the site collection app catalog of the site you connected to.

[!INCLUDE [pnp-powershell](../../includes/snippets/open-source/pnp-powershell.md)]

### CLI for Microsoft 365

The CLI for Microsoft 365 can be used to manage the tenant properties. The CLI for Microsoft 365 is a cross-platform command-line interface that can be used on any platform, including Windows, macOS, and Linux.

Before using any of the commands in the CLI for Microsoft 365, you must first connect to your Microsoft 365 tenant using the `m365 login` command. All SharePoint Online tenant properties are managed using the `spo storageentity` commands.

Learn more here: [CLI for Microsoft 365](https://pnp.github.io/cli-microsoft365?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties)

> [!IMPORTANT]
> Tenant properties are stored in the app catalog site associated with that tenant. To set or remove a property, you have to specify the absolute URL of the app catalog site. If you specify the URL of a site different than the app catalog, you will get an access denied error.

[!INCLUDE [pnp-o365cli](../../includes/snippets/open-source/pnp-o365cli.md)]

## List tenant properties

The following options demonstrate how to list tenant properties from SharePoint Online.

# [SharePoint REST API](#tab/sprest)

### Request

```http
GET https://tenant.sharepoint.com/sites/site/_api/web/AllProperties?$select=storageentitiesindex
```

### Response

```text
HTTP/1.1 200 OK
Content-Type: application/json
{
  "key": {
    "Comment":"Tenant property comment.",
    "Description":"Tenant property description",
    "Value":"Tenant property key value"
  }
}
```

# [Microsoft SPO Management Shell](#tab/msposh)

*Not supported*

# [PnP PowerShell](#tab/pnpposh)

```powershell
Get-PnPStorageEntity
```

> Refer to the [PnP PowerShell documentation](/powershell/module/sharepoint-pnp/get-pnpstorageentity) for details on this cmdlet.

# [CLI for Microsoft 365](#tab/o365cli)

```console
m365 spo storageentity list
```

> Refer to the [CLI for Microsoft 365 documentation](https://pnp.github.io/cli-microsoft365/cmd/spo/storageentity/storageentity-get/?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties) for details on this command.

---

## Get/read tenant properties

The following options demonstrate how to get tenant properties from SharePoint Online.

# [SharePoint REST API](#tab/sprest)

### Request

```http
GET https://tenant.sharepoint.com/sites/site/_api/web/GetStorageEntity('key')
```

### Response

```text
HTTP/1.1 200 OK
Content-Type: application/json
{
  "Comment":"Tenant property comment.",
  "Description":"Tenant property description",
  "Value":"Tenant property key value"
}
```

# [Microsoft SPO Management Shell](#tab/msposh)

```powershell
Get-SPOStorageEntity -Site <AppCatalogSiteURL> -Key <String>
```

> Refer to the [Microsoft SPO Management Shell](/powershell/module/sharepoint-online/get-spostorageentity) for details on this cmdlet.

# [PnP PowerShell](#tab/pnpposh)

```powershell
Get-PnPStorageEntity -Key <key>
```

> Refer to the [PnP PowerShell documentation](/powershell/module/sharepoint-pnp/get-pnpstorageentity) for details on this cmdlet.

# [CLI for Microsoft 365](#tab/o365cli)

```console
m365 spo storageentity get --key <key>
```

> Refer to the [CLI for Microsoft 365 documentation](https://pnp.github.io/cli-microsoft365/cmd/spo/storageentity/storageentity-get/?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties) for details on this command.

---

## Set/write tenant properties

The following options demonstrate how to write tenant properties from SharePoint Online.

# [SharePoint REST API](#tab/sprest)

*Not supported*

# [Microsoft SPO Management Shell](#tab/msposh)

```powershell
Set-SPOStorageEntity -Site <AppCatalogSiteURL> -Key <String> -Value <String> -Description <string> -Comments <String>
```

> Refer to the [Microsoft SPO Management Shell](/powershell/module/sharepoint-online/set-spostorageentity) for details on this cmdlet.

# [PnP PowerShell](#tab/pnpposh)

```powershell
Set-PnPStorageEntity -Key <key> -Value <value>
```

> Refer to the [PnP PowerShell documentation](/powershell/module/sharepoint-pnp/set-pnpstorageentity) for details on this cmdlet.

# [CLI for Microsoft 365](#tab/o365cli)

```console
m365 spo storageentity set --key <key> --value <value>
```

> Refer to the [CLI for Microsoft 365 documentation](https://pnp.github.io/cli-microsoft365/cmd/spo/storageentity/storageentity-set/?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties) for details on this command.

---

## Remove tenant properties

The following options demonstrate how to remove tenant properties from SharePoint Online.

# [SharePoint REST API](#tab/sprest)

*Not supported*

# [Microsoft SPO Management Shell](#tab/msposh)

```powershell
Remove-SPOStorageEntity -Site <AppCatalogSiteURL> -Key <String>
```

> Refer to the [Microsoft SPO Management Shell](/powershell/module/sharepoint-online/remove-spostorageentity) for details on this cmdlet.

# [PnP PowerShell](#tab/pnpposh)

```powershell
Remove-PnPStorageEntity -Key <key>
```

> Refer to the [PnP PowerShell documentation](/powershell/module/sharepoint-pnp/remove-pnpstorageentity) for details on this cmdlet.

# [CLI for Microsoft 365](#tab/o365cli)

```console
m365 spo storageentity remove --key <key>
```

> Refer to the [CLI for Microsoft 365 documentation](https://pnp.github.io/cli-microsoft365/cmd/spo/storageentity/storageentity-remove/?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties) for details on this command.

---

## Custom script and site collection app catalogs

It's only allowed to set tenant properties on site collection app catalogs in sites that have custom scripts enabled. When you try to set a tenant property in a "no-script site", the following error will be shown:

`Access denied. You do not have permission to perform this action or access this resource.`

You can learn more about custom scripts here: [Allow or prevent custom script](/sharepoint/allow-or-prevent-custom-script).

The error message will also be shown if you aren't owner or site collection administrator of the site.

## See also

- [Overview of the SharePoint Framework](sharepoint-framework-overview.md)
- [Microsoft SharePoint Online Management Shell](https://technet.microsoft.com/library/fp161372.aspx)
- [PnP PowerShell](https://aka.ms/sppnp-powershell)
- [CLI for Microsoft 365](https://pnp.github.io/cli-microsoft365?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties)
