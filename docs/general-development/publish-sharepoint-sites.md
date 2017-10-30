---
title: Publish SharePoint sites
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 46b5a79c-962f-4a07-8316-d5005eabd0e0
---


# Publish SharePoint sites

After you design or develop site components and content, you can deploy them to the current site collection and other site collections—even to site collections that cross the intranet/Internet boundary.
  
    
    


## Cross-site publishing

Learn about  [cross-site publishing](cross-site-publishing-in-sharepoint.md) and how it affects how you plan and publish sites and their content and associated design elements.
  
    
    

## Publishing considerations for variations and multilingual sites

Different markets have different tastes. The variations feature helps accommodate those tastes by providing functionality that you can use to localize and translate content, but also to publish that content and its associated design elements to site collections all over the world. To help make publishing content to local markets successful, consider these tips that show how design and content management decisions you make can affect how published site contents and structure may render:
  
    
    

- Duplication of design assets positively affects the performance of site publishing and rendering and helps make managing complex sites that are enabled for variations less complex. A master page is an ASP.NET file that contains content placeholders that are populated by page layouts and individual instances of pages. 
    
  
- If certain content types apply to all locales in your site collection, it's best to create them as site content types of the root web. You can also create content types under variation sites. 
    
  
- If you add additional columns to a source list by adding an item with a content type that did not previously exist in that list, variations updates the schema of each target list to reflect the new columns the next time you add an item to that target list. 
    
  
- Managed navigation works with variations. Structured navigation—based on the SharePoint website structure—also still works: it synchronizes the content and structure between the source and target variations labels. 
    
  
- The device channels feature abstracts the problem of varying the presentation of content for mobile devices from the underlying site content and structure. You can create master pages that present to users based on the user's user agent. Avoid hard-coding in a master page content that will need to be localized.
    
  
- Sites with dynamic content assembled from multiple sources risk having content rendered in multiple languages on the same page. For example, avoid cases where article page content is one language while content rendered by a Content Search Web Part is rendered in another language. 
    
  
- If you work with display templates that are used with multiple languages, create language files and place them under folders that are named with the locale that they apply to. You can then reference the language files with the  `$includeLanguageScript` function and the `{Locale}` token.
    
    If the Content Search Web Part relies on the **Language** property to find the appropriate CustomStrings.js file to include and one doesn't exist, and code in the template requests a string to display that cannot be found by using the `$resource()` or `Srch.U.loadResource()` functions, the Content Search Web Part displays an error message.
    
  

## Additional resources
<a name="bk_addresources"> </a>


-  [Build sites for SharePoint](build-sites-for-sharepoint.md)
    
  
-  [What's new with SharePoint site development](what-s-new-with-sharepoint-site-development.md)
    
  

