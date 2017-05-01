---
title: PerformancePoint Services in SharePoint 2013
keywords: accessing fco definitions in sharepoint 2013,bi in sharepoint 2013 using performancepoint services,business intelligence in sharepoint 2013,business intelligence using performancepoint services in sharepoint 2013,create scorecard transforms using performancepoint in sharepoint 2013,custom filter control in sharepoint 2013,custom performancepoint extensions,customize performancepoint in sharepoint,data source creation in sharepoint 2013,dlls used for performancepoint development,extending performancepoint services for sharepoint,fcos in sharepoint performancepoint,filter creation in sharepoint 2013,filters as fcos in pps performancepoint,getting started with performancepoint services,integration of performancepoint services in sharepoint,performancepoint assemblies used in development,performancepoint custom data sources,performancepoint custom filters,performancepoint custom reports,performancepoint custom scorecard transforms,performancepoint development scenarios,performancepoint services development,performancepoint services development scenarios,performancepoint services programming,performancepoint services sdk,pps custom dashboards in sharepoint 2013,pps development,pps programming,pps sdk,report creation in sharepoint 2013,report renderer in sharepoint 2013,SharePoint 2013 service application PerformancePoint
f1_keywords:
- accessing fco definitions in sharepoint 2013,bi in sharepoint 2013 using performancepoint services,business intelligence in sharepoint 2013,business intelligence using performancepoint services in sharepoint 2013,create scorecard transforms using performancepoint in sharepoint 2013,custom filter control in sharepoint 2013,custom performancepoint extensions,customize performancepoint in sharepoint,data source creation in sharepoint 2013,dlls used for performancepoint development,extending performancepoint services for sharepoint,fcos in sharepoint performancepoint,filter creation in sharepoint 2013,filters as fcos in pps performancepoint,getting started with performancepoint services,integration of performancepoint services in sharepoint,performancepoint assemblies used in development,performancepoint custom data sources,performancepoint custom filters,performancepoint custom reports,performancepoint custom scorecard transforms,performancepoint development scenarios,performancepoint services development,performancepoint services development scenarios,performancepoint services programming,performancepoint services sdk,pps custom dashboards in sharepoint 2013,pps development,pps programming,pps sdk,report creation in sharepoint 2013,report renderer in sharepoint 2013,SharePoint 2013 service application PerformancePoint
ms.prod: SHAREPOINT
ms.assetid: fb159708-d6b4-40c1-b5cc-4bb2071a7930
---


# PerformancePoint Services in SharePoint 2013
Learn about supported development scenarios and the extensibility architecture for PerformancePoint Services in SharePoint Server 2013.
PerformancePoint Services is a SharePoint Server 2013 service application. It enables users to create business intelligence (BI) dashboards that provide insight into an organization's performance. You can create custom reports, filters, tabular data sources, and scorecard transforms to extend the native functionality of PerformancePoint Services. For example, you can create a custom report visualization that is optimized for the medical industry and then integrate it into a reusable vertical solution.
  
    
    


## Custom PerformancePoint Services reports, filters, and tabular data sources in SharePoint Server 2013
<a name="bkmk_CreateCustomObjects"> </a>

You can extend native PerformancePoint Services  [ReportView](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.ReportView.aspx) , [Filter](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Filter.aspx) , and tabular [DataSource](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.DataSource.aspx) objects by defining custom values for their properties. Custom report, filter, and tabular data source extensions typically include three components: a renderer or provider, an editor application, and extension metadata.
  
    
    

### Renderers and providers for PerformancePoint Services extensions

The type of object that you are extending determines whether it uses a renderer or a provider. Report and filter extensions use renderers, and filter and data source extensions use providers.
  
    
    

- Report extensions require a renderer for the report visualization. 
    
  
- Filter extensions require a renderer for the selection control. The renderer can be a custom renderer or a native PerformancePoint Services renderer. If you are using a PerformancePoint Services renderer, you simply register it in your extension. If you are using a custom renderer, you must also include it in your extension.
    
  
- Filter extensions require a data provider to connect to the underlying data source.
    
  
- Data source extensions require a provider to connect to the underlying data source.
    
  
For more information, see the following topics about creating renderers and providers:
  
    
    

-  [How to: Create report renderers for PerformancePoint Services in SharePoint 2013](how-to-create-report-renderers-for-performancepoint-services-in-sharepoint.md)
    
  
-  [How to: Create filter data providers for PerformancePoint Services in SharePoint 2013](how-to-create-filter-data-providers-for-performancepoint-services-in-sharepoint.md)
    
  
-  [How to: Create tabular data source providers for PerformancePoint Services in SharePoint 2013](how-to-create-tabular-data-source-providers-for-performancepoint-services-in-sha.md)
    
  

### Editor applications for PerformancePoint Services extensions in SharePoint Server 2013

Custom editors enable users to define properties for a custom object, interact with objects in the repository, and initialize endpoints for custom reports and filters. Your editor should expose the properties that you want to enable users to view and modify. Editors can be opened from objects in PerformancePoint Dashboard Designer or from items in the PerformancePoint Content List or PerformancePoint Data Connections Library. To integrate into the Dashboard Designer authoring experience, your editor must be able to open from a uniform resource identifier (URI), and the URI must be registered for the custom object in the PerformancePoint Services web.config file.
  
    
    
For more information about creating editors, see the following topics:
  
    
    

-  [How to: Create report editors for PerformancePoint Services in SharePoint 2013](how-to-create-report-editors-for-performancepoint-services-in-sharepoint.md)
    
  
-  [How to: Create filter editors for PerformancePoint Services in SharePoint 2013](how-to-create-filter-editors-for-performancepoint-services-in-sharepoint.md)
    
  
-  [How to: Create tabular data source editors for PerformancePoint Services in SharePoint 2013](how-to-create-tabular-data-source-editors-for-performancepoint-services-in-share.md)
    
  

> **Note:**
> PerformancePoint Dashboard Designer can create and delete custom objects, so your editor does not need to provide logic for creating or deleting objects. 
  
    
    


### Configuration metadata for PerformancePoint Services extensions in SharePoint Server 2013

You must specify metadata for your extension in the PerformancePoint Services web.config file during the installation process. The metadata includes **type**, **subType**, **RendererClass**, **EditorURI**, and **Resources** attributes.
  
    
    
To create a custom object, Dashboard Designer retrieves the object's metadata from the PerformancePoint Services web.config file and then creates the object as a content type in the Dashboard Designer repository. After creating the custom object, Dashboard Designer displays a link to the editor.
  
    
    
For more information about extension metadata, see  [How to: Manually Register PerformancePoint Services Extensions](http://msdn.microsoft.com/library/3aa6d340-4b05-46b3-9648-2b6e18e04e09%28Office.15%29.aspx).
  
    
    

## Custom transforms for PerformancePoint Services scorecards in SharePoint Server 2013
<a name="bkmk_CreateCustomObjects"> </a>

Transforms change the appearance, contents, or functionality of scorecards before querying the data source, after querying the data source, or before rendering the scorecard in the Web Part. For example, PerformancePoint Services uses transforms to perform several operations before rendering a scorecard view, such as expanding named sets, computing rollups, and computing aggregations. These changes are applied at run time and they do not modify the definition of the scorecard object.
  
    
    
For more information about scorecard transforms, see  [How to: Create scorecard transforms for PerformancePoint Services in SharePoint 2013](how-to-create-scorecard-transforms-for-performancepoint-services-in-sharepoint-2.md).
  
    
    

> **Note:**
> If a transform modifies the data values in a scorecard, the changes propagate directly to Strategy Map reports that use the scorecard as a data source. In addition, changes to scorecards may affect KPI Details reports. 
  
    
    


## Extensibility architecture for PerformancePoint Services in SharePoint Server 2013
<a name="bkmk_PerfPointArch"> </a>

Supported extensions run within a PerformancePoint Services application instance, either on the front-end web server or on the application server, as shown in the following diagram.
  
    
    

**Figure 1. PerformancePoint Services extensibility architecture**

  
    
    

  
    
    
![PerformancePoint Services extensibility points](images/SPS14_PerfPoint_ArchOverview.gif)
  
    
    

### PerformancePoint Services extensions that run on the SharePoint Server 2013 front-end web server

Custom editors (and other supported custom applications) run on the front-end web server within a PerformancePoint Services application instance. Editors are typically deployed as .aspx pages and are installed in the path  `%ProgramFiles%\\Common Files\\Microsoft Shared\\web server extensions\\15\\TEMPLATE\\LAYOUTS`. Editors call the  [BIMonitoringServiceApplicationProxy](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.BIMonitoringServiceApplicationProxy.aspx) object or [SPDataStore](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Store.SPDataStore.aspx) object to author or process content, as follows:
  
    
    

- Report and filter objects should use  [SPDataStore](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Store.SPDataStore.aspx) for all repository tasks.
    
  
- Data source objects should use  [BIMonitoringServiceApplicationProxy](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.BIMonitoringServiceApplicationProxy.aspx) to perform **Create** and **Update** tasks so that these tasks are performed within the context of the PerformancePoint Services service application. **Read** (get) and **Delete** tasks can be performed by using [BIMonitoringServiceApplicationProxy](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.BIMonitoringServiceApplicationProxy.aspx) or [SPDataStore](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Store.SPDataStore.aspx) . (However, custom data source applications that run on the application server can call [SPDataStore](https://msdn.microsoft.com/library/Microsoft.PerformancePoint.Scorecards.Store.SPDataStore.aspx) directly.)
    
  

### PerformancePoint Services extensions that run on the SharePoint Server 2013 application server

Custom renderers, providers, and scorecard transforms run on the application server. The application server hosts the middle-tier business logic for the PerformancePoint Services instance.
  
    
    

## Additional resources
<a name="bkmk_AdditionalResources"> </a>


-  [Fundamentals of PerformancePoint Services Development](http://msdn.microsoft.com/library/5d2c183b-95f8-4930-b6d0-f3ffe1ee166e%28Office.15%29.aspx)
    
  
-  [Code Samples for PerformancePoint Services in SharePoint Server 2010](http://msdn.microsoft.com/library/97f0cbd4-03ef-44f8-9869-699df9d9c97f%28Office.15%29.aspx)
    
  
-  [Troubleshooting and FAQs for PerformancePoint Services Development](http://msdn.microsoft.com/library/a90156e2-0522-46a1-9fc9-b6c8d2fffad7%28Office.15%29.aspx)
    
  

