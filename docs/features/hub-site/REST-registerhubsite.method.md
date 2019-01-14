---
title: RegisterHubSite REST method
description: Registers an existing site as a hub site.
ms.date: 4/20/2018
localization_priority: Normal
---

# RegisterHubSite

> [!IMPORTANT]
> The hub sites feature is currently in preview and is subject to change. It is not currently supported for use in production environments. 

Registers an existing site as a hub site.

## HTTP request

```HTTP
POST /_api/site/RegisterHubSite
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
|200 OK|SPHubSite |OK|
|Other Status Codes|Error|Error response describing why the operation failed.|

## Examples

### Register a marketing site as a hub site

#### Sample request

```HTTP
POST
https://contoso.sharepoint.com/sites/marketing/_api/site/RegisterHubSite
```

#### Sample response

**Status code:** 200

```JSON
{
	"@odata.context": "https://contoso.sharepoint.com/sites/marketing/_api/$metadata#hubsites/$entity",
	"@odata.type": "#SP.HubSite",
	"@odata.id": "https://contoso.sharepoint.com/sites/marketing/_api/site/RegisterHubSite",
	"@odata.etag": "\"1\"",
	"@odata.editLink": "site/RegisterHubSite",
	"Description": null,
	"ID": "2714709b-b5d0-4001-9d43-6a0e4d6e7a19",
	"LogoUrl": null,
	"SiteId": "2714709b-b5d0-4001-9d43-6a0e4d6e7a19",
	"SiteUrl": "https://contoso.sharepoint.com/sites/marketing",
	"Targets": null,
	"TenantInstanceId": "4aa2157b-4935-472d-8169-281c2e9d50a1",
	"Title": "Marketing site"
}
```

## See also

- [Hub site REST API](hub-site-rest-api.md)
