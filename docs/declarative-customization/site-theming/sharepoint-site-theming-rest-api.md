---
title: SharePoint site theming - REST API
description: Use the the SharePoint REST interface to perform basic create, read, update, and delete (CRUD) operations on site themes.
ms.date: 04/19/2018
localization_priority: Priority
---

# SharePoint site theming: REST API

You can use the the SharePoint REST interface to perform basic create, read, update, and delete (CRUD) operations on site themes.

The SharePoint Online (and SharePoint 2016 and later on-premises) REST service supports combining multiple requests into a single call to the service by using the OData $batch query option. For details and links to code samples, see [Make batch requests with the REST APIs](../../sp-add-ins/make-batch-requests-with-the-rest-apis.md).

## Prerequisites

Before you get started, make sure that you're familiar with the following:

- [Get to know the SharePoint REST service](../../sp-add-ins/get-to-know-the-sharepoint-rest-service.md) 
- [Complete basic operations using SharePoint REST endpoints](../../sp-add-ins/complete-basic-operations-using-sharepoint-rest-endpoints.md)

## REST commands for site themes

The following REST commands are available for working with site themes:

* __AddTenantTheme__ &ndash; create a new theme; similar to the Add-SPOTheme SharePoint cmdlet
* __DeleteTenantTheme__ &ndash; remove a theme from the tenant store; similar to the Remove-SPOTheme PowerShell cmdlet
* __GetTenantThemingOptions__ &ndash; read theme settings
* __ApplyTheme__ &ndash; apply tenant theme to site
* __UpdateTenantTheme__ &ndash; updates tenant theme definition

The URL for theme management REST commands is based on _api/thememanager. For example, the following are the endpoints for the commands:

* `http://<site url>/_api/thememanager/AddTenantTheme`
* `http://<site url>/_api/thememanager/DeleteTenantTheme`
* `http://<site url>/_api/thememanager/GetTenantThemingOptions`
* `http://<site url>/_api/thememanager/ApplyTheme`
* `http://<site url>/_api/thememanager/UpdateTenantTheme`

## AddTenantTheme

The following JavaScript sample code shows how to add a new theme to a tenant.

```javascript
function RestRequest(url,params) {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function ()
        {
            if (req.readyState != 4) // Loaded
                return;
            console.log(req.responseText);
        };
  req.open("POST",url,true); 
  req.setRequestHeader("Content-Type", "application/json;charset=utf-8");
  req.setRequestHeader("ACCEPT", "application/json; odata.metadata=minimal");
  req.setRequestHeader("x-requestdigest", _spPageContextInfo.formDigestValue);
  req.setRequestHeader("ODATA-VERSION","4.0");
  req.send(params ? JSON.stringify(params) : void 0);
}
RestRequest("/_api/thememanager/GetTenantThemingOptions");

var pal = {
    "palette" : {
        "themePrimary": "#1BF242",
        "themeLighterAlt": "#0d0b00",
        "themeLighter": "#0b35bc",
        "themeLight": "#322d00",
        "themeTertiary": "#6a5f00",
       "themeSecondary": "#1B22F2",
        "themeDarkAlt": "#ffe817",
        "themeDark": "#ffed4b",
        "themeDarker": "#fff171",
        "neutralLighterAlt": "#252525",
        "neutralLighter": "#282828",
        "neutralLight": "#313131",
        "neutralQuaternaryAlt": "#3f3f3f",
        "neutralQuaternary": "#484848",
        "neutralTertiaryAlt": "#4f4f4f",
        "neutralTertiary": "#c8c8c8",
        "neutralSecondaryAlt": "#d0d0d0",
        "neutralSecondary": "#dadada",
        "neutralPrimary": "#ffffff",
        "neutralDark": "#eaeaea",
        "black": "#f8f8f8",
        "white": "#1f1f1f",
        "primaryBackground": "#1f1f1f",
        "primaryText": "#ffffff",
        "error": "#ff5f5f"
    }
}
RestRequest("/_api/thememanager/AddTenantTheme", {name:"Sounders Rave Green", themeJson: JSON.stringify(pal)});
```

<br/>

## DeleteTenantTheme

The following JavaScript sample code shows how to remove a theme.

```javascript
function RestRequest(url,params) {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function ()
        {
            if (req.readyState != 4) // Loaded
                return;
            console.log(req.responseText);
        };
  req.open("POST",url,true);
  req.setRequestHeader("Content-Type", "application/json;charset=utf-8");
  req.setRequestHeader("ACCEPT", "application/json; odata.metadata=minimal");
  req.setRequestHeader("x-requestdigest", _spPageContextInfo.formDigestValue);
  req.setRequestHeader("ODATA-VERSION","4.0");
  req.send(params ? JSON.stringify(params) : void 0);
}
 
RestRequest("/_api/thememanager/DeleteTenantTheme", { name:"themeName.DarkYellow" });
 
RestRequest("/_api/thememanager/UpdateTenantTheme", { name:"themeName",
     themeJson:""});
```

<br/>

## GetTenantThemingOptions

The following JavaScript sample code shows how to read theme settings.

```javascript
function RestRequest(url,params) {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function ()
        {
            if (req.readyState != 4) // Loaded
                return;
            console.log(req.responseText);
        };
  req.open("POST",url,true);
  req.setRequestHeader("Content-Type", "application/json;charset=utf-8");
  req.setRequestHeader("ACCEPT", "application/json; odata.metadata=minimal");
  req.setRequestHeader("x-requestdigest", _spPageContextInfo.formDigestValue);
  req.setRequestHeader("ODATA-VERSION","4.0");
  req.send(params ? JSON.stringify(params) : void 0);
}
 
RestRequest("/_api/thememanager/GetTenantThemingOptions");
```

## ApplyTheme

The following JavaScript sample code shows how to apply theme to the site.

```javascript
function RestRequest(url,params) {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function ()
        {
            if (req.readyState != 4) // Loaded
                return;
            console.log(req.responseText);
        };
  req.open("POST",url,true); 
  req.setRequestHeader("Content-Type", "application/json;charset=utf-8");
  req.setRequestHeader("ACCEPT", "application/json; odata.metadata=minimal");
  req.setRequestHeader("x-requestdigest", _spPageContextInfo.formDigestValue);
  req.setRequestHeader("ODATA-VERSION","4.0");
  req.send(params ? JSON.stringify(params) : void 0);
}
var pal = {
    "palette" : {
        "themePrimary": "#1BF242",
        "themeLighterAlt": "#0d0b00",
        "themeLighter": "#0b35bc",
        "themeLight": "#322d00",
        "themeTertiary": "#6a5f00",
       "themeSecondary": "#1B22F2",
        "themeDarkAlt": "#ffe817",
        "themeDark": "#ffed4b",
        "themeDarker": "#fff171",
        "neutralLighterAlt": "#252525",
        "neutralLighter": "#282828",
        "neutralLight": "#313131",
        "neutralQuaternaryAlt": "#3f3f3f",
        "neutralQuaternary": "#484848",
        "neutralTertiaryAlt": "#4f4f4f",
        "neutralTertiary": "#c8c8c8",
        "neutralSecondaryAlt": "#d0d0d0",
        "neutralSecondary": "#dadada",
        "neutralPrimary": "#ffffff",
        "neutralDark": "#eaeaea",
        "black": "#f8f8f8",
        "white": "#1f1f1f",
        "primaryBackground": "#1f1f1f",
        "primaryText": "#ffffff",
        "error": "#ff5f5f"
    }
}
RestRequest("/_api/thememanager/ApplyTheme", {name:"Sounders Rave Green", themeJson: JSON.stringify(pal)});
```

## UpdateTenantTheme

The following JavaScript sample code shows how to update tenant theme.

```javascript
function RestRequest(url,params) {
  var req = new XMLHttpRequest();
  req.onreadystatechange = function ()
        {
            if (req.readyState != 4) // Loaded
                return;
            console.log(req.responseText);
        };
  req.open("POST",url,true); 
  req.setRequestHeader("Content-Type", "application/json;charset=utf-8");
  req.setRequestHeader("ACCEPT", "application/json; odata.metadata=minimal");
  req.setRequestHeader("x-requestdigest", _spPageContextInfo.formDigestValue);
  req.setRequestHeader("ODATA-VERSION","4.0");
  req.send(params ? JSON.stringify(params) : void 0);
}
var pal = {
    "palette" : {
			"themePrimary": "#008cff",
			"themeLighterAlt": "#f5faff",
			"themeLighter": "#d6edff",
			"themeLight": "#b3ddff",
			"themeTertiary": "#66baff",
			"themeSecondary": "#1f9aff",
			"themeDarkAlt": "#007ee6",
			"themeDark": "#006bc2",
			"themeDarker": "#004f8f",
			"neutralLighterAlt": "#f8f8f8",
			"neutralLighter": "#f4f4f4",
			"neutralLight": "#eaeaea",
			"neutralQuaternaryAlt": "#dadada",
			"neutralQuaternary": "#d0d0d0",
			"neutralTertiaryAlt": "#c8c8c8",
			"neutralTertiary": "#595959",
			"neutralSecondary": "#373737",
			"neutralPrimaryAlt": "#2f2f2f",
			"neutralPrimary": "#000000",
			"neutralDark": "#151515",
			"black": "#0b0b0b",
			"white": "#ffffff",
			"primaryBackground": "#ffffff",
			"primaryText": "#000000",
			"disabledBackground": "#f4f4f4",
			"disabledText": "#c8c8c8"
    }
}
RestRequest("/_api/thememanager/UpdateTenantTheme", {name:"Sounders Rave Green", themeJson: JSON.stringify(pal)});
```

## See also

* [SharePoint site theming overview](sharepoint-site-theming-overview.md)
* [SharePoint site theming: JSON schema](sharepoint-site-theming-json-schema.md)
* [SharePoint site theming: PowerShell cmdlets](sharepoint-site-theming-powershell.md)
* [SharePoint site theming: CSOM API](sharepoint-site-theming-csom.md)


