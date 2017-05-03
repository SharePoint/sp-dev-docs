---
title: How to Create external event receivers
ms.prod: SHAREPOINT
ms.assetid: c6d5f486-6247-47f9-9876-fab12f13342f
---


# How to: Create external event receivers
Learn the steps for creating external event receivers for on-premises installations of Business Connectivity Services (BCS) external lists.
External event receivers are classes that enable SharePoint Add-ins to respond to events that occur to SharePoint items, such as lists or list items. For example, you can respond to list events, such as adding or removing a field; list item events, such as adding or removing a list item or attachment to a list item; or web events, such as adding or deleting a site or site collection. You can add a remote event receiver to an existing Visual Studio solution that contains an SharePoint Add-in.
  
    
    

This article accompanies the code sample  [SharePoint: Create a remote event receiver for external data](http://code.msdn.microsoft.com/SharePoint-Create-a-095c594c). It shows how to create all the components needed to configure and use external system event notifications.
In this example, you will do the following:
  
    
    


1. Create an external system based on the Northwind sample database
    
  
2. Expose the sample data through OData by creating a Windows Communication Foundation (WCF) service.
    
  
3. Create a polling service that will monitor for changes in the data and notify SharePoint of those changes.
    
  
4. Create an external event receiver that executes when items are added to the external data and, as a result, creates a new list item on a notifications list.
    
  

## Prerequisites and system set up
<a name="bkmk_Prerequisites"> </a>

To complete this example, you will need the following prerequisites:
  
    
    

- Visual Studio 2012
    
  
- Office Developer Tools for Visual Studio 2013
    
  
- SQL Server
    
  
- SharePoint
    
  
- Internet Information Services 7.0
    
  
- Northwind sample database
    
  

## Build the components for external systems
<a name="BuildingTheComponents"> </a>

The biggest part of the configuration actually happens on the external system. For external event receivers to work correctly, the following components must be present and working on the external system:
  
    
    

- **Subscription store:** A table that contains information about the subscribers that want to be notified of changes to the external data.
    
  
- **Changes store:** A table that is used to store the changes to the data items. It functions as temporary storage only because the polling service deletes the item in the table when notifications are sent back to subscribers in SharePoint.
    
  
- **Polling service:** Required in this scenario as a means of checking when data has been changed and submitted to the change table. The polling service queries the change table and assembles a notification package that is sent to the SharePoint delivery address (REST endpoint) stored in the subscription store.
    
  
- **OData WCF Data Service:** To expose the data from the external system's database, you have to create a WCF service. This service, running on Internet Information Services (IIS), provides the RESTful interface and OData feed that is needed for this scenario.
    
  

## Set up the external system
<a name="bkmk_SetUpTheExternalSystem"> </a>

The first task is to set up the external system.
  
    
    

### Attach the Northwind sample database

The first part of preparing the back-end system is to add the Northwind sample database to a running instance of SQL Server. If you already have the Northwind sample database installed, you can run the scripts in the following section to create the additional objects needed for external eventing notifications to work.
  
    
    
However, if you don't have Northwind installed, see  [Installing the Northwind Sample Database](http://msdn.microsoft.com/library/2f92cfc3-6310-4327-b2f2-8610f7385c86%28Office.15%29.aspx).
  
    
    
The database is also included with the code sample:  [SharePoint: Create a remote event receiver for external data](http://code.msdn.microsoft.com/SharePoint-Create-a-095c594c).
  
    
    

### Create the subscription store

When the Northwind database is installed, open a new query window and execute the following script.
  
    
    

```

USE [Northwind]
GO
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[EntitySubscribe](
    [SubscriptionId] [int] IDENTITY(1,1) NOT NULL,
    [EntityName] [nvarchar](250) NULL,
    [DeliveryURL] [nvarchar](250) NULL,
    [EventType] [int] NULL,
    [UserId] [nvarchar](50) NULL,
    [SubscribeTime] [timestamp] NULL,
    [SelectColumns] [nvarchar](10) NULL,
 CONSTRAINT [PK_Subscribe] PRIMARY KEY CLUSTERED 
(
    [SubscriptionId] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
```

This creates a table in the Northwind database named EntitySubscribe. This serves as the subscription store referred to earlier.
  
    
    

### Create the change store

Run the following script to create the change table that will record changes to the data in the Customers table.
  
    
    

```

USE [Northwind]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Customers_Updates](
    [CustomerID] [nchar](5) NOT NULL,
    [CompanyName] [nvarchar](40) NOT NULL,
    [ContactName] [nvarchar](30) NULL,
    [ContactTitle] [nvarchar](30) NULL,
    [Address] [nvarchar](60) NULL,
    [City] [nvarchar](15) NULL,
    [Region] [nvarchar](15) NULL,
    [PostalCode] [nvarchar](10) NULL,
    [Country] [nvarchar](15) NULL,
    [Phone] [nvarchar](24) NULL,
    [Fax] [nvarchar](24) NULL,
    [TimeAdded] [datetime] NULL,
    [EventType] [int] NULL,
 CONSTRAINT [PK_Customers_Updates] PRIMARY KEY CLUSTERED 
(
    [CustomerID] ASC
)WITH (PAD_INDEX  = OFF, STATISTICS_NORECOMPUTE  = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS  = ON, ALLOW_PAGE_LOCKS  = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
```

This adds a table named Customers_Updates that stores the information about the record that was added to the Customers table.
  
    
    

### Create the change trigger

The change trigger is fired when changes happen to the Customers table. Whenever a record is added to Customers, SQL Server executes the trigger, which inserts a new record in the Customers_Updates table with the information about the record.
  
    
    
To create the trigger, execute the following query.
  
    
    



```

USE [Northwind]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE trigger [dbo].[Customer_insupd] on [dbo].[Customers] for
INSERT
AS
DECLARE 
    @CustomerID nchar(5),
    @CompanyName nvarchar(40),
    @ContactName nvarchar(30) ,
    @ContactTitle nvarchar(30) ,
    @Address nvarchar(60) ,
    @City nvarchar(15) ,
    @Region nvarchar(15) ,
    @PostalCode nvarchar(10) ,
    @Country nvarchar(15) ,
    @Phone nvarchar(24) ,
    @Fax nvarchar(24), 
    @TimeAdded datetime,
    @EventType int
    
    Select @CustomerID = CustomerId, @CompanyName=CompanyName,
    @ContactName=ContactName, @ContactTitle=ContactTitle,
    @Address=Address, @City=City, @Region=Region,
    @PostalCode =PostalCode, @Country=Country,
    @Phone=Phone,@Fax=Fax,@EventType=1 
    from inserted
    
    insert into Customers_Updates 
    (CustomerId,CompanyName,
    ContactName, ContactTitle,
    Address, City, Region,
    PostalCode,Country,
    Phone,Fax,TimeAdded,EventType) values
    (@CustomerId,@CompanyName,
    @ContactName, @ContactTitle,
    @Address, @City, @Region,
    @PostalCode,@Country,
    @Phone,@Fax,SYSDATETIME(),@EventType)
    
GO

```


> **Note:**
> If you are using your own custom stored procedures as defined in your BDC model, you might also want to create the delete and update triggers. The additional triggers are not be covered as part of this scenario. 
  
    
    


### Create the stored procedures

If you are using direct table access with Business Connectivity Services, these procedures won't be necessary. However, if you are defining your own procedures and custom code on the external system, you might want to add these to allow access to the table from SQL Server.
  
    
    

```

// DeleteEventRecords stored procedure
USE [Northwind]
GO
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


CREATE PROCEDURE [dbo].[proc_DeleteEventRecords]
    @CustomerID nchar(5), @EventType int
    AS
    Delete from Customers_Updates 
    WHERE  CustomerID like @CustomerID AND EventType=@EventType

GO

```

The **SubscribeEntity** stored procedure will create a record in the subscription store.
  
    
    



```

// SubscribeEntity 
USE [Northwind]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[SubscribeEntity] 
    @EntityName Varchar(255),
    @EventType Integer,
    @DeliveryAddress Varchar(255),
    @SelectColumns Varchar(10)

AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON;

    -- Insert statements for procedure here
    
    Insert into EntitySubscribe(EntityName,DeliveryURL,EventType,SelectColumns)
    values (@EntityName,@DeliveryAddress,@EventType,@SelectColumns)


END

GO

```


## Create the OData Service
<a name="bkmk_CreatingTheODataService"> </a>

The OData feed is hosted inside a **WCF Data Service**. This WCF service is then hosted by IIS in a web application.
  
    
    
The following steps create a new ASP.NET WCF data service.
  
    
    

### To create the WCF Data Service application


1. In Visual Studio 2012, on the **File** menu, choose **New**, **Project**.
    
  
2. In the **New Project** dialog box, under the Visual C# node, choose the **Web** template, and then choose **ASP.NET Web Application**.
    
  
3. Enter NorthwindService as the name of the project, and then choose **OK**.
    
  
Next, using the Visual Studio wizard, you discover the schema of the data source and use it to create an ADO.NET entity data model.
  
    
    

### To define the data model


1. In **Solution Explorer**, open the shortcut menu for the ASP.NET project, and choose **Add New Item**.
    
  
2. In the **Add New Item** dialog box, choose the **Data** template, and then choose **ADO.NET Entity Data Model**.
    
  
3. For the name of the data model, enter Northwind.edmx.
    
  
4. In the Entity Data Model Wizard, choose **Generate from Database**, and then choose **Next**.
    
  
5. Connect the data model to the database by doing one of the following steps:
    
1. If you do not have a database connection already configured, choose **New Connection** and create a new connection. For more information, see [How to: Create Connections to SQL Server Databases](http://msdn.microsoft.com/library/360c340d-e5a6-4a7e-a569-e95d500be43d%28Office.15%29.aspx). This SQL Server instance must have the Northwind sample database attached. Choose **Next**.
    
    -or-
    
  
2. If you have a database connection already configured to connect to the Northwind database, choose that connection from the list of connections, and then choose **Next**.
    
  
6. On the final page of the wizard, select the check boxes for all tables in the database, and clear the check boxes for views and stored procedures.
    
  
7. Choose the **Finish** button to close the wizard.
    
  
In the next step, you create the actual service that is hosted by IIS that will provide the means to access external data through Representational State Transfer (REST).
  
    
    

### To create the WCF Data Service


1. In **Solution Explorer**, open the shortcut menu for your ASP.NET project, and choose **Add New Item**.
    
  
2. In the **Add New Item** dialog box, choose **WCF Data Service**.
    
  
3. For the name of the service, enter Northwind.
    
  
4. In the code for the data service, in the definition of the class that defines the data service, replace the comment  `/* TODO: put your data source class name here */` with the type that is the entity container of the data model, which in this case is `NorthwindEntities`. The class definition should look like the following.
    
```cs
  
public class Northwind : DataService<NorthwindEntities>

```


### To set the security on the service


- You now have to modify the security to allow access to the data from the OData feed by external consumers. When a WCF service is created, all access is denied by default. Make the following changes to the class you just created.
    
```cs
  
config.SetEntitySetAccessRule("*", EntitySetRights.All);
config.SetServiceOperationAccessRule("*", ServiceOperationRights.All);
```


### Create the Subscribe service operation (optional)

The WCF service can also be coded with a means to handle the Subscribe and Unsubscribe requests from SharePoint. If you choose to create custom stored procedures for your application these will each be handled by a service operation.
  
    
    
 **Subscribe**: The Subscribe operation takes the request sent by SharePoint and retrieves the delivery address the event type and the entity. It also has to generate a **subscriptionId** and then record all of these into the database table.
  
    
    



```cs

/// The Subscribe service operation maps directly to the Subscribe stereotype
/// found in the BDC model

[WebGet]
public string Subscribe(string deliveryUrl, string eventType)
{
   // Generate a new Guid that will function as the subscriptionId.
            string subscriptionId = new Guid().ToString();

            // This sproc will be used to create the subscription in the database.
            string subscribeSproc = "SubscribeEntity";

            // Create connection to database.
            using (SqlConnection conn = new SqlConnection(sqlConn))
            {
                SqlCommand cmd = new SqlCommand(subscribeSproc, conn);
                cmd.Parameters.Add(new SqlParameter("SubscriptionId", subscriptionId));
                cmd.Parameters.Add(new SqlParameter("EntityName", entityName));
                cmd.Parameters.Add(new SqlParameter("EventType", eventType));
                cmd.Parameters.Add(new SqlParameter("DeliveryAddress", deliveryUrl));
                cmd.Parameters.Add(new SqlParameter("SelectColumns", selectColumns));

                try
                {
                    conn.Open();
                    cmd.ExecuteNonQuery();
                }
                catch (Exception e)
                {
                    throw e;
                }
                finally
                {
                    conn.Close();
                }

                return subscriptionId;
            }
```


> **Note:**
> If SQL Server is set up for Windows authentication, it will try to authenticate the request with the App Pool identity. Make sure that the account configured in the App Pool has rights to read and write in the database. 
  
    
    


## Create the polling service
<a name="bkmk_CreateThePollingService"> </a>

The polling service is a Windows service that is responsible for querying the change table and creating and sending notifications to SharePoint or SharePoint Online at the specific delivery address.
  
    
    
Next, you create a new Windows Service project that will be registered on the WCF host machine. Once the project is registered, you can view the running service in the Microsoft Management Console (MMC).
  
    
    

### To create a new project


1. Open Visual Studio 2012.
    
  
2. Create a new project using the Windows Service template, name the project PollingService, and choose the **OK** button.
    
  
3. When the project is created, open the PollingService.cs file in code view.
    
  
4. Add the following code in the newly created class.
    
```cs
  
public partial class PollingService : ServiceBase
{
   string subscriptionStorePath = string.Empty;

   public PollingService()
   {
      InitializeComponent();
   }

   protected override void OnStart(string[] args)
   {

      // This is the timer which fires every minute.           
      System.Timers.Timer aTimer = new System.Timers.Timer();
      aTimer.Elapsed += new System.Timers.ElapsedEventHandler(SendEventNotification);
      aTimer.Interval = 60000;
      aTimer.Enabled = true;
   }
   protected override void OnStop()
   {}

   private void SendEventNotification(object sender, EventArgs e)
   {
      try
      {
         List<ItemChange> events = itemChangeLookUp();             
         triggerEventPerSubscription(events);
      }
      catch (Exception ex)
      {
         EventLog.Log = "Application";
         EventLog.Source = ServiceName;
         EventLog.WriteEntry("PollingService" + ex.Message, EventLogEntryType.Error);
      }
   }

   private void triggerEventPerSubscription(List<ItemChange> events)
   {           
      foreach (ItemChange itemChangeEvent in events)
      {                        
         SendNotification(itemChangeEvent, itemChangeEvent.DeliveryAddress);
         string message = string.Format("PollingService.TriggerEventPerSubscription: Notification sent for item {0} of eventType 
                          {1}", itemChangeEvent.CustomerId, itemChangeEvent.EventType);
         EventLog.Log = "Application";
         EventLog.Source = ServiceName;
         EventLog.WriteEntry(message);                   
      }
   }

   private List<ItemChange> itemChangeLookUp()
   {
      EventLog.Log = "Application";
      EventLog.Source = ServiceName;
      EventLog.WriteEntry("Polling for Item Change");
      List<ItemChange> itemChangeList = new List<ItemChange>();          
      string connectionString = "Data Source=.;Initial Catalog=Northwind;Integrated Security=true";

      // Provide the query string with a parameter placeholder.
      string queryString = "Proc_RetrieveEventRecords";

      // Specify the parameter value.
      int paramValue = -50;

      using (SqlConnection connection = new SqlConnection(connectionString))
      {
         SqlCommand command = new SqlCommand(queryString, connection);
         command.CommandType = CommandType.StoredProcedure;
         command.Parameters.AddWithValue("@TimeSince", paramValue);
         try
         {
            connection.Open();
            SqlDataReader reader = command.ExecuteReader();
            while (reader.Read())
            {
               ItemChange item = new ItemChange(reader["CustomerID"].ToString(), Int32.Parse(reader["EventType"].ToString()), 
               reader[14].ToString(), reader["DeliveryUrl"].ToString(), reader["CompanyName"].ToString(), 
               reader["ContactName"].ToString(),reader["ContactTitle"].ToString(), reader["Address"].ToString(), 
               reader["City"].ToString(), reader["Region"].ToString(), reader["Country"].ToString(), reader["PostalCode"].ToString(), 
               reader["Phone"].ToString(), reader["Fax"].ToString());
               itemChangeList.Add(item);
            }
            reader.Close();
         }
         catch (Exception ex)
         {
            EventLog.Log = "Application";
            EventLog.Source = ServiceName;
            EventLog.WriteEntry("PollingService : ItemChangeLookup " + ex.Message, EventLogEntryType.Error);
         }
      } 
      string message = string.Format("{0} items changes", itemChangeList.Count);
      EventLog.Log = "Application";
      EventLog.Source = ServiceName;
      EventLog.WriteEntry(message);

      return itemChangeList;
   }

```

The next step is to build an executable file that can be added to the running services on the OData computer.
  
    
    

### To compile and deploy the polling service


1. Press F5 to build your project.
    
  
2. Open the **Command Prompt for VS2012**.
    
  
3. At the prompt, navigate to your project output location.
    
  
4. In the Bin directory, find the PollingService.exe file.
    
  
5. Enter installutil PollingService.exe and press Enter.
    
  
6. Verify that the service is running by running the Services MMC.
    
  

## Required SharePoint components
<a name="bkmk_SharePointComponents"> </a>

To complete the whole system, the following components are required on the server that is running SharePoint.
  
    
    

- **External content type:** The external content type is basically an XML definition of the external data source. For this scenario, you will use the new autogeneration tools in Visual Studio 2012 to discover the data source and create the external content type automatically.
    
  
- **External event receiver:** The remote or external event receiver is the thing that makes actions on external data changes possible in SharePoint. You can create event receivers for external lists and for entities.
    
    An event receiver that is created for an external list is similar to other event receivers for SharePoint lists. You create the code and attach it to the list. When an action is performed on the data that is represented by the list, the event receiver executes.
    
    An event receiver for entities is executed just like a list-based event receiver, except it doesn't need to be attached to a list. It receives notifications the same way, but it doesn't need the interface that is associated with the list-based example. The benefit of this is that you can intercept the notifications programmatically and create code to perform some action. In this scenario, that action is to create a new record in the notifications list 
    
  
- **Notifications list:** The notifications list is a simple SharePoint list that is used to record notifications received from the external system. For each new record added to the external system, a record is created in the notifications list.
    
  

## Set up the SharePoint components
<a name="bkmk_SettingUpTheSharePointComponents"> </a>

Now that you have the external system set up, it's time to move on to creating the other half of the equation. You will now create the components to be hosted on SharePoint.
  
    
    

### To create a new Visual Studio 2012 project


1. In Visual Studio 2012, choose **New Project**.
    
  
2. Choose the SharePoint app project template.
    
  
Office Developer Tools for Visual Studio 2013 added an autogeneration wizard that will discover a data source's schema and then create an external content type from that.
  
    
    

### To add a new external content type


- In **Solution Explorer**, open the shortcut menu for the project, and choose **Add**, **Content Types for an External Data Source**.
    
    This starts the **SharePoint Customization Wizard**, which is used to build the external content type automatically.
    
    For more information about how to create external content types, see  [How to: Create an external content type from an OData source in SharePoint](how-to-create-an-external-content-type-from-an-odata-source-in-sharepoint.md).
    
  
You will now modify the XML that was generated in the previous step to add a method for Subscribe. This will allow BCS to communicate with the external system when someone subscribes to be notified about external data changes.
  
    
    

### To add the Subscribe method to the external content type XML


1. In **Solution Explorer**, find the new node named **External Content Types**.
    
  
2. Find the **Customers.ect** file, and open it with an XML editor.
    
  
3. Scroll down to the bottom of the page, and paste the following method into the  `<Methods>` section.
    
```XML
  
<Method Name="SubscribeCustomer" DefaultDisplayName="Customer Subscribe" IsStatic="true">
              <Properties>
                <Property Name="ODataEntityUrl" Type="System.String">/EntitySubscribes</Property>
                <Property Name="ODataHttpMethod" Type="System.String">POST</Property>
                <Property Name="ODataPayloadKind" Type="System.String">Entry</Property>
                <Property Name="ODataFormat" Type="System.String">application/atom+xml</Property>
                <Property Name="ODataServiceOperation" Type="System.Boolean">false</Property>
              </Properties>
              <AccessControlList>
                <AccessControlEntry Principal="NT Authority\\Authenticated Users">
                  <Right BdcRight="Edit" />
                  <Right BdcRight="Execute" />
                  <Right BdcRight="SetPermissions" />
                  <Right BdcRight="SelectableInClients" />
                </AccessControlEntry>
              </AccessControlList>
              <Parameters>
                <Parameter Direction="In" Name="@DeliveryURL">
                  <TypeDescriptor TypeName="System.String" Name="DeliveryURL" >
                    <Properties>
                      <Property Name="IsDeliveryAddress" Type="System.Boolean">true</Property>
                    </Properties>
                  </TypeDescriptor>
                </Parameter>
                <Parameter Direction="In" Name="@EventType">
                  <TypeDescriptor TypeName="System.Int32" Name="EventType" >
                    <Properties>
                      <Property Name="IsEventType" Type="System.Boolean">true</Property>
                    </Properties>
                  </TypeDescriptor>
                </Parameter>
                <Parameter Direction="In" Name="@EntityName">
                  <TypeDescriptor TypeName="System.String" Name="EntityName" >
                    <DefaultValues>
                      <DefaultValue MethodInstanceName="SubscribeCustomer" Type="System.String">Customers</DefaultValue>
                    </DefaultValues>
                  </TypeDescriptor>
                </Parameter>
                <Parameter Direction="In" Name="@SelectColumns">
                  <TypeDescriptor TypeName="System.String" Name="SelectColumns" >
                    <DefaultValues>
                      <DefaultValue MethodInstanceName="SubscribeCustomer" Type="System.String">*</DefaultValue>
                    </DefaultValues>
                  </TypeDescriptor>
                </Parameter>
                <Parameter Direction="Return" Name="SubscribeReturn">
                  <TypeDescriptor Name="SubscribeReturnRootTd" TypeName="Microsoft.BusinessData.Runtime.DynamicType">
                    <TypeDescriptors>
                      <TypeDescriptor Name="SubscriptionId" TypeName="System.String" >
                        <Properties>
                          <Property Name="SubscriptionIdName" Type="System.String">Default</Property>
                        </Properties>
                        <Interpretation>
                          <ConvertType LOBType="System.Int32" BDCType="System.String"/>
                        </Interpretation>
                      </TypeDescriptor>
                      <TypeDescriptor Name="DeliveryURL" TypeName="System.String" />
                      <TypeDescriptor Name="SelectColumns" TypeName="System.String" >
                      </TypeDescriptor>
                      <TypeDescriptor Name="EntityName" TypeName="System.String" />
                      <TypeDescriptor Name="EventType" TypeName="System.Int32" />
                      <TypeDescriptor Name="UserId" TypeName="System.String" />
                      <!--TypeDescriptor Name="SubscribeTime" TypeName="System." /-->
                    </TypeDescriptors>
                  </TypeDescriptor>
                </Parameter>
              </Parameters>
              <MethodInstances>
                <MethodInstance Type="EventSubscriber" ReturnParameterName="SubscribeReturn" ReturnTypeDescriptorPath="SubscribeReturnRootTd" Default="true" Name="SubscribeCustomer" DefaultDisplayName="Customer Subscribe">
                  <AccessControlList>
                    <AccessControlEntry Principal="NT Authority\\Authenticated Users">
                      <Right BdcRight="Edit" />
                      <Right BdcRight="Execute" />
                      <Right BdcRight="SetPermissions" />
                      <Right BdcRight="SelectableInClients" />
                    </AccessControlEntry>
                  </AccessControlList>
                </MethodInstance>
              </MethodInstances>
            </Method>
```

You will now add client code to allow your list to subscribe to event notifications.
  
    
    

### To add code to the App.js file to initiate the subscription


- In the Scripts folder of your SharePoint Add-in project, open the **App.js** file. Paste the following method into the file.
    
```
  
function SubscribeEntity()
{
    var notificationCallback = new SP.BusinessData.Runtime.NotificationCallback(context, "http://[MACHINE NAME]:8585");
    var url = myweb.get_url();
    notificationCallback.set_notificationContext(url);
    context.load(notificationCallback);
    var subscription = entity.subscribe(1, notificationCallback, "", "SubscribeCustomer", lobSystemInstance);
    context.load(subscription);
    context.executeQueryAsync(OnSubscribeSuccess, failmethod);
}
```

To register the event receiver with this script, you have to create a button on the Default.aspx page in your project and call the **SubscribeEntity()** from the **onclick()** method.
  
    
    

- Open the Default.aspx page, and add the following HTML.
    
```HTML
  
<input type="button" value="Subscribe" onclick="SubscribeEntity();"/>
```

For eventing to work, you must also enable the SharePoint list to accept external events. This is done by turning on the External Events feature.
  
    
    
The following is a script that will turn on the feature using client code.
  
    
    



```cs
function EnableEventing_Clicked()
{
    var clientContext = SP.ClientContext.get_current();
    var web = clientContext.get_web();
    var features = web.get_features();

    clientContext.load(features);

    // The GUID provided here is the feature that allows external events and alerts.
    var eventingFeatureId = new SP.Guid('5B10D113-2D0D-43BD-A2FD-F8BC879F5ABD');

    var eventingFeature = features.add(eventingFeatureId, true, SP.FeatureDefinitionScope.farm);

    clientContext.load(eventingFeature);
    var onEventingFeatureActivated = function () {
        alert("eventing feature activated");
    };
    clientContext.executeQueryAsync(Function.createDelegate(this,
    onEventingFeatureActivated));
}
```

Just like with **Subscribe**, you will add a button to the page that will turn on the feature.
  
    
    
Add the following HTML to the Default.aspx page, right below the **Subscribe** button.
  
    
    



```HTML

<input type="button" value="EnableEventing" onclick="EnableEventing_Clicked();"" />
```

Next, for this scenario you must add a notifications list that will show the notifications sent by the external system.
  
    
    

### To add the notifications list


1. In **Solution Explorer**, open the shortcut menu for the project name, and choose **Add**.
    
  
2. Choose the **List** template, and name the listNotificationList.
    
  
To mimic an event receiver that is registered with SharePoint in the global assembly cache, the sample provides a console application that will start listening for changes. When it receives a notification, it adds a list item to the **NotificationList**.
  
    
    

### To start the command-line event receiver


1. Open the **RemoteEventReceiverConsoleApp**.
    
  
2. Open the **Program.cs** file, and change the name of your local computer (or the computer where the event receiver will be running).
    
  
3. Click the **Start** button in Visual Studio to run the console application.
    
    A command window opens, which indicates that the application has compiled correctly, and it is listening for change notifications from the external system. Leave this window open during this test.
    
  

### To deploy the app to SharePoint


- Press F5 with Visual Studio open to build and deploy the app.
    
  

## Test the app
<a name="bkmk_testApp"> </a>

Now you can see the app in action.
  
    
    

1. Browse around the app to see the different lists that represent the data in the external system.
    
  
2. Click the **Customers** list.
    
  
3. Add a new customer.
    
  
4. View the new list item you just created.
    
  
5. Go to the notifications list to see that the external system has notified SharePoint of a change to the Customers table.
    
    Keep in mind that the timer is set to send notifications every one minute. While testing, you might have to wait for a short period before you see the notifications posted.
    
  

## Additional resources
<a name="bkmk_additionalresources"> </a>


-  [External events and alerts in SharePoint](external-events-and-alerts-in-sharepoint.md)
    
  
-  [How to: Create an add-in-scoped external content type in SharePoint](how-to-create-an-add-in-scoped-external-content-type-in-sharepoint.md)
    
  
-  [Get started using the client object model with external data in SharePoint](get-started-using-the-client-object-model-with-external-data-in-sharepoint.md)
    
  
-  [Business Connectivity Services in SharePoint](business-connectivity-services-in-sharepoint.md)
    
  
-  [What's new in Business Connectivity Services in SharePoint](what-s-new-in-business-connectivity-services-in-sharepoint.md)
    
  
-  [Get started with Business Connectivity Services in SharePoint](get-started-with-business-connectivity-services-in-sharepoint.md)
    
  

