---
title: Bulk update custom user profile properties for SharePoint Online
description: To replicate custom attributes to the SharePoint user profile service, use the UserProfile.BatchUpdate.API.
ms.date: 5/8/2018
localization_priority: Priority
---

# Bulk update custom user profile properties for SharePoint Online

As part of the client-side object model (CSOM) version (4622.1208 or later), SharePoint has the ability to bulk import custom user profile properties. Prior to this release, your only option was to take advantage of the user profile CSOM operations for updating specific properties for individual user profiles. However, this approach is inefficient and too time-consuming (especially when dealing with thousands of profiles).

Many enterprises need to replicate custom attributes to the SharePoint user profile service, so a more performant user profile bulk API has been released, the [UserProfile.BatchUpdate.API](https://github.com/SharePoint/PnP/tree/master/Samples/UserProfile.BatchUpdate.API).

## Overview of the bulk user profile update process

![Bulk UPA update flow](media/bulkuserprofileupdateapi/UserProfileBulkAPIProcess.png)

The following list describes the flow of the bulk user profile update process:

1. User attributes are synchronized from the corporate Active Directory to the Azure Active Directory (Azure AD). You can select which attributes are replicated across on-premises and Azure.

2. A standardized set of attributes are replicated from Azure AD to the SharePoint Online User Profile Store within Office 365. Unlike on-premises SharePoint, these attributes cannot be customized.

3. A custom synchronization tool takes advantage of the bulk update APIs. This tool uploads a JSON file to the Office 365 tenant and queues the import process. This tool can be implemented by using managed code (.NET) or as a PowerShell script by using the CSOM APIs.

4. A line-of-business (LOB) system, or any external system, is the source of the information in the JSON file. This could also be a combination of data from Active Directory and any external system. Notice that from an API perspective, the LOB system could even be an on-premises SharePoint farm.

5. An out-of-the-box server-side timer job running in SharePoint Online checks for queued import requests and performs the actual import operation based on the API calls and the information within the provided JSON file.

6. Extended user profile information is available within user profiles and can be used for any out-of-the-box or custom functionality in SharePoint Online.

> [!NOTE] 
> The import only works for user profile properties that have **not** been set to be editable by end users. This is to prevent the user profile import process from overriding any information that an end user has already updated. Additionally, the import only allows custom properties that are not Active Directory core properties. These must be synchronized to Azure AD. For the list of these core directory properties, see the table listed in the FAQ section later in this article.

<br/>

Following is a brief video that demonstrates how to use the CSOM API [UserProfile.BatchUpdate.API](https://github.com/SharePoint/PnP/tree/master/Samples/UserProfile.BatchUpdate.API) from both managed code (.NET) and from PowerShell.

<br/>

> [!VIDEO https://www.youtube.com/embed/-X_2T0SRUBk]

### User profile property import process

Following is the full process:

1. Create or synchronize users in an Office 365 tenant or to the Azure AD associated to it.
	 - When users are synchronized to Azure AD, it also synchronizes a standardized set of attributes to the SharePoint Online user profile service.
2. Create any needed custom properties within the user profile service.
	 - Because there are no remote APIs for creating custom properties in the user profile service, this step must be performed manually for each of the tenants where custom user profile properties are needed (this only needs to be done once per tenant).
	 - Only user profile properties that are not “allowed to be edited by end users” can be imported. Trying to import a JSON object property to a user profile property that is marked as “editable by end users” results in an exception when the CSOM API is called.
3. [Create and upload the JSON file](#create-and-upload-json-file) to the Office 365 tenant.
	 - You must upload the JSON data file containing the information to be updated to the Office 365 tenant.
	 - In the case of any exception during the import process, SharePoint provides additional logging information saved in the same document library where the file existed within a new sub folder.
	 - Cleaning of the log files and JSON files is not done automatically and is the responsibility of the custom solution using the API. You should consider the life cycle of these files within your implementation. These files are stored in document libraries, so they consume a portion of the assigned storage for the site collection.
4. Call the bulk UPA Import API for queuing the import job.
	 - Use the CSOM API to [queue the import process](#queue-the-import-process). This can be achieved by executing CSOM code by using either managed code (.NET) or [PowerShell](#call-the-import-api-from-powershell).
	 - The method to queue the job requires property mapping information and the location of the data file. This method quickly executes because it queues the actual import process, which later is executed as part of a back-end process in SharePoint Online.
5. [Check the status of the import job](#check-the-status-of-an-import-job).
	 - You can also use remote APIs to check the status of a specific import job or all the recent import jobs. To be able to check the status of a specific call, you should store the unique job identifier received as a return value when the job is queued.

## Create and upload JSON file

The import process uses a JSON file that contains the properties and their values. Following is the expected structure of that file:   

```json
{
   "value": [
     {
       "<IdName>": "<UserIdValue_1>",
       "<AttributeName_1>": "<User1_AttributeValue_1>",
       "<AttributeName_2>": "<User1_AttributeValue_2>",
     },
     {
       "<IdName>": "<UserIdValue_2>",
       "<AttributeName_1>": "<User2_AttributeValue_1>",
       "<AttributeName_2>": "<User2_AttributeValue_2>",
     },
     {
       "<IdName>": "<UserIdValue_n>",
       "<AttributeName_1>": "<Usern_AttributeValue_1>",
       "<AttributeName_2>": "<Usern_AttributeValue_2>",
     }
   ]
}
```

### Example

Following is a simple example file that uses the format in the previous sample. In this example, identity resolution is based on the **IdName** property, and there are two properties that are being updated called **City** and **Office**. The file contains information for four different accounts within the tenant. Property names used in this source file are not necessarily the same as the names used within the SharePoint Online user profile service because we provide correct property mapping within our code. 

```json
{
  "value": [
    {
      "IdName": "vesaj@contoso.com",
      "City": "Helsinki",
      "Office": "Viper"
    },
    {
      "IdName": "bjansen@contoso.com",
      "City": "Brussels",
      "Office": "Beetle"
    },
    {
      "IdName": "unknowperson@contoso.com",
      "City": "None",
      "Office": ""
    },
    {
      "IdName": "erwin@contoso.com",
      "City": "Stockholm",
      "Office": "Elite"
    }
  ]
}
```

### Source data file restrictions

The following are restrictions on individual source data files:

- Maximum file size: 2 GB
- Maximum number of properties: 500,000
- The source file must be uploaded to the same SharePoint Online tenant where the process is started.

> [!NOTE] 
> The update file must have the Byte Order Mark (BOM) specified if any characters are not part of the Western European encoding (iso-8859-1) which is the default. International characters may not be interpreted correctly with the default encoding, so it is recommended to use the UTF-8 encoding. This encoding has a BOM of 'EF BB BF' in hex. This would be placed at the beginning of the byte array of the file when creating the file stream. If using a text editor, select the endoding type as UTF-8 before saving.

<br/>

## Queue the import process

You can queue the CSOM API for the bulk import process by calling the [QueueImportProfileProperties](https://msdn.microsoft.com/en-us/library/office/microsoft.online.sharepoint.tenantmanagement.office365tenant.queueimportprofileproperties.aspx) method located in the [Office365Tenant](https://msdn.microsoft.com/en-us/library/office/microsoft.online.sharepoint.tenantmanagement.office365tenant.aspx) object. This is an asynchronous call in that it doesn’t download the source data or perform the import; it simply adds a work item to the queue for doing this later. 

Following is the full signature of the method:

```cs
public ClientResult<Guid> QueueImportProfileProperties(
                          ImportProfilePropertiesUserIdType idType, 
                          string sourceDataIdProperty, 
                          IDictionary<string, string> propertyMap, 
                          string sourceUri);
```

### Parameters

- **idType**: [ImportProfilePropertiesUserIdType](https://msdn.microsoft.com/en-us/library/office/microsoft.online.sharepoint.tenantmanagement.importprofilepropertiesuseridtype.aspx)

  The type of id to use when looking up the user profile. Possible values are **Email**, **CloudId**, and **PrincipalName**. Note that regardless of the type, the user must already exist in the user profile service for the import to work. We recommend using the **CloudId** value to ensure uniqueness.

  Property mapping between ID type and Azure AD property:

  |UPA bulk import ID type | Azure AD attribute |
  |:----|:----|
  |CloudId | ObjectID |
  |PrincipalName | userPrincipalName |
  |Email | mail |

- **sourceDataIdProperty**: System.String

  The name of the ID property in the source data. The value of the property from the source data is used to look up the user. The user profile service property used for the lookup depends on the value of **idType**.

- **propertyMap**: IDictionary`<string, string>`

  A map from the source property name to the user profile service property name. Note that the user profile service properties must already exist. The key is the property name used in the source file; the value is the property name used in the user profile service.

- **sourceUri**: System.String

  The URI of the source data file to import. The file should not be moved or deleted right away as it may not be downloaded for some time.

### Return value

A GUID that identifies the import job that has been queued.

### Example

Following is an example that uses C# for starting the process by using the previous sample input file:

```cs
// Create an instance of the Office 365 Tenant object. Loading this object is not technically needed for this operation. 
Office365Tenant tenant = new Office365Tenant(ctx);
ctx.Load(tenant);
ctx.ExecuteQuery();

// Type of user identifier ["PrincipalName", "Email", "CloudId"] in the 
// user profile service. In this case, we use Email as the identifier at the UPA storage
ImportProfilePropertiesUserIdType userIdType = 
      ImportProfilePropertiesUserIdType.Email;

// Name of the user identifier property within the JSON file
var userLookupKey = "IdName";

var propertyMap = new System.Collections.Generic.Dictionary<string, string>();

// The key is the property in the JSON file 
// The value is the user profile property Name in the user profile service
// Notice that we have 2 custom properties in UPA called 'City' and 'OfficeCode'
propertyMap.Add("City", "City");
propertyMap.Add("Office", "OfficeCode");

// Returns a GUID that can be used to check the status of the execution and the end results
var workItemId = tenant.QueueImportProfileProperties(
      userIdType, userLookupKey, propertyMap, fileUrl
      );

ctx.ExecuteQuery();
```

## Check the status of an import job

You can check the status of the user profile service import jobs by using the CSOM APIs. There are two methods for this in the Tenant object:

- To check the status of an individual import job, use the **GetImportProfilePropertyJob** method.
- To check the status of all import jobs, use the **GetImportProfilePropertyJobs** method.

### Individual import job

You can check the status of an individual import job by using the [GetImportProfilePropertyJob](https://msdn.microsoft.com/en-us/library/office/microsoft.online.sharepoint.tenantmanagement.office365tenant.getimportprofilepropertyjob.aspx) method located in the [Office365Tenant](https://msdn.microsoft.com/en-us/library/office/microsoft.online.sharepoint.tenantmanagement.office365tenant.aspx) object. You must have the unique identifier of a specific import job provided as a parameter to this method. 

Following is the full signature of the method:

```cs
public ImportProfilePropertiesJobInfo GetImportProfilePropertyJob(Guid jobId);
```

#### Parameters

- **jobID**: System.Guid 

  The ID of the job for which to get the high-level status.

#### Return value

An [ImportProfilePropertiesJobStatus](https://msdn.microsoft.com/en-us/library/office/microsoft.online.sharepoint.tenantmanagement.importprofilepropertiesjobinfo.aspx) object with high level status information about the specified job.

#### Example

Following is an example that uses C# for retrieving the status of a specific import job by using a stored identifier:

```cs
// Check the status of a specific request based on the job id received when we queued the job
Office365Tenant tenant = new Office365Tenant(ctx);
var job = tenant.GetImportProfilePropertyJob(workItemId);
ctx.Load(job);
ctx.ExecuteQuery();
```

### All import jobs

You can check the status of all import jobs by using the [GetImportProfilePropertyJobs](https://msdn.microsoft.com/en-us/library/office/microsoft.online.sharepoint.tenantmanagement.office365tenant.getimportprofilepropertyjobs.aspx) method located in the [Office365Tenant](https://msdn.microsoft.com/en-us/library/office/microsoft.online.sharepoint.tenantmanagement.office365tenant.aspx) object. 

Following is the full signature of the method:

```cs
public ImportProfilePropertiesJobStatusCollection GetImportProfilePropertyJobs(); 
```

#### Parameters

An [ImportProfilePropertiesJobInfo](https://msdn.microsoft.com/en-us/library/office/microsoft.online.sharepoint.tenantmanagement.importprofilepropertiesjobinfo.aspx) object returned with the import status information has the following properties. 

- **JobId**: System.Guid

  The ID of the import job.

- **State**: [ImportProfilePropertiesJobState](https://msdn.microsoft.com/en-us/library/office/microsoft.online.sharepoint.tenantmanagement.importprofilepropertiesjobstate.aspx)

  An enum with following values:
  - **Unknown** - We cannot determine the state of the job.
  - **Submitted** - The job has been submitted to the system.
  - **Processing** - The job is being processed.
  - **Queued** - The job has passed validation and is queued for import to UPA.
  - **Succeeded** - The job completed with no errors.
  - **Error** - The job completed with errors.

- **SourceUri**: System.String 

  The URI to the data source file.

- **Error**: [ImportProfilePropertiesJobError](https://msdn.microsoft.com/en-us/library/office/microsoft.online.sharepoint.tenantmanagement.importprofilepropertiesjoberror.aspx)

  An enum representing the possible error:

  - `NoError` - No error found.
  - `InternalError` - The error was caused by a failure in the service.
  - `DataFileNotExist` - The data source file could not be found.
  - `DataFileNotInTenant` - The data source file did not belong to the same tenant.
  - `DataFileTooBig` - The size of the data file was too big.
  - `InvalidDataFile` - The data source file did not pass validation (there may be additional details in the log file).
  - `ImportCompleteWithError` - The data has been imported, but there was an error encountered.

- **ErrorMessage**: System.String

  The error message.

- **LogFileUri**: System.String

  The Uri to the folder where the logs have been written.


#### Return value

An [ImportProfilePropertiesJobStatusCollection](https://msdn.microsoft.com/en-us/library/office/microsoft.online.sharepoint.tenantmanagement.importprofilepropertiesjobstatuscollection.aspx) object, which is a collection of [ImportProfilePropertiesJobStatus](https://msdn.microsoft.com/en-us/library/office/microsoft.online.sharepoint.tenantmanagement.importprofilepropertiesjobinfo.aspx) objects with high level status information about each of the jobs.

#### Example

Following is an example that uses C# for getting the status of all import jobs currently saved in the tenant. These could be already processed or queued jobs:

```cs
// Load all import jobs – old and queued ones
Office365Tenant tenant = new Office365Tenant(ctx);
var jobs = tenant.GetImportProfilePropertyJobs();
ctx.Load(jobs);
ctx.ExecuteQuery();
foreach (var item in jobs)
{
   // Check whatever properties needed
   var state = item.State;
}
```


## Call the import API from PowerShell

You can take advantage of the user profile service bulk import API by using PowerShell. This means that you use the CSOM code directly in a PowerShell script by using the necessary parameters. This requires that the updated CSOM redistributable package has been installed on the computer where the script is executed.

By using PowerShell, you do not need to compile your code within Visual Studio, which may be a more suitable model for some customers.

### Sample PowerShell script

Following is a sample PowerShell script that performs the same operations as the previous code: 

```powershell
# Get needed information from the end user
$adminUrl = Read-Host -Prompt 'Enter the admin URL of your tenant'
$userName = Read-Host -Prompt 'Enter your user name'
$pwd = Read-Host -Prompt 'Enter your password' -AsSecureString
$importFileUrl = Read-Host -Prompt 'Enter the URL to the file located in your tenant'

# Get instances to the Office 365 tenant using CSOM
$uri = New-Object System.Uri -ArgumentList $adminUrl
$context = New-Object Microsoft.SharePoint.Client.ClientContext($uri)

$context.Credentials = New-Object Microsoft.SharePoint.Client.SharePointOnlineCredentials($userName, $pwd)
$o365 = New-Object Microsoft.Online.SharePoint.TenantManagement.Office365Tenant($context)
$context.Load($o365)

# Type of user identifier ["Email", "CloudId", "PrincipalName"] in the user profile service
$userIdType=[Microsoft.Online.SharePoint.TenantManagement.ImportProfilePropertiesUserIdType]::Email

# Name of user identifier property in the JSON
$userLookupKey="idName"

# Create property mapping between the source file property name and the Office 365 property name
# Notice that we have here 2 custom properties in UPA called 'City' and 'OfficeCode'
$propertyMap = New-Object -type 'System.Collections.Generic.Dictionary[String,String]'
$propertyMap.Add("City", "City")
$propertyMap.Add("Office", "OfficeCode")

# Call to queue UPA property import 
$workItemId = $o365.QueueImportProfileProperties($userIdType, $userLookupKey, $propertyMap, $importFileUrl);

# Execute the CSOM command for queuing the import job
$context.ExecuteQuery();

# Output the unique identifier of the job
Write-Host "Import job created with the following identifier:" $workItemId.Value 
```

## Handle exceptions

There are two levels of validation when this API is used. When you queue the import process with CSOM, there is an initial level of validation of the provided values. This includes confirmation that the provided mapping properties exist in the user profile service and that these properties are not editable by the end user. When the queue API is called, only an initial level of validation is applied, and final validation of the provided information is performed when the import job is actually executed.

If there are any exceptions during the actual import job execution, a logging file with additional details is generated in the same document library where the import file was located. Log files for specific import jobs are saved to sub folders named by using the unique identifier of the specific import job.

Following is an example of the results of running an import job. In the following image, you can see two sub folders for two different executions created in the document library where the import file is stored.

![Job exception sub folders](media/bulkuserprofileupdateapi/UserProfileBulkAPIProcess-folders.png)

<br/>

The actual log file is saved in the sub folder, and you can download that from Office 365 for detailed analysis.

![Job exception log file](media/bulkuserprofileupdateapi/UserProfileBulkAPIProcess-LogFile.png)

### Common exceptions

The following table contains typical exceptions that you could encounter when you start using the user profile service bulk API.

Example exception | Details
--- | ---
_Property Names [AboutMe] are editable by user._ | This would be thrown by the CSOM API when you call the **ExecuteQuery** method when submitting the job to your tenant. The API validates that all properties currently being mapped are NOT user editable. The exception points out the property that cannot be used.<br/><br/>In this example, we have tried to map a JSON property to the **AboutMe** property in the user profile service properties, but this is not allowed because **AboutMe** is a user editable property.
_InvalidProperty - vesaj@contoso.com Property 'AboutMe' is not mapped to any property in the user profile application._ | The JSON data file contained a property that has not been mapped to the user profile service property in SharePoint Online. This means that the source data file contains properties for which you have not provided a mapping in the **propertyMap** parameter. You must have a mapping definition for each of the properties in the JSON data object.
_MissingIdentity - The identity is missing for the user object_ | The identity property could not be found in the user object. The most likely cause is that the **sourceDataIdProperty** attribute is wrongly set for the **QueueImportProfileProperties** method. Ensure that you have the right property in the JSON source file and that your code/script is assigning this attribute accordingly.
_IdentityNotResolvable unknown@contoso.com User identity cannot be resolved_ | The data file contained an identity, which could not be resolved or was not present in the user profile service. In this case, the user profile with email of _unknown@contoso.com_ could not be located in the user profile service.
_DataFileNotJson - JsonToken EndObject is not valid for closing JsonType Array. Path 'value', line 8, position 10._ | Your import file format is not valid JSON and does not match the expected format. 

## Frequently asked questions

### Can I execute the code using app-only/add-in only permissions?

Yes, you need to register the client ID and secret to be able to execute the APIs. Because the actual import of the file does not occur synchronously with the identity of the caller, this works without any issues.

### This API is updating properties in the user profile service, but how would I create those properties in the tenant?

There’s no remote API to create custom user profile properties programmatically, so this is a manual operation that needs to be completed once per given tenant. For instructions about how to create these custom properties, see [Add and edit user profile properties in SharePoint Online](https://support.office.com/en-us/article/add-and-edit-user-profile-properties-in-sharepoint-online-85091402-737f-4bb9-99a7-bc5f194502a8?ui=en-US&rs=en-US&ad=US).

### Is this capability available in on-premises SharePoint?

Unfortunately, this capability is currently only for SharePoint Online. In on-premises SharePoint, this capability would be useful but not as critical because you can modify the attribute mapping in the on-premises user profile service application. You can also take advantage of importing user profile attributes by using the Business connectivity service (BCS) in SharePoint 2013. However, this option is not available in SharePoint 2016, which means that for SharePoint 2016 the only option currently is to implement customizations that take advantage of the user profile web services.

### Could I use this API for synchronizing user profile property values from my on-premises SharePoint farms to SharePoint Online?

Yes, on-premises SharePoint can be used just like any other source system. You must export the user profile values from your on-premises SharePoint to the JSON file format, and then the process would be exactly the same as importing values from any other system.

### Can I import string based, multi-value properties?

No, this is not currently supported with this API.

### What permissions are required for executing this API?

You must have Global Admin permissions currently. SharePoint Admin is not sufficient.

### Can I import taxonomy based properties?

No, this is not currently supported with this API.

### What if I define a mapping in the code that is not used or have properties in the JSON file that are not mapped?

If your code/script defines a mapping that is not used or the data file does not contain properties for that mapping, execution continues without any exceptions, and the import is applied based on the mapped properties. However, if you have a property in the JSON file that is not mapped, the import process is aborted, and exception details are provided in the log file for the specific job execution.

### What if I need to update custom properties that are beyond the size limitations of this bulk API (that is, greater than a 2-GB file or 500,000 properties)?

You must batch your jobs accordingly by triggering multiple jobs in sequence (that is, finishing one job at a time with the maximum limit on this API). You should expect that these high bandwidth imports will take a long time to complete. Also, you should optimize the import jobs only for delta changes in custom profile properties rather than importing a full set of values in all jobs.

### Which Azure AD attributes are being synchronized to SharePoint Online user profiles by default?

See the following table for the official list of synchronized attributes and their mapping between Azure AD and the SharePoint Online user profile service.

Azure Directory attribute  | SharePoint Online profile property
---------|----------
ObjectSid | SPS-SavedSID
msonline-UserPrincipalName | UserName
msonline-UserPrincipalName | AccountName
msonline-UserPrincipalName | SPS-ClaimID
msonline-UserPrincipalName | SPS-UserPrincipalName
GivenName | FirstName
sn | LastName
Manager | Manager
DisplayName | PreferredName
telephoneNumber | WorkPhone
proxyAddresses | WorkEmail
proxyAddresses | SPS-SIPAddress
PhysicalDeliveryOfficeName | Office
Title | Title
Title | SPS-JobTitle
Department | Department
Department | SPS-Department
ObjectGuid | ADGuid
WWWHomePage | PublicSiteRedirect
DistinguishedName | SPS-DistinguishedName
msOnline-ObjectId | msOnline-ObjectId
PreferredLanguage | SPS-MUILanguages
msExchHideFromAddressList | SPS-HideFromAddressLists
msExchRecipientTypeDetails | SPS-RecipientTypeDetails
msonline-groupType | IsUnifiedGroup
msOnline-IsPublic | IsPublic
msOnline-ObjectId | msOnline-ObjectId
msOnline-UserType | SPS-UserType
GroupType | GroupType
SPO-IsSharePointOnlineObject | SPO-IsSPO

## See also

- [User profile solutions for SharePoint](user-profile-solutions-for-sharepoint.md)
