---
title: Enable the Microsoft 365 CDN
description: Enable the Microsoft 365 CDN on your Microsoft 365 Tenant
ms.date: 10/26/2020
ms.prod: sharepoint
localization_priority: Normal
---
# Enable the Microsoft 365 CDN

You can use the built-in Microsoft 365 content delivery network (CDN) to host static assets to provide better performance for your SharePoint Online pages. The Microsoft 365 CDN improves performance by caching static assets closer to the browsers requesting them, which helps to speed up downloads and reduce latency. Also, the Microsoft 365 CDN uses the HTTP/2 protocol for improved compression and HTTP pipelining. The Microsoft 365 CDN service is included as part of your SharePoint Online subscription.

> [!NOTE]
> For more information, see [Use the Office 365 Content Delivery Network (CDN) with SharePoint Online](/office365/enterprise/use-office-365-cdn-with-spo)

In this article, you'll learn how to enable the Microsoft 365 CDN on your SharePoint Online tenant in Microsoft 365.

## Options for managing the Microsoft 365 CDN

The Microsoft 365 CDN is managed using the command line and you can use PowerShell cmdlets or the cross-platform CLI for Microsoft 365 available through SharePoint PnP Community channels.

### Microsoft SharePoint Online Management Shell

The Microsoft 365 CDN is managed by tenant administrators by using the **Microsoft SharePoint Online Management Shell**, a PowerShell module from Microsoft used to manage your SharePoint Online subscription in Office 365.

Before using any of the cmdlets in the Microsoft SharePoint Online Management Shell module, you must first connect to SharePoint Online using the **Connect-SPOService** cmdlet. All CDN settings are managed using the ***-SPOTenantCdn** cmdlets.

Learn more here: [Microsoft SharePoint Online Management Shell](https://technet.microsoft.com/library/fp161372.aspx)

### CLI for Microsoft 365

The CLI for Microsoft 365 is a cross-platform command-line interface that can be used on any platform, including Windows, macOS, and Linux. The CLI implements the same calls made by the SharePoint Online Management Shell without using PowerShell.

Before using any of the commands in the CLI for Microsoft 365, you must first connect to Microsoft 365 tenant using the **m365 login** command.

Learn more here: [CLI for Microsoft 365](https://pnp.github.io/cli-microsoft365?utm_source=msft_docs&utm_medium=page&utm_campaign=Use+SharePoint+Online+tenant+properties)

[!INCLUDE [pnp-o365cli](../../includes/snippets/open-source/pnp-o365cli.md)]

## Get the Microsoft 365 CDN status

Get the current status of public CDN settings from the tenant level by executing the following commands one-by-one:

# [Microsoft SPO Management Shell](#tab/msposh)

```powershell
Get-SPOTenantCdnEnabled -CdnType Public
Get-SPOTenantCdnOrigins -CdnType Public
Get-SPOTenantCdnPolicies -CdnType Public
```

> Refer to the [Microsoft SPO Management Shell](/powershell/module/sharepoint-online) for details on these cmdlets.

# [CLI for Microsoft 365](#tab/o365cli)

```console
m365 spo cdn get --type Public
```

> Refer to the [CLI for Microsoft 365 documentation](https://pnp.github.io/cli-microsoft365/cmd/spo/cdn/cdn-get/?utm_source=msft_docs&utm_medium=page&utm_campaign=Enable+the+Microsoft+365+CDN) for details on this command.

---

## Enable public CDN in the tenant

Once you're connected to your Microsoft 365 tenant, use the following command to enable the Microsoft 365 CDN on your tenant:

# [Microsoft SPO Management Shell](#tab/msposh)

```powershell
Set-SPOTenantCdnEnabled -CdnType Public
```

> Refer to the [Microsoft SPO Management Shell](/powershell/module/sharepoint-online) for details on these cmdlets.

# [CLI for Microsoft 365](#tab/o365cli)

```console
m365 spo cdn set --type Public --enabled true
```

> Refer to the [CLI for Microsoft 365 documentation](https://pnp.github.io/cli-microsoft365/cmd/spo/cdn/cdn-set/?utm_source=msft_docs&utm_medium=page&utm_campaign=Enable+the+Microsoft+365+CDN) for details on this command.

---

Public CDN has now been enabled in the tenant by using the default file type configuration allowed. This means that the following file type extensions are supported: CSS, EOT, GIF, ICO, JPEG, JPG, JS, MAP, PNG, SVG, TTF, and WOFF.

## Enable a custom library to be backed by the Microsoft 365 CDN

You can add additional document libraries that will be managed by the Microsoft 365 CDN and the ones included by default.

Open up a browser and move to a site collection where you'd like to host your CDN library. This could be any site collection in your tenant.

In this tutorial, we create a specific document library named **CDN** to act as your CDN library, but you can also use a specific folder in any existing document library as the CDN endpoint.

### Add a new CDN origin

In this case, we're setting the origin as **\*/cdn**, which means that any relative folder with the name of **cdn** acts as a CDN origin.

# [Microsoft SPO Management Shell](#tab/msposh)

```powershell
Add-SPOTenantCdnOrigin -CdnType Public -OriginUrl */cdn
```

> Refer to the [Microsoft SPO Management Shell](/powershell/module/sharepoint-online) for details on these cmdlets.

# [CLI for Microsoft 365](#tab/o365cli)

```console
m365 spo cdn origin add --origin */CDN
```

> Refer to the [CLI for Microsoft 365 documentation](https://pnp.github.io/cli-microsoft365/cmd/spo/cdn/cdn-origin-add/?utm_source=msft_docs&utm_medium=page&utm_campaign=Enable+the+Microsoft+365+CDN) for details on this command.

---

### Verify the origin was added

Use the following command to verify the origin was added.

# [Microsoft SPO Management Shell](#tab/msposh)

```powershell
Get-SPOTenantCdnOrigins -CdnType Public
```

> Refer to the [Microsoft SPO Management Shell](/powershell/module/sharepoint-online) for details on these cmdlets.

# [CLI for Microsoft 365](#tab/o365cli)

```console
m365 spo cdn get --type Public
```

> Refer to the [CLI for Microsoft 365 documentation](https://pnp.github.io/cli-microsoft365/cmd/spo/cdn/cdn-get/?utm_source=msft_docs&utm_medium=page&utm_campaign=Enable+the+Microsoft+365+CDN) for details on this command.

---

> [!NOTE]
> Final configuration of the origin takes approximately 15 minutes, so we can continue provisioning the extension, which is hosted from the origin after deployment is completed.

The following image displays the results from running the Microsoft SPO Management Shell command:

> [!NOTE]
> You may have more origins listed in your Microsoft 365 Tenant. The key point to this image is to note the origin you added above: **\*/CDN**.

![List of public origins in tenant](../images/ext-app-cdn-origins-pending.png)

At this point, you've configured your Microsoft 365 CDN!
