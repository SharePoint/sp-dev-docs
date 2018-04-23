---
title: Create SharePoint Communication site using REST
description: Create and get the status of a new modern SharePoint Communication site by using the REST interface.
ms.date: 4/19/2018
ms.prod: sharepoint
---

# Create SharePoint Communication site using REST

This topic assumes that you are already familiar with the following topics: 

- [Get to know the SharePoint REST service](../sp-add-ins/get-to-know-the-sharepoint-rest-service.md)
- [Complete basic operations using SharePoint REST endpoints](../sp-add-ins/complete-basic-operations-using-sharepoint-rest-endpoints.md)

This topic does not provide code snippets.

The following REST commands are available for creating a modern SharePoint Communication site:

- **Create**. Create a new SharePoint Communication site.
- **Status**. Get the status of a SharePoint Communication site.

The URL for Communication site REST commands is based on `_api/sitepages/communicationsite`. For example, these are the endpoints for the REST commands listed earlier:

- `http:///_api/sitepages/communicationsite/create`
- `http:///_api/sitepages/communicationsite/status`

## Create Communication site

```json
url: /_api/sitepages/communicationsite/create
method: POST
body:
{
   "request":{
      "__metadata":{
         "type":"SP.Publishing.CommunicationSiteCreationRequest"
      },
      "AllowFileSharingForGuestUsers":false,
      "Classification":"LBI",
      "Description":"Description",
      "SiteDesignId":"6142d2a0-63a5-4ba0-aede-d9fefca2c767",
      "Title":"Comm Site 1",
      "Url":"https://vesku.sharepoint.com/sites/commsite132",
      "lcid":1033
   }
}
```

> [!IMPORTANT]
> The `lcid` parameter is not currently supported with this API. You can currently only create English sites. 

New in this API is the concept of `SiteDesignID`. Much like the in-product site creation flow, the `SiteDesignID` parameter maps to the included site designs. They are:

- Topic: null
- Showcase: 6142d2a0-63a5-4ba0-aede-d9fefca2c767
- Blank: f6cc5403-0d63-442e-96c0-285923709ffc

### Response

If successful, this method returns a `200, OK` response code and simple JSON object in the response body with the following details.

```json
{
  "d":{
      "Create":{
           "__metadata":{"type":"SP.Publishing.CommunicationSiteCreationResponse"},
          "SiteStatus":2,
          "SiteUrl":"https://contoso.sharepoint.com/sites/comm1"
      }
  }
}
```


## Get Communication site status

The REST API for getting the status of a modern SharePoint Communication site:

```json
url: /_api/sitepages/communicationsite/status?url='https%3A%2F%2Fcontoso.sharepoint.com%2Fsites%2Fcomm1'
method: GET
body: none
```

### Response

If successful, this method returns a `200, OK` response code and simple JSON object in the response body with the following details.
 
If the site exists, the response returns the site status and site URL:

```json
{
  "d":{
      "Status":{
           "__metadata":{"type":"SP.Publishing.CommunicationSiteCreationResponse"},
          "SiteStatus":2,
          "SiteUrl":"https://contoso.sharepoint.com/sites/comm1"
      }
  }
}
```

<br/>

If the site does not exist, the response returns a site status of 0 with no URL.

```json
{
  "d":{
      "Status":{
           "__metadata":{"type":"SP.Publishing.CommunicationSiteCreationResponse"},
          "SiteStatus":0,
          "SiteUrl":
      }
  }
}
```

## See also

- [Get to know the SharePoint REST service](../sp-add-ins/get-to-know-the-sharepoint-rest-service.md)