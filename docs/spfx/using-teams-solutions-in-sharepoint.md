---
title: Hosting Microsoft Teams Tabs as a solutions in SharePoint
description: You can install and use your Microsoft Teams tabs also in SharePoint
ms.date: 04/13/2019
ms.prod: sharepoint
localization_priority: Normal
---

# Hosting Microsoft Teams Tabs as a solutions in SharePoint

Starting with the SharePoint Framework v1.7, you can also surface existing Microsoft Teams tab implementations in the SharePoint pages. These applications are surfaced using a web part style experience where the application is surfaced using IFrame technique.

> [!IMPORTANT]
> This feature is currently in preview and is subject to change. It is not currently supported for use in production environments. Your feedback and input around this capability is welcome using the [SharePoint Dev Docs issue list](https://github.com/SharePoint/sp-dev-docs/issues).

You can activate existing Microsoft Teams tab in SharePoint using following steps.

1. Deploy Microsoft Teams zip file containing the manifest.json to the SharePoint tenant app catalog
2. Approve the deployment in the app catalog

This will result the application to be exposed in the web part picker for modern pages. 

> [!IMPORTANT]
> Static tabs are not supported to be rendered in the context of SharePoint. This capability is in the roadmap and is planned to be supported in future.

> [!NOTE]
> You read more details around the Microsoft Teams tab applications from the [Microsoft Teams developer documentation](https://docs.microsoft.com/en-us/microsoftteams/platform/concepts/tabs/tabs-overview).
