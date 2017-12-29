---
title: Access SharePoint data from add-ins using the cross-domain library
description: Access data in a SharePoint website from your add-in by using the cross domain library in SharePoint.
ms.date: 12/29/2017
ms.prod: sharepoint
---


# Access SharePoint data from add-ins using the cross-domain library

When you build SharePoint Add-ins, you usually have to incorporate data from various sources. But for [security reasons](https://msdn.microsoft.com/library/cc709423.aspx), blocking mechanisms prevent communication with more than one domain at a time. These security mechanisms are implemented in most browsers, making it difficult or impossible to accomplish client-side calls across domains.

When a user requests a page from your add-in domain, the client-side communication is bound only to that domain. Your add-in can issue client-side calls from the page only to other resources in the same domain. However, add-ins usually require resources from other domains, such as the SharePoint domain, to fulfill their scenarios. In the code on your page, you may try to issue a request to the SharePoint domain, which is blocked by the browser. You usually see an **Access is denied** error. The error doesn't imply that you don't have permissions to the requested resources but, most likely, you can't even issue a request to the mentioned resources.
 
When you use the cross-domain library, the webpages in your add-in can access data in your add-in domain and the SharePoint domain. The cross-domain library is a client-side alternative in the form of a JavaScript file (SP.RequestExecutor.js) that is hosted on the SharePoint website that you can reference in your remote add-in. The cross-domain library lets you interact with more than one domain in your remote add-in page through a proxy. It is a good option if you like your add-in code to run on the client instead of on the server, and if there are connectivity barriers, such as firewalls, between SharePoint and your remote infrastructure. 

You can access data in the host web—for example, you can access lists that end users interact with regardless of your add-in. Or you can access data in the add-in web, such as lists specifically provisioned for your add-in. Add-ins can also access other site collections and websites as long as the add-in has tenant-scoped permissions and it has been deployed as a batch installation by using the add-in catalog.
 
> [!NOTE] 
> In this topic, **add-in domain** refers to the domain that hosts the add-in pages. This can be the domain of a remote web application in a provider-hosted add-in, but add-in pages can also be on SharePoint in the add-in web and make calls to the host web domain. In the latter scenario, the add-in domain is the domain of the add-in web.

The main example in this article shows how to build an add-in that reads data on the add-in web and displays it on a webpage. The [Next steps](SP15Accessdatafromremoteapp_Next) section shows more scenarios that build on top of the main example.
 

<a name="SP15Accessdatafromremoteapp_Prereq"> </a>

## Prerequisites

To follow the examples in this article, you need the following:

- [Visual Studio](https://docs.microsoft.com/en-us/visualstudio/install/install-visual-studio) installed either remotely or on the computer where you installed SharePoint.
    
- Visual Studio includes the **Microsoft Office Developer Tools for Visual Studio**. Sometimes a version of the tools is released between updates of Visual Studio. To be sure that you have the latest version of the tools, run the [installer for Office Developer Tools for Visual Studio 2013](http://aka.ms/OfficeDevToolsForVS2013), or the [installer for Office Developer Tools for Visual Studio 2015](http://aka.ms/OfficeDevToolsForVS2015).  
    
- An on-premises SharePoint development environment. See [Set up an on-premises development environment for SharePoint Add-ins](set-up-an-on-premises-development-environment-for-sharepoint-add-ins.md).


<a name="SP15Accessdatafromremoteapp_Codeexample"> </a>

## Read data on the add-in web using the cross-domain library

In this example, there is a simple page hosted outside of SharePoint that uses a Representational State Transfer (REST) endpoint to read data in a SharePoint website (the add-in web). Because the cross-domain library requires an add-in web, it makes sense to start with this scenario.

To read data from the add-in web, you must do the following:

1. Create a SharePoint Add-in and web projects.

2. Create list items on the add-in web. This step also ensures that an add-in web is created when users deploy the add-in.

3. Create an add-in page that uses the cross-domain library to read the list items.
    
The following figure shows a webpage that displays the data on the add-in web.

![Cross domain read items sample result screen](../images/CrossDomainReadItemsResult.png)
 

### To create a SharePoint Add-in and web projects

1. Open Visual Studio as administrator. (To do this, right-click the Visual Studio icon on the **Start** menu, and select **Run as administrator**.)
    
2. Create a new project by using the **Add-in for SharePoint** template. The **Add-in for SharePoint** template in Visual Studio is located under **Templates** > **Visual C#** > **Office SharePoint** > **Add-ins**.
     
3. Provide the SharePoint website URL that you want to use for debugging.   
 
4. Select **Provider-hosted** as the hosting option for your add-in.
    
    > [!NOTE] 
    > You can also use the cross-domain library in a SharePoint-hosted add-in. However, in a SharePoint-hosted add-in, the add-in page is already on the add-in web, in which case it wouldn't need the cross-domain library to read the list items. For a SharePoint-hosted add-in sample that reads data on the host web, see [Use the cross-domain library in a SharePoint-hosted add-in (REST)](https://code.msdn.microsoft.com/SharePoint-2013-Use-the-00c37814) or see [Access data from the host web](#SP15Accessdatafromremoteapp_Hostweb) later in this article.


### To create list items on the add-in web

1. Right-click the SharePoint Add-in project in **Solution Explorer**. Select **Add** > **New Item**.    
 
2. Select **Visual C# Items** > **Office/SharePoint** > **List**. Set the name of your list to **Announcements**.

3. Double-click **Announcements** > **Elements.xml**. Paste the following XML nodes as children of the **ListInstance** element.
        
    ```XML
    <Data>
        <Rows>
            <Row>
                <Field Name="Title">Lorem ipsum 1</Field>
                <Field Name="Body">Sed ut perspiciatis, unde omnis iste...</Field>
            </Row>
            <Row>
                <Field Name="Title">Lorem ipsum 2</Field>
                <Field Name="Body">Sed ut perspiciatis, unde omnis iste...</Field>
            </Row>
        </Rows>
    </Data>
    ```


### To create an add-in page that uses the cross-domain library

1. Double-click **Default.aspx** in the web project in **Solution Explorer**.
    
2. Copy the following code and paste it in the Default.aspx file. The code performs the following tasks:
    
    - Loads the jQuery library from the Microsoft CDN.
        
    - Provides a placeholder for the result.
        
    - Extracts the add-in web URL from the query string.
        
    - Loads the cross-domain library JavaScript by using the **getScript** function in jQuery.
        
        The function loads the required resources and then continues to the specified function, ensuring that the cross-domain library is loaded and available to use by the subsequent code.
        
    - Instantiates the **RequestExecutor** object. By default, RequestExecutor uses the add-in web as the context site.
        
        > [!NOTE] 
        > (REST) or object (JSOM). To learn more about AppContextSite, see [Access data from the host web](#SP15Accessdatafromremoteapp_Hostweb) later in this article.

    - Issues a REST call to the list items endpoint.
        
    - Handles successful completion, displaying the list items on the webpage.   
    
    - Handles errors, displaying the error message on the webpage.
    
 

```HTML
  
<html>
    <head>
        <title>Cross-domain sample</title>
    </head>
    <body>
        <!-- This is the placeholder for the announcements -->
        <div id="renderAnnouncements"></div>
        <script 
            type="text/javascript" 
            src="//ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.2.min.js">
        </script>
        <script type="text/javascript">
          var hostweburl;
          var appweburl;

          // Load the required SharePoint libraries
          $(document).ready(function () {
            //Get the URI decoded URLs.
            hostweburl =
                decodeURIComponent(
                    getQueryStringParameter("SPHostUrl")
            );
            appweburl =
                decodeURIComponent(
                    getQueryStringParameter("SPAppWebUrl")
            );

            // resources are in URLs in the form:
            // web_url/_layouts/15/resource
            var scriptbase = hostweburl + "/_layouts/15/";

            // Load the js files and continue to the successHandler
            $.getScript(scriptbase + "SP.RequestExecutor.js", execCrossDomainRequest);
          });

          // Function to prepare and issue the request to get
          //  SharePoint data
          function execCrossDomainRequest() {
            // executor: The RequestExecutor object
            // Initialize the RequestExecutor with the add-in web URL.
            var executor = new SP.RequestExecutor(appweburl);

            // Issue the call against the add-in web.
            // To get the title using REST we can hit the endpoint:
            //      appweburl/_api/web/lists/getbytitle('listname')/items
            // The response formats the data in the JSON format.
            // The functions successHandler and errorHandler attend the
            //      sucess and error events respectively.
            executor.executeAsync(
                {
                  url:
                      appweburl +
                      "/_api/web/lists/getbytitle('Announcements')/items",
                  method: "GET",
                  headers: { "Accept": "application/json; odata=verbose" },
                  success: successHandler,
                  error: errorHandler
                }
            );
          }

          // Function to handle the success event.
          // Prints the data to the page.
          function successHandler(data) {
            var jsonObject = JSON.parse(data.body);
            var announcementsHTML = "";

            var results = jsonObject.d.results;
            for (var i = 0; i < results.length; i++) {
              announcementsHTML = announcementsHTML +
                  "<p><h1>" + results[i].Title +
                  "</h1>" + results[i].Body +
                  "</p><hr>";
            }

            document.getElementById("renderAnnouncements").innerHTML =
                announcementsHTML;
          }

          // Function to handle the error event.
          // Prints the error message to the page.
          function errorHandler(data, errorCode, errorMessage) {
            document.getElementById("renderAnnouncements").innerText =
                "Could not complete cross-domain call: " + errorMessage;
          }

          // Function to retrieve a query string value.
          // For production purposes you may want to use
          //  a library to handle the query string.
          function getQueryStringParameter(paramToRetrieve) {
            var params =
                document.URL.split("?")[1].split("&amp;");
            var strParams = "";
            for (var i = 0; i < params.length; i = i + 1) {
              var singleParam = params[i].split("=");
              if (singleParam[0] == paramToRetrieve)
                return singleParam[1];
            }
          }
        </script>
    </body>
</html>
```

<br/>

### To build and run the solution

1. Select the F5 key.
    
    > [!NOTE] 
    > When you select F5, Visual Studio builds the solution, deploys the add-in, and opens the permissions page for the add-in.

2. Select the **Trust It** button.    
 
3. Select the add-in icon on the **Site Contents** page.
    
If you prefer downloadable code samples, you can get the following from the code gallery:

- [SharePoint-Add-in-REST-OData-CrossDomain](https://github.com/OfficeDev/SharePoint-Add-in-REST-OData-CrossDomain)
- [SharePoint-Add-in-JSOM-CrossDomain](https://github.com/OfficeDev/SharePoint-Add-in-JSOM-CrossDomain).
 

#### Troubleshooting the solution


|**If you see this error message…**|**Try…**|
|:-----|:-----|
|"Sorry, we had some trouble accessing your site.There is also a button to fix the error, but it doesn't correct the problem."|You may have hit a known problem with security zones in Internet Explorer; see [Work with the cross-domain library across different Internet Explorer security zones in SharePoint Add-ins](work-with-the-cross-domain-library-across-different-internet-explorer-security-z.md).|
|"The required functionalities are not supported by your browser. Please make sure you are using IE 8 or above, or other modern browser. Please make sure the 'X-UA-Compatible' meta tag is set to be 'IE=8' or above."|The cross-domain library requires a document mode of **IE8** or later. In some scenarios, the document mode is set to **IE7** by default. You can use the Internet Explorer developer tools to determine and change the document mode of your page. For more information, see [Defining Document Compatibility](https://msdn.microsoft.com/library/cc288325.aspx).|
|"'Type' is undefined. Additionally, your add-in uses the JavaScript Object Model (JSOM)." |The JSOM uses the **Type.registerNamespace** method in the Microsoft Ajax library to register the **SP** namespace. Use the following code to add a reference to the Microsoft Ajax library from your page:<br/><br/>```HTML <script  type="text/javascript"  src="//ajax.aspnetcdn.com/ajax/4.0/1/MicrosoftAjax.js"></script>```|


<a name="SP15Accessdatafromremoteapp_Next"> </a>

## Next steps: more cross-domain library scenarios

This article shows how to query a REST endpoint to read data from the add-in web by using an add-in page that is not hosted on SharePoint. You can also explore the following scenarios and details about the cross-domain library.
 
<a name="SP15Accessdatafromremoteapp_JSOM"> </a>
 
### Use the JSOM to read data from the add-in web

Depending on your preference, you might want to use the JSOM instead of REST to query data from the add-in web. You must complete additional tasks to use the cross-domain library with JSOM:

- Reference the SharePoint JSOM in your add-in page.

- Initialize the **ProxyWebRequestExecutorFactory** object and set it as the factory of the context object.

- Access the SharePoint objects to read the data from the list.

- Load the objects in the context and execute the query.

For a code sample that shows how to perform the tasks, see [SharePoint-Add-in-JSOM-CrossDomain](https://github.com/OfficeDev/SharePoint-Add-in-JSOM-CrossDomain). 

For more information about how to use the JSOM, see [Using the JavaScript object model (JSOM) in add-ins for SharePoint](https://blogs.msdn.microsoft.com/officeapps/2012/09/04/using-the-javascript-object-model-jsom-in-apps-for-sharepoint/).
 

<a name="SP15Accessdatafromremoteapp_Hostweb"> </a> 

### Access data from the host web

The example on this page shows how to read data from the add-in web. This works fine as the starting example because the cross-domain library initially uses the add-in as the context site. However, there are many scenarios where you want to access data on the host web. A few tasks are required to access data on the host web: 

- Set the host web as the context site for the cross-domain library.

- Provide appropriate permissions to the add-in.

You can change the context site by using the **AppContextSite** endpoint (REST) or object (JSOM). The following example shows how to change the context site by using the REST endpoint:

```
executor.executeAsync(
    {
        url:
            appweburl +
            "/_api/SP.AppContextSite(@target)/web/title?@target='" +
            hostweburl + "'",
        method: "GET",
        headers: { "Accept": "application/json; odata=verbose" },
        success: successHandler,
        error: errorHandler
    }
);
```

The following code example shows how to change the context site using JSOM:

```js
context = new SP.ClientContext(appweburl);
factory = new SP.ProxyWebRequestExecutorFactory(appweburl);
context.set_webRequestExecutorFactory(factory);
appContextSite = new SP.AppContextSite(context, hostweburl);

this.web = appContextSite.get_web();
context.load(this.web);
```

By default, your add-in has permissions to the add-in web, but not to the host web. The following example shows a manifest section that declares a permission request to read data from the host web:

```XML
<AppPermissionRequests>
    <AppPermissionRequest 
        Scope="http://sharepoint/content/sitecollection/web" 
        Right="Read" />
</AppPermissionRequests>
```

Ensure that you create a resource on the add-in web (such as an empty page or list) to force the provisioning of the add-in web, which is required to use the cross-domain library.
 

<a name="SP15Accessdatafromremoteapp_TenantScope"> </a> 

### Access data across site collections

With the cross-domain library, you can access data across site collections in the same tenant. There are some tasks that you need to complete to access data across site collections:

- Add a permission request to access data in the tenant.

- In your code, switch the context site to the site collections that you want to query.

- Add the add-in to the add-in catalog.

- Deploy the add-in as a tenant-scoped add-in to a website. For an example on how to deploy as a tenant-scoped add-in, see the description of the [Use the cross-domain library in a tenant-scoped add-in (REST)](http://code.msdn.microsoft.com/SharePoint-2013-Use-the-6b3e4c1e) code sample.

Your add-in also needs permission to access data from the tenant. The following example shows a manifest section that declares a permission request to read data from the tenant:

```XML
<AppPermissionRequests>
  <AppPermissionRequest 
    Scope="http://sharepoint/content/tenant" 
    Right="Read" />
</AppPermissionRequests>
```

To switch the context site in your code, use the **AppContextSite** endpoint (REST) or object (JSOM), just like in the [Access data from the host web](#SP15Accessdatafromremoteapp_Hostweb) section. 

Here is a reminder of the REST endpoint: /_api/SP.AppContextSite(@target)/web/title?@target='weburl', and an example on how to instantiate the object in JSOM: `appContextSite = new SP.AppContextSite(context, weburl);`.
 
As a developer, you can only deploy tenant-scoped add-ins from the add-in catalog. You can provision an add-in catalog to your on-premises or SharePoint Online environments. Uploading your add-in to the add-in catalog is as simple as uploading a file to a document library. For detailed instructions, see [Use the App Catalog to make custom business apps available for your SharePoint Online environment](https://support.office.com/en-us/article/Use-the-App-Catalog-to-make-custom-business-apps-available-for-your-SharePoint-Online-environment-0b6ab336-8b83-423f-a06b-bcc52861cba0?CorrelationId=94979966-ff7b-4e00-985a-5c9e614b35c9&ui=en-US&rs=en-US&ad=US&ocmsassetID=HA102772362).

From the add-in catalog, you can deploy the add-in to one or more websites in the tenant. Because your add-in has permissions to access data in the tenant, you only have to deploy to one website to access data on the whole tenant. For instructions on how to deploy an add-in from the add-in catalog, see [Deploy a custom add-in](https://support.office.com/en-us/article/Use-the-App-Catalog-to-make-custom-business-apps-available-for-your-SharePoint-Online-environment-0b6ab336-8b83-423f-a06b-bcc52861cba0?CorrelationId=94979966-ff7b-4e00-985a-5c9e614b35c9&ui=en-US&rs=en-US&ad=US&ocmsassetID=HA102772362) 

To download a code sample that shows how to access data across site collections, see [Use the cross-domain library in a tenant-scoped add-in (REST)](http://code.msdn.microsoft.com/SharePoint-2013-Use-the-6b3e4c1e).
 

<a name="SP15Accessdatafromremoteapp_IEZones"> </a> 

### Issuing calls across different security zones

The cross-domain library uses a proxy page that is hosted in an **IFrame** on the add-in page to enable communication. When the add-in page and SharePoint website are in different security zones, authorization cookies can't be sent. If there are no authorization cookies, and the IFrame tries to load the proxy page, it is redirected to the SharePoint sign-in page. The SharePoint sign-in page can't be contained in an IFrame for security reasons. In these scenarios, the library cannot load the proxy page, and communication with SharePoint is not possible.

However, there is a solution for these scenarios. The solution is the **apphost pattern**, which consists in wrapping the add-in pages in a page hosted in the add-in web. It's a good idea to use the apphost pattern in add-ins that use the cross-domain library, even if there are no evident security boundaries. For more information, see [Work with the cross-domain library across different Internet Explorer security zones in SharePoint Add-ins](work-with-the-cross-domain-library-across-different-internet-explorer-security-z.md).
 
<a name="SP15Accessdatafromremoteapp_SPhosted"> </a> 

### Access data from an additional remote host in a SharePoint-hosted add-in

By default, a SharePoint-hosted add-in is allowed to issue cross-domain calls to the host web, provided that it has proper permissions. However, a SharePoint-hosted add-in can also specify a remote host in the **AllowedRemoteHostUrl** attribute of its **AppPrincipal**. This effectively lets you issue cross-domain calls from the add-in web and from another host elsewhere.

To download a sample of a SharePoint-hosted add-in that uses the cross-domain library, see [Code sample: Use the cross-domain library in a SharePoint-hosted add-in (REST)](http://code.msdn.microsoft.com/SharePoint-2013-Use-the-00c37814).

## See also
<a name="SP15Accessdatafromremoteapp_Addresources"> </a>

- [Code sample: Get the host web title using the cross-domain library (REST)](http://code.msdn.microsoft.com/SharePoint-2013-Get-the-0ec36bb6)
- [Code sample: Get the host web title using the cross-domain library (JSOM)](http://code.msdn.microsoft.com/office/SharePoint-2013-Get-the-563f2a3d)
- [Code sample: Use the chrome control and the cross-domain library (REST)](http://code.msdn.microsoft.com/SharePoint-2013-Use-the-a759e9f8)
- [Code sample: Use the chrome control and the cross-domain library (JSOM)](http://code.msdn.microsoft.com/SharePoint-2013-Use-the-97c30a2e)
- [Code sample: Use custom actions and the cross-domain library to order books](http://code.msdn.microsoft.com/SharePoint-2013-Open-a-36d1598d)
- [Secure data access and client object models for SharePoint Add-ins](secure-data-access-and-client-object-models-for-sharepoint-add-ins.md) 
- [Create a custom proxy page for the cross-domain library in SharePoint](create-a-custom-proxy-page-for-the-cross-domain-library-in-sharepoint.md)
- [Query a remote service using the web proxy in SharePoint](query-a-remote-service-using-the-web-proxy-in-sharepoint.md)
- [Creating SharePoint Add-ins that use the cross-domain library](creating-sharepoint-add-ins-that-use-the-cross-domain-library.md)
- [Authorization and authentication of SharePoint Add-ins](authorization-and-authentication-of-sharepoint-add-ins.md)
