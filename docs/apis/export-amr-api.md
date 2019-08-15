---
title: "Sharepoint Migration Export (Asynchronous Metadata Read) API"
ms.reviewer: 
ms.author: jhendr
author: JoanneHendrickson
manager: pamgreen
audience: ITPro
ms.topic: article
ms.prod: sharepoint-server-itpro
localization_priority: Priority
ROBOTS: NOINDEX, NOFOLLOW
ms.collection: 
- Strat_SP_gtc
- SPMigration
description: "Sharepoint Migration Export (Asynchronous Metadata Read) API"
---

# Sharepoint Migration Export (Asynchronous Metadata Read) API


## Overview
The goal of the new Migration Asynchronous Metadata Read API is to reduce the number of CSOM calls, reduce throttling, and improve overall migration performance. Instead of calling thousands of CSOM calls to query information from SPO, the new Migration Asynchronous Metadata Read can return the same amount of data in a single read.

When the new Sharepoint Migration Export (Asynchronous Metadata Read) API performs a read operation of a provided URL, the Microsoft backend software aggregates all the information into a designated manifest. The ISV can read back from the manifest and parse the metadata without sending thousands of CSOM calls individually.

This document targets ISVs and any third-party vendors/developers who are developing and maintaining a migration tool.



### Background:
Currently, the SharePoint Online Migration API, [CreateMigrationJob](https://docs.microsoft.com/en-us/sharepoint/dev/apis/migration-api-overview), lets your migration tool efficiently migrate large amounts data to SharePoint Online. However, the lack of an official API to read content from SharePoint Online means that these tools must rely on CSOM function calls to perform individual metadata read operations.

</br>
Large numbers of CSOM calls increase the likelihood of throttling which impacts migration performance and customer experience. Ineffective CSOM usage results in large SQL round trip per function calls that can potentially bring down the database and impact its reliability.

A migration performance study identified four areas where CSOM calls are heavily used: 
- **Incremental migration** relies on CSOM calls to retrieve the SharePoint online (SPO) content. It compares it with the source location to determine if there have been any changes to the content and whether to proceed with migration.  
- **Structure creation** leverages CSOM calls for site, webpart and navigation creation.
- **After migration verification** is done when migration is completed and is used to ensure the source and destination file metadata matches.
- **Permission settings** are CSOM function calls made getting user permission information.

## Sharepoint Migration Export (Asynchronous Metadata Read) API

The Sharepoint Migration Export (Asynchronous Metadata Read) API aims to reduce the CSOM calls in areas: incremental migration, after migration verification and permission settings. 

>[!Note]
>The first version of the Sharepoint Migration Export (Asynchronous Metadata Read) API supports files, folders, lists, list items, and the document library. Permissions are expected to be covered in a subsequent version.

Key supported features:

- Ability to read up to 1 million items with a single API call. For more information, see Limitations. 
- Incremental migration feature support returning of item changed since last query with changeToken feature
- Ability to include a rich set of metadata per item 
- Ability to return only top-level structure without subfolders or children.

More detailed information about the features and the API description is covered in the section below.

The new Migration Asynchronous Read API is:

```csharp

    public SPAsyncReadJobInfo CreateSPAsyncReadJob(
            Uri rootObjectUri,            
            SPAsyncReadOptions readOptions,
            EncryptionOption encryptionOption,
            string azureContainerManifestUri,
            string azureQueueReportUri)
 
```

The API is made up of five input parameters and one output structure field. 



## Input Parameters

### URL
 
The full path URL  lets your migration tool to specify the root URL path of the SharePoint list, files/folder document library to be read. By default, the server-side code will read and return all the metadata of files, folders and root objects including subfolders and their children content.

*Example:*
This document library URL, https://<spam><spam>www.contoso.com/Shared%20Document<spam>, will be read back for metadata of any files or folders that live under the root URL.

<spam><spam>https://www.contoso.com/Shared%20Documents/FolderA/<spam><spam>, will be read back for children metadata in FolderA.

#### readOptions Flag
The read asynchronous function will include the SPAsyncReadOptions structure which covers the optional flags to allow the user to specify version and security setting on the site level more is described below.

    IncludeVersions{ get; set; }

If set, this indicates all the files and list item version history is to be included in the export operation. If absent, only the most recent version is provided.
<br>
<br>

    IncludeSecurity{ get; set; }

This flag indicates whether to include all user or group information from a site. By default, it assumes the security is not set, hence no user or group information is provided.


    public bool IncludeDirectDescendantsOnly { get; set;}

If specified only the top level metadata item is read back. Example: The root URL contains file A and folder B. If this flag is specified, the manifest returns only file A and folder B metadata. It will not return any metadata included inside folder B.

The use case for this function:  The ISV can issue a default read to retrieve the top-level items and then issue multiple *CreateSPAsyncReadJob* to read back all the sub folder content in parallel to improve throughput.


    public bool IncludeExtendedMetadata { get; set; }

This flag indicates whether to return the extended set of metadata content of object query. By default this option is off and only basic content is provided (e.g. names, URL, author, modifier, dates) . Turning  this flag on provides all the metadata content; however, it will also impact the performance as query will take longer. 

Recommendation is to keep the default for file share migration, but consider setting this flag on for Sharepoint on-prem or other more complex migration.

    public string StartChangeToken { get; set; }

This option applies to input URL of list or document library only.
 
One of the key CSOM contributor is incremental migration. ChangeToken idea is introduced to reduce the unnecessary CSOM calls. If StartChangeToken is not specified, the CreateSPAsyncReadJob will query and read back all the items specified by the API function. Once specified with the ChangeToken value, only the item changed since last query is returned.
 
During incremental migration, instead of query everything again, by populating StartChangeToken with the change token received from the CurrentChangeToken output in returning job info, createSPAsyncReadJob then returns only the items that got changed since the specified StartChangeToken, reducing the overall CSOM calls. 

Below is a sample of how the *startChangeToken* might work. This example uses the optional feature setting for initial call and the parameter setting for incremental passes.  

![Export API process](docs/images/async-read-api-flow.png)

#### Invalid Value

If an invalid value is detected, other than NULL, an error will be generated, and the operation will be terminated.

#### encryptionOption

This is an optional parameter. If it is specified, the AES256CBCKey is used to encrypt output files and queue messages. Otherwise, there is no encryption. 

For more information, see [EncryptionOption Class](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.client.encryptionoption).


#### azureContainerManifestUri

The valid URL including SAS token for accessing the Azure Blob Storage Container which contains the block blobs for the manifest and other package describing XML files. This location will also be used for the log output response. The SAS token must have been created with only Read, List and Write permissions or the asynchronous metadata read job will fail. The SAS token should at least have a lifetime that starts at from no later than when the job was submitted, until a reasonable time for successful import to have concluded.
 
#### azureQueueReportUri
The valid URL including SAS token for accessing the user provided Azure Queue used for returning notifications of asynchronous metadata read job progress. If this value is not null and proper access is granted in the SAS token in this URI, it will be used for real time status update. The SAS token must have been created with Add permissions or the migration job will be unable to add events to the queue. 

Once accepted, the job ID will be written to the notification queue if it was provided and access is valid. The notification queue can be used for multiple migration jobs at the same time, as each job will identify itself in values sent back to the notification queue.


## Output Parameters

### CurrentChangeToken

    public string CurrentChangeToken { get; set; }
 
This function returns the changeToken associates with this query. By specifying this changeToken in the input field with subsequent read, the API will return only items changed since this last query.

#### Manifest Output

After the asyncMigrationRead function finishes execution, the final manifest will be placed in the container specified, with naming convention of “<jobid>/<filename>”.  Manifest export package structure will be like the *createMigration* Import Package structure. The general output structure is summarized in table below.


|**XML file**|**Schema File**|**Description**|
|:-----|:-----|:-----|
|ExportSettings.XML|DeploymentExportSettings Schema|ExportSettings.XML does the following:</br></br>- Contains the export settings specified by using the SPExportSettings class and other classes that are part of the content migration object model. </br></br>- Ensures that the subsequent export process (at the migration target site) enforces the directives specified in the export settings.</br></br>- Maintains a catalog of all objects exported to the migration package.|
|LookupListMap.XML|DeploymentLookupListMap Schema|Provides validation for the LookupListMap.XML file exported into the content migration package. LookupListMap.XML maintains a simple lookup list that records SharePoint list item (list item to list item) references.|
|Manifest.XML|DeploymentManifest Schema|Provides validation for the Manifest.xml file that is exported into the content migration package.Provides a comprehensive manifest containing listings of both the contents and the structure of the destination site (E.g. SPO) . |
|Requirements.XML|DeploymentRequirements Schema|"Provides validation for the Requirements.xml file exported into the content migration package. Requirements.xml maintains list of deployment requirements in the form of installation requirements on the migration target, such as feature definitions,  template versions, Web Part assemblies, and language packs."|
|RootObjectMap.XML|DeploymentRootObjectMap Schema|"Provides validation for the RootObjectMap.xml file exported into the content migration package.RootObjectMap.xml maintains a list of mappings of secondary (dependent) objects, which allows the import phase of the migration operation to correctly place the dependent objects relative to the locations of the root object mappings."|
|SystemData.XML|DeploymentSystemData Schema|Provides validation for the SystemData.xml file exported into the content migration package.SystemData.xml does the following: Collects a variety of low-level system data. Records the number and names of Manifest.xml files (in cases where the migration uses multiple manifests).|
|UserGroupMap.XML|DeploymentUserGroupMap Schema|Provides validation for the UserGroup.xml file exported into the content migration package. UserGroup.xml maintains a list of users and user security groups with respect to access security and permissions.|
|ViewFormsList.XML|DeploymentViewFormsList Schema|Provides validation for the ViewFormsList.xml file exported into the content migration package.ViewFormsList.xml maintains a list of Web Parts and tracks whether each is a view or form.|

#### JobQueueUri

    public Uri JobQueueUri { get; set; }

The reporting features is the same as createMigrationJob. Logging will be provided to track the status of the asynchronous read.  In additional, the log will provide an estimate number of items to be read per url after scan through the database and a rough estimate for your tools.
In terms of blob queue permission and settings, all access will be by default and the same as when the ISV called ProvisionMigrationContainer during the createMigrationJob.

#### EncryptionKey:
public byte[] EncryptionKey { get; set; }</br></br>
It returns the AES256CBC encryption key used to decrypt the message in azureManifest container and azureReport Queue.

|**Output parameter**|**Description**|
|:-----|:-----|
|JobID/GUID|Return a unique Job ID associated with this asynchronous read|
|AzureContainerManifest|Return the URL for accessing the async read manifest|
|JobQueueUri|URL for accessing Azure queue used for returning notification of migration job process|
|EncryptionKey|AES256CBC encryption key used to decrypt messages from job/manifest queue|

## Set up Guidelines
The following provides high level guidelines for implementing the asynchronous metadata migration function. This documentation does not go into details on how to interact with SharePoint RESTful service. It is assumed that the ISV has prior knowledge and will be able to access the target website with proper permission. </br>,</br>For more information on how to access the Sharepoint website, refer to [Get to Know the SharePoint Rest Service](https://docs.microsoft.com/en-us/sharepoint/dev/sp-add-ins/get-to-know-the-sharepoint-rest-service).

1. Install and update the latest Microsoft.SharePointOnline.CSOM version. The minimum version requirement is V16.1.8600 or later.
2. ISVs figure out the folder, document library or files of interested to be query and issued with CreateSPAsyncReadJob function. 
3. Once successfully created, query the job status using the *jobQueueUri*. It provides the job process status and any error logging. After job completion, parse the Manifest to retrieve the metadata.

### Sharepoint Migration Export (Asynchronous Metadata Read) API Example 

#### Scenario: Large FileShare with nested files/folders

Suggestion:

1. Issue CreateSPAsyncReadJob:</br>
    a. URL = root URL (e.g. <spam><spam>www.contoso.com/my-resource-document<spam><spam>)</br>
    b. Optional Flag: IncludeDirectDescendantsOnly(true)

2. For each of the sub folders, issues createSPAsyncReadJob , for example if there are sub folder A and B</br>
    a. Issue CreateSPAsyncReadJob with URL = root URL (e.g. <spam><spam>www.contoso.com/my-resource-document/a<spam><spam>) </br>
    b. Issue CreateSPAsyncReadJob with URL = root URL (e.g. <spam><spam>www.contoso.com/my-resource-document/b<spam><spam>) 


#### Scenario: Tenant to tenant or large Sharepoint Migration
 
1. Issue CreateSPAsyncReadJob: </br>
    a. URL = root URL (e.g. <spam><spam>www.contoso.com/my-resource-item<spam><spam>)</br>
    b. Optional Flag: IncludeDirectDescendantsOnly(true) , IncludeFullMetadata(true)


#### Scenario: Incremental Migration of FileShare for a sub folder

1. Issue CreateSPAsyncReadJob:</br>
    a. URL = root URL (e.g. <spam><spam>www.contoso.com/my-resource-document/a<spam><spam>)</br>
    b. Remembered the CurrentChangeToken 
    
2. After some time, the software wishes to perform incremental migration. Issue CreateSPAsyncReadJob with following term:</br>
    a. URL = root URL (e.g. <spam><spam>www.contoso.com/my-resource-document/a<spam><spam>)</br>
    b. Optional Flag: StartChangeToken(CurrentChangeToken)


## Limitations
<a name="limitations"> </a>

By default, each URL supports up to 1 million limits. At the start of the migration, the asynchronous read migration function will check. If more than 1 million is detected an error will be thrown. Multiple versions of a single file will count as one. This limit may be changed in the future.

**Sharepoint Migration Export (Asynchronous Metadata Read) API Limitations**</br>


|**Type**|**SharePoint Online Limit**|**Recommended limit</br>for async read**|**Description**|
|:-----|:-----|:-----|:-----|
|Lists|30 million items|1 million|Per list URL, the migration read will process up to 1 million rea|
|Document Library|30 million files/folders|1 million|Per list URL, the migration job will process up to 1 million reads|
|Users|2 million per site collection|1 million|Per site collection. This is only supported in a future permission setting.|


## Performance Expectation
The preliminary performance test provides a rough estimate of more than 200 items per second throughput. This does not account for any potential throttle over the network. If the read asynchronous function fails to reach the server due to throttling, then performance will be impacted. At the start of read asynchronous migration, the server calculates the number of objects to confirm that it is within the 1 million object limit, hence there is an overhead.
 
For single read query or small items read (e.g. hundreds of items), it is faster to use Graph API or RESTful/CSOM query as the asynchronous read metadata will have the overhead cost.

However, one of the key performance benefits of the asynchronous metadata read is the ability to balance the server-side load and the backend query is much more efficient than individual CSOM load reducing your chance of throttling. 




