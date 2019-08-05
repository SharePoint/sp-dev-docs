---
title: Set up your Office 365 tenant
description: Build and deploy client-side web parts using the SharePoint Framework by setting up an Office 365 tenant.
ms.date: 08/20/2018
ms.prod: sharepoint
localization_priority: Priority
---


# Set up your Office 365 tenant

To build and deploy client-side web parts using the SharePoint Framework, you need an Office 365 tenant.

If you already have an Office 365 tenant, see the section [Create app catalog site](#create-app-catalog-site).

If you don't have one, you can get an Office 365 developer subscription when you join the [Office 365 Developer Program](https://developer.microsoft.com/en-us/office/dev-program). See the [Office 365 Developer Program documentation](https://docs.microsoft.com/en-us/office/developer-program/office-365-developer-program) for step-by-step instructions about how to join the Office 365 Developer Program and sign up and configure your subscription.  

> [!NOTE]
> Make sure that you are signed out of any existing Office 365 tenants before you sign up for the Office 365 Developer Program.

## Create app catalog site

You need an app catalog to upload and deploy web parts. If you've already set up an app catalog, see [create a new developer site collection](#create-a-new-developer-site-collection).  

> [!NOTE]
> The following steps assume you are using the Classic SharePoint Admin Center. At this time, the modern SharePoint Admin Center does not have native support for creating an App Catalog. You can access the Classic SharePoint Admin Center from the left sidebar of the SharePoint Admin Center.

### To create an app catalog site

1. Go to the **Classic SharePoint Admin Center** by entering the following URL in your browser. Replace **yourtenantprefix** with your Office 365 tenant prefix.

    ```http
    https://yourtenantprefix-admin.sharepoint.com
    ```

1. In the left sidebar, select the **apps** menu item, and then select **app catalog**.
1. Select **OK** to create a new app catalog site.
1. On the next page, enter the following details:

    - **Title**: Enter **app catalog**.
    - **Web Site Address _suffix_**: Enter your preferred suffix for the app catalog; for example: **apps**.
    - **Administrator**: Enter your username, and then select the **resolve** button to resolve the username.

1. Select **OK** to create the app catalog site.

SharePoint creates the app catalog site, and you are able to see its progress in the SharePoint admin center.

## Create a new developer site collection

You also need a site collection and a site for your testing. You can create a new site collection by using any of the available templates. You may choose to use **developer site collection**, but that does not really add additional value because workbench and basic testing can be performed under any site.

> [!NOTE]
> You can only create a "developer site collection", a special site template used when creating & testing SharePoint add-ins from the Classic SharePoint Admin Center. If you are using the Modern SharePoint Admin Center, you can create a Team Site and use it for development purposes. You can use any SharePoint site for SharePoint Framework development.

### To create a new developer site collection

1. Go to the **Classic SharePoint Admin Center** by entering the following URL in your browser. Replace **yourtenantprefix** with your Office 365 tenant prefix.

    ```http
    https://yourtenantprefix-admin.sharepoint.com
    ```

1. On the SharePoint ribbon, select **New** > **Private Site Collection**.
1. In the dialog box, enter the following details:

    - **Title**: Enter a title for your developer site collection; for example: **Developer Site**.
    - **Web Site Address _suffix_**: Enter a suffix for your developer site collection; for example: **dev**.
    - **Template Selection**: Select **Developer Site** as the site collection template.
    - **Administrator**: Enter your username, and then select the **resolve** button to resolve the username.

1. Select **OK** to create the site collection.

SharePoint creates the developer site and you are able to see its progress in the SharePoint admin center. After the site is created, you can browse to your developer site collection.

### To create a new team site

1. Go to the **SharePoint Admin Center** by entering the following URL in your browser. Replace **yourtenantprefix** with your Office 365 tenant prefix.

    ```http
    https://yourtenantprefix-admin.sharepoint.com/_layouts/15/online/AdminHome.aspx
    ```

1. In the left sidebar, select **Sites > Active Sites**.
1. In the toolbar, select **Create**.
1. In the **Create a site** dialog, select **Team site**.
1. In the panel that appears, enter the following details:

    - **Site name**: Enter a title for your site; for example: **Developer Site**.
    - **Group email address**: Accept the default option or modify it.
    - **Group owner**: Specify the name / email address of the site owner.
    - **Select a language**: Accept the default language or modify it.

1. Select **Next** to create the site collection.

SharePoint creates the site. After the site is created, you can browse to your new site.

## SharePoint Workbench

SharePoint Workbench is a developer design surface that enables you to quickly preview and test web parts without deploying them in SharePoint. SharePoint Framework developer toolchain contains a version of the Workbench that works locally and helps you quickly test and validate solutions that you are building.

It is also hosted in your tenant to preview and test your local web parts in development. You can access the SharePoint Workbench from any SharePoint site in your tenancy by browsing to the following URL:

```http
https://your-sharepoint-site/_layouts/workbench.aspx
```

## Next steps

Now that you have configured your SharePoint tenant, [set up your development environment](./set-up-your-development-environment.md) to build client-side web parts.
