---
title: Workflow initiation and configuration properties
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 7386bbf9-3ed6-4732-bcdb-b27baed7397e
localization_priority: Normal
---


# Workflow initiation and configuration properties
See an overview of the initiation and association properties that SharePoint sets on workflows.
## 

When you launch a workflow, SharePoint automatically sets a number of association and initiation properties that support the workflow. These are listed below. The set of properties that are set differs slightly depending whether it is a **site** workflows or a **list** workflow. These differences are identified in the lists.
  
    
    
Use the following guidelines to associate and launch (initiate) your workflows using the workflow object model:
  
    
    

- To create an association for a **list** workflow, use the [PublishSubscriptionForList](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.workflowsubscriptionservice.publishsubscriptionforlist) method.
    
  
- To create an association for a **site** workflow, use the [PublishSubscription](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.workflowsubscriptionservice.publishsubscription) method.
    
  
- To initiate a **list** workflow, use the [StartWorkflowOnListItem](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.workflowinstanceservice.startworkflowonlistitem) method.
    
  
- To initiate a **site** workflow, use the [StartWorkflow](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.workflowinstanceservice.startworkflow) method.
    
> [!NOTE] 
> The two methods for **associating** workflows are found on the [WorkflowSubscriptionService](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.workflowsubscriptionservice) class, while the two methods for **launching** workflows are found on the [WorkflowInstanceService](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.workflowinstanceservice) class.
  
    
    


## Association properties

The values of association properties are set when you call  [PublishSubscription](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.workflowsubscriptionservice.publishsubscription) . The association property values are association-level properties, meaning that all workflow instances with a given association share the same property value. You can retrieve an association property value within the workflow itself by using the **GetConfigurationValue** activity.
  
    
    
Following is a list of association properties that are set by default for both **list** and **site** workflows when you call [PublishSubscription](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.workflowsubscriptionservice.publishsubscription) .
  
    
    

-  [AssociationTitle](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.workflowconfigurationpropertyname.associationtitle)
    
  
-  [AssociatorUserId](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.workflowconfigurationpropertyname.associatoruserid)
    
  
-  [LayoutsFolder](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.workflowconfigurationpropertyname.layoutsfolder)
    
  
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
  
    
    

In the case of **list** workflows, there are four additional association properties that are set by default when you call [PublishSubscriptionForList(WorkflowSubscription, Guid)](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.workflowsubscriptionservice.publishsubscriptionforlist) .
  
    
    

-  [ListId](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.workflowconfigurationpropertyname.listid)
    
  
-  [ListName](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.workflowconfigurationpropertyname.listname)
    
  
- **StatusColumnCreated***
    
  
- **StatusFieldName***
    
  

> [!IMPORTANT] 
> Properties marked with an asterisk (\*) are not defined in the Workflow APIs, so to access them simply use their string values. 
  
> [!NOTE] 
> You can add custom association properties by using an association form. 
  
    
    


## Initiation properties

Initiation properties are external variables whose values are set when the workflow is initiated - that is, when you call **StartWorkflow**. Note, however, that the property values can be updated at runtime from within the workflow instance by using the **ExternalVariableValue** activity. You can retrieve the values of external variables from *outside*  the workflow by using [Properties](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.workflowinstance.properties) .
  
    
    
External variable values are specific to each workflow instance (as opposed to association properties, where all workflow instances share the same property values). 
  
    
    
All workflow instances (both list and site) have some external variables that are set by default when you call **StartWorkflow**:
  
    
    

-  [InitiatorUserId](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.externalvariablename.initiatoruserid)
    
  
-  [RetryCode](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.externalvariablename.retrycode)
    
  
-  [RelatedItems](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.externalvariablename.relateditems)
    
  
List workflows instances have some additional external variables that are set by default when you call  [StartWorkflowOnListItem](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.workflowinstanceservice.startworkflowonlistitem) :
  
    
    

-  [CurrentItemUrl](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.externalvariablename.currentitemur)
    
  
-  [ItemId](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.externalvariablename.itemid)
    
  
-  [ItemGuid](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.externalvariablename.itemguid)
    
  
-  [ContextListId](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.externalvariablename.contextlistid)
    
  
-  [UniqueId](https://docs.microsoft.com/en-us/dotnet/api/microsoft.sharepoint.workflowservices.externalvariablename.uniqueid)
    
> [!NOTE] 
> You can add custom initiation properties by using an initiation form. 
  
    
    


## See also
<a name="bk_addresources"> </a>

-  [Develop SharePoint workflows using Visual Studio](develop-sharepoint-workflows-using-visual-studio.md)
-  [How to: Create SharePoint Workflows using Visual Studio](how-to-create-sharepoint-workflows-using-visual-studio.md)
    
  

  
   