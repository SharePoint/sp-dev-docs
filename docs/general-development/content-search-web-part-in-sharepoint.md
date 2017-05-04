---
title: Content Search Web Part in SharePoint
ms.prod: SHAREPOINT
ms.assetid: 6fb4bf41-0846-4dca-ad9e-906afdfd3d2b
---


# Content Search Web Part in SharePoint

  
    
    
![Conceptual overview topic](../../images/mod_icon_badge_conoverview.png)
  
    
    

  
    
    

  
    
    
Learn about the Content Search Web Part (CSWP) in SharePoint.
## Introducing the Content Search Web Part (CSWP)
<a name="SP15_CSWP_IntroducingCSWP"> </a>

The Content Search Web Part (CSWP) is a Web Part introduced in SharePoint that uses various styling options to display dynamic content on SharePoint pages.
  
    
    

## How the Content Search Web Part works
<a name="SP15_CSWP_HowCSWPWorks"> </a>

Content Search Web Part displays search results in a way that you can easily format. Each Content Search Web Part is associated with a search query and shows the results for that search query.
  
    
    
You can use display templates to change how search results appear on the page. Display templates are snippets of HTML and JavaScript that render the information returned by SharePoint. The information to be displayed gets inserted into the page in JSON format. 
  
    
    

## When to use the Content Search Web Part (CSWP) or the Content Query Web Part (CQWP)
<a name="SP15_CSWP_WhenToUseCSWPorCQWP"> </a>

The CSWP can return any content from the search index. Use it on your SharePoint sites when you are connecting to a search service and want to return indexed search results in your pages. 
  
    
    
The CSWP returns content that is as fresh as the latest crawl of your content, so if you crawl often, the content that the CSWP returns is more up-to-date than if you crawl infrequently. If you need to display instant content or the refreshed version of content, use the Content Query Web Part (CQWP) instead.
  
    
    
Search crawls only the major versions of content, never the minor versions. If you want to display the minor versions of your content, do that by using a CQWP.
  
    
    
Some site collection administrators mark sites to not be indexed. Content marked in this way is not available in a CSWP. If you want to return results from a site that is marked to not index, use the CQWP instead.
  
    
    

## Additional resources
<a name="SP15_CSWP_AdditionalResources"> </a>


-  [Managed navigation in SharePoint](managed-navigation-in-sharepoint)
    
  
-  [What's new in SharePoint search for developers](what-s-new-in-sharepoint-search-for-developers)
    
  

