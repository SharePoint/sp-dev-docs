---
title: Deployment options for SharePoint Framework solutions for Microsoft Teams
description: Learn what options are available to deploy SharePoint Framework solutions for Microsoft Teams
ms.date: 07/20/2021
ms.prod: sharepoint
ms.localizationpriority: high
---
# Deployment options for SharePoint Framework solutions for Microsoft Teams

Developers have multiple options when deploying SharePoint Framework (SPFx) solutions for use within Microsoft Teams. This article explains the options supported in SharePoint Online.

> [!NOTE]
> Prior to January 2021, SharePoint Online only supported one option: when a qualifying SPFx solution was uploaded to the SharePoint tenant app catalog, the **Sync To Teams** button in the tenant app catalog's ribbon.

SharePoint Online supports two options for deploying SPFx solutions to the Microsoft Teams app store:

1. **[Automatically create the Microsoft Teams app manifest and package](#automatically-create-the-microsoft-teams-app-manifest-and-package)**
1. **[Use the developer-provided Microsoft Teams app manifest & package](#developer-provided-microsoft-teams-app-manifest--package)**

## Automatically create the Microsoft Teams app manifest and package

This capability is ideal when you have a simple implementation to expose automatically in Microsoft Teams.

In this scenario, when an SPFx solution is uploaded to the SharePoint Online tenant app catalog, if the solution contains components for Microsoft Teams, the **Sync to Teams** button in the ribbon is enabled.

:::image type="content" source="../images/sp-teams-sync-to-teams-button.png" alt-text="Sync to Teams":::

This button will start the following process in SharePoint Online:

1. SharePoint will dynamically create the Microsoft Teams app manifest file
1. SharePoint will dynamically create the Microsoft Teams app package
1. SharePoint will deploy the generated Microsoft Teams app package to the tenant's Microsoft Teams app store

When SharePoint creates the app manifest, it will use values from the SPFx solution in generating some names. The following table lists the properties in the Microsoft Teams app manifest file and what values they are set to.

> [!NOTE]
> Refer to the following link in the Microsoft Teams documentation for more detail on the app manifest: [Manifest schema for Microsoft Teams](/microsoftteams/platform/resources/schema/manifest-schema).

| manifest.json property |  Property in SPFx component manifest  |
| ---------------------- | ------------------------------------- |
| `packageName`          | `alias`                               |
| `id`                   | `id`                                  |
| `name.short`           | `preconfiguredEntries[0].title`       |
| `description.short`    | `preconfiguredEntries[0].description` |
| `description.long`     | `preconfiguredEntries[0].description` |

> [!NOTE]
> The component manifest is pulled from the component's manifest (**./src/webparts/../\*.manifest.json**).

If a SPFx solution contains multiple web parts designated for use in Microsoft Teams, SharePoint Online will repeat the above process for each of them.

## Developer-provided Microsoft Teams app manifest & package

When you need more control over the Microsoft Teams app manifest or app package, you can create your own package. In this case, when an administrator selects the **Sync to Teams** button, SharePoint Online will look for the following file in the **\*.sppkg** file: **./teams/TeamsSPFxApp.zip**.

If this file is present, SharePoint Online will deploy it to the tenant's Microsoft Teams app store instead of dynamically creating it. This option gives developers full control over the Microsoft Teams app manifest & app package.

This option is ideal for the following scenarios:

- Developers want to have full control over the Microsoft Teams app manifest contents
- Complex Microsoft Teams scenarios, like specifying bots, meeting apps, etc
- Specify the ID, name & description of the Microsoft Teams app when the SPFx solution contains more than one component. For example, if a SPFx solution contains multiple web parts that can be used as tabs in Microsoft Teams, the automatic generation of the manifest will select one of the two components to use as the Microsoft Teams' app ID, name & description.

To use your own Microsoft Teams app manifest & app package instead of letting SharePoint Online dynamically create it, do the following:

1. Create a Microsoft Teams app manifest per the Microsoft Teams documentation:
    - [Microsoft Teams: Create an app package for your Microsoft Teams app](/microsoftteams/platform/concepts/build-and-test/apps-package)
    - [Microsoft Teams: Manifest schema for Microsoft Teams](/microsoftteams/platform/resources/schema/manifest-schema)
1. Create the Microsoft Teams app package named **TeamsSPFxApp.zip** by compressing the contents of the **./teams** folder.

    > [!IMPORTANT]
    > Don't compress the folder, instead compress the contents of the folder. If you ZIP the folder, it will a top-level subfolder to the resulting ZIP file which isn't a valid app package in Microsoft Teams.

1. Save the **TeamsSPFxApp.zip** in the SPFx solution's **./src/teams** folder.
1. Create the SPFx package the same way you would with a regular SPFx solution, using **gulp package-solution**. It will include the custom Microsoft Teams app package in the **\*.sppkg**.

### Dynamically reference the underlying SharePoint site URLs

The Microsoft Teams app manifest must point to the deployed hosting location of the SPFx components. However, these URLs are not known at the time the Microsoft Teams app manifest or app package is created.

Therefore, when you specify the app package in this deployment option, you should use the following strings that will be replaced at runtime by Microsoft Teams:

- `{teamSiteDomain}`: the SharePoint Online tenant URL where the SPFx solution is deployed and installed
- `{teamSitePath}`: the path to the SharePoint site where the SPFx components were installed
- `{locale}`: the current locale of the Microsoft Teams client

When using a web part in a custom Microsoft Teams solution, you can use these strings to define the URL of the page that will load the web part. For example, use the following table as a guide for creating the URL of web parts used in Microsoft Teams apps:

> [!IMPORTANT]
> In the following examples, it's assumed the SPFx component's ID is `{{SPFX_COMPONENT_ID}}`. Make sure to replace this value with the component ID for your web part. This value is not dynamically set by SharePoint or Microsoft Teams: **it is the developer's responsibility to set this value**.

| Microsoft Teams component |     Microsoft Teams app manifest property     |                                                                                             Microsoft Teams app manifest property                                                                                             |
| ------------------------- | --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Personal tab              | `staticTabs[..].contentUrl`                   | `https://{teamSiteDomain}/_layouts/15/TeamsLogon.aspx?SPFX=true&dest=/_layouts/15/teamshostedapp.aspx%3Fteams%26personal%26componentId={{SPFX_COMPONENT_ID}}%26forceLocale={locale}`                                          |
| Channel/group chat tab    | `configurableTabs[..].configurationUrl`       | `https://{teamSiteDomain}{teamSitePath}/_layouts/15/TeamsLogon.aspx?SPFX=true&dest={teamSitePath}/_layouts/15/teamshostedapp.aspx%3FopenPropertyPane=true%26teams%26componentId={{SPFX_COMPONENT_ID}}%26forceLocale={locale}` |
| Messaging extension       | `composeExtensions.commands[..].taskInfo.url` | `https://{teamSiteDomain}/_layouts/15/TeamsLogon.aspx?SPFX=true&dest=/_layouts/15/teamstaskhostedapp.aspx%3Fteams%26personal%26componentId={{SPFX_COMPONENT_ID}}%26forceLocale={locale}`                                      |
