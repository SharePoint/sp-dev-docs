---


manager: laurawi
ms.date: 11/16/2014
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 63824239-6eb2-4cf1-ba84-44eace4d3781
---

![Collapse
section](../icons/collapse_all.gif "Collapse section")![Expand
section](../icons/expand_all.gif "Expand section")![](../icons/collapse_all.gif)![](../icons/expand_all.gif)![](../icons/dropdown.gif)![](../icons/dropdownHover.gif)![Copy
code](../icons/copycode.gif "Copy code")![Copy code
hover](../icons/copycodeHighlight.gif "Copy code hover")
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
<td align="left"># Workflow configuration schema reference</td>
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

**Last modified:** July 15, 2011

***Applies to:** SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013*

The workflow configuration file contains the information necessary to
create a workflow template in SharePoint Foundation from the specified
workflow markup and rules files, and to associate it to a specific list.
Information included in the workflow configuration file includes:

-   The workflow markup and rules files to use, including the
    appropriate version of those files to use.

-   The list to which the workflow should be associated.

-   The task list and history list for the workflow to use.

-   Conditions under which the workflow starts.

-   Workflow initiation form location, data fields, and default values.

The workflow configuration file is specified as a parameter for the
following methods of the <span sdata="cer"
target="N:websvcWebPartPages">**websvcWebPartPages**</span> Web Service.
These methods enable Microsoft SharePoint Designer 2010 to create
declarative workflow templates and associate those workflow templates
with SharePoint Foundation 2010 lists.

-   <span sdata="cer"
    target="M:websvcWebPartPages.WebPartPagesWebService.ValidateWorkflowMarkupAndCreateSupportObjects(System.String,System.String,System.String,System.String)">**ValidateWorkflowMarkupAndCreateSupportObjects(String,
    String, String, String)**</span>

    Use this method to validate the workflow markup of a declarative
    workflow, and optionally, create the support objects necessary for
    that workflow to run.

-   <span sdata="cer"
    target="M:websvcWebPartPages.WebPartPagesWebService.AssociateWorkflowMarkup(System.String,System.String)">**AssociateWorkflowMarkup(String,
    String)**</span>

    Use this method to create a workflow template, and associate that
    workflow template with the specified SharePoint list.

For more information about creating workflow editors, see [Creating
Declarative, No-Code Workflow
Editors](http://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx).

The workflow configuration schema contains the following elements:

\<<span sdata="link">[WorkflowConfig
Element](workflowconfig-element.htm)</span>\>

   \<<span sdata="link">[Template Element
(WorkflowConfig)](template-element-workflowconfig.htm)</span>\>

   \<<span sdata="link">[Association Element
(WorkflowConfig)](association-element-workflowconfig.htm)</span>\>

   \<<span sdata="link">[ContentTypes Element
(WorkflowConfig)](contenttypes-element-workflowconfig.htm)</span>\>

      \<<span sdata="link">[ContentType Element
(WorkflowConfig)](contenttype-element-workflowconfig.htm)</span>\>

   \<<span sdata="link">[Initiation Element
(WorkflowConfig)](initiation-element-workflowconfig.htm)</span>\>

      \<<span sdata="link">[Fields Element
(WorkflowConfig)](fields-element-workflowconfig.htm)</span>\>

      \<<span sdata="link">[Parameters Element
(WorkflowConfig)](parameters-element-workflowconfig.htm)</span>\>

         \<<span sdata="link">[Parameter Element
(WorkflowConfig)](parameter-element-workflowconfig.htm)</span>\>


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### Description

Elements have been edited for readability.

### Code

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <WorkflowConfig>
      <Template
        BaseID="{68B99644-EDCE-4988-9D11-7FD5CCAE09CC}"
        DocLibID="{74FAE22C-0176-46DF-AA12-988CE79C8889}"
        XomlHref="Workflows/Notify Me/Notify Me.xoml"
        XomlVersion="V3.0"
        RulesHref="Workflows/Notify Me/Notify Me.xoml.rules"
        RulesVersion="V3.0"
      >
      </Template>
      <Association
        ListID="{B8C6FEEA-8066-462E-958D-1B4E90FE1C34}"
        TaskListID="{C64BA541-9D5B-42F3-A989-96F56FD51155}"
        StartManually="true"
        StartOnCreate="true"
      >
      </Association>
      <ContentTypes>
        <ContentType 
          Name="Review New Document" 
          ContentTypeID=
            "0x0108010086C115D5C5C27B439C22EB22F050B49B00DD9F97273595EA4BA32838A26054BF08" 
          Form="/Workflows/Notify Me/Review New Document.aspx" 
          Description="Workflow used to review new documents">
          <Fields/>
        </ContentType>
      </ContentTypes>
      <Initiation 
        URL="Workflows/Notify Me/Notify Me.aspx">
        <Fields>
          <Field 
            Name="Reason_for_Review" 
            …
            DisplayName="Reason for Review" 
            …
          >
            <Default>Standard review of new documents</Default>
          </Field>
        </Fields>
        <Parameters>
          <Parameter Name="Reason_for_Review" Type="System.String" />
        </Parameters>
      </Initiation>
    </WorkflowConfig>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[Workflow Development for Windows SharePoint
Services](http://msdn.microsoft.com/library/ad7a5bf2-fab0-4b30-ae0b-46b15f16b491(Office.15).aspx)

[Creating Declarative, No-Code Workflow
Editors](http://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx)

[Office SharePoint Designer 2007
Overview](http://msdn.microsoft.com/library/5ef4e933-564e-4dea-b2f4-c1b621774969(Office.15).aspx)








