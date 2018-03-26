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
<td align="left"># Condition Element (WorkflowInfo)</td>
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
SharePoint Online | SharePoint Server 2013*

Represents a **Condition** statement, which is
part of a rule sentence that can be displayed in a declarative,
rules-based, code-free workflow editor, such as Microsoft SharePoint
Designer 2010.

When a workflow is triggered by an event that corresponds to a
SharePoint list or document library item in Microsoft SharePoint
Foundation 2010, it is often necessary to evaluate what workflow action
should be taken or if an action is required. A <span
class="keyword">Condition</span> element allows the workflow to perform
this evaluation with the values and arguments that are provided to it by
the workflow editor.

Each **Condition** element also corresponds to
a **Boolean** method inside a specified
SharePoint Foundation 2010 workflow library. These methods are used to
evaluate values passed by their parameters and return either <span
class="keyword">true</span> or **false**.

A **Condition** element contains information
about the Microsoft .NET assembly where the <span
class="keyword">Condition</span> code is implemented, and also the
parameters that are required to make the function call. It also contains
information about how the **Condition**
statement should be displayed to the workflow editor.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;WorkflowInfo&gt;
      &lt;Conditions&gt;
            &lt;Condition&gt;
               &lt;RuleDesigner&gt;…&lt;/RuleDesigner&gt;
               &lt;Paramaters&gt;…&lt;/Parameters&gt;
            &lt;/Condition&gt;
            &lt;Default&gt;…&lt;/Default&gt;
      &lt;/Conditions&gt;
      &lt;Action&gt;…&lt;/Actions&gt;
&lt;/WorkflowInfo&gt;</code></pre></td>
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
<td align="left"><p>**AppliesTo**</p></td>
<td align="left"><p>Required **text**. Specifies that the conditional statement that is being evaluated is applied to a SharePoint list or document library. By changing the value, you can show or hide a specific condition statement in the workflow editor, depending on the type of SharePoint list that the workflow is associated with.</p>
<p>The following values are not case-sensitive:</p>
<ul>
<li><p>**all**   Specifies that a condition statement is available to all list and document library types.</p></li>
<li><p>**doclib**   Specifies that a condition statement is visible to the workflow editor only when the workflow is associated with a document library. If the workflow is associated with any other type of list, the condition statement is hidden from the workflow editor.</p></li>
<li><p>**list**   Specifies that a condition statement is visible to the workflow editor only when the workflow is associated with a SharePoint list. If the workflow is associated with any type other than a list type, the condition statement is hidden from the workflow editor.</p></li>
<li><p>**none**   Specifies that a condition statement is hidden from the workflow editor.</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**Assembly**</p></td>
<td align="left"><p>Required **text</span>. Specifies the .NET assembly that contains the implementation code for the <span class="keyword">Condition** element.</p>
<p>Value type: **String**.</p>
<p>Specifies the .NET assembly that contains the workflow code. The format should be as follows:</p>
<p>Assembly name, Version, Culture, PublicKeyToken</p>
<p><strong>Example:</strong></p>
<p>Assembly=&quot;Microsoft.SharePoint.WorkflowActions,</p>
<p>                Version=12.0.0.0,</p>
<p>                Culture=neutral,</p>
<p>                PublicKeyToken= 71e9bce111e9429c&quot;</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ClassName**</p></td>
<td align="left"><p>Required **text</span>. Contains the fully qualified class name in which the <span class="keyword">Condition** element code is implemented.</p>
<p>Value type: **String**.</p>
<p>Fully qualified class name in which the custom **Condition** element code is implemented.</p>
<p><strong>Example:</strong></p>
<p>**XML**:</p>
<p>ClassName=&quot;**Microsoft.SharePoint.WorkflowActions.Helper**&quot;</p></td>
</tr>
<tr class="even">
<td align="left"><p>**FunctionName**</p></td>
<td align="left"><p>Required **text</span>. Name of the <span class="keyword">Boolean</span> method in the class that implements the <span class="keyword">Condition** code.</p>
<p>Value type: **String**.</p>
<p>Represents the method name in the class in which the **Condition** element code is implemented.</p>
<p>**Example method**:</p>
<p><span class="code">Bool myCondition(WorkflowContext context, string ListGUIDorName, int ItemWorkflowAttachedTo)</span></p>
<p>**XML**:</p>
<p>FunctionName=&quot;myCondition&quot;</p></td>
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
<td align="left"><p>Optional **text</span>. Specifies whether the <span class="keyword">Condition</span> element is <span class="keyword">Custom</span> or <span class="keyword">Advanced**.</p>
<p>The following values are not case-sensitive:</p>
<ul>
<li><p>**Custom**   Used to compare a value found in the current SharePoint list or document library item to a value specified by the workflow designer.</p></li>
<li><p>**Advanced</span>   Used to indicate that a <span class="keyword">Condition** can be used to compare two values of any type (for example, text, integers, and dates).</p></li>
</ul></td>
</tr>
<tr class="even">
<td align="left"><p>**UsesCurrentItem**</p></td>
<td align="left"><p>Optional **Boolean**. Specifies that the item currently selected is associated with the workflow.</p>
<p>Value type: **Boolean**.</p>
<p>If set to **true</span>, the workflow binds to the SharePoint list item or document library item that started the workflow instance. When using a declarative, code-free workflow editor, this value always returns <span class="keyword">true **and cannot be changed.</p></td>
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
<td align="left"><p><a href="ruledesigner-element-workflowinfo.htm">RuleDesigner</a></p>
<p><a href="parameters-element-workflowinfo.htm">Parameters</a></p></td>
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
<td align="left"><p><a href="930e0d1c-a01a-4557-a58b-209621f1632e.htm">Conditions</a></p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example shows how to expose a <span
class="keyword">Condition</span> element to the code-free editor during
the workflow design process.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
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


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Other resources

[Conditions
Element](http://msdn.microsoft.com/library/e930e0d1c-a01a-4557-a58b-209621f1632e(Office.15).aspx)

[Workflow Actions Schema
Overview](http://msdn.microsoft.com/library/25da07cb-b228-43f2-9cdf-c8c71c3eabbb(Office.15).aspx)

[Creating Declarative, No-Code Workflow
Editors](http://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx)

[Workflow Actions Schema
Overview](http://msdn.microsoft.com/library/25da07cb-b228-43f2-9cdf-c8c71c3eabbb(Office.15).aspx)








