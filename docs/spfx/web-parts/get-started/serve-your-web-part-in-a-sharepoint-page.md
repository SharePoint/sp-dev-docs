---
title: Deploy your client-side web part to a SharePoint page (Hello World part 3)
description: Deploy your client-side web part to SharePoint and see it working on a modern SharePoint page. 
ms.date: 01/08/2018
ms.prod: sharepoint
---


# Deploy your client-side web part to a SharePoint page (Hello World part 3)

Ensure that you have completed the procedures in the following articles before you start:

* [Build your first SharePoint client-side web part](./build-a-hello-world-web-part.md)
* [Connect your client-side web part to SharePoint](./connect-to-sharepoint.md)

You can also follow these steps by watching this video on the [SharePoint PnP YouTube Channel](https://www.youtube.com/watch?v=BpJ01ahxbiY&index=4&list=PLR9nK3mnD-OXvSWvS2zglCzz4iplhVrKq). 

<a href="https://www.youtube.com/watch?v=BpJ01ahxbiY&index=4&list=PLR9nK3mnD-OXvSWvS2zglCzz4iplhVrKq">
<img src="../../../images/spfx-youtube-tutorial3.png" alt="Screenshot of the YouTube video player for this tutorial" />
</a>


## Package the HelloWorld web part

1. In the console window, go to the web part project directory created in [Build your first SharePoint client-side web part](./build-a-hello-world-web-part.md).

  ```
  cd helloworld-webpart
  ```

2. If `gulp serve` is still running, stop it from running by selecting Ctrl+C.

  Unlike in the Workbench, to use client-side web parts on modern SharePoint server-side pages, you need to deploy and register the web part with SharePoint. First you need to package the web part.

3. Open the **HelloWorldWebPart** web part project in Visual Studio Code, or your preferred IDE.

4. Open **package-solution.json** from the **config** folder.

  The **package-solution.json** file defines the package metadata as shown in the following code:

  ```json
  {
    "$schema": "https://dev.office.com/json-schemas/spfx-build/package-solution.schema.json",
    "solution": {
      "name": "helloworld-webpart-client-side-solution",
      "id": "4432f33b-5845-4ca0-827e-a8ae68c7b945",
      "version": "1.0.0.0",
      "includeClientSideAssets": true
    },
    "paths": {
      "zippedPackage": "solution/helloworld-webpart.sppkg"
    }
  }

  ```

5. In the console window, enter the following command to package your client-side solution that contains the web part:

  ```
  gulp package-solution
  ```

  The command creates the package in the `sharepoint/solution` folder:

  ```
  helloworld-webpart.sppkg
  ```

### Package contents

The package uses SharePoint Feature to package your web part. By default, the gulp task creates a feature for your web part.

You can view the raw package contents in the **sharepoint/debug** folder. 

The contents are then packaged into an **.sppkg** file. The package format is very similar to a SharePoint Add-ins package and uses Microsoft Open Packaging Conventions to package your solution. 

The JavaScript files, CSS, and other assets are packaged inside of the package when the `--ship` option is used. In this case, however, we will first test deployment and capabilities by hosting JavaScript files from localhost. This deployment option is explained in the next tutorial. 

> [!NOTE]
> Starting from the SharePoint Framework v1.4, static assets are by default packaged inside of the sppkg package. When a package is deployed in the App Catalog, the assets are automatically hosted either from Office 365 CDN (if enabled) or from an App Catalog URL. You can control this behavior with the `includeClientSideAssets` setting in the `package-solution.json` file.


## Deploy the HelloWorld package to App Catalog

Next, you need to deploy the package that was generated to the App Catalog.

1. Go to your site's App Catalog.

2. Upload or drag and drop the **helloworld-webpart.sppkg** to the App Catalog.

  ![Upload solution to app catalog](../../../images/upload-solution-app-catalog.png) 

  This deploys the client-side solution package. Because this is a full trust client-side solution, SharePoint displays a dialog and asks you to trust the client-side solution to deploy.

  ![Trust client-side solution deployment](../../../images/sp-app-deploy-trust.png) 
	
3. Select **Deploy**.


## Install the client-side solution on your site

1. Go to your developer site collection.

2. Select the gears icon on the top nav bar on the right, and then select **Add an app** to go to your Apps page.

3. In the **Search** box, enter **helloworld**, and select **Enter** to filter your apps.
	
  ![Add app to site](../../../images/install-app-your-site.png)
	
4. Select the **helloworld-webpart-client-side-solution** app to install the app on the site.
	
  ![Trust app](../../../images/app-installed-your-site.png)

  The client-side solution and the web part are installed on your developer site.

The **Site Contents** page shows you the installation status of your client-side solution. Make sure the installation is complete before going to the next step.

## Preview the web part on a SharePoint page

Now that you have deployed and installed the client-side solution, add the web part to a SharePoint page. Remember that resources such as JavaScript and CSS are available from the local computer.

1. Open the `<your-webpart-guid>.manifest.json` from the `\dist` folder.
	
  Notice that the **internalModuleBaseUrls** property in the **loaderConfig** entry still refers to your local computer:

  ```json
  "internalModuleBaseUrls": [
    "https://`your-local-machine-name`:4321/"
  ]
  ```

2. Before adding the web part to a SharePoint server-side page, run the local server.
	
3. In the console window that has the **helloworld-webpart** project directory, run the gulp task to start serving from localhost:
    
  ```
  gulp serve --nobrowser
  ```

  > [!NOTE]
  > `--nobrowser` will not automatically launch the SharePoint Workbench.

## Add the HelloWorld web part to modern page

1. In your browser, go to your site where the solution was just installed.
	
2. Select the gears icon in the top nav bar on the right, and then select **Add a page**.
	
3. Edit the page. 

4. Open the web part picker and select your **HelloWorld** web part.
		
The web part assets are loaded from the local environment. To load the scripts hosted on your local computer, you need to enable the browser to load unsafe scripts. Depending on the browser you are using, make sure you enable loading unsafe scripts for this session.
	
You should see the **HelloWorld** web part you built in the previous article that retrieves lists from the current site. 

![Hello World web part in modern page](../../../images/sp-wp-modern-page.png)

## Edit web part properties

1. Select the **Configure element** icon (pen) in the web part to open the property pane for the web part.

  ![Edit web part](../../../images/edit-webpart-modern-page.png)

  This is the same property pane you built and previewed in the Workbench.
	
2. Edit the **Description** property, and enter **Client-side web parts are awesome!**
	
  ![Hello World web part in modern page](../../../images/sp-wp-modern-page-pp.png)

3. Notice that you still have the same behaviors such as a reactive pane where the web part is updated as you type.
	
4. Select the **x** icon to close the client-side property pane.
		
5. On the toolbar, select **Save and close** to save the page.

## Next steps

Congratulations! You have deployed a client-side web part to a modern SharePoint page. 

You can continue building out your Hello World web part in the next topic [Hosting client-side web part from Office 365 CDN](./hosting-webpart-from-office-365-cdn.md), where you will learn how to deploy and load the web part assets from an Office 365 CDN instead of localhost.

> [!NOTE]
> If you find an issue in the documentation or in the SharePoint Framework, report that to SharePoint engineering by using the [issue list at the sp-dev-docs repository](https://github.com/SharePoint/sp-dev-docs/issues). Thanks for your input in advance.