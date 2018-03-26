---


manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 76f59dcd-23bc-2ecf-5165-3bf662f3fc5b
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
<td align="left"># WorkflowInfo element (Action4)</td>
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

The root element of the Actions schema. This element must be included in
any .ACTIONS file that is installed on the server.

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
    <WorkflowInfo>
        <Conditions />
        <Actions />
        <CompositeSteps />
        <VariableTypes />
        <AssemblyRedirects />
        <Coercions />
        <Events />
        <Flows />
        <Blocks />
    </WorkflowInfo>


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
    <xs:element name="WorkflowInfo" >
               <xs:complexType>
               <xs:all>
         <xs:element name="Conditions" minOccurs="0" maxOccurs="1">
               <xs:complexType>
               <xs:sequence>
         <xs:element name="Default" minOccurs="0" maxOccurs="1">
               <xs:complexType>
               <xs:sequence>
         <xs:element name="RuleDesigner" type="ruleDesignerType">
      </xs:element>  
           </xs:sequence>
         <xs:attribute name="ItemKeyType" type="s:string" />
           </xs:complexType>
      </xs:element>  
         <xs:element name="Condition" minOccurs="0" maxOccurs="unbounded">
               <xs:complexType>
               <xs:all>
         <xs:element name="RuleDesigner" type="ruleDesignerType" minOccurs="1"     maxOccurs="1">
      </xs:element>  
         <xs:element name="Parameters" type="parametersType" minOccurs="1"     maxOccurs="1">
      </xs:element>  
           </xs:all>
         <xs:attribute name="Type" type="s:string" />
         <xs:attribute name="Name" type="s:string" use="required" />
         <xs:attribute name="AppliesTo" type="appliesToTypes" use="required" />
         <xs:attribute name="UsesCurrentItem" type="s:boolean" />
         <xs:attribute name="ItemKeyType" type="s:string" />
         <xs:attribute name="FunctionName" type="s:string" />
         <xs:attribute name="Assembly" type="s:string" />
         <xs:attribute name="ClassName" type="s:string" />
         <xs:attribute name="ShapeImageUrl" type="s:string" />
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
         <xs:element name="Actions"      minOccurs="0"     maxOccurs="1"    >
               <xs:complexType>
               <xs:sequence>
         <xs:element name="Default"      type="defaultElementType" minOccurs="0"     maxOccurs="1"    >
      </xs:element>  
         <xs:element name="Action"      minOccurs="0"     maxOccurs="unbounded"    >
               <xs:complexType>
               <xs:all>
         <xs:element name="Parameters"      type="parametersType" minOccurs="0"     maxOccurs="1"    >
      </xs:element>  
         <xs:element name="RuleDesigner"      type="ruleDesignerType" minOccurs="1"     maxOccurs="1"    >
      </xs:element>  
         <xs:element name="DataSources"      type="dataSourcesType" minOccurs="0"     maxOccurs="1"    >
      </xs:element>  
         <xs:element name="Modifications"      minOccurs="0"     maxOccurs="1"    >
               <xs:complexType>
               <xs:sequence>
         <xs:element name="Modification"      minOccurs="1"     maxOccurs="unbounded"    >
         <xs:attribute name="TypeId"   type="s:string"      use="required"     />
         <xs:attribute name="NameFormat"   type="s:string"      use="required"     />
         <xs:attribute name="FormURN"   type="s:string"      use="required"     />
      </xs:element>  
           </xs:sequence>
           </xs:complexType>
      </xs:element>  
         <xs:element name="ActionVariables"      minOccurs="0"     maxOccurs="1"    >
               <xs:complexType>
               <xs:sequence>
         <xs:element name="ActionVariables"     >
      </xs:element>  
           </xs:sequence>
           </xs:complexType>
      </xs:element>  
         <xs:element name="ActionBody"      minOccurs="0"     maxOccurs="1"    >
               <xs:complexType>
               <xs:sequence>
         <xs:element name="ActionBody"     >
      </xs:element>  
           </xs:sequence>
           </xs:complexType>
      </xs:element>  
         <xs:element name="ActionConditions"      minOccurs="0"     maxOccurs="1"    >
               <xs:complexType>
               <xs:sequence>
         <xs:element name="ActionConditions"     >
      </xs:element>  
           </xs:sequence>
           </xs:complexType>
      </xs:element>  
           </xs:all>
         <xs:attribute name="Name"   type="s:string"      use="required"     />
         <xs:attribute name="ClassName"   type="s:string"      use="required"     />
         <xs:attribute name="Assembly"   type="s:string"     />
         <xs:attribute name="FunctionName"   type="s:string"     />
         <xs:attribute name="Category"   type="s:string"     />
         <xs:attribute name="CreatesTask"   type="s:boolean"     />
         <xs:attribute name="CreatesInList"   type="s:string"     />
         <xs:attribute name="AppliesTo"   type="appliesToTypes"      use="required"     />
         <xs:attribute name="IsError"   type="s:boolean"     />
         <xs:attribute name="ListModeration"   type="s:boolean"     />
         <xs:attribute name="UsesCurrentItem"   type="s:boolean"     />
         <xs:attribute name="CreatedTaskFormType"   type="s:string"     />
         <xs:attribute name="__SolutionId"   type="s:string"     />
         <xs:attribute name="SandboxedFunction"   type="s:boolean"     />
         <xs:attribute name="ShapeImageUrl"   type="s:string"     />
           </xs:complexType>
      </xs:element>  
           </xs:sequence>
         <xs:attribute name="Sequential"   type="s:string"     />
         <xs:attribute name="Parallel"   type="s:string"     />
           </xs:complexType>
      </xs:element>  
         <xs:element name="CompositeSteps"      minOccurs="0"     maxOccurs="1"    >
               <xs:complexType>
               <xs:sequence minOccurs="0" maxOccurs="unbounded">
         <xs:element name="CompositeStep"     >
               <xs:complexType>
               <xs:sequence>
         <xs:element name="DataSources"      type="dataSourcesType" minOccurs="0"     maxOccurs="1"    >
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
           </xs:sequence>
           </xs:complexType>
      </xs:element>  
         <xs:element name="VariableTypes"      minOccurs="0"     maxOccurs="1"    >
               <xs:complexType>
               <xs:sequence minOccurs="0" maxOccurs="unbounded">
         <xs:element name="VariableType"     >
         <xs:attribute name="Type"   type="s:string"      use="required"     />
         <xs:attribute name="DisplayName"   type="s:string"      use="required"     />
         <xs:attribute name="Assembly"   type="s:string"     />
         <xs:attribute name="Default"   type="s:boolean"     />
         <xs:attribute name="ItemIdType"   type="s:boolean"     />
         <xs:attribute name="Hidden"   type="s:boolean"     />
      </xs:element>  
           </xs:sequence>
           </xs:complexType>
      </xs:element>  
         <xs:element name="AssemblyRedirects"      minOccurs="0"     maxOccurs="1"    >
               <xs:complexType>
               <xs:sequence minOccurs="0" maxOccurs="unbounded">
         <xs:element name="AssemblyRedirect"     >
         <xs:attribute name="From"   type="s:string"      use="required"     />
         <xs:attribute name="To"   type="s:string"      use="required"     />
      </xs:element>  
           </xs:sequence>
           </xs:complexType>
      </xs:element>  
         <xs:element name="Coercions"      minOccurs="0"     maxOccurs="1"    >
               <xs:complexType>
               <xs:sequence minOccurs="0" maxOccurs="unbounded">
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
           </xs:sequence>
           </xs:complexType>
      </xs:element>  
         <xs:element name="Events"      minOccurs="0"     maxOccurs="1"    >
               <xs:complexType>
               <xs:sequence>
         <xs:element name="Event"      minOccurs="0"     maxOccurs="unbounded"    >
         <xs:attribute name="Name"   type="s:string"      use="required"     />
         <xs:attribute name="DisplayName"   type="s:string"      use="required"     />
         <xs:attribute name="EventGroup"   type="s:string"      use="required"     />
         <xs:attribute name="Category"   type="s:string"      use="required"     />
         <xs:attribute name="RankDefault"   type="s:string"      use="required"     />
      </xs:element>  
           </xs:sequence>
           </xs:complexType>
      </xs:element>  
         <xs:element name="Flows"      minOccurs="0"     maxOccurs="1"    >
               <xs:complexType>
               <xs:sequence>
         <xs:element name="Flow"      minOccurs="0"     maxOccurs="unbounded"    >
               <xs:complexType>
               <xs:sequence>
         <xs:element name="RuleDesigner"      type="ruleDesignerType" minOccurs="1"     maxOccurs="1"    >
      </xs:element>  
         <xs:element name="Parameters"      type="parametersType" minOccurs="1"     maxOccurs="1"    >
      </xs:element>  
           </xs:sequence>
         <xs:attribute name="Name"   type="s:string"      use="required"     />
         <xs:attribute name="Category"   type="s:string"      use="required"     />
           </xs:complexType>
      </xs:element>  
           </xs:sequence>
           </xs:complexType>
      </xs:element>  
         <xs:element name="Blocks"      minOccurs="0"     maxOccurs="1"    >
               <xs:complexType>
               <xs:sequence>
         <xs:element name="Block"      type="propertiesType" minOccurs="0"     maxOccurs="unbounded"    >


      </xs:element>  
           </xs:sequence>
           </xs:complexType>
      </xs:element>  
           </xs:all>
         <xs:attribute name="Language"   type="s:string"     />
           </xs:complexType>
      </xs:element>  


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

If the schema defines specific requirements, such as **sequence**, **minOccurs**, **maxOccurs**, and **choice**, see the definition section.
class="keyword">sequence</span>, **minOccurs**,
**maxOccurs**, and <span
class="keyword">choice</span>, see the definition section.

### Parent elements

None.

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
<td align="left"><p><a href="actions-element-workflowinfo-elementaction4.htm">Actions</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="assemblyredirects-element-workflowinfo-elementaction4.htm">AssemblyRedirects</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="blocks-element-workflowinfo-elementaction4.htm">Blocks</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="coercions-element-workflowinfo-elementaction4.htm">Coercions</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="compositesteps-element-workflowinfo-elementaction4.htm">CompositeSteps</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="conditions-element-workflowinfo-elementaction4.htm">Conditions</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="events-element-workflowinfo-elementaction4.htm">Events</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="flows-element-workflowinfo-elementaction4.htm">Flows</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="variabletypes-element-workflowinfo-elementaction4.htm">VariableTypes</a></p></td>
<td align="left"><p></p></td>
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
<td align="left"><p>Language</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Refers to the language of the server, not the client. This is notated as a language/culture pair. For example &quot;en-us&quot; is used to specify &quot;English-United States. For more information, see <a href="http://msdn.microsoft.com/en-us/library/dd318693.aspx">Language Identifier Constants and Strings</a>.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
</tbody>
</table>








