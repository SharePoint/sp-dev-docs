---
title: Call the Microsoft Graph API using OAuth from your web part
description: Add functionality such as email, documents, and a calendar to your web part by integrating with Microsoft Graph.
ms.date: 08/28/2018
ms.prod: sharepoint
localization_priority: Priority
---


# Call the Microsoft Graph API using OAuth from your web part

You can add a lot of great functionality such as email, documents, and a calendar to your web part by integrating with Microsoft Graph. To call APIs on Microsoft Graph, you need to use the Active Directory Authentication Library (ADAL) for JavaScript library and authenticate by using the OAuth flow.

> [!IMPORTANT]
> When connecting to Azure AD-secured APIs, we recommend that you use the **MSGraphClient** and **AadHttpClient** classes, which are now generally available. For more information about the recommended models, see [Connect to Azure AD-secured APIs in SharePoint Framework solutions](../../use-aadhttpclient.md) and [Use the MSGraphClient to connect to Microsoft Graph](../../use-msgraph.md).

To use ADAL JS and call Microsoft Graph APIs correctly and securely, consider your design and any potential code modifications that you need to make for your web part.

## Azure AD authorization flows

Office 365 uses Azure Active Directory (Azure AD) to secure its APIs, which are accessed through Microsoft Graph. Azure AD uses OAuth as the authorization protocol. When an application completes the OAuth authorization flow, it gets a temporary access token. The token provides access to specific resources on behalf of the user by using permissions granted to the application by that user.

There are different types of OAuth flows depending on the kind of application. Web applications use an OAuth flow where Azure AD redirects to the URL where the application is hosted. The redirect is an additional security measure to verify the authenticity of that application.

Client applications, such as Android and iOS apps, do not have a URL and cannot use a redirect. So they complete the OAuth flow without the redirect. Both web applications and client applications use a publicly known client ID and a privately held client secret known only to Azure AD and the application.

Client-side web applications are similar to web applications but are implemented using JavaScript and run in the context of a browser. These applications are incapable of using a client secret without revealing it to users. Therefore these applications use an authorization flow called OAuth implicit flow to access resources secured with Azure AD. In this flow, the contract between the application and Azure AD is established based on the publicly-known client ID and the URL where the application is hosted. This is the flow that SharePoint Framework client-side web parts must use in order to connect to resources secured with Azure AD.

To implement Azure AD-based authentication and authorization in your web part, you can use the [Active Directory Authentication Library (ADAL) for JavaScript](https://github.com/AzureAD/azure-activedirectory-library-for-js) provided by Microsoft.

## Client-side applications versus SharePoint Framework web parts

A typical client-side web application owns the whole page and is the only resource available at the application's URL. All elements of the page are determined during development, and users working with the application cannot dynamically add new elements. Even though a client-side web application might consist of several views, work with external data, and offer a certain degree of configuration, these aspects are considered by developers while building the application.

When working with SharePoint, users compose pages by adding and configuring web parts. A single web part is only a small part of the whole page. Developers building a web part cannot know up front if other web parts will be placed on the same page, and if so, which resources those web parts will use. Unlike SharePoint Add-ins, web parts are a part of the page. All web parts can access the page's DOM, and resources loaded by one web part are available to other web parts.

## Limitations when using ADAL JS with client-side web parts

The ADAL JS library significantly simplifies implementing the OAuth flow for Azure AD in client-side web applications. But it has a number of limitations when used with SharePoint Framework client-side web parts. These limitations are due to the fact that ADAL JS is designed to be used by client-side web applications that own the whole page and do not share the page with other applications.

### Shared storage

Depending on how you configured the ADAL JS library in your project, it stores its data either in the browser's local storage or in the session storage. Either way, the information stored by ADAL JS is accessible to any component on the same page. For example, if one web part retrieves an access token for Microsoft Graph, any other web part on the same page can reuse that token and call Microsoft Graph.

### ADAL JS as a singleton

ADAL JS is designed to work as a singleton service registered in the global scope of the page. When processing OAuth flow callbacks in IFrames, ADAL JS code uses the registered singleton reference from the main window to resolve the token flow. Because each web part is registered with a different Azure AD application, reusing the same instance of ADAL JS leads to undesirable results where every web part uses the same configuration as the one registered by the first web part loaded on the page.

### Resource-based storage

By default, the ADAL JS library stores information such as the current access token or its expiration time in a set of keys associated with the particular resource, for example Microsoft Graph or SharePoint. If there are multiple components on one page accessing the same resource with different permissions, the first retrieved token is served by ADAL JS to all components. If different components require access to the same resource, they might fail. To illustrate this limitation, consider the following example.

Imagine that there are two web parts on the page: one that lists upcoming meetings, and one that creates a new meeting. To get upcoming meetings, the upcoming meetings web part uses a Microsoft Graph access token with permissions to read users' calendars. The web part that creates new meetings, on the other hand, requires a Microsoft Graph access token with permissions to write to users' calendars.

If the upcoming meetings web part loads first, ADAL JS retrieves its token with only the read permission. The same token is then served by ADAL JS to the web part creating new meetings. As you can see, when the web part attempts to create a new meeting, the web part fails with an access denied error. Because of the resource-based storage, ADAL JS wouldn't retrieve a new token for Microsoft Graph until the previously retrieved token expired.

### Processing authorization callbacks

OAuth implicit flow is based on redirects between Azure AD and the application participating in the flow. When the authentication process starts, the application redirects you to the Azure AD sign-in page. After the authentication completes, Azure AD redirects you back to the application, and sends the identity token in the URL hash for the application to process. From the perspective of a web part placed on a SharePoint page, this behavior has two drawbacks.

Even though you are signed in to SharePoint, you need to separately authenticate with Azure AD in order for your web part to be able to access resources secured with Azure AD. The web part is a small part of the overall page, but to complete the authentication process, you need to leave the whole page, which is a poor user experience.

After the authentication completes, Azure AD redirects you back to your application. In the URL hash, it includes the identity token that your application needs to process. Unfortunately, because the identity token doesn't contain any information about its origin, if you had multiple web parts on one page, all of them would try to process the identity token from the URL.

## Use ADAL JS with client-side web parts

You can overcome the limitations in ADAL JS to implement OAuth successfully in your SharePoint Framework client-side web part.

> [!IMPORTANT]
> The following guidance is based on ADAL JS v1.0.12. When adding ADAL JS to your SharePoint Framework projects, ensure that you're installing ADAL JS v1.0.12, or the guidance mentioned in this article will not work as expected.

### Load ADAL JS in your web part

Web parts are built using TypeScript and distributed as AMD modules. Their modular architecture allows you to isolate the different resources used by the web part. ADAL JS is designed to register itself in the global scope, but you can load it in a web part by using the following code:

```typescript
import * as AuthenticationContext from 'adal-angular';
```

This statement imports the `AuthenticationContext` class that exposes the ADAL JS functionality for use in web parts. Despite the name of the module, the `AuthenticationContext` class works with every JavaScript library.

### Make ADAL JS suitable for use with SharePoint Framework web parts

The current ADAL JS functionality is unsuitable for use in web parts. Use the following patch to make ADAL JS work in your web part.

**WebPartAuthenticationContext.js**

```js
const AuthenticationContext = require('adal-angular');

AuthenticationContext.prototype._getItemSuper = AuthenticationContext.prototype._getItem;
AuthenticationContext.prototype._saveItemSuper = AuthenticationContext.prototype._saveItem;
AuthenticationContext.prototype.handleWindowCallbackSuper = AuthenticationContext.prototype.handleWindowCallback;
AuthenticationContext.prototype._renewTokenSuper = AuthenticationContext.prototype._renewToken;
AuthenticationContext.prototype.getRequestInfoSuper = AuthenticationContext.prototype.getRequestInfo;
AuthenticationContext.prototype._addAdalFrameSuper = AuthenticationContext.prototype._addAdalFrame;

AuthenticationContext.prototype._getItem = function (key) {
  if (this.config.webPartId) {
    key = this.config.webPartId + '_' + key;
  }

  return this._getItemSuper(key);
};

AuthenticationContext.prototype._saveItem = function (key, object) {
  if (this.config.webPartId) {
    key = this.config.webPartId + '_' + key;
  }

  return this._saveItemSuper(key, object);
};

AuthenticationContext.prototype.handleWindowCallback = function (hash) {
  if (hash == null) {
    hash = window.location.hash;
  }

  if (!this.isCallback(hash)) {
    return;
  }

  var requestInfo = this.getRequestInfo(hash);
  if (requestInfo.requestType === this.REQUEST_TYPE.LOGIN) {
    return this.handleWindowCallbackSuper(hash);
  }

  var resource = this._getResourceFromState(requestInfo.stateResponse);
  if (!resource || resource.length === 0) {
    return;
  }

  if (this._getItem(this.CONSTANTS.STORAGE.RENEW_STATUS + resource) === this.CONSTANTS.TOKEN_RENEW_STATUS_IN_PROGRESS) {
    return this.handleWindowCallbackSuper(hash);
  }
}

AuthenticationContext.prototype._renewToken = function (resource, callback) {
  this._renewTokenSuper(resource, callback);
  var _renewStates = this._getItem('renewStates');
  if (_renewStates) {
    _renewStates = _renewStates.split(',');
  }
  else {
    _renewStates = [];
  }
  _renewStates.push(this.config.state);
  this._saveItem('renewStates', _renewStates);
}

AuthenticationContext.prototype.getRequestInfo = function (hash) {
  var requestInfo = this.getRequestInfoSuper(hash);
  var _renewStates = this._getItem('renewStates');
  if (!_renewStates) {
    return requestInfo;
  }

  _renewStates = _renewStates.split(';');
  for (var i = 0; i < _renewStates.length; i++) {
    if (_renewStates[i] === requestInfo.stateResponse) {
      requestInfo.requestType = this.REQUEST_TYPE.RENEW_TOKEN;
      requestInfo.stateMatch = true;
      break;
    }
  }

  return requestInfo;
}

AuthenticationContext.prototype._addAdalFrame = function (iframeId) {
  var adalFrame = this._addAdalFrameSuper(iframeId);
  adalFrame.style.width = adalFrame.style.height = '106px';
  return adalFrame;
}

window.AuthenticationContext = function() {
  return undefined;
}
```

The patch applies the following changes to ADAL JS:

- All information is stored in a key specific to the web part (see the override of the `_getItem` and `_saveItem` functions).
- Callbacks are processed only by web parts that initiated them (see the override of the `handleWindowCallback` function).
- When verifying data from callbacks, the instance of the `AuthenticationContext` class of the specific web part is used instead of the globally registered singleton (see `_renewToken`, `getRequestInfo` and the empty registration of the `window.AuthenticationContext` function).

### Use the ADAL JS patch in SharePoint Framework web parts

For ADAL JS to work correctly in SharePoint Framework web parts, you have to configure it in a specific way.

1. Define a custom interface that extends the standard ADAL JS `Config` interface to expose additional properties on the configuration object.

  ```typescript
  export interface IAdalConfig extends adal.Config {
    popUp?: boolean;
    callback?: (error: any, token: string) => void;
    webPartId?: string;
  }
  ```

  The `popUp` property and the `callback` function are both already implemented in ADAL JS but are not exposed in the TypeScript typings of the standard `Config` interface. You need them in order to allow users to sign in to your web parts by using a pop-up window instead of redirecting them to the Azure AD sign-in page.

2. Load the ADAL JS patch, the custom configuration interface, and your configuration object into the main component of your web part.

  ```tsx
  import * as AuthenticationContext from 'adal-angular';
  import adalConfig from '../AdalConfig';
  import { IAdalConfig } from '../../IAdalConfig';
  import '../../WebPartAuthenticationContext';
  ```

3. In the constructor of your component, extend the ADAL JS configuration with additional properties and use it to create a new instance of the `AuthenticationContext` class.

  ```tsx
  export default class UpcomingMeetings extends React.Component<IUpcomingMeetingsProps, IUpcomingMeetingsState> {
    private authCtx: adal.AuthenticationContext;

    constructor(props: IUpcomingMeetingsProps, state: IUpcomingMeetingsState) {
      super(props);

      this.state = {
        loading: false,
        error: null,
        upcomingMeetings: [],
        signedIn: false
      };

      const config: IAdalConfig = adalConfig;
      config.webPartId = this.props.webPartId;
      config.popUp = true;
      config.callback = (error: any, token: string): void => {
        this.setState((previousState: IUpcomingMeetingsState, currentProps: IUpcomingMeetingsProps): IUpcomingMeetingsState => {
          previousState.error = error;
          previousState.signedIn = !(!this.authCtx.getCachedUser());
          return previousState;
        });
      };

      this.authCtx = new AuthenticationContext(config);
      AuthenticationContext.prototype._singletonInstance = undefined;
    }
  }
  ```

The code first retrieves the standard ADAL JS configuration object and casts it to the type of the newly defined configuration interface.

It then passes the ID of the web part instance so that all ADAL JS values can be stored in a way that they won't collide with other web parts on the page.

Next, it enables the pop-up-based authentication and defines a callback function that runs when authentication completes to update the component.

Finally, it creates a new instance of the `AuthenticationContext` class and resets the `_singletonInstance` set in the constructor of the `AuthenticationContext` class. This is required in order to allow every web part to use its own version of the ADAL JS authentication context.

## Considerations when using OAuth implicit flow in client-side web parts

Before you build SharePoint Framework client-side web parts that communicate with resources secured by Azure AD, there are some constraints that you should consider. The following information helps you determine when OAuth authorization in web parts is the right choice for your solution and organization.

### SharePoint Framework web parts are highly trusted

Unlike SharePoint Add-ins, web parts run with the same permissions as the current user. Whatever the user can do, the web part can do as well. This is why web parts can be installed and deployed only by tenant administrators. The tenant administrator should verify that web parts they are deploying come from a trusted source and were approved for use in the tenant.

Web parts are a part of the page and, unlike SharePoint Add-ins, share DOM and resources with other elements on the page. Access tokens that grant access to resources secured with Azure AD, are retrieved through a callback to the same page where the web part is located. That callback can be processed by any element on the page. Also, after access tokens are processed from callbacks, they are stored in the browser's local storage or session storage from where they can be retrieved by any component on the page. A malicious web part could read the token and either expose the token or the data it retrieved using that token to an external service.

### URL is a part of the OAuth implicit flow contract

Client-side applications are incapable of storing a client secret without revealing it to users. To verify the authenticity of the particular application, the URL where the application is hosted is used as a part of the trust contract between Azure AD and the application. The consequences of this are that the URL of every page with web parts using OAuth implicit flow must be registered with Azure AD. If a page is not registered, the OAuth flow fails, and the web part is denied access to the secured resource.

This necessary security measure is a significant limitation for organizations that allow users to add web parts to pages. We recommend that you limit the number of locations where web parts using OAuth implicit flow are used. Use a few well known locations such as the home page or specific landing pages, and have these locations registered with Azure AD.

### Internet Explorer security zones

Internet Explorer uses security zones to apply security policies to websites you visit. Websites assigned to different security zones run isolated and cannot cooperate. When using OAuth implicit flow in SharePoint Framework client-side web parts, the page with web parts that use OAuth and the Azure AD sign-in page (located at https://login.microsoftonline.com) must be in the same security zone. Without such configuration, the authentication process fails, and web parts won't be able to communicate with Azure AD-secured resources.

### User must sign in frequently

When using regular OAuth flow, web applications and client applications get a short-lived access token and a refresh token that is valid for a longer period of time. When the access token expires, the refresh token is used to get a new access token. This approach reduces how often users need to sign in to Azure AD.

Because client-side applications are incapable of securely storing secrets, and disclosing a refresh token is a serious security threat, they only receive the access token as part of the OAuth implicit flow. After that token expires, the application must start a new OAuth flow, which could require the user to sign in again.

## See also

- [Connect to Azure AD-secured APIs in SharePoint Framework solutions](../../use-aadhttpclient.md)
- [Use the MSGraphClient to connect to Microsoft Graph](../../use-msgraph.md)
- [Authentication Scenarios for Azure AD](https://docs.microsoft.com/en-us/azure/active-directory/develop/active-directory-authentication-scenarios)
