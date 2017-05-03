
# Synchronize SharePoint items using the REST service
Learn how to synchronize items between SharePoint and your add-ins or services by using the  **GetListItemChangesSinceToken** resource, part of the SharePoint REST service.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint.md#bk_newname).
 


## Synchronizing SharePoint items using the GetListItemChangesSinceToken resource

If you want to synchronize items between SharePoint and your add-ins or services, you can use the  **GetListItemChangesSinceToken** resource to do so. The **GetListItemChangesSinceToken**, part of the SharePoint REST service, corresponds to the  **Lists.GetListItemChangesSinceToken** web service call.
 

 
Perform a  **POST** request that includes a [SP.ChangeLogItemQuery object properties](#bk_props) object in the request body.
 

 
The request returns ADO  **rowset** XML which includes rows corresponding to any list item change matching the specified query. For more information on these properties, including property data structures, CAML element descriptions, and return values, see **Lists.GetListItemChangesSinceToken**.
 

 

||
|:-----|
|**Example request**|
| `POST http://server/site/_api/web/Lists/GetByTitle('Announcements')/GetListItemChangesSinceToken`|
|**Example POST Body**|
|
```XML
{ 'd' : { 
  'query': { 
    '__metadata': { 'type': 'SP.ChangeLogItemQuery'}, 
    'ViewName': '', 
    'Query': '<Where>
      <Contains>
         <FieldRef Name="Title" />
         <Value Type='Text'>Te</Value>
      </Contains></Where>',
    'QueryOptions': '<QueryOptions>
      <IncludeMandatoryColumns>FALSE</IncludeMandatoryColumns>
      <DateInUtc>False</DateInUtc>
      <IncludePermissions>TRUE</IncludePermissions>
      <IncludeAttachmentUrls>FALSE</IncludeAttachmentUrls>
      <Folder>Shared Documents/Test1</Folder></QueryOptions>', 
    'ChangeToken':'1;3;eee4c6d5-f88a-42c4-8ce1-685122984870;634397182229400000;3710', 
    'Contains':'<Contains>
      <FieldRef Name="Title"/>
      <Value Type="Text">Testing</Value></Contains>' } 
  } 
}

```

|

## SP.ChangeLogItemQuery object properties
<a name="bk_props"> </a>


****


|**Property**|**Description**|
|:-----|:-----|
|**ListName**|A string that contains either the title or the GUID for the list. When querying the UserInfo table, the string contains UserInfo. Using the GUID results in better performance.|
|**ViewName**|A string that contains the GUID for the view, which determines the view to use for the default view attributes represented by the  _query_,  _viewFields_, and  _rowLimit_ parameters. If this argument is not supplied, the default view is assumed. If it is supplied, the value of the _query_,  _viewFields_, or  _rowLimit_ parameter overrides the equivalent setting within the view. For example, if the view specified by the _viewFields_ parameter has a row limit of 100 rows but the _rowLimit_ parameter contains a value of 1000, then 1,000 rows are returned in the response.|
|**Query**|A  [Query](http://msdn.microsoft.com/en-us/library/ms471093.aspx) element containing the query that determines which records are returned and in what order.|
|**QueryOptions**|An XML fragment in the following form that contains separate nodes for the various properties of the  **SPQuery** object.|
|**ChangeToken**|A string that contains the change token for the request. For a description of the format that is used in this string, see  [Overview of the Change Log](http://msdn.microsoft.com/en-us/library/bb417456.aspx). If null is passed, all items in the list are returned.|
|**Contains**|A  [Contains](http://msdn.microsoft.com/en-us/library/ms196501.aspx) element that defines custom filtering for the query.|

## Additional resources
<a name="bk_addresources"> </a>


-  [Get to know the SharePoint REST service](get-to-know-the-sharepoint-2013-rest-service.md)
    
 
-  [Complete basic operations using SharePoint REST endpoints](complete-basic-operations-using-sharepoint-2013-rest-endpoints.md)
    
 
-  [Working with lists and list items with REST](working-with-lists-and-list-items-with-rest.md)
    
 
-  [Working with folders and files with REST](working-with-folders-and-files-with-rest.md)
    
 
-  [Navigate the SharePoint data structure represented in the REST service](navigate-the-sharepoint-data-structure-represented-in-the-rest-service.md)
    
 
-  [Determine SharePoint REST service endpoint URIs](determine-sharepoint-rest-service-endpoint-uris.md)
    
 
-  [Use OData query operations in SharePoint REST requests](use-odata-query-operations-in-sharepoint-rest-requests.md)
    
 
-  [REST API reference and samples](http://msdn.microsoft.com/library/rest-api-reference-and-samples%28Office.15%29.aspx)
    
 
-  [Use ETag values through the REST service to get document list item versioning](http://msdn.microsoft.com/library/5f7e0579-46b7-44ab-b3b4-cdbc622dcd98%28Office.15%29.aspx)
    
 

 

 

