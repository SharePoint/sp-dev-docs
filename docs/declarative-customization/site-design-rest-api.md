---
title: SharePoint site design REST API
description: Work with SharePoint site designs through the SharePoint REST interface to perform basic create, read, update, and delete (CRUD) operations.
ms.date: 12/14/2017
---

# Site design and site script REST API

> [!NOTE]
> Site designs and site scripts are in preview and are subject to change. They are currently only supported for use in production environments in Targeted Release.

You can use the the SharePoint REST interface to perform basic create, read, update, and delete (CRUD) operations on site designs and site scripts.

The SharePoint Online (and SharePoint 2016 and later on-premises) REST service supports combining multiple requests into a single call to the service by using the OData $batch query option. For details and links to code samples, see [Make batch requests with the REST APIs](https://dev.office.com/sharepoint/docs/apis/rest/make-batch-requests-with-the-rest-apis.md).

## Prerequisites
Before you get started, make sure that you're familiar with the following:
- [Get to know the SharePoint REST service](https://dev.office.com/sharepoint/docs/apis/rest/get-to-know-the-sharepoint-rest-service.md) 
- [Complete basic operations using SharePoint REST endpoints](https://dev.office.com/sharepoint/docs/apis/rest/complete-basic-operations-using-sharepoint-rest-endpoints.md)

## REST commands

The following REST commands are available for working with site designs and site scripts:

- **CreateSiteScript** &mdash; Creates a new site script.
- **GetSiteScripts** &mdash; Gets a list of information on existing site scripts.
- **GetSiteScriptMetadata** &mdash; Gets information about a specific site script.
- **UpdateSiteScript** &mdash; Updates a site script with new values.
- **DeleteSiteScript** &mdash; Deletes a site script.
- **CreateSiteDesign** &mdash; Creates a site design.
- **GetSiteDesigns** &mdash; Gets a list of information on existing site designs.
- **GetSiteDesignMetadata** &mdash; Gets information about a sepcific site design.
- **UpdateSiteDesign** &mdash; Updates a site design with new values.
- **DeleteSiteDesign** &mdash; Deletes a site design.
- **GetSiteDesignRights** &mdash; Gets a list of principals that have access to a site design.
- **GrantSiteDesignRights** &mdash; Grants access to a site design for one or more principals.
- **RevokeSiteDesignRights** &mdash; Revokes access from a site design for one or more principals.

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

Creates a new site script.

### Parameters

|Parameter     | Description  |
|--------------|--------------|
| Title       | The display name of the site design. |
| Content     | JSON value that describes the script. For more information, see [JSON reference](site-design-json-schema.md).|

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

The following example gets the site script information for all site scripts.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteScripts");
```

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

Updates a site script with new values.

### Parameters

|Parameter   | Description  |
|------------|--------------|
| Id         | The ID of the site script to update. |
|Title       | (optional) The new display name of the site script. |
|Description | (Optional) The new description of the site script. |
| Version    | (Optional) The new version number of the site script. |
| Content    | (Optional) A new JSON script defining the script actions. For more information, see [Site design JSON schema](site-design-json-schema.md) |

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
|Title                 | The display name of the site design. |
|WebTemplate           | Identifies which base template to add the design to. Use the value **64** for the Team site template, and the value **68** for the Communication site template. |
|SiteScripts           | An array of one or more site scripts. Each is identified by an ID. The scripts will run in the order listed. |
|Description         | (Optional) The display description of site design. |
|PreviewImageUrl     | (Optional) The URL of a preview image. If none is specified SharePoint will use a generic image. |
|PreviewImageAltText | (Optional) The alt text description of the image for accessibility. |
|IsDefault           | (Optional) **true** if the site design is applied as the default site design; otherwise, **false**. For more information see [Customize a default site design](customize-default-site-design.md) |

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

## GetSiteDesigns

Gets a list of information on existing site designs.

### Parameters

None

Here's an example of getting all the site designs.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteDesigns");
```

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

Here's an example of getting information about a specific site design by ID.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteDesignMetadata", 
{id:"614f9b28-3e85-4ec9-a961-5971ea086cca"});
```

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

## UpdateSiteDesign

Updates a site design with new values.

### Parameters

|Parameter  | Description  |
|-----------|--------------|
|Id         | The ID of the site design to update. |
|Title                 |  (optional) The new display name of the updated site design. |
|WebTemplate           | (optional) The new template to add the site design to. Use the value **64** for the Team site template, and the value **68** for the Communication site template. |
|SiteScripts           | (optional) A new array of one or more site scripts. Each is identified by an ID. The scripts will run in the order listed. |
|Description         | (Optional) The new display description of updated site design. |
|PreviewImageUrl     | (Optional) The new URL of a preview image. |
|PreviewImageAltText | (Optional) The new alt text description of the image for accessibility. |
|IsDefault           | (Optional) **true** if the site design is applied as the default site design; otherwise, **false**. For more information see [Customize a default site design](customize-default-site-design.md) |

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

Here is an example of the JSON returned after calling **UpdateSiteDesign**.

```json{
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

Here's an example of getting view rights for a specific site design.

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.GetSiteDesignRights", 
{id:"dc076f7b-6c15-4d76-8f85-948a17f5dd18"});
```

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

Here's an example of revoking view rights from a site design for Patti (fictional user at Contoso.)

```javascript
RestRequest("/_api/Microsoft.Sharepoint.Utilities.WebTemplateExtensions.SiteScriptUtility.RevokeSiteDesignRights", 
{id:"5d4756e9-e1f5-42f7-afa7-5fa5aac170aa",
 principalNames:["debrab@Contoso.sharepoint.com"] });
```
