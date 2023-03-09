---
title: SharePoint Framework development with SharePoint Server 2019 & SharePoint Server SE
description: SharePoint Server 2019 & Subscription Edition (SE) supports SharePoint Framework client-side web parts in classic and modern pages, and extensions in modern pages.
ms.date: 03/14/2023
ms.localizationpriority: high
---

# SharePoint Framework development with SharePoint Server 2019 & SharePoint Server SE

SharePoint Server 2019 and Subscription Edition support SharePoint Framework client-side web parts in classic and modern pages, and extensions in modern pages.

> [!IMPORTANT]
> SharePoint Server Subscription Edition (SE) has all the same dependencies and requirements for the SharePoint Framework as SharePoint Server 2019.

## Which version of the SharePoint Framework to use

Because SharePoint Online and SharePoint Server 2019 have different release cycles for new capabilities, they also have different capabilities when it comes to the SharePoint Framework. SharePoint Online always uses the latest version of the SharePoint Framework, but SharePoint Server 2019 only supports the version that matches the server-side dependencies of the deployed packages.

> [!IMPORTANT]
>SharePoint Server 2019 supports SharePoint Framework client-side web parts hosted on classic or modern SharePoint pages built by using the SharePoint Framework v1.4.1. 

SharePoint Server 2019 also supports SharePoint Framework extensions hosted on modern SharePoint pages built using SharePoint Framework v1.4.1. This means that when you're targeting the SharePoint Server 2019 platform, you need to use the SharePoint Framework v1.4.1 because of the server-side version dependencies. 

Starting from v1.3, the SharePoint Framework Yeoman generator supports scaffolding solutions that use both the latest version of the SharePoint Framework meant for use with SharePoint Online, and solutions that can be used with SharePoint on-premises based on the v1.1.0 or v1.4.1 of the SharePoint Framework. You don't need to install a separate version of the SharePoint Framework Yeoman generator to scaffold solutions meant for use with SharePoint on-premises. 

## Development environment considerations

When you're developing SharePoint Framework client-side web parts, you need Internet connectivity to access npm packages. This is required when solutions are being scaffolded by using the SharePoint Framework Yeoman templates.

If Internet access isn't available for the development machines, you can set up a local on-premises registry for the required npm packages. However, this requires more software and a significant amount of work to set up and maintain local package versions with packages in the actual npm gallery.

The [Team-based development on the SharePoint Framework](team-based-development-on-sharepoint-framework.md) guidance document includes different options for development environment setup including when you might need to support multiple SharePoint Framework versions.

### Node.js, gulp-cli, and Yeoman versions

The dependencies for SPFx v1.4.1 frameworks, tools, and the associated versions don't match the same dependency matrix for the latest versions of SharePoint Framework. In these cases, you may need to install specific versions of the tools. Because SPFx v1.4.1 is supported on Node.js v6 and Node.js v8 by default, you need to ensure you have a supported version of Node.js installed as well as an older version of Gulp CLI and Yeoman.

> [!NOTE]
   >- The Gulp team introduced a separate package, [gulp-cli](https://www.npmjs.com/package/gulp-cli), that should be installed globally. It can be used by projects that use either Gulp v3 & Gulp v4.
   >- Learn more about the gulp-cli here: [gulpjs/gulp/#2324](https://github.com/gulpjs/gulp/issues/2324).

Microsoft recommends using the most recent version of the Yeoman generator for the SharePoint Framework [@microsoft/generator-sharepoint](https://www.npmjs.com/package/@microsoft/generator-sharepoint) that supports creating on-premises projects: SPFx v1.10.0.  

> [!IMPORTANT]
> The Yeoman generator for the SharePoint Framework, starting with v1.13.0, only supports projects for SharePoint Online. Learn more about this change in the [SharePoint Framework v1.13 release notes](release-1.13.md). However, SPFx 1.4.1 is  supported on Node.js v6 and Node.js v8 by default. Therefore, you need to get the latest version of the Yeoman generator for the SharePoint Framework (v1.10.0) that works on the same version of Node.js (v6 or v8) that SPFx v1.4.1 is supported on. Solution structure is created then with the v1.4.1 version packages as long as you select the environmen target properly in the Yeoman generator flow.

### Prepare the environment for SharePoint Framework development

1. Install [Node.js v8.17.0](https://nodejs.org/download/release/v8.17.0/).<br>
   SPFx v1.4.1 is also supported on Node.js v12 and v14 (v12.18.1 and v14.17.1 to be specific), although there is an incompatible issue [gulp 3 wasn't compatible with Node 12+](https://github.com/gulpjs/gulp/issues/2324). The workaround to resolve this issue is to specify the version of graceful-fs component as 4+. You can create npm-shrinkwrap.json in the root folder of the project and input the following content, and then run “npm install”. Also, you can use package-lock.json to resolve this issue too.

```powershell
    { 

      “dependencies”:{ 
         “graceful-fs”: { 
                “version”: “4.2.2” 
          } 
       } 
    }
```   

2. Install global dependencies.<br> 
   `npm install gulp-cli@2.3.0 --global`<br>
   `npm install yo@2.0.6 --global`<br>
   `npm install @microsoft/generator-sharepoint@1.10.0 --global`<br> 

For more information, see [SharePoint Framework development tools and libraries compatibility](tools-and-libraries.md). 

## Build and deploy your first web part with SharePoint Framework 

To create a new web part with SharePoint Framework , see [Build your first SharePoint client-side web part](web-parts/get-started/build-a-hello-world-web-part.md).

To deploy your web part to SharePoint on-premises, unlike deploying to SharePoint Online, some dependent service applications and specific configurations on the SharePoint Server are required, seeing below tutorials. You can contact SharePoint Server administrator if you do not have appropriate permission to check or configure. 

### Create service applications

Ensure the following service applications are enabled on the SharePoint Server: 

- App Management Service
- Microsoft SharePoint Foundation Subscription Settings Service
- Managed Metadata Web Service

In Central Admin site, you can create App Management Service application and Managed Metadata Web Service application by selecting **Application Management --> Manage service applications**.

:::image type="content" source="../images/manage-service-application.png" alt-text="This is manage service application image.":::

To create SharePoint Foundation Subscription Settings Service, use the following PowerShell command:

```powershell
$sa = New-SPSubscriptionSettingsServiceApplication -ApplicationPool $applicationPoolName -Name $serviceApplicationName -DatabaseName $dataBaseName 

New-SPSubscriptionSettingsServiceApplicationProxy -ServiceApplication $sa
```

#### Prepare .sppkg package

1. Bundle the solution.<br>
   `gulp bundle --ship`
          
1. Package the solution.<br>
   `gulp package-solution --ship`

   Verify SharePoint Framework web part on local SharePoint workbench. 

#### Create and configure App Catalog site

To create and configure App Catalog site, follow these steps:

1. From the **Central Administration** site, go to **Apps** and then select **Manage App Catalog**.

   Create a local admin for subsequence use of as the site collection administrator.
   
   :::image type="content" source="../images/manage-app-catalogue.png" alt-text="This is manage app catalog image.":::

2. Create the app catalog site by selecting **Web Application**. 
3. Select **Create a new app catalog site**, and then select **OK**.
4. On the **Create App Catalog** page, enter site information.

   > [!NOTE]
   > You need to use the above created local admin account as site collection administrator.
   > Ensure using no system account as site admin.

To configure App URLs, follow these steps:

1. From the **Central Administration** site, go to **Apps** and then select **Configure App URLs**.

   :::image type="content" source="../images/configure-app-urls.png" alt-text="This is configure app urls image.":::

2. Configure the App domain and App prefix.

#### Upload, install and add to app catalog

For more tutorials about uploading the package to App Catalog and adding the web part to modern page, see [Deploy your client-side web part to a SharePoint page](web-parts/get-started/serve-your-web-part-in-a-sharepoint-page.md). 

## Determine which version was used for a solution

If you have existing SharePoint Framework solutions and you'd like to confirm which version of the SharePoint Framework was used for them, you'll need to check the following locations:

- **.yo-rc.json**: File in the solution's root folder that stores the SharePoint Framework Yeoman template version used when the solution was created.
- **package.json**: File in the solution's root folder that contains references to package versions used in the solution.
- **npm-shrinkwrap.json**: File in the solution's root folder that contains information about the exact versions used (if you used the `npm shrinkwrap` command to lock down the exact versions of the solution).
- **package.json**: File in the **node_modules/@microsoft/sp-webpart-base** folder that contains a `version` attribute matching the used SharePoint Framework version, if you have installed packages to your solution.

## Troubleshooting

### Impact of Node.js v6, Node.js v8, HTTP1, & HTTP2

Around this the time of the v1.1 release, Node.js was transitioning from Node.js v6.x to v8.x. In this update, Node.js introduced a change where the default HTTP protocol switched from HTTP1 to HTTP2. SPFx v1.1 was written for HTTP1, not HTTP2, so this change affected the local web server for SPFx v1.1 projects.

In Node.js v8.x, you can force HTTP1 by setting the following environment variable to instruct Node.js to use HTTP1 instead of the default HTTP2: `NODE_NO_HTTP2=1`. This environment variable only exists in Node.js v8.x. That's why if you're building SPFx solutions for SharePoint Server 2016, you should use Node.js v8.x.

This issue doesn't impact later versions of SPFx because they've been updated to support HTTPs.

For more information, see [issue #1002](https://github.com/SharePoint/sp-dev-docs/issues/1002).

## See also

- [SharePoint Framework Overview](sharepoint-framework-overview.md).
- [SharePoint Server 2019 development platform](../general-development/sharepoint-2019-development-platform.md).
- [Definitive guide for developers: SharePoint Framework for SharePoint Server 2019](https://www.voitanos.io/blog/definitive-guide-sharepoint-framework-sharepoint-server-2019/).
- [Definitive guide for developers: SharePoint Framework for SharePoint Server SE](https://www.voitanos.io/blog/definitive-guide-sharepoint-framework-sharepoint-server-subscription-edition/).
