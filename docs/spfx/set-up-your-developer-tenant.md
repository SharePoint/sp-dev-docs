# Set up your Office 365 tenant

To build and deploy client-side web parts using the preview release of the SharePoint Framework, you will need an Office 365 tenant with [First Release](https://support.office.com/en-us/article/Set-up-the-Standard-or-First-Release-options-in-Office-365-3b3adfa4-1777-4ff0-b606-fb8732101f47) options enabled. 

## Sign up for an Office 365 tenant
If you already have an Office 365 tenant, see [create your app catalog site](#create-app-catalog-site). Make sure you have [First Release](https://support.office.com/en-us/article/Set-up-the-Standard-or-First-Release-options-in-Office-365-3b3adfa4-1777-4ff0-b606-fb8732101f47) options enabled. 

If you don't have one, sign up for the [Office Developer Program](https://profile.microsoft.com/RegSysProfileCenter/wizardnp.aspx?wizid=14b845d0-938c-45af-b061-f798fbb4d170&lcid=1033). You will receive a welcome mail with a link to sign up for an Office 365 Developer Tenant. First Release options are enabled already for your Office 365 Developer Tenant. 

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
You also need a Developer Site. If you already have a Developer Site collection, see [Set up a document library](#set-up-a-document-library).

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

## Troubleshooting

You will get an error If you are using a SharePoint site that was provisioned using a self-service site creation. We recommend using a developer site collection or a SharePoint site that was not created using a self-service site creation.

If you get the following exception accessing the SharePoint Workbench: 

```
"The requested operation is part of an experimental feature that is not supported in the current environment. The requested operation is part of an experimental feature that is not supported in the current environment." 
```
Then, you are not using a tenant with First Release options enabled. You might be using a normal tenant

During developer preview also "Custom Script" feature will need to be enabled in site collections where you will be using the client-side web parts. 

## Next steps
Now that you have configured your SharePoint tenant, [set up your development environment](./set-up-your-development-environment) to build client-side web parts.
