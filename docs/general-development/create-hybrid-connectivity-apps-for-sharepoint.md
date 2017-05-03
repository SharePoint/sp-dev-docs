---
title: Create hybrid connectivity apps for SharePoint
ms.prod: SHAREPOINT
ms.assetid: 311f036e-3442-4497-b35e-442b665462d3
---


# Create hybrid connectivity apps for SharePoint
Learn about the process of developing and deploying apps for SharePoint hybrid connectivity solutions.
## Hybrid connectivity in SharePoint and SharePoint Online
<a name="bk_hybridconnectivity"> </a>

As businesses move to using SharePoint Online, they need a way to expose large amounts of proprietary data safely and securely. To help solve this challenge, SharePoint introduced hybrid connectivity.
  
    
    
The Business Connectivity Services (BCS) hybrid connectivity capability lets SharePoint consume data housed on-premises, inside corporate firewalls, and secured by various forms of authentication. With hybrid connectivity functionality, SharePoint Online can access this data securely over the web as if it was on the same internal network. Once hybrid connectivity is configured, users can work with data that is secured within the business' infrastructure. They can access and manipulate the data according to the permissions that they have been granted in SharePoint.
  
    
    
For a complete description of how to configure a working hybrid solution, see  [Hybrid for SharePoint](http://technet.microsoft.com/en-us/library/jj838715.aspx). This series of articles walks you through all the requirements of configuring data sources, reverse proxies, search, security, networking, and everything else needed to set up the end-to-end scenario.
  
    
    

> **Caution:**
> To configure a hybrid SharePoint environment, you need a combination of expert skills and significant hands-on experience with SharePoint, SharePoint Online, and related products and technologies. We recommend that you engage Microsoft Consulting Services to provide technical guidance and support during the design and deployment of your hybrid environment. > For more information, see  [Microsoft Services](http://www.microsoft.com/en-us/microsoftservices/deploy.aspx). 
  
    
    

For you to be able to create an app that consumes data from an internal data source through BCS and the hybrid connection, this article assumes that you have already followed the procedures to configure your hybrid environment.
  
    
    

## Create hybrid connectivity apps
<a name="bkmk_CreatingHybridConnectivityApps"> </a>

Creating a hybrid SharePoint Add-in is essentially the same as creating any SharePoint Add-in.
  
    
    
Follow these steps to create a hybrid app:
  
    
    

-  [Prepare the data source](#bkmk_PrepareDataSource)
    
  
-  [Create an SharePoint Add-in](#bkmk_CreateAnApp)
    
  
-  [Create an external content type](#bkmk_CreateECT)
    
  
-  [Deploy the hybrid app](#bkmk_DeployHybridApp)
    
  

### Prepare the data source
<a name="bkmk_PrepareDataSource"> </a>

Most of the time, the data source is already in place and is servicing any number of business applications. However, that data may only be available from inside the corporate security infrastructure. If your data does exist on a server located on the inside of a corporate firewall, or is secured by some other means, the next step is to expose that data to BCS, which is also housed inside the firewall. A network device is configured to translate calls from SharePoint Online to the internal SharePoint farm. This device is referred to as a "reverse proxy" and allows the SharePoint Add-in located in the cloud to call into BCS located inside the firewall. BCS handles all the data connectivity from there.
  
    
    
To make this data available to BCS, you should expose it as an OData source. You do this by creating an Internet Information Services (IIS) website that will host the service and allow BCS to talk to the data source through OData and Representational State Transfer (REST) endpoints.
  
    
    
To create an OData endpoint, you will need to follow these steps for creating a Windows Communication Foundation (WCF) data service.
  
    
    

### To create a WCF data service


1. Create an IIS website running at least Microsoft .NET Framework 4. Secure the site using basic authentication.
    
    > **Note:**
      > It's not necessary for SharePoint to be installed on this server. In fact, for the sake of simplicity and performance, it's better if SharePoint is not installed on the server that hosts the WCF data service. 
2. Create a new project in Visual Studio 2012 using the **ASP.NET Empty Web Application** template.
    
  
3. In **Solution Explorer** add a new **ADO.NET Entity Data Model**.
    
  
4. Choose the **Generate from database** option in the **Entity Data Model Wizard**.
    
  
5. Select an existing connection, or create a new one.
    
  
6. Provide the URL and connection security information.
    
  
7. Select the items that you want to include in the model, and choose **Finish**.
    
  
8. Again in **Solution Explorer**, add a new **WCF Data Service** using the Visual Studio template.
    
  
9. Name the data service, and choose **Next**.
    
    At this point, the entity model will be created and the resulting classes will be included in your project.
    
  
10. Set the security to the entities created by replacing the  `/* TODO: put your data source class name here */` with the class name of the entity model you just created and specifying which entities you want to grant permissions to.
    
  
For a complete tutorial of how to set this up, see the following: 
  
    
    

-  [Getting Started With OData Part 1: Building an OData Service](http://msdn.microsoft.com/en-us/data/gg601462)
    
  
-  [Quickstart (WCF Data Services)](http://msdn.microsoft.com/en-us/library/cc668796.aspx)
    
  

### Create an SharePoint Add-in
<a name="bkmk_CreateAnApp"> </a>

One of the assumptions we are making here is that you are developing your app inside the corporate firewall. This represents a scenario where a developer working for a company would have a computer located behind the protection of the security infrastructure, developing and testing the app until it is ready to be deployed. This simplifies the process of connecting to the data source from Visual Studio, and uses Office Developer Tools for Visual Studio 2013 to automatically generate the external content type in the next step.
  
    
    

### To create a new app


1. Open Visual Studio 2012 on your development computer that has Office Developer Tools for Visual Studio 2013 and SharePoint installed.
    
  
2. Create a new app for SharePoint.
    
  
3. Specify the name of the app, the local SharePoint URL that will host your site for testing, and how you want the app to be hosted. Choose **Finish**.
    
  

### Create an external content type
<a name="bkmk_CreateECT"> </a>

To add a BDC model or external content type to your project, do the following.
  
    
    

### To add an external content type


1. With your new project still open, open the shortcut menu for the solution, and choose **Add**, **Content types for an External Data source**.
    
  
2. The first page of the wizard is used to specify the URL of the data service. On the **Specify OData Source** page, enter the URL of the OData service that you want to connect to. The URL should resemble the following: **http://services.odata.org/Northwind/Northwind.svc/**.
    
  
3. Choose a name for your OData source, and then choose **Next**.
    
  
4. A list of data entities that are being exposed by the OData service appears. Make sure that the **Create list instances for the selected data entities** check box is selected.
    
  
5. Select one or more of the entities, and choose **Finish**.
    
  
6. The last thing you have to do before deployment is modify the URL in your newly created external content type file.
    
    Open the .ect file in an XML editor.
    
  
7. Modify the  `ODataServiceMetadataUrl` property to point to the URL that allows access through the reverse proxy.
    
  
8. Modify the  `ODataServiceUrl` property with the URL that allows access through the reverse proxy.
    
  
For information about how to add an OData-based external content type, see  [How to: Create an external content type from an OData source in SharePoint](how-to-create-an-external-content-type-from-an-odata-source-in-sharepoint.md).
  
    
    

### Deploy the hybrid app
<a name="bkmk_DeployHybridApp"> </a>

When it is time to deploy your app, you have a couple of choices. You can deploy it directly to a tenancy using F5 deployment, or you can package it using the publishing features of Visual Studio to create an .app file. This file can then be given to the SharePoint Online tenant administrator and uploaded.
  
    
    
For information about deploying SharePoint Add-ins, see the following: 
  
    
    

-  [Deploying and installing SharePoint Add-ins: methods and options](http://msdn.microsoft.com/library/d15a74a7-3c10-485a-9885-7ef11aaa0d90%28Office.15%29.aspx)
    
  
-  [Publish SharePoint Add-ins by using Visual Studio](http://msdn.microsoft.com/library/8137d0fa-52e2-4771-8639-60af80f693bb%28Office.15%29.aspx)
    
  
You can also take the BDCM file created for the external content type and extract that to be used at any level above the app. This is demonstrated in  [How to: Convert an add-in-scoped external content type to tenant-scoped](how-to-convert-an-add-in-scoped-external-content-type-to-tenant-scoped.md).
  
    
    

## Additional resources
<a name="bk_addresources"> </a>


-  [Hybrid for SharePoint](http://technet.microsoft.com/en-us/library/jj838715.aspx)
    
  
-  [Business Connectivity Services in SharePoint](business-connectivity-services-in-sharepoint.md)
    
  
-  [How to: Create an external content type from an OData source in SharePoint](how-to-create-an-external-content-type-from-an-odata-source-in-sharepoint.md)
    
  
-  [Publish SharePoint Add-ins by using Visual Studio](http://msdn.microsoft.com/library/8137d0fa-52e2-4771-8639-60af80f693bb%28Office.15%29.aspx)
    
  

