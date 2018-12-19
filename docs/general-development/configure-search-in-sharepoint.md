---
title: Configure search in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: e447127c-2b11-4d65-b46e-01a18cdcdee5
---


# Configure search in SharePoint
Learn about the two types of customization in SharePoint search: adding a custom word breaker and adding a custom step to modify managed properties for crawled items during content processing.
   

## Adding a custom word breaker in SharePoint
<a name="SP15configsearch_word"> </a>

A custom word breaker can be added to tune word breaking behavior according to your needs. You can use a custom word breaker to replace the existing word breaker of the same language. Alternately, you can use a custom word breaker to replace the existing word breaker with that of a different language.
  
    
    

## Adding a custom step to modify managed properties in SharePoint
<a name="SP15ConfigSearch_customstep"> </a>

A custom step can be added to modify managed properties in the form of an external content enrichment web service. The content enrichment web service is a service that you can create to receive a callout from the web service client inside the content processing component. A configurable payload is then submitted to the web service, and the response is merged into the crawled item before it is added to the search index.
  
    
    

## In this section
<a name="SP15ConfigSearch_customstep"> </a>


-  [Custom word breakers in SharePoint](custom-word-breakers-in-sharepoint-server.md)
    
  
-  [Custom content processing with the Content Enrichment web service callout](custom-content-processing-with-the-content-enrichment-web-service-callout.md)
    
  

## See also
<a name="SP15configsearch_addlresources"> </a>


-  [Search in SharePoint](search-in-sharepoint.md)
    
  
-  [What's new in SharePoint search for developers](what-s-new-in-sharepoint-search-for-developers.md)
    
  

