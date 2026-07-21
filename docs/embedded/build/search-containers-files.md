---
title: Search containers and files
description: Search SharePoint Embedded containers and files with Microsoft Search in Microsoft Graph.
ms.date: 07/13/2026
ms.reviewer: cindylay
ms.author: mawin
ms.localizationpriority: high
ai-usage: ai-assisted
---

# Search containers and files

**Applies to:** Developer

<!-- agent:
task_type: how-to
audience: developer
outcome: Scope Microsoft Search requests to SharePoint Embedded containers and files.
next: container-metadata.md
-->

Use Microsoft Search in Microsoft Graph when your app needs keyword search across SharePoint Embedded containers or content. The search API ranks matching results and returns `drive` resources for containers or `driveItem` resources for files and folders.

> [!NOTE]
> SharePoint Embedded search is in preview and is available only on the Microsoft Graph **`/beta`** endpoint — there's no `v1.0` search API for containers. Search supports delegated permissions only and follows the [exceptional access pattern](configure-authentication-authorization.md#handle-operations-not-exposed-through-graph).

## Choose the search scope

Scope every request to the container type or container that belongs to your app. Search runs in the context of the signed-in user, so the service trims results to content the user can access. Your app must also have access to the corresponding container type before it can open returned containers or files.

Use these managed properties in the `queryString`:

| Scope | Entity type | Query pattern |
| --- | --- | --- |
| All containers of a type | `drive` | `ContainerTypeId:{containerTypeId}` |
| One container by title | `drive` | `Title:'contoso' AND ContainerTypeId:{containerTypeId}` |
| One container by description | `drive` | `Description:'Everything' AND ContainerTypeId:{containerTypeId}` |
| Files in one container | `driveItem` | `Title:'contoso' AND ContainerId:{containerId}` |
| Files across a container type | `driveItem` | `'contoso' AND ContainerTypeId:{containerTypeId}` |

If your application opted out of Microsoft 365 content discoverability, set `sharePointOneDriveOptions.includeHiddenContent` to `true` in the request body.

## Search containers

Send a `POST` request to Microsoft Graph search and request `drive` resources.

```http
POST https://graph.microsoft.com/beta/search/query
Content-Type: application/json
```

```json
{
  "requests": [
    {
      "entityTypes": ["drive"],
      "query": {
        "queryString": "ContainerTypeId:498c6855-8f0e-0de7-142e-4e9ff86af9ae"
      },
      "sharePointOneDriveOptions": {
        "includeHiddenContent": true
      },
      "from": 0,
      "size": 25
    }
  ]
}
```

The response includes `hitsContainers`. Each hit contains a `hitId`, `rank`, `summary`, and a `resource` whose `@odata.type` is `#microsoft.graph.drive`.

## Search files and folders

Request `driveItem` resources when the user searches file names or file content. Scope to a specific container with `ContainerId` when the user is already inside a workspace.

```json
{
  "requests": [
    {
      "entityTypes": ["driveItem"],
      "query": {
        "queryString": "Title:'contoso' AND ContainerId:b!UBoDBcfpTEeInnz0Rlmlsp6EC-DsPN5Kj3uW0fD1mPp9ptYmB71GRpxbhbDlGdb0"
      },
      "sharePointOneDriveOptions": {
        "includeHiddenContent": true
      },
      "from": 0,
      "size": 25
    }
  ]
}
```

A `driveItem` result can include file metadata such as `id`, `name`, `size`, `createdDateTime`, `lastModifiedDateTime`, `parentReference`, `createdBy`, `lastModifiedBy`, and `webUrl`.

## Return selected fields and sort results

Use the `fields` collection to request specific managed properties in the response. Use `sortProperties` only with sortable properties.

```json
{
  "requests": [
    {
      "entityTypes": ["driveItem"],
      "query": { "queryString": "Everything about contoso" },
      "sharePointOneDriveOptions": { "includeHiddenContent": true },
      "fields": ["SampleOWSText", "id", "name", "parentReference", "webUrl", "createdDateTime", "lastModifiedDateTime", "size"],
      "sortProperties": [
        { "name": "Created", "isDescending": false }
      ]
    }
  ]
}
```

Use `from` and `size` to page through ranked results. Read `hitsContainers[].total` and `hitsContainers[].moreResultsAvailable` to decide whether to request another page.

## Search custom properties

For container custom properties, append `OWSTEXT` to the custom property name in the query string.

```text
customPropertyNameOWSTEXT:customPropertyValue AND ContainerTypeId:498c6855-8f0e-0de7-142e-4e9ff86af9ae
```

Use full-text search (the `/beta/search/query` endpoint above) when users type free-text terms and you want relevance ranking across containers. Use direct enumeration instead of search when your app must filter on known metadata values without relevance ranking. For example, query drive items with `$filter`, `$expand`, and `$orderby`:

```http
GET https://graph.microsoft.com/v1.0/drives/{container-id}/items?$filter=startswith(listitem/fields/{column}, '{value}')&$expand=listitem($expand=fields)
```

When a container has more than 5,000 items and you enumerate with `$orderby`, include the `Prefer: HonorNonIndexedQueriesWarningMayFailRandomly` header required for large ordered enumerations.

## Known limitations

Search enforces the signed-in user's access, not your app's authorization. Results include every container and item the user can access that matches the query — even containers whose container type your app isn't authorized to use. Always include `ContainerTypeId` in the `queryString` to scope results to your app.

To open a container or file returned by search, your app must have access permissions to the corresponding container type.

## Next steps

- [Store and query container metadata](container-metadata.md)
