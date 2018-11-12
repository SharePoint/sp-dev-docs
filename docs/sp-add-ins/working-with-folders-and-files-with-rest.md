---
title: Working with folders and files with REST
description: Perform basic create, read, update, and delete (CRUD) operations on folders and files with the SharePoint REST interface.
ms.date: 4/19/2018
ms.prod: sharepoint
---


# Working with folders and files with REST

> [!TIP] 
> The SharePoint Online (and on-premises SharePoint 2016 and later) REST service supports combining multiple requests into a single call to the service by using the OData `$batch` query option. For details and links to code samples, see [Make batch requests with the REST APIs](make-batch-requests-with-the-rest-apis.md). 

<a name="Folders"> </a>

## Working with folders by using REST

You can retrieve a folder inside a document library when you know its URL. For example, you can **retrieve the root folder of your Shared Documents library** by using the endpoint in the following example.

```
url: http://site url/_api/web/GetFolderByServerRelativeUrl('/Shared Documents')
method: GET
headers:
    Authorization: "Bearer " + accessToken
    accept: "application/json;odata=verbose" or "application/atom+xml"

```

<br/>

The following XML shows an example of **folder properties that are returned when you request the XML content type**.

```XML
<content type="application/xml">
<m:properties>
<d:ItemCount m:type="Edm.Int32">0</d:ItemCount>
<d:Name>Shared Documents</d:Name>
<d:ServerRelativeUrl>/Shared Documents</d:ServerRelativeUrl>
<d:WelcomePage/>
</m:properties>
</content>
```

<br/>

The following example shows how to **create a folder**.

```
url: http://site url/_api/web/folders
method: POST
body: { '__metadata': { 'type': 'SP.Folder' }, 'ServerRelativeUrl': '/document library relative url/folder name'}
Headers: 
    Authorization: "Bearer " + accessToken
    X-RequestDigest: form digest value
    accept: "application/json;odata=verbose"
    content-type: "application/json;odata=verbose"
    content-length:length of post body
```

<br/>

The following example shows how to **rename a folder by using the MERGE method**.

First, obtain the folder's OData type with a GET request.

```
url: http://site url/_api/web/GetFolderByServerRelativeUrl('/Folder Name')/ListItemAllFields
method: GET
Headers: 
     Authorization: "Bearer " + accessToken
    "IF-MATCH": etag or "*"
    accept: "application/json;odata=verbose"
    content-type: "application/json;odata=verbose"
```

From the result, obtain the odata.type value, such as SP.Data.Shared_x0020_DocumentsItem (the value may be different depending on your library configuration). Then issue a MERGE


```
url: http://site url/_api/web/GetFolderByServerRelativeUrl('/Folder Name')/ListItemAllFields
method: POST
body: { '__metadata': { 'type': '(odata.type from previous call)' }, 'Title': 'New name', 'FileLeafRef': 'New name' }
Headers: 
     Authorization: "Bearer " + accessToken
    X-RequestDigest: form digest value
    "IF-MATCH": etag or "*"
    "X-HTTP-Method":"MERGE",
    accept: "application/json;odata=verbose"
    content-type: "application/json;odata=verbose"
    content-length:length of post body
```

<br/>

The following example shows how to **delete a folder**.

```
url: http://site url/_api/web/GetFolderByServerRelativeUrl('/Folder Name')
method: POST
Headers: 
     Authorization: "Bearer " + accessToken
     X-RequestDigest: form digest value
    "IF-MATCH": etag or "*"
    "X-HTTP-Method":"DELETE"

```

<br/>

<a name="Files"> </a>

## Working with files by using REST

The following example shows how to **retrieve all of the files in a folder**.

```
url: http://site url/_api/web/GetFolderByServerRelativeUrl('/Folder Name')/Files
method: GET
headers:
    Authorization: "Bearer " + accessToken
    accept: "application/json;odata=verbose" or "application/atom+xml"

```

<br/>

The following example shows how to **retrieve a specific file**.

```
url: http://site url/_api/web/GetFolderByServerRelativeUrl('/Folder Name')/Files('file name')/$value
method: GET
headers:
    Authorization: "Bearer " + accessToken
```

<br/>

You can also **retrieve a file when you know its URL**, as in the following example.

```
url: http://site url/_api/web/GetFileByServerRelativeUrl('/Folder Name/file name')/$value
method: GET
headers:
    Authorization: "Bearer " + accessToken
```

<br/>

The following example shows how to **create a file and add it to a folder**.

```
url: http://site url/_api/web/GetFolderByServerRelativeUrl('/Folder Name')/Files/add(url='a.txt',overwrite=true)
method: POST
body: "Contents of file"
Headers: 
    Authorization: "Bearer " + accessToken
    X-RequestDigest: form digest value
    content-length:length of post body
```

<br/>

The following example shows how to **update a file by using the PUT method**.
 
> [!NOTE] 
> **PUT** is the only method that you can use to update a file. The **MERGE** method is not allowed.

```
url: http://site url/_api/web/GetFileByServerRelativeUrl('/Folder Name/file name')/$value
method: POST
body: "Contents of file."
Headers: 
    Authorization: "Bearer " + accessToken
    X-RequestDigest: form digest value
    X-HTTP-Method:"PUT"
    content-length:length of post body
```

<br/>

If you want to update a file's metadata, you have to construct an endpoint that reaches the file as a list item. You can do this because each folder is also a list, and each file is also a list item. Construct an endpoint that looks like this: `https://<site url>/_api/web/lists/getbytitle('Documents')/items(<item id>)`. For information about how to update a list item's metadata, see [Working with lists and list items with REST](working-with-lists-and-list-items-with-rest.md). 

You may want to check out a file to make sure that no one changes it before you update it. After your update, you should check the file back in so that others can work with it. 

The following example shows how to **check out a file**.

```
url: http://site url/_api/web/GetFileByServerRelativeUrl('/Folder Name/file name')/CheckOut(),
method: POST
headers:
    Authorization: "Bearer " + accessToken
    X-RequestDigest: form digest value
```

<br/>

The following example shows how to **check in a file**.

```
url: http://site url/_api/web/GetFileByServerRelativeUrl('/Folder Name/file name')/CheckIn(comment='Comment',checkintype=0)
method: POST
headers:
    Authorization: "Bearer " + accessToken
    X-RequestDigest: form digest value
```

<br/>

The following example shows how to **delete a file**.

```
url: http://site url/_api/web/GetFileByServerRelativeUrl('/Folder Name/file name')
method: POST
headers:
    Authorization: "Bearer " + accessToken
     X-RequestDigest: form digest value
    IF-MATCH: etag or "*"
    X-HTTP-Method:"DELETE"

```

<br/>

<a name="LargeFiles"> </a>

## Working with large files by using REST

When you need to upload a binary file that is larger than 1.5 megabytes (MB), the REST interface is your only option. For a code example that shows you how to upload a binary file that is smaller than 1.5 MB by using the SharePoint JavaScript object model, see [Complete basic operations using JavaScript library code in SharePoint](complete-basic-operations-using-javascript-library-code-in-sharepoint.md). The maximum size of a binary file that you can create with REST is 2 gigabytes (GB). 

The following example shows how to **create a large binary file**.
 
> [!WARNING] 
> This approach works only with Internet Explorer 10 and the latest versions of other browsers.

```
url: http://site url/_api/web/GetFolderByServerRelativeUrl('/Folder Name')/Files/Add(url='file name', overwrite=true)
method: POST
body: contents of binary file
headers:
    Authorization: "Bearer " + accessToken
    X-RequestDigest: form digest value
    content-type: "application/json;odata=verbose"
    content-length:length of post body
```

<br/>

The following code sample shows how to **create a file by using this REST endpoint and the cross-domain library**.

```
function uploadFileBinary() {
XDomainTestHelper.clearLog();
var ro;
if (document.getElementById("TxtViaUrl").value.length > 0) {
ro = new SP.RequestExecutor(document.getElementById("TxtWebUrl").value, document.getElementById("TxtViaUrl").value);
}
else {
ro = new SP.RequestExecutor(document.getElementById("TxtWebUrl").value);
}
var body = "";
for (var i = 0; i < 1000; i++) {
var ch = i % 256;
body = body + String.fromCharCode(ch);
}
var info = {
url: "_api/web/lists/getByTitle('Shared Documents')/RootFolder/Files/Add(url='a.dat', overwrite=true)",
method: "POST",
binaryStringRequestBody: true,
body: body,
success: success,
error: fail,
state: "Update"
};
ro.executeAsync(info);
}

```

<br/>

<a name="FileAttachments"> </a>

## Working with files attached to list items by using REST


The following example shows how to **retrieve all of the files that are attached to a list item**.

```
url: http://site url/_api/web/lists/getbytitle('list title')/items(item id)/AttachmentFiles/
method: GET
headers:
    Authorization: "Bearer " + accessToken
    accept: "application/json;odata=verbose" or "application/atom+xml"

```

<br/>

The following example shows how to **retrieve a file that is attached to a list item**.

```
url: http://site url/_api/web/lists/getbytitle('list title')/items(item id)/AttachmentFiles('file name')/$value
method: GET
headers:
    Authorization: "Bearer " + accessToken
    accept: "application/json;odata=verbose" or "application/atom+xml"

```

<br/>

The following example shows how to **create a file attachment to a list item**.

```
url: http://site url/_api/web/lists/getbytitle('list title')/items(item id)/AttachmentFiles/ add(FileName='file name')
method: POST
headers:
    Authorization: "Bearer " + accessToken
    body: "Contents of file."
    X-RequestDigest: form digest value
    content-length:length of post body
```

<br/>

The following example shows how to **update a file attachment to a list item by using the PUT method**.
 
> [!NOTE] 
> **PUT** is the only method that you can use to update a file. The **MERGE** method is not allowed.

```
url: http://site url/_api/web/lists/getbytitle('list title')/items(item id)/AttachmentFiles('file name')/$value
method: POST
body: "Contents of file."
headers:
    Authorization: "Bearer " + accessToken
    "X-HTTP-Method":"PUT"
    X-RequestDigest: form digest value
    content-length:length of post body
```

<br/>

## See also

- [Get to know the SharePoint REST service](get-to-know-the-sharepoint-rest-service.md)
- [Complete basic operations using SharePoint client library code](complete-basic-operations-using-sharepoint-client-library-code.md)   
- [REST API reference and samples](https://msdn.microsoft.com/library)
- [Upload a file by using the REST API and jQuery](upload-a-file-by-using-the-rest-api-and-jquery.md)
- [SharePoint-Add-in-REST-OData-BasicDataOperations](https://github.com/OfficeDev/SharePoint-Add-in-REST-OData-BasicDataOperations)
- [SharePoint: Perform basic data access operations on files and folders by using REST](http://code.msdn.microsoft.com/SharePoint-Perform-ab9c4ae5)
- [Secure data access and client object models for SharePoint Add-ins](secure-data-access-and-client-object-models-for-sharepoint-add-ins.md)
- [Work with external data in SharePoint](work-with-external-data-in-sharepoint.md)
- [OData resources](get-to-know-the-sharepoint-rest-service.md#odata-resources)  
- [Develop SharePoint Add-ins](develop-sharepoint-add-ins.md)

 

 

