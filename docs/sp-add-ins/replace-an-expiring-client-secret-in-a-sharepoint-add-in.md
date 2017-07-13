
# Replace an expiring client secret in a SharePoint Add-in
Learn how to add a new client secret for a SharePoint Add-in that is registered with AppRegNew.aspx.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint#bk_newname).
 

Client secrets for SharePoint Add-ins that are registered using the AppRegNew.aspx page expire after one year. This article explains how to add a new secret for the add-in, as well as how to create a new client secret that is valid for three years.
 

 **Note**  This article is about SharePoint Add-ins that are distributed through an organization catalog and registered with the AppRegNew.aspx page. If the add-in is registered on the Seller Dashboard, see  [Create or update client IDs and secrets in the Seller Dashboard](https://dev.office.com/officestore/docs/create-or-update-client-ids-and-secrets).
 


## Prerequisites for refreshing a client secret

Ensure the following before you begin:
 

 

-  [Microsoft Online Services Sign-In Assistant](http://www.microsoft.com/download/details.aspx?id=39267) is installed on the development computer.
    
 
- Microsoft Online Services PowerShell Module ( [32-bit](http://go.microsoft.com/fwlink/p/?linkid=236298);  [64-bit](http://go.microsoft.com/fwlink/p/?linkid=236297)) is installed on the development computer.
    
 
- You are a tenant administrator for the Office 365 tenant (or a farm administrator on the farm) where the add-in was registered with the AppRegNew.aspx page.
    
 

## Find out the expiration dates of the SharePoint Add-ins installed to the Office 365 tenancy


 

 

1. Open Windows PowerShell and run the following cmdlet:
    
```
  Connect-MsolService

```

2. At the login prompt, enter tenant-administrator (or farm administrator) credentials for the Office 365 tenancy or farm where the add-in was registered with AppRegNew.aspx.
    
 
3. Generate a report that lists each add-in and the date that its secret expires with the following lines. Note the following about this code:
    
      - It first filters out Microsoft's own applications, add-ins still under development (and a now-deprecated type of add-in that was called autohosted).
    
 
  - From the remainder, it filters out non-SharePoint add-ins and add-ins that use asymmetric keys, like workflows.
    
 

```
  $applist = Get-MsolServicePrincipal -all  |Where-Object -FilterScript { ($_.DisplayName -notlike "*Microsoft*") -and ($_.DisplayName -notlike "autohost*") -and  ($_.ServicePrincipalNames -notlike "*localhost*") }

foreach ($appentry in $applist)
{
    $principalId = $appentry.AppPrincipalId
    $principalName = $appentry.DisplayName
    
    Get-MsolServicePrincipalCredential -AppPrincipalId $principalId -ReturnKeyValues $false | Where-Object { ($_.Type -ne "Other") -and ($_.Type -ne "Asymmetric") }
    
     $date = get-date
     Write-Host "$principalName;$principalId;$appentry.KeyId;$appentry.type;$date;$appentry.Usage"

}  > c:\temp\appsec.txt
```

4. Open the file C:\temp\appsec.txt to see the report. Leave the Windows PowerShell window open for the next procedure, if any of the secrets is near to expiration.
    
 

## Generate a new secret


 

 

1. Create a client ID variable with the following line, using the client ID of the SharePoint Add-in as the parameter.
    
```
  $clientId = 'client id of the add-in'

```

2. Generate a new client secret with the following lines:
    
```
  $bytes = New-Object Byte[] 32
$rand = [System.Security.Cryptography.RandomNumberGenerator]::Create()
$rand.GetBytes($bytes)
$rand.Dispose()
$newClientSecret = [System.Convert]::ToBase64String($bytes)
New-MsolServicePrincipalCredential -AppPrincipalId $clientId -Type Symmetric -Usage Sign -Value $newClientSecret
New-MsolServicePrincipalCredential -AppPrincipalId $clientId -Type Symmetric -Usage Verify -Value $newClientSecret
New-MsolServicePrincipalCredential -AppPrincipalId $clientId -Type Password -Usage Verify -Value $newClientSecret
$newClientSecret
```

3. The new client secret will appear on the Windows PowerShell console. Copy it to a text file. You use it in the next procedure.
    
 

 **Tip**  By default, the add-in secret lasts one year. You can set this to a shorter or longer (up to 3 years maximum) by using the  **-EndDate** parameter on the three calls of the **New-MsolServicePrincipalCredential** cmdlet. The value of the parameter must be a [DateTime](http://msdn2.microsoft.com/EN-US/library/03ybds8y) object set to no longer than 3 years from **DateTime.Now**.
 


## Update the remote web application in Visual Studio to use the new secret


 **Important**  If your add-in was originally created with a prerelease version the Microsoft Office Developer Tools for Visual Studio, it may contain an out-of-date version of the TokenHelper.cs (or .vb) file. If the file does not contain the string "secondaryClientSecret", it is out-of-date and it must be replaced before you can update the web application with a new secret. To obtain a copy of a release version of the file, you need Visual Studio 2012 or later. Create a new SharePoint Add-in project in Visual Studio. Copy the TokenHelper file from it to the web application project of your SharePoint Add-in. 
 


1. Open the SharePoint Add-in project in Visual Studio, and open the web.config file for the web application project. In the  **appSettings** section, there are keys for the client ID and client secret. The following is an example:
    
```XML
  <appSettings>
  <add key="ClientId" value="your client id here" />
  <add key="ClientSecret" value="your old secret here" />
     ... other settings may be here ...
</appSettings>

```

2. Change the name of the  **ClientSecret** key to "SecondaryClientSecret" as shown in the following example:
    
```XML
  <add key="SecondaryClientSecret" value="your old secret here" />
```

> **Note** If you are performing this procedure for the first time there will be no **SecondaryClientSecret** property entry at this point in the configuration file. However if you are performing the procedure for a subsequent client secret expiration (second or third) the property **SecondaryClientSecret** is already present and containing the initial or already longer time ago expired old secret. In this case delete the **SecondaryClientSecret** property first before renaming **ClientSecret**.

3. Add a new  **ClientSecret** key and give it your new client secret. Your markup should now look like the following:
    
```XML
  <appSettings>
  <add key="ClientId" value="your client id here" />
  <add key="ClientSecret" value="your new secret here" />
  <add key="SecondaryClientSecret" value="your old secret here" />
     ... other settings may be here ...
</appSettings>
```

4. If you changed to a new TokenHelper file, rebuild the project.
    
 
5. Republish the web application.
    
 

## Create a client secret that is valid for three years

For expired client secrets, first you must delete all of the expired secrets for a given  **clientId**. Then you create a new one with MSO PowerShell, wait at least 24 hours, and test the app with the new **clientId** and **ClientSecret** key.
 

 

1. Connect to MSOnline using the tenant admin user with the below markup using SharePoint Windows PowerShell.
    
```
  import-module MSOnline
$msolcred = get-credential
connect-msolservice -credential $msolcred

```

2. Get  **ServicePrincipals** and keys. Printing **$keys** returns three records. Replace each **KeyId** in *KeyId1*  , *KeyId2*  and *KeyId3*  . You will also see the **EndDate** of each key. Confirm whether your expired key appers there.
    
     **Note:** The **clientId** needs to match your expired **clientId**. It's recommended to delete all keys, both expired and unexpired, for this **clientId**.
    


```
  $clientId = "27c5b286-62a6-45c7-beda-abbaea6eecf2"
$keys = Get-MsolServicePrincipalCredential -AppPrincipalId $clientId
Remove-MsolServicePrincipalCredential -KeyIds @("KeyId1"," KeyId2"," KeyId3") -AppPrincipalId $clientId 

```

3. Generate a new  **ClientSecret** for this **clientID**. It uses the same **clientId** as set in the above step. The new **ClientSecret** is valid for 3 years.
    
```
  $bytes = New-Object Byte[] 32
$rand = [System.Security.Cryptography.RandomNumberGenerator]::Create()
$rand.GetBytes($bytes)
$rand.Dispose()
$newClientSecret = [System.Convert]::ToBase64String($bytes)
$dtStart = [System.DateTime]::Now
$dtEnd = $dtStart.AddYears(3)
New-MsolServicePrincipalCredential -AppPrincipalId $clientId -Type Symmetric -Usage Sign -Value $newClientSecret -StartDate $dtStart  -EndDate $dtEnd
New-MsolServicePrincipalCredential -AppPrincipalId $clientId -Type Symmetric -Usage Verify -Value $newClientSecret   -StartDate $dtStart  -EndDate $dtEnd
New-MsolServicePrincipalCredential -AppPrincipalId $clientId -Type Password -Usage Verify -Value $newClientSecret   -StartDate $dtStart  -EndDate $dtEnd
$newClientSecret

```

4. Copy the output of  **$newClientSecret**.
    
 
5. Replace the  **Web.config** with this **ClientId** and **ClientSecret**. You don't need **SecondaryClientSecret** app settings.
    
 
6. Wait at least 24 hours to propagate  **ClientSecret** to SharePoint Office (SPO).
    
 

## See also


#### Other resources


 
 [Provider Hosted App fails on SPO](http://blogs.technet.com/b/sharepointdevelopersupport/archive/2015/03/11/provider-hosted-app-fails-on-spo.aspx)
