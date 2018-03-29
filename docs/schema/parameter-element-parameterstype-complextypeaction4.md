---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 1a694945-69a8-57b5-c3aa-f8c2edca165c
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
<td align="left"># Parameter element (parametersType complexType) (Action4)</td>
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

Used to describe the input and output parameters for a method call to a
custom **Action** or <span
class="keyword">Condition</span>. The Parameter element is of type
[parametersType](parameterstype-complextype-action4.md).

**Last modified:** March 09, 2015

**Applies to**: SharePoint Server 2013


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <Parameters>
        <Parameter />
    </ Parameters >


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
code] "Copy code")Copy code</span>
    <xs:element name="Parameter" minOccurs="0" maxOccurs="unbounded">
         <xs:attribute name="Name" type="s:string" use="required" />
         <xs:attribute name="Type" type="s:string" use="required" />
         <xs:attribute name="Direction" type="s:string" use="required" />
         <xs:attribute name="Description" type="s:string" />
         <xs:attribute name="DesignerType" type="s:string" />
         <xs:attribute name="ShowLookupForDropdown" type="s:boolean" />
         <xs:attribute name="DisplayName" type="s:string" />
         <xs:attribute name="InitialValue" type="s:string" />
         <xs:attribute name="InitialBinding" type="s:string" />
         <xs:attribute name="EventCategory" type="s:string" />
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
<td align="left"><p><a href="parameters-element-flow-elementflows-elementworkflowinfo-elementaction4.md">Parameters</a></p></td>
<td align="left"><p><a href="parameterstype-complextype-action4.md">parametersType</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="parameters-element-action-elementactions-elementworkflowinfo-elementaction4.md">Parameters</a></p></td>
<td align="left"><p><a href="parameterstype-complextype-action4.md">parametersType</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="parameters-element-condition-elementconditions-elementworkflowinfo-elementaction.md">Parameters</a></p></td>
<td align="left"><p><a href="parameterstype-complextype-action4.md">parametersType</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

### Child elements

None.

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
<td align="left"><p>Description</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies the text to display when the parameter is selected in a grid matching parameters names with current values.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>DesignerType</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies the possible interface elements to use when editing the value of a parameter.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Direction</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Specifies an input or output parameter. Valid values are In, Out, and Optional. Values are not case-sensitive.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>DisplayName</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies the name to display when showing the parameter in a grid structure matching names of parameters with their current values.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>EventCategory</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The category to which the event belongs; for example, ListItemEvent or ProjectEvent.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>InitialBinding</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies the default variable to use for the parameter when creating a new condition or action that contains the parameter.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>InitialValue</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Used to specify the default initial value that is passed to the parameter. Values are not case-sensitive.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Name</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Used to associate the **FieldBind** element with the parameter. Values are not case-sensitive.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ShowLookupForDropdown</p></td>
<td align="left"><p>s:boolean</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies whether a lookup button is displayed for a drop-down list.</p></td>
<td align="left"><p>Values of the s:boolean type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Type</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Partially qualified Microsoft .NET data type. Values are not case-sensitive. For example: System.Object, mscorlib</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
</tbody>
</table>








