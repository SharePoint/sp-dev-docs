---
title: High-trust configuration scripts for SharePoint
description: Get customizable Windows PowerShell scripts that configure a SharePoint farm to use a high-trust SharePoint Add-in.
ms.date: 12/28/2017
ms.prod: sharepoint
---


# High-trust configuration scripts for SharePoint

The following scripts are used to designate one or more X.509 digital certificates as trusted issuers of access tokens in a staging or production Microsoft SharePoint farm. For a script that is more appropriate for a SharePoint Add-ins development environment, see [Create high-trust SharePoint Add-ins](create-high-trust-sharepoint-add-ins.md). No single set of scripts can work for every SharePoint farm because there are too many different ways that the certificates can be acquired and stored. For that reason, please note the following:

- The scripts are meant to be run in a SharePoint Management Shell on any SharePoint server in the farm.

- These scripts should be thought of as drafts that may need to be customized.

- They are used as part of the overall process of publishing a high-trust SharePoint Add-in. They should only be used by someone familiar with the topics [Creating SharePoint Add-ins that use high-trust authorization](creating-sharepoint-add-ins-that-use-high-trust-authorization.md) and [Package and publish high-trust SharePoint Add-ins](package-and-publish-high-trust-sharepoint-add-ins.md) and the prerequisites listed in them.

- They should be reviewed and customized as needed by someone familiar with the add-in customer's certificate policies.

- The two major scripts that follow, **HighTrustConfig-ForSharedCertificate.ps1** and **HighTrustConfig-ForSingleApp.ps1**, assume that an administrator has acquired a certificate for the remote web application component of the add-in or add-ins, and that the administrator has temporarily stored a .cer version of the certificate (that does not contain the private key) in a folder to which the user accounts for the following IIS application pools on the SharePoint servers have Read access:
    
    - **SecurityTokenServiceApplicationPool**
        
    - The add-in pool that serves the IIS website that hosts the parent SharePoint web application for your test SharePoint website. For the **SharePoint - 80** IIS website, the pool is called **OServerPortalAppPool**.
    
    To find the user account that an application pool is using, open IIS Manager on a SharePoint server and double-click **Application Pools** in the **Connections** pane. The **Identity** column in the **Application Pools** list that opens shows the users for the application pools.

- The instructions for the two major scripts also assume that the certificates have been installed to IIS on servers that host the remote web applications. For instructions, see [Configure the remote web server with the certificate](package-and-publish-high-trust-sharepoint-add-ins.md#ConfigureRemote).
    
See specific usage notes for each script in the following sections.
 

<a name="RootScript"> </a> 

## AddSPRootAuthority.ps1

The certificate of the remote web application component of the high-trust SharePoint Add-in is obtained from either a commercial Certificate Authority (CA) or a domain CA. In either case, the certificate is the lowest link in a chain of certificates, each trusting the one above it, which originates with a root CA (commercial or domain). SharePoint requires that *all* the certificates in the chain be added to SharePoint's list of trusted root authorities. 

The following script can be used to add each certificate in the chain *except the lowest one* to the list. The lowest certificate in the chain, the certificate that is directly bound to the remote web application, is added to the root authorities in one of the major scripts described in later sections.

The parameters for the script are the following:

|**Parameter**|**Value**|
|:-----|:-----|
|-CertPath|The full path and file name of the certificate (the .cer file).|
|-CertName|The name of the certificate. To find the name, view the properties of the certificate.|

For example, in the common scenario where the web application's certificate is issued by an intermediate (also called 'enterprise') CA server and its certificate, in turn, is issued by a root (also called 'standalone') CA server, the script should be run once for each of the certificates of the two CA servers. The following shows this:

```powershell
./AddSPRootAuthority.ps1 -CertPath "\\CertStorage\RootCA.cer" -CertName "Contoso Root CA"

./AddSPRootAuthority.ps1 -CertPath "C:\RegionalCerts\NorthRegion.cer" -CertName "North Region Intermediate CA"
```

If all of certificates of the customer's high-trust SharePoint Add-ins come from the same chain of certificates, as would typically be the case, this script is never used again.

The following is the code for the script. Simply paste it into any text editor or the PowerShell editor (IPowerShell ISE), and save it as AddSPRootAuthority.ps1.
 
> [!NOTE] 
> The file has to be saved as ANSI format, not UTF-8. PowerShell may give syntax errors when it runs a file with a non-ANSI format. NotePad and the PowerShell editor default to saving it as ANSI. If you use any other editor to save the file, be sure you are saving it as ANSI.

```powershell
param(
    [Parameter(Mandatory)][String] $CertName = $(throw "Usage: AddSPRootAuthority.ps1 -CertPath <full path to .cer file> -CertName <name of certificate>"),
    [Parameter(Mandatory)][String] $CertPath
)
# Stop if there's an error
$ErrorActionPreference = "Stop"

# Make the certificate a trusted root authority in SharePoint
$cert = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2($CertPath)
New-SPTrustedRootAuthority -Name $CertName -Certificate $cert

```

<a name="MultipleAppScript"> </a>

## HighTrustConfig-ForSharedCertificate.ps1

The primary tasks of this script are to register the shared certificate of the remote web application components in multiple high-trust SharePoint Add-ins with SharePoint as both a root authority and as a trusted access token issuer. This script is not used if the customer is using separate certificates with each high-trust SharePoint Add-in. For that scenario, see  [HighTrustConfig-ForSingleApp.ps1](#SingleAppScript). If all the add-ins use the same certificate, this script is run only once. If some sets of add-ins use a different certificate from other sets, this script is run once for each set.

The following table describes the parameters and switches for the script. Customization of the script may require changes to this table.

|**Parameter**|**Value**|
|:-----|:-----|
|-CertPath (required)|The full path to the shared *.cer file.|
|-CertName (required)|The name of the shared certificate. To find the name, open IIS on the remote web server that hosts the remote web application. Highlight the _server name_ node and double-click **Certificates**. The certificate is listed by its name.|
|-TokenIssuerFriendlyName<br/>(optional)|A unique friendly name for the token issuer, up to 50 characters. This can be helpful if you are debugging issues with token issuers.<br/><br/>The name must be unique. Including a GUID would ensure that it is, but a GUID uses up 32 of the 50 characters, so consider converting a GUID to a Base 64 string that can be reduced to 22 characters.<br/><br/>If this parameter is not used, the script uses the name `High-Trust Add-ins <base64 version of issuer GUID>`.|

The following is an example of running this script.
 
```powershell
./HighTrustConfig-ForSharedCertificate.ps1 -CertPath "C:\Certs\MyCert.cer" -CertName "My Cert" -TokenIssuerFriendlyName "SharePoint High-Trust Add-ins Token Issuer"
```
 
> [!IMPORTANT] 
> The registration of the certificate as a token issuer is not effective immediately. It may take as long as 24 hours before all the SharePoint servers recognize the new token issuer. Running an iisreset on all the SharePoint servers would cause them to immediately recognize the issuer, if you can do that without disturbing SharePoint users.

<br/>

Start a new file in a text editor, or the PowerShell editor, and copy the following into a text file and save it as **HighTrustConfig-ForSharedCertificate.ps1**. Use ANSI format, not UTF-8.

```powershell
param(
    [Parameter(Mandatory)][String] $CertPath = $(throw "Usage: HighTrustConfig-ForSharedCertificate.ps1 -CertPath <full path to .cer file> -CertName <name of certificate> [-TokenIssuerFriendlyName <friendly name>]"),
    [Parameter(Mandatory)][String] $CertName,
    [Parameter()][String] $TokenIssuerFriendlyName
) 
# Stop if there's an error
$ErrorActionPreference = "Stop"

# Ensure friendly name is short enough
if ($TokenIssuerFriendlyName.Length -gt 50)
{
    throw "-TokenIssuerFriendlyName must be unique name of no more than 50 characters."
} 

# Get the certificate
$certificate = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2($CertPath)

# Make the certificate a trusted root authority in SharePoint
New-SPTrustedRootAuthority -Name $CertName -Certificate $certificate 

# Get the GUID of the authentication realm
$realm = Get-SPAuthenticationRealm

# Generate a unique specific issuer ID
$specificIssuerId = [System.Guid]::NewGuid().ToString()

# Create full issuer ID in the required format
$fullIssuerIdentifier = $specificIssuerId + '@' + $realm 

# Create issuer name
if ($TokenIssuerFriendlyName.Length -ne 0)
{
    $tokenIssuerName = $TokenIssuerFriendlyName
}
else
{
    $tokenIssuerName = "High-Trust Add-ins " + [System.Convert]::ToBase64String($specificIssuerId.ToByteArray()).TrimEnd('=') 
}

# Register the token issuer
New-SPTrustedSecurityTokenIssuer -Name $tokenIssuerName -Certificate $certificate -RegisteredIssuerName $fullIssuerIdentifier -IsTrustBroker

# Output the specific issuer ID to a file in the same folder as this script. The file should be given to the developer of the high-trust SharePoint Add-in.
$specificIssuerId | select * | Out-File -FilePath "SecureTokenIssuerID.txt"
```

> [!TIP] 
> If the script throws an error after the `New-SPTrustedRootAuthority` line has run successfully, the script cannot be rerun until that object has been removed. Use the following cmdlet, where the value of the `-Identity` parameter is the same as was used for the `-CertName` parameter in the script: `Remove-SPTrustedRootAuthority -Identity <certificate name>`

> If the token issuer needs to be removed for any reason, use the following cmdlet: `Remove-SPTrustedSecurityTokenIssuer -Identity <issuer name>`

> If the `-TokenIssuerFriendlyName` parameter was used, use the same value for `-Identity`. 

> If the `-TokenIssuerFriendlyName` parameter was not used, a random GUID is part of the issuer name. To obtain the value needed for `-Identity`, run the following cmdlet. Open the TokenIssuers.txt file that is produced and find the issuer whose name is `High-Trust Add-ins <base64 version of issuer GUID>`. Use that entire name for `-Identity`.

>  ```powershell
>   Get-SPTrustedSecurityTokenIssuer | Out-File -FilePath "TokenIssuers.txt"
>  ```
 

<a name="SingleAppScript"> </a>

## HighTrustConfig-ForSingleApp.ps1

The primary tasks of this script are to register the certificate of the remote web application in a high-trust SharePoint Add-in with SharePoint as both a root authority and as a trusted access token issuer. This script is not used if the customer is using a single certificate for multiple SharePoint Add-ins. For that scenario, see [HighTrustConfig-ForSharedCertificate.ps1](#MultipleAppScript). This script is run for each high-trust SharePoint Add-in.

The following table describes the parameters and switches for the script. Customization of the script may require changes to this table.

|**Parameter**|**Value**|
|:-----|:-----|
|-CertPath (required)|The full path to the shared *.cer file.|
|-CertName (required)|The name of the shared certificate. To find the name, open IIS on the remote web server that hosts the remote web application. Highlight the _server name_ node and double-click **Certificates**. The certificate is listed by its name.|
|-SPAppClientID (required)|The client ID (a GUID) that was used when the SharePoint Add-in was registered on appregnew.aspx.<br/>This is used as the issuer ID for the token issuer. The script ensures that it is lowercase, which is a requirement for issuer IDs.|
|-TokenIssuerFriendlyName<br/>(optional)|A unique friendly name for the token issuer, up to 50 characters. This can be helpful if you are debugging issues with token issuers.<br/>The name must be unique. Consider using the name of the SharePoint Add-in. If this parameter is not used, the script uses the value of `-SPAppClientID` as the name.|

The following is an example of calling the script:

```powershell
 ./HighTrustConfig-ForSingleApp.ps1 -CertPath "\\MyServer\Certs\MyCert.cer" -CertName "My Cert" -SPAppClientID "afe332f4-1f87-4c31-89b8-9c343ad7f24e" -TokenIssuerFriendlyName "Payroll add-in"
```
 
> [!IMPORTANT] 
> The registration of the certificate as a token issuer is not effective immediately. It may take as long as 24 hours before all the SharePoint servers recognize the new token issuer. Running an iisreset on all the SharePoint servers would cause them to immediately recognize the issuer, if you can do that without disturbing SharePoint users.

<br/>

Start a new file in a text editor, or the PowerShell editor, and copy the following into a text file and save it as **HighTrustConfig-ForSingleApp.ps1**. Use ANSI format, not UTF-8.

```powershell
param(
    [Parameter(Mandatory)][String] $CertPath = $(throw "Usage: HighTrustConfig-ForSingleApp.ps1 -CertPath <full path to .cer file> -CertName <name of certificate> [-SPAppClientID <client ID of SharePoint add-in>] [-TokenIssuerFriendlyName <friendly name>]"),
    [Parameter(Mandatory)][String] $CertName,
    [Parameter(Mandatory)][String] $SPAppClientID,
    [Parameter()][String] $TokenIssuerFriendlyName
) 
# Stop if there's an error
$ErrorActionPreference = "Stop"

# Ensure friendly name is short enough
if ($TokenIssuerFriendlyName.Length -gt 50)
{
    throw "-TokenIssuerFriendlyName must be unique name of no more than 50 characters."
} 

# Get the certificate
$certificate = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2($CertPath)

# Make the certificate a trusted root authority in SharePoint
New-SPTrustedRootAuthority -Name $CertName -Certificate $certificate 

# Get the GUID of the authentication realm
$realm = Get-SPAuthenticationRealm

# Must use the client ID as the specific issuer ID. Must be lower-case!
$specificIssuerId = New-Object System.String($SPAppClientID).ToLower()

# Create full issuer ID in the required format
$fullIssuerIdentifier = $specificIssuerId + '@' + $realm 

# Create issuer name
if ($TokenIssuerFriendlyName.Length -ne 0)
{
    $tokenIssuerName = $TokenIssuerFriendlyName
}
else
{
    $tokenIssuerName = $specificIssuerId 
}

# Register the token issuer
New-SPTrustedSecurityTokenIssuer -Name $tokenIssuerName -Certificate $certificate -RegisteredIssuerName $fullIssuerIdentifier

```

<br/>

> [!TIP] 
> The tips at the end of the preceding section apply here as well, but for the `-Identity` parameter of the `Remove-SPTrustedSecurityTokenIssuer` cmdlet, use the client ID if the `-TokenIssuerFriendlyName` parameter was not used with HighTrustConfig-ForSingleApp.ps1.
 
<a name="SiteSubscriptions"> </a>

## Modifications needed for site subscriptions

A site subscription, sometimes called a tenancy, is a subset of the site collections on a SharePoint farm. Site subscriptions are typically created on hosted SharePoint farms. If the customer of the high-trust SharePoint Add-in wants to install the add-in on a farm that has been configured for site subscriptions, whichever of the two HighTrustConfig-*.ps1 scripts is being used needs to be modified. 

Each site subscription has its own realm ID, but the line `$realm = Get-SPAuthenticationRealm` in the scripts always returns the realm of the farm. The access tokens issued by a token issuer are only regarded as valid by SharePoint for the realm that is specified after the "@" character in the full issuer ID. 

To get the correct realm for the website where the add-in is going to be installed, the script has to use the `-ServiceContext` parameter in the call to `Get-SPAuthenticationRealm`. The service context object, in turn, is created from the parent site collection of the target website. 

The following is an example, where `$WebURL` is a string variable with the full URL of a SharePoint website, such as `http://marketing.contoso.com/sites/northteam/july`. This code enables the high-trust add-in to be run, not just on the website specified, but on every website within the same site subscription.

```powershell
$Web = Get-SPWeb $WebURL
$sc = Get-SPServiceContext -Site $Web.Site
$realm = Get-SPAuthenticationRealm -ServiceContext $sc
```

<br/>

To complete the modification of the script, add an additional required parameter `$WebURL` to the param list at the top of the file, like this:

```powershell
param (
    # other parameters omitted 
    [Parameter()][String] $WebURL
)
```

<br/>

Be sure to add a comma after the parameter that precedes the new one. And expand the "Usage" example on the top line to take into account the new parameter with something like this: 

`-WebURL <full URL where SP add-in will be installed>`

<br/>
 
To make the SharePoint Add-in trusted on every site subscription, get a reference to the farm with the `Get-SPFarm` cmdlet, and then iterate through its **SiteSubscriptions** property. Pass each **SPSiteSubscription** object to the `Get-SPServiceContext` cmdlet as the value of the `-SiteSubscription` parameter. The following is an example.

```powershell
$Farm = Get-SPFarm
foreach ($ss in $Farm.SiteSubscriptions)
{
    $sc = Get-SPServiceContext -SiteSubscription $ss
    $realm = Get-SPAuthenticationRealm -ServiceContext $sc

    # All of the lines from the draft script below the call to 
    # Get-SPAuthenticationRealm are inserted here inside the loop.
}
# end of script
```


## See also

- [Package and publish high-trust SharePoint Add-ins](package-and-publish-high-trust-sharepoint-add-ins.md)
- [Creating SharePoint Add-ins that use high-trust authorization](creating-sharepoint-add-ins-that-use-high-trust-authorization.md)
- [Authorization and authentication of SharePoint Add-ins](authorization-and-authentication-of-sharepoint-add-ins.md)