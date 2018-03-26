---


manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: c9b3ceac-85d2-7b04-5b1b-f16f154de9f3
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
<td align="left"># Conditions element (WorkflowInfo element) (Action4)</td>
</tr>
<tr class="odd">
<td align="left"><span id="headfeedbackarea" class="feedbackhead"><a href="javascript:SubmitFeedback(&#39;docthis@Microsoft.com&#39;,&#39;&#39;,&#39;&#39;,&#39;&#39;,&#39;1.0.18082.1225&#39;,&#39;%0\dThank%20you%20for%20your%20feedback.%20The%20developer%20writing%20teams%20use%20your%20feedback%20to%20improve%20documentation.%20While%20we%20are%20reviewing%20your%20feedback,%20we%20may%20send%20you%20e-mail%20to%20ask%20for%20clarification%20or%20feedback%20on%20a%20solution.%20We%20do%20not%20use%20your%20e-mail%20address%20for%20any%20other%20purpose%20and%20we%20delete%20it%20after%20we%20finish%20our%20review.%0\AFor%20further%20information%20about%20the%20privacy%20policies%20of%20Microsoft,%20please%20see%20http://privacy.microsoft.com/en-us/default.aspx.%0\A%0\d&#39;,&#39;Customer%20feedback&#39;);">Send feedback</a></span></td>
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

In the workflow rule designer, represent corresponding, underlying
functions that are used to evaluate workflow conditions, and which
return **Boolean** values that represent the
outcome of the evaluations. The parent container element for all <span
class="keyword">Condition</span> elements.

**Last modified:** March 09, 2015

**Applies to**: SharePoint Server 2013


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
       <Conditions>
          <Condition />
          <Default />
       </Conditions>


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <xs:element name="Conditions" minOccurs="0" maxOccurs="1">
               <xs:complexType>
               <xs:sequence>
         <xs:element name="Default"   minOccurs="0"   maxOccurs="1" >
               <xs:complexType>
               <xs:sequence>
         <xs:element name="RuleDesigner"      type="ruleDesignerType">
      </xs:element>  
           </xs:sequence>
         <xs:attribute name="ItemKeyType"   type="s:string" />
           </xs:complexType>
      </xs:element>  
         <xs:element name="Condition"  minOccurs="0"  maxOccurs="unbounded">
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
           </xs:sequence>
         <xs:attribute name="And"   type="s:string"     />
         <xs:attribute name="Or"   type="s:string"     />
         <xs:attribute name="When"   type="s:string"     />
         <xs:attribute name="Else"   type="s:string"     />
         <xs:attribute name="Not"   type="s:string"     />
           </xs:complexType>
      </xs:element>  


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.
class="keyword">sequence</span>, **minOccurs**,
**maxOccurs**, and <span
class="keyword">choice</span>, see the definition section.

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
<td align="left"><p><a href="workflowinfo-element-action4.htm">WorkflowInfo</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p><a href="condition-element-conditions-elementworkflowinfo-elementaction4.htm">Condition</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="default-element-conditions-elementworkflowinfo-elementaction4.htm">Default</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Attributes

<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><img src="../icons/alert_note.gif" title="Note" alt="Note" /><strong>Note</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>The attributes listed in the following table are only read from the default ACTIONS file and cannot be overridden in any custom .ACTIONS file.</p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p>**And**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Displayed in the rule designer sentence when two or more conditions are used in the same conditional branch, and when all conditions must be satisfied before workflow actions can be executed. The value is not case-sensitive.</p>
<p>The default value is **and** (applies only to the English language version of SharePoint).</p>
<p><span class="label">Example:</span><span class="code">&lt;Conditions And=&quot;and&quot;&gt;</span></p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Else**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The text that is defined in this attribute is displayed in the rule designer sentence when a conditional branch activity is added to the workflow. The value is not case-sensitive.</p>
<p>The default value is **Else if** (applies only to the English language version of SharePoint).</p>
<p><span class="label">Example:</span><span class="code">&lt;Conditions Else=&quot;Else if&quot;&gt;</span></p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Not**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The text that is defined in this attribute is displayed in the rule designer sentence when there are two or more conditions in the same conditional branch and any value will satisfy the conditions, allowing the workflow actions to execute. The value is not case-sensitive. The default value is **not**.</p>
<p><span class="label">Example:</span><span class="code">&lt;Conditions Not=&quot;not&quot;&gt;</span></p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Or**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The text that is defined in this attribute is displayed in the rule designer sentence when there are two or more conditions in the same conditional branch and any value will satisfy the conditions, allowing the workflow actions to execute. The value is not case-sensitive. The default value is **or**.</p>
<p><span class="label">Example:</span><span class="code">&lt;Conditions Or=&quot;or&quot;&gt;</span></p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**When**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The text that is defined in this attribute is displayed in the rule designer sentence when a conditional branch is added that requires the values or conditions that follow it to return **true</span> for the workflow actions to execute. The value is not case-sensitive. The default value is <span class="keyword">If**.</p>
<p><span class="label">Example:</span><span class="code">&lt;Conditions When=&quot;If&quot;&gt;</span></p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
</tbody>
</table>








