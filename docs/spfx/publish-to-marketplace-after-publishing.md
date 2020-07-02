---
title: Maintain and support your published app
description: Tips to maintain and support your SharePoint Framework app after publishing it to the marketplace
ms.date: 06/25/2020
ms.prod: sharepoint
localization_priority: Priority
---

# Maintain and support your published app

Publishing the application to the marketplace is just the first step in helping users solve their business problem. Following sections contain some tips that you should consider after publishing your application to the marketplace.

## Install applications from the marketplace in the tenant app catalog

SharePoint Online allows you to create a tenant app catalog where you centrally manage applications available in your organization. Additionally, you can create site collection app catalogs, where you can deploy applications to specific sites.

Applications that you acquire from the marketplace, you can install only in tenant app catalogs. After installing the application, you can decide whether you want to deploy it globally and make it available to all sites in your tenant or if you want to deploy it only to specific sites.

For more information about managing SharePoint Framework solution in the app catalog visit: [https://docs.microsoft.com/sharepoint/use-app-catalog](https://docs.microsoft.com/sharepoint/use-app-catalog) and [https://docs.microsoft.com/sharepoint/dev/general-development/site-collection-app-catalog](https://docs.microsoft.com/sharepoint/dev/general-development/site-collection-app-catalog).

## Permissions required to install applications from the marketplace

By default, only tenant administrators can install applications from the marketplace. They can however choose to delegate the responsibility to others in your organization by granting them access to the tenant app catalog.

SharePoint Framework applications execute on behalf of the current user and can do whatever the current user can do. Because of this, only tenant app catalog administrators can install applications from the marketplace. Users who are not app catalog administrators can request a specific application to be installed by the app catalog administrator, but they cannot install the application themselves.

## Notify users of new versions

As you update your application, you should notify your users when an updated version is available. The marketplace does not offer any version checking mechanism and you should implement it your application so that notifications are meaningful and as unobtrusive as possible. In your code you can for example call a custom API that you own to compare the current version of the application with the latest version available.

Tenant app catalog administrators can update applications acquired from the marketplace directly from the app catalog, by selecting the application in the app catalog and from the ribbon choosing the **Upgrade Store App** option. When the upgrade succeeds, the latest version will be automatically visible to users in all sites where the application has been installed.

## Applications listed in the SharePoint category

All SharePoint Framework applications published in the marketplace are listed in the **SharePoint** category. At this moment, it is not possible to specify a custom category. Also, even if you configured web parts in your application to be exposed in Microsoft Teams, the application will still be listed in the **SharePoint** category.

