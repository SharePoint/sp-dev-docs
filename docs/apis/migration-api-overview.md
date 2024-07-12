---
title: "SharePoint Import Migration API"
description: "This article provides overview information on how to use the SharePoint Migration API."
ms.date: 07/03/2024
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
# SharePoint Migration API Introduction

The SharePoint Migration API imports contents into SharePoint at scale. It processes content and manifest packages as jobs in a queue. The API provides process status and logs, making it easy to monitor the progress of each migration job.

Use Migration API to migrate content from file shares, SharePoint Server, and other cloud-based services.

## What's new

### July 2024

We started enforcing HTTPS connection to SharePoint provided Azure Blob Storage Containers by adding a `spr=https` field in SAS tokens. This enforcement is fully effective on July 21, 2024. Check [Use Azure Blob Storage Containers and Azure Queues with SharePoint Migration API](migration-azure.md) for details.

### April 2024

We added new fields in ``JobEnd`` events to indicate the count and bytes imported for files. Check [Migration events in Azure Queue](migration-events.md#jobend-import) for details.

### January 2024

We reformatted this document to bring clarity and correct errors.

## Migration steps overview

Start a migration job with three steps. Check the guidance in each of the steps in this section.

### Provision the destination containers and the queue

Use `ProvisionMigrationContainers` method to provision the containers. Check [Use Azure Blob Storage Containers and Azure Queues with Migration API](migration-azure.md) for details. You can also use your own containers and queues if needed.

### Prepare the content

Package the contents in the defined format and upload them to Azure Blob Storage Containers as the content package.

Check [Content package](migration-content-package.md) to see the detailed requirements.

### Create the manifest files

Based on the contents, create manifest files in XML format, and upload them to Azure Blob Storage Containers as the manifest package.

Check [Manifest files](migration-manifest.md) to see the detailed requirements.

### Use Migration API to start the migration and get status

`CreateMigrationJob` method creates a migration job, which is queued up for processing. Migration API manages the queue and returns status and logs. Use `CreateMigrationEncrypted` method to migrate encrypted contents. Check [SharePoint Migration API Reference](migration-api-reference.md) for details.

Upon creation of a new migration job, Migration API returns the Job ID. Track the status of the import with `GetMigrationJobStatus` method if needed, with the Azure Queue supplied.

Migration API generates logs in the manifest container. Check the log entries for migration results.

## Best Practice

### Use app-based authentication

Migration generates workload to the SharePoint backend differently from end user-generated traffic. To properly allocate resources with our elastic capability, only use app-based authentication in your migration solution.

Don't use user mode in your migration solution. Running migration in user mode triggers increased throttling, resulting in poor performance.

To learn more on how to register an app ID and how to implement app-based authentication, check [How to register an app ID](/azure/active-directory/develop/active-directory-v2-registration-portal) and [Microsoft Graph Auth guidance](/graph/auth).

### Microsoft Entra ID Permissions

Microsoft Entra ID provides two types of permission: Delegated Permission and Application Permissions. Check[
Permissions and consent in the Azure Active Directory v1.0 endpoint](/azure/active-directory/develop/v1-permissions-and-consent) for details.

For SharePoint and OneDrive migration scenarios, follow the Microsoft Entra ID permission specification.

For migration tools that rely on end-user signed in and presence, use Delegated permission.

For service-based migration tools that run without a signed-in user present, such as applications that run as background services, use Application permission.

### App IDs

You can choose to share a single App ID to cover multiple migration solutions created or create individual App ID for each of the products. Make sure to register App IDs. Sharing App IDs doesn't affect performance or throttling.

### Keep destination SharePoint Site unactivated

To avoid migration issues, deactivate the target site for users until the migration completion. The source could remain active, allowing read and write to keep productivity. Switch users to the new SharePoint destination sites after migration completion.

## Performance

Migration API processes jobs through a queue mechanism with preconfigured workload management settings. Migration API processes the jobs on a best-effort basis, without Service Level Agreement (SLA) or guaranteed performance.

### Optimize migration performance

In order to ensure optimal performance for your migration projects, it's important to plan carefully, especially when dealing with large-scale migrations. For more information on how to estimate timespans and optimize performance, see our [performance guide](/sharepointmigration/sharepoint-online-and-onedrive-migration-speed).

### I'm seeing throttling messages

To ensure good user experiences for all Microsoft 365 customers, SharePoint uses throttling to protect the SharePoint infrastructure. Avoid getting throttled by following [throttling guidance](https://aka.ms/spo429).

## Special articles

### Migrating sharing events of files and folders

Check [Sharing events](/sharepoint/dev/apis/migration-api-shared) article for instructions when migrating shared events metadata with files and folders.

### Web Parts

Use SharePoint Migration Tool (SPMT)'s Web Part serializer DLL to migrate Web Parts into SharePoint. Check [Migrate Web Parts](/sharepoint/dev/apis/migrate-webparts-with-migrationapi) for instructions.
