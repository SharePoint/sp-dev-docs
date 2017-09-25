# Overview of the GraphHttpClient

Using the Microsoft Graph you can build powerful solutions that use data from the different services that are a part of Office 365. In the past, connecting SharePoint Framework solutions to the Microsoft Graph was challenging, as it required you to register an Azure Active Directory application and complete the authorization flow. With the SharePoint Framework GraphHttpClient you can directly call the Microsoft Graph, without any additional setup.

> **Important:** The GraphHttpClient is currently in developer preview and should not be used in production.

## What is GraphHttpClient

GraphHttpClient is a specialized HTTP client provided as a part of the SharePoint Framework. It works similarly to the HttpClient that you can use to communicate with third party APIs. On top of the HttpClient, the GraphHttpClient automatically ensures that your request to the Microsoft Graph has a valid bearer access token and required headers. Whenever you issue a GET or a POST request, the GraphHttpClient verifies that it has a valid access token, and if it doesn't, it automatically retrieves one from an internal API and stores it for subsequent requests.

A sample request to the Microsoft Graph using the GraphHttpClient looks as follows:

```ts
// ...
import { GraphHttpClient, GraphClientResponse } from '@microsoft/sp-http';

export default class MyApplicationCustomizer
  extends BaseApplicationCustomizer<IMyApplicationCustomizerProperties> {

  // ...

  @override
  public onRender(): void {
    this.context.graphHttpClient.get("v1.0/groups?$select=displayName", GraphHttpClient.configurations.v1)
      .then((response: GraphClientResponse): Promise<any> => {
        return response.json();
      })
      .then((data: any): void => {
        // ...
      });
  }
}
```

You start with importing the **GraphHttpClient** and **GraphClientResponse** modules from the **@microsoft/sp-http** package. Next, using the instance of the GraphHttpClient available on the `this.context.graphHttpClient` property, you issue a GET or a POST request to the Microsoft Graph. As the parameters, you specify the Microsoft Graph API that you want to call (starting with the API version without a leading `/` - slash), followed by the GraphHttpClient configuration. Optionally, you can specify additional request headers that will be merged with the default headers set by the GraphHttpClient (`'Accept': 'application/json'`, `'Authorization': 'Bearer [token]'` and `'Content-Type': 'application/json; charset=utf-8'`).

## GraphHttpClient considerations

Using the GraphHttpClient is a very convenient way of communicating with the Microsoft Graph as it abstracts away the authorization flow and management of access tokens. The GraphHttpClient is currently in developer preview and there are some considerations that you should take into account before using it.

### Use for Microsoft Graph access only

The GraphHttpClient is meant to be used only for accessing the Microsoft Graph. The URL specified in the request must begin with the version of the Microsoft Graph API (either **v1.0** or **beta**) followed by the API operation. Any other URL will be rejected with an error.

### Available permission scopes

The GraphHttpClient uses the **Office 365 SharePoint Online** Azure Active Directory application to retrieve a valid access token to the Microsoft Graph on behalf of the current user. The retrieved access token contains two permissions scopes: 

* **Read and write all groups (preview)** (`Group.ReadWrite.All`) 
* **Read all usage reports** (`Reports.Read.All`) 

At this moment these are the only two permissions available when using the GraphHttpClient. If you need other permission scopes in your solution, you have to use [ADAL JS with implicit OAuth flow](web-parts/guidance/call-microsoft-graph-from-your-web-part.md) instead.

### Tokens are retrieved using an internal API

To acquire a valid access token, the GraphHttpClient issues a web request to the `/_api/SP.OAuth.Token/Acquire` endpoint. This API is intended for internal use and you should not communicate with it directly in your solutions.

## More information

To see how the GraphHttpClient can be used in practice, see a sample solution on GitHub at [https://github.com/SharePoint/sp-dev-fx-extensions/tree/master/samples/js-application-graph-client](https://github.com/SharePoint/sp-dev-fx-extensions/tree/master/samples/js-application-graph-client).

To learn how to build a web part that can GET and POST REST calls to Microsoft Graph, see [Call the Microsoft Graph using GraphHttpClient](call-microsoft-graph-using-graphhttpclient.md)

For more information about the Microsoft Graph visit [https://developer.microsoft.com/en-us/graph/](https://developer.microsoft.com/en-us/graph/).