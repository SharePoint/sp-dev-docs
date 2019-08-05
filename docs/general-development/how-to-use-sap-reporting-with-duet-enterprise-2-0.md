---
title: Use SAP Reporting with Duet Enterprise 2.0
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: a54c6cd2-2283-440d-af55-e98e3212caa1
localization_priority: Normal
---


# Use SAP Reporting with Duet Enterprise 2.0

## Introduction
<a name="bkmk_Introduction"> </a>

Duet Enterprise 2.0 gives you the ability to integrate the Duet reporting features within your SharePoint Add-in by doing a little customization.
  
    
    
The secret to enabling reporting for your app is by using a hidden feature installed by Duet. You will need to staple this feature to custom features, so that when the app is instantiated, the SAP reporting features will be made available to the app.
  
    
    

## Enabling the features
<a name="bkmk_EnablingTheFeatures"> </a>

To enable the Duet reporting features, the sequence of activation must be carefully followed.
  
    
    

### To create a feature to add the app-scoped external content type:


1. Inside your Duet reporting app, in the **Solution Explorer**, right click the project name. Choose **Add**, **Content Types for an External Data Source**. Click **Next**.
    
  
2. Enter the URL for the SAP Reporting endpoint as the OData Source.
    
  
3. Select the Entities, and choose **Finish**.
    
  
4. Open the newly created external content type to view the LSI properties. You will notice that they are the same as for the farm-scoped external content type except for the **ODataconnectionSettingsId**.
    
  

### To create a feature to enable the hidden Duet features:


1. Add another new feature to your project. Name the title **AddDuetReporting**.
    
    This feature will have a dependency on the **AddReportingModel** and the **DuetReportingForApps** features.
    
  
2. Add the following code to the **Elements** file.
    
```
  
<?xml version="1.0" encoding="utf-8"?>
<Feature xmlns="http://schemas.microsoft.com/sharepoint/" Title="AddDuetReporting" Id="6a55705c-af12-455a-914b-8cf3a31c820e" Scope="Web">
  <ActivationDependencies>
    <ActivationDependency FeatureId="e1fe41d3-7fc3-458f-9a66-6ecf6a39bb2c" FeatureTitle="AddReportingModel" />
    <ActivationDependency FeatureId="9b60ccba-ebfd-4e38-87c8-3dea9cc2680a" FeatureTitle="SAPReportingForApps" />
  </ActivationDependencies>
</Feature>

```

Please note that the sequence in activation dependency is important. First, you must create the external content type and then activate the **SAPReportingForApps** feature. Also, note that the second feature (ID: **9b60ccba-ebfd-4e38-87c8-3dea9cc2680a**) is shipped with Duet Enterprise 2.0, but it is marked as hidden. With this approach, a developer can make use of this feature and can bring in Duet Reporting capabilities to an app.
  
    
    
Once the **DuetReportingForApps** feature is activated, it will bring all the artifacts (Report List, Lib, forms, etc.) and customization on the apps site but as the app site template does not have standard navigation links, the app developer needs to add custom page elements to bring out the Duet features (e.g. Report Settings, library list view, and forms). The developer should consult standard Duet documentation for Reporting feature to learn more about the feature and its UI elements. A developer may choose to build up a custom UI for feature entry points which may suit better with the general theme of the app.
  
    
    

## Viewing the results
<a name="bkmk_ViewingTheResults"> </a>

To see the default report settings page, navigate to: **~/Lists/ReportSetting/AllReportTemplate.aspx**.
  
    
    
To see the default view for the report document library, navigate to: **~/ReportsLib/Forms/AllItems.aspx**.
  
    
    

## Customizing the reports
<a name="bkmk_CustomizingTheReports"> </a>

Inside an app, a developer can also create his own custom UI (using HTML/JavaScript/Jquery etc.) and make use of BCS CSOM to build a richer user experience. Following screenshots shows a similar app where custom HTML based UI is built with the help of OOB artifacts and client side BCS APIs.
  
    
    

## See also
<a name="bk_addresources"> </a>


-  [Developing with Duet Enterprise 2.0](developing-with-duet-enterprise-2-0.md)
    
  
-  [How to: Create an external content type from an OData source in SharePoint](how-to-create-an-external-content-type-from-an-odata-source-in-sharepoint.md)
    
  
-  [Using OData sources with Business Connectivity Services in SharePoint](using-odata-sources-with-business-connectivity-services-in-sharepoint.md)
    
  

