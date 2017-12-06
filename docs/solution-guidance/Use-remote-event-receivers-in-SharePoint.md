---
title: Use remote event receivers in SharePoint
ms.date: 11/03/2017
---
# Use remote event receivers in SharePoint

Use remote event receivers to handle events in the SharePoint add-in model. Use AppInstalled and AppUninstalling events to set up or remove SharePoint objects and other event receivers your add-in needs.

_**Applies to:** add-ins for SharePoint | SharePoint 2013 | SharePoint Online_

>**Important**
>As of January 2017 SharePoint Online does support list webhooks which you can use instead of "-ed" remote event receivers. Checkout [Overview of SharePoint webhooks](https://dev.office.com/sharepoint/docs/apis/webhooks/overview-sharepoint-webhooks) to learn more about webhooks. Also note that several webhook samples are available from the [sp-dev-samples](https://github.com/SharePoint/sp-dev-samples/tree/master/Samples) GitHub repository.

The  [Core.EventReceivers](https://github.com/SharePoint/PnP/tree/master/Samples/Core.EventReceivers) sample shows how to use a provider-hosted add-in with a remote event receiver to handle the AppInstalled and AppUninstalling events. The AppInstalled and AppUninstalling events set up and remove SharePoint objects that the add-in uses when it runs. Additionally, the AppInstalled event handler adds the ItemAdded event handler to a list. Use this solution if you want to:

- Configure your add-in on first run using the AppInstalled event to set up various SharePoint objects or additional event receivers that your add-in works with.
    
- Replace event receivers implemented using fully trusted code solutions. In fully trusted code solutions, you can run event receivers on the SharePoint server. In the new SharePoint add-in model, because you cannot run the event receiver on the SharePoint server, you need to implement a remote event receiver on a web server.
    
- Receive notifications of changes occuring in SharePoint. For example, when a new item is added to a list, you want to perform a task.

- Complement your change log solution. Using the remote event receiver pattern with a change log pattern provides a more reliable architecture for handling all changes made to SharePoint content databases, site collections, sites, or lists. Remote event receivers run immediately, but because they run on a remote server, you might encounter a communication failure. The change log pattern ensures that all changes are available for processing, but the application processing the changes usually runs on a schedule (for example, a timer job). This means that changes are not processed immediately. If you use these two patterns together, ensure you use a mechanism to prevent processing the same change twice. For more information, see [Query SharePoint change log with ChangeQuery and ChangeToken](query-sharepoint-change-log-with-changequery-and-changeToken.md).

> [!NOTE] 
> SharePoint-hosted add-ins do not support remote event receivers. To use remote event receivers, you need to use a provider-hosted add-in. You should not use remote event receivers for synchronization scenarios, or for long running processes. For more information, see  [How to: Create an add-in event receiver](https://msdn.microsoft.com/library/office/jj220052.aspx).

## Before you begin
<a name="sectionSection0"> </a>

To get started, download the  [Core.EventReceivers](https://github.com/SharePoint/PnP/tree/master/Samples/Core.EventReceivers) sample add-in from the [Office 365 Developer patterns and practices](https://github.com/SharePoint/PnP/tree/dev) project on GitHub.

Before you run this add-in, do the following:

1. In the properties on the Core.EventReceivers project, verify that  **Handle App Installed** and **Handle App Uninstalling** is set to **True**. Setting  **Handle App Installed** and **Handle App Uninstalling** to **True** creates a WCF service that defines the event handler for the **AppInstalled** and **AppUninstalling** event. In Core.EventReceivers, open the shortcut menu (right-click) on AppManifest.xml, and choose **Properties**. The  **InstalledEventEndpoint** and **UninstallingEventEndpoint** point to the remote event receiver that handles the **AppInstalled** and **AppUninstalling** events.
    
2. Attaching a remote event receiver to an object in the host web usually requires  **Manage** permission for that object only. For example, when attaching an event receiver to an existing list, the add-in requires **Manage** permission on the **List** only. This code sample requires **Manage** permissions on the **Web** because it adds a list and activates a feature on the host web. To set manage permissions on the web:
    
	1. Double click Core.EventReceivers\AppManifest.xml.
    
	2. Choose  **Permissions**.
    
	3. Verify that  **Scope** is set to **Web**, and  **Permission** is set to **Manage**.
    
3. To run this code sample, you need an Azure subscription. To sign up for a trial, see  [Free one-month trial](http://azure.microsoft.com/en-us/pricing/free-trial/).
    
4. Create an Azure Service Bus Namespace with ACS Support.
    
	1. Install Azure PowerShell. For more information, see  [How to: Install Azure PowerShell](http://azure.microsoft.com/en-us/documentation/articles/powershell-install-configure/#Install).
    
	2. Start  **Azure PowerShell**.
	
	3. Enter  **Add-AzureAccount**.
	
	4. Enter your email address in the  **Sign in to Windows Azure** dialog, and then choose **Continue**.
	
	5. Enter your password, and then choose  **Sign in**.
	
	6. Create a new service bus namespace using the following PowerShell cmdlet.
	
		```powershell
		New-AzureSBNamespace NamespaceNameRegion -CreateACSNamespace $true -NamespaceType Messaging
		
		```
	
       Where:
	
       -  _NamespaceName_ is the name of your Azure Service Bus namespace.
	
       -  _Region_ is the region closest to you. For example, you may enter **"West US"**. You must include the region name in double quotes.
	
	7. Return to your Azure Management Portal. Choose  **SERVICE BUS**, and then choose the namespace name you entered.
	
	8. Choose  **Manage Connection Strings**, and then in  **ACS CONNECTION STRING**, choose the copy button.
	
	9. Return to Visual Studio.
	
	10. Right-click Core.EventReceivers >  **Properties** > **SharePoint**.
	
	11. Select  **Enable debugging via Microsoft Azure Service Bus**.
	
	12. In  **Microsoft Azure Service Bus connection string**, paste the ACS Connection String.
	
	13. Choose  **Save**.
    
5. Run the code sample, and perform the following additional steps:
    
	- Click  **Trust It** in the **Grant permissions to the app** window.
    
	- Close the  **Grant permissions to the app** window.
    
	- When installation of the add-in and WCF service is completed, your browser will open.
    
	- Sign in to your Office 365 site. The start page of the Core.EventReceivers add-in is displayed.

## Use the Core.EventReceivers add-in
<a name="sectionSection1"> </a>

To see a demo of the Core.EventReceivers code sample:

1. Run the sample, and on the start page, choose  **Back to Site**.
    
2. Choose  **Site Contents**.
    
3. Choose  **Remote Event Receiver Jobs**.
    
4. Choose  **new item**.
    
5. In  **Title**, enter  **Contoso**, and in  **Description** enter **Contoso test**.
    
6. Return to the list and refresh the page.
    
7. Verify that the description of the newly added item was updated to  **Contoso test Updated by ReR 192336**, where  **192336** is a timestamp.
    
In Services/AppEventReceiver.cs,  **AppEventReceiver** implements the **IRemoteEventService** interface. This code sample provides an implementation for the **ProcessEvent** method because it uses synchronous events. If you use asynchronous events, you need to provide an implementation for the **ProcessOneWayEvent** method.

The  **ProcessEvent** handles the following **SPRemoteEventType** remote events:

-  **AppInstalled** events when installing the add-in. When an **AppInstalled** event occurs, **ProcessEvent** calls **HandleAppInstalled**.
    
-  **AppUninstalling** events when uninstalling the add-in. When an **AppUninstalling** event occurs, **ProcessEvent** calls **HandleAppUninstalling**. The  **AppUninstalling** event only runs when a user completely removes the add-in either by deleting the add-in from the site recycle bin (for end users) or by removing the add-in from the **Apps in testing** list (for developers).
    
-  **ItemAdded** events when an item is added to a list. When an **ItemAdded** event occurs, **ProcessEvent** calls **HandleItemAdded**.

> [!NOTE] 
> In the Core.EventReceiver project properties, only  **Handle App Installed** and **Handle App Uninstalling** properties are available. This code sample shows how you can add the **ItemAdded** event handler to a list on the host web by using the **AppInstalled** event during add-in installation.

> [!NOTE] 
> The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

```C#
public SPRemoteEventResult ProcessEvent(SPRemoteEventProperties properties)
        {

            SPRemoteEventResult result = new SPRemoteEventResult();

            switch (properties.EventType)
            {
                case SPRemoteEventType.AppInstalled:
                    HandleAppInstalled(properties);
                    break;
                case SPRemoteEventType.AppUninstalling:
                    HandleAppUninstalling(properties);
                    break;
                case SPRemoteEventType.ItemAdded:
                    HandleItemAdded(properties);
                    break;
            }


            return result;
        }
```

**HandleAppInstalled** calls **RemoteEventReceiverManager.AssociateRemoteEventsToHostWeb** in RemoteEventReceiverManager.cs.

```C#
 private void HandleAppInstalled(SPRemoteEventProperties properties)
        {
            using (ClientContext clientContext =
                TokenHelper.CreateAppEventClientContext(properties, false))
            {
                if (clientContext != null)
                {
                    new RemoteEventReceiverManager().AssociateRemoteEventsToHostWeb(clientContext);
                }
            }
        }
```

**AssociateRemoteEventsToHostWeb** creates or enables various SharePoint objects that the Core.EventReceivers add-in uses. Your requirements might differ. **AssociateRemoteEventsToHostWeb** does the following:

- Enables the Push Notification feature by using  **Web.Features.Add**.
    
- Uses the  **clientContext** object to search for a list. If the list does not exist, **CreateJobsList** creates the list. If the list exists, **List.EventReceivers** is used to search for an existing event receiver whose name is **ItemAddedEvent**.
    
- If the  **ItemAddedEvent** event receiver does not exist:
    
	- Instantiates a new  **EventReceiverDefinitionCreationInformation** object to create the new remote event receiver. The **ItemAdded** event receiver type is added to **EventReceiverDefinitionCreationInformation.EventType**.
    
	- Sets the  **EventReceiverDefinitionCreationInformation.ReceiverURL** to the URL of the **AppInstalled** remote event receiver.
    
	- Adds a new event receiver to the list using  **List.EventReceivers.Add**.

```C#
public void AssociateRemoteEventsToHostWeb(ClientContext clientContext)
        {
            // Add Push Notification feature to host web.
            // Not required but it is included here to show you
            // how to activate features.
            clientContext.Web.Features.Add(
                     new Guid("41e1d4bf-b1a2-47f7-ab80-d5d6cbba3092"),
                     true, FeatureDefinitionScope.None);


            // Get the Title and EventReceivers lists.
            clientContext.Load(clientContext.Web.Lists,
                lists => lists.Include(
                    list => list.Title,
                    list => list.EventReceivers).Where
                        (list => list.Title == LIST_TITLE));

            clientContext.ExecuteQuery();

            List jobsList = clientContext.Web.Lists.FirstOrDefault();

            bool rerExists = false;
            if (null == jobsList)
            {
                // List does not exist, create it. 
                jobsList = CreateJobsList(clientContext);

            }
            else
            {
                foreach (var rer in jobsList.EventReceivers)
                {
                    if (rer.ReceiverName == RECEIVER_NAME)
                    {
                        rerExists = true;
                        System.Diagnostics.Trace.WriteLine("Found existing ItemAdded receiver at "
                            + rer.ReceiverUrl);
                    }
                }
            }

            if (!rerExists)
            {
                EventReceiverDefinitionCreationInformation receiver =
                    new EventReceiverDefinitionCreationInformation();
                receiver.EventType = EventReceiverType.ItemAdded;
                
                // Get WCF URL where this message was handled.
                OperationContext op = OperationContext.Current;
                Message msg = op.RequestContext.RequestMessage;
                receiver.ReceiverUrl = msg.Headers.To.ToString();

                receiver.ReceiverName = RECEIVER_NAME;
                receiver.Synchronization = EventReceiverSynchronization.Synchronous;

                // Add the new event receiver to a list in the host web.
                jobsList.EventReceivers.Add(receiver);
                clientContext.ExecuteQuery();

                System.Diagnostics.Trace.WriteLine("Added ItemAdded receiver at " + receiver.ReceiverUrl);
            }
        }
```

When an item is added to the  **Remote Event Receiver Jobs** list, **ProcessEvent** in AppEventReceiver.svc.cs handles the **ItemAdded** event, and then calls **HandleItemAdded**.  **HandleItemAdded** calls **RemoteEventReceiverManager.ItemAddedToListEventHandler**.  **ItemAddedToListEventHandler** fetches the list item that was added, and adds the string **Updated by ReR** to the list item's description.

```C#
 public void ItemAddedToListEventHandler(ClientContext clientContext, Guid listId, int listItemId)
        {
            try
            {
                List photos = clientContext.Web.Lists.GetById(listId);
                ListItem item = photos.GetItemById(listItemId);
                clientContext.Load(item);
                clientContext.ExecuteQuery();

                item["Description"] += "\nUpdated by RER " +
                    System.DateTime.Now.ToLongTimeString();
                item.Update();
                clientContext.ExecuteQuery();
            }
            catch (Exception oops)
            {
                System.Diagnostics.Trace.WriteLine(oops.Message);
            }

        }
```

## Additional resources
<a name="bk_addresources"> </a>

-  [Office 365 development patterns and practices solution guidance](Office-365-development-patterns-and-practices-solution-guidance.md)
    
-  [Core.AppEvents.HandlerDelegation ](https://github.com/SharePoint/PnP/tree/master/Samples/Core.AppEvents.HandlerDelegation)
    
