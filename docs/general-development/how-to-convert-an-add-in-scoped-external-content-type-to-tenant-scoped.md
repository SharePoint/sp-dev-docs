---
title: How to Convert an add-in-scoped external content type to tenant-scoped
ms.prod: SHAREPOINT
ms.assetid: 35c5d670-e402-4641-b3c5-6f61ae1ec69b
---


# How to: Convert an add-in-scoped external content type to tenant-scoped
Learn how to create an OData-based external content type using Visual Studio 2012 auto-generation tools and import it into the Business Connectivity Services (BCS) metadata store so that it can be used across an entire tenant workspace.
BDC models are complex XML definitions of an external data source. They are used when defining external content types for BCS. They are very difficult to build manually, so tools have been built to automatically generate the files using Visual Studio 2012 and Office Developer Tools for Visual Studio 2012. Using these tools, you can create an .app package using Visual Studio publishing, and then open that package to extract the model file.
  
    
    


## Extract the BDC model file from a Visual Studio add-in package

The following steps show you how to create the OData-based external content type and then import it into the BCS metadata store so that it can be used across an entire tenant workspace.
  
    
    

### To create a BDC model file from an OData source


1. In Visual Studio 2012, create an **Add-in for SharePoint** project.
    
  
2. Specify the add-in settings, including add-in name, the site URL for debugging the add-in, and how you want to host the add-in ( **Autohosted**, **Provider-hosted**, or **SharePoint-hosted**). For more information, see  [Choose patterns for developing and hosting your SharePoint Add-in](http://msdn.microsoft.com/library/05ce5435-0a03-4ddc-976b-c33b08d03457%28Office.15%29.aspx).
    
  
3. Choose **Finish** to create the app.
    
  
4. In **Solution Explorer**, open the shortcut menu for the project, and choose **Add**, **Content types for External Data source**.
    
    This starts a wizard that helps you find the selected data source and create the BDC model.
    
  
5. On the **Set OData Source** page, enter the URL of the OData service that you want to connect to. The URL should look something like this: `http://services.odata.org/Northwind/Northwind.svc/`.
    
    Specify a name for your OData source.
    
    > **Note:**
      > For this example, you will use the Northwind service that is available from the producers list located on the  [Open Data Protocol website](http://www.odata.org). 
6. A list appears showing data entities that are being exposed by the OData Service. Select one or more of the entities, and choose **Finish**.
    
  

### To deploy the add-in-scoped external content type as an add-in package


1. In Visual Studio, on the **Build** menu, choose **Publish**.
    
  
2. Name the package, specify the save location on your local hard drive, and choose **Finish**.
    
  

### To extract the model file from the .app package


1. Open the folder where the .app package is created.
    
  
2.  Change the file name extension from.app to.zip.
    
  
3. Extract the ZIP package to a local folder.
    
  
4. Open the extracted folder to find the WSP file.
    
  
5. Move the WSP file to another location.
    
  
6. Change the .wsp file name extension on this file to .cab.
    
  
7. Open the .cab file, and you will find the Bdcmodel.bdcm file.
    
  
8. Save the Bdcmodel.bdcm file to another location.
    
  

### To import the model file using SharePoint Central Administration pages


1. Open SharePoint Online or SharePoint on-premises Central Administration pages.
    
  
2. Choose **Manage serve applications**.
    
  
3. Choose **Business Data Connectivity Service**.
    
  
4. Choose the **Import** link on the server ribbon.
    
  
5. Choose the **Browse** button to specify the location where you extracted the .bdcm file.
    
  
6. Keep the default settings, and then choose **Import**.
    
  

## Additional resources
<a name="bk_addresources"> </a>


-  [External content types in SharePoint](external-content-types-in-sharepoint.md)
    
  
-  [How to: Create an add-in-scoped external content type in SharePoint](how-to-create-an-add-in-scoped-external-content-type-in-sharepoint.md)
    
  
-  [How to: Create an external content type from an OData source in SharePoint](how-to-create-an-external-content-type-from-an-odata-source-in-sharepoint.md)
    
  
-  [Get started with Business Connectivity Services in SharePoint](get-started-with-business-connectivity-services-in-sharepoint.md)
    
  
-  [Open Data Protocol](http://www.odata.org)
    
  

  
    
    

