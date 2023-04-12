---
title: "Migration API What's new"
description: "Learn about the new features and updates to the Migration API."
ms.date: 04/10/2023
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

## New: Speed up small file migration

The migration package includes multiple files, which are each uploaded/downloaded individually. If you have a large number of small-sized files, migration speed drops dramatically. By using the new **ArchivedFiles.XML** file in your prime package you can transfer files in batch resulting in a faster migration. [Learn more about using the ArchivedFiles.XML](/sharepoint/dev/apis/migration-api-overview#archivedfilessxml)

## SourceType field required

Beginning April 1, 2023, the SourceType field is mandatory when calling the Migration API. Starting October 1st, 2022, a warning message will be sent if the field is missing.

To learn more, including examples, see: **[SharePoint Import Migration API - ExportSettings.xml](/sharepoint/dev/apis/migration-api-overview#exportsettingsxml)**

## Fixes

- **Changes to how Import API handles users**. As a response to issues arising from broken OneDrive scenarios when importing duplicate users, the API now blocks and detect duplicate user entries in UserGroup.xml. For details see: [Entering user identifiers in UserGroup.xml](/sharepoint/dev/apis/migration-api-overview#entering-user-identifiers-in-usergroup.xml). 
