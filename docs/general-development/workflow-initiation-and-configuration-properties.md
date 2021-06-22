---
title: Workflow initiation and configuration properties
description: See an overview of the initiation and association properties that SharePoint sets on workflows.
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 7386bbf9-3ed6-4732-bcdb-b27baed7397e
localization_priority: Normal
---


# Workflow initiation and configuration properties
See an overview of the initiation and association properties that SharePoint sets on workflows.

> [!NOTE]
> SharePoint 2010 workflows have been retired since August 1, 2020 for new tenants and removed from existing tenants on November 1, 2020. If you’re using SharePoint 2010 workflows, we recommend migrating to Power Automate or other supported solutions. For more info, see [SharePoint 2010 workflow retirement](https://support.microsoft.com/office/sharepoint-2010-workflow-retirement-1ca3fff8-9985-410a-85aa-8120f626965f).

When you launch a workflow, SharePoint automatically sets a number of association and initiation properties that support the workflow. These are listed below. The set of properties that are set differs slightly depending whether it is a **site** workflows or a **list** workflow. These differences are identified in the lists.
  
    
    
Use the following guidelines to associate and launch (initiate) your workflows using the workflow object model:
  
    
    

- To create an association for a **list** workflow, use the [PublishSubscriptionForList](/dotnet/api/microsoft.sharepoint.workflowservices.workflowsubscriptionservice.publishsubscriptionforlist) method.
    
  
- To create an association for a **site** workflow, use the [PublishSubscription](/dotnet/api/microsoft.sharepoint.workflowservices.workflowsubscriptionservice.publishsubscription) method.
    
  
- To initiate a **list** workflow, use the [StartWorkflowOnListItem](/dotnet/api/microsoft.sharepoint.workflowservices.workflowinstanceservice.startworkflowonlistitem) method.
    
  
- To initiate a **site** workflow, use the [StartWorkflow](/dotnet/api/microsoft.sharepoint.workflowservices.workflowinstanceservice.startworkflow) method.
    
> [!NOTE] 
> The two methods for **associating** workflows are found on the [WorkflowSubscriptionService](/dotnet/api/microsoft.sharepoint.workflowservices.workflowsubscriptionservice) class, while the two methods for **launching** workflows are found on the [WorkflowInstanceService](/dotnet/api/microsoft.sharepoint.workflowservices.workflowinstanceservice) class.
  
    
    


## Association properties

The values of association properties are set when you call  [PublishSubscription](/dotnet/api/microsoft.sharepoint.workflowservices.workflowsubscriptionservice.publishsubscription) . The association property values are association-level properties, meaning that all workflow instances with a given association share the same property value. You can retrieve an association property value within the workflow itself by using the **GetConfigurationValue** activity.
  
    
    
Following is a list of association properties that are set by default for both **list** and **site** workflows when you call [PublishSubscription](/dotnet/api/microsoft.sharepoint.workflowservices.workflowsubscriptionservice.publishsubscription) .
  
    
    

-  [AssociationTitle](/dotnet/api/microsoft.sharepoint.workflowservices.workflowconfigurationpropertyname.associationtitle)
    
  
-  [AssociatorUserId](/dotnet/api/microsoft.sharepoint.workflowservices.workflowconfigurationpropertyname.associatoruserid)
    
  
-  [LayoutsFolder](/dotnet/api/microsoft.sharepoint.workflowservices.workflowconfigurationpropertyname.layoutsfolder)
    
  
-  ParentContentTypeId()
    
  
- **HistoryListId***
    
  
- **TaskListId***
    
  
- **FormData***
    
  
- **SharePointWorkflowContext.Subscription.EventSourceId***
    
  
- **SharePointWorkflowContext.Subscription.EventType***
    
  
- **SharePointWorkflowContext.Subscription.DisplayName***
    
  
- **SharePointWorkflowContext.Subscription.Id***
    
  
- **SharePointWorkflowContext.Subscription.Name***
    
  
- **SharePointWorkflowContext.Subscription.CreatedDate***
    
  

> **Important:**
> Properties marked with an asterisk (\*) are not defined in the Workflow APIs, so to access them simply use their string values. 
  
    
    

In the case of **list** workflows, there are four additional association properties that are set by default when you call [PublishSubscriptionForList(WorkflowSubscription, Guid)](/dotnet/api/microsoft.sharepoint.workflowservices.workflowsubscriptionservice.publishsubscriptionforlist) .
  
    
    

-  [ListId](/dotnet/api/microsoft.sharepoint.workflowservices.workflowconfigurationpropertyname.listid)
    
  
-  [ListName](/dotnet/api/microsoft.sharepoint.workflowservices.workflowconfigurationpropertyname.listname)
    
  
- **StatusColumnCreated***
    
  
- **StatusFieldName***
    
  

> [!IMPORTANT] 
> Properties marked with an asterisk (\*) are not defined in the Workflow APIs, so to access them simply use their string values. 
  
> [!NOTE] 
> You can add custom association properties by using an association form. 
  
    
    


## Initiation properties

Initiation properties are external variables whose values are set when the workflow is initiated - that is, when you call **StartWorkflow**. Note, however, that the property values can be updated at runtime from within the workflow instance by using the **ExternalVariableValue** activity. You can retrieve the values of external variables from *outside*  the workflow by using [Properties](/dotnet/api/microsoft.sharepoint.workflowservices.workflowinstance.properties) .
  
    
    
External variable values are specific to each workflow instance (as opposed to association properties, where all workflow instances share the same property values). 
  
    
    
All workflow instances (both list and site) have some external variables that are set by default when you call **StartWorkflow**:
  
    
    

-  [InitiatorUserId](/dotnet/api/microsoft.sharepoint.workflowservices.externalvariablename.initiatoruserid)
    
  
-  [RetryCode](/dotnet/api/microsoft.sharepoint.workflowservices.externalvariablename.retrycode)
    
  
-  [RelatedItems](/dotnet/api/microsoft.sharepoint.workflowservices.externalvariablename.relateditems)
    
  
List workflows instances have some additional external variables that are set by default when you call  [StartWorkflowOnListItem](/dotnet/api/microsoft.sharepoint.workflowservices.workflowinstanceservice.startworkflowonlistitem) :
  
    
    

-  [CurrentItemUrl](/dotnet/api/microsoft.sharepoint.workflowservices.externalvariablename.currentitemurl)
    
  
-  [ItemId](/dotnet/api/microsoft.sharepoint.workflowservices.externalvariablename.itemid)
    
  
-  [ItemGuid](/dotnet/api/microsoft.sharepoint.workflowservices.externalvariablename.itemguid)
    
  
-  [ContextListId](/dotnet/api/microsoft.sharepoint.workflowservices.externalvariablename.contextlistid)
    
  
-  [UniqueId](/dotnet/api/microsoft.sharepoint.workflowservices.externalvariablename.uniqueid)
    
> [!NOTE] 
> You can add custom initiation properties by using an initiation form. 
  
    
    


## See also
<a name="bk_addresources"> </a>

-  [Develop SharePoint workflows using Visual Studio](develop-sharepoint-workflows-using-visual-studio.md)
-  [How to: Create SharePoint Workflows using Visual Studio](how-to-create-sharepoint-workflows-using-visual-studio.md)
    
  

  
   
