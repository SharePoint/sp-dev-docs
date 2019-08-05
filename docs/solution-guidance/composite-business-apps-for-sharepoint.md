---
title: Composite business SharePoint Add-ins
description: Use composite business add-ins to integrate your SharePoint solutions with your business processes and technologies. Decide whether a SharePoint-hosted or provider-hosted add-in is the right choice for your solution.
ms.date: 5/1/2018
localization_priority: Normal
---

# Composite business SharePoint Add-ins

Composite business add-ins are add-ins that are tightly integrated with your business processes and line-of-business (LOB) technologies (such as databases and web services). These add-ins typically include a number of complex interactions with users and with other technologies.

The sample composite business add-ins described in this section provide building blocks that you can use to integrate your technologies and processes with the SharePoint Add-in model.

## SharePoint-hosted versus provider-hosted add-ins

Before you create composite business add-ins, you first need to decide where the add-ins will be hosted. SharePoint-hosted add-ins work best when you can scope your requirements to single-site implementations that you can handle with JavaScript. Provider-hosted add-ins are better for more complex business requirements.

The following table summarizes the factors to consider when you decide where to host your add-ins.

<br/>

|**SharePoint-hosted add-ins**|**Provider-hosted add-ins**|
|:-----|:-----|
|You can do everything you need to do with JavaScript.|You need to use languages other than JavaScript.|
|The add-in does not need to do any work across more than one site; for example, team calendar add-ins and featured news rotators.|The add-in needs to access information and do work across more than a single site. For example, site collection provisioning add-ins.|
|Content is sensitive and needs to stay securely and entirely in SharePoint.|The add-in needs to integrate with other line-of-business technologies.|
||The add-in requires elevated permissions that are made possible by the add-in-only policy.|
||The add-in requires a highly customized UI.|

## In this section

|**Article**|**Sample**|**Shows you how to...**|
|:-----|:-----|:-----|
|[Migrate InfoPath forms to SharePoint](migrate-infopath-forms-to-sharepoint.md) ||Migrate your InfoPath forms to other supported technologies.|
|[Data storage options in SharePoint Online](data-storage-options-in-sharepoint-online.md) |[Core.DataStorageModels](https://github.com/SharePoint/PnP/tree/master/Samples/Core.DataStorageModels) |Use different types of storage models to store your SharePoint Online data.|
|[Corporate event add-in integration with SharePoint](corporate-app-event-registration-with-sharepoint.md)|[BusinessApps.CorporateEventsApp](https://github.com/SharePoint/PnP/tree/master/Solutions/BusinessApps.CorporateEventsApp)|Use a provider-hosted add-in to implement complex business tasks.|
|[Call web services from SharePoint workflows](call-web-services-from-sharepoint-workflows.md)|<p>[Workflow.CallCustomService](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.CallCustomService)</p><p>[Workflow.CallServiceUpdateSPViaProxy](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.CallServiceUpdateSPViaProxy)</p><p>[Workflow.AssociateToHostWeb](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.AssociateToHostWeb)</p>|Use provider-hosted add-ins to call remote web services that contain business data.|

## See also

- [Office 365 Developer Patterns and Practices on GitHub](https://github.com/SharePoint/PnP)
- [Office 365 development and SharePoint PnP solution guidance](office-365-development-patterns-and-practices-solution-guidance.md) 
