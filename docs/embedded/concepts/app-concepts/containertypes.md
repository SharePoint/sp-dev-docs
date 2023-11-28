---
title: Trial ContainerType
description: Descrbing a Trial Container Option
ms.date: 11/14/2023
ms.service: sharepoint-online
ms.localizationpriority: high
---


# SharePoint Embedded Container Types

In SharePoint Embedded, all files and documents are stored in Containers and each Container has a specific Container Type.  

A Container Type is a SharePoint Embedded-Container level property stamped on every instance of a Container. An applications will own one or more Container Types to create Containers. An application can have multiple Containers that share the same Container Type. For instance, it is entirely possible for an Application to own only one Container Type but have multiple Containers of that type.  

The primary function of a Container Type  is to identify the application workloads that can access a specific Container. Container Types define the permissions and controls and manage access for all Containers of that type. This includes read/write access to various Containers. Container Types are important since they are how SharePoint Embedded supports and authorizes requests. 

In the Microsoft ecosystem, each application needs to be registered with Microsoft Entra to obtain a unique Azure ID (referred here as AppID or ClientID). This rule applies to all variants of the same app. For example, if a developer launches an application on the Web, iOS, and Android, that developer would register these variants as three separate apps on Azure. This will generate three AppIDs. The same Containers can be accessed by all three apps. 
 

#### Here are some general guidelines for Container Types: 

Each Container is associated to one immutable Container Type; and each Container Type is associated to at least one AppID and a set of Container operations on SharePoint Embedded (permission mapping). The permission mapping determines the operations an application has permission to invoke against all Container instances of a specific type. 

Each Container is tied to one and only one Container type. Container Types are immutable. 

Each Container Type is tied to at least one application. Similarly, every application has at least one Container Type. Association between Container Type and application can be changed 

Each Container Type and application pairing are mapped to a set of permissions. This set of permissions determines the operations an application can invoke against all Containers of that Container type. 

An application can only access Containers it is authorized to access. These permissions are defined by a Container Type 



# SharePoint Embedded Trial Containers 

To aid customers with the development of applications to be used with SharePoint Embedded, we are allowing the creation of a Trial Container Type. Customers will be allowed 1 Trial Container Type at any time in their tenant. The Trial Container Type will *not* be linked to billing and can only be consumed by the Partner tenant.  

> Note: The Trial Container Type is the only container type that is restricted to the Partner (creating) tenant and cannot be shared with other consuming tenants. 

Tenants can create a maximum of 5 container types. Trial Container Types do not count against the maximum number of Container Types that a Partner Tenant can create. 

Once the Trial Container Type has been created, the customer can create as many as 5 active Containers of that type. Trial Containers will be allotted 1GB of storage space. A Trial Container Type will expire after 30 days. Once the Trial Container Type is expired, access will be lost to all Containers created using that container type. A new Trial container type can be created; however, it will require the deletion of ALL existing Trial Containers. 

To delete a trial Container Type, you must remove all Containers of that type first, including from the recycle bin. You can run the following PowerShell commands to purge a container and the Trial Container Type: 

[`Remove-SPOContainer`](https://learn.microsoft.com/powershell/module/sharepoint-online/remove-spocontainer?view=sharepoint-ps)

[`Remove-SPODeletedContainer`](https://learn.microsoft.com/powershell/module/sharepoint-online/remove-spodeletedcontainer?view=sharepoint-ps)

`Remove-SPOContainerType`

> Note: the command `Remove-SPOContainerType` will only delete trial container types. 

 
Customers can choose to create a new Trial Container Type at any time, if the above steps are performed to remove any pre-existing Trial container type, are performed. The Trial container type is valid for up to 30 days but can be removed at any time within the 30-day window. 

Also note that it is *not possible* to convert a Trial Container Type and/or the associated Containers to a Standard Container Type. 


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
Use the [Postman collection](../../mslearn/m01-07-hol.md) included in this repo to register the new Container Type on your tenant. This must be done with Application auth. Currently, the Container Type registration API is only available as a SharePoint API, it's not yet on Graph. SharePoint APIs require a certificate-based credential when application auth is used, so you will need to use the certificate you created earlier. 

Setup the [Postman collection](../../mslearn/m01-07-hol.md) collection and its required Environment variables. Then use the `Register Container Type` request within the *Application > Containers* folder to complete the registration. 

Once the registration is complete, you can now create `Containers` and manage their content using either Delegated or Application auth. 
