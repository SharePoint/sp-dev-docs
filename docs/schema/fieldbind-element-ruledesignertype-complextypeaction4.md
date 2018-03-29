---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 7fbdbd63-d0b4-d888-9f7c-e9f029f87478
---

![Collapse
section]![Expand
section] "Expand section")![]()![])![]![]()![Copy
code] "Copy code")![Copy code
hover]( "Copy code hover")
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
<td align="left"># FieldBind element (ruleDesignerType complexType) (Action4)</td>
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

The **FieldBind** element is a child of the
**RuleDesigner** element. Used together, these
elements create a readable sentence that describes a condition that
needs to be evaluated or an activity that must be executed. These
elements can also be used to insert variables (such as hyperlinks)
within the sentence, so that the visual workflow designer can substitute
dynamic values into a workflow while it is running. The <span
class="keyword">FieldBind</span> element maps the inputs from the
workflow creator to parameters that are then passed to SharePoint
Foundation. Note that using custom designer types or custom field types
is not supported when creating workflows using SharePoint Designer.

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
    <RuleDesigner>
        <FieldBind>
            <Option />
            <DataSourceRef />
        </FieldBind>
    </RuleDesigner>


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
    <xs:element name="FieldBind" minOccurs="0" maxOccurs="unbounded">
               <xs:complexType>
               <xs:choice>
         <xs:element name="Option" minOccurs="0" maxOccurs="unbounded">
         <xs:attribute name="Name" type="s:string" use="required" />
         <xs:attribute name="Value" type="s:string" use="required" />
         <xs:attribute name="TypeFilter" type="s:string" />
         <xs:attribute name="UnaryHides" type="s:string" />
      </xs:element>  
         <xs:element name="DataSourceRef" minOccurs="1" maxOccurs="unbounded">
         <xs:attribute name="Ref" type="s:string" />
      </xs:element>  
           </xs:choice>
         <xs:attribute name="Field"   type="s:string" />
         <xs:attribute name="Text"   type="s:string"  />
         <xs:attribute name="Id" type="s:positiveInteger"  use="required"  />
         <xs:attribute name="DesignerType" type="s:string" use="required"  />
         <xs:attribute name="OperatorTypeFrom" type="s:string" />
         <xs:attribute name="TypeFrom"   type="s:string"  />
         <xs:attribute name="Function"   type="s:boolean" />
         <xs:attribute name="Value"   type="s:string" />
         <xs:attribute name="EventCategory"   type="s:string" />
         <xs:attribute name="DisplayName"   type="s:string" />
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
<td align="left"><p><a href="ruledesigner-element-flow-elementflows-elementworkflowinfo-elementaction4.htm">RuleDesigner</a></p></td>
<td align="left"><p><a href="ruledesignertype-complextype-action4.htm">ruleDesignerType</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="ruledesigner-element-defaultelementtype-complextypeaction4.htm">RuleDesigner</a></p></td>
<td align="left"><p><a href="ruledesignertype-complextype-action4.htm">ruleDesignerType</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="ruledesigner-element-action-elementactions-elementworkflowinfo-elementaction4.htm">RuleDesigner</a></p></td>
<td align="left"><p><a href="ruledesignertype-complextype-action4.htm">ruleDesignerType</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="ruledesigner-element-default-elementconditions-elementworkflowinfo-elementaction.htm">RuleDesigner</a></p></td>
<td align="left"><p><a href="ruledesignertype-complextype-action4.htm">ruleDesignerType</a></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p><a href="ruledesigner-element-condition-elementconditions-elementworkflowinfo-elementacti.htm">RuleDesigner</a></p></td>
<td align="left"><p><a href="ruledesignertype-complextype-action4.htm">ruleDesignerType</a></p></td>
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
<td align="left"><p><a href="datasourceref-element-fieldbind-elementruledesignertype-complextypeaction4.htm">DataSourceRef</a></p></td>
<td align="left"><p></p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p><a href="option-element-fieldbind-elementruledesignertype-complextypeaction4.htm">Option</a></p></td>
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
<td align="left"><p>DesignerType</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>Specifies the type of control or user input that is presented in the workflow editor user interface. If you do not specify a **DesignerType</span> attribute, the default is used. The default <span class="keyword">DesignerType** is a text box followed by an ellipsis button (...) and a lookup button.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>DisplayName</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The name of the designer type as rendered in the user interface.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>EventCategory</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>The category associated with the event; for example, **ListItemEvent</span> or <span class="keyword">ProjectEvent**.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Field</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Represents a **Parameter</span> element that is used to build a workflow. The <span class="keyword">Field</span> attribute maps directly to one or more <span class="keyword">Parameter** elements when a parameter type and direction are defined.</p>
<p>If you use more than one parameter for a given **Field</span> attribute, separate the parameter by using commas (for example, <span class="code">Field=&quot;Variable,ValueType&quot;**).</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Function</p></td>
<td align="left"><p>s:boolean</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>When set to **true</span>, this attribute inserts the name of the associate <span class="keyword">Action** method into the sentence.</p></td>
<td align="left"><p>Values of the s:boolean type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Id</p></td>
<td align="left"><p>s:positiveInteger</p></td>
<td align="left"><p>required</p></td>
<td align="left"><p>An integer that serves as a relational key to associate a **FieldBind</span> element with the <span class="keyword">Sentence</span> property of the parent <span class="keyword">RuleDesigner** element.</p></td>
<td align="left"><p>Values of the s:positiveInteger type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>OperatorTypeFrom</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies the types of operators that are available to the user, based on the Microsoft .NET data type listed in the corresponding **Parameter</span> element. The parameter that is specified for the <span class="keyword">OperatorTypeFrom</span> attribute can be different from the parameter that is listed in the <span class="keyword">Field** attribute.</p>
<div class="alert">
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
<td align="left"><p>This attribute is used only when the **DesignerType</span> attribute is set to <span class="keyword">Operator**.</p></td>
</tr>
</tbody>
</table>
</div></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Text</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Text displayed to the user as a hyperlink in the condition sentence.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>TypeFrom</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Specifies the .NET data types that are valid for use with an instance of the **FieldBind</span> element. This attribute is associated with the <span class="keyword">Parameter** element that contains the type definition.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Value</p></td>
<td align="left"><p>s:string</p></td>
<td align="left"><p>optional</p></td>
<td align="left"><p>Reserved for future use.</p></td>
<td align="left"><p>Values of the s:string type.</p></td>
</tr>
</tbody>
</table>








