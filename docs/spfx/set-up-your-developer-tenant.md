# Set up your Office 365 developer tenant

>**Note:** The SharePoint Framework is currently in preview and is subject to change. SharePoint Framework client-side web parts are not currently supported for use in production environments.

In order to build and deploy web parts in SharePoint during initial preview, you will need an Office 365 Developer Tenant. During preview, the tenant needs to be a **developer tenant**; not just the site collection. 

## Sign up for Office 365 Developer Tenant
You can skip to the [next section](#create-app-catalog-site) if you already have an Office 365 Developer Tenant.

If you do not have one, then you can sign up [for the Office Developer Program here](https://profile.microsoft.com/RegSysProfileCenter/wizardnp.aspx?wizid=14b845d0-938c-45af-b061-f798fbb4d170&lcid=1033). You should receive a welcome mail with a link to sign up for an Office 365 Developer Tenant.  

>**Note:** Ensure you are signed out of any existing Office 365 tenants to complete the setup successfully.

## Create app catalog site
You will need an app catalog to upload and deploy web parts. You can skip to the [next section](#create-a-new-developer-site-collection) if you already have set up an app catalog.  

1. Go to the **SharePoint Admin Center** by entering the following URL in your browser. Replace **yourtenantprefix** with your Office 365 Developer Tenant prefix.

   ```
   https://yourtenantprefix-admin.sharepoint.com
   ```

2. In the left sidebar, choose the **apps** menu item and then choose **App Catalog**.

3. Choose **OK** to create a new app catalog site.

3. In the next page, enter the following details:
   * **Title**: Enter **App Catalog**.
   * **Web Site Address _suffix_**: Enter your preferred suffix for app catalog; for example: **apps**.
   * **Administrator**: Enter your username and choose the **resolve** button to resolve the username.

4. Choose **OK** to create the app catalog site.

SharePoint will create the app catalog site and you will be able to see its progress in the SharePoint admin center.

## Create a new Developer Site collection
You also need a Developer Site. You can skip to the [next section](#set-up-a-document-library) if you already have a Developer Site collection.

1. Go to the **SharePoint Admin Center** by entering the following URL in your browser. Replace **yourtenantprefix** with your Office 365 Developer Tenant prefix.

   ```
   https://yourtenantprefix-admin.sharepoint.com
   ```

2. In the SharePoint ribbon, choose **New** -> **Private Site Collection**.

3. In the dialog, enter the following details:
   * **Title**: Enter a title for your developer site collection; for example: **Developer Site**.
   * **Web Site Address _suffix_**: Enter a suffix for your developer site collection; for example: **dev**.
   * **Template Selection**: Select **Developer Site** as the site collection template.
   * **Administrator**: Enter your username and choose the **resolve** button to resolve the username.

4. Choose **OK** to create the site collection.

SharePoint will create the developer site and you will be able to see its progress in the SharePoint admin center. Once the site is created, you can browse to your developer site collection.

## Set up a document library
In order to use the preview features, you will need to set up a document library with a new column and upload SharePoint workbench. Most of this documentation will use the default document library in your developer site collection. This will be called **Documents** in the left navigation.

1. Choose the gears icon on the top right and then choose **Site settings** to open the settings page.
2. Choose **Site libraries and lists** under the **Site Administration** category.
3. Choose **Customize Documents**
4. Choose **Create column** under **Columns**
5. Enter **ClientSideApplicationId** as the column name and leave the other fields at their current values.
6. Choose **OK** to create the column.

## Upload the SharePoint workbench
You need to upload the SharePoint workbench to test your web parts on SharePoint. 
1. Download the [workbench.aspx](https://github.com/SharePoint/sp-dev-docs/blob/master/workbench.aspx) to your local computer. To do this right-click on the "raw" link around the middle of the page and choose **Save Target As** or **Save Link As** (depending on your browser) to save the file as **workbench.aspx** to your local computer. 
3. Upload it to the **Documents** library in the dev site collection.

##Troubleshooting
If you are getting the following exception when moving to workbench.aspx page, it means that you are not using a developer tenant, rather first release or normal tenant: "The requested operation is part of an experimental feature that is not supported in the current environment. The requested operation is part of an experimental feature that is not supported in the current environment." 

## Next steps
Now that you have configured your SharePoint tenant, [set up your development environment](./set-up-your-development-environment) to build client-side web parts.