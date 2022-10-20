---
title: "Migration API What's new"
description: "Learn about the new features and updates to the Migration API."
ms.date: 09/23/2022
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

## New requirement

Beginning January 1, 2023, the SourceType field will be mandatory when calling the Migration API. Starting October 1st, 2022, a warning message will be sent if the field is missing.

**Accepted SourceType values:**

- AmazonS3   
- AzureStorage   
- Box 
- Dropbox   
- Egnyte   
- FileShare   
- GoogleCloudStorage   
- GoogleDrive   
- MicrosoftStream   
- OneDrive  
- SharePointOnline   
- SharePointOnPremServer    
- Other

## Fixes

- **Changes to how Import API handles users**. As a response to issues arising from broken OneDrive scenarios when importing duplicate users, the API now blocks and detect duplicate user entries in UserGroup.xml. For details see: [Entering user identifiers in UserGroup.xml](/sharepoint/dev/apis/migration-api-overview#entering-user-identifiers-in-usergroup.xml). 
