---
title: JoinHubSite REST method
description: Associates a site with an existing hub site. You can also use this method to disassociate a site from a hub site.
ms.date: 6/18/2019
localization_priority: Normal
---

# JoinHubSite

Associates a site with an existing hub site. You can also use this method to disassociate a site from a hub site (see [example](#examples)).

## HTTP request

```HTTP
POST /_api/site/JoinHubSite(hubSiteId)
```

## URI parameters

|Name |In |Required|Type|Description|
|-----|---|--------|----|-----------|
|hubSiteId|query|True|GUID|ID of the hub site to join.|

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

## Examples

### Join the advertising site to the marketing hub site

In this sample, the ID of the marketing hub site is `27c5fcba-abfd-4c34-823d-0b4a48f7ffe6`.

#### Sample request

```HTTP
POST
https://contoso.sharepoint.com/sites/advertising/_api/site/JoinHubSite('27c5fcba-abfd-4c34-823d-0b4a48f7ffe6')
```

#### Sample response

**Status code:** 204

### Remove the advertising site from the marketing hub site

To remove, or disassociate a site from a hub site, call JoinHubSite with the value "00000000-0000-0000-0000-000000000000".

#### Sample request

```HTTP
POST
https://contoso.sharepoint.com/sites/advertising/_api/site/JoinHubSite('00000000-0000-0000-0000-000000000000')
```

#### Sample response

**Status code:** 204

## See also

- [Hub site REST API](hub-site-rest-api.md)
