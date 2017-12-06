---
title: Retrieving query suggestions using the Search REST service
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: a64c5bec-64a8-4752-9c72-433d1c864aed
---


# Retrieving query suggestions using the Search REST service
Learn how you can use the Search REST service from your client and mobile applications to retrieve query suggestions from Search in SharePoint.
Query suggestions, also known as search suggestions, are phrases that users have already searched for and that are displayed or "suggested" to them as they type their queries. You can use Search in SharePoint to turn on pre-query and post-query suggestions. These suggestions appear in a list below the Search box as a user types a query. For more information about query suggestions and how to enable them, see  [Manage query suggestions in SharePoint](http://technet.microsoft.com/en-us/library/jj721441.aspx).
  
    
    


## Suggest endpoint in the Search REST service
<a name="bk_SuggestEndpoint"> </a>

The Search REST service includes a **Suggest** endpoint you can use in any technology that supports REST web requests to retrieve query suggestions that the search system generates for a query from client or mobile applications.
  
    
    
The URI for **GET** requests to the Search REST service's **Suggest** endpoint is:
  
    
    
 `/_api/search/suggest`
  
    
    
The query suggestion parameters are specified in the URL. You can construct the request URL in two ways:
  
    
    


  
    
    
>  `http://server/_api/search/suggest?parameter=value&amp;parameter=value`
    
  

  
    
    
>  `http://server/_api/search/suggest(parameter=value&amp;parameter=value)`
    
  
> [!NOTE]
> The Search REST service doesn't support anonymous requests to the **Suggest** endpoint.
  
    
    


## Query suggestion parameters
<a name="bk_SuggestParameters"> </a>

The following sections describe the parameters you can use for the **Suggest** endpoint.
  
    
    

### Querytext

A string that contains the text for the search query.
  
    
    
 **Sample GET request**
  
    
    
http:// _server_/_api/search/suggest?querytext='sharepoint'
  
    
    

### iNumberOfQuerySuggestions

The number of query suggestions to retrieve. Must be greater than zero (0). The default value is 5.
  
    
    
 **Sample GET request**
  
    
    
http:// _server_/_api/search/suggest?querytext='sharepoint'&amp;inumberofquerysuggestions=3
  
    
    

### iNumberOfResultSuggestions

The number of personal results to retrieve. Must be greater than zero (0). The default value is 5.
  
    
    
 **Sample GET request**
  
    
    
http:// _server_/_api/search/suggest?querytext='sharepoint'&amp;inumberofresultsuggestions=4
  
    
    

### fPreQuerySuggestions

A Boolean value that specifies whether to retrieve pre-query or post-query suggestions. **true** to return pre-query suggestions; otherwise, **false**. The default value is **false**.
  
    
    
 **Sample GET request**
  
    
    
http:// _server_/_api/search/suggest?querytext='sharepoint'&amp;fprequerysuggestions=true
  
    
    

### fHitHighlighting

A Boolean value that specifies whether to hit-highlight or format in bold the query suggestions. **true** to format in bold the terms in the returned query suggestions that match terms in the specified query; otherwise, **false**. The default value is **true**.
  
    
    
 **Sample GET request**
  
    
    
http:// _server_/_api/search/suggest?querytext='sharepoint'&amp;fhithighlighting=false
  
    
    

### fCapitalizeFirstLetters

A Boolean value that specifies whether to capitalize the first letter in each term in the returned query suggestions. **true** to capitalize the first letter in each term; otherwise, **false**. The default value is **false**.
  
    
    
 **Sample GET request**
  
    
    
http:// _server_/_api/search/suggest?querytext='sharepoint'&amp;fcapitalizefirstletters=false
  
    
    

### Culture

The locale ID (LCID) for the query (see  [Locale IDs Assigned by Microsoft](http://msdn.microsoft.com/en-us/goglobal/bb964664.aspx)).
  
    
    
 **Sample GET request**
  
    
    
http:// _server_/_api/search/suggest?querytext='sharepoint'&amp;culture=1044
  
    
    

### EnableStemming

A Boolean value that specifies whether stemming is enabled. **true** to enable stemming; otherwise, **false**. The default value is **true**.
  
    
    
 **Sample GET request**
  
    
    
http:// _server_/_api/search/suggest?querytext='sharepoint'&amp;enablestemming=false
  
    
    

### ShowPeopleNameSuggestions

A Boolean value that specifies whether to include people names in the returned query suggestions. **true** to include people names in the returned query suggestions; otherwise, **false**. The default value is **true**.
  
    
    
 **Sample GET request**
  
    
    
http:// _server_/_api/search/suggest?querytext='sharepoint'&amp;showpeoplenamesuggestions=false
  
    
    

### EnableQueryRules

A Boolean value that specifies whether to turn on query rules for this query. **true** to turn on query rules; otherwise, **false**. The default value is **true**.
  
    
    
 **Sample GET request**
  
    
    
http:// _server_/_api/search/suggest?querytext='sharepoint'&amp;enablequeryrules=false
  
    
    

### fPrefixMatchAllTerms

A Boolean value that specifies whether to return query suggestions for prefix matches. **true** to return query suggestions based on prefix matches, otherwise, **false** when query suggestions should match the full query word.
  
    
    
 **Sample GET request**
  
    
    
http:// _server_/_api/search/suggest?querytext='sharepoint'&amp;fprefixmatchallterms=false
  
    
    

## See also
<a name="bk_addresources"> </a>


-  [SharePoint Search REST API overview](sharepoint-search-rest-api-overview.md)
    
  
-  [Search in SharePoint](search-in-sharepoint.md)
    
  
-  [SharePoint: Using the search REST service from an app for SharePoint](http://code.msdn.microsoft.com/sharepoint/SharePoint-Perform-a-1bf3e87d)
    
  
-  [What's new in SharePoint search for developers](what-s-new-in-sharepoint-search-for-developers.md)
    
  
-  [Use OData query operations in SharePoint REST requests](http://msdn.microsoft.com/library/d4b5c277-ed50-420c-8a9b-860342284b72%28Office.15%29.aspx)
    
  

  
    
    

