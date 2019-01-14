---
title: Cross-site publishing in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 33f49e69-c1d3-4a6e-8887-5df683cba022
localization_priority: Normal
---


# Cross-site publishing in SharePoint

SharePoint introduces a cross-site publishing feature that enables you to reuse content across multiple site collections. It uses built-in search capabilities to enable publishing scenarios and architectures. For the first time, you can design sites that cross SharePoint farms—enabling your sites to span the boundary between intranets and the Internet.
  
    
    

Consider a site with one authoring site collection that feeds multiple publishing site collections, with different domains, all crawled by public search engines and optimized for search engine optimization (SEO). Cross-site publishing enables this scenario and others like it, without requiring you to use content deployment.
Cross-site publishing was designed with some common scenarios in mind, including:
  
    
    


- Share an item list or a page library as a publishing catalog
    
  
- Consume a catalog from search
    
  
- Combine cross-site publishing with the variations feature to enable authoring multilingual sites from a common authoring site collection
    
  

## Catalogs
<a name="SP15_CrossSitePublising_Catalog"> </a>

Catalogs, introduced in SharePoint, include a list or library that is shared out to search for consumption on publishing sites. Catalogs enable content to be published across site collections—the cross-site publishing features depend on catalogs. You can use catalogs to really reuse content across your sites and across the boundary between your intranet sites, extranet sites, and Internet sites. For predefined search queries, catalogs are flagged in search. You can surface content stored in catalogs across site collections by using the  [Content Search web part in SharePoint](content-search-web-part-in-sharepoint.md).
  
    
    

## When should I use cross-site publishing?
<a name="SP15_CrossSitePublising_WhenShouldIUseCrossSitePublishing"> </a>

There are some cases where cross-site publishing is not efficient or appropriate. Whether you have external data sources and how you connect to them, variations, site type, search database implementation, and use of the product catalog are all factors that should influence your decision. Table 1 provides more information about these design considerations.
  
    
    

**Table 1. Design considerations for cross-site publishing**


|**Design Consideration**|**Description**|
|:-----|:-----|
|**Lag time** <br/> |If the delay between the time an author publishes a page and when it shows up on the site is too long for someone who depends on it, you may want to consider using content deployment instead.  <br/> |
|**Search database implementation** <br/> |If you connect your search database to an external data source and you use an external (non-SharePoint) connector, you can't use cross-site publishing. If you use business connection services (BCS), you can use cross-site publishing.  <br/> Using cross-site publishing with the search database makes sense in some cases but not others. You should not use cross-site publishing to publish from a source site directly to the Internet in a way that does not include your search database in the planning or custom code implementation.  <br/> |
|**Variations implementation** <br/> |If you are implementing a basic variations site that makes a pages library, document library, and general lists available in a few languages, cross-site publishing makes sense. The same is true if you choose to implement managed navigation or structured navigation on a variations site.  <br/> Cross-site publishing works for some architectures but not others. For example, you can use cross-site publishing to publish content from a variations **SPSite** to a publishing site with variations enabled if the source **SPSite** is not consuming data from another variations site or site collection. <br/> |
|**Catalog implementation** <br/> |Whether you implement the product catalog into your site architecture and how you implement it may affect whether cross-site publishing is the most effective or appropriate choice. If you are using the product catalog to support a multilingual variations site configuration and are publishing to an Internet site, you can implement cross-site publishing.  <br/> |
|**Managed navigation** <br/> |Cross-site publishing works with most implementations of managed navigation and the term store. In some implementations, navigation metadata transfer may not work as expected. For example, when one variations site depends on metadata from another variations site to drive site navigation, and you use cross-site publishing to publish content to the target site, navigation metadata transfer may not work as expected.  <br/> |
   

## How can I set up a catalog?
<a name="SP15_CrossSitePublising_WhenShouldIUseCrossSitePublishing"> </a>

Category pages and catalog item pages are page layouts that you can use to show structured catalog content consistently across a site. SharePoint enables you to create and customize page layouts for SharePoint and above. For more information, see  [Customize page layouts for a catalog-based site in SharePoint](https://msdn.microsoft.com/en-us/library/office/dn144674.aspx 
).
  
    
    

## Cross-site publishing APIs
<a name="SP15_CrossSitePublising_CrossSitePublishingAPIs"> </a>

SharePoint introduces classes that you can use to support cross-site publishing implementation in your code. These APIs are available in the .NET server publishing library. Use them to customize how SharePoint shares lists as catalogs for content reuse or consumes a catalog from search. You can use the members of the following classes in custom code to support cross-site publishing tasks:
  
    
    

- Use the **PublishingCatalogUtility** class to retrieve a list of available catalogs, get information about catalogs and their statuses, get information about lists and libraries that can be connected to catalogs, and start or stop sharing catalogs.
    
    
    


```cs
  
/// Retrieve available catalogs.
public static List<CatalogConnectionSettings> GetPublishingCatalogs(SPSite site, int startRow, int numberOfRows, string filterText, out int totalNumberOfCatalogs)
```


    
    


```cs
  
///Get catalog information that is saved for a list.
public static bool GetCatalogConfiguration(SPList list, out CatalogShareSettings catalogSettings, out string selectedTaxonomyField)
```


    
    


```cs
  
///Stop sharing a list or library as a publishing catalog for cross-publishing content reuse.
public static void UnPublishCatalog(SPList list)
```

- Use the **CatalogCollectionManager** class to consume catalogs from search. Learn about the connection that a catalog has to search, and get information about it. Add or remove a catalog from the internal collection of catalogs, and queue an operation to queue up a connection that is configured to rewrite URLs when the **Update** method is called.
    
    
    


```cs
  
/// Add catalog or site source into the internal CatalogInfo collection, but the source is not persisted into the property bag.
public void AddCatalogConnection(CatalogConnectionSettings catalogInfo)
```


    
    


```cs
  
/// Queues an Add operation to add a connection configured to rewrite URLs. The connection is added to the store when the Update method is called.
public void AddCatalogConnection(CatalogConnectionSettings catalogInfo, 
string[] orderedPropertiesForUrlRewrite,
string webUrl, 
string catalogTaxonomyManagedProperty,
bool isManualRule)
```


    
    


```cs
  
/// Update existing catalog/site source in the internal CatalogInfo collection. Edits are not committed until the Update method is called.
public void UpdateCatalogConnection(CatalogConnectionSettings catalogInfo)
```


    
    


```cs
  
/// Remove a catalog or site source. Deletion is not committed until the Update method is called.
public void DeleteCatalogConnection(string catalogPath)
```


    
    


```cs
  
/// Determine whether a connection exists to this source from the site.
public bool Contains(string catalogPath)
```


    
    


```cs
  
/// Get the settings for a catalog connected to this site.
public CatalogConnectionSettings GetCatalogConnectionSettings(string catalogPath)
```


## See also
<a name="bk_addresources"> </a>


-  [Publish SharePoint sites](publish-sharepoint-sites.md)
    
  

