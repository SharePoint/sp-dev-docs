---
title: SP.HubSites.CanCreate REST method
description: SP.HubSites.CanCreate REST method
ms.date: 2/26/2018
---

# SP.HubSites.CanCreate

> [!IMPORTANT]
> The hub sites feature is currently in preview and is subject to change. It is not currently supported for use in production environments.

Returns whether the current user can create a hub site. Only tenant admins can create hub sites.

## HTTP request

```
GET /_api/SP.HubSites.CanCreate
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
|200 OK  | Boolean |Success    |

## Examples

### Check if you can create hub sites

#### Sample Request

```HTTP
GET
https://contoso.sharepoint.com/sites/marketing/_api/SP.HubSites.CanCreate
```

#### Sample Response
**Status code:** 200

```JSON
{
	"@odata.context": "https://contoso.sharepoint.com/sites/marketing/_api/$metadata#Edm.Boolean",
	"value": true
}
```