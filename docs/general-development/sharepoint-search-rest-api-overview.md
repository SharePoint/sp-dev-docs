---
title: SharePoint Search REST API overview
ms.date: 09/25/2017
ms.prod: sharepoint
localization_priority: Priority
---

# SharePoint Search REST API overview

Add search functionality to client and mobile applications using the Search REST service in SharePoint and any technology that supports REST web requests.

When you query in the context of a SharePoint Online user, you get results from:

- Content in SharePoint Online site collections 
- Content in Office 365 Groups 
- Shared OneDrive for Business content (content that's accessible for others than the owner of the OneDrive for Business) 
- Content from SharePoint Server that's been indexed via a cloud search Service application. [Learn about cloud hybrid search.](https://docs.microsoft.com/sharepoint/hybrid/learn-about-cloud-hybrid-search-for-sharepoint) 

If your users also expect results from OneDrive for Business content that only they have access to, you can use the [ContentSetting](#bk_ContentSetting) parameter to achieve this.

<a name="bk_queryrest"> </a>

## Querying with the Search REST service

Search in SharePoint includes a Search REST service you can use to add search functionality to your client and mobile applications by using any technology that supports REST web requests. You can use the Search REST service to submit Keyword Query Language (KQL) or FAST Query Language (FQL) queries in your SharePoint Add-ins, remote client applications, mobile applications, and other applications.
The Search REST service supports both HTTP **POST** and HTTP **GET** requests.

### GET requests

Construct the URI for query **GET** requests to the Search REST service as follows:

```http
GET /_api/search/query
```

For **GET** requests, you specify the query parameters in the URL. You can construct the **GET** request URL in two ways:

```http
GET http://server/_api/search/query?query_parameter=value&amp;query_parameter=value
GET http://server/_api/search/query(query_parameter=value&amp;query_parameter=<value>)
```  

### POST requests

You construct the URI for query **POST** requests to the Search REST service as follows:

```http
POST /_api/search/postquery
```

For **POST** requests, you pass the query parameters in the request in JavaScript Object Notation (JSON) format.
The HTTP **POST** version of the Search REST service supports all parameters supported by the HTTP **GET** version. However, some of the parameters have different data types, as described in Table 1.

**Table 1. Query parameters with different data types for POST requests**

|                      **Parameter**                       |                                                                               **Data type**                                                                                |
| :------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [SelectProperties](#bk_SelectProperties)                 | string[]                                                                                                                                                                   |
| [RefinementFilters](#bk_RefinementFilters)               | string[]                                                                                                                                                                   |
| [SortList](#bk_SortList)                                 | [Sort](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Search.Query.Sort.aspx)                                                                              |
| [HithighlightedProperties](#bk_HithighlightedProperties) | ​string[]                                                                                                                                                                  |
| [Properties](#bk_Properties)                             | [Microsoft.SharePoint.Client.Search.Query.KeywordQueryProperties](https://msdn.microsoft.com/library/Microsoft.SharePoint.Client.Search.Query.KeywordQueryProperties.aspx) |

Use **POST** requests in the following scenarios:

- When you'll exceed the URL length restriction with a **GET** request.
- When you can't specify the query parameters in a simple URL. For example, if you have to pass parameter values that contain a complex type array, or comma-separated strings, you have more flexibility when constructing the **POST** request.
- When you use the  [ReorderingRules](#bk_ReorderingRules) parameter because it is supported only with **POST** requests.

## Search REST results format

By default, results are returned in XML format. To get results in JSON format, add the following header to your request:

```http
accept: application/json;odata=verbose
```

If you don't need metadata, you can instead use:

```http
accept: application/json;odata=nometadata
```

<a name="bk_UsingQueryParams"> </a>

## Using query parameters with the Search REST service

When you make a call to the Search REST service, you specify query parameters with the request. Search in SharePoint uses these query parameters to construct the search query. With a **GET** request, you specify the query parameters in the URL. For **POST** requests, you pass the query parameters in the body in JavaScript Object Notation (JSON) format.
The following sections describe the query parameters you can use to submit search queries with the Search REST service.

### QueryText parameter

A string that contains the text for the search query.

#### Sample GET request

```http
GET http://{server}/_api/search/query?querytext='sharepoint'
```

 #### Sample POST request

```json
{
  'request': {
    'Querytext': 'sharepoint',
    'RowLimit': 20,
    'ClientType': 'ContentSearchRegular'
  }
}
```

<a name="bk_QueryTemplate"> </a>

### QueryTemplate

A string that contains the text that replaces the query text, as part of a query transform.

#### Sample GET request

```http
GET http://server/_api/search/query?querytext='sharepoint'&amp;querytemplate='{searchterms} author:johndoe'
```

 #### Sample POST request

```json
{
  '__metadata': {
      'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
   },
  'Querytext': 'sharepoint',
  'Querytemplate': '{searchterms} Author:johndoe'
}
```

<a name="bk_EnableInterleaving"> </a>

### EnableInterleaving

A Boolean value that specifies whether the result tables that are returned for the result block are mixed with the result tables that are returned for the original query. 

**true** to mix the ResultTables; otherwise, **false**. The default value is **true**.

Change this value only if you want to provide your own interleaving implementation.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;enableinterleaving=true
```

#### Sample POST request

```json
{
  '__metadata': {
      'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  '​EnableInterleaving': 'True'
}
```

<a name="bk_SourceId"> </a>

### SourceId

The result source ID to use for executing the search query.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;sourceid='8413cd39-2156-4e00-b54d-11efd9abdb89'
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'SourceId': '8413cd39-2156-4e00-b54d-11efd9abdb89'
}
```

<a name="bk_RankingModelId"> </a>

### RankingModelId

The ID of the ranking model to use for the query.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;rankingmodelid​= _CustomRankingModelID_
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'RankingModelId': 'CustomRankingModelID '
}
```

<a name="bk_StartRow"> </a>

### StartRow

The first row that is included in the search results that are returned. You use this parameter when you want to implement paging for search results.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;startrow=10
```

 #### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'StartRow': '10'
}
```

<a name="bk_RowLimit"> </a>

### RowLimit

The maximum number of rows overall that are returned in the search results. Compared to  _RowsPerPage_,  _RowLimit_ is the maximum number of rows returned overall.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;rowlimit=30
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'RowLimit': '30'
}
```

<a name="bk_RowsPerPage"> </a>

### RowsPerPage

The maximum number of rows to return per page. Compared to  _RowLimit_,  _RowsPerPage_ refers to the maximum number of rows to return per page, and is used primarily when you want to implement paging for search results.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;rowsperpage=10
```

 #### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'RowsPerPage': '10'
}
```

<a name="bk_SelectProperties"> </a>

### SelectProperties

The managed properties to return in the search results. To return a managed property, set the property's retrievable flag to **true** in the search schema.

For **GET** requests, you specify the _SelectProperties_ parameter in a string containing a comma-separated list of properties. For **POST** requests, you specify the _SelectProperties_ parameter as a string array.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;selectproperties='Title,Author'
```

 #### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'SelectProperties': {
    'results': ['Title','Author']
  }
}
```

<a name="bk_Culture"> </a>

### Culture

The locale ID (LCID) for the query (see  [Locale IDs Assigned by Microsoft](http://msdn.microsoft.com/en-us/goglobal/bb964664.aspx)).

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;culture=1044
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'Culture': '1044'
}
```

<a name="bk_RefinementFilters"> </a>

### RefinementFilters

The set of refinement filters used when issuing a refinement query. For **GET** requests, the _RefinementFilters_ parameter is specified as an FQL filter. For **POST** requests, the _RefinementFilters_ parameter is specified as an array of FQL filters.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;refinementfilters='fileExtension:equals("docx")'
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'RefinementFilters': {
    'results': ['fileExtension:equals("docx")']
  }
}
```

<a name="bk_Refiners"> </a>

### Refiners

The set of refiners to return in a search result.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;refiners='author,size'
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'Refiners': 'author,size',
}
```

<a name="bk_HiddenConstraints"> </a>

### HiddenConstraints

The additional query terms to append to the query.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;hiddenconstraints='developer'
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'HiddenConstraints': 'developer'
}
```

<a name="bk_SortList"> </a>

### SortList

The list of properties by which the search results are ordered.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;sortlist='rank:descending,modifiedby:ascending'
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'SortList': {
    'results': [
      {
        'Property': 'Created',
        'Direction': '0'
      },
      {
        'Property': 'FileExtension',
        'Direction': '1'
      }
    ]
  }
}
```

<a name="bk_EnableStemming"> </a>

### EnableStemming

A Boolean value that specifies whether stemming is enabled. 

**true** if the stemming is enabled; otherwise, **false**. The default value is **true**.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;enablestemming=false
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'EnableStemming : 'False'
}
```

<a name="bk_TrimDuplicates"> </a>

### TrimDuplicates

A Boolean value that specifies whether duplicate items are removed from the results. 

**true** to remove the duplicate items; otherwise, **false**. The default value is **true**.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;trimduplicates=false
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'TrimDuplicates': 'False'
}
```

<a name="bk_Timeout"> </a>

### Timeout

The amount of time in milliseconds before the query request times out. The default value is 30000.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;timeout=60000
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'Timeout': '60000'
}
```


### EnableNicknames
<a name="bk_EnableNicknames"> </a>

A Boolean value that specifies whether the exact terms in the search query are used to find matches, or if nicknames are used also. 
**true** if nicknames are used; otherwise, **false**. The default value is **false**.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;enablenicknames=true
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'EnableNicknames': 'True'
}
```

<a name="bk_EnablePhonetic"> </a>

### EnablePhonetic

A Boolean value that specifies whether the phonetic forms of the query terms are used to find matches. 

**true** if phonetic forms are used; otherwise, **false**. The default value is **false**.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;enablephonetic=true
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'EnablePhonetic': 'True'
}
```

<a name="bk_EnableFql"> </a>

### EnableFql

A Boolean value that specifies whether the query uses the FAST Query Language (FQL). 

**true** if the query is an FQL query; otherwise, **false**. The default value is **false**.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;enablefql=true
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'EnableFQL': 'True'
}
```

<a name="bk_HithighlightedProperties"> </a>

### HithighlightedProperties

The properties to highlight in the search result summary when the property value matches the search terms entered by the user. For **GET** requests, Specify in a string containing a comma-separated list of properties. For **POST** requests, specify as an array of strings.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;hithighlightedproperties='Title'
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'HitHighlightedProperties':  {
    'results': ['Title']
  }
}
```

<a name="bk_BypassResultTypes"> </a>

### BypassResultTypes

A Boolean value that specifies whether to perform result type processing for the query. 

**true** to perform result type processing; otherwise, **false**. The default value is **false**.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;bypassresulttypes=true
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'BypassResultTypes': 'true'
}
```

<a name="bk_ProcessBestBets"> </a>

### ProcessBestBets

A Boolean value that specifies whether to return best bet results for the query. 

**true** to return best bets; otherwise, **false**. This parameter is used only when **EnableQueryRules** is set to **true**, otherwise it is ignored. The default value is **false**.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;processbestbets=true&amp;enablequeryrules=true
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'ProcessBestBets': 'true',
  'EnableQueryRules': 'true'
}
```

<a name="bk_ClientType"> </a>

### ClientType

The type of the client that issued the query.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;clienttype='custom'
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'ClientType': 'custom'
}
```

<a name="bk_PersonalizationData"> </a>

### PersonalizationData

The GUID for the user who submitted the search query.

#### Sample GET request

```http
GET http:// _\<server\>_/_api/search/query?querytext='sharepoint'&amp;personalizationdata=' _\<GUID\>_'
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'PersonalizationData': ' <GUID> '
}
```

<a name="bk_ResultsURL"> </a>

### ResultsURL

The URL for the search results page.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;resultsurl='http://server/site/resultspage.aspx'
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint'
  'ResultURL': 'http://server/site/resultspage.aspx'
}
```

<a name="bk_QueryTag"> </a>

### QueryTag

Custom tags that identify the query. You can specify multiple query tags, separated by semicolons.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint'
}
```

<a name="bk_Properties"> </a>

### Properties

Additional properties for the query. **GET** requests support only string values. **POST** requests support values of any type.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;properties='termid:guid'
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'Properties': {
    'results': [
      {
        'Name': 'sampleBooleanProperty',
        'Value':
        {
          'BoolVal': 'True',
          'QueryPropertyValueTypeIndex': 3
        }
      },
      {
        'Name': 'sampleIntProperty',
        'Value':
        {
          'IntVal': '1234',
          'QueryPropertyValueTypeIndex': 2
        }
      }
    ]
  }
}
```

> [!NOTE]
> [QueryPropertyValueType](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.QueryPropertyValueType.aspx) specifies the type for the property; each type has a specific index value.

<a name="bk_EnableQueryRules"> </a>

### EnableQueryRules

A Boolean value that specifies whether to enable query rules for the query. 

**true** to enable query rules; otherwise, **false**. The default value is **true**.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;enablequeryrules=false
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'EnableQueryRules': 'false'
}
```

<a name="bk_ReorderingRules"> </a>

### ReorderingRules

Special rules for reordering search results. These rules can specify that documents matching certain conditions are ranked higher or lower in the results. This property applies only when search results are sorted based on rank. You must use a **POST** request for this property; it does not work in a **GET** request.

In the following example,  _MatchType_ refers to [ReorderingRuleMatchType](/previous-versions/office/sharepoint-server/jj276975(v=office.15)) . In the following example, `'MatchType': '0'` specifies `ResultContainsKeyword`.

#### Sample POST request

```json
{
  '__metadata': {
  'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'ReorderingRules':  {
    'results': [
    {
      'MatchValue': '<someValue>',
      'Boost': '10',
      'MatchType': '0'
    }
    ]
  }
}
```

<a name="bk_ProcessPersonalFavorites"> </a>

### ProcessPersonalFavorites

A Boolean value that specifies whether to return personal favorites with the search results. 

**true** to return personal favorites; otherwise **false**. 

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;processpersonalfavorites=true
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext ': 'sharepoint',
  'ProcessPersonalFavorites': 'false'
}
```

<a name="bk_ProcessPersonalFavorites"> </a>

### QueryTemplatePropertiesUrl

The location of the _queryparametertemplate.xml_ file. This file is used to enable anonymous users to make Search REST queries.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;querytemplatepropertiesurl='spfile://webroot/queryparametertemplate.xml'
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext ': 'sharepoint',
  QueryTemplatePropertiesUrl : 'spfile://webroot/queryparametertemplate.xml'
}
```

<a name="bk_ProcessPersonalFavorites"> </a>

### HitHighlightedMultivaluePropertyLimit

The number of properties to show hit highlighting for in the search results.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;hithighlightedmultivaluepropertylimit=2
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext ': 'sharepoint',
  'HitHighlihtedMultivaluePropertyLimit': '2'
}
```

<a name="bk_ProcessPersonalFavorites"> </a>

### EnableOrderingHitHighlightedProperty

A Boolean value that specifies whether the hit highlighted properties can be ordered. 

**true** to enable ordering rules; otherwise **false**.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;enableorderinghithighlightedproperty=false
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext ': 'sharepoint',
  'EnableOrderingHitHighlightedProperty': 'false'
}
```

<a name="bk_ProcessPersonalFavorites"> </a>

### CollapseSpecification

The managed properties that are used to determine how to collapse individual search results. Results are collapsed into one or a specified number of results if they match any of the individual collapse specifications. Within a single collapse specification, results are collapsed if their properties match all individual properties in the collapse specification.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;collapsespecification='Author:1 ContentType:2'
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext ': 'sharepoint',
  'CollapseSpecification': 'Author:1 ContentType:2'
}
```

<a name="bk_ProcessPersonalFavorites"> </a>

### EnableSorting

A Boolean value that specifies whether to sort search results. 

**true** to sort search results using _SortList_, or by rank if  _SortList_ is empty. **false** to leave results unsorted.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;enablesorting=false
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext ': 'sharepoint',
  'EnableSorting': 'false'
}
```

<a name="bk_ProcessPersonalFavorites"> </a>

### GenerateBlockRankLog

A Boolean value that specifies whether to return block rank log information in the **BlockRankLog** property of the interleaved result table. A block rank log contains the textual information on the block score and the documents that were de-duplicated.

**true** to return block rank log information; otherwise, **false**.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;generateblockranklog=true
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext ': 'sharepoint',
  'GenerateBlockRankLog': 'true'
}
```

<a name="bk_ProcessPersonalFavorites"> </a>

### UIlanguage

The locale identifier (LCID) of the user interface (see  [Locale IDs Assigned by Microsoft](http://msdn.microsoft.com/en-us/goglobal/bb964664)).

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;uilanguage=1044
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext ': 'sharepoint',
  'UILanguage': '1044'
}
```

<a name="bk_ProcessPersonalFavorites"> </a>

### DesiredSnippetLength

The preferred number of characters to display in the hit-highlighted summary generated for a search result.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;desiredsnippetlength=80
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext ': 'sharepoint',
  'DesiredSnippetLength': '80'
}
```

<a name="bk_ProcessPersonalFavorites"> </a>

### MaxSnippetLength

The maximum number of characters to display in the hit-highlighted summary generated for a search result.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;maxsnippetlength=100
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext ': 'sharepoint',
  'MaxSnippetLength': '100' 
}
```

<a name="bk_ProcessPersonalFavorites"> </a>

### SummaryLength

The number of characters to display in the result summary for a search result.

#### Sample GET request

```http
GET http:// _server_/_api/search/query?querytext='sharepoint'&amp;summarylength=150
```

#### Sample POST request

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext ': 'sharepoint',
  'Summarylength': '150'
}
```

<a name="bk_ContentSetting"> </a>

### ContentSetting

A string value that specifies an alternative scope of content for the query. The parameter is formatted as a string, but represents a numeric value. The default value is 0. You apply this property via the query property bag (Properties).

- **0** : The scope for the query is all shared content that's been indexed in SharePoint Online. With this value of the parameter, private results aren't returned. In this context *private* means OneDrive for Business content that only the owner of the OneDrive for Business has access to. 
- **3** : The scope for the query is all shared content that's been indexed in SharePoint Online plus the user's private OneDrive for Business content. Two result blocks are returned. The main result block contains results from shared content, excluding any results from the user’s own OneDrive for Business. The second result block contains results from the user’s own OneDrive for Business (private and shared). This value of the parameter enables the search experience to present results from the user’s own OneDrive separate from the main shared results. 

> [!NOTE]
> The values 1 and 2 are reserved for future use. 

#### Sample GET request 

http://server/_api/search/query?querytext='sharepoint'&properties='ContentSetting:3' 

#### Sample POST request 

```json
{
  '__metadata': {
    'type': 'Microsoft.Office.Server.Search.REST.SearchRequest'
  },
  'Querytext': 'sharepoint',
  'Properties': {
    'results': [
      {
        'Name': 'ContentSetting',
        'Value':
        {
            'IntVal': '3',
            'QueryPropertyValueTypeIndex': '2'
        }
      }
    ]
  }
}
```

<a name="bk_AnonymousREST"> </a>

## Enabling anonymous Search REST queries

You can configure search to support Search REST queries from anonymous users. Site administrators can decide what query parameters to expose to anonymous users by using the _queryparametertemplate.xml_ file. This section describes how to configure your site to enable anonymous access, and create the queryparametertemplate.xml file.

### To enable anonymous Search REST queries

1. Enable anonymous access on the web application and publishing site. For more information about how to do this, see  [Manage permission policies for a web application in SharePoint](http://technet.microsoft.com/en-us/library/ff608071.aspx) and [Plan for user authentication methods in SharePoint](http://technet.microsoft.com/en-us/library/cc262350.aspx) on [TechNet](http://technet.microsoft.com/en-US/).
1. Add a new document library named QueryPropertiesTemplate to the publishing site.
1. Create an XML file named queryparametertemplate.xml, and copy the following XML to the file.

    ```xml  
    <QueryPropertiesTemplate xmlns="http://www.microsoft.com/sharepoint/search/KnownTypes/2008/08" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
      <QueryProperties i:type="KeywordQueryProperties">
        <EnableStemming>true</EnableStemming>
        <FarmId>FarmID</FarmId>
        <IgnoreAllNoiseQuery>true</IgnoreAllNoiseQuery>
        <KeywordInclusion>AllKeywords</KeywordInclusion>
        <SiteId>SiteID</SiteId>
        <SummaryLength>180</SummaryLength>
        <TrimDuplicates>true</TrimDuplicates>
        <WcfTimeout>120000</WcfTimeout>
        <WebId>WebID</WebId>
        <Properties xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
          <a:KeyValueOfstringanyType>
            <a:Key>_IsEntSearchLicensed</a:Key>
            <a:Value i:type="b:boolean" xmlns:b="http://www.w3.org/2001/XMLSchema">true</a:Value>
          </a:KeyValueOfstringanyType>
          <a:KeyValueOfstringanyType>
            <a:Key>EnableSorting</a:Key>
            <a:Value i:type="b:boolean" xmlns:b="http://www.w3.org/2001/XMLSchema">true</a:Value>
          </a:KeyValueOfstringanyType>
          <a:KeyValueOfstringanyType>
            <a:Key>MaxKeywordQueryTextLength</a:Key>
            <a:Value i:type="b:int" xmlns:b="http://www.w3.org/2001/XMLSchema">4096</a:Value>
          </a:KeyValueOfstringanyType>
          <a:KeyValueOfstringanyType>
            <a:Key>TryCache</a:Key>
            <a:Value i:type="b:boolean" xmlns:b="http://www.w3.org/2001/XMLSchema">true</a:Value>
          </a:KeyValueOfstringanyType>
        </Properties>
        <PropertiesContractVersion>15.0.0.0</PropertiesContractVersion>
        <EnableFQL>false</EnableFQL>
        <EnableSpellcheck>Suggest</EnableSpellcheck>
        <EnableUrlSmashing>true</EnableUrlSmashing>
        <IsCachable>false</IsCachable>
        <MaxShallowRefinementHits>100</MaxShallowRefinementHits>
        <MaxSummaryLength>185</MaxSummaryLength>
        <MaxUrlLength>2048</MaxUrlLength>
        <SimilarType>None</SimilarType>
        <SortSimilar>true</SortSimilar>
        <TrimDuplicatesIncludeId>0</TrimDuplicatesIncludeId>
        <TrimDuplicatesKeepCount>1</TrimDuplicatesKeepCount>
      </QueryProperties>
      <WhiteList xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
        <a:string>RowLimit</a:string>
        <a:string>SortList</a:string>
        <a:string>StartRow</a:string>
        <a:string>RefinementFilters</a:string>
        <a:string>Culture</a:string>
        <a:string>RankingModelId</a:string>
        <a:string>TrimDuplicatesIncludeId</a:string>
        <a:string>ReorderingRules</a:string>
        <a:string>EnableQueryRules</a:string>
        <a:string>HiddenConstraints</a:string>
        <a:string>QueryText</a:string>
        <a:string>QueryTemplate</a:string>
      </WhiteList>
    </QueryPropertiesTemplate>
    ```

1. Update the `SiteId`, `FarmId`, and  `WebId` elements with the values for your farm, website and publishing site collection.
1. Save _queryparametertemplate.xml_ to the **QueryPropertiesTemplate** document library.
1. Add the `QueryTemplatePropertiesUrl` parameter to your Search REST call, specifying `spfile://webroot/queryparametertemplate.xml` as the value.

### queryparametertemplate.xml file

The primary elements in the _queryparametertemplate.xml_ file are:

- **QueryProperties** element

  Contains a serialized  [QueryProperties](https://msdn.microsoft.com/library/Microsoft.Office.Server.Search.Query.QueryProperties.aspx) object.

- **WhiteList** element

  Contains the list of query properties that the anonymous user is allowed to set.

When an anonymous Search REST query is submitted, the query object is constructed using what's specified in the **QueryProperties** element. Then, all the properties that are listed in the whitelist are copied from the incoming query to the newly constructed query object.

<a name="bk_AnonymousREST"> </a>

## In this section

- [Retrieving query suggestions using the Search REST service](retrieving-query-suggestions-using-the-search-rest-service.md)

<a name="bk_addresources"> </a>

## See also

- [Search in SharePoint](search-in-sharepoint.md)
- [Using the SharePoint search Query APIs](/sharepoint/dev/general-development/using-the-sharepoint-search-query-apis)
- [What's new in SharePoint search for developers](what-s-new-in-sharepoint-search-for-developers.md)
- [Use OData query operations in SharePoint REST requests](/sharepoint/dev/sp-add-ins/use-odata-query-operations-in-sharepoint-rest-requests)