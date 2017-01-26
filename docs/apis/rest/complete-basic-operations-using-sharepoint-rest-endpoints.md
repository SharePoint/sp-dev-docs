# Complete basic operations using SharePoint REST endpoints
Learn how to perform basic create, read, update, and delete (CRUD) operations with the SharePoint 2013 REST interface.


## Developing with the SharePoint client APIs and REST
<a name="ClientAPIs"> </a>

You can perform basic create, read, update, and delete (CRUD) operations by using the Representational State Transfer (REST) interface provided by SharePoint. The REST interface exposes all of the SharePoint entities and operations that are available in the other SharePoint client APIs. One advantage of using REST is that you don't have to add references to any SharePoint libraries or client assemblies. Instead, you make HTTP requests to the appropriate endpoints to retrieve or update SharePoint entities, such as webs, lists, and list items. See  [Get to know the SharePoint REST service](get-to-know-the-sharepoint-rest-service.md) for a thorough introduction to the SharePoint REST interface and its architecture.
 
[Working with lists and list items with REST](working-with-lists-and-list-items-with-rest.md) and [Working with folders and files with REST](working-with-folders-and-files-with-rest.md) explain in greater detail how to work with core SharePoint entities. See [SharePoint-Add-in-REST-OData-BasicDataOperations](https://github.com/OfficeDev/SharePoint-Add-in-REST-OData-BasicDataOperations) for a sample that shows you how to do many of these operations in the context of an ASP.NET web application written in C#.
 
For more details about the sets of APIs available on the SharePoint platform, see  [Choose the right API set in SharePoint](http://msdn.microsoft.com/library/f36645da-77c5-47f1-a2ca-13d4b62b320d%28Office.15%29.aspx). For information about how to use the other client APIs, see  [Complete basic operations using JavaScript library code in SharePoint](https://msdn.microsoft.com/en-us/library/office/jj163201.aspx),  [Complete basic operations using SharePoint 2013 client library code](https://msdn.microsoft.com/en-us/library/office/fp179912.aspx), and  [Build Windows Phone apps that access SharePoint 2013](https://msdn.microsoft.com/en-us/library/office/jj163228.aspx).
 

## HTTP operations in SharePoint REST services
<a name="HTTPOps"> </a>
The endpoints in the SharePoint  REST service correspond to the types and members in the SharePoint client object models. By using HTTP requests, you can use these REST endpoints to perform typical CRUD ( **Create**,  **Read**,  **Update**, and  **Delete**) operations against SharePoint entities, such as lists and sites. 
 
Typically, endpoints that represent  **Read** operations map to HTTP **GET** commands. Endpoints that represent update operations map to HTTP **POST** commands, and endpoints that represent update or insert operations map to HTTP **PUT** commands.
 
In SharePoint, use  **POST** to create entities such as lists and sites. The SharePoint REST service supports sending **POST** commands that include object definitions to endpoints that represent collections. For example, you could send a **POST** command that included a new list object definition in ATOM to the following URL, to create a SharePoint list:
 
 ```
 http://<site url>/_api/web/lists
 ```

For  **POST** operations, any properties that are not required are set to their default values. If you attempt to set a read-only property as part of a **POST** operation, the service returns an exception.
  
Use  **PUT** and **MERGE** operations to update existing SharePoint objects. Any service endpoint that represents an object property **set** operation supports both **PUT** requests and **MERGE** requests. For **MERGE** requests, setting properties is optional; any properties that you do not explicitly set retain their current property. For **PUT** commands, however, any properties you do not explicitly set are set to their default properties. In addition, if you do not specify all required properties in object updates when using HTTP **PUT** commands, the REST service returns an exception.
  
Use the HTTP  **DELETE** command against the specific endpoint URL to delete the SharePoint object represented by that endpoint. In the case of recyclable objects, such as lists, files, and list items, this results in a **Recycle** operation.
 
## Reading data with the SharePoint REST interface
<a name="ReadingData"> </a>
To use the REST capabilities that are built into SharePoint, you construct a RESTful HTTP request, using the OData standard, which corresponds to the client object model API you want to use. Each SharePoint entity is exposed at an endpoint on the SharePoint  site that you are targeting, and its metadata is represented in either XML or JSON format. You can make the HTTP requests in any language, including but not limited to JavaScript and C#.
 
To read information from a REST endpoint, you must know both the URL of the endpoint and the OData representation of the SharePoint entity that is exposed at that endpoint. For example, to retrieve all of the lists in a specific SharePoint site, you would make a  **GET** request to `http://<site url>/_api/web/lists`. You can navigate to this URL in your browser and see the XML that gets returned. When you make the request in code, you can specify whether to receive the OData representation of the lists in XML or JSON.
 
The following C# code demonstrates how to make this  **GET** request that returns a JSON representation of all of a site's lists by using JQuery. It also assumes that you have a valid OAuth access token that is stored in the **accessToken** variable. You do not need the access token if you make this call from inside an add-in web, as you would in a SharePoint-hosted add-in. Note that you cannot obtain an access token from code that is running on a browser client. You must obtain the access token from code that is running on a server. [Context Token OAuth flow for SharePoint Add-ins](https://msdn.microsoft.com/en-us/library/office/fp142382.aspx) and [Authorization Code OAuth flow for SharePoint Add-ins](https://msdn.microsoft.com/en-us/library/office/jj687470.aspx) explain how you can obtain an access token.

```C#

HttpWebRequest endpointRequest =
  (HttpWebRequest)HttpWebRequest.Create(
  "http://<site url>/_api/web/lists");
endpointRequest.Method = "GET";
endpointRequest.Accept = "application/json;odata=verbose";
endpointRequest.Headers.Add("Authorization", 
  "Bearer " + accessToken);
HttpWebResponse endpointResponse =
  (HttpWebResponse)endpointRequest.GetResponse();

```

This request would look a little different if you are writing your add-in in JavaScript but using the SharePoint cross-domain library. In this case, you don't need to provide an access token. The following code demonstrates how this request would look if you are using the cross-domain library and want to receive the OData representation of the lists as XML instead of JSON. (Because Atom is the default response format, you don't have to include an  **Accept** header.) See [Access SharePoint data from add-ins using the cross-domain library](https://msdn.microsoft.com/en-us/library/office/fp179927.aspx) for more information about using the cross-domain library.
 
```
var executor = new SP.RequestExecutor(appweburl);
executor.executeAsync(
    {
        url:
            appweburl +
            "/_api/SP.AppContextSite(@target)/web/lists?@target='" +
            hostweburl + "'",
        method: "GET",
        success: successHandler,
        error: errorHandler
    }
);
```

The code in the following example shows you how to request a JSON representation of all of the lists in a site by using C#. It assumes that you have an OAuth access token that you are storing in the  `accessToken` variable.

```C#
HttpWebRequest endpointRequest = (HttpWebRequest)HttpWebRequest.Create(sharepointUrl.ToString() + "/_api/web/lists");
endpointRequest.Method = "GET";
endpointRequest.Accept = "application/json;odata=verbose";
endpointRequest.Headers.Add("Authorization", "Bearer " + accessToken);
HttpWebResponse endpointResponse = (HttpWebResponse)endpointRequest.GetResponse();

```

### Getting properties that aren't returned with the resource
<a name="NavigationProperties"> </a>
Many property values are returned when you retrieve a resource, but for some properties, you have to send a  **GET** request directly to the property endpoint. This is typical of properties that represent SharePoint entities.
 
The following example shows how to get a property by appending the property name to the resource endpoint. The example gets the value of the  **Author** property from a **File** resource.
 
 ```
 http:// _<site url>_/_api/web/getfilebyserverrelativeurl('/ _<folder name>_/ _<file name>_')/author
 ```

To get the results in JSON format, include an  **Accept** header set to `"application/json;odata=verbose"`.

## Writing data by using the REST interface
<a name="WritingData"> </a>

You can create and update SharePoint entities by constructing RESTful HTTP requests to the appropriate endpoints, just as you do when you're reading data. One key difference, however, is that you use a  **POST** request. When you're updating entities, you also pass a **PUT** or **MERGE** HTTP request method by adding one of those terms to the headers of your request as the value of the **X-HTTP-Method** key. The **MERGE** method updates only the properties of the entity that you specify, while the **PUT** method replaces the existing entity with a new one that you supply in the body of the **POST**. Use the  **DELETE** method to delete the entity. When you create or update an entity, you must provide an OData representation of the entity that you want to create or change in the body of your HTTP request.
 
Another important consideration when creating, updating, and deleting SharePoint entities is that if you aren't using OAuth to authorize your requests, these operations require the server's request form digest value as the value of the  **X-RequestDigest** header. You can retrieve this value by making a **POST** request with an empty body to `http://<site url>/_api/contextinfo` and extracting the value of the `d:FormDigestValue` node in the XML that the **contextinfo** endpoint returns. The following example shows an HTTP request to the **contextinfo** endpoint in C#.
 
```C#

HttpWebRequest endpointRequest =
  (HttpWebRequest)HttpWebRequest.Create(
  "http://<site url>/_api/contextinfo");
endpointRequest.Method = "POST";
endpointRequest.Accept = "application/json;odata=verbose";
HttpWebResponse endpointResponse =
  (HttpWebResponse)endpointRequest.GetResponse();

```

If you're using the authentication and authorization flow described in  [Authorization and authentication of SharePoint Add-ins](https://msdn.microsoft.com/en-us/library/office/fp142384.aspx), you don't need to include the request digest in your requests.
 
If you're using the JavaScript cross-domain library, SP.RequestExecutor handles getting and sending the form digest value for you.
 
If you're creating a SharePoint-hosted SharePoint Add-in, you don't have to make a separate HTTP request to retrieve the form digest value. Instead, you can retrieve the value in JavaScript code from the SharePoint a page (if the page uses the default master page), as shown in the following example, which uses JQuery and creates a list.
 
```
jQuery.ajax({
        url: "http://<site url>/_api/web/lists",
        type: "POST",
        data:  JSON.stringify({ '__metadata': { 'type': 'SP.List' }, 'AllowContentTypes': true,
 'BaseTemplate': 100, 'ContentTypesEnabled': true, 'Description': 'My list description', 'Title': 'Test' }
),
        headers: { 
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "content-length": <length of post body>,
            "X-RequestDigest": $("#__REQUESTDIGEST").val()
        },
        success: doSuccess,
        error: doError
});
```

The following example shows how to update the list that is created in the previous example. The example changes the title of the list, uses JQuery, and assumes that you are doing this operation in a SharePoint-hosted add-in.

```
jQuery.ajax({
        url: "http://<site url>/_api/web/lists/GetByTitle('Test')",
        type: "POST",
        data: JSON.stringify({ '__metadata': { 'type': 'SP.List' }, 'Title': 'New title' }),
        headers: { 
            "X-HTTP-Method":"MERGE",
            "accept": "application/json;odata=verbose",
            "content-type": "application/json;odata=verbose",
            "content-length": <length of post body>,
            "X-RequestDigest": $("#__REQUESTDIGEST").val(),
            "IF-MATCH": "*"
        },
        success: doSuccess,
        error: doError
});

```

The value of the  **IF-MATCH** key in the request headers is where you specify the **etag** value of a list or list item. This particular value applies only to lists and list items, and it is intended to help you avoid concurrency problems when you update those entities. The previous example uses an asterisk (*) for this value, and you can use that value whenever you don't have any reason to worry about concurrency issues. Otherwise, you should obtain the **etag** value or a list or list item by performing a **GET** request that retrieves the entity. The response headers of the resulting HTTP response will pass the etag as the value of the **ETag** key. This value is also included in the entity metadata. The following example shows the opening `<entry>` tag for the XML node that contains the list information. The **m:etag** property contains the **etag** value.

```XML
<entry xml:base="http://site url/_api/" xmlns=http://www.w3.org/2005/Atom 
xmlns:d="http://schemas.microsoft.com/ado/2007/08/dataservices" 
xmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata"
xmlns:georss="http://www.georss.org/georss" xmlns:gml="http://www.opengis.net/gml" m:etag=""1"">
```

## Creating a site with REST
<a name="bk_CreateSite"> </a>

The following example shows how to create a site in JavaScript.

```
jQuery.ajax({
    url: "http://<site url>/_api/web/webinfos/add",
    type: "POST",
    data: JSON.stringify(
        {'parameters': {
            '__metadata':  {'type': 'SP.WebInfoCreationInformation' },
            'Url': 'RestSubWeb',
            'Title': 'RestSubWeb',
            'Description': 'REST created web',
            'Language':1033,
            'WebTemplate':'sts',
            'UseUniquePermissions':false}
        }
    ),
    headers: { 
        "accept": "application/json; odata=verbose", 
        "content-type":"application/json;odata=verbose",
        "content-length": <length of post body>,
        "X-RequestDigest": $("#__REQUESTDIGEST").val() 
    },
    success: doSuccess,
    error: doError
});
```

## How REST requests differ by environment
<a name="bk_HowRequestsDiffer"> </a>

Building and sending an HTTP request may vary according to language, library, and add-in type, so you often need to change one or more request components when you're translating a request from one environment to another. For example, jQuery AJAX requests use  **data** and **type** parameters to specify the request body and type, but cross-domain library requests use **body** and **method** parameters to specify those values.
 
The following sections describe other common differences across environments.

### The way you get and send the form digest value depends on the add-in
<a name="FormDigest"> </a>

When you send a POST request, the request must include the form digest value in the  **X-RequestDigest** header. However, the way you get and send the value differs by add-in:
 
- In SharePoint-hosted add-ins, you can just pass the following header: 
 
 `X-RequestDigest": $("#__REQUESTDIGEST").val()`
    
- In cloud-hosted add-ins that use OAuth, first retrieve the form digest value by sending a request to the  **contextinfo** endpoint, and then add it to requests, as shown in [Writing data by using the REST interface](complete-basic-operations-using-sharepoint-rest-endpoints.md#WritingData).
    
- In cloud-hosted add-ins that use the JavaScript cross-domain library, you don't need to specify the form digest value. By default, SP.RequestExecutor automatically handles this for you. (It also handles the content-length value.)

### Add-ins that use OAuth must pass access tokens in requests
<a name="OAuthTokens"> </a>

Cloud-hosted add-ins use either OAuth or the cross-domain library to authorize access to SharePoint data. Add-in components with code that runs on a remote web server must use OAuth to authorize access to SharePoint data. In this case, you need to include an  **Authorization** header to send the access token. See [Reading data with the SharePoint REST interface](complete-basic-operations-using-sharepoint-rest-endpoints.md#ReadingData) for an example that adds an authorization header to an **HTTPWebRequest** object.
 

 **Note**  Cloud-hosted add-in components that are written in JavaScript must use the  **SP.RequestExecutor** object in the cross-domain library to access to SharePoint data. Cross-domain library requests don't need to include an access token.
 
To learn more about OAuth access tokens and how to get them, see  [Context Token OAuth flow for SharePoint Add-ins](https://msdn.microsoft.com/en-us/library/office/fp142382.aspx) and [Authorization Code OAuth flow for SharePoint Add-ins](https://msdn.microsoft.com/en-us/library/office/jj687470.aspx).
 
### Endpoint URIs in cross-domain requests use SP.AppContextSite to change the context
<a name="AppContextSite"> </a>

Requests are sent to the resource endpoint that's specified in the  **url** property of the request. Endpoint URIs use the following format:
 
 `_<site url>_/_api/ _<context>_/ _<resource>_ (example, https://contoso.com/_api/web/lists)`
 
Cross-domain library requests use this format when they access data on the add-in web, which is the default context for cross-domain library requests. But to access data on the host web or on another site collection, the requests need to initialize the host web or other site collection as the context. To do this, they use the  **SP.AppContextSite** endpoint in the URI, as shown in Table 1. The example URIs in Table 1 use the **@target** alias to send the target URL in the query string because the URL contains a special character (':').

 **Note**  An add-in web instance is required for a cloud-hosted add-in to access SharePoint data when using the cross-domain library.

**Table 1. Using the SP.AppContextSite endpoint to change the context of the request**


|**Add-in type**|**Cross-domain data access scenario**|**Example endpoint URI**|
|:-----|:-----|:-----|
|Cloud-hosted|JavaScript add-in component accessing host web data by using the cross-domain library| _<app web url>_/_api/SP.AppContextSite(@target)/web/lists?@target=' _<host web url>_'|
|Cloud-hosted|JavaScript add-in component accessing data in a site collection other than the host web by using the cross-domain library (tenant-scoped add-ins only)| _<app web url>_/_api/SP.AppContextSite(@target)/web/title?@target=' _<target site url>_'|
|SharePoint-hosted|Add-in web component accessing data in another site collection (tenant-scoped add-ins only)| _<app web url>_/_api/SP.AppContextSite(@target)/web/title?@target=' _<target site url>_'|

 **Note**  Cross-domain data access scenarios also require appropriate add-in permissions. For more information, see  [Access data from the host web](https://msdn.microsoft.com/en-us/library/office/fp179927.aspx#SP15Accessdatafromremoteapp_Hostweb) and [Access data across site collections](https://msdn.microsoft.com/en-us/library/office/fp179927.aspx#SP15Accessdatafromremoteapp_TenantScope).

SharePoint Add-ins can get the add-in web URL and host web URL from the query string of the add-in page, as shown in the following code example. The example also shows how to reference the cross-domain library, which is defined in the SP.RequestExecutor.js file on the host web. The example assumes that your add-in launches from SharePoint. See  [Authorization Code OAuth flow for SharePoint Add-ins](https://msdn.microsoft.com/en-us/library/office/jj687470.aspx) for guidance on setting your SharePoint context correctly when your add-in does not launch from SharePoint.

```javascript
var hostweburl;
var appweburl;

// Get the URLs for the add-in web the host web URL from the query string.
$(document).ready(function () {
  //Get the URI decoded URLs.
  hostweburl = decodeURIComponent(getQueryStringParameter("SPHostUrl"));
  appweburl = decodeURIComponent(getQueryStringParameter("SPAppWebUrl"));

  // Load the SP.RequestExecutor.js file.
  $.getScript(hostweburl + "/_layouts/15/SP.RequestExecutor.js", runCrossDomainRequest);
});

// Build and send the HTTP request.
function runCrossDomainRequest() {
  var executor = new SP.RequestExecutor(appweburl); 
  executor.executeAsync({
      url: appweburl + "/_api/SP.AppContextSite(@target)/web/lists?@target='" + hostweburl + "'",
      method: "GET", 
      headers: { "Accept": "application/json; odata=verbose" }, 
      success: successHandler, 
      error: errorHandler 
  });
}

// Get a query string value.
// For production add-ins, you may want to use a library to handle the query string.
function getQueryStringParameter(paramToRetrieve) {
  var params = document.URL.split("?")[1].split("&amp;");
  var strParams = "";
  for (var i = 0; i < params.length; i = i + 1) {
    var singleParam = params[i].split("=");
    if (singleParam[0] == paramToRetrieve) return singleParam[1];
  }
}
… // success and error callback functions
```

## Properties used in REST requests
<a name="bk_requestElements"> </a>

Table 2 shows properties that are commonly used in HTTP requests for the SharePoint REST service.
 
**Table 2. When to use REST request properties in HTTP requests**

|**Properties**|**When required**|**Description**|
|:-----|:-----|:-----|
|**url**|All requests|The URL of the REST resource endpoint. Example:  `http://<site url>/_api/web/lists`|
|**method** (or **type**)|All requests|The HTTP request method:  **GET** for read operations and **POST** for write operations. **POST** requests can perform update or delete operations by specifying a **DELETE**,  **MERGE**, or  **PUT** verb in the **X-HTTP-Method** header.|
|**body** (or **data**)|**POST** requests that send data in the request body|The body of the POST request. Sends data (such as complex types) that can't be sent in the endpoint URI. Used with the  **content-length** header.|
|**Authentication** header|Remote add-ins that are using OAuth to authenticate users. Does not apply when using JavaScript or the cross domain library.|Sends the OAuth access token (obtained from a Microsoft Access Control Service (ACS) secure token server) that's used to authenticate the user for the request. Example:  `"Authorization": "Bearer " + accessToken`, where  `accessToken` represents the variable that stores the token. Tokens must be retrieved by using server-side code.|
|**X-RequestDigest** header|**POST** requests (except SP.RequestExecutor requests)|Remote add-ins that use OAuth can get the form digest value from the  `http://<site url>/_api/contextinfo` endpoint. SharePoint-hosted add-ins can get the value from the **#__REQUESTDIGEST** page control if it's available on the SharePoint page. See [Writing data by using the REST interface](#WritingData).|
|**accept** header|Requests that return SharePoint metadata|Specifies the format for response data from the server. The default format is  `application/atom+xml`. Example:  `"accept":"application/json;odata=verbose"`|
|**content-type** header|**POST** requests that send data in the request body|Specifies the format of the data that the client is sending to the server. The default format is  `application/atom+xml`. Example:  `"content-type":"application/json;odata=verbose"`|
|**content-length** header|**POST** requests that send data in the request body (except SP.RequestExecutor requests)|Specifies the length of the content. Example:  `"content-length":requestBody.length`|
|**IF-MATCH** header|**POST** requests for **DELETE**,  **MERGE**, or  **PUT** operations, primarily for changing lists and libraries.|Provides a way to verify that the object being changed has not been changed since it was last retrieved. Or, lets you specify to overwrite any changes, as shown in the following example:  `"IF-MATCH":"*"`|
|**X-HTTP-Method** header|**POST** requests for **DELETE**,  **MERGE**, or  **PUT** operations|Used to specify that the request performs an update or delete operation. Example:  `"X-HTTP-Method":"PUT"`|
|**binaryStringRequestBody**|SP.RequestExecutor  **POST** requests that send binary data in the body|Specifies whether the request body is a binary string.  **Boolean**.|
|**binaryStringResponseBody**|SP.RequestExecutor requests that return binary data|Specifies whether the response is a binary string.  **Boolean**.|

## Batch job support
<a name="batch"> </a>
The SharePoint Online (and on-premise SharePoint 2016 and later) REST service supports combining multiple requests into a single call to the service by using the OData  `$batch` query option. For details and links to code samples, see [Make batch requests with the REST APIs](make-batch-requests-with-the-rest-apis.md).
 

## Additional resources
<a name="bk_addresources"> </a>

-  [Working with lists and list items with REST](working-with-lists-and-list-items-with-rest.md)
-  [Working with folders and files with REST](working-with-folders-and-files-with-rest.md) 
-  [REST API reference and samples](http://msdn.microsoft.com/library/02128c70-9d27-4388-9374-a11bce68fdb8%28Office.15%29.aspx)
-  [SharePoint-Add-in-REST-OData-BasicDataOperations](https://github.com/OfficeDev/SharePoint-Add-in-REST-OData-BasicDataOperations)
-  [SharePoint 2013: Perform basic data access operations on files and folders by using REST](http://code.msdn.microsoft.com/SharePoint-2013-Perform-ab9c4ae5)
-  [Complete basic operations using SharePoint 2013 client library code](https://msdn.microsoft.com/en-us/library/office/fp179912.aspx)
-  [Complete basic operations using JavaScript library code in SharePoint 2013](https://msdn.microsoft.com/en-us/library/office/jj163201.aspx)
-  [Develop SharePoint Add-ins](https://msdn.microsoft.com/en-us/library/office/jj163794.aspx)
-  [Secure data access and client object models for SharePoint Add-ins](https://msdn.microsoft.com/en-us/library/office/fp179897.aspx)
-  [Work with external data in SharePoint 2013](https://msdn.microsoft.com/en-us/library/office/fp179893.aspx)
-  [Open Data Protocol](http://www.odata.org/)
-  [OData: JavaScript Object Notation (JSON) Format](http://www.odata.org/documentation/odata-version-2-0/JSON-format/)
-  [Set custom permissions on a list by using the REST interface](set-custom-permissions-on-a-list-by-using-the-rest-interface.md)
    
 

 

 

