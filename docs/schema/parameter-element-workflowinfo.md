---


manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: dd8766fd-0424-4f88-a8ce-8466fc178bce
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
<td align="left"># Parameter Element (WorkflowInfo)</td>
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

Used to describe the input and output parameters for a custom <span
class="keyword">Actions</span> or <span
class="keyword">Conditions</span> method call.

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
        </Parameter>
  </Condition>
</Conditions>
<Actions>
  <Action>
    <Parameters>
      <Parameter />
    </Parameters
  </Action>
</Actions></code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Required **String**. Partially qualified Microsoft .NET data type. Values are not case-sensitive.</p>
<p>**Example**:</p>
<p>System.Object, mscorlib</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Direction**</p></td>
<td align="left"><p>Optional **text</span>. Specifies an input or output parameter. Valid values are **In</span>, **Out</span>, and **Optional**. Values are not case-sensitive.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required **text</span>. Used to associate the **FieldBind** element with the parameter. Values are not case-sensitive.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**InitialValue**</p></td>
<td align="left"><p>Optional **text**. Used to specify the default initial value that is passed to the parameter. Values are not case-sensitive.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**InitialBinding**</p></td>
<td align="left"><p>Optional **text**. Specifies the default variable to use for the parameter when creating a new condition or action that contains the parameter.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional **text**. Specifies the text to display when the parameter is selected in a grid matching parameters names with current values.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DesignerType**</p></td>
<td align="left"><p>Optional **text**. Specifies the possible interface elements to use when editing the value of a parameter.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ShowLookupForDropdown**</p></td>
<td align="left"><p>Optional **Boolean**. Specifies that a lookup button is displayed for a drop-down list.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>Optional **text**.Specifies the name to display when showing the parameter in a grid structure matching names of parameters with their current values.</p></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>DesignerType</p></th>
<th align="left"><p>Parameters</p></th>
<th align="left"><p>UI Element</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Text</p>
<p>TextBox</p>
<p>Dependent</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>Single-line text box.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ContentType</p></td>
<td align="left"><p>Content type identifier</p></td>
<td align="left"><p>Dialog box for creating or updating a content type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>DataSourceFieldNames</p></td>
<td align="left"><p>Single parameter</p></td>
<td align="left"><p>List that contains options retrieved from the ancestor <a href="action-element-workflowinfo.md">Action</a> or <a href="compositestep-element-workflowinfo.md">CompositeStep</a> element with a <a href="datasource-element-workflowinfo.md">DataSource</a> element that matches the child <a href="datasourceref-element-workflowinfo.md">DataSourceRef</a> element. The result of selecting an element from this list should be the literal value selected.</p></td>
</tr>
<tr class="even">
<td align="left"><p>DataSourceValues</p></td>
<td align="left"><p>Single parameter</p></td>
<td align="left"><p>List that contains options retrieved from the ancestor <a href="action-element-workflowinfo.md">Action</a> or <a href="compositestep-element-workflowinfo.md">CompositeStep</a> element with a <a href="datasource-element-workflowinfo.md">DataSource</a> element that matches the child <a href="datasourceref-element-workflowinfo.md">DataSourceRef</a> element. The result of selecting an element from this list should be the run-time value of the selected field in the data source.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Date</p></td>
<td align="left"><p>Date/Time</p></td>
<td align="left"><p>Text box that accepts dates and times.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Dropdown</p></td>
<td align="left"><p>Single parameter</p></td>
<td align="left"><p>List that contains options specified as <a href="option-element-workflowinfo.md">Option</a> child elements of the <a href="fieldbind-element-workflowinfo.md">FieldBind</a> element.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>FieldNames</p></td>
<td align="left"><p>Field</p></td>
<td align="left"><p>List of all fields in the list or document library with which the workflow is associated.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Hide</p></td>
<td align="left"><p>None</p></td>
<td align="left"><p>The client hides the value.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Integer</p></td>
<td align="left"><p>Int</p></td>
<td align="left"><p>Text box that accepts an integer.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ItemProperties</p></td>
<td align="left"><p>Hash table</p></td>
<td align="left"><p>Dialog box for setting a hash table of name-value pairs.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ListItem</p></td>
<td align="left"><p>List identifier</p>
<p>List item identifier</p></td>
<td align="left"><p>Dialog box for selecting a list item.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ListNames</p></td>
<td align="left"><p>List identifier</p></td>
<td align="left"><p>List of lists in the current site.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ParameterNames</p></td>
<td align="left"><p>**Name**</p></td>
<td align="left"><p>List that contains the names of variables that are defined in the current workflow.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Person</p></td>
<td align="left"><p>List of people</p></td>
<td align="left"><p>Dialog box for selecting accounts on the current site.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>SinglePerson</p></td>
<td align="left"><p>Person</p></td>
<td align="left"><p>Dialog box for selecting a single account on the current site.</p></td>
</tr>
<tr class="even">
<td align="left"><p>StatusDropdown</p></td>
<td align="left"><p>Status value</p></td>
<td align="left"><p>Dropdown list that enables entering a new status value or reusing an existing value.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>StringBuilder</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>Single-line text box.</p></td>
</tr>
<tr class="even">
<td align="left"><p>TextArea</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>Text box.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>WritableFieldNames</p></td>
<td align="left"><p>List of names</p></td>
<td align="left"><p>List that contains all fields in the list or document library with which the workflow is associated that are not read-only, or a list of all document libraries on the current site that are not read-only, depending on the context.</p></td>
</tr>
</tbody>
</table>


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

None


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="parameters-element-workflowinfo.md">Parameters</a></p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example demonstrates how to construct a <span
class="keyword">Parameter</span> element so that the workflow engine can
interact with the assembly code.

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
          <Condition>…
            <Parameters>
              <Parameter />
            </Parameters>
          </Condition>
       </Conditions>
       <Actions Sequential="then" Parallel="and">
          <Action Name="Update my custom SharePoint list"
                  ClassName="CustomActivities.OrderListFunctions"
                  Assembly="CustomActivities"
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








