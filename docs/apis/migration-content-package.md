---
title: "Preparing the content for Migration API"
description: "This article provides in-depth information on how to use create and use content packages with SharePoint Migration API"
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

# Preparing the content for Migration API

Use this document to prepare the contents to migrate with SharePoint Migration API.

## Files and folders

### File and package size limits

Migration API supports importing files with sizes up to 15 GB (the limit set by SharePoint).

For the best performance, keep the package size under 250 MB or 250 items.

For larger files, create a package for the individual file.

### File versions

Migration API supports importing multiple versions of a file, including major and minor, up to the limit set by SharePoint.

Each version of the file counts against the file size limit and item count limit.

Include each version of the file, even if some of the versions already exist in SharePoint.

### File overwriting

Migration API deletes the original file along with all the versions, then replaces it with all versions of the resubmitted file, when a file is resubmitted.

### No decryption

Migration API doesn't decrypt contents. It treats any encrypted content as opaque files. While SharePoint lists these files, it doesn't index them. This behavior is the same as when a user uploads encrypted files through the SharePoint UI.

### File compression

Migration API doesn't decompress packages by default. Don't compress content and manifest packages together. Make sure you store the content package and the manifest package in different Azure Storage Blob Containers.

Migration API imports **\*.zip** files as compressed archive files if referenced in the import package as the archive itself. To import the individual files within the **\*.zip** file, see [Archive Small Files](#archive-small-files-for-performance).

### Archive small files for performance

Migrate small files in batches for improved performance. Migration API **optionally** uncompresses a compressed **\*.zip** archive to improve the performance, based on manifest in **ArchivedFiles.xml**.

Include `QuickXorHash` value of the archive when using this feature. Compute it with [QuickXorHash Algorithm](/onedrive/developer/code-snippets/quickxorhash).

Migration API processes non-archived files in **Manifest.xml** without manifest in **ArchiveFiles.xml** as usual.

This feature requires all the following prerequisites:

#### Archive file size limit

10 MB maximum.

#### Archive file per package

Two maximum.

#### Archive file encryption

Required.

#### Individual file size

Less than 100 kb after encryption.

#### Don't compress individual files

**Don't compress** the individual files, only compress the archive.

## SharePoint Events and Event Handlers

Migration API allows referencing Event Handlers on List Items. However, Migration API doesn't support defining new Event Handlers at the List level.

Migration API doesn't generate Events when importing items. Therefore, existing Event Handlers don't fire during import.

## Azure Containers

### Azure Blob Storage Security Model

Migration API uses Azure Blob Storage security model. There's no special treatment for Azure Blob Storage Containers used for Migration API that would differentiate from a standard container.

### Snapshot

Each file in the container must have at least one snapshot created. Avoid modifying the file during the import. Any file without a snapshot fails to import with errors. Migration API uses the latest snapshot of the file available at the time of import.

To create a snapshot of a file after uploading to the Azure Blob Storage, use the following code:

```csharp
CloudBlockBlob blob = blobContainerObj.GetBlockBlobReference(file);
blob.UploadFromStream(stm);
blob.CreateSnapshot();
```

### Permissions

To ensure the immutability of source blobs, Migration API accepts an SAS key with only `Read` and `List` access flags set for the content package container.

Likewise, Migration API accepts a SAS key with only `Read`, `List`, and `Write` access for the Manifest container. Migration API requires the `Write` access for writing backlog files at the end of the import.

Migration API checks SAS keys for these required access flags. Migration API rejects attempts to create migration jobs with incorrect access flags on SAS keys.
