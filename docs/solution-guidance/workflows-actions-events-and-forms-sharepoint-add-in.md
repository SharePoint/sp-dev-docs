---
title: Workflows, actions (activities), events, and forms in the SharePoint add-in model
ms.date: 11/03/2017
---
Workflows, actions (activities), events, and forms in the SharePoint add-in model
=================================================================================

Summary
-------

The approach you take to implement workflows and their associated components is different in the new SharePoint Add-in model than it was with Full Trust Code.  In a typical Full Trust Code (FTC) / Farm Solution scenario, workflows and their associated components were built with server side code and deployed via SharePoint Solutions.  The workflows and their associated components ran on the SharePoint server.

In an SharePoint Add-in model scenario, workflows and their associated components are developed with code that runs on remote servers.  Workflows and their associated components are registered with the Workflow Service, but all code executes on remote servers.

High Level Guidelines
---------------------

As a rule of a thumb, we would like to provide the following high level guidelines for creating workflows and their associated components in the new SharePoint Add-in model.

- Code behind workflows are not available in Office 365 tenancies, or with the SharePoint Add-in model in general.
- All code behind associated with workflows and their associated components must be placed in an external web service running on a remote server.

Options to create custom workflows and their associated components
------------------------------------------------------------------
You have a few options to create custom workflows and their associated components.

- Create custom workflows
- Create custom workflow activities
- Create custom workflow events
- Create custom workflow forms

Create custom workflows
-----------------------
In this option custom workflows are created, deployed, and associated with the Host-web in SharePoint.

- Custom workflows may be created with Visual Studio or SharePoint Designer.
	+ See the [Develop SharePoint 2013 workflows using Visual Studio (MSDN Article)](https://msdn.microsoft.com/en-us/library/office/jj163199.aspx) that summarizes both options and discusses the advantages and disadvantages of each.
- Custom workflows may be deployed and associated with the Host-web in SharePoint in several ways.
	- Workflows created in Visual Studio are automatically packaged inside features for deployment.
	- Workflows created in SharePoint designer must be exported and imported to deploy them from a development server to a production server.
	- Workflows may also be deployed and associated with the Host-web in SharePoint via the remote provisioning pattern.  See the [Site provisioning (SharePoint Add-in Recipe)](site-provisioning-sharepoint-add-in.md) for more details about the remote provisioning pattern.

The following code sample demonstrates how to use CSOM to provision a workflow and the lists which support the workflow.

	public void ProvisionIncidentWorkflowAndRelatedLists(string incidentWorkflowFile, string suiteLevelWebAppUrl, string dispatcherName)
    {
		//Return the list the workflow will be associated with
        var incidentsList = CSOMUtil.GetListByTitle(clientContext, "Incidents");

		//Create a new WorkflowProvisionService class instance which uses the 
		//Microsoft.SharePoint.Client.WorkflowServices.WorkflowServicesManager to
		//provision and configure workflows
        var service = new WorkflowProvisionService(clientContext);

		//Read the workflow .XAML file
        var incidentWF = System.IO.File.ReadAllText(incidentWorkflowFile);

		//Create the WorkflowDefinition and use the 
		//Microsoft.SharePoint.Client.WorkflowServices.WorkflowServicesManager
		//to save and publish it.  
		//This method is shown below for reference.
        var incidentWFDefinitionId = service.SaveDefinitionAndPublish("Incident",
            WorkflowUtil.TranslateWorkflow(incidentWF));

		//Create the workflow tasks list
        var taskListId = service.CreateTaskList("Incident Workflow Tasks");

		//Create the workflow history list
        var historyListId = service.CreateHistoryList("Incident Workflow History");

		//Use the Microsoft.SharePoint.Client.WorkflowServices.WorkflowSubscriptionService to 
		//subscibe the workflow to the list the workflow is associated with, register the
		//events it is associated with, and register the tasks and history list. 
		//This method is shown below for reference.
        service.Subscribe("Incident Workflow", incidentWFDefinitionId, incidentsList.Id,
            WorkflowSubscritpionEventType.ItemAdded, taskListId, historyListId);
    }
	
	public Guid SaveDefinitionAndPublish(string name, string translatedWorkflows)
    {
        var definition = new WorkflowDefinition(ClientContext)
        {
            DisplayName = name,
            Xaml = translatedWorkflows
        };

        var deploymentService = workflowServicesManager.GetWorkflowDeploymentService();
        var result = deploymentService.SaveDefinition(definition);
        ClientContext.ExecuteQuery();

        deploymentService.PublishDefinition(result.Value);
        ClientContext.ExecuteQuery();

        return result.Value;
    }

	public Guid Subscribe(string name, Guid definitionId, Guid targetListId, WorkflowSubscritpionEventType eventTypes, Guid taskListId, Guid historyListId)
    {
        var eventTypesList = new List<string>();
        foreach (WorkflowSubscritpionEventType type in Enum.GetValues(typeof(WorkflowSubscritpionEventType)))
        {
            if ((type & eventTypes) > 0)
                eventTypesList.Add(type.ToString());
        }

        var subscription = new WorkflowSubscription(ClientContext)
        {
            Name = name,
            Enabled = true,
            DefinitionId = definitionId,
            EventSourceId = targetListId,
            EventTypes = eventTypesList.ToArray()
        };

        subscription.SetProperty("TaskListId", taskListId.ToString());
        subscription.SetProperty("HistoryListId", historyListId.ToString());

        var subscriptionService = workflowServicesManager.GetWorkflowSubscriptionService();
        var result = subscriptionService.PublishSubscriptionForList(subscription, targetListId);

        ClientContext.ExecuteQuery();
        return result.Value;
    }

**When is it a good fit?**

When you need to create custom workflows with code behind them this option is a good fit.

**Getting Started**

The following articles demonstrate how to create custom workflows.

- [Create a SharePoint workflow app using Visual Studio 2012 (MSDN Article)](https://msdn.microsoft.com/EN-US/library/office/dn456545.aspx)
- [How to: Create SharePoint 2013 Workflows using Visual Studio (MSDN Article)](https://msdn.microsoft.com/EN-US/library/office/dn584771.aspx)

Create custom workflow activities
---------------------------------
In this option custom workflow activities are created and deployed to SharePoint.

- Custom workflow activities may be created with Visual Studio.
- Custom workflow activities may not be created with SharePoint Designer.
- Custom workflow activities may be used in SharePoint Designer after they are deployed to a SharePoint environment.

**When is it a good fit?**

When you need to implement workflows in business processes whose requirements are not met by the out-of-the-box library of workflow actions in SharePoint Designer

**Getting Started**

The following article demonstrates how to create a custom workflow activity with Visual Studio.

- [How to: Build and deploy workflow custom actions (MSDN Article)](https://msdn.microsoft.com/en-us/library/office/jj163911.aspx)

The [Workflow.Activities (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.Activities) includes several custom workflow activities created with Visual Studio.  It also demonstrates how to use the custom workflow activities in a workflow.

Create custom workflow events
-----------------------------
In this option custom workflow events are created and deployed to SharePoint.

- Custom workflow events may be created with Visual Studio.
- Custom workflow events may not be created with SharePoint Designer.
- Custom workflow events may be used in SharePoint Designer after they are deployed to a SharePoint environment.

**When is it a good fit?**

When you need to implement workflows in business processes whose requirements require the workflows to wait for a custom event before proceeding.

**Getting Started**

The [Workflow.CustomEvents (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.CustomEvents) demonstrates how to create a workflow that waits for a custom even to fire before proceeding.  It also demonstrates how to use the JavaScript Client Side Object Model (JSOM) for the Workflow Services Manager to raise a custom event.

Create custom workflow forms
------------------------------------------------
In this option custom workflow forms are created and deployed to SharePoint.

- Custom workflow forms may be created with Visual Studio.
- Custom workflow forms may not be created with SharePoint Designer.
- Custom workflow forms may be used in SharePoint Designer after they are deployed to a SharePoint environment.

**When is it a good fit?**

When you need to implement workflows in business processes whose requirements require custom forms.

**Getting Started**

The following article demonstrates how to create custom workflow association and initiation forms and use them in a workflow.

- [How to: Create Custom SharePoint Server 2013 Workflow Forms with Visual Studio 2012 (MSDN Article)](https://msdn.microsoft.com/EN-US/library/office/dn518136.aspx)

The [Workflow.CustomTasks (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.CustomTasks) demonstrates how to create custom task and initiation forms and use them in a workflow.

Options to update SharePoint data from a custom workflow
--------------------------------------------------------
You have a couple of options to update SharePoint data from a custom workflow.

- Use the context token and Add-in web URL to authenticate to SharePoint.
- Use the Add-in web URL and the SharePoint web proxy to authenticate to SharePoint.

Use the context token and Add-in web URL to authenticate to SharePoint
----------------------------------------------------------------------

In this option you pass the context token and the Add-in web URL from the workflow to the service the workflow calls via http headers.  The service uses the context token and Add-in web URL to authenticate to SharePoint and return an access token before updating SharePoint data. 

- This approach requires passing the content token from the workflow to the web service.

**When is it a good fit?**

When you want the communication to SharePoint to occur at the client level.

**Getting Started**

The following sample demonstrates how to use the context token and the Add-in web URL to authenticate to SharePoint and update SharePoint data.

- [Workflow.CallCustomService (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.CallCustomService)

See the [Call Web Api service](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.CallCustomService#call-web-api-service) section in the [Workflow.CallCustomService (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.CallCustomService) README for more details about passing the context token and the Add-in web URL from the workflow to the service.

The other sections in the [Workflow.CallCustomService (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.CallCustomService) README provide detailed information about the entire workflow and remote service and also walk you through setting up all of the components in Microsoft Azure.

Use the Add-in web URL and the SharePoint web proxy to authenticate to SharePoint
---------------------------------------------------------------------------------

In this option when the workflow starts you pass the Add-in web URL from the workflow to the service the workflow calls.  The service passes the Add-in web URL to the SharePoint Web Proxy.  The SharePoint Web Proxy uses the Add-in web URL to authenticate to SharePoint and return an access token.  Then, the SharePoint Web Proxy appends the access token to the http headers before making the call to update SharePoint data.

- This approach does not require passing the content token from the workflow to the web service.

**When is it a good fit?**

When you want the communication to SharePoint to occur at the server level.

**Getting Started**

The following sample demonstrates how to use the Add-in web URL and the SharePoint web proxy to authenticate to SharePoint and update SharePoint data.

- [Workflow.CallServiceUpdateSPViaProxy (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.CallServiceUpdateSPViaProxy)

See the [Call Web Api service via web proxy](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.CallServiceUpdateSPViaProxy#call-web-api-service-via-web-proxy) section in the [Workflow.CallServiceUpdateSPViaProxy (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.CallServiceUpdateSPViaProxy) README for more details about the SharePoint Web Proxy invocation.

The other sections in the [Workflow.CallServiceUpdateSPViaProxy (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.CallServiceUpdateSPViaProxy) README provide detailed information about the entire workflow and remote service and also walk you through setting up all of the components in Microsoft Azure.

See the [Query a remote service using the web proxy in SharePoint 2013 (MSDN Article)](https://msdn.microsoft.com/en-us/library/office/fp179895.aspx) for more information about the SharePoint Web Proxy.

Related links
=============
- [SharePoint 2013 workflow object model (MSDN Article)](https://msdn.microsoft.com/EN-US/library/office/jj163969.aspx)
- [Common error messages in SharePoint workflow development (MSDN Article)](https://msdn.microsoft.com/EN-US/library/office/dn449112.aspx)
- [Use workflow interop for SharePoint 2013 (MSDN Article)](https://msdn.microsoft.com/EN-US/library/office/jj670125.aspx)
- [Develop SharePoint 2013 workflows using Visual Studio (MSDN Article)](https://msdn.microsoft.com/en-us/library/office/jj163199.aspx)
- [Site provisioning (SharePoint Add-in Recipe)](site-provisioning-sharepoint-add-in.md)
- [Create a SharePoint workflow app using Visual Studio 2012 (MSDN Article)](https://msdn.microsoft.com/EN-US/library/office/dn456545.aspx)
- [How to: Create SharePoint 2013 Workflows using Visual Studio (MSDN Article)](https://msdn.microsoft.com/EN-US/library/office/dn584771.aspx)
- [How to: Build and deploy workflow custom actions (MSDN Article)](https://msdn.microsoft.com/en-us/library/office/jj163911.aspx)
- [How to: Create Custom SharePoint Server 2013 Workflow Forms with Visual Studio 2012 (MSDN Article)](https://msdn.microsoft.com/EN-US/library/office/dn518136.aspx)
- [Query a remote service using the web proxy in SharePoint 2013 (MSDN Article)](https://msdn.microsoft.com/en-us/library/office/fp179895.aspx)
- [Modules (SharePoint Add-in Recipe)](modules-sharepoint-add-in.md)
- [Site provisioning (SharePoint Add-in Recipe)](site-provisioning-sharepoint-add-in.md)
- Guidance articles at [http://aka.ms/OfficeDevPnPGuidance](http://aka.ms/OfficeDevPnPGuidance "Guidance Articles")
- References in MSDN at [http://aka.ms/OfficeDevPnPMSDN](http://aka.ms/OfficeDevPnPMSDN "References in MSDN")
- Videos at [http://aka.ms/OfficeDevPnPVideos](http://aka.ms/OfficeDevPnPVideos "Videos")

Related PnP samples
===================
- [Workflow.Activities (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.Activities)
- [Workflow.CustomEvents (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.CustomEvents)
- [Workflow.CustomTasks (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.CustomTasks)
- [Workflow.CallCustomService (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.CallCustomService)
- [Workflow.CallServiceUpdateSPViaProxy (O365 PnP Sample)](https://github.com/SharePoint/PnP/tree/master/Samples/Workflow.CallServiceUpdateSPViaProxy)
- Samples and content at [http://aka.ms/OfficeDevPnP](http://aka.ms/OfficeDevPnP)

Applies to
==========
- Office 365 Multi Tenant (MT)
- Office 365 Dedicated (D)
- SharePoint 2013 on-premises
