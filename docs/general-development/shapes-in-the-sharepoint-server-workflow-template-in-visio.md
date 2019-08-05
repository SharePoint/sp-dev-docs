---
title: Shapes in the SharePoint Server workflow template in Visio
ms.date: 09/25/2017
ms.prod: sharepoint
ms.assetid: f35bdf5d-c102-4e2d-8a23-1d2df17155b9
localization_priority: Priority
---



# Shapes in the SharePoint Server workflow template in Visio
Learn about the shapes in the SharePoint Workflow template in Visio 2013.
## Introduction
<a name="VSSPD_Shapes_Intro"> </a>

This article lists the shapes contained in the SharePoint Workflow template in Visio 2013 and in the Visual Designer in SharePoint Designer 2013. When the template is opened, also opens the SharePoint Workflow Actions, SharePoint Workflow Conditions, and SharePoint Workflow Terminators stencils. Many of the shapes listed in the stencils correspond to specific actions, conditions, or other logical constructs in the Declarative Designer for building workflows in SharePoint Designer 2013.
  
    
    

> **Important:**
> The following is a reference for workflow actions that are supported in SharePoint Designer 2013. Most of these actions are available in SharePoint Designer 2010, although one of those (Wait for List Item Event) has been revised and enhanced in the present version. Twelve new actions are introduced in the present version, and 25 actions have been removed. (To see a list of actions, conditions, and blocks that have been removed, see  [Workflow actions available using the workflow interop bridge](workflow-actions-available-using-the-workflow-interop-bridge.md)..md) 
  
    
    


## Action shapes
<a name="VSSDP_Actions"> </a>

The following table shows a list of all the shapes that are contained in the SharePoint Actions stencil in the SharePoint Workflow template in Visio 2013.
  
    
    

> **Note:**
> Each shape listed in the following table will have the properties listed and a **Properties** property.
  
    
    



|**Shape in Visio 2013 and SharePoint Designer 2013 Visual Designer**|**Action in the SharePoint Designer 2013 Declarative Designer**|**Properties in SharePoint Designer 2013 Visual Designer**|**Description**|
|:-----|:-----|:-----|:-----|
|Add a Comment  <br/> |**Add a Comment** <br/> |**Comment** <br/> |Enables you to leave informative comments in the workflow designer for reference purposes. This is especially helpful when there are other users collaborating on the workflow.  <br/> |
|Add Time to Date  <br/> |**Add Time to Date** <br/> |**Months** <br/> **Days** <br/> **Hours** <br/> **Minutes** <br/> **Date** <br/> **Output** <br/> |Adds a specific time in minutes, hours, days, or months to a date, and stores the output value as a variable. The date can be a current data, specific date, or a lookup. The 'Current Date' value returns UTC midnight.  <br/> |
|Assign a Task  <br/> |**Assign a Task** <br/> |**Task Settings** <br/> **Task Outcome** <br/> **Task Item ID** <br/> |Assigns a workflow task to a user and establishes a due date for completion of the task.  <br/> |
|Call HTTP web service  <br/> |**Call HTTP Web Service** <br/> |**HTTP Request** <br/> **Parameters** <br/> **Response Content Variable** <br/> **Response Header Variable** <br/> **Response Code Variable** <br/> |Functions as a method call to a HTTP web service.  <br/> **Note:** The current build supports SharePoint calls only to **anonymous** HTTP services and only using **string** parameters and return types. Also, we do not support composite XML elements. Note, too, that we currently support classic ASMX only and do not provide support for the WCG service.          |
|Check In Item  <br/> |**Check In Item** <br/> |**Item** <br/> **Comment** <br/> |Checks in an item that is checked out. You can check in items only from a document library.  <br/> **Caution:** The workflow crashes if you try to check in an item that is not checked out.           |
|Check Out Item  <br/> |**Check Out Item** <br/> |**Item** <br/> |Checks out an item. The workflow verifies whether the item is checked in before it checks out a document. You can check out items only from a library in your site.  <br/> **Caution:** The workflow crashes if you try to check out an item that is not checked in.           |
|Copy document  <br/> |**Copy Document** <br/> |**Document** <br/> **Library** <br/> |Copies a document from the current list to a different Document Library list.  <br/> |
|Count items in dictionary  <br/> |**Count Items in a Dictionary** <br/> |**Dictionary** <br/> **Output Variable** <br/> |Counts the number of items in a dictionary variable.  <br/> |
|Create a project from current item  <br/> |**Create Project From Current Item** <br/> |**Enterprise Project Type** <br/> |Takes the current item and creates a new project in the SharePoint farm PWA site.  <br/> |
|Create List Item  <br/> |**Create List Item** <br/> |**Item** <br/> **Output Variable** <br/> |Creates a new list item in the list that you specify. You can supply the fields and values in the new item. You can use this action whenever you want a new item to be created with specific information.  <br/> |
|Delete Item  <br/> |**Delete Item** <br/> |**Item** <br/> |Deletes an item.  <br/> **Note:** This action is terminated on the computer running the Workflow Manager workflow engine and throws a **System.InvalidOperationException** exception. There is no workaround.          |
|Discard Check Out  <br/> |**Discard Check Out Item** <br/> |**Item** <br/> |Discards the changes and checks the item back in if an item is checked out and changes have been made to it.  <br/> **Caution:** The workflow crashes if you try to check in an item that is not checked out.           |
|Do Calculation  <br/> |**Do Calculation** <br/> |**LeftOperand** <br/> **Operator** <br/> **RightOperand** <br/> **To** <br/> |Performs an arithmetic calculation and stores the output value in a variable.  <br/> **Note:** For SharePoint, this action supports only the **Double** numeric type. Integers are not supported. Use of the "+" operator (concatenation) for strings is not supported.          |
|Extract Substring from End of String  <br/> |**Extract Substring from End of String** <br/> |**Number of Characters** <br/> **String** <br/> **Output** <br/> |Copies a specified number of characters starting from the end of a string and stores the output in a variable.  <br/> |
|Extract Substring from Index of String  <br/> |**Extract Substring from Index of String** <br/> |**String** <br/> **Index** <br/> **Output** <br/> |Copies a substring starting at a specified index in the string and places the value in a variable.  <br/> **Note:** Be aware that although the index value in the present Technical Preview build of SharePoint Designer is zero-based, values in SharePoint Designer 2010 were indexed starting at 1.           |
|Extract Substring from Start of String  <br/> |**Extract Substring from Start of String** <br/> |**Number of Characters** <br/> **String** <br/> **Output** <br/> |Copies a specified number of characters beginning at the start of a string and stores the output in a variable.  <br/> |
|Extract Substring of String from Index with Length  <br/> |**Extract Substring of String from Index with Length** <br/> |**String** <br/> **Index** <br/> **Number of Characters** <br/> **Output** <br/> |Copies out a substring comprising a specified number of characters, starting at a specified index in the string, and places the value in a variable.  <br/> **Note:** Be aware that although the index value in the present Technical Preview build of SharePoint Designer is zero-based, values in SharePoint Designer 2010 were indexed starting at 1.           |
|Find Interval Between Dates  <br/> |**Find Interval Between Dates** <br/> |**Units** <br/> **Start Date** <br/> **End Date** <br/> **Output** <br/> |Calculates the time interval in minutes, hours, or days between two dates and stores the output in a variable.  <br/> |
|Find substring in string  <br/> |**Find Substring in String** <br/> |**Substring** <br/> **String** <br/> **Output** <br/> |Finds a particular substring inside of a string and returns the index of the substrings's starting position.  <br/> |
|Get item from dictionary  <br/> |**Get Item From Dictionary** <br/> |**Item Name of Path** <br/> **Dictionary** <br/> **Output Variable** <br/> |Returns a particular item from a dictionary variable.  <br/> |
|Log to History List  <br/> |**Log to History List** <br/> |**Message** <br/> |Writes a message from a list of predefined message items to the workflow history list.  <br/> |
|Pause for Duration  <br/> |**Pause for Duration** <br/> |**Days** <br/> **Hours** <br/> **Minutes** <br/> |Causes a workflow to pause executing for a specified time interval, in days, hours, and minutes.  <br/> |
|Pause until Date  <br/> |**Pause Until Date** <br/> |**Date** <br/> |Causes a workflow to pause executing until a specified date and time.  <br/> |
|Replace substring in String  <br/> |**Replace Substring in String** <br/> |**Search String** <br/> **Replace String** <br/> **String** <br/> **Output** <br/> |Replaces a particular substring with another substring.  <br/> |
|Send an Email  <br/> |**Send an email** <br/> |**Email** <br/> |Automatically sends an email message that contains a predetermined message to a user or group when a specified workflow event occurs.  <br/> **Important:** If the site is not added to the Trusted Sites list then emails are routed to the Outlook Junk folder.           |
|Set field in Current Item  <br/> |**Set Field in Current Item** <br/> |**Field** <br/> **Value** <br/> |Sets a field in the current item to a value.  <br/> |
|Set Time Portion of Date/Time Field  <br/> |**Set Time Portion of Date/Time Field** <br/> |**Hours** <br/> **Minutes** <br/> **Date** <br/> **Output** <br/> |Creates a timestamp, and stores the output value in a variable. You can set the time in hours and minutes and add a current date, specific date, or lookup.  <br/> |
|Set workflow status  <br/> |**Set Workflow Status** <br/> |**Status** <br/> |Sets the status of the workflow.  <br/> |
|Set Workflow Variable  <br/> |**Set Workflow Variable** <br/> |**Variable** <br/> **Value** <br/> |Sets a workflow variable to a value. You can also use this action when you want the workflow to assign data to a variable.  <br/> |
|Start a list workflow  <br/> |**Start a List Workflow** <br/> |**Association Name** <br/> **Inputs** <br/> **Item** <br/> |Starts a SharePoint 2010 List workflow.  <br/> **Note:**  The Start a list workflow has the following issues:<ul><li>The 'Assignments' type field cannot be used as a parameter when the 2010 workflow has a TaskProcess action in it.</li><li>When multiple calls are made to the same 2010 workflow the result will be multiple data sources in the 2013 workflow lookup functionality. These data sources are all the same.</li><li>Variable names in 2013 cannot contain special characters such as '?' and '#'. If a 2010 workflow contains special characters then they will be converted to hexadecimal code in the 2013 workflow.</li></ul>|
|Start a site workflow  <br/> |**Start a Site Workflow** <br/> |**Association name** <br/> **Parameters** <br/> |Starts a SharePoint 2010 Site Workflow.  <br/> **Note:**  The Start a list workflow has the following issues: <ul><li>The 'Assignments' type field cannot be used as a parameter when the 2010 workflow has a TaskProcess action in it.</li><li>When multiple calls are made to the same 2010 workflow the result will be multiple data sources in the 2013 workflow lookup functionality. These data sources are all the same.</li><li>Variable names in 2013 cannot contain special characters such as '?' and '#'. If a 2010 workflow contains special characters then they will be converted to hexadecimal code in the 2013 workflow.</li></ul>       |
|Start a task process  <br/> |**Start a Task Process** <br/> |**Process Settings** <br/>  Process Outcome <br/> |Creates tasks on multiple users and enables the tasks to be taken through a customized process.  <br/> |
|Translate document  <br/> |**Translate Document** <br/> |**Document** <br/> **Language** <br/> **Document Library** <br/> |Translates a document into a particular language  <br/> **Note:** Requires a preconfigured Machine Translation Service Application.           |
|Trim String  <br/> |**Trim String** <br/> |**String** <br/> **Output** <br/> |Removes white spaces from the beginning and end of a string.  <br/> |
|Update List Item  <br/> |**Update List Item** <br/> |**Item** <br/> |Updates a list item. You can specify the fields and the new values in those fields.  <br/> |
|Wait for Event in List Item  <br/> |**Wait for Event in List Item** <br/> |**Event** <br/> **Related Item** <br/> |[Enhanced version of Office 2010 action.] Pauses the current instance of the workflow to await a specified list item event. This action listens for two events: **ItemUpdated** and **ItemAdded**.  <br/> |
|Wait for field change  <br/> |**Wait for Field Change** <br/> |**Field** <br/> **Value** <br/> |Waits for a field on the current item to equal a particular value.  <br/> |
|Set Project Field  <br/> |**Set Project Field** <br/> |**Field** <br/> **Value** <br/> |Sets a value for a particular field on Project Server.  <br/> **Note:** This action requires the project to be checked in first. If the project is not checked in, the workflow will be terminated and users cannot open that project in Project Web App.           |
|Set Project Stage Status  <br/> |**Set Project Stage Status** <br/> |**Stage Status** <br/> **Stage Information** <br/> |Sets the status of the Project Stage.  <br/> **Note:** An exception occurs when a current project is checked out.           |
|Set status field in idea list  <br/> |**Set Status Field in Idea List** <br/> |**Status** <br/> |Updates the status on the original list item that is associated to the current project.  <br/> |
|Wait for Project Event  <br/> |**Wait for Project Event** <br/> |**Event Name** <br/> |Waits for a particular Project Event.  <br/> |
   

## Condition shapes
<a name="VSSPD_Conditions"> </a>

The following table shows a list of all the shapes that are contained in the SharePoint Conditions stencil in the SharePoint Workflow template.
  
    
    


|**Shape in Visio 2013 and SharePoint Designer 2013 Visual Designer**|**Action in the SharePoint Designer 2013 Declarative Designer**|**Properties in SharePoint Designer 2013 Visual Designer**|**Description**|
|:-----|:-----|:-----|:-----|
|If Any Value Equals Value  <br/> |**If any value equals value** <br/> |**Value** <br/> **Operand** <br/> **Value** <br/> |Compares two values. You can specify whether the values should be equal or not equal.  <br/> |
|Person is a Valid SharePoint User  <br/> |**Person is a valid SharePoint user** <br/> |**User** <br/> |Checks to see whether a specific user is a registered user or a member of a group on the SharePoint site.  <br/> |
|Skip Project Stage  <br/> |**Skip Project Stage** <br/> |NA  <br/> |This condition checks to see if the skip to stage feature has been activated on the server for the current workflow instance.  <br/> |
   

## Terminator shapes
<a name="VSSPD_Terminators"> </a>

The following table shows a list of all the shapes that are contained in the SharePoint Terminators stencil in the SharePoint Workflow template.
  
    
    


|**Shape in Visio 2013 and SharePoint Designer 2013 Visual Designer**|**Action in the SharePoint Designer 2013 Declarative Designer**|**Properties in SharePoint Designer 2013 Visual Designer**|**Description**|
|:-----|:-----|:-----|:-----|
|Start  <br/> |NA  <br/> |NA  <br/> |Begins the workflow. Every SharePoint workflow diagram must have only one Start shape.  <br/> |
|Stage  <br/> |**Stage** <br/> |NA  <br/> |Contains any number of shapes and may include branching. All actions in the workflow must be contained by a stage. Stage shapes are visualized by using container shapes. A Stage shape requires that an Enter and an Exit shape be added to the edges of the container to define the paths in and out of the stage.  <br/> For more information, see the section titled "Stages, loops, and steps" in the article  [Workflow development in SharePoint Designer and Visio](workflow-development-in-sharepoint-designer-and-visio.md).  <br/> |
|Step  <br/> |**Step** <br/> |NA  <br/> |Represents a grouped series of sequential actions. Steps must be contained by a stage. A step shape must also have an Enter and Exit shape, which are added when the shape is dropped onto the canvas.  <br/> For more information, see the section titled "Stages, loops, and steps" in the article  [Workflow development in SharePoint Designer and Visio](workflow-development-in-sharepoint-designer-and-visio.md).  <br/> |
|Simple Stage  <br/> |**Stage** <br/> |NA  <br/> |Adds new stages to the top level of the workflow when in Stage View in Visio 2013.  <br/> |
|Loop n Times  <br/> |**Loop n Times** <br/> |**Loop Count** <br/> |Defines a series of connected shapes that will execute as a loop, returning from the last shape in the series to the first, until the loop has executed a specified amount of times. Like stages, loops are represented by a container shape that includes an Enter and Exit shape.  <br/> For more information, see the section titled "Stages, loops, and steps" in the article  [Workflow development in SharePoint Designer and Visio](workflow-development-in-sharepoint-designer-and-visio.md).  <br/> |
|Loop with condition  <br/> |**Loop with Condition** <br/> |**Loop Count** <br/> |Loops until a specific condition is met.  <br/> |
|Start Parallel Action  <br/> |**Parallel Block** <br/> |NA  <br/> ||
|End Parallel Action  <br/> |**Parallel Block** <br/> |NA  <br/> ||
   

## See also
<a name="VSSPD_Additional"> </a>


-  [Workflow development in SharePoint Designer and Visio](workflow-development-in-sharepoint-designer-and-visio.md)
    
  
-  [Workflow actions quick reference (SharePoint Workflow platform)](workflow-actions-quick-reference-sharepoint-workflow-platform.md)
    
  
-  [SharePoint Workflow template shapes guide](http://office.microsoft.com/en-us/visio-help/sharepoint-workflow-template-shapes-guide-HA101903894.aspx)
    
  
-  [SharePoint Developer Center](http://msdn.microsoft.com/en-us/sharepoint/default.aspx)
    
  
-  [Visio Developer Center](http://msdn.microsoft.com/en-us/office/aa905478)
    
  
