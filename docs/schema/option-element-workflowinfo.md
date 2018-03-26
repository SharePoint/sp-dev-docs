---


manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: c82dc727-b3e1-4c1b-80c4-a9d689795eaa
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
<td align="left"># Option Element (WorkflowInfo)</td>
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

Used to populate **DesignerType** drop-down
list box controls that are not data bound. <span
class="keyword">Option</span> elements contain text and value pairs that
can be used to build a workflow sentence. They also contain information
about their Microsoft .NET data types.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;RuleDesigner&gt;
  &lt;FieldBind&gt;
        &lt;Option /&gt;
  &lt;/FieldBind&gt;
&lt;/RuleDesigner&gt;</code></pre></td>
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
<td align="left"><p>**Name**</p></td>
<td align="left"><p>**String**. The value that is displayed in the drop-down list box control.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**TypeFilter**</p></td>
<td align="left"><p>**String</span>. Used only if the parent <span class="keyword">FieldBind</span> <span class="keyword">DesignerType</span> is <span class="keyword">Operator</span>. The <span class="keyword">TypeFilter** attribute allows options to be hidden or displayed in the workflow editor, based on the data type of the parent element.</p>
<p>You can define multiple types for the **TypeFilter** attribute, but they must be separated by commas.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**UnaryHides**</p></td>
<td align="left"><p>**String</span>. Used only if the parent <span class="keyword">FieldBind</span> <span class="keyword">RuleDesigner</span> type is <span class="keyword">Operator</span>. The value that is specified in this attribute should be synchronized with the <span class="keyword">Field</span> attribute of a <span class="keyword">FieldBind </span>element. If this option is selected, the <span class="keyword">FieldBind** specified here will be hidden from the workflow editor.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Value**</p></td>
<td align="left"><p>**String**. Represents the value of the selected drop-down list item.</p></td>
</tr>
</tbody>
</table>

### Value Attribute

The following table contains attribute values that are used with a <span
class="keyword">TypeFilter</span> attribute of <span
class="keyword">Operator</span> that performs conditional comparisons.
Custom values can be substituted.

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Value</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>**Equal**</p></td>
<td align="left"><p>Returns **true** if queried values are equal. Case sensitivity must match.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**EqualNoCase**</p></td>
<td align="left"><p>Returns **true** if queried values are equal. Case sensitivity does not need to match.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**NotEqual**</p></td>
<td align="left"><p>Returns **true** if queried values are not equal. Case sensitivity must match.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**NotEqualNoCase**</p></td>
<td align="left"><p>Returns **true** if queried values are not equal. Case sensitivity does not need to match.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**StartsWith**</p></td>
<td align="left"><p>Returns **true** if queried values start with a specific pattern.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**NotStartsWith**</p></td>
<td align="left"><p>Returns **true** if queried values do not start with a specific pattern.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**EndsWith**</p></td>
<td align="left"><p>Returns **true** if queried values end with a specific pattern.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**NotEndsWith**</p></td>
<td align="left"><p>Returns **true** if queried values do not end with a specific pattern.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Contains**</p></td>
<td align="left"><p>Returns **true** if queried values contain the specified pattern.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**NotContains**</p></td>
<td align="left"><p>Returns **true** if queried values do not contain the specified pattern.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**ContainsNoCase**</p></td>
<td align="left"><p>Returns **true** if queried values contain the specified pattern.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Matches**</p></td>
<td align="left"><p>Returns **true** if queried values match a specified regular expression.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**IsEmpty**</p></td>
<td align="left"><p>Specifies empty string.</p></td>
</tr>
</tbody>
</table>

### Child Elements

None

### Parent Elements

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><a href="fieldbind-element-workflowinfo.htm">FieldBind</a></p></td>
</tr>
</tbody>
</table>


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following XML demonstrates how to construct an <span
class="keyword">Option</span> element so that it is visible to the
workflow designer.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <RuleDesigner Sentence="%1">
       <FieldBind Field="MyParameter1" 
                  Text="text" Id="1"       
                  DesignerType="Operator" 
                  OperatorTypeFrom="MyParameter1">
            <Option Name="equals" Value="Equal"/>
            <Option Name="not equals" Value="NotEqual"/>
            <Option Name="is greater than" 
                    Value="GreaterThan"
                    TypeFilter="System.Double;System.Int32;
                                System.Uint32;System.DateTime"/>
            <Option Name="is greater than or equal to"   
                    Value="GreaterThanOrEqual"
                    TypeFilter="System.Double;System.Int32;
                                System.Uint32;System.DateTime"/>
            <Option Name="is less than" 
                    Value="LessThan"
                    TypeFilter="System.Double;System.Int32;
                                System.Uint32;System.DateTime"/>
            <Option Name="is less than or equal to" 
                    Value="LessThanOrEqual"
                    TypeFilter="System.Double;System.Int32;
                                System.Uint32;System.DateTime"/>
            <Option Name="is empty" 
                    Value="IsEmpty"
                    TypeFilter="System.String" 
                    UnaryHides="right"/>
            <Option Name="is not empty" 
                    Value="NotIsEmpty"
                    TypeFilter="System.String" 
                    UnaryHides="right"/>
            <Option Name="begins with" 
                    Value="StartsWith"
                    TypeFilter="System.String"/>
            <Option Name="does not begin with" 
                    Value="NotStartsWith"
                    TypeFilter="System.String"/>
            <Option Name="ends with" 
                    Value="EndsWith"
                    TypeFilter="System.String"/>
            <Option Name="does not end with" 
                    Value="NotEndsWith"
                    TypeFilter="System.String"/>
            <Option Name="contains" 
                    Value="Contains"
                    TypeFilter="System.String"/>
            <Option Name="does not contain" 
                    Value="NotContains"
                    TypeFilter="System.String"/>
            <Option Name="matches regular expression" 
                    Value="Matches"
                    TypeFilter="System.String"/>
            <Option Name="equals (ignoring case)" 
                    Value="EqualNoCase"
                    TypeFilter="System.String"/>
            <Option Name="contains (ignoring case)" 
                    Value="ContainsNoCase"
                    TypeFilter="System.String"/>
            <Option Name="equals (ignoring time)" 
                    Value="EqualNoTime"
                    TypeFilter="System.DateTime"/>
         </FieldBind>
    </RuleDesigner>


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








