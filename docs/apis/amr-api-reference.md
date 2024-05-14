---
title: "SharePoint Asynchronous Metadata Read (AMR) API Reference Guide"
description: "This article provides in-depth information on how to use the SharePoint AMR API."
ms.date: 04/18/2024
ms.author: ranren
author: underreview
manager: dapodean
audience: ITPro
ms.subservice: migration-tool
ms.topic: article
ms.localizationpriority: high
ms.collection:
  - SPMigration
  - m365-collaboration
---
# SharePoint Asynchronous Metadata Read (AMR) API Reference Guide

Use this document as the guide when using SharePoint Asynchronous Metadata Read (AMR) API.

AMR API aggregates SharePoint metadata into a manifest package. Use the package for incremental migration, structure creation, post-migration validation, or permission management.

## CSOM and REST

AMR API supports both SharePoint Client Side Object Model (CSOM) and REST.

### Use NuGet Packages with CSOM

To reference the SharePoint Client Side Object Model (CSOM) in your solution, use NuGet packages.

Manage dependencies easily and ensure your solution is using the latest version of the CSOM library with NuGet packages.

Get the latest version of the CSOM package at the [SharePoint Client-side Object Model Libraries](https://www.nuget.org/packages/Microsoft.SharePointOnline.CSOM) with the ID `Microsoft.SharePointOnline.CSOM`.

Check [Get to know SharePoint REST service](/sharepoint/dev/sp-add-ins/get-to-know-the-sharepoint-rest-service) for instructions on REST API.

## CreateSPAsyncReadJob method

Creates an AMR job to read all the metadata of the specified SharePoint URL and its children into the specified manifest container.

### CreateSPAsyncReadJob syntax

```csharp
public SPAsyncReadJobInfo CreateSPAsyncReadJob(String url,
SPAsyncReadOptions readOptions,
EncryptionOption encryptionOption,
string azureContainerManifestUri,
string azureQueueReportUri)
```

### CreateSPAsyncReadJob parameters

#### url

Required.

A **String** value containing the full path URL of the path of the SharePoint List, files/folders, or Document Library **to read**. AMR API returns all the metadata of files, folders, and root objects, **including subfolders and any children content**.

##### Example

This example `url` returns all metadata of Shared Document, and its children:

```http
https://www.contoso.com/Shared%20Document
```

#### readOptions

Required.

A `SPAsyncReadOptions` structure, with `readOption` values specifying the types of metadata to read.

##### IncludeVersions

Optional.

A **Bool** value to indicate if AMR API reads multiple versions of files and List Items.

Default value is `false`. When absent or set to `false`, AMR API only reads the latest version of items.

##### IncludeSecurity

Optional.

A **Bool** value to indicate if AMR API reads Users and Groups information related to a Site.

Default value is `false`.

AMR API reads Users and Groups as Authors or Modifiers as part of the metadata of the objects.

If set to `true`, AMR API reads all Users in Site Collections. When reading multiple Document Libraries under the same Site Collection, the same Users and Group might appear in the read package multiple times.

##### IncludeDirectDescendantsOnly

Optional.

A **Bool** value to indicate if AMR API reads only the metadata of the direct descendants.

Default value is `false`.

If set to `true`, AMR API reads only the metadata of the direct descendants.

Use this `readOption` along with `IncludeSecurity` `readOption` together to improve performance when reading metadata from a Document Library containing large number of items, as described in [Best practice](export-amr-api.md) to avoid slow performance.

##### IncludeExtendedMetadata

Optional.

Default value is `false`.

When set to `false`, AMR API reads basic metadata:

- List
- Folder
- File
- List Item
- Roles
- Role Assignments

When set to `true`,  AMR API reads all metadata available:

For Files:

- Web Part
- Web Part personalization
- Links
- Version events
- Event receivers
- Attachment metadata

For Lists:

- Custom actions
- List shortcuts

For List Items:

- Comments
- Documents set links
- Activities
- List Item shortcuts

Including extended metadata slows down the read significantly. For file share migrations, keep the default value `false`. Set to `true` only when necessary, for complex migration projects.

##### IncludePermission

Optional.

A **Bool** value to indicate if permissions read is needed. Default value is `false`.

When set to `true`, AMR API reads permission metadata in `RoleAssignments` tags in `Manifest.xml` files. The file includes all distinguished permission metadata for each read SharePoint object, along with property `ScopeId`.

##### StartChangeToken

Optional.

A **Integer** value containing the changeToken item.

By default, when no `StartChangeToken` is provided, `CreateSPAsyncReadJob` method returns all items available, based on the parameters. A `CurrentChangeToken` value is returned every time.

To read only the items that changed since last read, set a `StartChangeToken` in subsequent calls to `CreateSPAsyncReadJob`. Use `CurrentChangeToken` returned from last call as the value of `StartChangeToken`.

AMR API returns an error and stops the read, if it receives an invalid `StartChangeToken` value.

Be careful when using this feature with large number of items. The read job could run for extended duration. AMR API cancels jobs that run over 10 minutes to protect the SharePoint infrastructure.

#### encryptionOption

Optional.

A `EncryptionOption` object, containing the AES-256-CBC Key used to decrypt the output.

By default, AMR API doesn't encrypt the output and event queue. If set with AES-256-CBC Key, AMR API encrypts the output with the key supplied.

See [`EncryptionOption`](/dotnet/api/microsoft.sharepoint.client.encryptionoption) class for details.

#### azureContainerManifestUri

Required.

A **String** value, which is the destination URL of the Azure Blob Storage Container containing the output manifest package.

See [Azure](migration-azure.md) for instructions of using Azure Blob Storage Container in migration.

#### azureQueueReportUri

Required.

A **String** value, which is the URL of the Azure Queue to receive read status messages.

Share `azureQueueReportUri` among different jobs if necessary. AMR API returns `JobID` to identify individual jobs created.

See [Azure](migration-azure.md) for instructions of using Azure Queue in migration. Check [Migration events in Azure Queue](migration-events.md) for types of events.

### CreateSPAsyncReadJob return values

#### Job ID

A **Guid** value, which contains Job ID, the unique identifier of the migration job. The method returns a `null` value, if it fails to create the job.

AMR API generates a `JobEnd` event when it estimates item count for each `url`. Check [Events](migration-events.md) for details.

#### AzureContainerManifest

A **Uri** value that contains the URL to access the Azure Blob Storage Container, which contains the metadata read.

#### JobQueueUri

A **Uri** value that contains the URL of the Azure Queue used for read status.

#### EncryptionKey

A **Byte Array** value that contains the AES-256-CBC Key for decrypting the manifest files and messages in the Azure Queue.

## CreateSPAsyncReadJobWithMultiUrl method

Creates an AMR job to read all the metadata of all SharePoint URLs specified, and their children into the specified manifest container.

### CreateSPAsyncReadJobWithMultiUrl syntax

```csharp
public SPAsyncReadJobInfo CreateSPAsyncReadJobWithMultiUrl(
        String[] urls,
        SPAsyncReadOptions readOptions,
        EncryptionOption encryptionOption,
        String azureContainerManifestUri,
        String azureQueueReportUri)
```

### CreateSPAsyncReadJobWithMultiUrl parameters

See `CreateSPAsyncReadJob` method for details of `readOptions`, `encryptionOption`, `azureContainerManifestUri`, and `azureQueueReportUri`.

#### urls

Required.

A **Uri** **Array** containing the full path URLs of the root paths of the SharePoint Lists, files/folders, or Document Libraries to read. AMR API returns all the metadata of files, folders, and root objects, **including subfolders and any children content**.

Specify multiple URLs when needed. Aggravated call with multiple URLs might improve the performance. See [Performance](export-amr-api.md#performance) for details.

## Errors

### -2146232832

The changeToken refers to a time before the start of the current change log.

The change log is limited to 60 days immediately before the current date. AMR API returns this error code when the specified `changeToken` refers to a time outside the 60-day window.

### -2147213196

Operation canceled.

AMR API received a cancellation request from the client and cancels the read operation.
