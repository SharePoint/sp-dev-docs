---
title: "SharePoint Migration API Reference Guide"
description: "This article provides in-depth information on how to use the SharePoint Migration API."
ms.date: 04/28/2024
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

# SharePoint Migration API Reference Guide

This guide describes the usage of SharePoint Migration API, which imports content into SharePoint, based on manifest files.

## CSOM and REST

Migration API supports both SharePoint Client Side Object Model (CSOM) and REST.

### Use NuGet Packages with CSOM

To reference the SharePoint Client Side Object Model (CSOM) in your solution, use NuGet packages.

Manage dependencies easily and ensure your solution is using the latest version of the CSOM library with NuGet packages.

Get the latest version of the CSOM package at the [SharePoint Client-side Object Model Libraries](https://www.nuget.org/packages/Microsoft.SharePointOnline.CSOM) with the ID `Microsoft.SharePointOnline.CSOM`.

Check [Get to know SharePoint REST service](/sharepoint/dev/sp-add-ins/get-to-know-the-sharepoint-rest-service) for instructions on REST API.

## CreateMigrationJob method

Creates a new migration import job with the import package specified in `azureContainerSourceUri` parameter.

### CreateMigrationJob syntax

```csharp
public Guid CreateMigrationJobEncrypted(
Guid gWebId,
string azureContainerSourceUri,
string azureContainerManifestUri,
string azureQueueReportUri,
EncryptionOption AES256CBCKey
)
```

```rest
POST https://{site_url}/_api/site/CreateMigrationJobEncrypted
{
  "options": {
    "AES256CBCKey": "000000000000000000000000000000000000000000000000000000="
  },
  "gWebId": "00000000-0000-0000-0000-000000000000",
  "azureContainerSourceUri": "https://tenant.blob.core.windows.net:443/00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000=rw",
  "azureContainerManifestUri": "https://tenant.blob.core.windows.net:443/00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000=rw"
}
```

### CreateMigrationJob parameters

#### gWebID

Required.

A **String** value that contains the unique identifier of the destination web targeted for the package import. The import package itself specifies additional information and identifiers for the import. You can programmatically find this identifier by querying the target web using CSOM calls.

#### azureContainerSourceUri

Required.

A **String** value that contains the valid URI, including the SAS token, to access the Azure Blob Storage Container that contains the binary files of type block.

See [Use Azure Blob Storage Containers and Azure Queues with SharePoint Migration API](migration-azure.md) for instructions on using Azure Blob Storage Containers in migration.

When using content containers not provided by this method, Migration API requires `Read`, and `List` permissions only. Ensure that the start time of the SAS token is set at or before the job submission. Also, when setting the expiration time, allow a reasonable duration for the import process to complete.

Migration API doesn't require `List` permission from containers provisioned with `ProvisionMigrationContainers` method.

#### azureContainerManifestUri

Required.

A **String** value that contains the valid URI, including the SAS token, to access the Azure Blob Storage Container, which contains the block blobs for the manifest and other packages describing XML files. Migration API writes log to this container. This container can't be the same as the one used for the `azureContainerSourceUri`.

See [Use Azure Blob Storage Containers and Azure Queues with SharePoint Migration API](migration-azure.md) for instructions on using Azure Blob Storage Containers in migration.

When using content containers not provided by this method, Migration API requires `Read`, `List`, and `Write` permissions only. Ensure that the start time of the SAS token is set at or before the job submission. Also, when setting the expiration time, allow a reasonable duration for the import process to complete.

#### azureQueueReportUri

Optional.

A **String** value that contains the valid URL, including the SAS token, to access the user-provided Azure Queue for migration job progress. Use `null` if receiving import status updates isn't necessary.

If this value isn't `null`, and the SAS token contains the correct permissions, Migration API writes import status updates to the queue at the URL provided.

Share the notification queue among multiple migration jobs. Migration API identifies each job with unique Job ID values in the notification queue.

See [Azure](migration-azure.md) for instructions on using Azure Queue in migration. Check [Migration events in Azure Queue](migration-events.md) for types of events.

Requires `Add`, `Read`, and `Update` permissions only. If the SAS token has other permissions, the migration job will be unable to add events to the queue.

### CreateMigrationJob return value

#### Job ID

A **Guid** value, which contains Job ID, the unique identifier of the migration job. The method returns a `null` value, if it fails to create the job. Use Job ID to query the status of migration jobs with `GetMigrationJobStatus` method.

### Example

```csharp
Guid MigrationJobId = TargetSite.CreateMigrationJob(
TargetWebId,
azureContainerSourceUri,
azureContainerManifestUri,
azureQueueReportUri);
```

## CreateMigrationJobEncrypted method

Creates a new migration import job with an encrypted PRIME package.

Check the encryption instructions in [Azure](migration-azure.md) for Azure Blob Storage Container and Azure Queue encryption used.

### CreateMigrationJobEncrypted syntax

```csharp
public Guid CreateMigrationJobEncrypted(
Guid gWebId,
string azureContainerSourceUri,
string azureContainerManifestUri,
string azureQueueReportUri,
EncryptionOption AES256CBCKey
)
```

```rest
POST https://{site_url}/_api/site/CreateMigrationJobEncrypted
{
  "options": {
    "AES256CBCKey": "000000000000000000000000000000000000000000000000000000="
  },
  "gWebId": "00000000-0000-0000-0000-000000000000",
  "azureContainerSourceUri": "https://tenant.blob.core.windows.net:443/00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000=rw",
  "azureContainerManifestUri": "https://tenant.blob.core.windows.net:443/00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000=rw"
}
```

### CreateMigrationJobEncrypted parameters

`gWebID`, `azureContainerSourceUri`, `azureContainerManifestUri`, and `azureQueueReportUri` parameters have the same requirements as in `CreateMigrationJob` method.

Provide `EncryptionOption` parameter as instructed below.

#### EncryptionOption

Required.

A `EncryptionOption` object, containing the AES256CBCKey used to decrypt the output.

Migration API encrypts the output with the AES256CBCKey key supplied.

See `[EncryptionOption](https://learn.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.client.encryptionoption)` class for details.

### CreateMigrationJobEncrypted return value

See Return value in `CreateMigrationJob` method.

## GetMigrationJobStatus method

Retrieves the processing status for a designated migration job.

Migration API removes completed migration jobs from the timer job queue. Check the notification queue and/or log outputs for import results.

### GetMigrationJobStatus syntax

```csharp
[ClientNS.ClientCallableMethod]
public SPMigrationJobState GetMigrationJobStatus(Guid MigrationJobId)
```

### GetMigrationJobStatus parameters

#### ID

Required.

A **Guid** value, which contains the migration Job ID, is returned from `CreateMigrationJob`.

### GetMigrationJobStatus return value

A `SPMigrationJobState` object, which contains the status of the migration job.

### GetMigrationJobStatus example

```csharp
SPMigrationJobState CurrentJobState = TargetSite.GetMigrationJobStatus(MigrationJobId);
```

## SPMigrationJobState enumeration

Contains members representing the status of migration jobs in the import queue.

### SPMigrationJobState members

#### None

Value: 0

The queue doesn't contain the migration job with the Job ID. The possible reasons are:

- Migration API has completed the job and removed it from the queue.
- The Job ID is invalid.

#### Queued

Value: 2

The queue contains the migration job. Migration API isn't processing the job.

#### Processing

Value: 4

The queue contains the migration job. Migration API is processing the job.
