---
title: Host your client-side web part from Microsoft 365 CDN (Hello World part 4)
description: An easy solution to host your assets directly from your own Microsoft 365 tenant. Can be used for hosting any static assets that are used in SharePoint Online.
ms.date: 03/24/2022
ms.prod: sharepoint
ms.localizationpriority: high
ms.custom: scenarios:getting-started
---

# Host your client-side web part from Microsoft 365 CDN (Hello World part 4)

Microsoft 365 Content Delivery Network (CDN) provides you an easy solution to host your assets directly from your own Microsoft 365 tenant. It can be used for hosting any static assets that are used in SharePoint Online.

> [!NOTE]
> There are multiple different hosting options for your web part assets. This tutorial concentrates on showing the Microsoft 365 CDN option, but you could also use the [Azure CDN](./deploy-web-part-to-cdn.md) or simply host your assets from SharePoint library from your tenant. In the latter case, you would not benefit from the CDN performance improvements, but that would also work from the functionality perspective. Any location that end users can access using HTTP(S) would be technically suitable for hosting the assets for end users.

> [!IMPORTANT]
> This article uses the `includeClientSideAssets` attribute, was introduced in the [SharePoint Framework (SPFx) v1.4](../../release-1.4.md). This version is not supported with **SharePoint 2016 Feature Pack 2**.
> If you're using an on-premises setup, you need to decide the CDN hosting location separately. You can also simply host the JavaScript files from a centralized library in your on-premises SharePoint to which your users have access. Please see additional considerations in the [SharePoint 2016 specific guidance](../../sharepoint-2016-support.md).

Make sure that you've completed the following tasks before you begin:

- [Build your first client-side web part](./build-a-hello-world-web-part.md)
- [Connect your client-side web part to SharePoint](./connect-to-sharepoint.md)
- [Deploy your client-side web part to a SharePoint page](./serve-your-web-part-in-a-sharepoint-page.md)

You can also follow these steps by watching this video on the Microsoft 365 Platform Communtiy (PnP) YouTube Channel:

> [!Video https://www.youtube.com/embed/N-KowN-UwTM]

## Enable CDN in your Microsoft 365 tenant

For information on enabling and configuring the Microsoft 365 CDN in your SharePoint Online tenant, see [Enable the Microsoft 365 CDN](../../enable-Microsoft-365-content-delivery-network.md).

## Finalize solution for deployment

1. Switch to the console and make sure you're still in the project directory that you used to set up your web part project.
1. If you are still running the local webserver by executing **gulp serve** in the previous tutorial, press <kbd>CTRL</kbd>+<kbd>C</kbd> to terminate it.
1. Ensure you're in your project directory:

    ```console
    cd helloworld-webpart
    ```

## Review solution settings

1. Open the **HelloWorldWebPart** web part project in Visual Studio Code or your preferred IDE.
1. Open **package-solution.json** from the **config** folder.

    The **package-solution.json** file defines the package metadata as shown in the following code:

    ```json
   {
        "$schema": "https://developer.microsoft.com/json-schemas/spfx-build/package-solution.schema.json",
        "solution": {
            "name": "mysolution-client-side-solution",
            "id": "ee1a495d-c7bb-499b-bd71-728aaeb79cd2",
            "version": "1.0.0.0",
            "includeClientSideAssets": true,
            "skipFeatureDeployment": true,
            "isDomainIsolated": false,
            "developer": {
                "name": "",
                "websiteUrl": "",
                "privacyUrl": "",
                "termsOfUseUrl": "",
                "mpnId": "Undefined-1.14.0"
            },
            "metadata": {
            "shortDescription": {
                "default": "mysolution description"
            },
            "longDescription": {
                "default": "mysolution description"
            },
            "screenshotPaths": [],
            "videoUrl": "",
            "categories": []
            },
            "features": [
            {
                "title": "mysolution Feature",
                "description": "The feature that activates elements of the mysolution solution.",
                "id": "d72e47b2-d5a2-479f-9f9a-85e1e7472dee",
                "version": "1.0.0.0"
            }
            ]
        },
        "paths": {
            "zippedPackage": "solution/mysolution.sppkg"
        }
    }

    ```

The default value for the `includeClientSideAssets` is `true`, which means that static assets are packaged automatically in the **\*.sppkg** files, and you don't need to separately host your assets from an external system.

Do *not* change this setting for this exercise, so that assets are automatically hosted when solution is deployed to your tenant.

If Microsoft 365 CDN *is enabled*, it's used automatically with default settings. If Microsoft 365 CDN *isn't enabled*, assets are served from the app catalog site collection. This means that if you leave the `includeClientSideAssets` setting `true`, your solution assets are automatically hosted in the tenant.

## Prepare web part assets to deploy

1. Execute the following task to bundle your solution. This executes a release build of your project by using a dynamic label as the host URL for your assets. This URL is automatically updated based on your tenant CDN settings.

    ```console
    gulp bundle --ship
    ```

1. Execute the following task to package your solution. This creates an updated **helloworld-webpart.sppkg** package on the **sharepoint/solution** folder.

    ```console
    gulp package-solution --ship
    ```

    > [!NOTE]
    > If you're interested in what actually got packaged inside of the **\*.sppkg** file, you can look in the content of the **sharepoint/solution/debug** folder.

1. Upload or drag and drop the newly created client-side solution package to the app catalog in your tenant.
1. Because you already deployed the package, you're prompted as to whether to replace the existing package. Select **Replace**.

    ![Override existing solution](../../../images/cdn-override-helloworld-webpart-package.png)

1. Notice how the **domain** list in the prompt says *SharePoint Online*. This is because the content is either served from the Microsoft 365 CDN or from the app catalog, depending on the tenant settings. Select **Enable app**.

    ![Installation popup from app catalog for the SPFx solution](../../../images/cnd-trust-helloworld-webpart-solution.png)

1. Open the site where you previously installed the **helloworld-webpart-client-side-solution** or install the solution to a new site.
1. After the solution has been installed, select **Add a page** from the *gear* menu, and select **HelloWorld** from the modern page web part picker to add your custom web part to page.

    ![HelloWorld web part visible in web part picker for modern page](../../../images/cdn-web-part-picker.png)

1. Notice how the web part is rendered even though you're not running the local web server.

    ![HelloWorld web part rendering on a modern page, which is in edit mode](../../../images/cdn-web-part-rendering.png)

1. Save changes on the page with the web part.
1. Open your browser's development tools and open the **Sources** tab.
1. Extend **publiccdn.sharepointonline.com** under the source and notice how the **hello-world-web-part** file is loaded from the Public CDN URL pointing dynamically to a library located under the app catalog site collection.

    ![HelloWorld web part bundle coming from public CDN URL in the sources tab of Chrome developer tools](../../../images/cdn-web-part-f12-source.png)

> [!NOTE]
> If you would not have CDN enabled in your tenant, and the `includeClientSideAssets` setting would be `true`in the **package-solution.json**, the loading URL for the assets would be dynamically updated and pointing directly to the ClientSideAssets folder located in the app catalog site collection. In this example case, the URL would be `https://sppnp.microsoft.com/sites/apps/ClientSideAssets/`. This change is automatic depending on your tenant settings and it does not require any changes in the actual solution package.

Now you've deployed your custom web part to SharePoint Online and it's being hosted automatically from the Microsoft 365 CDN.

## Next steps

You can load jQuery and jQuery UI and build a jQuery Accordion web part. To continue, see [Add jQueryUI Accordion to your client-side web part](./add-jqueryui-accordion-to-web-part.md).
