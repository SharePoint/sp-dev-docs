---
title: How to Configure and use push notifications in SharePoint 2013 apps for Windows Phone
ms.prod: SHAREPOINT
ms.assetid: 68fa2138-86d9-4e35-9c7c-5cd292087b80
---


# How to: Configure and use push notifications in SharePoint 2013 apps for Windows Phone
Create a solution in SharePoint Server for sending push notifications and develop a Windows Phone app for receiving the notifications.
Using the Microsoft Push Notification Service (MPNS), Windows Phone apps can receive notifications through the Internet of events triggered on Microsoft SharePoint Server. The phone app doesn't have to poll the server for changes to, for example, the items in a list on which the phone app is based. The app can be registered to receive notifications from the server, and an event receiver can initiate a notification and send it to the receiving app for handling. The push notification is relayed to Windows Phone devices by MPNS.
  
    
    

Windows Phone 7 doesn't support running multiple apps simultaneously. Other than the components of the Windows Phone operating system (OS) itself, only one app can be running on the phone at a time. An event relevant to a given phone app might occur (such as, for example, a list item being added to a list) when the app isn't running in the foreground on the phone (that is, when the app is tombstoned or closed). You could develop a background service on the phone with a periodic task that might check for changes to the list on the server, but this approach would consume resources (such as network bandwidth and battery power) on the phone. With MPNS and the components that support notifications built into the Windows Phone 7 OS, the phone itself can receive a notification relevant to the context of a given app—even when that app isn't running—and the user can be given the opportunity to start the relevant app in response to the notification. (For more information about push notifications, see  [Push Notifications Overview for Windows Phone](http://msdn.microsoft.com/en-us/library/ff402558%28VS.92%29.aspx) in the MSDN Library.)
In this topic, you create a server-side solution for sending push notifications to a phone app based on a change in the list on which the app is based. You will then create the phone app for receiving these notifications.
  
    
    


## Create a server-side solution to send push notifications based on a list item event
<a name="BKMK_ServerSideSolution"> </a>

The server-side solution can be either a SharePoint app deployed in an isolated **SPWeb** object, or a SharePoint farm solution packaged as a SharePoint solution package (that is, a .wsp file) that contains a Web-scoped Feature. In the procedures in this section, you will develop a simple SharePoint solution that creates a target list to be used by a Windows Phone app and that activates the push notification mechanism on the server. In the subsequent section, you will develop the Windows Phone app for receiving notifications from the server-side solution.
  
    
    

### To create the server-side project


1. Start Visual Studio 2012 by using the **Run as Administrator** option.
    
  
2. Choose **File**, **New**, **Project**.
    
    The **New Project** dialog box appears.
    
  
3. In the **New Project** dialog box, expand the **SharePoint** node under **Visual C#**, and then choose the **15** node.
    
  
4. In the **Templates** pane, select **SharePoint 2013 Project** and specify a name for the project, such asPushNotificationsList.
    
  
5. Choose the **OK** button. The SharePoint Customization Wizard appears. This wizard enables you to select the target site for developing and debugging the project and the trust level of the solution.
    
  
6. Specify the URL of a SharePoint Server site. Select a site that you will be able to use later in the development of the SharePoint list app for Windows Phone.
    
  
7. Select **Deploy as a farm solution**, and then click **Finish** to create the project.
    
  
Next, add a class file to the project and create a couple of classes to encapsulate and manage push notifications.
  
    
    

### To create the classes for managing push notifications


1. In **Solution Explorer**, choose the node representing the project (named PushNotificationsList if you follow the naming convention used in these procedures).
    
  
2. On the **Project** menu, choose **Add Class**. The **Add New Item** dialog box appears with the C# **Class** template already selected.
    
  
3. Specify PushNotification.cs as the name of the file and click **Add**. The class file is added to the solution and opened for editing.
    
  
4. Replace the contents of the file with the following code.
    
  ```cs
  
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using Microsoft.SharePoint;

namespace PushNotificationsList
{
    internal static class WP7Constants
    {
        internal static readonly string[] WP_RESPONSE_HEADERS = 
            {
                "X-MessageID",
                "X-DeviceConnectionStatus",
                "X-SubscriptionStatus",
                "X-NotificationStatus"
            };
    }

    public enum TileIntervalValuesEnum
    {
        ImmediateTile = 1,
        Delay450SecondsTile = 11,
        Delay900SecondsTile = 21,
    }

    public enum ToastIntervalValuesEnum
    {
        ImmediateToast = 2,
        Delay450SecondsToast = 12,
        Delay900SecondsToast = 22,
    }

    public enum RawIntervalValuesEnum
    {
        ImmediateRaw = 3,
        Delay450SecondsRaw = 13,
        Delay900SecondsRaw = 23
    }

    public enum NotificationTypeEnum
    {
        Tile = 1,
        Toast = 2,
        Raw = 3
    }

    class PushNotification
    {
        public PushNotificationResponse PushToast(SPPushNotificationSubscriber subscriber, string toastTitle, string toastMessage, string toastParam, ToastIntervalValuesEnum intervalValue)
        {
            // Construct toast notification message from parameter values.
            string toastNotification = "<?xml version=\\"1.0\\" encoding=\\"utf-8\\"?>" +
            "<wp:Notification xmlns:wp=\\"WPNotification\\">" +
               "<wp:Toast>" +
                    "<wp:Text1>" + toastTitle + "</wp:Text1>" +
                    "<wp:Text2>" + toastMessage + "</wp:Text2>" +
                    "<wp:Param>" + toastParam + "</wp:Param>" +
               "</wp:Toast> " +
            "</wp:Notification>";

            return SendPushNotification(NotificationTypeEnum.Toast, subscriber, toastNotification, (int)intervalValue);
        }

        public PushNotificationResponse PushRaw(SPPushNotificationSubscriber subscriber, string rawMessage, RawIntervalValuesEnum intervalValue)
        {
            return SendPushNotification(NotificationTypeEnum.Raw, subscriber, rawMessage, (int)intervalValue);
        }

        private PushNotificationResponse SendPushNotification(NotificationTypeEnum notificationType, SPPushNotificationSubscriber subscriber, string message, int intervalValue)
        {
            // Create HTTP Web Request object.
            string subscriptionUri = subscriber.ServiceToken;
            HttpWebRequest sendNotificationRequest = (HttpWebRequest)WebRequest.Create(subscriptionUri);

            // MPNS expects a byte array, so convert message accordingly.
            byte[] notificationMessage = Encoding.Default.GetBytes(message);
            
            // Set the notification request properties.
            sendNotificationRequest.Method = WebRequestMethods.Http.Post;
            sendNotificationRequest.ContentLength = notificationMessage.Length;
            sendNotificationRequest.ContentType = "text/xml";
            sendNotificationRequest.Headers.Add("X-MessageID", Guid.NewGuid().ToString());

            switch (notificationType)
            {
                case NotificationTypeEnum.Tile:
                    sendNotificationRequest.Headers.Add("X-WindowsPhone-Target", "token");
                    break;
                case NotificationTypeEnum.Toast:
                    sendNotificationRequest.Headers.Add("X-WindowsPhone-Target", "toast");
                    break;
                case NotificationTypeEnum.Raw:
                    // A value for the X-WindowsPhone-Target header is not specified for raw notifications.
                    break;
            }            

            sendNotificationRequest.Headers.Add("X-NotificationClass", intervalValue.ToString());

            // Merge byte array payload with headers.
            using (Stream requestStream = sendNotificationRequest.GetRequestStream())
            {
                requestStream.Write(notificationMessage, 0, notificationMessage.Length);
            }

            string statCode = string.Empty;
            PushNotificationResponse notificationResponse;

            try
            {
                // Send the notification and get the response.
                HttpWebResponse response = (HttpWebResponse)sendNotificationRequest.GetResponse();
                statCode = Enum.GetName(typeof(HttpStatusCode), response.StatusCode);

                // Create PushNotificationResponse object.
                notificationResponse = new PushNotificationResponse((int)intervalValue, subscriber.ServiceToken);
                notificationResponse.StatusCode = statCode;
                foreach (string header in WP7Constants.WP_RESPONSE_HEADERS)
                {
                    notificationResponse.Properties[header] = response.Headers[header];
                }                
            }
            catch (Exception ex)
            {
                statCode = ex.Message;
                notificationResponse = new PushNotificationResponse((int)intervalValue, subscriber.ServiceToken);
                notificationResponse.StatusCode = statCode;
            }

            return notificationResponse;
        }
    }     

    /// <summary>
    /// Object used for returning notification request results.
    /// </summary>
    class PushNotificationResponse
    {
        private DateTime timestamp;
        private int notificationIntervalValue;
        private string statusCode = string.Empty;
        private string serviceToken;
        private Dictionary<string, string> properties;

        public PushNotificationResponse(int numericalIntervalValue, string srvcToken)
        {
            timestamp = DateTime.UtcNow;
            notificationIntervalValue = numericalIntervalValue;
            serviceToken = srvcToken;
            properties = new Dictionary<string, string>();
        }

        public DateTime TimeStamp
        {
            get { return timestamp; }
        }

        public int NotificationIntervalValue
        {
            get { return notificationIntervalValue; }
        }

        public string StatusCode
        {
            get { return statusCode; }
            set { statusCode = value; }
        }

        public string ServiceToken
        {
            get { return serviceToken; }
        }

        public Dictionary<string, string> Properties
        {
            get { return properties; }
        }
    }
}
  ```

5. Save the file.
    
  
In this code, the **PushToast** and **PushRaw** methods take parameter arguments appropriate for the given type of notification to send, process those arguments, and then call the **SendPushNotification** method, which does the work of sending the notification using the Microsoft Push Notification Service. (In this sample code, a method for sending tile notifications has not been implemented.) The **PushNotificationResponse** class is simply a mechanism for encapsulating the result received from the notification request. Here, the class adds some information to the object (cast as an **HttpWebResponse** object) returned by the **GetResponse** method of the **HttpWebRequest** object. The event receiver you create in the following procedure uses this **PushNotificationResponse** class to update a notifications results list on the server.
  
    
    
Now create an event receiver class that will send push notifications to devices that have been registered to receive them. (You will bind this event receiver to the Jobs list that is created in a later procedure.)
  
    
    

### To create the event receiver class for a list


1. In **Solution Explorer**, choose the node representing the project.
    
  
2. On the **Project** menu, click **Add Class**. The **Add New Item** dialog box appears with the C# **Class** template already selected.
    
  
3. Specify ListItemEventReceiver.cs as the name of the file and click **Add**. The class file is added to the solution and opened for editing.
    
  
4. Replace the contents of the file with the following code.
    
  ```cs
  
using System;
using System.Security.Permissions;
using System.Text;
using Microsoft.SharePoint;
using Microsoft.SharePoint.Utilities;

namespace PushNotificationsList
{
    /// <summary>
    /// List Item Events
    /// </summary>
    public class ListItemEventReceiver : SPItemEventReceiver
    {
        internal static string ResultsList = "Push Notification Results";

        /// <summary>
        /// An item was added.
        /// </summary>
        public override void ItemAdded(SPItemEventProperties properties)
        {
            SPWeb spWeb = properties.Web;
            SPPushNotificationSubscriberCollection pushSubscribers = spWeb.PushNotificationSubscribers;
            PushNotification pushNotification = new PushNotification();

            SPListItem listItem = properties.ListItem;

            string jobAssignment = "[Unassigned]";

            // This event receiver is intended to be associated with a specific list,
            // but the list may not have an "AssignedTo" field, so using try/catch here.
            try
            {
                jobAssignment = listItem["AssignedTo"].ToString();
            }
            catch { }

            PushNotificationResponse pushResponse = null;

            foreach (SPPushNotificationSubscriber ps in pushSubscribers)
            {
                // Send a toast notification to be displayed on subscribed phones on which the app is not running.
                pushResponse = pushNotification.PushToast(ps, "New job for:", jobAssignment, string.Empty, ToastIntervalValuesEnum.ImmediateToast);
                UpdateNotificationResultsList(spWeb, ps.User.Name, pushResponse);

                // Also send a raw notification to be displayed on subscribed phones on which the app is running when the item is added.
                pushResponse = pushNotification.PushRaw(ps, string.Format("New job for: {0}", jobAssignment), RawIntervalValuesEnum.ImmediateRaw);
                UpdateNotificationResultsList(spWeb, ps.User.Name, pushResponse);
            }

            base.ItemAdded(properties);
        }

        private void UpdateNotificationResultsList(SPWeb spWeb, string subscriberName, PushNotificationResponse pushResponse)
        {
            SPList resultsList = spWeb.Lists.TryGetList(ResultsList);

            if (resultsList == null)
                return;

            try
            {
                SPListItem resultItem = resultsList.Items.Add();
                resultItem["Title"] = subscriberName;
                resultItem["Notification Time"] = pushResponse.TimeStamp;
                resultItem["Status Code"] = pushResponse.StatusCode;
                resultItem["Service Token"] = pushResponse.ServiceToken;

                StringBuilder builder = new StringBuilder();
                foreach (string key in pushResponse.Properties.Keys)
                {
                    builder.AppendFormat("{0}: {1}; ", key, pushResponse.Properties[key]);
                }
                resultItem["Headers"] = builder.ToString();

                resultItem["Interval Value"] = pushResponse.NotificationIntervalValue;
                resultItem.Update();
            }
            catch
            {
                // Could log to ULS here if adding list item fails.
            }
        }
    }
}
  ```

5. Save the file.
    
  
In this code, after an item is added to the list to which the event receiver is bound, push notifications are sent to subscribers that have registered to receive notifications. The value of the AssignedTo field from the added list item is included in the notification message sent to subscribers. For the toast notification, the values of the **toastTitle** parameter (for the **PushToast** method defined in the preceding procedure) and the **toastMessage** parameter are set. These values correspond to the **Text1** and **Text2** properties in the XML schema that defines toast notifications.
  
    
    
An empty string is simply being passed as the value of the **toastParam** parameter, which corresponds to the **Param** property in the XML schema for toast notifications. You could use this parameter to specify, for example, a page of the phone app to open when the user clicks the notification in the phone. In the sample phone app developed later in this topic for receiving these notifications from the server, the **Param** property is not used. The List form (List.xaml) in the app is simply opened when the user clicks the notification.
  
    
    

> [!NOTE]
> The **Param** property for toast notifications is supported only in Windows Phone OS version 7.1 or greater.
  
    
    

For the raw notification in this sample, a string is passed that contains the value of the AssignedTo field from the added list item.
  
    
    
Note that the toast notification will be displayed on subscribed phones (if the phone app for which the notification is intended is not running), and the message displayed will be truncated if it is longer than approximately 41 characters. Raw notifications in MPNS are limited to 1024 bytes (1 kilobyte). (The exact number of characters that can be sent depends on the kind of encoding used, such as UTF-8). Tile notifications are also subject to size limitations. Large amounts of data can't be sent using any of the notifications types. The best use of these notifications is not as a mechanism for transferring data, but as a way to send short messages to subscribed phones so that certain actions can be taken on the phone. Those actions, such as refreshing a list on the phone with data from the server, may involve larger amounts of data, depending on the design of the Windows Phone app.
  
    
    
The **PushNotificationResponse** object that is returned from a notification request is passed to the **UpdateNotificationResultsList** method. This method adds information about the request to a SharePoint list named Push Notification Results (if the list exists). This is simply a demonstration of one way to use the returned object. You can put the returned object to more sophisticated uses in a production solution. You might, for example, examine the returned object for particular status codes when a notification is sent to a given user (such as the user designated for the assignment in the AssignedTo field) and take the appropriate action. In a production application, you probably wouldn't store all of this information in a list on the server. The information is being stored here to help you understand the properties associated with MPNS notifications.
  
    
    
Next, you create a simple SharePoint list, named Jobs, that contains a job category, a description of a job, and the person to whom the job is assigned. Also, you create an auxiliary list, named Push Notification Results, for storing information related to notification requests sent to subscribing phones.
  
    
    
In the following procedure, you create a class, **ListCreator**, that includes a **CreateJobsList** method for creating and configuring the Jobs list when the solution is activated on the server. The class also adds the **ItemAdded** event receiver (created earlier in the **ListItemEventReceiver** class) to the **EventReceivers** collection associated with the list. The **ListCreator** class also includes a method for creating the Push Notification Results SharePoint list.
  
    
    

### To create a class for adding and configuring the lists


1. In **Solution Explorer**, choose the node representing the project (again, named PushNotificationsList if you follow the naming convention used in these procedures).
    
  
2. On the **Project** menu, click **Add Class**. The **Add New Item** dialog box appears with the C# **Class** template already selected.
    
  
3. Specify ListCreator.cs as the name of the file and click **Add**. The class file is added to the solution and opened for editing.
    
  
4. Replace the contents of the file with the following code.
    
  ```cs
  
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml;
using Microsoft.SharePoint;

namespace PushNotificationsList
{
    class ListCreator
    {
        internal void CreateJobsList(SPWeb spWeb)
        {
            string listTitle = "Jobs";
            string listDescription = "List of jobs and assignments.";
            Dictionary<string, SPFieldType> columns = new Dictionary<string, SPFieldType>();

            // The "Title" column will be added based on the GenericList template. That field
            // will be used as the category name for the job (e.g., Shopping), so only need to add
            // the remaining fields.
            columns.Add("Description", SPFieldType.Text);
            columns.Add("AssignedTo", SPFieldType.Text);

            // Creating list (or retrieving GUID for list if it already exists).
            Guid listId = CreateCustomList(spWeb, listTitle, listDescription, columns, false);
            if (listId.Equals(Guid.Empty))
                return;

            SPList list = spWeb.Lists[listId];

            // Add event receiver (if the current Jobs list is not already associated with the receiver).
            bool ReceiverExists = false;
            string receiverClassName = "PushNotificationsList.ListItemEventReceiver";

            for (int i = 0; i < list.EventReceivers.Count; i++)
            {
                SPEventReceiverDefinition rd = list.EventReceivers[i];
                if (rd.Class == receiverClassName &amp;&amp; rd.Type == SPEventReceiverType.ItemAdded)
                {
                    ReceiverExists = true;
                    break;
                }
            }

            if (ReceiverExists == false)
            {
                SPEventReceiverDefinition eventReceiver = list.EventReceivers.Add();
                // Must specify information here for this specific assembly.
                eventReceiver.Assembly = "PushNotificationsList,
                    Version=1.0.0.0, Culture=Neutral,
                    PublicKeyToken=[YOUR TOKEN VALUE HERE]";
                eventReceiver.Class = receiverClassName;
                eventReceiver.Name = "ItemAdded Event";
                eventReceiver.Type = SPEventReceiverType.ItemAdded;
                eventReceiver.SequenceNumber = 10000;
                eventReceiver.Synchronization = SPEventReceiverSynchronization.Synchronous;
                eventReceiver.Update();
            }
        }

        internal void CreateNotificationResultsList(SPWeb spWeb)
        {
            string listTitle = "Push Notification Results";
            string listDescription = "List for results from push notification operations.";

            Dictionary<string, SPFieldType> columns = new Dictionary<string, SPFieldType>();
            columns.Add("Notification Time", SPFieldType.Text);
            columns.Add("Status Code", SPFieldType.Text);
            columns.Add("Service Token", SPFieldType.Text);
            columns.Add("Headers", SPFieldType.Text);
            columns.Add("Interval Value", SPFieldType.Integer);

            // Creating the list for storing notification results.
            CreateCustomList(spWeb, listTitle, listDescription, columns, true);
        }

        /// <summary>
        /// Creates a SharePoint list (based on the Generic List template).
        /// </summary>
        /// <param name="spWeb">The target Web site for the list.</param>
        /// <param name="listTitle">The title of the list.</param>
        /// <param name="listDescription">A description for the list.</param>
        /// <param name="columns">A Dictionary object containing field names and types.</param>
        /// <param name="replaceExistingList">Indicates whether to overwrite an existing list of the same name on the site.</param>
        /// <returns>A GUID for the created (or existing) list.</returns>
        internal Guid CreateCustomList(SPWeb spWeb, string listTitle, string listDescription, Dictionary<string, SPFieldType> columns, bool replaceExistingList)
        {
            SPList list = spWeb.Lists.TryGetList(listTitle);

            if (list != null)
            {
                if (replaceExistingList == true)
                {
                    try
                    {
                        list.Delete();
                    }
                    catch
                    {
                        return Guid.Empty;
                    }
                }
                else
                {
                    return list.ID;
                }
            }

            try
            {
                Guid listId = spWeb.Lists.Add(listTitle, listDescription, SPListTemplateType.GenericList);
                list = spWeb.Lists[listId];
                SPView view = list.DefaultView;

                foreach (string key in columns.Keys)
                {
                    list.Fields.Add(key, columns[key], false);
                    view.ViewFields.Add(key);
                }
                
                list.Update();
                view.Update();

                return listId;
            }
            catch
            {
                return Guid.Empty;
            }
        }
    }
}
  ```


    Be sure to specify the appropriate Public Key Token value for particular your assembly. To add a tool to Visual Studio for getting the Public Key Token value for your assembly, see  [How to: Create a Tool to Get the Public Key of an Assembly](http://msdn.microsoft.com/en-us/library/ee539398.aspx) in the MSDN Library. Note that you will have to compile your project at least once to be able to get the Public Key Token value for your output assembly.
    
  
5. Save the file.
    
  
In this code, the **CreateJobsList** method of the **ListCreator** class creates the list (or gets the list if it exists on the server) and binds the event receiver created in an earlier procedure to the list by adding it to the **EventReceivers** class associated with the list. The **CreateNotificationResultsList** method creates the Push Notification Results list.
  
    
    
Next you add a Feature to your project in order to perform initialization operations on the server when your solution is deployed and activated. You add an event receiver class to the Feature to handle the **FeatureActivated** and **FeatureDeactivating** events.
  
    
    

### To add a Feature to your project


1. In Visual Studio 2012, on the **View** menu, point to **Other Windows** and then click **Packaging Explorer**.
    
  
2. In the **Packaging Explorer**, right-click the node representing your project and click **Add Feature**. A new Feature (named "Feature1" by default) is added to your project, under a **Features** node (in **Solution Explorer**).
    
  
3. Now, in **Solution Explorer**, under the **Features** node, right-click the newly added Feature (that is, **Feature1**), and click **Add Event Receiver**. An event receiver class file (Feature1.EventReceiver.cs) is added to the Feature and opened for editing.
    
  
4. Within the implementation (demarcated by opening and closing braces) of the **Feature1EventReceiver** class, add the following code.
    
  ```cs
  
internal const string PushNotificationFeatureId = "41E1D4BF-B1A2-47F7-AB80-D5D6CBBA3092";
  ```


    This string variable stores the identifier for the Push Notification Feature on the server.
    
    > [!TIP]
      > You can obtain a list of unique identifiers for the Features on a SharePoint Server by executing the following Windows PowerShell cmdlet: >  `Get-SPFeature | Sort -Property DisplayName`> The Push Notification Feature appears as "PhonePNSubscriber" in the results returned by this cmdlet. 
5. The event receiver class file is created with some default method declarations for handling Feature events. The method declarations in the file are initially commented out. Replace the **FeatureActivated** method in the file with the following code.
    
  ```cs
  public override void FeatureActivated(SPFeatureReceiverProperties properties)
{
    base.FeatureActivated(properties);
    SPWeb spWeb = (SPWeb)properties.Feature.Parent;

    ListCreator listCreator = new ListCreator();
    listCreator.CreateJobsList(spWeb);
    listCreator.CreateNotificationResultsList(spWeb);

    // Then activate the Push Notification Feature on the server.
    // The Push Notification Feature is not activated by default in a SharePoint Server installation.
    spWeb.Features.Add(new Guid(PushNotificationFeatureId), false);
}
  ```

6. Replace the **FeatureDeactivating** method in the file with the following code.
    
  ```cs
  
public override void FeatureDeactivating(SPFeatureReceiverProperties properties)
{
    base.FeatureDeactivating(properties);
    SPWeb spWeb = (SPWeb)properties.Feature.Parent;

    // Deactivate the Push Notification Feature on the server
    // when the PushNotificationsList Feature is deactivated.
    spWeb.Features.Remove(new Guid(PushNotificationFeatureId), false);
}
  ```

7. Save the file.
    
  
In the implementation of the **FeatureActivated** event handler here, an instance of the **ListCreator** class is instantiated and its **CreateJobsList** and **CreateNotificationResultsList** methods are called, using the **SPWeb** where the Feature is deployed and activated as the location in which the lists will be created. In addition, because push notification functionality is not enabled by default in a standard installation of SharePoint Server, the event handler activates the Push Notification Feature on the server. In the **FeatureDeactivating** event handler, push notification functionality is deactivated when the application has been deactivated. It isn't necessary to handle this event. You may or may not want to deactivate push notifications on the server when the application is deactivated, depending on the circumstances of your installation and whether other applications on the target site make use of push notifications.
  
    
    

## Create a Windows Phone SharePoint list app to receive push notifications
<a name="BKMK_NotificationPhoneApp"> </a>

In this section, you create a Windows Phone app from the Windows Phone SharePoint List Application template, specifying the SharePoint list created in the preceding section as the target list for the app. You then develop a **Notifications** class for subscribing to push notifications, implementing handlers for notification events, and storing information related to notifications on the phone. You also add a XAML page to your app with controls to allow users to register or unregister for push notifications.
  
    
    
To follow the procedures in this section, first perform the steps in the procedure described in  [How to: Create a Windows Phone SharePoint 2013 list app](how-to-create-a-windows-phone-sharepoint-list-app.md) to create a Visual Studio project from the Windows Phone SharePoint List Application template, using the Jobs list created in the preceding section as the target SharePoint list for the project. For the purposes of the procedures in this section, it is assumed that the name specified for the project isSPListAppForNotifications.
  
    
    

### To create the class for managing subscriptions and received notifications


1. In **Solution Explorer**, choose the node representing the project (named SPListAppForNotifications).
    
  
2. On the **Project** menu, click **Add Class**. The **Add New Item** dialog box appears with the C# **Class** template already selected.
    
  
3. Specify "Notifications.cs" as the name of the file and click **Add**. The class file is added to the solution and opened for editing.
    
  
4. Replace the contents of the file with the following code.
    
  ```cs
  
using System;
using System.Linq;
using System.Net;
using System.Windows;
using Microsoft.Phone.Notification;
using Microsoft.SharePoint.Client;
using System.Diagnostics;
using System.Collections.Generic;
using Microsoft.Phone.Shell;
using System.IO;
using System.IO.IsolatedStorage;

namespace SPListAppForNotifications
{
    public class Notifications
    {
        static HttpNotificationChannel httpChannel;
        private const string RegStatusKey = "RegistrationStatus";
        public static string DeviceAppIdKey = "DeviceAppInstanceId";
        public static string ChannelName = "JobsListNotificationChannel";
        public static ClientContext Context { get; set; }

        public static void OpenNotificationChannel(bool isInitialRegistration)
        {
            try
            {
                // Get channel if it was created in a previous session of the app.
                httpChannel = HttpNotificationChannel.Find(ChannelName);

                // If channel is not found, create one.
                if (httpChannel == null)
                {
                    httpChannel = new HttpNotificationChannel(ChannelName);

                    // Add event handlers. When the Open method is called, the ChannelUriUpdated event will fire.
                    // A call is made to the SubscribeToService method in the ChannelUriUpdated event handler.                    
                    AddChannelEventHandlers();
                    httpChannel.Open();
                }
                else
                {
                    // The channel exists and is already open. Add handlers for channel events.
                    // The ChannelUriUpdated event won't fire in this case.
                    AddChannelEventHandlers();

                    // If app instance is registering for first time
                    // (instead of just starting up again), then call SubscribeToService.
                    if (isInitialRegistration)
                    {
                        SubscribeToService();
                    }
                }
            }
            catch (Exception ex)
            {                
                ShowMessage(ex.Message, "Error Opening Channel");
                CloseChannel();
            }
        }

        private static void AddChannelEventHandlers()
        {
            httpChannel.ChannelUriUpdated += new EventHandler<NotificationChannelUriEventArgs>(httpChannel_ChannelUriUpdated);
            httpChannel.ErrorOccurred += new EventHandler<NotificationChannelErrorEventArgs>(httpChannel_ExceptionOccurred);
            httpChannel.ShellToastNotificationReceived += new EventHandler<NotificationEventArgs>(httpChannel_ShellToastNotificationReceived);
            httpChannel.HttpNotificationReceived += new EventHandler<HttpNotificationEventArgs>(httpChannel_HttpNotificationReceived);
        }

        private static void httpChannel_ChannelUriUpdated(object sender, NotificationChannelUriEventArgs e)
        {
            UpdateChannelUriOnServer();
            SubscribeToService();
        }

        private static void httpChannel_ExceptionOccurred(object sender, NotificationChannelErrorEventArgs e)
        {
            // Simply showing the exception error.
            ShowMessage(e.Message, "Channel Event Error");
        }

        static void httpChannel_ShellToastNotificationReceived(object sender, NotificationEventArgs e)
        {
            if (e.Collection != null)
            {
                Dictionary<string, string> collection = (Dictionary<string, string>)e.Collection;
                ShellToast toast = new ShellToast();
                toast.Title = collection["wp:Text1"];
                toast.Content = collection["wp:Text2"];

                // Note that the Show method for a toast notification won't
                // display the notification in the UI of the phone when the app
                // that calls the method is running (as the foreground app on the phone).
                // toast.Show();
               //Toast and Raw notification will be displayed if user is running the app. Be default only Toast notification
               // will be displayed when the app is tombstoned                                               

                // Showing the toast notification with the ShowMessage method.
                ShowMessage(string.Format("Title: {0}\\r\\nContent: {1}", toast.Title, toast.Content), "Toast Notification");
            }
        }

        static void httpChannel_HttpNotificationReceived(object sender, HttpNotificationEventArgs e)
        {
            Stream messageStream = e.Notification.Body;
            string message = string.Empty;

            // Replacing NULL characters in stream.
            using (var reader = new StreamReader(messageStream))
            {
                message = reader.ReadToEnd().Replace('\\0', ' ');
            }

            // Simply displaying the raw notification.
            ShowMessage(message, "Raw Notification");
        }

        private static void SubscribeToService()
        {
            Guid deviceAppInstanceId = GetSettingValue<Guid>(DeviceAppIdKey, false);

            Context.Load(Context.Web, w => w.Title, w => w.Description);

            PushNotificationSubscriber pushSubscriber = Context.Web.RegisterPushNotificationSubscriber(deviceAppInstanceId, httpChannel.ChannelUri.AbsoluteUri);

            Context.Load(pushSubscriber);

            Context.ExecuteQueryAsync
                (
                    (object sender, ClientRequestSucceededEventArgs args) =>
                        {
                            SetRegistrationStatus(true);

                            // Indicate that tile and toast notifications can be
                            // received by phone shell when phone app is not running.
                            if (!httpChannel.IsShellTileBound)
                                httpChannel.BindToShellTile();

                            if (!httpChannel.IsShellToastBound)
                                httpChannel.BindToShellToast();

                            ShowMessage(
                                string.Format("Subscriber successfully registered: {0}", pushSubscriber.User.LoginName),
                                "Success");
                        },
                    (object sender, ClientRequestFailedEventArgs args) =>
                        {
                            ShowMessage(args.Exception.Message, "Error Subscribing");
                        });
        }

        private static void UpdateChannelUriOnServer()
        {
            Guid deviceAppInstanceId = GetSettingValue<Guid>(DeviceAppIdKey, false);

            Context.Load(Context.Web, w => w.Title, w => w.Description);            

            PushNotificationSubscriber subscriber = Context.Web.GetPushNotificationSubscriber(deviceAppInstanceId);

            Context.Load(subscriber);

            Context.ExecuteQueryAsync(
                    (object sender1, ClientRequestSucceededEventArgs args1) =>
                    {
                        subscriber.ServiceToken = httpChannel.ChannelUri.AbsolutePath;
                        subscriber.Update();
                        Context.ExecuteQueryAsync(
                            (object sender2, ClientRequestSucceededEventArgs args2) =>
                                {
                                    ShowMessage("Channel URI updated on server.", "Success");
                                },
                            (object sender2, ClientRequestFailedEventArgs args2) =>
                                {
                                    ShowMessage(args2.Exception.Message, "Error Upating Channel URI");
                                });
                    },
                   (object sender1, ClientRequestFailedEventArgs args1) =>
                   {
                       // This condition can be ignored. Getting to this point means the subscriber
                       // doesn't yet exist on the server, so updating the Channel URI is unnecessary.
                       //ShowMessage("Subscriber doesn't exist on server.", "DEBUG");
                   });
        }

        public static void UnSubscribe()
        {
            Context.Load(Context.Web, w => w.Title, w => w.Description);
            Guid deviceAppInstanceId = GetSettingValue<Guid>(DeviceAppIdKey, false);

            Context.Web.UnregisterPushNotificationSubscriber(deviceAppInstanceId);

            Context.ExecuteQueryAsync
                (
                    (object sender, ClientRequestSucceededEventArgs args) =>
                    {
                        CloseChannel();
                        SetRegistrationStatus(false);
                        //SetInitializationStatus(false);
                        ShowMessage("Subscriber successfully unregistered.", "Success");
                    },
                    (object sender, ClientRequestFailedEventArgs args) =>
                    {
                        ShowMessage(args.Exception.Message, "Error Unsubscribing");
                    });
        }

        public static void ClearSubscriptionStore()
        {
            Context.Load(Context.Web, w => w.Title, w => w.Description);
            List subscriptionStore = Context.Web.Lists.GetByTitle("Push Notification Subscription Store");
            Context.Load(subscriptionStore);
            ListItemCollection listItems = subscriptionStore.GetItems(new CamlQuery());
            Context.Load(listItems);

            Context.ExecuteQueryAsync
                (
                    (object sender1, ClientRequestSucceededEventArgs args1) =>
                    {
                        foreach (ListItem listItem in listItems.ToList())
                        {
                            listItem.DeleteObject();                            
                        }                        
                        Context.ExecuteQueryAsync(
                                (object sender2, ClientRequestSucceededEventArgs args2) =>
                                {
                                    // Close channel if open and set registration status for current app instance.
                                    CloseChannel();
                                    SetRegistrationStatus(false);

                                    ShowMessage("Subscriber store cleared.", "Success");
                                },
                                (object sender2, ClientRequestFailedEventArgs args2) =>
                                {
                                    ShowMessage(args2.Exception.Message, "Error Deleting Subscribers");
                                });
                    },
                    (object sender1, ClientRequestFailedEventArgs args1) =>
                    {
                        ShowMessage(args1.Exception.Message, "Error Loading Subscribers List");
                    });
        }

        private static void CloseChannel()
        {
            if (httpChannel == null) return;
            try
            {
                httpChannel.UnbindToShellTile();
                httpChannel.UnbindToShellToast();
                httpChannel.Close();
            }
            catch (Exception ex)
            {
                ShowMessage(ex.Message, "Error Closing Channel");
            }
        }

        public static void SaveDeviceAppIdToStorage()
        {
            if (!IsolatedStorageSettings.ApplicationSettings.Contains(DeviceAppIdKey))
            {
                Guid DeviceAppId = Guid.NewGuid();
                SetSettingValue<Guid>(DeviceAppIdKey, DeviceAppId, false);
            }
        }

        public static bool GetRegistrationStatus()
        {
            bool status = GetSettingValue<bool>(RegStatusKey, false);
            return status;
        }

        private static void SetRegistrationStatus(bool isRegistered)
        {
            SetSettingValue<bool>(RegStatusKey, isRegistered, false);
        }

        private static T GetSettingValue<T>(string key, bool fromTransientStorage)
        {
            if (fromTransientStorage == false)
            {
                if (IsolatedStorageSettings.ApplicationSettings.Contains(key))
                    return (T)IsolatedStorageSettings.ApplicationSettings[key];
                return default(T);
            }

            if (PhoneApplicationService.Current.State.ContainsKey(key))
                return (T)PhoneApplicationService.Current.State[key];
            return default(T);
        }

        private static void SetSettingValue<T>(string key, T value, bool toTransientStorage)
        {
            if (toTransientStorage == false)
            {
                if (IsolatedStorageSettings.ApplicationSettings.Contains(key))
                    IsolatedStorageSettings.ApplicationSettings[key] = value;
                else
                    IsolatedStorageSettings.ApplicationSettings.Add(key, value);

                IsolatedStorageSettings.ApplicationSettings.Save();
            }
            else
            {
                if (PhoneApplicationService.Current.State.ContainsKey(key))
                    PhoneApplicationService.Current.State[key] = value;
                else
                    PhoneApplicationService.Current.State.Add(key, value);
            }
        }

        // Method for showing messages on UI thread coming from a different originating thread.
        private static void ShowMessage(string message, string caption)
        {
            Deployment.Current.Dispatcher.BeginInvoke(() =>
            {
                MessageBox.Show(message, caption, MessageBoxButton.OK);
            });
        }
    }
}
  ```

5. Save the file.
    
  
In this code, the **OpenNotificationChannel** creates a notification channel for receiving notifications from MPNS. Event handlers are attached to the channel object for dealing with notification events, and then the channel is opened. In this sample, the **HttpNotificationReceived** event (for receiving raw notifications) is implemented. Raw notifications can be received only when the phone app is running. The handler for the **ShellToastNotificationReceived** event (for receiving toast notifications) is also implemented here to demonstrate its use. Tile notifications can be received only when the subscribing phone app is not running, so there's no need to implement an event handler in the app for receiving tile notifications.
  
    
    
The **SubscribeToService** method executes the **RegisterPushNotificationSubscriber** method of the **SPWeb** object asynchronously (passing a value to identify the phone app and a URI value associated with the notification channel) to register with the SharePoint Server to receive push notifications. If the registration is successful, the Windows Phone shell is set to receive (and display) toast and tile notifications on the particular notification channel registered with the SharePoint Server when the phone app itself is not running.
  
    
    
The **UnSubscribe** method in this code calls the **UnregisterPushNotificationSubscriber** method of the SPWeb object. The development guidelines for Windows Phone apps recommend that users be allowed to choose whether to subscribe to push notifications or not. In a later procedure, you will add a mechanism for the user to register or unregister for notifications and that registration state is preserved between sessions of the app, making it unnecessary to ask to register every time the app is started. The **GetRegistrationStatus** method is made available so that the phone app can determine whether the user has registered (in an earlier session) to receive push notifications and the notification channel is subsequently opened. The **SaveDeviceAppIdToStorage** saves the identifier (represented as a GUID) for the app instance on a given Windows Phone to isolated storage.
  
    
    
The **ClearSubscriptionStore** method is included here as a demonstration of one way of clearing the subscribers from the subscription store on the SharePoint Server. Subscribers to push notifications are stored in a SharePoint list named "Push Notification Subscription Store". A button for calling this method of the **Notifications** class is added to the notifications settings page added to the app in a later procedure.
  
    
    
Note that the operations that involve accessing the SharePoint Server to configure settings or prepare for notifications (such as the **RegisterPushNotificationSubscriber** method) can take time to complete, depending on the conditions of the network and the accessibility of the server. These operations are therefore executed asynchronously (specifically, by using the **ExecuteQueryAsync** method of a **ClientContext** object) to allow the app to continue other processes and to keep the UI responsive to the user.
  
    
    
Next, add a page to the app with controls that allow a user to register for or unregister from push notifications from the server.
  
    
    

### To add a notification settings page to the app


1. In **Solution Explorer**, choose the node representing the project (named SPListAppForNotifications if you follow the naming convention in these procedures).
    
  
2. On the **Project** menu, click **Add New Item**. The **Add New Item** dialog box appears.
    
  
3. In the **Templates** pane, choose **Windows Phone Portrait Page** template. SpecifySettings.xaml as the name of the file for the page and click **Add**. The page is added to the project and opened for editing.
    
  
4. In the XAML view for the page, replace the content between the closing bracket of the XML tag that defines the **PhoneApplicationPage** element and the closing tag of the element ( `</phone:PhoneApplicationPage>`), with the following markup.
    
  ```
  
<Grid x:Name="LayoutRoot" Background="Transparent">
    <Grid.RowDefinitions>
        <RowDefinition Height="Auto"/>
        <RowDefinition Height="*"/>
    </Grid.RowDefinitions>

    <!--TitlePanel contains the name of the application and page title-->
    <StackPanel x:Name="TitlePanel" Grid.Row="0" Margin="12,17,0,28">
        <TextBlock x:Name="ApplicationTitle" Text="JOBS LIST" Style="{StaticResource PhoneTextNormalStyle}"/>
        <TextBlock x:Name="PageTitle" Text="Settings" Margin="9,-7,0,0" Style="{StaticResource PhoneTextTitle1Style}"/>
    </StackPanel>

    <!--ContentPanel - place additional content here-->
    <Grid x:Name="ContentPanel" Grid.Row="1" Margin="12,0,12,0">
        <StackPanel Margin="0,5,0,5">
            <StackPanel Orientation="Vertical" Margin="0,5,0,5">
                <TextBlock TextWrapping="Wrap" HorizontalAlignment="Center" Style="{StaticResource PhoneTextTitle2Style}">Notification Registration</TextBlock>
                <StackPanel Orientation="Vertical" Margin="0,5,0,5">
                    <TextBlock x:Name="txtRegistrationStatus" TextWrapping="Wrap" HorizontalAlignment="Center" Text="Registered: No" Style="{StaticResource PhoneTextAccentStyle}" Foreground="{StaticResource PhoneAccentBrush}" />
                    <Button x:Name="btnRegister" Content="Register" Height="71" Width="260" Click="OnRegisterButtonClick" />
                    <Button x:Name="btnUnregister" Content="Unregister" Height="71" Width="260" Click="OnUnregisterButtonClick" />
                </StackPanel>
            </StackPanel>
            <StackPanel Orientation="Vertical" Margin="0,5,0,5">
                <TextBlock TextWrapping="Wrap" HorizontalAlignment="Center" Style="{StaticResource PhoneTextTitle2Style}">Subscriber Management</TextBlock>
                <Button x:Name="btnDeleteSubscribers" Content="Delete Subscribers" Height="71" Width="260" Click="OnDeleteSubscribersButtonClick" />
            </StackPanel>
        </StackPanel>
    </Grid>
</Grid>
 
<!--Sample code showing usage of ApplicationBar-->
<phone:PhoneApplicationPage.ApplicationBar>
    <shell:ApplicationBar IsVisible="True" IsMenuEnabled="False">
        <shell:ApplicationBarIconButton x:Name="btnOK" IconUri="/Images/appbar.check.rest.png" Text="OK" Click="OnOKButtonClick" />
    </shell:ApplicationBar>
</phone:PhoneApplicationPage.ApplicationBar>
  ```

5. With the Settings.xaml file selected in **Solution Explorer**, press F7 to open its associated code-behind file, Settings.xaml.cs, for editing.
    
  
6. Replace the contents of the code-behind file with the following code.
    
  ```cs
  
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Windows;
using Microsoft.Phone.Controls;
using Microsoft.SharePoint.Client;

namespace SPListAppForNotifications
{
    public partial class Settings : PhoneApplicationPage
    {
        private const string RegisteredYesText = "Registered: Yes";
        private const string RegisteredNoText = "Registered: No";

        public Settings()
        {
            InitializeComponent();
        }

        protected override void OnNavigatedTo(System.Windows.Navigation.NavigationEventArgs e)
        {
            this.txtRegistrationStatus.Text = (Notifications.GetRegistrationStatus()) ? RegisteredYesText : RegisteredNoText;
        }

        private void OnOKButtonClick(object sender, EventArgs e)
        {
            NavigationService.Navigate(new Uri("/Views/List.xaml", UriKind.Relative));
        }

        private void OnRegisterButtonClick(object sender, RoutedEventArgs e)
        {
            Notifications.OpenNotificationChannel(true);
            // Navigating back to List form. User will be notified when process is complete.
            NavigationService.Navigate(new Uri("/Views/List.xaml", UriKind.Relative));
        }

        private void OnUnregisterButtonClick(object sender, RoutedEventArgs e)
        {
            Notifications.UnSubscribe();
            // Navigating back to List form. User will be notified when process is complete.
            NavigationService.Navigate(new Uri("/Views/List.xaml", UriKind.Relative));
        }

        private void OnDeleteSubscribersButtonClick(object sender, RoutedEventArgs e)
        {            
            Notifications.ClearSubscriptionStore();
            // Navigating back to List form. User will be notified when process is complete.
            NavigationService.Navigate(new Uri("/Views/List.xaml", UriKind.Relative));
        }
    }
}
  ```

7. Save the file.
    
  
8. To add to your project the image file (appbar.check.rest.png) for the **ApplicationBar** button (btnOK) declared in the Settings.xaml file, choose the Images folder node in **Solution Explorer**.
    
  
9. On the **Project** menu, click **Add Existing Item**. A **File Browser** window opens.
    
  
10. Navigate to the folder in which the standard Windows Phone icon images were installed by the Windows Phone SDK 7.1.
    
    > [!NOTE]
      > The images with a light foreground and a dark background are in %PROGRAMFILES%(x86)\\Microsoft SDKs\\Windows Phone\\v7.1\\Icons\\dark in a standard installation of the SDK. 
11. Choose the image file named appbar.check.rest.png and click **Add**. The image is added is added to the project under the Images node.
    
  
12. In **Solution Explorer**, choose the image file just added and in the **Properties Window** for the file, set the **Build Action** property for the image file to "Content" and set the **Copy to Output Directory** property to "Copy if newer".
    
  
Next, add a button to the List form (List.xaml) in the project and implement the **Click** event handler of the button to navigate to the Settings page created in the preceding steps. Also modify the **OnViewModelInitialization** event handler to open a notification channel (if the user has chosen to subscribe to push notifications).
  
    
    

### To modify the List form


1. In **Solution Explorer**, under the **Views** node, double-click the List.xaml file. The file is opened for editing.
    
  
2. Add markup to declare an additional button in the **ApplicationBar** element of the file, as in the following example.
    
  ```
  
...
    <phone:PhoneApplicationPage.ApplicationBar>
        <shell:ApplicationBar IsVisible="True" IsMenuEnabled="True">
            <shell:ApplicationBarIconButton x:Name="btnNew" 
                   IconUri="/Images/appbar.new.rest.png" Text="New" 
                    Click="OnNewButtonClick" />
            <shell:ApplicationBarIconButton x:Name="btnRefresh" 
                    IconUri="/Images/appbar.refresh.rest.png" Text="Refresh" IsEnabled="True" 
                    Click="OnRefreshButtonClick" />
            <shell:ApplicationBarIconButton x:Name="btnSettings" IconUri="/Images/appbar.feature.settings.rest.png" Text="Settings" IsEnabled="True" Click="OnSettingsButtonClick" />
        </shell:ApplicationBar>
    </phone:PhoneApplicationPage.ApplicationBar>
...
  ```

3. With the List.xaml file selected in **Solution Explorer**, press F7 to open its associated code-behind file, List.xaml.cs, for editing.
    
  
4. Within the code block (demarcated by opening and closing braces) that implements the **ListForm** partial class, add the following event handler to the file.
    
  ```cs
  
private void OnSettingsButtonClick(object sender, EventArgs e)
{
    NavigationService.Navigate(new Uri("/Settings.xaml", UriKind.Relative));
}
  ```

5. Locate the **OnViewModelInitialization** in the List.xaml.cs file and add a call to the **OpenNotificationChannel** method of the **Notifications** class created earlier. The modified implementation of the handler should resemble the following code.
    
  ```cs
  
private void OnViewModelInitialization(object sender, InitializationCompletedEventArgs e)
{
    this.Dispatcher.BeginInvoke(() =>
    {
        //If initialization has failed, show error message and return
        if (e.Error != null)
        {
            MessageBox.Show(e.Error.Message, e.Error.GetType().Name, MessageBoxButton.OK);
            return;
        }

        App.MainViewModel.LoadData(((PivotItem)Views.SelectedItem).Name);
        this.DataContext = (sender as ListViewModel);
    });

    // Open notification channel here if user has chosen to subscribe to notifications.
    if (Notifications.GetRegistrationStatus() == true)
        Notifications.OpenNotificationChannel(false);
}
  ```

6. Save the file.
    
  
7. To add to your project the image file (appbar.feature.settings.rest.png) for the **ApplicationBar** button (btnSettings) declared in the List.xaml file, choose the Images folder node in **Solution Explorer**.
    
  
8. On the **Project** menu, click **Add Existing Item**. A **File Browser** window opens.
    
  
9. Navigate to the folder in which the standard Windows Phone icon images were installed by the Windows Phone SDK 7.1. (See the note in the previous procedure for the location of the image files in a standard installation of the SDK.)
    
  
10. Choose the image file named appbar.feature.settings.rest.png and click **Add**. The image is added is added to the project under the Images node.
    
  
11. In **Solution Explorer**, choose the image file just added and in the **Properties Window** for the file, set the **Build Action** property for the image file to "Content" and set the **Copy to Output Directory** property to "Copy if newer".
    
  
Finally, add code to the **Application_Launching** event hander in the App.xaml.cs file to prepare the app for receiving push notifications, using properties and methods of the **Notifications** class created earlier.
  
    
    

### To add code to the App.xaml.cs file


1. In **Solution Explorer**, under the node representing the project, choose the App.xaml file.
    
  
2. Press F7 to open its associated code-behind file, App.xaml.cs, for editing.
    
  
3. Locate the **Application_Launching** event handler in the file. (For new projects created from the Windows Phone SharePoint List Application template, the signature for the method that handles the **Application_Launching** event is included but no logic is implemented in the method.)
    
  
4. Replace the **Application_Launching** event handler with the following code.
    
  ```cs
  
private void Application_Launching(object sender, LaunchingEventArgs e)
{
    // Get set up for notifications.
    Notifications.Context = App.DataProvider.Context;
    Notifications.SaveDeviceAppIdToStorage();
}
  ```

5. Save the file.
    
  
If you compile the project and deploy the app to the Windows Phone Emulator to run it, you can click the **Settings** button on the **Application Bar** to display a page from which you can register for push notifications (Figure 1).
  
    
    

**Figure 1. Settings page for notification registration**

  
    
    

  
    
    
![Settings page for notification registration](images/bee8bbc5-a93d-4695-927b-c10e0e63ddf9.gif)
  
    
    
If you have deployed and activated the PushNotificationsList solution (developed in the section [Create a server-side solution to send push notifications based on a list item event](#BKMK_ServerSideSolution) earlier in this topic) to your target SharePoint Server, and if registration from the phone for notifications is successful, you can add an item to the Jobs list on the server and you should receive both a toast notification (Figure 2) and, if the app is running on the phone when the item is added to the list, a raw notification (Figure 3).
  
    
    

**Figure 2. Toast notification (app running)**

  
    
    

  
    
    
![Toast notification (app running)](images/19b38f1b-8f98-4e91-8384-ba0e2d3da744.gif)
  
    
    
The message displayed when your app received a toast notification while it's running depends on how you've implemented the **ShellToastNotificationReceived** event handler in your app. In the **Notifications** class for this sample, the title and content of the message are simply displayed to the user.
  
    
    

**Figure 3. Raw notification**

  
    
    

  
    
    
![Raw notification](images/2e5dc58a-55d2-48c6-a162-974199ff5e5c.gif)
  
    
    
If the app is not running when the item is added to the list, the phone should still display a toast notification (Figure 4).
  
    
    

**Figure 4. Toast notification (app not running)**

  
    
    

  
    
    
![Toast notification (app not running)](images/c046bc5c-1e31-4ac6-9cba-05482cc36915.gif)
  
    
    
When you add an item to the Jobs SharePoint list, the code in the event receiver associated with the list attempts to send notifications using MPNS to subscribed phones, but, depending on network conditions and other factors, a given notification may not be received by a phone. You can look at the Push Notification Results list on the server, especially the values in the Status Code and Headers columns, to determine the status and results related to individual notifications.
  
    
    

## Additional resources
<a name="SP15Configurepushnot_addlresources"> </a>


-  [Build Windows Phone apps that access SharePoint 2013](build-windows-phone-apps-that-access-sharepoint.md)
    
  
-  [Push Notifications Overview for Windows Phone](http://msdn.microsoft.com/en-us/library/ff402558%28VS.92%29.aspx)
    
  
-  [How to: Set up an environment for developing mobile apps for SharePoint](how-to-set-up-an-environment-for-developing-mobile-apps-for-sharepoint.md)
    
  
-  [Windows Phone SDK 8.0](http://www.microsoft.com/en-us/download/details.aspx?id=35471)
    
  
-  [Microsoft SharePoint SDK for Windows Phone 8](http://www.microsoft.com/en-us/download/details.aspx?id=36818)
    
  
-  [Windows Phone SDK 7.1](http://www.microsoft.com/en-us/download/details.aspx?id=27570)
    
  
-  [Microsoft SharePoint SDK for Windows Phone 7.1](http://www.microsoft.com/en-us/download/details.aspx?id=30476)
    
  

