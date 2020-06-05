---
title: Using single part app pages in SharePoint Online
description: Using single part app pages in SharePoint Online
ms.date: 06/05/2020
ms.prod: sharepoint
localization_priority: Priority
---

# Using single part app pages in SharePoint Online

Single part app pages provides a capability to host SharePoint Framework web parts or Teams applications in SharePoint Online with a locked layout. End users cannot modify or configure the page which is using the Single Part App Page layout.

App pages have following characteristics:

* Single Part App Pages cannot be edited by end users using a browser
* Currently supports hosting only single web part or Microsoft Teams application
* End users can create new app pages using the New--> Page experience available in modern sites.
* Developers can change page layout programatically from normal page layout to a Single Page App Page
* There's no New experience in a Single Page App Page. End users can create new Article pages or Single Page App pages by using the New/page experience present in the ribbon of any modern article pages.

> [!Video https://www.youtube.com/embed/8BATz6LD6tA]

App pages are exposed as an option in the modern page creation capability when you chose the used page layout for your page. All web parts which have been configured to be available also as an app page are available on the **Create page** capability.

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
  // https://support.office.com/article/Turn-scripting-capabilities-on-or-off-1f2c515f-5d7e-448a-9fd7-835da935584f
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

## How to provision Single Part App page in your tenant

As a developer, the two most common way to provision Single Part App pages is o use PnP PowerShell or Office 365 ClI

### Changing page layout using PnP PowerShell

You can use [PnP PowerShell](https://docs.microsoft.com/powershell/sharepoint/sharepoint-pnp/sharepoint-pnp-cmdlets?view=sharepoint-ps) to update the page layout for the existing page with following script.

[!INCLUDE [pnp-powershell](../../../includes/snippets/open-source/pnp-powershell.md)]

You will need to adjust tenant and page name based on your environment.

```powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com/sites/marketing
Set-PnPClientSidePage -Identity "Page" -LayoutType SingleWebPartAppPage
```

### Changing page layout using Office 365 CLI

You can also use [Office 365 CLI](https://pnp.github.io/office365-cli/) to update the page layout for the existing page with following script.

> [!NOTE]
> Office 365 CLI is an open-source tool with active community providing support for it. There is no SLA for the open-source tool support from Microsoft.
[!INCLUDE [pnp-o365cli](../../../includes/snippets/open-source/pnp-o365cli.md)]

```shell
o365 spo login https://contoso.sharepoint.com/sites/marketing
o365 spo listitem set --webUrl https://contoso.sharepoint.com/sites/marketing --listTitle 'Site Pages' --id 3 --PageLayoutType SingleWebPartAppPage
```

You will need to adjust tenant and page name based on your environment.
