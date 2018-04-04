---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: b6d52c67-103f-487f-bb94-58e338e7d03f
---

# Default Workflow Conditions (WorkflowInfo)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Conditions are rules that you configure to direct the flow of your workflow. They are used to compare values and perform logic checks. If a condition is satisfied with the parameters provided, Microsoft SharePoint Foundation 2010 executes a specified workflow activity.

SharePoint Foundation 2010 provides a number of default, or predefined, workflow conditions that you can use by themselves or combine to create complex business logic for your workflows.

## Location of default workflow conditions

Default workflow conditions are contained in the WSS.ACTIONS file, which is an XML file that lists all default conditions and actions that are available to the workflow editor. (For information about the default workflow actions that are included in the WSS.ACTIONS file, see [Default Workflow Actions](default-workflow-actions-workflowinfo.md).) 

By default, the WSS.ACTIONS file is installed in the following location in SharePoint Foundation 2010:

```%WSSRoot%\\Program Files\\Common Files\\Microsoft Shared\\web server extensions\\12\\TEMPLATE\\1033\\Workflow```

> [!NOTE] 
> Direct modification of the WSS.ACTIONS file is not recommended or supported. However, you can expand the conditions that are available to your code-free workflow editor by creating and adding additional custom .ACTIONS files to the same directory. SharePoint Foundation 2010 parses all files that have the .ACTIONS file name extension and creates a combined list that it then presents to the declarative, code-free workflow editor.

### Default workflow conditions

The following table lists the default workflow conditions that are included with SharePoint Foundation 2010. It also includes an example rule sentence for each condition, and the fields and values that apply.

<table>
<colgroup>
<col width="30%" />
<col width="70%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Condition</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Compare** *<list or document library name>* **field**</p></td>
<td align="left"><p>Instructs the workflow designer to compare a field in the current list or document library to a specified value.</p>
<p>**Rule Sentence**:</p>
<p>If fieldequalsvalue</p>
<p>**Fields**:</p>
<ul>
<li><p>**field** - Displays a list of all fields in the current list.</p></li>
<li><p>**equals** - Shows a list of operators that can be used to compare the field and value specified in the rule sentence.</p></li>
<li><p>**value** - Presents a lookup dialog box that allows data binding to a SharePoint list item or directly to a text entry.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**Compare any data source**</p></td>
<td align="left"><p>Instructs the workflow designer to compare a field in any SharePoint list or document library in the current website to a specified value.</p>
<p>**Rule Sentence**:</p>
<p>If valueequalsvalue</p>
<p>**Fields**:</p>
<ul>
<li><p>**value** - Displays a lookup control that allows data binding to any SharePoint list or document library item.</p></li>
<li><p>**equals** - Shows a list of operators that can be used to compare the field and value that are specified in the rule sentence.</p></li>
<li><p>**value** - Presents a lookup control that allows data binding to a SharePoint list item or directly to a text entry.</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**Title field contains keywords**</p></td>
<td align="left"><p>Used to test whether specific keywords exist in the title field of the current list or document library item that the workflow is running on.</p>
<p>**Rule Sentence**:</p>
<p>If title field contains keywords</p>
<p>**Fields**:</p>
<ul>
<li><p>**keywords** - Displays both a text editor dialog box where a text string can be entered for comparison, and a lookup dialog box for gathering information from another SharePoint Foundation 2010 list or document library item.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**Modified in a specific date span**</p></td>
<td align="left"><p>Checks the modified date of the item. If the modified date of a list item falls within a specified date range, this condition returns **true**.</p>
<p>**Rule Sentence**:</p>
<p>If modified between date and date</p>
<p>**Fields:**</p>
<ul>
<li><p>**date** - Displays a date selector control and a lookup control. The date selector lets the workflow designer choose a specified date, and the lookup control enables the comparison of the current list item to another list or document library item.</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**Modified by a specific person**</p></td>
<td align="left"><p>When a workflow is started that contains this condition, the list item is examined for last modified date. If the item was modified by the person who is specified in the workflow, this condition is satisfied and returns **true**.</p>
<p>**Rule Sentence**:</p>
<p>If modified by specific person</p>
<p>**Fields**:</p>
<ul>
<li><p>**specific person** - This field opens a user selection dialog box. The workflow creator can use this condition to select a single person or group from the built-in server groups or from Active Directory directory service.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**Created in a specific date span**</p></td>
<td align="left"><p>Checks the date that the item was created. If the creation date falls within a specified date range, this condition returns **true**.</p>
<p>**Rule Sentence**:</p>
<p>If modified between date and date</p>
<p>**Fields**:</p>
<ul>
<li><p>**date** - Displays a date selector control and a lookup control. The date selector lets the workflow designer choose a specified date, and the lookup control enables the comparison of the current list item to another list or document library item.</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**Created by a specific person**</p></td>
<td align="left"><p>When a workflow is started that contains this condition, the list item is examined for its creator. If the item was modified by the person who is specified in the workflow, the condition is satisfied and returns **true**.</p>
<p>**Rule Sentence**:</p>
<p>If modified by specific person</p>
<p>**Fields**:</p>
<ul>
<li><p>**specific person** - This field opens a user selection dialog box. The workflow creator can use this to select a single person or group from the built-in server groups or from Active Directory.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**The file type is a specific type**</p></td>
<td align="left"><p>Used to evaluate whether a file is of a certain type (for example, a Microsoft Word document, a Microsoft Excel worksheet, and so on.)</p>
<p>**Rule Sentence**:</p>
<p>If the file type is specific type</p>
<p>**Fields**:</p>
<ul>
<li><p>**specific type** - Displays the field text editor. Enter a string value for the file type.</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**The file size in a specific range kilobytes**</p></td>
<td align="left"><p>Used to evaluate whether a file is a specific size. This condition can be used to ensure that Word documents in a document library do not exceed a specific size.</p>
<p>**Rule Sentence**:</p>
<p>If the file size is between size and size kilobytes</p>
<p>**Fields**:</p>
<ul>
<li><p>**size** - Displays a text box. Enter a number in kilobytes.</p></li>
</ul></td>
</tr>
</tbody>
</table>

## See also

- [Default Workflow Conditions](default-workflow-conditions-workflowinfo.md)
- [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/en-us/library/office/bb417436.aspx)
- [Workflow Actions Schema Overview](https://msdn.microsoft.com/en-us/library/office/bb897626.aspx)








