---
title: "SharePoint Online Migration API Overview"
ms.author: jhendr
author: JoanneHendrickson
manager: pamgreen
ms.date: 6/20/2018
description: "This document is to give more in depth Information about how to use the SPO Migration API."
---
# SharePoint Online Migration API

## API Documention

The following API description is based upon use of the SharePoint Client Side Object Model (CSOM). We do recommend using NuGet packages when you reference CSOM in your solution. You can find latest version of the SharePoint Online CSOM package from the NuGet library using id of `Microsoft.SharePointOnline.CSOM`.

> [!NOTE]
> You can find latest version of the SharePoint Online Client Side Object Model from [NuGet gallery](https://www.nuget.org/packages/Microsoft.SharePointOnline.CSOM/).

## Methods

### CreateMigrationJob

This method creates a new migration import job and queues it up for later processing by a separate timer job. The job will consume a well formed (pre-defined format) import package that is located in the Azure Blob Storage Containers specified in this method. The SLA for migration job processing is be controlled through pre-configured queue and work load throttling settings, and there is no guaranteed SLA or return time for a submitted job. 

#### Syntax

```csharp
public Guid CreateMigrationJob( 
    Guid gWebId,
    string azureContainerSourceUri,
    string azureContainerManifestUri,
    string azureQueueReportUri)
```

#### Parameters

##### gWebID

The unique identifier of the destination web targeted for the package import. Addition information and identifiers for the import are specified within the import package itself. This identifier can be found programmatically by querying the target web using CSOM calls.

##### azureContainerSourceUri

The valid URL including SAS token for accessing the Azure Blob Storage Container which contains the binary files of type block. The SAS token must have been created with only Read and List permissions or the migration job will fail. The SAS token should at least have a lifetime that starts at from no later than when the job was submitted, until a reasonable time for successful import to have concluded.<br>

The required permissions are as follows in the Azure Storage API:

```csharp
    (SharedAccessBlobPermissions.Read | 
	SharedAccessBlobPermissions.List)
```

**Note:** The change to enforce Read and List permissions on the SAS token is coming in a future build. Until then it will not be enforced. However, it is a best practice to use these values.

All files in the container must have at least a single snapshot applied to them to ensure that no file modification can occur from the customer during import. Any file that does not have a snapshot will be skipped during import and an error thrown, although the job will attempt to continue to import. The import pipeline will use the latest snapshot of the file available at the time of import. The following is an example of code that might be used to create a snapshot on a file after it is uploaded to Azure Blob Storage:

```csharp
CloudBlockBlob blob = blobContainerObj.GetBlockBlobReference(file);
blob.UploadFromStream(stm);
blob.CreateSnapshot();
```

> [!NOTE]
> The change to require and use the latest SnapShots on all files is coming in a future build, and until then will be ignored.

##### azureContainerManifestUri

The valid URL including SAS token for accessing the Azure Blob Storage Container which contains the block blobs for the manifest and other package describing XML files. This location will also be used for the log output. This container cannot be the same as the one used for the azureContainerSourceUri. The SAS token must have been created with only Read, List and Write permissions or the migration job will fail. The SAS token should at least have a lifetime that starts at from no later than when the job was submitted, until a reasonable time for successful import to have concluded.

> [!NOTE]
> The change to enforce Read, List and Write permissions on the SAS token is coming in a future build, and until then will be not be enforced, however it is best practice to use these values. If an issue arises using a current build, try removing the List permission as a temporary workaround, noting that it will become required soon.

All files in the container must have at least a single snapshot applied to them to ensure that no file modification can occur from the customer during import. Any file that does not have a snapshot will cause failures during import and errors thrown, potentially failing the entire migration job.

> [!NOTE]
> The change to require and use the latest SnapShots on all files is coming in a future build.  Until then they will be ignored.

##### azureQueueReportUri 

The valid URL including SAS token for accessing the user provided Azure Queue used for returning notifications of migration job progress. This value can be null if no notification queue will be used during import. If this value is not null and proper access is granted in the SAS token in this URI, it will be used for real time status update. The SAS token must have been created with only Add, Read and Update permissions or the migration job will be unable to add events to the queue. The required permissions are as follows in the Azure Storage API:

    (SharedAccessQueuePermissions.Add | SharedAccessQueuePermissions.Read | SharedAccessQueuePermissions.Update)

Once accepted, the job ID will be written to the notification queue if it was provided and access is valid. The notification queue can be used for multiple migration jobs at the same time, as each job will identify itself in values sent back to the notification queue.

#### Return values

The unique identifier for the migration job is returned if the job is successfully queued, or if unsuccessful, a null value will be returned. The migration job unique identifier can be used to query the migration job status while it is in the queue or being processed by using the GetMigrationJobStatus method.

**Example:**

```csharp
Guid MigrationJobId = TargetSite.CreateMigrationJob(
	TargetWebId,
	azureContainerSourceUri,
	azureContainerManifestUri,
	azureQueueReportUri);
```

### GetMigrationJobStatus

This method queries the queue status for the specified migration job. It is an optional check after calling the CreateMigrationJob method. Once the migration job has completed, it will no longer show up in the queue and the notification queue and/or log output should be checked for detailed status.

#### Syntax

```xml
[ClientNS.ClientCallableMethod]
public SPMigrationJobState GetMigrationJobStatus(Guid MigrationJobId)
```

#### Parameters

##### Id

The unique identifier of the migration job returned from CreateMigrationJob method.

#### Return values

The migration job status is returned using a SPMigrationJobState object if the job is found in the queue, or if unsuccessful, a value of none (0) will be returned.

**Example**

```csharp
SPMigrationJobState CurrentJobState = TargetSite.GetMigrationJobStatus(MigrationJobId);
```
 
## Enumerations

### SPMigrationJobState

SPMigrationJobState is an enumeration that tracks possible major states in the import queue.

#### Members

|**Member name**|**Description**|
|:-----|:-----|
|None	|Migration job is currently unknown to the queue, either through completion and removal, or invalid job identifier. Value=0.|
|Queued	|Migration job is currently known by the queue and not being processed. Value=2.|
|Processing	|Migration job is currently known by the queue and is being actively processed. Value=4.|
 
## Import Package Structure

Package structure is based on a constrained version of the Content Deployment package schema. Documentation for the original full schema can be found at [docs.microsoft.com](https://docs.microsoft.com/en-us/sharepoint/dev/schema/content-migration-schemas). Until published on docs.microsoft.com, the constrained structure can be found in this document in the appendix.

|XML file	|Schema File	|Description
|:-----|:-----|:-----|
|ExportSettings.XML|DeploymentExportSettings Schema |Provides validation for the ExportSettings.XML file exported into the content migration package. ExportSettings.XML does the following: <br> - Contains the export settings specified by using the SPExportSettings class and other classes that are part of the content migration object model. <br> - Ensures that the subsequent import process (at the migration target site) enforces the directives specified in the export settings. <br> - Maintains a catalog of all objects exported to the migration package.
|LookupListMap.XML	|DeploymentLookupListMap Schema |Provides validation for the LookupListMap.XML file exported into the content migration package. LookupListMap.XML maintains a simple lookup list that records SharePoint list item (list item to list item) references.
|Manifest.XML	|DeploymentManifest Schema|Provides validation for the Manifest.xml file that is exported into the content migration package.Provides a comprehensive manifest containing listings of both the contents and the structure of the source site. The migration operation uses the manifest file to reconstitute the source site and its components when it is imported to the destination site.|
|Requirements.XML|DeploymentRequirements Schema|Provides validation for the Requirements.xml file exported into the content migration package. Requirements.xml maintains list of deployment requirements in the form of installation requirements on the migration target, such as feature definitions, template versions, Web Part assemblies, language packs, and so forth.|
|RootObjectMap.XML|DeploymentRootObjectMap Schema|Provides validation for the RootObjectMap.xml file exported into the content migration package.RootObjectMap.xml maintains a list of mappings of secondary (dependent) objects, which allows the import phase of the migration operation to correctly place the dependent objects relative to the locations of the root object mappings.|
|SystemData.XML|DeploymentSystemData Schema|Provides validation for the SystemData.xml file exported into the content migration package.SystemData.xml does the following: Collects a variety of low-level system data. Records the number and names of Manifest.xml files (in cases where the migration uses multiple manifests).|
|UserGroupMap.XML|DeploymentUserGroupMap Schema|Provides validation for the UserGroup.xml file exported into the content migration package. UserGroup.xml maintains a list of users and user security groups with respect to access security and permissions.|
|ViewFormsList.XML|DeploymentViewFormsList Schema|Provides validation for the ViewFormsList.xml file exported into the content migration package.ViewFormsList.xml maintains a list of Web Parts and tracks whether each is a view or form.|

### Content structure

File content that is referenced within the manifest of the package structure must be stored in either a flat or hierarchical structure within the Azure Blob Store Container defined by the CreateMigrationJob’s `azureContainerSourceUri` parameter. For example, import packages generated form a legacy version export will not be hierarchical, and will instead have all files stored at the root level with a pattern like ########.dat where the # symbols are hexadecimal characters starting at 0 and no file names are repeated within a package. Alternately, a package generated from a file share can have the source folder hierarchy and file names preserved in the same hierarchy. 

The main requirement for the structure is that the FileValue references in the **Manifest.XML** file must refer to the exact name and physical hierarchy that the content is stored in within the Azure Blob Store location for import. The destination file names and folder hierarchy from the import operation are not directly related to the physical naming and hierarchy and are instead defined through the **Manifest.XML** file.

### ExportSettings.XML

The **ExportSettings.XML** file is expected to be at the root of the Azure Blob Store Container defined by the CreateMigrationJob’s `azureContainerManifestUri` parameter. This required file is validated using the constrained DeploymentExportSettings.XSD, which has some limited changes from current published [full 2013 package schema](https://docs.microsoft.com/en-us/sharepoint/dev/schema/content-migration-schemas). 

The main requirement is that the ExportSettings `SiteUrl` value must be populated with a URL consistent with the source URL used for the rest of the import package. In the case of file shares as a source, the URL would be pre-specified to be the source URL in the rest of the package, whereas a package generated through an export operation at a source site would be its original source site collection URL.

### LookupListMap.XML

The **LookupListMap.XML** file, if included, is expected to be at the root of the Azure Blob Store Container defined by the CreateMigrationJob’s azureContainerManifestUri parameter. This optional file is validated using the constrained **DeploymentLookupListMap.XSD**, which has no change from current published [full 2013 package schema](https://docs.microsoft.com/en-us/sharepoint/dev/schema/content-migration-schemas). 

Since an import package for the pipeline does not include defining fields or views on a list or document library, the **LookupListMap.XML** file will normally include no child nodes under the root and as such can also be excluded from the package if not required, although a warning may be logged in this case.

### Manifest.XML

All instances of the **Manifest.XML** file for a package are expected to be at the root of the Azure Blob Store Container defined by the CreateMigrationJob’s `azureContainerManifestUri` parameter. This required file is validated using the constrained **DeploymentManifest.XSD**, which has multiple major changes and significant reduction in types from current published [full 2013 package schema](https://docs.microsoft.com/en-us/sharepoint/dev/schema/content-migration-schemas). 

The **Manifest.XML** is the primary descriptor for metadata within the package, and provides the list/folder/item hierarchy, along with metadata for the items including references back to users and groups defined in the **UserGroupMap.XML** file. There may be more than one **Manifest.XML** file (which can be identified using different file names to uniquely identify them), and all are found by the import pipeline through references within the **SystemData.XML** file’s ManifestFile entries.

The main requirements for **Manifest.XML** to be possible to successfully import through the pipeline is that the Web Id and Document Library ID/List ID be consistent with the target location. If a Web ID is used which doesn’t match the target location, errors will occur because the parent web for the import operation cannot be found. 

Likewise, an incorrect Document Library ID/List ID will prevent the importation into the target Document Library or List. IDs should never be reused within the same site collection, so same packages should not be imported to the same target site collection regardless of the destination web.

For individual files and folders within the document library or list, their identifiers should be consistent between import events to the same location. Specifically, performing an import of a package generated form a file share would initially require generating new GUIDs for each file and folder, along with matching GUIDs for the list items that represent them. Therefore, performing a second import against the same target using the same package would keep the same IDs, but performing a second import against the same target using a new package for the same content would result in ID conflicts and import errors for all items in conflict. 

The initial generated package from a file share is effectively a form of record for the original generated IDs and can potentially be used as a reference for follow up package generation to prevent ID collisions when unintended, and to allow like IDs to ensure correct overwrite, deletion or move activities.

### Requirements.XML

The **Requirements.XML** file is expected to be at the root of the Azure Blob Store Container defined by the CreateMigrationJob’s azureContainerManifestUri parameter. This optional file is validated using the constrained DeploymentRequirements.XSD, which has no change from current published [full 2013 package schema](https://docs.microsoft.com/en-us/sharepoint/dev/schema/content-migration-schemas). 

For file shares this is expected to normally include no child nodes under the root and as such can also be excluded from the package if not required, although a warning will be logged in this case.

### RootObjectMap.XML

The **RootObjectMap.XML** file is expected to be at the root of the Azure Blob Store Container defined by the CreateMigrationJob’s `azureContainerManifestUri` parameter. This required file is validated using the constrained **DeploymentRootObjectMap.XSD**, which has some limited changes from current published [full 2013 package schema](https://docs.microsoft.com/en-us/sharepoint/dev/schema/content-migration-schemas). The most common `RootObject` that will be included will be a single object of type List. The Id for this item should be the List Id for the target list, and the `ParentWebID` should match the Id of the parent target web containing this list in order for migration to be successful. The Id, WebUrl and Url values of this object must also match the related structure laid out in the **Manifest.XML** file.

### SystemData.XML

The **SystemData.XML** file is expected to be at the root of the Azure Blob Store Container defined by the CreateMigrationJob’s `azureContainerManifestUri` parameter. This required file is validated using the constrained **DeploymentSystemData.XSD**, which has no change from current published [full 2013 package schema](https://docs.microsoft.com/en-us/sharepoint/dev/schema/content-migration-schemas).

The `SchemaVersion` information is expected to reference the current Build and DatabaseVersion of the target farm, a Version of “15.0.0.0”, and the `SiteVersion` value is expected to always match the target site collection `UIVersion` (i.e. most commonly this will be “15”). Each **Manifest.XML** file for the package is expected to be listed in this file within the `ManifestFile` entries. 

The SystemObjects that define dependent objects that should remain immutable by the migration code should also be listed here to ensure correct behavior of the import operation. The following is an example of the common objects in the **SystemObjects.XML** file from a file share based import, noting that the IDs are expected to be different for each package, and the URLs may be different.

#### Table 1: Example SystemData.XML file

```xml
<?xml version="1.0" encoding="utf-8"?>
<SystemData xmlns="urn:deployment-systemdata-schema">
	<SchemaVersion Version="15.0.0.0" Build="16.0.3111.1200" DatabaseVersion="11552" 
SiteVersion="15" />
	<ManifestFiles>
		<ManifestFile Name="Manifest.xml" />
	</ManifestFiles>
	<SystemObjects>
		<SystemObject Id="34321c39-3254-4bd1-b749-c99e16d1f4ab" Type="Folder" 
Url="/personal/username" />
		<SystemObject Id="9efb9686-baab-432d-a192-858ac34c073f" Type="Web" 
Url="/personal/username" />
		<SystemObject Id="e8ec714f-91a0-4c6f-9926-08328c8b3e05" Type="List" 
Url="/personal/username/Documents/deleteme2" />
		<SystemObject Id="a05e1f95-5712-4cc2-958c-31cf0a2cfb62" Type="List" 
Url="/personal/username/_catalog/users" />
	</SystemObjects>
	<RootWebOnlyLists />
</SystemData>
```

### UserGroupMap.XML

The **UserGroupMap.XML** file is expected to be at the root of the Azure Blob Store Container defined by the CreateMigrationJob’s `azureContainerManifestUri` parameter. This required file is validated using the constrained **DeploymentUserGroupMap.XSD**, which has no change from current published full 2013 package schema. 

The **UserGroupMap.XML** file may not contain any User or Group entries but doing so will prevent author or security information from being populated during import and warnings will be logged in this case. Login and SID values for users must be either adjusted to match the values in SharePoint Online, or if the account no longer should exist can be listed as `IsDeleted = “true”` to prevent lookup failures and additional slowdown during the import operation.

### ViewFormsList.XML

The **ViewForms.XML** file, if included, is expected to be at the root of the Azure Blob Store Container defined by the CreateMigrationJob’s `azureContainerManifestUri` parameter. This optional file is validated using the constrained **DeploymentViewFormsList.XSD**, which has no change from current published full 2013 package schema.

Since an import package for the pipeline does not include defining fields or views on a list or document library, the **ViewFormsList.XML** file will normally include no child nodes under the root and as such can also be excluded from the package if not required, although a warning may be logged in this case.

## Logging

The logs that the import pipeline creates must be easily parsed by machine with a goal of being able to pinpoint when and where failures occur, including errors and warnings, and will tell the consumer or the ISV where and why the failure occurred. As the import is processed by the import pipeline, the job results are placed into log files at the server side file system.

Upon completion, these logs will be copied to the `azureContainerManifestUri` location as the SAS token specified in the URI allows write access. The same output logs are also placed at the *“_catalogs/Maintenance Logs”* location of the target site collection as a text file. The logs will only be copied to the destination locations once the job has finished and removed from the queue.

Several log types can be included such as the full import log, along with warning and error files that contain only the subset of import warnings or errors respectively. Log files have unique `datetime` and `job id` stamps to allow each attempted import event to have a unique log for better debugging purposes.
 
## Changes for those using the "Ship Disk" option

To use the Migration API, you must have a temporary storage container in Azure. When uploading files into the temporary storage, an MD5 is required as a property on every file. However, when shipping the data on hard drives this MD5 property doesn’t get assigned automatically.  As a work around, we have adapted the Migration API to allow the MD5 to be passed for every file as part of the manifest. This also applies for IV values when encrypting the data.

Since the MD5 is generated at the source instead of at the upload time in Azure, Microsoft can confirm the integrity of the file directly against the source MD5.   

### What is stored in those Azure Blob Containers?

The Migration API requires the Azure Container for content passing and also for log and queue reporting. It can be split down as a summary as follows:<br>

|**Content**|**Manifest**|
|:-----|:-----|
|Files and folders|XML files|


There are two new optional parameters in manifest.xml:

- MD5Hash <br>
- InitializationVector


#### Preparing the package
The method for calling the migration job doesn’t change; only the package generation needs to be changed. 

In the Manifest container one file is named Manifest.xml. There are 2 optional attributes added to the file node: *MD5Hash* and *InitializationVector*. <br>

Example:

```xml
<File … MD5Hash="CXPP/MWYxY87NjjnLZrFg==" InitializationVector="4WlC5zQK0r9s39LoB2w==" />
```

## Best Practices and Special Mentions

### Package size

Even if the API support 15GB files, we recommend package sizes of up to 250 MB OR 250 items (depending which one comes first). If you have one large files larger than that recommended size limit you should send it in its own package.  The same applies to versions; each version counts against the size limit and item count. Additionally all the versions of a file should be in the same package.

### File size

Currently the import pipeline supports individual files of **15 GB** maximum size.

### Only un-compressed packages are supported

The import pipeline does not support compressed packages. The file content must be stored in a different Azure Storage container from the manifest and related descriptive XML files. This decision was made to prevent the overhead of processing time on both ends of the migration (to compress and decompress), and also to ease package creation and modification. Compression of individual files such as into zip archives is supported as long as they are referenced in the import package as the archive itself, not the contents.

### API supports import of multiple file versions

Import packages can have references to multiple versions of a file, major and minor, up to regular limits imposed within SharePoint. It is important that each version of that file be included in the package even if some of the versions already exist in SPO.

### API supports preservation of identifiers

The identifiers used within the import package explicitly are used during import to identify content. This allows preservation of existing identifiers for document library contents from a source environment. However, it also imposes a complexity during import package creation or transformation that mandates that the package explicitly reference the target web and list identifiers. Content type identifiers, file/folder item GUIDs, and list item integer identifiers are all preserved during import. If incorrect identifiers are specified in the package, import will fail.

Additionally, due to identifier preservation, import events can potentially be done in successive iterations using different packages, allowing items to potentially move in location if their identifiers have not changed.

<a name="OverwriteAPI"> </a>

### This is an overwrite API

The import pipeline does support import of versioning data on files and list item metadata, but as of now if you submit a file and then resubmit the same file with changes the import process will delete and replace the original and all versions with the ones included in the ones in the current package being imported. 

### We do not support Active-Active scenario

This means we expect that the target site will remain non-active for users until the migration is over. The source may be kept in a read write state until the final migration event, as a method of reducing downtime for end users, but once the migration is complete there should be a switch for the users to start using their new SPO destinations and stop using the previous repository.

### Permissions in Azure

To ensure immutability of source blobs, the import pipeline will accept a SAS key with only the Read and List access flags set for the File container. Likewise, the import pipeline requires a SAS key with Read, List and Write access for the Manifest container so that we can write back log files at the end of the import operation. If these criteria are not met, the pipeline will reject it during job creation.

### All files in Azure must have snapshot created to import successfully

To prevent unintended file modification of the source blobs, the import pipeline will only import files if they have a snapshot created for them within Azure. If they do not, then the import pipeline will skip the files in this state and throw errors. The import pipeline will use the latest snapshot of the file available at the time of import.

### Security and encryption

The import pipeline is using Azure Blob Storage security model as is. This means we will not do any special treatment for those azure containers that would differentiate from any other azure containers. Additionally, the import pipeline currently does not accept encryption keys for content from the customer. Any encrypted content will be treated as opaque files that SharePoint may list, but be unable to index, the same as if encrypted files were uploaded through the UI to the environment.

### Events and event handlers

The import pipeline allows event handlers to be referenced on list items but doesn’t allow defining event handlers at the list level at this time. The import pipeline does not fire events as items are imported, so existing event handlers will not fire due to the import event. 

## Appendices

### Acronyms Defined

|Acronym|Definition|
|:-----|:-----|
|BOT	|SharePoint server running timer jobs|
|CDB	|Content database, containing site collections and content|
|CFE	|Content farm front end server|
|SPO	|SharePoint Online|
|ABS	|Azure Blob Storage|
 
### Helpful Resources

* [SharePoint Online Client Components SDK](http://www.microsoft.com/en-us/download/details.aspx?id=42038)
 
* [Azure Windows Azure SDK for .NET - 2.4](http://www.microsoft.com/en-us/download/details.aspx?id=43709)

* [Bulk Creation of OneDrive for Business sites](http://msdn.microsoft.com/en-us/library/office/jj163783(v=office.15).aspx)

* [So you want to programmatically provision personal sites in OneDrive for Business in Office 365](http://blogs.msdn.com/b/frank_marasco/archive/2014/03/25/so-you-want-to-programmatically-provision-personal-sites-one-drive-for-business-in-office-365.aspx)

* [Restrictions and limitations when you sync SharePoint libraries to your computer through OneDrive for Business](http://support.microsoft.com/kb/2933738)

* [Types of files that cannot be added to a list or library](https://support.office.com/en-US/Article/Types-of-files-that-cannot-be-added-to-a-list-or-library-30be234d-e551-4c2a-8de8-f8546ffbf5b3?ui=en-US&rs=en-US&ad=US)

 
## Working with import package security structures

This section covers a brief overview of what is contained within an export package that includes security with regard to permissions. This can allow the system to determine user and group membership along with roles, and specific assignments (unique permissions set at the object level and its children unless overridden at a deeper child object).

### How to interpret the security identifiers in the package files

UserGroup.xml file defines all users and groups within the exported web(s). The items within this file do the following:

- User objects include the information about specific users, including identification of a specific security principle as a domain group or not, login, and the base 64 encoded SystemId (SID) of the security principle.
- Group objects include the information about specific groups and the direct membership list of that group.
- Owner values on group objects and UserId values on member objects within group objects map to other Id values of other user or group objects respectively.

#### Table 2: Users and Groups annotated in UserGroupMap

```xml
<UserGroupMap xmlns="urn:deployment-usergroupmap-schema">
	<Users>
		<User Id="1" Name="John Doe" Login="DOMAIN\JDoe" Email="DJoe@contoso.com" 
IsDomainGroup="false" IsSiteAdmin="true" SystemId="AQUAAAAAAAUVAAAAXSj1f9U62DVDVOAqToYSAA==" IsDeleted="false" Flags="0" />
		<User Id="2" Name="Jane Smith" Login="DOMAIN\JSmith" Email="jsmith@contoso.com" 
IsDomainGroup="false" IsSiteAdmin="true" SystemId="AQUAAAAAAAUVAAAAXSj1f9U62DVDVOAqdUwNAA==" IsDeleted="false" Flags="0" />
		…
	</Users>
	<Groups>
		<Group Id="3" Name="Temp Group" Description="A Temp Group" Owner="2" 
OwnerIsUser="true"
					OnlyAllowMembersViewMembership="true">
			<Member UserId="2" />
		</Group>
		<Group Id="4" Name="Temp Group 2" Description="Another Temp Group" Owner="2" 
OwnerIsUser="false" RequestToJoinLeaveEmailSetting="JSmith@contoso.com" OnlyAllowMembersViewMembership="true">
			<Member UserId="1" />
			<Member UserId="2" />
		</Group>
		…
	</Groups>
</UserGroupMap>
```

**Manifest.xml** contains the metadata about all the content within the exported web(s). The items within this file do the following:

- Roles objects include the list of defined roles on the web.
- Role objects define the individual role, including ID, internal permissions rights mask flags and display information.
    - RoleId values define the identifiers of the Role objects.
    - PermMask values contain the rights mask flags.
- RoleAssignments objects include the list of unique permissions (RoleAssignment objects).
- RoleAssignment objects include the list of distinct Assignment objects (if any).
- Individual RoleAssignment objects contain the actual membership of one distinct user or group and their actual Role.
    - RoleId values map to the RoleId values of the Role objects.
    - PrincipalId values map to Id values of user or group objects respectively in UserGroups.xml.

#### Table 3: Roles and RoleAssignments annotated in manifest

```xml
<SPObjects xmlns="urn:deployment-manifest-schema">
	…
	<SPObject Id="0b3c1b13-b260-453c-ac8d-8053a537d610" ObjectType="DeploymentRoles" 
ParentId="203e30e2-1139-4adf-b545-e74235f105c2" ParentWebId="203e30a2-1139-4acf-b535-e74235f105c2" ParentWebUrl="/teams/temp">
		<Roles>
			<Role RoleId="1073751825" Title="Test Role" Description="This is a test role" 
PermMask="206292717568" Hidden="true" RoleOrder="160" Type="1" />
			<Role RoleId="1073751826" Title="Test Role 2" Description="This is another test 
role" PermMask="756052856929" Hidden="false" RoleOrder="128" Type="2" />
			…
		</Roles>
	</SPObject>
	<SPObject Id="373ea0ba-107a-4a78-9563-bc642f9ab14d" 
ObjectType="DeploymentRoleAssignments" ParentId="203e30e2-1139-4adf-b545-e74235f105c2" ParentWebId="203e30a2-1139-4acf-b535-e74235f105c2" ParentWebUrl="/teams/temp">
		<RoleAssignments>
			<RoleAssignment ScopeId="ffcab9b9-94ef-4701-e6d9-19a370760e1e" 
RoleDefWebId="203e11c2-1139-4abe-b534-e74235f106c2" RoleDefWebUrl="teams/temp" ObjectId="9f743aaf-65f9-473e-0c37-37f147960560" ObjectType="1" ObjectUrl="teams/temp/IWConvertedForms" AnonymousPermMask="0" />
			<RoleAssignment ScopeId="c3f564f3-62cd-4b25-8da4-2da7722402ab" 
RoleDefWebId="203e30a2-1139-4acf-b535-e74255e105c2" RoleDefWebUrl="teams/temp" ObjectId="2b9b0a32-51fb-4af8-a218-c90f63fd1de4" ObjectType="1" ObjectUrl="teams/temp/Relationships List" AnonymousPermMask="0">
				<Assignment RoleId="1073751825" PrincipalId="5" />
				<Assignment RoleId="1073751825" PrincipalId="6" />
				<Assignment RoleId="1073751826" PrincipalId="4" />
				<Assignment RoleId="1073751828" PrincipalId="1" />
			</RoleAssignment>
			…
		</RoleAssignments >
	</SPObject>
	…
</SPObjects>
```

## Constrained XSD structures

Included below are the XSD files used for package validation in the import pipeline, when different than the original 2013 full schema which can be found at [official SharePoint documentation](https://docs.microsoft.com/en-us/sharepoint/dev/schema/content-migration-schemas).

### DeploymentExportSettings.XSD

#### Table 4: Constrained DeploymentExportSettings.XSD

```xml
<?xml version="1.0" encoding="utf-8" ?>
<xs:schema
	targetNamespace="urn:deployment-exportsettings-schema"
	elementFormDefault="qualified"
	xmlns="urn:deployment-exportsettings-schema"
	xmlns:mstns="urn:deployment-exportsettings-schema"
	xmlns:xs="http://www.w3.org/2001/XMLSchema">

	<!-- Guid SimpleType definition -->
	<xs:simpleType name="Guid">
		<xs:restriction base="xs:string"></xs:restriction>
	</xs:simpleType>

	<!-- Used for SPExportObjects -->
	<xs:simpleType name="SPDeploymentObjectType">
		<xs:restriction base="xs:string">
			<xs:enumeration value="Folder" />
			<xs:enumeration value="List" /> 
			<xs:enumeration value="ListItem" />
			<xs:enumeration value="File" />
		</xs:restriction>
	</xs:simpleType>

	<!-- Used for SPExportObjects -->
	<xs:simpleType name="SPIncludeDescendants">
		<xs:restriction base="xs:string">
			<xs:enumeration value="None" />
			<xs:enumeration value="Content" />
			<xs:enumeration value="All" />
		</xs:restriction>
	</xs:simpleType>

	<!-- From SPDeploymentSettings -->
	<xs:simpleType name="SPIncludeSecurity">
		<xs:restriction base="xs:string">
			<xs:enumeration value="None" />
			<xs:enumeration value="WssOnly" />
			<xs:enumeration value="All" />
		</xs:restriction>
	</xs:simpleType>

	<!-- From SPExportSettings -->
	<xs:simpleType name="SPIncludeVersions">
		<xs:restriction base="xs:string">
			<xs:enumeration value="LastMajor" />
			<xs:enumeration value="CurrentVersion" />
			<xs:enumeration value="LastMajorAndMinor" />
			<xs:enumeration value="All" />
		</xs:restriction>
	</xs:simpleType>

	<!-- From SPExportSettings -->
	<xs:simpleType name="SPExportMethodType">
		<xs:restriction base="xs:string">
			<xs:enumeration value="ExportAll" />
			<xs:enumeration value="ExportChanges" />
		</xs:restriction>
	</xs:simpleType>

	<!-- This defines that the XML can contain 0-N instances of the -->
	<!-- SPExportObjects element -->
	<xs:complexType name="SPExportSettings">
		<xs:sequence>
			<xs:element
				name="ExportObjects" type="SPExportObjectCollection"
				minOccurs="0" maxOccurs="unbounded" />
		</xs:sequence>

		<!-- SPDeploymentSettings -->
		<xs:attribute name="SiteUrl" type="xs:string" use="required" />
		<xs:attribute name="FileLocation" type="xs:string" />
		<xs:attribute name="BaseFileName" type="xs:string" />
		<xs:attribute name="IncludeSecurity" type="SPIncludeSecurity" />

		<!-- SPExportSettings -->
		<xs:attribute name="IncludeVersions" type="SPIncludeVersions" />
		<xs:attribute name="ExportMethod" type="SPExportMethodType" />
		<xs:attribute name="ExportChangeToken" type="xs:string" />
		<xs:attribute name="ExportPublicSchema" type="xs:boolean" default="true" />
		<xs:attribute name="ExportFrontEndFileStreams" type="xs:boolean" default="true" />
		<xs:attribute name="ExcludeDependencies" type="xs:boolean" />

		<xs:anyAttribute namespace="##any" processContents="skip" />
	</xs:complexType>

	<xs:complexType name="SPExportObjectCollection">
		<xs:sequence>
			<xs:element
				name="DeploymentObject" type="SPExportObject"
				minOccurs="0" maxOccurs="unbounded" />
		</xs:sequence>
	</xs:complexType>

	<xs:complexType name="SPExportObject">
		<!-- SPDeploymentObject -->
		<xs:attribute name="Id" type="Guid" />
		<xs:attribute name="Type" type="SPDeploymentObjectType" />
		<xs:attribute name="ParentId" type="Guid" />

		<!-- SPExportObject -->
		<xs:attribute name="Url" type="xs:string" />
		<xs:attribute name="ExcludeChildren" type="xs:boolean" />
		<xs:attribute name="IncludeDescendants" type="SPIncludeDescendants" />
		<xs:attribute name="ExportChangeToken" type="xs:string" />
	</xs:complexType>

	<!--This defines that the XML can contain 0-N instances of the ExportSettings element-->
	<xs:element name="ExportSettings" type="SPExportSettings" />
</xs:schema>
```



### DeploymentLookupListMap.XSD
There is no change from current published full 2013 package schema.

### DeploymentManifest.XSD

##### Table 5: Constrained DeploymentManifest.XSD

```xml
<?xml version="1.0" encoding="utf-8" ?>
<xs:schema
	targetNamespace="urn:deployment-manifest-schema"
	elementFormDefault="qualified"
	xmlns="urn:deployment-manifest-schema"
	xmlns:mstns="urn:deployment-manifest-schema"
	xmlns:xs="http://www.w3.org/2001/XMLSchema">

	<!-- From CoreDefinitions.xsd -->
	<xs:simpleType name="TRUEFALSE">
		<xs:restriction base="xs:string">
			<xs:enumeration value="TRUE" />
			<xs:enumeration value="FALSE" />
			<xs:enumeration value="true" />
			<xs:enumeration value="false" />
	</xs:restriction>
	</xs:simpleType>

	<!-- Guid SimpleType definition -->
	<xs:simpleType name="Guid">
		<xs:restriction base="xs:string"></xs:restriction>
	</xs:simpleType>

	<!-- SPGenericObjectCollection definition -->
	<xs:complexType name="SPGenericObjectCollection">
		<xs:sequence>
			<xs:element name="SPObject" type="SPGenericObject" minOccurs="0" 
maxOccurs="unbounded" />
		</xs:sequence>
	</xs:complexType>

	<!-- Generic complex Type definition that wraps a Sharepoint top-level element -->
	<xs:complexType name="SPGenericObject">
		<xs:sequence>
			<xs:choice minOccurs="0" maxOccurs="1">
				<xs:element name="List" type="SPList" />
				<xs:element name="DocumentLibrary" type="SPDocumentLibrary" />
				<xs:element name="ListItem" type="SPListItem" />
				<xs:element name="Folder" type="SPFolder" />
				<xs:element name="File" type="SPFile" />
				<xs:element name="ContentType" type="SPContentType" />
				<xs:element name="UserX" type="DeploymentUserX" />
				<xs:element name="GroupX" type="DeploymentGroupX" />
				<xs:element name="Roles" type="DeploymentRoles" />
				<xs:element name="RoleX" type="DeploymentRoleX" />
				<xs:element name="RoleAssignments" type="DeploymentRoleAssignments" />
				<xs:element name="RoleAssignmentX" type="DeploymentRoleAssignmentX" />
			</xs:choice>
		</xs:sequence>

		<xs:attribute name="ObjectType" type="SPObjectType" />
		<xs:attribute name="Id" type="Guid" />
		<xs:attribute name="ParentId" type="Guid" />
		<xs:attribute name="Name" type="xs:string" />
		<xs:attribute name="IsDeleted" type="xs:boolean" />
		<xs:attribute name="IsSiteRename" type="xs:boolean" />
		<xs:attribute name="ParentWebId" type="Guid" />
		<xs:attribute name="ParentWebUrl" type="xs:string" use="optional" />
		<xs:attribute name="ContentTypeId" type="xs:string" use ="optional" />
		<xs:attribute name="Url" type="xs:string" />
	</xs:complexType>

	<xs:simpleType name="SPDictionaryEntryValueType">
		<xs:restriction base="xs:string">
			<xs:enumeration value="String" />
			<xs:enumeration value="Integer" />
			<xs:enumeration value="Time" />
			<xs:enumeration value="StringVector" />
			<xs:enumeration value="Boolean" />
			<xs:enumeration value="FileSystemTime" />
			<xs:enumeration value="IntVector" />
			<xs:enumeration value="Double" />
			<xs:enumeration value="LongText" />
			<xs:enumeration value="Empty" />
		</xs:restriction>
	</xs:simpleType>

	<xs:simpleType name="SPDictionaryEntryAccess">
		<xs:restriction base="xs:string">
			<xs:enumeration value="ReadOnly" />
			<xs:enumeration value="ReadWrite" />
		</xs:restriction>
	</xs:simpleType>

	<!-- Enumeration of all the top-level serialized Sharepoint Types -->
	<xs:simpleType name="SPObjectType">
		<xs:restriction base="xs:string">
			<xs:enumeration value="SPList" />
			<xs:enumeration value="SPDocumentLibrary" />
			<xs:enumeration value="SPListItem" />
			<xs:enumeration value="SPFolder" />
			<xs:enumeration value="SPFile" />
			<xs:enumeration value="SPContentType" />
			<xs:enumeration value="SPDocumentTemplate" />
			<xs:enumeration value="DeploymentUserX" />
			<xs:enumeration value="DeploymentGroupX" />
			<xs:enumeration value="DeploymentRoles" />
			<xs:enumeration value="DeploymentRoleX" />
			<xs:enumeration value="DeploymentRoleAssignments" />
			<xs:enumeration value="DeploymentRoleAssignmentX" />
		</xs:restriction>
	</xs:simpleType>

	<!-- Enumeration of all the non-top level serialized Sharepoint Types -->
	<xs:simpleType name="OtherObjectType">
		<xs:restriction base="xs:string">
			<xs:enumeration value="SPFileVersion" />
			<xs:enumeration value="SPListEvent" />
			<xs:enumeration value="SPListItemVersion" />
			<xs:enumeration value="SPModerationInfo" />
		</xs:restriction>
	</xs:simpleType>

	<!-- DeploymentRole definition -->
	<xs:complexType name="DeploymentRole">
		<xs:attribute name="RoleId" type="xs:string" use="required" />
		<xs:attribute name="Title" type="xs:string" use="required" />
		<xs:attribute name="Description" type="xs:string" use="optional" />
		<xs:attribute name="PermMask" type="xs:string" use="required" />
		<xs:attribute name="Hidden" type="xs:boolean" use="required" />
		<xs:attribute name="RoleOrder" type="xs:string" use="optional" />
		<xs:attribute name="Type" type="xs:string" use="optional" />
	</xs:complexType>

	<!-- DeploymentRoles definition -->
	<xs:complexType name="DeploymentRoles">
		<xs:sequence>
			<xs:element name="Role" type="DeploymentRole" minOccurs="0" maxOccurs="unbounded" 
/>
		</xs:sequence>
	</xs:complexType>

	<!-- DeploymentAssignment definition -->
	<xs:complexType name="DeploymentAssignment">
		<xs:attribute name="RoleId" type="xs:string" use="required" />
		<xs:attribute name="PrincipalId" type="xs:string" use="required" />
	</xs:complexType>

	<!-- DeploymentRoleAssignment Definition -->
	<xs:complexType name="DeploymentRoleAssignment">
		<xs:sequence>
			<xs:element name="Assignment" type="DeploymentAssignment" minOccurs="0" 
maxOccurs="unbounded" />
		</xs:sequence>

		<xs:attribute name="ScopeId" type="xs:string" use="required" />
		<xs:attribute name="RoleDefWebId" type="xs:string" use="required" />
		<xs:attribute name="RoleDefWebUrl" type="xs:string" use="required" />
		<xs:attribute name="ObjectId" type="xs:string" use="required" />
		<xs:attribute name="ObjectType" type="xs:string" use="required" />
		<xs:attribute name="ObjectUrl" type="xs:string" use="required" />
		<xs:attribute name="AnonymousPermMask" type="xs:string" />
	</xs:complexType>

	<xs:complexType name="DeploymentRoleAssignments">
		<xs:sequence>
			<xs:element name="RoleAssignment" type="DeploymentRoleAssignment" minOccurs="0" 
maxOccurs="unbounded" />
		</xs:sequence>
	</xs:complexType>

	<!-- SPProperty definition -->
	<xs:complexType name="DictionaryEntry">
		<xs:attribute name="Name" type="xs:string" use="required" />
		<xs:attribute name="Value" type="xs:string" use="optional" />
		<xs:attribute name="Value2" type="xs:string"  use="optional" />
		<xs:attribute name="Id" type="Guid" use="optional" />
		<xs:attribute name="Type" type="SPDictionaryEntryValueType" default="String" 
use="optional" />
		<xs:attribute name="Access" type="SPDictionaryEntryAccess" default="ReadWrite" 
use="optional" />
	</xs:complexType>

	<!-- Dictionary definition -->
	<xs:complexType name="Dictionary">
		<xs:sequence>
			<xs:element name="Property" type="DictionaryEntry" minOccurs="0" 
maxOccurs="unbounded" />
		</xs:sequence>
	</xs:complexType>

	<!-- SPAttachment definition -->
	<xs:complexType name="SPAttachment">
		<xs:sequence>
			<xs:element name="Properties" type="Dictionary" minOccurs="0" />
		</xs:sequence>

		<xs:attribute name="Name" type="xs:string" />
		<xs:attribute name="DirName" type="xs:string" />
		<xs:attribute name="Url" type="xs:string" />
		<xs:attribute name="Id" type="Guid" />
		<xs:attribute name="ParentWebId" type="Guid" />

		<!-- Map to file on disk -->
		<xs:attribute name="FileValue" type="xs:string" />

		<xs:attribute name="MetaInfo" type="xs:string" use="optional" />

		<xs:attribute name="Author" type="xs:string" use="optional" />
		<xs:attribute name="ModifiedBy" type="xs:string" use="optional" />
		<xs:attribute name="TimeCreated" type="xs:dateTime" use="optional" />
		<xs:attribute name="TimeLastModified" type="xs:dateTime" use="optional" />

		<!-- Case where it fails at export time but too late to ignore -->
		<xs:attribute name="FailureMessage" type="xs:string" use="optional" />
	</xs:complexType>

	<!-- SPAttachmentCollection definition -->
	<xs:complexType name="SPAttachmentCollection">
		<xs:sequence>
			<xs:element name="Attachment" type="SPAttachment" minOccurs="0" 
maxOccurs="unbounded" />
		</xs:sequence>
	</xs:complexType>

	<!-- SPLink definition -->
	<xs:complexType name="SPLink">
		<xs:sequence></xs:sequence>
		<xs:attribute name="TargetId" type="Guid" use="required" />
		<xs:attribute name="TargetUrl" type="xs:string" use="required" />
		<xs:attribute name="IsDirty" type="xs:boolean" use="required" />
		<xs:attribute name="WebPartId" type="Guid" use="optional" />
		<xs:attribute name="LinkNumber" type="xs:int" use="optional" />
		<xs:attribute name="Type" type="xs:unsignedByte" use="optional" />
		<xs:attribute name="Security" type="xs:unsignedByte" use="optional" />
		<xs:attribute name="Dynamic" type="xs:unsignedByte" use="optional" />
		<xs:attribute name="ServerRel" type="xs:boolean" use="optional" />
		<xs:attribute name="Level" type="xs:unsignedByte" use="optional" />
		<xs:attribute name="Search" type="xs:string" use="optional" />
	</xs:complexType>

	<!-- SPLinkCollection definition -->
	<xs:complexType name="SPLinkCollection">
		<xs:sequence>
			<xs:element name="Link" type="SPLink" minOccurs="0" maxOccurs="unbounded" />
		</xs:sequence>
	</xs:complexType>

	<!-- AnonymousState definition -->
	<xs:simpleType name="AnonymousState">
		<xs:restriction base="xs:string">
			<xs:enumeration value="Disabled" />
			<xs:enumeration value="Enabled" />
			<xs:enumeration value="On" />
		</xs:restriction>
	</xs:simpleType>

	<!-- SPModerationStatusType definition -->
	<xs:simpleType name="SPModerationStatusType">
		<xs:restriction base="xs:string">
			<xs:enumeration value="Approved" />
			<xs:enumeration value="Denied" />
			<xs:enumeration value="Pending" />
			<xs:enumeration value="Draft" />
			<xs:enumeration value="Scheduled" />
		</xs:restriction>
	</xs:simpleType>

	<!-- SPModerationInformation definition -->
	<xs:complexType name="SPModerationInformation">
		<xs:attribute name="Comment" type="xs:string" />
		<xs:attribute name="ModerationStatus" type="SPModerationStatusType" />
	</xs:complexType>

	<!-- SPBaseType definition -->
	<xs:simpleType name="SPBaseType">
		<xs:restriction base="xs:string">
			<xs:enumeration value="UnspecifiedBaseType" />
			<xs:enumeration value="GenericList" />
			<xs:enumeration value="DocumentLibrary" />
			<xs:enumeration value="Unused" />
			<xs:enumeration value="DiscussionBoard" />
			<xs:enumeration value="Survey" />
			<xs:enumeration value="Issue" />
		</xs:restriction>
	</xs:simpleType>

	<!-- SPListTemplateType definition -->
	<xs:simpleType name="SPListTemplateType">
		<xs:restriction base="xs:string"></xs:restriction>
	</xs:simpleType>

	<!-- DraftVisibilityType definition -->
	<xs:simpleType name="DraftVisibilityType">
		<xs:restriction base="xs:string">
			<xs:enumeration value="Reader" />
			<xs:enumeration value="Author" />
			<xs:enumeration value="Approver" />
		</xs:restriction>
	</xs:simpleType>

	<!-- SPEventHostType definition -->
	<xs:simpleType name="SPEventHostType">
		<xs:restriction base="xs:string">
			<xs:enumeration value="Site" />
			<xs:enumeration value="Web" />
			<xs:enumeration value="List" />
			<xs:enumeration value="ListItem" />
			<xs:enumeration value="ContentType" />
			<xs:enumeration value="Feature" />
		</xs:restriction>
	</xs:simpleType>

	<!-- SPEventReceiverSynchronization definition -->
	<xs:simpleType name="SPEventReceiverSynchronization">
		<xs:restriction base="xs:string">
			<xs:enumeration value="Default" />
			<xs:enumeration value="Synchronous" />
			<xs:enumeration value="Asynchronous" />
		</xs:restriction>
	</xs:simpleType>

	<!-- SPEventReceiverType definition -->
	<xs:simpleType name="SPEventReceiverType">
		<xs:restriction base="xs:string">
			<xs:enumeration value="ItemAdding" />
			<xs:enumeration value="ItemUpdating" />
			<xs:enumeration value="ItemDeleting" />
			<xs:enumeration value="ItemCheckingIn" />
			<xs:enumeration value="ItemCheckingOut" />
			<xs:enumeration value="ItemUncheckingOut" />
			<xs:enumeration value="ItemAttachmentAdding" />
			<xs:enumeration value="ItemAttachmentDeleting" />
			<xs:enumeration value="ItemFileMoving" />
			<xs:enumeration value="ItemVersionDeleting" />
			<xs:enumeration value="FieldAdding" />
			<xs:enumeration value="FieldUpdating" />
			<xs:enumeration value="FieldDeleting" />
			<xs:enumeration value="ListAdding" />
			<xs:enumeration value="ListDeleting" />
			<xs:enumeration value="SiteDeleting" />
			<xs:enumeration value="WebDeleting" />
			<xs:enumeration value="WebMoving" />
			<xs:enumeration value="WebAdding" />
			<xs:enumeration value="GroupAdding" />
			<xs:enumeration value="GroupUpdating" />
			<xs:enumeration value="GroupDeleting" />
			<xs:enumeration value="GroupUserAdding" />
			<xs:enumeration value="GroupUserDeleting" />
			<xs:enumeration value="RoleDefinitionAdding" />
			<xs:enumeration value="RoleDefinitionUpdating" />
			<xs:enumeration value="RoleDefinitionDeleting" />
			<xs:enumeration value="RoleAssignmentAdding" />
			<xs:enumeration value="RoleAssignmentDeleting" />
			<xs:enumeration value="InheritanceBreaking" />
			<xs:enumeration value="InheritanceResetting" />
			<xs:enumeration value="ItemAdded" />
			<xs:enumeration value="ItemUpdated" />
			<xs:enumeration value="ItemDeleted" />
			<xs:enumeration value="ItemCheckedIn" />
			<xs:enumeration value="ItemCheckedOut" />
			<xs:enumeration value="ItemUncheckedOut" />
			<xs:enumeration value="ItemAttachmentAdded" />
			<xs:enumeration value="ItemAttachmentDeleted" />
			<xs:enumeration value="ItemFileMoved" />
			<xs:enumeration value="ItemFileConverted" />
			<xs:enumeration value="ItemFileTransformed" />
			<xs:enumeration value="ItemVersionDeleted" />
			<xs:enumeration value="FieldAdded" />
			<xs:enumeration value="FieldUpdated" />
			<xs:enumeration value="FieldDeleted" />
			<xs:enumeration value="ListAdded" />
			<xs:enumeration value="ListDeleted" />
			<xs:enumeration value="SiteDeleted" />
			<xs:enumeration value="WebDeleted" />
			<xs:enumeration value="WebMoved" />
			<xs:enumeration value="WebProvisioned" />
			<xs:enumeration value="WebRestored" />
			<xs:enumeration value="GroupAdded" />
			<xs:enumeration value="GroupUpdated" />
			<xs:enumeration value="GroupDeleted" />
			<xs:enumeration value="GroupUserAdded" />
			<xs:enumeration value="GroupUserDeleted" />
			<xs:enumeration value="RoleDefinitionAdded" />
			<xs:enumeration value="RoleDefinitionUpdated" />
			<xs:enumeration value="RoleDefinitionDeleted" />
			<xs:enumeration value="RoleAssignmentAdded" />
			<xs:enumeration value="RoleAssignmentDeleted" />
			<xs:enumeration value="InheritanceBroken" />
			<xs:enumeration value="InheritanceReset" />
			<xs:enumeration value="EmailReceived" />
			<xs:enumeration value="ContextEvent" />
			<xs:enumeration value="InvalidReceiver" />
			<xs:enumeration value="WorkflowCompleted" />
		</xs:restriction>
	</xs:simpleType>

	<xs:simpleType name="DefaultItemOpen">
		<xs:restriction base="xs:string">
			<xs:enumeration value="Browser" />
			<xs:enumeration value="PreferClient" />
		</xs:restriction>
	</xs:simpleType>

	<!-- SPList definition -->
	<xs:complexType name="SPList">
		<xs:sequence >
			<xs:choice minOccurs="0" maxOccurs="11">
				<xs:element name="ContentTypes" type="SPContentTypeCollection" minOccurs="0" 
maxOccurs="1" />
				<xs:element name="DeletedContentTypes" type="ListDeletedContentTypes" 
minOccurs="0" maxOccurs="1" />
			</xs:choice>
		</xs:sequence>

		<xs:attribute name="Id" type="Guid" use="required" />
		<xs:attribute name="Title" type="xs:string" use="required" />

		<xs:attribute name="RootFolderId" type="Guid" />
		<xs:attribute name="RootFolderUrl" type="xs:string" use="required" />
		<xs:attribute name="ParentWebId" type="Guid" use="required" />
		<xs:attribute name="ParentWebUrl" type="xs:string" use="optional" />

		<xs:attribute name="BaseType" type="SPBaseType" />
		<xs:attribute name="BaseTemplate" type="SPListTemplateType" use="required" />
	</xs:complexType>

	<xs:complexType name="SPFieldCollection" mixed="true">
		<xs:sequence minOccurs="0" maxOccurs="unbounded">
			<xs:element name="FieldRef" type="SPFieldLink" minOccurs="0" maxOccurs="unbounded" 
/>
			<xs:element name="Field" type="SPField" minOccurs="0" maxOccurs="unbounded" />
		</xs:sequence>
	</xs:complexType>

	<xs:complexType name="SPField">
		<xs:sequence>
			<xs:any minOccurs="0" maxOccurs="unbounded" namespace="##any" 
processContents="skip" />
		</xs:sequence>
		<xs:attribute name="ID" type="Guid" />
		<xs:attribute name="FieldId" type="Guid" use="optional" />
		<xs:attribute name="Name" type="xs:string" />
		<xs:attribute name="Value" type="xs:string" />
		<xs:attribute name="DisplayName" type="xs:string" />
		<xs:attribute name="RowOrdinal" type="xs:int" />
		<xs:attribute name="RowOrdinal2" type="xs:int" use="optional" />
		<xs:attribute name="Type" type="xs:string" />
		<xs:attribute name="ColName" type="xs:string" />
		<xs:attribute name="ColName2" type="xs:string" use="optional" />
		<xs:attribute name="Title" type="xs:string" use="optional" />
		<xs:attribute name="Description" type="xs:string" use="optional" />
		<xs:attribute name="DefaultValue" type="xs:string" use="optional" />
		<xs:attribute name="DefaultFormula" type="xs:string" use="optional" />
		<xs:attribute name="FromBaseType" type="xs:string" use="optional" />
		<xs:attribute name="Sealed" type="xs:string" />
		<xs:attribute name="CanToggleHidden" type="xs:string" use="optional" />
		<xs:attribute name="DisplaySize" type="xs:string" use="optional" />
		<xs:attribute name="Required" type="xs:string" use="optional" />
		<xs:attribute name="ReadOnly" type="xs:string" use="optional" />
		<xs:attribute name="Hidden" type="xs:string" use="optional" />
		<xs:attribute name="Direction" type="xs:string" use="optional" />
		<xs:attribute name="IMEMode" type="xs:string" use="optional" />
		<xs:attribute name="SortableBySchema" type="xs:string" use="optional" />
		<xs:attribute name="Sortable" type="xs:string" use="optional" />
		<xs:attribute name="FilterableBySchema" type="xs:string" use="optional" />
		<xs:attribute name="Filterable" type="xs:string" use="optional" />
		<xs:attribute name="FilterableNoRecurrenceBySchema" type="xs:string" use="optional" />
		<xs:attribute name="FilterableNoRecurrence" type="xs:string" use="optional" />
		<xs:attribute name="Reorderable" type="xs:string" use="optional" />
		<xs:attribute name="Format" type="xs:string" use="optional" />
		<xs:attribute name="FillInChoice" type="xs:string" use="optional" />
		<xs:attribute name="SchemaXml" type="xs:string" use="optional" />
		<xs:attribute name="JSLink" type="xs:string" use="optional" />
		<xs:attribute name="CAMLRendering" type="xs:string" use="optional" />
		<xs:attribute name="ServerRender" type="xs:string" use="optional" />
		<xs:attribute name="ListItemMenu" type="xs:string" use="optional" />
		<xs:attribute name="ListItemMenuAllowed" type="xs:string" use="optional" />
		<xs:attribute name="LinkToItem" type="xs:string" use="optional" />
		<xs:attribute name="LinkToItemAllowed" type="xs:string" use="optional" />
		<xs:attribute name="CalloutMenu" type="xs:string" use="optional" />
		<xs:attribute name="CalloutMenuAllowed" type="xs:string" use="optional" />
		<!-- Label definition  -->	
		<xs:attribute name="ListDefaultCompliancetagWrittenTime" type="xs:dateTime" use="optional" />
		<xs:attribute name="ListDefaultComplianceTagUserId" type="xs:int" use="optional" />
		<!-- ListDefaultComplianceFlags is a Flags dependes on the Label, if the Label has Keep or KeepAndDelete ( that will have the 0x01 bit set). If the Label is a record label, that will have 0x01 and 0x04 set -->
		<xs:attribute name="ListDefaultComplianceFlags" type="xs:int" use="optional" />
		<xs:attribute name="ListDefaultComplianceTag" type="xs:string" use="optional" />
		<!-- end of Label definition  -->
		<xs:anyAttribute namespace="##any" processContents="skip" />
	</xs:complexType>

	<!-- FieldDataCollection definition -->
	<xs:complexType name="FieldDataCollection">
		<xs:sequence>
			<xs:element name="Field" type="DictionaryEntry" minOccurs="0" maxOccurs="unbounded" 
/>
		</xs:sequence>
	</xs:complexType>

	<!-- SPEventReceiverDefinitionCollection definition -->
	<xs:complexType name="SPEventReceiverDefinitionCollection">
		<xs:sequence>
			<xs:element name="EventReceiver" type="SPEventReceiverDefinition" minOccurs="0" 
maxOccurs="unbounded" />
		</xs:sequence>
	</xs:complexType>

	<!-- SPEventReceiverDefinition definition -->
	<xs:complexType name="SPEventReceiverDefinition">
		<xs:attribute name="Id" type="Guid" use="required" />
		<xs:attribute name="Name" type="xs:string" use="required" />
		<xs:attribute name="WebId" type="Guid" use="required" />
		<xs:attribute name="HostId" type="Guid" use="required" />
		<xs:attribute name="HostType" type="SPEventHostType" use="required" />
		<xs:attribute name="Synchronization" type="SPEventReceiverSynchronization" 
use="optional" />
		<xs:attribute name="Type" type="SPEventReceiverType" use="required" />
		<xs:attribute name="SequenceNumber" type="xs:int" use="required" />
		<xs:attribute name="Url" type="xs:string" use="optional" />
		<xs:attribute name="Assembly" type="xs:string" use="optional" />
		<xs:attribute name="Class" type="xs:string" use="optional" />
		<xs:attribute name="SolutionId" type="Guid" use="optional" />
		<xs:attribute name="Data" type="xs:string" use="optional" />
		<xs:attribute name="Filter" type="xs:string" use="optional" />
		<xs:attribute name="Credential" type="xs:int" use="optional" />
		<xs:attribute name="ItemId" type="xs:int" use="optional" />
	</xs:complexType>

	<!-- ListDeletedContentTypes definition -->
	<xs:complexType name="ListDeletedContentTypes">
		<xs:sequence>
			<xs:element name="DeletedContentType" type="DeletedContentType" minOccurs="0" 
maxOccurs="unbounded" />
		</xs:sequence>
	</xs:complexType>

	<!-- DeletedContentType definition -->
	<xs:complexType name="DeletedContentType">
		<xs:attribute name="ContentTypeId" type="xs:string" use="required" />
	</xs:complexType>

	<!-- SPDocumentLibrary definition -->
	<xs:complexType name="SPDocumentLibrary">
		<xs:complexContent>
			<xs:extension base="SPList">
				<xs:attribute name="DocumentTemplateUrl" type="xs:string" />
				<xs:attribute name="IsCatalog" type="xs:boolean" />
				<xs:attribute name="ThumbnailSize" type="xs:int" />
				<xs:attribute name="WebImageHeight" type="xs:int" />
				<xs:attribute name="WebImageWidth" type="xs:int" />
			</xs:extension>
		</xs:complexContent>
	</xs:complexType>

	<!-- SPFolder definition -->
	<xs:complexType name="SPFolder">
		<xs:sequence>
			<xs:element name="Properties" type="Dictionary" minOccurs="0" />
		</xs:sequence>
		<xs:attribute name="Id" type="Guid" />
		<xs:attribute name="Name" type="xs:string" />
		<xs:attribute name="Url" type="xs:string" />
		<xs:attribute name="ParentFolderId" type="Guid" />
		<xs:attribute name="ParentWebId" type="Guid" />
		<xs:attribute name="ParentWebUrl" type="xs:string" use="optional" />
		<xs:attribute name="ContainingDocumentLibrary" type="Guid" />
		<xs:attribute name="WelcomePageUrl" type="xs:string" use="optional" />
		<xs:attribute name="WelcomePageParameters" type="xs:string" use="optional" />
		<xs:attribute name="ListItemIntId" type="xs:int" use="optional" />
		<xs:attribute name="Author" type="xs:string" use="optional" />
		<xs:attribute name="ModifiedBy" type="xs:string" use="optional" />
		<xs:attribute name="TimeCreated" type="xs:dateTime" use="optional" />
		<xs:attribute name="TimeLastModified" type="xs:dateTime" use="optional" />
		<xs:attribute name="ProgId" type="xs:string" use="optional" />
		<xs:attribute name="SortBehavior" type="xs:string" use="optional" />
	</xs:complexType>

	<!-- SPFileVersion Collection definition -->
	<xs:complexType name="SPFileVersionCollection">
		<xs:sequence>
			<xs:element name="File" type="SPFile" minOccurs="1" maxOccurs="unbounded" />
		</xs:sequence>
	</xs:complexType>

	<!-- SPListItemVersion Collection definition -->
	<xs:complexType name="SPListItemVersionCollection">
		<xs:sequence>
			<xs:element name="ListItem" type="SPListItem" minOccurs="1" maxOccurs="unbounded" 
/>
		</xs:sequence>
	</xs:complexType>

	<!-- SPFileVersionEvent Collection definition -->
	<xs:complexType name="SPFileVersionEventCollection">
		<xs:sequence>
			<xs:element name="VersionEvent" type="SPFileVersionEvent" minOccurs="1" 
maxOccurs="unbounded" />
		</xs:sequence>
	</xs:complexType>

	<xs:complexType name="SPFileVersionEvent">
		<xs:attribute name="Id" type="xs:int" />
		<xs:attribute name="UIVersion" type="xs:int" />
		<xs:attribute name="Type" type="xs:int" />
		<xs:attribute name="Time" type="xs:dateTime" />
		<xs:attribute name="UserId" type="xs:int" />
	</xs:complexType>

	<!-- SPFile definition -->
	<xs:complexType name="SPFile">
		<xs:sequence>
			<xs:element name="Properties" type="Dictionary" minOccurs="0" />
			<xs:element name="Versions" type="SPFileVersionCollection" minOccurs="0" 
maxOccurs="1" />
			<xs:element name="Links" type="SPLinkCollection" minOccurs="0" maxOccurs="1" />
			<xs:element name="EventReceivers" type="SPEventReceiverDefinitionCollection" 
minOccurs="0" maxOccurs="1" />
			<xs:element name="VersionEvents" type="SPFileVersionEventCollection" minOccurs="0" 
maxOccurs="1" />
		</xs:sequence>

		<xs:attribute name="Name" type="xs:string" />
		<xs:attribute name="Id" type="Guid" />
		<xs:attribute name="Url" type="xs:string" />
		<xs:attribute name="ListItemIntId" type="xs:int" />
		<xs:attribute name="InDocumentLibrary" type="xs:boolean" />

		<xs:attribute name="ParentWebId" type="Guid" />
		<xs:attribute name="ParentWebUrl" type="xs:string" />

		<xs:attribute name="ParentId" type="Guid" />
		<xs:attribute name="ListId" type="Guid" use="optional" />

		<!-- Map to file on disk -->
		<xs:attribute name="FileValue" type="xs:string" use="optional" />

		<xs:attribute name="CheckinComment" type="xs:string" use="optional" />
		<xs:attribute name="Version" type="xs:string" use="optional" default="1.0" />

		<xs:attribute name="Author" type="xs:string" use="optional" />
		<xs:attribute name="ModifiedBy" type="xs:string" use="optional" />
		<xs:attribute name="TimeCreated" type="xs:dateTime" use="optional" />
		<xs:attribute name="TimeLastModified" type="xs:dateTime" use="optional" />

		<!-- Case where it fails at export time but too late to ignore -->
		<xs:attribute name="FailureMessage" type="xs:string" use="optional" />

		<!-- Setup Path Information -->
		<xs:attribute name="IsGhosted" type="xs:boolean" use="optional" />
		<xs:attribute name="SetupPath" type="xs:string" use="optional" />
		<xs:attribute name="SetupPathUser" type="xs:string" use="optional" />
		<!-- Use: 2, 3, 4 OR 15 -->
		<xs:attribute name="SetupPathVersion" type="xs:byte" default="15" />

		<xs:anyAttribute namespace="##any" processContents="skip" />
	</xs:complexType>

	<!-- Doc Type of List Item -->
	<xs:simpleType name="ListItemDocType">
		<xs:restriction base="xs:string">
			<xs:enumeration value="File" />
			<xs:enumeration value="Folder" />
			<xs:enumeration value="Unknown" />
		</xs:restriction>
	</xs:simpleType>

	<!-- SPListItem definition -->
	<xs:complexType name="SPListItem">
		<xs:sequence>
			<xs:choice minOccurs="0" maxOccurs="5">
				<xs:element name="Fields" type="SPFieldCollection" minOccurs="0" maxOccurs="1" 
/>
				<xs:element name="Versions" type="SPListItemVersionCollection" minOccurs="0" 
maxOccurs="1" />
				<xs:element name="Attachments" type="SPAttachmentCollection" minOccurs="0" 
maxOccurs="1" />
				<xs:element name="Links" type="SPLinkCollection" minOccurs="0" maxOccurs="1" />
				<xs:element name="EventReceivers" type="SPEventReceiverDefinitionCollection" 
minOccurs="0" maxOccurs="1" />
			</xs:choice>
		</xs:sequence>

		<xs:attribute name="Name" type="xs:string" />
		<xs:attribute name="DirName" type="xs:string" />
		<xs:attribute name="FileUrl" type="xs:string" use="optional" />
		<xs:attribute name="Version" type="xs:string" use="optional" default="1.0" />
		<xs:attribute name="Id" type="Guid" />
		<xs:attribute name="IntId" type="xs:int" />
		<xs:attribute name="DocId" type="Guid" use="optional" />

		<xs:attribute name="Author" type="xs:string" use="optional" />
		<xs:attribute name="ModifiedBy" type="xs:string" use="optional" />
		<xs:attribute name="TimeCreated" type="xs:dateTime" use="optional" />
		<xs:attribute name="TimeLastModified" type="xs:dateTime" use="optional" />

		<xs:attribute name="ParentWebId" type="Guid" />
		<xs:attribute name="ParentListId" type="Guid" />
		<xs:attribute name="ParentFolderId" type="Guid" use="optional" />

		<xs:attribute name="ModerationStatus" type="SPModerationStatusType" use="optional" />
		<xs:attribute name="ModerationComment" type="xs:string" use="optional" />
		<xs:attribute name="ContentTypeId" type="xs:string" />
		<xs:attribute name="ProgId" type="xs:string" use="optional" />
		<xs:attribute name="Order" type="xs:float" use="optional" />
		<xs:attribute name="ThreadIndex" type="xs:string" use="optional" />
		<xs:attribute name="UserSolutionActivated" type="xs:boolean" use="optional" />
		<xs:attribute name="DocType" type="ListItemDocType" default="File" />

		<!-- UserInfo -->
		<xs:attribute name="UserLoginName" type="xs:string" use="optional" />
		<xs:attribute name="GroupName" type="xs:string" use="optional" />

		<!-- Case where it fails at export time but too late to ignore -->
		<xs:attribute name="FailureMessage" type="xs:string" use="optional" />

		<xs:anyAttribute namespace="##any" processContents="skip" />
	</xs:complexType>

	<xs:complexType name="SPFieldLink">
		<xs:attribute name="Name" type="xs:string" />
		<xs:attribute name="ID" type="Guid" use="optional" />
		<xs:attribute name="Customization" type="xs:string" use="optional" />
		<xs:attribute name="Default" type="xs:string" use="optional" />
		<xs:attribute name="ColName" type="xs:string" use="optional" />
		<xs:attribute name="ColName2" type="xs:string" use="optional" />
		<xs:attribute name="RowOrdinal" type="xs:int" use="optional" />
		<xs:attribute name="RowOrdinal2" type="xs:int" use="optional" />

		<xs:attribute name="Hidden" type="TRUEFALSE" use="optional" />
		<xs:attribute name="Required" type="TRUEFALSE" use="optional" />
		<xs:attribute name="Explicit" type="xs:string" use="optional" />
		<xs:attribute name="ShowInNewForm" type="xs:string" use="optional" />
		<xs:attribute name="ShowInEditForm" type="xs:string" use="optional" />
		<xs:attribute name="DisplayName" type="xs:string" use="optional" />
		<xs:attribute name="Node" type="xs:string" use="optional" />

		<xs:anyAttribute namespace="##any" processContents="skip" />
	</xs:complexType>

	<xs:complexType name="SPXmlDocumentCollection">
		<xs:sequence >
			<xs:any minOccurs="0" maxOccurs="unbounded" namespace="##any" 
processContents="skip" />
		</xs:sequence>
		<xs:anyAttribute namespace="##any" processContents="skip" />
	</xs:complexType>

	<xs:complexType name="SPContentType">
		<xs:sequence>
			<xs:any minOccurs="0" maxOccurs="unbounded" namespace="##any" 
processContents="skip" />
		</xs:sequence>

		<xs:attribute name="ID" type="Guid" />
		<xs:attribute name="Name" type="xs:string" />
		<xs:attribute name="Scope" type="xs:string" />
		<xs:attribute name="NextChildByte" type="xs:short" />
		<xs:attribute name="ParentWebId" type="Guid" />
		<xs:attribute name="ListId" type="Guid" use="optional" />
		<xs:attribute name="Description" type="xs:string" use="optional" />
		<xs:attribute name="Hidden" type="TRUEFALSE" use="optional" />
		<xs:attribute name="ReadOnly" type="TRUEFALSE" use="optional" />
		<xs:attribute name="Group" type="xs:string" use="optional" />
		<xs:attribute name="PushDownChanges" type="xs:boolean" use="optional" />
		<xs:attribute name="RequireClientRenderingOnNew" type="xs:string" use="optional" />

		<xs:anyAttribute namespace="##any" processContents="skip" />
	</xs:complexType>

	<xs:complexType name="SPContentTypeRef">
		<xs:sequence>
			<xs:any minOccurs="0" maxOccurs="unbounded" namespace="##any" 
processContents="skip" />
		</xs:sequence>

		<xs:attribute name="ID" type="Guid" />

		<xs:anyAttribute namespace="##any" processContents="skip" />
	</xs:complexType>

	<xs:complexType name="SPContentTypeFolder">
		<xs:attribute name="TargetName" type="xs:string" />

		<xs:anyAttribute namespace="##any" processContents="skip" />
	</xs:complexType>

	<xs:complexType name="SPContentTypeCollection">
		<xs:sequence>
			<xs:any minOccurs="0" maxOccurs="unbounded" namespace="##any" 
processContents="skip" />
		</xs:sequence>
	</xs:complexType>

	<!--This defines that the XML can contain 0-N instances of the SPGenericObject element-->
	<xs:element name="SPObjects" type="SPGenericObjectCollection"></xs:element>
</xs:schema>
```



### DeploymentRequirements.XSD

There is no change from current published [full 2013 package schema](https://docs.microsoft.com/en-us/sharepoint/dev/schema/content-migration-schemas).

### DeploymentRootObjectMap.XSD

#### Table 6: Constrained DeploymentRootObjectMap.XSD

```xml

<?xml version="1.0" encoding="utf-8" ?>
<xs:schema
	targetNamespace="urn:deployment-rootobjectmap-schema"
	elementFormDefault="qualified"
	xmlns="urn:deployment-rootobjectmap-schema"
	xmlns:mstns="urn:deployment-rootobjectmap-schema"
	xmlns:xs="http://www.w3.org/2001/XMLSchema">

	<!-- Guid SimpleType definition -->
	<xs:simpleType name="Guid">
		<xs:restriction base="xs:string"></xs:restriction>
	</xs:simpleType>

	<xs:simpleType name="SPDeploymentObjectType">
		<xs:restriction base="xs:string">
			<xs:enumeration value="Folder" />
			<xs:enumeration value="List" />
			<xs:enumeration value="ListItem" />
			<xs:enumeration value="File" />
		</xs:restriction>
	</xs:simpleType>

	<xs:complexType name="SPRootObject">
		<xs:attribute name="Id" type="Guid" />
		<xs:attribute name="Type" type="SPDeploymentObjectType" />
		<xs:attribute name="ParentId" type="Guid" />
		<xs:attribute name="WebUrl" type="xs:string" />
		<xs:attribute name="Url" type="xs:string" />
		<xs:attribute name="IsDependency" type="xs:boolean" />
	</xs:complexType>

	<xs:complexType name="SPRootObjects">
		<xs:sequence>
			<xs:element
				name="RootObject" type="SPRootObject"
				minOccurs="0" maxOccurs="unbounded" />
		</xs:sequence>
	</xs:complexType>

	<xs:element name="RootObjects" type="SPRootObjects" />
</xs:schema>
```

### DeploymentSystemData.XSD

There is no change from current published [full 2013 package schema](https://docs.microsoft.com/en-us/sharepoint/dev/schema/content-migration-schemas).

### DeploymentUserGroupMap.XSD

There is no change from current published full 2013 [full 2013 package schema](https://docs.microsoft.com/en-us/sharepoint/dev/schema/content-migration-schemas).

### DeploymentViewFormsList.XSD

There is no change from current published [full 2013 package schema](https://docs.microsoft.com/en-us/sharepoint/dev/schema/content-migration-schemas).





