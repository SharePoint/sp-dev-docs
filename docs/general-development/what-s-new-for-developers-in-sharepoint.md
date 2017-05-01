---
title: What's new for developers in SharePoint 2013
ms.prod: SHAREPOINT
ms.assetid: 068d0b99-1762-42de-b6c9-acb1cffc6e31
---


# What's new for developers in SharePoint 2013
Learn about new features and functionality in SharePoint 2013, including the new Cloud Add-in Model, development tools, platform enhancements, mobile add-ins, and more.
## Cloud Add-in Model
<a name="bmSpApps"> </a>

SharePoint 2013 introduces a Cloud Add-in Model that enables you to create add-ins. SharePoint Add-ins are self-contained pieces of functionality that extend the capabilities of a SharePoint website. An add-in may include SharePoint components such as lists, workflows, and site pages, but it can also surface a remote web application and remote data in SharePoint. An add-in has few or no dependencies on any other software on the device or platform where it is installed, other than what is built into the platform. This characteristic enables add-ins to be installed simply and uninstalled cleanly. Add-ins have no custom code that runs on the SharePoint servers. Instead, all custom logic moves "up" to the cloud or "down" to client computers. Additionally, SharePoint 2013 introduces an innovative delivery model for SharePoint Add-ins that includes components like the Office Store and the Add-in Catalog.
  
    
    
 [![Apps for SharePoint](../../images/wn_cloud_1.png)
  
    
    
](http://msdn.microsoft.com/library/cd1eda9e-8e54-4223-93a9-a6ea0d18df70%28Office.15%29.aspx) [![SharePoint Store](../../images/wn_cloud_2.png)
  
    
    
](http://msdn.microsoft.com/library/d15a74a7-3c10-485a-9885-7ef11aaa0d90%28Office.15%29.aspx) [![App Catalog](../../images/wn_cloud_3.png)
  
    
    
](http://msdn.microsoft.com/library/d15a74a7-3c10-485a-9885-7ef11aaa0d90%28Office.15%29.aspx)
  
    
    

## Familiar programming model using web standards
<a name="bmWebStandards"> </a>

SharePoint 2013 makes it easy for any web developer, including those who work on non-Microsoft platform stacks, to create SharePoint solutions. What makes this possible is that SharePoint 2013 is based on common web standards like HTML, CSS, and JavaScript. Furthermore, implementation relies on established protocols like the Open Data protocol (OData), and OAuth.
  
    
    
 [![HTML/JavaScript](../../images/wn_WebStandards_1.png)
  
    
    
](http://msdn.microsoft.com/library/cd1eda9e-8e54-4223-93a9-a6ea0d18df70%28Office.15%29.aspx) [![OData](../../images/wn_WebStandards_2.png)
  
    
    
](using-odata-sources-with-business-connectivity-services-in-sharepoint.md) [![REST](../../images/wn_WebStandards_3.png)
  
    
    
](http://msdn.microsoft.com/library/2de035a0-ac75-43bd-9665-5c5a59c4c590%28Office.15%29.aspx) [![OAuth](../../images/wn_WebStandards_4.png)
  
    
    
](http://msdn.microsoft.com/library/bde5647a-fff1-4b51-b67b-2139de79ce4a%28Office.15%29.aspx)
  
    
    

## Development tools
<a name="bmDevTools"> </a>

The current release reflects enormous strides in optimizing the existing development tools like Visual Studio and SharePoint Designer, in addition to providing the release of newly developed web-based tool Napa Office 365 Development Tools for developing add-ins. The new unified project system in Visual Studio lets you develop SharePoint Add-ins, Office Add-ins, SharePoint Add-ins that include Office Add-ins, or Office Add-ins that are hosted by SharePoint. In addition to the SharePoint project templates that were provided in earlier versions, Visual Studio 2012 now includes a new add-in project template in the Add-ins folder named Add-ins for SharePoint 2013. Several new properties have been added to the Properties window and Properties pages to support SharePoint Add-in projects. Other improvements include full support for development against the Cloud Add-in Model, including OData and OAuth support, and full support for development against the Workflow Manager Client 1.0 platform.
  
    
    
 [![Napa Office 365 Development Tools](../../images/wn_DevTools_1.png)
  
    
    
](http://msdn.microsoft.com/library/82a3645c-0911-4926-9176-236ac8d28bdd%28Office.15%29.aspx) [![Visual Studio](../../images/wn_DevTools_2.png)
  
    
    
](http://msdn.microsoft.com/library/e00dc63f-b4a4-4c08-b058-729fcb09af41%28Office.15%29.aspx) [![SharePoint Designer](../../images/wn_DevTools_3.png)
  
    
    
](workflow-development-in-sharepoint-designer-and-visio.md)
  
    
    

## Core platform enhancements
<a name="bmPlatformEnhance"> </a>

On a broader scale, SharePoint 2013 has been improved and enhanced to support the new cloud-based architecture and app-driven development framework. From the SharePoint APIs at the lowest level to connectivity to social media integration, SharePoint 2013 is designed and executed to support a rich application development experience. In addition to the use of Representational State Transfer (REST) endpoints for web services, there is a broad new API for both server and client development. Remote event receivers and now supported in addition to client-side rendering. 
  
    
    
 [![REST endpoints](../../images/wn_Platform_1.png)
  
    
    
](http://msdn.microsoft.com/library/e1ff2979-1c16-4cb0-a57e-9168dfe20a7c.aspx) [![New client and server APIs](../../images/wn_Platform_2.png)
  
    
    
](choose-the-right-api-set-in-sharepoint.md) [![Client-side rendering](../../images/wn_Platform_3.png)
  
    
    
](how-to-customize-a-field-type-using-client-side-rendering.md) [![Remote event receivers](../../images/wn_Platform_4.png)
  
    
    
](http://msdn.microsoft.com/library/c050d056-8548-4496-a053-016779d723d9%28Office.15%29.aspx)
  
    
    

## Mobility
<a name="bmMobility"> </a>

With SharePoint 2013, you can combine Windows Phone 7 applications with on-premises SharePoint services and applications, or with remote SharePoint services and applications that run in the cloud (such as those that use SharePoint Online), to create powerful applications that extend functionality beyond the traditional desktop or laptop and into a truly portable and much more accessible environment. The new mobility features in SharePoint 2013 are built on existing Microsoft tools and technologies, such as SharePoint, Windows Phone 7, Visual Studio, and Microsoft Silverlight. You can create SharePoint-powered mobile applications for Windows Phone using the new SharePoint phone application wizard template in Visual Studio, which lets you create simple list-based mobile applications. You can integrate new features introduced in SharePoint 2013, such as the Geolocation field type and "push" notifications from SharePoint Server, into your mobile applications.
  
    
    
 [![Visual Studio app templates](../../images/wn_Mobility_.png)
  
    
    
](overview-of-windows-phone-sharepoint-application-templates-in-visual-studio.md) [![Push notifications](../../images/wn_Mobility_2.png)
  
    
    
](how-to-configure-and-use-push-notifications-in-sharepoint-apps-for-windows.md) [![Location and maps](../../images/wn_Mobility_3.png)
  
    
    
](integrating-location-and-map-functionality-in-sharepoint.md)
  
    
    

## Social and collaboration
<a name="bmSocial"> </a>

New and improved social and collaboration features make it easy for users to communicate and to stay engaged and informed. The improved My Site social feed helps users keep up to date with the people and content that they care about. The new Community Site feature provides a rich community experience that lets users easily find and share information and find people who have similar interests.
  
    
    
 [![Interactive feed](../../images/wn_Social_1.png)
  
    
    
](work-with-social-feeds-in-sharepoint.md) [![Community site](../../images/wn_Social_2.png)
  
    
    
](what-s-new-for-developers-in-social-and-collaboration-features-in-sharepoint-201.md#bkmk_Collab) [![Follow people](../../images/wn_Social_3.png)
  
    
    
](follow-people-in-sharepoint.md) [![Follow sites](../../images/wn_Social_4.png)
  
    
    
](follow-content-in-sharepoint.md)
  
    
    

## Search
<a name="bmSearch"> </a>

Search functionality in SharePoint 2013 includes several enhancements, custom content processing with the Content Enrichment web service, and a new framework for presenting search result types. Additionally, there have been significant enhancements made to the keyword query language (KQL).
  
    
    
 [![Consolidated search platform](../../images/wn_search_1.png)
  
    
    
](custom-content-processing-with-the-content-enrichment-web-service-callout.md) [![Rich results framework](../../images/wn_search_2.png)
  
    
    
](what-s-new-in-sharepoint-search-for-developers.md) [![KQL enhnacements](../../images/wn_search_3.png)
  
    
    
](building-search-queries-in-sharepoint.md)
  
    
    

## Workflows
<a name="bmWorkflow"> </a>

Workflow Manager Client 1.0 is a redesigned workflow infrastructure that is built on Windows Workflow Foundation 4 and brings new power and flexibility to workflow authoring in SharePoint 2013. A fully declarative authoring environment enables information workers to use SharePoint Designer 2013 to author powerful workflows, and a new set of Visual Studio 2012 workflow project templates let developers access more sophisticated features like custom actions. Perhaps most importantly, Workflow Manager Client 1.0 is fully integrated with the model for SharePoint Add-ins. In addition, workflows execute in the cloud, not in SharePoint, which provides enormous flexibility in designing workflow-based SharePoint Add-ins.
  
    
    
 [![Executin in the cloud](../../images/wn_workflow_1.png)
  
    
    
](what-s-new-in-workflows-for-sharepoint.md) [![Workflow 4-based infrastructure](../../images/wn_workflow_2.png)
  
    
    
](sharepoint-workflow-fundamentals.md) [![Declarative authoring](../../images/wn_workflow_3.png)
  
    
    
](workflow-development-in-sharepoint-designer-and-visio.md) [![Designer and project templates](../../images/wn_workflow_4.png)
  
    
    
](develop-sharepoint-workflows-using-visual-studio.md)
  
    
    

## Enterprise Content Management
<a name="bmECM"> </a>

In SharePoint 2013, you can now use .NET client, Silverlight, Windows Phone, and JavaScript APIs, in addition to the newly expanded set of .NET server managed APIs, to customize Enterprise Content Management (ECM) experiences and behavior.
  
    
    
 [![Design Manager](../../images/wn_ecm_1.png)
  
    
    
](what-s-new-with-sharepoint-site-development.md) [![Managed navigation](../../images/wn_ecm_2.png)
  
    
    
](managed-navigation-in-sharepoint.md) [![Cross-site publishing](../../images/wn_ecm_3.png)
  
    
    
](cross-site-publishing-in-sharepoint.md) [![EDiscovery](../../images/wn_ecm_4.png)
  
    
    
](ediscovery-in-sharepoint.md)
  
    
    

## Business Connectivity Services
<a name="bmBCS"> </a>

Business Connectivity Services (BCS) enables SharePoint to access data from external data systems such as SAP, ERP, and CRM, in addition to other data-driven applications that are exposed through WCF services or OData endpoints. BCS in SharePoint 2013 has been improved and enhanced in many ways, including OData connectivity, external events, external data in add-ins, filtering and sorting, support for REST, and others.
  
    
    
 [![OData connector](../../images/wn_bcs_1.png)
  
    
    
](using-odata-sources-with-business-connectivity-services-in-sharepoint.md) [![External data in apps](../../images/wn_bcs_2.png)
  
    
    
](add-in-scoped-external-content-types-in-sharepoint.md) [![External events in SharePoint](../../images/wn_bcs_3.png)
  
    
    
](external-events-and-alerts-in-sharepoint.md)
  
    
    

## Application services
<a name="bmSpServices"> </a>

SharePoint Server 2013 includes several services for working with data in your SharePoint sites. New for SharePoint is the Machine Translation Service, which translates sites, documents, and streams for multilingual support. SharePoint Server 2013 also includes Access Services and a new data access model. For converting files and streams to other formats, SharePoint Server 2013 has Word Automation Services and PowerPoint Automation Services (a new feature for SharePoint). SharePoint also provides data analysis tools, like PerformancePoint Services and Visio Services, that enable business intelligence, and powerful new features in Excel Services.
  
    
    
 [![Translation Services](../../images/wn_appServices_1.png)
  
    
    
](machine-translation-services-in-sharepoint.md) [![PowerPoint Automation Services](../../images/wn_appServices_2.png)
  
    
    
](powerpoint-automation-services-in-sharepoint.md) [![Enhanced Access Services](../../images/wn_appServices_3.png)
  
    
    
](what-s-new-in-access.md) [![Enhanced Excel Services](../../images/wn_appServices_4.png)
  
    
    
](http://msdn.microsoft.com/library/09e96c8b-cb55-4fd1-a797-b50fbf0f9296.aspx)
  
    
    

## Additional resources
<a name="bm_Addres"> </a>


-  [SharePoint 2013 development overview](sharepoint-development-overview.md)
    
  
-  [Develop SharePoint Add-ins](http://msdn.microsoft.com/library/71ddde4b-fac4-4d8c-aa2e-524f9c2c4c99%28Office.15%29.aspx)
    
  
-  [SharePoint Add-ins compared with SharePoint solutions](sharepoint-add-ins-compared-with-sharepoint-solutions.md)
    
  
-  [Choose the right API set in SharePoint 2013](choose-the-right-api-set-in-sharepoint.md)
    
  
-  [Accessibility in SharePoint 2013](accessibility-in-sharepoint.md)
    
  

