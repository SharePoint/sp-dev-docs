---
title: What's new in SharePoint search for developers
ms.prod: SHAREPOINT
ms.assetid: b8d69685-3612-421e-b011-50b4d580d461
---


# What's new in SharePoint search for developers
Learn about the new features available for developers in Search in SharePoint.
## Search client object model for access to Query object model functionality for online, on-premises, and mobile development
<a name="SPSearchnew_clientOM"> </a>

SharePoint Search includes a client object model (CSOM) that enables access to most of the Query object model functionality for online, on-premises, and mobile development. You can use the Search CSOM to create client applications that run on a machine that does not have SharePoint installed to return SharePoint search results.
  
    
    
The Search CSOM includes a Microsoft .NET Framework managed client object model and JavaScript object model, and it is built on SharePoint. First, client code accesses the SharePoint CSOM. Then, client code accesses the Search CSOM. 
  
    
    
To use the Search .NET Framework managed CSOM, you must get a  [ClientContext](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.ClientContext.aspx) instance (located in the [Microsoft.SharePoint.Client](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.aspx) namespace in the Microsoft.SharePoint.Client.dll). Then, use the object model in the [Microsoft.SharePoint.Client.Search.Query](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Search.Query.aspx) namespace in the Microsoft.Office.Server.Search.Client.dll. For more information about the SharePoint CSOM, see [SharePoint 2010 Client Object Model](http://msdn.microsoft.com/library/8c086b11-2b8b-41ec-82ae-cd4fef0aeac6%28Office.15%29.aspx). For more information about the **ClientContext** object, which is the entry point to the CSOM, see [Client Context as Central Object](http://msdn.microsoft.com/library/6299f0df-ab4c-40e6-b709-ec80271c99b3%28Office.15%29.aspx).
  
    
    
The Search CSOM returns the search results data from the server in JavaScript Object Notation (JSON). The JSON for the search results data contains a  [ResultTableCollection](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Search.Query.ResultTableCollection.aspx) collection composed of [ResultTable](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Search.Query.ResultTable.aspx) objects that represent different result sets.
  
    
    

## SQL Syntax Support Removed
<a name="SP15Searchnew_support"> </a>

Custom search solutions in SharePoint do not support  [SQL syntax](http://msdn.microsoft.com/en-us/library/ee558869). Search in SharePoint supports FQL syntax and KQL syntax for custom search solutions. You cannot use SQL syntax in custom search solutions using any technologies, including the Query server object model, the client object model, and the Search REST service. Custom search solutions that use SQL syntax with the Query server object model and the Query web service that were created in earlier versions of SharePoint Server will not work when you upgrade them to SharePoint. Queries submitted via these applications will return an error. For more information about using FQL syntax and KQL syntax, see  [Keyword Query Language (KQL) syntax reference](keyword-query-language-kql-syntax-reference) and [FAST Query Language (FQL) syntax reference](fast-query-language-fql-syntax-reference).
  
    
    

## Search REST service for remote execution of queries from client applications
<a name="SP15Searchnew_support"> </a>

SharePoint includes a Representational State Transfer (REST) service that enables you to remotely execute queries against the SharePoint Search service from client applications by using any technology that supports REST web requests. The Search REST service exposes two endpoints, **query** and **suggest**, and will support both **GET** and **POST** operations. Results are returned in either XML or JSON format.
  
    
    
The following is the access point for the service:  `http://server/_api/search/`. You can also specify the site in the URL, as follows:  `http://server/site/_api/search/`. The search service returns results from the entire site collection, so the same results are returned for both ways to access the service.
  
    
    
You can also use the URL that references client.svc to access the service, as follows:  `http://server/_vti_bin/client.svc/search/`. However, using  `_api` is the preferred convention.
  
    
    
Use the following access point to access the service metadata: 
  
    
    
 `http://server/_api/$metadata`
  
    
    
For general information about the REST service in SharePoint, see  [Use OData query operations in SharePoint REST requests](http://msdn.microsoft.com/library/d4b5c277-ed50-420c-8a9b-860342284b72%28Office.15%29.aspx).
  
    
    

## SharePoint Search Query web service is deprecated
<a name="SP15Searchnew_support"> </a>

The Query web service (located in the path  `http://server/site/_vti_bin/search.asmx`) is deprecated in SharePoint. If you write new applications, avoid using this deprecated feature and instead use the new Query CSOM or Query REST service. If you modify existing applications, we strongly encourage you to remove any dependency on this feature.
  
    
    

## SharePoint Search Query object model enhancements
<a name="SP15Searchnew_support"> </a>

Query properties provide information about a search query. In SharePoint Search, a property bag was added to the query and result classes to enable user-defined query properties. You can access existing query properties via the property on one of the query classes, as follows: 
  
    
    
 `KeywordQuery.EnableStemming`
  
    
    
Or you can use the property bag, as follows: 
  
    
    
 `KeywordQuery.Properties["EnableStemming"]`
  
    
    
You can access user-defined properties only by using the property bag, as follows: 
  
    
    
 `KeywordQuery.Properties["UserDefinedProperty"]`
  
    
    
SharePoint Search includes query properties in the property bag, including new query properties such as:
  
    
    

- **BypassResultTypes** Specifies whether the search result item type is returned for the query results. Specify **true** to return no result type; otherwise, **false**.
    
  
- **EnableInterleaving** Specifies whether the result sets generated by executing query rule actions to add a result block are mixed with the result set for the original query. Specify **true** to mix the generated result set with the original result set; otherwise, **false**.
    
  
- **EnableQueryRules** Specifies whether query rules are turned on for this query. Specify **true** to enable query rules for the query; otherwise, **false**.
    
  
You can specify any property in the property bag, including user-defined properties, as query rule conditions. You use query rules to customize the search experience for the kinds of queries that are important to your users. When a query meets conditions specified in a query rule, the rule specifies actions to improve the relevance of the associated search results. 
  
    
    

## Keyword query language enhancements
<a name="SP15Searchnew_support"> </a>

SharePoint includes improvements to the Keyword query language, which are described in this section. 
  
    
    

### Improved NEAR operator

In SharePoint Server 2010, the **NEAR** operator implied a maximum token distance of **8** and preserved the ordering of the input tokens. In SharePoint, the **NEAR** operator no longer preserves the ordering of tokens. In addition, the **NEAR** operator now receives an optional parameter that indicates maximum token distance. However, the default value is still **8**. If you must use the previous behavior, use **ONEAR** instead.
  
    
    
The **NEAR** operator can be used in property restriction expressions, as shown in the following example:
  
    
    
 `"acquisition" NEAR "debt"`
  
    
    
This query matches items where the tokens "acquisition" and "debt" appear within the same document, with a maximum token distance of **8** (which is the default value of _n_ if no value is provided). The order of the tokens is not significant for the match.
  
    
    
If you require a smaller token distance, you can specify it as follows:
  
    
    
 `"acquisition" NEAR(n=3) "debt"`
  
    
    
This query matches items where the two tokens "acquisition" and "debt" appear within the same document, with a maximum token distance of **3**. The order of the tokens is not significant for the match.
  
    
    

### New ONEAR operator

The **ONEAR** operator provides ordered near functionality. It receives an optional parameter that indicates maximum token distance; the default value is **8**.
  
    
    
The **ONEAR** operator preserves the order of the input expressions. For unordered proximity, use **NEAR**.
  
    
    
You can use the **ONEAR** operator in property restriction expressions, as shown in the following example:
  
    
    
 `"acquisition" ONEAR "debt"`
  
    
    
This query matches items where the two tokens "acquisition" and "debt" appear within the same document, with a maximum token distance of **8** (which is the default value of _n_ if no value is provided). The order of the tokens must match for an item to be returned.
  
    
    
If you require a smaller token distance, you can specify it as follows:
  
    
    
 `"acquisition" ONEAR(n=3) "debt"`
  
    
    
This query matches items where the two tokens "acquisition" and "debt" appear within the same document, with a maximum token distance of **3**. The order of the tokens must match for an item to be returned.
  
    
    

### New XRANK operator

In SharePoint Server 2010, the **XRANK** operator was available only with FAST Query language (FQL). SharePoint introduces a new and powerful **XRANK** operator.
  
    
    
The **XRANK** operator provides dynamic control of ranking. This operator boosts the dynamic rank of items based on the occurrence of certain terms without changing items that match the query.
  
    
    

## Rich results framework for customizing search results UI
<a name="SP15Searchnew_support"> </a>

SharePoint Search includes a new results framework that makes it easy to customize the appearance (look and feel) of the search results user interface (UI). Now, instead of writing a custom XSLT to change how search results are displayed, you can customize the appearance of important types of results by using display templates and result types.
  
    
    

### Display templates

Display templates define the visual layout and behavior of a result type by using HTML, CSS, and JavaScript. You can customize the existing display templates or create display templates by using an HTML editor and upload them to the display templates gallery.
  
    
    

### Result types

Result types define how to display a set of search results based on a collection of the following:
  
    
    

- **Rules** Determine when to apply a result type, based on the specified conditions. Rule conditions can be joined by using equality, comparison, and logical operators.
    
  
- **Properties** Determine the list of managed properties for the result. You must add managed properties to the list before you map the managed property to a display template.
    
  
- **Display templates** Define the visual layout of the result type.
    
  
Administrators can create and manage result types at the site level or service application level; no custom coding is required.
  
    
    

## Connector framework enhancements
<a name="SP15Searchnew_support"> </a>

SharePoint Search enables you to retrieve claims information for content stored in custom external data sources that are crawled by using the connector framework.
  
    
    
The connector framework also provides improved exception capturing and logging to help you troubleshoot errors encountered when crawling content sources using custom connectors that are built on top of the connector framework. For information about the connector framework, see  [Search connector framework in SharePoint](search-connector-framework-in-sharepoint).
  
    
    

## Additional resources
<a name="bk_addresources"> </a>


-  [Searching new content with SharePoint Search](searching-new-content-with-sharepoint-search)
    
  
-  [Configure search in SharePoint](configure-search-in-sharepoint)
    
  
-  [Building search queries in SharePoint](building-search-queries-in-sharepoint)
    
  
-  [How to: Use a custom security trimmer for SharePoint Server search results](how-to-use-a-custom-security-trimmer-for-sharepoint-server-search-results)
    
  

