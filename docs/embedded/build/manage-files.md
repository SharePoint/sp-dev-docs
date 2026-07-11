---
title: Upload, Download, and Manage Files
description: Use Microsoft Graph DriveItem APIs to upload, download, organize, update, delete, and restore SharePoint Embedded files.
ms.date: 06/25/2026
ms.reviewer: cindylay
ms.localizationpriority: high
---
# Upload, Download, and Manage Files
**Applies to:** Developer
<!-- agent:
task_type: how-to
audience: developer
outcome: Implement file and folder operations for content stored in SharePoint Embedded containers.
next: open-office-files.md
-->
Use Microsoft Graph file and DriveItem APIs to manage files inside SharePoint Embedded containers.
Complete [Create and manage containers](create-manage-containers.md) first so you have a container ID.
## Understand file storage
A SharePoint Embedded container is the storage boundary for your application content.
Each container exposes file content through Microsoft Graph file storage and DriveItem APIs.
Use your application data model to decide which business object owns each container, which folders your app creates, which users or services can read and write, and which file IDs your app stores.
For architecture, see [SharePoint Embedded app architecture](../plan/app-tenant-architecture.md).
## Use Microsoft Graph file storage APIs
Start with these Microsoft Graph references:
- [fileStorageContainer resource type](/graph/api/resources/filestoragecontainer)
- [DriveItem resource type](/graph/api/resources/driveitem)
- [Microsoft Graph file storage overview](/graph/api/resources/onedrive)
> [!IMPORTANT]
> Use documented Microsoft Graph DriveItem and file storage APIs. Don't invent SharePoint Embedded-specific file API names.
## Prerequisites
Before managing files, make sure:
- Your app can acquire Microsoft Graph tokens.
- The app has `FileStorageContainer.Selected` consent.
- The app has container type permissions for intended operations.
- The target container exists.
- For delegated calls, the user is a member of the container.
- Your app stores the container ID and DriveItem IDs it needs.
## Map container IDs to drives
The preview source notes that the Graph preview endpoint uses a `driveId`, and for SharePoint Embedded the drive ID is the container ID that starts with `b!`.
In your app:
1. Store the container ID returned when the container is created.
1. Use the container ID when calling DriveItem APIs that require a drive identifier.
1. Store item IDs returned by upload or folder creation operations.
1. Avoid reconstructing IDs from URLs.
## Upload files
Use Microsoft Graph upload patterns for DriveItems.
For small files (up to 250 MB), use the simple upload API documented for DriveItems with a single `PUT` to the item's content.
For larger files (over 250 MB), use an upload session as documented by Microsoft Graph and send the file in byte-range chunks (for example, 320 KB multiples) until the upload completes.
In your upload flow:
1. Validate write access.
1. Choose a destination folder in the container.
1. Create folders first if the path doesn't exist.
1. Upload file bytes with the appropriate Graph method.
1. Store the returned DriveItem ID.
1. Display file name, size, and status.
> [!TIP]
> Keep business metadata in your application database, and keep file content in SharePoint Embedded.
## Download files
Use Microsoft Graph DriveItem download capabilities for file content.
In your download flow:
1. Validate read access.
1. Resolve the container ID and DriveItem ID.
1. Request the file content or download URL using DriveItem APIs.
1. Stream the content to the user or service.
1. Handle expiration for short-lived download URLs.
1. Log according to your audit requirements.
## Create folders
Use DriveItem folder creation APIs to organize content.
Create folders for predictable content structure, workflow stages, related uploads, and stable parent items for Office launch URLs.
When creating folders:
1. Check whether the folder exists.
1. Create only the missing path segment.
1. Store the folder DriveItem ID if needed.
1. Apply naming rules consistently.
## Update file content
Use Microsoft Graph DriveItem update or upload session patterns to replace content.
Before replacing content:
- Confirm write permission.
- Read current metadata if concurrency checks are needed.
- Preserve the DriveItem ID where supported.
- Update your app metadata after Graph succeeds.
Office files stored in SharePoint Embedded have versioning enabled automatically for Word, Excel, and PowerPoint files.
See [Open Office files from your app](open-office-files.md) for Office behavior.
## Rename or move items
Use documented DriveItem update and move operations where supported.
A safe flow should read the current DriveItem, confirm the destination folder, apply the operation, refresh stored path or display name, and keep the DriveItem ID as the durable reference when possible.
## Delete files
Use delete operations when a file should no longer appear in the active content experience.
Before deleting:
- Confirm user intent.
- Confirm write or delete permission.
- Decide whether your app needs soft delete.
- Update app state only after Graph returns success.
## Restore files
Use Microsoft Graph and SharePoint file restore capabilities documented for DriveItems and the service experience.
A restore flow should identify the deleted item or version, confirm permission, perform the restore, refresh the item list, and communicate the restored location.

> [!NOTE]
> [recycleBinItem: restore](/graph/api/filestoragecontainer-restore-recyclebinitem) supports `driveItemId` as an alternate key (October 2025). If you know the ID of the original **driveItem**, you can restore the corresponding **recycleBinItem** directly without first enumerating the recycle bin.
> [!NOTE]
> For exact file operation request and response details, use Microsoft Graph DriveItem documentation.
## Connect to Office and preview experiences
After upload, add richer experiences:
- [Open Office files from your app](open-office-files.md) for Word, Excel, and PowerPoint launch behavior.
- [Preview files in your app](preview-files.md) for browser previews.
- [Search containers and files](../build/search-containers-files.md) for discovery.
## Validate file operations
Create a smoke test:
1. Create a test container.
1. Create a folder.
1. Upload a file.
1. Read returned DriveItem metadata.
1. Download the file.
1. Replace the content.
1. Rename the file.
1. Delete the file.
1. Restore it if supported.
1. Clean up the test container.
## Troubleshoot file operations
| Symptom | Check |
|---|---|
| Upload fails | `WriteContent` permission and user Writer role. |
| Download fails | `ReadContent` permission and user Reader role. |
| Folder create fails | Parent folder ID and write permissions. |
| Preview fails | File type support and preview URL generation. |
| Office launch opens wrong mode | Launch URL `action` parameter or Office URI scheme. |
| Access differs by user | Delegated access intersects app permissions with membership. |
## Next steps
Enable Office launch experiences in [Open Office files from your app](open-office-files.md).
