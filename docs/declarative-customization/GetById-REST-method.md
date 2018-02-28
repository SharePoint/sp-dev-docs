---
title: GetById REST method
description: GetById REST method
ms.date: 2/26/2018
---

# HubSites

Gets information about a hub site.

## HTTP request

```
GET /_api/HubSites
```

## URI Parameters

|Name |In |Required|Type|Description|
|-----|---|--------|----|-----------|
|hubSiteId|query|True|string|The ID of the hub site to get information about.|

## Request headers

| Header | Value |
|--------|-------|
|Authorization|TBD|
|Content-Type|application/json|

## Request body

Do not supply a request body for this method.

## Responses

| Name   | Type  | Description|
|--------|-------|------------|
|200 OK|SPHubSite |OK|


## Examples

### Get a hub site

#### Sample Request

```HTTP
GET
https://contoso.sharepoint.com/_api/GetById
```

#### Sample Response
**Status code:** 200

```JSON
```