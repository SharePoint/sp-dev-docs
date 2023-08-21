---
title: Using the SharePoint search Query APIs
description: Learn about the query APIs available in SharePoint that enable you to add search functionality to custom solutions and applications.
ms.date: 01/16/2020
ms.assetid: ae9d73ed-1140-430b-9287-01dbbe8ae7d1
ms.localizationpriority: high
---

# Using the SharePoint search Query APIs

Learn about the query APIs available in SharePoint that enable you to add search functionality to custom solutions and applications.

## SharePoint Query APIs

Search in SharePoint provides several query APIs, giving you lots of ways to access search results, so that you can return search results in a variety of custom solution types.

In addition to the server object model that was available in previous versions of SharePoint, Search in SharePoint also provides the following:

- Client object model (CSOM)
- JavaScript object model (JSOM)
- Representational State Transfer (REST) service

Table 1 shows the APIs that you can use to program search queries and the path to the source file on the server.

**Table 1. Search APIs**

|**API name**|**Class library or schema and path**|
|:-----|:-----|
|.NET CSOM  <br/> |Microsoft.SharePoint.Client.Search.dll <br/>%ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\ISAPI  <br/> |
|Silverlight CSOM  <br/> |Microsoft.SharePoint.Client.Search.Silverlight.dll <br/>%ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\TEMPLATE\\LAYOUTS\\ClientBin  <br/> |
|JavaScript CSOM  <br/> |SP.search.js <br/>%ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\TEMPLATE\\LAYOUTS  <br/> |
|REST service endpoints  <br/> |https://{site_url}/_api/search/query <br/>https://{site_url}/_api/search/suggest  <br/> |
|Server object model  <br/> |Microsoft.Office.Server.Search.dll <br/>%ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\ISAPI  <br/> |

As a best practice in SharePoint development, use client APIs when you can. Client APIs include the .NET, Silverlight, Phone, and JavaScript client object models, and the REST service. For more information about the APIs in SharePoint and when to use them, see  [Choose the right API set in SharePoint](choose-the-right-api-set-in-sharepoint.md).

### Query using the .NET client object model

Search in SharePoint includes a client object model that enables access to search results for online, on-premises, and mobile development. The Search in SharePoint CSOM is built on the SharePoint CSOM. Therefore, your client code first needs to access the SharePoint CSOM and then access the Search in SharePoint CSOM. For more information about the SharePoint CSOM and the [ClientContext](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.ClientContext.aspx) class, which is the entry point to the CSOM, see [Complete basic operations using SharePoint client library code](../sp-add-ins/complete-basic-operations-using-sharepoint-client-library-code.md).

For the .NET managed CSOM, get a **ClientContext** instance (located in the [Microsoft.SharePoint.Client](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.aspx) namespace in the Microsoft.SharePoint.Client.dll). Then use the object model in the **Microsoft.SharePoint.Client.Search.Query** namespace in the Microsoft.SharePoint.Client.Search.dll.

Here's a basic example.

```csharp
using (ClientContext clientContext = new ClientContext("http://<serverName>/sites/<siteCollectionPath>"))
{
  KeywordQuery keywordQuery = new KeywordQuery(clientContext);
  keywordQuery.QueryText = "SharePoint";
  SearchExecutor searchExecutor = new SearchExecutor(clientContext);
  ClientResult<ResultTableCollection> results = searchExecutor.ExecuteQuery(keywordQuery);
  clientContext.ExecuteQuery();
}
```

To download an example, see the following code sample posted by SharePoint MVP [Corey Roth](http://www.dotnetmafia.com/blogs/dotnettipoftheday/archive/2012/09/10/how-to-query-search-with-the-sharepoint-2013-client-object-model.aspx): [SharePoint: Query Search with the Managed Client Object Model](https://github.com/microsoftarchive/msdn-code-gallery-community-s-z/tree/master/SharePoint%202013%20Query%20Search%20with%20the%20Managed%20Client%20Object%20Model).

### Query using the JavaScript client object model

For the JavaScript CSOM, get a  [ClientContext](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.ClientContext.aspx) instance, and then use the object model in the SP.Search.js file.

Here's a basic example.

```csharp
var clientContext = new SP.ClientContext("<serverRelativeUrl>");
var contextSite = clientContext.get_site();
var keywordQuery = new Microsoft.SharePoint.Client.Search.Query.KeywordQuery(clientContext);
keywordQuery.set_queryText("SharePoint");
var searchExecutor = new Microsoft.SharePoint.Client.Search.Query.SearchExecutor(clientContext);
var results = searchExecutor.executeQuery(keywordQuery);
context.executeQueryAsync(onQuerySuccess, onQueryError);
```

To download an example, see the following code sample posted by SharePoint MVP [Corey Roth](http://www.dotnetmafia.com/blogs/dotnettipoftheday/archive/2012/09/10/how-to-query-search-with-the-sharepoint-2013-client-object-model.aspx): [SharePoint: Query Search with the Managed Client Object Model](https://github.com/microsoftarchive/msdn-code-gallery-community-s-z/tree/master/SharePoint%202013%20Query%20Search%20with%20the%20Managed%20Client%20Object%20Model).

### Query using the REST service

SharePoint includes a REST service that enables you to remotely execute queries against the SharePoint Search service from client applications by using any technology that supports REST web requests. The Search REST service exposes two endpoints, **query** and **suggest**, and will support both **GET** and **POST** operations. Results are returned in either XML or JavaScript Object Notation (JSON) format.

The following is the access point for the service: `https://{site_url}/_api/search/` using the root site as the query entry point. You can also specify another site in the URL, as follows:  `https://{site_url}/site/_api/search/`. The URL prefix before `/_api/search/` will use the default result source defined at that site/scope and query rules will also be contextual to the URL used, unless parameters are used to override this behavior. Unless any specific search configuration is made at a site, the results are the the same for both ways to access the service.

See [SharePoint Search REST API overview](sharepoint-search-rest-api-overview.md) and [Retrieving query suggestions using the Search REST service](retrieving-query-suggestions-using-the-search-rest-service.md) for more information.

### Query using the .NET server object model

Applications that use the server object model must run directly on a server that is running SharePoint. The search Query server object model resides in the  [Microsoft.Office.Server.Search.Query](/previous-versions/office/sharepoint-server/ms559899(v=office.15)) namespace, which is located in Microsoft.Office.Server.Search.dll.

As in SharePoint Server 2010, you use the  **KeywordQuery** class to define the query, and then called the [Execute()](/previous-versions/office/sharepoint-server/ms562867(v=office.15)) method to submit the query. In SharePoint, the **Execute** method is obsolete, and while it will still work, you should use the [SearchExecutor](/previous-versions/office/sharepoint-server/jj277656(v=office.15)) class instead. To submit the query, call the [ExecuteQuery()](/previous-versions/office/sharepoint-server/jj517659(v=office.15)) method, passing the instance of the **KeywordQuery** class in the call.

Here's a basic example.

```csharp
using (SPSite siteCollection = new SPSite("<serverRelativeUrl>"))
{
  KeywordQuery keywordQuery = new KeywordQuery(siteCollection);
  keywordQuery.QueryText = "SharePoint";
  SearchExecutor searchExecutor = new SearchExecutor();
  ResultTableCollection resultTableCollection = searchExecutor.ExecuteQuery(keywordQuery);
  resultTableCollection = resultTableCollection.Filter("TableType", KnownTableTypes.RelevantResults);
  ResultTable resultTable = resultTableCollection.FirstOrDefault();
  DataTable dataTable = resultTable.Table;
}
```

To download an example, see the following code sample posted by SharePoint MVP [Corey Roth](http://www.dotnetmafia.com/blogs/dotnettipoftheday/archive/2012/09/10/how-to-query-search-with-the-sharepoint-2013-client-object-model.aspx): [SharePoint: Query Search with the Managed Client Object Model](https://github.com/microsoftarchive/msdn-code-gallery-community-s-z/tree/master/SharePoint%202013%20Query%20Search%20with%20the%20Managed%20Client%20Object%20Model).

## See also

- [Building search queries in SharePoint](building-search-queries-in-sharepoint.md)
- [SharePoint Search REST API overview](sharepoint-search-rest-api-overview.md)
