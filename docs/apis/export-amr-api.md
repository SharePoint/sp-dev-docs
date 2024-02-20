---
title: "SharePoint Migration Export (Asynchronous Metadata Read) API"
description: This document targets ISVs and any third-party vendors/developers who are developing and maintaining a migration tool.
ms.date: 09/26/2023
ms.author: jhendr
author: JoanneHendrickson
manager: serdars
audience: ITPro
ms.subservice: migration-tool
ms.topic: article
ms.localizationpriority: high
ms.collection:
  - SPMigration
  - m365-collaboration
---
# SharePoint Migration Export (Asynchronous Metadata Read) API

## Overview

The goal of the new Migration Asynchronous Metadata Read (AMR) API is to reduce the number of calls, reduce throttling, and improve overall migration performance for our customers. Instead of calling thousands of calls to query information from SPO, the new Migration Asynchronous Metadata Read can return the same amount of data in a single read.

When the new SharePoint Migration Export (Asynchronous Metadata Read) API performs a read operation of a provided URL, the Microsoft backend software aggregates all the information into a designated manifest. The ISV can read back from the manifest and parse the metadata without sending thousands of calls individually.  The AMR API also has the ability to load balance the server, and supports an unlimited amount of metadata to be migrated.

This document targets ISVs and any third-party vendors/developers who are developing and maintaining a migration tool.

### Background

Currently, the [SharePoint Online Migration API](migration-api-overview.md), lets your migration tool efficiently migrate large amounts data to SharePoint Online. However, the lack of an official API to read content from SharePoint Online means that these tools must rely on CSOM/Vroom function calls to perform individual metadata read operations.

Large numbers of calls increase the likelihood of throttling, which impacts migration performance and customer experience. Ineffective call usage results in large SQL round trip per function calls that can potentially bring down the database and impact its reliability.

A migration performance study identified four areas where a high number of calls are heavily used:

- **Incremental migration** relies on calls to retrieve the SharePoint online (SPO) content. It compares it with the source location to determine if there have been any changes to the content and whether to proceed with migration.
- **Structure creation** leverages calls for site, web part and navigation creation.
- **After migration verification** is done when migration is completed and is used to ensure the source and destination file metadata matches.
- **Permission settings**  function calls are made to get user permission information.

## SharePoint Migration Export (Asynchronous Metadata Read) API

The SharePoint Migration Export (Asynchronous Metadata Read) API aims to reduce the calls in areas: incremental migration, after migration verification and permission settings.

> [!Note]
> The first version of the SharePoint Migration Export (Asynchronous Metadata Read) API supports files, folders, lists, list items, and the document library. Permissions are supported for all customers.

Key supported features:

- Ability to aggregate small metadata requests calls (for example, CSOM) into a single AMR call with the multiple URL feature
- Ability to read unlimited items with a single API call.
- Incremental migration feature support returning of item changed since last query with *changeToken* feature
- Ability to include a rich set of metadata per item
- Ability to return only top-level structure without subfolders or children.

More detailed information about the features and the API description is covered in the section below.


The Migration Asynchronous Read APIs are:

Single

```csharp
public SPAsyncReadJobInfo CreateSPAsyncReadJob(
        Uri url,
        SPAsyncReadOptions readOptions,
        EncryptionOption encryptionOption,
        string azureContainerManifestUri,
        string azureQueueReportUri)
```

Multiple

```csharp
public SPAsyncReadJobInfo CreateSPAsyncReadJobWithMultiUrl(
        Uri[] urls,
        SPAsyncReadOptions readOptions,
        EncryptionOption encryptionOption,
        string azureContainerManifestUri,
        string azureQueueReportUri)
```

The API is made up of five input parameters and one output structure field.

## Input Parameters

### URL

The full path URL  lets your migration tool to specify the root URL path of the SharePoint list, files/folder document library to be read. By default, the server-side code will read and return all the metadata of files, folders, and root objects including subfolders and their children content.

*Example:*
This document library URL, `https://www.contoso.com/Shared%20Document`, will be read back for metadata of any files or folders that live under the root URL. `https://www.contoso.com/Shared%20Documents/FolderA/` will be read back for children metadata in FolderA.

#### Multiple URLs

With the latest API update in Q1 2020, AMR will now support multiple URL inputs. This means the user can input multiple root URLs or subfolder URLs and aggregate them into a single call.

As there is a fixed overhead, AMR is most effective when there is a large number of reads when processing AMR. There are cases when the migration software may not want to read the whole root level URL. The multiple URL feature lets the software to aggregate multiple requests into a single request to improve performance while reducing number of calls.

(For more information regarding the size recommendation, see the performance section)

*Example:* The document library URL, `https://www.contoso.com/Shared%20Document`, has folders A through J . The customer only wants to migrate folders A, B, C, D, and E. Instead of issuing a single read at the root level and returning large unnecessary content, or issuing AMR per individual folder, which is not effective, the software can issue URI [A, B, C, D, E] in the input parameters returning only required metadata.

Currently there is a maximum of 5000 URL aggregation limits per call.

#### readOptions Flag

The read asynchronous function will include the SPAsyncReadOptions structure, which covers the optional flags to allow the user to specify version and security setting on the site level more is described below.

```csharp
IncludePermission {get; set;}
```

If set, the permissions associated with files and items are included in the export. If absent or set to false, no permission will be included.

```csharp
IncludeVersions{ get; set; }
```

If set, this indicates all the files and list item version history is to be included in the export operation. If absent, only the most recent version is provided.

```csharp
IncludeSecurity{ get; set; }
```

This flag indicates whether to include all user or group information from a site. By default, users and groups that are part of the object metadata will be returned, such as author or modifier.

If you use this flag, all users in the site collection will be included. If you are issuing AMR calls for different document libraries that are under the same site collection, the same set of users will be included each time, unless there has been a change.

>[!Important]
>Using this option can result in very slow performance. Use it only as described in the steps below.

If you have a large number of objects in a document library, it is faster to do the following two calls to read the security setting and its child folders:

1. To get user/group info, call the AMR job on the top root folder with security on using this setting:
("IncludeSecurity=true" & "IncludeDirectDescendantsOnly=true").
1. For the rest of the structure, call the AMR job with the security off:
"IncludeSecurity=false"

```csharp
public bool IncludeDirectDescendantsOnly { get; set;}
```

If specified only the top-level metadata item is read back. Example: The root URL contains file A and folder B. If this flag is specified, the manifest returns only file A and folder B metadata. It will not return any metadata included inside folder B.

The use case for this function:  The ISV can issue a default read to retrieve the top-level items and then issue multiple `CreateSPAsyncReadJob` to read back all the sub folder content in parallel to improve throughput.

```csharp
public bool IncludeExtendedMetadata { get; set; }
```

This flag indicates whether to return the extended set of metadata content of object query. By default this option is off and only basic content is provided (for example, names, URL, author, modifier, dates) . Turning on  this flag provides all the metadata content; however, it will also impact the performance as query will take longer.

Recommendation is to keep the default for file share migration, but consider setting this flag on for SharePoint on-premises or other more complex migration.

```csharp
public string StartChangeToken { get; set; }
```

This option applies to input URL of list or document library only.

One of the key calls contributor is incremental migration. ChangeToken idea is introduced to reduce the unnecessary calls. If StartChangeToken is not specified, the CreateSPAsyncReadJob will query and read back all the items specified by the API function. Once specified with the ChangeToken value, only the item changed since last query is returned.

During incremental migration, instead of query everything again, by populating StartChangeToken with the change token received from the CurrentChangeToken output in returning job info, createSPAsyncReadJob then returns only the items that got changed since the specified StartChangeToken, reducing the overall calls.

Below is a sample of how the `startChangeToken` might work. This example uses the optional feature setting for initial call and the parameter setting for incremental passes.

![Export API process](../images/async-read-api-flow.png)

#### Invalid Value

If an invalid value is detected, other than NULL, an error will be generated, and the operation will be terminated.

#### encryptionOption

This is an optional parameter. If it is specified, the AES256CBCKey is used to encrypt output files and queue messages. Otherwise, there is no encryption.

For more information, see [EncryptionOption Class](/dotnet/api/microsoft.sharepoint.client.encryptionoption).

#### azureContainerManifestUri

The valid URL including SAS token for accessing the Azure Blob Storage Container, which contains the block blobs for the manifest and other package describing XML files. This location will also be used for the log output response. The SAS token must have been created with only Read and Write permissions or the asynchronous metadata read job will fail. The SAS token should at least have a lifetime that starts at from no later than when the job was submitted, until a reasonable time for successful import to have concluded.

#### azureQueueReportUri

The valid URL including SAS token for accessing the user provided Azure Queue used for returning notifications of asynchronous metadata read job progress. If this value is not null and proper access is granted in the SAS token in this URI, it will be used for real-time status update. The SAS token must have been created with Add permissions or the migration job will be unable to add events to the queue.

Once accepted, the job ID will be written to the notification queue if it was provided and access is valid. The notification queue can be used for multiple migration jobs at the same time, as each job will identify itself in values sent back to the notification queue.

## Output Parameters

### CurrentChangeToken

```csharp
public string CurrentChangeToken { get; set; }
```

This function returns the changeToken associates with this query. By specifying this changeToken in the input field with subsequent read, the API will return only items changed since this last query.

#### Manifest Output

After the *asyncMigrationRead* function prepares execution, the final manifest will be placed in the container specified, under a folder named **JobId**. The manifest export package structure will be like the *createMigration* Import Package structure. The general output structure is summarized in table below.

> [!NOTE]
> Once the AMR manifest package reaches 25MB, it will split into multiple packages per request.

Below is an example on how to query the folder:

```csharp
CloudBlobDirectory folder = blobContainerObj.GetDirectoryReference(jobid);
CloudBlockBlob blob = folder.GetBlockBlobReference(manifestFileName);
```

|XML file|Schema File|Description|
|:-----|:-----|:-----|
|ExportSettings.XML|DeploymentExportSettings Schema|ExportSettings.XML does the following:</br></br>- Contains the export settings specified by using the SPExportSettings class and other classes that are part of the content migration object model. </br></br>- Ensures that the subsequent export process (at the migration target site) enforces the directives specified in the export settings.</br></br>- Maintains a catalog of all objects exported to the migration package.|
|LookupListMap.XML|DeploymentLookupListMap Schema|Provides validation for the LookupListMap.XML file exported into the content migration package. LookupListMap.XML maintains a simple lookup list that records SharePoint list item (list item to list item) references.|
|Manifest.XML|DeploymentManifest Schema|Provides validation for the Manifest.xml file that is exported into the content migration package. Provides a comprehensive manifest containing listings of both the contents and the structure of the destination site (for example, SPO) . |
|Requirements.XML|DeploymentRequirements Schema|"Provides validation for the Requirements.xml file exported into the content migration package. Requirements.xml maintains list of deployment requirements in the form of installation requirements on the migration target, such as feature definitions,  template versions, Web Part assemblies, and language packs."|
|RootObjectMap.XML|DeploymentRootObjectMap Schema|"Provides validation for the RootObjectMap.xml file exported into the content migration package.RootObjectMap.xml maintains a list of mappings of secondary (dependent) objects, which allows the import phase of the migration operation to correctly place the dependent objects relative to the locations of the root object mappings."|
|SystemData.XML|DeploymentSystemData Schema|Provides validation for the SystemData.xml file exported into the content migration package.SystemData.xml does the following: Collects a variety of low-level system data. Records the number and names of Manifest.xml files (in cases where the migration uses multiple manifests).|
|UserGroupMap.XML|DeploymentUserGroupMap Schema|Provides validation for the UserGroup.xml file exported into the content migration package. UserGroup.xml maintains a list of users and user security groups with respect to access security and permissions.|
|ViewFormsList.XML|DeploymentViewFormsList Schema|Provides validation for the ViewFormsList.xml file exported into the content migration package.ViewFormsList.xml maintains a list of Web Parts and tracks whether each is a view or form.|

### Encoding invalid XML characters

When invalid XML characters are detected in relevant fields, they're encoded. For any attribute that is XML encoded, decoding is needed for the value. Encoded fields are included in `EncodedAttributes`, in a comma-separated attribute list.

**Example**

In this  example, these attributes are encoded: URL, ParentWebURL, Name, and Version.

```xml
<File Url="testlib_x002F_File_0905-1653-31240"
      Id="e72e2015-91a4-4d07-ae9a-7b6c76918d2a"
      ParentWebId="7206fc09-e4af-48b3-8730-ed7321396d7a"
      ParentWebUrl="_x002F_"
      Name="File_0905-1653-31240"
      ListItemIntId="3"
      ListId="48ea9454-9538-47ae-926d-917df80bc93e"
      ParentId="33ff2f12-c818-4c8d-8578-c6d057172fd8"
      ScopeId="385cd4d5-86da-4183-bdac-2e83da1b05fc"
      TimeCreated="2021-11-08T03:57:05"
      TimeLastModified="2021-01-17T16:01:48"
      Version="_x0031_.0"
      FileSize="1"
      Level="1"
      EncodedAttributes="Url,ParentWebUrl,Name,Version">
```

>[!Warning]
>If XSD is replied on to parse manifest files, parsing may fail when **EncodedAttributes** is used.

#### How to retrieve the manifest from the Azure blob

The following example code demonstrates how to get the Azure blob of a manifest file and decipher it:

```csharp
// Get Azure blob of a manifest file
CloudBlockBlob blob = folder.GetBlockBlobReference(blobName);
blob.FetchAttributes();

using (Stream stmTemp = new MemoryStream())
{
    // Download current manifest file
    blob.DownloadToStream(stmTemp);

    // Get IV and decrypt the content into output dir
    byte[] IV = Convert.FromBase64String(blob.Metadata[“IV”]);

    using (Stream targetStream = System.IO.File.Open(outputFileFullPath, FileMode.Append))
    {
            using (Aes alg = new AesCryptoServiceProvider())
            {
                stmTemp.Seek(0, SeekOrigin.Begin);
                using (CryptoStream csDecrypt = new CryptoStream(
                    stmTemp,
                    alg.CreateDecryptor(key, IV),
                    CryptoStreamMode.Read))
                {
                    csDecrypt.CopyTo(targetStream);
                }
            }
        }
}
```

#### JobQueueUri

```csharp
public Uri JobQueueUri { get; set; }
```

The reporting features are the same as they are for `CreateMigrationJob`. Logging is provided to track the status of the asynchronous metadata read. After a scan of the database and an estimate of your tools, the log provides an estimate of the number of items to be read per URL. By default, blob queue permissions and settings are set to "all access", the same as when the ISV calls `ProvisionMigrationContainer` during the `CreateMigrationJob`.

In addition to the events supported by the Import API (CreationMigrationJob), a new job event called  `FinishManifestFileUpload` will be added to the status queue in real time.  This is added after the manifest file is generated and uploaded.

As it’s a real time event, ISVs and developers can also immediately download and parse the manifest files once `FinishManifestFileUpload` is generated. Use the field `ManifestFileName` to parse this event to get every manifest file name, including systemdata.xml, usergroup.xml, etc.

The new event will look like this:

```json
{"Event", "FinishManifestFileUpload"},
{"JobId", “f8d7d577-676e-47ce-ab69-ae7803979883”},
{"Time", “2019-09-03T19:11:33.903”},
{"ManifestFileName", “f8d7d577-676e-47ce-ab69-ae7803979883/ExportSettings.xml”}
```

#### EncryptionKey

```csharp
public byte[] EncryptionKey { get; set; }
```
It returns the AES256CBC encryption key used to decrypt the message in azureManifest container and azureReport Queue.

|Output parameter|Description|
|:-----|:-----|
|JobID/GUID|Return a unique Job ID associated with this asynchronous read|
|AzureContainerManifest|Return the URL for accessing the async read manifest|
|JobQueueUri|URL for accessing Azure queue used for returning notification of migration job process|
|EncryptionKey|AES256CBC encryption key used to decrypt messages from job/manifest queue|

## Error codes

These error codes are expected behavior under specific conditions.  Use discretion handling them.

|Error code|Error message|Description|
|:-----|:-----|:-----|
|-2146232832|The changeToken refers to a time before the start of the current change log.|The change log is limited to 60 days immediately before the current date.  This error code is returned when the changeToken refers to a time outside the 60 day window.|
|-2147213196|Operation canceled.|The client cancels the read operation. This is an expected behavior and a cancel request is processed.|

## Set up Guidelines

The following provides high-level guidelines for implementing the asynchronous metadata migration function. This documentation does not go into details on how to interact with SharePoint RESTful service. It is assumed that the ISV has prior knowledge and will be able to access the target website with proper permission.

For more information on how to access the SharePoint website, see [Get to know the SharePoint REST service](../sp-add-ins/get-to-know-the-sharepoint-rest-service.md).

1. Install and update the latest Microsoft.SharePointOnline.CSOM version. The minimum version requirement is V16.1.9119.1200 or later.
1. ISVs figure out the folder, document library or files of interested to be query and issued with CreateSPAsyncReadJob function.
1. Once successfully created, query the job status using the *jobQueueUri*. It provides the job process status and any error logging. After job completion, parse the manifest to retrieve the metadata.

### SharePoint Migration Export (Asynchronous Metadata Read) API Example

#### Scenario: Large file share (> 1 million) with nested files/folders

Suggestion:
1. Issue CreateSPAsyncReadJob
    - URL = root URL (for example, `www.contoso.com/my-resource-document`)
    - Optional Flag: `IncludeDirectDescendantsOnly(true)`

    For each of the sub folders, issue createSPAsyncReadJob if the folder has > 10K

    **Sample source code**

    ```powershell
    $site = get-spsite https://test.sharepoint.com  # get site
    $web = get-spweb https://test.sharepoint.com  # get web
    $list = $web.GetList("Shared Documents") # get the document library under this web

    # Get the Doclib root folder
    $rootFolder = $web.GetFolder($list.Rootfolder.ServerRelativeUrl)

    # You can call 1 AMR job here, to get metadata of the direct children of the root folder  only
    CreateAMRJob($rootFolder)

    # Create parallel AMR jobs for the direct level subfolders
    Foreach ($folder in $rootFolder.SubFolders)
    {
      // Create 1 AMR job per folder tree
      CreateAMRJob($folder)
    }
    ```

    The ISV can optimize the recursive highlight part by leveraging the $ folder.item["SMTotalFileCount"] that will return the cumulative file count in the folder tree for a given folder item.  Follow the recommendations in the performance section on type of AMR jobs to issue

1. object, issued in multiple URLs if < 10K objects

> [!IMPORTANT]
> This scenario is only recommended for top level folders or if the sub-folder contains greater than one million objects. The performance of the AMR API is *not as effective* when reading a small set of items.

#### Scenario: Incremental Migration of FileShare for a sub folder

1. Issue CreateSPAsyncReadJob:</br>
   1. URL = root URL (for example, `www.contoso.com/my-resource-document/a`)
   1. Remembered the `CurrentChangeToken`

1. After some time, the software wishes to perform incremental migration. Issue CreateSPAsyncReadJob with following term:</br>
    1. URL = root URL (for example, `www.contoso.com/my-resource-document/a`)
    1. Optional Flag: `StartChangeToken(CurrentChangeToken)`

## Limitations

Asynchronous Metadata Read (Export API) now supports unlimited list, document library, file, and folder metadata export.

## Performance Expectation

The preliminary performance test provides a rough estimate of more than 400 items per second throughput for every 250K of objects read. We have seen over 700 items per second throughput in a testing environment.  However, this is highly dependent on the number of items that are being read plus the implementation of the AMR API. This does not account for any potential throttle over the network. If the asynchronous read function fails to reach the server due to throttling, then performance will be impacted.

This measure of throughput assumes the software package has a sufficient number of items per read. Microsoft recommends the following:

|                    Folder size                    |                                                Recommendation                                                |
| :------------------------------------------------ | :----------------------------------------------------------------------------------------------------------- |
| Less than 10,000 items                            | Combine the URLs of multiple folders into a single call                                                      |
| Greater than 10,000 items but less than 1,000,000 | Run AMR at the root folder level                                                                             |
| Greater than 1,000,000                            | Use the recursive call logic to explore that folder's direct level children until there are no more folders. |

For a single read query, it is faster to use the Graph API or a RESTful/CSOM query.

One of the key performance benefits of using the asynchronous metadata read is the ability to balance the server-side load and the backend query. It is much more efficient than using individual CSOM load reducing to lessen your chance of throttling.
