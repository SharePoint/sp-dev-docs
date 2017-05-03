---
title: What's new for developers in SharePoint
ms.prod: SHAREPOINT
ms.assetid: 068d0b99-1762-42de-b6c9-acb1cffc6e31
---


# What's new for developers in SharePoint
Learn about new features and functionality in SharePoint, including the new Cloud Add-in Model, development tools, platform enhancements, mobile add-ins, and more.
## Cloud Add-in Model
<a name="bmSpApps"> </a>

SharePoint introduces a Cloud Add-in Model that enables you to create add-ins. SharePoint Add-ins are self-contained pieces of functionality that extend the capabilities of a SharePoint website. An add-in may include SharePoint components such as lists, workflows, and site pages, but it can also surface a remote web application and remote data in SharePoint. An add-in has few or no dependencies on any other software on the device or platform where it is installed, other than what is built into the platform. This characteristic enables add-ins to be installed simply and uninstalled cleanly. Add-ins have no custom code that runs on the SharePoint servers. Instead, all custom logic moves "up" to the cloud or "down" to client computers. Additionally, SharePoint introduces an innovative delivery model for SharePoint Add-ins that includes components like the Office Store and the Add-in Catalog.

<a href="../sp-add-ins/sharepoint-add-ins"><img alt="SharePoint Add-ins" src="../../images/wn_cloud_1.png" /></a>&nbsp;&nbsp;<a href="../sp-add-ins/deploy-and-install-a-sharepoint-hosted-sharepoint-add-in" target="_blank"><img alt="SharePoint Store" src="../../images/wn_cloud_2.png" /></a>&nbsp;&nbsp;<a href="../sp-add-ins/deploy-and-install-a-sharepoint-hosted-sharepoint-add-in" target="_blank"><img alt="Add-ins Catalog" src="../../images/wn_cloud_3.png" /></a>

## Familiar programming model using web standards
<a name="bmWebStandards"> </a>

SharePoint makes it easy for any web developer, including those who work on non-Microsoft platform stacks, to create SharePoint solutions. What makes this possible is that SharePoint is based on common web standards like HTML, CSS, and JavaScript. Furthermore, implementation relies on established protocols like the Open Data protocol (OData), and OAuth.
  

  <a href="http://msdn.microsoft.com/library/cd1eda9e-8e54-4223-93a9-a6ea0d18df70(Office.15).aspx" target="_blank"><img alt="HTML/JavaScript" src="../../images/wn_WebStandards_1.png" /></a>&nbsp;&nbsp;<a href="7a87e5bf-4428-4055-b113-7665a93e7326.htm"><img alt="OData" src="../../images/wn_WebStandards_2.png" /></a>&nbsp;&nbsp;<a href="http://msdn.microsoft.com/library/2de035a0-ac75-43bd-9665-5c5a59c4c590(Office.15).aspx" target="_blank"><img alt="REST" src="../../images/wn_WebStandards_3.png" /></a>&nbsp;&nbsp;<a href="http://msdn.microsoft.com/library/bde5647a-fff1-4b51-b67b-2139de79ce4a(Office.15).aspx" target="_blank"><img alt="OAuth" src="../../images/wn_WebStandards_4.png" /></a>


## Development tools
<a name="bmDevTools"> </a>

The current release reflects enormous strides in optimizing the existing development tools like Visual Studio and SharePoint Designer, in addition to providing the release of newly developed web-based tool Napa Office 365 Development Tools for developing add-ins. The new unified project system in Visual Studio lets you develop SharePoint Add-ins, Office Add-ins, SharePoint Add-ins that include Office Add-ins, or Office Add-ins that are hosted by SharePoint. In addition to the SharePoint project templates that were provided in earlier versions, Visual Studio 2012 now includes a new add-in project template in the Add-ins folder named Add-ins for SharePoint. Several new properties have been added to the Properties window and Properties pages to support SharePoint Add-in projects. Other improvements include full support for development against the Cloud Add-in Model, including OData and OAuth support, and full support for development against the Workflow Manager Client 1.0 platform.

<a href="http://msdn.microsoft.com/library/82a3645c-0911-4926-9176-236ac8d28bdd(Office.15).aspx" target="_blank"><img alt="Napa Office 365 Development Tools" src="../../images/wn_DevTools_1.png" /></a>&nbsp;&nbsp;<a href="http://msdn.microsoft.com/library/e00dc63f-b4a4-4c08-b058-729fcb09af41(Office.15).aspx" target="_blank"><img alt="Visual Studio" src="../../images/wn_DevTools_2.png" /></a>&nbsp;&nbsp;<a href="496780d5-47d6-4a43-bf14-70aefb8d820c.htm"><img alt="SharePoint Designer" src="../../images/wn_DevTools_3.png" /></a>

## Core platform enhancements
<a name="bmPlatformEnhance"> </a>

On a broader scale, SharePoint has been improved and enhanced to support the new cloud-based architecture and app-driven development framework. From the SharePoint APIs at the lowest level to connectivity to social media integration, SharePoint is designed and executed to support a rich application development experience. In addition to the use of Representational State Transfer (REST) endpoints for web services, there is a broad new API for both server and client development. Remote event receivers and now supported in addition to client-side rendering. 
  
<a href="http://msdn.microsoft.com/library/e1ff2979-1c16-4cb0-a57e-9168dfe20a7c.aspx" target="_blank"><img alt="REST endpoints" src="../../images/wn_Platform_1.png" /></a>&nbsp;&nbsp;<a href="f36645da-77c5-47f1-a2ca-13d4b62b320d.htm"><img alt="New client and server APIs" src="../../images/wn_Platform_2.png" /></a>&nbsp;&nbsp;<a href="18e32537-d7ed-4fe7-90cf-b6cfab3f85a3.htm"><img alt="Client-side rendering" src="../../images/wn_Platform_3.png" /></a>&nbsp;&nbsp;<a href="http://msdn.microsoft.com/library/c050d056-8548-4496-a053-016779d723d9(Office.15).aspx" target="_blank"><img alt="Remote event receivers" src="../../images/wn_Platform_4.png" /></a>

    
    
    

## Mobility
<a name="bmMobility"> </a>

With SharePoint, you can combine Windows Phone 7 applications with on-premises SharePoint services and applications, or with remote SharePoint services and applications that run in the cloud (such as those that use SharePoint Online), to create powerful applications that extend functionality beyond the traditional desktop or laptop and into a truly portable and much more accessible environment. The new mobility features in SharePoint are built on existing Microsoft tools and technologies, such as SharePoint, Windows Phone 7, Visual Studio, and Microsoft Silverlight. You can create SharePoint-powered mobile applications for Windows Phone using the new SharePoint phone application wizard template in Visual Studio, which lets you create simple list-based mobile applications. You can integrate new features introduced in SharePoint, such as the Geolocation field type and "push" notifications from SharePoint Server, into your mobile applications.

<a href="6ae27957-fa41-4e6f-92e3-db11dae1f6c2.htm"><img alt="Visual Studio app templates" src="../../images/wn_Mobility_.png" /></a>&nbsp;&nbsp;<a href="68fa2138-86d9-4e35-9c7c-5cd292087b80.htm"><img alt="Push notifications" src="../../images/wn_Mobility_2.png" /></a>&nbsp;&nbsp;<a href="10d4a904-ed27-4513-8c20-d2098aebf22c.htm"><img alt="Location and maps" src="../../images/wn_Mobility_3.png" /></a>

## Social and collaboration
<a name="bmSocial"> </a>

New and improved social and collaboration features make it easy for users to communicate and to stay engaged and informed. The improved My Site social feed helps users keep up to date with the people and content that they care about. The new Community Site feature provides a rich community experience that lets users easily find and share information and find people who have similar interests.

<a href="39f2163e-15cc-43bc-b131-041d5afdcd90.htm"><img alt="Interactive feed" src="../../images/wn_Social_1.png" /></a>&nbsp;&nbsp;<a href="65365b1d-cde5-47cd-8b04-1b76be0e3490.htm#bkmk_Collab"><img alt="Community site" src="../../images/wn_Social_2.png" /></a>&nbsp;&nbsp;<a href="0fa2e235-63d0-41b1-9eed-4aeb2f59a14d.htm"><img alt="Follow people" src="../../images/wn_Social_3.png" /></a>&nbsp;&nbsp;<a href="30e68cd6-6e55-4cf9-afd6-7139b0a97288.htm"><img alt="Follow sites" src="../../images/wn_Social_4.png" /></a>

## Search
<a name="bmSearch"> </a>

Search functionality in SharePoint includes several enhancements, custom content processing with the Content Enrichment web service, and a new framework for presenting search result types. Additionally, there have been significant enhancements made to the keyword query language (KQL).

<a href="bdda92c8-9c8d-416e-9a6b-4a9373686fa0.htm"><img alt="Consolidated search platform" src="../../images/wn_search_1.png" /></a>&nbsp;&nbsp;<a href="b8d69685-3612-421e-b011-50b4d580d461.htm"><img alt="Rich results framework" src="../../images/wn_search_2.png" /></a>&nbsp;&nbsp;<a href="c4372fcc-4574-4c81-a345-a1bb282ca8f7.htm"><img alt="KQL enhnacements" src="../../images/wn_search_3.png" /></a>

## Workflows
<a name="bmWorkflow"> </a>

Workflow Manager Client 1.0 is a redesigned workflow infrastructure that is built on Windows Workflow Foundation 4 and brings new power and flexibility to workflow authoring in SharePoint. A fully declarative authoring environment enables information workers to use SharePoint Designer 2013 to author powerful workflows, and a new set of Visual Studio 2012 workflow project templates let developers access more sophisticated features like custom actions. Perhaps most importantly, Workflow Manager Client 1.0 is fully integrated with the model for SharePoint Add-ins. In addition, workflows execute in the cloud, not in SharePoint, which provides enormous flexibility in designing workflow-based SharePoint Add-ins.

<a href="1d51421b-61ac-46b6-a865-52f968ddc5b3.htm"><img alt="Execute in the cloud" src="../../images/wn_workflow_1.png" /></a>&nbsp;&nbsp;<a href="1e622296-f78b-4e3a-a1e7-8effa24111a8.htm"><img alt="Workflow 4-based infrastructure" src="../../images/wn_workflow_2.png" /></a>&nbsp;&nbsp;<a href="496780d5-47d6-4a43-bf14-70aefb8d820c.htm"><img alt="Declarative authoring" src="../../images/wn_workflow_3.png" /></a>&nbsp;&nbsp;<a href="28f5d3b1-6fe8-4b1f-8c4e-b11105fe6f46.htm"><img alt="Designer and project templates" src="../../images/wn_workflow_4.png" /></a>

## Enterprise Content Management
<a name="bmECM"> </a>

In SharePoint, you can now use .NET client, Silverlight, Windows Phone, and JavaScript APIs, in addition to the newly expanded set of .NET server managed APIs, to customize Enterprise Content Management (ECM) experiences and behavior.

<a href="ac1e9891-5ce9-4707-84e5-6e2fc02fda6b.htm"><img alt="Design Manager" src="../../images/wn_ecm_1.png" /></a>&nbsp;&nbsp;<a href="c9da5011-3c73-4b83-8e00-e7a03a71ed02.htm"><img alt="Managed navigation" src="../../images/wn_ecm_2.png" /></a>&nbsp;&nbsp;<a href="33f49e69-c1d3-4a6e-8887-5df683cba022.htm"><img alt="Cross-site publishing" src="../../images/wn_ecm_3.png" /></a>&nbsp;&nbsp;<a href="45cb324a-75f5-444d-a0fa-5c223df19016.htm"><img alt="EDiscovery" src="../../images/wn_ecm_4.png" /></a>

## Business Connectivity Services
<a name="bmBCS"> </a>

Business Connectivity Services (BCS) enables SharePoint to access data from external data systems such as SAP, ERP, and CRM, in addition to other data-driven applications that are exposed through WCF services or OData endpoints. BCS in SharePoint has been improved and enhanced in many ways, including OData connectivity, external events, external data in add-ins, filtering and sorting, support for REST, and others.

<a href="7a87e5bf-4428-4055-b113-7665a93e7326.htm"><img alt="OData connector" src="../../images/wn_bcs_1.png" /></a>&nbsp;&nbsp;<a href="a34cbbba-dc38-4d3d-b796-d54b5848bdfb.htm"><img alt="External data in apps" src="../../images/wn_bcs_2.png" /></a>&nbsp;&nbsp;<a href="e48e4812-a185-43c5-b243-04b1d79b88ee.htm"><img alt="External events in SharePoint" src="../../images/wn_bcs_3.png" /></a>

## Application services
<a name="bmSpServices"> </a>

SharePoint includes several services for working with data in your SharePoint sites. New for SharePoint is the Machine Translation Service, which translates sites, documents, and streams for multilingual support. SharePoint also includes Access Services and a new data access model. For converting files and streams to other formats, SharePoint has Word Automation Services and PowerPoint Automation Services (a new feature for SharePoint). SharePoint also provides data analysis tools, like PerformancePoint Services and Visio Services, that enable business intelligence, and powerful new features in Excel Services.

<a href="15a81428-da94-40b8-8ed4-6a12f05661e2.htm"><img alt="Translation Services" src="../../images/wn_appServices_1.png" /></a>&nbsp;&nbsp;<a href="168c7dc0-fbdc-41a2-84db-65d211d3d673.htm"><img alt="PowerPoint Automation Services" src="../../images/wn_appServices_2.png" /></a>&nbsp;&nbsp;<a href="625bc1d0-55db-4420-a02e-aee04028b215.htm"><img alt="Enhanced Access Services" src="../../images/wn_appServices_3.png" /></a>&nbsp;&nbsp;<a href="http://msdn.microsoft.com/library/09e96c8b-cb55-4fd1-a797-b50fbf0f9296.aspx" target="_blank"><img alt="Enhanced Excel Services" src="../../images/wn_appServices_4.png" /></a>


## Additional resources
<a name="bm_Addres"> </a>


-  [SharePoint development overview](sharepoint-development-overview.md)
    
  
-  [Develop SharePoint Add-ins](../sp-add-ins/sharepoint-add-ins)
    
  
-  [SharePoint Add-ins compared with SharePoint solutions](sharepoint-add-ins-compared-with-sharepoint-solutions.md)
    
  
-  [Choose the right API set in SharePoint](choose-the-right-api-set-in-sharepoint.md)
    
  
-  [Accessibility in SharePoint](accessibility-in-sharepoint.md)
    
  

