---
title: "Entra ID-Based Access to Blob Storage for Migration"
description: "This article explains how to enable Entra ID-Based authentication to access customer-managed Azure blob containers for migration."
ms.date: 11/27/2025
ms.author: jihongzuo
author: shiongzuo
manager: dapodean
audience: ISV
ms.subservice: migration-tool
ms.topic: article
ms.localizationpriority: high
ms.collection:
  - SPMigration
  - m365-collaboration
---

# Entra ID-Based Access to Blob Storage for Migration

Prior to migration, customers must store manifest files and content in intermediary Azure Blob containers, which are accessed by import jobs.

By default, customers can use SharePoint-provided containers at no cost, with migration jobs accessing them via SAS tokens.

For organizations with stricter security or compliance needs, Entra ID-based access may be preferred. In such cases, customers can provision containers within their own Azure subscriptions and configure Entra ID-based authentication.

This document outlines the steps to enable Entra ID-based authentication for the migration API.

## Configure permissions for Entra ID-based access

To enable Entra ID-based access to customer-managed containers, follow these steps:

- Create roles for accessing content containers
-	Create roles for accessing manifest containers
-	Assign the roles to Office 365 SharePoint Online service principal

### Create roles for accessing content containers

Migration jobs require **read** permission to access containers that store content and the blobs inside.

You can either:
-	Use the built-in [Storage Blob Data Reader role](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-blob-data-reader) for role assignment.
-	Or [create a custom role](https://learn.microsoft.com/en-us/azure/role-based-access-control/custom-roles#steps-to-create-a-custom-role) for more granular permission control. 

When creating a custom role, ensure the following permissions are set on content containers:

- Actions: Microsoft.Storage/storageAccounts/blobServices/containers/read
-	DataActions: Microsoft.Storage/storageAccounts/blobServices/containers/blobs/read

An example below demonstrates a custom role configured with these permissions.

### Create roles for accessing manifest containers

Migration jobs require both **read** and **write** permissions to access containers that store manifest files and the blobs inside.

You can either:

-	Use the built-in [Storage Blob Data Contributor role](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles#storage-blob-data-contributor) for role assignment.
-	Or create a custom role for more granular permission control.

When creating a custom role, ensure the following permissions are included:

-  Actions
    - Microsoft.Storage/storageAccounts/blobServices/containers/read
    - Microsoft.Storage/storageAccounts/blobServices/containers/write
-  DataActions
    - Microsoft.Storage/storageAccounts/blobServices/containers/blobs/read
    - Microsoft.Storage/storageAccounts/blobServices/containers/blobs/write

An example below demonstrates a custom role configured with these permissions.

### Assign roles to Office 365 SharePoint Online

To grant access to both content and manifest containers, assign roles to Office 365 SharePoint Online service principal (Application ID: 00000003-0000-0ff1-ce00-000000000000).

In the Azure portal, navigate to each container (content and manifest), open the Access Control (IAM) page, and [add the appropriate role assignments](https://learn.microsoft.com/en-us/azure/role-based-access-control/role-assignments-portal).

## Use customer-managed Azure blob storage

To use customer-managed Azure Blob storage for migration, follow these best practices:

1. Create a dedicated storage account

Provision a separate Azure storage account specifically for migration. Once migration is complete, we recommend deleting the storage account to reduce data retention and cost.

2. Use encrypted migration jobs

When working with customer-managed storage, it’s strongly recommended to use CreateMigrationJobEncrypted to ensure data security. 

3. Enable public network access

Ensure public network access is enabled on the storage account. OneDrive and SharePoint services connect via the public network during migration.

4. Choose an authentication method

OneDrive and SharePoint support both SAS tokens and Entra ID-based authentication. 

- If using SAS tokens, ensure the token remains valid throughout the migration job.
- For medium-sized jobs (e.g., ~250 files and <300GB), set the token expiration between 12 to 48 hours.

## FAQ

1. Will migration be affected if customer-managed keys are enabled for account encryption?

No. Migration supports customer-managed keys. You can [enable them on the storage account](https://learn.microsoft.com/en-us/azure/storage/common/customer-managed-keys-overview).

2. What is the data retention policy for content stored in a customer-managed storage account?

Data retention is managed by the customer. Each migration job uses its own manifest and content container. Once the job completes, you can delete the associated containers to minimize data retention.

