---
title:  Application Lifecycle Management (ALM) APIs 
ms.date: 12/19/2017
ms.prod: sharepoint
ms.assetid: fdf7ecb2-8851-425b-b058-3285fba77b68
---

# Application Lifecycle Management (ALM) APIs  

ALM APIs are providing simple APIs to manage deployment of your SharePoint Framework solutions and add-ins cross your tenant. ALM APIs support following capabilities.

- Add SharePoint Framework solution or SharePoint add-in to tenant app catalog
- Enable SharePoint Framework solution or SharePoint add-in to be available for installation in tenant app catalog
- Disable SharePoint Framework solution or SharePoint add-in not to be available for installation in tenant app catalog
- Install SharePoint Framework solution or SharePoint add-in from tenant app catalog to a site
- Upgrade SharePoint Framework solution or SharePoint add-in to a site, which has a newer version available in the tenant app catalog
- Uninstall SharePoint Framework solution or SharePoint add-in from the site

ALM APIs can be used to perform exactly the same operations which are available from UI perspective. When these APIs are used, all typical actions will be performed. Here are some of the characteristics for ALM APIs.

- Install and UnInstall events are being fired for provider hosted add-ins when corresponding operations are occurred
- ALM APIs supports app-only based operations

ALM APIs are natively provided using REST APIs, but there is also additional CSOM extensions and PowerShell commandlets available through SharePoint Patterns and Practices.

> [!NOTE] 
> ALM APIs are not currently supported for [site collection app catalog](../general-development/site-collection-app-catalog.md). Support will be added early 2018.

## REST API

### Add solution package to tenant app catalog 

Adding solution to the tenant app catalog. This API is designed to be executed in the context of the tenant app catalog site.

```
url: /_api/web/tenantappcatalog/Add(overwrite=true, url='test.txt')
method: POST
binaryStringRequestBody: true
body: 'byte array of the file'
```

### Deploy solution package in tenant app catalog

Enable solution to be available to install to specific sites. This API is designed to be executed in the context of the tenant app catalog site.

```
url: /_api/web/tenantappcatalog/AvailableApps/GetById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')/Deploy
```

> [!NOTE]
> This operation is required to be completed after add, before you can install packages to specific sites. 

### Retract solution package in the tenant app catalog

Retract solution to be available from the sites. This API is designed to be executed in the context of the tenant app catalog site.

```
url: /_api/web/tenantappcatalog/AvailableApps/GetById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')/Retract
```

> [!NOTE]
> If you run this operation after you have already installed solutions to site, they will stop working since solution is disabled from the tenant level.

### Remove solution package from tenant app catalog

Remove the solution package from the tenant app catalog. This API is designed to be executed in the context of the tenant app catalog site.

```
url: /_api/web/tenantappcatalog/AvailableApps/GetById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')/Remove
```

> [!NOTE]
> Solution will be also automatically retracted, if that operation has not performed before Remove operation.

### List available packages from tenant app catalog

REST API for getting list of available SharePoint Framework solutions or add-ins in tenant app catalog.

```
url: /_api/web/tenantappcatalog/AvailableApps
method: GET
```

### Details on individual solution package from tenant app catalog

REST API for getting details on individual SharePoint Framework solution or add-in available in the tenant app catalog.

```
url: /_api/web/tenantappcatalog/AvailableApps/GetById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')
method: GET
```

### Install solution package from tenant app catalog to SharePoint site

Install a solution package with specific identifier from tenant app catalog to the site based on URL context. This REST call can be executed in the context of the site where the install operation should happen.

```
url: /_api/web/tenantappcatalog/AvailableApps/GetById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')/Install
method: POST
```

### Upgrade solution package in SharePoint site

Upgrade a solution package from the site to a newer version available in the tenant app catalog. This REST call can be executed in the context of the site where the upgrade operation should happen.

```
url: /_api/web/tenantappcatalog/AvailableApps/GetById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')/Upgrade
method: POST
```

### Uninstall solution package from SharePoint site

Uninstall a solution package from the site. This REST call can be executed in the context of the site where the uninstall operation should happen.

```
url: /_api/web/tenantappcatalog/AvailableApps/GetById('xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxx')/Uninstall
method: POST
```
> [!NOTE]
> When you use the REST API to uninstall solution package from the site, it is not relocated to the recycle bin.


## SharePoint PnP PowerShell cmdlets to programmatically add and deploy SharePoint Apps

Using [PnP PowerShell](https://msdn.microsoft.com/en-us/pnp_powershell/pnp-powershell-overview) you can automate the deployment, publishing, installing, upgrading and retracting your apps. Checkout below chapter to learn more about this cmdlets.

### Adding and publishing your app to the app catalog
Adding your app (.sppkg file, .app file) to the tenant app catalog is a per-requisite to later on make your app available for use in your SharePoint sites. Doing so can be done using below simple cmdlet:

```PowerShell
Add-PnPApp -Path ./myapp.sppkg"
```

Once added you'll need to continue with publishing your app, effectively making the app available to be used by the users of your tenant. Below PnP PowerShell cmdlets shows how this can be done:

```PowerShell
Publish-PnPApp -Identity <app id> -SkipFeatureDeployment
```


> [!NOTE]
> Use the SkipFeatureDeployment flag to allow an app that was developed for tenant wide deployment to be actually available as a tenant wide deployed app.



### Removing the app from the app catalog
Obviously you might also want to remove an earlier added app and that can be done using the following cmdlet:

```PowerShell
Remove-PnPApp -Identity <app id>
```


### Using apps on your site
Once the app was added to the app catalog and published you can continue with installing the app to your site.

```PowerShell
Install-PnPApp -Identity <app id>
```


An added app also needs be upgraded:

```PowerShell
Update-PnPApp -Identity <app id>
```


And you off course also uninstall the app again from your site:

```PowerShell
Uninstall-PnPApp -Identity <app id>
```


> [!NOTE]
> When you uninstall an app from your site the app is completely deleted, so it will not end up in the site's recycle bin.



### Knowing which apps are there for you to use
Getting a list of apps that can be added to the site is possible using:

```PowerShell
Get-PnPApp
```
