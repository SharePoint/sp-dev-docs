---
title: Create Azure Functions for SharePoint webhooks using an azd template
description: Use Azure Developer cli (azd) to deploy an Azure function app that connects to your SharePoint Online tenant, to register and manage webhooks, and process the notifications from SharePoint.
ms.date: 02/27/2025
ms.localizationpriority: low
---
# Azure Functions for SharePoint webhooks using azd

[Azure Developer CLI (azd)](https://aka.ms/azd) is an open-source tool that accelerates provisioning and deploying app resources in Azure.  

This article uses the [Azure function app for SharePoint webhooks public template](https://github.com/Azure-Samples/azd-functions-sharepoint-webhooks) to deploy an Azure function app that connects to your SharePoint Online tenant, to register and manage [webhooks](overview-sharepoint-webhooks.md), and process the notifications from SharePoint.

## Prerequisites

- [Node.js 20](https://www.nodejs.org/)
- [Azure Functions Core Tools](/azure/azure-functions/functions-run-local)
- [Azure Developer CLI (azd)](/azure/developer/azure-developer-cli/install-azd)
- An Azure subscription that trusts the same Microsoft Entra ID directory as the SharePoint tenant

## Permissions required to provision the resources in Azure

The account running **azd** must have at least the following roles to successfully provision the resources:

- Azure role **[Contributor](/azure/role-based-access-control/built-in-roles/privileged#contributor)**: To create all the resources needed
- Azure role **[Role Based Access Control Administrator](/azure/role-based-access-control/built-in-roles/privileged#role-based-access-control-administrator)**: To assign roles (to access the storage account and Application Insights) to the managed identity of the function app

## Deploy the function app in Azure

1. Run **azd init** from an empty local (root) folder:

    ```console
    azd init --template azd-functions-sharepoint-webhooks
    ```

    Enter an environment name, such as **spofuncs-quickstart** when prompted. In **azd**, the environment is used to maintain a unique deployment context for your app.

1. Open the file **infra/main.parameters.json**, and set the variables `TenantPrefix` and `siteRelativePath` to match your SharePoint tenant.

   Review the article on [Manage environment variables](/azure/developer/azure-developer-cli/manage-environment-variables) to manage the azd's environment variables.

1. Finally, run the command **azd up** to build the app, provision the resources in Azure and deploy the app package.

## Grant the function app access to SharePoint Online

The authentication to SharePoint is done using `DefaultAzureCredential`, so the credential used depends on whether the function app runs locally, or in Azure.  

If you never heard about `DefaultAzureCredential`, you should familiarize yourself with its concept by referring to the section **Use DefaultAzureCredential for flexibility** in [Credential chains in the Azure Identity client library for JavaScript](/azure/developer/javascript/sdk/authentication/credential-chains).

### Using its managed identity

`DefaultAzureCredential` will use a managed identity to authenticate to SharePoint. This may be the existing, system-assigned managed identity of the function app service or a user-assigned managed identity.  

This tutorial assumes the system-assigned managed identity is used.

#### Grant the SharePoint API permission Sites.Selected to the managed identity

Navigate to your function app in the [Azure portal](https://portal.azure.com/#blade/HubsExtension/BrowseResourceBlade/resourceType/Microsoft.Web%2Fsites/kind/functionapp) > select **Identity** and note the **Object (principal) ID** of the system-assigned managed identity.  

In this tutorial, it is **d3e8dc41-94f2-4b0f-82ff-ed03c363f0f8**.  

Then, use one of the scripts below to grant this identity the app-only permission **Sites.Selected** on the SharePoint API:

> [!IMPORTANT]
> The scripts below require at least the delegated permission [`AppRoleAssignment.ReadWrite.All`](/graph/permissions-reference#approleassignmentreadwriteall) (requires admin consent)

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

Navigate to the [Enterprise applications](https://entra.microsoft.com/#view/Microsoft_AAD_IAM/StartboardApplicationsMenuBlade/) > Set the **Application type** filter to **Managed Identities** > select your managed identity and note its **Application ID**.  

> [!NOTE]
> In this tutorial, it is **3150363e-afbe-421f-9785-9d5404c5ae34**.  

Then, use one of the scripts below to grant it the app-only permission **manage** (minimum required to register a webhook) on a specific SharePoint site:

> [!IMPORTANT]  
> The app registration used to run those scripts must have at least the following permissions:
>
> - Delegated permission **Application.ReadWrite.All** in the Graph API (requires admin consent)
> - Delegated permission **AllSites.FullControl** in the SharePoint API (requires admin consent)

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

For security reasons, when running in Azure, the function app requires an app key to pass in the query string parameter **code**. The app keys are found in the function app service's **App Keys** keys page.  

Most HTTP functions take optional parameters `TenantPrefix` and `siteRelativePath`. If they are not specified, the values in the app's environment variables are used.  

Below is a sample script in PowerShell to call the function app:

```powershell
# Edit those variables to match your environment
$funchost = "YOUR_FUNC_APP_NAME"
$code = "YOUR_HOST_KEY"
$listTitle = "YOUR_SHAREPOINT_LIST"
$notificationUrl = "https://${funchost}.azurewebsites.net/api/webhooks/service?code=${code}"

# List all the webhooks registered on a list
Invoke-RestMethod -Method GET -Uri "https://${funchost}.azurewebsites.net/api/webhooks/list?code=${code}&listTitle=${listTitle}"

# Register a webhook in a list
Invoke-RestMethod -Method POST -Uri "https://${funchost}.azurewebsites.net/api/webhooks/register?code=${code}&listTitle=${listTitle}&notificationUrl=${notificationUrl}"

# Show this webhook registered on a list
Invoke-RestMethod -Method GET -Uri "https://${funchost}.azurewebsites.net/api/webhooks/show?code=${code}&listTitle=${listTitle}&notificationUrl=${notificationUrl}"

# Remove the webhook from a list
# Step 1: Call the function /webhooks/show to get the webhook id
$webhookId = $(Invoke-RestMethod -Method GET -Uri "https://${funchost}.azurewebsites.net/api/webhooks/show?code=${code}&listTitle=${listTitle}&notificationUrl=${notificationUrl}").Id
# Step 2: Call the function /webhooks/remove and pass the webhook id
Invoke-RestMethod -Method POST -Uri "https://${funchost}.azurewebsites.net/api/webhooks/remove?code=${code}&listTitle=${listTitle}&webhookId=${webhookId}"
```

## Cleanup the resources in Azure

You can delete all the resources this project created in Azure, by running the command **azd down**.  

Alternatively, you can delete the resource group, that has the azd environment's name by default.

## See also

- [Overview of SharePoint webhooks](overview-sharepoint-webhooks.md)
