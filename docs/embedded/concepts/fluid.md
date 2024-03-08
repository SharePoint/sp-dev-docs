---
title: Fluid Framework in SharePoint Embedded Applications 
description: Details Fluid Integration with SharePoint Embedded Applications
ms.date: 03/06/2024
ms.localizationpriority: high
---

# Fluid Framework in SharePoint Embedded Applications 

Leverage Fluid Framework and [SharePoint Embedded](../overview.md) to seamlessly and efficiently incorporate document collaboration into your applications
 
## Background 

[Fluid Framework](https://fluidframework.com/) is a collection of client libraries for distributing, synchronizing, and saving shared data. These libraries allow multiple clients to simultaneously create and operate on shared data structures in real-time. Fluid Framework allows developers to use the same practices with shared data as with local data--for example, a Fluid object works in the same way as a local Typescript object.
 

## Quickstart 

Start [building](https://github.com/microsoft/FluidExamples/) in the Fluid [Sample Apps Directory](https://github.com/microsoft/FluidExamples/tree/main/item-counter-spe). You'll need to [create](#get-started-with-sharepoint-embedded) a SharePoint Embedded application first.


### Get started with SharePoint Embedded

Try SharePoint Embedded for free by creating a [Trial Container Type](./app-concepts/containertypes.md).

1. Set up a free trial [Microsoft 365 tenant](https://www.microsoft.com/microsoft-365/enterprise/microsoft365-plans-and-pricing). Alternatively, you can use an existing tenant if you have admin credentials.

1. Sign into the [SharePoint Embedded Visual Studio Code Extension](.././getting-started/spembedded-for-vscode.md) and follow the steps to create an application and Trial Container Type.


## Pre-requisites

To get started building with Fluid Framework, you need:


1. **Admin Credentials**: You’ll need administrative credentials for a [Microsoft 365](https://www.microsoft.com/en-us/microsoft-365/enterprise/microsoft365-plans-and-pricing) tenant.

1. **SharePoint Embedded Application**: Ensure that you’ve registered your application in [Microsoft Entra ID](https://entra.microsoft.com/). If you do not have a SharePoint Embedded application refer to the [earlier section](#get-started-with-sharepoint-embedded).

1. **Application (Client) ID**: Obtain the `Client ID` for your SharePoint Embedded Application.

1. **Container Type Information**:
   - Identify the `ContainerTypeId` associated with your app’s Container Type.

1. **Containers**:
   - Make sure you have at least one Container of the same Container Type linked to your SharePoint Embedded Application.


## Get started with Fluid

### Access App information

You will need the `ClientID` from your Microsoft Entra Application and the `ContainerTypeId` associated with the Containers created on that application.

The `ClientID` is essential for acquiring the correct access tokens when working with Fluid Framework and documents. The `ContainerTypeId` is necessary for accessing Containers associated with your Microsoft Entra application

If you used the [Visual Studio Code Extension](../getting-started/spembedded-for-vscode.md) you can [export](https://learn.microsoft.com/sharepoint/dev/embedded/getting-started/spembedded-for-vscode#export-postman-environment) your Postman Environment to easily view your both your `ContainerTypeId` and `ClientID`.

Otherwise, you can access your `ContainerTypeId` by using the [`Get-SPOContainerType`](https://learn.microsoft.com/sharepoint/dev/embedded/concepts/admin-exp/dev-admin#viewing-of-container-types) Powershell commandlet. Your `ClientID` is available in [Microsoft Entra ID](https://entra.microsoft.com/) by navigating to **Identity** > **App Registrations** > **All applications** to view your application overview.



## Run Fluid Sample App: Item Counter 

Now you can test out and start building with the [Fluid Sample App](https://github.com/microsoft/FluidExamples/tree/main/item-counter-spe) Item Counter. 

 

**Steps:** 

1. Gather your `ClientID` and `ContainerTypeId` of your SharePoint Embedded Application as well as your tenant admin credentials

1. `cd` to where you like to clone the Fluid Sample App

1. `git clone https://github.com/microsoft/FluidExamples.git ` 

1. Navigate to the Item Counter directory `cd .\FluidExamples\item-counter-spe\`

1. Create an empty `.env` file and input your `ClientID` and `ContainerTypeId` with no spaces like so: 

    ```
    SPE_CLIENT_ID=YOUR_CLIENTID

    SPE_CONTAINER_TYPE_ID=YOUR_CONTAINERTYPE_ID
    ``` 

1. `npm install`

1. `npm run dev`
   
1. Once webpack is completed go to https://localhost:8080

1. Sign in with the Admin credentials for your tenant
   
1. Copy the full URL to another browser tab or send it to someone who has credentials to the same tenant. These can be user credentials as long as they are on the same tenant. This will show that the data is synched between clients.
   
1. Congrats on getting your first Fluid App to run! More details can be found in the Item Counter [README](https://github.com/microsoft/FluidExamples/tree/main/item-counter-spe).
   
<!-- add screenshot  -->

 

 

 