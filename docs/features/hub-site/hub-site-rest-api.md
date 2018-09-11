---
title: Hub site REST API
description: Overview of hub site REST API for creating hub sites and associating existing sites with hub sites.
ms.date: 4/20/2018
---

# Hub site REST API

You can use the SharePoint REST interface to register sites as hub sites, associate existing sites with hub sites, and obtain or update information about hub sites. 

The SharePoint Online (and SharePoint 2016 and later on-premises) REST service supports combining multiple requests into a single call to the service by using the OData $batch query option. 

For details and links to code samples, see [Make batch requests with the REST APIs](../../sp-add-ins/make-batch-requests-with-the-rest-apis.md).

## Prerequisites

Before you get started, make sure that you're familiar with the following:

- [Get to know the SharePoint REST service](../../sp-add-ins/get-to-know-the-sharepoint-rest-service.md) 
- [Complete basic operations using SharePoint REST endpoints](../../sp-add-ins/complete-basic-operations-using-sharepoint-rest-endpoints.md)

## REST commands

The following REST commands are available for working with site designs and site scripts:

- [SP.HubSites.CanCreate](REST-cancreate-method.md) &ndash; Returns whether the current user can create a hub site. Only tenant admins can create hub sites.
- [GetById](REST-getbyid-method.md) &ndash; Gets or updates information about a hub site.
- [HubSiteData](REST-hubsitedata-method.md) &ndash; Gets hub site data for the current web.
- [HubSites](REST-hubsites-method.md) &ndash; Gets information about all hub sites that the current user can access.
- [JoinHubSite](REST-joinhubsite-method.md) &ndash; Associates a site with an existing hub site.
- [RegisterHubSite](REST-registerhubsite.method.md) &ndash; Registers an existing site as a hub site.
- [SyncHubSiteTheme](REST-synchubsitetheme-method.md) &ndash; Applies any theme updates from the parent hub site.
- [UnRegisterHubSite](REST-unregisterhubsite-method.md) &ndash; Unregisters a hub site so that it is no longer a hub site.
- [SPHubSite object type](rest-sphubsite-type.md) &ndash; Contains data describing a SharePoint hub site.
- [SPHubSiteData object type](rest-sphubsitedata-type.md) &ndash; Contains data describing a SharePoint hub site.

## Scenarios

Some of the following scenario examples are not intuitive from the method name. See each cmdlet article for more details.

### Update a hub site

Call the [GetById](REST-getbyid-method.md) method to update a hub site.

### Disassociate a site from its hub site

To remove, or disassociate a site from a hub site, call [JoinHubSite](REST-joinhubsite-method.md) with the value "00000000-0000-0000-0000-000000000000".

## See also

- [SharePoint hub sites overview](hub-site-overview.md)

