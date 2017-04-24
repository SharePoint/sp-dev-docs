---
title: What's new in Access
ms.prod: SHAREPOINT
ms.assetid: 625bc1d0-55db-4420-a02e-aee04028b215
---


# What's new in Access
Learn about the features in Access 2013 makes it easy to create, deploy, and manage collaborative web-based applications on premise or in the cloud.
## Introduction
<a name="SP15_access15overview_Introduction"> </a>

Access 2013 features a new application model that is designed for one purpose―to simplify web development much like earlier versions of Access with Windows development. Access 2013 enables subject matter experts to quickly create an application that can be used to run their business. By using Microsoft SharePoint 2013 to host the front end of the app and Microsoft SQL Server 2012 as its data storage technology, Access 2013 significantly improves the manageability and scalability of Access applications. Compatibility with Office 365 and SQL Azure significantly expand the reach of Access applications.
  
    
    

## Architecture
<a name="SP15_access15overview_Architecture"> </a>

In an on-premise environment, Access 2013 apps are hosted by SharePoint 2013 while the data is stored in SQL Server 2012. SharePoint 2013 provides authentication, authorization, and security for Access 2013 apps. The back-end tables, views, macros, and queries are stored in an SQL Server 2012 database.
  
    
    
Access 2013, through the Office 365 and SQL Azure services, provides a method to deploy an Access app to the cloud.
  
    
    
Figure 1 provides an overview of Access 2013 architecture.
  
    
    

**Figure 1. Access 2013 architecture**

  
    
    

  
    
    
![Access 2013 architecture](images/odc_Office15_Access15OverviewDK2_Figure07.jpg)
  
    
    
When a new Access application is created, Access Services in SharePoint Server 2013 creates a new Application database that stores the data, view, queries and macros contained in the app. The Access Services 2013 System database can be configured to create new Application databases on a separate SQL Server 2012 server.
  
    
    
Using SQL Server 2012 to store data provides manageability and scalability previously unknown to Access applications. Gone are the days when an Access application would have to be redesigned and reimplemented in a more powerful environment.
  
    
    
An Access 2013 app is online the moment it's created. You can decide to share the app with other people, deploy to the private corporate catalog, or deploy to the Office Store.
  
    
    

## Developing Access apps
<a name="SP15_access15overview_DevelopingAccessapps"> </a>

Unlike many of the SharePoint Server 2013application services, Access Services 2013 doesn't expose an API that you can use to develop Access apps in Visual Studio. Access 2013 is the environment that you use to develop Access 2013 apps.
  
    
    
For more information about how to develop Access 2013 apps, see  [How to: Create and customize a web app in Access](http://msdn.microsoft.com/library/628745f4-82e9-4838-9726-6f3e506a654f%28Office.15%29.aspx)
  
    
    

## Additional Resources
<a name="SP15_access15overview_addres"> </a>


-  [New in Access for developers](http://msdn.microsoft.com/library/df778f51-d65e-4c30-b618-65003ceb39b3%28Office.15%29.aspx)
    
  
-  [Access custom web app reference](http://msdn.microsoft.com/library/8d696fa4-a6f2-4fb1-8662-a313bf0b5989%28Office.15%29.aspx)
    
  

