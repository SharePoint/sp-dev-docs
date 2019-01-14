---
title: HubSites REST method
description: Gets information about all hub sites that the current user can access.
ms.date: 4/20/2018
localization_priority: Normal
---

# HubSites

> [!IMPORTANT]
> The hub sites feature is currently in preview and is subject to change. It is not currently supported for use in production environments. 

Gets information about all hub sites that the current user can access.

## HTTP request

```HTTP
GET /_api/HubSites
```

## URI parameters

There are no parameters for this method.

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
|200 OK|SPHubSiteCollection |OK|


## Examples

### Get list of hub sites

#### Sample request

```HTTP
GET
https://contoso.sharepoint.com/_api/HubSites
```

#### Sample response

**Status code:** 200

```JSON
{
	"@odata.context": "https://contoso.sharepoint.com/_api/$metadata#hubsites",
	"value": [
		{
			"@odata.type": "#SP.HubSite",
			"@odata.id": "https://contoso.sharepoint.com/_api/SP.HubSite9dbd0488-5d8d-4ce6-941e-e5650bc216f4",
			"@odata.etag": "\"2\"",
			"@odata.editLink": "SP.HubSite9dbd0488-5d8d-4ce6-941e-e5650bc216f4",
			"Description": null,
			"ID": "82e8cb67-c4f1-4b38-80aa-0342294f5ece",
			"LogoUrl": "https://contoso.sharepoint.com/sites/ContosoTravelMarketing/SiteAssets/__hubLogo____hubLogo__.png",
			"SiteId": "82e8cb67-c4f1-4b38-80aa-0342294f5ece",
			"SiteUrl": "https://contoso.sharepoint.com/sites/ContosoTravelMarketing",
			"Targets": null,
			"TenantInstanceId": "00000000-0000-0000-0000-000000000000",
			"Title": "Contoso Travel Marketing"
		},
		{
			"@odata.type": "#SP.HubSite",
			"@odata.id": "https://contoso.sharepoint.com/_api/SP.HubSitee3e23fc3-870c-4de1-89c0-85b378e42b2e",
			"@odata.etag": "\"1\"",
			"@odata.editLink": "SP.HubSitee3e23fc3-870c-4de1-89c0-85b378e42b2e",
			"Description": null,
			"ID": "d8ab01e9-1634-44dd-91fe-1e6ff8385c34",
			"LogoUrl": "https://contoso.sharepoint.com/sites/ContosoDepartment/SiteAssets/__sitelogo__keep_calm_hit_refresh.png",
			"SiteId": "d8ab01e9-1634-44dd-91fe-1e6ff8385c34",
			"SiteUrl": "https://contoso.sharepoint.com/sites/ContosoDepartment",
			"Targets": null,
			"TenantInstanceId": "00000000-0000-0000-0000-000000000000",
			"Title": "Contoso Department Hub"
		}
	]
}
```

## See also

- [Hub site REST API](hub-site-rest-api.md)
