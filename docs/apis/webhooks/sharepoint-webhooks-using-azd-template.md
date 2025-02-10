---
title: Create Azure functions for SharePoint webhooks using an azd template
description: Use Azure Developer cli (azd) to deploy an Azure function app that connects to your SharePoint Online tenant, to register and manage webhooks, and process the notifications from SharePoint.
ms.date: 02/05/2025
ms.localizationpriority: low
---
# Azure functions for SharePoint webhooks using azd

[Azure Developer CLI (azd)](https://aka.ms/azd) is an open-source tool that accelerates provisioning and deploying app resources in Azure.  
This article uses [this azd template](https://github.com/Azure-Samples/azd-functions-sharepoint-webhooks) to deploy an Azure function app that connects to your SharePoint Online tenant, to register and manage [webhooks](https://learn.microsoft.com/sharepoint/dev/apis/webhooks/overview-sharepoint-webhooks), and process the notifications from SharePoint.

## Overview

The function app uses the [Flex Consumption plan](https://learn.microsoft.com/azure/azure-functions/flex-consumption-plan), hosts multiple HTTP-triggered functions written in TypeScript, and uses [PnPjs](https://pnp.github.io/pnpjs/) to communicate with SharePoint.  
When receiving a notification from SharePoint, the function gets all the changes for the past 15 minutes on the list that triggered it, and adds an item to the list `webhookHistory` (created if it does not exist).

## Security of the Azure resources

The resources are deployed in Azure with a high level of security:

- The function app connects to the storage account using a private endpoint.
- No public network access is allowed on the storage account.
- All the permissions are granted to the function app's managed identity (no secret, access key or legacy access policy is used).
- All the functions require an app key to be called.

## Prerequisites

+ [Node.js 20](https://www.nodejs.org/)
+ [Azure Functions Core Tools](https://learn.microsoft.com/azure/azure-functions/functions-run-local?pivots=programming-language-typescript#install-the-azure-functions-core-tools)
+ [Azure Developer CLI (azd)](https://learn.microsoft.com/azure/developer/azure-developer-cli/install-azd)

## Permissions required to provision the resources in Azure

The account running `azd` must have at least the following roles to successfully provision the resources:

+ Azure role [`Contributor`](https://learn.microsoft.com/azure/role-based-access-control/built-in-roles/privileged#contributor): To create all the resources needed
+ Azure role [`Role Based Access Control Administrator`](https://learn.microsoft.com/azure/role-based-access-control/built-in-roles/privileged#role-based-access-control-administrator): To assign roles (to access the storage account and Application Insights) to the managed identity of the function app

## Initialize the project

1. Run `azd init` from an empty local (root) folder:

    ```shell
    azd init --template azd-functions-sharepoint-webhooks
    ```

    Supply an environment name, such as `spofuncs-quickstart` when prompted. In `azd`, the environment is used to maintain a unique deployment context for your app.


1. Add a file named `local.settings.json` in the root of your project with the following contents, and replace the placeholders with your own values:

   ```json
   {
      "IsEncrypted": false,
      "Values": {
         "AzureWebJobsStorage": "UseDevelopmentStorage=true",
         "FUNCTIONS_WORKER_RUNTIME": "node",
         "TenantPrefix": "YOUR_SHAREPOINT_TENANT_PREFIX",
         "SiteRelativePath": "/sites/YOUR_SHAREPOINT_SITE_NAME"
      }
   }
   ```

1. Review the file `infra/main.parameters.json` to customize the parameters used for provisioning the resources in Azure. Review [this article](https://learn.microsoft.com/azure/developer/azure-developer-cli/manage-environment-variables) to manage the azd's environment variables.

   Important: Ensure the values for `TenantPrefix` and `SiteRelativePath` are identical between the files `local.settings.json` (used when running the function app locally) and `infra\main.parameters.json` (used to set the environment variables in Azure).

1. Install the dependencies and build the function app:

   ```shell
   npm install
   npm run build
   ```

## Run the function app

It can run either locally or in Azure:

- To run the function app locally: Run `npm run start`.
- To provision the resources in Azure and deploy the function app: Run `azd up`.

## Grant the function app access to SharePoint Online

The authentication to SharePoint is done using `DefaultAzureCredential`, so the credential used depends if the function app runs locally, or in Azure.  
If you never heard about `DefaultAzureCredential`, you should familirize yourself with its concept by reading [this article](https://aka.ms/azsdk/js/identity/credential-chains#use-defaultazurecredential-for-flexibility).

### When it runs on your local environment

`DefaultAzureCredential` will preferentially use the delegated credentials of `Azure CLI` to authenticate to SharePoint.  
Use the [Microsoft Graph PowerShell](https://learn.microsoft.com/powershell/microsoftgraph/) script below to grant the SharePoint delegated permission `AllSites.Manage` to the `Azure CLI`'s service principal:

```powershell
Connect-MgGraph -Scope "Application.Read.All", "DelegatedPermissionGrant.ReadWrite.All"
$scopeName = "AllSites.Manage"
$requestorAppPrincipalObj = Get-MgServicePrincipal -Filter "displayName eq 'Microsoft Azure CLI'"
$resourceAppPrincipalObj = Get-MgServicePrincipal -Filter "displayName eq 'Office 365 SharePoint Online'"

$params = @{
  clientId = $requestorAppPrincipalObj.Id
  consentType = "AllPrincipals"
  resourceId = $resourceAppPrincipalObj.Id
  scope = $scopeName
}
New-MgOauth2PermissionGrant -BodyParameter $params
```

> [!WARNING]  
> - The service principal for `Azure CLI` may not exist in your tenant. If so, check [this issue](https://github.com/Azure/azure-cli/issues/28628) to add it.
> - The scope [`DelegatedPermissionGrant.ReadWrite.All`](https://learn.microsoft.com/graph/permissions-reference#approleassignmentreadwriteall) is necessary to run the script, and requires the admin consent.

> [!NOTE]  
> `AllSites.Manage` is the minimum permission required to register a webhook.
> `Sites.Selected` cannot be used because it does not exist as a delegated permission in the SharePoint API.

### When it runs in Azure

`DefaultAzureCredential` will use a managed identity to authenticate to SharePoint. This may be the existing, system-assigned managed identity of the function app service, or a user-assigned managed identity.  
This tutorial will assume that the system-assigned managed identity is used.

#### Grant the SharePoint API permission Sites.Selected to the managed identity

Navigate to your function app in [the Azure portal](https://portal.azure.com/#blade/HubsExtension/BrowseResourceBlade/resourceType/Microsoft.Web%2Fsites/kind/functionapp) > click `Identity` and note the `Object (principal) ID` of the system-assigned managed identity.  
In this tutorial, it is `d3e8dc41-94f2-4b0f-82ff-ed03c363f0f8`.  
Then, use one of the scripts below to grant this identity the app-only permission `Sites.Selected` on the SharePoint API:

> [!IMPORTANT]
> The scripts below require at least the delegated permission [`AppRoleAssignment.ReadWrite.All`](https://learn.microsoft.com/graph/permissions-reference#approleassignmentreadwriteall) (requires admin consent)

<details>
  <summary>Using the Microsoft Graph PowerShell SDK</summary>

```powershell
# This script requires the modules Microsoft.Graph.Authentication, Microsoft.Graph.Applications, Microsoft.Graph.Identity.SignIns, which can be installed with the cmdlet Install-Module below:
# Install-Module Microsoft.Graph.Authentication, Microsoft.Graph.Applications, Microsoft.Graph.Identity.SignIns -Scope CurrentUser -Repository PSGallery -Force
Connect-MgGraph -Scope "Application.Read.All", "AppRoleAssignment.ReadWrite.All"
$managedIdentityObjectId = "d3e8dc41-94f2-4b0f-82ff-ed03c363f0f8" # 'Object (principal) ID' of the managed identity
$scopeName = "Sites.Selected"
$resourceAppPrincipalObj = Get-MgServicePrincipal -Filter "displayName eq 'Office 365 SharePoint Online'" # SPO
$targetAppPrincipalAppRole = $resourceAppPrincipalObj.AppRoles | ? Value -eq $scopeName

$appRoleAssignment = @{
    "principalId" = $managedIdentityObjectId
    "resourceId"  = $resourceAppPrincipalObj.Id
    "appRoleId"   = $targetAppPrincipalAppRole.Id
}
New-MgServicePrincipalAppRoleAssignment -ServicePrincipalId $managedIdentityObjectId -BodyParameter $appRoleAssignment | Format-List
```

</details>
   
<details>
  <summary>Using az cli in Bash</summary>

```bash
managedIdentityObjectId="d3e8dc41-94f2-4b0f-82ff-ed03c363f0f8" # 'Object (principal) ID' of the managed identity
resourceServicePrincipalId=$(az ad sp list --query '[].[id]' --filter "displayName eq 'Office 365 SharePoint Online'" -o tsv)
resourceServicePrincipalAppRoleId="$(az ad sp show --id $resourceServicePrincipalId --query "appRoles[?starts_with(value, 'Sites.Selected')].[id]" -o tsv)"

az rest --method POST --uri "https://graph.microsoft.com/v1.0/servicePrincipals/${managedIdentityObjectId}/appRoleAssignments" --headers 'Content-Type=application/json' --body "{ 'principalId': '${managedIdentityObjectId}', 'resourceId': '${resourceServicePrincipalId}', 'appRoleId': '${resourceServicePrincipalAppRoleId}' }"
```

</details>

#### Grant the managed identity effective access to a SharePoint site

Navigate to the [Enterprise applications](https://entra.microsoft.com/#view/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/) > Set the filter `Application type` to `Managed Identities` > Click on your managed identity and note its `Application ID`.  
In this tutorial, it is `3150363e-afbe-421f-9785-9d5404c5ae34`.  
Then, use one of the scripts below to grant it the app-only permission `manage` (minimum required to register a webhook) on a specific SharePoint site:

> [!IMPORTANT]  
> The app registration used to run those scripts must have at least the following permissions:
> - Delegated permission `Application.ReadWrite.All` in the Graph API (requires admin consent)
> - Delegated permission `AllSites.FullControl` in the SharePoint API (requires admin consent)

<details>
  <summary>Using PnP PowerShell</summary>

[PnP PowerShell](https://pnp.github.io/powershell/cmdlets/Grant-PnPAzureADAppSitePermission.html)

```powershell
Connect-PnPOnline -Url "https://YOUR_SHAREPOINT_TENANT_PREFIX.sharepoint.com/sites/YOUR_SHAREPOINT_SITE_NAME" -Interactive -ClientId "YOUR_PNP_APP_CLIENT_ID"
Grant-PnPAzureADAppSitePermission -AppId "3150363e-afbe-421f-9785-9d5404c5ae34" -DisplayName "YOUR_FUNC_APP_NAME" -Permissions Manage
```

</details>
   
<details>
  <summary>Using m365 cli in Bash</summary>

[m365 cli](https://pnp.github.io/cli-microsoft365/cmd/spo/site/site-apppermission-add/)

```bash
targetapp="3150363e-afbe-421f-9785-9d5404c5ae34"
siteUrl="https://YOUR_SHAREPOINT_TENANT_PREFIX.sharepoint.com/sites/YOUR_SHAREPOINT_SITE_NAME"
m365 spo site apppermission add --appId $targetapp --permission manage --siteUrl $siteUrl
```

</details>

## Call the function app

For security reasons, when running in Azure, function app requires an app key to pass in query string parameter `code`. The app keys can be found in the function app service > App Keys.  
Most of the HTTP functions take optional parameters `tenantPrefix` and `siteRelativePath`. If they are not specified, the values set in the app's environment variables will be used.

### Using API debugger Bruno

Review [this README](http-requests-collection/README.md) for more information.

### Using vscode extension RestClient

You can use the Visual Studio Code extension [`REST Client`](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) to execute the requests in the .http file.  
It takes parameters from a .env file on the same folder. You can create it based on the sample files `azure.env.example` and `local.env.example`.

### Using curl

Below is a sample script in Bash that calls the function app in Azure using `curl`:

```bash
# Edit those variables to fit your app function
funchost="YOUR_FUNC_APP_NAME"
code="YOUR_HOST_KEY"
notificationUrl="https://${funchost}.azurewebsites.net/api/webhooks/service?code=${code}"
listTitle="YOUR_SHAREPOINT_LIST"

# List all the webhooks registered on a list
curl "https://${funchost}.azurewebsites.net/api/webhooks/list?code=${code}&listTitle=${listTitle}"

# Register a webhook
curl -X POST "https://${funchost}.azurewebsites.net/api/webhooks/register?code=${code}&listTitle=${listTitle}&notificationUrl=${notificationUrl}"

# Show this webhook registered on a list
curl "https://${funchost}.azurewebsites.net/api/webhooks/show?code=${code}&listTitle=${listTitle}&notificationUrl=${notificationUrl}"

# Remove the webhook from the list
# Step 1: Get the webhook id in the output of the function /webhooks/show
webhookId=$(curl -s "https://${funchost}.azurewebsites.net/api/webhooks/show?code=${code}&listTitle=${listTitle}&notificationUrl=${notificationUrl}" | \
    python3 -c "import sys, json; document = json.load(sys.stdin); document and print(document['id'])")
# Step 2: Call function /webhooks/remove and pass the webhookId
curl -X POST "https://${funchost}.azurewebsites.net/api/webhooks/remove?code=${code}&listTitle=${listTitle}&webhookId=${webhookId}"
```

The same script, which calls the function app when it runs in your local environment:

```bash
# Edit those variables to fit your app function
funchost="YOUR_FUNC_APP_NAME"
code="YOUR_HOST_KEY"
notificationUrl="https://${funchost}.azurewebsites.net/api/webhooks/service?code=${code}"
listTitle="YOUR_SHAREPOINT_LIST"

# List all the webhooks registered on a list
curl "http://localhost:7071/api/webhooks/list?listTitle=${listTitle}"

# Register a webhook
curl -X POST "http://localhost:7071/api/webhooks/register?listTitle=${listTitle}&notificationUrl=${notificationUrl}"

# Show this webhook registered on a list
curl "http://localhost:7071/api/webhooks/show?listTitle=${listTitle}&notificationUrl=${notificationUrl}"

# Remove the webhook from the list
# Step 1: Get the webhook id in the output of the function /webhooks/show
webhookId=$(curl -s "http://localhost:7071/api/webhooks/show?listTitle=${listTitle}&notificationUrl=${notificationUrl}" | \
    python3 -c "import sys, json; document = json.load(sys.stdin); document and print(document['id'])")
# Step 2: Call function /webhooks/remove and pass the webhookId
curl -X POST "http://localhost:7071/api/webhooks/remove?listTitle=${listTitle}&webhookId=${webhookId}"
```

## Known issues

The Flex Consumption plan is currently in preview, be aware about its [current limitations and issues](https://learn.microsoft.com/azure/azure-functions/flex-consumption-plan#considerations).

## Cleanup the resources in Azure

You can delete all the resources this project created in Azure, by running the command `azd down`.  
Alternatively, you can delete the resource group, which has the azd environment's name by default.

## See also

- [Overview of SharePoint webhooks](overview-sharepoint-webhooks.md)
