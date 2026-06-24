---
title: Search SharePoint Embedded containers and content
description: Use the Microsoft Search API in Microsoft Graph to query SharePoint Embedded containers and content, scoped by container type.
ms.topic: how-to
ms.service: sharepoint-online
ms.author: ShreyasSar26
author: ShreyasSaravanan
ms.date: 06/16/2026
ms.localizationpriority: high
search.appverid: MET150
agent:
  schema_version: 1
  task_type: how-to
  outcome: A search query returns SharePoint Embedded containers (drive) or content (driveItem) scoped to a specific container type, with hidden content included when the container type opted out of Microsoft 365 discoverability.
  estimated_minutes: 20
  difficulty: intermediate
  roles: [app-developer, end-user]
  prerequisites:
    - uri: /sharepoint/dev/embedded/overview
      kind: concept
    - uri: /sharepoint/dev/embedded/development/content-experiences/user-experiences-overview
      kind: concept
    - uri: /sharepoint/dev/embedded/development/auth
      kind: how-to
    - capability: container-type-owner
  api_surface:
    - id: searchQuery
      method: POST
      path: /search/query
      permissions: [Files.Read.All]
    - id: listDriveItems
      method: GET
      path: /drives/{drive-id}/items?$filter={filter}
      permissions: [FileStorageContainer.Selected]
  inputs:
    - name: container-type-id
      type: uuid
      source: app-registration
    - name: container-id
      type: string
      source: prior-step
    - name: query-string
      type: string
      source: user-supplied
    - name: column-property
      type: string
      source: user-supplied
    - name: property-value
      type: string
      source: user-supplied
  outputs:
    - name: hits
      type: array
      verify: POST /search/query returns 200 with a hitsContainers collection scoped to {container-type-id}.
  next_steps:
    - uri: /sharepoint/dev/embedded/development/content-experiences/office-experience
      when: always
    - uri: /sharepoint/dev/embedded/development/tutorials/metadata
      when: always
  related:
    - uri: /sharepoint/dev/embedded/development/content-experiences/user-experiences-overview
    - uri: /sharepoint/dev/embedded/development/auth
    - uri: /sharepoint/dev/embedded/development/limits-calling
  stability: beta
  last_validated: proposed
---

# Search SharePoint Embedded containers and content
<!-- PROPOSED agent-ready revamp · draft · validate against api-surface.json before publishing -->

At the end of this how-to you can query SharePoint Embedded containers and content with the [Microsoft Search](/microsoftsearch/overview-microsoft-search) API in Microsoft Graph, scope each query to a container type (and optionally a file type), include content hidden from Microsoft 365 when your application opted out of discoverability, and enumerate content by column property with `$filter`.

> [!IMPORTANT]
> Searching SharePoint Embedded content is in **Preview** and is subject to change. The Search API for SharePoint Embedded supports **delegated permissions only** and runs in the context of the signed-in user. Review the [exceptional access pattern](/sharepoint/dev/embedded/development/auth#operations-involving-searching-sharepoint-embedded-content) for the current permission requirements before depending on this in production.

> [!NOTE]
> The Search examples on this page run against the Microsoft Graph **beta** endpoint (`/search/query`); responses carry a `beta` `@odata.context`. The enumerate examples in [Step 5](#step-5) use the **v1.0** `driveItem` surface. The `/search/query` operation is not yet listed in [api-surface.json](/sharepoint/dev/embedded/api-surface.json); confirm the path, permissions, and stability against the live `$metadata` before stamping `last_validated`.

## Prerequisites

- [SharePoint Embedded overview](/sharepoint/dev/embedded/overview) — understand containers, container types, and `driveItem` content.
- [Content experiences overview](/sharepoint/dev/embedded/development/content-experiences/user-experiences-overview) — discoverability and the `includeHiddenContent` parameter.
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth) — acquire a **delegated** token; Search does not support application (app-only) permissions.
- Capability: `container-type-owner` — your application has access permission to the container type whose content you query.

## Inputs

| Placeholder | Type | Where it comes from |
|---|---|---|
| `{container-type-id}` | uuid | Your app registration (the container type to scope to) |
| `{container-id}` | string | A prior step (a specific container's drive id) |
| `{query-string}` | string | User-supplied search terms |
| `{column-property}` | string | User-supplied column (field) name to filter on |
| `{property-value}` | string | User-supplied value to match |

> [!NOTE]
> If your application **opted out** of content discoverability in Microsoft 365, every search request must set `sharePointOneDriveOptions.includeHiddenContent` to `true`, or hidden content is excluded. See [Content experiences overview](/sharepoint/dev/embedded/development/content-experiences/user-experiences-overview#content-discovery-in-microsoft-365).

## Steps

### Step 1 — Search containers by container type {#step-1}
Return every container (`drive`) of a container type in the tenant. Scope with `ContainerTypeId` in the `queryString`; the response lists each container instance.

```http
POST https://graph.microsoft.com/beta/search/query
Authorization: Bearer {token}
Content-Type: application/json

{
  "requests": [
    {
      "entityTypes": ["drive"],
      "query": {
        "queryString": "ContainerTypeId:{container-type-id}"
      },
      "sharePointOneDriveOptions": {
        "includeHiddenContent": true
      }
    }
  ]
}
```

**Expected response:** `200 OK` with `value[].hitsContainers[].hits[]`, each `resource` being a `#microsoft.graph.drive`.

**On failure:**
- `403 Forbidden` → token uses application permissions, or the app lacks access to the container type. Use a delegated token and grant the app access to the container type.
- Empty `hits` while content exists → the app opted out of discoverability and `includeHiddenContent` was not set to `true`.

### Step 2 — Search containers by title, description, or custom property {#step-2}
Narrow the container search by combining `ContainerTypeId` with `Title`, `Description`, or a custom property. For a custom property, append `OWSTEXT` to the property name in the `queryString`.

```http
POST https://graph.microsoft.com/beta/search/query
Authorization: Bearer {token}
Content-Type: application/json

{
  "requests": [
    {
      "entityTypes": ["drive"],
      "query": {
        "queryString": "{column-property}OWSTEXT:{property-value} AND ContainerTypeId:{container-type-id}"
      },
      "sharePointOneDriveOptions": {
        "includeHiddenContent": true
      }
    }
  ]
}
```

**Expected response:** `200 OK` with `hits` whose `drive` resources match the title, description, or custom-property criteria.

**On failure:**
- No matches on a custom property → the property name was not suffixed with `OWSTEXT`, or the value does not match.
- `400 Bad Request` → malformed `queryString` (check `AND` syntax and quoting).

### Step 3 — Search for content (driveItem) by title or words {#step-3}
Search content rather than containers by setting `entityTypes` to `driveItem`. Scope to all containers of a type with `ContainerTypeId`, or to one container with `ContainerId`.

```http
POST https://graph.microsoft.com/beta/search/query
Authorization: Bearer {token}
Content-Type: application/json

{
  "requests": [
    {
      "entityTypes": ["driveItem"],
      "query": {
        "queryString": "'{query-string}' AND ContainerTypeId:{container-type-id}"
      },
      "sharePointOneDriveOptions": {
        "includeHiddenContent": true
      }
    }
  ]
}
```

**Expected response:** `200 OK` with `hits` whose `resource` is `#microsoft.graph.driveItem`; the `summary` highlights matched terms.

**On failure:**
- Results include items your app cannot access → search enforces the user's access, not the app's. Always include `ContainerTypeId` (or `ContainerId`) so results are scoped to your application's content. See [Known limitations](#known-limitations).
- `403 Forbidden` → application token used; switch to delegated.

### Step 4 — Request specific fields and sort {#step-4}
Return chosen content properties in the response with `fields`, and order results by a [sortable property](/sharepoint/technical-reference/crawled-and-managed-properties-overview) with `sortProperties`.

```http
POST https://graph.microsoft.com/beta/search/query
Authorization: Bearer {token}
Content-Type: application/json

{
  "requests": [
    {
      "entityTypes": ["driveItem"],
      "query": {
        "queryString": "{query-string}"
      },
      "sharePointOneDriveOptions": {
        "includeHiddenContent": true
      },
      "fields": [
        "id", "name", "parentReference", "file", "folder", "webUrl",
        "createdDateTime", "lastModifiedDateTime", "size",
        "fileSystemInfo", "createdBy", "lastModifiedBy"
      ],
      "sortProperties": [
        { "name": "Created", "isDescending": false }
      ]
    }
  ]
}
```

**Expected response:** `200 OK` with each hit's `resource.listItem.fields` populated for the requested fields, ordered by `Created` ascending.

**On failure:**
- `sortProperties` ignored or rejected → the named property is not sortable. Choose a [sortable managed property](/sharepoint/technical-reference/crawled-and-managed-properties-overview).
- Requested field absent from response → the field name is not a valid managed property for the item.

### Step 5 — Enumerate (filter) content without the Search API {#step-5}
To return content by an exact column-property value without search indexing, enumerate the drive's items with `$filter`. This uses the standard `driveItem` surface on **v1.0**. See the [filter query parameter](/graph/filter-query-parameter?tabs=http) reference.

```http
GET https://graph.microsoft.com/v1.0/drives/{container-id}/items?$filter=listitem/fields/{column-property} eq '{property-value}'&$select=id,name,lastModifiedDateTime,size&$expand=listitem($expand=fields)&$orderby=createdDateTime desc
Authorization: Bearer {token}
Content-Type: application/json
Prefer: HonorNonIndexedQueriesWarningMayFailRandomly
```

**Expected response:** `200 OK` with a `value` array of `driveItem` objects, each expanded with its `listItem.fields`, ordered by `createdDateTime` descending.

**On failure:**
- `400 Bad Request` or random failures on a container with more than 5,000 items using `$orderby` → add the header `Prefer: HonorNonIndexedQueriesWarningMayFailRandomly`.
- `404 Not Found` → wrong `{container-id}` (drive id); resolve the drive first. See [Office experiences, Step 1](/sharepoint/dev/embedded/development/content-experiences/office-experience#step-1).

## Verify {#verify}
Confirm a scoped query returns hits for your container type.

```http
POST https://graph.microsoft.com/beta/search/query
Authorization: Bearer {token}
Content-Type: application/json

{
  "requests": [
    {
      "entityTypes": ["drive"],
      "query": { "queryString": "ContainerTypeId:{container-type-id}" },
      "sharePointOneDriveOptions": { "includeHiddenContent": true }
    }
  ]
}
```

Returns `200 OK` with at least one `hitsContainers[].hits[]` entry whose `resource` is a `drive`, confirming the query is correctly scoped and authorized.

## Known limitations {#known-limitations}
- Search requests run in the context of the signed-in user; results are scoped to items that user can access. Results can include containers or content the user can reach but that your SharePoint Embedded application is not authorized to access. Always include `ContainerTypeId` (containers) or `ContainerId` (content) in the `queryString` to keep results within your application's scope.
- For your application to access containers or content returned in search results, it must have access permission to the corresponding container type.

## Troubleshooting {#troubleshooting}
| Symptom | Likely cause | Fix |
|---|---|---|
| `403 Forbidden` | Application (app-only) token used; Search supports delegated only | Re-acquire a delegated token; see the [exceptional access pattern](/sharepoint/dev/embedded/development/auth#operations-involving-searching-sharepoint-embedded-content) |
| Hidden content missing from results | App opted out of discoverability and `includeHiddenContent` not set | Set `sharePointOneDriveOptions.includeHiddenContent` to `true` |
| Results leak items the app cannot access | Query not scoped to a container type | Add `ContainerTypeId` (or `ContainerId`) to the `queryString` |
| Random failures with `$orderby` on large containers | More than 5,000 items, non-indexed query | Add header `Prefer: HonorNonIndexedQueriesWarningMayFailRandomly` |
| `429 Too Many Requests` | Throttled | Honor `Retry-After`; back off exponentially. See [Limits](/sharepoint/dev/embedded/development/limits-calling) |

## Next steps
- [Open and edit Office documents](/sharepoint/dev/embedded/development/content-experiences/office-experience)
- [Using metadata on containers](/sharepoint/dev/embedded/development/tutorials/metadata)

## Related
- [Content experiences overview](/sharepoint/dev/embedded/development/content-experiences/user-experiences-overview)
- [Authentication and authorization](/sharepoint/dev/embedded/development/auth)
- [Limits and calling patterns](/sharepoint/dev/embedded/development/limits-calling)
- [Microsoft Search API overview](/microsoftsearch/overview-microsoft-search)
- [Crawled and managed properties](/sharepoint/technical-reference/crawled-and-managed-properties-overview)
