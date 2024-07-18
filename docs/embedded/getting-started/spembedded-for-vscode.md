---
title: SharePoint Embedded for Visual Studio Code
description: Installation and getting started with SharePoint Embedded for Visual Studio Code
ms.date: 07/17/2024
ms.localizationpriority: high
---

# SharePoint Embedded for Visual Studio Code

The SharePoint Embedded Visual Studio Code extension helps developers get started for free with SharePoint Embedded application development. 

> [!IMPORTANT]
> To start building with SharePoint Embedded you will need administrative access to Microsoft 365 tenant.
> If you do not already have a tenant, you can get your own tenant with the [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program), [Microsoft Customer Digital Experience](https://cdx.transform.microsoft.com/), or create a free trial of an [Microsoft 365 E3 license](https://www.microsoft.com/microsoft-365/enterprise/microsoft365-plans-and-pricing).

## Install SharePoint Embedded for Visual Studio Code

1. Open a new window in [Visual Studio Code](https://code.visualstudio.com/) and navigate to "**Extensions**" on the activity bar.
1. Search "SharePoint Embedded" in the Extensions view. You can also view the extension in [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=SharepointEmbedded.ms-sharepoint-embedded-vscode-extension).
1. Select **"Install"** and the SharePoint Embedded icon will appear on the activity bar.
1. Select the icon to open the SharePoint Embedded view and create a container type with trial configuration.

![SharePoint Embedded VS Extensions](../images/vsx-images/n1downloadvsx.png)

### Sign in with admin credentials

To use the extension, you must sign into a Microsoft 365 tenant with an administrator account.

If you don't already have a tenant, you can get a tenant through the [Microsoft 365 Developer Program](https://developer.microsoft.com/microsoft-365/dev-program), [Microsoft Customer Digital Experience](https://cdx.transform.microsoft.com/), or create a free trial of an [Microsoft 365 E3 license](https://www.microsoft.com/en-us/microsoft-365/enterprise/microsoft365-plans-and-pricing).

![Install](../images/vsx-images/n2vsx-signin.png)

- Authentication opens a new tab in an external browser to grant permissions
- Select **Accept** on the pop-up window prompting admin consent
 
![consentperms](../images/vsx-images/n3vsx-grant-admin-consent.png)

## Create a container type with a trial configuration

Once signed in, you are prompted to create a [container type with trial configuration](../concepts/app-concepts/containertypes.md#trial-use). A container type lets you get started calling SharePoint Embedded APIs and building a proof-of-concept application using SharePoint Embedded. Learn more about [container types](../concepts/app-concepts/containertypes.md).

![home screen](../images/vsx-images/n4vsx-home-screen.png)

- Select **Create Trial Container Type**
- Follow the prompts to name your container type. You can change your container type name later on.

![create container type](../images/vsx-images/n5a-name-ct.png)

> [!NOTE]
> SharePoint Embedded for Visual Studio Code only supports container types with trial configuration at this time. Other container types with standard or pass-through billing configurations must be created using the SharePoint Online PowerShell Module.

## Create a Microsoft Entra ID App

Every container type is owned by a Microsoft Entra ID application. The first step when creating a free trial container type is to create a new or select an existing Microsoft Entra ID application as the owning application. You can either specify the name of your new application or pick one of your existing applications. Learn more about SharePoint Embedded [app architecture](../concepts/app-concepts/app-architecture.md)

- Follow the prompts to name your new Entra application or select an existing application ID

![Create App](../images/vsx-images/n6aname-app.png)

> [!NOTE]
> If you choose an existing application, the extension will update that app's configuration settings for it to work with both SharePoint Embedded and this extension. Doing this is NOT recommended on production applications.

After your container type is created and your application is configured, you'll be able to view your Local tenant registration as a tree in the left nav-bar.

## Register your container type

After creating your container type, you'll need to register that container type on your local tenant. Learn more about container type [registration](../concepts/app-concepts/register-api-documentation.md).

- Follow the prompts and select **'Register on local tenant'** on the lower right corner of the VS Code window
- If you don't see the prompt, you can right-click on your `<container-type-name>` and select **Register** from the menu

![register](../images/vsx-images/n7aregister-ct.png)

#### Grant permissions

When registering your container type you'll need to grant permissions to access your application

An external browser window will pop open for you to sign-in and grant admin consent

![login permissions](../images/vsx-images/n9alogin-grant-permissions.png)

## Create your first container

With your container type registered, you can now create your first container. Only five containers of container type can be created to upload and manage content.

- Right-click on the **Containers** drop-down from the tree in the left nav-bar and select **Create container**
- Enter a name for the container you would like to create

![create container](../images/vsx-images/n10acreate-container.png)
![name container](../images/vsx-images/n11aname-first-cont.png)

## Recycling Containers

You can also recycle and recover containers within the extension.

![recycle containers](../images/vsx-images/n12arecycle-cont.png)

![final home page](../images/vsx-images/n13a-final-home-page.png)

## Load Sample App

With your free trial container type created, you can use the extension to load one of the SharePoint Embedded sample apps and automatically populate the runtime configuration file with the details of your Microsoft Entra ID app and container type.

![Load Sample App](../images/vsx-images/n15vsxsa-c.png)

## Export Postman Environment

The [SharePoint Embedded Postman Collection](https://github.com/microsoft/SharePoint-Embedded-Samples/tree/main/Postman) allows you to explore and call the SharePoint Embedded APIs. The Collection requires an environment file with variables used for authentication and various identifiers. This extension automates the generation of this populated environment file so you can import it into Postman and immediately call the SharePoint Embedded APIs.

![Export Postman Environment](../images/vsx-images/n14postman-c.png)
