---
title: Tenant-scoped solution deployment for SharePoint Framework solutions
description: Configure your SharePoint Framework components to be immediately available across the tenant when the solution package is installed to the tenant app catalog.
ms.date: 10/25/2021
ms.localizationpriority: high
---
# Tenant-scoped solution deployment for SharePoint Framework solutions

You can configure your SharePoint Framework (SPFx) components to be immediately available across the tenant when the solution package is installed to the tenant app catalog. This can be configured by using the `skipFeatureDeployment` attribute in the **./config/package-solution.json** file.

When the solution has this attribute enabled, the tenant administrator is provided the option to enable the solution to be available automatically across all site collections and sites in the tenant when the solution package is installed to the tenant app catalog.

You can also see the tenant-wide deployment option demonstrated by watching the following video on the Microsoft 365 Platform Communtiy (PnP) YouTube Channel:

> [!Video https://www.youtube.com/embed/pemHOZCSwZI]

> [!NOTE]
> You have to update to the latest SharePoint Framework Yeoman template version to be able to use this capability. You can update your global installation by executing **npm install -g @microsoft/generator-sharepoint**.
>
> Tenant-wide deployment is released in SPFx version 1.4 and can be used when developing webparts that will be deployed on SharePoint 2019 and SharePoint Online. This deployment option is not available for SharePoint 2016 Feature Pack 2 since it only supports SPFx 1.1.
>
> If you are utilizing a SPFx webpart older than 1.4 you can upgrade with instructions via the [CLI for Microsoft 365](https://aka.ms/o365cli)

## Solution-specific requirements

When this option is used, any feature framework definitions in the SharePoint Framework solution are ignored. If the solution contains feature framework definitions, for example, for creating a custom list, you shouldn't use this solution-specific option.

For more information, see [Provision SharePoint assets with your solution package](./toolchain/provision-sharepoint-assets.md).

> [!NOTE]
> Solutions that are configured to be automatically deployed across tenants are not visible in the add-an-app capability at the site level.

## Configure solution to be available across the tenant

The SharePoint Framework Yeoman template asks a specific question related to this option. This question impacts directly on the `skipFeatureDeployment` attribute in the **package-solution.json** file.

![Yeoman question around tenant deployed option](../images/tenant-deploy-yeoman.png)

In following example configuration, `skipFeatureDeployment` is set to `true`, which indicates that the solution can be centrally deployed across the tenant.

```json
{
  "solution": {
    "name": "tenant-deploy-client-side-solution",
    "id": "dd4feca4-6f7e-47f1-a0e2-97de8890e3fa",
    "version": "1.0.0.0",
    "skipFeatureDeployment": true,
    "features": [
      {
        "title": "Application Extension - Deployment of custom action.",
        "description": "Deploys a custom action with ClientSideComponentId association",
        "id": "54f0dc0e-c190-439d-933b-2dd2809ed3c3",
        "version": "1.0.0.0",
        "assets": {
          "elementManifests": [
            "elements.xml",
            "ClientSideInstance.xml"
          ]
        }
      }
    ]
  },
  "paths": {
    "zippedPackage": "solution/tenant-deploy-true.sppkg"
  }
}
```

### Approving tenant-wide deployment in app catalog

When the solution with the `skipFeatureDeployment` attribute set to `true` is deployed to the tenant app catalog, the administrator is given an option to configure the solution to be deployed centrally across the tenant.

By default, the **Enable this app and add it to all sites** check box is selected and components in the solutions are automatically visible and available across the tenant.

![The "Enable this app and add it to all sites" setting is visible when solution is deployed to app catalog](../images/spfx-add-to-all-sites.png)

Notice that because the solution and site-specific upgrade actions are only available when you use the feature framework, there's no specific upgrade option for the centrally deployed solutions. These solutions can be updated by updating the solution-specific assets in the CDN and by updating and deploying the package in the app catalog. This automatically updates all existing component instances across the tenant to use the latest component assets, such as JavaScript files and updated CSS files.

> [!WARNING]
> For solution packages containing site extension(s), selecting the **Enable this app and add it to all sites** check box is only required to activate the site extension(s) initially. When updating existing solution packages, selecting the check box during deployment may create duplicate entries in the  **Tenant Wide Extension** list.

## Client-side web part visibility on SharePoint sites

Web parts included in solutions that have been centrally deployed are immediately visible in the web part picker in both classic and modern pages.

## Impact of skipFeatureDeployment setting with Extensions

[SharePoint Framework Extensions](./extensions/overview-extensions.md) are immediately available to be used on SharePoint sites. This means that they can be associated with `ClientSideComponentId` properties in the specific SharePoint elements, such as **fields** and **user custom actions**.

Additionally, if an administrator selects the **Enable this app and add it to all sites** checkbox during deployment, automations in the solution package may create entries in the **Tenant Wide Extensions** list on the app catalog. Entries in this list manage tenant-wide activation of site extensions. The automations are described by the **ClientSideInstance.xml** file as referenced in **./config/package-solution.json**.

For more information, see [Tenant Wide Deployment of SharePoint Framework Extensions](./extensions/basics/tenant-wide-deployment-extensions.md).

## See also

- [Overview of the SharePoint Framework](sharepoint-framework-overview.md)
