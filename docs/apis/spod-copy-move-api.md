---
title: Microsoft 365 Copy and Move API (CreateCopyJobs)
ms.date: 6/2/2020
ms.author: jhendr
author: JoanneHendrickson
manager: pamgreen
audience: ITPro
f1.keywords:
- NOCSH
ms.topic: article
ms.service: sharepoint-online
localization_priority: Priority
ms.collection: 
- SPMigration
- M365-collaboration
search.appverid: MET150
description: "Microsoft 365 Copy and Move API (CreateCopyJobs)"
---
# Microsoft 365 Copy and Move API (CreateCopyJobs)

>[!IMPORTANT]
>SharePoint & OneDrive Copy and Move API replaces the CreateCopyJob API.  The CreateCopyJob API has been deprecated. 


The following API is based on the use of the SharePoint Client Side Object Model (CSOM). We recommend using [NuGet](https://www.nuget.org/) packages when you reference CSOM in your solution. 

You can find the latest version of the SharePoint Online CSOM package from the [NuGet library](https://www.nuget.org/) using the ID *Microsoft.SharePointOnline.CSOM*. 

>[!IMPORTANT]
>Learn more about [limitations](#limitations) of this API before you begin.


## Method

### CreateCopyJobs

This method creates a new copy or move job that lets you  copy or move a file or folder from one site in SharePoint, OneDrive, or Teams, to another site. 

#### Syntax

`public List<SPCopyMigrationInfo> CreateCopyJobs(Uri[] exportObjectUris, Uri destinationUri, SPCopyMigrationOptions options)`


#### Parameters

|Parameter|Description|
|:-----|:-----|
|exportObjectUris|The URL of a file or folders in a list that you want to copy or move|
|destinationUri|URL for the destination location.|

##### SPCopyMigrationOptions


`public bool IsMoveMode { get; set; }`

>[!IMPORTANT]
>By default, this is set to copy. For a move operation, set this parameter to true.


`public bool IgnoreVersionHistory { get; set; }`

If not specified, the version history will be ignored and not moved to the destination.


`public bool AllowSchemaMismatch { get; set; }`

This allows the item to move even if the target has a mismatched schema definition from the source list.
 

`public bool AllowSmallerVersionLimitOnDestination { get; set; }`

This allows the move to take place if the target file has older version. By default it’s disallowed to prevent data loss.


`public SPMigrationNameConflictBehavior NameConflictBehavior { get; set; }`

If a name conflict occurs at the target site, the default reports a failure.


`public bool IncludeItemPermissions { get; set; }`

Reserved for interal use only.


`public SPMoveAndShareFileInfo MoveAndShareFileInfo { get; set; }`

Reserved for internal use only.


`public bool BypassSharedLock { get; set; }`

This indicates whether a file with a share lock can still be moved in a move job. If you want to move a file that is locked, you need to set this.


`public string[] ClientEtags { get; set; }`

If set, and the source eTag doesn’t match the eTag specified, the copy and move won’t take place. If left NULL, no check will take place.


`public bool MoveButKeepSource { get; set; }`

Once set, this move operation is similar to copy. The file will move to destination, but the source content will not be deleted. If set, this will make a copy with the version history and preserve the original metadata. No source item deletions occurs at the end. 

>[!NOTE]
>This is not like the normal copy, which only copies the most recent major version and doesn't maintain all the metadata.


`public bool ExcludeChildren { get; set; }`

For this operation, only the root level folder of the URL is copied. The sub-folders or files within the folder will not be moved or copied.


### Output

|Output parameter|Description|
|:-----|:-----|
|JobID/GUID|Return a unique Job ID associated with this asynchronous read|
|SourceListItemUniqueIds|Return the source |
|JobQueueUri|URL for accessing Azure queue used for returning notification of copy and move process|
|EncryptionKey|	AES256CBC encryption key used to decrypt messages from job/manifest queue|


`public Uri JobQueueUri { get; set; }`

The reporting features are the same as they are for CreateMigrationJob. Logging tracks the status of the createCopyJobs. By default, blob queue permissions and settings are set to "all access”. It gives the job status as follows: job start, job end, and job error information. 


## Limitations 
Currently, the following limitations are:

|What|Limitation|
|:-----|:-----|
|File size|	A file must be less than 2 GB.|
|Number of items|	No more than 30,000 items in a job.|
|Total size of job|	Job size not to exceed 100 GB.|



