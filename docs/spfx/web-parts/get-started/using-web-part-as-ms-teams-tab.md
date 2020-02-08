---
title: Building Microsoft Teams tab using SharePoint Framework - Tutorial
description: Tutorial on how to build Microsoft Teams tabs using SharePoint Framework. Capability was released to general availability in SharePoint Framework v1.8.
ms.date: 02/08/2020
ms.prod: sharepoint
localization_priority: Priority
---

# Building Microsoft Teams tab using SharePoint Framework - Tutorial

Starting with the SharePoint Framework v1.8, you can also implement your Microsoft Teams tabs using SharePoint Framework. Using SharePoint Framework significantly simplifies Teams tab development process as Teams tabs can be automatically hosted within SharePoint without any need for external services.

Before you start, complete the procedures in the following articles to ensure that you understand the basic flow of creating a custom client-side web part:

* [Build your first web part](build-a-hello-world-web-part.md)
* [Connect your web part to SharePoint](connect-to-sharepoint.md)
* [Deploy your client-side web part to a SharePoint page](provision-sp-assets-from-package.md)

> [!IMPORTANT]
> This lab requires that you are using at least version 1.10 of the SharePoint Framework as used capabilities and framework properties are not available in earlier versions.

<br/>

> [!Video https://www.youtube.com/embed/JoTAC2i-XeU]

<br/>

## Create a Microsoft Teams tab project

1. Create a new project directory in your favorite location:

    ```shell
    md teams-tab
    ```

1. Go to the project directory:

    ```shell
    cd teams-tab
    ```

1. Create a new solution by running the Yeoman SharePoint Framework Generator:

    ```shell
    yo @microsoft/sharepoint
    ```

1. When prompted:

    * Accept the default **teams-tab** as your solution name, and then select Enter.
    * Select **SharePoint Online only (latest)**, and then select Enter.
    * Select **Use the current folder** as the location for the files.
    * Select **y** to ensure that your web part is automatically deployed tenant-wide when it's added to the tenant App Catalog.
    * Select **N** on the question if solution contains unique permissions.  
    * Select **WebPart** as the client-side component type to be created.

1. The next set of prompts asks for specific information about your web part:

    * Enter **MyFirstTeamsTab** for the web part name, and then select Enter.
    * Enter **My first Teams tab** as the description of the web part, and then select Enter. 
    * Accept the default **No JavaScipt web framework** option for the framework, and then select Enter to continue.

    ![Yeoman prompts](../../../images/yeoman-sp-teams-prompts.png)

    At this point, Yeoman installs the required dependencies and scaffolds the solution files. Creation of the solution might take a few minutes. Yeoman scaffolds the project to include your **MyFirstTeamsTab** web part as well.

1. Next, enter the following to open the web part project in Visual Studio Code:

    ```shell
    code .
    ```

Starting with the SharePoint Framework v1.8, scaffolding will also include additional **./teams** folder in the solution structure, with default configuration for your web parts, so that you can get started with Teams tab development as easily as possible.

  ![Solution structure](../../../images/sp-teams-solution-structure.png)

Teams folder contains the following two files:

  * **[componentId]_color.png** - Default small picture for a tab
  * **[componentId]_outline.png** - Default large picture for a tab

These images will be used as icons in Microsoft Teams. You can replace them with custom images, but you'll need to use the same name for ensuring them to get packaged properly with the solution deployment.

## Updating the web part manifest to make it available for Microsoft Teams

Locate the manifest json file for the web part you want to make available to Teams and modify the `supportedHosts` properties to include `"TeamsTab"` as in the following example.

```json
{
  "$schema": "https://developer.microsoft.com/json-schemas/spfx/client-side-web-part-manifest.schema.json",
  "id": "8eb36405-e408-4578-8340-faf16d647d83",
  "alias": "MyFirstTeamsTab",
  "componentType": "WebPart",

  // The "*" signifies that the version should be taken from the package.json
  "version": "*",
  "manifestVersion": 2,

  // If true, the component can only be installed on sites where Custom Script is allowed.
  // Components that allow authors to embed arbitrary script code should set this to true.
  // https://support.office.com/article/Turn-scripting-capabilities-on-or-off-1f2c515f-5d7e-448a-9fd7-835da935584f
  "requiresCustomScript": false,
  "supportedHosts": ["SharePointWebPart", "TeamsTab"],

  "preconfiguredEntries": [{
    "groupId": "5c03119e-3074-46fd-976b-c60198311f70", // Other
    "group": { "default": "Other" },
    "title": { "default": "MyFirstTeamsTab" },
    "description": { "default": "MyFirstTeamsTab description" },
    "officeFabricIconFontName": "Page",
    "properties": {
      "description": "MyFirstTeamsTab"
    }
  }]
}
```

> [!NOTE]
> Starting from the SharePoint Framework 1.10 version, you can also expose SharePoint Framework web parts as personal Microsoft Teams apps. This can be controlled by including `"TeamsPersonalApp"` in the `supportedHosts` value.

## Updating code to be aware of the Microsoft Teams context

Steps to make the code aware fo the Microsoft Teams context has been simplified with the SharePoint Framework v1.10 release with the introduction of the `this.context.sdks.microsoftTeams` property, which will be taken advantage on the following steps.

1. Open **src\webparts\helloWorld\MyFirstTeamsTabWebPart.ts** for the needed edits on making our solution aware of the Microsoft Teams context, if it's used as a tab.

2. Update the **render** method as follows. Notice how we are rendering different content dependent if the code is rendered as a tab in Microsoft Team or as a web part in SharePoint. We can detect if solution is hosted by Microsoft Teams by checking the `this.context.sdks.microsoftTeams` property.

    ```typescript
    public render(): void {

      let title: string = '';
      let subTitle: string = '';
      let siteTabTitle: string = '';

      if (this.context.sdks.microsoftTeams) {
        // We have teams context for the web part
        title = "Welcome to Teams!";
        subTitle = "Building custom enterprise tabs for your business.";
        siteTabTitle = "We are in the context of following Team: " + this.context.sdks.microsoftTeams.context.teamName;
      }
      else
      {
        // We are rendered in normal SharePoint context
        title = "Welcome to SharePoint!";
        subTitle = "Customize SharePoint experiences using Web Parts.";
        siteTabTitle = "We are in the context of following site: " + this.context.pageContext.web.title;
      }

      this.domElement.innerHTML = `
        <div class="${ styles.myFirstTeamsTab }">
          <div class="${ styles.container }">
            <div class="${ styles.row }">
              <div class="${ styles.column }">
                <span class="${ styles.title }">${title}</span>
                <p class="${ styles.subTitle }">${subTitle}</p>
                <p class="${ styles.description }">${siteTabTitle}</p>
                <p class="${ styles.description }">Description property value - ${escape(this.properties.description)}</p>
                <a href="https://aka.ms/spfx" class="${ styles.button }">
                  <span class="${ styles.label }">Learn more</span>
                </a>
              </div>
            </div>
          </div>
        </div>`;
    }
    ```

    > [!NOTE]
    > You can find full description of the information available through Microsoft Teams context for Microsoft Teams tabs from the [Microsoft Teams developer documentation](https://docs.microsoft.com/microsoftteams/platform/concepts/tabs/tabs-context).

## Packaging and deploying your web part to SharePoint

Ensure that your console is activated in the root folder of the solution, which was created.

1. Execute the following commands to build bundle your solution. This executes a release build of your project by using a dynamic label as the host URL for your assets.

    ```shell
    gulp bundle --ship
    ```

1. Execute the following task to package your solution. This creates an updated **teams-tab-webpart.sppkg** package on the **sharepoint/solution** folder.

    ```shell
    gulp package-solution --ship
    ```

Next, you need to deploy the package that was generated to the tenant App Catalog.

> [!NOTE]
> If you do not have an app catalog, a SharePoint Online Admin can create one by following the instructions in this guide: [Use the App Catalog to make custom business apps available for your SharePoint Online environment](https://support.office.com/article/use-the-app-catalog-to-make-custom-business-apps-available-for-your-sharepoint-online-environment-0b6ab336-8b83-423f-a06b-bcc52861cba0).

1. Go to your tenant's SharePoint App Catalog.

1. Upload or drag and drop the **teams-tab-webpart.sppkg** to the App Catalog.

    ![Upload solution to App Catalog](../../../images/sp-teams-solution-upload-catalog.png)

    This deploys the client-side solution package. Because this is a full trust client-side solution, SharePoint displays a dialog and asks you to trust the client-side solution to deploy.

    Notice how the **domain** list in the prompt says *SharePoint Online*. This is because the content is either served from the Office 365 CDN or from the App Catalog, depending on the tenant settings.

    Ensure that the **Make this solution available to all sites in the organization** option is selected, so that the web part can be used from the Microsoft Teams side.

    ![Trust client-side solution deployment](../../../images/sp-teams-upload-solution-deploy.png)

1. Select **Deploy**.

    Notice that you can see if there's any exceptions or issues in the package by looking the **App Package Error Message** column in the App Catalog.

Now the web part is deployed and is automatically available cross the SharePoint Online sites.

> [!NOTE]
> In this tutorial case, we are using tenant wide deployment option of the SharePoint Framework solution. This will ensure that the development and usage experience is as easy as possible. You could also deploy the solution as site scope, but in that case you'd need to ensure that the solution is deployed on the SharePoint site behind of the Microsoft Teams, before you can use it.

## Making the web part available in Microsoft Teams

In order to make your web part available in Microsoft Teams, you will have synchronize your solution with teams.

> [!NOTE]
> In this tutorial case, we are using the automatic deployment option for the solution from the SharePoint app catalog. You can also perform these steps manually, if you want to provide alternative settings for your solutions. See more from [Create Microsoft Teams manifest manually for a web part and deploy it to Microsoft Teams](../guidance/creating-team-manifest-manually-for-webpart.md).

1. Select the **teams-tab-client-side-solution** package in the SharePoint tenant App Catalog and click the **Sync to Teams** button at in the ribbon at the **Files** tab.

   ![Sync to Teams button in ribbon](../../../images/sp-teams-sync-to-teams-button.png)

1. Confirm that you can see the status message on the top-right corner.

    ![Sync to Teams button in ribbon](../../../images/teams-successfully-synced.png)

    > [!IMPORTANT]
    > If the synchronization is not successful, please ensure that you have deleted possible previous version from the Microsoft Team App Catalog. This is the most common reason why the synchronization would fail as existing solution is not overridden currently.

1. Move to the Microsoft Teams side and check the App Catalog status by clicking **Apps** from the left navigation

    ![Channel activated](../../../images/sp-teams-apps-in-teams.png)

1. Wait until your tenant-specific apps selection is visible - *this can take few minutes based on the caching*.

    ![Channel activated](../../../images/sp-teams-apps-for-tenant.png)

1. Confirm that you can see **MyFirstTeamsTab** app in the catalog - *this can take few minutes based on the caching*.

    ![Channel activated](../../../images/sp-teams-my-first-in-catalog.png)

1. Move to a channel in a team where you want to test the solution. In the below picture, we have activated **General** channel in **Team**

    ![Channel activated](../../../images/sp-teams-channel-activated.png)

1. Select `+` to add a new tab on the channel
1. Select your custom tab called **MyFirstTeamTab** in the list. You can use the search capability if needed to find your custom tab

    ![Add a tab](../../../images/sp-teams-add-a-tab.png)

1. Click **Add** to confirm the tab to be selected
1. Click **Save** to confirm the tab to be installed on the channel

    ![Add a tab](../../../images/sp-teams-my-first-save-to-channel.png)

Your custom tab has been added on the Microsoft Teams channel and you can see how the code is reacting that it's in Microsoft Teams context. Theme of the web part is by default coming from the underlying SharePoint site.

![Custom tab added](../../../images/sp-teams-custom-tab-added.png)

> [!NOTE]
> You can control the initial configuration option visibility from the web part manifest by setting `canUpdateConfiguration` property as `false`. By default this setting is `true` which is taken into account when the Teams manifest is automatically created as part of the *Sync* process.

## Updating your app package

When you make changes to your app and create a new package, you might encounter an error when clicking "sync to teams".

A notification "Failed to sync solution to teams" might appear on the top right of your page.

If this happens follow these steps to delete your app from Microsoft Teams and then try to sync it again:

1. Open Microsoft Teams
1. When viewing your team channel, click + to "Add a tab"
1. Click the "More apps" link at the top
1. Find your app in the list, and click on the "..." menu
1. Click "Delete" to remove the app from Microsoft Teams

You should now be able to sync your new version to Microsoft Teams.

## See also

* [The Microsoft Teams developer platform](https://docs.microsoft.com/microsoftteams/platform/overview)
