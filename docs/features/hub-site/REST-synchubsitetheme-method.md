---
title: SyncHubSiteTheme REST method
description: Applies any theme updates from the parent hub site.
ms.date: 4/20/2018
---

# SyncHubSiteTheme

> [!IMPORTANT]
> The hub sites feature is currently in preview and is subject to change. It is not currently supported for use in production environments.

Applies any theme updates from the parent hub site.

## HTTP request

```HTTP
POST /_api/web/SyncHubSiteTheme
```

## URI parameters

None

## Request headers

| Header | Value |
|--------|-------|
|Accept|application/json;odata=verbose|
|Content-Type|application/json;odata=verbose;charset=utf-8|
|x-requestdigest|The appropriate digest for current site.|

## Request body

Do not supply a request body for this method.

## Responses

| Name   | Type    |Description|
|--------|---------|-----------|
|204 OK  | Boolean |Success    |

## Examples

### Apply themes from parent hub site to the /advertising/collections web

#### Sample request

```HTTP
POST
https://contoso.sharepoint.com/sites/advertising/collections/_api/web/SyncHubSiteTheme
```

#### Sample response

**Status code:** 204

## See also

- [Hub site REST API](hub-site-rest-api.md)