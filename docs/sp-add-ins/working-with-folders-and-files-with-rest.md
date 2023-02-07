---
title: Working with folders and files with REST
description: Perform basic create, read, update, and delete (CRUD) operations on folders and files with the SharePoint REST interface.
ms.date: 01/12/2023
ms.prod: sharepoint
ms.localizationpriority: high
---

# Working with folders and files with REST

> [!NOTE]
> The examples on this page do not support the % and # characters. [Support % and # in files and folders with ResourcePath API](../solution-guidance/supporting-and-in-file-and-folder-with-the-resourcepath-api.md)

> [!TIP]
> The SharePoint Online (and on-premises SharePoint 2016 and later) REST service supports combining multiple requests into a single call to the service by using the OData `$batch` query option. For details and links to code samples, see [Make batch requests with the REST APIs](make-batch-requests-with-the-rest-apis.md).

## Working with folders by using REST

You can retrieve a folder inside a document library when you know its URL. For example, you can **retrieve the root folder of your Shared Documents library** by using the endpoint in the following example.

```http
GET https://{site_url}/_api/web/GetFolderByServerRelativeUrl('/Shared Documents')
Authorization: "Bearer " + accessToken
Accept: "application/json;odata=verbose"
```

The following XML shows an example of **folder properties that are returned when you request the XML content type**.

```xml
<content type="application/xml">
  <m:properties>
    <d:ItemCount m:type="Edm.Int32">0</d:ItemCount>
    <d:Name>Shared Documents</d:Name>
    <d:ServerRelativeUrl>/Shared Documents</d:ServerRelativeUrl>
    <d:WelcomePage/>
  </m:properties>
</content>
```

The following example shows how to **create a folder**.

```http
POST https://{site_url}/_api/web/folders
Authorization: "Bearer " + accessToken
Accept: "application/json;odata=verbose"
Content-Type: "application/json"
Content-Length: {length of request body as integer}
X-RequestDigest: "{form_digest_value}"

{
  "__metadata": {
    "type": "SP.Folder"
  },
  "ServerRelativeUrl": "/document library relative url/folder name"
}
```

The following example shows how to **rename a folder by using the MERGE method**.

First, obtain the folder's OData type with a GET request.

```http
GET https://{site_url}/_api/web/GetFolderByServerRelativeUrl('/Folder Name')/ListItemAllFields
Authorization: "Bearer " + accessToken
Accept: "application/json;odata=verbose"
```

From the result, obtain the `odata.type` value, such as `SP.Data.Shared_x0020_DocumentsItem` (the value may be different depending on your library configuration). Then submit a MERGE request:

```http
POST https://{site_url}/_api/web/GetFolderByServerRelativeUrl('/Folder Name')/ListItemAllFields
Authorization: "Bearer " + accessToken
Accept: "application/json;odata=verbose"
Content-Type: "application/json"
Content-Length: {length of request body as integer}
If-Match: "{etag or *}"
X-HTTP-Method: "MERGE"
X-RequestDigest: "{form_digest_value}"

{
  "__metadata": {
    "type": "{odata.type from previous call}"
  },
  "Title": "New name",
  "FileLeafRef": "New name"
}
```

The following example shows how to **delete a folder**.

```http
POST https://{site_url}/_api/web/GetFolderByServerRelativeUrl('/Folder Name')
Authorization: "Bearer " + accessToken
If-Match: "{etag or *}"
X-HTTP-Method: "DELETE"
X-RequestDigest: "{form_digest_value}"
```

## Working with files by using REST

The following example shows how to **retrieve all of the files in a folder**.

```http
GET https://{site_url}/_api/web/GetFolderByServerRelativeUrl('/Folder Name')/Files
method: GET
Authorization: "Bearer " + accessToken
Accept: "application/json;odata=verbose"
```

The following example shows how to **retrieve a specific file**.

```http
GET https://{site_url}/_api/web/GetFolderByServerRelativeUrl('/Folder Name')/Files('{file_name}')/$value
Authorization: "Bearer " + accessToken
```

You can also **retrieve a file when you know its URL**, as in the following example.

```http
GET https://{site_url}/_api/web/GetFileByServerRelativeUrl('/Folder Name/{file_name}')/$value
Authorization: "Bearer " + accessToken
```

The following code sample shows how to **retrieve a file when you know its URL by using the REST endpoint above and C#**.

```csharp
/// <summary>
/// Download File Via Rest API
/// </summary>
/// <param name="webUrl">https://xxxxx/sites/DevSite</param>
/// <param name="credentials"></param>
/// <param name="documentLibName">MyDocumentLibrary</param>
/// <param name="fileName">test.docx</param>
/// <param name="path">C:\\</param>
public static void DownloadFileViaRestAPI(string webUrl, ICredentials credentials, string documentLibName, string fileName, string path)
{
    webUrl = webUrl.EndsWith("/") ? webUrl.Substring(0, webUrl.Length - 1) : webUrl;
    string webRelativeUrl = null;
    if (webUrl.Split('/').Length > 3)
    {
        webRelativeUrl = "/" + webUrl.Split(new char[] { '/' }, 4)[3];
    }
    else
    {
        webRelativeUrl = "";
    }

    using (WebClient client = new WebClient())
    {
        client.Headers.Add("X-FORMS_BASED_AUTH_ACCEPTED", "f");
        client.Credentials = credentials;
        Uri endpointUri = new Uri(webUrl + "/_api/web/GetFileByServerRelativeUrl('" + webRelativeUrl + "/" + documentLibName + "/" + fileName + "')/$value");

        byte[] data = client.DownloadData(endpointUri);
        FileStream outputStream = new FileStream(path + fileName, FileMode.OpenOrCreate | FileMode.Append, FileAccess.Write, FileShare.None);
        outputStream.Write(data, 0, data.Length);
        outputStream.Flush(true);
        outputStream.Close();
    }
}

static void Main(string[] args)
{
    string siteURL = "https://xxxxx/sites/DevSite";

    //set credential of SharePoint online
    SecureString secureString = new SecureString();
    foreach (char c in "Password".ToCharArray())
    {
        secureString.AppendChar(c);
    }
    ICredentials credentials = new SharePointOnlineCredentials("xxxxxx.onmicrosoft.com", secureString);

    //set credential of SharePoint 2013(On-Premises)
    //string userName = "Administrator";
    //string password = "xxxxxxx";
    //string domain = "CONTOSO";
    //ICredentials credentials = new NetworkCredential(userName, password, domain);

    DownloadFileViaRestAPI(siteURL, credentials, "MyDocumentLib", "test.docx", "c:\\");

    Console.WriteLine("success");
    Console.ReadLine();
}
```

The following example shows how to **create a file and add it to a folder**.

```http
POST https://{site_url}/_api/web/GetFolderByServerRelativeUrl('/Folder Name')/Files/add(url='a.txt',overwrite=true)
Authorization: "Bearer " + accessToken
Content-Length: {length of request body as integer}
X-RequestDigest: "{form_digest_value}"

"Contents of file"
```

The following example shows how to **update a file by using the PUT method**.

> [!NOTE]
> **PUT** is the only method that you can use to update a file. The **MERGE** method is not allowed.

```http
POST https://{site_url}/_api/web/GetFileByServerRelativeUrl('/Folder Name/{file_name}')/$value
Authorization: "Bearer " + accessToken
Content-Length: {length of request body as integer}
X-HTTP-Method: "PUT"
X-RequestDigest: "{form_digest_value}"

"Contents of file"
```

If you want to update a file's metadata, you have to construct an endpoint that reaches the file as a list item. You can do this because each folder is also a list, and each file is also a list item. Construct an endpoint that looks like this: `https://{site_url}/_api/web/lists/getbytitle('Documents')/items({item_id})`. For information about how to update a list item's metadata, see [Working with lists and list items with REST](working-with-lists-and-list-items-with-rest.md).

You may want to check out a file to make sure that no one changes it before you update it. After your update, you should check the file back in so that others can work with it.

The following example shows how to **check out a file**.

```http
POST https://{site_url}/_api/web/GetFileByServerRelativeUrl('/Folder Name/{file_name}')/CheckOut(),
Authorization: "Bearer " + accessToken
X-RequestDigest: "{form_digest_value}"
```

The following example shows how to **check in a file**.

```http
POST https://{site_url}/_api/web/GetFileByServerRelativeUrl('/Folder Name/{file_name}')/CheckIn(comment='Comment',checkintype=0)
Authorization: "Bearer " + accessToken
X-RequestDigest: "{form_digest_value}"
```

The following example shows how to **delete a file**.

```http
POST https://{site_url}/_api/web/GetFileByServerRelativeUrl('/Folder Name/{file_name}')
Authorization: "Bearer " + accessToken
If-Match: "{etag or *}"
X-HTTP-Method: "DELETE"
X-RequestDigest: "{form_digest_value}"
```

## Working with large files by using REST

When you need to upload a binary file that is larger than 1.5 megabytes (MB), the REST interface is your only option. For a code example that shows you how to upload a binary file that is smaller than 1.5 MB by using the SharePoint JavaScript object model, see [Complete basic operations using JavaScript library code in SharePoint](complete-basic-operations-using-javascript-library-code-in-sharepoint.md). The maximum size of a binary file that you can create with this REST endpoing is 262,144,000 bytes. 

The following example shows how to **create a large binary file**.

> [!WARNING]
> This approach works only with Internet Explorer 10 and the latest versions of other browsers.

```http
POST https://{site_url}/_api/web/GetFolderByServerRelativeUrl('/Folder Name')/Files/Add(url='{file_name}', overwrite=true)
Authorization: "Bearer " + accessToken
Content-Length: {length of request body as integer}
X-RequestDigest: "{form_digest_value}"

Contents of binary file
```

The following code sample shows how to **create a file by using this REST endpoint and the JSOM cross-domain library**.

```javascript
function uploadFileBinary() {
  XDomainTestHelper.clearLog();
  var requestExecutor;
  if (document.getElementById("TxtViaUrl").value.length > 0) {
    requestExecutor = new SP.RequestExecutor(document.getElementById("TxtWebUrl").value, document.getElementById("TxtViaUrl").value);
  }
  else {
    requestExecutor = new SP.RequestExecutor(document.getElementById("TxtWebUrl").value);
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
  
  requestExecutor.executeAsync(info);
}

```

## Working with files attached to list items by using REST

The following example shows how to **retrieve all of the files that are attached to a list item**.

```http
GET https://{site_url}/_api/web/lists/getbytitle('{list_title}')/items({item_id})/AttachmentFiles/
Authorization: "Bearer " + accessToken
Accept: "application/json;odata=verbose"
```

The following example shows how to **retrieve a file that is attached to a list item**.

```http
GET https://{site_url}/_api/web/lists/getbytitle('{list_title}')/items({item_id})/AttachmentFiles('{file_name}')/$value
Authorization: "Bearer " + accessToken
Accept: "application/json;odata=verbose"
```

The following example shows how to **create a file attachment to a list item**.

```http
POST https://{site_url}/_api/web/lists/getbytitle('{list_title}')/items({item_id})/AttachmentFiles/ add(FileName='{file_name}')
Authorization: "Bearer " + accessToken
Content-Length: {length of request body as integer}
X-RequestDigest: "{form_digest_value}"

"Contents of file"
```

The following example shows how to **update a file attachment to a list item by using the PUT method**.

> [!NOTE]
> **PUT** is the only method that you can use to update a file. The **MERGE** method is not allowed.

```http
POST https://{site_url}/_api/web/lists/getbytitle('{list_title}')/items({item_id})/AttachmentFiles('{file_name}')/$value
Authorization: "Bearer " + accessToken
Content-Length: {length of request body as integer}
X-HTTP-Method: "PUT"
X-RequestDigest: "{form_digest_value}"

"Contents of file"
```

The following example shows how to **delete a file that is attached to a list item**.

```http
DELETE https://{site_url}/_api/web/lists/getbytitle('{list_title}')/items({item_id})/AttachmentFiles('{file_name}')
Authorization: "Bearer " + accessToken
Accept: "application/json;odata=verbose"
```

## See also

- [Get to know the SharePoint REST service](get-to-know-the-sharepoint-rest-service.md)
- [Complete basic operations using SharePoint client library code](complete-basic-operations-using-sharepoint-client-library-code.md)
- [Upload a file by using the REST API and jQuery](upload-a-file-by-using-the-rest-api-and-jquery.md)
- [SharePoint-Add-in-REST-OData-BasicDataOperations](https://github.com/OfficeDev/SharePoint-Add-in-REST-OData-BasicDataOperations)
- [Secure data access and client object models for SharePoint Add-ins](secure-data-access-and-client-object-models-for-sharepoint-add-ins.md)
- [Work with external data in SharePoint](work-with-external-data-in-sharepoint.md)
- [OData resources](get-to-know-the-sharepoint-rest-service.md#odata-resources)
- [Develop SharePoint Add-ins](develop-sharepoint-add-ins.md)
