---
title: Configure authentication and authorization
description: Configure Microsoft Entra ID authentication and SharePoint Embedded authorization for your application.
ms.date: 07/13/2026
ms.reviewer: cindylay
ms.author: mawin
ms.localizationpriority: high
ai-usage: ai-assisted
---

# Configure authentication and authorization

**Applies to:** Developer

<!-- agent:
task_type: how-to
audience: developer
outcome: Configure delegated and app-only access so your app can call SharePoint Embedded through Microsoft Graph.
next: create-manage-containers.md
-->

Configure authentication and authorization before your SharePoint Embedded application calls Microsoft Graph or SharePoint Embedded APIs.

Complete [Register application permissions](register-application-permissions.md) first so the container type is registered in the consuming tenant.

## Understand the access model

SharePoint Embedded uses two permission layers.

Microsoft Graph permissions allow the app to call SharePoint Embedded endpoints.

Container type application permissions allow the app to access containers of a specific container type.

Both layers are required.

> [!IMPORTANT]
> Microsoft Graph consent alone doesn't grant access to containers. The app must also be granted permission to the container type.

## Configure the Microsoft Entra ID app

Start with a Microsoft Entra ID app registration.

Configure it for your application type:

1. Register or identify the owning application.
1. Add redirect URIs for development and production clients.
1. Add credentials for app-only flows when needed.
1. Add Microsoft Graph permissions for SharePoint Embedded access.
1. Add the Microsoft Graph permission required for registration scenarios.
1. Ask an administrator to grant consent where required.

For general steps, see [Register an application with the Microsoft identity platform](/graph/auth-register-app-v2).

## Request Microsoft Graph permissions

SharePoint Embedded operations through Microsoft Graph require `FileStorageContainer.Selected`.

Use delegated `FileStorageContainer.Selected` for access on behalf of a user.

Use application `FileStorageContainer.Selected` for app-only access.

Application `FileStorageContainer.Selected` requires admin consent in the consuming tenant. Delegated `FileStorageContainer.Selected` does not require admin consent.

Use `FileStorageContainer.Manage.All` for administrative capabilities on behalf of an administrator user across all governable container types in the consuming tenant. These capabilities include enumerating, deleting, restoring, purging, and updating containers and managing their permissions.

> [!NOTE]
> The combination of Microsoft Graph permissions and container type application permissions determines what the application can actually do.

## Request the permission for registration

Container type registration uses the Microsoft Graph container type registration API in v1.0.

For registration, request the `FileStorageContainerTypeReg.Selected` Microsoft Graph permission (delegated or app-only).

| Scope name | Type | Use |
|---|---|---|
| `FileStorageContainerTypeReg.Selected` | Delegated or Application | Enables container type registration on a consuming tenant. |

For delegated registration calls, the signed-in user must have the SharePoint Embedded Administrator or Global Administrator role.

Use this permission with [Register application permissions](register-application-permissions.md).

## Prefer delegated access when possible

Use access on behalf of a user whenever possible.

Delegated access improves security, accountability, auditability, and alignment with the user's container membership.

When using delegated access, effective permissions are the intersection of application permissions and user container permissions.

The user must be a member of the container.

Use a confidential client application to keep your app in control of actions taken on behalf of a user. A public client application can expose user tokens to the end user, which can lead to actions taken outside your app's control. For more information, see [Public client and confidential client applications](/entra/identity-platform/msal-client-applications).

## Configure delegated token acquisition

For delegated calls:

1. Sign in the user with Microsoft identity platform.
1. Request delegated `FileStorageContainer.Selected`.
1. Confirm delegated consent is granted according to the consuming tenant's user consent policies.
1. Acquire an access token for Microsoft Graph.
1. Call Microsoft Graph SharePoint Embedded endpoints.
1. Verify the user is a member of the target container.

If the user isn't a container member, the app can't access that container on the user's behalf.

## Configure app-only token acquisition

Use app-only access for service workloads that don't run as a user.

For app-only calls:

1. Configure an application credential, such as a certificate.
1. Request application `FileStorageContainer.Selected`.
1. Have a consuming tenant administrator grant admin consent.
1. Acquire a token using the client credentials flow.
1. Call Microsoft Graph SharePoint Embedded endpoints.
1. Limit container type permissions to the workload's needs.

> [!CAUTION]
> An app-only token can access all containers enabled by its container type application permissions. Use least privilege.

## Call Microsoft Graph APIs

After token acquisition, call SharePoint Embedded operations through Microsoft Graph.
Useful references include:

- [File storage container resource type](/graph/api/resources/filestoragecontainer)
- [Create fileStorageContainer](/graph/api/filestoragecontainer-post)
- [Microsoft Graph authentication and authorization basics](/graph/auth/auth-concepts)

Continue with [Create and manage containers](create-manage-containers.md) for lifecycle operations.

## Handle operations not exposed through Graph

Some operations have exceptional access patterns.

These operations use exceptional access patterns:

- Container type management in the owning tenant through the Microsoft Graph container type API (`FileStorageContainerType.Manage.All` delegated permission).
- Container type registration in the consuming tenant through the Microsoft Graph container type registration API (`FileStorageContainerTypeReg.Selected`).
- SharePoint Embedded agent experiences through their own permission requirements.
- **Search**: Microsoft Search on SharePoint Embedded content requires the delegated `Files.Read.All` permission in addition to `FileStorageContainer.Selected`.
- **Operations that require a user license**: [List containers](/graph/api/filestorage-list-containers) returns `403 Forbidden` for a delegated user who doesn't have a OneDrive (app-only calls aren't affected), and users need a Microsoft 365 license to appear in the Office @mentions people picker.
- **Administrative actions on containers**: `FileStorageContainer.Manage.All` requires the signed-in user to be a SharePoint Embedded Administrator or Global Administrator. For regular app access to containers, use `FileStorageContainer.Selected` with the required container type permissions.

> [!IMPORTANT]
> Don't assume every operation uses the same token or permission resource. Check exceptional access patterns before implementing a flow.

## Grant container type application permissions

The owning application grants container type application permissions through [container type registration](register-application-permissions.md) in a consuming tenant. These permissions determine what an application can do with containers of the container type.

| Permission | Description |
|---|---|
| None | No permissions to any containers or content of this container type. |
| ReadContent | Read the content of containers of this container type. |
| WriteContent | Write content to containers of this container type. Requires ReadContent. |
| Create | Create containers of this container type. |
| Delete | Delete containers of this container type. |
| Read | Read the metadata of containers of this container type. |
| Write | Update the metadata of containers of this container type. |
| EnumeratePermissions | Enumerate the members of a container and their roles. |
| AddPermissions | Add members to a container. |
| UpdatePermissions | Change the roles of existing members. |
| DeletePermissions | Remove other members (but not self) from a container. |
| DeleteOwnPermission | Remove own membership from a container. |
| ManagePermissions | Add, remove (including self), or update members in container roles. |
| ManageContent | Manage container content (WriteContent plus discard checkout in app-only mode). |
| Full | All permissions for containers of this container type. |

## Manage container type owners

Any Microsoft Entra user that isn't an external identity can be a container type owner. Owner management through the [permissions](/graph/api/filestoragecontainertype-post-permissions?view=graph-rest-beta) navigation property on the [fileStorageContainerType](/graph/api/resources/filestoragecontainertype) resource is currently available only in Microsoft Graph beta. Each entry has the `owner` role and identifies the user through `grantedToV2`.

- **Automatic assignment**: The user who [creates a container type](/graph/api/filestorage-post-containertypes) is automatically assigned as an owner.
- **Add owners**: Use [`POST /containerTypes/{id}/permissions`](/graph/api/filestoragecontainertype-post-permissions?view=graph-rest-beta) to add owners. A container type can have at most three owners in total, including the creator who is automatically assigned as the first owner.
- **Remove owners**: Use [`DELETE /containerTypes/{id}/permissions/{id}`](/graph/api/filestoragecontainertype-delete-permissions?view=graph-rest-beta) to remove an owner.
- **Read owners**: Use [`GET /containerTypes/{id}?$expand=permissions`](/graph/api/filestoragecontainertype-get?view=graph-rest-beta) or [`GET /containerTypes/{id}/permissions`](/graph/api/filestoragecontainertype-list-permissions?view=graph-rest-beta) to retrieve owners.

SharePoint Embedded Administrators can manage all applications created in the owning tenant and installed in the consuming tenant. Assign the least privileged role necessary; the SharePoint Embedded Administrator role is recommended over Global Administrator for these tasks.

## Understand container permissions

Container permissions apply only to delegated access. An app that accesses containers without a user gets the full access defined by its container type application permissions instead.

Users get container membership in two ways:

- **Direct membership** — the user is added directly to a container with specific permissions.
- **Transitive membership** — the user belongs to a [Microsoft 365 group](/microsoft-365/admin/create-groups/office-365-groups) that's a member of the container.

A user must be a member of the container with one of these roles:

| Role | Access summary |
|---|---|
| Reader | Read container properties and content. |
| Writer | Reader access plus create, update, and delete content and update applicable properties. |
| Manager | Writer access plus manage container membership. |
| Owner | Manager access plus delete containers. |

When a user creates a container through delegated calls, that user is automatically assigned the Owner role.

To share individual items without granting container access, use the [driveItem invite](/graph/api/driveitem-invite) or [permission create](/graph/api/driveitem-post-permissions) endpoints. Sharing an item doesn't grant access to the container or to any other item in it.

## Validate authentication

Validate the flow before feature code:

1. Confirm admin consent completed successfully.
1. Acquire a delegated token.
1. Acquire an app-only token.
1. Call a simple Graph endpoint that matches the token type.
1. Confirm registration includes the calling app.
1. Confirm user membership for delegated calls.
1. Confirm app-only access is limited by container type permissions.

## Troubleshoot authorization failures

| Symptom | Check |
|---|---|
| Graph call returns unauthorized | Token is missing, expired, or for the wrong resource. |
| Graph call returns forbidden | Consent, Graph permission, or container type permission is missing. |
| Delegated call fails for one user | User isn't a container member or lacks the needed role. |
| App-only call has too much access | Container type permission is broader than necessary. |
| Registration call fails | Use `FileStorageContainerTypeReg.Selected`; for delegated calls the user needs the SharePoint Embedded Administrator or Global Administrator role. |
| Search call fails | Review search-specific exceptional access patterns. |

## Next steps

Use your configured flow to [Create and manage containers](create-manage-containers.md).
