---
title: SharePoint Framework development with SharePoint Server 2019 & SharePoint Server SE
description: SharePoint Server 2019 supports SharePoint Framework client-side web parts in classic and modern pages, and extensions in modern pages.
ms.date: 06/10/2022
ms.localizationpriority: high
---
# SharePoint Framework development with SharePoint Server 2019 & SharePoint Server SE

SharePoint Server 2019 supports SharePoint Framework client-side web parts in classic and modern pages, and extensions in modern pages.

> [!IMPORTANT]
> SharePoint Server Subscription Edition (SE) has all the same dependencies and requirements for the SharePoint Framework as SharePoint Server 2019.

## Which version of the SharePoint Framework to use

Because SharePoint Online and SharePoint Server 2019 have different release cycles for new capabilities, they also have different capabilities when it comes to the SharePoint Framework. SharePoint Online always uses the latest version of the SharePoint Framework, but SharePoint Server 2019 only supports the version that matches the server-side dependencies of the deployed packages.

**SharePoint Server 2019 supports SharePoint Framework client-side web parts hosted on classic or modern SharePoint pages built by using the SharePoint Framework v1.4.1.** SharePoint Server 2019 also supports SharePoint Framework extensions hosted on modern SharePoint pages built using SharePoint Framework v1.4.1. This means that when you're targeting the SharePoint Server 2019 platform, you need to use the SharePoint Framework v1.4.1 because of the server-side version dependencies.

Starting from v1.3, the SharePoint Framework Yeoman generator supports scaffolding solutions that use both the latest version of the SharePoint Framework meant for use with SharePoint Online, and solutions that can be used with SharePoint on-premises based on the v1.1.0 or v1.4.1 of the SharePoint Framework. You don't need to install a separate version of the SharePoint Framework Yeoman generator to scaffold solutions meant for use with SharePoint on-premises.

## Development environment considerations

When you're developing SharePoint Framework client-side web parts, you need Internet connectivity to access npm packages. This is required when solutions are being scaffolded by using the SharePoint Framework Yeoman templates.

If Internet access isn't available for the development machines, you can set up a local on-premises registry for the required npm packages. However, this requires more software and a significant amount of work to set up and maintain local package versions with packages in the actual npm gallery.

The [Team-based development on the SharePoint Framework](team-based-development-on-sharepoint-framework.md) guidance document includes different options for development environment setup including when you might need to support multiple SharePoint Framework versions.

### Node.js, Gulp CLI, and Yeoman versions

The dependencies for SPFx v1.4.1 frameworks, tools, and the associated versions don't match the same dependency matrix for the latest versions of SharePoint Framework. In these cases, you may need to install specific versions of the tools. We recommend you install Node.js v8.9.4, gulp v3.9.1 and Yeoman v2.0.6.

## Manuals for web part development and deployment with SharePoint Framework

Follow these steps for web part development and deployment with SharePoint Framework:

- Prepare the environment for SharePoint Framework development
- Develop SharePoint Framework web part
- Verify SharePoint Framework web part on local SharePoint workbench
- Deploy SharePoint Framework solution to the SharePoint Server

### Prepare the environment for SharePoint Framework development

1. Install Node.js

   Install `Node.js v8.9.4`; if you have `nvm` installed, use `nvm` to install `8.9.4`. Verify the version if you have `Node.js` installed.
2. Install Yeoman and Gulp
   
   Specify these versions:
   - `npm install -g gulp@3.9.1` 
   - `npm install -g yo@2.0.6` 
3. Install Yeoman SharePoint Generator
   
   npm install `-g @microsoft/generator-sharepoint@1.9.1`. Although not the only option, version `1.9.1` can function appropriately.

### Develop SharePoint Framework web part

1. Create a directory for SharePoint Framework solution with `md spfx-webpart-onprem`.

2. Navigate to the above created directory with `cd spfx-webpart-onprem`.   

3. Run Yeoman SharePoint Generator to create the solution with `yo @microsoft/sharepoint`. 

   The Yeoman SharePoint generator will allow you to provide details regarding the intended solution.
   
   Ensure the following three baseline packages are available:
   
    :::image type="content" source="viva/get-started/actions/media-upload/img/Picture1.png" alt-text="This is Yoeman":::

4. Click **SharePoint 2019 onwards, including SharePoint Online**.

   Once the solution is created, click `package.json` to check if the SharePoint Framework version is 1.4.1.
   
   :::image type="content" source="viva/get-started/actions/media-upload/img/picture-2.png" alt-text="this is picture 2":::

### Verify SharePoint Framework web part on local SharePoint workbench

1. Browse to the **SPFx solution** directory.
 
2. Run `gulp serve`.
   
   `workbench.aspx` opens, you can add your web part to the page.
   
   :::image type="content" source="viva/get-started/actions/media-upload/img/picture-3.png" alt-text="This is picture 3":::

### Deploy SharePoint Framework solution to the SharePoint Server

You can deploy the SharePoint Framework solution to the SharePoint Server in these steps:

- Create service applications
- Prepare .sppkg package
- Create and configure app catalog site
- Add SharePoint Framework solution to modern SharePoint site
- Add SharePoint Framework web part to modern page

#### Create service applications

**Prerequisites**

Ensure the following service applications are enabled on the SharePoint Server:
- App Management Service 
- Microsoft SharePoint Foundation Subscription Settings Service
- Managed Metadata Web Service

In Central Admin site, you can create App Management Service application and Managed Metadata Web Service application by clicking **Application Management --> Manage service applications**.

:::image type="content" source="viva/get-started/actions/media-upload/img/picture-4.png" alt-text="This is picture 4":::

To create SharePoint Foundation Subscription Settings Service, use the following PowerShell command:

```powershell
$sa = New-SPSubscriptionSettingsServiceApplication -ApplicationPool $applicationPoolName -Name $serviceApplicationName -DatabaseName $dataBaseName 

New-SPSubscriptionSettingsServiceApplicationProxy -ServiceApplication $sa
```

#### Prepare .sppkg package

1. Bundle the solution with `gulp bundle --ship`.
          
2. Package the solution with `gulp package-solution --ship`.
   

#### Create and configure app catalog site

To create and configure App Catalog site, follow these steps:

1. From the **Central Administration** site, go to **Apps** and then click **Manage App Catalog**.

   Create a local admin as user01.
   
   :::image type="content" source="viva/get-started/actions/media-upload/img/picture-5.png" alt-text="This is picture 5.":::

2. Create the app catalog site by clicking **Web Application**. 
3. Click **Create a new app catalog site**, and then click **OK**.
4. On the Create App Catalog page, enter site information.

   > [!NOTE]
   > You need to use the above created local admin account as site collection administrator.
   > Ensure using no system account as site admin.

To configure App URLs, follow these steps:

1. From the **Central Administration** site, go to **Apps** and then click **Configure App URLs**.

  :::image type="content" source="viva/get-started/actions/media-upload/img/picture-6.png" alt-text="this is picture 6.":::

2. Configure the App domain and App prefix.

#### Upload the package to app catalog

Follow these steps to upload the SharePoint Framework package to the app catalog to make it available on all sites:

1. From the SharePoint App Catalog site, click **Apps for SharePoint**.
2. Click **Upload** to add SharePoint Framework package from *\sharepoint\solution* location.
   
   :::image type="content" source="viva/get-started/actions/media-upload/img/picture-7.png" alt-text="this is picture 7.":::

3. Click **Deploy**.

#### Add SharePoint Framework solution to modern SharePoint site 

Follow these steps to add your SharePoint Framework solution to modern SharePoint site:

1. From the Modern SharePoint site, click **Site Contents --> New --> App**.

   :::image type="content" source="viva/get-started/actions/media-upload/img/picture-8.png" alt-text="this is image 8.":::

2. Add your SharePoint Framework solution to this site by clicking your **SPFx solution**. 

   :::image type="content" source="viva/get-started/actions/media-upload/img/image-9.png" alt-text="this is image 9":::
   
   You can view the web part in Site contents list after adding it to the site collection.
   
   :::image type="content" source="viva/get-started/actions/media-upload/img/picture-10.png" alt-text="this is picture 10.":::

#### Add SharePoint Framework web part to modern page

Follow these steps to add your SharePoint Framework web part to the modern page:

1. Open an existing or a new modern page.
2. Click **Edit**, and then click the **+** sign to add your SharePoint Framework web part to the page. 
   
   :::image type="content" source="viva/get-started/actions/media-upload/img/picture-11.png" alt-text="this is picture 11.":::

3. You can view the added web part on the page.
   
   :::image type="content" source="viva/get-started/actions/media-upload/img/picture-12.png" alt-text="This is picture 12.":::
 
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

- [SharePoint Framework Overview](sharepoint-framework-overview.md)
- [SharePoint Server 2019 development platform](../general-development/sharepoint-2019-development-platform.md)
- [Definitive guide for developers: SharePoint Framework for SharePoint Server 2019](https://www.voitanos.io/blog/definitive-guide-sharepoint-framework-sharepoint-server-2019/)
- [Definitive guide for developers: SharePoint Framework for SharePoint Server SE](https://www.voitanos.io/blog/definitive-guide-sharepoint-framework-sharepoint-server-subscription-edition/)
