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
<td align="left"># Conditions Element (WorkflowInfo)</td>
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

Conditions are used by declarative, rules-based code-free workflow
editors, such as Microsoft SharePoint Designer 2010, to build workflows.
Conditions are functions, in code, that return a <span
class="keyword">Boolean</span> value when they are called by Microsoft
SharePoint Foundation 2010.

When you are using a code-free workflow editor to develop workflows,
conditions are presented to the workflow designer in the form of a list
of phrases. Each of the conditions in this list has a corresponding
function in code that is used to evaluate values that are provided
either by the user or by SharePoint Foundation 2010.

The **Conditions** element is the parent
element for all **Condition** elements.

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
<td align="left"><p>The attributes listed in the following table are only read from the default WSS.ACTIONS file and cannot be overridden in any custom .ACTIONS files.</p></td>
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
<td align="left"><pre><code>   &lt;Conditions&gt;
      &lt;Condition&gt;…&lt;/Condition&gt;
      &lt;Default&gt;…&lt;/Default&gt;
   &lt;/Conditions&gt;</code></pre></td>
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
<td align="left"><p>**And**</p></td>
<td align="left"><p>Required **text**. The text that is defined in this attribute is displayed in the rule designer sentence when two or more conditions are used in the same conditional branch, and when all conditions must be satisfied before workflow actions can be executed. The value is not case-sensitive.</p>
<p>The default value is **and ** (applies only to the English language version of SharePoint Foundation 2010).</p>
<p>**Example:**</p>
<p>DOCS-LESSTHANConditions And=&quot;and&quot;DOCS-GREATERTHAN</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Else**</p></td>
<td align="left"><p>Required **text**. The text that is defined in this attribute is displayed in the rule designer sentence when a conditional branch activity is added to the workflow. The value is not case-sensitive.</p>
<p>The default value is **Else if** (applies only to the English language version of SharePoint Foundation 2010).</p>
<p>**Example:**</p>
<p>DOCS-LESSTHANConditions Else=&quot;Else if&quot;DOCS-GREATERTHAN</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Not**</p></td>
<td align="left"><p>Required **text**. The text that is defined in this attribute is displayed in the rule designer sentence when the condition must not contain a specified value or range of values. This value is not case-sensitive.</p>
<p>The default value is **Not**.</p>
<p>**Example**:</p>
<p>DOCS-LESSTHANConditions Not=&quot;not&quot;DOCS-GREATERTHAN</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Or**</p></td>
<td align="left"><p>Required **text**. The text that is defined in this attribute is displayed in the rule designer sentence when there are two or more conditions in the same conditional branch and any value will satisfy the conditions, allowing the workflow actions to execute. The value is not case-sensitive.</p>
<p>The default value is **or** (applies only to the English language version of SharePoint Foundation 2010).</p>
<p>Example:</p>
<p>DOCS-LESSTHANConditions Or=&quot;or&quot;DOCS-GREATERTHAN</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**When**</p></td>
<td align="left"><p>Required **text</span>. The text that is defined in this attribute is displayed in the rule designer sentence when a conditional branch is added that requires the values or conditions that follow it to return **true** for the workflow actions to execute. The value is not case-sensitive.</p>
<p>The default value is **If** (applies only to the English language version of SharePoint Foundation 2010).</p>
<p>**Example:**</p>
<p>DOCS-LESSTHANConditions When=&quot;If&quot;DOCS-GREATERTHAN</p></td>
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
<td align="left"><p><a href="default-element-workflowinfo.md">Default</a></p>
<p><a href="condition-element-workflowinfo.md">Condition</a></p></td>
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
<td align="left"><p><a href="workflowinfo-element-workflowinfo.md">WorkflowInfo</a></p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Each **Conditions** element can occur only once
in an .ACTIONS file.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example demonstrates how to format the <span
class="keyword">Conditions</span> element so that the individual <span
class="keyword">Condition</span> elements that it contains are displayed
in the workflow editor.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <WorkflowInfo Language="en-us">
       <Conditions And="and" Or="or" Not="not" When="If" Else="Else if">
          <Condition>…</Condition>
          <Default>…</Default>
       </Conditions>
       <Actions>…</Actions>
    </WorkflowInfo>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[Creating Declarative, No-Code Workflow
Editors](http://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx)

[Workflow Actions Schema
Overview](http://msdn.microsoft.com/library/25da07cb-b228-43f2-9cdf-c8c71c3eabbb(Office.15).aspx)

[WorkflowInfo Element](workflowinfo-element-workflowinfo.md)








