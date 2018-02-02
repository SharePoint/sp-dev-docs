---
title: Overview of the GraphHttpClient class (preview)
description: Use Microsoft Graph to build powerful solutions that access data from Office 365 and other Microsoft services.
ms.date: 02/02/2018
ms.prod: sharepoint
---

# Overview of the GraphHttpClient class (preview)

> [!IMPORTANT]
> The **GraphHttpClient** is currently in preview and is subject to change. It is not currently supported for use in production environments.

You can use Microsoft Graph to build powerful solutions that access data from Office 365 and other Microsoft services. To connect SharePoint Framework (SPFx) solutions to Microsoft Graph, you have to register an Azure Active Directory (Azure AD) application and complete the authorization flow. To make this easier, you can use the SPFx **GraphHttpClient** class to call Microsoft Graph directly, without any additional setup.

## What is the GraphHttpClient class?

The **GraphHttpClient** class is included as part of the SharePoint Framework. It works in a similar way to the HttpClient that you can use to communicate with third-party APIs. The **GraphHttpClient** class automatically ensures that your request to Microsoft Graph has a valid bearer access token and the required headers. 

When you issue a GET or a POST request, **GraphHttpClient** verifies that it has a valid access token, and if it doesn't, it automatically retrieves one from an internal API and stores it for subsequent requests.

The following example shows a request to Microsoft Graph that uses the **GraphHttpClient** class.

```ts
// ...
import { GraphHttpClient, GraphHttpClientResponse } from '@microsoft/sp-http';

export default class MyApplicationCustomizer
  extends BaseApplicationCustomizer<IMyApplicationCustomizerProperties> {

  // ...

  @override
  public onRender(): void {
    this.context.graphHttpClient.get("v1.0/groups?$select=displayName", GraphHttpClient.configurations.v1)
      .then((response: GraphHttpClientResponse): Promise<any> => {
        return response.json();
      })
      .then((data: any): void => {
        // ...
      });
  }
}
```

To make a request to Microsoft Graph:

1. Import the **GraphHttpClient** and **GraphHttpClientResponse** modules from the **@microsoft/sp-http** package.

2. Use the instance of **GraphHttpClient** that's available on the `this.context.graphHttpClient` property to issue a GET or POST request to Microsoft Graph.

3. As parameters, specify the Microsoft Graph API that you want to call (start with the API version without a leading `/` - slash), followed by the **GraphHttpClient** configuration.

4. Optionally, you can specify additional request headers that will be merged with the default headers set by **GraphHttpClient** (`'Accept': 'application/json'`, `'Authorization': 'Bearer [token]'` and `'Content-Type': 'application/json; charset=utf-8'`).

## Considerations for using the **GraphHttpClient** class

The **GraphHttpClient** class provides a convenient way to communicate with Microsoft Graph because it abstracts the authorization flow and management of access tokens. Because **GraphHttpClient** is currently in developer preview, there are some considerations that you should take into account before using it.

### Use for Microsoft Graph access only

Use the **GraphHttpClient** class only to access Microsoft Graph. The URL specified in the request must begin with the version of the Microsoft Graph API (either **v1.0** or **beta**), followed by the API operation. Any other URL returns an error.

### Permissions

The GraphHttpClient uses the Office 365 SharePoint Online Azure AD application to retrieve a valid access token to Microsoft Graph on behalf of the current user. The retrieved access token contains two permissions:

- Read and write all groups (preview) (`Group.ReadWrite.All`)
- Read all usage reports (`Reports.Read.All`)

These are the only permissions that are available when you use **GraphHttpClient**. If you need other permissions for your solution, you can use [ADAL JS with implicit OAuth flow](web-parts/guidance/call-microsoft-graph-from-your-web-part.md) instead.

### Tokens are retrieved using an internal API

To acquire a valid access token, **GraphHttpClient** issues a web request to the `/_api/SP.OAuth.Token/Acquire` endpoint. This API is intended for internal use. You should not communicate with it directly in your solutions.

## See also

- [Use GraphHttpClient to call Microsoft Graph](call-microsoft-graph-using-graphhttpclient.md)
- [Application Customizer GraphClient from Modern Teamsite sample](https://github.com/SharePoint/sp-dev-fx-extensions/tree/master/samples/js-application-graph-client).
- [Microsoft Graph Dev Center](https://developer.microsoft.com/en-us/graph/)
- [SharePoint Framework Overview](sharepoint-framework-overview.md)
