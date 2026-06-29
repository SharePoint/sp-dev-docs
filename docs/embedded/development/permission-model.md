---
title: SharePoint Embedded permission model
description: Learn how to grant access to containers, folders, and files in SharePoint Embedded (SPE), and how to break inheritance when an item needs its own permissions.
author: cindylay
ms.author: cindylay
ms.service: sharepoint-embedded
ms.topic: concept-article
ms.date: 06/04/2026
ms.localizationpriority: high
---

# SharePoint Embedded permission model

In SharePoint Embedded (SPE), you grant access to a container, a folder, or a file. By default, permissions flow down: a folder picks up its container's access, and a file picks up its folder's access. The level you choose sets the reach of the grant:

- Grant on the container, and the user receives access to all children folders and files.
- Grant on a folder, and the user receives access on that folder and all child items.
- Grant on a file, and the user receives access on the file alone.

A grant is additive. It adds to whatever access the user already has from grants higher up the tree. When the default flow doesn't fit a particular folder or file, you can break inheritance on that item so its permissions are independent of the folder it sits in.

In this article, you learn how to:

- Grant access to a container with one of four built-in roles.
- Grant access to a folder and its children.
- Grant access to a single file.
- Break inheritance to give a folder or file independent permissions.
- Add permissions when you copy or move an item.

## Granting access to a container

To give a user or group access to all content within a container, assign them one of four built-in container roles:

| Role | What the user can do |
|------|---------------------|
| **Reader** | Read container content. |
| **Writer** | Reader access, plus create and modify content. |
| **Manager** | Writer access, plus manage container membership. |
| **Owner** | Manager access, plus delete and restore the container itself. |

A container role grants that role's access across the container's content by default. As folders and files are added, they pick up the role automatically through inheritance.

For the full role definitions, see [Authentication and authorization with SharePoint Embedded](./auth.md).

## Granting access to a folder

To give a user or group access to a single folder and all its children, call a Microsoft Graph permission API on the folder. The API you use depends on who you're granting to.

### For a user or guest

Call [`driveItem: invite`](/graph/api/driveitem-invite) on the folder.

SPE rules:

- Set `sendInvitation` to `false`. SPE doesn't deliver invitation emails.
- New guest users require delegated permissions. Inviting an existing guest (already in the consuming tenant's directory) works with either delegated or application permissions.

### For a SharePoint group

Call [`driveItem: createPermission`](/graph/api/driveitem-post-permissions) on the folder.

SPE rules:

- Use app-only auth. SPE only supports `createPermission` with app-only.
- SPE only accepts `sharePointGroup` permissions on this call. Other principal types are rejected.

### How inheritance affects new permissions

The new permission applies to the folder. Subfolders and files inside the folder pick up the permission too, as long as they still inherit. A child folder or file with broken inheritance doesn't pick up the new permission.

The new permission adds to the folder's existing permissions. It doesn't replace them, and it doesn't break the folder's inheritance from the container.

To see the permissions on an item, use [List permissions](/graph/api/driveitem-list-permissions). To remove a permission, use [Delete permission](/graph/api/permission-delete). You can only delete a permission on the item where it was granted. You can't delete an inherited permission from a child item.

## Granting access to a single file

To give a user or group access to one file, call the same APIs on the file:

- [`driveItem: invite`](/graph/api/driveitem-invite) for a user or guest.
- [`driveItem: createPermission`](/graph/api/driveitem-post-permissions) for a SharePoint group.

The same SPE rules apply (see [Granting access to a folder](#granting-access-to-a-folder)). The new permission applies to the file alone, on top of whatever access the file already inherits from its parent folder and container.

## Breaking inheritance

> [!WARNING]
> Breaking inheritance is hard to undo. Avoid it unless you specifically need a folder or file to have permissions that don't follow its parent. For most scenarios, a regular grant on the item is enough, because the grant adds to what the user already has.

To break inheritance on a folder or file, call [`driveItem: invite`](/graph/api/driveitem-invite) on the item with `retainInheritedPermissions` set to `false`. The parameter defaults to `true`, which is why regular grants don't break inheritance.

After the break:

- Container members keep access. Container-role assignments (Owner, Manager, Writer, Reader) always apply, even on items with broken inheritance.
- SPE drops the item-level permissions the item was inheriting from its parent folder and keeps only the ones you specify in the call.
- The item stops picking up item-level changes from its parent folder. Later grants on the parent folder don't reach the item.
- Anyone who reached the item only through an item-level grant on a parent folder loses access on the item. Add them back explicitly if they still need it.
- Subfolders and files under the item still inherit, but they now inherit from the item's independent permissions instead of the parent chain.

You can break inheritance on a folder or a file. There's no API to break inheritance at the container itself.

## Copy and move behavior

What happens to permissions during a copy or move depends on where the item ends up.

### Move within the same container

When you move an item within its current container using [`driveItem: move`](/graph/api/driveitem-move):

- Permissions set directly on the item are preserved at the destination.
- If the item still inherits, it picks up the destination parent folder's permissions.
- If the item has broken inheritance, it keeps its independent permissions and doesn't start inheriting from the new parent folder.
- Container-role assignments still apply, because the item is still in the same container.

### Move across containers

When you move an item to a different container using [`driveItem: move`](/graph/api/driveitem-move), only the file or folder transfers. None of the source item's permissions come with it. At the destination, the item starts fresh: no permissions of its own, picking up access only from the destination container and parent folder.

### Copy

Copying an item, in the same container or across containers, produces a new item at the destination. The new item starts with no permissions of its own and picks up access only from its destination container and parent folder.

To give the new or moved item any direct access at the destination, add permissions explicitly with [`driveItem: invite`](/graph/api/driveitem-invite) or [`driveItem: createPermission`](/graph/api/driveitem-post-permissions).


## Related content

- [Share content in SharePoint Embedded](./sharing.md)
- [Authentication and authorization with SharePoint Embedded](./auth.md)
- [`driveItem: invite`](/graph/api/driveitem-invite)
- [`driveItem: createPermission`](/graph/api/driveitem-post-permissions)
- [`driveItem: move`](/graph/api/driveitem-move)
- [List permissions](/graph/api/driveitem-list-permissions)
- [Delete permission](/graph/api/permission-delete)
