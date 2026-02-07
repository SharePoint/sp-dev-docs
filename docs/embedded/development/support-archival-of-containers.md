---
# Required metadata
# For more information, see https://learn.microsoft.com/en-us/help/platform/learn-editor-add-metadata
# For valid values of ms.service, ms.prod, and ms.topic, see https://learn.microsoft.com/en-us/help/platform/metadata-taxonomies

title:       # Add a title for the browser tab
description: # Add a meaningful description for search results
author:      ishwarit # GitHub alias
ms.author:   itambakhe # Microsoft alias
ms.service:  # Add the ms.service or ms.prod value
# ms.prod:   # To use ms.prod, uncomment it and delete ms.service
ms.topic:    # Add the ms.topic value
ms.date:     01/28/2026
---

## Onboard your application to support archival functionality

Archival of containers helps customers in reducing the cost of storing infrequently used data. 

Support archival in your application by enabling the -IsArchiveEnabled flag using the following PowerShell cmdlet. This cmdlet is supported only by the SharePoint Embedded administrator of your organization.

Use the following command on already existing container type:

> Set-SPOContainerTypeConfiguration -ContainerTypeId <id> -IsArchiveEnabled $true

Use the following command while creating a new container type:

> New-SPOContainerType -ContainerTypeName <name> -OwningApplicationId <id> -IsArchiveEnabled $true

APIs for supporting the archive and reactivate actions on the containers:

|Action|API Documentation link|
| -------- | -------- |
|Archive an active container| Cell 2   |
|Reactivate an archived container| Cell 4   |
|Retrieve an archived container using ID||
|Retrieve all archived container collection||

