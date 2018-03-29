---


manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 4d132d2f-d222-d59d-6cf9-c1199df236db
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
<td align="left"># CompositeStep element (CompositeSteps element) (WorkflowInfo element) (Action4)</td>
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

Represents a single step in a composite workflow activity.

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
    <CompositeStep>
        <DataSources />
    </CompositeStep>


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
    <xs:element name="CompositeStep">
               <xs:complexType>
               <xs:sequence>
         <xs:element name="DataSources"  type="dataSourcesType" minOccurs="0"  maxOccurs="1">

      </xs:element>  
           </xs:sequence>
         <xs:attribute name="Name"   type="s:string"      use="required"     />
         <xs:attribute name="ClassName"   type="s:string"      use="required"     />
         <xs:attribute name="Assembly"   type="s:string"      use="required"     />
         <xs:attribute name="AppliesTo"   type="appliesToTypes"      use="required"     />
         <xs:attribute name="Order"   type="s:nonNegativeInteger"     />
         <xs:attribute name="Description"   type="s:string"     />
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
<td align="left"><p><a href="compositesteps-element-workflowinfo-elementaction4.md">CompositeSteps</a></p></td>
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
<td align="left"><p><a href="datasources-element-compositestep-elementcompositesteps-elementworkflowinfo-elem.md">DataSources</a></p></td>
<td align="left"><p><a href="datasourcestype-complextype-action4.md">dataSourcesType</a></p></td>
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
<td align="left"><p>AppliesTo</p></td>
<td align="left"><p><a href="appliestotypes-simpletype-action4.md">appliesToTypes</a></p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Indicates whether this step should be available for lists, document libraries, or both. Valid values include <strong>list</strong>, <strong>doclib</strong>, and <strong>all</strong>.</p></td>
<td align="left"><p>Values of the appliesToTypes type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Assembly</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Specifies the binary file in which the step is implemented.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ClassName</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Uniquely identifies the class in the binary file specified by the <span class="parameter" sdata="paramReference">Assembly</span> attribute.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Description</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Provides additional information about the step.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Name</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>The localized name of the step.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Order</p></td>
<td align="left"><p>s:nonNegativeInteger</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies the sort order of elements in the step.</p></td>
<td align="left"><p>Values of the s:nonNegativeInteger type.</p></td>
</tr>
</tbody>
</table>








