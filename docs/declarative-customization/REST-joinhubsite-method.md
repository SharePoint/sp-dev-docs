---
title: JoinHubSite REST method
description: JoinHubSite REST method
ms.date: 2/26/2018
---

# JoinHubSite

> [!IMPORTANT]
> The hub sites feature is currently in preview and is subject to change. It is not currently supported for use in production environments.

Associates a site with an existing hub site.

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
|200 OK|SPHubSiteData |OK|

## Examples

### Get hub site data for marketing web

#### Sample Request

```HTTP
POST
https://contoso.sharepoint.com/sites/marketing/_api/web/HubSiteData(true)
```

#### Sample Response
**Status code:** 200

```JSON
{
	"themeKey": null,
	"name": "marketing",
	"url": "https://contoso.sharepoint.com/sites/marketing",
	"logoUrl": "https://contoso.sharepoint.com/sites/marketing/SiteAssets/__hubLogo.jpg",
	"usesMetadataNavigation": false,
	"navigation": [
		{
			"Id": 2006,
			"Title": "online team",
			"Url": "https://spdfcontosodemo2.sharepoint.com/sites/online-advertising",
			"IsDocLib": false,
			"IsExternal": false,
			"ParentId": 1002,
			"ListTemplateType": 0,
			"Children": []
		}
	]
}
```