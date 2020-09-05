---
title:  Application Lifecycle Management (ALM) APIs
description: ALM APIs provide simple APIs to manage deployment of your SharePoint Framework solutions and add-ins across your tenant.
ms.date: 06/05/2020
ms.prod: sharepoint
ms.assetid: fdf7ecb2-8851-425b-b058-3285fba77b68
localization_priority: Priority
---

# Application Lifecycle Management (ALM) APIs

ALM APIs provide simple APIs to manage deployment of your SharePoint Framework solutions and add-ins across your tenant. ALM APIs support the following capabilities:

- Add SharePoint Framework solution or SharePoint Add-in to tenant or site collection app catalog.
- Remove SharePoint Framework solution or SharePoint Add-in from tenant or site collection app catalog.
- Enable SharePoint Framework solution or SharePoint Add-in to be available for installation in tenant or site collection app catalog.
- Disable SharePoint Framework solution or SharePoint Add-in not to be available for installation in tenant or site collection app catalog.
- Install SharePoint Framework solution or SharePoint Add-in from tenant or site collection app catalog to a site.
- Upgrade SharePoint Framework solution or SharePoint Add-in to a site, which has a newer version available in the tenant or site collection app catalog.
- Uninstall SharePoint Framework solution or SharePoint Add-in from the site.
- List all and get details about SharePoint Framework solutions or SharePoint Add-ins in the tenant or site collection app catalog.

ALM APIs can be used to perform exactly the same operations that are available from a UI perspective. When these APIs are used, all typical actions are performed. Following are some of the characteristics of ALM APIs:

- `Install` and `UnInstall` events are being fired for provider-hosted add-ins when corresponding operations occur.
- ALM APIs support app-only-based operations for SharePoint Framework solutions only.

ALM APIs are supported for the tenant-scoped site collections and [site collection app catalog](../general-development/site-collection-app-catalog.md). Use the corresponding app catalog's URL to target a specific app catalog. You must first enabled a site collection app catalog before targeting it with the actions documented on this page.

> [!IMPORTANT]
> Tenant-scoped permissions which require [tenant administrative approval](https://docs.microsoft.com/sharepoint/dev/solution-guidance/how-to-provide-add-in-app-only-tenant-administrative-permissions-in-sharepoint-online) are not supported with the ALM APIs.

## Options for working with ALM APIs

ALM APIs are natively provided by using REST APIs, but there are additional client-side object model (CSOM) extensions, PowerShell cmdlets, and the cross-platform CLI for Microsoft 365 available through SharePoint PnP Community channels.

### SharePoint REST API

The ALM APIs are natively provided as endpoints on the SharePoint REST API.

The app catalog must be included in all HTTP requests when using the REST API as shown in the examples below. Replace the `{app-catalog-scope}` placeholder in the endpoint with the scope of the app catalog. The available scope options are `tenantappcatalog` and `sitecollectionappcatalog`.

For example:

|      Scope      |                                            Endpoint                                            |
| :-------------- | :--------------------------------------------------------------------------------------------- |
| tenant          | **https://contoso.sharepoint.com/sites/AppCatalog/_api/web/tenantappcatalog/{command}**        |
| site collection | **https://contoso.sharepoint.com/sites/Marketing/_api/web/sitecollectionappcatalog/{command}** |

- when targeting the tenant app catalog located at **https://contoso.sharepoint.com/sites/AppCatalog**, the endpoint would be **

Learn more here: [SharePoint REST API](../sp-add-ins/get-to-know-the-sharepoint-rest-service.md)

### PnP CSOM (also known as: PnP Sites Core)

The PnP CSOM implements the ALM APIs by calling the SharePoint REST API.

Before using any of the ALM APIs in PnP CSOM, you need to obtain an authenticated client context using the [Microsoft.SharePointOnline.CSOM](https://www.nuget.org/packages/Microsoft.SharePointOnline.CSOM). Then use the authenticated client context to get an instance of the PnP CSOM's **AppManager** object to call the ALM commands:

```cs
using Microsoft.SharePoint.Client;
using OfficeDevPnP.Core.ALM;

// ...

using (var context = new ClientContext(webURL)) {
  context.Credentials = new SharePointOnlineCredentials(username, securePassword);
  var appManager = new AppManager(context);
  // execute PnP CSOM ALM command
}
```

In all PnP Core methods, it's assumed the request targets the tenant app catalog in the tenant you connect to using the SharePoint CSOM `ClientContext` object. you can override the scope of all commands with an optional scope argument, for example

```cs
appManager.Install('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx', AppCatalogScope.Site);
```

Learn more here: [PnP PowerShell](https://github.com/pnp/PnP-Sites-Core)

### PnP PowerShell

PnP PowerShell implements the ALM APIs by calling the PnP CSOM.

Before using any of the cmdlets in the PnP PowerShell module, you must first connect to SharePoint Online using the `Connect-PnPOnline` cmdlet.

In all PnP PowerShell cmdlets, it's assumed the request targets the tenant app catalog in the tenant you connect to using the `Connect-PnPOnline` cmdlet. You can override the scope of the command using the `-Scope` parameter to target a site collection app catalog.

Learn more here: [PnP PowerShell](https://aka.ms/sppnp-powershell)

[!INCLUDE [pnp-powershell](../../includes/snippets/open-source/pnp-powershell.md)]

### CLI for Microsoft 365

The CLI for Microsoft 365 is a cross-platform command-line interface that can be used on any platform, including Windows, macOS, and Linux. The CLI implements the ALM APIs by calling the SharePoint REST API.

Before using any of the commands in the CLI for Microsoft 365, you must first connect your Microsoft 365 tenant using the `m365 login` command.

Learn more here: [CLI for Microsoft 365](https://pnp.github.io/cli-microsoft365?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties)

[!INCLUDE [pnp-o365cli](../../includes/snippets/open-source/pnp-o365cli.md)]

## Add solution package

First add an app package (**\*.sppkg** or **\*.app**) to an app catalog in order to make it available to SharePoint sites.

# [SharePoint REST API](#tab/sprest)

### HTTP request

```http
POST /_api/web/{scope}appcatalog/Add(overwrite=true, url='sharepoint-solution-package.sppkg')
```

### Request headers

|         Header          |                Value                |
| :---------------------- | :---------------------------------- |
| Authorization           | `Bearer {token}`                    |
| Accept                  | `application/json;odata=nometadata` |
| Content-Type            | `application/json`                  |
| X-RequestDigest         | `{form digest}`                     |
| binaryStringRequestBody | `true`                              |

### Request body

Byte array of the file

# [PnP CSOM](#tab/pnpcsom)

```cs
// read file
var filePath = "c:\path\to\file\sharepoint-solution-package.sppkg";
// get an instance of the PnP CSOM's AppManager as shown above
var result = appManager.Add(filePath);
```

# [PnP PowerShell](#tab/pnpposh)

```powershell
Add-PnPApp -Path ./sharepoint-solution-package.sppkg
```

> Refer to the [PnP PowerShell documentation](/powershell/module/sharepoint-pnp/add-pnpapp) for complete details and examples on this cmdlet.

# [CLI for Microsoft 365](#tab/o365cli)

```console
m365 spo app add --filePath ./sharepoint-solution-package.sppkg
```

> Refer to the [CLI for Microsoft 365 documentation](https://pnp.github.io/cli-microsoft365/cmd/spo/app/app-add/?utm_source=msft_docs&utm_medium=page&utm_campaign=Application+Lifecycle+Management+ALM+APIs) for complete details and examples on this command.

---

## Deploy solution packages

Deployment of the solution makes it available to install in sites.

# [SharePoint REST API](#tab/sprest)

### HTTP request

```http
POST /_api/web/{scope}appcatalog/AvailableApps/GetById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')/Deploy
```

### Request headers

|     Header      |                       Value                       |
| :-------------- | :------------------------------------------------ |
| Authorization   | `Bearer {token}`                                  |
| Accept          | `application/json;odata=nometadata`               |
| Content-Type    | `application/json;odata=nometadata;charset=utf-8` |
| X-RequestDigest | `{form digest}`                                   |

### Request body

```json
{
  "skipFeatureDeployment": true
}
```

> [!NOTE]
> This operation can only be completed after calling the `Add` endpoint and before you can install packages to specific sites.

> [!IMPORTANT]
> Deploying multiple packages in parallel is not supported. Make sure to serialize your deployment operations to avoid deployment errors.

# [PnP CSOM](#tab/pnpcsom)

```cs
appManager.Deploy('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')
```

# [PnP PowerShell](#tab/pnpposh)

```powershell
Publish-PnPApp -Identity xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx
```

> Refer to the [PnP PowerShell documentation](/powershell/module/sharepoint-pnp/Publish-PnPApp) for complete details and examples on this cmdlet.

# [CLI for Microsoft 365](#tab/o365cli)

```console
m365 spo app deploy --id xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx
```

> Refer to the [CLI for Microsoft 365 documentation](https://pnp.github.io/cli-microsoft365/cmd/spo/app/app-deploy/?utm_source=msft_docs&utm_medium=page&utm_campaign=Application+Lifecycle+Management+ALM+APIs) for complete details and examples on this command.

---

## Retract solution packages

This is the inverse of the **deploy** step above. Once retracted, the solution can't be installed in sites.

# [SharePoint REST API](#tab/sprest)

### HTTP request

```http
POST /_api/web/{scope}appcatalog/AvailableApps/GetById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')/Retract
```

### Request headers

|         Header          |                Value                |
| :---------------------- | :---------------------------------- |
| Authorization           | `Bearer {token}`                    |
| Accept                  | `application/json;odata=nometadata` |
| X-RequestDigest         | `{form digest}`                     |

> [!NOTE]
> This operation will block installing the solution in sites and disable existing installations.

# [PnP CSOM](#tab/pnpcsom)

```cs
// get an app package
appManager.Retract('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')
```

# [PnP PowerShell](#tab/pnpposh)

```powershell
Unpublish-PnPApp -Identity xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx
```

> Refer to the [PnP PowerShell documentation](/powershell/module/sharepoint-pnp/Unpublish-PnPApp) for complete details and examples on this cmdlet.

# [CLI for Microsoft 365](#tab/o365cli)

```console
m365 spo app retract --id xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx
```

> Refer to the [CLI for Microsoft 365 documentation](https://pnp.github.io/cli-microsoft365/cmd/spo/app/app-retract/?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties) for complete details and examples on this command.

---

## Remove solution packages

This is the inverse of the **add** step above. One removed from the app catalog, the solution can't be deployed.

# [SharePoint REST API](#tab/sprest)

### HTTP request

```http
POST /_api/web/{scope}appcatalog/AvailableApps/GetById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')/Remove
```

# [PnP CSOM](#tab/pnpcsom)

```cs
appManager.Remove('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')
```

# [PnP PowerShell](#tab/pnpposh)

```powershell
Remove-PnPApp -Identity xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx
```

> Refer to the [PnP PowerShell documentation](/powershell/module/sharepoint-pnp/Remove-PnPApp) for complete details and examples on this cmdlet.

# [CLI for Microsoft 365](#tab/o365cli)

```console
m365 spo app remove --id xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx
```

> Refer to the [CLI for Microsoft 365 documentation](https://pnp.github.io/cli-microsoft365/cmd/spo/app/app-remove/?utm_source=msft_docs&utm_medium=page&utm_campaign=Application+Lifecycle+Management+ALM+APIs) for complete details and examples on this command.

---

> [!NOTE]
> If the Retract operation is not performed before the Remove operation, the solution is automatically retracted.

## List available packages

This operation will return a list of all available SharePoint Framework solutions or add-ins in the app catalog.

# [SharePoint REST API](#tab/sprest)

### HTTP request

```http
GET /_api/web/{scope}appcatalog/AvailableApps
```

### Request headers

|         Header          |                Value                |
| :---------------------- | :---------------------------------- |
| Authorization           | `Bearer {token}`                    |
| Accept                  | `application/json;odata=nometadata` |

### Response

```json
{
  "value": [
    {
      "AadAppId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx",
      "ContainsTenantWideExtension": false,
      "CurrentVersionDeployed": true,
      "Deployed": true,
      "ID": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx",
      "IsClientSideSolution": true,
      "IsEnabled": true,
      "IsPackageDefaultSkipFeatureDeployment": false,
      "IsValidAppPackage": true,
      "ShortDescription": "",
      "SkipDeploymentFeature": false,
      "Title": "sharepoint-solution-package"
    },
    {
      "AadAppId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx",
      "ContainsTenantWideExtension": false,
      "CurrentVersionDeployed": true,
      "Deployed": true,
      "ID": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx",
      "IsClientSideSolution": true,
      "IsEnabled": true,
      "IsPackageDefaultSkipFeatureDeployment": false,
      "IsValidAppPackage": true,
      "ShortDescription": "",
      "SkipDeploymentFeature": false,
      "Title": "sharepoint-solution-package2"
    }
  ]
}
```

# [PnP CSOM](#tab/pnpcsom)

```cs
var allAppPackages = appManager.GetAvailable();
```

# [PnP PowerShell](#tab/pnpposh)

```powershell
Get-PnPApp
```

> Refer to the [PnP PowerShell documentation](/powershell/module/sharepoint-pnp/Get-PnPApp) for complete details and examples on this cmdlet.

# [CLI for Microsoft 365](#tab/o365cli)

```console
m365 spo app list
```

> Refer to the [CLI for Microsoft 365 documentation](https://pnp.github.io/cli-microsoft365/cmd/spo/app/app-list/?utm_source=msft_docs&utm_medium=page&utm_campaign=Application+Lifecycle+Management+ALM+APIs) for complete details and examples on this command.

---

## Get a specific solution

This action will return details about a specific SharePoint Framework solution or add-in available in the app catalog.

# [SharePoint REST API](#tab/sprest)

### HTTP request

```http
GET /_api/web/{scope}appcatalog/AvailableApps/GetById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')
```

### Request headers

|         Header          |                Value                |
| :---------------------- | :---------------------------------- |
| Authorization           | `Bearer {token}`                    |
| Accept                  | `application/json;odata=nometadata` |

### Response

```json
{
  "AadAppId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx",
  "ContainsTenantWideExtension": false,
  "CurrentVersionDeployed": true,
  "Deployed": true,
  "ID": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx",
  "IsClientSideSolution": true,
  "IsEnabled": true,
  "IsPackageDefaultSkipFeatureDeployment": false,
  "IsValidAppPackage": true,
  "ShortDescription": "",
  "SkipDeploymentFeature": false,
  "Title": "sharepoint-solution-package"
}
```

# [PnP CSOM](#tab/pnpcsom)

```cs
var appPackage = appManager.GetAvailable('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx');
```

# [PnP PowerShell](#tab/pnpposh)

```powershell
Get-PnPApp -Identity xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx
```

> Refer to the [PnP PowerShell documentation](/powershell/module/sharepoint-pnp/Get-PnpApp) for complete details and examples on this cmdlet.

# [CLI for Microsoft 365](#tab/o365cli)

```console
m365 spo app get --id xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx
```

> Refer to the [CLI for Microsoft 365 documentation](https://pnp.github.io/cli-microsoft365/cmd/spo/app/app-get/?utm_source=msft_docs&utm_medium=page&utm_campaign=Application+Lifecycle+Management+ALM+APIs) for complete details and examples on this command.

---

## Install solution package in a site

Install a solution package with a specific identifier from the app catalog to the site based on URL context.

# [SharePoint REST API](#tab/sprest)

### HTTP Request

```http
POST /_api/web/{scope}appcatalog/AvailableApps/GetById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')/Install
```

### Request headers

|         Header          |                Value                |
| :---------------------- | :---------------------------------- |
| Authorization           | `Bearer {token}`                    |
| Accept                  | `application/json;odata=nometadata` |
| X-RequestDigest         | `{form digest}`                     |

# [PnP CSOM](#tab/pnpcsom)

```cs
// get an app package
appManager.Install('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')
```

# [PnP PowerShell](#tab/pnpposh)

```powershell
Install-PnPApp -Identity xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx
```

> Refer to the [PnP PowerShell documentation](/powershell/module/sharepoint-pnp/Install-PnPApp) for complete details and examples on this cmdlet.

# [CLI for Microsoft 365](#tab/o365cli)

```console
m365 spo app install --id xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx --siteUrl <url>
```

> Refer to the [CLI for Microsoft 365 documentation](https://pnp.github.io/cli-microsoft365/cmd/spo/app/app-install/?utm_source=msft_docs&utm_medium=page&utm_campaign=Application+Lifecycle+Management+ALM+APIs) for complete details and examples on this command.

---

## Upgrade installed solution packages

Upgrade a solution package from the site to a newer version available in the app catalog.

# [SharePoint REST API](#tab/sprest)

### HTTP request

```http
POST /_api/web/{scope}appcatalog/AvailableApps/GetById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')/Upgrade
```

### Request headers

|         Header          |                Value                |
| :---------------------- | :---------------------------------- |
| Authorization           | `Bearer {token}`                    |
| Accept                  | `application/json;odata=nometadata` |
| X-RequestDigest         | `{form digest}`                     |

# [PnP CSOM](#tab/pnpcsom)

```cs
// get an app package
var appPackage = appManager.GetAvailable('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx');
if (appPackage.CanUpgrade) {
  appManager.Upgrade(appPackage)
}
```

# [PnP PowerShell](#tab/pnpposh)

```powershell
Update-PnPApp -Identity xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx
```

> Refer to the [PnP PowerShell documentation](/powershell/module/sharepoint-pnp/update-pnpapp) for complete details and examples on this cmdlet.

# [CLI for Microsoft 365](#tab/o365cli)

```console
m365 spo app upgrade --id xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx --siteUrl <url>
```

> Refer to the [CLI for Microsoft 365 documentation](https://pnp.github.io/cli-microsoft365/cmd/spo/app/app-upgrade/?utm_source=msft_docs&utm_medium=page&utm_campaign=Application+Lifecycle+Management+ALM+APIs) for complete details and examples on this command.

---

## Uninstall solution packages from a site

This action is the inverse of the **install** command above.

> [!NOTE]
> When you use the uninstall a solution package from the site with any of the methods below, it's permanently deleted; it'sn't placed in the recycle bin.

# [SharePoint REST API](#tab/sprest)

### HTTP request

```http
POST /_api/web/{scope}appcatalog/AvailableApps/GetById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')/Uninstall
```

### Request headers

|         Header          |                Value                |
| :---------------------- | :---------------------------------- |
| Authorization           | `Bearer {token}`                    |
| Accept                  | `application/json;odata=nometadata` |
| X-RequestDigest         | `{form digest}`                     |

# [PnP CSOM](#tab/pnpcsom)

```cs
appManager.Uninstall('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')
```

# [PnP PowerShell](#tab/pnpposh)

```powershell
Uninstall-PnPApp -Identity xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx
```

> Refer to the [PnP PowerShell documentation](/powershell/module/sharepoint-pnp/Uninstall-PnPApp) for complete details and examples on this cmdlet.

# [CLI for Microsoft 365](#tab/o365cli)

```console
m365 spo app uninstall --id xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx --siteUrl <url>
```

> Refer to the [CLI for Microsoft 365 documentation](https://pnp.github.io/cli-microsoft365/cmd/spo/app/app-uninstall/?utm_source=msft_docs&utm_medium=page&utm_campaign=Application+Lifecycle+Management+ALM+APIs) for complete details and examples on this command.

---

## Synchronize a solution to the Microsoft Teams app catalog

This action requires that you refer the **list item ID** of the solution in the app catalog site.

# [SharePoint REST API](#tab/sprest)

### HTTP request

```http
POST /_api/web/{scope}appcatalog/SyncSolutionToTeams(id=xxxxx)
```

### Request headers

|         Header          |                Value                |
| :---------------------- | :---------------------------------- |
| Authorization           | `Bearer {token}`                    |
| Accept                  | `application/json;odata=nometadata` |
| X-RequestDigest         | `{form digest}`                     |

# [PnP CSOM](#tab/pnpcsom)

```cs
appManager.SyncToTeams('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')
```

# [PnP PowerShell](#tab/pnpposh)

```powershell
Sync-PnPAppToTeams -Identity xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx
```

> Refer to the [PnP PowerShell documentation](/powershell/module/sharepoint-pnp/sync-pnpapptoteams) for complete details and examples on this cmdlet.

# [CLI for Microsoft 365](#tab/o365cli)

*Not Supported*

---

## See also

- [Get to know the SharePoint REST service](../sp-add-ins/get-to-know-the-sharepoint-rest-service.md)
- [PnP PowerShell](https://aka.ms/sppnp-powershell)
- [CLI for Microsoft 365](https://pnp.github.io/cli-microsoft365?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties)