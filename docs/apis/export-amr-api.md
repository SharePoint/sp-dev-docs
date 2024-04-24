---
title: "SharePoint Asynchronous Metadata Read (AMR) API Introduction"
description: This document is an overview on how to read metadata from SharePoint, targeted to SharePoint migration tool developers.
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
# SharePoint Asynchronous Metadata Read (AMR) API Introduction

The SharePoint Asynchronous Metadata Read (AMR) API asynchronously exports metadata from SharePoint and OneDrive.

Use AMR API to export metadata from SharePoint, for incremental migration, and post-migration validation.

AMR is designed exclusively for import scenarios. It exhibits poor scalability when handling requests for metadata, permissions, or versions. We can't provide performance assurances for AMR usage in data export scenarios, such as cross-tenant migrations.

## What's new

### January 2024

We reformatted this document to bring clarity and correct errors.

## Export steps overview

Export metadata from SharePoint in three steps:

### Provision the destination containers and the queue

Use `ProvisionMigrationContainers` method to provision the containers. Check [Use Azure Blob Storage Containers and Azure Queues with Migration API](migration-azure.md) for details. You can also use your own containers and queues if needed.

### Use `CreateSPAsyncReadJob` method to start the export

Use `CreateSPAsyncReadJob` method to export metadata from a single URL, or `CreateSPAsyncReadJobWithMultiUrl` from multiple URLs if needed. Check [AMR API Reference](amr-api-reference.md) for details.

Get incremental updates with `ChangeToken` feature.

Both methods return the Job ID, which can be used to track the export status.

Check [AMR API Reference](amr-api-reference.md) for details.

### Checking status

Check Azure Queue supplied for export status. Monitor events as listed in [Events](migration-events.md) for details.

AMR API exports metadata in the manifest container supplied, under folder named by `JobID`. Check [Manifest files](migration-manifest.md) for the format and validation of the metadata.

AMR API splits manifest package larger than 25 MB into multiple manifest files per request.

## Best practice

AMR API is powerful. Ensure good performance to achieve the scale for large migration projects.

### Export security and permissions on top level if possible

Exporting security with `IncludeSecurity` consumes more resources and slows down the export. It's faster to export these metadata at upper-level folder first, then export the children without them.

### Metadata export on a single item

Use Microsoft Graph instead of AMR.

### Folders with less than 10,000 items

Use `CreateSPAsyncReadJobWithMultiUrl` to combine the URLs of multiple folders into a single export job.

### Folders with 10,000 to 1 million items

Use `CreateSPAsyncReadJob`, and set **readOption** `IncludeDirectDescendantsOnly` to `false`. This value is the default setting.

### Nested folders with over 1 million items

Plan carefully when dividing folders into jobs. Object count in export jobs is the major factor of export performance.

This example shows how to export metadata from nested folders with over 1 million items. AMR API has the highest performance when the item count is large.

- Use `CreateSPAsyncReadJob` method at the root URL, for example: `www.contoso.com/my-resource-document`, and set **readOption** `IncludeDirectDescendantsOnly` to `true`.
- Utilize `SMTotalFileCount` attribute to get the file count in folders.
- Continue to use `createSPAsyncReadJob` method at subfolder level, on each of the subfolders, if the folder has more than 10,000 items.
- Use `CreateSPAsyncReadJobWithMultiUrl` method, combining subfolders with less than 10,000 items.

## Performance

AMR API processes jobs through a queue mechanism with preconfigured workload management settings. AMR API processes the jobs on a best-effort basis, without Service Level Agreement (SLA) or guaranteed performance.

### Lab-tested performance baseline

We tested the performance in lab setting. AMR API exported about 400 items per second for every 250-K objects, in the average case. The peak performance reached 700 items per second.

There are multiple factors that affect the real-life performance. These factors include:

- The number of items that are being exported
- The way AMR API is implemented
- Throttling

### Optimize migration performance

In order to ensure optimal performance for your migration projects, it's important to plan carefully, especially when dealing with large-scale migrations. For more information on how to estimate timespans and optimize performance, see our [performance guide](/sharepointmigration/sharepoint-online-and-onedrive-migration-speed).

### I'm seeing throttling messages

To ensure good user experiences for all Microsoft 365 customers, SharePoint uses throttling to protect the SharePoint infrastructure. Avoid getting throttled by following [throttling guidance](https://aka.ms/spo429).

### Tenant-to-Tenant migrations

AMR isn't intended for scenario where contents from a SharePoint tenant are moved to another. This type of migration requires the use of many resource-heavy read options. The long processing time of these read options slows down the overall migration significantly.

Microsoft provides no performance guarantee in this scenario. Use Graph or CSOM as needed.
