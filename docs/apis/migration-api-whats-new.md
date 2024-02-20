---
title: "Migration API What's new"
description: "Learn about the new features and updates to the Migration API."
ms.date: 09/26/2023
ms.reviewer: jhendr
author: JoanneHendrickson
ms.author: jhendr
manager: serdars
audience: ITPro
ms.topic: article
ms.subservice: migration-tool
localization_priority: Priority
ms.custom: admindeeplinkSPO
---
# What's new in the Migration API

Check here to see what features or updates have been added to the Migration API. Here's a summary of what's included.

## Encoding invalid XML characters

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


## Updated reason code and descriptions

We have updated Migration API to provide detailed reasons in case a job is postponed. We encourage ISVs take appropriate actions, based on the reasons.

|Possible reasons |Code|Description|
|:-----|:-----|:-----|
|JobInQueue:Resource|1，2，3，4, 5, 6, 12|The job is now in a queue for resource allocation. It is expected to start in [P75] time.|
|JobInQueue:DBMaint|7|The destination tenant's database is currently in maintenance. The job is in a queue to be executed when the maintenance is completed. We expect the maintenance to be completed at [P75] time.|
|JobFailure:TenantBlock|10|Migration is blocked at the destination tenant. The job is cancelled. Please check tenant status before resubmitting.|
|JobCancelled:Unknown|11|The migration job is canceled for unknown reason.|


## New: Speed up small file migration

The migration package includes multiple files, which are each uploaded/downloaded individually. If you have a large number of small-sized files, migration speed drops dramatically. By using the new **ArchivedFiles.XML** file in your prime package you can transfer files in batch resulting in a faster migration. [Learn more about using the ArchivedFiles.XML](/sharepoint/dev/apis/migration-api-overview#archivedfilessxml)

## SourceType field required

Beginning April 1, 2023, the SourceType field is mandatory when calling the Migration API. Starting October 1st, 2022, a warning message will be sent if the field is missing.

To learn more, including examples, see: **[SharePoint Import Migration API - ExportSettings.xml](/sharepoint/dev/apis/migration-api-overview#exportsettingsxml)**

## Fixes

- **Changes to how Import API handles users**. As a response to issues arising from broken OneDrive scenarios when importing duplicate users, the API now blocks and detect duplicate user entries in UserGroup.xml. For details see: [Entering user identifiers in UserGroup.xml](/sharepoint/dev/apis/migration-api-overview#entering-user-identifiers-in-usergroup.xml). 
