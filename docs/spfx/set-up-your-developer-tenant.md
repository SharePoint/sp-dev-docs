---
title: Set up your Office 365 tenant
description: Build and deploy client-side web parts using the SharePoint Framework by setting up an Office 365 tenant.
ms.date: 08/20/2018
ms.prod: sharepoint
localization_priority: Priority
ms.custom: scenarios:getting-started
---

# Set up your Office 365 tenant

To build and deploy client-side web parts using the SharePoint Framework, you need an Office 365 tenant.

If you already have an Office 365 tenant, see the section [Create app catalog site](#create-app-catalog-site).

If you don't have one, you can get an Office 365 developer subscription when you join the [Office 365 Developer Program](https://developer.microsoft.com/office/dev-program). See the [Office 365 Developer Program documentation](https://docs.microsoft.com/office/developer-program/office-365-developer-program) for step-by-step instructions about how to join the Office 365 Developer Program and sign up and configure your subscription.

> [!NOTE]
> Make sure that you are signed out of any existing Office 365 tenants before you sign up for the Office 365 Developer Program.

## Create app catalog site

You need an app catalog to upload and deploy web parts. If you've already set up an app catalog, see [Create app catalog sites](#create-app-catalog-site).

### To create an app catalog site

1. Go to the **SharePoint Admin Center** by entering the following URL in your browser. Replace **yourtenantprefix** with your Office 365 tenant prefix.

    ```http
    https://yourtenantprefix-admin.sharepoint.com
    ```

1. In the left sidebar, select **More features**
1. Locate the section **Apps** and select **Open**.
1. On the **Apps** page, select **App Catalog**.
1. Select **OK** to create a new app catalog site.
1. On the next page, enter the following details:

    - **Title**: Enter **app catalog**.
    - **Web Site Address _suffix_**: Enter your preferred suffix for the app catalog; for example: **apps**.
    - **Administrator**: Enter your username, and then select the **resolve** button to resolve the username.

1. Select **OK** to create the app catalog site.

SharePoint creates the app catalog site, and you can see its progress in the SharePoint admin center.

## Create a new site collection

You also need a site collection and a site for your testing. You can create a new site collection by using any of the available templates.

### To create a new site collection

1. Go to the **SharePoint Admin Center** by entering the following URL in your browser. Replace **yourtenantprefix** with your Office 365 tenant prefix.

    ```http
    https://yourtenantprefix-admin.sharepoint.com
    ```

1. In the left sidebar, select **Sites > Active sites**.
1. Select **Create** from the toolbar at the top of the page.
1. On the **Create a site** page, select **Team site**.
1. In the panel that appears, enter the following details:

    - **Site name**: Enter a title for your site; for example: **Developer Site**.
    - **Group email address**: Accept the default option or modify it.
    - **Group owner**: Specify the name / email address of the site owner.
    - **Select a language**: Accept the default language or modify it.


1. Select **Next** to create the site collection.

SharePoint creates the site and you're able to see its progress. After the site is created, you can browse to your site collection by selecting **Finish** & entering the URL of the new site.

## SharePoint Workbench

SharePoint Workbench is a developer design surface that enables you to quickly preview and test web parts without deploying them in SharePoint. SharePoint Framework developer toolchain contains a version of the Workbench that works locally and helps you quickly test and validate solutions that you're building.

It's also hosted in your tenant to preview and test your local web parts in development. You can access the SharePoint Workbench from any SharePoint site in your tenancy by browsing to the following URL:

```http
https://your-sharepoint-site/_layouts/workbench.aspx
```

## Next steps

Now that you've configured your SharePoint tenant, [set up your development environment](./set-up-your-development-environment.md) to build client-side web parts.
