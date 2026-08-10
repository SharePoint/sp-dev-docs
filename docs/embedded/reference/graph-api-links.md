---
title: Microsoft Graph API reference links
description: Curated Microsoft Graph v1.0 reference links for SharePoint Embedded containers, container types, and files.
ms.date: 07/08/2026
ms.reviewer: pemtaira
ms.author: mawin
ms.localizationpriority: high
ai-usage: ai-assisted
---

# Microsoft Graph API reference links

**Applies to:** Developer

<!-- agent:
task_type: reference
audience: developer
outcome: Locate Microsoft Graph reference pages for SharePoint Embedded container and file operations.
next: ../build/create-manage-containers.md
-->

SharePoint Embedded applications store and manage containers and container content through Microsoft Graph. This page links the generally available (v1.0) Graph APIs for SharePoint Embedded. For task guidance, see [create and manage containers](../build/create-manage-containers.md) and [manage files](../build/manage-files.md).

> [!NOTE]
> The `fileStorageContainerType`, `fileStorageContainerTypeRegistration`, and application permission grant APIs are generally available on the **v1.0** Microsoft Graph endpoint.

## Container APIs

| Operation | Microsoft Graph reference |
| --- | --- |
| `fileStorageContainer` resource | [fileStorageContainer resource type](/graph/api/resources/filestoragecontainer) |
| Create container | [Create fileStorageContainer](/graph/api/filestoragecontainer-post) |
| Get container | [Get fileStorageContainer](/graph/api/filestoragecontainer-get) |
| List containers | [List containers](/graph/api/filestorage-list-containers) |
| Update container | [Update fileStorageContainer](/graph/api/filestoragecontainer-update) |
| Delete container | [Delete fileStorageContainer](/graph/api/filestorage-delete-containers) |
| Activate container | [fileStorageContainer: activate](/graph/api/filestoragecontainer-activate) |
| Lock container | [fileStorageContainer: lock](/graph/api/filestoragecontainer-lock) |
| Unlock container | [fileStorageContainer: unlock](/graph/api/filestoragecontainer-unlock) |
| Get container drive | [Get drive for fileStorageContainer](/graph/api/filestoragecontainer-get-drive) |
| List deleted containers | [List deleted containers](/graph/api/filestorage-list-deletedcontainers) |
| Restore deleted container | [fileStorageContainer: restore](/graph/api/filestoragecontainer-restore) |
| Permanently delete container | [fileStorageContainer: permanentDelete](/graph/api/filestoragecontainer-permanentdelete) |
| Remove a deleted container | [Remove deleted fileStorageContainer](/graph/api/filestorage-delete-deletedcontainers) |

## Container permission APIs

| Operation | Microsoft Graph reference |
| --- | --- |
| List permissions | [List fileStorageContainer permissions](/graph/api/filestoragecontainer-list-permissions) |
| Get permission | [Get fileStorageContainer permission](/graph/api/filestoragecontainer-get-permissions) |
| Create permission | [Create fileStorageContainer permission](/graph/api/filestoragecontainer-post-permissions) |
| Update permission | [Update fileStorageContainer permission](/graph/api/filestoragecontainer-update-permissions) |
| Upsert permissions | [Upsert permissions](/graph/api/filestoragecontainer-patch-permissions) |
| Delete permission | [Delete permissions](/graph/api/filestoragecontainer-delete-permissions) |

## Container metadata APIs

Container columns define the metadata schema. Custom properties store key-value metadata on a container.

| Operation | Microsoft Graph reference |
| --- | --- |
| List columns | [List columns](/graph/api/filestoragecontainer-list-columns) |
| Get column | [Get column](/graph/api/filestoragecontainer-get-column) |
| Create column | [Create column](/graph/api/filestoragecontainer-post-columns) |
| Update column | [Update column](/graph/api/filestoragecontainer-update-column) |
| Delete column | [Delete column](/graph/api/filestoragecontainer-delete-column) |
| List custom properties | [List custom properties](/graph/api/filestoragecontainer-list-customproperty) |
| Add custom properties | [Add custom properties](/graph/api/filestoragecontainer-post-customproperty) |
| Update custom properties | [Update custom properties](/graph/api/filestoragecontainer-update-customproperty) |
| Delete custom properties | [Delete custom properties](/graph/api/filestoragecontainer-delete-customproperty) |

## Container recycle bin APIs

| Operation | Microsoft Graph reference |
| --- | --- |
| List recycle bin items | [List recycleBinItem](/graph/api/filestoragecontainer-list-recyclebinitem) |
| Restore recycle bin item | [Restore recycleBinItem](/graph/api/filestoragecontainer-restore-recyclebinitem) |
| Delete recycle bin item | [Delete recycleBinItem](/graph/api/filestoragecontainer-delete-recyclebinitem) |
| Update recycle bin settings | [Update recycleBinSettings](/graph/api/filestoragecontainer-update-recyclebinsettings) |

## SharePoint group APIs

| Operation | Microsoft Graph reference |
| --- | --- |
| List SharePoint groups | [List sharePointGroups](/graph/api/filestoragecontainer-list-sharepointgroups) |
| Create SharePoint group | [Create sharePointGroup](/graph/api/filestoragecontainer-post-sharepointgroups) |
| Delete SharePoint group | [Delete sharePointGroup](/graph/api/filestoragecontainer-delete-sharepointgroups) |

## Container migration APIs

| Operation | Microsoft Graph reference |
| --- | --- |
| Provision migration containers | [fileStorageContainer: provisionMigrationContainers](/graph/api/filestoragecontainer-provisionmigrationcontainers) |
| Create migration job | [Create sharePointMigrationJob](/graph/api/filestoragecontainer-post-migrationjobs) |

## Container type APIs

| Operation | Microsoft Graph reference |
| --- | --- |
| `fileStorageContainerType` resource | [fileStorageContainerType resource type](/graph/api/resources/filestoragecontainertype) |
| List container types | [List containerTypes](/graph/api/filestorage-list-containertypes) |
| Create container type | [Create fileStorageContainerType](/graph/api/filestorage-post-containertypes) |
| Get container type | [Get fileStorageContainerType](/graph/api/filestoragecontainertype-get) |
| Update container type | [Update fileStorageContainerType](/graph/api/filestoragecontainertype-update) |
| Delete container type | [Delete fileStorageContainerType](/graph/api/filestorage-delete-containertypes) |

## Container type registration APIs

Register a container type in a consuming tenant, then grant application permissions on that registration.

| Operation | Microsoft Graph reference |
| --- | --- |
| `fileStorageContainerTypeRegistration` resource | [fileStorageContainerTypeRegistration resource type](/graph/api/resources/filestoragecontainertyperegistration) |
| List registrations | [List containerTypeRegistrations](/graph/api/filestorage-list-containertyperegistrations) |
| Create registration | [Create fileStorageContainerTypeRegistration](/graph/api/filestorage-post-containertyperegistrations) |
| Get registration | [Get fileStorageContainerTypeRegistration](/graph/api/filestoragecontainertyperegistration-get) |
| Update registration | [Update fileStorageContainerTypeRegistration](/graph/api/filestoragecontainertyperegistration-update) |
| Delete registration | [Delete fileStorageContainerTypeRegistration](/graph/api/filestorage-delete-containertyperegistrations) |
| List application permission grants | [List applicationPermissionGrants](/graph/api/filestoragecontainertyperegistration-list-applicationpermissiongrants) |
| Create application permission grant | [Create fileStorageContainerTypeAppPermissionGrant](/graph/api/filestoragecontainertyperegistration-post-applicationpermissiongrants) |
| Get application permission grant | [Get fileStorageContainerTypeAppPermissionGrant](/graph/api/filestoragecontainertypeapppermissiongrant-get) |
| Update application permission grant | [Update fileStorageContainerTypeAppPermissionGrant](/graph/api/filestoragecontainertypeapppermissiongrant-update) |
| Delete application permission grant | [Delete fileStorageContainerTypeAppPermissionGrant](/graph/api/filestoragecontainertyperegistration-delete-applicationpermissiongrants) |

## Drive and driveItem APIs

All file system objects in a `fileStorageContainer` are returned as `driveItem` resources.

| Operation | Microsoft Graph reference |
| --- | --- |
| `drive` resource | [drive resource type](/graph/api/resources/drive) |
| `driveItem` resource | [driveItem resource type](/graph/api/resources/driveitem) |
| Get item | [Get driveItem](/graph/api/driveitem-get) |
| List children | [List children of a driveItem](/graph/api/driveitem-list-children) |
| Create folder | [Create driveItem](/graph/api/driveitem-post-children) |
| Update item | [Update driveItem](/graph/api/driveitem-update) |
| Delete item | [Delete driveItem](/graph/api/driveitem-delete) |
| Move item | [Move a driveItem](/graph/api/driveitem-move) |
| Copy item | [Copy a driveItem](/graph/api/driveitem-copy) |
| Upload small file | [Upload or replace driveItem contents](/graph/api/driveitem-put-content) |
| Create upload session | [Create uploadSession](/graph/api/driveitem-createuploadsession) |
| Download file | [Download driveItem content](/graph/api/driveitem-get-content) |
| Share item | [Invite people to a driveItem](/graph/api/driveitem-invite) |
| Track changes | [Enumerate changes (delta)](/graph/api/driveitem-delta) |
| Search with Microsoft Search | [Query the Microsoft Search API](/graph/api/search-query) |
| Create webhook subscription | [Create subscription](/graph/api/subscription-post-subscriptions) |

## Resource types

| Resource | Microsoft Graph reference |
| --- | --- |
| `fileStorage` | [fileStorage resource type](/graph/api/resources/filestorage) |
| `fileStorageContainer` | [fileStorageContainer resource type](/graph/api/resources/filestoragecontainer) |
| `fileStorageContainerSettings` | [fileStorageContainerSettings resource type](/graph/api/resources/filestoragecontainersettings) |
| `fileStorageContainerViewpoint` | [fileStorageContainerViewpoint resource type](/graph/api/resources/filestoragecontainerviewpoint) |
| `fileStorageContainerCustomPropertyDictionary` | [fileStorageContainerCustomPropertyDictionary resource type](/graph/api/resources/filestoragecontainercustompropertydictionary) |
| `fileStorageContainerCustomPropertyValue` | [fileStorageContainerCustomPropertyValue resource type](/graph/api/resources/filestoragecontainercustompropertyvalue) |
| `fileStorageContainerType` | [fileStorageContainerType resource type](/graph/api/resources/filestoragecontainertype) |
| `fileStorageContainerTypeSettings` | [fileStorageContainerTypeSettings resource type](/graph/api/resources/filestoragecontainertypesettings) |
| `fileStorageContainerTypeRegistration` | [fileStorageContainerTypeRegistration resource type](/graph/api/resources/filestoragecontainertyperegistration) |
| `fileStorageContainerTypeRegistrationSettings` | [fileStorageContainerTypeRegistrationSettings resource type](/graph/api/resources/filestoragecontainertyperegistrationsettings) |
| `fileStorageContainerTypeAppPermissionGrant` | [fileStorageContainerTypeAppPermissionGrant resource type](/graph/api/resources/filestoragecontainertypeapppermissiongrant) |

## Authentication

SharePoint Embedded uses Microsoft Graph permissions plus container type application permissions. Start with [SharePoint Embedded authentication and authorization](../build/configure-authentication-authorization.md) before you implement the API calls.

## Related resources

- [Create and manage containers](../build/create-manage-containers.md)
- [Upload, download, and manage files](../build/manage-files.md)