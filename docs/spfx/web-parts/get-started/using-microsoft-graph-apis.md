---
title: Building SharePoint Framework solutions, which use Microsoft Graph APIs
description: Getting started tutorial on using Microsoft Graph with SharePoint Framework solutions
ms.date: 01/9/2020
ms.prod: sharepoint
---

# Using Microsoft Graph APIs in your solution

Microsoft Graph provides a unified programmability model that you can use to build apps for organizations and consumers that interact with the data of millions of users. You can easily access Microsoft Graph APIs also from SharePoint Framework solutions.

Before you start, complete the procedures in the following articles to ensure that you understand the basic flow of creating a custom client-side web part:

* [Build your first web part](build-a-hello-world-web-part.md)
* [Connect your web part to SharePoint](connect-to-sharepoint.md)
* [Deploy your client-side web part to a SharePoint page](provision-sp-assets-from-package.md)

## Create a SharePoint Framework project for Graph API usage

1. Create a new project directory in your favorite location:

    ```shell
    md graph-apis
    ```

1. Go to the project directory:

    ```shell
    cd graph-apis
    ```

1. Create a new solution by running the Yeoman SharePoint Framework Generator:

    ```shell
    yo @microsoft/sharepoint
    ```

1. When prompted:

    * Accept the default **graph-apis** as your solution name, and then select Enter.
    * Select **SharePoint Online only (latest)**, and then select Enter.
    * Select **Use the current folder** as the location for the files.
    * Select **y** to ensure that your web part is automatically deployed tenant-wide when it's added to the tenant App Catalog.
    * Select **N** on the question if solution contains unique permissions.
    * Select **WebPart** as the client-side component type to be created.

1. The next set of prompts asks for specific information about your web part:

    * Enter **MyFirstGraphWebPart** for the web part name, and then select Enter.
    * Enter **Calling Graph APIs from SharePoint Framework** as the description of the web part, and then select Enter.
    * Accept the default **No JavaScipt web framework** option for the framework, and then select Enter to continue.

    At this point, Yeoman installs the required dependencies and scaffolds the solution files. Creation of the solution might take a few minutes. Yeoman scaffolds the project to include your **MyFirstGraphWebPart** web part as well.

1. Next, enter the following to open the web part project in Visual Studio Code:

    ```shell
    code .
    ```

   ![Solution structure](../../../images/graph-helloworld-solution.png)

## Including Microsoft Graph types for easier TypeScript development

1. In the console, enter the following to install Microsoft Graph typings to  improve development experience

    ```shell
    npm install @microsoft/microsoft-graph-types
    ```

## Updating solution manifest with the needed Microsoft Graph permissions requests

By using SharePoint Framework, you don't needed to explicitly create Azure Active Directory applications to manage your permissions for your solutions, you can rather request the needed permissions in your solution package, and Office 365 tenant administrator can then grant the requested permissions in general for all solutions or specifically for this solution (isolated solution).

> [!NOTE]
> Tenant administrators can also manage the API permissions using PowerShell cmdlets, so there's no specifically a requirement to have the permissions included in the solution package.

In this case, we'll include the solution-specific permissions in the package.

1. Open `package-solution.json` under the **config** folder
1. Update the solution section to include permission grant request as shown in the following code section by using `webApiPermissionRequests` element. In this case we'll access user's emails, so we have requested permissions for the `Mail.Read` scope.

    ```json
    {
      "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/package-solution.schema.json",
      "solution": {
        "name": "graph-apis-client-side-solution",
        "id": "25103ce6-ef10-4369-9d90-24487734555e",
        "version": "1.0.0.0",
        "includeClientSideAssets": true,
        "skipFeatureDeployment": true,
        "isDomainIsolated": false,
        "webApiPermissionRequests": [
          {
            "resource": "Microsoft Graph",
            "scope": "Mail.Read"
          }
        ]
      },
      "paths": {
        "zippedPackage": "solution/graph-apis.sppkg"
      }
    }
    ```

## Updating code to call Microsoft Graph APIs

In this case, we'll slightly adjust the code to call Microsoft Graph API to get access on the latest five emails of the current user.

1. Open **src\webparts\helloWorld\MyFirstGraphWebPartWebPart.ts** for the needed edits on calling Microsoft Graph APIs.
1. Include following entries as an import just below the importing string line in the top of the file

    ```typescript
    import { MSGraphClient } from '@microsoft/sp-http';
    import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';
    ```

1. Update the **render** method as follows. Notice how we're using the `MSGraphClient` object for the Microsoft Graph API calls. This object abstracts the access token handling, so that as a developer, you can concentrate on your business logic.

    ```typescript
    public render(): void {

        this.context.msGraphClientFactory
        .getClient()
        .then((client: MSGraphClient): void => {
            // get information about the current user from the Microsoft Graph
            client
            .api('/me/messages')
            .top(5)
            .orderby("receivedDateTime desc")
            .get((error, messages: any, rawResponse?: any) => {

                this.domElement.innerHTML = `
                <div class="${ styles.myFirstGraphWebPart}">
                <div class="${ styles.container}">
                    <div class="${ styles.row}">
                    <div class="${ styles.column}">
                        <span class="${ styles.title}">Welcome to SharePoint!</span>
                        <p class="${ styles.subTitle}">Using Microsoft Graph API in SharePoint Framework.</p>
                        <div id="spListContainer" />
                    </div>
                    </div>
                </div>
                </div>`;

                // List the latest emails based on what we got from the Graph
                this._renderEmailList(messages.value);

            });
        });
    }
    ```

1. Include also following helper function for email content rendering just below the `render` method. Notice how we're using the `MicrosoftGraph.Message` types to give us better development experience as accessing the API response data.

    ```typescript
    private _renderEmailList(messages: MicrosoftGraph.Message[]): void {

        let html: string = '';
        for (let index = 0; index < messages.length; index++) {
        html += `<p class="${styles.description}">Email ${index + 1} - ${escape(messages[index].subject)}</p>`;
        }

        // Add the emails to the placeholder
        const listContainer: Element = this.domElement.querySelector('#spListContainer');
        listContainer.innerHTML = html;
    }
    ```

## Packaging and deploying your web part to SharePoint

Ensure that your console is activated in the root folder of the solution, which was created.

1. Execute the following commands to build bundle your solution. This executes a release build of your project by using a dynamic label as the host URL for your assets.

    ```shell
    gulp bundle --ship
    ```

1. Execute the following task to package your solution. This creates an updated **graph-apis.sppkg** package on the **sharepoint/solution** folder.

    ```shell
    gulp package-solution --ship
    ```

Next, you need to deploy the package that was generated to the tenant App Catalog.

> [!NOTE]
> If you don't have an app catalog, a SharePoint Online Admin can create one by following the instructions in this guide: [Use the App Catalog to make custom business apps available for your SharePoint Online environment](https://support.office.com/article/use-the-app-catalog-to-make-custom-business-apps-available-for-your-sharepoint-online-environment-0b6ab336-8b83-423f-a06b-bcc52861cba0).

1. Go to your tenant's SharePoint App Catalog.
1. Upload or drag and drop the **graph-apis.sppkg** to the App Catalog.

    ![Upload solution to App Catalog](../../../images/graph-helloworld-app-catalog.png)

    This deploys the client-side solution package. Because this is a full trust client-side solution, SharePoint displays a dialog and asks you to trust the client-side solution to deploy.

    Notice how the **domain** list in the prompt says *SharePoint Online*. This is because the content is either served from the Office 365 CDN or from the App Catalog, depending on the tenant settings.

    Ensure that the **Make this solution available to all sites in the organization** option is selected, so that the web part can be used easily across the tenant.

    Notice the request to go to *API Management Page to approved pending permissions* and the list of required permissions, in this case being `Mail.Read` for Microsoft Graph.

    ![Trust client-side solution deployment](../../../images/graph-helloworld-trust-solution.png)

1. Select **Deploy**.

    Notice that you can see if there's any exceptions or issues in the package by looking the **App Package Error Message** column in the App Catalog.

Now the web part is deployed and is automatically available cross the SharePoint Online sites, it's however important to realize that the web part *won't* work properly until the requested permissions have been approved.

## Approving requested Graph API permissions

1. Move to the SharePoint tenant administrative UIs located at `https://<tenant>-admin.sharepoint.com`
1. Move to **API management** under the **Advance** left menu option to see the currently pending permission requests. Notice that the request for `Mail.Read` permission for in Graph API is pending for approval

    ![API management](../../../images/graph-helloworld-api-admin.png)

1. Select the pending permission row and choose **Approve or reject** from the toolbar

    ![Approve or reject](../../../images/graph-helloworld-approve-menu.png)

1. Review the requested permission in the left panel and choose **Approve**

    ![Approve](../../../images/graph-helloworld-approve.png)


> [!IMPORTANT]
> Account used for granting the requested permissions will need to be a tenant administrator. SharePoint administrator permission is not sufficient as the operation is actually performed towards Azure Active Directory.

Now the requested permissions needed for the web part have been approved and we can test the functionality.

## Using web part in SharePoint

1. Go to a site where you want to test the web part. We did deploy web part using the tenant scoped deployment option, so it will be available on any site.
1. Create a new modern page to the site or edit existing page
1. Use search term `Graph` in the web part picker to find your web part

    ![web part picker](../../../images/graph-helloworld-webpart-picker.png)

1. Choose **MyFirstGraphWebPart** from the list and notice how the web part renders the latest five emails from the current user using information from the Microsoft Graph API

    ![web part picker](../../../images/graph-helloworld-webpart-on-page.png)

## See also

* [Use the MSGraphClient to connect to Microsoft Graph](https://docs.microsoft.com/sharepoint/dev/spfx/use-msgraph)
* [Consume the Microsoft Graph in the SharePoint Framework](https://docs.microsoft.com/sharepoint/dev/spfx/use-aad-tutorial)
* [Graph Explorer](https://developer.microsoft.com/graph/graph-explorer)
* [Get started with Microsoft Graph and JavaScript](https://developer.microsoft.com/graph/get-started/javascript)
