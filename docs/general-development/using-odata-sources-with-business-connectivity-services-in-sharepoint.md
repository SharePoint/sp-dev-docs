---
title: Using OData sources with Business Connectivity Services in SharePoint
ms.prod: SHAREPOINT
ms.assetid: 7a87e5bf-4428-4055-b113-7665a93e7326
---


# Using OData sources with Business Connectivity Services in SharePoint
Learn how to get started creating external content types based on OData sources and using that data in SharePoint or Office 2013 components.
## OData and the OData connector
<a name="SP15getstartedOdata_whatisodata"> </a>

The Open Data protocol (OData) lets you access a data source, such as a database, by browsing to a specially constructed URL. This allows for a simplified approach for connecting to and working with data sources that are hosted within an organization. 
  
    
    
OData is a protocol that uses HTTP, Atom, and JavaScript Object Notation (JSON) to enable developers to write applications that communicate with an ever-growing number of data sources. Microsoft supports the creation of this standard as a way to enable the exchange of data between applications and data stores that can be accessed from the web.
  
    
    
The new OData connector enables SharePoint to communicate with OData providers.
  
    
    
In SharePoint, Business Connectivity Services (BCS) can communicate with OData sources, or producers, without having to code directly to the OData source. Producers expose their data in a structured way via a web service. Some producers may allow updating of the underlying data, and some may allow only read access. For purposes of advertising what operations are available, the producer has a service document found at a specified URL endpoint. SharePoint is already a producer of OData. SharePoint list data is exposed as an OData source for any consumer that has the appropriate rights.
  
    
    

### Examples of OData producers
<a name="ExamplesOfODataProducers"> </a>

The following are some examples of implementations of OData. These applications and services expose their data through the OData protocol.
  
    
    

- SharePoint Foundation 2010
    
  
- SharePoint Server 2010
    
  
- SQL Azure
    
  
- Microsoft Azure Table Storage
    
  
- Microsoft Azure Marketplace
    
  
-  SQL Server Reporting Services
    
  
- Microsoft Dynamics CRM 2011
    
  
- Windows Live
    
  
For a list of producers of OData services, see the  [Open Data Protocol website](http://www.odata.org/ecosystem).
  
    
    

## Prerequisites for working with the BCS OData connector
<a name="SP15GetstartedOdata_prereq"> </a>

To develop OData-based external content types, you will need the following:
  
    
    

- Visual Studio 2012
    
  
- SharePoint
    
  
- Office Developer Tools for Visual Studio 2012
    
  
For information about how to set up your development environment, see  [Set up a general development environment for SharePoint](set-up-a-general-development-environment-for-sharepoint.md).
  
    
    

## Creating external content types for OData data sources
<a name="SP15GetstartedOdata_creatingECT"> </a>

For SharePoint to use the data exposed by a specific OData producer, an external content type must be created inside SharePoint. As with all SharePoint external content types, it contains all the connectivity information that is needed to connect and communicate with the external system.
  
    
    
Creating an external content type that uses an OData data source is similar to creating any external content type. You can use Visual Studio 2012 to automatically generate OData external content types. You merely provide the Representational State Transfer (REST) endpoint of the OData source when you create the external content type. For more information see  [How to: Create an external content type from an OData source in SharePoint](how-to-create-an-external-content-type-from-an-odata-source-in-sharepoint.md).
  
    
    

## In this section
<a name="SP15GetstartedOdata_inthissect"> </a>


-  [How to: Create an external content type from an OData source in SharePoint](how-to-create-an-external-content-type-from-an-odata-source-in-sharepoint.md)
    
  
-  [How to: Create an OData data service for use as a BCS external system](how-to-create-an-odata-data-service-for-use-as-a-bcs-external-system.md)
    
  
-  [How to: Create an external list using an OData data source in SharePoint](how-to-create-an-external-list-using-an-odata-data-source-in-sharepoint.md)
    
  

## Additional resources
<a name="SP15GetstartedOdata_addres"> </a>


-  [Business Connectivity Services in SharePoint](business-connectivity-services-in-sharepoint.md)
    
  
-  [External content types in SharePoint](external-content-types-in-sharepoint.md)
    
  
-  [What's new in Business Connectivity Services in SharePoint](what-s-new-in-business-connectivity-services-in-sharepoint.md)
    
  
-  [Business Connectivity Services programmers reference for SharePoint](business-connectivity-services-programmers-reference-for-sharepoint.md)
    
  

