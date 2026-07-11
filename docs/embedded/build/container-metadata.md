---
title: Store and Query Container Metadata
description: Define SharePoint Embedded metadata columns and query drive items by field values.
ms.date: 07/10/2026
ms.reviewer: cindylay
ms.localizationpriority: high
---
# Store and Query Container Metadata
**Applies to:** Developer
<!-- agent:
task_type: how-to
audience: developer
outcome: Create metadata columns and filter SharePoint Embedded files by field data.
next: share-files-manage-permissions.md
-->
Use metadata when your app needs structured fields on files in a SharePoint Embedded container. Metadata is stored as columns on a `fileStorageContainer` and as field values on the container drive's items. Your application is responsible for creating and managing the column schema for each container instance. For the complete list of container resource properties, see [fileStorageContainer resource type](/graph/api/resources/filestoragecontainer).

## Permissions and supported callers
Call the metadata APIs with an app-only or delegated bearer token. Use `FileStorageContainer.Selected` for application and delegated calls.

Container owners can create, update, and delete columns. Container members can read and list columns.

## Choose column types
SharePoint Embedded metadata supports these column type properties : `boolean`, `choice`, `currency`, `dateTime`, `hyperlinkOrPicture`, `number`, `personOrGroup`, and `text`. It also supports column settings such as `indexed`, `isDeletable`, `isSealed`, `name`, `readOnly`, and `type`.

Column names must follow SharePoint rules. Do not use names that contain `!`, start with a digit or punctuation, contain spaces, look like spreadsheet cell references, represent localized true or false values, or use reserved names such as `Author`, `Created`, or `Description`.

## Create a column
Create a column on the container before writing field values on files.

```http
POST https://graph.microsoft.com/beta/storage/fileStorage/containers/{container-id}/columns
Content-Type: application/json
```

```json
{
  "description": "test",
  "displayName": "Title",
  "enforceUniqueValues": false,
  "hidden": false,
  "indexed": false,
  "name": "Title",
  "text": {
    "allowMultipleLines": false,
    "appendChangesToExistingText": false,
    "linesForEditing": 0,
    "maxLength": 255
  }
}
```

The create request doesn't support `type`, and text `maxLength` must be less than or equal to 255.

> [!NOTE]
> As of January 2026, the container column APIs (list, create, update, delete columns) are also generally available on the **v1.0** Microsoft Graph endpoint. You can replace `/beta/` with `/v1.0/` in the column requests below. The beta endpoint remains available.

## Manage columns
Use the column ID returned by the create or list operation.

```http
GET https://graph.microsoft.com/beta/storage/fileStorage/containers/{container-id}/columns
GET https://graph.microsoft.com/beta/storage/fileStorage/containers/{container-id}/columns/{column-id}
PATCH https://graph.microsoft.com/beta/storage/fileStorage/containers/{container-id}/columns/{column-id}
DELETE https://graph.microsoft.com/beta/storage/fileStorage/containers/{container-id}/columns/{column-id}
```

Patch supported properties when the schema changes. You can update any property of a column except the `id` property.

```json
{
  "required": true,
  "hidden": false,
  "description": "This is my new column description"
}
```

## Read and write file metadata
Field values are stored on the drive item's list item fields. Read all fields or select the ones your UI needs.

```http
GET https://graph.microsoft.com/beta/drives/{drive-id}/items/{item-id}/listitem/fields
GET https://graph.microsoft.com/beta/drives/{drive-id}/items/{item-id}/listitem/fields?$select=Name,Color
```

Patch field values to update metadata. Use `null` to clear a field value when the column allows empty values.

```http
PATCH https://graph.microsoft.com/beta/drives/{drive-id}/items/{item-id}/listitem/fields
Content-Type: application/json
```

```json
{
  "Color": "Fuchsia",
  "Quantity": 934
}
```

```json
{
  "Color": null
}
```

## Query files by metadata
Use OData query options on custom columns when you need structured filtering or ordering inside a container drive.

```http
GET https://graph.microsoft.com/beta/drives/{drive-id}/items?$orderby=listitem/fields/TestField asc&$filter=startswith(listitem/fields/TestField, '3')&$expand=listitem($expand=fields)
```

Use `$expand=listitem($expand=fields)` when the result needs field values in the response. Create indexed columns for high-cardinality filters that your app runs frequently.

For full-text search across containers and custom metadata (using the `OWSTEXT` property suffix), see [Search containers and files](search-containers-files.md). Use OData `$filter` for structured queries inside a single container drive; use search for free-text queries across many containers.

## Keep schema consistent
Create required columns during container provisioning. Store the expected schema version in your app data, and run migrations when new columns are introduced. Avoid deleting columns until you know no workflows, queries, exports, or search experiences depend on their values.

## Next steps

- [Share files and manage permissions](share-files-manage-permissions.md)
