---
title: Using single part app pages in SharePoint Online
description: Using single part app pages in SharePoint Online
ms.date: 06/13/2022
ms.localizationpriority: high
---

# Using single part app pages in SharePoint Online

Single part app pages provide a capability to host SharePoint Framework web parts or Microsoft Teams applications in SharePoint Online with a locked layout. End users cannot modify or configure the page that is using the Single Part App Page layout.

App pages have following characteristics:

- Single Part App Pages cannot be edited by end users using a browser
- Currently supports hosting only single web part or Microsoft Teams application
- End users can create new app pages using the **New** > **Page** experience available in modern sites.
- Developers can change page layout programatically from normal page layout to a Single Page App Page
- There's no New experience in a Single Page App Page. End users can create new Article pages or Single Page App pages by using the New/page experience present in the ribbon of any modern article pages.

> [!Video https://www.youtube.com/embed/8BATz6LD6tA]

App pages are exposed as an option in the modern page creation capability when you chose the used page layout for your page. All web parts that have been configured to be available also as an app page are available on the **Create page** capability.

Web part can be configured to be exposed as an app page. This configuration is done in the web part manifest file by adjusting the `supportedHosts` value. Web part will be exposed as an option in the upcoming app pages picker user interface, if the `supportedHosts` value contains `"SharePointFullPage"` value.

Following web part manifest demonstrates scenario where the web part is included to be in all supported platforms by updating all different values for the `supportedHosts` parameter.

```json
{
  // ...

  "requiresCustomScript": false,
  "supportedHosts": ["SharePointWebPart", "SharePointFullPage", "TeamsTab"],

  "preconfiguredEntries": [{
    // ...
  }]
}
```

## How to provision Single Part App page in your tenant

As a developer, the two most common ways to provision Single Part App pages is to use PnP PowerShell or CLI for Microsoft 365.

You can use [PnP PowerShell](/powershell/sharepoint/sharepoint-pnp/sharepoint-pnp-cmdlets) to update the page layout for the existing page with following script.

[!INCLUDE [pnp-powershell](../../../includes/snippets/open-source/pnp-powershell.md)]

You can also use [CLI for Microsoft 365](https://pnp.github.io/cli-microsoft365/) to update the page layout for the existing page with following script.

[!INCLUDE [pnp-o365cli](../../../includes/snippets/open-source/pnp-o365cli.md)]

# [PnP PowerShell](#tab/pnpposh)

```powershell
Connect-PnPOnline -Url https://contoso.sharepoint.com/sites/marketing
Set-PnPPage -Identity "Page" -LayoutType SingleWebPartAppPage
```

> Refer to the [PnP PowerShell documentation](https://pnp.github.io/powershell/cmdlets/Set-PnPPage.html) for complete details and examples on this cmdlet.

# [CLI for Microsoft 365](#tab/o365cli)

```console
m365 login
m365 spo listitem set --webUrl https://contoso.sharepoint.com/sites/marketing --listTitle "Site Pages" --id 3 --PageLayoutType SingleWebPartAppPage
```

> Refer to the [CLI for Microsoft 365 documentation](https://pnp.github.io/cli-microsoft365) for complete details and examples on this command.

---

You'll need to adjust tenant and page name based on your environment.
