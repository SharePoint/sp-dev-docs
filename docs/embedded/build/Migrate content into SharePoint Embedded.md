---
title: Migrate content with the migration API
description: Prepare migration manifests and import content into SharePoint Embedded containers with Microsoft Graph.
ms.date: 09/03/2026
ms.reviewer: troys
ms.author: stpuceli
ms.localizationpriority: high
ai-usage: ai-assisted
---

# Migrate content with the migration API

**Applies to:** SharePoint Embedded via Microsoft Graph v1.0

<!-- agent:
task_type: how-to
audience: developer
outcome: Prepare migration manifests, import content into a SharePoint Embedded container, and monitor the migration job.
next: ../publish/prepare-customer-installation.md
-->

Use the SharePoint Embedded migration API to import large content sets into a target container. The workflow stages content and metadata in temporary Azure Blob Storage containers, then runs an asynchronous migration job.

This guide explains how to prepare SharePoint deployment manifests, provision temporary storage, submit a migration job, monitor progress, and remove a queued job.

## Understand the migration workflow

The SharePoint Embedded migration workflow has five stages:

1. Provision SharePoint-managed Azure Blob Storage containers for content and metadata.
1. Prepare deployment manifests and upload the migration package to the temporary containers.
1. Submit a migration job for the target SharePoint Embedded container.
1. Poll the job's progress events until the job completes or reports an error.
1. Delete a migration job if you need to remove it while it's queued.

The Azure Blob Storage containers are temporary intermediary storage. Creating a migration job schedules the import; it doesn't import the content synchronously. 

## Prerequisites

Before you start, collect or configure these inputs:

- A target SharePoint Embedded container ID.
- A Microsoft Entra application that has `FileStorageContainer.Selected` access to the target container.
- A work or school account for delegated access, or an application identity for app-only access.
- A migration package generator that creates valid SharePoint deployment manifests.
- A process that uploads content and metadata to Azure Blob Storage by using shared access signature (SAS) URLs.
- Source identifiers, timestamps, authors, and editor values that you want to preserve.

Personal Microsoft accounts aren't supported. The least-privileged permission for both delegated and application access is `FileStorageContainer.Selected`.

For SharePoint Embedded authentication and permissions, see [Authentication and permissions](../plan/authentication-permissions.md).

## Provision temporary migration containers

Provisioning creates separate Azure Blob Storage containers for file data and migration metadata. The response also contains the Base64-encoded AES-256-CBC encryption key used by the migration package.

Send this request without a request body:

```http
POST https://graph.microsoft.com/v1.0/storage/fileStorage/containers/<container-id>/provisionMigrationContainers
Authorization: Bearer <access-token>
```

Replace `<container-id>` with the target SharePoint Embedded container ID. Replace `<access-token>` with a Microsoft Graph access token.

A successful request returns `200 OK`:

```json
{
  "@odata.type": "#microsoft.graph.sharePointMigrationContainerInfo",
  "dataContainerUri": "https://<storage-host>/data?<sas-token>",
  "metadataContainerUri": "https://<storage-host>/metadata?<sas-token>",
  "encryptionKey": "<base64-aes-256-cbc-key>"
}
```

The response values have these purposes:

| Property | Purpose |
| --- | --- |
| `dataContainerUri` | SAS URL for the Azure Blob Storage container that holds file content. |
| `metadataContainerUri` | SAS URL for the Azure Blob Storage container that holds migration manifests and metadata. |
| `encryptionKey` | Base64-encoded AES-256-CBC key for encrypted migration content. |

Verify that the SAS URLs grant read and write access. Keep them valid for at least 12 hours so the migration job can read the complete package.

If the request returns `429 Too Many Requests` with `RetryAfterDelay` and `activityLimitReached`, wait and retry with backoff.

For the complete contract, see [Provision migration containers](/graph/api/filestoragecontainer-provisionmigrationcontainers).

## Prepare the migration manifests

The migration manifests describe each object, its relationships, its content file, and the metadata to preserve. Generate manifests programmatically so repeated identifiers stay consistent.

A file commonly requires two related objects:

- An `SPFile` object for the file content and file-level metadata.
- An `SPListItem` object for the corresponding list item and fields.

The file ID must match the list item's `DocId`. Values such as `ParentWebId`, `ParentWebUrl`, list IDs, folder IDs, authors, and timestamps must also match across related elements.

### Get list and web identifiers

Get the target drive root to resolve the list and web identifiers:

```http
GET https://graph.microsoft.com/v1.0/drives/<drive-id>/root?$select=sharepointIds,webUrl
Authorization: Bearer <access-token>
```

Replace `<drive-id>` with the target container's drive ID.

Map the response to the manifest properties:

| Manifest property | Microsoft Graph response property |
| --- | --- |
| `ListId` | `sharepointIds.listId` |
| `ListFolderId` | `sharepointIds.listItemUniqueId` |
| `ParentWebId` | `sharepointIds.webId` |
| `ParentWebUrl` | The container site URL derived from `sharepointIds.siteUrl` and the target path. |

The expected result is a `driveItem` response that contains `sharepointIds`. If these values are missing, verify that the drive ID belongs to the target SharePoint Embedded container.

### Get a parent folder identifier

List an existing folder or create the destination folder through Microsoft Graph. Read the folder's `eTag`, and use the GUID inside the braces as `ParentFolderId`.

For example, this `eTag`:

```text
"{86EC9BA4-D929-441A-87CA-F4B2164D6439},3"
```

produces this manifest value:

```text
86EC9BA4-D929-441A-87CA-F4B2164D6439
```

Don't include the braces, quotation marks, comma, or version number.

For folder operations, see [Manage files and folders](manage-files.md).

### Preserve file system metadata

Populate the manifest from the source system's metadata. The migration service uses these properties to preserve file dates and identities:

| Manifest property | Source value |
| --- | --- |
| `TimeCreated` | Original file creation timestamp. |
| `TimeLastModified` | Original file modification timestamp. |
| `Author` | Source author identifier represented in the migration package. |
| `ModifiedBy` | Source editor identifier represented in the migration package. |

If the package generator substitutes the migration time or migration identity, the imported file doesn't retain its original system metadata.

### Create the object manifest

The following abbreviated example shows the relationship between an `SPFile` object and its `SPListItem`. Replace every placeholder with a value from the source system or target container.

```xml
<?xml version="1.0" encoding="utf-8"?>
<SPObjects xmlns="urn:deployment-manifest-schema">
  <SPObject
    Id="<file-id>"
    ObjectType="SPFile"
    ParentId="<parent-folder-id>"
    ParentWebId="<parent-web-id>"
    ParentWebUrl="<parent-web-url>"
    Url="<absolute-file-url>">
    <File
      Url="<server-relative-file-url>"
      Id="<file-id>"
      ParentWebId="<parent-web-id>"
      ParentWebUrl="<parent-web-url>"
      Name="<file-name>"
      ListItemIntId="<list-item-integer-id>"
      ListId="<list-id>"
      ParentId="<parent-folder-id>"
      TimeCreated="<source-created-timestamp>"
      TimeLastModified="<source-modified-timestamp>"
      Version="<file-version>"
      FileValue="<content-blob-name>"
      FileSize="<file-size-bytes>"
      Author="<source-author-id>"
      ModifiedBy="<source-editor-id>" />
  </SPObject>

  <SPObject
    Id="<list-item-id>"
    ObjectType="SPListItem"
    ParentId="<list-id>"
    ParentWebId="<parent-web-id>"
    ParentWebUrl="<parent-web-url>"
    Url="<absolute-file-url>">
    <ListItem
      FileUrl="<server-relative-file-url>"
      DocType="File"
      ParentFolderId="<parent-folder-id>"
      Order="<list-item-order>"
      Id="<list-item-id>"
      ParentWebId="<parent-web-id>"
      ParentListId="<list-id>"
      Name="<file-name>"
      DirName="<server-relative-folder-url>"
      IntId="<list-item-integer-id>"
      DocId="<file-id>"
      Version="<file-version>"
      Author="<source-author-id>"
      ModifiedBy="<source-editor-id>"
      TimeLastModified="<source-modified-timestamp>"
      TimeCreated="<source-created-timestamp>">
      <Fields />
    </ListItem>
  </SPObject>
</SPObjects>
```

The placeholders represent these values:

| Placeholder | Value |
| --- | --- |
| `<file-id>` | Unique ID for the file. Reuse it as the list item's `DocId`. |
| `<list-item-id>` | Unique ID for the corresponding list item. |
| `<parent-folder-id>` | GUID extracted from the destination folder's `eTag`. |
| `<parent-web-id>` | `sharepointIds.webId` for the target drive root. |
| `<parent-web-url>` | URL of the target SharePoint Embedded container site. |
| `<absolute-file-url>` | Full destination URL for the file. |
| `<server-relative-file-url>` | File path within the target document library. |
| `<server-relative-folder-url>` | Parent folder path within the target document library. |
| `<file-name>` | Destination file name. |
| `<list-item-integer-id>` | Integer ID assigned to the list item in the package. |
| `<list-id>` | `sharepointIds.listId` for the target drive root. |
| `<list-item-order>` | List item order value generated for the package. |
| `<file-version>` | Version value represented by the migration package. |
| `<content-blob-name>` | Name of the staged data blob that contains the file bytes. |
| `<file-size-bytes>` | Source file size in bytes. |
| `<source-created-timestamp>` | Original creation time in an accepted date-time format. |
| `<source-modified-timestamp>` | Original modification time in an accepted date-time format. |
| `<source-author-id>` | Author identity mapping used by the migration package. |
| `<source-editor-id>` | Editor identity mapping used by the migration package. |

Validate the manifest against the `urn:deployment-manifest-schema` schema before upload. A validation failure means the package isn't ready to submit.

## Stage content and metadata

Upload file content to the container identified by `dataContainerUri`. Upload the manifests and related metadata to the container identified by `metadataContainerUri`.

Complete the staging upload before you create the migration job. Confirm these conditions:

- Every `FileValue` points to an uploaded data blob.
- Manifest identifiers remain consistent across related objects.
- The manifests pass schema validation.
- The SAS URLs still have at least 12 hours of validity.
- The encryption key used for staged content matches the key returned during provisioning.

An incomplete or inconsistent package can create a job that later reports object-level errors.

## Submit the migration job

Create the migration job after all content and metadata are staged:

```http
POST https://graph.microsoft.com/v1.0/storage/fileStorage/containers/<container-id>/migrationJobs
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "containerInfo": {
    "dataContainerUri": "https://<storage-host>/data?<sas-token>",
    "metadataContainerUri": "https://<storage-host>/metadata?<sas-token>",
    "encryptionKey": "<base64-aes-256-cbc-key>"
  }
}
```

Use the values returned by the provisioning request. A successful request returns `201 Created` and the migration job ID:

```json
{
  "id": "<migration-job-id>"
}
```

Persist `<migration-job-id>` with the target container ID. Both values are required to monitor or delete the job.

If the API returns `migrationBadRequest` with `invalidAzureResource`, provision new migration containers and restage the package. An invalid or expired SAS URL commonly causes this error.

For the complete contract, see [Create a SharePoint migration job](/graph/api/filestoragecontainer-post-migrationjobs).

## Monitor migration progress

Progress events show when the job queues, starts, processes objects, reports errors, and completes. Events remain available for four days, so persist the event stream while you poll.

Send this request:

```http
GET https://graph.microsoft.com/v1.0/storage/fileStorage/containers/<container-id>/migrationJobs/<migration-job-id>/progressEvents
Authorization: Bearer <access-token>
```

Replace `<migration-job-id>` with the ID returned when you created the job.

Inspect these event types:

| Event type | Meaning |
| --- | --- |
| `sharePointMigrationJobQueuedEvent` | The service accepted and queued the job. |
| `sharePointMigrationJobStartEvent` | The job started or restarted. |
| `sharePointMigrationJobProgressEvent` | The job reports processed files, bytes, objects, errors, warnings, retries, and completion state. |
| `sharePointMigrationJobErrorEvent` | The job reports an error for the package or an object. |
| `sharePointMigrationJobCancelledEvent` | The job was canceled. |

A `200 OK` response doesn't mean that the migration succeeded. Inspect `totalErrors`, `isCompleted`, and every `sharePointMigrationJobErrorEvent`.

Follow `@odata.nextLink` until the response doesn't include another page. You can also pass the returned `$skipToken` value explicitly.

If the API returns `migrationNotFound` with `jobProgressExpired`, the four-day event retention period has ended. Use the telemetry that your migration process persisted.

For the complete contract, see [List migration progress events](/graph/api/sharepointmigrationjob-list-progressevents).

## Delete a queued migration job

Delete a migration job when you need to remove it before processing:

```http
DELETE https://graph.microsoft.com/v1.0/storage/fileStorage/containers/<container-id>/migrationJobs/<migration-job-id>
Authorization: Bearer <access-token>
```

A successful request returns `204 No Content`.

If the API returns `migrationNotFound` with `jobNotFound`, verify both IDs. The job might already be deleted or no longer available for removal.

For the complete contract, see [Delete a SharePoint migration job](/graph/api/sharepointmigrationjob-delete).

## Troubleshoot migration errors

Migration API errors include a top-level code and an `innerError` object. Persist `request-id` and `client-request-id` because support uses them to correlate failures.

Use this table for common failures:

| HTTP status | Error codes | Action |
| --- | --- | --- |
| `429` | `RetryAfterDelay`, `activityLimitReached` | Wait, then retry with backoff. |
| `400` | `migrationBadRequest`, `invalidAzureResource` | Provision new temporary containers, restage the package, and submit a new job. |
| `404` | `migrationNotFound`, `jobProgressExpired` | Read persisted telemetry because progress events expired after four days. |
| `404` | `migrationNotFound`, `jobNotFound` | Verify the container and job IDs, then check whether the job was deleted. |

Also inspect job-level events when the progress request succeeds. A migration can return `200 OK` while its event stream contains fatal errors.

## Validate the migration

Validate the destination before you retire or change the source system:

1. Compare the expected object count with `objectsProcessed`.
1. Confirm that `totalErrors` is zero, or account for every reported error.
1. Compare representative file sizes and versions.
1. Verify destination folder paths and list item metadata.
1. Confirm that `TimeCreated`, `TimeLastModified`, `Author`, and `ModifiedBy` match the source values.
1. Open representative files through the SharePoint Embedded application.
1. Persist the final event page and correlation IDs with the migration record.

The migration is complete when the final progress event has `isCompleted` set to `true` and your destination validation passes.

## Pre-migration checklist

Use this checklist before a production migration:

- [ ] Select delegated access for a signed-in migration tool or application access for a background service.
- [ ] Grant `FileStorageContainer.Selected` access to the target container.
- [ ] Confirm the target SharePoint Embedded container ID.
- [ ] Provision the data and metadata containers.
- [ ] Verify that SAS URLs grant read and write access.
- [ ] Verify that SAS URLs remain valid for at least 12 hours.
- [ ] Resolve all list, web, file, and folder identifiers.
- [ ] Preserve source timestamps and identity mappings.
- [ ] Validate manifests against the deployment schema.
- [ ] Upload every content blob referenced by `FileValue`.
- [ ] Implement progress-event pagination and telemetry persistence.
- [ ] Implement retry and backoff handling.
- [ ] Test the queued-job deletion path.

## Next steps

- Review the [Microsoft Graph migration API overview](/graph/api/resources/sharepointmigration-api-overview).
- Use the [Microsoft Graph API reference links](../reference/graph-api-links.md) for other SharePoint Embedded operations.
- [Prepare your app for customer installation](../publish/prepare-customer-installation.md).
