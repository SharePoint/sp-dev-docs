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

![Collapse
section]![Expand
section] "Expand section")![]()![])![]![]()![Copy
code] "Copy code")![Copy code
hover]
<table>
<tbody>
<tr class="odd">
<td align="left"></td>
</tr>
</tbody>
</table>

Visual Basic  
C\#  
C++  
JavaScript  

<table>
<tbody>
<tr class="odd">
<td align="left"><span id="runningHeaderText"></span></td>
</tr>
<tr class="even">
<td align="left"># Default Workflow Conditions (WorkflowInfo)</td>
</tr>
<tr class="odd">
<td align="left"><a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"></td>
</tr>
</tbody>
</table>

**Last modified:** March 09, 2015

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013

Conditions are rules that you configure to direct the flow of your
workflow. They are used to compare values and perform logic checks. If a
condition is satisfied with the parameters provided, Microsoft
SharePoint Foundation 2010 executes a specified workflow activity.

SharePoint Foundation 2010 provides a number of default, or predefined,
workflow conditions that you can use by themselves or combine to create
complex business logic for your workflows.


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Default workflow conditions are contained in the WSS.ACTIONS file, which
is an XML file that lists all default conditions and actions that are
available to the workflow editor. (For information about the default
workflow actions that are included in the WSS.ACTIONS file, see [Default
Workflow Actions](default-workflow-actions-workflowinfo.md).) By
default, the WSS.ACTIONS file is installed in the following location in
SharePoint Foundation 2010:

<span class="code">%WSSRoot%\\Program Files\\Common Files\\Microsoft
Shared\\web server extensions\\12\\TEMPLATE\\1033\\Workflow</span>

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="" title="Note" alt="Note" /><strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Direct modification of the WSS.ACTIONS file is not recommended or supported. However, you can expand the conditions that are available to your code-free workflow editor by creating and adding additional custom .ACTIONS files to the same directory. SharePoint Foundation 2010 parses all files that have the .ACTIONS file name extension and creates a combined list that it then presents to the declarative, code-free workflow editor.</p></td>
</tr>
</tbody>
</table>

### Default Conditions

The following table lists the default workflow conditions that are
included with SharePoint Foundation 2010. It also includes an example
rule sentence for each condition, and the fields and values that apply.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Condition</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Compare</span><span class="placeholder">DOCS-LESSTHANlist or document library name</span>DOCS-GREATERTHAN **field**</p></td>
<td align="left"><p>Instructs the workflow designer to compare a field in the current list or document library to a specified value.</p>
<p>**Rule Sentence**:</p>
<p>If fieldequalsvalue</p>
<p>**Fields**:</p>
<ul>
<li><p><span class="ui">field</span> - Displays a list of all fields in the current list.</p></li>
<li><p><span class="ui">equals</span> - Shows a list of operators that can be used to compare the field and value specified in the rule sentence.</p></li>
<li><p><span class="ui">value</span> - Presents a lookup dialog box that allows data binding to a SharePoint list item or directly to a text entry.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**Compare any data source**</p></td>
<td align="left"><p>Instructs the workflow designer to compare a field in any SharePoint list or document library in the current website to a specified value.</p>
<p>**Rule Sentence**:</p>
<p>If valueequalsvalue</p>
<p>**Fields**:</p>
<ul>
<li><p><span class="ui">value</span> - Displays a lookup control that allows data binding to any SharePoint list or document library item.</p></li>
<li><p><span class="ui">equals</span> - Shows a list of operators that can be used to compare the field and value that are specified in the rule sentence.</p></li>
<li><p><span class="ui">value</span> - Presents a lookup control that allows data binding to a SharePoint list item or directly to a text entry.</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**Title field contains keywords**</p></td>
<td align="left"><p>Used to test whether specific keywords exist in the title field of the current list or document library item that the workflow is running on.</p>
<p>**Rule Sentence**:</p>
<p>If title field contains keywords</p>
<p>**Fields**:</p>
<ul>
<li><p><span class="ui">keywords</span> - Displays both a text editor dialog box where a text string can be entered for comparison, and a lookup dialog box for gathering information from another SharePoint Foundation 2010 list or document library item.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**Modified in a specific date span**</p></td>
<td align="left"><p>Checks the modified date of the item. If the modified date of a list item falls within a specified date range, this condition returns **true**.</p>
<p>**Rule Sentence**:</p>
<p>If modified between date and date</p>
<p>**Fields:**</p>
<ul>
<li><p><span class="ui">date</span> - Displays a date selector control and a lookup control. The date selector lets the workflow designer choose a specified date, and the lookup control enables the comparison of the current list item to another list or document library item.</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**Modified by a specific person**</p></td>
<td align="left"><p>When a workflow is started that contains this condition, the list item is examined for last modified date. If the item was modified by the person who is specified in the workflow, this condition is satisfied and returns **true**.</p>
<p>**Rule Sentence**:</p>
<p>If modified by specific person</p>
<p>**Fields**:</p>
<ul>
<li><p><span class="ui">specific person</span> - This field opens a user selection dialog box. The workflow creator can use this condition to select a single person or group from the built-in server groups or from Active Directory directory service.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**Created in a specific date span**</p></td>
<td align="left"><p>Checks the date that the item was created. If the creation date falls within a specified date range, this condition returns **true**.</p>
<p>**Rule Sentence**:</p>
<p>If modified between date and date</p>
<p>**Fields**:</p>
<ul>
<li><p><span class="ui">date</span> - Displays a date selector control and a lookup control. The date selector lets the workflow designer choose a specified date, and the lookup control enables the comparison of the current list item to another list or document library item.</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**Created by a specific person**</p></td>
<td align="left"><p>When a workflow is started that contains this condition, the list item is examined for its creator. If the item was modified by the person who is specified in the workflow, the condition is satisfied and returns **true**.</p>
<p>**Rule Sentence**:</p>
<p>If modified by specific person</p>
<p>**Fields**:</p>
<ul>
<li><p><span class="ui">specific person</span> - This field opens a user selection dialog box. The workflow creator can use this to select a single person or group from the built-in server groups or from Active Directory.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**The file type is a specific type**</p></td>
<td align="left"><p>Used to evaluate whether a file is of a certain type (for example, a Microsoft Word document, a Microsoft Excel worksheet, and so on.)</p>
<p>**Rule Sentence**:</p>
<p>If the file type is specific type</p>
<p>**Fields**:</p>
<ul>
<li><p><span class="ui">specific type</span> - Displays the field text editor. Enter a string value for the file type.</p></li>
</ul></td>
</tr>
<tr class="odd">
<td align="left"><p>**The file size in a specific range kilobytes**</p></td>
<td align="left"><p>Used to evaluate whether a file is a specific size. This condition can be used to ensure that Word documents in a document library do not exceed a specific size.</p>
<p>**Rule Sentence**:</p>
<p>If the file size is between size and size kilobytes</p>
<p>**Fields**:</p>
<ul>
<li><p><span class="ui">size</span> - Displays a text box. Enter a number in kilobytes.</p></li>
</ul></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

[Default Workflow Actions](default-workflow-actions-workflowinfo.md)

#### Other resources

[Creating Declarative, No-Code Workflow
Editors](http://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx)

[Workflow Actions Schema
Overview](http://msdn.microsoft.com/library/25da07cb-b228-43f2-9cdf-c8c71c3eabbb(Office.15).aspx)








