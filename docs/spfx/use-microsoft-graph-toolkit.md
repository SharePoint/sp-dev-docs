---
title: Use Microsoft Graph Toolkit to connect your solution to Microsoft Graph
description: Use Microsoft Graph Toolkit to easily connect your SharePoint Framework web parts and extensions to Microsoft Graph.
ms.date: 06/01/2021
ms.prod: sharepoint
ms.localizationpriority: high
---

# Use Microsoft Graph Toolkit to connect your solution to Microsoft Graph

When building SharePoint Framework solutions, the easiest way to show data from Microsoft 365 is by using Microsoft Graph Toolkit.

## What is Microsoft Graph Toolkit

Microsoft Graph Toolkit is a collection of reusable, framework-agnostic components and authentication providers for accessing and working with Microsoft Graph. The components are fully functional right of out of the box, with built-in providers that authenticate with and fetch data from Microsoft Graph.

Microsoft Graph Toolkit makes it easy to use Microsoft Graph in your application. The following example shows calendar events of the signed-in user with just one line of code by using the [Agenda](/graph/toolkit/components/agenda?WT.mc_id=m365-29707-wmastyka) component.

<iframe src="https://mgt.dev/iframe.html?id=components-mgt-agenda--simple&source=docs" height="500"></iframe>

[Open this example in mgt.dev](https://mgt.dev/?path=/story/components-mgt-agenda--simple&source=docs)

## Why use Microsoft Graph Toolkit in SharePoint Framework?

When building solutions using SharePoint Framework, you connect to Microsoft Graph using the [MSGraphClient](./use-msgraph.md) exposed by SharePoint Framework. The **MSGraphClient** handles authentication with Microsoft Graph for you, allowing you to focus on building your app. Still, you need to build the necessary API requests, execute them, handle their responses and show the data in your app.

Microsoft Graph Toolkit simplifies working with Microsoft Graph even further. Not only it handles the authentication, but it also communicates with Microsoft Graph for you and automatically shows the retrieved data in your app, saving you precious time.

Following example shows how to use the toolkit's Agenda component in a plain JavaScript SharePoint Framework web part to display the current user's calendar events:

```typescript
import { Providers, SharePointProvider } from '@microsoft/mgt-spfx';

// ...

export default class CalendarWebPart extends BaseClientSideWebPart<ICalendarWebPartProps> {
  protected async onInit() {
    if (!Providers.globalProvider) {
      Providers.globalProvider = new SharePointProvider(this.context);
    }
  }

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.calendar }">
        <mgt-agenda></mgt-agenda>
      </div>`;
  }

  // ...
}
```

Notice, how Microsoft Graph Toolkit uses the current context from SharePoint Framework and abstracts away retrieving calendar events from Microsoft Graph and showing them in your app to a single line of code: `<mgt-agenda></mgt-agenda>`.

## Use Microsoft Graph Toolkit in SharePoint Framework

Microsoft Graph Toolkit connects to Microsoft Graph to retrieve data stored in Microsoft 365. To access the data, the service principal, that facilitates the communication with APIs, will require the necessary API permissions for Microsoft Graph. The necessary permissions for your project depend on which toolkit components you use. For more information about the Microsoft Graph permissions required by components, see [their documentation](/graph/toolkit/overview?WT.mc_id=m365-29707-wmastyka).

After you determined the list of API permissions needed for your SharePoint Framework project, [add them to the project's configuration](./use-aadhttpclient.md#request-permissions-to-an-azure-ad-application).

The next step is to add Microsoft Graph Toolkit to your project. For the exact steps, see the [SharePoint Framework library for Microsoft Graph Toolkit](/graph/toolkit/get-started/mgt-spfx?WT.mc_id=m365-29707-wmastyka) documentation.

> [!IMPORTANT]
> If you use React in your SharePoint Framework project, you'll need to install both `@microsoft/mgt-spfx` and `@microsoft/mgt-react` packages in your project. You'll also need to adjust imports for the types that you load from the toolkit. For more information, see the [React section](/graph/toolkit/get-started/mgt-spfx?WT.mc_id=m365-29707-wmastyka#react) of the SharePoint Framework library for Microsoft Graph Toolkit documentation.

After you complete the configuration steps, you're ready to use Microsoft Graph Toolkit in your project.

## Known issues

### Web parts and extensions show error

SharePoint Framework web parts and extensions that use Microsoft Graph Toolkit show an error similar to:

> Failed to execute 'define' on 'CustomElementRegistry': the name "mgt-xyz" has already been used with this registry.

This error is caused by multiple SharePoint Framework components trying to instantiate their own copy of Microsoft Graph Toolkit. To avoid this issue, you should deploy the `mgt-spfx.sppkg` package to the SharePoint app catalog in your tenant and update all solutions that use Microsoft Graph Toolkit to use the `@microsoft/mgt-spfx` SharePoint package. For more information, see the [SharePoint Framework library for Microsoft Graph Toolkit](/graph/toolkit/get-started/mgt-spfx?WT.mc_id=m365-29707-wmastyka) documentation.

### `AADSTS65001` error logged in the developer console

SharePoint Framework web parts and extensions that use Microsoft Graph Toolkit don't work as expected. In the developer console, you see an error similar to:

> AADSTS65001: The user or administrator has not consented to use the application with ID 'f96cafc5-5fa8-4594-9815-aa169a8c6d09' named 'SharePoint Online Client Extensibility Web Application Principal'. Send an interactive authorization request for this user and resource.

This error is often caused by the necessary Microsoft Graph API permissions not being granted to the SharePoint Framework service principal. In your SharePoint admin center, ensure that the necessary permissions are granted and listed on the API access page. For more information, see the [SharePoint API management documentation](/sharepoint/api-access?WT.mc_id=m365-29707-wmastyka).

## See also

- [Microsoft Graph Toolkit overview](/graph/toolkit/overview?WT.mc_id=m365-29707-wmastyka)
- [SharePoint Framework library for Microsoft Graph Toolkit](/graph/toolkit/get-started/mgt-spfx?WT.mc_id=m365-29707-wmastyka)
- [Microsoft Graph Toolkit Playground](https://mgt.dev/?path=/story/samples-general--login-to-show-agenda)
