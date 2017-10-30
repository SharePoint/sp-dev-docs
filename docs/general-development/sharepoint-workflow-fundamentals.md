---
title: SharePoint workflow fundamentals
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 1e622296-f78b-4e3a-a1e7-8effa24111a8
---


# SharePoint workflow fundamentals
Provides a high-level overview of the workflow infrastructure in SharePoint, including a view of the platform architecture and the workflow interop bridge.
## Overview of workflows in SharePoint
<a name="bkm_overview"> </a>

SharePoint workflows are powered by Windows Workflow Foundation 4, which was substantially redesigned from earlier versions. Windows Workflow Foundation (WF), in turn, is built on the messaging functionality that is provided by  [Windows Communication Foundation (WCF)](http://msdn.microsoft.com/en-us/library/vstudio/ms735119%28v=vs.90%29.aspx).
  
    
    
Conceptually, workflows model structured business processes. Therefore, Windows Workflow Foundation 4 workflows are a structured collection of workflow "activities," each of which represents a functional component of a business process.
  
    
    
The workflow platform in SharePoint uses the Windows Workflow Foundation 4 activity model to represent a SharePoint-based business process. Additionally, SharePoint introduces a higher-level stage-gate model on which to create workflows.
  
    
    
It is important to note the relationship between workflow activities and SharePointactions. Workflow activities represent the underlying managed objects whose methods drive workflow behaviors. Workflow actions, on the other hand, are wrappers that encapsulate the underlying activities and present them in a user-friendly form in SharePoint Designer. Workflow authors interact with the workflow actions, whereas the workflow execution engine acts on the corresponding activities.
  
    
    
The activities, which are implementations of activity classes, are implemented declaratively by using XAML.
  
    
    
Workflow activities are invoked using loosely coupled web services that use messaging APIs to communicate with SharePoint. These APIs are built on the messaging functionality that is provided by  [Windows Communication Foundation (WCF)](http://msdn.microsoft.com/en-us/library/vstudio/ms735119%28v=vs.90%29.aspx).
  
    
    
The messaging framework is very flexible and supports virtually any messaging pattern that you need. Note that on a SharePoint farm, Windows Workflow Foundation and WCF are hosted in Workflow Manager Client 1.0.
  
    
    
Workflow Manager Client 1.0, SharePoint, and SharePoint Designer 2013 each provide significant parts of the new infrastructure:
  
    
    

- **Workflow Manager Client 1.0** provides the management of workflow definitions. It also hosts the execution processes for workflow instances.
    
  
- **SharePoint** provides the framework for SharePoint workflows, which model SharePoint-based business processes that involve SharePoint documents, lists, users, and tasks. Additionally, SharePoint workflows, associations, activities, and other workflow metadata are stored and managed in SharePoint.
    
  
- **SharePoint Designer 2013** is the primary business-user tool for creating workflow definitions and publishing them, as it was in previous versions. It can also be used to package a workflow definition with or without associated SharePoint components.
    
  

## Platform architecture
<a name="bkm_Architecture"> </a>

Figure 1 depicts a high-level view of the SharePoint workflow framework. Notice, first, how the new workflow infrastructure introduces Workflow Manager Client 1.0 as the new workflow execution host. Whereas in previous versions workflow execution was hosted in SharePoint itself, this has changed in SharePoint. Workflow Manager Client 1.0 is external to SharePoint and communicates using common protocols over the Microsoft Azure service bus, mediated by OAuth. Otherwise, SharePoint includes the feature that you would expect to see: content items, events, apps, and so on. But notice that there is also an implementation of the SharePoint 2010 workflow host (that is, the Windows Workflow Foundation 3 engine) for backward compatibility. You can read more about this in  [Use workflow interop for SharePoint](use-workflow-interop-for-sharepoint.md).
  
    
    

**Figure 1. High-level architecture of the workflow infrastructure**

  
    
    

  
    
    
![High-level workflow architecture](../images/wfArchitecture1.png)
  
    
    
Workflow Manager Client 1.0 is represented in SharePoint in the form of the Workflow Manager Client 1.0 Service Application Proxy. This component allows SharePoint to communicate and interact with the Workflow Manager Client 1.0 server. Server-to-server authentication is provided using OAuth.
  
    
    
SharePoint events for which a workflow is listening, like **itemCreated**, **itemUpdated**, and so on, are routed to Workflow Manager Client 1.0 using the Microsoft Azure service bus. For the return trip, the platform uses the SharePoint Representational State Transfer (REST) API to call back into SharePoint.
  
    
    
There are also additions to the SharePoint workflow object model, called collectively the Workflow Services Manager, which allow you to manage and control your workflows and their execution. The primary zones of interaction for the services manager are deployment, messaging, instance control, and (for backward compatibility) interoperability with SharePoint 2010 workflows.
  
    
    
Finally, there is the workflow authoring component. SharePoint Designer can now create and deploy both SharePoint 2010 and SharePoint workflows. Visual Studio 2012 not only provides a designer surface for creating declarative workflows, but it can also create SharePoint Add-ins and solutions that fully integrate Workflow Manager Client 1.0 functionality.
  
    
    

## Workflow subscriptions and associations
<a name="bkm_Subscriptions"> </a>

Because the most significant change to SharePoint workflows is the moving of workflow processing onto external workflow hosts like Microsoft Azure, it was essential for SharePoint messages and events to connect to the workflow infrastructure in Microsoft Azure. In addition, it was necessary for Microsoft Azure to connect the infrastructure to customer data. Workflow associations (which are built on the WF concept of subscriptions) are the SharePoint infrastructure pieces that support these requirements.
  
    
    

### Microsoft Azure publication/subscribe service

Before you can discuss workflow associations and subscriptions, you must look at the Microsoft Azure publication/subscribe service, which is sometimes referred to as pub/sub, or simply PubSub. PubSub is an asynchronous messaging framework. Message senders (publishers) do not send messages directly to message receivers (subscribers). Instead, messages are rendered by publishers as classes that have no knowledge of the message subscribers. Subscribers, then, consume published messages by identifying messages of interest, regardless of the publisher, based on subscriptions that they have created.
  
    
    
This decoupling of message creation from message consumption allows for scalability and flexibility. It enables multicast messaging on the publisher side, and for promiscuous message consumption on the subscriber side.
  
    
    

> **Note:**
> The PubSub feature is a part of the Microsoft Azure Service Bus, which provides connectivity options for WCF and other service endpoints. These include REST endpoints, which can be located behind network address translation (NAT) boundaries, or bound to frequently changing, dynamically assigned IP addresses, or both. For more information about the Azure Service Bus, see  [Service Bus](http://msdn.microsoft.com/en-us/library/ee732537.aspx). 
  
    
    


### Workflow associations and association scope

Workflow associations bind workflow definitions to specific SharePoint scope, with specific default values. The associations themselves represent a set of subscription rules that are stored in the Azure publication/subscription service that process incoming messages to ensure that they are consumed by appropriate (that is, subscribed) workflow instances.
  
    
    
By default, the messaging infrastructure supports workflows at the following scopes:
  
    
    

-  [SPList](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPList.aspx) (for list workflows)
    
  
-  [SPWeb](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPWeb.aspx) (for site workflows)
    
  
Unlike previous versions, SharePoint does not support workflows that are scoped to a content type ( [SPContentType](https://msdn.microsoft.com/library/Microsoft.SharePoint.SPContentType.aspx) ). However, the messaging infrastructure is extensible, so it can support any arbitrary scope. As a developer, you can set the [EventSourceId](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.WorkflowSubscription.EventSourceId.aspx) property on a given [WorkflowSubscription](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.WorkflowSubscription.aspx) instance to any **guid**. You can then use that **EventSourceId** value to call **PublishEvent(Guid, String, IDictionary<String, Object>)**, which triggers a new workflow instance of the specified **WorkflowSubscription**.
  
    
    

### Workflow service in Microsoft Azure

Associations for SharePoint workflows are represented by their workflow service within Microsoft Azure. When an application has to acquire a workflow association and its data, it must first query for all of the workflow services that are available at a given scope.
  
    
    
Similarly, workflow instances carry a pointer back to their respective workflow service. This is the means by which its correct association is determined.
  
    
    

### Starting workflows

Workflows can be started either manually or automatically.
  
    
    
 **Manual workflows**
  
    
    
Manual workflows are started when the PubSub service receives a **StartWorkflow** message. The message contains the following descriptive information:
  
    
    

- The association identifier (that is, the **WorkflowSubscription** instance).
    
  
- The ID of the originating item context. This is passed in with the  _ItemId_ parameter and the **EventSource** property on the **PublishEvent** method call.
    
  
- The event type for a manual start ( **WorkflowStart**).
    
  
- Additional workflow initiation parameters, either from the subscription or from the **Init** form, as appropriate. This would be **CorrelationId** for the subscription and **WFInstanceId** for the **Init** form.
    
  
 **Auto-start workflows**
  
    
    
Auto-start workflows are initiated by using an **Add** message to the PubSub service. The message contains the following descriptive information:
  
    
    

- The ID of the originating item context.
    
  
- The event itself is a normal SharePoint **Add** event.
    
  
- The workflow initiation parameters.
    
  

> **Note:**
> If a workflow automatically starts on a repeatable event (for example, the **OnItemChanged** event), it cannot start another workflow of a given association until the existing running instance of the association's workflow has completed running.
  
    
    


### Workflow subscriptions

The natural complement to associations are subscriptions, which allow the workflow to interact with associations. The workflow must create subscriptions on the Azure Service Bus using **create** methods and **delete** methods.
  
    
    
The signatures of the methods that create the subscription and instantiate the workflow specify the parameters???both optional and required. The list of parameters is determined by the workflow author, so they may differ from one workflow definition to another. The list of subscription parameters is specified as metadata of the workflow definitions. The subscription parameters are provided when the subscription is created. The list of initialization parameters is specified in XAML as part of the workflow definition. The initialization parameters are provided when the workflow is instantiated.
  
    
    
Subscriptions are bound to a specific SharePoint object???either an **SPList** instance or an **SPWeb** instance. The subscription object type is passed in as a value of a required parameter when the subscription is created. The object type defines the subscription scope so that a subscription can only respond to events that occur on the object to which they are subscribed.
  
    
    

## SharePoint workflow interop
<a name="bkm_InteropBridge"> </a>

SharePoint workflow interop enables SharePoint 2010 workflows (which are built on Windows Workflow Foundation 3) to be called from SharePoint workflows, which are based on Windows Workflow Foundation 4. This allows you to execute 2010 workflows from within 2013 workflows.
  
    
    
This is important because you may have SharePoint 2010 that you may use to reuse in conjunction with your SharePoint workflows. Additionally, you may wish to use activities or features from SharePoint 2010, which are not yet implemented in SharePoint
  
    
    
For a full discussion of SharePoint workflow interop, see  [Use workflow interop for SharePoint](use-workflow-interop-for-sharepoint.md).
  
    
    

## Additional resources
<a name="bk_additional"> </a>


-  [Get started with workflows in SharePoint](get-started-with-workflows-in-sharepoint.md)
    
  
-  [Workflow actions and activities reference for SharePoint](workflow-actions-and-activities-reference-for-sharepoint.md)
    
  
-  [Develop SharePoint workflows using Visual Studio](develop-sharepoint-workflows-using-visual-studio.md)
    
  
-  [Workflow development in SharePoint Designer and Visio](workflow-development-in-sharepoint-designer-and-visio.md)
    
  
-  [Workflows in SharePoint](workflows-in-sharepoint.md)
    
  
-  [Use workflow interop for SharePoint](use-workflow-interop-for-sharepoint.md)
    
  

