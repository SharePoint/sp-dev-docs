---
title: How to Create an OData data service for use as a BCS external system
ms.prod: SHAREPOINT
ms.assetid: 7d7b3aa6-85b7-400d-8ea5-50bebac56a1d
---


# How to: Create an OData data service for use as a BCS external system
Learn how to create an Internet-addressable WCF service that uses OData to send notifications to SharePoint 2013 when the underlying data changes. These notifications are used to trigger events that are attached to external lists.
This article describes how to create an ASP.NET Windows Communication Foundation (WCF) Data Service to expose the AdventureWorks 2012 LT sample database. This enables you to access the data through the Open Data protocol (OData). When access is established through OData, you can configure a Business Connectivity Services (BCS) external content type that will enable SharePoint 2013 to consume the data from the external database. To further enhance this OData source, you can add service contracts to the WCF service that will enable BCS to subscribe to notifications that indicate that the external data has changed.
  
    
    


## Prerequisites for creating the OData service
<a name="bkmk_Prerequisites"> </a>

The following are required to create the OData service in this article:
  
    
    

- A server hosting Internet Information Services (IIS)
    
  
- .NET Framework 3.5 or later
    
  
- SharePoint 2013
    
  
-  [AdventureWorks 20012 LT script](http://msftdbprodsamples.codeplex.com/releases/view/55330)
    
  
-  [AdventureWorks 2012 LT Data](http://msftdbprodsamples.codeplex.com/releases/view/55330)
    
  
- Visual Studio 2012
    
  
- Office Developer Tools for Visual Studio 2012
    
  
For information about setting up your development environment, see  [Set up a general development environment for SharePoint 2013](set-up-a-general-development-environment-for-sharepoint.md).
  
    
    

### Core concepts for creating an OData service

Table 1 lists articles that will help you understand the core concepts of building a WCF service using OData and external content.
  
    
    

**Table 1. Core concepts for creating an OData service**


|**Resource**|**Description**|
|:-----|:-----|
| [Using OData sources with Business Connectivity Services in SharePoint 2013](using-odata-sources-with-business-connectivity-services-in-sharepoint.md) <br/> |Provides information to help you start creating external content types based on OData sources and using that data in SharePoint 2013 or Office 2013 components.  <br/> |
| [How to: Create an external content type from an OData source in SharePoint 2013](how-to-create-an-external-content-type-from-an-odata-source-in-sharepoint.md) <br/> |Learn how to use Visual Studio 2012 to discover a published OData source and create a reusable external content type to use in BCS in SharePoint 2013.  <br/> |
| [Open Data Protocol](http://www.odata.org) <br/> |Provides information about the Open Data protocol, including protocol definitions, architectural information and usage examples.  <br/> |
| [WCF Data Services Overview](http://msdn.microsoft.com/en-us/library/cc668794.aspx) <br/> |WCF Data Services enables creation and consumption of data services for the web or an intranet by using OData. OData enables you to expose your data as resources that are addressable by URIs.  <br/> |
| [Developing and Deploying WCF Data Services](http://msdn.microsoft.com/en-us/library/gg258442) <br/> |Provides information about developing and deploying WCF Data Services.  <br/> |
   

### Steps involved in creating the external system

The following steps will need to be completed 
  
    
    

- Install the AdventureWorks 2012 LT sample database
    
  
- Create the OData Service
    
  
- Set access permissions
    
  
- Test the service
    
  
- Add capabilities for additional BCS functionality
    
  

## Installing the sample database
<a name="bkmk_Prerequisites"> </a>

An external system is usually a database and for that reason, this example shows how to use the AdventureWorks 2012 LT sample database to represent a proprietary datasource.
  
    
    
The following steps will 
  
    
    

## How to create the WCF OData service
<a name="bkmk_CreatingTheService"> </a>

Creating a Windows Communication Foundation (WCF) service that can be accessed through the OData protocol is relatively straightforward. Visual Studio 2012 provides several tools for automatically discovering and modeling the data from various data sources. This allows you to create connections and interfaces to data in SQL Server databases and other types of data stores that can then be worked with programmatically using an extensive object model.
  
    
    
However, for SharePoint 2013 to enable BCS to receive notifications from remote systems when the underlying data has changed, you must modify the WCF service to respond to those changes.
  
    
    

### To create a new WCF project


1. In Visual Studio, on the **File** menu, choose **New**, **Project**.
    
  
2. In the **New Project** dialog box, choose the **Web** template, and then choose **ASP.NET Web Application**.
    
  
3. Enter **AdventureWorksService** for the project name, and choose **OK**.
    
  
4. In **Solution Explorer**, open the shortcut menu for the ASP.NET project that you just created, and choose **Properties**.
    
  
5. Select the **Web** tab, and set the value of the **Specific port** text box to8008.
    
  

### To define the data model


1. In **Solution Explorer**, open the shortcut menu for the ASP.NET project, and choose **Add New Item**.
    
  
2. In the **Add New Item** dialog box, choose the Data template, and then choose **ADO.NET Entity Data Model**.
    
  
3. For the name of the data model, enter **AdventureWorks.edmx**.
    
  
4. In the **Entity Data Model Wizard**, choose **Generate from Database**, and then choose **Next**.
    
  
5. Connect the data model to the database by doing one of the following steps, and then choose **Next**.
    
  - If you do not have a database connection already configured, choose **New Connection**, and create a new connection.
    
  
  - If you have a database connection already configured to connect to the Northwind database, choose that connection in the list of connections.
    
  
  - On the final page of the wizard, select the check boxes for all tables in the database, and clear the check boxes for views and stored procedures.
    
  
6. Choose **Finish** to close the wizard.
    
  

### To create the data service


1. In **Solution Explorer**, open the shortcut menu for your ASP.NET project, and then choose **Add New Item**.
    
  
2. In the **Add New Item** dialog box, choose **WCF Data Service**.
    
  
3. For the name of the service, enter **AdventureWorks**.
    
    Visual Studio creates the XML markup and code files for the new service. By default, the code-editor window opens. In **Solution Explorer**, the service will have the name, **AdventureWorks**, with the extension .svc.cs or .svc.vb.
    
  
4. Replace the comment  `/* TODO: put your data source class name here */` in the definition of the class that defines the data service with the type that is the entity container of the data model, which in this case is **AdventureWorksEntities**. The class definition should look like the following:
    
  ```cs
  
public class AdventureWorks : DataService<AdventureWorksEntities>
  ```

By default, when a WCF service is created, it cannot be accessed due to its security configuration. The next step lets you specify who can access it, and what rights they have.
  
    
    

### To enable access to data service resources


- In the code for the data service, replace the placeholder code in the **InitializeService** function with the following.
    
  ```cs
  
      config.SetEntitySetAccessRule("*", EntitySetRights.All);
      config.SetServiceOperationAccessRule("*", ServiceOperationRights.All);
  ```


    This enables authorized clients to have read and write access to resources for the specified entity sets.
    
    > [!NOTE]
      > Any client that can access the ASP.NET application can also access the resources that are exposed by the data service. In a production data service, to prevent unauthorized access to resources, you should also secure the application itself. For more information, see  [Securing WCF Data Services](http://msdn.microsoft.com/en-us/library/dd728284.aspx). 
For BCS to receive notifications, there must be a mechanism on the back-end data source that will accept a request to be added and removed from notification subscriptions. 
  
    
    
The last step in creating the service is to add service operations for the **Subscribe** and **Unsubscribe** stereotypes that are defined in the BDC model.
  
    
    

### To add service operations for Subscribe and Unsubscribe stereotypes


- In the AdventureWorks.cs page, add the following string variable declaration.
    
  ```cs
  
public string subscriptionStorePath = @"\\\\[SHARE_NAME]\\SubscriptionStore\\SubscriptionStore.xml";
  ```


    > [!NOTE]
      > This file is an XML file that is updated with the new subscriptions. Access to this file will be made by the server process, so make sure you have granted sufficient rights for this file access. > You might also want to create a database solution for storing subscription information. 

    Then add the following two **WebGet** methods to handle the subscriptions.
    


  ```cs
  [WebGet]
        public string Subscribe(string deliveryUrl, string eventType)
        {
            string subscriptionId = Guid.NewGuid().ToString();
            
            XmlDocument subscriptionStore = new XmlDocument();
            
            subscriptionStore.Load(subscriptionStorePath);

            // Add a new subscription element.
            XmlNode newSubNode = subscriptionStore.CreateElement("Subscription");

            // Add subscription ID element to the subscription element.
            XmlNode subscriptionIdStart = subscriptionStore.CreateElement("SubscriptionID");
            subscriptionIdStart.InnerText = subscriptionId;
            newSubNode.AppendChild(subscriptionIdStart);

            // Add delivery URL element to the subscription element.
            XmlNode deliveryAddressStart = subscriptionStore.CreateElement("DeliveryAddress");
            deliveryAddressStart.InnerText = deliveryUrl;
            newSubNode.AppendChild(deliveryAddressStart);

            // Add event type element to the subscription element.
            XmlNode eventTypeStart = subscriptionStore.CreateElement("EventType");
            eventTypeStart.InnerText = eventType;
            newSubNode.AppendChild(eventTypeStart);

            // Add the subscription element to the root element. 
            subscriptionStore.AppendChild(newSubNode);

            
            subscriptionStore.Save(subscriptionStorePath);

            return subscriptionId;
        }

        [WebGet]
        public void Unsubscribe(string subscriptionId)
        {
            XmlDocument subscriptionStore = new XmlDocument();
            subscriptionStore.Load(subscriptionStorePath);

            XmlNodeList subscriptions = subscriptionStore.DocumentElement.ChildNodes;
            foreach (XmlNode subscription in subscriptions)
            {
                XmlNodeList subscriptionList = subscription.ChildNodes;
                if (subscriptionList.Item(0).InnerText == subscriptionId)
                {
                    subscriptionStore.DocumentElement.RemoveChild(subscription);
                    break;
                }
            }

            subscriptionStore.Save(subscriptionStorePath);
        }

  ```


## Next steps
<a name="bkmk_Next"> </a>

To notify SharePoint that changes have been made, you also need to create a service that queries the data source for changes, and then sends notifications to all those subscribed to notifications.
  
    
    

## Additional resources
<a name="bkmk_Addresources"> </a>


-  [Business Connectivity Services in SharePoint 2013](business-connectivity-services-in-sharepoint.md)
    
  
-  [Using OData sources with Business Connectivity Services in SharePoint 2013](using-odata-sources-with-business-connectivity-services-in-sharepoint.md)
    
  
-  [External content types in SharePoint 2013](external-content-types-in-sharepoint.md)
    
  
-  [External events and alerts in SharePoint 2013](external-events-and-alerts-in-sharepoint.md)
    
  
-  [How to: Create an external content type from an OData source in SharePoint 2013](how-to-create-an-external-content-type-from-an-odata-source-in-sharepoint.md)
    
  
-  [Business Connectivity Services programmers reference for SharePoint 2013](business-connectivity-services-programmers-reference-for-sharepoint.md)
    
  

