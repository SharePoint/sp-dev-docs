---
title: Considerations for building for Microsoft Teams using SharePoint Framework
description: There are a number of things that you should take into account when building for Microsoft Teams using SharePoint Framework
ms.date: 06/15/2020
ms.prod: sharepoint
localization_priority: Normal
---

# Considerations for building for Microsoft Teams using SharePoint Framework

While using SharePoint Framework to build for Microsoft Teams offers you benefits, there are some considerations that you should take into account before building your next application.

> [!TIP]
> To see how to use the different concepts described in this article, see the sample [Leads application](https://github.com/pnp/sp-dev-solutions/tree/master/solutions/LeadsLOBSolution) on GitHub.

## Globally deploy the SharePoint Framework solution package

When using SharePoint Framework to build web parts that will be exposed in Microsoft Teams you should allow the solution to be globally deployed. This setting is controlled when creating the project but can also be adjusted later in the **package-solution.json** file by setting the `skipFeatureDeployment` property to `true`.

When the solution is globally deployed in your tenant, users can add tabs to any channel and install personal apps.

## Expose existing application in Microsoft Teams

If you have an existing web application, most likely you will not migrate it to SharePoint Framework. Since the application is already working, the easiest way to expose it in Microsoft Teams is by [creating a manifest for it](https://docs.microsoft.com/microsoftteams/platform/tabs/what-are-tabs).

Depending how your application is built, you might need to ensure that users can correctly sign into your application and that the application can securely access its APIs. When users work with your application in Microsoft Teams, the application loads inside an iframe and your authentication implementation needs to support this properly.

## Support for Microsoft Teams tabs and personal apps

SharePoint Framework is meant to extend UI of the services it’s being used with. As such it supports building Microsoft Teams tabs and personal apps. If you need any non-UI customizations like [bots](https://docs.microsoft.com/microsoftteams/platform/bots/what-are-bots) or [messaging extensions](https://docs.microsoft.com/microsoftteams/platform/messaging-extensions/what-are-messaging-extensions), you will need to build them separately outside of the SharePoint Framework solution.

## Client-side code only

SharePoint Framework solutions consist only of client-side code. If your solution requires server-side code for example to run long-running operations, scheduled processes or connecting to other systems that don’t support the OAuth implicit flow, you would need to build this functionality separately and expose it through an API secured with Azure Active Directory. Your SharePoint Framework solution would then [securely connect to this API on behalf of the current user](use-aadhttpclient.md).
