---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 2f33746f-e028-45ae-a48f-cc37ae0e73b4
---

# Condition Element (WorkflowInfo)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Represents a **Condition** statement, which is part of a rule sentence that can be displayed in a declarative, rules-based, code-free workflow editor, such as Microsoft SharePoint Designer 2010.

When a workflow is triggered by an event that corresponds to a SharePoint list or document library item in Microsoft SharePoint Foundation 2010, it is often necessary to evaluate what workflow action should be taken or if an action is required. A **Condition** element allows the workflow to perform this evaluation with the values and arguments that are provided to it by the workflow editor.

Each **Condition** element also corresponds to a **Boolean** method inside a specified SharePoint Foundation 2010 workflow library. These methods are used to evaluate values passed by their parameters and return either **true** or **false**.

A **Condition** element contains information about the Microsoft .NET assembly where the **Condition** code is implemented, and also the parameters that are required to make the function call. It also contains information about how the **Condition** statement should be displayed to the workflow editor.

```
<WorkflowInfo>
      <Conditions>
            <Condition>
               <RuleDesigner>…</RuleDesigner>
               <Paramaters>…</Parameters>
            </Condition>
            <Default>…</Default>
      </Conditions>
      <Action>…</Actions>
</WorkflowInfo>
```

<br/>

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
<td align="left"><p>**AppliesTo**</p></td>
<td align="left"><p>Required **text**. Specifies that the conditional statement that is being evaluated is applied to a SharePoint list or document library. By changing the value, you can show or hide a specific condition statement in the workflow editor, depending on the type of SharePoint list that the workflow is associated with.</p>
<p>The following values are not case-sensitive:</p>
<ul>
<li><p>**all**   specifies that a condition statement is available to all list and document library types.</p></li>
<li><p>**doclib**   specifies that a condition statement is visible to the workflow editor only when the workflow is associated with a document library. If the workflow is associated with any other type of list, the condition statement is hidden from the workflow editor.</p></li>
<li><p>**list**   specifies that a condition statement is visible to the workflow editor only when the workflow is associated with a SharePoint list. If the workflow is associated with any type other than a list type, the condition statement is hidden from the workflow editor.</p></li>
<li><p>**none**   specifies that a condition statement is hidden from the workflow editor.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**Assembly**</p></td>
<td align="left"><p>Required **text**. Specifies the .NET assembly that contains the implementation code for the **Condition** element.</p>
<p>Value type: **String**.</p>
<p>Specifies the .NET assembly that contains the workflow code. The format should be as follows:</p>
<p>Assembly name, Version, Culture, PublicKeyToken</p>
<p><strong>Example:</strong></p>
<p>Assembly=>Microsoft.SharePoint.WorkflowActions,</p>
<p>                Version=12.0.0.0,</p>
<p>                Culture=neutral,</p>
<p>                PublicKeyToken= 71e9bce111e9429c></p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ClassName**</p></td>
<td align="left"><p>Required **text**. Contains the fully qualified class name in which the **Condition** element code is implemented.</p>
<p>Value type: **String**.</p>
<p>Fully qualified class name in which the custom **Condition** element code is implemented.</p>
<p><strong>Example:</strong></p>
<p>**XML**:</p>
<p>ClassName=>**Microsoft.SharePoint.WorkflowActions.Helper**></p></td>
</tr>
<tr class="even">
<td align="left"><p>**FunctionName**</p></td>
<td align="left"><p>Required **text**. Name of the **Boolean** method in the class that implements the **Condition** code.</p>
<p>Value type: **String**.</p>
<p>Represents the method name in the class in which the **Condition** element code is implemented.</p>
<p>**Example method**:</p>
<p>`Bool myCondition(WorkflowContext context, string ListGUIDorName, int ItemWorkflowAttachedTo)`</p>
<p>**XML**:</p>
<p>FunctionName=>myCondition></p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ItemKeyType**</p></td>
<td align="left"><p>Optional **text**. The implementation-specific identifier for the default object type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required **text**. Specifies a localized condition name.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>Optional **text**. Specifies whether the **Condition** element is **Custom** or **Advanced**.</p>
<p>The following values are not case-sensitive:</p>
<ul>
<li><p>**Custom**   Used to compare a value found in the current SharePoint list or document library item to a value specified by the workflow designer.</p></li>
<li><p>**Advanced**   Used to indicate that a **Condition** can be used to compare two values of any type (for example, text, integers, and dates).</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**UsesCurrentItem**</p></td>
<td align="left"><p>Optional **Boolean**. Specifies that the item currently selected is associated with the workflow.</p>
<p>Value type: **Boolean**.</p>
<p>If set to **true**, the workflow binds to the SharePoint list item or document library item that started the workflow instance. When using a declarative, code-free workflow editor, this value always returns **true **and cannot be changed.</p></td>
</tr>
</tbody>
</table>

<br/>

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="ruledesigner-element-workflowinfo.md">RuleDesigner</a></p>
<p><a href="parameters-element-workflowinfo.md">Parameters</a></p></td>
</tr>
</tbody>
</table>

<br/>

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="930e0d1c-a01a-4557-a58b-209621f1632e.md">Conditions</a></p></td>
</tr>
</tbody>
</table>


### Example

The following example shows how to expose a **Condition** element to the code-free editor during the workflow design process.

```XML
    <WorkflowInfo Language="en-us">
       <Conditions And="and" Or="or" Not="not" When="If" Else="ElseIf">
          <Condition 
                  AppliesTo="list" 
                  Assembly="MyWorkflowProject.Workflow1,
                            PublicKeyToken=71e9bce111e9429c,
                            Version=1.0.0.0,
                            Culture=neutral" 
                  ClassName="MyWorkflowProject.Workflow1.MyClass"
                  FunctionName="IsOrderComplete" 
                  Name="Check if item in %1 is a complete order"
                  Type="Custom"
                  UsesCurrentItem="True">
              <RuleDesigner>...</RuleDesigner>
          </Condition>
       </Conditions>
    </WorkflowInfo>
```

## See also

- [Conditions Element](http://msdn.microsoft.com/library/e930e0d1c-a01a-4557-a58b-209621f1632e(Office.15).aspx)
- [Workflow Actions Schema Overview](http://msdn.microsoft.com/library/25da07cb-b228-43f2-9cdf-c8c71c3eabbb(Office.15).aspx)
- [Creating Declarative, No-Code Workflow Editors](http://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx)
- [Workflow Actions Schema Overview](http://msdn.microsoft.com/library/25da07cb-b228-43f2-9cdf-c8c71c3eabbb(Office.15).aspx)








