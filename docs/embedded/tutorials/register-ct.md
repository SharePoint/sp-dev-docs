---
title: Register Container Types
description: This article explains how to register a new Container Types work.
ms.date: 11/28/2023
ms.localizationpriority: high
---

# Registering a Container Type

## Create a new Container Type for your app

You need to install and import the latest **Microsoft.Online.SharePoint.PowerShell** module.

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
New-SPOContainerType -ContainerTypeName {{ContainerTypeName}} -OwningApplicationId {{OwningApplicationId}} -AzureSubscriptionId {{AzureSubscriptionId}} -ResourceGroup {{ResourceGroup}} -Region {{Region}}​
```

> [!TIP]
> To learn more about trial containers which are limited, but don't incur costs during the development of your application, see [Developer Admin](../concepts/admin-exp/dev-admin.md).

The cmdlet outputs your new `ContainerTypeId`, save this for later use.

## Grant admin consent for your app

You can grant admin consent to an app by visiting the following link with the
`{{consumingTenantId}}` and `{{appId}}` values set.

```http
GET https://login.microsoftonline.com/{{consumingTenantid}}/adminconsent?client_id={{appId}}
```

## Register the new Container Type on your tenant

Use the [Postman collection](https://github.com/microsoft/SharePoint-Embedded-Samples/tree/main/Postman) from the [SharePoint Embedded Samples repo](https://github.com/microsoft/SharePoint-Embedded-Samples) to register the new Container Type on your tenant. This must be done with Application auth.

Set up the [Postman collection](https://github.com/microsoft/SharePoint-Embedded-Samples/tree/main/Postman) collection and its required Environment variables. Then use the **Register Container Type** request within the **Application > Containers** folder to complete the registration.

Once the registration is complete, you can now create Containers and manage their content using either Delegated or Application auth.
