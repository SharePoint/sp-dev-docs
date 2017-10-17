# Modify SharePoint host web lists at creation time

Modify a SharePoint list created in the host web at list creation time.

_**Applies to:** Office 365 | SharePoint 2013 | SharePoint Add-ins | SharePoint Online_

When you create a new list in the host web, you can use a **ListAdded** remote event receiver to modify that list. For example, you can enable versioning, or add a content type to the list, or make any other changes implemented by the client object model (CSOM).

When the list is added to the host web, you need to programmatically attach the event receiver. The [Core.EventReceiversBasedModifications](https://github.com/SharePoint/PnP/tree/dev/Scenarios/Core.EventReceiversBasedModifications) sample shows you how to use a provider-hosted add-in to do this. When the add-in is installed, an **AppInstalled** event occurs, and you use this event to attach the **ListAdded** event.

## Before you begin

To get started, download the [Core.EventReceiversBasedModifications](https://github.com/SharePoint/PnP/tree/dev/Scenarios/Core.EventReceiversBasedModifications) sample add-in from the [Office 365 Developer patterns and practices](https://github.com/SharePoint/PnP/tree/dev) project on GitHub.

## Attach the ListAdded event

To implement the event handlers for the add-in, display the properties for the SharePoint project, and set both  **Handle Add-in Installed** and **Handle Add-in Uninstalling** to **True**.

The following code example shows how the  **AppInstalled** event receiver is modified to attach the **ListAdded** event receiver.

**Note:**  The code in this article is provided as-is, without warranty of any kind, either express or implied, including any implied warranties of fitness for a particular purpose, merchantability, or non-infringement.

```C#
bool rerExists = false;
cc.Load(cc.Web.EventReceivers);
cc.ExecuteQuery();

foreach (var rer in cc.Web.EventReceivers)
{
  if (rer.ReceiverName == RECEIVER_NAME)
  {
    rerExists = true;
  }
}

if (!rerExists)
{
  EventReceiverDefinitionCreationInformation receiver = new EventReceiverDefinitionCreationInformation();
  receiver.EventType = EventReceiverType.ListAdded;

  // Get WCF URL where this message was handled.
  OperationContext op = OperationContext.Current;
  Message msg = op.RequestContext.RequestMessage;
  receiver.ReceiverUrl = msg.Headers.To.ToString();
  receiver.ReceiverName = RECEIVER_NAME;
  receiver.Synchronization = EventReceiverSynchronization.Synchronous;
  cc.Web.EventReceivers.Add(receiver);
  cc.ExecuteQuery();
}
```

## Customize the added lists

When the  **ListAdded** event handler is firing, the following code runs.

```C#
private void HandleListAdded(SPRemoteEventProperties properties)
{
  using (ClientContext cc = TokenHelper.CreateRemoteEventReceiverClientContext(properties))
  {
    if (cc != null)
    {
      try
        {
          if (properties.ListEventProperties.TemplateId == (int)ListTemplateType.DocumentLibrary)
          {
          //set versioning 
   cc.Web.GetListByTitle(properties.ListEventProperties.ListTitle).UpdateListVersioning(true, true);
          }
        }
         catch (Exception ex)
         {
           System.Diagnostics.Trace.WriteLine(ex.Message);
         }
       }
    }
  }
}
```

## Uninstalling the event receiver

When the add-in is uninstalled, the event receiver should also be removed. To make this work during debugging, go to the  **Add-ins in testing** library and use the **remove** option on the add-in. This triggers the **AppUninstalling** event with the proper permissions to remove the created remote event handler. If you just close the browser or uninstall the add-in from **site contents**, either the event receiver never fires or the **AppUninstalling** event receiver runs with insufficient permissions to remove the **ListAdded** event receiver. This is because add-ins are deployed differently when they are side loaded, which is what Visual Studio does when you press F5.

**Note:**  We recommend that you test this sample in a clean developer site.

## Additional resources
<a name="bk_addresources"> </a>

- [SharePoint site provisioning solutions](sharepoint-site-provisioning-solutions.md)
    
- [Core.EventReceiversBasedModifications sample](https://github.com/SharePoint/PnP/tree/dev/Scenarios/Core.EventReceiversBasedModifications)
