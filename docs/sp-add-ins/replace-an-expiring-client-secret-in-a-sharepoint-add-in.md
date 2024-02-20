---
title: Replace an expiring client secret in a SharePoint Add-in
description: Add a new client secret for a SharePoint Add-in that is registered with AppRegNew.aspx.
ms.date: 09/26/2023
ms.localizationpriority: high
ms.service: sharepoint
---

# Replace an expiring client secret in a SharePoint Add-in

[!INCLUDE [sp-add-in-deprecation](../../includes/snippets/sp-add-in-deprecation.md)]

Client secrets for SharePoint Add-ins that are registered by using the **AppRegNew.aspx** page expire after one year. This article explains how to add a new secret for the add-in, and how to create a new client secret that is valid for a customized date.

> [!NOTE]
> This article is about SharePoint Add-ins that are distributed through an organization catalog and registered with the **AppRegNew.aspx** page. If the add-in is registered on the Seller Dashboard, see [Create or update client IDs and secrets in the Seller Dashboard](/office/dev/store/create-or-update-client-ids-and-secrets).

## Recommended maintenance schedule

We recommend creating new secrets a minimum of 30 days before they expire. This gives you a month of time before the old credentials expire.

We recommend only removing secrets a minimum of 7 days after expiration, provided you have removed them from the application configuration.

Removing an expired secret from ACS before you remove it from the application configuration will cause errors.

## Prerequisites

Ensure the following before you begin:

- You have installed Azure Active Directory PowerShell 2.0: [Install Azure Active Directory PowerShell for Graph](/powershell/azure/active-directory/install-adv2)
- You're a tenant administrator for the Microsoft 365 tenant where the add-in was registered with the **AppRegNew.aspx** page.

## Generate a new secret

1. Create a client ID variable with the following line, using the client ID of the SharePoint Add-in as the parameter:

    ```powershell
    $clientId = 'client id of the add-in'
    ```

1. Connect to AzureAD PowerShell.

    ```powershell
    $AzureAdCred = Get-Credential
    Connect-AzureAD -Credential $AzureAdCred # Login to AzureAD
    ```
    
1. Generate a new client secret with the following lines:

    ```powershell
    $endDate = (Get-Date).AddYears(1)
    $app = Get-AzureADServicePrincipal -Filter "AppId eq '$clientId'"
    $objectId = $app.ObjectId

    $base64secret = New-AzureADServicePrincipalPasswordCredential -ObjectId $objectId -EndDate $endDate
    New-AzureADServicePrincipalKeyCredential -ObjectId $objectId -EndDate $endDate -Type Symmetric -Usage Verify -Value $base64secret.Value
    New-AzureADServicePrincipalKeyCredential -ObjectId $objectId -EndDate $endDate -Type Symmetric -Usage Sign -Value $base64secret.Value

    [Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($base64secret.Value))
    $base64secret.EndDate # Print the end date.
    ```

1. The new client secret appears on the Windows PowerShell console. Copy it to a text file. You use it in the next procedure.

    > [!TIP]
    > By default, the secret lasts one year. You can customize by leveraging the example below to specify the EndDateTime.
    > 
    > ``` powershell
    > $endDate = (Get-Date).AddYears(2) # 2 year.
    > ```

## Update the remote web application in Visual Studio to use the new secret

> [!IMPORTANT]
> If your add-in was originally created with a pre-release version of the Microsoft Office Developer Tools for Visual Studio, it may contain an out-of-date version of the **TokenHelper.[cs|vb]** file. If the file does not contain the string `secondaryClientSecret`, it is out of date and must be replaced before you can update the web application with a new secret. To obtain a copy of a release version of the file, you need Visual Studio 2012 or later. Create a new SharePoint Add-in project in Visual Studio. Copy the **TokenHelper.[cs|vb]** file from it to the web application project of your SharePoint Add-in.

1. Open the SharePoint Add-in project in Visual Studio, and open the **web.config** file for the web application project. In the `appSettings` section, there are keys for the client ID and client secret. The following is an example:

    ```xml
    <appSettings>
      <add key="ClientId" value="your client id here" />
      <add key="ClientSecret" value="your old secret here" />
      ... other settings may be here ...
    </appSettings>
    ```

1. Change the name of the `ClientSecret` key to `SecondaryClientSecret` as shown in the following example:

    ```xml
    <add key="SecondaryClientSecret" value="your old secret here" />
    ```

    > [!NOTE]
    > If you are performing this procedure for the first time, there is no `SecondaryClientSecret` property entry at this point in the configuration file. However, if you are performing the procedure for a subsequent client secret expiration (second or third), the property `SecondaryClientSecret` is already present and contains the initial or already expired old secret. In this case, delete the `SecondaryClientSecret` property first before renaming `ClientSecret`.

1. Add a new `ClientSecret` key and give it your new client secret. Your markup should now look like the following:

    ```xml
    <appSettings>
      <add key="ClientId" value="your client id here" />
      <add key="ClientSecret" value="your new secret here" />
      <add key="SecondaryClientSecret" value="your old secret here" />
        ... other settings may be here ...
    </appSettings>
    ```

    > [!IMPORTANT]
    > You will not be able to use the newly generated client secret until the current client secret expires. Therefore, changing the `ClientId` key to the new client secret without the `SecondaryClientSecret` key present will not work. You must follow the  procedure in this article and wait for the previous client secret to expire. You can then remove the SecondaryClientSecret if you want to.

1. If you changed to a new **TokenHelper.[cs|vb]** file, rebuild the project.
1. Republish the web application.

## See also

- [Provider Hosted App fails on SPO](/archive/blogs/sharepointdevelopersupport/provider-hosted-app-fails-on-spo)
- [Creating SharePoint Add-ins that use low-trust authorization](creating-sharepoint-add-ins-that-use-low-trust-authorization.md)
- [Authorization and authentication of SharePoint Add-ins](authorization-and-authentication-of-sharepoint-add-ins.md)
