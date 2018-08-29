---
title: Connect to API secured with Azure Active Directory (Azure AD)
description: A step-by-step process for connecting to an API secured with Azure AD.
ms.date: 02/02/2018
ms.prod: sharepoint
---


# Connect to API secured with Azure Active Directory

When building SharePoint Framework solutions, you might need to connect to your custom API to retrieve some data or to communicate with line of business applications. Securing custom APIs with Microsoft Azure Active Directory (Azure AD) offers you many benefits and can be done in a number of ways. After you have built the API, there are several ways in which you can access it. These ways vary in complexity and each have their specific considerations.

This article discusses the different approaches and describes the step-by-step process of building and connecting to an API secured with Azure AD.

> [!IMPORTANT]
> When connecting to Azure AD-secured APIs, we recommend that you use the **GraphHttpClient** or **AadHttpClient** classes. These are new capabilities that are currently in preview and planned to be generally released during spring 2018. For more information about recommended models, see [Use the MSGraphClient to connect to Microsoft Graph](../../use-msgraph.md).

## Secure an API with Azure AD

If you're using Office 365, securing custom APIs using Azure AD is an architectural option that you should definitely consider. First and foremost, it allows you to secure the access to the API using existing organizational credentials that are already managed through Office 365 and Azure AD. Users with an active account can seamlessly work with applications that leverage APIs secured with Azure AD. Azure AD administrators can centrally manage access to the API, the same way they manage access to all other applications registered with Azure AD.

As the API developer, using Azure AD to secure your API frees you from managing a proprietary set of user credentials and implementing a custom security layer for your API. Additionally, Azure AD supports the OAuth protocol, which allows you to connect to the API from a range of application types varying from mobile apps to client-side solutions.

When building custom APIs, there are two main ways in which you can secure your API with Azure AD. If you host the API in Microsoft Azure App Service, you can benefit from the App Service Authentication option. If you look for more hosting flexibility for your API, such as hosting it on your own infrastructure or in Docker containers, you need to secure it in code. In such cases, the implementation depends on your programming language and framework. 

In this article, when discussing this option, you will use C# and the [ASP.NET Web API](https://www.asp.net/web-api) as the framework.

### Secure the API using Azure App Service Authentication

When deploying custom APIs to Azure App Service, you can benefit from the App Service Authentication option to secure the API with Azure AD. The biggest benefit of using App Service Authentication is its simplicity: by following the configuration steps available in the [Azure portal](https://ms.portal.azure.com/), you can have the wizard set up the authentication configuration for you. If you choose the basic setup, the wizard creates a new Azure AD application in Azure AD associated with the current subscription. In the advanced configuration, you can choose which Azure AD application should be used to secure the access to the App Service hosting the API.

![App Service Authentication settings displayed in the Azure portal](../../../images/api-aad-azure-app-service-authentication.png)

After App Service Authentication has been configured, users trying to access your API are prompted to sign in with their organizational account that belongs to the same Azure AD as the Azure AD application used to secure the API. After signing in, you are able to access the information about the current user through the `HttpContext.Current.User` property. When using Azure App Service Authentication, there is no additional configuration required in your application.

Azure App Service Authentication is a feature available only in Azure App Service. While this capability significantly simplifies implementing authentication in your API, it ties it to running inside Azure App Service. If you want to host the API with another cloud provider or inside a Docker container, you need to implement the authentication layer first.

### Secure the API using ASP.NET authentication

If you want to have the maximum flexibility with regards to where your API is hosted and how it is deployed, you should consider implementing the support for Azure AD authentication in ASP.NET. Visual Studio simplifies the implementation process significantly, and after completing the authentication setup wizard, your API requires users to sign in by using their organizational account.

![Visual Studio authentication setup wizard](../../../images/api-aad-visual-studio-authentication-wizard.png)

During the configuration process, Visual Studio adds all the necessary references and settings to your ASP.NET Web API project, including registering a new Azure AD application to secure your API.

## Access an API secured with Azure AD from SharePoint Framework solutions

SharePoint Framework solutions are fully client-side and as such are incapable of securely storing secrets required to connect to secured APIs. To support secure communication with client-side solutions, Azure AD supports a number of mechanisms such as authentication cookies or the OAuth implicit flow.

### Access the API using ADAL JS

A commonly used approach for communicating with APIs secured with Azure AD from client-side solutions is using the [ADAL JS](https://github.com/AzureAD/azure-activedirectory-library-for-js) library. ADAL JS simplifies implementing authentication against Azure AD in client-side applications as well as retrieving access tokens for specific resources. For applications built using AngularJS, ADAL JS offers an HTTP request interceptor that automatically adds required access tokens to headers of outgoing web requests. By using this requestor, developers don't need to modify web requests to APIs secured with Azure AD and can focus on building the application instead.

#### Benefits of using ADAL JS to communicate with APIs secured with Azure AD

When using ADAL JS, client-side applications have full access to the identity information of the currently signed-in user. This is convenient for requirements such as displaying a user name or profile picture in the application. When building solutions hosted in SharePoint, developers can retrieve extended profile information by using the SharePoint API, but for standalone applications this isn't possible.

Besides facilitating authentication against Azure AD, ADAL JS is capable of retrieving access tokens to specific resources. With these access tokens, applications can securely access APIs secured with Azure AD such as [Microsoft Graph](./call-microsoft-graph-from-your-web-part.md) or other custom APIs. Before a client-side application can use ADAL JS, it has to be registered as an application in Azure AD. In the registration process, developers specify a number of parameters such as the URL where the application is hosted and the resources to which the application requires access, either by itself or on behalf of the currently signed-in user.

![Registering new Azure AD application in the Azure portal](../../../images/api-aad-create-new-aad-app.png)

The first time the application is used, it prompts the user to grant it the necessary permissions. This is often referred to as consent flow. After it's approved, the application can then request access tokens for the specific resources and communicate with them securely.

#### Considerations when using ADAL JS to communicate with APIs secured with Azure AD

ADAL JS has been designed to be used with single-page applications. As such, by default it doesn't work correctly when used with SharePoint Framework solutions. By [applying a patch](./call-microsoft-graph-from-your-web-part.md) however, it can be successfully used in SharePoint Framework projects.

When using ADAL JS and OAuth to access APIs secured with Azure AD, the authentication flow is facilitated by Azure. Any errors are handled by the Azure sign-in page. After the user has signed-in with her organizational account, the application tries to retrieve a valid access token. All errors that occur at this stage have to be explicitly handled by the developer of the application because retrieving access tokens is non-interactive and doesn't present any UI to the user.

Every client-side application that wants to use ADAL JS needs to be registered as an Azure AD application. A part of the registration information is the URL where the application is located. Because the application is fully client-side and is not capable of securely storing a secret, the URL is a part of the contract between the application and Azure AD to establish security. This requirement is problematic for SharePoint Framework solutions because developers cannot simply know upfront all URLs where a particular web part will be used. Additionally, at this moment, Azure AD supports specifying up to 10 reply URLs, which might not be sufficient in some scenarios.

Before a client-side application can retrieve an access token to a specific resource, it needs to authenticate the user to obtain the ID token which can then be exchanged for an access token. Even though SharePoint Framework solutions are hosted in SharePoint, where users are already signed in using their organizational accounts, the authentication information for the current user isn't available to SharePoint Framework solutions. Instead, each solution must explicitly request the user to sign in. This can be done either by redirecting the user to the Azure sign-in page or by showing a pop-up window with the sign-in page. The latter is less intrusive in the case of a web part, which is one of the many elements on a page. If there are multiple SharePoint Framework client-side web parts on the page, each of them manages its state separately and requires the user to explicitly sign in to that particular web part.

Retrieving access tokens required to communicate with APIs secured with Azure AD is facilitated by hidden iframes that handle redirects to Azure AD endpoints. There is a known limitation in Microsoft Internet Explorer where obtaining access tokens in OAuth implicit flow fails, if the Azure AD sign-in endpoints and the SharePoint Online URL are not in the same security zone. If your organization is using Internet Explorer, ensure that the Azure AD endpoint and SharePoint Online URLs are configured in the same security zone. To maintain consistency, some organizations choose to push these settings to end-users using group policies.

APIs secured with Azure AD cannot be accessed anonymously. Instead they require a valid credential to be presented by the application calling them. When using the OAuth implicit flow with client-side applications, this credential is the bearer access token obtained using ADAL JS. If you have built your SharePoint Framework solution using AngularJS, ADAL JS automatically ensures that you have a valid access token for the particular resource, and adds it to all outgoing requests executed by using the AngularJS `$http` service. When using other JavaScript libraries, you have to obtain a valid access token, and if necessary refresh it, and attach it to the outgoing web requests yourself.

### Access the API by leveraging SharePoint Online authentication cookie

An alternative approach to using ADAL JS for connecting to APIs secured with Azure AD is leveraging the existing authentication cookie for seamless authentication to the custom API.

#### How it works

When you sign in with your organizational account to SharePoint Online, an authentication cookie is set in your browser. This cookie is sent with every request to SharePoint allowing to work sites and documents. To use this cookie, to connect to a custom API secured with Azure AD, you place a hidden iframe on the page pointing to a URL where the API is hosted and which is also secured with Azure AD. After the browser tries to load this URL, it gets redirected to the Azure AD sign-in page because anonymous access is not allowed. Because you are already signed in with your organization account to access SharePoint, the authentication completed automatically, redirecting you back to the original URL. At this point, your browser has the Azure AD authentication cookie for accessing the custom API secured with Azure AD.

After placing the iframe on the page, you attach an `onload` event listener to it, which is triggered after the authentication flow completed. In this event listener, you set a flag indicating that authentication completed and you can now securely call the custom API. All web requests to your custom APIs should be delayed until this flag is set or they will fail.

```typescript
// ...

export default class LatestOrdersWebPart extends BaseClientSideWebPart<ILatestOrdersWebPartProps> {
  private remotePartyLoaded: boolean = false;
  private orders: IOrder[];

  public render(): void {
    this.domElement.innerHTML = `
    <div class="${styles.latestOrders}">
      <iframe src="https://contoso.azurewebsites.net/"
          style="display:none;"></iframe>
      <div class="ms-font-xxl">Recent orders</div>
      <div class="loading"></div>
      <table class="data" style="display:none;">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Region</th>
            <th>Rep</th>
            <th>Item</th>
            <th>Units</th>
            <th>Unit cost</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </div>`;

    this.context.statusRenderer.displayLoadingIndicator(
      this.domElement.querySelector(".loading"), "orders");

    this.domElement.querySelector("iframe").addEventListener("load", (): void => {
      this.remotePartyLoaded = true;
    });

    this.executeOrDelayUntilRemotePartyLoaded((): void => {
      // retrieve and render data
    });
  }

  private executeOrDelayUntilRemotePartyLoaded(func: Function): void {
    if (this.remotePartyLoaded) {
      func();
    } else {
      setTimeout((): void => { this.executeOrDelayUntilRemotePartyLoaded(func); }, 100);
    }
  }

  // ...
}
```

When executing AJAX requests in your web parts, you have to specify that the authentication cookie should be sent cross-domain. You can enable this by setting the **credentials** property of the web request to **include**. Without this, the request is blocked in the browser and you are not able to call the API.

```typescript
// ...

export default class LatestOrdersWebPart extends BaseClientSideWebPart<ILatestOrdersWebPartProps> {
    // ...

    private retrieveAndRenderData(): void {
        this.context.httpClient.get("https://contoso.azurewebsites.net/api/orders",
        HttpClient.configurations.v1, {
          credentials: "include"
        })
        .then((response: HttpClientResponse): Promise<IOrder[]> => {
          // ...
        });
    }

    // ...
}
```

To support this method, the custom API requires some specific configurations as well. First, it requires support for receiving credentials from cross-domain calls. This is done by setting the **Access-Control-Allow-Credentials** response header to **true**.

> [!IMPORTANT]
> When using **Access-Control-Allow-Credentials**, you are allowed to specify only one origin.

Next, it needs to specify what origin is allowed to call the API. This is configured in the **Access-Control-Allow-Origin** response header.

How these headers should be configured exactly depends on the implementation of your API. If you use an Azure Function to build the API using Node.js for example, you would set these headers on the response object:

```js
context.res = {
    body: "response",
    headers: {
        "Access-Control-Allow-Credentials" : "true",
        "Access-Control-Allow-Origin" : "https://contoso.sharepoint.com"
    }
};
```

When using ASP.NET Web API, you would install the **Microsoft.AspNet.WebApi.Cors** NuGet package, call the `config.EnableCors()` method, and use the **EnableCors** attribute to set the header values:

```cs
[EnableCors("origins": "*", "headers": "*", "methods": "*", SupportsCredentials = true)]
public string Get() {
    return "response";
}
```

#### Benefits of using the SharePoint Online authentication cookie for seamless authentication

The most important benefit for using the SharePoint Online authentication cookie to connect to custom APIs secured with Azure AD is the fact that in this approach you don't need to register an Azure AD application for every web part. This frees you from having to manage reply URLs of pages where each web part is used and doesn't have the limitation of maximum 10 reply URLs per Azure AD application.

The authentication flow is handled seamlessly, and there is no user interaction required to complete. In comparison, when using ADAL JS, each web part is based on a different Azure AD application and requires the user to explicitly sign in to it.

#### Considerations when using the SharePoint Online authentication cookie for seamless authentication

From the functional point of view, using both ADAL JS and the SharePoint Online authentication cookie allows you to connect to APIs secured with Azure AD. There are, however, a few important differences between the two approaches that you should be aware of.

When using ADAL JS, before the client-side application retrieves an access token, it retrieves the identity token for the current user. This token contains information about the current user retrieved from Azure AD such as the user name or password. When using the authentication cookie, there is no identity token. Because you're working with SharePoint, this isn't really a limitation, since you can retrieve the same information about the current user from SharePoint.

ADAL JS allows you to connect to any API secured with Azure AD. When using the authentication cookie, the API must explicitly support receiving credentials from cross-domain calls. When designing APIs, you should take this requirement into account to ensure that you are able to use these APIs in SharePoint Framework solutions.

With both ADAL JS and the SharePoint Online authentication cookie, you can access APIs secured with Azure AD. But not all APIs support use of both methods. For example, to access Microsoft Graph, you need to have a valid OAuth access token with specific Microsoft Graph permissions. You can obtain this token by using ADAL JS but not by using a SharePoint Online authentication cookie.

When using the SharePoint Online authentication cookie to access APIs secured with Azure AD, no additional authorization information is being sent along with the request. This means, that by default, every user with a valid organizational account in Azure AD associated with the API can access the API. When building the API, you must take care of authorization to ensure that all API operations are performed by users with sufficient privileges.

Custom APIs are hosted outside of SharePoint Online and can be accessed by using cross-domain web requests. By default, web browsers don't include credentials when performing cross-domain AJAX requests. To connect to these secured APIs, you have to enable sending credentials with cross-domains explicitly for each outgoing web request.

### General considerations

Both ADAL JS and the method that uses the SharePoint Online authentication cookie use iframes for communicating with Azure AD. The reason for that are the redirects that are a part of the OAuth flow, and which cannot be automatically followed by AJAX requests. Microsoft Internet Explorer uses security zones to apply security policies to websites depending on the associated zone. For the scripts to be able to access information from an iframe, the resource in the iframe and the page hosting the iframe must be located in the same security zone. To ensure correct configuration, organizations can use group policies to distribute the settings consistently to their users.

## See also

- [Call custom APIs secured with Azure Active Directory without ADAL JS (code sample)](https://github.com/SharePoint/sp-dev-fx-webparts/tree/master/samples/aad-api-spo-cookie)
