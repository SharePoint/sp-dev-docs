---
title: GetById REST method
description: Gets or updates information about a hub site.
ms.date: 4/20/2018
localization_priority: Normal
---

# GetById

> [!IMPORTANT]
> The hub sites feature is currently in preview and is subject to change. It is not currently supported for use in production environments. 

Gets or updates information about a hub site.

## HTTP request

```HTTP
GET /_api/HubSites/GetById
POST /_api/HubSites/GetById
```

## URI parameters

|Name |In |Required|Type|Description|
|-----|---|--------|----|-----------|
|hubSiteId|query|True|string|The ID of the hub site to get information about.|

## Request headers

| Header | Value |
|--------|-------|
|Accept|application/json;odata=verbose|
|Content-Type|application/json;odata=verbose;charset=utf-8|
|x-requestdigest|The appropriate digest for current site.|

<br/>

When using POST to update a hub site with new information, use the following additional header values:

| Header | Value |
|--------|-------|
|X-HTTP-Method| MERGE |
|If-Match| \* |

## Request body

For GET, no request body is needed. When using POST to update a hub site with new information, use the following body.

|Name  |Required  |Type  |Description  |
|---------|---------|---------|---------|
|Title    | no      | string  | The display name of the hub.      |
|LogoUrl  | no      | string  | The URL of a logo to use in the hub site navigation.        |
|Description  | no  | string  | A description of the hub site.        |

## Responses

| Name   | Type  | Description|
|--------|-------|------------|
|200 OK|[SPHubSite](REST-sphubsite-type.md) |Hub site information successfully returned.|
|204 No Content| | Hub site was updated.|

## Examples

### Get a hub site

#### Sample request

```HTTP
GET
https://contoso.sharepoint.com/_api/HubSites/GetById?hubSiteId='f93eff08-5806-499c-92db-38800eefbe44'
```

#### Sample response

**Status code:** 200

```JSON
{
	"@odata.context": "https://contoso.sharepoint.com/_api/$metadata#hubsites/$entity",
	"@odata.type": "#SP.HubSite",
	"@odata.id": "https://contoso.sharepoint.com/_api/HubSites/GetById",
	"@odata.etag": "\"3\"",
	"@odata.editLink": "HubSites/GetById",
	"Description": null,
	"ID": "f93eff08-5806-499c-92db-38800eefbe44",
	"LogoUrl": "https://contoso.sharepoint.com/sites/marketing/SiteAssets/__hubLogo____hubLogo__.png",
	"SiteId": "f93eff08-5806-499c-92db-38800eefbe44",
	"SiteUrl": "https://contoso.sharepoint.com/sites/marketing",
	"Targets": "<acl><ace identityName=\"c:0t.c|tenant|0d4b97fc-37fb-4db3-84f3-d34243a3afac\" displayName=\"0t.c|tenant|0d4b97fc-37fb-4db3-84f3-d34243a3afac\" sid=\"\" binaryIdType=\"1\" binaryId=\"YzowdC5jfHRlbmFudHwwZDRiOTdmYy0zN2ZiLTRkYjMtODRmMy1kMzQyNDNhM2FmYWM=\" allowRights=\"1\" denyRights=\"0\" /></acl>",
	"TenantInstanceId": "00000000-0000-0000-0000-000000000000",
	"Title": ""
}
```

### Update a hub site

#### Sample request

```HTTP
POST
https://contoso.sharepoint.com/_api/HubSites/GetById?hubSiteId='f93eff08-5806-499c-92db-38800eefbe44'
```

#### Sample response

**Status code:** 204

```JSON
{
  "Title": "Marketing hub site",
  "LogoUrl": "https://contoso.sharepoint.com/sites/marketing/SiteAssets/__hubLogo____hubLogo__.png",
  "Description": "Hub site for marketing coordination"
}
```

## See also

- [Hub site REST API](hub-site-rest-api.md)
