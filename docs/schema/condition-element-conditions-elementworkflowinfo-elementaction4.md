---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 20f7d2de-a99d-fde6-c8e3-e401bb42d2f4
---

# Condition element (Conditions element) 

(WorkflowInfo element) (Action4)

**Applies to**: SharePoint Server 2013

Represents a Condition statement, which is part of a rule sentence that can be displayed in a declarative, rules-based, code-free workflow editor. The Condition statement (with values and arguments) is used to evaluate workflow state and make branching decisions.

```XML 
    <WorkflowInfo>
          <Conditions>
                <Condition>
                   <RuleDesigner />
                   <Paramaters />
                </Condition>
                <Default />
          </Conditions>
          <Action />
    </WorkflowInfo>
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

<br/>

```XML
    <xs:element name="Condition"      minOccurs="0"     maxOccurs="unbounded"    >
               <xs:complexType>
               <xs:all>
         <xs:element name="RuleDesigner"      type="ruleDesignerType" minOccurs="1"     maxOccurs="1"    >
      </xs:element>  
         <xs:element name="Parameters"      type="parametersType" minOccurs="1"     maxOccurs="1"    >
      </xs:element>  
           </xs:all>
         <xs:attribute name="Type"   type="s:string"     />
         <xs:attribute name="Name"   type="s:string"      use="required"     />
         <xs:attribute name="AppliesTo"   type="appliesToTypes"      use="required"     />
         <xs:attribute name="UsesCurrentItem"   type="s:boolean"     />
         <xs:attribute name="ItemKeyType"   type="s:string"     />
         <xs:attribute name="FunctionName"   type="s:string"     />
         <xs:attribute name="Assembly"   type="s:string"     />
         <xs:attribute name="ClassName"   type="s:string"     />
         <xs:attribute name="ShapeImageUrl"   type="s:string"     />
           </xs:complexType>
      </xs:element>  
```

<br/>

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.

<br/>

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
<td align="left"><p><a href="conditions-element-workflowinfo-elementaction4.md">Conditions</a></p></td>
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
<td align="left"><p><a href="parameters-element-condition-elementconditions-elementworkflowinfo-elementaction.md">Parameters</a></p></td>
<td align="left"><p><a href="parameterstype-complextype-action4.md">parametersType</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="ruledesigner-element-condition-elementconditions-elementworkflowinfo-elementacti.md">RuleDesigner</a></p></td>
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
<td align="left"><p>AppliesTo</p></td>
<td align="left"><p><a href="appliestotypes-simpletype-action4.md">appliesToTypes</a></p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Specifies whether the conditional statement that is being evaluated is applied to a SharePoint list or document library. By changing the value, you can show or hide a specific condition statement in the workflow editor, depending on the type of SharePoint list that the workflow is associated with. Following are allowable values:</p>
<ul>
<li><p>**all** specifies that a condition statement is available to all list and document library types.</p></li>
<li><p>**doclib** specifies that a condition statement is visible to the workflow editor only when the workflow is associated with a document library.</p></li>
<li><p>**list** specifies that a condition statement is visible to the workflow editor only when the workflow is associated with a SharePoint list.</p></li>
<li><p>**none** specifies that a condition statement is hidden from the workflow editor.</p></li>
</ul></td>
<td align="left"><p>Values of the appliesToTypes type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Assembly</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies the .NET assembly that contains the implementation code for the **Condition** element.</p>
<p>Example:</p>
<p>```Assembly="Microsoft.SharePoint.WorkflowActions,
    Version=15.0.0.0,
    Culture=neutral,
    PublicKeyToken=c9b3ceac-xxxxx-xxxxx-xxxxx-xxxxxxxxxxxx"```
</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ClassName</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Contains the fully qualified class name in which the **Condition** element code is implemented.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>FunctionName</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Name of the **Boolean** method in the class that implements the **Condition** code.</p>
<p><span class="label">Example method:</span></p>
<p><span class="code">Bool myCondition(WorkflowContext context, string ListGUIDorName, int ItemWorkflowAttachedTo)</span></p>
<p><span class="label">XML:</span></p>
<p><span class="code">FunctionName="myCondition"</span></p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ItemKeyType</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The implementation-specific identifier for the default object type.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Name</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Specifies a localized name of the condition.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ShapeImageUrl</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The URL to the image file representing the condition-related shape that is represented in the visual designer.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Type</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies whether the **Condition** element is **Custom** or **Advanced**.</p>
<ul>
<li><p><strong>Custom</strong> Used to compare a value found in the current SharePoint list or document library item to a value specified by the workflow designer.</p></li>
<li><p><strong>Advanced</strong> Used to indicate that a Condition can be used to compare two values of any type (for example, text, integers, and dates).</p></li>
</ul></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>UsesCurrentItem</p></td>
<td align="left"><p>s:boolean</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies whether the item currently selected is associated with the workflow. If set to **true**, the workflow binds to the SharePoint list item or document library item that started the workflow instance. When using a declarative workflow editor or designer surface, this value always returns **true** and cannot be changed.</p></td>
<td align="left"><p>Values of the s:boolean type.</p></td>
</tr>
</tbody>
</table>

### Remarks

Each **Condition** element also corresponds to a **Boolean** method inside a specified SharePoint workflow library. These methods are used to evaluate values passed by their parameters and return either **true** or **false**.

A **Condition** element contains information about the Microsoft .NET assembly where the condition code is implemented, and also the parameters that are required to make the function call. It also contains information about how the **Condition** statement should be displayed to the workflow editor.








