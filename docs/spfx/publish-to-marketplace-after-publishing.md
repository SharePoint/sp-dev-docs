---
title: Maintain and support your published app
description: Tips to maintain and support your SharePoint Framework app after publishing it to the Marketplace
ms.date: 10/21/2024
ms.localizationpriority: high
---

# Maintain and support your published app

Publishing the application to the Marketplace is just the first step in helping users solve their business problem. Following sections contain some tips that you should consider after publishing your application to the Marketplace.

## Install applications from the Marketplace in the tenant App Catalog

SharePoint Online allows you to create a tenant App Catalog where you centrally manage applications available in your organization. Additionally, you can create site collection App Catalogs, where you can deploy applications to specific sites.

Applications that you acquire from the Marketplace, you can install only in tenant App Catalogs. After installing the application, you can decide whether you want to deploy it globally and make it available to all sites in your tenant or if you want to deploy it only to specific sites.

For more information about managing SharePoint Framework solution in the App Catalog visit: [Manage apps using the Apps site](/sharepoint/use-app-catalog) and [Use the site collection app catalog](/sharepoint/dev/general-development/site-collection-app-catalog).

## Permissions required to install applications from the Marketplace

By default, only tenant administrators can install applications from the Marketplace. They can however choose to delegate the responsibility to others in your organization by granting them access to the tenant App Catalog.

SharePoint Framework applications execute on behalf of the current user and can do whatever the current user can do. Because of this, only tenant App Catalog administrators can install applications from the Marketplace. Users who are not App Catalog administrators can request a specific application to be installed by the App Catalog administrator, but they cannot install the application themselves.

## Notify users of new versions

As you update your application, you should notify your users when an updated version is available. The Marketplace does not offer any version checking mechanism and you should implement it your application so that notifications are meaningful and as unobtrusive as possible. In your code, you can, for example,  call a custom API that you own to compare the current version of the application with the latest version available.

Tenant App Catalog administrators can update applications acquired from the Marketplace directly from the App Catalog, by selecting the application in the App Catalog and from the ribbon choosing the **Upgrade Store App** option. When the upgrade succeeds, the latest version will be automatically visible to users in all sites where the application has been installed.

## Applications listed in the SharePoint category

All SharePoint Framework applications published in the Marketplace are listed in the **SharePoint** category. At this moment, it is not possible to specify a custom category. Also, even if you configured web parts in your application to be exposed in Microsoft Teams, the application will still be listed in the **SharePoint** category.

## Keep your app details updated

You can remove an app from the [Microsoft commercial marketplace](/azure/marketplace/overview) to prevent its discovery and use.

| App details | Description |
| --- | --- |
| Your app's listing must be kept updated. | Any changes to functionality, pricing, visual appearance, or any other updates must be accurately reflected in your app's listing.|
| You must regularly update your app to ensure that it remains compliant with the commercial marketplace policies.| Stay up to date with policy changes by subscribing to the changelog.|
| Your contact details must be kept up to date in your Partner Center account. |Microsoft will contact you occasionally to resolve any bugs or commercial marketplace policy violations in your app. If your contact details aren't updated, you might miss important notices or updates from Microsoft.|
| Maintain your app's functionality and user experience. | Your app's functionality and user experience must match or exceed the quality of experience at submission. You must maintain your app's performance.|

## Fix issues with your published app

Microsoft runs daily automation tests on SharePoint apps listed on the MarketPlace. If issues with your app are identified, Microsoft contacts you with a detailed report on how to reproduce the issues and then provide recommendations to resolve them. Your app listing might be de-listed from the MarketPlace if you can't fix the problems within a stated timeline.

## Possible enforcement actions

Microsoft runs automated and manual continuous health checks for all the published apps. It's intended to maintain the health and user experience of the Microsoft commercial marketplace. In certain situations, Microsoft might contact you and de-list your app from the commercial marketplace or take further action on your app as deemed appropriate.

**Microsoft might contact you for a resolution when:**

* Microsoft is unable to run the continuous health evaluation tests on your app as the test credentials or test environment you provided have expired.

* Microsoft sees or is made aware of critical security vulnerabilities in your app, which might endanger your users or the Microsoft commercial marketplace.

* Microsoft is made aware of issues with your app by your users through any of Microsoft’s support channels. The issues include, but aren't limited to, spammy behavior, broken functionality, or unexpected user experience bugs and user interface bugs.

* Microsoft might unilaterally take cognizance of issues highlighted by users for your app with rating and reviews.

* Microsoft has identified commercial marketplace policy failures in your app as part of the continuous health evaluation of your app post publish.

If Microsoft doesn't receive a suitable response from you, it reaches out to you again, and might simultaneously de-list your app to protect users. If Microsoft receives a response that your issues are resolved and you've submitted an updated app for review, Microsoft will re-list your app when the app passes review.

**Microsoft might de-list your app without prior notice (other than to inform you of that action) when:**

* Microsoft receives a takedown notice for your app alleging copyright or trademark infringement.
* Your app isn't maintained or abandoned and unused.
* There's no response from you on Microsoft's reach outs.

> [!Note]
> After de-listing your app is not available anymore on Microsoft AppSource and customers cannot install anymore. Customers that had the app installed are not impacted, installed apps stay working after de-listing. Upgrading installed apps to a newer version however is not possible anymore as long as the app is de-listed on Microsoft AppSource.

## Discontinuing your published app

You must maintain your app's user experience as at the initial app review. If you don't maintain the app actively, or no longer wish to support the app, ensure that you discontinue your published app from your Partner Center account.

To discontinue your app:

* To remove your app from Microsoft AppSource, in your Microsoft Partner Center account, go the **Product Overview** page and select **Stop Selling**.
* Contact your customers where appropriate. After **Stop Selling** the apps installed in your customers tenants are stil there, it's up to the app owner to work with their customers to uninstall their app. Delete or revoke any security or authorization tokens generated for your app.
