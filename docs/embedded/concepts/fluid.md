---
title: Fluid Framework in SharePoint Embedded Applications 
description: Details Fluid Integration with SharePoint Embedded Applications
ms.date: 03/06/2024
ms.localizationpriority: high
---

# Fluid Framework in SharePoint Embedded Applications 
Integrate Fluid Framework with SharePoint Embedded to easily and quickly build document collaboration into your applications.

 
## Background 

[Fluid Framework](https://fluidframework.com/) is a collection of client libraries for distributing, synchronizing, and saving shared data. These libraries allow multiple clients to simultaneously create and operate on shared data structures in real-time. Fluid Framework allows developers to use the same practices with shared data as with local data--for example, a Fluid object works in the same way as a local Typescript object.
 

## Get started 

Get started [building](https://github.com/microsoft/FluidExamples/) with Fluid Framework.

 

In this article, you'll get started using SharePoint Embedded Apps
To get started building with Fluid, you need: 

1. Admin credentials to a [Microsoft 365](https://www.microsoft.com/en-us/microsoft-365/enterprise/microsoft365-plans-and-pricing) tenant

1. Microsoft Entra ID Application (for example, created using VS Code Extension)

1. Retrieve `Client ID` 

1. `ContainerTypeId` 
   
1. A Container created with the same ContainerTypeId as above

1. [Visual Studio Code](https://code.visualstudio.com/download)

 

## Get started with SharePoint Embedded

TODO: take them through vs code ext set up or have them use existing SPE app

To work To create a [SharePoint Embedded](./../overview.md) Container Type, you need to first [register](https://learn.microsoft.com/azure/healthcare-apis/register-application) an application in Microsoft Entra ID. 

Create a free trial [Microsoft 365 tenant](https://www.microsoft.com/microsoft-365/enterprise/microsoft365-plans-and-pricing) or use another tenant that you have.

Open up Visual Studio Code and download the SharePoint Embedded [Visual Studio Code Extension](.././getting-started/spembedded-for-vscode.md).

Sign-in to the Visual Studio Extension and follow the instructions to: 

 


### Gather data (rename)

To get started on Fluid apps you will need the `ClientID` from your Microsoft Entra Application and the `ContainerTypeId` associated with the Containers created on that application.

You will need your ClientID gain the correct access tokens when working with Fluid Framework and documents. The `ContainerTypeid` is necessary for access the Containers associated with your Microsoft Entra application

TODO:
An easy way to retrieve both your `ContainerTypeId` and `ClientID` 
is to export the Postman Config file in the Visual Studio Code Extension. Hover over the App name on the side bar and select on the arrow. 

Save both your ContainerTypeId and ClientID from the Postman config `.json` file you exported.  

Now you have all the information you need to run the Fluid Sample App. 

 

## Run Fluid Sample App: Item Counter 

Now you can test out and start building with the [Fluid Sample App](https://github.com/microsoft/FluidExamples/tree/main/item-counter-spe) Item Counter. 

 

**Steps:** 

1. `cd` to where you like work on Fluid Apps or create a new folder

1. `git clone https://github.com/microsoft/FluidExamples.git ` 

1. `cd repo`

1. `cd item-counter-spe` 

1. Create empty `.env` file and input your ClientID and ContainerTypeId like so: 

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

 

 

 