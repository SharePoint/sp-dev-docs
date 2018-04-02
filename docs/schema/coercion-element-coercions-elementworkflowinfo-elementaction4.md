---


manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 334e3037-6f5c-01b2-ed1a-6f568087f196
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
<td align="left"># Coercion element (Coercions element) (WorkflowInfo element) (Action4)</td>
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

Specifies a coercion for converting data from one form to another.

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
    <Coercions>
        <Coercion />
    </Coercions>

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


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <xs:element name="Coercion"      minOccurs="0"     maxOccurs="unbounded"    >
               <xs:complexType>
               <xs:all>
         <xs:element name="Parameters"      type="coercionParametersType" minOccurs="0"     maxOccurs="1"    >
      </xs:element>  
           </xs:all>
         <xs:attribute name="Name"   type="s:string"      use="required"     />
         <xs:attribute name="Assembly"   type="s:string"     />
         <xs:attribute name="DisplayName"   type="s:string"      use="required"     />
         <xs:attribute name="CatchAll"   type="s:boolean"      use="required"     />
         <xs:attribute name="RankDefault"   type="s:integer"      use="required"     />
         <xs:attribute name="SourceType"   type="s:string"     />
         <xs:attribute name="SourceFieldType"   type="s:string"     />
         <xs:attribute name="DestinationType"   type="s:string"      use="required"     />
         <xs:attribute name="DestinationFieldType"   type="s:string"     />
         <xs:attribute name="ClassName"   type="s:string"      use="required"     />
         <xs:attribute name="Id"   type="s:string"      use="required"     />
         <xs:attribute name="SourceProperty"   type="s:string"      use="required"     />
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
<td align="left"><p><a href="coercions-element-workflowinfo-elementaction4.md">Coercions</a></p></td>
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
<td align="left"><p><a href="parameters-element-coercion-elementcoercions-elementworkflowinfo-elementaction4.md">Parameters</a></p></td>
<td align="left"><p><a href="coercionparameterstype-complextype-action4.md">coercionParametersType</a></p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p>Assembly</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies the binary file in which the coercion is implemented.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>CatchAll</p></td>
<td align="left"><p>s:boolean</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Set to **true</span> to show the coercion in scenarios in which either the <span class="parameter" sdata="paramReference">DestinationType</span> or the <span class="parameter" sdata="paramReference">DestinationFieldType</span> allows it, regardless of <span class="parameter" sdata="paramReference">SourceType</span> or <span class="parameter" sdata="paramReference">SourceFieldType</span> values. Set to **false</span> to show the coercion only in scenarios in which <span class="parameter" sdata="paramReference">SourceType</span> or <span class="parameter" sdata="paramReference">SourceFieldType** specifies that it should be shown.</p></td>
<td align="left"><p>Values of the s:boolean type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ClassName</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Uniquely identifies the class in the binary file that is specified by the <span class="parameter" sdata="paramReference">Assembly</span> value.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>DestinationFieldType</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The output field type of the coercion. If the destination cannot handle this type, the coercion is not displayed.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>DestinationType</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The output class type of the coercion value. If the destination cannot handle this type, the coercion is not displayed.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>DisplayName</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Specifies the display name of the coercion.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Id</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Unique guid identifier of the coercion.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The internal name for the coercion.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>RankDefault</p></td>
<td align="left"><p>s:integer</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Specifies a sort value for the list of coercions.</p></td>
<td align="left"><p>Values of the s:integer type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>SourceFieldType</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The field type to use to determine whether to show the coercion. If set, the client shows the coercion only when the previous value is of the matching type unless SourceFieldType or CatchAll specifies otherwise.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>SourceProperty</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The name of the argument in the activity that is to be used to bind to the input.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>SourceType</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>A class type from which the data is converted. If set, the client shows the coercion only when the previous value is of the matching type unless <span class="parameter" sdata="paramReference">SourceFieldType</span> or <span class="parameter" sdata="paramReference">CatchAll</span> specifies otherwise.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
</tbody>
</table>


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

In the following example coercion definition, the coercion with the name
"AsDNGuidFromString" will use the activity <span
class="keyword">Microsoft.Activities.Expressions.ParseGuid</span> and
the **ParseGuid.Value**<span class="parameter"
sdata="paramReference">InArgument</span> to accept input from other
activities.

<span codelanguage="other"></span>
 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>

       <Coercion Name="AsDNGuidFromString"
          DisplayName="As Guid"
          CatchAll="false"
          RankDefault="21"
          SourceType="System.String"
          DestinationType="System.Guid"
          Id="6682B03F-170A-461B-8DFB-D668A1C4220A"
          ClassName="Microsoft.Activities.Expressions.ParseGuid"
          Assembly="Microsoft.Activities, Version=2.0.0.0,
              Culture=neutral, PublicKeyToken=31bf3856ad364e35"
          SourceProperty="Value">








