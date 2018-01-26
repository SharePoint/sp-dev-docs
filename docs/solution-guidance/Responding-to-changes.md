# Responding to changes

## Summary
Responding to changes is a very common requirement for SharePoint customizations, in particular in the fields of Enterprise Content Management (ECM) solutions. In this article you will learn about the various techniques available in SharePoint Online or SharePoint on-premises to respond to events and changes.

## High-level guideline/general rules
Before digging into the details of the various options that you have to handle changes, let's see some common high-level guidelines and general rules:
* Whenever you need to manage an event coming from SharePoint, try to apply an asynchronous pattern, where you collect the basic information about the happening, you give back control to SharePoint, and you use a background job to process the real business logic for the event. You can use an Azure Function, an Azure Web Job, or whatever else background job technique to process the event. At the same time you can use a queue, or a database table, or any other reliable persistence storage to store information about the event that will be processed. Upon receival of the event from SharePoint, you store the information in the persistence layer, and afterwards you raise the background job. 
* If you are processing a synchronous event, try to avoid as much as you can blocking SharePoint. Rather refer to the asynchronous pattern described in the previous bullet.
* Consider using an App-Only security model, whenever you need to do background processing of an event, so that you will not need to make the users' credentials flow into your event handling service/solution. Nevertheless, there are some activities which simply cannot be executed within an App-Only context. If that is the case, try to pass an OAuth Access Token to the background job, rather than a set of user's credentials in clear text. The fact that an Access Token expires, and has a limited and pre-defined set of permission scopes associated, will keep the overall solution more secure.

## Available options

### Webhooks

_**Applies to:** Office 365 | SharePoint Online_

The Webhooks are a modern option, available in SharePoint Online only at the time of this writing. They leverage a REST based endpoint, which is published by a custom application and which can be registered for any list or library in SharePoint. Whenever it happens something like a new item creation, an item update, or an item deletion the SharePoint infrastructure will callback the REST endpoint, providing a JSON message with some generic information about the just happened event. The webhook will have to retrive all the details about the happening using the *GetChanges* method of CSOM. The model supports post-event notifications, and does not provide notifications during the happening (i.e. supports the so called -ed events and not the so called -ing events). Because of the asynchronous architecture of webhooks, they can be used to keep track of events, but they cannot be used to cancel or block events while they are happening.
For further details about Webhooks you can read the following articles, inspect the following samples and solutions, or watch the following videos.

### Articles
* []()
* []()
* []()
* []()
* []()

### Samples
* []()
* []()
* []()
* []()
* []()

### Solutions
* []()
* []()
* []()
* []()
* []()

### Videos
* []()
* []()
* []()
* []()
* []()

### Remote Event Receivers

_**Applies to:** SharePoint 2013 | SharePoint 2016 | SharePoint Online_

The Remote Event Receivers are a capability introduced with the SharePoint Add-In model, and they target both SharePoint on-premises 2013/2016 and SharePoint Online. The idea is to have a SOAP endpoint, usually implemented using Windows Communication Foundation (WCF), which can be invoked by SharePoint upon the happening of events. The Remote Event Receivers provide both -ing events, which are notified while somethig is happening, and -ed events, which are notified after something already happened. As such, a Remote Event Receiver can even cancel an event that is happening. The family of events that can be tracked are related to lists, items, sites, permissions, and many others. Here follows a list of topics that you can inspect to dig into the Remote Event Receivers.

### Articles
* []()
* []()
* []()
* []()
* []()

### Samples
* []()
* []()
* []()
* []()
* []()

### Solutions
* []()
* []()
* []()
* []()
* []()

### Videos
* []()
* []()
* []()
* []()
* []()

### Event Receivers

_**Applies to:** SharePoint 2013 | SharePoint 2016_

The Event Receivers are a server-side event handling model, available in SharePoint on-premises 2013/2016 only. In fact, they are based on the Full Trust Code (FTC) development model, and require to use the server-side object model of SharePoint, which is not available in SharePoint Online. Here follows a list of topics that you can follow to understand how to create Event Receivers.

### Articles
* []()
* []()
* []()
* []()
* []()

### Samples
* []()
* []()
* []()
* []()
* []()

### Solutions
* []()
* []()
* []()
* []()
* []()

### Videos
* []()
* []()
* []()
* []()
* []()

### Workflows

_**Applies to:** SharePoint 2013 | SharePoint 2016 | SharePoint Online_

Workflows are yet another option that you have in order to react to happenings on the SharePoint side. There are many flavors of workflows that you can rely on.

For example, you can create a workflow based on the SharePoint 2010 workflow engine, which is the one based on Workflow Foundation 3.x (WF3.x). Such kind of workflows are still supported, just for backward compatibility, both on-premises and in SharePoint Online, as long as they are defined in SharePoint Designer and they don't require server-side code. Indeed, in SharePoint on-premises you can even use FTC developmnet to extend the WF3.x engine, but it is not a suggests path because it would be a road block for migrating to SharePoint Online.

Another option that you have are the workflows for SharePoint 2013/2016, which are developed using the Workflow Manager (WFM) service that is based on Workflow Foundation 4.x (WF4.x). They still target both SharePoint on-premises or SharePoint Online, as long as you defined markup-only declarative-only workflow solutions, avoiding to rely on server-side code, which again is available in on-premises, but would be a road block for the cloud.

One third and last option is using Microsoft Flow, which - at the time of this writing - is a cloud-only flow definition and management tool. It is really powerful whenever you need to process events with custom user's defined processes, where the key business users self-design their processes.

### Articles
* []()
* []()
* []()
* []()
* []()

### Samples
* []()
* []()
* []()
* []()
* []()

### Solutions
* []()
* []()
* []()
* []()
* []()

### Videos
* []()
* []()
* []()
* []()
* []()


> [!NOTE]
> Applies to
>
> - O365 MT
> - O365 D
> - on-prem
