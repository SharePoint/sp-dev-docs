---
title: Registering and using Remote Event Receivers without having a dependency on Azure ACS
description: Explains how Remote Event Receivers can be registered using an Entra application (Azure AD) and as such are not dependent on Azure ACS.
ms.date: 03/14/2024
ms.localizationpriority: high
ms.service: sharepoint
---

# Registering and using Remote Event Receivers without having a dependency on Azure ACS

The classical usage of Remote Event Receivers, which we'll name RERs in the remainder of this page, is strongly tied to Azure ACS. Key RER use cases are being part of a provider hosted SharePoint Add-Ins or being used outside of SharePoint Add-Ins by registering them using an Azure ACS principal as authentication means. With the announced [retirement of Azure ACS](https://aka.ms/retirement/acs/support) and the [retirement of SharePoint Add-Ins](https://aka.ms/retirement/addins/support), RERs depending on Azure ACS will stop working as they'll follow the outlined Azure ACS retirement path.

However, there's an option to use RERs via an Entra application, so without having a dependency on Azure ACS. In the coming chapters you'll learn how to configure the Entra app for registering the RERs and you'll learn more about the differences between a RER registered using Azure ACS versus one registered using an Entra app.

> [!Important]
> Although these RERs do not depend on Azure ACS they still will retire, the main difference is that they'll keep working until July 1, 2027 and that they'll also work for new tenants onboarding after November 1, 2024. RERs depending on Azure ACS will follow the Azure ACS retirement path, so they'll stop working on April 2, 2026 and for new tenants onboarding after November 1, 2024 they'll not work anymore. Check out [this blog post](https://techcommunity.microsoft.com/t5/microsoft-sharepoint-blog/remote-event-receivers-retirement-update-in-sharepoint-online/ba-p/4068938) to learn more.

## Step 1: Configure your Entra application for registering a RER

It's required for the Entra application that's used to register the RERs to be configured with the `sites.selected` permission role. Follow this [blog post](https://techcommunity.microsoft.com/t5/microsoft-sharepoint-blog/develop-applications-that-use-sites-selected-permissions-for-spo/ba-p/3790476) to learn more on how to configure your Entra app. In our case, since the registration of RERs requires SharePoint REST/CSOM APIs it's important to also add the SharePoint `sites.selected` role and to configure the application with a certificate as the `sites.selected` role only is there when application permissions are used. Calling the SharePoint REST/CSOM APIs using application permissions requires the use of a certificate.

## Step 2: Register a RER using your Entra application

Once the Entra application is ready use it to authenticate to SharePoint using application permissions followed by using the SharePoint REST/CSOM APIs to register the RERs you need. You can for example do a POST to `_api/Web/EventReceivers` or use the equivalent CSOM `EventReceivers` collection of a `Web` and add a new one. If you prefer to use PnP PowerShell then below snippet can be used:

```PowerShell
# Connect via the created Entra app using application permissions 
Connect-PnPOnline https://contoso.sharepoint.com/sites/testsite -ClientId 3b9ad858-dbbb-489b-b63d-1905426222f8 -Tenant contoso.onmicrosoft.com -CertificatePath ".\RERApp.pfx"

# Add a RER for synchronous firing on item add. This RER is calling a ngrok URL to proxy back to an Azure function running on localhost
Add-PnPEventReceiver -List "MyList" -Name "RER-HelloWorld-ItemAdding" -Url "https://0051-84-195-208-70.ngrok-free.app/api/Service1" -SequenceNumber 10000 -EventReceiverType ItemAdding -Synchronization Synchronous

# List all added RERs
Get-PnPEventReceiver -List "MyList"

# Delete a RER
Remove-PnPEventReceiver -List "MyList" -Identity "<replace by RER guid from previous command output"
```

## Step 3: Learn more about the difference between a RER registered using an Entra application with sites.selected versus a RER registered using Azure ACS

When a RER is registered using en Entra app with `sites.selected` it will fire for both synchronous and asynchronous events, but there is a key difference to be aware of: when your RER service is called you'll not receive a `ContextToken` anymore. Consequence is that your RER service cannot impersonate the user that triggered the RER to fire but it has to use application permissions to call back to SharePoint.

Below snippet shows the payload sent to your service, notice the "empty" `ContextToken` element and the "GetContextTokenError value for the `ErrorCode` element.

```xml
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
    <s:Body>
        <ProcessOneWayEvent xmlns="http://schemas.microsoft.com/sharepoint/remoteapp/">
            <properties xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
                <AppEventProperties i:nil="true"/>
                <ContextToken/>
                <CorrelationId>25c1f6a0-e0d9-7000-ce2b-c721e30ad4bd</CorrelationId>
                <CultureLCID>2067</CultureLCID>
                <EntityInstanceEventProperties i:nil="true"/>
                <ErrorCode>GetContextTokenError</ErrorCode>
                <ErrorMessage>The endpoint address 'https://0f68-84-195-208-70.ngrok-free.app/api/Service1' does not match the app's endpoint 'www.contoso.com'.</ErrorMessage>
                <EventType>ItemAdded</EventType>
                <ItemEventProperties>
                    <AfterProperties xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays">
                        <a:KeyValueOfstringanyType>
                            <a:Key>TimesInUTC</a:Key>
                            <a:Value i:type="b:string"
                                xmlns:b="http://www.w3.org/2001/XMLSchema">TRUE</a:Value>
                        </a:KeyValueOfstringanyType>
                        <a:KeyValueOfstringanyType>
                            <a:Key>ContentType</a:Key>
                            <a:Value i:type="b:string"
                                xmlns:b="http://www.w3.org/2001/XMLSchema">Item</a:Value>
                        </a:KeyValueOfstringanyType>
                        <a:KeyValueOfstringanyType>
                            <a:Key>Title</a:Key>
                            <a:Value i:type="b:string"
                                xmlns:b="http://www.w3.org/2001/XMLSchema">demo1</a:Value>
                        </a:KeyValueOfstringanyType>
                        <a:KeyValueOfstringanyType>
                            <a:Key>FileSystemObjectType</a:Key>
                            <a:Value i:type="b:string"
                                xmlns:b="http://www.w3.org/2001/XMLSchema">File</a:Value>
                        </a:KeyValueOfstringanyType>
                    </AfterProperties>
                    <AfterUrl i:nil="true"/>
                    <BeforeProperties xmlns:a="http://schemas.microsoft.com/2003/10/Serialization/Arrays"/>
                    <BeforeUrl/>
                    <CurrentUserId>6</CurrentUserId>
                    <ExternalNotificationMessage i:nil="true"/>
                    <IsBackgroundSave>false</IsBackgroundSave>
                    <ListId>1814779c-276b-4380-adaa-42794f7d08c3</ListId>
                    <ListItemId>2</ListItemId>
                    <ListTitle>RER</ListTitle>
                    <UserDisplayName>Joe Doe</UserDisplayName>
                    <UserLoginName>i:0#.f|membership|joe.doe@contoso.onmicrosoft.com</UserLoginName>
                    <Versionless>false</Versionless>
                    <WebUrl>https://contoso.sharepoint.com/sites/testsite</WebUrl>
                </ItemEventProperties>
                <ListEventProperties i:nil="true"/>
                <SecurityEventProperties i:nil="true"/>
                <UICultureLCID>1033</UICultureLCID>
                <WebEventProperties i:nil="true"/>
            </properties>
        </ProcessOneWayEvent>
    </s:Body>
</s:Envelope>
```

## Step 4: Code sample to help you understand how to use RERs

RERs can be implemented as modern .NET solutions using Azure Functions, below snippet shows a RER implementation that rejects an item add as part of a synchronous ItemAdding event.

```csharp
using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System.Net;

namespace AzureFunctionRER
{
    public static class Service1
    {

        private static string cancelResponse = "<s:Envelope xmlns:s=\"http://schemas.xmlsoap.org/soap/envelope/\"><s:Body><ProcessEventResponse xmlns=\"http://schemas.microsoft.com/sharepoint/remoteapp/\"><ProcessEventResult xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ChangedItemProperties xmlns:a=\"http://schemas.microsoft.com/2003/10/Serialization/Arrays\"/><ErrorMessage>You shall not pass!</ErrorMessage><RedirectUrl i:nil=\"true\"/><Status>CancelWithError</Status></ProcessEventResult></ProcessEventResponse></s:Body></s:Envelope>";

        [FunctionName("Service1")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = null)] HttpRequest req,
            ILogger log)
        {
            string requestBody = await new StreamReader(req.Body).ReadToEndAsync();

            // For cancelling a sync event
            return new ContentResult
            {
                Content = cancelResponse,
                ContentType = "text/xml",
                StatusCode = (int)HttpStatusCode.InternalServerError
            };

            // For accepting the sync event
            //string responseMessage = string.IsNullOrEmpty(name)
            //    ? "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response."
            //    : $"Hello, {name}. This HTTP triggered function executed successfully.";

            //return new OkObjectResult(responseMessage);
        }
    }
}
```
