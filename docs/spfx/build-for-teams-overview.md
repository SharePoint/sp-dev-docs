---
title: Build for Microsoft Teams using SharePoint Framework
description: By building Microsoft Teams applications using SharePoint Framework, you can save costs on hosting infrastructure and simplify the deployment and operation process.
ms.date: 06/15/2020
ms.service: sharepoint
ms.subservice: sharepoint-framework
ms.localizationpriority: medium
---

# Build for Microsoft Teams using SharePoint Framework

You can extend Microsoft Teams with additional functionality by integrating your applications. This allows you expose functionality in the context of your users’ work helping them be more productive. By [building Microsoft Teams applications using SharePoint Framework](integrate-with-teams-introduction.md), you can save costs on hosting infrastructure and simplify the deployment and operation process.

> [!TIP]
> To see how to use the different concepts described in this article, see the sample [Leads application](https://github.com/pnp/sp-dev-solutions/tree/master/solutions/LeadsLOBSolution) on GitHub.

## Why build for Microsoft Teams using SharePoint Framework

There are two main benefits for using the SharePoint Framework to build for Microsoft Teams: simplified hosting and ease of integration with APIs secured with Azure Active Directory.

### Automatic solution hosting

When you build solutions for Microsoft Teams, you need to host them somewhere. Typically, it means creating and monitoring an Azure App Service. It also means that you now have extra infrastructure for which you have to pay and continuously monitor.

When you build Teams tabs and personal apps using SharePoint Framework, your solutions are automatically hosted for you in SharePoint. You don’t need any additional resources in Microsoft Azure. This significantly simplifies the deployment process and operations and lowers the overall cost of your solution.

Additionally, if you have Office 365 CDN enabled, assets for your Teams tabs and personal apps will be served from the CDN offering your users significantly better experience without any extra cost or configuration.

### Use existing authentication features

Your Microsoft Teams solutions typically need to connect to other services exposed via APIs. These APIs are secured and require you to authenticate before you can use them. When you build your Microsoft Teams application yourself, you need to ensure that your application securely connects to APIs yourself.

SharePoint Framework has integrated support for requesting and managing API permission access. Additionally, it contains ready-to-use libraries for communicating with the Microsoft Graph and other APIs secured with Azure Active Directory. Using these classes allows you to focus on building your application without having to worry about authentication.

### Increase your reach

Organizations use different tools for different scenarios. While they implement some processes on top of Microsoft Teams, they could implement others in SharePoint. By building your applications using SharePoint Framework you can build your solution once and use it for the different scenarios without having to maintain multiple copies of your code.
