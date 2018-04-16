---
title: SyncHubSiteTheme REST method
description: SyncHubSiteTheme REST method
ms.date: 2/26/2018
---

# SyncHubSiteTheme

> [!IMPORTANT]
> The hub sites feature is currently in preview and is subject to change. It is not currently supported for use in production environments.

Applies any theme updates from the parent hub site.

## HTTP request

```
POST /_api/web/SyncHubSiteTheme
```

## URI Parameters

None

## Request headers

| Header | Value |
|--------|-------|
|Accept|application/json;odata=verbose|
|Content-Type|application/json;odata=verbose;charset=utf-8|
|x-requestdigest|The appropriate digest for current site|

## Request body

Do not supply a request body for this method.

## Responses

| Name   | Type    |Description|
|--------|---------|-----------|
|204 OK  | Boolean |Success    |

## Examples

### Apply themes from parent hub site to the /advertising/collections web

#### Sample Request

```HTTP
POST
https://contoso.sharepoint.com/sites/advertising/collections/_api/web/SyncHubSiteTheme
```

#### Sample Response
**Status code:** 204
