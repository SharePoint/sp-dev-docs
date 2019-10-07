---
title: Work with sites in a Multi-Geo environment
description: When your custom solution needs to work with SharePoint sites, and when you deploy applications, it's important to be aware of the geo locations in your Multi-Geo tenant. 
ms.date: 6/18/2019
localization_priority: Normal
---

# Work with sites in a Multi-Geo environment

SharePoint sites span the default and satellite geo locations of a Multi-Geo tenant. When your custom solution needs to work with SharePoint sites, and when you deploy applications, it's important to be aware of the geo locations in your Multi-Geo tenant. 

## Deploy applications to Multi-Geo tenants

When you're deploying applications, such as SharePoint Add-ins or SharePoint client-side web parts based on the SharePoint Framework, you need to take into account that applications are deployed at the geo location level. 

When you deploy an application to the default geo location, that application is not available in the satellite geo locations. For more information, see [Manage apps and add-ins in a Multi-Geo tenant](multigeo-apps.md).

We recommend that you deploy and update your enterprise applications in all locations. This ensures that the application is available to all users.

## Enumerate site collections

To enumerate all tenant site collections, use the [CSOM GetSitePropertiesFromSharePointByFilters method](https://msdn.microsoft.com/en-us/library/microsoft.online.sharepoint.tenantadministration.tenant.getsitepropertiesfromsharepointbyfilters.aspx) on a `Tenant` object instance. Because each geo location has a tenant admin center,  you must enumerate site collections per geo location and concatenate the results to get a single tenant-wide list of site collections.

To perform a tenant-wide site enumeration:

- [Find all geo locations](multigeo-discovery.md) and their associated tenant admin site URLs.
- Create a loop that iterates over the geo locations and creates a `Tenant` object with the geo location's admin site URL.
	- Use the `GetSitePropertiesFromSharePointByFilters` method call on the `Tenant` object to get the site collections for that geo location.
	- Append the site collections to a list.
- Return the list of site collections.

For more information, see the [MultiGeo.SiteEnumeration](https://github.com/SharePoint/PnP/tree/dev/Samples/MultiGeo.SiteEnumeration) sample.

For more information about permissions and how to configure your application, see [Set up a Multi-Geo sample application](multigeo-sampleapplicationsetup.md).

## Perform tenant-level operations

The `Tenant` object is also used to configure tenant-level settings, such as CDN settings, and tenant-level site settings, such as the **site geo location restriction**. To perform tenant-level operations:

- [Find all geo locations](multigeo-discovery.md) and their associated tenant admin site URLs.
- To update tenant-level settings, iterate over the geo locations and make the change per geo location.
- To update tenant-level site settings: 
	- Use the `GeoLocation` property of the `Site` object to get the site's geo location.
	- Use the `GetSitePropertiesByUrl` tenant method to get the site, make changes, and call `Update` on the retrieved `SiteProperties` object.

For more information about how to get a site by using the `GetSitePropertiesByUrl` method and then restrict the site from being moved by setting the `RestrictedToRegion` property, see the [MultiGeo.RestrictSiteToGeoLocation](https://github.com/SharePoint/PnP/tree/dev/Samples/MultiGeo.RestrictSiteToGeoLocation) sample. 

## Identify sites by storing the site ID

In a Multi-Geo tenant, sites can be moved between geo locations, which implies that the URL of that site will change, so we don't recommend storing the site URL as a unique key to identify a site. It's better to store the site ID because that doesn't change, regardless of the geo location in which the site is hosted. 


## See also

- [OneDrive and SharePoint Online Multi-Geo](multigeo-introduction.md)

