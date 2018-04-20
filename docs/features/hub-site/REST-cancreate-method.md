---
title: SP.HubSites.CanCreate REST method
description: Returns whether the current user can create a hub site. Only tenant admins can create hub sites.
ms.date: 4/20/2018
---

# SP.HubSites.CanCreate

> [!IMPORTANT]
> The hub sites feature is currently in preview and is subject to change. It is not currently supported for use in production environments. 

Returns whether the current user can create a hub site. Only tenant admins can create hub sites.

## HTTP request

```HTTP
GET /_api/SP.HubSites.CanCreate
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
|200 OK  | [SPHubSiteCanCreate](#sphubsitecancreate) |Success    |

## Examples

### Check if you can create hub sites

#### Sample request

```HTTP
GET
https://contoso.sharepoint.com/sites/marketing/_api/SP.HubSites.CanCreate
```

#### Sample response

**Status code:** 200

```json
{
	"@odata.context": "https://contoso.sharepoint.com/sites/marketing/_api/$metadata#Edm.Boolean",
	"value": true
}
```

## Definitions

|Type|Description|
|---|---|
| [SPHubSiteCanCreate](#sphubsitecancreate) | Indicates if you have permissions to create a hub site.|

### SPHubSiteCanCreate

Indicates if you have permissions to create a hub site.

|Name  |Type    |Description  |
|------|--------|-------------|
|value |Boolean | **True** if you have permissions to create a hub site; otherwise, **false**.        |

## See also

- [Hub site REST API](hub-site-rest-api.md)