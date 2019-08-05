---
title: Enhancing the BDC model file for Search in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 3c67b1cf-5fca-4805-a1b5-c9ac1ff8aede
localization_priority: Normal
---


# Enhancing the BDC model file for Search in SharePoint
Learn about the properties in the BDC metadata model that are applicable to BCS indexing connectors which enable Search in SharePoint to crawl external data.
## Search properties for BDC model files
<a name="SearchBDCModelProperties_SearchProperties"> </a>

The connector framework in Search enables you to crawl external data, making it available in search results through BCS indexing connectors. The BCS indexing connector is used by the crawler to communicate with the external data source. At crawl time, the crawler calls the BCS indexing connector to fetch the data from the external system and pass it back to the crawler. 
  
    
    
BCS indexing connectors are composed of the following:
  
    
    


  
    
    
> **BDC model file** The file that provides the connection information to the external system and the structure of the data.
    
  

  
    
    
> **Connector** The component containing the code that connects to the external system and parses the access URLs and BCS identifiers.
    
  
The BDC metadata model includes several properties that are applicable to Search, many of which are required to support BCS indexing connector crawling. 
  
    
    
The following table describes the BDC model properties that are applicable to Search.
  
    
    

**Table 1. Search properties for BDC model files**


|**Name**|**Metadata Object**|**Description**|
|:-----|:-----|:-----|
|ShowInSearchUI  <br/> |Model  <br/> |Specifies that an **LobSystemInstance** element in the model file should be displayed in the search user interface. This value is ignored for custom connectors. <br/> |
|InputUriProcessor  <br/> |LobSystem  <br/> |Specifies the name of the class that processes the input URL before passing it to the connector. Applies to .NET and custom BCS indexing connectors. For more information, see  [Creating a Custom Indexing Connector](http://msdn.microsoft.com/library/ec2df34d-178c-4ae1-a2b0-a6af04ee57bd%28Office.15%29.aspx).  <br/> |
|OutputUriProcessor  <br/> |LobSystem  <br/> |Specifies the name of the class that processes the output URL before passing it to the search system from the connector. Applies to .NET and custom BCS indexing connectors. For more information, see  [Creating a Custom Indexing Connector](http://msdn.microsoft.com/library/ec2df34d-178c-4ae1-a2b0-a6af04ee57bd%28Office.15%29.aspx).  <br/> |
|SystemUtilityTypeName  <br/> |LobSystem  <br/> |Specifies the name of the class that implements the **StructuredRepositorySystemUtility** class. Applies to custom BCS indexing connectors. For more information, see [Creating a Custom Indexing Connector](http://msdn.microsoft.com/library/ec2df34d-178c-4ae1-a2b0-a6af04ee57bd%28Office.15%29.aspx).  <br/> |
|Title  <br/> |Entity  <br/> |Specifies the title of the external content type to display in search results.  <br/> |
|DefaultLocale  <br/> |Entity  <br/> |Specifies the locale string. You can override this value by using the **LCIDField** property or the **CultureField** property. <br/> |
|RootFinder  <br/> |Method  <br/> |Specifies the **Finder** method to use to enumerate the items to crawl. For example, when connecting to a database, this could be the **SELECT** statement or the list of tables to crawl. <br/> |
|DirectoryLink  <br/> |Method  <br/> |Specifies that BCS should navigate associations. Required for hierarchical crawling.  <br/> |
|DeletedCountField  <br/> |Method  <br/> |Specifies the deleted count value. This property is ignored unless it contains an integer greater than zero.  <br/> |
|WindowsSecurityDescriptorField  <br/> |Method  <br/> |Specifies the Windows Security descriptor for the item. If not specified, the **GetSecurityDescriptor** method is called. If the **GetSecurityDescriptor** is not defined, all external items are assigned the Everyone access control list (ACL). <br/> |
|AuthorField  <br/> |Method  <br/> |Specifies the author name to display in search results.  <br/> |
|DisplayUriField  <br/> |Method  <br/> |Specifies the URL to display in search results. If specified, this property overrides the profile page URL provided by BCS. If not specified, the URL displayed in search results starts with **bdc3://**, and is not understood by the browser. <br/> |
|LastModifiedTimeStampField  <br/> |Method  <br/> |Specifies the external item's timestamp to display in search results. This value is also used for incremental crawling.  <br/> |
|DescriptionField  <br/> |Method  <br/> |Specifies the description to display in search results.  <br/> |
|LCIDField  <br/> |Method  <br/> |Specifies the locale ID (LCID) for the **DescriptionField**. If this is not specified, the default word breaker is used.  <br/> |
|CultureField  <br/> |Method  <br/> |Specifies the culture for the **DescriptionField**.  <br/> |
|Extension  <br/> |Method  <br/> |Specifies the file name extension for the crawlable stream. If not specified, the default extension is **.txt**. <br/> |
|MimeType  <br/> |Method  <br/> |Specifies the MIME type for the crawlable stream. If not specified, the default extension is **.txt**. If the **Extension** field and **MimeType** field are both specified, the value specified in the **MimeType** field is used. <br/> |
|UseClientCachingForSearch  <br/> |Method  <br/> |Specifies whether the crawler caches the content during enumeration. If the content is cached, the crawler does not make another trip to the content source when it crawls individual items.  <br/> |
|EnumerateIdsOnly  <br/> |FilterDescriptor  <br/> |Specifies whether to return IDs only in the **IDEnumerator**.  <br/> |
|CrawlStartTime  <br/> |FilterDescriptor  <br/> |Contains the start time of the last crawl.  <br/> |
|SynchronizationCookie  <br/> |FilterDescriptor  <br/> |Specifies that the external content source returns a cookie after a crawl, which is then resent by the indexing connector during the next enumeration call. The external content source uses the cookie to determine what has changed since the last crawl. This property is used with **ChangedIDEnumerator** and **DeletedIDEnumerator** method instances. <br/> |
|Property  <br/> |TypeDescriptor  <br/> | Specifies the **struct** array used by search for properties. Consists of the following: <br/> <ul><li>**PropertyName**</li><li>**PropertyValue**</li><li>**PropertyCulture**</li></ul> |
|Text  <br/> |TypeDescriptor  <br/> | Specifies the **struct** array used by search for attachments. Consists of the following: <br/> <ul><li>**TextExtension**</li><li>**TextContentType**</li><li>**TextValue**</li></ul> <br/> |
   

## BDC model file changes to improve performance when crawling external data
<a name="SearchBDCModelProperties_Performance"> </a>

When you want to create a BDC model file for an external system that you want to enable for search, you can enhance the model file to optimize performance when crawling external systems. This section describes ways to modify the BDC model file to improve performance.
  
    
    

### Use inline property I/O when retrieving large-scale data

In general, if some of the data returned for an item is large scale, instead of returning it with the **SpecificFinder** method, you should use one of the following specialized methods to retrieve the data:
  
    
    

- Use the **BinarySecurityDescriptorAccessor** method when passing a security access control list (ACL) instead of the **WindowsSecurityDescriptor** property.
    
  
- Use the **StreamAccessor** method when passing streams.
    
  
Unless network latency is high, the improved performance is usually better than the cost of an extra trip to the external system.
  
    
    

### Enumeration optimization when crawling external systems

Do not enumerate more than 100,000 items per call to the external system. Long-running enumerations can cause intermittent interruptions and prevent a crawl from completing. We recommend that your BDC model structures the data into logical folders that can be enumerated individually, as shown in the following example. 
  
    
    
This example demonstrates enumerating against a database table with one million rows, but with a fixed set of values in ColumnA. In this scenario, you can consider ColumnA as the external content type and write an enumerator for this set of values by using the following SQL statement. 
  
    
    



```sql

SELECT DISTINCT( ISNULL(ColumnA,'unknown')) as ColumnA  FROM table
```

Next, define the specific finder using the following SQL statement. 
  
    
    



```sql
SELECT DISTINCT( ISNULL(ColumnA,'unknown')) as ColumnA  FROM table where ColumnA = @Value
```

Finally, you must define the association navigation operation, as follows. 
  
    
    



```sql
Select * from table where ColumnA=@value
```

Any method should begin returning results within two minutes, or the crawler will cancel the call. For example, a complex SQL statement that uses a **LIKE** clause may take longer than two minutes to complete, and would cause the crawler to cancel the call.
  
    
    

### Improving crawl speed with the UseClientCachingForSearch property

The **UseClientCachingForSearch** property improves the speed of full crawls by caching the item during enumeration. Using this property is also recommended when implementing incremental crawls that are based on change logs, because it improves incremental crawl speed.
  
    
    

> **Important:**
> If items are larger than 30 kilobytes on average, do not set this property, as it will lead to a significant number of cache misses and negate performance gains. 
  
    
    


## Security in BDC model files
<a name="SearchBDCModelProperties_Security"> </a>

If the repository uses NTLM authentication, we recommend that you specify PassThrough authentication for crawling.
  
    
    
Profile pages may require that you use the Secure Store Service because of the multi-hop delegation problem from the front-end web server. If you encounter this problem, you can optimize the crawl while still allowing profile pages by creating two similar **LobSystemInstance** instances. The first instance should use credentials from the Secure Store Service authentication. This instance should not contain the **ShowInSearchUI** property. The second instance should use PassThrough authentication, and should contain the **ShowInSearchUI** property. Profile pages use the first **LobSystemInstance** instance, and the crawler uses the second instance.
  
> [!NOTE]
> This requires that you set the **ShowInSearchUI** property at the **LobSystemInstance** level instead of at the **LobSystem** level.


## See also
<a name="SP15enhanceBDC_addlresources"> </a>


-  [Search connector framework in SharePoint](search-connector-framework-in-sharepoint.md)
    
  
-  [BDC Model Infrastructure](http://msdn.microsoft.com/library/2818ebdd-6cda-4d8f-82b2-7fde9fbf2633%28Office.15%29.aspx)
    
  
-  [Authoring BDC Models](http://msdn.microsoft.com/library/170d1cfd-cf19-4162-b79f-ba6d3b4ad23b%28Office.15%29.aspx)
    
  
-  [Setting up a development environment for BCS in SharePoint](setting-up-a-development-environment-for-bcs-in-sharepoint.md)
    
  
-  [How to: Use SharePoint Designer to Create a BDC Model File for a Custom Connector](http://msdn.microsoft.com/library/8f239482-0c82-4b60-817d-b0c4392e7e2e%28Office.15%29.aspx)
    
  

