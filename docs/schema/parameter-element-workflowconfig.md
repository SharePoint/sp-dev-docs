---


manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 3d043e89-5b01-41bb-a5ca-541041466d5a
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
<td align="left"># Parameter Element (WorkflowConfig)</td>
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

Represents a single parameter for the workflow initiation form.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Parameter 
  Name=&quot;Text&quot; 
  Type=&quot;Text&quot; 
/&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>Attribute</p></td>
<td align="left"><p>Description</p></td>
</tr>
<tr class="even">
<td align="left"><p>**Name**</p></td>
<td align="left"><p>Required **Text</span>. Specifies the name of the parameter. The Name attribute value must be the same as the Name attribute of the corresponding <span class="keyword">Field** element.</p>
<p>The Name attribute value is also the same as the name of the workflow variable that represents the parameter.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**Type**</p></td>
<td align="left"><p>The System data type of the parameter.</p></td>
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
<td align="left"><p>None</p></td>
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
<td align="left"><p><span sdata="link"><a href="parameters-element-workflowconfig.htm">Parameters Element (WorkflowConfig)</a></span></p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

For each [Field Element
(Field)](field-element-field.md)</span> element
contained in the [Fields Element
(WorkflowConfig)](fields-element-workflowconfig.md)</span>
element, there must be a corresponding [Parameter
Element
(WorkflowConfig)](parameter-element-workflowconfig.md)</span>
element, in the [Parameters Element
(WorkflowConfig)](parameters-element-workflowconfig.md)</span>
element, with a matching Name attribute. The <span
sdata="link">[Parameter Element
(WorkflowConfig)](parameter-element-workflowconfig.md)</span>
element specifies the System data type of the field.

The [Fields Element
(WorkflowConfig)](fields-element-workflowconfig.md)</span>
element contains a collection of [Field Element
(Field)](field-element-field.md)</span> elements. Each
[Field Element
(Field)](field-element-field.md)</span> element
represents a data field on the workflow initiation form.

The [Parameter Element
(WorkflowConfig)](parameter-element-workflowconfig.md)</span>
element also represents a workflow variable of the same name. When the
user submits the workflow initiation form, SharePoint Foundation passes
the value specified for each parameter to the workflow instance as part
of the <span sdata="cer"
target="P:Microsoft.SharePoint.Workflow.SPWorkflowActivationProperties.InitiationData"><span
class="nolink">InitiationData</span></span> property.

Use the URL attribute of the [Initiation Element
(WorkflowConfig)](initiation-element-workflowconfig.md)</span>
element to specify the path to the workflow initiation form for the
workflow.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example Initiation element contains a URL attribute that
specifies the location of the workflow initiation form to use for this
workflow.

The element also contains a Fields element, which in turn contains a
Field element that defines the single data field on the initiation form.
Note that the Parameters element contains a corresponding Parameter
element, with a matching Name attribute value, that specifies the data
type of the Field element.

This example has been edited for clarity.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    <Initiation 
        URL="Workflows/Notify Me/Notify Me.aspx">
      <Fields>
        <Field 
          Name="Reason_for_Review" 
          …
          DisplayName="Reason for Review" 
          …
        >
          <Default>Standard review of new documents</Default>
        </Field>
      </Fields>
      <Parameters>
        <Parameter Name="Reason_for_Review" Type="System.String" />
      </Parameters>
    </Initiation>


-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#### Concepts

[Workflow configuration schema
reference](workflow-configuration-schema-reference.md)</span>

#### Other resources

[Workflow Development for Windows SharePoint
Services](http://msdn.microsoft.com/library/ad7a5bf2-fab0-4b30-ae0b-46b15f16b491(Office.15).aspx)

[Creating Declarative, No-Code Workflow
Editors](http://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx)

[Office SharePoint Designer 2007
Overview](http://msdn.microsoft.com/library/5ef4e933-564e-4dea-b2f4-c1b621774969(Office.15).aspx)








