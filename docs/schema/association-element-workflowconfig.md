---


manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 7f3e7e9f-256f-4570-ba3f-745bbdfbc5b8
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
<td align="left"># Association Element (WorkflowConfig)</td>
</tr>
<tr class="odd">
<td align="left"><a href="#exampleToggle">Example</a>  <a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

Contains the information necessary for a declarative rules-based,
code-free workflow editor, such as Microsoft SharePoint Designer 2010,
to associate a workflow template with the specified SharePoint list in
SharePoint Foundation.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><Association
  ListID="Text"
  TaskListID="Text"
  HistoryListID="Text"
  StartManually="true" | "false"
  StartOnCreate="true" | "false"
  StartOnChange="true" | "false"
>
</Association></code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Attribute</p></td>
<td align="left"><p>Description</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ListID**</p></td>
<td align="left"><p>Required **Text**. Specifies the GUID of the list to which the workflow should be associated.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TaskListID**</p></td>
<td align="left"><p>Required **Text**. Specifies the GUID of the task list the workflow should use for workflow tasks, if any.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**HistoryListID**</p></td>
<td align="left"><p>Optional **Text**. Specifies the GUID of the history list the workflow should use for logging workflow history events, if any.</p>
<p>If not specified, the workflow logs workflow history events to a default history list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**StartManually**</p></td>
<td align="left"><p>Optional **Boolean**. If set to true, the workflow may be manually started by users.</p>
<p>If this attribute is not present, SharePoint Foundation treats the workflow as if this attribute is set to false.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**StartOnCreate**</p></td>
<td align="left"><p>Optional **Boolean**. If set to true, SharePoint Foundation starts the workflow automatically when a new item is created on the list to which the workflow is associated.</p>
<p>If this attribute is not present, SharePoint Foundation treats the workflow as if this attribute is set to false.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**StartOnChange**</p></td>
<td align="left"><p>Optional **Boolean**. If set to true, SharePoint Foundation starts the workflow automatically when an item is changed on the list to which the workflow is associated.</p>
<p>If this attribute is not present, SharePoint Foundation treats the workflow as if this attribute is set to false.</p></td>
</tr>
</tbody>
</table>


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>None</p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="workflowconfig-element.md">WorkflowConfig Element</a></span></p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Once the workflow has been associated with a specific SharePoint list,
the values of the following attributes are stored in the <span
sdata="cer"
target="T:Microsoft.SharePoint.Workflow.SPWorkflowAssociation"><span
class="nolink">SPWorkflowAssociation</span></span> object for the
workflow:

-   The StartManually attribute value is stored in the <span sdata="cer"
    target="P:Microsoft.SharePoint.Workflow.SPWorkflowAssociation.AllowManual"><span
    class="nolink">AllowManual</span></span> property.

-   The StartOnCreate attribute value is stored in the <span sdata="cer"
    target="P:Microsoft.SharePoint.Workflow.SPWorkflowAssociation.AutoStartCreate"><span
    class="nolink">AutoStartCreate</span></span> property.

-   The StartOnChange attribute value is stored in the <span sdata="cer"
    target="P:Microsoft.SharePoint.Workflow.SPWorkflowAssociation.AutoStartChange"><span
    class="nolink">AutoStartChange</span></span> property.

-   The HistoryListID attribute value is stored in the <span sdata="cer"
    target="P:Microsoft.SharePoint.Workflow.SPWorkflowAssociation.HistoryListId"><span
    class="nolink">HistoryListId</span></span> property.

-   The TaskListID attribute value is stored in the <span sdata="cer"
    target="P:Microsoft.SharePoint.Workflow.SPWorkflowAssociation.TaskListId"><span
    class="nolink">TaskListId</span></span> property.

Applications created to work as a declarative rules-based, code-free
workflow editor can use the <span sdata="cer"
target="M:websvcWebPartPages.WebPartPagesWebService.AssociateWorkflowMarkup(System.String,System.String)">**AssociateWorkflowMarkup(String,
String)**</span> method of the <span sdata="cer"
target="N:websvcWebPartPages">**websvcWebPartPages**</span> Web Service
to create a workflow template and associate it to a SharePoint list
specifying a workflow markup file, a workflow configuration file, and
optionally, a workflow rules markup file.

For more information about creating an application that can act as a
declarative rules-based, code-free workflow editor, see [Creating
Declarative, No-Code Workflow
Editors](http://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx).


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example shows an Association element for a workflow
configuration. The element attributes specify the SharePoint list to
which the workflow is associated, the task list the workflow uses, that
the workflow can be started manually, and that the workflow starts
automatically when a new item is created on the list.

## Definition
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <Association
        ListID="{B8C6FEEA-8066-462E-958D-1B4E90FE1C34}"
        TaskListID="{C64BA541-9D5B-42F3-A989-96F56FD51155}"
        StartManually="true"
        StartOnCreate="true"
    >


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

[Workflow configuration schema
reference](workflow-configuration-schema-reference.md)</span>

#### Other resources

[Workflow Development for Windows SharePoint
Services](http://msdn.microsoft.com/library/ad7a5bf2-fab0-4b30-ae0b-46b15f16b491(Office.15).aspx)

[Creating Declarative, No-Code Workflow
Editors](http://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx)

[Office SharePoint Designer 2007
Overview](http://msdn.microsoft.com/library/5ef4e933-564e-4dea-b2f4-c1b621774969(Office.15).aspx)








