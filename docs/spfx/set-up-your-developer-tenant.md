# Set up your Office 365 developer tenant

>**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.

To build and deploy client-side web parts using the preview release of the SharePoint Framework, you will need an Office 365 Developer Tenant. Your tenant must be a **developer tenant**, not just a site collection. 

## Sign up for an Office 365 Developer Tenant
If you already have an Office 365 Developer Tenant, see [create your app catalog site](#create-app-catalog-site).

If you don't have one, sign up for the [Office Developer Program](https://profile.microsoft.com/RegSysProfileCenter/wizardnp.aspx?wizid=14b845d0-938c-45af-b061-f798fbb4d170&lcid=1033). You will receive a welcome mail with a link to sign up for an Office 365 Developer Tenant.  

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

## Set up a document library
In order to use the features of the SharePoint Framework, you will need to set up a document library with a new column and upload SharePoint workbench. This procedure uses the default document library in your developer site collection. This will be called **Documents** in the left navigation.

* Go to your developer site in a browser.
* Choose the gears icon on the top right and then choose **Site settings** to open the settings page.
* Choose **Site libraries and lists** under the **Site Administration** category.
* Choose **Customize Documents**
* Choose **Create column** under **Columns**
* Enter **ClientSideApplicationId** as the column name and leave the other fields at their current values.
* Choose **OK** to create the column.

## Put the SharePoint workbench in the document library
You need the SharePoint workbench on your developer site to test your web parts on SharePoint. 

* Download the [workbench.aspx](https://github.com/SharePoint/sp-dev-docs/blob/master/workbench.aspx) file to your local computer. To do this:
	- Open the context menu (right-click) on the file content in the middle of the page and choose **Save Target As** or **Save Link As** (depending on your browser) to save the file as **workbench.aspx** to your local computer. 
* Upload the file to the **Documents** library in the developer site collection. To do this:
	- Open the **Documents** library on SharePoint.
	- Drag and drop the workbench.aspx to the **Documents** library. Or you can choose **Upload** from the **Documents** library and locate and upload the workbench.aspx file.

##Troubleshooting
If you get the following exception when moving to the workbench.aspx page: 

"The requested operation is part of an experimental feature that is not supported in the current environment. The requested operation is part of an experimental feature that is not supported in the current environment." 

You are not using a developer tenant. You might be using a first release or normal tenant

## Next steps
Now that you have configured your SharePoint tenant, [set up your development environment](./set-up-your-development-environment) to build client-side web parts.
