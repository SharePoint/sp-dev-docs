---
title: Workflow activity classes in SharePoint
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: 70d5ca8d-520d-40a9-b24e-52bb31bd6c22
---


# Workflow activity classes in SharePoint
Provides a summary of the SharePoint workflow activity classes that are available in SharePoint.
The palette of activity classes has been revised for SharePoint. Table 1 lists the current catalog of 49 available activities grouped by their respective activity categories.
  
> [!NOTE] 
> In future releases, the activities listed in this table will provide links to the API reference documentation for their respective managed classes. 
  
    
    


## Workflow activity classes available in SharePoint
<a name="bk_wfactivityclasses"> </a>


**Table 1. Workflow activity classes**

||||
|:-----|:-----|:-----|
|**Activity** <br/> |**Category** <br/> |**Description** <br/> |
|CreatedBy  <br/> |Condition  <br/> |Returns whether current item was created by specified user.  <br/> |
|CreatedInRange  <br/> |Condition  <br/> |Returns whether current item was created in specified date range.  <br/> |
|ModifiedBy  <br/> |Condition  <br/> |Returns whether current item was modified by specified user.  <br/> |
|ModifiedInRange  <br/> |Condition  <br/> |Returns whether current item was modified in specified date range.  <br/> |
|WordsInTitle  <br/> |Condition  <br/> |Returns whether specified keywords are present in the title of the current item.  <br/> |
|WorkflowInterop  <br/> |Coordination  <br/> |Starts a SharePoint 2010 workflow (Windows Workflow Foundation 3.5).  <br/> |
|WaitForCustomEvent  <br/> |Event  <br/> |Waits for a custom event to be sent in to the workflow.  <br/> |
|WaitForFieldChange  <br/> |Event  <br/> |Waits for specified field to change to specified value on the specified list item.  <br/> |
|WaitForItemEvent  <br/> |Event  <br/> |Waits for specified event to happen on specified list item.  <br/> |
|CheckInItem  <br/> |List  <br/> |Checks in the specified list item.  <br/> |
|CheckOutItem  <br/> |List  <br/> |Checks out the specified list item.  <br/> |
|CopyItem  <br/> |List  <br/> |Copies the specified file item to the specified document library. Does not apply to non-file-list items.  <br/> |
|CreateListItem  <br/> |List  <br/> |Creates a list item.  <br/> |
|DeleteListItem  <br/> |List  <br/> |Deletes a list item.  <br/> |
|LookupSPList  <br/> |List  <br/> |Returns information about the list that corresponds to the specified list ID.  <br/> |
|LookupSPListItem  <br/> |List  <br/> |Returns properties of the specified list item.  <br/> |
|LookupSPListItemBooleanProperty  <br/> |List  <br/> |Returns value of specified list item property as **Boolean**.  <br/> |
|LookupSPListItemDateTimeProperty  <br/> |List  <br/> |Returns value of specified list item property as **DateTime**.  <br/> |
|LookupSPListItemDoubleProperty  <br/> |List  <br/> |Returns value of specified list item property as **Double**.  <br/> |
|LookupSPListItemDynamicValueProperty  <br/> |List  <br/> |Returns value of specified list item property as **DynamicValue**.  <br/> |
|LookupSPListItemGuid  <br/> |List  <br/> |Returns GUID property of the first list item that matches specified filter criteria of property name and property value.  <br/> |
|LookupSPListItemInt32Property  <br/> |List  <br/> |Returns value of specified list item property as **Int32**.  <br/> |
|LookupSPListItemProperty  <br/> |List  <br/> |Returns value of specified list item property as **Object**.  <br/> |
|LookupSPListItemStringProperty  <br/> |List  <br/> |Returns value of specified list item property as **String**.  <br/> |
|LookupSPListProperty  <br/> |List  <br/> |Returns list properties as **DynamicValue**.  <br/> |
|UndoCheckOutItem  <br/> |List  <br/> |Undoes checkout of the specified list item.  <br/> |
|UpdateListItem  <br/> |List  <br/> |Updates a list item.  <br/> |
|CompositeTask  <br/> |Task  <br/> |Runs a task process - assigns multiple tasks to multiple people in series or parallel, waits for tasks to complete, and calculates aggregate outcome.  <br/> |
|SingleTask  <br/> |Task  <br/> |Runs a simple task process - assigns a single task to a single person or a group, waits for the task to complete.  <br/> |
|ExpandGroupToUsers  <br/> |User  <br/> |Returns a collection of LoginNames of users who are members of a specified SharePoint group principal.  <br/> |
|IsValidUser  <br/> |User  <br/> |Checks whether specified User Principal ID represents a valid SharePoint user.  <br/> |
|LookupSPGroup  <br/> |User  <br/> |Returns information about an SP group that corresponds to the specified principal id.  <br/> |
|LookupSPGroupMembers  <br/> |User  <br/> |Returns collection of information about each member of a group.  <br/> |
|LookupSPPrincipal  <br/> |User  <br/> |Returns information about an SP Principal (Principal represents a user or a group in SharePoint that can be assigned permissions).  <br/> |
|LookupSPPrincipalId  <br/> |User  <br/> |Returns Principal ID that corresponds to a specified user name.  <br/> |
|LookupSPPrincipalProperty  <br/> |User  <br/> |Returns value of a specified property of a specified SP Principal.  <br/> |
|LookupSPUser  <br/> |User  <br/> |Returns information about a user that corresponds to the specified principal ID.  <br/> |
|LookupSPUserProperty  <br/> |User  <br/> |Returns value of a specified property of the user that corresponds to specified SP Principal.  <br/> |
|Email  <br/> |Utility  <br/> |Sends an email message to SharePoint site users.  <br/> |
|GetCurrentItemGuid  <br/> |Utility  <br/> |Returns GUID property of SharePoint List Item on which the workflow instance is running.  <br/> |
|GetCurrentListId  <br/> |Utility  <br/> |Returns ID property of SharePoint list on which the workflow instance is running.  <br/> |
|GetHistoryListId  <br/> |Utility  <br/> |Returns ID of the history list of a workflow instance, if a history list is specified for the workflow association.  <br/> |
|GetTaskListId  <br/> |Utility  <br/> |Returns ID of the task list of a workflow instance, if a history list is specified for the workflow association.  <br/> |
|LookupWorkflowContextProperty  <br/> |Utility  <br/> |Returns value of specified workflow context property.  <br/> |
|SetField  <br/> |Utility  <br/> |Sets a field on current item.  <br/> |
|SetWorkflowStatus  <br/> |Utility  <br/> |Sets specified text as status on specified field on current list item. Allows the workflow to set the value of any string field of a list item as "workflow status."  <br/> |
|TranslateDocument  <br/> |Utility  <br/> |Creates a translated copy of specified document in a specified document library using SharePoint Translation Services.  <br/> |
|WebUri  <br/> |Utility  <br/> |Returns absolute URI of the SP web that contains the workflow.  <br/> |
|WriteToHistory  <br/> |Utility  <br/> |Writes specified comment to history list.  <br/> |
   

## Additional resources
<a name="bkm_addlresource"> </a>


-  [Workflow actions and activities reference for SharePoint](workflow-actions-and-activities-reference-for-sharepoint.md)
    
  
-  [Develop SharePoint workflows using Visual Studio](develop-sharepoint-workflows-using-visual-studio.md)
    
  
-  [Set up and configure SharePoint Workflow Manager](set-up-and-configure-sharepoint-workflow-manager.md)
    
  

