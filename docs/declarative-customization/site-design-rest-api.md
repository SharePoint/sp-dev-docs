---
title: SharePoint site design REST API
description: Work with SharePoint site designs through the SharePoint REST interface to perform basic create, read, update, and delete (CRUD) operations.
ms.date: 04/20/2018
localization_priority: Priority
---

# Site design and site script REST API

You can use the SharePoint REST interface to perform basic create, read, update, and delete (CRUD) operations on site designs and site scripts.

The SharePoint Online (and SharePoint 2016 and later on-premises) REST service supports combining multiple requests into a single call to the service by using the OData $batch query option. For details and links to code samples, see [Make batch requests with the REST APIs](../sp-add-ins/make-batch-requests-with-the-rest-apis.md).

## Prerequisites

Before you get started, make sure that you're familiar with the following:

- [Get to know the SharePoint REST service](../sp-add-ins/get-to-know-the-sharepoint-rest-service.md) 
- [Complete basic operations using SharePoint REST endpoints](../sp-add-ins/complete-basic-operations-using-sharepoint-rest-endpoints.md)

## REST commands

The following REST commands are available for working with site designs and site scripts:

- **CreateSiteScript** &ndash; Creates a new site script.
- **GetSiteScripts** &ndash; Gets a list of information on existing site scripts.
- **GetSiteScriptFromList** &ndash; Creates site script syntax from an existing SharePoint list.
- **GetSiteScriptMetadata** &ndash; Gets information about a specific site script.
- **UpdateSiteScript** &ndash; Updates a site script with new values.
- **DeleteSiteScript** &ndash; Deletes a site script.
- **CreateSiteDesign** &ndash; Creates a site design.
- **ApplySiteDesign** &ndash; Applies a site design to an existing site collection.
- **AddSiteDesignTaskToCurrentWeb** &ndash; Adds a site design task on the current web.
- **GetSiteDesigns** &ndash; Gets a list of information on existing site designs.
- **GetSiteDesignMetadata** &ndash; Gets information about a specific site design.
- **GetSiteDesignRun** &ndash; Gets a list of site designs invoked against a site.
- **GetSiteDesignRunStatusAndSchema** &ndash; Gets information on a site design task run.
- **UpdateSiteDesign** &ndash; Updates a site design with new values.
- **DeleteSiteDesign** &ndash; Deletes a site design.
- **GetSiteDesignRights** &ndash; Gets a list of principals that have access to a site design.
- **GrantSiteDesignRights** &ndash; Grants access to a site design for one or more principals.
- **RevokeSiteDesignRights** &ndash; Revokes access from a site design for one or more principals.

## Create a function to send REST requests

To work with the REST API, we recommend creating a helper function to make the REST calls. The following **RestRequest** function calls the REST method specified in the **url** parameter and passes the additional parameters in **params**.

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

Creates a new site script.

### Parameters

|Parameter     | Description  |
|--------------|--------------|
| Title       | The display name of the site design. |
| Content     | JSON value that describes the script. For more information, see [JSON reference](site-design-json-schema.md).|

### Examples

The following example creates a new site script that applies a custom theme.

```javascript
var site_script = 
{
  "$schema": "schema.json",
  "actions": [
    {
      "verb": "applyTheme",
      "themeName": "Contoso Theme"
    }
  ],
  "bindata": { },
  "version": 1
};

RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.CreateSiteScript(Title=@title)?@title='Contoso theme script'", site_script);
```

<br/>

Here is an example of the JSON returned after calling **CreateSiteScript**. It contains the ID of the new site script.

```json
{
  "@odata.context": "https://contoso.sharepoint.com/_api/$metadata#Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteScriptMetadata",
  "Content": null,
  "Description": null,
  "Id": "7647d3d6-1046-41fe-a798-4ff66b099d12",
  "Title": "Contoso customer list",
  "Version": 0
}
```

## GetSiteScripts

Gets a list of information on all existing site scripts.

### Parameters

None.

### Examples

The following example gets the site script information for all site scripts.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteScripts");
```

<br/>

Here is an example of the JSON returned after calling **GetSiteScripts**.

```json
{
  "@odata.context": "https://contoso.sharepoint.com/_api/$metadata#Collection(Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteScriptMetadata)",
  "value": [
    {
      "Content": null,
      "Description": null,
      "Id": "6dfedb96-c090-44e3-875a-1c38032715fc",
      "Title": "Customer orders",
      "Version": 1
    },
    {
      "Content": null,
      "Description": null,
      "Id": "07702c07-0485-426f-b710-4704241caad9",
      "Title": "Contoso theme",
      "Version": 1
    }
  ]
}
```

## GetSiteScriptFromList

Gets the site script syntax for a specific list

### Parameters

|Parameter   | Description  |
|------------|--------------|
| listUrl         | The url of the list to retrieve site script |


### Examples

Here's an example of retrieving a site script JSON object from the Contoso customer list.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteScriptFromList", {listUrl: "https://consoso.sharepoint.com/sites/projectgo/Lists/Contoso%20customer%20list"});
```
<br/>

Here is an example of the JSON returned after calling **GetSiteScriptFromList**.

```json
{"@odata.context":"https://constoso.sharepoint.com/sites/projectgo/_api/$metadata#Edm.String","value":"{
  "actions": [
    {
      "verb": "createSPList",
      "listName": "Contoso customer list",
      "templateType": 100,
      "subactions": [
        {
          "verb": "addSPView",
          "name": "All Items",
          "viewFields": [
            "LinkTitle"
          ],
          "query": "",
          "rowLimit": 30,
          "isPaged": true,
          "makeDefault": true
        }
      ]
    },
    {
      "verb": "addNavLink",
      "url": "Lists/Contoso customer list/AllItems.aspx",
      "displayName": "Contoso customer list",
      "isWebRelative": true
    }
  ]
}"}
```

## GetSiteScriptMetadata

Gets information about a specific site script. It also returns the JSON of the script.

### Parameters

|Parameter     | Description  |
|--------------|--------------|
| id    | The ID of the site script to get information about. |

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteScriptMetadata",
{id:"07702c07-0485-426f-b710-4704241caad9"});
```

### Examples

Here is an example of the JSON returned after calling **GetSiteScriptMetadata**.

```json
{
  "@odata.context": "https://contoso.sharepoint.com/_api/$metadata#Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteScriptMetadata",
  "Content": "{\r\n    \"$schema\": \"schema.json\",\r\n        \"actions\": [\r\n            {\r\n               \"verb\": \"applyTheme\",\r\n               \"themeName\": \"Custom Cyan\"\r\n            }\r\n        ],\r\n            \"bindata\": { },\r\n    \"version\": 1\r\n}",
  "Description": null,
  "Id": "07702c07-0485-426f-b710-4704241caad9",
  "Title": "Contoso theme",
  "Version": 1
}
```

## UpdateSiteScript

Updates a site script with new values. In the REST call, all parameters are optional except the site script Id.

### Parameters

|Parameter   | Description  |
|------------|--------------|
| Id         | The ID of the site script to update. |
| Title      | (Optional) The new display name of the site script. |
| Description | (Optional) The new description of the site script. |
| Version    | (Optional) The new version number of the site script. |
| Content    | (Optional) A new JSON script defining the script actions. For more information, see [Site design JSON schema](site-design-json-schema.md). |

### Examples

Here's an example of updating an existing site script with a new JSON script and values.

```javascript
var updated_site_script = 
{
  "$schema": "schema.json",
  "actions": [
    {
      "verb": "applyTheme",
      "themeName": "Contoso Theme"
    }
  ],
  "bindata": { },
  "version": 2
};

RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.UpdateSiteScript", 
{updateInfo:{
  Id:"07702c07-0485-426f-b710-4704241caad9",
  Title:"New Contoso theme", 
  Description:"Updated Contoso site script", 
  Version: 2, 
  Content: JSON.stringify(updated_site_script)}});
```

<br/>

Here is an example of the JSON returned after calling **UpdateSiteScript**.

```json
{
  "@odata.context": "https://contoso.sharepoint.com/_api/$metadata#Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteScriptMetadata",
  "Content": "{\"$schema\":\"schema.json\",\"actions\":[{\"verb\":\"applyTheme\",\"themeName\":\"Contoso Theme\"}],\"bindata\":{},\"version\":2}",
  "Description": "Updated Contoso site script",
  "Id": "07702c07-0485-426f-b710-4704241caad9",
  "Title": "New Contoso theme",
  "Version": 2
}
```

## DeleteSiteScript

Deletes a site script.

### Parameters

|Parameter   | Description  |
|------------|--------------|
| id         | The ID of the site script to delete. |

### Examples

Here's an example of deleting a site script.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.DeleteSiteScript", 
{id:"07702c07-0485-426f-b710-4704241caad9"});
```

## CreateSiteDesign

Creates a new site design available to users when they create a new site from the SharePoint home page.

### Parameters

|Parameter  | Description  |
|-----------|--------------|
| id         | The ID of the site design to apply. |
|Title                 | The display name of the site design. |
|WebTemplate           | Identifies which base template to add the design to. Use the value **64** for the Team site template, and the value **68** for the Communication site template. |
|SiteScripts           | An array of one or more site scripts. Each is identified by an ID. The scripts will run in the order listed. |
|Description         | (Optional) The display description of site design. |
|PreviewImageUrl     | (Optional) The URL of a preview image. If none is specified, SharePoint uses a generic image. |
|PreviewImageAltText | (Optional) The alt text description of the image for accessibility. |
|IsDefault           | (Optional) **True** if the site design is applied as the default site design; otherwise, **false**. For more information see [Customize a default site design](customize-default-site-design.md). |

### Examples

Here's an example of creating a new site design.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.CreateSiteDesign",{
  info:{
    Title:"Contoso customer tracking",
    Description:"Creates customer list and applies standard theme",
    SiteScriptIds:["07702c07-0485-426f-b710-4704241caad9"],
    WebTemplate:"64",
    PreviewImageUrl: "https://contoso.sharepoint.com/SiteAssets/contoso-design.png",
    PreviewImageAltText: "Customer tracking site design theme"
    }
  });
```

<br/>

Here is an example of the JSON returned after calling **CreateSiteDesign**. It contains the ID of the new site design.

```json
{
  "@odata.context": "https://contoso.sharepoint.com/_api/$metadata#Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteDesignMetadata",
  "Description": "Creates customer list and applies standard theme",
  "PreviewImageAltText": "Customer tracking site design theme",
  "PreviewImageUrl": "https://contoso.sharepoint.com/SiteAssets/contoso-design.png",
  "SiteScriptIds": [ "07702c07-0485-426f-b710-4704241caad9" ],
  "Title": "Contoso customer tracking",
  "WebTemplate": "64",
  "Id": "614f9b28-3e85-4ec9-a961-5971ea086cca",
  "Version": 1
}
```

## ApplySiteDesign

Applies a site design to an existing site collection.

### Parameters

|Parameter   | Description  |
|------------|--------------|
| siteDesignId         | The ID of the site design to apply. |
| webUrl         | The URL of the site collection where you want to apply the site design. |

### Examples

Here's an example of applying a site design to the ProjectGo site collection.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.ApplySiteDesign", {siteDesignId: "614f9b28-3e85-4ec9-a961-5971ea086cca", "webUrl":"https://contoso.sharepoint.com/sites/projectgo"});
```

## AddSiteDesignTaskToCurrentWeb

Adds a site design task on the current web to be invoked asynchronously.

### Parameters

|Parameter   | Description  |
|------------|--------------|
| siteDesignId         | The ID of the site design to apply. |


### Examples

Here's an example of adding a site design task to the ProjectGo site collection.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.AddSiteDesignTaskToCurrentWeb", {siteDesignId: "614f9b28-3e85-4ec9-a961-5971ea086cca"});
```
<br/>

## GetSiteDesigns

Gets a list of information about existing site designs.

### Parameters

None

### Examples

Here's an example of getting all the site designs.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteDesigns");
```

<br/>

Here is an example of the JSON returned after calling **GetSiteDesigns**.

```json
{
  "@odata.context": "https://contoso.sharepoint.com/_api/$metadata#Collection(Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteDesignMetadata)",
  "value": [
    {
      "Description": "Tracks customer orders",
      "IsDefault": false,
      "PreviewImageAltText": null,
      "PreviewImageUrl": null,
      "SiteScriptIds": [ "6dfedb96-c090-44e3-875a-1c38032715fc" ],
      "Title": "customer orders",
      "WebTemplate": "64",
      "Id": "bbbd5740-ed97-461b-8b8e-e682f3fa167b",
      "Version": 1
    },
    {
      "Description": "Creates customer list and applies standard theme",
      "IsDefault": true,
      "PreviewImageAltText": "Customer tracking site design theme",
      "PreviewImageUrl": "https://contoso.sharepoint.com/SiteAssets/site_design.png",
      "SiteScriptIds": [ "07702c07-0485-426f-b710-4704241caad9" ],
      "Title": "Contoso customer tracking",
      "WebTemplate": "64",
      "Id": "614f9b28-3e85-4ec9-a961-5971ea086cca",
      "Version": 1
    }
  ]
}
```

## GetSiteDesignMetadata

Gets information about a specific site design.

### Parameters

|Parameter   | Description  |
|------------|--------------|
| id         | The ID of the site design to get information about. |

### Examples

Here's an example of getting information about a specific site design by ID.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteDesignMetadata", 
{id:"614f9b28-3e85-4ec9-a961-5971ea086cca"});
```

<br/>

Here is an example of the JSON returned after calling **GetSiteDesignMetadata**.

```json
{
  "@odata.context": "https://contoso.sharepoint.com/_api/$metadata#Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteDesignMetadata",
  "Description": "Creates customer list and applies standard theme",
  "IsDefault": true,
  "PreviewImageAltText": "Customer tracking site design theme",
  "PreviewImageUrl": "https://contoso.sharepoint.com/SiteAssets/site_design.png",
  "SiteScriptIds": [ "07702c07-0485-426f-b710-4704241caad9" ],
  "Title": "Contoso customer tracking",
  "WebTemplate": "64",
  "Id": "614f9b28-3e85-4ec9-a961-5971ea086cca",
  "Version": 1
}
```
<br/>

## GetSiteDesignRun

Gets a list of site designs invoked on a site.

### Parameters

None

### Examples

Here's an example of getting information on site designs invoked on a site.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteDesignRun");
```
<br/>

Here is an example of the JSON returned after calling **GetSiteDesignRun**.

```json
{
  "@odata.context": "https://contoso.sharepoint.com/_api/$metadata#SiteDesignRuns",
  "value": [
    {
      "@odata.type": "#Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteDesignRun",
      "@odata.id": "https://contoso.sharepoint.com/_api/Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteDesignRun7512c6f0-4633-424e-99d8-f9cdc62ca9ea",
      "@odata.editLink": "Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteDesignRun7512c6f0-4633-424e-99d8-f9cdc62ca9ea",
      "ID": "66a3f68c-f7c9-45d9-b519-871ce296dfeb",
      "SiteDesignID": "bbbd5740-ed97-461b-8b8e-e682f3fa167b",
      "SiteDesignTitle": "Customer Orders",
      "SiteDesignVersion": 1,
      "SiteID": "42cbfa4c-be0f-42f3-848d-7ee8794b5fef",
      "StartTime": 1551457664000,
      "WebID": "6141af7a-856d-4dc6-a418-8a5daf99edcf"
    },
    {
      "@odata.type": "#Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteDesignRun",
      "@odata.id": "https://contoso.sharepoint.com/_api/Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteDesignRund2d3bdb7-b6f9-4bca-aaa6-c6ff4842cdb3",
      "@odata.editLink": "Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteDesignRund2d3bdb7-b6f9-4bca-aaa6-c6ff4842cdb3",
      "ID": "8ad868d9-402e-43e7-ba1a-2e6940e3dfdc",
      "SiteDesignID": "614f9b28-3e85-4ec9-a961-5971ea086cca",
      "SiteDesignTitle": "Contoso customer tracking",
      "SiteDesignVersion": 1,
      "SiteID": "42cbfa4c-be0f-42f3-848d-7ee8794b5fef",
      "StartTime": 1544749830000,
      "WebID": "6141af7a-856d-4dc6-a418-8a5daf99edcf"
    }
  ]
}
```
<br/>

## GetSiteDesignRunStatusAndSchema

Gets information on an invoked site design task run. Response includes site scripts actions and outcomes.

### Parameters

|Parameter   | Description  |
|------------|--------------|
| runId         | The ID of the site design run. Can be found from GetSiteDesignRun endpoint |

### Examples

Here's an example of getting information about a specific site design task run by runId.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteDesignRunStatusAndSchema",{runId:"8ad868d9-402e-43e7-ba1a-2e6940e3dfdc"});
```
<br/>

Here is an example of the JSON returned after calling **GetSiteDesignRunStatusAndSchema**.

```json
{
  "@odata.context": "https://contoso.sharepoint.com/_api/$metadata#Microsoft.SharePoint.Utilities.WebTemplateExtensions.SPSiteScriptStatusAndSchema",
  "ActionStatus": [
    {
      "ActionIndex": 0,
      "ActionKey": "00000000-0000-0000-0000-000000000000",
      "ActionTitle": "Apply Theme Contoso Theme",
      "LastModified": 1549469792000,
      "OrdinalIndex": 0,
      "OutcomeCode": 0,
      "OutcomeText": null,
      "SiteScriptID": "03ad5b1c-f861-4179-8803-90cebb848d8c",
      "SiteScriptIndex": 0,
      "SiteScriptTitle": "Trigger Flow Provision Assets"
    },
    {
      "ActionIndex": 1,
      "ActionKey": "00000000-0000-0000-0000-000000000000",
      "ActionTitle": "Trigger Flow Provision Assets",
      "LastModified": 1549469793000,
      "OrdinalIndex": 1,
      "OutcomeCode": 0,
      "OutcomeText": null,
      "SiteScriptID": "03ad5b1c-f861-4179-8803-90cebb848d8c",
      "SiteScriptIndex": 0,
      "SiteScriptTitle": "Trigger Flow Provision Assets"
    }
  ],
  "Schema": "{\"recipes\":[{\"actions\":[{\"stages\":[\"Apply Theme Contoso theme\"]},{\"stages\":[\"Trigger Flow Provision Assets\"]}],\"recipeGuid\":\"03ad5b1c-f861-4179-8803-90cebb848d8c\",\"recipeName\":\"Apply Theme Contoso\"}],\"siteDesignTitle\":\"Contoso Customer Site\",\"siteDesignVersion\":1}"
}
```
<br/>

## UpdateSiteDesign

Updates a site design with new values. In the REST call, all parameters are optional except the site script Id. 

> [!NOTE] 
> If you had previously set the IsDefault parameter to **TRUE** and wish it to remain true, you must pass in this parameter again (otherwise it will be reset to **FALSE**). 

### Parameters

|Parameter  | Description  |
|-----------|--------------|
|Id         | The ID of the site design to update. |
|Title               | (Optional) The new display name of the updated site design. |
|WebTemplate         | (Optional) The new template to add the site design to. Use the value **64** for the Team site template, and the value **68** for the Communication site template. |
|SiteScripts         | (Optional) A new array of one or more site scripts. Each is identified by an ID. The scripts run in the order listed. |
|Description         | (Optional) The new display description of the updated site design. |
|PreviewImageUrl     | (Optional) The new URL of a preview image. |
|PreviewImageAltText | (Optional) The new alt text description of the image for accessibility. |
|IsDefault           | (Optional) **True** if the site design is applied as the default site design; otherwise, **false**. For more information see [Customize a default site design](customize-default-site-design.md). |

### Examples

Here's an example that updates every value on an existing site design.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.UpdateSiteDesign",
 {updateInfo:{
   Id:"614f9b28-3e85-4ec9-a961-5971ea086cca", 
   Title:"Contoso customer site", 
   Description:"Creates site with customer theme and list", 
   SiteScriptIds:["6b2b79e4-5da3-4352-8565-42a896fabd57","2b997981-258b-4e1e-81ff-f6fbf7235a1f"], 
   PreviewImageUrl:"https://contoso.sharepoint.com/SiteAssets/customer_site.png",
   PreviewImageAltText:"Customer site with list and theme", 
   WebTemplate:"68", 
   Version: 7, 
   IsDefault: false}});
```

<br/>

Here is an example of the JSON returned after calling **UpdateSiteDesign**.

```json
{
  "@odata.context": "https://contoso.sharepoint.com/_api/$metadata#Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteDesignMetadata",
  "Description": "Creates site with customer theme and list",
  "IsDefault": false,
  "PreviewImageAltText": "Customer site with list and theme",
  "PreviewImageUrl": "https://contoso.sharepoint.com/SiteAssets/customer_site.png",
  "SiteScriptIds": [ "6b2b79e4-5da3-4352-8565-42a896fabd57", "2b997981-258b-4e1e-81ff-f6fbf7235a1f" ],
  "Title": "Contoso customer site",
  "WebTemplate": "68",
  "Id": "614f9b28-3e85-4ec9-a961-5971ea086cca",
  "Version": 7
}
```

## DeleteSiteDesign

Deletes a site design.

### Parameters

|Parameter   | Description  |
|------------|--------------|
| id         | The ID of the site design to delete. |

### Examples

Here's an example of deleting a site design.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.DeleteSiteDesign", 
{id:"f9e76746-5076-4bd2-bad3-e611c488fa85"});
```

## GetSiteDesignRights

Gets a list of principals that have access to a site design.


### Parameters

|Parameter   | Description  |
|------------|--------------|
| id         | The ID of the site design to get rights information from. |

### Examples

Here's an example of getting view rights for a specific site design.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteDesignRights", 
{id:"dc076f7b-6c15-4d76-8f85-948a17f5dd18"});
```

<br/>

Here is an example of the JSON returned after calling **GetSiteDesignRights**.

```json
{
  "@odata.context": "https://contoso.sharepoint.com/_api/$metadata#SiteDesignPrincipals",
  "value": [
    {
      "@odata.type": "#Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteDesignPrincipal",
      "@odata.id": "https://contoso.sharepoint.com/_api/Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteDesignPrincipalfca62a9f-e43e-49a0-9139-6ae4df212859",
      "@odata.editLink": "Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteDesignPrincipalfca62a9f-e43e-49a0-9139-6ae4df212859",
      "DisplayName": "Nestor Wilke",
      "PrincipalName": "i:0#.f|membership|nestorw@contoso.onmicrosoft.com",
      "Rights": 1
    },
    {
      "@odata.type": "#Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteDesignPrincipal",
      "@odata.id": "https://contoso.sharepoint.com/_api/Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteDesignPrincipalce4cd6f6-553b-4a55-9364-1d39125be0ef",
      "@odata.editLink": "Microsoft.SharePoint.Utilities.WebTemplateExtensions.SiteDesignPrincipalce4cd6f6-553b-4a55-9364-1d39125be0ef",
      "DisplayName": "Patti Fernandez",
      "PrincipalName": "i:0#.f|membership|pattif@contoso.onmicrosoft.com",
      "Rights": 1
    }
  ]
}
```

## GrantSiteDesignRights

Grants access to a site design for one or more principals.

### Parameters

|Parameter   | Description  |
|------------|--------------|
| id         | The ID of the site design to grant rights on. |
| principalNames | An array of one or more principals to grant view rights. Principals can be users or mail-enabled security groups in the form of "alias" or "alias@\<*domain name*\>.com" |
| grantedRights | Always set to **1**. This represents the **View** right. |

### Examples

Here's an example of granting view rights to a site design for Nestor and Patti (fictional users at Contoso.)

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GrantSiteDesignRights", {
  "id": "dc076f7b-6c15-4d76-8f85-948a17f5dd18",
  "principalNames": [ "NestorW@contoso.onmicrosoft.com", "PattiF@contoso.onmicrosoft.com" ],
  "grantedRights": 1
});
```

## RevokeSiteDesignRights

Revokes access from a site design for one or more principals.

### Parameters

|Parameter   | Description  |
|------------|--------------|
| id         | The ID of the site design to revoke rights from. |
| principalNames | An array of one or more principals to revoke view rights from. If all principals have rights revoked on the site design, the site design becomes viewable to everyone. |

### Examples

Here's an example of revoking view rights from a site design for Patti (fictional user at Contoso.)

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.RevokeSiteDesignRights", 
{id:"5d4756e9-e1f5-42f7-afa7-5fa5aac170aa",
 principalNames:["debrab@Contoso.sharepoint.com"] });
```

## See also

- [SharePoint site design and site script overview](site-design-overview.md)
