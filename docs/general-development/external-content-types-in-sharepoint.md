---
title: External content types in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 11d7adb5-5388-4517-ae03-beb7be1c6981
---


# External content types in SharePoint
Learn what you can do with external content types and what you need to start creating them in SharePoint.
## What is an external content type?
<a name="SP15ectoverview_what"> </a>

The external content type is a core concept of Business Connectivity Services (BCS). Used throughout the functionality and services offered by BCS, external content types are reusable metadata descriptions of connectivity information and data definitions plus the behaviors you want to apply to a certain category of external data.
  
    
    
External content types enable you to manage and reuse the metadata and behaviors of a business entity, such as a customer or order from a central location, and enable users to interact with that external data and processes in a more meaningful way.
  
    
    
The following are some of the benefits of using external content types:
  
    
    

- **Provide reusability:** An external content type is a reusable data definition of a business entity. After you create it, you can use it with any of the presentation features in BCS to provide a rich user experience to interact with external data.
    
  
- **Encapsulate complexities of external systems:** External content types enable information workers to assemble business solutions without having to handle the complexities of the external systems, such as connectivity information and code interfaces. After someone creates an external content type, it is available to users for use in any way they need (provided they have the permissions to perform that operation and access the external data). However, the user does not need to know anything about the location of the external data or how to connect to it.
    
  
- **Provide built-in Office and SharePoint behavior:** External content types provide Office item-type behaviors (such as Contacts, Tasks, Calendars in Outlook, documents in Word, and lists in SharePoint Workspace); SharePoint behaviors (such as lists, Web Parts, and profile pages); and capabilities (such as the ability to search or work offline) to external data and services. So users can work in their familiar work environments without having to hunt for data or learn and interact with different (and proprietary) user interfaces.
    
  
- **Help provide more secure access:** External content types adhere to the security put in place by both the external system and SharePoint. You can have full control of who accesses what data by configuring security in SharePoint.
    
  
- **Simplify maintenance:** Because external content types can be created once and used by multiple solutions in various scenarios, you can manage them easily. For example, you can manage their access permissions and connection and data definitions in one central location.
    
  
- **Enable external data search:** You can use SharePoint Server search from an intranet portal to look up information about a specific external content type, such as a customer. SharePoint Server search retrieves the data directly from the external system. Consequently, users can get the information they need without having to get approval or install a separate application.
    
  
- **Enable working offline:** You can take external content types offline in Outlook 2013. Business Connectivity Services (BCS) provides rich cache and offline work features and supports cache-based operations. Users can manipulate external data seamlessly and efficiently, even when they are offline or if the server connectivity is slow, intermittent, or unavailable. The read/write operations performed against cached business entities are synchronized when a connection to the server becomes available.
    
  

## Prerequisites for working with BCS external content types
<a name="SP15ectoverview_prereq"> </a>

To get started creating external content types, you will need the following:
  
    
    

- SharePoint
    
  
- Visual Studio 2012
    
  
- Office Developer Tools for Visual Studio 2012
    
    or
    
  
- SharePoint Designer 2013
    
  
To set up a development environment for creating external content types, see  [Set up a general development environment for SharePoint](set-up-a-general-development-environment-for-sharepoint.md).
  
    
    

## What can you do with external content types?
<a name="SP15ectoverview_whattodo"> </a>

When SharePoint is configured to communicate with the external system, you can use the external content types to create the following objects to present the underlying data:
  
    
    

- **External lists**
    
    An external list enables access to data from external systems in the same way that SharePoint list data is accessed. External lists use external content types as their data sources. External lists enable you to use the metadata that is already defined about an external content type to create a SharePoint list that has external data that looks and performs like any other SharePoint list.
    
    You can also take external lists offline to be used in Outlook 2013. This allows you to work with external data just like native Outlook Item types, such as Contacts, Tasks, and Posts, and use the external data in Office client applications.
    
    External lists enable writing back to the external system if the external system allows it, and if it is modeled accordingly by the external content type. This implies that users can edit external data directly from within. Any changes that were made to the items in the list are synchronized automatically with the external system. Also by using the **Refresh data** button in the list, you can synchronize and get updated data from the external system automatically.
    
  
- **External Data Columns**
    
    The external data column enables users to add data from external content types to standard SharePoint lists. Just like an external list, external data columns can display data from any external content type that is modeled in Business Connectivity Services (BCS).
    
  
- **Business Data Web Parts**
    
    SharePoint provides five different Web Parts for working with external data: Business Data List, Business Data Item, Business Data Item Builder, Business Data Related List, and Business Data Actions.
    
  
- **External Content Type Picker**
    
    An External Content Type Picker provides picking and resolving functionality to the user. You can embed a picker in a form or page for scenarios where a user should be able to choose an external content type from the list of available external content types. 
    
  
- **External Item Picker**
    
    An External Item Picker provides picking and resolving functionality for external items on the server and in rich-client Office applications. You can embed a picker in a form or page for scenarios where a user should be able to pick an external item, such as a customer from a list of customers. 
    
  
- **Profile Pages**
    
    Profile Pages are SharePoint pages in SharePoint that display the details about an external item. Just like any other SharePoint Web Parts page, you can customize this page to show details of an external item.
    
  
- **Custom pages and applications**
    
    You can use the SharePoint programmability options, such as the SharePoint object model, client object model, and Representational State Transfer (REST) URLs.
    
  
Table 1 contains examples of tasks that illustrate working with external content types.
  
    
    

**Table 1. Basic tasks for working with external content types**


|**Task**|**Description**|
|:-----|:-----|
| [How to: Create an external content type from an OData source in SharePoint](how-to-create-an-external-content-type-from-an-odata-source-in-sharepoint.md) <br/> |Learn how to use Visual Studio 2012 to discover a published OData source, and create a reusable external content type for use in SharePoint Business Connectivity Services (BCS).  <br/> |
| [How to: Create external content types for SQL Server in SharePoint](how-to-create-external-content-types-for-sql-server-in-sharepoint.md) <br/> |Learn how to create an external content type based on a SQL Server database.  <br/> |
   

## See also
<a name="SP15ectoverview_addres"> </a>


-  [Business Connectivity Services in SharePoint](business-connectivity-services-in-sharepoint.md)
    
  
-  [How to: Create an add-in-scoped external content type in SharePoint](how-to-create-an-add-in-scoped-external-content-type-in-sharepoint.md)
    
  
-  [How to: Create external content types for SQL Server in SharePoint](how-to-create-external-content-types-for-sql-server-in-sharepoint.md)
    
  
-  [Get started with Business Connectivity Services in SharePoint](get-started-with-business-connectivity-services-in-sharepoint.md)
    
  
-  [What's new in Business Connectivity Services in SharePoint](what-s-new-in-business-connectivity-services-in-sharepoint.md)
    
  

