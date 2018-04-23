---
title: UnRegisterHubSite REST method
description: Unregisters a hub site so that it is no longer a hub site.
ms.date: 4/20/2018
---

# UnRegisterHubSite

> [!IMPORTANT]
> The hub sites feature is currently in preview and is subject to change. It is not currently supported for use in production environments.

Unregisters a hub site so that it is no longer a hub site. It will become a regular site. Any sites associated with the hub site will no longer be associated. This can take up to an hour to propagate. If you want to speed up the process, first remove any associated sites before unregistering the hub site. 

## HTTP request

```HTTP
POST /_api/site/UnRegisterHubSite
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

| Name   | Type  | Description|
|--------|-------|------------|
|204 OK| |Success|
|Other Status Codes|Error|Error response describing why the operation failed.|

## Examples

### UnRegister a marketing site so it is no longer a hub site

#### Sample request

```HTTP
POST
https://contoso.sharepoint.com/sites/marketing/_api/site/UnRegisterHubSite
```

#### Sample response

**Status code:** 204

## See also

- [Hub site REST API](hub-site-rest-api.md)