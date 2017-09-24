---
title: Building search queries in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: c4372fcc-4574-4c81-a345-a1bb282ca8f7
---


# Building search queries in SharePoint
Learn about the search syntax supported in SharePoint for building query rules and search queries.
## Supported search syntax in SharePoint for building search queries
<a name="SP15Buildquery_support"> </a>

SharePoint search supports Keyword Query Language (KQL) and FAST Query Language (FQL) search syntax for building search queries.
  
    
    
 **Keyword Query Language (KQL)**
  
    
    
KQL is the default query language for building search queries. Using KQL, you specify the search terms or property restrictions that are passed to the SharePoint search service.
  
    
    
 **FAST Query Language (FQL)**
  
    
    
FQL is a structured query language that supports advanced query operators. You can use FQL when you want to create complex queries that you want to pass programmatically to the SharePoint search service. FQL isn't intended to be exposed to end users, and is disabled by default. 
  
    
    
To enable FQL, use the **EnableFQL** property. Then, copy the default result source and modify the Query Transformation string `{?{searchTerms} -ContentClass=urn:content-class:SPSPeople}`, at one of these levels -- Search Service Application (SSA), Site Collection, or Site -- and in one of the following ways:
  
    
    

- Remove the KQL filter,  `-ContentClass:urn:content-class:SPSPeople`, from the Query Transformation. The resulting Query Transformation string will be:  `{?{searchTerms}}`
    
  
- Replace the Query Transformation string with an FQL equivalent, such as  `{?andnot({searchTerms},filter(contentclass:"urn:content-class:SPSPeople*"))}`.
    
  
For more information about result sources and how they work, see to:  [Understanding result sources](http://office.microsoft.com/en-us/support/sharepoint/sharepointsearch/understanding-result-sources-HA102848849.aspx) and [Configure result sources for search in SharePoint](http://technet.microsoft.com/en-us/library/jj683115%28v=office.15%29.aspx).
  
    
    

## In this section
<a name="SP15Buildquery_support"> </a>


-  [Keyword Query Language (KQL) syntax reference](keyword-query-language-kql-syntax-reference.md)
    
  
-  [FAST Query Language (FQL) syntax reference](fast-query-language-fql-syntax-reference.md)
    
  
-  [Using the SharePoint search Query APIs](using-the-sharepoint-search-query-apis.md)
    
  

## Additional resources
<a name="SP15Buildquery_addlresources"> </a>


-  [Search in SharePoint](search-in-sharepoint.md)
    
  
-  [Overview of query processing in SharePoint](http://technet.microsoft.com/en-us/library/jj219620%28v=office.15%29.aspx)
    
  
-  [Query variables in SharePoint](http://technet.microsoft.com/en-us/library/jj683123.aspx)
    
  

