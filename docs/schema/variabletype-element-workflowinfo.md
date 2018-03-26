---


manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 4941218a-f3bf-4671-a3ba-9247ca1465e0
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
<td align="left"># VariableType Element (WorkflowInfo)</td>
</tr>
<tr class="odd">
<td align="left"><a href="#seeAlsoToggle">See also</a>  <span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

Specifies a type that can be used for local variables in the workflow.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;VariableTypes&gt;
    &lt;VariableType&gt;    &lt;/VariableType&gt;
&lt;/VariableTypes&gt;</code></pre></td>
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
<td align="left"><p>Required **text**. Specifies the variable type name.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**DisplayName**</p></td>
<td align="left"><p>Required **text**. Specifies the display name of the type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Assembly**</p></td>
<td align="left"><p>Optional **text</span>. Specifies the binary file that defines the class specified by <span class="parameter" sdata="paramReference">Type**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**CoercionActivity**</p></td>
<td align="left"><p>Required **text</span>. Identifies a class that can convert values of any type into the type specified by <span class="parameter" sdata="paramReference">Type**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Default**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">true</span> to use this type as the default variable type; otherwise, <span class="keyword">false**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**ItemIdType**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">true</span> to use this type as the type for identifying list items in lists; otherwise, <span class="keyword">false**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Hidden**</p></td>
<td align="left"><p>Optional **Boolean</span>. <span class="keyword">true</span> to hide the display of the type name; otherwise, <span class="keyword">false**.</p></td>
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
<td align="left"><p><a href="variabletypes-element-workflowinfo.htm">VariableTypes</a></p></td>
</tr>
</tbody>
</table>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Tasks

[.ACTIONS File Example](actions-file-example-workflowinfo.htm)

#### Concepts

[Default Workflow Actions](default-workflow-actions-workflowinfo.htm)

[Default Workflow Conditions](default-workflow-conditions-workflowinfo.htm)

#### Other resources

[Creating Declarative, No-Code Workflow
Editors](http://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx)

[Workflow Actions Schema
Overview](http://msdn.microsoft.com/library/25da07cb-b228-43f2-9cdf-c8c71c3eabbb(Office.15).aspx)








