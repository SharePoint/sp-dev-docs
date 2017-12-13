---
title: SharePoint site design REST API
description: Work with SharePoint site designs through the SharePoint REST interface to perform basic create, read, update, and delete (CRUD) operations.
ms.date: 12/14/2017
---

# Site design and site script REST API

> [!NOTE]
> Site designs and site scripts are currently in preview and are subject to change. They are not currently supported for use in production environments.

You can use the the SharePoint REST interface to perform basic create, read, update, and delete (CRUD) operations on site designs and site scripts.

The SharePoint Online (and SharePoint 2016 and later on-premises) REST service supports combining multiple requests into a single call to the service by using the OData $batch query option. For details and links to code samples, see [Make batch requests with the REST APIs](https://dev.office.com/sharepoint/docs/apis/rest/make-batch-requests-with-the-rest-apis.md).

## Prerequisites
Before you get started, make sure that you're familiar with the following:
- [Get to know the SharePoint REST service](https://dev.office.com/sharepoint/docs/apis/rest/get-to-know-the-sharepoint-rest-service.md) 
- [Complete basic operations using SharePoint REST endpoints](https://dev.office.com/sharepoint/docs/apis/rest/complete-basic-operations-using-sharepoint-rest-endpoints.md)

## REST commands

The following REST commands are available for working with site designs and site scripts:

- **CreateSiteScript** &mdash; Create a new site script.
- **GetSiteScripts** &mdash; Get a list of information on existing site scripts.
- **GetSiteScriptMetadata** &mdash; Get information about a specific site script.
- **UpdateSiteScript** &mdash; Update a site script with new values.
- **DeleteSiteScript** &mdash; Delete a site script.
- **CreateSiteDesign** &mdash; Create a site design.
- **GetSiteDesigns** &mdash; Get a list of information on existing site designs.
- **GetSiteDesignMetadata** &mdash; Get information about a sepcific site design.
- **UpdateSiteDesign** &mdash; Update a site design with new values.
- **DeleteSiteDesign** &mdash; Delete a site design.
- **GetSiteDesignRights** &mdash; Get a list of principals that have access to a site design.
- **GrantSiteDesignRights** &mdash; Grant access to a site design for one or more principals.
- **RevokeSiteDesignRights** &mdash; Revoke access from a site design for one or more principals.

## Create a function to send REST requests

To work with the REST API we recommend creating a helper function to make the REST calls. The following **RestRequest** function will call the REST method specified in the **url** parameter and pass the additional parameters in **params**.

```javascript
function RestRequest(url,params) {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function ()
  {
    if (req.readyState != 4) // Loaded
      return;
    console.log(req.responseText);
  };

  // Prepend web URL to url and remove duplicated slashes.
  var webBasedUrl = (_spPageContextInfo.webServerRelativeUrl + "//" + url).replace(/\/{2,}/,"/");
  req.open("POST",webBasedUrl,true);
  req.setRequestHeader("Content-Type", "application/json;charset=utf-8");
  req.setRequestHeader("ACCEPT", "application/json; odata.metadata=minimal");
  req.setRequestHeader("x-requestdigest", _spPageContextInfo.formDigestValue);
  req.setRequestHeader("ODATA-VERSION","4.0");
  req.send(params ? JSON.stringify(params) : void 0);
}
```

## CreateSiteScript

Creates a new site design available to users when they create a new site from the SharePoint home page.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.CreateSiteScript(Title=@title)?@title='TITLE'", VARIABLE);
```

## GetSiteScripts

Gets a list of information on existing site scripts.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteScripts");
```

## GetSiteScriptMetadata

Gets information about a specific site script.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteScriptMetadata", {id:"<ID>"});
```

## UpdateSiteScript

Updates a site script with new values.

```javascript
VAR = site script content

RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.UpdateSiteScript", {updateInfo:{Id:"<siteScriptID>", Title:"<updated title>", Description:"<updated description>", Version: 2, Content: JSON.stringify(<VAR>)}});
```

## DeleteSiteScript

Deletes a site script.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.DeleteSiteScript", {id:"<ID>"});
```

## CreateSiteDesign

Create a site design.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.CreateSiteDesign", {info:{Title:"<title>", Description:"<description>", SiteScriptIds:["NNN"],  WebTemplate:"<64 | 68>", IsDefault: <false | true>}});
```

## GetSiteDesigns

Get a list of information on existing site designs.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteDesigns");
```

## GetSiteDesignMetadata

Get information about a specific site design.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteDesignMetadata", {id:"<ID>"});
```

## UpdateSiteDesign

Update a site design with new values.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.UpdateSiteDesign", {updateInfo:{Id:"<siteDesignID>", Title:"<updated site design title>", Description:"<updated site design description>", SiteScriptIds:["<ID>"], PreviewImageUrl:"<url to image asset for site design preview image>",PreviewImageAltText:"<alt text for preview image>" WebTemplate:"68", Version: 7, IsDefault: false}});
```

## DeleteSiteDesign

Delete a site design.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.DeleteSiteDesign", {id:"<ID>"});
```

## GetSiteDesignRights

Get a list of principals that have access to a site design.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteDesignRights", {id:"<ID>"});
```

## GrantSiteDesignRights

Grant access to a site design for one or more principals.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GrantSiteDesignRights", {id:"<ID>", principalNames:["alias", “alias@domain.com”], grantedRights:1});
```

## RevokeSiteDesignRights

Revoke access from a site design for one or more principals.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.RevokeSiteDesignRights", {id:"5d4756e9-e1f5-42f7-afa7-5fa5aac170aa", principalNames:["debrab@Contoso.sharepoint.com"] });
```
