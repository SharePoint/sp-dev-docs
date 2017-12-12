---
title: SharePoint site design REST API
description: Work with SharePoint site designs through the SharePoint REST interface to perform basic create, read, update, and delete (CRUD) operations.
ms.date: 12/14/2017
---

# Site design and site script REST API

> [!NOTE]
> Site designs and site scripts are currently in preview and are subject to change. They are not currently supported for us in production environments.

You can use the the SharePoint REST interface to perform basic create, read, update, and delete (CRUD) operations on site themes.

The SharePoint Online (and SharePoint 2016 and later on-premises) REST service supports combining multiple requests into a single call to the service by using the OData $batch query option. For details and links to code samples, see [Make batch requests with the REST APIs](https://dev.office.com/sharepoint/docs/apis/rest/make-batch-requests-with-the-rest-apis.md).

## Prerequisites
Before you get started, make sure that you're familiar with the following:
- [Get to know the SharePoint REST service](https://dev.office.com/sharepoint/docs/apis/rest/get-to-know-the-sharepoint-rest-service.md) 
- [Complete basic operations using SharePoint REST endpoints](https://dev.office.com/sharepoint/docs/apis/rest/complete-basic-operations-using-sharepoint-rest-endpoints.md)

## REST commands

The following REST commands are available for working with site designs and site scripts:

* __AddTenantTheme__ &mdash; create a new theme; similar to the Add-SPOTheme SharePoint cmdlet
* __RemoveTenantTheme__ &mdash; remove a theme from the tenant store; similar to the Remove-SPOTheme PowerShell cmdlet
* __GetTenantThemingOptions__ &mdash; read theme settings

The URL for theme management REST commands is based on _api/thememanager. For example, the following are the endpoints for the commands:

* http://<site url>/_api/thememanager/AddTenantTheme
* http://<site url>/_api/thememanager/RemoveTenantTheme

## Create a function to send REST requests

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

//create site script

RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.CreateSiteScript(Title=@title)?@title='TITLE'", VARIABLE);

Add-SPOSiteScript -Title <string> -Content <string> -Description <string>

(since it's easiest to just pull stream the formatted script) recommend using w/ Get-Content

Get-Content .\scripts\sitescript_sample.txt -Raw | Add-SPOSiteScript -Title "sampleSiteScript" -Description "Create a sample list and add to site nav and apply a pre-loaded company theme"

//get all site scripts

RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteScripts");

Get-SPOSiteScript


//get a specific site script

RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteScriptMetadata", {id:"<ID>"});

Get-SPOSiteScript -Identity

//update a specific site script

VAR = site script content

RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.UpdateSiteScript", {updateInfo:{Id:"<siteScriptID>", Title:"<updated title>", Description:"<updated description>", Version: 2, Content: JSON.stringify(<VAR>)}});

(since it's easiest to just pull stream the formatted script) recommend using w/ Get-Content

Get-Content .\scripts\updatedsitescript_sample.txt -Raw | Set-SPOSiteScript -Identity NNN -Description "Create a sample list with another column and changes the pre-loaded company theme applied from Contoso Explorers to Contoso Programs"

//delete a specific site script

RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.DeleteSiteScript", {id:"<ID>"});

Remove-SPOSiteScript -Identity

//create site design
 
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.CreateSiteDesign", {info:{Title:"<title>", Description:"<description>", SiteScriptIds:["NNN"],  WebTemplate:"<64 | 68>", IsDefault: <false | true>}});

Add-SPOSiteDesign -Title <string> -WebTemplate <string> -SiteScripts <SPOSiteScriptPipeBind[]> [-Description <string>] [-PreviewImageUrl <string>] [-PreviewImageAltText <string>] [-IsDefault]  [<CommonParameters>]


//get all site designs

RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteDesigns");

Get-SPOSiteDesign

//get a specific site design

RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteDesignMetadata", {id:"<ID>"});

Get-SPOSiteDesign [[-Identity] <SPOSiteDesignPipeBind>]  [<CommonParameters>]

//update a specific site design

RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.UpdateSiteDesign", {updateInfo:{Id:"<siteDesignID>", Title:"<updated site design title>", Description:"<updated site design description>", SiteScriptIds:["<ID>"], PreviewImageUrl:"<url to image asset for site design preview image>",PreviewImageAltText:"<alt text for preview image>" WebTemplate:"68", Version: 7, IsDefault: false}});


//delete a specific site design

RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.DeleteSiteDesign", {id:"<ID>"});

Remove-SPOSiteDesign [-Identity] <SPOSiteDesignPipeBind>  [<CommonParameters>]

//get a site design scope

RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteDesignRights", {id:"<ID>"});

//scope a site design

RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GrantSiteDesignRights", {id:"<ID>", principalNames:["alias", “alias@domain.com”], grantedRights:1});

Grant-SPOSiteDesignRights [-Identity] <SPOSiteDesignPipeBind> -Principals <string[]> -Rights {View}  [<CommonParameters>]
Get-SPOSiteDesignRights [-Identity] <SPOSiteDesignPipeBind>  [<CommonParameters>]

//revoke site design scope rights

RestRequest

Revoke-SPOSiteDesignRights [-Identity] <SPOSiteDesignPipeBind> -Principals <string[]>  [<CommonParameters>]

