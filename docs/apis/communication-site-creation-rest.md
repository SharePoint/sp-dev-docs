---
title: Create Modern SharePoint Sites using REST
description: Create and get the status of a new modern SharePoint site by using the REST interface.
ms.date: 4/19/2018
ms.prod: sharepoint
localization_priority: Priority
---

# Manage modern SharePoint sites using REST

This topic assumes that you are already familiar with the following topics: 

- [Get to know the SharePoint REST service](../sp-add-ins/get-to-know-the-sharepoint-rest-service.md)
- [Complete basic operations using SharePoint REST endpoints](../sp-add-ins/complete-basic-operations-using-sharepoint-rest-endpoints.md)

This topic does not provide code snippets. The REST examples below assume an HTTP Accept header of 'application/json;odata.metadata=none'.

The following REST commands are available for creating a modern SharePoint Communication site:

- **Create**. Create a new SharePoint site.
- **Delete**. Deletes a SharePoint site.
- **Status**. Get the status of a SharePoint site.

The base URL for the REST commands is `_api/SPSiteManager`.

## Create a modern site

Using the following REST api you can create both Communication sites and non-group associated Team Sites.

To specify which type of site to create you use the WebTemplate attribute. Use one of the following templates to select which type of site to create:

* Communication Site: `SITEPAGEPUBLISHING#0`
* non-group associated Team Site: `STS#3`

```json
url: /_api/SPSiteManager/create
accept: application/json;odata.metadata=none
odata-version: 4.0
method: POST
body:
{
  "Title": "Communication Site 1",
  "Url":"https://contoso.sharepoint.com/sites/commsite1",
  "Lcid": 1033,
  "ShareByEmailEnabled":false,
  "Classification":"Low Business Impact",
  "Description":"Description",
  "WebTemplate":"SITEPAGEPUBLISHING#0",
  "SiteDesignId":"6142d2a0-63a5-4ba0-aede-d9fefca2c767",
  "Owner":"owner@yourtenant.onmicrosoft.com"
}
```

> [!IMPORTANT]
> If you use an app-only context to create the site collection the **owner property is required**. In other cases this is an optional property and will default to the user calling the REST endpoint.


The site design id can be retrieved by using the [Get-SPOSiteDesign](/powershell/module/sharepoint-online/get-spositedesign) (Microsoft SharePoint Online Management Shell) or [Get-PnPSiteDesign](/powershell/module/sharepoint-pnp/get-pnpsitedesign) (PnP PowerShell) cmdlets. If you want to apply an out-of-the-box available site design, use the following values:

- Topic: null
- Showcase: `6142d2a0-63a5-4ba0-aede-d9fefca2c767`
- Blank: `f6cc5403-0d63-442e-96c0-285923709ffc`

### Response

If successful, this method returns a `200, OK` response code and simple JSON object in the response body with the following details.

```json
{
  "SiteId":"d11e59ca-1465-424c-be90-c847ba849af5",
  "SiteStatus":2,
  "SiteUrl":"https://contoso.sharepoint.com/sites/commsite1"
}
```

## Delete a modern site

The REST API to delete a modern site is:

```json
url: /_api/SPSiteManager/delete
method: POST
accept: application/json;odata.metadata=none
odata-version: 4.0
body:
{
  "siteId":"d11e59ca-1465-424c-be90-c847ba849af5"
}
```
### Response

If succesfull this method returns a `200, OK` response code.

## Get modern site status

The REST API for getting the status of a modern SharePoint site:

```json
url: /_api/SPSiteManager/status?url='https%3A%2F%2Fcontoso.sharepoint.com%2Fsites%2Fcommsite1'
method: GET
accept: application/json;odata.metadata=none
odata-version: 4.0
body: none
```

### Response

If successful, this method returns a `200, OK` response code and simple JSON object in the response body with the following details.
 
If the site exists, the response returns the site status and site URL:

```json
{
  "SiteId":"d11e59ca-1465-424c-be90-c847ba849af5",
  "SiteStatus":2,
  "SiteUrl":"https://contoso.sharepoint.com/sites/comm1"
}
```


If the site does not exist, the response returns a site status of 0 with no URL and no site id.

```json
{ 
  "SiteId":,
  "SiteStatus":0,
  "SiteUrl":
}
```

The full set of values for SiteStatus are as follows:

+ `0` - Not Found.  The site doesn't exist.
+ `1` - Provisioning.  The site is currently being provisioned.
+ `2` - Ready.  The site has been created.
+ `3` - Error.  An error occurred while provisioning the site.

## See also

- [Get to know the SharePoint REST service](../sp-add-ins/get-to-know-the-sharepoint-rest-service.md)
