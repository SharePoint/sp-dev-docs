---
title: Archive and Restore Containers
description: Archive inactive SharePoint Embedded containers and reactivate them with Microsoft Graph beta APIs.
ms.date: 06/25/2026
ms.reviewer: jaeccles
ms.localizationpriority: high
---
# Archive and Restore Containers
**Applies to:** Developer
<!-- agent:
task_type: how-to
audience: developer
outcome: Enable archival and call Graph beta archive or unarchive operations.
next: fluid-framework.md
-->
Use SharePoint Embedded container archival when a container must be retained but no longer needs to be active accessed or used for collaboration. Archival uses Microsoft 365 Archive, a cold-storage tier that reduces storage cost while keeping the same security, compliance, and search standards. For the Microsoft 365 Archive overview, see [Microsoft 365 Archive](/microsoft-365/archive/archive-overview).

> [!IMPORTANT]
> Microsoft 365 Archive is in Preview for SharePoint Embedded. Validate tenant availability, billing, and API behavior before you expose archive actions to users.

## Enable archival on a container type
Archival must be enabled on the container type. Use SharePoint Embedded admin PowerShell for an existing container type.

```powershell
Set-SPOContainerTypeConfiguration -ContainerTypeId <id> -IsArchiveEnabled $true
```

Enable archival when you create a new container type by passing `-IsArchiveEnabled $true`.

```powershell
New-SPOContainerType -ContainerTypeName <name> -OwningApplicationId <id> -IsArchiveEnabled $true
```

Only show archive commands in your app after the owning application and consuming tenant are configured for the container type.

## Archive a container
Call the Microsoft Graph beta archive action for the target container.

```http
POST https://graph.microsoft.com/beta/storage/fileStorage/containers/{containerId}/archive
```

The caller must have the `Owner` or `PrincipalOwner` role on the container. Global Administrators and SharePoint Embedded Administrators can act on all containers. The app must also have write permission on the container.

An archived container is inaccessible until it's reactivated. Stop uploads, background processors, webhook-dependent workflows, and interactive edits before submitting the archive request.

## Get archived containers
Read one archived container with the normal container get operation.

```http
GET https://graph.microsoft.com/beta/storage/fileStorage/containers/{containerId}
```

List archived containers for a container type by filtering for containers that have archival details.

```http
GET https://graph.microsoft.com/beta/storage/fileStorage/containers?$filter=containerTypeId eq {containerTypeId} and archivalDetails ne null
```

Use this list for lifecycle views, admin reports, or reactivation flows. Make the archived state visible in your UI so users understand why files can't be opened.

## Reactivate a container
Call the Microsoft Graph beta unarchive action to reactivate an archived container.

```http
POST https://graph.microsoft.com/beta/storage/fileStorage/containers/{containerId}/unarchive
```

Reactivation is instantaneous during the first seven days after archival. After seven days, reactivation can take up to 24 hours. Keep the container read and write actions disabled until the service reports that the container is active again.

## Design lifecycle controls
Require explicit user intent before archive and unarchive requests. Record the container ID, actor, timestamp, and Graph request correlation data in your application logs. Don't treat archive as deletion; retention, eDiscovery, audit, and compliance requirements still apply to archived data.

If a lifecycle operation fails, check the caller role, app write permission, container type archival setting, and whether the target container is already in the requested state.

## Next steps

- [Upload, download, and manage files](manage-files.md)
- [Respond to file and container changes with webhooks](respond-to-changes-webhooks.md)
- [Manage containers with PowerShell](../admin/manage-containers-powershell.md)
