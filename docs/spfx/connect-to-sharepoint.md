---
title: Connect to SharePoint APIs
description: Different approaches of connecting to SharePoint APIs from your SharePoint Framework solutions
ms.date: 08/31/2018
ms.prod: sharepoint
localization_priority: Priority
---

# Connect to SharePoint APIs

In your SharePoint Framework solutions, you will likely want to interact with data stored in SharePoint. SharePoint offers a rich set of APIs that can be consumed in various ways. This article outlines what options you have, how they work and what their advantages and disadvantages are.

## Connect to SharePoint API using the SPHttpClient

SharePoint Framework offers the SPHttpClient that you can use to connect to SharePoint REST APIs. A ready-to-use instance of the SPHttpClient is available on the web part/extension context and you can use it to perform all kinds of web request. Following code snippet shows how you would use the SPHttpClient to retrieve the title of the current site:

```ts
this.context.spHttpClient
  .get(`${this.context.pageContext.web.absoluteUrl}/_api/web?$select=Title`, SPHttpClient.configurations.v1)
  .then((res: SPHttpClientResponse): Promise<{ Title: string; }> => {
    return res.json();
  })
  .then((web: {Title: string}): void => {
    console.log(web.Title);
  });
```

The SPHttpClient offers basic functionality for performing the most common web requests. It allows you also, to configure your request by for example specifying request headers. For example, if you wanted to issue a web request without retrieving metadata, you'd use the following code:

```ts
this.context.spHttpClient
  .get(`${this.context.pageContext.web.absoluteUrl}/_api/web?$select=Title`,
    SPHttpClient.configurations.v1,
    {
      headers: [
        ['accept', 'application/json;odata.metadata=none']
      ]
    })
  .then((res: SPHttpClientResponse): Promise<{ Title: string; }> => {
    return res.json();
  })
  .then((web: { Title: string }): void => {
    console.log(web.Title);
  });
```

### Considerations for using the SPHttpClient

When using the SPHttpClient there are a few things that you should take into account.

#### OData v4.0

By default, the SPHttpClient uses OData v4 specification, which requires using `odata.metadata` instead of just `odata` to control the response metadata. If you use the `odata` directive in OData v4 mode, you will get an error, like: _The HTTP header ACCEPT is missing or its value is invalid._. It is  possible to set the SPHttpClient to OData v3.0 mode, by setting the `odata-version` request header to empty value:

```ts
this.context.spHttpClient
  .get(`${this.context.pageContext.web.absoluteUrl}/_api/web?$select=Title`,
    SPHttpClient.configurations.v1,
    {
      headers: [
        ['accept', 'application/json;odata=nometadata'],
        ['odata-version', '']
      ]
    })
  .then((res: SPHttpClientResponse): Promise<{ Title: string; }> => {
    return res.json();
  })
  .then((web: { Title: string }): void => {
    console.log(web.Title);
  });
```

#### Authentication cookies

In the SharePoint Framework there are a number of classes for executing web requests. Two of them are the **SPHttpClient** and **HttpClient**. One of the differences between the SPHttpClient and HttpClient is that the SPHttpClient includes authentication cookies when issuing web requests. Because SharePoint APIs are not anonymous, you need to provide authentication information or you will get an 401 Unauthorized response. Because the HttpClient doesn't include authentication cookies in its request, if you used it to call the SharePoint REST APIs, your requests would fail with a 401 Unauthorized response.

#### Part of the SharePoint Framework

The SPHttpClient is part of the SharePoint Framework and you don't need any additional dependencies to start using it. It is already available on the page which is why using it doesn't cause additional performance overhead on runtime.

#### Raw REST queries are error-prone

The SPHttpClient offers basic support for communicating with the SharePoint REST API. If your applications requires more complex GET requests, POST requests or uses more advanced capabilities such as batching, you will quickly notice that using the SPHttpClient is cumbersome and error-prone. In such cases, you should consider using an alternative such as the PnPjs library that offers you a fluent API that can be verified for correctness by TypeScript.

## Connect to SharePoint using PnPjs

[PnPjs](https://pnp.github.io/pnpjs/) is an open-source JavaScript library for communicating with SharePoint and Office 365. It exposes a fluent API that allows you to easily consume SharePoint and Office 365 REST APIs in a type-safe way. To retrieve a the title of the current site using PnPjs, you would execute the following code:

```ts
sp.web
  .select('Title')
  .get<{Title: string;}>()
  .then(web => {
    console.log(web.Title);
  });
```

Notice, how less verbose the code is comparing to the SharePoint Framework SPHttpClient and how all elements of the requests, except for the names of the properties to retrieve, are strongly-typed lowering the risk of runtime errors.

For more information about how to setup and use PnPjs in the SharePoint Framework see the PnPjs documentation at [https://pnp.github.io/pnpjs/](https://pnp.github.io/pnpjs/).

### Considerations for using PnPjs

When deciding whether you should use PnPjs or not, following are a few considerations that you should take into account.

#### Raw REST queries are error prone

Issuing raw REST requests using the SPHttpClient is error-prone. Especially, when your application will need to execute POST queries or you will want to use some of the more advanced capabilities such as request batching, composing the correct requests and parsing the responses will be cumbersome. Not to mention, the only way to verify if the requests are correct is by running the code in the browser. With PnPjs you can communicate with SharePoint APIs in a type-safe way and easily use the advanced capabilities of SharePoint API what allows you to focus on building your application instead of testing its requests.

#### Open-source project

PnPjs is an open-source project managed by the SharePoint community. There is no SLA for using PnPjs in your solutions and Microsoft support won't assist you with any possible issues when caused by PnPjs. That said, PnPjs is actively developed and the community quickly responds to all submitted issues and questions.

#### Additional dependency

PnPjs is an additional dependency that you need to add to your project and manage over time. You need to keep track of its updates and upgrade your project when necessary. The community behind PnPjs regularly communicates the state of the current work, upcoming releases and the impact, if any, of upgrading to the newer version.

#### Additional payload

PnPjs offers a rich set of capabilities for communicating with SharePoint APIs. But these capabilities add extra load to your project. Compressed, PnPjs will add ~40KB to the generated bundle size.
