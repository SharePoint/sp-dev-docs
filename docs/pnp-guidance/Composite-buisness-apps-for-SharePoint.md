# Composite business apps for SharePoint 2013 and SharePoint Online

Use composite business apps to integrate your SharePoint solutions with your business processes and technologies. Decide whether a SharePoint-hosted or provider-hosted add-in is the right choice for your solution.

_**Applies to:** Office 365 | SharePoint 2013 | SharePoint Online_

Composite business apps are apps that are tightly integrated with your business processes and line-of-business (LOB) technologies (like databases and web services). These apps typically include a number of complex interactions with users and with other technologies.
The sample composite business apps described in this section provide building blocks that you can use to integrate your technologies and processes with the SharePoint 2013 add-in model.

## SharePoint-hosted vs. provider-hosted add-ins
<a name="sectionSection0"> </a>

Before you create composite business apps, you first need to decide where the apps will be hosted. SharePoint-hosted add-ins work best when you can scope your requirements to single-site implementations that you can handle with JavaScript. Provider-hosted add-ins are better for more complex business requirements.

The following table summarizes the factors to consider when you decide where to host your apps.

|**SharePoint-hosted add-ins**|**Provider-hosted add-ins**|
|:-----|:-----|
|You can do everything you need to do with JavaScript.|You need to use languages other than JavaScript.|
|The add-in does not need to do any work across more than one site; for example, team calendar apps and featured news rotators.|The add-in needs to access information and do work across more than a single site. For example, site collection provisioning apps.|
|Content is sensitive and needs to stay securely and entirely in SharePoint.|The add-in needs to integrate with other line-of-business technologies.|
||The add-in requires elevated permissions that are made possible by the app-only policy.|
||The add-in requires a highly customized UI.|

## In this section
<a name="sectionSection1"> </a>

|**Article**|**Sample**|**Shows you how to...**|
|:-----|:-----|:-----|
|[Migrate InfoPath forms to SharePoint 2013](Migrate-InfoPath-forms-to-SharePoint.md) ||Migrate your InfoPath 2013 forms to other supported technologies.|
|[Data storage options in SharePoint Online](Data-storage-options-in-SharePoint-Online.md) |[Core.DataStorageModels](https://github.com/SharePoint/PnP/tree/master/Samples/Core.DataStorageModels) |Use different types of storage models to store your SharePoint Online data.|
|[Corporate event add-in integration with SharePoint](Corporate-app-event-registration-with-SharePoint.md)|[BusinessApps.CorporateEventsApp](https://github.com/SharePoint/PnP/tree/master/Solutions/BusinessApps.CorporateEventsApp)|Use a provider-hosted add-in to implement complex business tasks.|
|[Call web services from SharePoint workflows](Call-web-services-from-SharePoint-workflows.md)|<p>[Workflow.CallCustomService](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.CallCustomService)</p><p>[Workflow.CallServiceUpdateSPViaProxy](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.CallServiceUpdateSPViaProxy)</p><p>[Workflow.AssociateToHostWeb](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.AssociateToHostWeb)</p>|Use provider-hosted apps to call remote web services that contain business data.|

## Additional resources
<a name="bk_addresources"> </a>

-  [Office 365 development patterns and practices solution guidance](Office-365-development-patterns-and-practices-solution-guidance.md)
    
-  [Office 365 Development Patterns and Practices on GitHub](https://github.com/SharePoint/PnP)
