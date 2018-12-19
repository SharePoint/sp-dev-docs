---
title: Access SharePoint from mobile and native device apps
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 42014171-5ee5-421d-9cde-413efc3aecef
---


# Access SharePoint from mobile and native device apps
Learn how to access SharePoint from mobile apps and other native device apps, and from external web applications.
SharePoint Add-ins, farm solutions, and "no code" sandboxed solutions are all run from within SharePoint, but apps on other platforms can also access SharePoint client APIs.
  
    
    


> [!IMPORTANT]
> To test and debug on any platform, you need a **developer account on Office 365**. More info: [Set up a development environment for SharePoint Add-ins on Office 365](http://msdn.microsoft.com/library/b22ce52a-ae9e-4831-9b68-c9210af6dc54%28Office.15%29.aspx) or [Create a developer site on an existing Office 365 subscription](http://msdn.microsoft.com/library/2ec857d5-dc6f-4cf6-ba45-adc845ef2a25%28Office.15%29.aspx). 
  
    
    


## Non-Microsoft mobile and native device apps

Non-Microsoft device apps, including mobile apps, **use SharePoint REST/OData APIs for CRUD operations on SharePoint data**.
  
    
    

- See  [Get to know the SharePoint REST service](http://msdn.microsoft.com/library/2de035a0-ac75-43bd-9665-5c5a59c4c590%28Office.15%29.aspx) for the basics.
    
  
- See  [REST API reference for SharePoint](http://msdn.microsoft.com/library/3514e753-19f9-4b41-a1ae-f35c5ffc17d2%28Office.15%29.aspx) for a complete reference.
    
  
For more information about how to create mobile apps for any platform, see  [Build mobile apps for other platforms using SharePoint](build-mobile-apps-for-other-platforms-using-sharepoint.md).
  
    
    

## Windows Phone apps that access SharePoint
<a name="WinPhone"> </a>

Windows Phone apps can use one of the following:
  
    
    

- The .NET SharePoint client-side object model (CSOM) version specifically for Windows Phone devices.
    
  
- The SharePoint REST/OData APIs.
    
  
 These mobile apps can take advantage of the support in SharePoint for the Microsoft Push Notification service and a new geolocation field type.
  
    
    
For more about creating Windows Phone apps that access SharePoint, see  [Build Windows Phone apps that access SharePoint](build-windows-phone-apps-that-access-sharepoint.md).
  
    
    

## Web applications that don't start from SharePoint
<a name="WinPhone"> </a>

Web applications that don't start from SharePoint are not strictly "SharePoint Add-ins," although they're sometimes counted as SharePoint Add-ins in MSDN and other docs. These apps include, among others, ones that run from the Office 365 app launcher and Office Add-ins, as well as any web applications that are run directly from a browser.
  
    
    
You can build these apps on the ASP.NET platform or a non-Microsoft stack. If you build your web application on a non-Microsoft stack, it does CRUD operations with the REST/OData APIs, just as a non-Microsoft device app. If you build it on ASP.NET it **can use the SharePoint CSOM or the REST/OData APIs**.
  
    
    
These apps **gain authorized access to SharePoint data by using access tokens** that are issued by the Azure Control Service (ACS) in compliance with the OAuth Authentication Code flow. For more, see [Authorization Code OAuth flow for SharePoint Add-ins](http://msdn.microsoft.com/library/e89e91c7-ea39-49b9-af5a-7f047a7e2ab7%28Office.15%29.aspx).

> [!IMPORTANT]
> Azure Access Control (ACS), a service of Azure Active Directory (Azure AD), will be retired on November 7, 2018. This retirement does not impact the SharePoint Add-in model, which uses the `https://accounts.accesscontrol.windows.net` hostname (which is not impacted by this retirement). For more information, see [Impact of Azure Access Control retirement for SharePoint Add-ins](https://dev.office.com/blogs/impact-of-azure-access-control-deprecation-for-sharepoint-add-ins).