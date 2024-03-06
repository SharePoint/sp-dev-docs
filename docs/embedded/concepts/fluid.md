---
title: Fluid Framework in SharePoint Embedded Applications 
description: Details Fluid Integration with SharePoint Embedded Applications
ms.date: 03/06/2024
ms.localizationpriority: high
---

# Fluid Framework in SharePoint Embedded Applications 
Integrate Fluid Framework with SharePoint Embedded to easily and quickly build document collaboration into your applications.

 
## Background 

[Fluid Framework](https://fluidframework.com/) is a collection of client libraries for distributing, synchronizing, and saving shared state. These libraries allow multiple clients to simultaneously create and operate on shared data structures in real-time using coding patterns similar to those used to work with local data. 
 

## Get started 

Get started [building](https://github.com/microsoft/FluidExamples/) with Fluid Framework.

 

To get started with Fluid Apps you will need: 

Admin credentials to a [M365 tenant](https://www.microsoft.com/en-us/microsoft-365/enterprise/microsoft365-plans-and-pricing) 

- `Client ID` 

- `ContainerTypeId` 

- [Visual Studio Code](https://code.visualstudio.com/download)

 

## Create a Container Type on your tenant 

If you have never worked with [SharePoint Embedded](./../overview.md) you will need to [register](https://learn.microsoft.com/azure/healthcare-apis/register-application) an application in Microsoft Entra ID and a Container Type. 

Create a free trial [M365 tenant](https://www.microsoft.com/microsoft-365/enterprise/microsoft365-plans-and-pricing) or use another tenant that you have 

Open up VS Code and download the SharePoint Embedded [Visual Studio Code Extension](.././getting-started/spembedded-for-vscode.md)

Log into the Visual Studio Extension and follow the instructions to: 

1. Create your Container Type 

2. Register your Container Type 

3. Optional: Create Containers 

 

### ContainerTypeId and ClientID 

An easy way to retrieve both your `ContainerTypeId` and `ClientID` is to export the Postman Config file in the VS Code Extension. Hover over the App name on the side bar and click on the arrow. 

Save both your ContainerTypeId and ClientID from the Postman config `.json` file you just exported.  

Now you have all the information you need to run the Fluid Sample App. 

 

## Run Fluid Sample App: Item Counter 

Now you can test out and start building with the [Fluid Sample App](FluidExamples/item-counter at main · microsoft/FluidExamples (github.com)) Item Counter. 

 

**Steps:** 

1. `git clone https://github.com/microsoft/FluidExamples.git ` 

2. `cd item-counter-spe` 

3. Create empty `.env` file and input your ClientID and ContainerTypeId like so: 

```
SPE_CLIENT_ID= 'TODO' 

SPE_CONTAINER_TYPE_ID='TODO' 
``` 

4. `npm install` and `npm run dev` and your app should be running! 
5. More details can be found in the Item Counter [README](https://github.com/microsoft/FluidExamples/tree/main/item-counter-spe)

 

 

 