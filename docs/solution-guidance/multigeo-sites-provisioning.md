---
title: Working with sites in a Multi-Geo environment
ms.date: 11/03/2017
---
# Working with sites in a Multi-Geo environment

> **Important:** OneDrive and SharePoint Online Multi-Geo is currently in preview and is subject to change.

SharePoint sites can be spread across the default and satellite geo locations of a Multi-Geo tenant. When your custom development (script, app, console application, node.js app,...) needs to provision sites then it's important to be aware of the geo locations in your Multi-Geo tenant. 

### Provisioning classic team sites
When provisioning classic team site collections (e.g. STS#0 based site collections) one has to use the [CSOM `CreateSite` method](https://msdn.microsoft.com/en-us/library/microsoft.online.sharepoint.tenantadministration.tenant.createsite(v=office.15).aspx) call as explained and shown in following articles and samples:
- [Site provisioning in the SharePoint add-in model](site-provisioning-sharepoint-add-in.md)
- [Provision sites in batches with the add-in model](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Batch)
- [Create site collection or sub site using the PnP Sites Core library](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.CreateSite)

The `CreateSite` method call needs to be executed on an instantiated `Tenant` object...and a tenant object requires you to specify an SPO Admin center URL to be created. So to create a classic team site you follow these steps:
- First determine the geo location that needs to host the site collection (e.g. the European satellite)
- Use the guidance explained in the [Multi-Geo Discovery](multigeo-discovery.md) article to find the tenant admin site and SharePoint root url's for the geo location
- Create a `Tenant` object using the found admin site url
- Use the `CreateSite` method call to create the site collection

Below sample shows how to provision a site collection in the European geo location:

```C#
// Use the Multi-Geo discovery guidance to discover the tenant admin and root site urls for this geo location
string tenantAdminSiteForMyGeoLocation = "https://contoso-europe-admin.sharepoint.com";
string targetUrl = "https://contoso-europe.sharepoint.com/sites/demosite";
string owner = "UserA@contoso.onmicrosoft.com";

using (var ctx = new ClientRuntimeContext(tenantAdminSiteForMyGeoLocation))
{
    ctx.Credentials = adminCredentials;
    
    var tenant = new Tenant(ctx);
    
    //Create new site
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
> If you want to learn more about the needed permissions and how to configure your applications then please checkout the [Setting up the Multi-Geo sample applications](multigeo-sampleapplicationsetup.md) article.

## Resources
Below list of resources are useful when you're learning more about working with sites:
- [Provisioning modern team sites](https://msdn.microsoft.com/en-us/pnp_articles/modern-experience-customizations-provisioning-sites)
- [Site provisioning in the SharePoint add-in model](site-provisioning-sharepoint-add-in.md)
- [Provision sites in batches with the add-in model](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.Batch)
- [Create site collection or sub site using the PnP Sites Core library](https://github.com/SharePoint/PnP/tree/master/Samples/Provisioning.CreateSite)