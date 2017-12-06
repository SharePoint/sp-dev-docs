---
title: Working with lists and list items with REST
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Working with lists and list items with REST
Learn how to perform basic create, read, update, and delete (CRUD) operations on lists and list items with the SharePoint REST interface.
 
 **Tip**  The SharePoint Online (and on-premise SharePoint 2016 and later) REST service supports combining multiple requests into a single call to the service by using the OData  `$batch` query option. For details and links to code samples, see [Make batch requests with the REST APIs](make-batch-requests-with-the-rest-apis.md).
 
## Prerequisites
This topic assumes that you are already familiar with the topics  [Get to know the SharePoint REST service](get-to-know-the-sharepoint-rest-service.md) and [Complete basic operations using SharePoint REST endpoints](complete-basic-operations-using-sharepoint-rest-endpoints.md). It does not provide code snippets.

## Retrieving lists and list properties with REST
<a name="RetrieveLists"> </a>
The following example shows how to  **retrieve** a specific list if you know its GUID.

```
url: http://site url/_api/web/lists(guid'list GUID'),
method: GET
Headers:
    Authorization: "Bearer " + accessToken
    accept: "application/json;odata=verbose" or "application/atom+xml"

```
> [!NOTE]
> Use  `application/json;odata=verbose` in the `accept` header if you want the response in JSON. Use `application/atom+xml` in the `accept` header if you want the response in Atom format.
 
The following example shows how to  **retrieve** a specific list if you know its title.

```
url: http://site url/_api/web/lists/GetByTitle('Test')
method: GET
Headers:
    Authorization: "Bearer " + accessToken
    accept: "application/json;odata=verbose" or "application/atom+xml"

```
The following XML shows an example of the list properties that are returned when you request the XML content type.

```XML
  <content type="application/xml">
    <m:properties>
        <d:AllowContentTypes m:type="Edm.Boolean">true</d:AllowContentTypes> 
        <d:BaseTemplate m:type="Edm.Int32">100</d:BaseTemplate> 
        <d:BaseType m:type="Edm.Int32">0</d:BaseType> 
        <d:ContentTypesEnabled m:type="Edm.Boolean">false</d:ContentTypesEnabled> 
        <d:Created m:type="Edm.DateTime">2012-06-26T23:15:58Z</d:Created> 
        <d:DefaultContentApprovalWorkflowId m:type="Edm.Guid">00000000-0000-0000-0000-000000000000</d:DefaultContentApprovalWorkflowId> 
        <d:Description>A list created by Project Based Retention used to store Project Policy Items.</d:Description> 
        <d:Direction>none</d:Direction> 
        <d:DocumentTemplateUrl m:null="true" /> 
        <d:DraftVersionVisibility m:type="Edm.Int32">0</d:DraftVersionVisibility> 
        <d:EnableAttachments m:type="Edm.Boolean">true</d:EnableAttachments> 
        <d:EnableFolderCreation m:type="Edm.Boolean">false</d:EnableFolderCreation> 
        <d:EnableMinorVersions m:type="Edm.Boolean">false</d:EnableMinorVersions> 
        <d:EnableModeration m:type="Edm.Boolean">false</d:EnableModeration> 
        <d:EnableVersioning m:type="Edm.Boolean">false</d:EnableVersioning> 
        <d:EntityTypeName>ProjectPolicyItemList</d:EntityTypeName> 
        <d:ForceCheckout m:type="Edm.Boolean">false</d:ForceCheckout> 
        <d:HasExternalDataSource m:type="Edm.Boolean">false</d:HasExternalDataSource> 
        <d:Hidden m:type="Edm.Boolean">true</d:Hidden> 
        <d:Id m:type="Edm.Guid">74de3ff3-029c-42f9-bd2a-1e9463def69d</d:Id> 
        <d:ImageUrl>/_layouts/15/images/itgen.gif</d:ImageUrl> 
        <d:IrmEnabled m:type="Edm.Boolean">false</d:IrmEnabled> 
        <d:IrmExpire m:type="Edm.Boolean">false</d:IrmExpire> 
        <d:IrmReject m:type="Edm.Boolean">false</d:IrmReject> 
        <d:IsApplicationList m:type="Edm.Boolean">false</d:IsApplicationList> 
        <d:IsCatalog m:type="Edm.Boolean">false</d:IsCatalog> 
        <d:IsPrivate m:type="Edm.Boolean">false</d:IsPrivate> 
        <d:ItemCount m:type="Edm.Int32">0</d:ItemCount> 
        <d:LastItemDeletedDate m:type="Edm.DateTime">2012-06-26T23:15:58Z</d:LastItemDeletedDate> 
        <d:LastItemModifiedDate m:type="Edm.DateTime">2012-06-26T23:15:59Z</d:LastItemModifiedDate> 
        <d:ListItemEntityTypeFullName>SP.Data.ProjectPolicyItemListItem</d:ListItemEntityTypeFullName> 
        <d:MultipleDataList m:type="Edm.Boolean">false</d:MultipleDataList> 
        <d:NoCrawl m:type="Edm.Boolean">true</d:NoCrawl> 
        <d:ParentWebUrl>/</d:ParentWebUrl> 
        <d:ServerTemplateCanCreateFolders m:type="Edm.Boolean">true</d:ServerTemplateCanCreateFolders> 
        <d:TemplateFeatureId m:type="Edm.Guid">00bfea71-de22-43b2-a848-c05709900100</d:TemplateFeatureId> 
        <d:Title>Project Policy Item List</d:Title> 
    </m:properties>
  </content>
```
> [!NOTE]
> The  **ListItemEntityTypeFullName** property ( **SP.Data.ProjectPolicyItemListItem** in the previous example) is especially important if you want to create and update list items. This value must be passed as the **type** property in the metadata that you pass in the body of the HTTP request whenever you create and update list items.

## Working with lists by using REST
<a name="WorkLists"> </a>
The following example shows how to  **create** a list.

```
url: http://site url/_api/web/lists
method: POST
body: { '__metadata': { 'type': 'SP.List' }, 'AllowContentTypes': true, 'BaseTemplate': 100,
 'ContentTypesEnabled': true, 'Description': 'My list description', 'Title': 'Test' }
Headers: 
    Authorization: "Bearer " + accessToken
    X-RequestDigest: form digest value
    accept: "application/json;odata=verbose"
    content-type: "application/json;odata=verbose"
    content-length:length of post body
```

The following example shows how to  **update** a list by using the **MERGE** method.

```
url: http://site url/_api/web/lists(guid'list GUID')
method: POST
body: { '__metadata': { 'type': 'SP.List' }, 'Title': 'New title' }
Headers: 
    Authorization: "Bearer " + accessToken
    X-RequestDigest: form digest value
    IF-MATCH": etag or "*"
    X-HTTP-Method: MERGE,
    accept: "application/json;odata=verbose"
    content-type: "application/json;odata=verbose"
    content-length:length of post body
```
The following example shows how to  **create** a **custom field** for a list.

```
Url: url: http://site url/_api/web/lists(guid'list GUID')/Fields
Method:POST
Body: { '__metadata': { 'type': 'SP.Field' }, 'Title': 'field title', 'FieldTypeKind': FieldType value,'Required': 'true/false', 'EnforceUniqueValues': 'true/false','StaticName': 'field name'}
Headers: 
    Authorization: "Bearer " + accessToken
    X-RequestDigest: form digest value
    content-type: "application/json;odata=verbose"
    content-length:length of post body
```

The following example shows how to  **delete** a list.

```
url: http://site url/_api/web/lists(guid'list GUID')
method: POST
Headers: 
    Authorization: "Bearer " + accessToken
    X-RequestDigest: form digest value
    IF-MATCH: etag or "*"
    X-HTTP-Method: DELETE

```

## Working with list items by using REST
<a name="ListItems"> </a>
The following example shows how to  **retrieve** all of a list's items.
 
> [!NOTE]
> The OData $skip query option does not work when querying list items. In may situations, you can use the  [$skiptoken](http://msdn.microsoft.com/library/4dda9434-c2c5-4577-8e01-7bf9e822d90a.aspx) option instead.

```
url: http://site url/_api/web/lists/GetByTitle('Test')/items
method: GET
headers:
    Authorization: "Bearer " + accessToken
    accept: "application/json;odata=verbose" or "application/atom+xml"

```

The following example shows how to  **retrieve** a specific list item.

```
url: http://site url/_api/web/lists/GetByTitle('Test')/items(item id)
method: GET
headers:
    Authorization: "Bearer " + accessToken
    accept: "application/json;odata=verbose" or "application/atom+xml"

```

The following XML shows an example of the list item properties that are returned when you request the XML content type.
 
```XML
<content type="application/xml">
<m:properties> 
<d:FileSystemObjectType m:type="Edm.Int32">0</d:FileSystemObjectType>
<d:Id m:type="Edm.Int32">1</d:Id>
<d:ID m:type="Edm.Int32">1</d:ID>
<d:ContentTypeId>0x010049564F321A0F0543BA8C6303316C8C0F</d:ContentTypeId>
<d:Title>an item</d:Title>
<d:Modified m:type="Edm.DateTime">2012-07-24T22:47:26Z</d:Modified>
<d:Created m:type="Edm.DateTime">2012-07-24T22:47:26Z</d:Created>
<d:AuthorId m:type="Edm.Int32">11</d:AuthorId>
<d:EditorId m:type="Edm.Int32">11</d:EditorId>
<d:OData__UIVersionString>1.0</d:OData__UIVersionString>
<d:Attachments m:type="Edm.Boolean">false</d:Attachments>
<d:GUID m:type="Edm.Guid">eb6850c5-9a30-4636-b282-234eda8b1057</d:GUID>
</m:properties>
</content>
```

The following example shows how to  **create** a list item.

> [!NOTE]
> To do this operation, you must know the  **ListItemEntityTypeFullName** property of the list and pass that as the value of **type** in the HTTP request body.

```
url: http://site url/_api/web/lists/GetByTitle('Test')/items
method: POST
body: { '__metadata': { 'type': 'SP.Data.TestListItem' }, 'Title': 'Test'}
headers:
    Authorization: "Bearer " + accessToken
     X-RequestDigest: form digest value
    accept: "application/json;odata=verbose"
    content-type: "application/json;odata=verbose"
    content-length:length of post body
```

The following example shows how to  **update** a list item.

> [!NOTE]
> To do this operation, you must know the  **ListItemEntityTypeFullName** property of the list and pass that as the value of **type** in the HTTP request body.

```
url: http://site url/_api/web/lists/GetByTitle('Test')/items(item id)
method: POST
body: { '__metadata': { 'type': 'SP.Data.TestListItem' }, 'Title': 'TestUpdated'}
headers:
    Authorization: "Bearer " + accessToken
     X-RequestDigest: form digest value
    "IF-MATCH": etag or "*"
    "X-HTTP-Method":"MERGE",
    accept: "application/json;odata=verbose"
    content-type: "application/json;odata=verbose"
    content-length:length of post body
```

The following example shows how to  **delete** a list item.

```
url: http://site url/_api/web/lists/GetByTitle('Test')/items(item id)
method: POST
headers:
    Authorization: "Bearer " + accessToken
     X-RequestDigest: form digest value
    "IF-MATCH": etag or "*"
    "X-HTTP-Method":"DELETE"

```

## Using ETag values to determine document and list item versioning
<a name="Etag"> </a>
The SharePoint REST service, which follows the  [OData standard](http://www.odata.org/developers/protocols/operations), uses  [HTML ETags for concurrency control](http://www.odata.org/developers/protocols/operations#ConcurrencycontrolandETags) of SharePoint lists and list items. To check on an item's version when you perform a **PUT**,  **MERGE**, or  **DELETE** request, specify an **ETag** in the **If-Match** HTTP request header.
 
If the  **ETag** you specify in your request does not match the **ETag** of the document or list item on the server, the REST service returns a 412 exception, per the OData specification.
 
- To force an overwrite of the item regardless of version, set the  **ETag** value to **"*"**.
    
- If you do not specify an  **ETag**, SharePoint overwrites the item regardless of version.
    
Within SharePoint, ETags apply only to SharePoint lists and list items.

## See also
<a name="bk_addresources"> </a>

-  [Complete basic operations using SharePoint REST endpoints](complete-basic-operations-using-sharepoint-rest-endpoints.md)
-  [Working with folders and files with REST](working-with-folders-and-files-with-rest.md)
-  [SharePoint-Add-in-REST-OData-BasicDataOperations](https://github.com/OfficeDev/SharePoint-Add-in-REST-OData-BasicDataOperations)
-  [SharePoint 2013: Perform basic data access operations on files and folders by using REST](http://code.msdn.microsoft.com/SharePoint-2013-Perform-ab9c4ae5)
-  [Making REST calls with C# and JavaScript for SharePoint 2013](http://www.microsoft.com/resources/msdn/en-us/office/media/video/video.mdl?cid=sdc&amp;from=mscomsdc&amp;VideoID=4e4cc094-ff69-405b-852f-2ac7c41293c5)
-  [Open Data Protocol](http://www.odata.org/)
-  [OData: JavaScript Object Notation (JSON) Format](http://www.odata.org/documentation/odata-version-2-0/json-format/)
