---
title: Use the MSGraphClient to connect to Microsoft Graph
description: Use the MSGraphClient class to make calls to the Microsoft Graph REST API.
ms.date: 08/28/2018
ms.prod: sharepoint
localization_priority: Priority
---

# Use the MSGraphClient to connect to Microsoft Graph

When building SharePoint Framework solutions, you can easily connect to the Microsoft Graph by using the **MSGraphClient**.

## MSGraphClient overview

**MSGraphClient** is a new HTTP client introduced in SharePoint Framework v1.4.1 that simplifies connecting to the Microsoft Graph inside SharePoint Framework solutions. **MSGraphClient** wraps the existing [Microsoft Graph JavaScript Client Library](https://www.npmjs.com/package/@microsoft/microsoft-graph-client), offering developers the same capabilities as when using the client library in other client-side solutions.

While you could use the Microsoft Graph JavaScript Client Library in your solution directly, **MSGraphClient** handles authenticating against the Microsoft Graph for you, which allows you to focus on building your solution.

## Use the MSGraphClient in your solution

> [!NOTE]
> The **MSGraphClient** is available only in projects built using SharePoint Framework v1.4.1 and later. While the **MSGraphClient** is explained in this article by using a client-side web part, you can also use it in SharePoint Framework Extensions.

1. To use the **MSGraphClient** in your SharePoint Framework solution, add the following `import` clause in your main web part file:

  ```typescript
  import { MSGraphClient } from '@microsoft/sp-http';
  ```

2. **MSGraphClient** is exposed through the **MSGraphClientFactory** available on the web part context. To get a reference to MSGraphClient, in your code add:

  ```typescript
  export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
    public render(): void {
      // ...

      this.context.msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient): void => {
          // use MSGraphClient here
        });
    }

    // ...
  }
  ```

3. After you have the reference to the **MSGraphClient** instance, start communicating with the Microsoft Graph by using its JavaScript Client Library syntax:

  ```typescript
  export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
    public render(): void {
      // ...

      this.context.msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient): void => {
          // get information about the current user from the Microsoft Graph
          client
            .api('/me')
            .get((error, response: any, rawResponse?: any) => {
              // handle the response
          });
        });
    }

    // ...
  }
  ```

### Use the Microsoft Graph TypeScript types

When working with the Microsoft Graph and TypeScript, you can use the [Microsoft Graph TypeScript types](https://www.npmjs.com/package/@microsoft/microsoft-graph-types) to help you catch errors in your code faster. The Microsoft Graph TypeScript types are provided as a separate package.

1. Install the Microsoft Graph TypeScript types:

  ```sh
  npm install @microsoft/microsoft-graph-types --save-dev
  ```

2. After installing the package in your project, import it to your web part file:

  ```typescript
  import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';
  ```

3. Enter the objects retrieved from the Microsoft Graph, for example:

  ```typescript
  export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
    public render(): void {
      // ...

      this.context.msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient): void => {
          // get information about the current user from the Microsoft Graph
          client
            .api('/me')
            .get((error, user: MicrosoftGraph.User, rawResponse?: any) => {
              // handle the response
          });
        });
    }

    // ...
  }
  ```

## Available permission scopes

By default, the service principal has no explicit permissions granted to access the Microsoft Graph. However, if you request an access token for the Microsoft Graph, you get a token with the `user_impersonation` permission scope that can be used for reading information about the users (that is, `User.Read.All`).

Additional permission scopes can be requested by developers and granted by tenant administrators. For more information, see [Connect to Azure AD-secured APIs in SharePoint Framework solutions](./use-aadhttpclient.md).

## See also

- [Microsoft Graph](https://graph.microsoft.com)
- [Microsoft Graph JavaScript Client Library samples](https://github.com/microsoftgraph/msgraph-sdk-javascript/tree/master/samples)
