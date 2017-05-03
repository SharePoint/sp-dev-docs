---
title: Searching new content with SharePoint Search
ms.prod: SHAREPOINT
ms.assetid: 2a3a7d23-775a-4d95-9066-ebbd18c92ad4
---


# Searching new content with SharePoint Search
Learn how to make content available for users to search with SharePoint.
## Making content available for search in SharePoint

Search in SharePoint provides two approaches for processing queries to return search results—federated search and content crawling.
  
    
    
 **Federated search** In this approach, search results are returned for content that is not crawled by your search server. The query is forwarded to an external content repository where it is processed by that repository's search engine. The repository's search engine then returns the results to the search server. The search server formats and renders the results from the external repository to display on the search results page. This approach offers the following advantages:
  
    
    

- You require no additional capacity requirements for the content index, as content is not crawled by Search in SharePoint.
    
  
- You can take advantage of a repository's existing search engine. For example, you can federate to an Internet search engine to search the web.
    
  
- You can optimize the content repository's search engine for the repository's specific set of content, which might provide better search performance on the content set.
    
  
- You can access repositories that are secured against crawls, but which can be accessed by search queries.
    
  
 **Content crawling** In this approach, results are returned from the Search service application's content index based on the user's query. The content index contains content that is crawled by the Search service application, and includes text content and metadata for each content item. This approach enables you to:
  
    
    

- Sort results by relevance.
    
  
- Control how frequently the content index is updated.
    
  
- Specify what metadata is crawled.
    
  
- Perform a single backup operation for crawled content.
    
  

## In this section


-  [Search connector framework in SharePoint](search-connector-framework-in-sharepoint.md)
    
  -  [Enhancing the BDC model file for Search in SharePoint](enhancing-the-bdc-model-file-for-search-in-sharepoint.md)
    
  
  -  [How to: Crawl associated external content types in SharePoint](how-to-crawl-associated-external-content-types-in-sharepoint.md)
    
  
  -  [How to: Crawl binary large objects (BLOBs) in SharePoint](how-to-crawl-binary-large-objects-blobs-in-sharepoint.md)
    
  
  -  [How to: Crawl associated external content types in SharePoint](how-to-crawl-associated-external-content-types-in-sharepoint.md)
    
  
  -  [How to: Configure item-level security in SharePoint](how-to-configure-item-level-security-in-sharepoint.md)
    
  

