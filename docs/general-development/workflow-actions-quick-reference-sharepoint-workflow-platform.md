---
title: Workflow actions quick reference (SharePoint 2013 Workflow platform)
ms.prod: SHAREPOINTDESIGNER
ms.assetid: eb3434e5-bc75-4474-8873-4980062fd29c
---



# Workflow actions quick reference (SharePoint 2013 Workflow platform)
This reference lists the workflow actions that are supported in the current build of SharePoint Designer 2013, in addition to those that are not available.
## Workflow actions in SharePoint Designer 2013
<a name="bkm_WorkflowActions"> </a>

The following is a reference for workflow actions available for the SharePoint 2013 Workflow platform. In addition to the SharePoint 2013 Workflow platform, SharePoint Designer 2013 also supports the SharePoint 2010 Workflow platform. To view workflow actions for the 2010 platform, see  [Workflow actions quick reference (SharePoint 2010 Workflow platform)](workflow-actions-quick-reference-sharepoint-2010-workflow-platform.md)
  
    
    

### Core actions
<a name="bkm_CoreActions"> </a>

Core actions are those that are most commonly performed, and they are grouped together for easy access. 
  
    
    

**Table 1. Core actions reference**


|**Action**|**Description**|
|:-----|:-----|
|Add a Comment  <br/> |Enables you to leave informative comments in the workflow designer for reference purposes. This is especially helpful when there are other users collaborating on the workflow.  <br/> |
|Add Time to Date  <br/> |Adds a specific time in minutes, hours, days, or months to a date (Year is not supported), and stores the output value as a variable. The date can be a current data, specific date, or a lookup. The 'Current Date' value returns UTC midnight.  <br/> |
|Build Dictionary  <br/> |Builds a Dictionary variable of key/value pairs.  <br/> **Note:** The Dictionary uses JSON notation to store data.           For more information on the Dictionary variable, see  [Understanding Dictionary actions in SharePoint Designer 2013](understanding-dictionary-actions-in-sharepoint-designer.md) <br/> |
|Call HTTP Web Service  <br/> |Functions as a method call to an HTTP web service and returns data using the JSON format. Basic authentication is supported through the RequestHeader.  <br/> For more information on the Dictionary variable, see  [Understanding Dictionary actions in SharePoint Designer 2013](understanding-dictionary-actions-in-sharepoint-designer.md) <br/> |
|Count Items in a Dictionary  <br/> |Returns a count of the number of items in a specified dictionary.  <br/> |
|Do Calculation  <br/> |Performs an arithmetic calculation and stores the output value in a variable.  <br/> **Note:** For SharePoint 2013, this action supports only the **Double** numeric type. Integers are not supported. Use of the "+" operator (concatenation) for strings is not supported.          |
|Get an Item from a Dictionary  <br/> |Returns a particular item from a dictionary variable.  <br/> |
|Log to History List  <br/> |Writes a message from a list of predefined message items to the workflow history list.  <br/> |
|Pause for Duration  <br/> |Causes a workflow to pause executing for a specified time interval, in days, hours, and minutes.  <br/> |
|Pause Until Date  <br/> |Causes a workflow to pause executing until a specified date and time.  <br/> |
|Send an Email  <br/> |Automatically sends an email message that contains a predetermined message to a user or group when a specified workflow event occurs.  <br/> **Important:** If the site is not added to the Trusted Sites list then emails are routed to the Outlook Junk folder.           |
|Set Time Portion of Date/Time Field  <br/> |Creates a timestamp, and stores the output value in a variable. You can set the time in hours and minutes and add a current date, specific date, or lookup.  <br/> |
|Set Workflow Status  <br/> |Sets the status of the workflow.  <br/> |
|Set Workflow Variable  <br/> |Sets a workflow variable to a value. You can also use this action when you want the workflow to assign data to a variable.  <br/> |
|Go to Stage  <br/> |Specifies the next stage to which flow control should be handed.  <br/> |
   

### Coordination actions
<a name="bkm_CoreActions"> </a>

Coordination actions are used to invoke a workflow based on the SharePoint 2010 Workflow platform. For more information on Coordination actions, see  [Understanding Coordination actions in SharePoint Designer 2013](understanding-coordination-actions-in-sharepoint-designer.md)
  
    
    

**Table2. Coordination actions reference**


|**Action**|**Description**|
|:-----|:-----|
|Start a List Workflow  <br/> |Starts a List workflow based on the SharePoint 2010 Workflow platform.  <br/> **Note:**  The Start a list workflow has the following issues:>  The 'Assignments' type field cannot be used as a parameter when the 2010 workflow has a TaskProcess action in it.>  When multiple calls are made to the same 2010 workflow the result will be multiple data sources in the 2013 workflow lookup functionality. These data sources are all the same.>  Variable names in 2013 cannot contain special characters such as '?' and '#'. If a 2010 workflow contains special characters then they will be converted to hexadecimal code in the 2013 workflow.          |
|Start a Site Workflow  <br/> |Starts a Site workflow based on the SharePoint 2010 Workflow platform..  <br/> **Note:**  The Start a list workflow has the following issues:>  The 'Assignments' type field cannot be used as a parameter when the 2010 workflow has a TaskProcess action in it.>  When multiple calls are made to the same 2010 workflow the result will be multiple data sources in the 2013 workflow lookup functionality. These data sources are all the same.>  Variable names in 2013 cannot contain special characters such as '?' and '#'. If a 2010 workflow contains special characters then they will be converted to hexadecimal code in the 2013 workflow.          |
   

### List actions
<a name="bkm_ListActions"> </a>

List actions group together actions that are used to manipulate lists and list items.
  
    
    

**Table3. List actions reference**


|**Action**|**Description**|
|:-----|:-----|
|Check In Item  <br/> |Checks in an item that is checked out. You can check in items only from a document library.  <br/> **Caution:** The workflow crashes if you try to check in an item that is not checked out.           |
|Check Out Item  <br/> |Checks out an item. The workflow verifies whether the item is checked in before it checks out a document. You can check out items only from a library in your site.  <br/> **Caution:** The workflow crashes if you try to check out an item that is not checked in.           |
|Copy Document  <br/> |Copies a document from the current list to a different Document Library list.  <br/> |
|Create List Item  <br/> |Creates a new list item in the list that you specify. You can supply the fields and values in the new item. You can use this action whenever you want a new item to be created with specific information.  <br/> |
|Delete Item  <br/> |Deletes an item.  <br/> **Note:** This action is terminated on the computer running the Workflow Manager workflow engine and throws a **System.InvalidOperationException** exception. There is no workaround.          |
|Discard Check Out Item  <br/> |Discards the changes and checks the item back in if an item is checked out and changes have been made to it.  <br/> **Caution:** The workflow crashes if you try to check in an item that is not checked out.           |
|Set Field in Current Item  <br/> |Sets a specified field in the current item to a specified value.  <br/> **Note:** If you need the workflow to pause until the value of the field has changed, use the **Wait for Event in List Item** action instead of this action.          |
|Translate Document  <br/> |Translates a document into a particular language  <br/> **Note:** Requires a preconfigured Machine Translation Service Application.           |
|Update List Item  <br/> |Updates a list item. You can specify the fields and the new values in those fields.  <br/> |
|Wait for Event in List Item  <br/> |[Enhanced version of Office 2010 action.] Pauses the current instance of the workflow to await a specified list item event. This action listens for two events: **ItemUpdated** and **ItemAdded**.  <br/> |
|Wait for Field Change in Current Item  <br/> |Waits for a field on the current item to equal a particular value.  <br/> |
   

### Project actions
<a name="bkm_ProjectActions"> </a>

Project actions support the integration of Microsoft Project. They are used to build Project-based workflows. All of the Project actions are new in SharePoint Designer 2013.
  
    
    

**Table4. Project actions reference**


|**Action**|**Description**|
|:-----|:-----|
|Create Project from Current Item  <br/> |Takes the current item and creates a new project in the SharePoint farm PWA site. Using App Steps with this action is not supported in Project Online.  <br/> |
|Set Project Field  <br/> |Sets a value for a particular field on Project Server.  <br/> **Note:** This action requires the project to be checked in first. If the project is not checked in, the workflow will be terminated and users cannot open that project in Project Web App.           |
|Set Project Stage Status  <br/> |Sets the status of the Project Stage.  <br/> **Note:** An exception occurs when a current project is checked out.           |
|Set status field in idea list  <br/> |Updates the status on the original list item that is associated to the current project.  <br/> |
|Wait for Project Event  <br/> |Waits for a particular Project Event.  <br/> |
   

### Task actions
<a name="bkm_TaskActions"> </a>

Task actions provide the ability to invoke a workflow based on the SharePoint 2010 Workflow platform from within a workflow based on the SharePoint 2013 Workflow platform.
  
    
    

**Table 5. Task actions reference**


|**Action**|**Description**|
|:-----|:-----|
|Assign a Task  <br/> |Assigns a workflow task to a user and establishes a due date for completion of the task.  <br/> |
|Start a Task Process  <br/> |Creates tasks on multiple users and enables the tasks to be taken through a customized process.  <br/> |
   

### Utility actions
<a name="bkm_UtilityActions"> </a>

Utility actions are actions that manipulate strings or find the interval between dates. 
  
    
    

**Table 6. Utility actions reference**


|**Action**|**Description**|
|:-----|:-----|
|Extract Substring from End of String  <br/> |Copies a specified number of characters starting from the end of a string and stores the output in a variable.  <br/> |
|Extract Substring from Index of String  <br/> |Copies a substring starting at a specified index in the string and places the value in a variable.  <br/> **Note:** Be aware that although the index value in Microsoft SharePoint Designer 2013 is zero-based, values in SharePoint Designer 2010 were indexed starting at 1.           |
|Extract Substring from Start of String  <br/> |Copies a specified number of characters beginning at the start of a string and stores the output in a variable.  <br/> |
|Extract Substring of String from Index with Length  <br/> |Copies out a substring comprising a specified number of characters, starting at a specified index in the string, and places the value in a variable.  <br/> **Note:** Be aware that although the index value in Microsoft SharePoint Designer 2013 is zero-based, values in SharePoint Designer 2010 were indexed starting at 1.           |
|Find Interval Between Dates  <br/> |Calculates the time interval in minutes, hours, or days between two dates and stores the output in a variable.  <br/> |
|Trim String  <br/> |Removes white spaces from the beginning and end of a string.  <br/> |
|Find Substring in String  <br/> |Finds a particular substring inside of a string and returns the index of the substrings's starting position.  <br/> |
|Replace Substring in String  <br/> |Replaces a particular substring with another substring.  <br/> |
|Trim String  <br/> |Removes white spaces from the beginning and end of a string.  <br/> |
   

## Workflow actions that are deprecated in SharePoint 2013
<a name="bkm_NotAvailable"> </a>

For a list of actions from SharePoint 2010 that are deprecated and will not appear in SharePoint 2013, see  [Workflow actions available using the workflow interop bridge](workflow-actions-available-using-the-workflow-interop-bridge.md).
  
    
    

## Additional resources
<a name="bkm_addlresource"> </a>


-  [Workflow actions and activities reference for SharePoint 2013](workflow-actions-and-activities-reference-for-sharepoint.md)
    
  
-  [SharePoint 2013 workflow fundamentals](sharepoint-workflow-fundamentals.md)
    
  
-  [Get started with workflows in SharePoint 2013](get-started-with-workflows-in-sharepoint.md)
    
  
-  [Workflow development in SharePoint Designer and Visio](workflow-development-in-sharepoint-designer-and-visio.md)
    
  
