---
title: Use an Office 365 SharePoint site to authorize provider-hosted add-ins on an on-premises SharePoint site
description: Create an environment where you can use ACS to establish trust between a provider-hosted add-in and an on-premises SharePoint farm, just as you would if you were developing add-ins for an Office 365 SharePoint site.
ms.date: 12/28/2017
ms.prod: sharepoint
localization_priority: Normal
---


# Use an Office 365 SharePoint site to authorize provider-hosted add-ins on an on-premises SharePoint site

<a name="Prerequisites"> </a> 

## Prerequisites

Be sure that you have the following:

- An on-premises SharePoint development environment. See [Set up an on-premises development environment for SharePoint Add-ins](set-up-an-on-premises-development-environment-for-sharepoint-add-ins.md).

- An Office 365 SharePoint site. If don't have one yet and you want to set up a development environment quickly, you can  [Set up a development environment for SharePoint Add-ins on Office 365](set-up-a-development-environment-for-sharepoint-add-ins-on-office-365.md).

- [Visual Studio](https://docs.microsoft.com/en-us/visualstudio/install/install-visual-studio) installed either remotely or on the computer where you installed SharePoint.
    
- Visual Studio includes the **Microsoft Office Developer Tools for Visual Studio**. Sometimes a version of the tools is released between updates of Visual Studio. To be sure that you have the latest version of the tools, run the [installer for Office Developer Tools for Visual Studio 2013](http://aka.ms/OfficeDevToolsForVS2013), or the [installer for Office Developer Tools for Visual Studio 2015](http://aka.ms/OfficeDevToolsForVS2015). 

- The 64-bit edition of [Microsoft Online Services Sign-In Assistant](https://www.microsoft.com/en-us/download/details.aspx?id=41950) installed on the computer where you installed SharePoint.
    
-  [Microsoft Online Services Module for Windows PowerShell (64-bit)](https://docs.microsoft.com/en-us/powershell/module/Azuread/?view=azureadps-2.0) installed on the computer where you installed SharePoint.
    
Reference [earlier versions of Visual Studio](http://msdn.microsoft.com/library/da049020-cfda-40d7-8ff4-7492772b620f.aspx) or other [Visual Studio documentation](https://docs.microsoft.com/en-us/visualstudio/). 

[!IMPORTANT] ACS retirement in the Azure Active Directory side does not impact this functionality for SharePoint. See more details from following article - [Impact of Azure Access Control retirement for SharePoint add-ins](https://developer.microsoft.com/en-us/sharepoint/blogs/impact-of-azure-access-control-deprecation-for-sharepoint-add-ins/).

<a name="Certificate"> </a>

## Create a certificate and make it the security token service (STS) certificate of your on-premises installation of SharePoint

You'll need to replace the default security token service (STS) certificate of your on-premises installation of SharePoint with your own certificate. This article gives you an example of how to create and export a test certificate by using the **Create Self Signed Certificate** option in IIS. You can also use a commercial certificate issued by a certificate authority.

- [Create a test .pfx certificate file first, and then a corresponding test .cer file](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/software-publisher-certificate) 
 
- [You can also use the MakeCert test program to generate a test X.509 certificate](https://msdn.microsoft.com/en-us/library/ms537364(VS.85).aspx)
 
### To create a test .pfx certificate file

1. In IIS Manager, select the _ServerName_ node in the tree view on the left.
    
2. Select **Server Certificates**, as shown in the following figure.
    
    ![Server Certificates option in IIS](../images/e38f9b7f-59a3-468c-bcde-a48272f1f217.gif)

3. Select the **Create Self-Signed Certificate** link in the set of links on the right.
    
    ![Create Self-Signed Cerificate link](../images/3f0aae5a-e58b-4ec8-b67f-0024abfa2dab.gif)

4. Name the certificate **SampleCert**, and then select **OK**.
     
5. Right-click the certificate, and then select **Export**.
    
    ![Exporting a test certificate](../images/997021de-c60c-46b0-961f-7e1e63c0f619.gif)

6. Export the file to a location you choose and give it a password. In this example, the password is **password**. In a production environment, use a strong password (for more information, see [Guidelines for creating strong passwords](https://msdn.microsoft.com/en-us/library/bb416446.aspx) and [Strong passwords](https://docs.microsoft.com/en-us/sql/relational-databases/security/strong-passwords)).
    
<a name="STSCertificate"> </a>

## Make your certificate the STS certificate for your on-premises installation of SharePoint

Now that you have a certificate, you make it the STS certificate for your on-premises SharePoint farm. 
 
Open the SharePoint Management Shell as an administrator, and run this Windows PowerShell script:

```powershell
$certPrKPath = "c:\location of your .pfx file"
$certPassword = "password"
$stsCertificate = New-Object System.Security.Cryptography.X509Certificates.X509Certificate2 $certPrKPath, $certPassword, 20
Set-SPSecurityTokenServiceConfig -ImportSigningCertificate $stsCertificate -confirm:$false

```

<a name="ConnectAAD"> </a>

## Configure your on-premises installation of SharePoint to use ACS

The following figure shows the four steps to enable the connections you need within the overall architecture of a provider-hosted add-in that runs on an on-premises site. It also shows the flow of OAuth tokens when the add-in is running.

**Make ACS work with an on-premises installation of SharePoint by using an Office 365 SharePoint site**

![Make ACS work with an on-premises installation of SharePoint by using an Office 365 site](../images/SP15_OnPremACSArchitecture.png)

1. Create an ACS proxy in your on-premises SharePoint farm.

2. Install the signing certificate of your on-premises server to your Office 365 tenancy.

3. Add the fully qualified domain names of the sites on your SharePoint farm where you want to run add-ins to the service principal name collection in your Office 365 tenancy.

4. Create an add-in management proxy on your SharePoint farm.

The following function does all the work to configure your on-premises SharePoint site to use ACS. You can also use this function to do some cleanup tasks if you need to remove previous configurations. There are a variety of ways to run the function in PowerShell. The following is one method.
 
### To configure your on-premises SharePoint site to use ACS

1. On the on-premises SharePoint server, copy the code in the function into a text file, and save it with the name MySharePointFunctions.psm1 to one or the other of the following folders (not both). You may have to create parts of the path, if it includes folders that do not already exist. Notice that in both cases, the lowest folder in the path has to have the same name as the file.

    > [!TIP] 
    > The file has to be saved as ANSI format, not UTF-8. PowerShell may give syntax errors when it loads a file with a non-ANSI format. Windows NotePad defaults to saving it as ANSI. If you use any other editor to save the file, be sure you are saving it as ANSI.

    - `C:\users\username\documents\windowspowershell\modules\MySharePointFunctions`, where _username_ is the farm administrator who is executing the file.
    
    - `C:\windows\system32\windowspowershell\V1.0\modules\MySharePointFunctions`
    
 
2. Open the SharePoint Management Shell as an administrator and run the following cmdlet to verify that the MySharePointFunctions module is listed.
    
    ```powershell 
    Get-Module -listavailable
    ```

3. Run the following cmdlet to import the module.
    
    ```powershell
    Import-Module MySharePointFunctions
    ```

4. Run the following cmdlet to verify that the Connect-SPFarmToAAD function is listed as part of the module.
    
    ```powershell
    Get-Command -module MySharePointFunctions
    ```

5. Run the following cmdlet to verify that the Connect-SPFarmToAAD function is loaded.
    
    ```powershell
    ls function:\ | where {$_.Name -eq "Connect-SPFarmToAAD"}
    ```

6. Run the `Connect-SPFarmToAAD` function. Be sure to provide the required parameters and any optional parameters that apply to your developer environment. See the next section for details and examples.
    
 
<a name="parameters"> </a>
 
### Connect-SPFarmToAAD function parameters

|**Parameter**|**Value**|
|:-----|:-----|
|`-AADDomain`<br/><br/>(required)|The *.onmicrosoft.com domain that you created when you signed up for your Office 365 site (_yourcustomdomain_.onmicrosoft.com). When the script prompts you to authenticate, use the user name and password that you created for this domain: _username_@_yourcustomdomain_.onmicrosoft.com.|
|`-SharePointOnlineUrl`<br/><br/>(required)|The URL of your Office 365 SharePoint site (_https://yourcustomdomain_.sharepoint.com). Note that parent domain is *not* onmicrosoft.com.|
|`-SharePointWeb`<br/><br/>(sometimes required)|The full URL (including protocol) of the on-premises SharePoint web application where you'll run provider-hosted add-ins. This function adds only one SharePoint web application from your on-premises farm to ACS.<br/><br/>If you don't specify a value for this, the script selects the first web application in your farm. If you're using a Host Name Site Collection (HNSC) that can be defined with a wildcard (such as _http://*.contoso.com_), you can use that string as the value for this parameter.<br/><br/>If the web application has an alternative access mapping (AAM) for the Internet zone, you must use that AAM URL for this parameter. If the SharePoint web application is not configured for HTTPS, you have to use HTTP as the protocol and *you have to use the -AllowOverHttp switch (see later in this table).*<br/><br/>If you want to run provider-hosted add-ins that use ACS on more web applications in your farm, you need to add them to the service principal name collection.<br/><br/>The Windows PowerShell script that follows the `Connect-SPFarmToAAD` function shows you how to add all the web applications on your farm to the service principal name collection.|
|`-AllowOverHttp`<br/><br/>(optional)|Use this switch if you're working with a developer environment and don't want to use SSL with your add-ins. You have to use this switch if the SharePoint web application is not configured for HTTPS.|
|`-O365Credentials`<br/><br/>(optional)|The first character is a capital "O", not a zero. If you find yourself repeatedly running the script for debugging purposes, this switch enables to you avoid having to manually enter your O365 name and password each time.<br/><br/>Before you can use this parameter, you must create the credentials object that you will assign to it with these cmdlets:```$User = "username@yourcustomdomain.onmicrosoft.com"$PWord = ConvertTo-SecureString -String "the_password" -AsPlainText -Force$Credential = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $User, $PWord```<br/><br/>Use  `$Credential` as the value of the `-O365Credentials` parameter.|
|`-Verbose`<br/><br/>(optional)|This switch generates more detailed feedback that might help if the function is not working and you need to rerun it for debugging.|
|`-RemoveExistingACS`<br/><br/>(optional)|Use this switch if you're replacing an existing connection to Azure Active Directory. It removes an existing ACS proxy if you've already created one on your farm.|
|`-RemoveExistingSTS`<br/><br/>(optional)|Use this switch if you're replacing an existing connection to Azure Active Directory. It removes an existing trusted security token issuer that is left over from an earlier connection to ACS.|
|`-RemoveExistingSPOProxy`<br/><br/>(optional)|Use this switch if you're replacing an existing connection to Azure Active Directory. It removes an existing add-in management proxy if you've already created one on your farm.|
|`-RemoveExistingAADCredentials`<br/><br/>(optional)|Use this switch if you're replacing the Office 365 SharePoint site.|

<br/>

The following are examples:

```powershell
Connect-SPFarmToAAD -AADDomain 'MyO365Domain.onmicrosoft.com' -SharePointOnlineUrl https://MyO365Domain.sharepoint.com

Connect-SPFarmToAAD -AADDomain 'MyO365Domain.onmicrosoft.com' -SharePointOnlineUrl https://MyO365Domain.sharepoint.com -SharePointWeb https://fabrikam.com

Connect-SPFarmToAAD -AADDomain 'MyO365Domain.onmicrosoft.com' -SharePointOnlineUrl https://MyO365Domain.sharepoint.com -SharePointWeb http://northwind.com -AllowOverHttp

Connect-SPFarmToAAD -AADDomain 'MyO365Domain.onmicrosoft.com' -SharePointOnlineUrl https://MyO365Domain.sharepoint.com -SharePointWeb http://northwind.com -AllowOverHttp -RemoveExistingACS -RemoveExistingSTS -RemoveExistingSPOProxy -RemoveExistingAADCredentials

```

<a name="function"> </a>

### Connect-SPFarmToAAD function script

```powershell 
function Connect-SPFarmToAAD {
param(
    [Parameter(Mandatory)][String]   $AADDomain,
    [Parameter(Mandatory)][String]   $SharePointOnlineUrl,
    #Specify this parameter if you don't want to use the default SPWeb returned
    [Parameter()][String]            $SharePointWeb,
    [Parameter()][System.Management.Automation.PSCredential] $O365Credentials,
    #Use these switches if you're replacing an existing connection to AAD.
    [Parameter()][Switch]            $RemoveExistingACS,
    [Parameter()][Switch]            $RemoveExistingSTS,
    [Parameter()][Switch]            $RemoveExistingSPOProxy,
    #Use this switch if you're replacing the Office 365 SharePoint site.
    [Parameter()][Switch]            $RemoveExistingAADCredentials,
    #Use this switch if you don't want to use SSL when you launch your app.
    [Parameter()][Switch]            $AllowOverHttp
)
    #Prompt for credentials right away.
    if (-not $O365Credentials) {
        $O365Credentials = Get-Credential -Message "Admin credentials for $AADDomain"
    }
    Add-PSSnapin Microsoft.SharePoint.PowerShell
    #Import the Microsoft Online Services Sign-In Assistant.
    Import-Module -Name MSOnline
    #Import the Microsoft Online Services Module for Windows PowerShell.
    Import-Module MSOnlineExt -force -verbose 
    #Set values for Constants.
    New-Variable -Option Constant -Name SP_APPPRINCIPALID -Value '00000003-0000-0ff1-ce00-000000000000' | Out-Null
    New-Variable -Option Constant -Name ACS_APPPRINCIPALID -Value '00000001-0000-0000-c000-000000000000' | Out-Null
    New-Variable -Option Constant -Name ACS_APPPROXY_NAME -Value ACS
    New-Variable -Option Constant -Name SPO_MANAGEMENT_APPPROXY_NAME -Value 'SPO Add-in Management Proxy'
    New-Variable -Option Constant -Name ACS_STS_NAME -Value ACS-STS
    New-Variable -Option Constant -Name AAD_METADATAEP_FSTRING -Value 'https://accounts.accesscontrol.windows.net/{0}/metadata/json/1'
    New-Variable -Option Constant -Name SP_METADATAEP_FSTRING -Value '{0}/_layouts/15/metadata/json/1'
    #Get the default SPWeb from the on-premises farm if no $SharePointWeb parameter is specified.
    if ([String]::IsNullOrEmpty($SharePointWeb)) {
        $SharePointWeb = Get-SPSite | Select-Object -First 1 | Get-SPWeb | Select-Object -First 1 | % Url
    }

    #Configure the realm ID for local farm so that it matches the AAD realm.
    $ACSMetadataEndpoint = $AAD_METADATAEP_FSTRING -f $AADDomain
    $ACSMetadata = Invoke-RestMethod -Uri $ACSMetadataEndpoint
    $AADRealmId = $ACSMetadata.realm

    Set-SPAuthenticationRealm -ServiceContext $SharePointWeb -Realm $AADRealmId
    
    $LocalSTS = Get-SPSecurityTokenServiceConfig
    $LocalSTS.NameIdentifier = '{0}@{1}' -f $SP_APPPRINCIPALID,$AADRealmId
    $LocalSTS.Update()

    #Allow connections over HTTP if the switch is specified.
    if ($AllowOverHttp.IsPresent -and $AllowOverHttp -eq $True) {
        $serviceConfig = Get-SPSecurityTokenServiceConfig
        $serviceConfig.AllowOAuthOverHttp = $true
        $serviceConfig.AllowMetadataOverHttp = $true
        $serviceConfig.Update()
    }

    #Step 1: Set up the ACS proxy in the on-premises SharePoint farm. Remove the existing ACS proxy
    #if the switch is specified.
    if ($RemoveExistingACS.IsPresent -and $RemoveExistingACS -eq $True) {
        Get-SPServiceApplicationProxy | ? DisplayName -EQ $ACS_APPPROXY_NAME | Remove-SPServiceApplicationProxy -RemoveData -Confirm:$false
    }
    if (-not (Get-SPServiceApplicationProxy | ? DisplayName -EQ $ACS_APPPROXY_NAME)) {
        $AzureACSProxy = New-SPAzureAccessControlServiceApplicationProxy -Name $ACS_APPPROXY_NAME -MetadataServiceEndpointUri $ACSMetadataEndpoint -DefaultProxyGroup
    }

    #Remove the existing security token service if the switch is specified.
    if ($RemoveExistingSTS.IsPresent) {
        Get-SPTrustedSecurityTokenIssuer | ? Name -EQ $ACS_STS_NAME | Remove-SPTrustedSecurityTokenIssuer -Confirm:$false
    }
    if (-not (Get-SPTrustedSecurityTokenIssuer | ? DisplayName -EQ $ACS_STS_NAME)) {
        $AzureACSSTS = New-SPTrustedSecurityTokenIssuer -Name $ACS_STS_NAME -IsTrustBroker -MetadataEndPoint $ACSMetadataEndpoint
    }

    #Update the ACS Proxy for OAuth authentication.
    $ACSProxy = Get-SPServiceApplicationProxy | ? Name -EQ $ACS_APPPROXY_NAME
    $ACSProxy.DiscoveryConfiguration.SecurityTokenServiceName = $ACS_APPPRINCIPALID
    $ACSProxy.Update()

    #Retrieve the local STS signing key from JSON metadata.
    $SPMetadata = Invoke-RestMethod -Uri ($SP_METADATAEP_FSTRING -f $SharePointWeb)
    $SPSigningKey = $SPMetadata.keys | ? usage -EQ "Signing" | % keyValue
    $CertValue = $SPSigningKey.value
    
    #Connect to Office 365.
    Connect-MsolService -Credential $O365Credentials
    #Remove existing connection to an Office 365 SharePoint site if the switch is specified.
    if ($RemoveExistingAADCredentials.IsPresent -and $RemoveExistingAADCredentials -eq $true) {
        $msolserviceprincipal = Get-MsolServicePrincipal -AppPrincipalId $SP_APPPRINCIPALID
        [Guid[]] $ExistingKeyIds = Get-MsolServicePrincipalCredential -ObjectId $msolserviceprincipal.ObjectId -ReturnKeyValues $false | % {if ($_.Type -ne "Other") {$_.KeyId}}
        Remove-MsolServicePrincipalCredential -AppPrincipalId $SP_APPPRINCIPALID -KeyIds $ExistingKeyIds
    }
    #Step 2: Upload the local STS signing certificate
    New-MsolServicePrincipalCredential -AppPrincipalId $SP_APPPRINCIPALID -Type Asymmetric -Value $CertValue -Usage Verify

    #Step 3: Add the service principal name of the local web application, if necessary.
    $indexHostName = $SharePointWeb.IndexOf('://') + 3
    $HostName = $SharePointWeb.Substring($indexHostName)
    $NewSPN = '{0}/{1}' -f $SP_APPPRINCIPALID, $HostName
    $SPAppPrincipal = Get-MsolServicePrincipal -AppPrincipalId $SP_APPPRINCIPALID
    if ($SPAppPrincipal.ServicePrincipalNames -notcontains $NewSPN) {
        $SPAppPrincipal.ServicePrincipalNames.Add($NewSPN)
        Set-MsolServicePrincipal -AppPrincipalId $SPAppPrincipal.AppPrincipalId -ServicePrincipalNames $SPAppPrincipal.ServicePrincipalNames
    }

    #Remove the existing SharePoint Online proxy if the switch is specified.
    if ($RemoveExistingSPOProxy.IsPresent -and $RemoveExistingSPOProxy -eq $True) {
        Get-SPServiceApplicationProxy | ? DisplayName -EQ $SPO_MANAGEMENT_APPPROXY_NAME | Remove-SPServiceApplicationProxy -RemoveData -Confirm:$false
    }
    #Step 4: Add the SharePoint Online proxy
    if (-not (Get-SPServiceApplicationProxy | ? DisplayName -EQ $SPO_MANAGEMENT_APPPROXY_NAME)) {
        $spoproxy = New-SPOnlineApplicationPrincipalManagementServiceApplicationProxy -Name $SPO_MANAGEMENT_APPPROXY_NAME -OnlineTenantUri $SharePointOnlineUrl -DefaultProxyGroup
    }  
}
```

<br/>

### Configure the add-in and the SharePoint web application for the Office Store

There is an optional configuration step that farm administrators should take on production environments, if they want users to be able to install provider-hosted add-ins that use ACS from the Office Store. (It serves no purpose on your SharePoint development environment unless you plan to install add-ins that use ACS from the store on that environment.) The following cmdlet makes this possible. This code can be added to the preceding function.

```powershell
New-SPMarketplaceWebServiceApplicationProxy -Name "ApplicationIdentityDataWebServiceProxy" -ServiceEndpointUri "https://oauth.sellerdashboard.microsoft.com/ApplicationIdentityDataWebService.svc" -DefaultProxyGroup

```

It is also a good practice on production SharePoint web applications to activate the **Add-ins that require accessible internet facing endpoints** feature after the configuration steps have been completed. (See the following instructions.) This feature does not actually do anything. It simply serves as a flag that tells the Office Store that provider-hosted add-ins that use ACS can be installed on websites in the SharePoint web application.

This system may have implications for the add-in manifest of your SharePoint Add-in. If you plan to sell your add-in through the store, it is a good practice to add the following **AppPrerequisite** to the **AppPrerequisites** section of the add-in manifest:

```
<AppPrerequisite Type="Feature" ID="{7877bbf6-30f5-4f58-99d9-a0cc787c1300}" />
```

The effect of the prerequisite is that when users are browsing the store from an on-premises SharePoint farm, your add-in is grayed-out and uninstallable when the parent SharePoint web application does not have the **Add-ins that require accessible internet facing endpoints** feature enabled. This ensures that you won't get complaints from customers who install your add-in to an on-premises SharePoint website and find that it does not work.

There are two ways to enable the feature. The first is to run the following PowerShell cmdlet (which can be added to the end of the preceding function) on any SharePoint server:

```powershell
Enable-SPFeature -identity "7877bbf6-30f5-4f58-99d9-a0cc787c1300" -Url http://domain_of_the_SharePoint_web_application
```

The other way to enable the feature is to carry out the following steps in Central Administration:

1. In **SharePoint Central Administration**, go to **Application Management** > **Manage web applications**.

2. On the **Manage Web Applications** page, select the web application that you want to change.

3. On the ribbon, select **Manage Features**.

4. In the feature list, next to **Add-ins that require accessible internet facing endpoints**, select **Activate**.

5. Select **OK**.


### Configure additional SharePoint web applications within the farm

If you have additional web applications on your SharePoint farm and you want to run provider-hosted add-ins that use ACS trust on them, you can use this Windows PowerShell script (in the SharePoint Management Shell) to add them to the service principal name collection.

```powershell
$SPAppPrincipal = Get-MsolServicePrincipal -AppPrincipalId 00000003-0000-0ff1-ce00-000000000000
$id = "00000003-0000-0ff1-ce00-000000000000/"

Get-SPWebApplication | ForEach-Object {
    $hostName = $_.Url.substring($_.Url.indexof("//") + 2)
    $hostName = $hostName.Remove($hostName.Length - 1, 1)

    $NewSPN = $id + $hostName

    Write-Host "Adding SPN for" $NewSPN

    if ($SPAppPrincipal.ServicePrincipalNames -notcontains $NewSPN) {
       $SPAppPrincipal.ServicePrincipalNames.Add($NewSPN)
       Set-MsolServicePrincipal -AppPrincipalId $SPAppPrincipal.AppPrincipalId -ServicePrincipalNames $SPAppPrincipal.ServicePrincipalNames
    }
}

```

<br/>

## See also
- [Get started creating provider-hosted SharePoint Add-ins](get-started-creating-provider-hosted-sharepoint-add-ins.md)
- [Creating SharePoint Add-ins that use low-trust authorization](creating-sharepoint-add-ins-that-use-low-trust-authorization.md)
- [Authorization and authentication of SharePoint Add-ins](authorization-and-authentication-of-sharepoint-add-ins.md)
