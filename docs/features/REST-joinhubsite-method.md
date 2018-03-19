---
title: JoinHubSite REST method
description: JoinHubSite REST method
ms.date: 2/26/2018
---

# JoinHubSite

> [!IMPORTANT]
> The hub sites feature is currently in preview and is subject to change. It is not currently supported for use in production environments.

Associates a site with an existing hub site. You can also use this method to disassociate a site from a hub site (see example below.)

## HTTP request

```
POST /_api/site/JoinHubSite(hubSiteId)
```

## URI Parameters

|Name |In |Required|Type|Description|
|-----|---|--------|----|-----------|
|hubSiteId|query|True|GUID|Id of the hub site to join.|

## Request headers

| Header | Value |
|--------|-------|
|Accept|application/json;odata=verbose|
|Content-Type|application/json;odata=verbose;charset=utf-8|
|x-requestdigest|The appropriate digest for current site|

## Request body

Do not supply a request body for this method.

## Responses

| Name   | Type  | Description|
|--------|-------|------------|
|204 OK| |Success|

## Examples

### Join the advertising site to the marketing hub site

In this sample, the id of the marketing hub site is "27c5fcba-abfd-4c34-823d-0b4a48f7ffe6".

#### Sample Request

```HTTP
POST
https://contoso.sharepoint.com/sites/advertising/_api/site/JoinHubSite('27c5fcba-abfd-4c34-823d-0b4a48f7ffe6')
```

#### Sample Response
**Status code:** 204

### Remove the advertising site from the marketing hub site

To remove, or disassociate a site from a hub site, call JoinHubSite with the value "00000000-0000-0000-0000-000000000000".

#### Sample Request

```HTTP
POST
https://contoso.sharepoint.com/sites/advertising/_api/site/JoinHubSite('00000000-0000-0000-0000-000000000000')
```

#### Sample Response
**Status code:** 204
