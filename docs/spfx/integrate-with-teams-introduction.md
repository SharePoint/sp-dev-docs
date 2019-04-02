---
title: Building Microsoft Teams Tabs using SharePoint Framework
description: You can build your Microsoft Teams tabs using SharePoint Framework and utilize the tooling
ms.date: 03/14/2019
ms.prod: sharepoint
---

# Building Microsoft Teams Tabs using SharePoint Framework

Starting with SharePoint Framework v1.8, you can build tabs for Microsoft Teams using SharePoint Framework tooling and use SharePoint as a host for your solutions

There are following benefits on using SharePoint Framework as the platform for your Microsoft Teams tabs:

- The development model is similar to SharePoint Framework web parts
- Technically any web part can be exposed as a tab in Microsoft Teams
- You have difference scoping options on exposing your custom tab as a web part and tab in your tenant
- Your tab will be executed in the context of the underlaying SharePoint site behind of the specific team. This means that you can take advantage of any SharePoint specific APIs or functionalities in your web part.


## Development process

> [!IMPORTANT]
> **Sync to Teams** functionality does not currently work and will be fixed within upcoming days. Please refer to [Creating a team manifest manually for a web part](./web-parts/guidance/creating-team-manifest-manually-for-webpart.md) to proceed for now and follow the steps in the 'Alternative deployment options' section of this article.

You can start developing Microsoft Teams tabs simply by using the SharePoint Framework 1.8 or later packages. High level steps to get started are as follows.

1. Start the SharePoint Framework Yeoman generator

    ```
    yo @microsoft/sharepoint
    ```

1. Create a solution with a client-side web part 
1. Add ```"TeamsTab"``` to the ```supportedHosts``` property of the web part manifest:

    ```json
    "supportedHosts": ["SharePointWebPart","TeamsTab"],
    ```

1. Deploy the web part using tenant-scoped deployment option to your SharePoint app catalog
1. Synchronize your solution with teams by clicking the sync button in the ribbon with the solution highlighted

    ![Sync To Teams](../images/using-web-part-as-ms-teams-tab-sync-to-team.png)

> [!NOTE]
> You can also follow the detailed steps to get started from the [Building Microsoft Teams tab using SharePoint Framework](web-parts/get-started/using-web-part-as-ms-teams-tab.md) tutorial.

## Deployment options

There are few different options on getting the developed Microsoft Teams tab deployed. As both SharePoint and Microsoft Teams have their own app catalog, deployment requires operations on both services. Visibility of the new functionality can be controlled by the deployment steps taken.

If you want to make a solution available to all teams in your organization, the easiest is to use the steps above.

If you however want to make a solution only available to a specific team you will have to step specific manual steps as described below.

### Tenant deployment
The easiest way to deploy a SharePoint Framework solution is by following the steps above: you synchronize your solution with the teams app catalog by means of clicking the ribbon button. This will make your solution available for all users in your tenant and Microsoft Teams teams.

### Alternative deployment options

There is an alternative way to deploy your solution which will for instance allow you to make a solution available only to one specific team in your tenant. Please refer to [Create Microsoft Teams manifest manually for a web part and deploy it to Microsoft Teams](./web-parts/guidance/creating-team-manifest-manually-for-webpart.md) how to create the manifest.

1. Locate the Teams folder in your project folder:

    ![Solution structure](../images/sp-teams-solution-structure.png)

1. Notice that there are 2 image files in there. Add the manifest file you created as described in [Create Microsoft Teams manifest manually for a web part and deploy it to Microsoft Teams](./web-parts/guidance/creating-team-manifest-manually-for-webpart.md) to this folder and call it ```manifest.json```. 

1. In the JSON above we inserted some placeholders. Replace them as follows (notice that placeholders can occur several times):

    | Placeholder | Value |
    |--------------|-------|
    | [YourWebPartTitle] | Enter the name of your package. For instance 'Leads'. |
    | [YourWebPartId] | Replace this with the id/guid of your web part. You can find this id in the manifest of the webpart. |
    | [YourDescription] | Replace this with the description of your solution. |

1. Build your solution the normal way using ```gulp bundle --ship``` and ```gulp package-solution --ship```
1. After you added the manifest to the folder, zip the -contents- of the folder into a zip file. This means that the zip file should only contain the manifest.json and the 2 images.
1. Add your solution to the app catalog and make sure to check ```Make this solution available to all sites in the organization```

### Turn on side loading of external apps in Teams

In order to upload an app for a specific team, you will have to enable side loading. The following configuration steps must be performed only **once** in a tenant.

1. Navigate to the Microsoft 365 Admin center by selecting **Admin** from the app launcher.

    ![Moving to admin UI](../images/sp-teams-move-to-admin.png)

1. Choose **Settings** and **Services & add-ins** from the left menu

1. Select **Microsoft Teams** from the list of services you want to manage

    ![Moving to admin UI](../images/sp-teams-admin-select-teams.png)

1. Extend the **Apps** section under Tenant-wide settings

    ![Moving to admin UI](../images/sp-teams-admin-extend-apps.png)

1. Ensure that **Allow sideloading of external apps** setting is enabled

    ![Moving to admin UI](../images/sp-teams-admin-allow-side-loading.png)

1. Click **Save**.

    > [!NOTE]
    > The side loading configuation to be done only once in a tenant which you are using. More content on preparing your Office 365 tenant for Microsoft Teams development from the [Microsoft Teams developer documentation](https://docs.microsoft.com/en-us/microsoftteams/platform/get-started/get-started-tenant#turn-on-microsoft-teams-for-your-organization).

1. Move to your Microsoft Teams instance by selecting **Teams** in the app launcher.

    ![Zip file in explorer](../images/sp-teams-move-to-teams.png)

1. Choose a Team which you want to use for testing the capability and select **Manage team** from the `...` menu.

    ![Manage Team](../images/sp-teams-manage-team.png)

1. Move to **Apps** tab

1. Choose **Upload a custom app** from the bottom right corner

    > [!NOTE]
    > If this setting is not available, side loading is not enabled in the tenant which you are using. Double check the settings from the tenant admin UIs.

1. Upload the zip file your created earlier from the **Teams** folder under your newly created solution and ensure that it's properly visible in the list of Apps. Notice how the custom image is visible with the description of the solution.

    ![Manage Team](../images/sp-teams-app-uploaded.png)

1. Move to a channel in the Team where you just uploaded the solution. In below picture we have activated the **General** channel in **Team**

    ![Channel activated](../images/sp-teams-channel-activated.png)

1. Click `+` to add a new tab on the channel

1. Click your custom Tab called **MyFirstTeamTab** in the list

    ![Add a tab](../images/sp-teams-add-a-tab.png)

1. Notice how you can parametrize the tab instance based on the exposed properties. Click **Save**

    ![Add a tab](../images/sp-teams-configure-tab.png)


See following resources for additional details around the different options in both systems:

- [Upload an app package to Microsoft Teams](https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/apps/apps-upload)
- [Tenant-scoped solution deployment for SharePoint Framework solutions](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/tenant-scoped-deployment)

## Detecting if web part is in Teams context

Page context in a web part has by default a reference to the Teams JavaScript SDK, so that you can easily get access on the Teams context when your web part is rendered as a tab.

```javascript
    this.context.microsoftTeams
```

> [!NOTE]
> See more information around th Microsoft Teams tab context from the [Microsoft Teams development documentation](https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/tabs/tabs-context?view=msteams-client-js-latest).

## See also

- [Building Microsoft Teams tab using SharePoint Framework - Tutorial](web-parts/get-started/using-web-part-as-ms-teams-tab.md)
