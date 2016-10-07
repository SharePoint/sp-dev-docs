# Connect client-side web parts to resources secured with Azure Active Directory

When building SharePoint Framework client-side web parts that communicate with resources secured by the Azure Active Directory there are some specific considerations that you must take into account in order to implement the connection to the Microsoft Graph correctly and securely.

## Azure Active Directory for securing Microsoft and organizational resources

Azure Active Directory (AAD) is used to secure Office 365 and its APIs, such as the Microsoft Graph. Organizations can also use AAD to secure their custom applications and APIs. By doing that, they implement security in a consistent way leveraging their organizational accounts and their policies across the whole organization.

## Azure Active Directory authorization flows

Azure Active Directory uses OAuth as the authorization protocol. By completing the OAuth authorization flow applications get a temporary access token that they can use to access the specific resources on behalf of the user using permissions granted them by that user.

Different kinds of applications require a different type of OAuth flow. Web applications use an OAuth flow based on redirects to the URL where the application is hosted which is an additional security measure to verify the authenticity of that application. Client applications on the other hand, not being accessible using a URL, complete the OAuth flow without redirects. Both types of applications use a publicly-know client ID and a privately-held client secret known only to AAD and the application.

Another sort of applications are client-side applications. Implemented using JavaScript these applications are incapable of using a client secret without revealing it to users. For communication with resources secured with AAD these applications can use another type of authorization flow called OAuth implicit flow. In this flow the contract between the application and AAD is established based on the publicly-known client ID and the URL where the application is hosted. This is the flow that SharePoint Framework client-side web parts must use in order to connect to resources secured with AAD. To implement AAD-based authentication and authorization in their applications, developers can use the [ADAL JS library](https://github.com/AzureAD/azure-activedirectory-library-for-js) provided by Microsoft.

## Difference between client-side applications and SharePoint Framework web parts

Typically client-side applications own the whole page and are the only resource available at the given URL. All elements of the page are determined during development and users working with the application cannot dynamically add new elements. Even though a client-side application might consist of a number of views, work with external data and offer a certain degree of configuration, all these aspects are taken into account by developers while building the application.

When working with SharePoint, users compose pages by adding and configuring web parts. A single web part is only a small part of the whole page and developers building that web part cannot know upfront whether there will be other web parts placed on the same page and if so, which resources these web parts use. In contrary to SharePoint add-ins, SharePoint Framework client-side web parts are a part of the page. All web parts have access to the page's DOM and resources loaded by one web part can be available to other web parts.

## Limitations when using ADAL JS with SharePoint Framework client-side web parts

While the ADAL JS library significantly simplifies implementing AAD-based OAuth flow in client-side applications, it has a number of limitations when used with SharePoint Framework client-side web parts. These limitations are mainly caused by the fact that ADAL JS was designed to be used by client-side applications that own the whole page and not share it with other applications.

### Shared storage

Depending on how you configured the ADAL JS library in your project, it will store its data either in the browser's local storage or in the session storage. Either way, the information stored by ADAL JS is accessible to any component on the same page. If one web part for example would retrieve an access token for Microsoft Graph, then theoretically any other web part on the same page would be able to reuse that token and communicate with the Microsoft Graph.

### ADAL JS as a singleton

ADAL JS is designed to work as a singleton service registered in the global scope of the page. When processing OAuth flow callbacks in iframes, ADAL JS code uses the registered singleton reference from the main window to resolve the token flow. Since each web part is registered with a different AAD application, reusing the same instance of ADAL JS leads to undesirable results where every web part uses the same configuration as the one registered by the first web part loaded on the page.

### Resource-based storage

By default the ADAL JS library stores information such as the current access token or its expiration time in a set of keys associated with the particular resource, for example Microsoft Graph or SharePoint. If there are multiple components on one page accessing the same resource with different permissions, then the first retrieved token will be served by ADAL JS to all components. If different components require access to the same resource then they might fail. To illustrate this limitation, consider the following example.

Imagine that you had two web parts on the page: one that would list upcoming meetings and one that would allow you to create a new meeting. To read upcoming meetings, the upcoming meetings web part would use a Microsoft Graph access token with permissions to read user's calendar. The web part that creates new meetings on the other hand, requires a Microsoft Graph access token with permissions to write to user's calendar. If the upcoming meetings web part loaded first and ADAL JS would retrieve its token, the same token would be served by ADAL JS to the web part creating new meetings. As you can predict, trying to create a new meeting the web part would fail with an access denied error. Because of the resource-based storage, ADAL JS wouldn't retrieve a new token for Microsoft Graph until the previously retrieved token expired.

### Processing authorization callbacks

OAuth implicit flow is based on redirects between Azure Active Directory and the application participating in the flow. When the authentication process starts, the application redirects you to the AAD login page. Once the authentication completes, AAD redirects you back to the application sending the identity token in the URL hash for the application to process. From the perspective of a web part placed on a SharePoint page this behavior has two drawbacks.

Despite that you are logged in in SharePoint, you need to separately authenticate with AAD in order for your web part to be able to access resources secured with AAD. Even though the web part is small part of the overal page, in order to complete the authentication process, you would need to leave the whole page which is a poor user experience.

After the authentication completes, Azure AD redirects you back to your application. In the URL hash it includes the identity token that your application needs to process. Unfortunately, as the identity token doesn't contain any information about its origin, if you had multiple web parts on one page, all of them would try to process the identity token from the URL.

## Use ADAL JS with SharePoint Framework client-side web parts

ADAL JS has some limitations when used in SharePoint Framework client-side web part. With little effort you can overcome them and benefit of ADAL JS to connect your web parts to resources secured with AAD.

### Load ADAL JS in your web part

SharePoint Framework web parts are built using TypeScript and distributed as AMD modules. Their modular architecture, allows you to isolate the different resources used by the web part. While ADAL JS has been designed to register itself in the global scope, it can be as well loaded in SharePoint Framework web parts using the following construct:

```ts
const AuthenticationContext = require('adal-angular');
```

This statement imports the `AuthenticationContext` class that exposes the ADAL JS functionality for use in web parts. Despite the name of the module, the `AuthenticationContext` class works with every JavaScript library.

### Make ADAL JS suitable for use with SharePoint Framework web parts

The way ADAL JS works by default, makes it unsuitable for use in SharePoint Framework web parts. Using the following patch you can change how ADAL JS works and make it work inside web parts:

**WebPartAuthenticationContext.js:**
```js
const AuthenticationContext = require('adal-angular');

AuthenticationContext.prototype._getItemSuper = AuthenticationContext.prototype._getItem;
AuthenticationContext.prototype._saveItemSuper = AuthenticationContext.prototype._saveItem;
AuthenticationContext.prototype.handleWindowCallbackSuper = AuthenticationContext.prototype.handleWindowCallback;
AuthenticationContext.prototype._renewTokenSuper = AuthenticationContext.prototype._renewToken;
AuthenticationContext.prototype.getRequestInfoSuper = AuthenticationContext.prototype.getRequestInfo;

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
    _renewStates = _renewStates.split(';');
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

window.AuthenticationContext = function() {
  return undefined;
}
```

The patch applies the following changes on top of ADAL JS:
- all information is stored in web part-specific keys (override of the `_getItem` and `_saveItem` functions)
- callbacks are processed only by web parts that initiated them (override of the `handleWindowCallback` function)
- when verifying data from callbacks, the instance of the `AuthenticationContext` class of the specific web part is used instead of the globally registered singleton (`_renewToken`, `getRequestInfo` and the empty registration of the `window.AuthenticationContext` function)

### Use the ADAL JS patch in SharePoint Framework web parts

For ADAL JS to work correctly in SharePoint Framework web parts, you have to configure it in a specific way. To do that, you first need to define a custom interface that extends the standard ADAL JS `Config` interface to expose additional properties on the configuration object:

```ts
export interface IAdalConfig extends adal.Config {
  popUp?: boolean;
  callback?: (error: any, token: string) => void;
  webPartId?: string;
}
```

The `popUp` property and the `callback` function are both already implemented in ADAL JS but are not exposed in the TypeScript typings of the standard Config interface. You need them in order to allow users to sign in to your web parts using a pop-up window instead of redirecting to the AAD login page.

Next, you load the ADAL JS patch, the custom configuration interface and your configuration object into the main component of your web part:

```tsx
const AuthenticationContext = require('adal-angular');
import adalConfig from '../AdalConfig';
import { IAdalConfig } from '../../IAdalConfig';
import '../../WebPartAuthenticationContext';
```

In the constructor of your component, you extend the ADAL JS configuration with additional properties and use it to create a new instance of the `AuthenticationContext` class:

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

You start with retrieving the standard ADAL JS configuration object and casting it to the type of the newly defined configuration interface. Then, you pass the ID of the web part instance so that all ADAL JS values can be stored in a way that won't collide with other web parts on the page. Next, you enable the pop-up-based authentication and define a callback function that should execute when authentication completes to update the component. Finally, you create a new instance of the `AuthenticationContext` class and reset the `_singletonInstance` set in the constructor of the `AuthenticationContext` class. This is required in order to allow every web part use its own version of the ADAL JS authentication context.

## Considerations when using OAuth implicit flow in SharePoint Framework client-side web parts

Before you decide to build SharePoint Framework client-side web parts that communicate with AAD-secured resources, there are some things that you should consider. This will allow you to verify that how OAuth authorization in web parts works is acceptable for your organization.

### SharePoint Framework web parts are highly trusted

Unlike SharePoint add-ins, SharePoint Framework client-side web parts execute with the permissions of the current user. Whatever the user can do, the SharePoint Framework web part can do as well, given that there is an API for, that can be used by the web part. This is exactly why SharePoint Framework web parts can be installed and deployed only by tenant administrators, who should verify, that web parts that they are deploying, come from a trusted source and have been approved for use in the particular tenant.

SharePoint Framework client-side web parts are a part of the page and, unlike SharePoint add-ins, share DOM and resources with other elements on the page. Access tokens, that grant access to resources secured with AAD, are retrieved through a callback to the same page where the web part is located. That callback can be processed by any element on the page. Also, once access tokens are processed from callbacks, they are stored in the browser's local storage or session storage from where they can be retrieved by any component on the page. A malicious SharePoint Framework client-side web part could read the token and either expose the token or the data it retrieved using that token to an external service.

### URL is a part of the OAuth implicit flow contract

Client-side applications are incapable of storing a client secret without revealing it to users. In order to verify the authenticity of the particular application, the URL where the application is hosted, is used as a part of the trust contract between AAD and the application. The consequence of this is, that the URL of every page with web parts using OAuth implicit flow must be registered with Azure Active Directory. Without it, the OAuth flow will fail and the web part will be denied the access to the secured resource.

This necessary security measure is a significant limitation for organizations that allow users to add web parts to pages. The recommendation is, to limit the locations to where web parts using OAuth implicit flow can be used, to a few known locations such as home page or specific landing pages and have these locations registered with Azure Active Directory.

### Internet Explorer security zones

Internet Explorer uses security zones to apply security policies to websites you visit. Websites assigned to different security zones run isolated and cannot cooperate. When using OAuth implicit flow in SharePoint Framework client-side web parts, the page with web parts using OAuth and the Azure AD login page (located at https://login.microsoftonline.com) must be in the same security zone. Without such configuration the authentication process will fail and web part won't be able to communicate with Azure AD-secured resources.

### Regular re-authentication required

When using regular OAuth flow web applications and client applications get a short-lived access token and a refresh token which is valid for a longer period of time. The refresh token can be used to get a new access token once the previously retrieved one expired. Using this approach users don't need to login to AAD frequently and can keep using the application for a longer period of time.

Because client-side applications are incapable of securely storing secrets, and disclosing a refresh token is a serious security threat, they only receive access token as part of the OAuth implicit flow. Once that token expires, the application must start a new OAuth flow which could require the user to re-authenticate.