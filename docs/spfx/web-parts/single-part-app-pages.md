---
title: Using single part app pages in SharePoint Online
description: Using single part app pages in SharePoint Online
ms.date: 11/08/2018
ms.prod: sharepoint
---

# Using single part app pages in SharePoint Online

Single part app pages provides a capability to host SharePoint Framework web parts or Teams applications in SharePoint Online with locked layout. End users cannot modify or configure the page which is using Single Part App Page layout.

> [!IMPORTANT]
> This feature is currently in preview and is subject to change. It is not currently supported for use in production environments. Your feedback and input around this capability is welcome using the [SharePoint Dev Docs issue list](https://github.com/SharePoint/sp-dev-docs/issues).

App pages have following characterers:

* Single Part App Pages cannot be edited by end users using browser
* Currently supports hosting only single web part or Microsoft Teams application
* Page layout can only be changed programatically from normal page layout to a Single Page App Page
* End-users cannot parametrize exposed web part or Teams application

## How to use the Single Part App page in your tenant?

You will need to perform following steps to enable Signle Part App Page layout in your SharePoint site. 

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