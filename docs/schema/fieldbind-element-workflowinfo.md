---


manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: e749c019-9420-468c-a2fe-48bf8a8319df
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
<td align="left"># FieldBind Element (WorkflowInfo)</td>
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

The **FieldBind** element is a child of the
**RuleDesigner** element. These elements are
used together to create a readable sentence that describes a condition
that needs to be evaluated or an activity that must be executed. When
constructed correctly, these elements can also be used to insert
variables (such as hyperlinks) within the sentence, so that the
code-free workflow editor can substitute dynamic values into the
workflow while it is running. The **FieldBind**
element maps the inputs from the workflow creator to parameters that are
then passed to Microsoft SharePoint Foundation 2010.

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
<td align="left"><p>Using custom designer types or custom field types is not supported when creating workflows using SharePoint Designer unless they are a subtype of an existing supported type, or if otherwise compatible with supported designer or parameter types.</p></td>
</tr>
</tbody>
</table>

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;RuleDesigner&gt;
    &lt;FieldBind&gt;
        &lt;Option /&gt;
    &lt;/FieldBind&gt;
&lt;/RuleDesigner&gt;</code></pre></td>
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
<td align="left"><p>**DesignerType**</p></td>
<td align="left"><p>Optional **text**. Specifies the type of control or user input that is presented to the workflow creator when building sentences in the workflow editor.</p>
<div class="alert">
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
<td align="left"><p>If you do not specify a **DesignerType</span>, the default **DesignerType</span> attribute is used. The default **DesignerType** is a text box followed by an ellipsis button (...) and a lookup button.</p></td>
</tr>
</tbody>
</table>
</div>
<div class="alert">
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
<td align="left"><p>A code-free workflow editor should treat the values returned to it from the server as case-insensitive.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="even">
<td align="left"><p>**Field**</p></td>
<td align="left"><p>Required **text</span>. Represents a **Parameter</span> element used to build workflows. The **Field</span> attribute maps directly to one or more **Parameter** elements when a parameter type and direction are defined.</p>
<div class="alert">
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
<td align="left"><p>If you use more than one parameter for a **Field</span> attribute, the parameter names should be separated by commas (for example, **Field</span>=&quot;**Variable</span>,**ValueType**&quot;).</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="odd">
<td align="left"><p>**Function**</p></td>
<td align="left"><p>Optional **Boolean</span>. When set to **true</span>, this attribute inserts the name of the **Action** method into the sentence.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Required **Integer</span> (non-negative). **Id</span> is used as the relational key between a **FieldBind</span> element and the **Sentence</span> property of the parent **RuleDesigner** element, much like a primary key is used in a database.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**OperatorTypeFrom**</p></td>
<td align="left"><p>Required **text</span>. Used only when **DesignerType</span> attribute is set to **Operator</span>. This attribute determines the types of operators that are available to the user, based on the Microsoft .NET data type that is listed in the corresponding **Parameter</span> element. The parameter that is specified for the **OperatorTypeFrom</span> attribute can be different from the parameter that is listed in the **Field** attribute.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Text**</p></td>
<td align="left"><p>Required **text**. Text displayed to the user as a hyperlink in the condition sentence.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TypeFrom**</p></td>
<td align="left"><p>Optional **text</span>. Specifies the .NET data types that are valid for use with an instance of the **FieldBind</span> element. The **TypeFrom</span> attribute is associated with a **Parameter** element that contains the type definition.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Value**</p></td>
<td align="left"><p>Reserved for future use.</p></td>
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
<th align="left"><p>User Interface Element</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>(omitted) (unknown) Text TextBox</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>Single-line text box.</p></td>
</tr>
<tr class="even">
<td align="left"><p>AddPermission</p></td>
<td align="left"><p>List of roles List of users</p></td>
<td align="left"><p>Dialog box that allows adding roles to users.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Assignment</p></td>
<td align="left"><p>Assigned to CC Comments Subject Duration Duration unit Due date</p></td>
<td align="left"><p>Dialog box for setting the parameters of assignment, due date, and other data.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Bool</p></td>
<td align="left"><p>Boolean</p></td>
<td align="left"><p>List that contains the choices TRUE or FALSE.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>CheckPermission</p></td>
<td align="left"><p>Single parameter</p></td>
<td align="left"><p>Dialog box for selecting a set of permissions.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ChooseDocLibItem</p></td>
<td align="left"><p>List identifier List item</p></td>
<td align="left"><p>Document library item selection dialog box.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ChooseListItem</p></td>
<td align="left"><p>List identifier List item</p></td>
<td align="left"><p>List item selection dialog box.</p></td>
</tr>
<tr class="even">
<td align="left"><p>CreateListItem</p></td>
<td align="left"><p>List identifier Item properties Overwrite</p></td>
<td align="left"><p>Single-line text box with a button that shows a dialog box to bind to a specific list item.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>DataSourceFieldNames</p></td>
<td align="left"><p>Single parameter</p></td>
<td align="left"><p>List that contains options retrieved from the ancestor <a href="action-element-workflowinfo.md">Action</a> or <a href="compositestep-element-workflowinfo.md">CompositeStep</a> that has a <a href="datasource-element-workflowinfo.md">DataSource</a> element that matches the child <a href="datasourceref-element-workflowinfo.md">DataSourceRef</a> element. The result of selecting an element from this list should be the literal value chosen.</p></td>
</tr>
<tr class="even">
<td align="left"><p>DataSourceValues</p></td>
<td align="left"><p>Single parameter</p></td>
<td align="left"><p>List that contains options retrieved from the ancestor <a href="action-element-workflowinfo.md">Action</a> or <a href="compositestep-element-workflowinfo.md">CompositeStep</a> that has a <a href="datasource-element-workflowinfo.md">DataSource</a> element that matches the child <a href="datasourceref-element-workflowinfo.md">DataSourceRef</a> element. The result of selecting an element from this list should be the run-time value of the chosen field in the data source.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Date</p></td>
<td align="left"><p>Date/time</p></td>
<td align="left"><p>Text box that accepts dates and times.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Dependent</p></td>
<td align="left"><p>Single parameter</p></td>
<td align="left"><p>The user interface element shown depends on values of the <span class="parameter" sdata="paramReference">TypeFrom</span> and <span class="parameter" sdata="paramReference">OperatorTypeFrom</span> attributes.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Dropdown</p></td>
<td align="left"><p>Single parameter</p></td>
<td align="left"><p>List that contains options specified as <a href="option-element-workflowinfo.md">Option</a> elements of the **FieldBind** element.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Email</p></td>
<td align="left"><p>To CC Subject Body</p></td>
<td align="left"><p>Dialog box for composing an email message.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>FieldNames</p></td>
<td align="left"><p>Field</p></td>
<td align="left"><p>List of all fields in the list or document library with which the workflow is associated.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Float</p></td>
<td align="left"><p>Float</p></td>
<td align="left"><p>Text box that accepts a floating-point number.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Hyperlink</p></td>
<td align="left"><p>URL</p></td>
<td align="left"><p>URL dialog box.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Integer</p></td>
<td align="left"><p>Int</p></td>
<td align="left"><p>Text box that accepts an integer.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ListNames</p></td>
<td align="left"><p>List identifier</p></td>
<td align="left"><p>List of lists on the current site.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Operator</p></td>
<td align="left"><p>Value</p></td>
<td align="left"><p>List that contains operator options specified as <a href="option-element-workflowinfo.md">Option</a> elements of the **FieldBind** element. The list of operators is filtered based on the type of the operand.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ParameterNames</p></td>
<td align="left"><p>Name</p></td>
<td align="left"><p>List that contains the names of variables that are defined in the current workflow.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Person</p></td>
<td align="left"><p>List of people</p></td>
<td align="left"><p>Dialog box for selecting accounts on the current site.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>RemovePermission</p></td>
<td align="left"><p>List of roles List of users</p></td>
<td align="left"><p>Dialog box for removing roles from users.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ReplacePermission</p></td>
<td align="left"><p>List of roles List of users</p></td>
<td align="left"><p>Dialog box for replacing the roles of users.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>SinglePerson</p></td>
<td align="left"><p>Person</p></td>
<td align="left"><p>Dialog box for selecting a single account on the current site.</p></td>
</tr>
<tr class="even">
<td align="left"><p>StatusDropdown</p></td>
<td align="left"><p>Status value</p></td>
<td align="left"><p>Drop-down list for entering a new status value or reusing an existing value.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>StringBuilder</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>Single-line text box.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Survey</p></td>
<td align="left"><p>Title Content type identifier</p></td>
<td align="left"><p>Dialog box for building a survey form to be presented to users of the workflow at run time to collect data.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>TaskSummary</p></td>
<td align="left"><p>Single parameter</p></td>
<td align="left"><p>View for setting properties of a task process.</p></td>
</tr>
<tr class="even">
<td align="left"><p>TextArea</p></td>
<td align="left"><p>String</p></td>
<td align="left"><p>Text box.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>UpdateListItem</p></td>
<td align="left"><p>List identifier List item Item properties</p></td>
<td align="left"><p>Dialog box that contains a list of lists and fields in each list, enabling new values to be set for the fields in a list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>WritableFieldNames</p></td>
<td align="left"><p>List of names</p></td>
<td align="left"><p>List that contains all fields in the list or document library with which the workflow is associated that are not read-only, or a list of all document libraries on the current site that are not read-only, depending on the context.</p></td>
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
<td align="left"><p><a href="option-element-workflowinfo.md">Option</a></p></td>
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
<td align="left"><p><a href="ruledesigner-element-workflowinfo.md">RuleDesigner</a></p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example demonstrates how to construct the <span
class="keyword">FieldBind</span> element within the <span
class="keyword">RuleDesigner</span> parent element so that it displays
correctly in the workflow designer.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <RuleDesigner Sentence="%1">
       <FieldBind Field="MyParameter1" 
                  Text="text" Id="1"       
                  DesignerType="Dropdown" 
                  TypeFrom="MyParameter1">
          <Option Name="Display Name" Value="Display Value"/>
       </FieldBind>
    </RuleDesigner>


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








