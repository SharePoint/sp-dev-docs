---
title: Build Windows Phone apps that access SharePoint
ms.date: 04/19/2018
ms.prod: sharepoint
ms.assetid: 36681335-f772-4499-8445-f94481bc18e7
description: Create SharePoint Add-ins that integrate SharePoint and mobile devices such as Windows Phone 8 and Windows Phone 7.
---

# Build Windows Phone apps that access SharePoint

SharePoint provides an exciting opportunity for developers to build mobile apps that travel with users, are interactive and attractive, and are available whenever and wherever users want to work with them. You can combine Windows Phone 8 and Windows Phone 7 applications with on-premises SharePoint services and applications, or with remote SharePoint services and applications that run in the cloud (such as those that use SharePoint Online) to create powerful applications that extend the functionality beyond the traditional desktop or laptop and into a truly portable and much more accessible environment.
  
The new mobility features offered by SharePoint are built on existing Microsoft tools and technologies, such as SharePoint, Windows Phone, Visual Studio, and Silverlight. Developers who are already familiar with those technologies and their related tools will be able to create SharePoint-powered mobile apps for Windows Phone without a steep learning curve. In this section, we explore some of the types of SharePoint-powered mobile apps you can build for Windows Phone 8 and Windows Phone 7 and the most common ways to customize those applications. SharePoint provides a framework and tools for developers, including Visual Studio 2010 project templates, to create mobile solutions that interact with SharePoint data both in on-premises SharePoint installations and in the cloud by using SharePoint Online. Figure 1 shows how a simple list application could look on Windows Phone.
  
    
**Figure 1. SharePoint list items in a Windows Phone app**

![SharePoint list items in a Windows Phone app](../images/9159345c-ce12-41a6-8994-fc2e9aa26fd6.gif)

<a name="SP15buildmobile_needtoknow"> </a>  

## What skills do you need to create mobile apps?

In this section, we assume that you're familiar with SharePoint, the .NET Framework, the Visual Studio development system, and Visual C#. It's also good to have some experience with Windows Phone 8 or Windows Phone 7 application development using Silverlight, and it helps to be familiar with XAML, the StackPanel and Pivot controls for Windows Phone, and concepts such as tombstoning, Silverlight data binding, and so on. If you are new to Windows Phone application development using Silverlight, we recommend that you check out the following resources.

-  [Developing a Windows Phone Application from Start to Finish](http://msdn.microsoft.com/en-us/library/gg680270%28v=pandp.11%29.aspx)

-  [User interface for Windows Phone](http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff967556%28v=vs.105%29.aspx)

-  [Quickstart: Creating a user interface with XAML for Windows Phone](http://msdn.microsoft.com/en-us/library/windowsphone/develop/jj207025%28v=vs.105%29.aspx)

-  [Pivot control architecture for Windows Phone](http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff941097%28v=vs.105%29.aspx)
    
<a name="SP15buildmobile_devoverview"> </a>  

## Development overview for mobile apps using SharePoint

You can build a wide variety of mobile apps using SharePoint. This section describes what's new or changed in the SharePoint release that makes mobile app development simple for developers.

### Windows Phone SharePoint Application template

This is the simplest type of mobile app you can build to bring a regular list to the phone. SharePoint offers a Visual Studio template to enable you to quickly and easily create SharePoint list applications for the Windows Phone. For example, you can build a "To Do List"-type Windows Phone application that brings your task list from SharePoint into the Windows Phone and enables the you to use your phone to update the status of a task on the go. Another example is having the product catalog for an inventory list in SharePoint available on the phone for the sales people. 

Installing the Windows Phone SharePoint SDK makes two Windows Phone SharePoint Application templates available to you in Visual Studio 2010 or Visual Studio 2010 Express for Windows Phone (see [How to: Set up an environment for developing mobile apps for SharePoint](how-to-set-up-an-environment-for-developing-mobile-apps-for-sharepoint.md)). 

Using the Windows Phone SharePoint List Application template, you can follow the steps of a wizard to create a functional Windows Phone app that can access and manipulate data in a SharePoint list.

### New and enhanced mobility object model in SharePoint

SharePoint adds several new classes to both the server and client object models to enable the SharePoint mobility scenarios that we described earlier in this article.
 
To enable location-aware apps, there is a new native field type class, **SPFieldGeoLocation**, along with several associated classes for structuring the value of location fields and rendering them. These classes are also callable in the SharePoint client object model for Silverlight. The new field type also has a definition added to the standard SharePoint fldtypes.xml file and new user controls for rendering the field on the Display, Edit, and New forms. For an overview, see [Integrating location and map functionality in SharePoint](integrating-location-and-map-functionality-in-sharepoint.md). 

To enable SharePoint authentication for Windows Phone users, the client object model includes a new **Authenticator** class and several associated classes. For an overview, see [Overview of the SharePoint mobile client authentication object model](overview-of-the-sharepoint-mobile-client-authentication-object-model.md).
 
To enable automatic notifications to Windows Phone users of events on a SharePoint farm, the server object model includes several new classes, each of which is also callable from the client object model. These classes include methods that enable phone apps to register with SharePoint server apps for notifications about specified types of events. There are also methods that the server apps use to send notifications to registered subscribers. For an overview, see [Create a Windows Phone SharePoint list app to receive push notifications](how-to-configure-and-use-push-notifications-in-sharepoint-apps-for-windows.md#BKMK_NotificationPhoneApp).
 
With SharePoint, you're not limited to mobile app development just for Windows Phone 8 and Windows Phone 7. With the JavaScript programming interface and the new Representational State Transfer (REST) programming interface provided by SharePoint, you can create applications for non-Windows Phone mobile devices; you can interact with SharePoint sites by using JavaScript that executes as scripts in the browser, or remotely by using any technology that supports standard REST capabilities. The following section provides an overview of the REST and JavaScript programming interfaces.

#### ECMAScript (JavaScript, JScript) object model architecture

SharePoint Foundation 2010 introduced the client object models, which enabled developers to perform remote communication with SharePoint by using the web programming technology of their choice: the .NET Framework, Silverlight, or JavaScript.
 
In SharePoint Foundation 2010, the client object models provide APIs that enable developers to interact with SharePoint sites from script that executes in the browser, from code (based on the .NET Framework 3.5 or later) that executes in a .NET Framework-managed application, or from code that executes in a Silverlight 2.0 application. The proxy .js and managed .dll files that compose the client object models are built on the client.svc web service, and handle the effective batching, serialization of requests, and parsing of replies. Figure 2 shows a high-level view of the SharePoint client object model architecture.

**Figure 2. SharePoint client object model architecture**
  
![SharePoint client object model architecture](../images/SP15Con_BuildSharePointAppsForMobileDevices_Fig3.png)
   
To learn how to use the JavaScript client object model against SharePoint data, see the [ECMAScript Client Object Model video](https://msdn.microsoft.com/en-us/SP2010DevTrainingCourse_ECMAScriptClientObjectModel.aspx).

#### REST endpoints in SharePoint

To use the REST capabilities that are built into SharePoint, you can construct a RESTful HTTP request using the Open Data Protocol (OData) standard that corresponds to the desired client object model API. The client.svc web service handles the HTTP request and serves the appropriate response, in either Atom or JavaScript Object Notation (JSON) format. The client application must then parse that response. Figure 3 shows a high-level view of the SharePoint REST architecture.

**Figure 3. SharePoint REST architecture**
 
![SharePoint REST architecture](../images/SP15Con_BuildSharePointAppsForMobileDevices_Fig2.png)
 
Currently, the REST service in SharePoint is read-only. That is, only REST endpoints that represent an HTTP GET operation are available
 
By default, the SharePoint REST service responses are formatted using the Atom protocol, according to the OData specification. In addition, the REST service supports HTTP Accept headers that enable developers to specify that the response is returned in JSON format. To learn more about REST services in SharePoint, see  [Use OData query operations in SharePoint REST requests](http://msdn.microsoft.com/library/d4b5c277-ed50-420c-8a9b-860342284b72%28Office.15%29.aspx).
 
The SharePoint REST service supports the following OData query operators:

- Filter
- Take
- Expand

<a name="SP15buildmobile_start"> </a>

## Start developing mobile apps for SharePoint

The following how-tos and overviews delve into the specific information you need to start your mobile app development:

-  [How to: Set up an environment for developing mobile apps for SharePoint](how-to-set-up-an-environment-for-developing-mobile-apps-for-sharepoint.md)

-  [Overview of Windows Phone SharePoint application templates in Visual Studio](overview-of-windows-phone-sharepoint-application-templates-in-visual-studio.md)

-  [Architecture of the Windows Phone SharePoint List Application template](architecture-of-the-windows-phone-sharepoint-list-application-template.md)

-  [How to: Create a Windows Phone SharePoint list app](how-to-create-a-windows-phone-sharepoint-list-app.md)

-  [How to: Store and retrieve SharePoint list items on a Windows Phone](how-to-store-and-retrieve-sharepoint-list-items-on-a-windows-phone.md)

-  [How to: Implement business logic and data validation in a Windows Phone app for SharePoint](how-to-implement-business-logic-and-data-validation-in-a-windows-phone-app-for-s.md)

-  [How to: Support and convert SharePoint field types for Windows Phone apps](how-to-support-and-convert-sharepoint-field-types-for-windows-phone-apps.md)

-  [How to: Customize list item queries and filter data for Windows Phone apps](how-to-customize-list-item-queries-and-filter-data-for-windows-phone-apps.md)

-  [How to: Customize the user interface of a SharePoint list app for Windows Phone](how-to-customize-the-user-interface-of-a-sharepoint-list-app-for-windows-ph.md)

-  [How to: Use multiple SharePoint lists in a Windows Phone app](how-to-use-multiple-sharepoint-lists-in-a-windows-phone-app.md)

-  [How to: Configure and use push notifications in SharePoint apps for Windows Phone](how-to-configure-and-use-push-notifications-in-sharepoint-apps-for-windows.md)

-  [Integrating location and map functionality in SharePoint](integrating-location-and-map-functionality-in-sharepoint.md)

-  [How to: Create a mobile app in SharePoint that contains data from an external data source](how-to-create-a-mobile-app-in-sharepoint-that-contains-data-from-an-externa.md)

-  [How to: Integrate maps with Windows Phone apps and SharePoint lists](how-to-integrate-maps-with-windows-phone-apps-and-sharepoint-lists.md)

-  [How to: Build search-driven mobile apps with the Navigation and Event Logging REST interfaces](how-to-build-search-driven-mobile-apps-with-the-navigation-and-event-logging-res.md)
    

## See also

-  [Programming models in SharePoint](programming-models-in-sharepoint.md)
-  [How to: Set up an environment for developing mobile apps for SharePoint](how-to-set-up-an-environment-for-developing-mobile-apps-for-sharepoint.md)
-  [Windows Phone SDK 8.0](http://www.microsoft.com/en-us/download/details.aspx?id=35471)
-  [Microsoft SharePoint SDK for Windows Phone 8](http://www.microsoft.com/en-us/download/details.aspx?id=36818)
-  [Windows Phone SDK 7.1](http://www.microsoft.com/en-us/download/details.aspx?id=27570)
-  [Microsoft SharePoint SDK for Windows Phone 7.1](http://www.microsoft.com/en-us/download/details.aspx?id=30476)
-  [About Expression Blend](http://msdn.microsoft.com/en-us/library/cc296376%28Expression.40%29.aspx)
    
  

