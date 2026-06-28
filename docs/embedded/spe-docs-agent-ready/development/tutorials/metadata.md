---
title: Add queryable metadata to SharePoint Embedded containers and files
description: Define columns on a SharePoint Embedded container, set field values on files, and query drive items by their custom metadata.
ms.topic: how-to
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
agent:
  schema_version: 1
  task_type: how-to
  outcome: A SharePoint Embedded container carries a custom column, a file in its drive has values set for that column, and drive items can be filtered and ordered by the column value.
  estimated_minutes: 15
  difficulty: intermediate
  roles: [app-developer]
  prerequisites:
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
      kind: how-to
    - uri: /sharepoint/dev/embedded/development/auth
      kind: concept
    - capability: container-type-owner
  api_surface:
    - id: createColumn
      method: POST
      path: /storage/fileStorage/containers/{containerId}/columns
      permissions: [FileStorageContainer.Selected]
    - id: listColumns
      method: GET
      path: /storage/fileStorage/containers/{containerId}/columns
      permissions: [FileStorageContainer.Selected]
    - id: getContainerDrive
      method: GET
      path: /storage/fileStorage/containers/{containerId}/drive
      permissions: [FileStorageContainer.Selected]
  inputs:
    - name: container-id
      type: string
      source: prior-step
    - name: drive-id
      type: string
      source: prior-step
    - name: item-id
      type: string
      source: prior-step
    - name: column-id
      type: uuid
      source: prior-step
    - name: token
      type: string
      source: prior-step
  outputs:
    - name: column-id
      type: uuid
      verify: GET /beta/storage/fileStorage/containers/{container-id}/columns returns the column
    - name: field-value
      type: string
      verify: GET /beta/drives/{drive-id}/items/{item-id}/listitem/fields returns the set value
  next_steps:
    - uri: /sharepoint/dev/embedded/development/content-experiences/search-content
      when: needs-search
    - uri: /sharepoint/dev/embedded/development/tutorials/using-webhooks
      when: always
  related:
    - uri: /sharepoint/dev/embedded/getting-started/containertypes
    - uri: /sharepoint/dev/embedded/development/content-experiences/search-content
  stability: beta
  last_validated: proposed
---

# Add queryable metadata to SharePoint Embedded containers and files
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

By the end of this how-to, your container has a custom column (a `columnDefinition`), a file in the container's drive has a value set for that column, and you can filter and order drive items by the column value. Columns are defined per container instance — your app is responsible for defining and managing columns across all its containers.

> [!IMPORTANT]
> The container `columns` operations and the `listitem/fields` query options shown here are on the Microsoft Graph **beta** endpoint (`https://graph.microsoft.com/beta`). The shape may change before general availability. Track promotion in [api-surface.json](/sharepoint/dev/embedded/api-surface.json).

## Prerequisites

- [Container types](/sharepoint/dev/embedded/getting-started/containertypes) — you have an active container and can read its drive.
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth) — you can acquire a bearer token with `FileStorageContainer.Selected`.
- Capability: `container-type-owner` — column create/update/delete require a container **owner**; members can only read and list columns.

## Inputs

| Placeholder | Type | Where it comes from |
|---|---|---|
| `{token}` | string | A bearer token with `FileStorageContainer.Selected` ([auth](/sharepoint/dev/embedded/development/auth)) |
| `{container-id}` | string | The target container (a prior step) |
| `{drive-id}` | string | The container's drive `id` (from `GET /storage/fileStorage/containers/{container-id}/drive`) |
| `{item-id}` | string | The `driveItem` id of a file in the drive (user-supplied / prior step) |
| `{column-id}` | uuid | The created column `id` (from [Step 1](#step-1)) |

## Steps

### Step 1 — Create a text column on the container {#step-1}

Define a `columnDefinition` so files in the container can carry queryable structured metadata. This example creates a single-line text column named `Title`.

```http
POST https://graph.microsoft.com/beta/storage/fileStorage/containers/{container-id}/columns
Authorization: Bearer {token}
Content-Type: application/json

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

**Expected response:** `201 Created` with the `columnDefinition`. Record its `id` as `{column-id}`.

**On failure:**
- `400 Bad Request` (`invalidRequest`) → the `name` breaks a column naming rule (see the note below), or `text.maxLength` exceeds 255.
- `403 Forbidden` (`accessDenied`) → the caller is a container member, not an owner. Only owners create columns.

> [!NOTE]
> Column `name` must not contain `!`; must not start with a digit, period, minus, or `?`; must not contain spaces or non-alphanumeric characters except `_`; must not look like an `A1`/`R1C1` cell reference; must not be a localized form of "true"/"false"; and must not be a reserved name such as `Author`, `Created`, or `Description`. The `note` column type is not supported.

### Step 2 — Set the column value on a file {#step-2}

Files carry column values as `listItem` fields. Patch the `listitem/fields` of the file's `driveItem` to set values for your columns.

```http
PATCH https://graph.microsoft.com/beta/drives/{drive-id}/items/{item-id}/listitem/fields
Authorization: Bearer {token}
Content-Type: application/json

{
  "Color": "Fuchsia",
  "Quantity": 934
}
```

**Expected response:** `200 OK` with the updated field set, for example `{ "Name": "Widget", "Color": "Fuchsia", "Quantity": 934 }`.

**On failure:**
- `400 Bad Request` → a field name has no matching column on the container. Create the column first via [Step 1](#step-1).
- `404 Not Found` → `{item-id}` or `{drive-id}` is wrong. Re-read the drive ([Step 4](#step-4)) and the item id.

> [!NOTE]
> To clear a value, PATCH the field to `null` (for example `{ "Color": null }`). The response omits the cleared field.

### Step 3 — Query drive items by the custom column {#step-3}

Once values are set, filter and order drive items by their column values using OData query options on `listitem/fields`. This example orders by `TestField` and filters to values starting with `3`.

```http
GET https://graph.microsoft.com/beta/drives/{drive-id}/items?$orderby=listitem/fields/TestField asc&$filter=startswith(listitem/fields/TestField,'3')&$expand=listitem($expand=fields)
Authorization: Bearer {token}
```

**Expected response:** `200 OK` with a `value` array of matching drive items, each carrying its `listitem/fields/TestField` value.

**On failure:**
- `400 Bad Request` (`invalidRequest`) → the column is not `indexed`, or the field referenced in `$filter`/`$orderby` does not exist. Recreate the column with `"indexed": true` and confirm the field name.
- `501 Not Implemented` → the OData option is unsupported on this drive. Reduce to `$expand=listitem($expand=fields)` and filter client-side.

## Verify {#verify}

Confirm the column exists and the value is set.

```http
GET https://graph.microsoft.com/beta/storage/fileStorage/containers/{container-id}/columns
Authorization: Bearer {token}
```

Returns `200 OK` with a `value` array that includes a column whose `id` equals `{column-id}`. Then read the file's fields:

```http
GET https://graph.microsoft.com/beta/drives/{drive-id}/items/{item-id}/listitem/fields?$select=Color,Quantity
Authorization: Bearer {token}
```

Returns `200 OK` with the values set in [Step 2](#step-2).

## Troubleshooting {#troubleshooting}

| Symptom | Likely cause | Fix |
|---|---|---|
| `401 Unauthorized` | Token missing/expired or wrong scope | Re-acquire a token with `FileStorageContainer.Selected` (see **Inputs**) |
| `403 Forbidden` on create/update/delete column | Caller is a container member, not owner | Use an owner identity; members can only read/list columns |
| `400 Bad Request` on column create | Invalid column `name` or `maxLength` > 255 | Apply the naming rules in [Step 1](#step-1); cap `maxLength` at 255 |
| `400 Bad Request` on field PATCH | No matching column for the field | Create the column first ([Step 1](#step-1)) |
| `$filter`/`$orderby` rejected | Column not `indexed` | Recreate the column with `"indexed": true` |
| `429 Too Many Requests` | Throttled | Honor `Retry-After`; back off exponentially. See [Limits](/sharepoint/dev/embedded/development/limits-calling) |

## Next steps

- [Search content](/sharepoint/dev/embedded/development/content-experiences/search-content)
- [Using webhooks](/sharepoint/dev/embedded/development/tutorials/using-webhooks)

## Related

- [Container types](/sharepoint/dev/embedded/getting-started/containertypes)
- [Search content](/sharepoint/dev/embedded/development/content-experiences/search-content)
- [API surface index](/sharepoint/dev/embedded/api-surface.json)
