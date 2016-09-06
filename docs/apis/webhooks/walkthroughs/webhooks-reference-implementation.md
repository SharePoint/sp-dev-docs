# SharePoint webhooks sample reference implementation
##### Sample authored by: Bert Jansen (Microsoft), [SharePoint PnP Core Team](https://aka.ms/OfficeDevPnP)


## Summary
This SharePoint PnP sample reference implementation shows how you can make use of SharePoint webhooks in your applications. The webhooks are implemented in an enterprise ready manner using various Azure components such as Azure Web Jobs, Azure SQL Server and Azure Storage Queues for asynchronous web job notification handling.

This sample reference implementation specifically interacts with [SharePoint list webhooks](../lists/overview-sharepoint-list-webhooks). 

## Applies to
-  Office 365 Multi Tenant (MT) with [First Release enabled](https://support.office.com/en-us/article/Set-up-the-Standard-or-First-Release-options-in-Office-365-3b3adfa4-1777-4ff0-b606-fb8732101f47).

## Prerequisites
Microsoft Azure is used to host the various components needed to implement Azure webhooks.

## Video recording of this sample
You can also follow the needed steps from tutorial recording available from the [SharePoint PnP YouTube Channel](https://www.youtube.com/watch?v=j3hWCAI9R20).

<a href="https://www.youtube.com/watch?v=j3hWCAI9R20">
<img src="../../../../images/youtube-introducing-sharepoint-webhooks.png" alt="PnP webcast - Introducing SharePoint webhooks" />
</a>

## Source code for this sample
Source code and other materials for this sample reference implementation are available in the [SharePoint developer samples GitHub repository](https://github.com/SharePoint/sp-dev-samples/tree/master/Samples/WebHooks). 

## Deploying this sample reference implementation
This sample application will show you how to manage webhooks, specifically managing webhooks for a SharePoint list. It also contains a reference implementation of a webhook service endpoint which you can reuse in your webhook projects. 

![SharePoint webhook sample reference implementation application](../../../../images/webhook-sample-application.png)

The [deployment guide for this sample](https://github.com/SharePoint/sp-dev-samples/blob/master/Samples/WebHooks/Deployment%20guide.md) available in the GitHub repository highlights the deployment steps in order to deploy this SharePoint webhooks sample reference implementation. 

## Introduction to webhooks
The key functionality of webhooks is notifying your applications from changes in SharePoint they're interested in. There's no need for your application to regularly poll for changes anymore as with webhooks your application will be notified (**push** model) whenever there's a change. Webhooks are not Microsoft specific, it rather is a universal web standard that's also being adopted by other vendors (e.g. WordPress, GitHub, MailChimp,...). 

### Adding a webhook to your SharePoint list
This reference implementation interacts with a SharePoint list. To add a webhook to a SharePoint list, your application first needs to create a webhook subscription by doing a [`POST /_api/web/lists('list-id')/subscriptions`](../lists/create-subscription) while specifying a payload that identifies the list which we're adding the webhook for, the location of our webhook service and the expiration date of the webhook. 

Once you've requested SharePoint to add your webhook SharePoint will validate that your webhook service end point does exist. It will do this by sending a validation string to your service endpoint. SharePoint will expect that the endpoint returns the received validation string within 5 seconds. If this fails then the webhook creation is canceled. In you've deployed your service then this will work and SharePoint return a HTTP 201 message on the POST request you issued in step number 1. The payload of the returning message contains the ID of the webhook subscription. This is the ID of the subscription that was created.

![Adding a webhook](../../../../images/webhook-sample-add-process.png)

Looking at the reference implementation, you'll see that all webhook CRUD operations are consolidated in the [`WebHookManager`](https://github.com/SharePoint/sp-dev-samples/blob/master/Samples/WebHooks/SharePoint.WebHooks.Common/WebHookManager.cs) class of the SharePoint.WebHooks.Common project. Adding a webhook is done using the `AddListWebHookAsync` method:

```cs
/// <summary>
/// This method adds a webhook to a SharePoint list. Note that you need your webhook endpoint being passed into this method to be up and running and reachable from the internet
/// </summary>
/// <param name="siteUrl">Url of the site holding the list</param>
/// <param name="listId">Id of the list</param>
/// <param name="webHookEndPoint">Url of the webhook service endpoint (the one that will be called during an event)</param>
/// <param name="accessToken">Access token to authenticate against SharePoint</param>
/// <param name="validityInMonths">Optional webhook validity in months, defaults to 3 months, max is 6 months</param>
/// <returns>subscription ID of the new webhook</returns>
public async Task<SubscriptionModel> AddListWebHookAsync(string siteUrl, string listId, string webHookEndPoint, string accessToken, int validityInMonths = 3)
{
    // webhook add code...
}
```

When we make a call to SharePoint we need to provide authentication information and in this case we're using `Bearer` authentication header with an `access token`. To obtain the access token we intercept the token via a `ExecutingWebRequest` event handler:

```cs
ClientContext cc = null;

// Create SharePoint ClientContext object...

// Add ExecutingWebRequest event handler
cc.ExecutingWebRequest += Cc_ExecutingWebRequest;

// Capture the OAuth access token since we want to reuse that one in our REST requests
private void Cc_ExecutingWebRequest(object sender, WebRequestEventArgs e)
{
    this.accessToken = e.WebRequestExecutor.RequestHeaders.Get("Authorization").Replace("Bearer ", "");
}
```

### SharePoint calls out to your webhook service
When SharePoint detects a change in a list for which you've subscribed a webhook, you're service endpoint will be called by SharePoint. When you look at the payload that you'll get from SharePoint the following properties are important:

- **subscriptionId**: this is the ID of the webhook subscription. If you for example want to prolong the webhook expiration you need this ID.
- **resource**: this is the ID of the list for which the change happened.
- **siteUrl**: this is the server relative url of the site holding the resource for which the change happened.

> **Note**: SharePoint is only providing you that a change happened, not what actually was changed. Since you get information about the web and list that were changed it means that you can perfectly use the same service endpoint to handle webhook events from multiple sites and lists.

When your service is called it's important that you reply with a HTTP 200 message within less than 5 seconds. Later on in this article you'll learn more about the why but essentially this comes down to the fact that you need to **asynchronously** handle the notifications. In this sample we'll do this by using Azure Web Jobs and Azure Storage Queues.

![SharePoint calls your webhook endpoint](../../../../images/webhook-sample-call-webhook.png)

### Grab the changes your service needs to act upon
In the previous step your service endpoint was called but SharePoint only provided information about where the change happened, not what was actually changed. To understand what was changed you'll need to use the SharePoint `GetChanges()` API as shown in below picture.

![Async GetChanges](../../../../images/webhook-sample-async-getchanges.png)

You can learn more about the `GetChanges()` implementation in class [`ChangeManager`](https://github.com/SharePoint/sp-dev-samples/blob/master/Samples/WebHooks/SharePoint.WebHooks.Common/ChangeManager.cs), method `ProcessNotification` of the SharePoint.WebHooks.Common project. 

To avoid getting the same change over and over again it's important that you tell SharePoint from which point you want the changes. This is done by passing a changeToken...which also implies that your service endpoint needs to persist the last used changeToken so that it can be used during the next time the service endpoint is called.

Some key things to note here is that:

- SharePoint does not call your service in real-time: when a change happens on a list that has a webhook SharePoint will queue a webhook call out. Once each minute this queue will be read and the needed service endpoints are called. This batching of requests is important as it prevents SharePoint from calling your endpoint 1000 times when you for example bulk upload 1000 records in one shot. So your endpoint is only called once but when you do the `GetChanges()` call you'll get 1000 change events that you need to process.
- To guarantee an immediate response, regardless of the number of changes there, it's important that the 'workload' of your service endpoint is executed asynchronously. In this sample we leveraged the power of Azure: the service will serialize the incoming payload and store it an Azure Storage queue while there's an Azure web job that running continuously and checks for messages in the queue. When there are messages in the queue the web job will process them and as such will execute your logic in an asynchronous manner.

### Complete end-to-end flow
The diagram below describes the complete end-to-end webhook flow:

1. Your application creates a webhook subscription. When it does it grabs the current changeToken from the list it created the webhook for.
2. Your application persists the changeToken in a persistent storage, such as SQL Azure in this sample.
3. A change in SharePoint happens and SharePoint calls your service endpoint.
4. Your service endpoint serializes the notification request and stores it in a storage queue.
5. Your web job sees the message in the queue and kicks of your message processing logic.
6. Your message processing logic grabs the last used change token from the persistent storage.
7. Your message processing logic uses the `GetChanges()`API to learn what changed.
8. The returned changes are processed and now you do what you actually wanted to do.
9. Finally we persist the last retrieved `changeToken` so that next time we're not again getting the changes we've just processed.

![Webhooks sample reference implementation end-to-end flow](../../../../images/webhook-sample-end-to-end-flow.png)

## How to deal with webhook renewal
Webhook subscriptions are set to expire 6 months by default or at the specified date time from when they are created. Often you want the webhook to be available for longer time and as such you need to implement logic for doing that in your application. The patterns described below are good to start with. The first is lightweight and the second one is slightly more complex and requires an additional web job to be hosted:

* **Basic model:** When your service receives a notification it also gets information about the subscription lifetime. If the subscription is about to expire then inside your notification processing logic you simply extend the lifetime of the subscription. This model is implemented in this reference implementation and works fine for most cases but in case there's no change for 6 months on the list you've a webhook subscription for then the webhook subscription is never prolonged and will be dropped.
* **Reliable but more complex model:** you create a web job that on a weekly basis reads all the subscription ID's from the persistent storage and one by one extends the found subscriptions each time. Note that this web job is **not** part of this reference implementation.

The actual renewal of a SharePoint list webhook can be done using a [`PATCH /_api/web/lists('list-id')/subscriptions(‘subscriptionID’)`](../lists/update-subscription) REST call. In the reference implementation, updating of webhooks is implemented in the [`WebHookManager`](https://github.com/SharePoint/sp-dev-samples/blob/master/Samples/WebHooks/SharePoint.WebHooks.Common/WebHookManager.cs) class of the SharePoint.WebHooks.Common project. Updating a webhook is done using the `AddListWebHookAsync` method:

```csharp
/// <summary>
/// Updates the expiration datetime (and notification URL) of an existing SharePoint list webhook
/// </summary>
/// <param name="siteUrl">Url of the site holding the list</param>
/// <param name="listId">Id of the list</param>
/// <param name="subscriptionId">Id of the webhook subscription that we need to update</param>
/// <param name="webHookEndPoint">Url of the webhook service endpoint (the one that will be called during an event)</param>
/// <param name="expirationDateTime">New webhook expiration date</param>
/// <param name="accessToken">Access token to authenticate against SharePoint</param>
/// <returns>true if successful, exception in case something went wrong</returns>
public async Task<bool> UpdateListWebHookAsync(string siteUrl, string listId, string subscriptionId, string webHookEndPoint, DateTime expirationDateTime, string accessToken)
{
    // webhook update code...
}
```

## Debugging webhooks
Since SharePoint is calling out to your webhook service endpoint it means that your endpoint needs to be reachable by SharePoint which makes developing slightly more complex. Below are some strategies that you can use to make your life easier:

* During initial development you provide your own serialized payload to your service processing logic: this will make it possible to completely test your processing logic without deploying the service endpoint (and even without configuring a webhook).
* If you have access to Azure resources you can deploy your endpoint to Azure using a debug build and configure the Azure App Service for debugging: this will then allow you to set a remote breakpoint and do remote debugging using Visual Studio.
- If you do not want to deploy your service during development time you'll need to use a secure tunnel for your service. The idea is that you tell SharePoint that the notification service lives on a shared public endpoint. In the client, you install a component that connects to that shared public service and whenever a call is made to the public endpoint the client component is notified and it pushes the payload to your service running on localhost. [ngrok](https://ngrok.com/) is an implementation of such a secure tunnel tool that you can use to debug your webhook service locally.





