---
title: Work with external data in SharePoint
description: Resources and guidance for accessing and manipulating external data with JavaScript on pages in SharePoint Add-ins.
ms.date: 12/22/2017
ms.prod: sharepoint
---


# Work with external data in SharePoint

In your SharePoint Add-ins, you frequently have to retrieve and manipulate data that is exposed by a remote web application or service from within a SharePoint page or component. Because custom code is not allowed on the SharePoint servers, your add-in must use JavaScript for this purpose. The model for SharePoint Add-ins provides multiple options for accessing the remote data and services.

## Use the SharePoint cross-domain JavaScript library to access external data

You can use the cross-domain library to access data in your remote web application if you provide a custom proxy page that is hosted in the remote infrastructure. As the developer, you are responsible for implementing the custom proxy page, and you have to deal with custom logic such as the authentication mechanism, if there is one, to the remote application. Use the cross-domain library if you want the communication between the remote data source and the SharePoint page to occur at the client level.

For details about how to use the library in this way, see [Create a custom proxy page for the cross-domain library in SharePoint](create-a-custom-proxy-page-for-the-cross-domain-library-in-sharepoint.md).
 
> [!NOTE] 
> The SharePoint cross-domain library can also be used in the other direction; that is, JavaScript on remote webpages can use it to access data from SharePoint. For more information about this use of the library, see [Creating SharePoint Add-ins that use the cross-domain library](creating-sharepoint-add-ins-that-use-the-cross-domain-library.md).

## Use the SharePoint web proxy to access external data

You can use the web proxy that is exposed in the JavaScript client object model to access remote data. (The proxy is also available in the .NET client-side object model (CSOM), but you cannot use that object model in code that runs on the SharePoint servers.) 

When you use the web proxy, you issue the initial request to SharePoint. In turn, SharePoint requests the data to the specified endpoint and forwards the response back to your page. Use the web proxy when you want the communication between the remote data source and the SharePoint page to occur at the server level.

For details about how to use the proxy, see [Query a remote service using the web proxy in SharePoint](query-a-remote-service-using-the-web-proxy-in-sharepoint.md).

## See also
<a name="SP15Workdata_AddRes"> </a>

- [Secure data access and client object models for SharePoint Add-ins](secure-data-access-and-client-object-models-for-sharepoint-add-ins.md)
- [Access SharePoint data from add-ins using the cross-domain library](access-sharepoint-data-from-add-ins-using-the-cross-domain-library.md)
- [Access external data with REST in SharePoint](../general-development/how-to-access-external-data-with-rest-in-sharepoint.md)
- [Authorization and authentication of SharePoint Add-ins](authorization-and-authentication-of-sharepoint-add-ins.md)
- [Use OData query operations in SharePoint REST requests](use-odata-query-operations-in-sharepoint-rest-requests.md) 
- [Data storage in SharePoint Add-ins](important-aspects-of-the-sharepoint-add-in-architecture-and-development-landscap.md#Data)
- [Create UX components in SharePoint](create-ux-components-in-sharepoint.md)
- [Develop SharePoint Add-ins](develop-sharepoint-add-ins.md)

    
 

