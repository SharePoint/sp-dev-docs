# Creating SharePoint Add-ins that use the cross-domain library
Learn about the SharePoint cross-domain JavaScript library.
 

 **Note**  The name "apps for SharePoint" is changing to "SharePoint Add-ins". During the transition, the documentation and the UI of some SharePoint products and Visual Studio tools might still use the term "apps for SharePoint". For details, see  [New name for apps for Office and SharePoint](new-name-for-apps-for-sharepoint#bk_newname).
 

There are some scenarios in which neither the low-trust nor the high-trust authorization systems can be used by a SharePoint Add-in, or they are not a good choice as the only means for the add-in to gain authorization to SharePoint resources. Examples:
 

- The remote components of the SharePoint Add-in are not on-premise, but a corporate firewall blocks server-to-server communication between SharePoint and ACS, thereby preventing the use of the low-trust system.
    
 
- The SharePoint Add-in is designed as a single-page web application that relies on client-side JavaScript for data operations with SharePoint.
    
 
- The SharePoint Add-in relies mainly on server-to-server calls to access SharePoint data (and is authorized by either the low-trust or high-trust systems), but it needs to be supplemented with some JavaScript calls. For example, a graphics-heavy page can use JavaScript to make minor updates to displayed data without having to reload the entire page.
    
 
However,  [for security](http://msdn.microsoft.com/en-us/library%28d=robot%29/cc709423(d=robot,l=en-us,v=vs.85).aspx), browsers do not allow JavaScript that is hosted on one domain to access resources on another domain, so a special technique is required to allow the remote JavaScript to access SharePoint resources. The SharePoint cross-domain JavaScript library makes it easy for your remote web application to use the technique.
 

 **Note**  The cross-domain library is also used to allow access to data in the reverse direction; that is, to allow JavaScript on a SharePoint page to access data in a remote domain. See  [Access remote data from a SharePoint page](#ReverseDirection) for more information.
 


## Understand the architecture of the cross-domain library

The SharePoint cross-domain library is contained in the file SP.RequestExecutor.js which is located in the /_layouts/15/ virtual folder of every SharePoint website. The scripts in this file encapsulate a secure well-known technique for overcoming the browser's restriction on cross-domain scripting: An iFrame can communicate with its parent page by means of the  `window.postMessage()` function, even if the page in the iFrame is in a different domain. So data requests and responses are passed over the domain boundary by using calls to `postMessage()`.
 

 

 **Caution**  The  `postMessage()` function works only on browsers that support HTML 5, so SharePoint Add-ins that use the cross-domain library will not work on older browsers.
 

For SharePoint, the cross-domain library is loaded on a page of the remote web application where it creates a hidden iFrame that hosts a special proxy page from the SharePoint domain. The proxy page already exists on every SharePoint website. The library is used to create a JavaScript Object Notation (JSON) object which contains all the information needed to make a CRUD call to the REST APIs of SharePoint. The JSON object is passed to the proxy page by using  `postMessage()`. On the proxy page, where the library is also loaded, the JSON object is parsed and reconstructed as a REST call to SharePoint. Since the proxy page is in the SharePoint domain, the browser allows the call.
 

 
Of course, the remote components of the SharePoint Add-in still have to have authorized access to the SharePoint resources. There are two ways to do this:
 

 

- Set the add-in principal type to  **RemoteWebApplication** (the default for provider-hosted apps) in the add-in manifest. When the add-in is registered with ACS, the registration includes the domain of the remote web application. SharePoint trusts domains that are registered with ACS, even though it is not, in this scenario, using any of the token passing flows that are part of the server-side low-trust system. For detailed information about registering add-ins, see [Register SharePoint Add-ins 2013](register-sharepoint-add-ins-2013). 
    
 
- In a SharePoint-hosted add-in, you can leave the add-in principal type set to its default, which is  **Internal**. Then set the  **AllowedRemoteHostUrl** attribute of the **Internal** element to the URL of the remote web application, as in the following example.
    
```
  <AppPrincipal>
  <Internal AllowedRemoteHostUrl="https://example.com/Home.html" />
</AppPrincipal>
```


 **Note**  If you use the second option (an  **Internal** add-in principal), then you can use only JavaScript and the cross-domain library to access SharePoint. The SharePoint client object model is blocked for **Internal**SharePoint Add-ins, so you cannot have a dual authorization system that uses both the cross-domain library and either the low-trust or high-trust systems.
 

For details on how to use the library, see  [Access SharePoint data from add-ins using the cross-domain library](access-sharepoint-2013-data-from-add-ins-using-the-cross-domain-library).
 

 

## Access remote data from a SharePoint page
<a name="ReverseDirection"> </a>

The SharePoint cross-domain library can also be used in the reverse direction; that is, JavaScript on a SharePoint page can use the library to get data from the remote components of the add-in. To do this, you reverse the cross-domain architecture: you create a proxy page in the remote web application. The library is called from a SharePoint page where it creates an iFrame to host the proxy page. For details on how to use the library in this way, see  [Create a custom proxy page for the cross-domain library in SharePoint](create-a-custom-proxy-page-for-the-cross-domain-library-in-sharepoint-2013).
 

 

## In this section
<a name="ReverseDirection"> </a>


-  [Access SharePoint data from add-ins using the cross-domain library](access-sharepoint-2013-data-from-add-ins-using-the-cross-domain-library)
    
 
-  [Work with the cross-domain library across different Internet Explorer security zones in SharePoint Add-ins](work-with-the-cross-domain-library-across-different-internet-explorer-security-zones-in-sharepoint-add-ins)
    
 

## Additional resources
<a name="ReverseDirection"> </a>


-  [Solving cross-domain problems in SharePoint Add-ins](http://blogs.msdn.com/b/officeapps/archive/2012/11/29/solving-cross-domain-problems-in-apps-for-sharepoint.aspx)
    
 

