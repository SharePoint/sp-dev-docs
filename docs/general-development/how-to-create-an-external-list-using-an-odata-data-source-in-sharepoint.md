---
title: How to Create an external list using an OData data source in SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: 601fbfce-a0c6-43dd-8398-540d094c083c
---


# How to: Create an external list using an OData data source in SharePoint 2013
Learn how to create an external list programmatically and bind it to an OData-based external content type in SharePoint 2013.
Although a power user or SharePoint administrator will likely create an external list using SharePoint Designer 2013, a developer will be interested in the ability to create external lists using the tools of their trade, Visual Studio 2012 and the Office Developer Tools for Visual Studio 2012. This gives them more flexibility to add functionality and to package a solution that includes Business Connectivity Services (BCS) features for later deployment into one or many host environments.
  
    
    


## Prerequisites for creating an external list
<a name="bkmk_Prereqs"> </a>

The following components are needed to create an external list from an OData source:
  
    
    

- Visual Studio 2012
    
  
- SharePoint 2013
    
  
- Office Developer Tools for Visual Studio 2012
    
  
- A published external content type based on an OData source: For instructions, see  [How to: Create an external content type from an OData source in SharePoint 2013](how-to-create-an-external-content-type-from-an-odata-source-in-sharepoint.md).
    
  
For information about setting up a SharePoint development environment, see  [Set up a general development environment for SharePoint 2013](set-up-a-general-development-environment-for-sharepoint.md).
  
    
    

### Core concepts for creating external lists

The following articles provide information about SharePoint Add-ins and other background information for creating external lists.
  
    
    

**Table 1. Core concepts for external lists**


|**Article title**|**Description**|
|:-----|:-----|
| [Get started with Business Connectivity Services in SharePoint 2013](get-started-with-business-connectivity-services-in-sharepoint.md) <br/> |Learn about Business Connectivity Services and how you can expose external data in SharePoint 2013.  <br/> |
| [SharePoint Add-ins](http://msdn.microsoft.com/library/cd1eda9e-8e54-4223-93a9-a6ea0d18df70%28Office.15%29.aspx) <br/> |Learn about the new app model in SharePoint 2013 that enables you to create apps, which are small, easy-to-use solutions for end users.  <br/> |
| [Choose patterns for developing and hosting your SharePoint Add-in](http://msdn.microsoft.com/library/05ce5435-0a03-4ddc-976b-c33b08d03457%28Office.15%29.aspx) <br/> |Learn about the different ways that you can host SharePoint Add-ins.  <br/> |
   

## Create a new external list
<a name="bkmk_CreateNewVList"> </a>

The following procedures will show you how to create a new external list, bind it to OData-based external content type, and publish to SharePoint 2013 using Visual Studio 2012.
  
    
    

> [!NOTE]
> The first step assumes that you have successfully created an external content type, as described in  [How to: Create an external content type from an OData source in SharePoint 2013](how-to-create-an-external-content-type-from-an-odata-source-in-sharepoint.md). 
  
    
    


### To add an external list automatically


1. If you just want to add a simple list to your project that reflects what is in your external content type, you can use the Visual Studio 2012 autogeneration tools. The list is created when the external content type is created. When you select the **Create list instances for the selected data entities (except Service Operations)** check box found in the second step of the autogeneration process (Select the Data Entities step), the wizard creates the XML declarations and add new external content types for each entity you selected.
    
  
2. Press F5 to deploy the project, and the new list is also deployed.
    
  
For testing purposes, you may want to modify the AppManifest.xml file so that the starting page of the app is the list you just created. 
  
    
    

### To modify the AppManifest.xml file


1. Open the AppManifest.xml file using an XML editor.
    
  
2. Find the <StartPage> tag.
    
  
3. Change the value to  `~appWebUrl/Lists/Employees`.
    
  
4. Save your changes.
    
  

### To publish the project


- Press F5 to deploy your project and external list. 
    
    Open a web browser, and navigate to the new list you created.
    
  

## Additional resources
<a name="bkmk_AdditionalResources"> </a>


-  [Business Connectivity Services in SharePoint 2013](business-connectivity-services-in-sharepoint.md)
    
  
-  [Using OData sources with Business Connectivity Services in SharePoint 2013](using-odata-sources-with-business-connectivity-services-in-sharepoint.md)
    
  
-  [How to: Create an external content type from an OData source in SharePoint 2013](how-to-create-an-external-content-type-from-an-odata-source-in-sharepoint.md)
    
  
-  [How to: Create a basic autohosted app for SharePoint](http://msdn.microsoft.com/library/0572894d-c437-4b7d-8ac6-8405496e2145%28Office.15%29.aspx)
    
  
-  [Using OData sources with Business Connectivity Services in SharePoint 2013](using-odata-sources-with-business-connectivity-services-in-sharepoint.md)
    
  

