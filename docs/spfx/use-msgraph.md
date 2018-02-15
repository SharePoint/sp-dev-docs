---
title: Use the MSGraphClient to connect to Microsoft Graph
description: Use the MSGraphClient class to make calls to the Microsoft Graph REST API.
ms.date: 02/13/2018
ms.prod: sharepoint
---

# Use the MSGraphClient to connect to Microsoft Graph

When building SharePoint Framework solutions, you can easily connect to the Microsoft Graph using the **MSGraphClient**.

## What is MSGraphClient

**MSGraphClient** is a new HTTP client introduced in SharePoint Framework v1.4.1, that simplifies connecting to the Microsoft Graph inside SharePoint Framework solutions. **MSGraphClient** wraps the existing [Microsoft Graph JavaScript Client Library](https://www.npmjs.com/package/@microsoft/microsoft-graph-client) offering developers the same capabilities as when using the client library in other client-side solutions. While you could use the Microsoft Graph JavaScript Client Library in your solution directly, using the **MSGraphClient** will handle authenticating against the Microsoft Graph for you, allowing you to focus on building your solution.

## Use the MSGraphClient in your solution

> [!NOTE]
> The **MSGraphClient** is available only in projects built using SharePoint Framework v1.4.1 and newer. While using the **MSGraphClient** is explained using a client-side web part, you can use it just as well in SharePoint Framework extensions.

To use the **MSGraphClient** in your SharePoint Framework solution, add the following `import` clause in your main web part file:

```ts
import { MSGraphClient } from '@microsoft/sp-client-preview';
```

**MSGraphClient** is provided as a service, which you have to consume from the service scope to get a reference to. To do that, in your code add:

```ts
export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  public render(): void {
    // ...

    const client: MSGraphClient = this.context.serviceScope.consume(MSGraphClient.serviceKey);
  }

  // ...
}
```

Once you have the reference to the **MSGraphClient** instance, you can start communicating with the Microsoft Graph, using its JavaScript Client Library syntax:

```ts
export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  public render(): void {
    // ...

    const client: MSGraphClient = this.context.serviceScope.consume(MSGraphClient.serviceKey);
    // get information about the current user from the Microsoft Graph
    client
      .api('/me')
      .get((error, response: any, rawResponse?: any) => {
        // handle the response
    });
  }

  // ...
}
```

### Use the Microsoft Graph TypeScript types

When working with the Microsoft Graph and TypeScript, you can benefit of the Microsoft Graph TypeScript types which will help you catch errors in your code faster. Microsoft Graph TypeScript types are provided as a separate package, which you can install using:

```sh
npm install @microsoft/microsoft-graph-types --save-dev
```

After installing the package in your project, import it in your web part file using:

```ts
import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';
```

Now you can type the objects retrieved from the Microsoft Graph, for example:

```ts
export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  public render(): void {
    // ...

    const client: MSGraphClient = this.context.serviceScope.consume(MSGraphClient.serviceKey);
    // get information about the current user from the Microsoft Graph
    client
      .api('/me')
      .get((error, user: MicrosoftGraph.User, rawResponse?: any) => {
        // handle the response
    });
  }

  // ...
}
```

For more information about working with the Microsoft Graph JavaScript Client Library see [https://www.npmjs.com/package/@microsoft/microsoft-graph-client](https://www.npmjs.com/package/@microsoft/microsoft-graph-client)

## Available permission scopes

By default, the service principal has no explicit permissions granted to access the Microsoft Graph. If you would however request an access token for the Microsoft Graph, you would get a token with the `user_impersonation` permission scope, that can be used for reading information about the users (i.e. `User.Read.All`). Additional permission scopes can be requested by developers and granted by tenant administrators. For more information see the guidance [article on using the AadHttpClient](./use-aadhttpclient.md).

> [!IMPORTANT]
> Above behavior with  `user_impersonation` is subject to change before general availability of of the this capability.It is not recommended to take dependency on these default permissions.

## See also

- [Microsoft Graph](https://graph.microsoft.com)
- [Microsoft Graph JavaScript Client Library](https://www.npmjs.com/package/@microsoft/microsoft-graph-client)
- [Microsoft Graph JavaScript Client Library samples](https://github.com/microsoftgraph/msgraph-sdk-javascript/tree/master/samples)
- [Microsoft Graph TypeScript types](https://www.npmjs.com/package/@microsoft/microsoft-graph-types)