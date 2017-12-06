---
title: BCS REST API reference for SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 364fb8d7-87d9-4be7-affd-90caba3cd0c0
---



# BCS REST API reference for SharePoint

  
    
    
![Class libraries and references](../images/mod_icon_badge_reference.png)
  
    
    

  
    
    

  
    
    
Contains reference information for constructing Representational State Transfer (REST) URLs to access and manipulate external data sources using Business Connectivity Services (BCS) in SharePoint.
## Using RESTful APIs to access external data in SharePoint
<a name="bkmk_Overview"> </a>

The REST interface provided by SharePoint enables you to access most SharePoint resources through specially constructed URLs. Business Connectivity Services (BCS) uses this architecture to provide access to external data.
  
    
    
You can access external data by constructing URLs just as you would to access standard list items.
  
> [!NOTE]
> Access to entities through the BDC directly is not provided. To work with external data, you must create an external list and use the REST URLs to access the list items contained in the external list. 
  
    
    

The supported HTTP verbs for working with external lists are **GET**, **PUT**, **POST**, and **DELETE**.
  
    
    
Unlike with normal lists, you can't create an external list using REST. You must do that by creating a BDC model and an external list using Visual Studio 2012.
  
    
    
The information in Table 1 shows how to construct RESTful URLs and the corresponding client object model calls to access and manipulate data from external data sources.
  
    
    

**Table 1. RESTful URL formats for accessing external data**


|**URL**|**Description**|**HTTP method**|
|:-----|:-----|:-----|
| `http://[sharepointsite]/_api` <br/> |The base of any REST request. The _api virtual directory is mapped to call into client.svc, where the client object model can be used.  <br/> |GET  <br/> |
| `http://[sharepointsite]/_api/web/title` <br/> |Retrieves the title of the current web.  <br/> |GET  <br/> |
| `http://[sharepointsite]/_api/lists` <br/> |Retrieves all lists on a site.  <br/> |GET  <br/> |
| `http://[sharepointsite]/_api/lists/getbytitle('listname')` <br/> |Retrieves the metadata for a specified list.  <br/> |GET  <br/> |
| `http://[sharepointsite]/_api/lists/getbytitle('listname')/items` <br/> |Retrieves the list items in a specified list.  <br/> |GET  <br/> |
| `http://[sharepointsite]/_api/lists/getbytitle('listname')?select=Title` <br/> |Retrieves the title of a specific list.  <br/> |GET  <br/> |
   

## Constructing query strings for filtering data
<a name="bkmk_constructquery"> </a>

In order to limit the amount of data returned, or make it more relevant to the user, you can use the filter operations found in Table 2.
  
    
    

**Table 2. Operators for filtering data**


|**Operator**|**Description**|
|:-----|:-----|
|EQ  <br/> |Equals  <br/> **Note**: When you use **EQ** to filter, the filter criteria are passed to the external system where the filtering happens on the server.          |
|GT  <br/> |Greater Than  <br/> **Note**: When you use the **GT** operator, only client-side filtering is executed.> For example:  `web/lists/getByTitle('ListName')/Items?$select=Title&amp;$filter=AverageRating gt 3` returns all titles with an average rating over 3.          |
   
> [!NOTE]
> To retrieve columns that are part of an association, you must explicitly include the column in the URL using **$select** in the query string.
  
    
    


## See also
<a name="bkmk_AdditionalResources"> </a>


-  [Business Connectivity Services in SharePoint](business-connectivity-services-in-sharepoint.md)
    
  
-  [Complete basic operations using SharePoint REST endpoints](http://msdn.microsoft.com/library/e3000415-50a0-426e-b304-b7de18f2f7d9%28Office.15%29.aspx)
    
  
-  [Use OData query operations in SharePoint REST requests](http://msdn.microsoft.com/library/d4b5c277-ed50-420c-8a9b-860342284b72%28Office.15%29.aspx)
    
  
-  [SharePoint: Perform basic data access operations by using REST in apps](http://code.msdn.microsoft.com/SharePoint-Perform-335d925b)
    
  
-  [Choose the right API set in SharePoint](choose-the-right-api-set-in-sharepoint.md)
    
  
-  [Complete basic operations using JavaScript library code in SharePoint](http://msdn.microsoft.com/library/29089af8-dbc0-49b7-a1a0-9e311f49c826%28Office.15%29.aspx)
    
  
