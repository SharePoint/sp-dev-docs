---
title: SharePoint Framework development with SharePoint Server Subscription Edition
description: SharePoint Server Subscription Edition (SE) supports SharePoint Framework client-side web parts in classic and modern pages, and extensions in modern pages.
ms.date: 06/10/2022
ms.localizationpriority: high
---

# SharePoint Framework development with SharePoint Server Subscription Edition

SharePoint Server Subscription Edition (SE) supports SharePoint Framework client-side web parts in classic and modern pages, and extensions in modern pages.

> [!IMPORTANT]
> SharePoint Server Subscription Edition (SE) has all the same dependencies and requirements for the SharePoint Framework as SharePoint Server 2019.

## Which version of the SharePoint Framework to use

Starting from v1.3, the SharePoint Framework Yeoman generator supports scaffolding solutions that use both the latest version of the SharePoint Framework meant for use with SharePoint Online, and solutions that can be used with SharePoint on-premises based on the v1.1.0 or v1.4.1 of the SharePoint Framework. You don't need to install a separate version of the SharePoint Framework Yeoman generator to scaffold solutions meant for use with SharePoint on-premises.

## Development environment considerations

When you're developing SharePoint Framework client-side web parts, you need Internet connectivity to access npm packages. This is required when solutions are being scaffolded by using the SharePoint Framework Yeoman templates.

If Internet access isn't available for the development machines, you can set up a local on-premises registry for the required npm packages. However, this requires more software and a significant amount of work to set up and maintain local package versions with packages in the actual npm gallery.

The [Team-based development on the SharePoint Framework](team-based-development-on-sharepoint-framework.md) guidance document includes different options for development environment setup including when you might need to support multiple SharePoint Framework versions.

### Node.js, gulp-cli, and Yeoman versions

The dependencies for SPFx v1.4.1 frameworks, tools, and the associated versions don't match the same dependency matrix for the latest versions of SharePoint Framework. In these cases, you may need to install specific versions of the tools. We recommend you install Node.js v8.9.4, gulp v3.9.1, and Yeoman v2.0.6.

> [!IMPORTANT]
> The Yeoman generator for the SharePoint Framework, starting with v1.13.0, only supports projects for SharePoint Online. Learn more about this change in the [SharePoint Framework v1.13 release notes](release-1.13.md). However, SPFx 1.4.1 is only supported on Node.js v6 and Node.js v8. Therefore, you need to get the latest version of the Yeoman generator for the SharePoint Framework (v1.10.0) that works on the same version of Node.js (v6 or v8) that SPFx v1.4.1 is supported on. Solution structure is created then with the v1.4.1 version packages as long as you select the environmen target properly in the Yeoman generator flow.

## Manuals for web part development and deployment with SharePoint Framework

### Prepare the environment for SharePoint Framework development

1. Install Node.js

   Install [Node.js v8.9.4](https://nodejs.org/download/release/v8.9.4/); if you have installed nvm, you can use nvm to install `nvm install 8.9.4`
 
   if you have installed Node.js, check the version
 
   `node-v`
1. Install Yeoman and Gulp
   
   Specify these versions:
   - `npm install -g gulp@3.9.1` 
   - `npm install -g yo@2.0.6` 
1. Install Yeoman SharePoint Generator
   
   `npm install-g @microsoft/generator-sharepoint@1.10.0`

### Develop SharePoint Framework web part

1. Create a directory for SharePoint Framework solution.
 
   `md spfx-webpart-onprem`

1. Navigate to the above created directory.

   `cd spfx-webpart-onprem`   

1. Run Yeoman SharePoint Generator to create the solution.

    `yo @microsoft/sharepoint`

   The Yeoman SharePoint generator will allow you to provide details regarding the intended solution.
   
   Ensure the following three baseline packages are available:
   
   :::image type="content" source="../images/screenshot_1.png" alt-text="This is screenshot 1.":::

1. Select **SharePoint 2019 onwards, including SharePoint Online**.

   Once the solution is created, select package.json to check if the SharePoint Framework version is 1.4.1.
   
   :::image type="content" source="../images/screenshot_2.png" alt-text="This is screenshot 2.":::

### Verify SharePoint Framework web part on local SharePoint workbench

1. Browse to the **SPFx solution** directory.
 
1. Run `gulp serve`.
   
   workbench.aspx opens, you can add your web part to the page.
   
   :::image type="content" source="../images/screenshot_3.png" alt-text="This is screenshot 3.":::

### Deploy SharePoint Framework solution to the SharePoint Server

#### Create service applications

Ensure the following service applications are enabled on the SharePoint Server:
- App Management Service 
- Microsoft SharePoint Foundation Subscription Settings Service
- Managed Metadata Web Service

In Central Admin site, you can create App Management Service application and Managed Metadata Web Service application by selecting **Application Management --> Manage service applications**.

:::image type="content" source="../images/screenshot_4.png" alt-text="This is screenshot 4.":::

To create SharePoint Foundation Subscription Settings Service, use the following PowerShell command:

```powershell
$sa = New-SPSubscriptionSettingsServiceApplication -ApplicationPool $applicationPoolName -Name $serviceApplicationName -DatabaseName $dataBaseName 

New-SPSubscriptionSettingsServiceApplicationProxy -ServiceApplication $sa
```

#### Prepare .sppkg package

1. Bundle the solution.

   `gulp bundle --ship`
          
1. Package the solution.

   `gulp package-solution --ship`

    Verify SharePoint Framework web part on local SharePoint workbench 

#### Create and configure app catalog site

To create and configure App Catalog site, follow these steps:

1. From the **Central Administration** site, go to **Apps** and then select **Manage App Catalog**.

   Create a local admin as user01.
   
   :::image type="content" source="../images/screenshot_5.png" alt-text="This is screenshot 5.":::

1. Create the app catalog site by selecting **Web Application**. 
1. Select **Create a new app catalog site**, and then select **OK**.
1. On the **Create App Catalog** page, enter site information.

   > [!NOTE]
   > You need to use the above created local admin account as site collection administrator.
   > Ensure using no system account as site admin.

To configure App URLs, follow these steps:

1. From the **Central Administration** site, go to **Apps** and then select **Configure App URLs**.

      :::image type="content" source="../images/screenshot_8.png" alt-text="This is screenshot 8.":::

1. Configure the App domain and App prefix.

#### Upload the package to app catalog

Follow these steps to upload the SharePoint Framework package to the app catalog to make it available on all sites:

1. From the SharePoint App Catalog site, select **Apps for SharePoint**.
1. Select **Upload** to add SharePoint Framework package from *\sharepoint\solution* location. 
1. Select **Deploy**.

   :::image type="content" source="../images/screenshot_9.png" alt-text="This is screenshot 9.":::

### Add SharePoint Framework solution to modern SharePoint site 

Follow these steps to add your SharePoint Framework solution to modern SharePoint site:

1. From the Modern SharePoint site, select **Site Contents --> New --> App**.

   
   :::image type="content" source="../images/screenshot_10.png" alt-text="This is screenshot 10.":::

1. Add your SharePoint Framework solution to this site by selecting your **SPFx solution**. 

   :::image type="content" source="../images/screenshot_11.png" alt-text="This is screenshot 11.":::
   
   You can view the web part in Site contents list after adding it to the site collection.
   
   :::image type="content" source="../images/screenshot_12.png" alt-text="This is screenshot 12.":::

### Add SharePoint Framework web part to modern page

Follow these steps to add your SharePoint Framework web part to the modern page:

1. Open an existing or a new modern page.
1. Select **Edit**, and then select the **+** sign to add your SharePoint Framework web part to the page. 
   
   :::image type="content" source="../images/screenshot_13.png" alt-text="This is screenshot 13.":::

1. You can view the added web part on the page.
   
   :::image type="content" source="../images/screenshot_14.png" alt-text="This is screenshot 14.":::

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
