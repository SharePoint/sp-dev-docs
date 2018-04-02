---


manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 300b5383-cbdd-4a74-aaee-556c70dab65b
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
<td align="left"># Parameters Element (WorkflowInfo)</td>
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

Container for all **Parameter** elements, and
contains no definable attributes. Includes the descriptions of the
parameters in a condition or action method signature.

The **Parameters** element is a complex element
type and can be used with both **Actions** and
**Conditions** elements to define their
parameters.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><Conditions>
  <Condition>
    <Parameters>
    <Parameter />
    </Parameters>
  </Condition>
</Conditions>
<Actions>
  <Action>
    <Parameters>
      <Parameter />
    </Parameters>
  </Action>
</Actions></code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

None


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="parameter-element-workflowinfo.md">Parameter</a></p></td>
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
<td align="left"><p><a href="condition-element-workflowinfo.md">Condition</a></p>
<p><a href="action-element-workflowinfo.md">Action</a></p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example demonstrates how to construct the <span
class="keyword">Parameters</span> element so that the workflow engine
can interact with the assembly code.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <WorkflowInfo>
       <Conditions>
          <Default>…</Default>
          <Condition>…</Condition>
          <Parameters>
             <Parameter />
          </Parameters>
       </Conditions>
       <Actions Sequential="then" Parallel="and">
          <Action Name="Update my custom SharePoint list"
                  ClassName="CustomActivities.OrderListFunctions"
                  Assembly="CustomActivities,
                            PublicKeyToken=71e9bce111e9429c,
                            Version=1.0.0.0,
                            Culture=neutral"
                  Category="My Custom Actions"
                  CreatesTask="true"
                  CreatesInList="UpdateList"
                  AppliesTo="all"
                  ListModeration="false"
                  UsesCurrentItem="true">
             <RuleDesigner Sentence="Update %1">
                <FieldBind Field="UpdateList"
                           Function="UpdateOrderList"
                           DesignerType="ChooseListItem"
                           ID="1"
                           Text="My Custom List">
                </FieldBind>
             </RuleDesigner>
          <Parameters>
             <Parameter Type="System.String, mscorlib"
                        Direction="In"
                        Name="UpdateList" />
          </Parameters>
          </Action>
       </Actions>
    </WorkflowInfo>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Tasks

[.ACTIONS File Example](actions-file-example-workflowinfo.md)

#### Concepts

[Default Workflow Actions](default-workflow-actions-workflowinfo.md)

[Default Workflow Conditions](default-workflow-conditions-workflowinfo.md)

#### Other resources

[Creating Declarative, No-Code Workflow
Editors](http://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx)

[Workflow Actions Schema
Overview](http://msdn.microsoft.com/library/25da07cb-b228-43f2-9cdf-c8c71c3eabbb(Office.15).aspx)








