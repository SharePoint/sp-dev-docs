---
title: Provision classic team sites in a Multi-Geo environment
description: When your custom development (script, app, console application, node.js app) needs to provision sites, it's important to be aware of the geo locations in your Multi-Geo tenant. 
ms.date: 4/27/2018
---

# Provision classic team sites in a Multi-Geo environment

> [!IMPORTANT] 
> OneDrive for Business Multi-Geo is available, SharePoint Online Multi-Geo is currently in preview and is subject to change.

SharePoint sites can be spread across the default and satellite geo locations of a Multi-Geo tenant. When your custom development (script, app, console application, node.js app, and so on) needs to provision sites, it's important to be aware of the geo locations in your Multi-Geo tenant. 

When provisioning classic team site collections (for example, STS#0-based site collections), you need to use the [CSOM CreateSite method](https://msdn.microsoft.com/en-us/library/microsoft.online.sharepoint.tenantadministration.tenant.createsite(v=office.15).aspx) call as explained and shown in following articles and samples:

- [Site provisioning in the SharePoint Add-in model](site-provisioning-sharepoint-add-in.md)
- [Provision sites in batches with the add-in model](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Batch)
- [Create site collection or subsite using the PnP Sites Core library](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.CreateSite)

The `CreateSite` method call needs to be executed on an instantiated `Tenant` object, and a tenant object requires you to specify an SPO Admin center URL to be created. 

To create a classic team site:

1. Determine the geo location that needs to host the site collection (for example, the European satellite).

2. Use the guidance explained in the article [Discover a Multi-Geo tenant configuration](multigeo-discovery.md) to find the tenant admin site and SharePoint root URLs for the geo location.

3. Create a `Tenant` object by using the discovered admin site URL.

4. Use the `CreateSite` method call to create the site collection.

The following sample shows how to provision a site collection in the European geo location.

```csharp
// Use the Multi-Geo discovery guidance to discover the tenant admin and root site URLs for this geo location.
string tenantAdminSiteForMyGeoLocation = "https://contoso-europe-admin.sharepoint.com";
string targetUrl = "https://contoso-europe.sharepoint.com/sites/demosite";
string owner = "UserA@contoso.onmicrosoft.com";

using (var ctx = new ClientRuntimeContext(tenantAdminSiteForMyGeoLocation))
{
    ctx.Credentials = adminCredentials;
    
    var tenant = new Tenant(ctx);
    
    //Create new site.
    var newsite = new SiteCreationProperties()
    {
        Url = targetUrl,
        Owner = owner,
        Template = "STS#0",
        Title = title,
        StorageMaximumLevel = 1000,
        StorageWarningLevel = 500,
        TimeZoneId = 7,
    };
    
    var spoOperation = tenant.CreateSite(newsite);
    
    ctx.Load(spoOperation);
    ctx.ExecuteQuery();
    
    while (!spoOperation.IsComplete)
    {
        Thread.Sleep(2000);
        ctx.Load(spoOperation);
        ctx.ExecuteQuery();
        Console.WriteLine("Site creation status: " + (spoOperation.IsComplete ? "waiting" : "complete"));
    }
}
```

> [!NOTE] 
> To learn more about the needed permissions and how to configure your applications, see [Set up a Multi-Geo sample application](multigeo-sampleapplicationsetup.md).

## See also

- [Provisioning "modern" team sites programmatically](modern-experience-customizations-provisioning-sites.md)
- [Site provisioning in the SharePoint Add-in model](site-provisioning-sharepoint-add-in.md)
- [OneDrive and SharePoint Online Multi-Geo Preview](multigeo-introduction.md)