---
title: Set up your Office 365 tenant
ms.date: 09/25/2017
ms.prod: sharepoint
---


# Set up your Office 365 tenant

To build and deploy client-side web parts using the preview release of the SharePoint Framework, you will need a normal Office 365 tenant. 

## Sign up for an Office 365 tenant
If you already have an Office 365 tenant, see [create your app catalog site](#create-app-catalog-site).

If you don't have one, you can create a trial tenant or for example sign up for the [Office Developer Program](https://profile.microsoft.com/RegSysProfileCenter/wizardnp.aspx?wizid=7a6e3d71-b057-49cc-b2aa-158ff23432f3&lcid=1033&culture=en-us&dir=LTR). You will receive a welcome mail with a link to sign up for an Office 365 Developer Tenant. 

>**Note:** Make sure that you are signed out of any existing Office 365 tenants before you sign up.

## Create app catalog site
You will need an app catalog to upload and deploy web parts. If you've already set up an app catalog, see [create a new Developer Site collection](#create-a-new-developer-site-collection).  

Go to the **SharePoint Admin Center** by entering the following URL in your browser. Replace **yourtenantprefix** with your Office 365 Developer Tenant prefix.
	
```
https://yourtenantprefix-admin.sharepoint.com
```
	
In the left sidebar, choose the **apps** menu item and then choose **App Catalog**.

Choose **OK** to create a new app catalog site.

In the next page, enter the following details:

* **Title**: Enter **App Catalog**.
* **Web Site Address _suffix_**: Enter your preferred suffix for the app catalog; for example: **apps**.
* **Administrator**: Enter your username and choose the **resolve** button to resolve the username.

Choose **OK** to create the app catalog site.

SharePoint will create the app catalog site and you will be able to see its progress in the SharePoint admin center.

## Create a new Developer Site collection
You also need a site collection and a site for your testing. You can create a new site collection using any of the available templates. You may chose to use **developer site collection**, but that does not really add additional value, since workbench and basic testing can be performed under any site.

Here are steps for creating new developer site collection.

 Go to the **SharePoint Admin Center** by entering the following URL in your browser. Replace **yourtenantprefix** with your Office 365 Developer Tenant prefix.
	
```
https://yourtenantprefix-admin.sharepoint.com
```
	
In the SharePoint ribbon, choose **New** -> **Private Site Collection**.

In the dialog box, enter the following details:

* **Title**: Enter a title for your developer site collection; for example: **Developer Site**.
* **Web Site Address _suffix_**: Enter a suffix for your developer site collection; for example: **dev**.
* **Template Selection**: Select **Developer Site** as the site collection template.
* **Administrator**: Enter your username and choose the **resolve** button to resolve the username.

Choose **OK** to create the site collection.

SharePoint will create the developer site and you will be able to see its progress in the SharePoint admin center. After the site is created, you can browse to your developer site collection.

## SharePoint Workbench
SharePoint Workbench is a developer design surface that enables you to quickly preview and test web parts without deploying them in SharePoint. SharePoint Framework developer toolchain contains a version of the Workbench that works locally and helps you quickly test and validate solutions you are building. It is also hosted in your tenancy to preview and test your local web parts in development. You can access the SharePoint Workbench from any SharePoint site in your tenancy by browsing to the following URL:

```
https://your-sharepoint-site/_layouts/workbench.aspx
```

## Next steps
Now that you have configured your SharePoint tenant, [set up your development environment](./set-up-your-development-environment.md) to build client-side web parts.
