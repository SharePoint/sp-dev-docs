# Set up your Office 365 developer tenant

>**Note:** The SharePoint Framework is currently in Preview, and is subject to change based on customer feedback. While we’re in preview, SharePoint Framework web parts are not supported for use in production environments.

In order to build and deploy web parts in SharePoint during initial preview, you will need an Office 365 Developer Tenant.  Note that for now, the tenant needs to be a **developer tenant**, not just the site collection. 

> If you are getting following exception when moving to workbench.aspx page, it means that you are not using dev tenant, rather first release or normal tenant: "The requested operation is part of an experimental feature that is not supported in the current environment. The requested operation is part of an experimental feature that is not supported in the current environment." 

## Sign up for Office 365 Developer Tenant
You can skip to the [next section](#create-app-catalog-site) if you already have an Office 365 developer tenant.

If you do not have one, then you can sign up [for the Office Developer Program here](https://profile.microsoft.com/RegSysProfileCenter/wizardnp.aspx?wizid=14b845d0-938c-45af-b061-f798fbb4d170&lcid=1033). You should receive a welcome mail with a link to sign up for an Office 365 developer tenant.  

> Please ensure you are signed out of any existing Office 365 tenants to complete the setup successfully.

Once you have signed up for the developer tenant and your SharePoint setup is complete, you can follow the steps below to configure app catalog, developer site collection and upload SharePoint Workbench. We'll be streamlining these steps over the next while.

## Create app catalog site
You will need an app catalog setup to be able to upload and deploy client-side solution. You can skip to the [next section](#create-a-new-developer-site-collection) if you already have an app catalog setup.  

If you do not have an app catalog setup for your developer tenant, then follow the steps below to create the app catalog.

Navigate to SharePoint Admin Center by typing the following URL in your browser.

>Replace `yourtenantprefix` with your Office 365 developer tenant prefix.

```
https://yourtenantprefix-admin.sharepoint.com
```

In the left sidebar, click on the `apps` menu item and then click on `App Catalog`.

Click `OK` button to create a new app catalog site.

In the next page, enter the following details:
* **Title**: App Catalog
* **Web Site Address _suffix_**: Type your preferred suffix for app catalog, for example: `apps`
* **Administrator**: Type your username and click the resolve button to resolve the username

Click `OK` button to create the app catalog site.

SharePoint will now create the app catalog site and you will be able to see its progress in the SharePoint admin center.

## Create a new Developer Site collection
To complete the tutorials, you will also need a Developer Site. You can skip to the [next section](#create-the-new-column) if you already have a developer site collection.

If you do not have a developer site collection, then follow the steps below to create the developer site collection.

Navigate to SharePoint Admin Center by typing the following URL in your browser.

>Replace `yourtenantprefix` with your Office 365 developer tenant prefix.

```
https://yourtenantprefix-admin.sharepoint.com
```

In the SharePoint ribbon, click `New->Private Site Collection`

In the dialog, enter the following:
* Title: Type a title for your developer site collection, for example: `Developer Site`
* Web Site Address suffix: Type a suffix for your developer site collection, for example: `dev`
* Template Selection: Select `Developer Site` as the site collection template
* Administrator: Type your username and click the resolve button to resolve the username

Click `OK` button to create the site collection.

SharePoint will now create the developer site and you will be able to see its progress in the SharePoint admin center. Once the site is created, you can browse to your developer site collection.

## Setup document library
In order to use the preview features, you will need to setup a document library with a new column and upload SharePoint Workbench. For the tutorials, we will work with the default document library in your developer site collection. This will be called `Documents` in the left navigation.

### Create the new column
Follow the steps below to add the new field to the `Documents` library:

* Click the gears icon on the top right and the click on `Site settings` to open the settings page.
* Click on `Site libraries and lists` under the `Site Administration` category.
* Click on `Customize Documents`
* Now, click on `Create column` under Columns:
   * Type `ClientSideApplicationId` as the column name and leave other fields as they are.
   * Click OK button to create the column.

### Upload SharePoint Workbench
While we will introduce and talk about the SharePoint Workbench in the tutorials, to get set up, download the [workbench.aspx](https://github.com/SharePoint/sp-dev-docs/blob/master/workbench.aspx) to your local machine. To do this, right click on the "raw" link around the middle of the page and select "Save Target As" or "Save Link As" (depending on your browser) to save the file as `workbench.aspx` to your local computer, and upload it to the `Documents` library in the dev site collection.

## Next steps
Now that you have configured your SharePoint tenant, lets [setup your machine](./Setup-your-machine) to build client-side web parts.