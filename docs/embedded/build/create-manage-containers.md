---
title: Create and manage containers
description: Create, list, update, recycle, restore, and delete SharePoint Embedded containers in your app.
ms.date: 07/13/2026
ms.reviewer: jaeccles
ms.author: mawin
ms.localizationpriority: high
ai-usage: ai-assisted
---

# Create and manage containers

**Applies to:** Developer

<!-- agent:
task_type: how-to
audience: developer
outcome: Implement the basic SharePoint Embedded container lifecycle for application storage.
next: manage-files.md
-->

Create and manage containers after your container type is created, registered, and authorized. Containers are the basic storage unit in SharePoint Embedded.

Complete [Configure authentication and authorization](configure-authentication-authorization.md) before you call container APIs.

## Understand containers

All SharePoint Embedded files and documents are stored in containers.

A container:

- Belongs to a consuming Microsoft 365 tenant.
- Has an immutable container type ID.
- Stores content for your application.
- Defines a boundary for membership and permissions.
- Is accessed through Microsoft Graph.

For the architecture overview, see [SharePoint Embedded app architecture](../plan/app-tenant-architecture.md).

## Know the lifecycle

A typical container lifecycle includes:

1. Create a container.
1. Add or confirm members.
1. Upload and manage files.
1. Read or update container metadata.
1. Recycle a container when it's no longer active.
1. Restore a recycled container when needed.
1. Permanently delete containers during cleanup.

Continue to [Upload, download, and manage files](manage-files.md) for content operations.

## Prerequisites

Before creating containers, make sure:

- The container type exists.
- The container type is registered in the consuming tenant.
- The app has Microsoft Graph `FileStorageContainer.Selected` consent.
- The app has container type permissions for the operation.
- For delegated calls, the signed-in user can receive the needed container role.
- For trial container types, you're within trial limits.

> [!IMPORTANT]
> Trial container types can create up to five containers, including active containers and containers in the recycle bin.

## Choose delegated or app-only creation

Use delegated access when a user initiates creation, the user should be accountable, or the creating user should become container Owner.

Use app-only access when a service provisions containers, no user is present, and the app has permission to create containers.

> [!NOTE]
> A user creating a new container through delegated calls is automatically assigned the Owner role.

## Create a container

Use Microsoft Graph to create a file storage container for your registered container type.

For the canonical API shape, see [Create fileStorageContainer](/graph/api/filestoragecontainer-post).

Implementation steps:

1. Acquire a valid Microsoft Graph token.
1. Include the target container type information required by the API.
1. Send the create request.
1. Store the returned container ID.
1. Store display metadata your app needs.
1. Assign or confirm membership for delegated scenarios.

> [!TIP]
> Store the container ID in your application database as the durable link between your business object and the SharePoint Embedded container.

## Create a container in Visual Studio Code

For trial development, the Visual Studio Code extension can create containers.

1. Open the SharePoint Embedded view.
1. Expand the registered trial container type.
1. Right-click **Containers**.
1. Select **Create container**.
1. Enter a name.
1. Confirm the container appears under the container type.

See [Quickstart: Build your first app with VS Code](quickstart-vscode.md) for the extension flow.

## List containers

List containers to show available containers, validate provisioning, or run maintenance.

For the canonical API shape, see [List containers](/graph/api/filestorage-list-containers?tabs=http).

When listing containers:

- Use app-only access for service inventory scenarios.
- Use delegated access only when the user context is appropriate.
- Handle paging.
- Map results to your application data.

> [!NOTE]
> Delegated list containers currently returns `403 Forbidden` if the user doesn't have a OneDrive. This dependency doesn't apply to app-only list calls.

## Get a container

Get a container when you need the latest metadata before acting.

Use this operation to confirm the container exists, read display properties, verify the container type, check state before file operations, and confirm restoration.

Link implementations to [fileStorageContainer resource type](/graph/api/resources/filestoragecontainer).

## Update container metadata

Update metadata when supported properties change.

Before updating:

1. Confirm the app has container type `Write` permission.
1. Confirm the delegated user has an appropriate role.
1. Read the current container state.
1. Apply only intended changes.
1. Validate the response.

## Delete or recycle a container

Recycle or delete a container when it's no longer active.

Before deletion:

- Confirm the caller has permission.
- Confirm your app has archived business references.
- Decide whether the container should be recycled first.
- Tell users how they can restore a recycled container.

The Visual Studio Code extension includes recycle and recovery capabilities for trial development.

## Restore a recycled container

A restore flow should:

1. Identify the recycled container.
1. Confirm the caller has permission.
1. Restore the container.
1. Refresh application state.
1. Confirm files and metadata are available.
1. Notify the user.

> [!IMPORTANT]
> For trial container types, containers in the recycle bin still count toward the five-container limit.

## Permanently delete containers

Permanently delete only when you're sure the container is no longer needed.

You must remove all containers of a container type, including deleted containers, before deleting the container type itself.

Use permanent deletion for trial cleanup, test data removal, retiring a container type, or meeting lifecycle requirements.

## Validate lifecycle operations

Create a smoke test:

1. Create a test container.
1. Retrieve it by ID.
1. List containers and confirm it appears.
1. Update a supported metadata value.
1. Upload a small file.
1. Recycle or delete the container.
1. Restore it if supported.
1. Permanently delete it during cleanup.

## Troubleshoot lifecycle issues

| Symptom | Check |
|---|---|
| Create fails | Registration and `Create` permission. |
| Delegated create fails | User consent and role assignment behavior. |
| List fails for delegated user | OneDrive dependency noted in the auth article. |
| Delete fails | `Delete` permission and user Owner role. |
| Trial create fails | Active plus recycled containers may have reached the limit. |
| Container type delete fails | All active and deleted containers must be removed first. |

## Next steps

Add file operations in [Upload, download, and manage files](manage-files.md).
