---
title: Get started with Business Connectivity Services in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: c6bf3db0-db79-4b13-9834-891d24b2c9e5
---



# Get started with Business Connectivity Services in SharePoint
Learn the basics of what Business Connectivity Services (BCS) provides to developers of SharePoint solutions, along with how to get started using BCS in various types of solutions.
## What is Business Connectivity Services?

Business Connectivity Services (BCS) was introduced in SharePoint Server 2010 as an evolution of the Business Data Catalog released in Office SharePoint Server 2007. BCS enables SharePoint to work with data that is hosted externally. Possible sources can include databases, web services, Windows Communication Foundation (WCF) services, Open Data Protocol (OData) sources, and other proprietary data that is accessed by using custom .NET assemblies.

<a href="#SP15GettingStartedBCS_WhatDoYouNeed"><img alt="Get set up" src="../images/mod_icon_getstartbox.gif" /></a>&nbsp;&nbsp;&nbsp;<a href="#SP15GettingStartedBCS_WhatCanYouDo"><img alt="Get to work" src="../images/mod_icon_dobox.gif" /></a>&nbsp;&nbsp;&nbsp;<a href="#SP15GettingStartedBCS_LearnMore"><img alt="Learn more" src="../images/mod_icon_startbox.gif" /></a>

   
In a dynamic workplace, information workers need access to data that resides in separate software worlds, for example:
  
    
    

- Structured data that exists in the organization's enterprise applications, such as enterprise resource planning (ERP) and customer resource management (CRM) applications.
    
  
- Unstructured data in business productivity applications, such as those in Microsoft Office, in team and collaboration applications such as SharePoint, and in Web 2.0 services such as Internet applications, wikis, blogs, and social networking sites.
    
  
Although most information workers spend much of their work time within the productivity applications (for example, the Microsoft Office environment), they also need a way to integrate that environment with the enterprise applications and collaboration software and services they use. BCS provides that capability in SharePoint.
  
    
    

## Get started with Business Connectivity Services
<a name="SP15GettingStartedBCS_WhatDoYouNeed"> </a>

To get started developing with BCS, you will need the following:
  
    
    

- SharePoint
    
  
- Visual Studio
    
  
- Office Developer Tools for Visual Studio 2012
    
    or
    
  
- SharePoint Designer
    
  
For information about how to set up your development environment, see  [Set up a general development environment for SharePoint](set-up-a-general-development-environment-for-sharepoint.md).
  
    
    

### Business Connectivity Services essentials

The following table highlights the core concepts that you will need to be familiar with to start developing BCS solutions.
  
    
    

**Table 1. Core concepts for understanding BCS**


|**Article**|**Description**|
|:-----|:-----|
| [Entity Data Model Key Concepts](http://msdn.microsoft.com/en-us/library/ee382840.aspx) <br/> |The Entity Data Model (EDM) uses three key concepts to describe the structure of data: entity type, association type, and property. These are the most important concepts in describing the structure of data in any implementation of the EDM.  <br/> |
| [Basic Security Practices for Web Applications](http://msdn.microsoft.com/en-us/library/zdh19h94.aspx) <br/> |The topic of creating a secure web application is extensive. It requires study to understand security vulnerabilities. You also need to become familiar with the security facilities of the Windows operating system, the .NET Framework, and ASP.NET. Finally, it is essential to understand how to use these security features to counter threats.  <br/> |
| [WCF Data Services](http://msdn.microsoft.com/en-us/data/odata.aspx) <br/> |WCF Data Services, formerly known as ADO.NET Data Services, enable the creation and consumption of OData services for the web.  <br/> |
| [Open Data Protocol (OData)](http://www.odata.org) <br/> |OData is an industry standard protocol for accessing data through URLs. It basically sits on top of the HTTP protocol to provide read and write functions using existing HTTP verbs.  <br/> |
| [Internet Information Services](http://www.iis.net/) <br/> |Internet Information Services (IIS) is the platform that SharePoint runs on. You should understand how to create websites, virtual directories, web services, URLs, web security, and other technologies related to IIS.  <br/> |
| [External content types in SharePoint](external-content-types-in-sharepoint.md) <br/> |External content types are descriptions of the external systems that they represent. They are reusable when imported into SharePoint and can be used to create complex code-free solutions using SharePoint Designer 2013, Outlook 2013, Web Parts, external lists, and custom client applications.  <br/> |
| [Get started using the client object model with external data in SharePoint](get-started-using-the-client-object-model-with-external-data-in-sharepoint.md) <br/> |SharePoint provides the ability to access all objects through a carefully constructed URL. BCS has been extended to provide this same functionality.  <br/> |
   

## What can you do with Business Connectivity Services?
<a name="SP15GettingStartedBCS_WhatCanYouDo"> </a>

With BCS, you can bring information into SharePoint from many different sources. For example, you can bring data from an external SQL Server database, a traditional web service, a WCF service, proprietary systems, and OData services.
  
    
    

**Table 2. Basic tasks for working with Business Connectivity Services**


|**Task**|**Description**|
|:-----|:-----|
| [External content types in SharePoint](external-content-types-in-sharepoint.md) <br/> |Learn about creating Business Connectivity Services (BCS) external content types.  <br/> |
| [How to: Create an external content type from an OData source in SharePoint](how-to-create-an-external-content-type-from-an-odata-source-in-sharepoint.md) <br/> |Find information that is needed to get started creating external content types based on OData sources and using that data in SharePoint or Office components.  <br/> |
| [How to: Create external event receivers](how-to-create-external-event-receivers.md) <br/> |Learn the concepts behind creating event receivers that can be attached to external lists and will execute when the external data that the list represents is updated.  <br/> |
| [How to: Create an add-in-scoped external content type in SharePoint](how-to-create-an-add-in-scoped-external-content-type-in-sharepoint.md) <br/> |Learn how to create external content types that are installed or scoped at the app level, enabling developers to create data-rich apps using external data sources.  <br/> |
| [How to: Use the client code library to access external data in SharePoint](how-to-use-the-client-code-library-to-access-external-data-in-sharepoint.md) <br/> |Learn how to use the SharePoint client object model to work with BCS in SharePoint.  <br/> |
   

## Beyond the basics: Learn more about Business Connectivity Services
<a name="SP15GettingStartedBCS_LearnMore"> </a>

When you master the basic concepts of BCS, you can use the more advanced features to build many powerful types of solutions.
  
    
    

**Table 3. Advanced concepts in BCS**


|**Topic**|**Description**|
|:-----|:-----|
| [How to: Create an OData data service for use as a BCS external system](how-to-create-an-odata-data-service-for-use-as-a-bcs-external-system.md) <br/> |Learn how to create an Internet-addressable WCF service that uses OData to send notifications to SharePoint when the underlying data changes. These notifications are used to trigger events that are attached to external lists.  <br/> |
| [BDC model schema reference for SharePoint](bdc-model-schema-reference-for-sharepoint.md) <br/> |Find reference documentation for the schema of the BDC model.  <br/> |
| [BCS client object model reference for SharePoint](bcs-client-object-model-reference-for-sharepoint.md) <br/> |Get a summary of the objects that are available for creating client-side scripts using the SharePoint client object model to access external data exposed by Business Connectivity Services (BCS).  <br/> |
| [BCS REST API reference for SharePoint](bcs-rest-api-reference-for-sharepoint.md) <br/> |Find reference information for constructing Representational State Transfer (REST) URIs used for accessing and manipulating OData sources.  <br/> |
   

## See also
<a name="SP15GettingStartedBCS_LearnMore"> </a>


-  [Business Connectivity Services in SharePoint](business-connectivity-services-in-sharepoint.md)
    
  
-  [Open Data Protocol website](http://www.odata.org/)
    
  
-  [External content types in SharePoint](external-content-types-in-sharepoint.md)
    
  
-  [Using OData sources with Business Connectivity Services in SharePoint](using-odata-sources-with-business-connectivity-services-in-sharepoint.md)
    
  
-  [External events and alerts in SharePoint](external-events-and-alerts-in-sharepoint.md)
    
  
-  [Add-in-scoped external content types in SharePoint](add-in-scoped-external-content-types-in-sharepoint.md)
    
  
-  [Get started using the client object model with external data in SharePoint](get-started-using-the-client-object-model-with-external-data-in-sharepoint.md)
    
  
