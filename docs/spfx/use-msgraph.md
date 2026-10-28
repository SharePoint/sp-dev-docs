---
title: Use the MSGraphClientV3 to connect to Microsoft Graph
description: Use the MSGraphClientV3 class to make calls to the Microsoft Graph REST API.
ms.date: 10/25/2026
ms.localizationpriority: high
---

# Use the MSGraphClientV3 to connect to Microsoft Graph

When building SharePoint Framework solutions, you can easily connect to the Microsoft Graph by using the **MSGraphClientV3**.

## MSGraphClient overview

**MSGraphClientV3** is an HTTP client introduced in SharePoint Framework v1.15.0 that simplifies connecting to Microsoft Graph inside SharePoint Framework solutions. It wraps version 3 of the [Microsoft Graph JavaScript Client Library](https://www.npmjs.com/package/@microsoft/microsoft-graph-client).

**MSGraphClientV3** replaces **MSGraphClient** which was introduced in SharePoint Framework v1.6.0. **MSGraphClient** wrapped the Microsoft Graph JavaScript Client Library v1.

While you could use the Microsoft Graph JavaScript Client Library in your solution directly, **MSGraphClientV3** handles authenticating against the Microsoft Graph for you, which allows you to focus on building your solution.

## Use the MSGraphClient in your solution

> [!NOTE]
> The **MSGraphClientV3** is available only in projects built using SharePoint Framework v1.15.0 and later. While the **MSGraphClientV3** is explained in this article by using a client-side web part, you can also use it in SharePoint Framework Extensions.

> [!NOTE]
> This guidance applies to SharePoint Online. SharePoint Server supports SPFx versions below the 1.15.0 minimum required by **MSGraphClientV3**; installing a newer client package doesn't make it supported on premises. See the [platform compatibility reference](compatibility.md).

1. To use the **MSGraphClientV3** in your SharePoint Framework solution, add the following `import` clause in your main web part file:

    ```typescript
    import { MSGraphClientV3 } from '@microsoft/sp-http';
    ```

1. **MSGraphClientV3** is exposed through the **MSGraphClientFactory** available on the web part context. To get a reference to MSGraphClient, in your code add:

    ```typescript
    export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
      public render(): void {
        // ...

        this.context.msGraphClientFactory
          .getClient('3')
          .then((client: MSGraphClientV3): void => {
            // use MSGraphClient here
          });
      }

      // ...
    }
    ```

1. After you have the reference to the **MSGraphClientV3** instance, start communicating with the Microsoft Graph by using its JavaScript Client Library syntax:

    ```typescript
    export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
      public render(): void {
        // ...

        this.context.msGraphClientFactory
          .getClient('3')
          .then((client: MSGraphClientV3): void => {
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

    ```console
    npm install @microsoft/microsoft-graph-types --save-dev
    ```

1. After installing the package in your project, import it to your web part file:

    ```typescript
    import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';
    ```

1. Enter the objects retrieved from the Microsoft Graph, for example:

    ```typescript
    export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
      public render(): void {
        // ...

        this.context.msGraphClientFactory
          .getClient('3')
          .then((client: MSGraphClientV3): void => {
            // get information about the current user from the Microsoft Graph
            client
              .api('/me')
              .get((error: any, user: MicrosoftGraph.User, rawResponse?: any) => {
                // handle the response
            });
          });
      }

      // ...
    }
    ```

## Available permission scopes

Determine the least-privileged delegated permissions required by each Microsoft Graph endpoint and request them through your solution's `webApiPermissionRequests`. For example, [Get the signed-in user](/graph/api/user-get) documents the permissions required for `/me`. Don't assume every tenant or authentication configuration provides `User.Read.All`, or treat a `user_impersonation` scope as a general substitute for a documented Graph permission.

Administrators review the requests through **API access** in the SharePoint admin center. The required admin role depends on the API; approval for Microsoft Graph requires a Global Administrator. See [Manage access to Microsoft Entra ID-secured APIs](/sharepoint/api-access) and [Connect to Microsoft Entra ID-secured APIs in SharePoint Framework solutions](use-aadhttpclient.md).

## Known issues

### Microsoft Entra roles with delegated authentication

Some Graph operations require both delegated permissions and a supported Microsoft Entra role for the signed-in user. Don't assume that granting a permission alone meets the endpoint's authorization requirements.

For authentication failures, check the requested resource, approved scopes, user role, and endpoint documentation. Authentication behavior can vary with the SPFx version and host; don't diagnose every failure as an implicit-flow limitation based on older **MSGraphClient** guidance.

- [Office 365 usage reports](/graph/reportroot-authorization)

For browser cookie and interactive sign-in considerations, see [Working with AadTokenProvider](use-aadtokenprovider.md). Use the framework-provided client rather than adding a separate authentication library to change the flow.

## See also

- [Microsoft Graph](https://graph.microsoft.com)
- [Microsoft Graph JavaScript Client Library samples](https://github.com/microsoftgraph/msgraph-sdk-javascript/tree/master/samples)
