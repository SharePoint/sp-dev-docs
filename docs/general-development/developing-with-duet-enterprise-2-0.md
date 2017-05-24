---
title: Developing with Duet Enterprise 2.0
ms.prod: SHAREPOINT
ms.assetid: c3ef38aa-559e-4832-95c7-75e222c77624
---


# Developing with Duet Enterprise 2.0

## Overview
<a name="Overview"> </a>

Duet Enterprise 2.0 is the latest version of a collaborative effort between Microsoft and SAP to give SharePoint users the ability to work with data from SAP systems.It combines components from SAP as well as SharePoint and SharePoint Online. It gives a developer the ability to create components that will allow users to bring data from SAP systems into the familiar SharePoint environment.
  
    
    

## Features of Duet Enterprise 2.0
<a name="Overview"> </a>

When properly installed and configured, Duet Enterprise 2.0 will provide the following features:
  
    
    

- You can work with data in SAP systems within SharePoint using Business Data Web parts, External lists and custom components.
    
  
- Use SAP data in SharePoint without code by using built-in components.
    
  
- Use SAP reporting systems inside of an app.
    
  
- Use special web parts installed with Duet Enterprise 2.0 to add SAP information to SharePoint pages
    
  
- Use SAP workflow in an app.
    
  
- Developers can use client-side JavaScript to interact with SAP external data.
    
  
- Secure data using OAuth for authentication.
    
  

## Setting up the development environment
<a name="SettingUp"> </a>

Developing SharePoint Add-ins using Duet Enterprise 2.0, for the most part, is exactly the same as creating standard SharePoint Add-ins. You can use Visual Studio to extend your apps and work within the robust framework of the Visual Studio integrated development environment.
  
    
    

## Adding external content types
<a name="AddingECT"> </a>

In order to access the external data housed on the SAP system, you will have to add an external content type. Since SAP data is exposed through OData endpoints, the auto-generation tools installed in Visual Studio can be used to  [How to: Create an external content type from an OData source in SharePoint](how-to-create-an-external-content-type-from-an-odata-source-in-sharepoint) that is scoped at the app level.
  
    
    
Follow these steps to create an external content type:
  
    
    

### Creating an external content type from an SAP OData endpoint


1. In **Solution Explorer**, open the shortcut menu for the project, and choose **Add**, **Content types for External Data source**.
    
  
2. On the **Specify OData Source** page, enter the URL of the Duet Enterprise Workflow Service.
    
  
3. Choose a name for your OData source.
    
  
4. Select the entities that are needed.
    
  
5. Choose **Finish**.
    
  
Visual Studio will create a new folder named External Content Types where you will find the newly created BDC model.
  
    
    

## Configuring the BDC model
<a name="ConfiguringProject"> </a>

The most important thing to make the project work, is to add the **ODataExtensionProvider** property to the BDC model. This property defines the extension provider that provides BCS with the SAP extensions needed for creating app code.
  
    
    
This sample shows the properties added to the BDC model:
  
    
    



```XML

<LobSystem Type="OData" Name="LOB_SYSTEM_NAME">
                     <Properties>
                          <Property Name="ODataServiceMetadataUrl" Type="System.String">
                               https://<DUET_METADATA_URL>:443/sap/opu/odata/sap/ 
                               ZANDY_PO_HEADER_SRV/$metadata</Property>
                          <Property Name="ODataServicesVersion" Type="System.String">2.0</Property>
                          <Property Name="ODataExtensionProvider" Type="System.String"> 
                               OBA.Server.Canary.ObaOdataServerExtensionProvider, 
                               OBA.Server.SSOProvider, 
                               Version=15.0.0.0, 
                               Culture=neutral, 
                               PublicKeyToken=71e9bce111e9429c</Property>
                          <Property Name="TraceHeader" Type="System.String">SAP-PASSPORT</Property>
                     </Properties>

```


## Using Duet starter services to develop custom apps
<a name="UsingDuetStarterServices"> </a>

Duet Enterprise 2.0 installs several starter services to the file system on the SharePoint server. In a default installation, the files are found at C:\\Program Files\\Duet Enterprise\\2.0\\Solutions\\Starter Services. Among these are: 
  
    
    

- OBACustomerWorkspace
    
  
- OBAOrderToCash
    
  
- OBAPortal
    
  
- OBAProductCenter
    
  
Each of these solutions contains WSP files, solution and other supporting files needed to implement them.
  
    
    
These solutions can be used to see what can be done with Duet Enterprise 2.0 and what the development patterns are, but they are not supported for use in SharePoint Add-ins.
  
    
    

## Additional resources
<a name="ConNavExample_resources"> </a>


-  [Duet Enterprise for Microsoft SharePoint and SAP Server 2.0](http://technet.microsoft.com/en-us/library/ff972436.aspx)
    
  
-  [How to: Create an external content type from an OData source in SharePoint](how-to-create-an-external-content-type-from-an-odata-source-in-sharepoint)
    
  
-  [Visual Studio Developer Center](http://msdn.microsoft.com/en-us/vstudio/default)
    
  
-  [Office Development with Visual Studio](http://msdn.microsoft.com/en-us/office/hh133430)
    
  

