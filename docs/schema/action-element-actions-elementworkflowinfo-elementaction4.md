---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 98829cd3-8f68-351b-6e33-c0e27e174b58
---

# Action element 

(Actions element) (WorkflowInfo element) (Action4)

Contains the information that is required for Workflow Manager Client 1.0 to process a workflow action's underlying activity or activities.

**Applies to**: SharePoint Server 2013

```XML 
    <Actions>
        <Action>
            <Parameters />
            <RuleDesigner />
            <DataSources />
            <Modifications>
                <Modification/>
            </Modifications>
            <ActionVariables />
            <ActionBody /
            <ActionConditions />
        </Action>
    </Actions>
```

## Element information

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span class="label">Element type</span></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><span class="label">Namespace</span></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><span class="label">Schema file</span></p></td>
<td align="left"><p>Actions4.xsd</p></td>
</tr>
</tbody>
</table>

## Definition

```XML 
    <xs:element name="Action" minOccurs="0" maxOccurs="unbounded">
    <xs:complexType>
       <xs:all>
       <xs:element name="Parameters" type="parametersType" minOccurs="0" maxOccurs="1"></xs:element>
       <xs:element name="RuleDesigner" type="ruleDesignerType" minOccurs="1" maxOccurs="1"></xs:element>
       <xs:element name="DataSources" type="dataSourcesType" minOccurs="0" maxOccurs="1"></xs:element>
       <xs:element name="Modifications" minOccurs="0" maxOccurs="1">
       <xs:complexType>
          <xs:sequence>
          <xs:element name="Modification" minOccurs="1" maxOccurs="unbounded">
             <xs:attribute name="TypeId" type="s:string" use="required" />
             <xs:attribute name="NameFormat" type="s:string" use="required" />
             <xs:attribute name="FormURN" type="s:string" use="required" />
          </xs:element>
          </xs:sequence>
       </xs:complexType>
       </xs:element>
       <xs:element name="ActionVariables" minOccurs="0" maxOccurs="1">
       <xs:complexType>
          <xs:sequence>
             <xs:element name="ActionVariables"></xs:element>
          </xs:sequence>
       </xs:complexType>
       </xs:element>
       <xs:element name="ActionBody" minOccurs="0" maxOccurs="1">
       <xs:complexType>
          <xs:sequence>
             <xs:element name="ActionBody"></xs:element>
          </xs:sequence>
                </xs:complexType>
       </xs:element>
       <xs:element name="ActionConditions" minOccurs="0" maxOccurs="1">
       <xs:complexType>
          <xs:sequence>
             <xs:element name="ActionConditions"></xs:element>
          </xs:sequence>
       </xs:complexType>
       </xs:element>
       </xs:all>
         <xs:attribute name="Name" type="s:string" use="required" />
         <xs:attribute name="ClassName" type="s:string" use="required" />
         <xs:attribute name="Assembly" type="s:string" />
         <xs:attribute name="FunctionName" type="s:string" />
         <xs:attribute name="Category" type="s:string" />
         <xs:attribute name="CreatesTask" type="s:boolean" />
         <xs:attribute name="CreatesInList" type="s:string" />
         <xs:attribute name="AppliesTo" type="appliesToTypes" use="required" />
         <xs:attribute name="IsError" type="s:boolean" />
         <xs:attribute name="ListModeration" type="s:boolean" />
         <xs:attribute name="UsesCurrentItem" type="s:boolean" />
         <xs:attribute name="CreatedTaskFormType" type="s:string" />
         <xs:attribute name="__SolutionId" type="s:string" />
         <xs:attribute name="SandboxedFunction" type="s:boolean" />
         <xs:attribute name="ShapeImageUrl" type="s:string" />
       </xs:complexType>
    </xs:element>
```

## Elements and attributes

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

### Parent elements

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="actions-element-workflowinfo-elementaction4.md">Actions</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/>

### Child elements

<table>
<colgroup>
<col width="33%" />
<col width="33%" />
<col width="33%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><a href="actionbody-element-action-elementactions-elementworkflowinfo-elementaction4.md">ActionBody</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="actionconditions-element-action-elementactions-elementworkflowinfo-elementaction.md">ActionConditions</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="actionvariables-element-action-elementactions-elementworkflowinfo-elementaction4.md">ActionVariables</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="datasources-element-action-elementactions-elementworkflowinfo-elementaction4.md">DataSources</a></p></td>
<td align="left"><p><a href="datasourcestype-complextype-action4.md">dataSourcesType</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="modifications-element-action-elementactions-elementworkflowinfo-elementaction4.md">Modifications</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="parameters-element-action-elementactions-elementworkflowinfo-elementaction4.md">Parameters</a></p></td>
<td align="left"><p><a href="parameterstype-complextype-action4.md">parametersType</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="ruledesigner-element-action-elementactions-elementworkflowinfo-elementaction4.md">RuleDesigner</a></p></td>
<td align="left"><p><a href="ruledesignertype-complextype-action4.md">ruleDesignerType</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

<br/>

### Attributes

<table>
<colgroup>
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
<col width="20%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Attribute</p></th>
<th align="left"><p>Type</p></th>
<th align="left"><p>Required</p></th>
<th align="left"><p>Description</p></th>
<th align="left"><p>Possible values</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>__SolutionId</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies a GUID that the client application writes to the implementation-specific action. The server uses the GUID to help locate the assembly at workflow runtime.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>AppliesTo</p></td>
<td align="left"><p><a href="appliestotypes-simpletype-action4.md">appliesToTypes</a></p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Indicates what this workflow action should be. Valid values include <strong>site</strong>, <strong>list</strong>, <strong>doclib</strong>, and <strong>all</strong>. The value <strong>all</strong> means that the action is available under any scope and will always show up in the <span class="ui">Actions</span> list.</p></td>
<td align="left"><p>Values of the appliesToTypes type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Assembly</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The assembly name that contains instructions for implementing the <strong>Action</strong> element. The text should include the <span class="parameter" sdata="paramReference">PublicKeyToken</span>, <span class="parameter" sdata="paramReference">Version</span>, and <span class="parameter" sdata="paramReference">Culture</span> values.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Category</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Provides a category for the workflow action. This value is used to filter the list of available actions.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ClassName</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Fully qualified name of the class that implements the workflow action.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>CreatedTaskFormType</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies the type of a task created. Use <strong>DataCollectTask</strong> to create a task that collects data from one user; use <strong>GroupAssignedTask</strong> to create a task that collects data from one or more users; use <strong>TodoItemTask</strong> to create a task that does not collect data from users but only exists for a user to validate that they have done something; use <strong>TaskProcess</strong> to create a task that has a form that allows for ad-hoc collaboration and might collect data from one or more users.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>CreatesInList</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>If set, specifies that the workflow create an item in a list or document library. Values must map to a parameter name that contains the ID of the list or document library.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>CreatesTask</p></td>
<td align="left"><p>s:boolean</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>If <strong>true</strong>, a task list item is created in the workflow. If left blank, the assumption is <strong>false</strong>, and no task list items are created.</p></td>
<td align="left"><p>Values of the s:boolean type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>FunctionName</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies the name of a function to call.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>IsError</p></td>
<td align="left"><p>s:boolean</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>If <strong>true</strong>, instances of this <strong>Action</strong> element are considered an error by the client application.</p></td>
<td align="left"><p>Values of the s:boolean type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ListModeration</p></td>
<td align="left"><p>s:boolean</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>If <strong>true</strong>, this <strong>Action</strong> element applies to a list or document library that has content approval enabled. If left blank, the assumption is <strong>false</strong>.</p></td>
<td align="left"><p>Values of the s:boolean type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Represents the descriptive name of the workflow action that is displayed to the workflow editor.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>SandboxedFunction</p></td>
<td align="left"><p>s:boolean</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>If <strong>true</strong>, the client application inserts an implementation-specific action when this action is selected. The action should be configured to call a function defined by the conjunction of AssemblyName, ClassName, and FunctionName. If set, AssemblyName, ClassName, FunctionName, and __SolutionId must also be set.</p></td>
<td align="left"><p>Values of the s:boolean type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>ShapeImageUrl</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The URL of a default icon shape-image file that is available for customization when creating custom actions or custom conditions.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>UsesCurrentItem</p></td>
<td align="left"><p>s:boolean</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies whether a given workflow action can be used in a "site" workflow. Setting this to <strong>true</strong> means that the action cannot be used and is not available for site workflows. The copy/paste function on actions is also blocked. If this attribute value is not set, <strong>false</strong> is implied.</p></td>
<td align="left"><p>Values of the s:boolean type.</p></td>
</tr>
</tbody>
</table>








