---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 21669885-4372-4501-b00b-439de30ce0e3
---

# FieldBind Element (WorkflowActions)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

The **FieldBind** element is a child of the **RuleDesigner** element. These elements are used together to create a readable sentence that describes a condition that needs to be evaluated or an activity that must be executed. When constructed correctly, these elements can also be used to insert variables (such as hyperlinks) within the sentence, so that the code-free workflow editor can substitute dynamic values into the workflow while it is running. The **FieldBind** element maps the inputs from the workflow creator to parameters that are then passed to Microsoft SharePoint Foundation 2010.

> [!NOTE] 
> Using custom designer types or custom field types is not supported when creating workflows using SharePoint Designer unless they are a subtype of an existing supported type, or if otherwise compatible with supported designer or parameter types.

## Definition

```XML
<RuleDesigner>
    <FieldBind>
        <Option />
        <DataSourceRef>
    </FieldBind>
</RuleDesigner>
```

## Elements and attributes

The following sections describe attributes, child elements, and parent elements.

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="80%" />
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
<p>**Note**: If you do not specify a **DesignerType** attribute, the default **DesignerType** attribute is used. The default **DesignerType** is a text box followed by an ellipsis button (...) and a lookup button.</p>
<p>**Note**: A code-free workflow editor should treat the values that are returned to it from the server as case-insensitive.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Field**</p></td>
<td align="left"><p>Required **text**. Represents a **Parameter** element that is used to build workflows. The **Field** attribute maps directly to one or more **Parameter** elements when a parameter type and direction are defined.</p>
<p>**Note**: If you use more than one parameter for a **Field** attribute, the parameter names should be separated by commas (for example, **Field**="**Variable**,**ValueType**").</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Function**</p></td>
<td align="left"><p>Optional **Boolean**. When set to **true**, this attribute inserts the name of the **Action** method into the sentence.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Id**</p></td>
<td align="left"><p>Required **Integer** (non-negative). **Id** is used as the relational key between a **FieldBind** element and the **Sentence** property of the parent **RuleDesigner** element, much like a primary key is used in a database.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**OperatorTypeFrom**</p></td>
<td align="left"><p>Required **text**. Used only when the **DesignerType** attribute is set to **Operator**. This attribute determines the types of operators that are available to the user, based on the Microsoft .NET data type listed in the corresponding **Parameter** element. The parameter that is specified for the **OperatorTypeFrom** attribute can be different from the parameter that is listed in the **Field** attribute.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Text**</p></td>
<td align="left"><p>Required **text**. Text displayed to the user as a hyperlink in the condition sentence.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**TypeFrom**</p></td>
<td align="left"><p>Optional **text**. Specifies the .NET data types that are valid for use with an instance of the **FieldBind** element. The **TypeFrom** attribute is associated with a **Parameter** element that contains the type definition.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Value**</p></td>
<td align="left"><p>Reserved for future use.</p></td>
</tr>
</tbody>
</table>

#### DesignerType attribute

<table>
<colgroup>
<col width="30%" />
<col width="30%" />
<col width="40%" />
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
<td align="left"><p>(omitted)</p>
<p>(unknown)</p>
<p>Text</p>
<p>TextBox</p></td>
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
<td align="left"><p>Assigned to</p>
<p>CC</p>
<p>Comments</p>
<p>Subject</p>
<p>Duration</p>
<p>Duration unit</p>
<p>Due date</p></td>
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
<td align="left"><p>List identifier</p>
<p>List item</p></td>
<td align="left"><p>Document library item selection dialog box.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ChooseListItem</p></td>
<td align="left"><p>List identifier</p>
<p>List item</p></td>
<td align="left"><p>List item selection dialog box.</p></td>
</tr>
<tr class="even">
<td align="left"><p>CreateListItem</p></td>
<td align="left"><p>List identifier</p>
<p>Item properties</p>
<p>Overwrite</p></td>
<td align="left"><p>Single-line text box with button that shows a dialog box to bind to a specific list item.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>DataSourceFieldNames</p></td>
<td align="left"><p>Single parameter</p></td>
<td align="left"><p>List that contains options that are retrieved from the ancestor <a href="action-element-workflowinfo.md">Action</a> element or <a href="compositestep-element-workflowinfo.md">CompositeStep</a> element that has a <a href="datasource-element-workflowinfo.md">DataSource</a> element that matches the child <a href="datasourceref-element-workflowinfo.md">DataSourceRef</a> element. The result of selecting an element from this list should be the literal value selected.</p></td>
</tr>
<tr class="even">
<td align="left"><p>DataSourceValues</p></td>
<td align="left"><p>Single parameter</p></td>
<td align="left"><p>List that contains options that are retrieved from the ancestor <a href="action-element-workflowinfo.md">Action</a> element or <a href="compositestep-element-workflowinfo.md">CompositeStep</a> element that has a <a href="datasource-element-workflowinfo.md">DataSource</a> element that matches the child <a href="datasourceref-element-workflowinfo.md">DataSourceRef</a> element. The result of selecting an element from this list should be the run-time value of the selected field in the data source.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Date</p></td>
<td align="left"><p>Date/time</p></td>
<td align="left"><p>Text box that accepts dates and times.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Dependent</p></td>
<td align="left"><p>Single parameter</p></td>
<td align="left"><p>The user interface element shown depends on values of the **TypeFrom** attribute and the **OperatorTypeFrom** attribute.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Dropdown</p></td>
<td align="left"><p>Single parameter</p></td>
<td align="left"><p>List that contains options specified as <a href="option-element-workflowinfo.md">Option</a> elements of the **FieldBind** element.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Email</p></td>
<td align="left"><p>To</p>
<p>CC</p>
<p>Subject</p>
<p>Body</p></td>
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
<td align="left"><p>List that contains operator options that are specified as <a href="option-element-workflowinfo.md">Option</a> elements of the **FieldBind** element. The list of operators is filtered based on the type of the operand.</p></td>
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
<td align="left"><p>List of roles</p>
<p>List of users</p></td>
<td align="left"><p>Dialog box for removing roles from users.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ReplacePermission</p></td>
<td align="left"><p>List of roles</p>
<p>List of users</p></td>
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
<td align="left"><p>Title</p>
<p>Content type identifier</p></td>
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
<td align="left"><p>List identifier</p>
<p>List item</p>
<p>Item properties</p></td>
<td align="left"><p>Dialog box that contains a list of lists and fields in each list, enabling new values to be set for the fields in a list.</p></td>
</tr>
<tr class="even">
<td align="left"><p>WritableFieldNames</p></td>
<td align="left"><p>List of names</p></td>
<td align="left"><p>List that contains all fields in the list or document library with which the workflow is associated that are not read-only, or a list of all document libraries on the current site that are not read-only, depending on the context.</p></td>
</tr>
</tbody>
</table>

### Child elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="option-element-workflowactions.md">Option</a></p>
<p><a href="datasourceref-element-workflowactions.md">DataSourceRef</a></p></td>
</tr>
</tbody>
</table>

### Parent elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="ruledesigner-element-workflowactions.md">RuleDesigner</a></p></td>
</tr>
</tbody>
</table>

## Example

The following example demonstrates how to construct the **FieldBind** element within the **RuleDesigner** parent element so that it displays correctly in the workflow designer.

```XML
    <RuleDesigner Sentence="%1">
       <FieldBind Field="MyParameter1" 
                  Text="text" Id="1"       
                  DesignerType="Dropdown" 
                  TypeFrom="MyParameter1">
          <Option Name="Display Name" Value="Display Value"/>
       </FieldBind>
    </RuleDesigner>
```

## See also

- [Creating Declarative, No-Code Workflow Editors](https://msdn.microsoft.com/en-us/library/office/bb417436.aspx)
- [Workflow Actions Schema Overview](https://msdn.microsoft.com/en-us/library/office/bb897626.aspx)








