---


manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 28c73384-447e-45ba-99a5-31ab32ee286a
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
<td align="left"># Parameters Element (WorkflowConfig)</td>
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

***Applies to:** SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013*

Represents a collection of the parameters for the workflow initiation
form.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Parameters&gt;
&lt;/Parameters&gt;</code></pre></td>
</tr>
</tbody>
</table>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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


---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="parameter-element-workflowconfig.htm">Parameter Element (WorkflowConfig)</a></span></p></td>
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
<td align="left"><p><span sdata="link"><a href="initiation-element-workflowconfig.htm">Initiation Element (WorkflowConfig)</a></span></p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

For each <span sdata="link">[Field Element
(Field)](field-element-field.htm)</span> element
contained in the <span sdata="link">[Fields Element
(WorkflowConfig)](fields-element-workflowconfig.htm)</span>
element, there must be a corresponding <span sdata="link">[Parameter
Element
(WorkflowConfig)](parameter-element-workflowconfig.htm)</span>
element, in the Parameters element, with a matching Name attribute. The
<span sdata="link">[Parameter Element
(WorkflowConfig)](parameter-element-workflowconfig.htm)</span>
element specifies the System data type of the field.

The <span sdata="link">[Fields Element
(WorkflowConfig)](fields-element-workflowconfig.htm)</span>
element contains a collection of <span sdata="link">[Field Element
(Field)](field-element-field.htm)</span> elements. Each
<span sdata="link">[Field Element
(Field)](field-element-field.htm)</span> element
represents a data field on the workflow initiation form.

The <span sdata="link">[Parameter Element
(WorkflowConfig)](parameter-element-workflowconfig.htm)</span>
element also represents a workflow variable of the same name. When the
user submits the workflow initiation form, SharePoint Foundation passes
the value specified for each parameter to the workflow instance as part
of the <span sdata="cer"
target="P:Microsoft.SharePoint.Workflow.SPWorkflowActivationProperties.InitiationData"><span
class="nolink">InitiationData</span></span> property.

Use the URL attribute of the <span sdata="link">[Initiation Element
(WorkflowConfig)](initiation-element-workflowconfig.htm)</span>
element to specify the path to the workflow initiation form for the
workflow.


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example Initiation element contains an URL attribute that
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
code](../icons/copycode.gif "Copy code")Copy code</span>
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

<span sdata="link">[Workflow configuration schema
reference](workflow-configuration-schema-reference.htm)</span>

#### Other resources

[Workflow Development for Windows SharePoint
Services](http://msdn.microsoft.com/library/ad7a5bf2-fab0-4b30-ae0b-46b15f16b491(Office.15).aspx)

[Creating Declarative, No-Code Workflow
Editors](http://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx)

[Office SharePoint Designer 2007
Overview](http://msdn.microsoft.com/library/5ef4e933-564e-4dea-b2f4-c1b621774969(Office.15).aspx)








