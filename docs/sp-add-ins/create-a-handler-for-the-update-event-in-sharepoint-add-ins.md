---
title: Create a handler for the update event in SharePoint Add-ins
description: Create and use a handler and apply rollback logic for the update event of a SharePoint Add-in.
ms.date: 11/02/2017
ms.prod: sharepoint
localization_priority: Normal
---

# Create a handler for the update event in SharePoint Add-ins

Before you begin, be thoroughly familiar with both [Handling add-in events](handle-events-in-sharepoint-add-ins.md#HandlingAppEvents) and [Update SharePoint Add-ins](update-sharepoint-add-ins.md) and the prerequisites and core concepts listed in them.

> [!NOTE]
> **Version numbering system:** For consistency, this topic assumes that the add-in version numbers are 1.0.0.0, 2.0.0.0, 3.0.0.0, and so on. However, the logic and guidance applies no matter what your numbering system is.

<a name="UpgradedEventEndpoint"> </a>
## Create an UpgradedEventEndpoint receiver

For custom update logic, you can create a SharePoint remote event receiver that handles the add-in updated event. You should be conservative in using this technique. Use it only for updating steps that can't be done any other way. Also, the guidance found in [Handling add-in events](handle-events-in-sharepoint-add-ins.md#HandlingAppEvents) applies for the add-in updated event as much as the add-in installed and add-in uninstalling events. This includes:

- Your handler has to complete and return either a cancel or a continue status to SharePoint in 30 seconds. If it does not, SharePoint calls the handler again up to three more times.

- If your handler returns a cancel status, SharePoint will retry up to three more times. 

- You usually need to include rollback and "already done" logic in your handler.

One scenario in which an **UpgradedEventEndpoint** handler is useful is when a computed field is added to a remote database. Suppose a City column is added, and its value is computed from an already existing Postal Code column. Your code in an **UpgradedEventEndpoint** handler could iterate through existing items in the database and fill in the value for the new City field based on the value of the Postal Code field and some external data source that maps postal codes onto cities. The change to the database schema itself is best done outside the **UpgradedEventEndpoint** handler by using the best practices of the database platform.

For more details about how to create a handler for the add-in event, see [Handle events in SharePoint Add-ins](handle-events-in-sharepoint-add-ins.md) and [Create an add-in event receiver in SharePoint Add-ins](create-an-add-in-event-receiver-in-sharepoint-add-ins.md). 

The following procedure assumes that you have added the add-in event receiver item to your SharePoint Add-in project in Visual Studio. 

### To handle the add-in updated event the first time

1. Open the AppEventReceiver.svc.cs file, and add a conditional structure to the **ProcessEvent** method that tests whether the event that invoked the handler is the updated event. Your updating code goes inside this structure. If your code needs to access SharePoint, you can use the SharePoint managed code client object model (CSOM) or Representational State Transfer (REST) interface. 

   Where the conditional structure is located in the method depends on how you have structured the other code in the method. Typically, it is a peer of similar conditional structures that test for the add-in installed and add-in uninstalling events. It may be within a conditional structure that tests certain properties or subproperties of the **SPRemoteEventProperties** object that is passed to **ProcessEvent** for **null** values or other invalid values. It may also be within a **try** block. 
   
   The following is an example of the structure. The _properties_ object is an **SPRemoteEventProperties** object.
    
    ```csharp
       if (properties.EventType == SPRemoteEventType.AppUpgraded)
     {
     }

    ```

2. To use CSOM in the handler, add (within the conditional block) a **using** block that gets a **ClientContext** object by calling the **TokenHelper.CreateAppEventClientContext** method. Specify **true** for the second parameter to access the add-in web. Specify **false** to access the host web. If you need to access both, you need two different client context objects.

3. If your handler needs to access non-SharePoint components, put that code outside any client context blocks. Your code should be structured similarly to the following:
    
    ```csharp
       if (properties.EventType == SPRemoteEventType.AppUpgraded)
     {
         using (ClientContext cc = TokenHelper.CreateAppEventClientContext(properties, true))
         {
             // CSOM code that accesses the add-in web
         }
         using (ClientContext cc = TokenHelper.CreateAppEventClientContext(properties, false))
         {
             // CSOM code that accesses the host web
         }
         // Other update code
     }

    ```

4. To use the REST interface, your code uses other methods in the **TokenHelper** class to get an access token, which is then included in the requests it makes to SharePoint. For more information, see [Complete basic operations using SharePoint REST endpoints](complete-basic-operations-using-sharepoint-rest-endpoints.md). Your code should be structured similarly to the following.
    
    ```csharp
       if (properties.EventType == SPRemoteEventType.AppUpgraded)
     {
         string contextTokenString = TokenHelper.GetContextTokenFromRequest(Request);
         if (contextTokenString != null)
         {
             contextToken = TokenHelper.ReadAndValidateContextToken(contextTokenString, 
                                                                                                                       Request.Url.Authority);
             accessToken = TokenHelper.GetAccessToken(contextToken, sharepointUrl.Authority)
                                        .AccessToken;

            // REST code that accesses SharePoint
         }  
         // Other update code
     }

    ```

5. To access SharePoint, your REST code also needs to know the URL of the host web or add-in web or both. These URLs are both subproperties of the **SPRemoteEventProperties** object that is passed to the **ProcessEvent** method. The following code shows how to get them.
    
    ```csharp
       Uri hostWebURL = properties.AppEventProperties.HostWebFullUrl;
       Uri appWebURL = properties.AppEventProperties.AppWebFullUrl;
    ```

When you update an add-in for the second (or third, and so on) time, you may need to ensure that some update logic does not run multiple times on the same add-in instance. The following procedure shows you how.

### To handle the add-in updated event on subsequent updates

1. Open the AppEventReceiver.svc.cs file, and find the code that implemented update actions in the first update (from 1.0.0.0. to 2.0.0.0). Let's call this the previous update code. (This code is generally located after the authorization code that gets client context or access tokens.) Now that you are updating again (from 2.0.0.0 to 3.0.0.0), there will typically be actions in the previous update code here that you don't want to run again on the same add-in instance, but you do want it to run on an add-in instance that was never updated to 2.0.0.0 (in which case, the instance is now being updated all the way from 1.0.0.0. to 3.0.0.0).

2. Wrap the previous update code in a conditional structure that tests for the previous version of the add-in instance and executes only if the code in the structure has not run before on this add-in instance. The previous version of the instance is stored in the **PreviousVersion** subproperty of the **SPRemoteEventProperties** object.

3. Add your new update logic (for the update from 2.0.0.0 to 3.0.0.0) under this structure. The following is an example.
    
    ```csharp
       Version ver2OOO = new Version("2.0.0.0");
     if (properties.AppEventProperties.PreviousVersion < ver2OOO)
     {
         // Code to update from 1.0.0.0 to 2.0.0.0 (previous update code) is here.
     }
     // Code to update from 2.0.0.0 to 3.0.0.0 is here.

    ```

4. For each subsequent update, repeat these steps. For the update from 3.0.0.0 to 4.0.0.0, your code should have the following structure.
    
    ```csharp
     Version ver2OOO = new Version("2.0.0.0");
     if (properties.AppEventProperties.PreviousVersion < ver2OOO)
     {
         // Code to update from 1.0.0.0 to 2.0.0.0 is here.
     }

     Version ver3OOO = new Version("3.0.0.0");
     if (properties.AppEventProperties.PreviousVersion < ver3OOO)
     {
         // Code to update from 2.0.0.0 to 3.0.0.0 (previous update code) is here.
     }
     // Code to update from 3.0.0.0 to 4.0.0.0 is here.

    ```

> [!IMPORTANT]
> If you add a component to an add-in in an **UpgradedEventEndpoint** handler, be sure to add the same code to an **InstalledEventEndpoint** handler because you want that component included in the add-in on a brand new installation as well. Also, you should add an [UninstallingEventEndpoint](http://msdn.microsoft.com/library/4194e44b-f2af-1db4-aad5-9b7b511b4348%28Office.15%29.aspx) (or revise it) for the add-in to remove the component. 

> For the most part, anything that was added or changed by the **InstalledEventEndpoint** should be reversed or deleted by the **UninstallingEventEndpoint**. One exception is that data that will remain useful after the add-in is removed from the second-stage recycle bin should not be deleted. (Websites, other than the add-in web, that are created by the add-in should be considered data.)

<a name="AddRollbackLogic"> </a>
## Add rollback logic to the handler

If an error occurs when an add-in is being updated, the SharePoint infrastructure stops the update process and rolls back the add-in instance and all its components to the previous version of the add-in instance. But the infrastructure has no way of knowing what your **UpgradedEventEndpoint** handler logic does, so it can't always undo it. An unhandled exception thrown while your **UpgradedEventEndpoint** handler is executing almost certainly indicates that the entire add-in update process should be rolled back, but it won't be because the infrastructure doesn't know how to undo some things that your **UpgradedEventEndpoint** code might have done. For this reason, the **UpgradedEventEndpoint** code must:

- Catch all exceptions.
    
- Branch to custom rollback code to undo what has been done to that point.
    
- Signal to the SharePoint infrastructure that the entire add-in update should be rolled back.
    
- Pass on an error message to the infrastructure.

Not everything your **UpgradedEventEndpoint** does needs to be explicitly reversed inside the handler. The add-in web is going to be rolled back by the infrastructure, so your code does not have to undo changes to the add-in web. But the **UpgradedEventEndpoint** handler usually does have to reverse the changes it has made to the host web or other components that are external to the SharePoint Add-in.

On the second (or third, and so on) update, your exception handing logic has to take account of the fact that the add-in instance that is being updated is not necessarily the immediately previous version. If it isn't, there may be two or more blocks of update code that need to be reversed. For this reason, you need conditional logic that is based on the number of the previous version. The following is an example of the rollback logic for an update to version 4.0.0.0.

```csharp
catch (Exception e)
{ 
    // Rollback of the 3.0.0.0 to 4.0.0.0 update logic goes here.

    Version ver3OOO = new Version("3.0.0.0");
    if (properties.AppEventProperties.PreviousVersion < ver3OOO)
    {
        // Rollback of the 2.0.0.0 to 3.0.0.0 update logic goes here.
    }

    Version ver2OOO = new Version("2.0.0.0");
    if (properties.AppEventProperties.PreviousVersion < ver2OOO)
    {
        // Rollback of the 1.0.0.0 to 2.0.0.0 update logic goes here.
    }
}
```

The last things your error handling should do is assign an error message and a cancel status to the **SPRemoteEventResult** object that the **ProcessEvent** method returns to the SharePoint update infrastructure. The following is an example. In this code, _result_ is an **SPRemoteEventResult** object that has been declared earlier in the **ProcessEvent** method.

```csharp
catch (Exception e)
{     
    result.ErrorMessage = "custom message " + e.Message;
    result.Status = SPRemoteEventServiceStatus.CancelWithError;

     // Rollback logic from the preceding code snippet  is here. 

}
```

> [!IMPORTANT]
> Assigning **SPRemoteEventServiceStatus.CancelWithError** (or **SPRemoteEventServiceStatus.CancelNoError**) to the **Status** property is crucial. This property is what signals the infrastructure to roll back the update. But SharePoint will retry your handler three times before it rolls back the update.

### Use the handler delegation strategy

The handler delegation strategy that is described in [Handling add-in events](handle-events-in-sharepoint-add-ins.md#HandlingAppEvents) can be used in an **UpdatedEventHandler** too. Not only is your rollback and "already done" logic bundled and run on the remote component, but your versioning logic is too. The limitations of the strategy apply here too; you usually can't use it to update more than one remote system.

## Next steps

Return to [Major steps in updating an add-in](update-sharepoint-add-ins.md#MajorAppUpgradeSteps), or go directly to one of the following articles to learn how to update the next major component of your SharePoint Add-in.

-  [Update add-in web components in SharePoint](update-add-in-web-components-in-sharepoint.md)
-  [Update host web components in SharePoint](update-host-web-components-in-sharepoint.md)
-  [Update remote components in SharePoint Add-ins](update-remote-components-in-sharepoint-add-ins.md)

## See also

-  [Update SharePoint Add-ins](update-sharepoint-add-ins.md)
-  [UpgradedEventEndpoint element (PropertiesDefinition complexType) (SharePoint Add-in Manifest)](http://msdn.microsoft.com/library/09a93d44-d295-47bb-f91c-d243178b0f53%28Office.15%29.aspx)
-  [Handle events in SharePoint Add-ins](handle-events-in-sharepoint-add-ins.md)
-  [Create an add-in event receiver in SharePoint Add-ins](create-an-add-in-event-receiver-in-sharepoint-add-ins.md)
    
 

