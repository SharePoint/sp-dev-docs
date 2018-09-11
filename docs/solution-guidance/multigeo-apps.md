---
title: Manage apps and add-ins in a Multi-Geo tenant
description: In a Multi-Geo tenant, you have an app catalog per geo location, which is something to consider if you want to deploy your apps across all geo locations.
ms.date: 4/27/2018
---

# Manage apps and add-ins in a Multi-Geo tenant

> [!IMPORTANT] 
> OneDrive for Business Multi-Geo is available, SharePoint Online Multi-Geo is currently in preview and is subject to change.

In a Multi-Geo tenant, you have an app catalog per geo location, which is something to consider if you want to deploy your apps across all geo locations.

By "app", we mean all apps that you deploy by first adding them to your tenant app catalog. All such apps are in scope of this guidance, including SharePoint Add-Ins (.app files) and SharePoint Framework apps and extensions (.sppkg files). 

In a Multi-Geo tenant, you have one app catalog site per geo location, as shown in the following diagram.

![World map showing app catalogs in North America and satellite locations in Europe and Asia](media/multigeo/multigeoapps_intro.png)

A consequence of this architecture is that you must deploy your app in **all** app catalogs if you want your app to be available for all sites, regardless of the geo location the site is hosted in. 

To do this, you have two options:

- Deploy your app manually in each of the app catalog sites. 

- Use the [ALM APIs](../apis/alm-api-for-spfx-add-ins.md) to automate the deployment of your apps. By using these APIs, you can write code that consistently deploys/upgrades your apps in all the geo locations of your Multi-Geo tenant.


## See also

- [Deploying and installing SharePoint Add-ins: methods and options](../sp-add-ins/deploying-and-installing-sharepoint-add-ins-methods-and-options.md)
- [Host your client-side web part from Office 365 CDN](../spfx/web-parts/get-started/hosting-webpart-from-office-365-cdn.md)
- [Host extension from Office 365 CDN](../spfx/extensions/get-started/hosting-extension-from-office365-cdn.md) 
- [OneDrive and SharePoint Online Multi-Geo Preview](multigeo-introduction.md)


