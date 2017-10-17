# Work with sites in a Multi-Geo environment

> **Important:** OneDrive and SharePoint Online Multi-Geo is currently in preview and is subject to change.

SharePoint sites span the default and satellite geo locations of a Multi-Geo tenant. When your custom solution needs to work with SharePoint sites, and when you deploy applications, it's important to be aware of the geo locations in your Multi-Geo tenant. 

## Deploying applications to Multi-Geo SharePoint tenants
When you're deploying applications, such as SharePoint Add-ins or SharePoint client-side web parts based on the SharePoint Framework, you need to take in account that applications are deployed at the geo location level. When you deploy an application to the default geo location, that application will not be available in the satellite geo locations.

We recommend that you deploy and update your enterprise applications in all locations. This will ensure that the application is available to all users.


## Enumerating site collections
To enumerate all tenant site collections, use the [CSOM GetSitePropertiesFromSharePointByFilters method](https://msdn.microsoft.com/en-us/library/microsoft.online.sharepoint.tenantadministration.tenant.getsitepropertiesfromsharepointbyfilters.aspx) on a `Tenant` object instance. Because each geo location has a tenant admin center,  you'll need to enumerate site collections per geo location and concatenate the results to get a single tenant-wide list of site collections.

To perform a tenant-wide site enumeration:

- [Find all geo locations](multigeo-discovery.md) and their associated tenant admin site URLs.
- Create a loop that iterates over the geo locations and creates a `Tenant` object with the geo location's admin site URL.
	- Use the `GetSitePropertiesFromSharePointByFilters` method call on the `Tenant` object to get the site collections for that geo location.
	- Append the site collections to a list.
- Return the list of site collections.

To learn more, see the [MultiGeo.SiteEnumeration](https://github.com/SharePoint/PnP/tree/dev/Samples/MultiGeo.SiteEnumeration) sample.

>**Note:** For more information about permissions and how to configure your application, see [Set up a Multi-Geo sample application](multigeo-sampleapplicationsetup.md).

## Performing tenant-level operations
The `Tenant` object is also used to configure tenant-level settings, such as CDN settings, and tenant-level site settings, such as the **site geo location restriction**. To perform tenant-level operations:

- [Find all geo locations](multigeo-discovery.md) and their associated tenant admin site URLs.
- To update tenant-level settings, iterate over the geo locations and make the change per geo location.
- To update tenant-level site settings: 
	- Use the `GeoLocation` property of the `Site` object to get the site's geo location 
	- Use the `GetSitePropertiesByUrl` tenant method to get the site, make changes, and call `Update` on the retrieved `SiteProperties` object.

For more details about how to get a site using the `GetSitePropertiesByUrl` method and then restrict the site from being moved by setting the `RestrictedToRegion` property, see the [MultiGeo.RestrictSiteToGeoLocation](https://github.com/SharePoint/PnP/tree/dev/Samples/MultiGeo.RestrictSiteToGeoLocation) sample. 


