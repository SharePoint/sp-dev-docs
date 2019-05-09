---
title: Using single part app pages in SharePoint Online
description: Using single part app pages in SharePoint Online
ms.date: 03/14/2019
ms.prod: sharepoint
localization_priority: Priority
---

# Using single part app pages in SharePoint Online

Single part app pages provides a capability to host SharePoint Framework web parts or Teams applications in SharePoint Online with a locked layout. End users cannot modify or configure the page which is using the Single Part App Page layout.

App pages have following characteristics:

* Single Part App Pages cannot be edited by end users using a browser
* Currently supports hosting only single web part or Microsoft Teams application
* Page layout can only be changed programatically from normal page layout to a Single Page App Page
* End-users cannot parameterize exposed web part or Teams application

<br/>

> [!Video https://www.youtube.com/embed/8BATz6LD6tA]

<br/>

> [!NOTE]
> App pages are exposed as an option in the modern page creation capability. This feature is currently avaialble only in targeted release tenants, but will be released fully later on Spring 2019. You can however enable app pages starting with 1.8 release using the code as demonstrated later in this document.

Web part can be configured to be exposed as an app page. This configuration is performed in the web part manifest file by adjusting the `supportedHosts` value. Web part will be exposed as an option in the upcoming app pages picker user interface, if the `supportedHosts` value contains `"SharePointFullPage"` value.

Following web part manifest demonstrates scenario where the web part is included to be in all supported platforms by updating all different values for the `supportedHosts` parameter.

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx/client-side-web-part-manifest.schema.json",
  "id": "eb7ac2da-d8eb-4118-9f4f-19ce595d3ad3",
  "alias": "AllPlatformsWebPart",
  "componentType": "WebPart",

  // The "*" signifies that the version should be taken from the package.json
  "version": "*",
  "manifestVersion": 2,

  // If true, the component can only be installed on sites where Custom Script is allowed.
  // Components that allow authors to embed arbitrary script code should set this to true.
  // https://support.office.com/en-us/article/Turn-scripting-capabilities-on-or-off-1f2c515f-5d7e-448a-9fd7-835da935584f
  "requiresCustomScript": false,
  "supportedHosts": ["SharePointWebPart", "SharePointFullPage", "TeamsTab"],

  "preconfiguredEntries": [{
    "groupId": "5c03119e-3074-46fd-976b-c60198311f70", // Other
    "group": { "default": "Other" },
    "title": { "default": "All Platforms" },
    "description": { "default": "This web part is visible in all platforms" },
    "officeFabricIconFontName": "Page",
    "properties": {
      "description": "allPlatforms"
    }
  }]
}
``` 

## How to use the Single Part App page in your tenant?

You will need to perform following steps to enable Single Part App Page layout in your SharePoint site. 

1. Create a new page
1. Add a web part on the page and configure that as needed
1. Change the page layout type as `SingleWebPartAppPage`

If you need to further modify the page, you can change the page layout back as as `Article` to enable content editing.

## Changing page layout using JavaScript in browser console

You can change existing page to use Single Page App Page layout by using browser developer tools. You can simply enable the developer tools and execute following code to change an existing page to use a `SingleWebPartAppPage` layout.

You will need to adjust tenant and page name based on your environment.

```js
var siteUrl = 'https://contoso.sharepoint.com/sites/marketing/';
var pageUrl = 'SitePages/page.aspx'

fetch(siteUrl + '_api/contextinfo', {
  method: 'POST',
  headers: {
    accept: 'application/json;odata=nometadata'
  }
})
  .then(function (response) {
    return response.json();
  })
  .then(function (ctx) {
    return fetch(siteUrl + "_api/web/getfilebyurl('" + pageUrl + "')/ListItemAllFields", {
      method: 'POST',
      headers: {
        accept: 'application/json;odata=nometadata',
        'X-HTTP-Method': 'MERGE',
        'IF-MATCH': '*',
        'X-RequestDigest': ctx.FormDigestValue,
        'content-type': 'application/json;odata=nometadata',
      },
      body: JSON.stringify({
        PageLayoutType: "SingleWebPartAppPage"
      })
    })
  })
  .then(function(res) {
    console.log(res.ok ? 'DONE' : 'Error: ' + res.statusText);
  });
```

## Changing page layout using PnP PowerShell

You can also use [PnP PowerShell](https://docs.microsoft.com/en-us/powershell/sharepoint/sharepoint-pnp/sharepoint-pnp-cmdlets?view=sharepoint-ps) to update the page layout for the existing page with following script.

> [!NOTE]
> PnP PowerShell is an open-source tool with active community providing support for it. There is no SLA for the open-source tool support from Microsoft.

You will need to adjust tenant and page name based on your environment.

```ps
Connect-PnPOnline -Url https://contoso.sharepoint.com/sites/marketing
$item2 = Get-PnPListItem -List "Site Pages" -Query "<View><Query><Where><Eq><FieldRef Name='FileLeafRef'/><Value Type='Text'>page.aspx</Value></Eq></Where></Query></View>"
$item2["PageLayoutType"] = "SingleWebPartAppPage"
$item2.Update()
Invoke-PnPQuery
```

## Changing page layout using Office 365 CLI

You can also use [Office 365 CLI](https://pnp.github.io/office365-cli/) to update the page layout for the existing page with following script.

> [!NOTE]
> Office 365 CLI is an open-source tool with active community providing support for it. There is no SLA for the open-source tool support from Microsoft.

```
o365 spo login https://contoso.sharepoint.com/sites/marketing
o365 spo listitem set --webUrl https://contoso.sharepoint.com/sites/marketing --listTitle 'Site Pages' --id 3 --PageLayoutType SingleWebPartAppPage
```

You will need to adjust tenant and page name based on your environment.
