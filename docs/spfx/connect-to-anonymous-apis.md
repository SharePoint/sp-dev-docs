---
title: Connect to anonymous APIs
description: Different approaches of connecting to anonymous APIs from your SharePoint Framework solutions
ms.date: 10/23/2018
ms.prod: sharepoint
localization_priority: Priority
---

# Connect to anonymous APIs

When building SharePoint Framework solutions, you might want to consume public APIs, such as stock or weather information. This article outlines how to connect to public APIs in SharePoint Framework solutions.

> [!NOTE]
> In this article, public and anonymous APIs are used interchangeably. This article is about connecting to APIs, that don't require authentication at all or are secured with a function/API key that can be passed via query string parameters. See other pages in this section of the documentation for more information about connecting to the [SharePoint APIs](connect-to-sharepoint.md) or [APIs secured with Azure AD](use-aadhttpclient.md).

## Connect to anonymous APIs using the HttpClient

The easiest way, to connect to anonymous APIs in your SharePoint Framework solutions, is by using the HttpClient provided as a part of the SharePoint Framework. For example, to get dummy information from the Typicode service, you would execute:

```ts
this.context.httpClient
  .get('https://jsonplaceholder.typicode.com/todos/1', HttpClient.configurations.v1)
  .then((res: HttpClientResponse): Promise<any> => {
    return res.json();
  })
  .then((weather: any): void => {
    console.log(weather);
  });
```

Similarly to the SPHttpClient you use for connecting to SharePoint APIs, the HttpClient offers you similar capabilities for performing the most common web requests. If necessary, you can use its options, to configure requests. For example, to specify request headers, you would use the following code:

```ts
this.context.httpClient
  .get('https://jsonplaceholder.typicode.com/todos/1', HttpClient.configurations.v1,
    {
      headers: [
        ['accept', 'application/json']
      ]
    })
  .then((res: HttpClientResponse): Promise<any> => {
    return res.json();
  })
  .then((weather: any): void => {
    console.log(weather);
  });
```

### Considerations for using the HttpClient

When using the HttpClient, there are a few things that you should take into account.

#### Authentication cookies not included

While the HttpClient is very similar to the SPHttpClient, it doesn't include authentication cookies in its requests. So if you were to use it to connect to SharePoint APIs, your requests would fail with a 401 Unauthorized response.

#### Part of the SharePoint Framework

The HttpClient is part of the SharePoint Framework and you don't need any additional dependencies to start using it. It is already available on the page which is why using it doesn't cause additional performance overhead on runtime.
