---
title: Search in a Multi-Geo SharePoint tenant
ms.date: 11/03/2017
---
# Search in a Multi-Geo SharePoint tenant

In a Multi-Geo SharePoint tenant, each geo location has its own search index, as well as its own independent search center. When a user searches, the query is fanned out to all the indexes, and the returned results are merged.

For example, a user in one geo location can search for content stored in another geo location, or for content on a SharePoint site that’s restricted to a different geo location. If the user has access to this content, search will show the result. 

By default, when you configure a search center, the search center uses the following URL pattern.

```
https://<tenanturl>.sharepoint.com/sites/search
```

In the scenario shown in the following image, a Multi-Geo tenant has three geo locations, each with a geo location-specific search URL.

|**Geo location**|**Search URL**|
|:---------------|:-------------|
|North America (default location)|https://contoso.sharepoint.com/search|
|Europe (satellite location)|https://contosoeur.sharepoint.com/search|
|Asia (satellite location)|https://contosoapc.sharepoint.com/search|


![World map showing geo locations in North America, Europe, and Asia with tenant-specific search site URLs](media/multigeo/multigeosearch_intro.png)

## Working with search programmatically in a Multi-Geo tenant
[Learn how your applications can perform Multi-Geo searches](https://docs.microsoft.com/en-us/office365/enterprise/configure-search-for-multi-geo#get-custom-search-applications-to-show-results-from-all-or-some-geo-locations)


## See also

- [How does search work in a Multi-Geo environment](https://docs.microsoft.com/en-us/office365/enterprise/configure-search-for-multi-geo#how-does-search-work-in-a-multi-geo-environment)

