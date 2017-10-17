# Search in a Multi-Geo SharePoint tenant

> **Important:** OneDrive and SharePoint Online Multi-Geo is currently in preview and is subject to change.

In a Multi-Geo SharePoint tenant, each geo location has its own search index, as well as its own independent search center. By default, when you configure a search center, the search center uses the following URL pattern.

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

From an end user point of view, search is scoped to the current geo location. When users perform searches from a site hosted in North America, they will only see results from the North America geo location. Searches from a site hosted in Europe will return results from sites in the Europe geo location.

> **Note:** In the future, search will be Multi-Geo aware. A search query run from any location within the tenant will search all geo locations within the tenant and return combined results.

## Working with search programmatically in a Multi-Geo tenant
Working with search programmatically is similar to the end user search experience. If you perform a search query, you'll only get results for the geo location in which you run the query. Your applications can, however, perform Multi-Geo tenant searches. To do this, iterate over the geo locations in your tenant, issue the same search query in each geo location, and then concatenate the results.

This approach might be sufficient for in some scenarios (for example, searches for sites of a given type). However, in some cases, you want the search results to be ranked according to relevancy. You can't do this when you have multiple result sets. If your scenario requires search ranking, you will need to wait until a Multi-Geo search experience is available.


## See also

- [Manage the Search Center in SharePoint Online](https://support.office.com/en-us/article/Manage-the-Search-Center-in-SharePoint-Online-174d36e0-2f85-461a-ad9a-8b3f434a4213?ui=en-US&rs=en-US&ad=US)
- [Overview of search in SharePoint Online](https://support.office.com/en-us/article/Overview-of-search-in-SharePoint-Online-479cfd6b-900b-46aa-b497-c13787771d3f?ui=en-US&rs=en-US&ad=US)
