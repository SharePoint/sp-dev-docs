---
title: Create an add-in-scoped external content type in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: de4b50a3-84da-48ce-9ba0-fe06571e52a8
localization_priority: Normal
---


# Create an add-in-scoped external content type in SharePoint

Learn how to create external content types that can be installed, secured, and used in an SharePoint Add-in.

## Prerequisites for developing add-in-scoped external content types
<a name="bkmk_Prerequisites"> </a>

To get started developing add-in-scoped external content types, you need the following:
  
    
    

- SharePoint
    
  
- Visual Studio 2012
    
  
- Office Developer Tools for Visual Studio 2012
    
  
- A published OData service available through the Internet
    
  
For information about setting up a SharePoint development environment, see  [Set up a general development environment for SharePoint](set-up-a-general-development-environment-for-sharepoint.md).
  
    
    

## Create an add-in-scoped external content type
<a name="bkmk_CreateECT"> </a>

The following steps show how to create an external content type based on an Open Data protocol (OData) source, and how to modify it to be scoped to your SharePoint Add-in.
  
    
    

### To create a new SharePoint Add-in


1. Open Visual Studio 2012.
    
  
2. Create an **Add-in for SharePoint** project.
    
  
3. Specify the add-in settings, including add-in name, the site URL for debugging the add-in, and how you would like to host the add-in (Autohosted, Provider-hosted, or SharePoint-hosted). For more information, see  [Choose patterns for developing and hosting your SharePoint Add-in](http://msdn.microsoft.com/library/05ce5435-0a03-4ddc-976b-c33b08d03457%28Office.15%29.aspx).
    
  
4. Choose **Finish** to create the app.
    
  
For complete steps for creating SharePoint Add-ins, see the following:
  
    
    

-  [Get started creating provider-hosted SharePoint Add-ins](http://msdn.microsoft.com/library/3038dd73-41ee-436f-8c78-ef8e6869bf7b%28Office.15%29.aspx)
         
  
-  [Get started creating SharePoint-hosted SharePoint Add-ins](http://msdn.microsoft.com/library/1b992485-6efe-4ea4-a18c-221689b0b66f%28Office.15%29.aspx)
    
  

### To generate the external content type


1. In **Solution Explorer**, open the shortcut menu for the project, and choose **Add**, **Content types for External Data source**.
    
    This starts a wizard that helps you find the selected data source and create the BDC model.
    
  
2. On the **Set OData Source** page, enter the URL of the OData service that you want to connect to. The URL should look something like this: `http://services.odata.org/Northwind/Northwind.svc/`.
    
    Specify a name for your OData source.
    
    > [!NOTE]
    > For this example, you will use the Northwind service that is available from the producers list located on the  [Open Data Protocol website](http://www.odata.org). 

3. A list appears showing data entities that are being exposed by the OData Service. Select one or more of the entities, and choose **Finish**.
    
  

### To deploy the add-in-scoped external content type


- Press F5 to compile the project and upload the project files to SharePoint.
    
  

## See also
<a name="bk_addresources"> </a>


-  [Add-in-scoped external content types in SharePoint](add-in-scoped-external-content-types-in-sharepoint.md)
    
  
-  [Choose patterns for developing and hosting your SharePoint Add-in](http://msdn.microsoft.com/library/05ce5435-0a03-4ddc-976b-c33b08d03457%28Office.15%29.aspx)
    
  
-  [SharePoint Add-ins](http://msdn.microsoft.com/library/cd1eda9e-8e54-4223-93a9-a6ea0d18df70%28Office.15%29.aspx)
    
  
-  [External content types in SharePoint](external-content-types-in-sharepoint.md)
    
  
-  [Get started with Business Connectivity Services in SharePoint](get-started-with-business-connectivity-services-in-sharepoint.md)
    
  
-  [Business Connectivity Services in SharePoint](business-connectivity-services-in-sharepoint.md)
    
  


