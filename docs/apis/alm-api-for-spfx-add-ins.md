---
title:  Application Lifecycle Management (ALM) APIs 
description: ALM APIs provide simple APIs to manage deployment of your SharePoint Framework solutions and add-ins across your tenant.
ms.date: 02/08/2018
ms.prod: sharepoint
ms.assetid: fdf7ecb2-8851-425b-b058-3285fba77b68
---

# Application Lifecycle Management (ALM) APIs  

ALM APIs provide simple APIs to manage deployment of your SharePoint Framework solutions and add-ins across your tenant. ALM APIs support the following capabilities:

- Add SharePoint Framework solution or SharePoint Add-in to tenant app catalog.
- Enable SharePoint Framework solution or SharePoint Add-in to be available for installation in tenant app catalog.
- Disable SharePoint Framework solution or SharePoint Add-in not to be available for installation in tenant app catalog.
- Install SharePoint Framework solution or SharePoint Add-in from tenant app catalog to a site.
- Upgrade SharePoint Framework solution or SharePoint Add-in to a site, which has a newer version available in the tenant app catalog.
- Uninstall SharePoint Framework solution or SharePoint Add-in from the site.

ALM APIs can be used to perform exactly the same operations that are available from a UI perspective. When these APIs are used, all typical actions are performed. Following are some of the characteristics of ALM APIs:

- `Install` and `UnInstall` events are being fired for provider-hosted add-ins when corresponding operations occur.
- ALM APIs support app-only-based operations.

ALM APIs are natively provided by using REST APIs, but there are also additional CSOM extensions and PowerShell cmdlets available through SharePoint Patterns and Practices.

> [!NOTE] 
> ALM APIs are not currently supported for the [site collection app catalog](../general-development/site-collection-app-catalog.md). Support will be added in early 2018.

## REST API

### Add solution packages to the tenant app catalog 

This API is designed to be executed in the context of the tenant app catalog site.

```
url: /_api/web/tenantappcatalog/Add(overwrite=true, url='test.txt')
method: POST
binaryStringRequestBody: true
body: 'byte array of the file'
```

### Deploy solution packages in the tenant app catalog

This enables the solution to be available to install to specific sites. This API is designed to be executed in the context of the tenant app catalog site.

```
url: /_api/web/tenantappcatalog/AvailableApps/GetById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')/Deploy
method: POST
```

> [!NOTE]
> This operation is required to be completed after Add before you can install packages to specific sites. 

### Retract solution packages in the tenant app catalog

This retracts the solution to be available from the sites. This API is designed to be executed in the context of the tenant app catalog site.

```
url: /_api/web/tenantappcatalog/AvailableApps/GetById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')/Retract
method: POST
```

> [!NOTE]
> If you run this operation after you have installed solutions to the site, they will stop working because the solution is disabled from the tenant level.

### Remove solution packages from the tenant app catalog

This API is designed to be executed in the context of the tenant app catalog site.

```
url: /_api/web/tenantappcatalog/AvailableApps/GetById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')/Remove
method: POST
```

> [!NOTE]
> If the Retract operation is not performed before the Remove operation, the solution is automatically retracted.

### List available packages from the tenant app catalog

Use this REST API for getting a list of available SharePoint Framework solutions or add-ins in the tenant app catalog.

```
url: /_api/web/tenantappcatalog/AvailableApps
method: GET
```

### Details about individual solution packages in the tenant app catalog

Use this REST API for getting details about individual SharePoint Framework solutions or add-ins available in the tenant app catalog.

```
url: /_api/web/tenantappcatalog/AvailableApps/GetById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')
method: GET
```

### Install solution package from the tenant app catalog to a SharePoint site

Install a solution package with a specific identifier from the tenant app catalog to the site based on URL context. This REST call can be executed in the context of the site where the install operation should happen.

```
url: /_api/web/tenantappcatalog/AvailableApps/GetById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')/Install
method: POST
```

### Upgrade solution packages on the SharePoint site

Upgrade a solution package from the site to a newer version available in the tenant app catalog. This REST call can be executed in the context of the site where the upgrade operation should happen.

```
url: /_api/web/tenantappcatalog/AvailableApps/GetById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')/Upgrade
method: POST
```

### Uninstall solution packages from the SharePoint site

This REST call can be executed in the context of the site where the uninstall operation should happen.

```
url: /_api/web/tenantappcatalog/AvailableApps/GetById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')/Uninstall
method: POST
```
> [!NOTE]
> When you use the REST API to uninstall a solution package from the site, it is not relocated to the recycle bin.


## SharePoint PnP PowerShell cmdlets 

By using [PnP PowerShell](https://docs.microsoft.com/en-us/powershell/sharepoint/sharepoint-pnp/sharepoint-pnp-cmdlets?view=sharepoint-ps), you can automate deploying, publishing, installing, upgrading, and retracting your apps. 

### Add and publish your app to the app catalog

Adding your app (.sppkg file, .app file) to the tenant app catalog is a prerequisite to making your app available for use on your SharePoint sites. You can do so by using the following cmdlet:

```PowerShell
Add-PnPApp -Path ./myapp.sppkg
```

After you add it, you need to continue with publishing your app, effectively making the app available to the users of your tenant. The following PnP PowerShell cmdlet shows how this can be done:

```PowerShell
Publish-PnPApp -Identity <app id> -SkipFeatureDeployment
```


> [!NOTE]
> Use the `SkipFeatureDeployment` flag to allow an app that was developed for tenant-wide deployment to be actually available as a tenant-wide deployed app.



### Remove the app from the app catalog

To remove an app added earlier, use the following cmdlet:

```PowerShell
Remove-PnPApp -Identity <app id>
```


### Use apps on your site

After the app is added to the app catalog and published, you can install the app to your site:

```PowerShell
Install-PnPApp -Identity <app id>
```


To upgrade the app:

```PowerShell
Update-PnPApp -Identity <app id>
```


To uninstall the app from your site:

```PowerShell
Uninstall-PnPApp -Identity <app id>
```


> [!NOTE]
> When you uninstall an app from your site, the app is completely deleted, so it does not end up in the site's recycle bin.



### Know which apps are there for you to use

You can get a list of apps that can be added to the site by using:

```PowerShell
Get-PnPApp
```

## See also

- [Get to know the SharePoint REST service](../sp-add-ins/get-to-know-the-sharepoint-rest-service.md)
