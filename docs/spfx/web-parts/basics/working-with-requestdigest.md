---
title: Working with __REQUESTDIGEST
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Working with __REQUESTDIGEST

When executing non-GET REST requests to the SharePoint API, you must add a valid request digest to your request. This digest proves validity of your request to SharePoint. Because this token is valid only for a limited period of time, you have to ensure that the token you have is valid, before adding it to your request or the request will fail. This article describes the different approaches to obtain a valid request digest and pitfalls of some commonly used approaches.

## Considerations when using request digest from the hidden __REQUESTDIGEST field

In classic pages, SharePoint includes a request digest token on the page in a hidden field named **__REQUESTDIGEST**. One of the most common approaches to work with the request digest, is to obtain it from that field and add it to the request, for example:

```js
var digest = $('#__REQUESTDIGEST').val();
$.ajax({
    url: '/_api/web/...'
    method: "POST",
    headers: {
        "Accept": "application/json; odata=nometadata",
        "X-RequestDigest": digest
    },
    success: function (data) {
      // ...
    },
    error: function (data, errorCode, errorMessage) {
      // ...
    }
});
```

Such request would work initially, but if the user would have the page open for a longer period of time, the request digest on the page would expire and the request would fail with a **403 FORBIDDEN** result. By default, a request digest token is valid for 30 minutes, so before using it, you have to ensure that it's still valid. In the past you had to do this manually, by comparing the timestamp from the request digest with the current time. SharePoint Framework simplifies this process by offering you two ways of ensuring that your request has a valid request digest token.

## Use the SPHttpClient to communicate with the SharePoint REST API

The recommended way to communicate with the SharePoint REST API is using the SPHttpClient provided with the SharePoint Framework. This class wraps issuing REST requests to the SharePoint REST API with convenient logic that simplifies your code. For example, whenever you issue a non-GET request using the SPHttpClient, it will automatically obtain a valid request digest and add it to the request. This significantly simplifies your solution as you don't need to build code to manage request digest tokens and ensure their validity.

If you're building new customizations on the SharePoint Framework, you should always use the SPHttpClient to communicate with the SharePoint REST API. Sometimes however, you might not be able to use the SPHttpClient. This can be the case for example when you're migrating an existing customization to the SharePoint Framework and want to keep as much of the original code as possible, or you're building a customization using a library such as Angular(JS), that has its own services for issuing web requests. In such cases you can obtain a valid request digest token from the **DigestCache**.

## Retrieve valid request digest using the DigestCache service

If you can't use the SPHttpClient for communicating with the SharePoint REST API, you can obtain a valid request digest token using the **DigestCache** service provided with the SharePoint Framework. The benefit of using the DigestCache service over manually obtaining a valid request digest token is, that the DigestCache automatically checks if the previously retrieved request digest is still valid or not. If it's expired, the DigestCache service will automatically request a new request digest token from SharePoint and store it from subsequent requests. Using the DigestCache simplifies your code and makes your solution more robust.

To use the DigestCache service in your code, first import the **DigestCache** and **IDigestCache** types from the **@microsoft/sp-http** package:

```ts
// ...
import { IDigestCache, DigestCache } from '@microsoft/sp-http';

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  // ...
}
```

Next, whenever you need a valid request digest token, retrieve a reference to the DigestCache service and call its **fetchDigest** method:

```ts
// ...
import { IDigestCache, DigestCache } from '@microsoft/sp-http';

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  protected onInit(): Promise<void> {
    return new Promise<void>((resolve: () => void, reject: (error: any) => void): void => {
      const digestCache: IDigestCache = this.context.serviceScope.consume(DigestCache.serviceKey);
      digestCache.fetchDigest(this.context.pageContext.web.serverRelativeUrl).then((digest: string): void => {
        // use the digest here
        resolve();
      });
    });
  }

  // ...
}
```