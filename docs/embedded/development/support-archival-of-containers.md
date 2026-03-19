---
title: Support archival of SharePoint Embedded containers
description: This article explains how archival functionality can be supported for a container type.
ms.date: 03/20/2026
ms.localizationpriority: high
---

## Onboard your application to support archival functionality

Archival of containers helps customers in reducing the cost of storing infrequently used data. Support archival in your application by enabling the -IsArchiveEnabled flag using the following PowerShell cmdlet. This cmdlet is supported only by the SharePoint Embedded administrator of your organization.

Use the following command on already existing container type:

```powershell
Set-SPOContainerTypeConfiguration -ContainerTypeId <id> -IsArchiveEnabled $true
```

Use the following command while creating a new container type:

```powershell
New-SPOContainerType -ContainerTypeName <name> -OwningApplicationId <id> -IsArchiveEnabled $true
```

APIs for supporting the archive and reactivate actions on the containers:

|Action|API Documentation link|Example|
|--------|--------|-------|
|Archive an active container|[Archive](https://learn.microsoft.com/en-us/graph/api/filestoragecontainer-archive?view=graph-rest-beta)|POST https://graph.microsoft.com/beta/storage/fileStorage/containers/{ContainerId}/archive|
|Reactivate an archived container|[Unarchive](https://learn.microsoft.com/en-us/graph/api/filestoragecontainer-unarchive?view=graph-rest-beta)|POST https://graph.microsoft.com/beta/storage/fileStorage/containers/{containerId}/unarchive|
|Retrieve an archived container using ID|[Get](https://learn.microsoft.com/en-us/graph/api/filestoragecontainer-get?view=graph-rest-beta&tabs=http)|GET https://graph.microsoft.com/beta/storage/fileStorage/containers/{containerId}|
|Retrieve all archived container collection|[Get](https://learn.microsoft.com/en-us/graph/api/filestoragecontainer-get?view=graph-rest-beta&tabs=http)|GET https://graph.microsoft.com/beta/storage/fileStorage/containers?$filter=containerTypeId eq {containerTypeId} and archivalDetails ne null|
