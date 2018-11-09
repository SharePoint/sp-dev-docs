---
title: Building Microsoft Teams Tabs using SharePoint Framework
description: You can build your Microsoft Teams tabs using SharePoint Framework and utilize the tooling
ms.date: 11/08/2018
ms.prod: sharepoint
---

# Building Microsoft Teams Tabs using SharePoint Framework

Starting with SharePoint Framework v1.7, you can build your Microsoft Team tabs using SharePoint Framework tooling and use SharePoint as a host for your solutions.

There are following benefits on using SharePoint Framework as the platform for your Microsoft Teams tabs:

- Development model is similar as for SharePoint Framework web parts
- Technically any web part can be exposed as a tab in the Microsoft
- You have difference scoping options on exposing your custom tab as a web part and tab in your tenant
- Your tab will be executed in the context of the underlaying SharePoint site behind of the specific team. This means that you can take advantage of any SharePoint specific APIs or functionalities in your web part.

> [!IMPORTANT]
> This feature is currently in preview and is subject to change. It is not currently supported for use in production environments. Your feedback and input around this capability is welcome using the [SharePoint Dev Docs issue list](https://github.com/SharePoint/sp-dev-docs/issues).

> [!IMPORTANT]
> There is a known **bug** related on the property configuration, which will be addressed. You cannot change default property values or the web part is not successfully added on the tab. Fix for this issue will be rolling out in upcoming days.

## Development process

You can start developing Microsoft Teams tabs simply by using the `with beta` version of the SharePoint Framework 1.7 packages. High level steps to get started are as follows.

1. Start SharePoint Framework Yeoman generator with the `plusbeta` switch, so that the created solution will use the preview packages.

    ```
        yo @microsoft/sharepoint --plusbeta
    ```

1. Create a solution with a client-side web part 
1. Deploy web part using tenant-scoped deployment option to your SharePoint app catalog
1. Package `manifest.json` located in the `/teams` folder in your solution as a zip file . This file was automatically configured with default settings when your solution was created
1. Deploy your zip file (application) to the Microsoft Teams and start add a new tab in the preferred channel

> [!NOTE]
> You can also follow the detailed steps to get started from the [Building Microsoft Teams tab using SharePoint Framework](web-parts/get-started/using-web-part-as-ms-teams-tab.md) tutorial.

## Deployment options

There are few different options on getting the developed Microsoft Teams tab deployed. As both SharePoint and Microsoft Teams have their own app catalog, deployment requires operations on both services. Visibility of the new functionality can be controlled on the exact deployment mechanism.

Following table shows the deployment options in table style matrix. Top row shows the Microsoft Teams deployment options and first column mapped SharePoint deployment options.

| SharePoint/Teams deployment type | Manifest deployed to Store | Manifest deployed to Teams channel catalog |
|-----------|------|-------------|
| SharePoint tenant-scoped deployment | Solution available in all teams and all SharePoint sites | Solution available in specific team and all SharePoint Sites |
| Site collection app catalog with tenant-scoped option in SharePoint site behind of the Team   | Not an option | Solution is available in the specific site collection and specific team  |
| SharePoint site level deployment                    | Not an option | Solution is available in specific SharePoint site and in specific team |

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