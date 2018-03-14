---
title: Set up your Office 365 tenant
description: Build and deploy client-side web parts using the SharePoint Framework by setting up an Office 365 tenant.
ms.date: 03/14/2018
ms.prod: sharepoint
---


# Set up your Office 365 tenant

To build and deploy client-side web parts using the SharePoint Framework, you need an Office 365 tenant. 

If you already have an Office 365 tenant, see the section [Create app catalog site](#create-app-catalog-site).

If you don't have one, you can get an Office 365 developer subscription when you join the [Office 365 Developer Program](https://developer.microsoft.com/en-us/office/dev-program). See the [Office 365 Developer Program documentation](https://docs.microsoft.com/en-us/office/developer-program/office-365-developer-program) for step-by-step instructions about how to join the Office 365 Developer Program and sign up and configure your subscription.  

> [!NOTE] 
> Make sure that you are signed out of any existing Office 365 tenants before you sign up.

## Create app catalog site

You need an app catalog to upload and deploy web parts. If you've already set up an app catalog, see [create a new developer site collection](#create-a-new-developer-site-collection).  

### To create an app catalog site

1. Go to the **SharePoint Admin Center** by entering the following URL in your browser. Replace **yourtenantprefix** with your Office 365 tenant prefix.
	
    ```
    https://yourtenantprefix-admin.sharepoint.com
    ```
	
2. In the left sidebar, select the **apps** menu item, and then select **app catalog**.

3. Select **OK** to create a new app catalog site.

4. On the next page, enter the following details:

    - **Title**: Enter **app catalog**.
    - **Web Site Address _suffix_**: Enter your preferred suffix for the app catalog; for example: **apps**.
    - **Administrator**: Enter your username, and then select the **resolve** button to resolve the username.

5. Select **OK** to create the app catalog site.

SharePoint creates the app catalog site, and you are able to see its progress in the SharePoint admin center.

## Create a new developer site collection

You also need a site collection and a site for your testing. You can create a new site collection by using any of the available templates. You may choose to use **developer site collection**, but that does not really add additional value because workbench and basic testing can be performed under any site.

### To create a new developer site collection

1. Go to the **SharePoint Admin Center** by entering the following URL in your browser. Replace **yourtenantprefix** with your Office 365 tenant prefix.
	
    ```
    https://yourtenantprefix-admin.sharepoint.com
    ```
	
2. On the SharePoint ribbon, select **New** > **Private Site Collection**.

3. In the dialog box, enter the following details:

    - **Title**: Enter a title for your developer site collection; for example: **Developer Site**.
    - **Web Site Address _suffix_**: Enter a suffix for your developer site collection; for example: **dev**.
    - **Template Selection**: Select **Developer Site** as the site collection template.
    - **Administrator**: Enter your username, and then select the **resolve** button to resolve the username.

4. Select **OK** to create the site collection.

SharePoint creates the developer site and you are able to see its progress in the SharePoint admin center. After the site is created, you can browse to your developer site collection.

## SharePoint Workbench

SharePoint Workbench is a developer design surface that enables you to quickly preview and test web parts without deploying them in SharePoint. SharePoint Framework developer toolchain contains a version of the Workbench that works locally and helps you quickly test and validate solutions that you are building. It is also hosted in your tenancy to preview and test your local web parts in development. You can access the SharePoint Workbench from any SharePoint site in your tenancy by browsing to the following URL:

```
https://your-sharepoint-site/_layouts/workbench.aspx
```

## Next steps

Now that you have configured your SharePoint tenant, [set up your development environment](./set-up-your-development-environment.md) to build client-side web parts.
