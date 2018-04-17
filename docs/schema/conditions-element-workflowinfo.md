---
manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 930e0d1c-a01a-4557-a58b-209621f1632e
---

# Conditions element (WorkflowInfo)

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 | SharePoint Online | SharePoint Server 2013

Conditions are used by declarative, rules-based code-free workflow editors, such as Microsoft SharePoint Designer 2010, to build workflows. Conditions are functions, in code, that return a **Boolean** value when they are called by Microsoft SharePoint Foundation 2010.

When you are using a code-free workflow editor to develop workflows, conditions are presented to the workflow designer in the form of a list of phrases. Each of the conditions in this list has a corresponding function in code that is used to evaluate values that are provided either by the user or by SharePoint Foundation 2010.

The **Conditions** element is the parent element for all **Condition** elements.

> [!NOTE] 
> The attributes listed in the following table are only read from the default WSS.ACTIONS file and cannot be overridden in any custom .ACTIONS files.

## Definition

```XML
<Conditions>
      <Condition>…</Condition>
      <Default>…</Default>
</Conditions>
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
<td align="left"><p>**And**</p></td>
<td align="left"><p>Required **text**. The text that is defined in this attribute is displayed in the rule designer sentence when two or more conditions are used in the same conditional branch, and when all conditions must be satisfied before workflow actions can be executed. The value is not case-sensitive.</p>
<p>The default value is **and** (applies only to the English language version of SharePoint Foundation 2010).</p>
<p>**Example:**</p>
<p>`<Conditions And="and">`</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Else**</p></td>
<td align="left"><p>Required **text**. The text that is defined in this attribute is displayed in the rule designer sentence when a conditional branch activity is added to the workflow. The value is not case-sensitive.</p>
<p>The default value is **Else if** (applies only to the English language version of SharePoint Foundation 2010).</p>
<p>**Example:**</p>
<p>`<Conditions Else="Else if">`</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Not**</p></td>
<td align="left"><p>Required **text**. The text that is defined in this attribute is displayed in the rule designer sentence when the condition must not contain a specified value or range of values. This value is not case-sensitive.</p>
<p>The default value is **Not**.</p>
<p>**Example**:</p>
<p>`<Conditions Not="not">`</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Or**</p></td>
<td align="left"><p>Required **text**. The text that is defined in this attribute is displayed in the rule designer sentence when there are two or more conditions in the same conditional branch and any value will satisfy the conditions, allowing the workflow actions to execute. The value is not case-sensitive.</p>
<p>The default value is **or** (applies only to the English language version of SharePoint Foundation 2010).</p>
<p>**Example:**</p>
<p>`<Conditions Or="or">`</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**When**</p></td>
<td align="left"><p>Required **text**. The text that is defined in this attribute is displayed in the rule designer sentence when a conditional branch is added that requires the values or conditions that follow it to return **true** for the workflow actions to execute. The value is not case-sensitive.</p>
<p>The default value is **If** (applies only to the English language version of SharePoint Foundation 2010).</p>
<p>**Example:**</p>
<p>`<Conditions When="If">`</p></td>
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
<td align="left"><p><a href="default-element-workflowinfo.md">Default</a></p>
<p><a href="condition-element-workflowinfo.md">Condition</a></p></td>
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
<td align="left"><p><a href="workflowinfo-element-workflowinfo.md">WorkflowInfo</a></p></td>
</tr>
</tbody>
</table>

### Remarks

Each **Conditions** element can occur only once in an .ACTIONS file.

## Example

The following example demonstrates how to format the **Conditions** element so that the individual **Condition** elements that it contains are displayed in the workflow editor.

```XML
    <WorkflowInfo Language="en-us">
       <Conditions And="and" Or="or" Not="not" When="If" Else="Else if">
          <Condition>…</Condition>
          <Default>…</Default>
       </Conditions>
       <Actions>…</Actions>
    </WorkflowInfo>
```

## See also

- [Creating Declarative, No-Code Workflow Editors](http://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx)
- [Workflow Actions Schema Overview](http://msdn.microsoft.com/library/25da07cb-b228-43f2-9cdf-c8c71c3eabbb(Office.15).aspx)
- [WorkflowInfo element](workflowinfo-element-workflowinfo.md)








