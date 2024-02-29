---
title: Create and Register Container Types
description: This article explains how to register a new Container Types work.
ms.date: 11/28/2023
ms.localizationpriority: high
---

# Create and Register a Container Type

This article will explain how to create and register a billable [Container Type](../concepts/app-concepts/containertypes.md) in SharePoint Embedded.

**Pre-requisites:**
* You must have admin credentials to a M365 developer tenant
* You must register your application in [Microsoft Entra ID](https://learn.microsoft.com/en-us/training/modules/sharepoint-embedded-setup/5-exercise-setup-configure-sharepoint-embedded)



## Set up an Azure Subscription Id, Resource Group, and Region

### 1. Set up Azure Subscription Id
Login to Azure Portal with the admin credentials of your tenant


(TODO: add the extra existing Sub id)

Navigate to [Subscriptions](https://portal.azure.com/#view/Microsoft_Azure_Billing/SubscriptionsBladeV2)
![alt text](./regct-image/azuresubscription.png)

If you do not have an existing subscription set-up, click add
![alt text](./regct-image/suboption.png)

Choose a subscription plan. You will be prompted to add in credit card information that will be billed when you create File Storage Containers. This will set you up with an Azure Subscription Id.

### 2. Set up a Resource Group and Region
Navigate to [Resource Groups](https://portal.azure.com/#view/HubsExtension/BrowseResourceGroups) in Azure Portal.
![alt text](./regct-image/resource-group.png)

Click "Create" to create a resource group and name it something appropiate to your application. Then click Review + Create
![alt text](./regct-image/c-rg.png)

Make sure that:
* The appropiate Azure Subcription is selected for the resource group
* The appropiate physical region is selected. For ex. (US) East US

>> Note: The Region Group does NOT require your Containers to live in that specified region. Your content is not restricted to the specified region

**TODO: Need to explain Region and Resource Group in relation to SharePoint Embedded
**

Click Review + Create and your validation should pass if the inputs are correct.

Now you have all the necessary resources to create a Billable Container Type.

<br></br>

## Create your Container Type

### 3. Use PowerShell to create a new Container Type for your Application
To learn more about the role of Container Types in SharePoint Embedded please refer to the [ContainerTypes](../concepts/app-concepts/containertypes.md) and [App Archictecture](../concepts/app-concepts/app-architecture.md) articles. To learn more about trial containers which are limited, but don't incur costs during the development of your application, see [Developer Admin](../concepts/admin-exp/dev-admin.md).

You need to install and import the latest **Microsoft.Online.SharePoint.PowerShell** module.

```powershell
Install-Module "Microsoft.Online.SharePoint.PowerShell" # if you don't have it already
# OR
Update-Module "Microsoft.Online.SharePoint.PowerShell" # if you have it already
```

Have the following information handy from [Azure Portal](portal.azure.com):
- OwningApplicationId
- AzureSubcriptionId
- Resource Group Name
- Region

With the module installed, you can run the following to create a new Container Type, replacing the `{{variables}}` as needed. For the `ContainerTypeName` choose a name that you would like for your new Container Type. Otherwise fill in the variables with the previous information from Azure Portal.

```powershell
Import-Module "Microsoft.Online.SharePoint.PowerShell"
Connect-SPOService -Url "{{SPO Admin Url}}"
$dummyGuid = [System.Guid]::NewGuid().ToString()
New-SPOContainerType -ContainerTypeName {{ContainerTypeName}} -OwningApplicationId {{OwningApplicationId}} -AzureSubscriptionId {{AzureSubscriptionId}} -ResourceGroup {{ResourceGroup}} -Region {{Region}}​
```

> [!TIP]
> To learn more about trial containers which are limited, but don't incur costs during the development of your application, see [Developer Admin](../concepts/admin-exp/dev-admin.md).

The cmdlet outputs your new `ContainerTypeId`, save this for later use.

### 3. Grant admin consent for your app

TODO: Take this out of the article and put it into the register CT article....
* this is step 1 for register

You can grant admin consent to an app by visiting the following link with the
`{{consumingTenantId}}` and `{{appId}}` values set.

```http
GET https://login.microsoftonline.com/{{consumingTenantid}}/adminconsent?client_id={{appId}}
```

## Register Your Container Type in the Consuming Tenant

### 4. Register the new Container Type

There are two options to register your new Container Type and provide application permissions.

### Calling the Register Container Type API

See the API documentation for Register File Storage Container Type Application Permissions [here](register-api.md)
* Please Note that you will need to use a cert-based access token to make this API call.
  

### Using the SharePoint Embedded Postman Collection

Use the [Postman collection](https://github.com/microsoft/SharePoint-Embedded-Samples/tree/main/Postman) from the [SharePoint Embedded Samples repo](https://github.com/microsoft/SharePoint-Embedded-Samples) to register the new Container Type on your tenant. 
* Please Note: This API call must be done using Application-only auth.

Set up the [Postman collection](https://github.com/microsoft/SharePoint-Embedded-Samples/tree/main/Postman) collection and its required Environment variables. Then use the **Register Container Type** request within the **Application > Containers** folder to complete the registration.

Once the registration is complete, you can now create Containers and manage their content using either Delegated or Application auth.
