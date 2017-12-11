---
title: Hosting client-side web part from Office 365 CDN
ms.date: 12/11/2017
ms.prod: sharepoint
---


# Hosting client-side web part from Office 365 CDN

This article describes how to host your client-side web part from Office 365 CDN. Office 365 CDN provide you easy solution to host your assets directly from your own Office 365 tenant. It can be used for hosting any static assets, which are used in SharePoint Online. 

> [!NOTE]
> There are multiple different hosting options for your web part assets. This tutorial concentrates on showing the Office 365 CDN option, but you could also use the [Azure CDN](./deploy-web-part-to-cdn.md) or simply host your assets from SharePoint library from your tenant. In the latter case, you would not benefit from the CDN performance improvements, but that would also work from the functionality perspective. Any location which end users can access using HTTP(S) would be technically suitable for hosting the assets for end users.

## Prerequisites

Make sure that you have completed the following tasks before you begin:

* [Build your first client-side web part](./build-a-hello-world-web-part.md)
* [Connect your client-side web part to SharePoint](./connect-to-sharepoint.md)
* [Deploy your client-side web part to a classic SharePoint page](./serve-your-web-part-in-a-sharepoint-page.md)


You can also follow follow these steps by watching the video on the [SharePoint PnP YouTube Channel](https://www.youtube.com/watch?v=MEZMs8VMVQ0&list=PLR9nK3mnD-OXvSWvS2zglCzz4iplhVrKq).

<a href="https://www.youtube.com/watch?v=MEZMs8VMVQ0&list=PLR9nK3mnD-OXvSWvS2zglCzz4iplhVrKq">
<img src="../../../images/spfx-youtube-tutorial4.png" alt="Screenshot of the YouTube video player for this tutorial" />
</a>



## Enable CDN in your Office 365 tenant
Ensure that you have latest version of the SharePoint Online Management Shell by downloading it from [Microsoft Download site](https://www.microsoft.com/en-us/download/details.aspx?id=35588).

> [!TIP]
> If you are using non-Windows machine, you cannot use the SPO Management Shell. You can however manage these settings using [Office 365 CLI](https://sharepoint.github.io/office365-cli/).

Connect to your SharePoint Online tenant with PowerShell session.
```
Connect-SPOService -Url https://contoso-admin.sharepoint.com
```

Get current status of public CDN settings from tenant level by executing following commands one-by-one. 
```
Get-SPOTenantCdnEnabled -CdnType Public
Get-SPOTenantCdnOrigins -CdnType Public
Get-SPOTenantCdnPolicies -CdnType Public
```
Enable public CDN in the tenant
```
Set-SPOTenantCdnEnabled -CdnType Public
```
Confirm settings by selecting 'Y' and pressing **Enter**

![Enable public CDN in tenant](../../../images/cdn-enable-o365-public-cdn.png)

Now public CDN has been enabled in the tenant using the default file type configuration allowed. This means that the following file type extensions are supported: "CSS,EOT,GIF,ICO,JPEG,JPG,JS,MAP,PNG,SVG,TTF,WOFF".

SharePoint Framework solutions can automatically benefit from the Office 365 Public CDN as long as it's enabled in your tenant. When CDN is enabled, `*/CLIENTSIDEASSETS` origin is automatically added as valid a valid origin.

> [!NOTE]
> If you have previously enabled Office 365 CDN, you should re-enable the public CDN, so that you will have the `*/CLIENTSIDEASSETS`entry added as valid CDN origin for public CDN.

You can double check the current setup of your end-points.Execute the following command to get the list of CDN origins from your tenant
```
Get-SPOTenantCdnOrigins -CdnType Public
```
Notice that your newly added origin is listed as a valid CDN origin. Final configuration of the origin will take a while (approximately 15 minutes), so we can continue by creating your test web part, which will be hosted from the origin, when the deployment is completed. 

![List of public origins in tenant](../../../images/cdn-public-origins.png)

> [!NOTE]
> When origin is listed without the *(configuration pending)* text, it is ready to be used in your tenant. This is the indication of an on-going configuration between SharePoint Online and CDN system. 


## Project directory

Switch to console and make sure you are still in the project directory you used to set up your web part project.

End the possible **gulp serve** task by choosing **Ctrl+C** and ensure that you are in your project directory:

```
cd helloworld-webpart
```

# Review solution settings 

Open the **HelloWorldWebPart** web part project in Visual Studio Code, or your preferred IDE.

Open **package-solution.json** from the **config** folder.

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

Default value for the **includeClientSideAssets** is `true`, which means that static assets are packaged automatically inside of the *.sppkg* files and you do not need to separately host your assets from external system. 

If *Office 365 CDN* is enabled, it will be used automatically with default settings. If *Office 365 CDN* is not enabled, assets will be served from app catalog site collection. 

> [!NOTE]
> Starting from the SharePoint Framework v1.4, static assets are by default packaged inside of the sppkg package. When package is deployed in app catalog, they are automatically being hosted either from Office 365 CDN (if enabled) or from app catalog URL. You can control this behavior with the `includeClientSideAssets` setting in `package-solution.json` file.

## Prepare web part assets to deploy

Execute the following tasks to bundle your solution
* This will execute a release build of your project by using a dynamic label as the host URL for your assets. This URL will be automatically updated based on your tenant CDN settings.

```
gulp bundle --ship
```

Execute the following task to package your solution

```
gulp package-solution --ship
```

This command will create an updated **helloworld-webpart.sppkg** package on the **sharepoint/solution** folder.

> [!NOTE]
> If you are interested on what actually got packaged inside of the sppkg file, you can have a look omn the content of the **sharepoint/solution/debug** folder.

Upload or drag & drop the newly created client-side solution package to the app catalog in your tenant. 

Because you already deployed the package, you will be prompted as to whether to replace the existing package.

![Override existing solution](../../../images/cdn-override-helloworld-webpart-package.png)

Choose Replace It.

![Installation popup from app catalog for the SPFx solution](../../../images/cnd-trust-helloworld-webpart-solution.png)

Notice how the **domain** list in the prompt is saying *SharePoint Online*. This is since the content is either served from the Office 365 CDN or from app catalog, depending on the tenant settings.

Choose **Deploy**

Open a site where previously installed the **helloworld-webpart-client-side-solution** solution or install solution to a new site.

After the solution has been installed, chose **Add a page** from the *gear* menu and pick **HelloWorld** from the modern page web part picker to add your custom web part to page.

![HelloWorld web part visible in web part picker for modern page](../../../images/cdn-web-part-picker.png)

Notice how the web part is rendered even though you are not running the node.js service locally. 

![HelloWorld web part rendering on a modern page, which is in edit mode](../../../images/cdn-web-part-rendering.png)

Save changes on the page with web part on it.

Press **F12** to open up developer tools.

Extend **publiccdn.sharepointonline.com** under the source and notice how the **hello-world-web-part** file is loaded from the Public CDN URL pointing dynamically to a library located under the app catalog site collection.

![HelloWorld web part bundle coming from public CDN URL in the sources tab of Chrome developer tools](../../../images/cdn-web-part-f12-source.png)

> [!NOTE]
> If you would not have CDN enabled in your tenant and the `includeClientSideAssets` setting would be `true`in the **package-solution.json**, loading URL for the assets would be dynamically updated and pointing directly to the ClientSideAssets folder located in the app catalog site collection. In this example case, URL would be `https://sppnp.microsoft.com/sites/apps/ClientSideAssets/`.

Now you have deployed your custom web part to SharePoint Online and it's being hosted automatically from the Office 365 CDN.

## Next steps

You can load jQuery, jQuery UI and build a jQuery Accordion web part. To continue, see [Add jQueryUI Accordion to your client-side web part](./add-jqueryui-accordion-to-web-part.md).

> [!NOTE]
> If you find an issue in the documentation or in the SharePoint Framework, please report that to SharePoint engineering using the [issue list at sp-dev-docs repository](https://github.com/SharePoint/sp-dev-docs/issues). Thanks for your input advance.