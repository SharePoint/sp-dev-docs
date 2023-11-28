---
title: Register Container Types
description: Describing how Container Types work
ms.date: 11/14/2023
ms.service: sharepoint-online
ms.localizationpriority: high
---

# Registering a Container Type


### Create a new Container Type for your app
You will need to install and import the latest `Microsoft.Online.SharePoint.PowerShell` module in order to complete this next step. You can do this by [downloading and installation the latest .msi](https://www.microsoft.com/en-us/download/details.aspx?id=35588), or you can get it from the PowerShell gallery.

```powershell
Install-Module "Microsoft.Online.SharePoint.PowerShell" # if you don't have it already
# OR
Update-Module "Microsoft.Online.SharePoint.PowerShell" # if you have it already
```

With the module installed, you can run the following to create a new Container Type, replacing the `{{variables}}` as needed. 

```powershell
Import-Module "Microsoft.Online.SharePoint.PowerShell"
Connect-SPOService -Url "{{SPO Admin Url}}"
$dummyGuid = [System.Guid]::NewGuid().ToString()
New-SPOContainerType -ContainerTypeName "{{Name}}" -OwningApplicationId "{{Your new app client Id}}" -AzureSubscriptionId $dummyGuid -ResourceGroup "Dummy" -Region "Dummy"
```
*Note that the above command uses dummy values for billing setup. This only works on developer tenants that have been provided by us. If you want to use Repository
services on your own tenant with real billing enabled, you will need to contact us.*

The cmdlet will output your new ContainerTypeId, save this somewhere for later use. 

### Grant admin consent for your app
You can grant admin consent to an app by visiting the following link with the 
`{{consumingTenantId}}` and `{{appId}}` values set. 

```
GET https://login.microsoftonline.com/{{consumingTenantid}}/adminconsent?client_id={{appId}}
```

### Register the new Container Type on your tenant
Use the [Postman collection](https://github.com/microsoft/SharePoint-Embedded-Samples/tree/main/Postman) from the [SharePoint Embedded Samples repo](https://github.com/microsoft/SharePoint-Embedded-Samples) to register the new Container Type on your tenant. This must be done with Application auth. 

Setup the [Postman collection](../../mslearn/m01-07-hol.md) collection and its required Environment variables. Then use the `Register Container Type` request within the *Application > Containers* folder to complete the registration. 

Once the registration is complete, you can now create `Containers` and manage their content using either Delegated or Application auth. 
