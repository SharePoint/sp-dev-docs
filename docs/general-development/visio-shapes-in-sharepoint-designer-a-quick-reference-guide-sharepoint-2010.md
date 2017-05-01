---
title: Visio shapes in SharePoint Designer 2013 A quick reference guide (SharePoint 2010 Workflow platform)
ms.prod: SHAREPOINT
ms.assetid: 51bc37fd-37de-4ad0-a75a-bdf7333bc80c
---



# Visio shapes in SharePoint Designer 2013: A quick reference guide (SharePoint 2010 Workflow platform)
You can create a workflow in Microsoft Visio Professional 2013 and then export it to Microsoft SharePoint Designer 2013. This guide identifies the Visio shapes that you use to create your workflow.Use this reference article only if you are working in SharePoint Designer 2013 but want to continue to use the SharePoint 2010 Workflow Platform.The shapes for the SharePoint 2010 Workflow Platform come in three stencils: **Actions - SharePoint 2010 Workflow**, **Conditions - SharePoint 2010 Workflow**, and **Terminators - SharePoint 2010 Workflow**.
## Workflow actions
<a name="section1"> </a>

Workflow actions are specific operations that workflow performs. Every workflow must contain at least one action.
  
    
    
The actions in this list are organized in categories based on their area of application in a workflow. For example, actions that affect the behavior of a list item are grouped under **List Actions**, and actions related to document sets are grouped under **Document Set Actions**. The categories for actions are:
  
    
    

-  [Core actions](visio-shapes-in-sharepoint-designer-a-quick-reference-guide-sharepoint-2010.md#section1a) These are the most commonly used actions in a workflow.
    
  
-  [Document set actions](visio-shapes-in-sharepoint-designer-a-quick-reference-guide-sharepoint-2010.md#section1e) Typically, these actions are used in workflows that are associated with a document library or the document content type.
    
  
-  [List actions](visio-shapes-in-sharepoint-designer-a-quick-reference-guide-sharepoint-2010.md#section1b) These actions perform operations on list items.
    
  
-  [Relational actions](visio-shapes-in-sharepoint-designer-a-quick-reference-guide-sharepoint-2010.md#section1d) The single action in this category looks up a user's manager and stores that information in a variable.
    
  
-  [Task actions](visio-shapes-in-sharepoint-designer-a-quick-reference-guide-sharepoint-2010.md#section1c) These actions are associated with approval, feedback, and form operations.
    
  

> **Important:**
> Most of the action shapes that you can insert into a SharePoint workflow in Visio require additional configuration when the workflow is imported into SharePoint Designer. In Visio, remember to use the comments feature of each action shape to specify the settings or configuration of the action. 
  
    
    


### Core actions
<a name="section1a"> </a>

These are the most commonly-used actions and can be used in any type of workflow or step.
  
    
    

****


|**Visio Action Shape**|**Corresponding action in SharePoint Designer**|**Action description**|
|:-----|:-----|:-----|
|![Add a comment](../../images/spd15-addcomment-visio.JPG)|This Visio action is the same as the **Add a Comment** action in SharePoint Designer 2013 and appears as: <br/> ![Add comment](../../images/spd15-addcomment-txt.JPG)    > **Note:**> Comments remain visible when the workflow is exported to Visio.           |**Add a comment** <br/> Use this action to leave informative comments in the workflow designer for reference purposes. This is especially helpful when there are other users co-authoring the workflow. For example, if a variable in the current workflow doesn't have a user-friendly name, you use this action to add a comment to indicate what the variable does in the workflow.  <br/> |
|![Add time to date](../../images/spd15-addtimetodate-visio.JPG)|This Visio action is the same as the **Add Time to Date** action in SharePoint Designer 2013 and appears as: <br/> ![Add time to date](../../images/spd15-addtimetodate-txt.JPG)|**Add time to date** <br/> Use this action to add a specific time in minutes, hours, days, months, or years to a date, and store the output value as a variable. The date can be a current date, specific date, or a lookup.  <br/> |
|![Do calculation](../../images/spd15-docalc-visio.JPG)|This Visio action is the same as the **Do Calculation** action in SharePoint Designer 2013 and appears as: <br/> ![Do calculation](../../images/spd15-docalc-txt.JPG)|**Do calculation** <br/> Use this action to perform a calculation, such as add, subtract, multiply, or divide two values, and stores the output value in a variable.  <br/> |
|![Log to history list](../../images/spd15-LogHist-visio.JPG)|This Visio action is the same as the **Log to History List** action in SharePoint Designer 2013 and appears as: <br/> ![Log to history list](../../images/spd15-LogHist-txt.JPG)|**Log to history list** <br/> Use this action to log a message about the workflow into its history list. A message can be a summary of a workflow event, or anything significant about the workflow. The workflow history list can be helpful in troubleshooting issues with the workflow.  <br/> |
|![Pause for duration](../../images/spd15-PauseDuration-visio.JPG)|This Visio action is the same as the **Pause for Duration** action in SharePoint Designer 2013 and appears as: <br/> ![Pause for duration](../../images/spd15-PauseDuration-txt.JPG)|**Pause for duration** <br/> Use this action to pause the workflow for a specific duration in days, hours, or minutes.  <br/> > **Note:**> The delay time is effected by the timer job interval, which has a default value of five minutes.           |
|![Pause until date](../../images/spd15-PauseDate-visio.JPG)|This Visio action is the same as the **Pause Until Date** action in SharePoint Designer 2013 and appears as: <br/> ![Pause until date](../../images/spd15-PauseDate-txt.JPG)|**Pause until date** <br/> Use this action to pause the workflow until a particular date. You can add a current date, a specific date, or a lookup.  <br/> |
|![Set time portion of date-time field](../../images/spd15-SetTimePortion-visio.JPG)|This Visio action is the same as the **Set Time Portion of Date/Time Field** action in SharePoint Designer 2013 and appears as: <br/> ![Set time portion of date-time field](../../images/spd15-SetTimePortion-txt.JPG)|**Set time portion of date/time field** <br/> Use this action to create a timestamp, and stores the output value in a variable. You can set the time in hours and minutes and add a current date, specific date or a lookup.  <br/> |
|![Set workflow status](../../images/spd15-SetWFStatus-visio.JPG)| This Visio action is the same as the **Set Workflow Status** action in SharePoint Designer 2013 and appears as: <br/> ![Set workflow status](../../images/spd15-SetWFStatus-txt.JPG) You cannot rename or delete a status value once it has been created. However, you do not have to use it. <br/>  A custom status is applicable to the current workflow only, and cannot be used in another workflow <br/>  A workflow cannot use custom status values that you define in the action if the action is used inside an impersonation step. <br/> |**Set workflow status** <br/> Use this action to set the status of the workflow. The default options are **Canceled**, **Approved**, and **Rejected**.  <br/> You can enter a new status value in the dropdown in the action. Once you enter a status value, the entry is automatically added to the dropdown list.  <br/> If the **Set Workflow Status** action is the last step in your workflow where you have also used a custom value, you can see your custom value in the **Status** column in the list upon workflow pausing or completion. <br/> |
|![Set workflow variable](../../images/spd15-SetWFVar-visio.JPG)|This Visio action is the same as the **Set Workflow Variable** action in SharePoint Designer 2013 and appears as: <br/> ![Set workflow variable](../../images/spd15-SetWFVar-txt.JPG)|**Set workflow variable** <br/> Use this action to set a workflow variable to a value. Use this action when you want the workflow to assign data to a variable.  <br/> |
|![Stop workflow](../../images/spd15-StopWF-visio.JPG)|This Visio action is the same as the **Stop workflow** action in SharePoint Designer 2013 and appears as: <br/> ![Stop workflow](../../images/spd15-StopWF-txt.JPG)|**Stop workflow** <br/> Use this action to stop the current instance of the workflow and log a message to the **Workflow History** list. The message that you specify in the action will appear in the **Description** column in the Workflow History upon workflow completion. <br/> |
   

### List actions
<a name="section1b"> </a>

These actions are used on list items.
  
    
    

****


|**VISIO ACTION SHAPE**|**CORRESPONDING ACTION IN SHAREPOINT DESIGNER**|**ACTION DESCRIPTION**|
|:-----|:-----|:-----|
|![Add list item permissions](../../images/spd15-AddListItemPerms-visio.JPG)|This Visio action is the same as the **Add List Item Permissions** action in SharePoint Designer 2013 and appears as: <br/> ![Add permissions to item](../../images/spd15-AddListItemPerms-txt.JPG)    > **Note:**> This action is only available within an impersonation step.           |**Add list item permissions** <br/> This action grants specific permission levels for an item to specific users.  <br/> |
|![Check in item](../../images/spd15-CheckInItem-visio.JPG)|This Visio action is the same as the **Check In Item** action in SharePoint Designer 2013 and appears as: <br/> ![Check in item](../../images/spd15-CheckInItem-txt.JPG)|**Check in item** <br/> This action checks in an item that is checked out.  <br/> > **Note:**> You can only check in items from a document library.           |
|![Check out item](../../images/spd15-CheckOutItem-visio.JPG)|This Visio action is the same as the **Check Out Item** action in SharePoint Designer 2013 and appears as: <br/> ![Check out item](../../images/spd15-CheckOutItem-txt.JPG)|**Check out item** <br/> Use this action to check out an item. The workflow verifies if the item is checked in, before it checks out a document.  <br/> > **Note:**> You can only check out items from a library in your site.           |
|![Copy list item](../../images/spd15-CopyListItem-visio.JPG)|This Visio action is the same as the **Copy List Item** action in SharePoint Designer 2013 and appears as: <br/> ![Copy list item](../../images/spd15-CopyListItem-txt.JPG)|**Copy list item** <br/> Use this action to copy a list item to another list. If there is a document in the list item, the workflow also copies the document to the destination list.  <br/> > **Important:**> You must have at least one column similar in both the source and destination lists.           |
|![Create list item](../../images/spd15-CreateListItem-visio.JPG)|This Visio action is the same as the **Create List Item** action in SharePoint Designer 2013 and appears as: <br/> ![Create list item](../../images/spd15-CreateListItem-txt.JPG)|**Create list item** <br/> Use this action to create a new list item in the list that you specify. You can supply the fields and values in the new item.  <br/> You can use this action whenever you want a new item to be created with specific information.  <br/> > **Note:**> The output variable is the ID of the item created in the list.           |
|![Delete item](../../images/spd15-DeleteItem-visio.JPG)|This Visio action is the same as the **Delete Item** action in SharePoint Designer 2013 and appears as: <br/> ![Delete item](../../images/spd15-DeleteItem-txt.JPG)|**Delete item** <br/> Use this action to delete an item.  <br/> |
|![Discard check out item](../../images/spd15-DiscardItem-visio.JPG)|This Visio action is the same as the **Discard Check Out Item** action in SharePoint Designer 2013 and appears as: <br/> ![Discard check out item](../../images/spd15-DiscardItem-txt.JPG)|**Discard check out item** <br/> Use this action if an item is checked out, changes have been made to it, and you want to discard the changes and check the item back in.  <br/> |
|![Inherit list item permissions](../../images/spd15-InheritListItemPerms-visio.JPG)|This Visio action is the same as the **Inherit List Item Parent Permissions** action in SharePoint Designer 2013 and appears as: <br/> ![Inherit list item permissions](../../images/spd15-InheritListItemPerms-txt.JPG)    > **Note:**> This action is only available in an impersonation step.           |**Inherit list item permissions** <br/> If your item has unique permissions, you can use this action to make the item inherit the parent permissions from the list.  <br/> |
|![Remove list item permissions](../../images/spd15-RmListItemPerms-visio.JPG)|This Visio action is the same as the **Remove List Item Permission**s action in SharePoint Designer 2013 and appears as:  <br/> ![Remove list item permissions](../../images/spd15-RmListItemPerms-txt.JPG)    > **Note:**> This action is only available in an impersonation step.           |**Remove list item permissions** <br/> This action removes permissions from an item for specific users.  <br/> |
|![Replace list item permissions](../../images/spd15-ReplaceListItemPerms-visio.JPG)|This Visio action is the same as the **Replace List Item Permissions** action in SharePoint Designer 2013 and appears as: <br/> ![Replace list item permissions](../../images/spd15-ReplaceListItemPerms-txt.JPG)    > **Note:**> This action is only available in an impersonation step.           |**Replace list item permissions** <br/> It replaces an item's current permissions with the new permissions that you specify in the action.  <br/> |
|![Set content approval status](../../images/spd15-SetContentApprovalStatus-visio.JPG)|This Visio action is the same as the **Set Content Approval Status** action in SharePoint Designer 2013 and appears as: <br/> ![Set content approval status](../../images/spd15-SetContentApprovalStatus-txt.JPG)    > **Note:**> Content approval must be enabled in the list in order to use this action.           
|**Set content approval status** <br/> If you have content approval enabled in your list, use this action to set the content approval status field to a value such as Approved, Rejected, or Pending. You can type a custom status in the action.  <br/> > **Note:**> The **Set Content Approval Status** action works on the current item that the workflow is acting upon, therefore the action is not available in a site workflow.          |
|![Set field in current item](../../images/spd15-SetFieldCurrItem-visio.JPG)|This Visio action is the same as the **Set Field in Current Item** action in SharePoint Designer 2013 and appears as: <br/> ![Set field in current item](../../images/spd15-SetFieldCurrItem-txt.JPG)|**Set field in current item** <br/> Use the action to set a field in the current item to a value.  <br/> > **Note:**> If you want to pause the workflow until it changes the value of the field, use the **Wait for Field Change in Current Item** action instead.          The **Set Field in Current Item** action should not be used in a site workflow. <br/> |
|![Update list item](../../images/spd15-UpdateListItem-visio.JPG)|This Visio action is the same as the **Update List Item** action in SharePoint Designer 2013 and appears as: <br/> ![Update list item](../../images/spd15-UpdateListItem-txt.JPG)|**Update list item** <br/> Use this action to update a list item. You can specify the fields and the new values in those fields.  <br/> |
|![Wait for field change in current item](../../images/spd15-Wait4FieldChange-visio.JPG)|This Visio action is the same as the **Wait for Field Change in Current Item** action in SharePoint Designer 2013 and appears as: <br/> ![Wait for field change](../../images/spd15-Wait4FieldChange-txt.JPG)|**Wait for field change in current item** <br/> This action pauses the workflow until the field in the current item has changed to a new value.  <br/> > **Note:**> If you want the workflow to change the value of the field, rather than have the workflow wait for the field to change, use the **Set Field in Current Item** action instead.          |
   

### Task actions
<a name="section1c"> </a>

Actions in this category pertain to task items. These actions apply only to SharePoint sites running SharePoint Server 2013.
  
    
    

****


|**VISIO ACTION SHAPE**|**CORRESPONDING ACTION IN SHAREPOINT DESIGNER**|**ACTION DESCRIPTION**|
|:-----|:-----|:-----|
|![Assign a form to a group](../../images/spd15-AssignForm2Grp-visio.JPG)|This Visio action is the same as the **Assign a Form to a Group** action in SharePoint Designer 2013 and appears as: <br/> ![Assign a form to a group](../../images/spd15-AssignForm2Grp-txt.JPG)|**Assign a form to a group** <br/> Use this action to enable you to create a custom task form with customized fields.  <br/> You can use this action to assign a task to one or more participants or groups prompting them to perform their tasks. Participants provide their responses it the fields of the custom task form and, when they are done with the task, click **Complete Task** on the form. <br/> |
|![Assign a to-do item](../../images/spd15-AssignToDoItem-visio.JPG)|This Visio action is the same as the **Assign a To-do Item** action in SharePoint Designer 2013 and appears as: <br/> ![Assign a to-do item](../../images/spd15-AssignToDoItem-txt.JPG)|**Assign a to-do item** <br/> Use this action to assign a task to each of the participants, prompting them to perform their tasks and then, when they are done, to click the **Complete Task** button on their task form. <br/> |
|![Collect data from a user](../../images/spd15-CollectDataFrUser-visio.JPG)|This Visio action is the same as the **Collect Data from a User** action in SharePoint Designer 2013 and appears as: <br/> ![Collect data from a user](../../images/spd15-CollectDataFrUser-txt.JPG)|**Collect data from a user** <br/> Use this action to assign a task to the participant, prompting them to provide the needed information in a custom task form, and then click the **Complete Task** button on the task form. <br/> This action has an output clause— meaning, the workflow stores the information returned by the action in a corresponding variable. The list item ID of the completed task item from the action is stored in the collect variable.  <br/> |
|![Start approval process](../../images/spd15-StartApprovalProc-visio.JPG)|This Visio action is the same as the **Start Approval Process** action in SharePoint Designer 2013 and appears as: <br/> ![Start approval process for document set](../../images/spd15-StartApprovalProc-txt.JPG)|**Start approval process** <br/> Use this action to route a document for approval. Approvers can approve or reject the document, reassign the approval task, or request changes.  <br/> You can assign tasks to both internal and external participants in the action. An external participant can be an employee in your organization who isn't a user in the site collection, or anyone outside your organization.  <br/> |
|![Start feedback process](../../images/spd15-StartFeedback-visio.JPG)|This Visio action is the same as the **Start Feedback Process** action in SharePoint Designer 2013 and appears as: <br/> ![Start feedback process](../../images/spd15-StartFeedback-txt.JPG)|**Start feedback process** <br/> Use this action to assign task items for feedback to users in a specific order—serial or parallel. The default is parallel. Users or task participants can also reassign a task to other users. When the users are done, they can click the **Submit Feedback** button to indicate task completion. <br/> You can assign tasks to both internal and external participants in the action. An external participant can be an employee in your organization who isn't a user in the site collection, or anyone outside your organization.  <br/> |
|![Start custom task process](../../images/spd15-StartCustomTask-visio.JPG)|This Visio action is the same as the **Start Custom Task Process** action in SharePoint Designer 2013 and appears as: <br/> ![Start custom task process](../../images/spd15-StartCustomTask-txt.JPG)|**Start custom task process** <br/> The **Start Custom Task Process** action is an approval process template that you can use if other approval actions do not meet your needs. <br/> |
   

### Relational actions
<a name="section1d"> </a>

The single action in this category looks up a user's manager and stores that information in a variable. This action applies only to SharePoint sites running SharePoint Server 2013.
  
    
    

****


|**VISIO ACTION SHAPE**|**CORRESPONDING ACTION IN SHAREPOINT DESIGNER**|**ACTION DESCRIPTION**|
|:-----|:-----|:-----|
|![Lookup manager of a user](../../images/spd15-LookupMgr4User-visio.JPG)|This Visio action is the same as the **Lookup Manager of a User** action in SharePoint Designer 2013 and appears as: <br/> ![Lookup manager of a user](../../images/spd15-LookupMgr4User-txt.JPG)|**Lookup manager of a user** <br/> Use this action to look up a user's manager. The output value is then stored in a variable.  <br/> > **Note:**> For this action to work properly, the User Profile service must be running in SharePoint.           |
   

### Document set actions
<a name="section1e"> </a>

Some workflow actions are only available when the workflow is associated to a document library, such as Shared Documents, or to the Document content type.
  
    
    

****


|**VISIO ACTION SHAPE**|**CORRESPONDING ACTION IN SHAREPOINT DESIGNER**|**ACTION DESCRIPTION**|
|:-----|:-----|:-----|
|![Send approval for document set](../../images/spd15-SendApproval4DocSet-visio.JPG)|This Visio action is the same as the **Start Document Set Approval Process** action in SharePoint Designer 2013 and appears as: <br/> ![Start approval process for document set](../../images/spd15-SendApproval4DocSet-txt.JPG)|**Send approval for document set** <br/> Use this action to begin the approval process for a document set.  <br/> |
|![Send document set to repository](../../images/spd15-SendDocSet2Repos-visio.JPG)|This Visio action is the same as the **Send Document Set to Repository** action in SharePoint Designer 2013 and appears as: <br/> ![Send document set to repository](../../images/spd15-SendDocSet2Repos-txt.JPG)|**Send document set to repository** <br/> Use this action to allow you to move or copy the document set to a document repository. A document repository can be a library in your SharePoint site, or a site on its own like the Document Center, that routes records to a specific destination based on rules that you define.  <br/> |
|![Send document to repository](../../images/spd15-SendDoc2Repos-visio.JPG)|This Visio action is the same as the **Send Document to Repository** action in SharePoint Designer 2013 and appears as: <br/> ![Send document to repository](../../images/spd15-SendDoc2Repos-txt.JPG)|**Send document to repository** <br/> Use this action to allow you to move or copy a document to a document repository. A document repository can be a library in your SharePoint site, or a site on its own like the Document Center, that routes records to a specific destination based on rules that you define.  <br/> |
|![Set content approval status for document set](../../images/spd15-SetContentApprStatus-visio.JPG)|This Visio action is the same as the **Set Content Approval Status for the Document Set** action in SharePoint Designer 2013 and appears as: <br/> ![Set content approval status for document set](../../images/spd15-SetContentApprStatus4DocSet-txt.JPG)|**Set content approval status for the document set** <br/> Use this action to set content approval of a document set to **Approved**, **Rejected**, or **Pending**.  <br/> |
   

## Workflow conditions
<a name="section2"> </a>

A workflow condition is a branching point in the workflow. The workflow condition compares the input to a specified value. If they match, the workflow follows one branch; if not, it follows the other branch.
  
    
    

> **Important:**
> Most of the condition shapes that you can insert into a SharePoint workflow in Visio require additional configuration when the workflow is imported into SharePoint Designer. In Visio, remember to use the comments feature of each condition shape to specify the decision criteria of the condition. 
  
    
    


### General conditions

This section describes the conditions that are available in SharePoint Designer 2013for list and reusable list workflows, no matter which list or content type the workflow is associated with.
  
    
    

****


|**VISIO CONDITION SHAPE**|**CORRESPONDING CONDITION IN SHAREPOINT DESIGNER**|**CONDITION DESCRIPTION**|
|:-----|:-----|:-----|
|![Compare data source](../../images/spd15-CompareDataSrc-visio.JPG)|This Visio condition is the same as the **If any value equals value** condition in SharePoint Designer 2013 and appears as: <br/> ![If value equals value](../../images/spd15-CompareDataSrc-txt.JPG)|**Compare data source** <br/> This condition compares two values. You can specify whether the values should be equal or not equal.  <br/> |
|![Compare document field](../../images/spd15-CompareDocField-visio.JPG)|This Visio condition is the same as the **If current item field equals value** condition in SharePoint Designer 2013 and appears as: <br/> ![If current item field equals value](../../images/spd15-CompareDocField-txt.JPG)|**Compare document field** <br/> This condition checks a field against a value that you specify. You can specify whether the values should be equal or not equal.  <br/> |
|![Created by a specified person](../../images/spd15-CreatedBySpecPerson-visio.JPG)|This Visio condition is the same as the **Created by a specific person** condition in SharePoint Designer 2013 and appears as: <br/> ![If created by specific person](../../images/spd15-CreatedBySpecPerson-txt.JPG)|**Created by a specified person** <br/> This condition checks if an item was created by a specific user. The user can be specified as an e-mail address, such as olivier@contoso.com, or selected from SharePoint, Exchange, or Active Directory users.  <br/> > **Note:**> The user name and e-mail address are case sensitive. It is recommended that you select a user name or e-mail address to help ensure that you use the correct case. If you type a user name or e-mail address, you must match the case of the account. For example, If created by contoso\\molly will not evaluate as true if the user account is Contoso\\Molly.           |
|![Created in specific data span](../../images/spd15-CreatedInSpecDateSpan-visio.JPG)|This Visio condition is the same as the **Created in a specific date span** condition in SharePoint Designer 2013 and appears as: <br/> ![If created in a specific date span](../../images/spd15-CreatedInSpecDateSpan-txt.JPG)|**Created in specific date span** <br/> This condition checks if the item was created between the specified dates. You can use the current date, a specific date, or a lookup.  <br/> |
|![Modified by a specific person](../../images/spd15-ModifiedBySpecPerson-visio.JPG)|This Visio condition is the same as the **Modified by a specific person** condition in SharePoint Designer 2013 and appears as: <br/> ![If modified by a specific person](../../images/spd15-ModifiedBySpecPerson-txt.JPG)|**Modified by a specific person** <br/> Use this condition to check if an item was modified by a specified user. The user can be specified as an e-mail address, such as olivier@contoso.com, or selected from SharePoint, Exchange, or Active Directory users.  <br/> > **Note:**> The user name and e-mail address are case sensitive. It is recommended that you select a user name or e-mail address to help ensure that you use the correct case. If you type a user name or e-mail address, you must match the case of the account. For example, If modified by contoso\\molly will not evaluate as true if the user account is Contoso\\Molly.           |
|![Modified in a specific date span](../../images/spd15-ModifiedInSpecDateSpan-visio.JPG)|This Visio condition is the same as the **Modified in a specific date span** condition in SharePoint Designer 2013 and appears as: <br/> ![If modified in a specific date span](../../images/spd15-ModifiedInSpecDateSpan-txt.JPG)|**Modified in a specific date span** <br/> This condition checks if an item was modified between the specified dates. You can use the current date, a specific date, or a lookup.  <br/> |
|![Title field contains keywords](../../images/spd15-TitleFieldKeywords-visio.JPG)|This Visio condition is the same as the **Title field contains keywords** condition in SharePoint Designer 2013 and appears as: <br/> ![If title field contains keywords](../../images/spd15-TitleFieldKeywords-txt.JPG)|**Title field contains keywords** <br/> This condition checks if the **Title** field for an item contains a specific word. You can either specify the keyword in the String Builder—which can be a static value or a dynamic string or a combination — or insert a lookup to a field or variable. <br/> > **Note:**> You cannot search for more than one keyword in the **Title field contains keywords** condition. However, you can use logical operators such as**||**( or) or **&amp;&amp;** (and.          |
   

### Document set conditions

Some workflow conditions are only available when the workflow is associated to a document library, such as Shared Documents, or to the Document content type.
  
    
    


|**VISIO CONDITION SHAPE**|**CORRESPONDING CONDITION IN SHAREPOINT DESIGNER**|**CONDITION DESCRIPTION**|
|:-----|:-----|:-----|
|![File size is in a specific range](../../images/spd15-FileSzInSpecRange-visio.JPG)|This Visio condition is the same as the **The file size in a specific range kilobytes** condition in SharePoint Designer 2013 and appears as: <br/> ![File size is in a specific range](../../images/spd15-FileSzInSpecRange-txt.JPG)|**File size is in a specific range** <br/> This condition checks if the file size of a document is between the specified sizes, in kilobytes. The condition does not include the specified sizes in the evaluation. You can enter a number or use a lookup for the first or the second size in the condition.  <br/> |
|![File is a specific type](../../images/spd15-FileIsSpecType-visio.JPG)|This Visio condition is the same as the **The file type is a specific type** condition in SharePoint Designer 2013 and appears as: <br/> ![File is a specific type](../../images/spd15-FileIsSpecType-txt.JPG)|**File is a specific type** <br/> This condition checks if the file type of the current item is of the specified type, such as docx. You can enter the file type as a string or use a lookup.  <br/> |
   

### List conditions


  
    
    

****


|**VISIO CONDITION SHAPE**|**CORRESPONDING CONDITION IN SHAREPOINT DESIGNER**|**CONDITION DESCRIPTION**|
|:-----|:-----|:-----|
|![Check exact user permissions](../../images/spd15-ChkExactUserPerms-visio.JPG)|This Visio condition is the same as the **Check list item permission levels** condition in SharePoint Designer 2013 and appears as: <br/> ![Check list item permission levels](../../images/spd15-ChkExactUserPerms-txt.JPG)|**Check exact user permissions** <br/> This condition checks that the specified user has the minimum necessary permission level.  <br/> |
|![Check user permissions](../../images/spd15-ChkUserPerms-visio.JPG)|This Visio condition is the same as the **Check list item permissions** condition in SharePoint Designer 2013 and appears as: <br/> ![Check list item permissions](../../images/spd15-ChkUserPerms-txt.JPG)|**Check user permission** <br/> This condition checks if the specified user has the minimum necessary permissions.  <br/> |
   

## Workflow terminators
<a name="section3"> </a>

In Visio, each workflow must begin with a Start terminator (
  
    
    
![Start](../../images/spd15-WFStart-icon.JPG)
  
    
    
) and end with a Stop terminator (
  
    
    
![Stop](../../images/spd15-WFStop-icon.JPG)
  
    
    
). Only one of each type of terminator can be used in a given workflow. Terminators are necessary when you create a SharePoint workflow in Visio so that the workflow can pass validation and can be exported. Workflow terminators are not used in SharePoint Designer.
  
    
    

## Additional resources
<a name="bk_addresources"> </a>


-  [What's new in workflows for SharePoint 2013](what-s-new-in-workflows-for-sharepoint.md)
    
  
-  [Get started with workflows in SharePoint 2013](get-started-with-workflows-in-sharepoint.md)
    
  
-  [Workflow development in SharePoint Designer and Visio](workflow-development-in-sharepoint-designer-and-visio.md)
    
  

  
    
    
