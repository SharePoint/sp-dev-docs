---
title: Workflow initiation and configuration properties
ms.prod: SHAREPOINT
ms.assetid: 7386bbf9-3ed6-4732-bcdb-b27baed7397e
---


# Workflow initiation and configuration properties
See an overview of the initiation and association properties that SharePoint sets on workflows.
## 

When you launch a workflow, SharePoint automatically sets a number of association and initiation properties that support the workflow. These are listed below. The set of properties that are set differs slightly depending whether it is a **site** workflows or a **list** workflow. These differences are identified in the lists.
  
    
    
Use the following guidelines to associate and launch (initiate) your workflows using the workflow object model:
  
    
    

- To create an association for a **list** workflow, use the [PublishSubscriptionForList](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.WorkflowSubscriptionService.PublishSubscriptionForList.aspx) method.
    
  
- To create an association for a **site** workflow, use the [PublishSubscription](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.WorkflowSubscriptionService.PublishSubscription.aspx) method.
    
  
- To initiate a **list** workflow, use the [StartWorkflowOnListItem](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.WorkflowInstanceService.StartWorkflowOnListItem.aspx) method.
    
  
- To initiate a **site** workflow, use the [StartWorkflow](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.WorkflowInstanceService.StartWorkflow.aspx) method.
    
  

> **Note:**
> The two methods for **associating** workflows are found on the [WorkflowSubscriptionService](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.WorkflowSubscriptionService.aspx) class, while the two methods for **launching** workflows are found on the [WorkflowInstanceService](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.WorkflowInstanceService.aspx) class.
  
    
    


## Association properties

The values of association properties are set when you call  [PublishSubscription](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.WorkflowSubscriptionService.PublishSubscription.aspx) . The association property values are association-level properties, meaning that all workflow instances with a given association share the same property value. You can retrieve an association property value within the workflow itself by using the **GetConfigurationValue** activity.
  
    
    
Following is a list of association properties that are set by default for both **list** and **site** workflows when you call [PublishSubscription](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.WorkflowSubscriptionService.PublishSubscription.aspx) .
  
    
    

-  [AssociationTitle](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.WorkflowConfigurationPropertyName.AssociationTitle.aspx)
    
  
-  [AssociatorUserId](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.WorkflowConfigurationPropertyName.AssociatorUserId.aspx)
    
  
-  [LayoutsFolder](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.WorkflowConfigurationPropertyName.LayoutsFolder.aspx)
    
  
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
> Properties marked with an asterisk (*) are not defined in the Workflow APIs, so to access them simply use their string values. 
  
    
    

In the case of **list** workflows, there are four additional association properties that are set by default when you call [PublishSubscriptionForList(WorkflowSubscription, Guid)](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.WorkflowSubscriptionService.PublishSubscriptionForList.aspx) .
  
    
    

-  [ListId](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.WorkflowConfigurationPropertyName.ListId.aspx)
    
  
-  [ListName](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.WorkflowConfigurationPropertyName.ListName.aspx)
    
  
- **StatusColumnCreated***
    
  
- **StatusFieldName***
    
  

> **Important:**
> Properties marked with an asterisk (*) are not defined in the Workflow APIs, so to access them simply use their string values. 
  
    
    


> **Note:**
> You can add custom association properties by using an association form. 
  
    
    


## Initiation properties

Initiation properties are external variables whose values are set when the workflow is initiated - that is, when you call **StartWorkflow**. Note, however, that the property values can be updated at runtime from within the workflow instance by using the **ExternalVariableValue** activity. You can retrieve the values of external variables from *outside*  the workflow by using [Properties](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.WorkflowInstance.Properties.aspx) .
  
    
    
External variable values are specific to each workflow instance (as opposed to association properties, where all workflow instances share the same property values). 
  
    
    
All workflow instances (both list and site) have some external variables that are set by default when you call **StartWorkflow**:
  
    
    

-  [InitiatorUserId](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.ExternalVariableName.InitiatorUserId.aspx)
    
  
-  [RetryCode](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.ExternalVariableName.RetryCode.aspx)
    
  
-  [RelatedItems](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.ExternalVariableName.RelatedItems.aspx)
    
  
List workflows instances have some additional external variables that are set by default when you call  [StartWorkflowOnListItem](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.WorkflowInstanceService.StartWorkflowOnListItem.aspx) :
  
    
    

-  [CurrentItemUrl](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.ExternalVariableName.CurrentItemUrl.aspx)
    
  
-  [ItemId](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.ExternalVariableName.ItemId.aspx)
    
  
-  [ItemGuid](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.ExternalVariableName.ItemGuid.aspx)
    
  
-  [ContextListId](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.ExternalVariableName.ContextListId.aspx)
    
  
-  [UniqueId](https://msdn.microsoft.com/library/Microsoft.SharePoint.WorkflowServices.ExternalVariableName.UniqueId.aspx)
    
  

> **Note:**
> You can add custom initiation properties by using an initiation form. 
  
    
    


## Additional resources
<a name="bk_addresources"> </a>


-  [Develop SharePoint workflows using Visual Studio](develop-sharepoint-workflows-using-visual-studio.md)
    
  
-  [How to: Create SharePoint Workflows using Visual Studio](how-to-create-sharepoint-workflows-using-visual-studio.md)
    
  

  
    
    

