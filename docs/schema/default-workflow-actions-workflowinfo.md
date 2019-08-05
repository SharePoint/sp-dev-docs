---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 2c77a8ea-5cbf-4539-a9e3-b7f41f13e496
---

# Default Workflow Actions (WorkflowInfo)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Actions represent the Microsoft SharePoint Foundation 2010 implementation of Windows Workflow Foundation activities. Actions are the most basic unit of work in a workflow. They define workflow activities, such as sending an email notification when an item has been added to a document library, or updating a status on a list item when a task that is associated with the item has been completed. SharePoint Foundation 2010 includes default, or predefined, workflow actions that you can use to create workflows that address common business scenarios.

## Location of default workflow actions

Default workflow actions are contained in the WSS.ACTIONS file, which is an XML file that lists all default conditions and actions that are available to the workflow editor. (For information about the default workflow conditions that are included in the WSS.ACTIONS file, see
[Default Workflow Conditions](default-workflow-conditions-workflowinfo.md).) 

By default, the
WSS.ACTIONS file is installed in the following location in SharePoint Foundation 2010:

```%WSSRoot%\\Program Files\\Common Files\\Microsoft Shared\\web server extensions\\14\\TEMPLATE\\1033\\Workflow```

> [!NOTE] 
> Direct modification of the WSS.ACTIONS file is not recommended or supported. However, you can expand the actions that are available to your code-free workflow editor by creating and adding additional custom .ACTIONS files to the same directory. SharePoint Foundation parses all files that have the .ACTIONS file name extension and creates a combined list that it then presents to the declarative, code-free workflow editor.

### Default workflow actions

The following table lists the default workflow actions that are included with SharePoint Foundation. It also includes an example of how a rule sentence might be displayed in a code-free workflow editor. Each default action in the table also shows how to write XML to display the rule sentence.

<table>
<colgroup>
<col width="30%" />
<col width="70%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Action</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Add Time To Date**</p></td>
<td align="left"><p>Adds a time interval to a date field. Can be specified in minutes, hours, days, months, and years.</p>
<p>**Rule sentence**:</p>
<p>Add this manyunits to date (Output to [Variable: date])</p>
<p>**XML:**</p>
<p>Add %1 %2 to %3 (Output to %4)</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Assign a Form to a Group**</p></td>
<td align="left"><p>Assigns a survey form to a group of people. Values submitted by the individuals in the group are stored in the Tasks list. The workflow process remains paused until all survey forms are completed.</p>
<p>**Rule sentence:**</p>
<p>Assign a custom form to these users</p>
<p>**XML**:</p>
<p>Assign %1 to %2</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Assign a To-do Item**</p></td>
<td align="left"><p>Assigns a task in the Tasks list for specified users. The workflow process remains paused until all items are completed.</p>
<p>**Rule sentence:**</p>
<p>Assign a to-do item to these users</p>
<p>**XML:**</p>
<p>Assign %1 to %2</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Build Dynamic String**</p></td>
<td align="left"><p>Allows the creation of a dynamic string that is stored in a specified workflow variable.</p>
<p>**Rule sentence:**</p>
<p>Store dynamic string in Variable: variable</p>
<p>**XML:**</p>
<p>Store %1 in %2</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Check In Item**</p></td>
<td align="left"><p>Performs a check-in for the specified list or document library item and allows comments to be added automatically during the execution of the workflow.</p>
<p>**Rule sentence:**</p>
<p>Check in item in this list with comment: comment</p>
<p>**XML:**</p>
<p>Check in item in %1 with comment: %2</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Check Out Item**</p></td>
<td align="left"><p>Performs a check-out for the specified list or document library item.</p>
<p>**Rule sentence:**</p>
<p>Check out item in this list</p>
<p>**XML:**</p>
<p>Check out item in %1</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Collect Data from a User**</p></td>
<td align="left"><p>Assigns a task to a user that includes custom form fields for data collection.</p>
<p>**Rule sentence:**</p>
<p>Collect data from this user (Output to Variable:collect)</p>
<p>**XML:**</p>
<p>Collect %1 from %2 (Output to %3)</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Copy List Item**</p></td>
<td align="left"><p>Instructs the workflow to copy a specified list item from one list to another.</p>
<p>**Rule sentence:**</p>
<p>Copy item in this list to this list</p>
<p>**XML:**</p>
<p>Copy item in %1 to %</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Create List Item**</p></td>
<td align="left"><p>Instructs the workflow to create a list item in a specified list.</p>
<p>**Rule sentence:**</p>
<p>Create item in this list (Output to Variable: create)</p>
<p>**XML:**</p>
<p>Create item in %1 (Output to %2)</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Delete Item**</p></td>
<td align="left"><p>Deletes a specified list item.</p>
<p>**Rule sentence:**</p>
<p>Delete item in this list</p>
<p>**XML:**</p>
<p>Delete item in %1</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Discard Check Out Item**</p></td>
<td align="left"><p>Instructs the workflow to undo a check-out. If someone has the item checked out when this occurs, all changes are lost.</p>
<p>**Rule sentence:**</p>
<p>Discard check-out of item in this list</p>
<p>**XML:**</p>
<p>Discard check-out of item in %1</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Do Calculation**</p></td>
<td align="left"><p>Performs a calculation of two values and stores the results in a workflow variable.</p>
<p>**Rule sentence:**</p>
<p>Calculate valueplusvalue (Output to Variable: calc)</p>
<p>**XML:**</p>
<p>Calculate %1 %2 %3 (Output to %4)</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Log to History List**</p></td>
<td align="left"><p>Creates an entry in the history list with a message that can be created with static text or text that is dynamically generated from a lookup control.</p>
<p>**Rule sentence**:</p>
<p>Log this message to the workflow history list</p>
<p>**XML:**</p>
<p>Log %1 to the workflow history list</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Pause For Duration**</p></td>
<td align="left"><p>Pauses the workflow for a specified time interval. When the interval has expired, the workflow resumes.</p>
<p>**Rule sentence:**</p>
<p>Pause for this many days, this many hours, this many minutes</p>
<p>**XML:**</p>
<p>Pause for %1 days, %2 hours, %3 minutes</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Pause Until Date**</p></td>
<td align="left"><p>Pauses the workflow until a specified date and time, at which point the workflow resumes.</p>
<p>**Rule sentence:**</p>
<p>Pause until this time</p>
<p>**XML:**</p>
<p>Pause until this time</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Send an Email**</p></td>
<td align="left"><p>Sends an email message to a specified user or group. The email message can contain **To**, **CC**, **Subject**, and **Body** fields. The **Body** field can contain both static text and text that is dynamically generated from a lookup table.</p>
<p>**Rule sentence:**</p>
<p>Email this message</p>
<p>**XML:**</p>
<p>Email %1</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Set Content Approval Status**</p></td>
<td align="left"><p>Sets the content approval status of an item to **Approved**, **Rejected**, or **Pending**. This action also adds comments.</p>
<p>**Rule sentence:**</p>
<p>Set content approval status to this status with Comments: comments</p>
<p>**XML:**</p>
<p>Set content approval status to %1 with %2</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Set Field in Current Item**</p></td>
<td align="left"><p>Sets a field in the current item to a specified value or lookup value.</p>
<p>**Rule sentence**:</p>
<p>Set field to value</p>
<p>**XML:**</p>
<p>Set %1 to %2</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Set Time Portion of Date/Time Field**</p></td>
<td align="left"><p>Instructs the workflow to set the time to a particular value for a specified date. This information is stored in a workflow variable for later use.</p>
<p>**Rule sentence:**</p>
<p>Set time as hours:minutes for date (Output to Variable: date)</p>
<p>**XML:**</p>
<p>Set time as %1:%2 for %3 (Output to %4)</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Set Workflow Variable**</p></td>
<td align="left"><p>Instructs the workflow to set a value for the specified workflow variable.</p>
<p>**Rule sentence:**</p>
<p>Set workflow variable to value</p>
<p>**XML:**</p>
<p>Set %1 to %2</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Stop Workflow**</p></td>
<td align="left"><p>Stops the workflow and creates an entry with a specified message in the workflow history log.</p>
<p>**Rule sentence:**</p>
<p>Stop the workflow and log this message</p>
<p>**XML:**</p>
<p>Stop the workflow and log %1</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Update List Item**</p></td>
<td align="left"><p>Instructs the workflow to update a field in a list item with a specified value.</p>
<p>**Rule sentence:**</p>
<p>Update item in this list</p>
<p>**XML:**</p>
<p>Update item in %1</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Wait For Field Change in Current Item**</p></td>
<td align="left"><p>Pauses the workflow until a field is updated with a specific value.</p>
<p>**Rule sentence:**</p>
<p>Wait for fieldto equalthis value</p>
<p>**XML:**</p>
<p>Wait for %1 %2 %3</p></td>
</tr>
</tbody>
</table>

## See also

- [.ACTIONS File Example](actions-file-example-workflowinfo.md)
- [Default Workflow Conditions](default-workflow-conditions-workflowinfo.md)
- [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/en-us/library/office/bb417436.aspx)
- [Workflow Actions Schema Overview](https://msdn.microsoft.com/en-us/library/office/bb897626.aspx)








