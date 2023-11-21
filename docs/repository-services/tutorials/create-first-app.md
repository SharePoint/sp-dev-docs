---
title: Create Your First SharePoint repository services Application
description: TODO
ms.date: 11/14/23
ms.localizationpriority: high
---

# Create Your First SharePoint repository services Application

This article explains how to get started developing your first application using SharePoint repository services. When complete, you'll have your first SharePoint repository services storage container and will be ready run the samples and start building your own SharePoint repository services application. 

<br></br>
### Below is the Quickstart from RaaS. We need to update article for Public Preview
<br></br>
<br></br>
<br></br>



## In this article
1. [Prerequisites](#prerequisites)
1. [Automated application setup with PowerShell](#automated-application-setup-with-powershell)
1. [Manual application setup](#manual-application-setup)

## Prerequisites
- Admin user credentials on an M365 Tenant
- Desktop computer with Git installed and this repository cloned
```bash
git clone https://github.com/microsoft/syntex-repository-services.git
```
- Windows PowerShell prompt open as an Administrator
- [Postman account](https://www.postman.com/), ideally with the [desktop client](https://www.postman.com/downloads/) installed

## Automated application setup with PowerShell
The fastest way to get up and running with Syntex repository services is to use the `Initialize-SyntexRepositoryServicesApp.ps1` PowerShell script included in this folder to setup your application. This script will take the following actions. 
- Creates a new Azure AD application registration
- Configures the redirect URLs, scopes, permissions, and secrets on the application
- Creates a new Syntex repository services Container Type for the application
- Applies admin grants for the application on a Consuming Tenant 
- Exports app settings to a Postman environment file that can be used by the Syntex repository services Postman collection

The script can perform each of these tasks individually, but the fastest way to get started is to use the `AcceptAllDefaults` flag to perform all actions. 

1. Open a PowerShell prompt as an **Administrator**, navigate to this folder in your cloned repo and run the following command. 
```powershell
.\Initialize-SyntexRepositoryServicesApp.ps1 -AcceptAllDefaults:$True
```
You will be prompted for administrator credentials on your provided development tenant twice during the script's execution. Once it completes, you should have a new Postman environment file created with a `.json` extension. With this available, you use the [Postman collection](../Postman/) included in this repository to register the new Container Type on your tenant then you'll be able to create your first Syntex repository services container. 

### Register the new Container Type on your tenant
Use the [Postman collection](../Postman/) included in this repo to register the new Container Type on your tenant. More detailed instructions are included in the Postman collection article, but you will need to take the following steps:

1. Import the `SyntexRepositoryServices.postman_collection.json` file into the Postman client. 
1. Import the `Syntex repository services app ({{appId}}).json` environment file into the Postman client. 
1. Use the `Application/Containers/Register ContainerType` request to register the Container Type on your tenant.

Once the Container Type registration is complete, you can now create `Containers` and manage their content using either Delegated or Application auth. 

## Manual application setup
There are several steps required to setup a Syntex repository services application. These steps are somewhat cumbersome at the moment due to the pre-release nature of the product, but we're working to improve them in the near future. Here's an overview of the steps you need to take. 

1. [Create a new app registration in Azure AD](#create-a-new-app-registration-in-azure-ad)
1. [Configure Redirect URIs on your new app](#configure-redirect-uris-on-your-new-app)
1. [Configure custom API Permissions on your new app](#configure-custom-api-permissions-on-your-new-app)
1. [Configure secret and certificate credentials on your new app](#configure-secret-and-certificate-credentials-on-your-new-app)
1. [Create a new Container Type for your app](#create-a-new-container-type-for-your-app)
1. [Grant admin consent for your app](#grant-admin-consent-for-your-app)
1. [Register the new Container Type on your tenant](#register-the-new-container-type-on-your-tenant)


### Create a new app registration in Azure AD
Open the [App registrations page](https://portal.azure.com/#view/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/~/RegisteredApps) within the Azure Active Directory management blade of the Azure Portal and register a new application.


### Configure Redirect URIs on your new app
Within your app's registration page, go to Redirect URIs and setup the following:

```
Web: https://oauth.pstmn.io/v1/browser-callback
Web: https://oauth.pstmn.io/v1/callback
Single-page application: http://localhost
```

### Configure custom API Permissions on your new app
Syntex repository services applications need to have the new Graph `FileStorageContainer.Selected` permission scope and role along with the SharePoint Online `Container.Selected` scope and role. Because of the pre-release nature of the service, these new permissions are currently **hidden** and must be configured by manually editing the application manifest. 

Within your app's registration in the Azure Portal, go to the Manifest page and add the following permissions to your app. 

```json
"requiredResourceAccess": [
		{
			"resourceAppId": "00000003-0000-0ff1-ce00-000000000000",
			"resourceAccess": [
				{
					"id": "4d114b1a-3649-4764-9dfb-be1e236ff371",
					"type": "Scope"
				},
				{
					"id": "19766c1b-905b-43af-8756-06526ab42875",
					"type": "Role"
				}
			]
		},
		{
			"resourceAppId": "00000003-0000-0000-c000-000000000000",
			"resourceAccess": [
				{
					"id": "085ca537-6565-41c2-aca7-db852babc212",
					"type": "Scope"
				},
				{
					"id": "40dc41bc-0f7e-42ff-89bd-d9516947e474",
					"type": "Role"
				}
			]
		}
	]
```

### Configure secret and certificate credentials on your new app
Within your app's registration in the Azure Portal, go to the Certificates & secrets page. 

1. Use the New client secret button to create a secret. Make sure to save it somewhere right away, you won't be able to access it later. 
1. Create a new certificate with the instructions below and add it to the application. 

#### Creating a certificate
The instructions below use PowerShell to create a new self-signed certificate for testing purposes only. Open a PowerShell window as Administrator and run the following, replacing `{{variables}}` as needed. 

```powershell
$cert = New-SelfSignedCertificate -Subject "CN={{Cert name}}" -CertStoreLocation "Cert:\CurrentUser\My" -KeyExportPolicy Exportable -KeySpec Signature -KeyLength 2048 -KeyAlgorithm RSA -HashAlgorithm SHA256
Export-Certificate -Cert $cert -FilePath "{{Cert path.cer}}" -Force

# Private key to Base64
$privateKey = [System.Security.Cryptography.X509Certificates.RSACertificateExtensions]::GetRSAPrivateKey($cert)
$privateKeyBytes = $privateKey.Key.Export([System.Security.Cryptography.CngKeyBlobFormat]::Pkcs8PrivateBlob)
$privateKeyBase64 = [System.Convert]::ToBase64String($privateKeyBytes, [System.Base64FormattingOptions]::InsertLineBreaks)
$privateKeyString = @"
-----BEGIN PRIVATE KEY-----
$privateKeyBase64
-----END PRIVATE KEY-----
"@

# Print private key to output
Write-Host $privateKeyString
```
Upload the created .cer file to your app's registration and save the private key that was outputted in the terminal. 

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
Use the [Postman collection](../Postman/) included in this repo to register the new Container Type on your tenant. This must be done with Application auth. Currently, the Container Type registration API is only available as a SharePoint API, it's not yet on Graph. SharePoint APIs require a certificate-based credential when application auth is used, so you will need to use the certificate you created earlier. 

Follow the steps in the [Postman collection](../Postman/) to setup the collection and its required Environment variables. Then use the `Register Container Type` request within the *Application > Containers* folder to complete the registration. 

Once the registration is complete, you can now create `Containers` and manage their content using either Delegated or Application auth. 