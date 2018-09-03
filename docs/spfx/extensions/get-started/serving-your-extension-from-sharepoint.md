---
title: Deploy your extension to SharePoint (Hello World part 3)
description: Deploy your SharePoint Framework Application Customizer to SharePoint and see it working on modern SharePoint pages.
ms.date: 08/27/2018
ms.prod: sharepoint
---

# Deploy your extension to SharePoint (Hello World part 3)

This article describes how to deploy your SharePoint Framework Application Customizer to SharePoint and see it working on modern SharePoint pages. 

Be sure you have completed the procedures in the following articles before you begin:

* [Build your first SharePoint Framework Extension (Hello World part 1)](./build-a-hello-world-extension.md)
* [Use page placeholders from Application Customizer (Hello World part 2)](./using-page-placeholder-with-extensions.md)

You can also follow these steps by watching the video on the SharePoint PnP YouTube Channel:

<br/>

> [!Video https://www.youtube.com/embed/DzHdVxLA3Pc]

<br/> 

There are few different ways on getting your SharePoint Framework extensions deployed and activated on the SharePoint sites. Right model depends on your business requirements and objectives. Here are the main options.

* Activate extension on specific site using feature framework based activation when solution is installed. This is the only model which supports [site level assets getting created or deployed](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/toolchain/provision-sharepoint-assets) as part of the solution activation.
* Use [tenant-scoped deployment option](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/tenant-scoped-deployment) and activate the extension on specific sites using PowerShell or APIs. This capability was introduced with SharePoint Framework version 1.4 release.
* Use tenant wide deployment option for extensions from app catalog. This capability was introduced with SharePoint Framework version 1.6 release.

## Package the Hello World Application Customizer

In this case we will be activating the extension specifically in a single site, which means that we'll be using Feature Framework based activation when the solution is being installed on the site.

1. In the console window, go to the extension project directory created in [Build your first SharePoint Framework Extension (Hello World part 1)](./build-a-hello-world-extension.md).

  ```
  cd app-extension
  ```

2. If gulp serve is still running, stop it from running by selecting Ctrl+C.

  Unlike in **Debug** mode, to use an extension on modern SharePoint pages, you need to deploy and register the extension with SharePoint in `Site collection`, `Site`, or `List` scope. The scope defines where and how the Application Customizer is active. In this particular scenario, we'll register the Application Customizer by using the `Site collection` scope.

  Before we package our solution, we want to include the code needed to automate the extension activation within the site whenever the solution is installed on the site. In this case, we'll use feature framework elements to perform these actions directly in the solution package, but you could also associate the Application Customizer to a SharePoint site by using REST or CSOM as part of the site provisioning, for example.

3. Install the solution package to the site where it should be installed so that the extension manifest is being white listed for execution.

4. Associate the Application Customizer to the planned scope. This can be performed programmatically (CSOM/REST) or by using the feature framework inside of the SharePoint Framework solution package. You need to associate the following properties in the `UserCustomAction` object at the site collection, site, or list level.
  
  * **ClientSideComponentId**. This is the identifier (GUID) of the Field Customizer, which has been installed in the app catalog. 
  * **ClientSideComponentProperties**. This is an optional parameter, which can be used to provide properties for the Field Customizer instance.
   
  Note that you can control the requirement to add a solution containing your extension to the site by using the `skipFeatureDeployment` setting in **package-solution.json**. Even though you would not require the solution to be installed on the site, you need to associate **ClientSideComponentId** to specific objects for the extension to be visible. 
   
  In the following steps, we'll review the `CustomAction` definition, which was automatically created for the solution as part of the scaffolding for enabling the solution on a site when it's being installed. 
   
5. Return to your solution package in Visual Studio Code (or to your preferred editor).

6. Extend the **sharepoint** folder and **assets** subfolder in the root of the solution to see the existing **elements.xml** file. 

   ![assets folder in solution structure](../../../images/ext-app-assets-folder.png)

<br/>

### Review the existing elements.xml file for SharePoint definitions

Review the existing XML structure in the **elements.xml** file. Note that the **ClientSideComponentId** property has been automatically updated based on the unique ID of your Application Customizer available in the **HelloWorldApplicationCustomizer.manifest.json** file in the **src\extensions\helloWorld** folder.

**ClientSideComponentProperties** has also been automatically set with the default structure and JSON properties for this extension instance. Note how the JSON is escaped so that we can set it properly within an XML attribute. 

The configuration uses the specific location of `ClientSideExtension.ApplicationCustomizer` to define that this is an Application Customizer. Because this **elements.xml** is associated to a *Web* scoped feature by default, this `CustomAction` is automatically added to the `Web.UserCustomAction` collection in the site where the solution is being installed.

To ensure that the configuration matches updates performed in the Application Customizer, update the **ClientSideComponentProperties** as in the following XML structure. Note that you should not copy the whole structure because it would cause a mismatch with your **ClientSideComponentId**.


```xml
<?xml version="1.0" encoding="utf-8"?>
<Elements xmlns="http://schemas.microsoft.com/sharepoint/">

    <CustomAction 
        Title="SPFxApplicationCustomizer"
        Location="ClientSideExtension.ApplicationCustomizer"
        ClientSideComponentId="46606aa6-5dd8-4792-b017-1555ec0a43a4"
        ClientSideComponentProperties="{&quot;Top&quot;:&quot;Top area of the page&quot;,&quot;Bottom&quot;:&quot;Bottom area in the page&quot;}">

    </CustomAction>

</Elements>
```

<br/>


### What about ClientSideInstance.xml file in assets folder?

**ClientSideInstance.xml** file is used with [Tenant Wide deployment of SharePoint Framework extensions](../basics/tenant-wide-deployment-extensions.md). You can use this file to automatically add an entry to the centralized Tenant Wide Extensions list in the app catalog site of the tenant if you use the tenant-scoped deployment option. In this tutorial case, we selected the solution to be installed on site level, which means that this file will be ignored when solution is activated in the app catalog.

*Tenant Wide Extensions* list can be used to automatically activate extensions in tenant from a centralized location. Tenant wide deployment is supported for Application customizers and list view command sets. You can specific different target definitions, like activation based on the site type or list type.

For this tutorial, we do not need this file as we will be activating solution in a specific site using feature xml based provisioning.

### Ensure that definitions are taken into account within the build pipeline

Open **package-solution.json** from the **config** folder. The **package-solution.json** file defines the package metadata as shown in the following code. To ensure that the **element.xml** file is taken into account while the solution is being packaged, default scaffolding adds needed configuration to define a feature framework feature definition for the solution package. Remove also the entry for **clientsideinstance.xml** under *elementManifests*, as we do not need that for this tutorial.

Your **package-slution.json** should look somewhat following after the needed edits, except for the id entries, which will be specific for your solution.

```json
{
  "$schema": "https://dev.office.com/json-schemas/spfx-build/package-solution.schema.json",
  "solution": {
    "name": "app-extension-client-side-solution",
    "id": "98a9fe4f-175c-48c1-adee-63fb927faa70",
    "version": "1.0.0.0",
    "includeClientSideAssets": true,
    "features": [
      {
        "title": "Application Extension - Deployment of custom action.",
        "description": "Deploys a custom action with ClientSideComponentId association",
        "id": "4678966b-de68-445f-a74e-e553a7b937ab",
        "version": "1.0.0.0",
        "assets": {
          "elementManifests": [
            "elements.xml",
            "clientsideinstance.xml"
          ]
        }
      }
    ]
  },
  "paths": {
    "zippedPackage": "solution/app-extension.sppkg"
  }
}
```

<br/>

## Deploy the extension to SharePoint Online and host JavaScript from local host

Now you are ready to deploy the solution to a SharePoint site and have the `CustomAction` automatically associated on the site level.

1. In the console window, enter the following command to package your client-side solution that contains the extension so that we get the basic structure ready for packaging:

   ```
   gulp bundle
   ```

2. Execute the following command so that the solution package is created:

   ```
   gulp package-solution
   ```

   The command creates the package in the **sharepoint/solution** folder:

   ```
   app-extension.sppkg
   ```

3. You now need to deploy the package that was generated to the app catalog. To do this, go to your tenant's **app catalog** and open the **Apps for SharePoint** library.

4. Upload or drag and drop the `app-extension.sppkg` located in the **sharepoint/solution** folder to the app catalog. SharePoint displays a dialog and asks you to trust the client-side solution.

   Note that we did not update the URLs for hosting the solution for this deployment, so the URL is still pointing to `https://localhost:4321`. 
   
5. Select the **Deploy** button.

   ![Trust operation in app catalog upload](../../../images/ext-app-sppkg-deploy-trust.png)

6. Move back to your console and ensure that the solution is running. If it's not running, execute the following command in the solution folder:
   
   ```
   gulp serve --nobrowser
   ```
   
7. Go to the site where you want to test SharePoint asset provisioning. This could be any site collection in the tenant where you deployed this solution package.

8. Select the gear icon on the top navigation bar on the right, and then select **Add an app** to go to your Apps page.

9. In the **Search** box, enter **app**, and then select Enter to filter your apps.

   ![installing Field Customizer to site](../../../images/ext-app-install-solution-to-site.png)

10. Select the **app-extension-client-side-solution** app to install the solution on the site. When the installation is completed, refresh the page by selecting F5.

  When the application has been successfully installed, you can see the header and footer being rendered just like with the debug query parameters.

  ![Custom header and footer elements rendered in the page](../../../images/ext-app-header-footer-visible.png)

## Next steps

Congratulations, you have deployed an extension to a modern SharePoint page from the app catalog!

You can continue building out your Hello World extension in the next topic, [Host extension from Office 365 CDN (Hello World part 4)](./hosting-extension-from-office365-cdn.md), where you learn how to deploy and load the extension assets from a CDN instead of from localhost.

> [!NOTE]
> If you find an issue in the documentation or in the SharePoint Framework, please report that to SharePoint engineering by using the [issue list at the sp-dev-docs repository](https://github.com/SharePoint/sp-dev-docs/issues) or by adding a comment to this article. Thanks for your input in advance.

