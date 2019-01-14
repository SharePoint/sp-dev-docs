---
title: Add-in-scoped external content types in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: a34cbbba-dc38-4d3d-b796-d54b5848bdfb
localization_priority: Normal
---


# Add-in-scoped external content types in SharePoint
Learn about external content types that are installed or scoped at the add-in level in SharePoint and enable you to create data-rich SharePoint Add-ins using external data sources.
## Overview of add-in-scoped external content types in SharePoint
<a name="Appscopedect_overview"> </a>

In SharePoint 2010, you can install and use external content types only at the farm level. This often causes problems for developers because even for simple applications, an administrator had to be involved because of the access rights that are needed to install at the farm level.
  
    
    
In SharePoint, applications are basically isolated into more autonomous units called add-ins. Add-ins contain all the resources they need to run. This approach enables a running application to be insulated from other applications. The benefits of this architecture are as follows:
  
    
    

- You can create add-ins that are aligned with the new application model of SharePoint.
    
  
- You can create add-ins that access external data from SAP, Netflix, and proprietary and other types of data without involving the tenant administrator.
    
  
- Access to external applications is maintained through Business Connectivity Services (BCS), which provides a consistent and uniform interface that can be used by other SharePoint applications.
    
  
Add-in-scoped external content types provide access to external data within an app.
  
    
    

## Prerequisites for working with add-in-scoped external content types
<a name="Appscopedect_Prereq"> </a>

The following are the requirements for developing external content types that are scoped at the add-in level:
  
    
    

- Visual Studio 2012
    
  
- Office Developer Tools for Visual Studio 2012
    
  
- SharePoint
    
  
For information about setting up your SharePoint development environment, see  [Set up a general development environment for SharePoint](set-up-a-general-development-environment-for-sharepoint.md).
  
    
    

### Add-in-scoped external content type essentials

Table 1 contains some core concepts that you should be familiar with when working with add-in-scoped external content types.
  
    
    

**Table 1. Core concepts for understanding add-in-scoped external content types**


|**Article**|**Description**|
|:-----|:-----|
| [External content types in SharePoint](external-content-types-in-sharepoint.md) <br/> |Learn how to create BCS external content types.  <br/> |
| [SharePoint Add-ins](http://msdn.microsoft.com/library/cd1eda9e-8e54-4223-93a9-a6ea0d18df70%28Office.15%29.aspx) <br/> |Learn about the new add-in model in SharePoint that enables you to create add-ins, which are small, easy-to-use solutions for end users.  <br/> |
| [Get started creating SharePoint-hosted SharePoint Add-ins](http://msdn.microsoft.com/library/1b992485-6efe-4ea4-a18c-221689b0b66f%28Office.15%29.aspx) <br/> |Learn how to create a basic SharePoint-hosted add-in by using the Office Developer Tools for Visual Studio 2012.  <br/> |
   

## What can you do with add-in-scoped external content types?
<a name="Appscopedect_Tasks"> </a>

The primary reason for adding an add-in-scoped external content type is to provide access to external data from an individual add-in. This allows you to do the following: 
  
    
    

- Limit access to external content types to a particular app.
    
  
- Deploy external content types within an app.
    
  

### Create add-in-scoped external content types
<a name="Appscopedect_createect"> </a>

The concept of a file-based metadata catalog was introduced in SharePoint 2010. It enables you to specify a file that contains the XML needed to define external content types. This file can be deployed within a WSP package and pertains only to the application that it is scoped for. By using this metadata file, external content types can be restricted to the add-in level.
  
    
    
In SharePoint, **SPListDataSource** has been modified to add a property that indicates the scope of the application.
  
    
    
This class serves as the bridge between **SPList** and an external list. Use the associated **SPList** to retrieve entity fields and data. Retrieve an instance of **SPListDataSource** from the **HasExternalDataSource** property. When **HasExternalDataSource** is not null, the **SPList** object's data is external to SharePoint.
  
    
    
When you want to add an add-in-scoped external content type, this property is set to **Add-in**.
  
    
    
The **MetadataCatalogFileName** property is used to define the BDC model file that contains the external content type definition. This property can be defined declaratively or programmatically, but not in the SharePoint user interface (UI).
  
    
    
The following example shows how to set the **MetadataCatalogFileName** property declaratively.
  
    
    



```XML

<DataSource>
  <Property Name="Entity" Value="Customer" />
  <Property Name="EntityNamespace" Value="SAP" />
  <Property Name="LobSystemInstanceName" Value="SAPClient1" />
  <Property Name="SpecificFinder" Value="ReadCustomer" />
  <Property Name=" MetadataCatalogFileName" Value="BDCMetadata.bdcm" />
</DataSource>
```


> [!NOTE]
> Site administrators can install add-ins that use App-Scoped-ECTs, but only SiteCollection administrators can grant permissions for Apps to Use BCS Connections. 
  
    
    


### Deploy an add-in-scoped external content type in a custom Feature in a WSP file
<a name="Appscopedect_deployect"> </a>

You can include a BDC model in a WSP file for deployment. The following example shows how to include a BDC model in the app.
  
    
    

```XML

<Elements xmlns="http://schemas.microsoft.com/sharepoint/">
  <BdcModel Path="BDCMetadata.bdcm">
  </BdcModel>
</Elements>

```


> [!IMPORTANT]
> Only one BDC model file can be included per add-in. While the file name in this example is BDCMetadata.bdcm, the model file can actually be any name you choose as long as the file name matches that is in the **Path** attribute of the BDC model file.
  
    
    


> [!NOTE]
> Only Open Data protocol (OData) connections are allowed for add-in-scoped external content types. 
  
    
    


### Set security credentials for an external system
<a name="Appscopedect_deployect"> </a>

In order to access data on a secured external system, you must configure the BDC model with the appropriate credentials.
  
    
    
The following example shows how to set security credentials for an external system in add-in-scoped external content types by modifying the Elements.xml file of the app.
  
    
    



```XML

<Elements xmlns="http://schemas.microsoft.com/sharepoint/">
  <BdcModel Path="BDCMetadata.bdcm">
    <LobSystem Name="SAP">
       <LobSystemInstance Name="SAPInst" RequireCredentials="true" CredentialsDescription="Credentials to connect to SAP"/>
    </LobSystem>
    <LobSystem Name="SQL">
       <LobSystemInstance Name="App Database" DataSource="SQL-Azure" RequireCredentials="true" />
    </LobSystem>
  </BdcModel>
</Elements>

```


## In this section
<a name="Appscopedect_inthissection"> </a>


-  [How to: Create an add-in-scoped external content type in SharePoint](how-to-create-an-add-in-scoped-external-content-type-in-sharepoint.md)
    
  
-  [How to: Access external data with REST in SharePoint](how-to-access-external-data-with-rest-in-sharepoint.md)
    
  

## See also
<a name="Appscopedect_Addres"> </a>


-  [Business Connectivity Services in SharePoint](business-connectivity-services-in-sharepoint.md)
    
  
-  [Business Connectivity Services programmers reference for SharePoint](business-connectivity-services-programmers-reference-for-sharepoint.md)
    
  
-  [SharePoint Add-ins](http://msdn.microsoft.com/library/cd1eda9e-8e54-4223-93a9-a6ea0d18df70%28Office.15%29.aspx)
    
  
-  [External content types in SharePoint](external-content-types-in-sharepoint.md)
    
  
-  [External events and alerts in SharePoint](external-events-and-alerts-in-sharepoint.md)
    
  
-  [What's new in Business Connectivity Services in SharePoint](what-s-new-in-business-connectivity-services-in-sharepoint.md)
    
  
-  [Get started with Business Connectivity Services in SharePoint](get-started-with-business-connectivity-services-in-sharepoint.md)
    
  

