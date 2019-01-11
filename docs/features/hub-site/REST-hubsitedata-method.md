---
title: HubSiteData REST method
description: Gets hub site data for the current web.
ms.date: 4/20/2018
localization_priority: Normal
---

# HubSiteData

> [!IMPORTANT]
> The hub sites feature is currently in preview and is subject to change. It is not currently supported for use in production environments. 

Gets hub site data for the current web.

## HTTP request

```HTTP
GET /_api/web/HubSiteData
```

## URI parameters

|Name |In |Required|Type|Description|
|-----|---|--------|----|-----------|
|forceRefresh|query|False|boolean|Default value is **false**. When **false**, the data is returned from the server's cache. When **true**, the cache is refreshed with the latest updates and then returned. Use this if you just made changes and need to see those changes right away.|

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
|200 OK|SPHubSiteData |OK|

## Examples

### Get hub site data for marketing web

#### Sample request

```HTTP
GET
https://contoso.sharepoint.com/sites/marketing/_api/web/HubSiteData(true)
```

#### Sample response

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

## See also

- [Hub site REST API](hub-site-rest-api.md)
