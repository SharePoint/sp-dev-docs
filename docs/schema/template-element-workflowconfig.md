---


manager: laurawi
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- SharePoint workflows
keywords:
- customizing site definitions,site definition configurations [SharePoint 2010]
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 8c873040-28c8-4fa9-a411-6638af47131b
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
<td align="left"># Template Element (WorkflowConfig)</td>
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
SharePoint Online | SharePoint Server 2013*

Contains the information necessary for a declarative rules-based,
code-free workflow editor, such as Microsoft SharePoint Designer 2010,
to generate a workflow template in SharePoint Foundation.

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;Template
  BaseID=&quot;Text&quot;
  DocLibID=&quot;Text&quot;
  XomlID=&quot;Text&quot; | &quot;Integer&quot;
  XomlHref=&quot;Text&quot;
  XomlVersion=&quot;Text&quot;
  RulesID=&quot;Text&quot; | &quot;Integer&quot;
  RulesHref=&quot;Text&quot;
  RulesVersion=&quot;Text&quot;
&gt;
&lt;/Template&gt;</code></pre></td>
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
<td align="left"><p>**DocLibID**</p></td>
<td align="left"><p>Required **Text**. Specifies the GUID of the document library that contains the workflow markup (.xoml) file and, if necessary, the rules markup (xoml.rules) file.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**BaseID**</p></td>
<td align="left"><p>Required **Text**. Specifies the GUID used to uniquely identify this workflow. The BaseID is the same for all versions of the workflow.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**XomlID**</p></td>
<td align="left"><p>Optional **Integer**. An optional way to uniquely identify the workflow markup file. This attribute must equal the ID property of the item in the document library.</p>
<p>If present, this attribute is used, rather than the **XomlHref** attribute.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**XomlVersion**</p></td>
<td align="left"><p>Required **Text**. Specifies the version of the workflow markup file to use when creating an instance of this workflow.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**XomlHref**</p></td>
<td align="left"><p>Required **Text**. Specifies the path to the workflow markup file. The path specified must be relative to the location of the workflow configuration file.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RulesID**</p></td>
<td align="left"><p>Optional **Integer**. An optional way to uniquely identify the workflow rules file. This attribute must equal the ID property of the item in the document library.</p>
<p>If present, this attribute is used, rather than the **RulesHref** attribute.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**RulesVersion**</p></td>
<td align="left"><p>Required **Text**. Specifies the version of the workflow rules file, in there is one, to use when creating an instance of this workflow.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**RulesHref**</p></td>
<td align="left"><p>Required **Text**. Specifies the path to the workflow rules markup file. The path specified must be relative to the location of the workflow configuration file.</p></td>
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
<td align="left"><p>None.</p></td>
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
<td align="left"><p><span sdata="link"><a href="workflowconfig-element.htm">WorkflowConfig Element</a></span></p></td>
</tr>
</tbody>
</table>


----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Applications created to work as a declarative rules-based, code-free
workflow editor can use the <span sdata="cer"
target="M:websvcWebPartPages.WebPartPagesWebService.AssociateWorkflowMarkup(System.String,System.String)">**AssociateWorkflowMarkup(String,
String)**</span> method of the <span sdata="cer"
target="N:websvcWebPartPages">**websvcWebPartPages**</span> Web Service
to create a workflow template and associate it to a SharePoint list
specifying a workflow markup file, a workflow configuration file, and
optionally, a workflow rules markup file.

For more information about creating an application that can act as a
declarative rules-based, code-free workflow editor, see [Creating
Declarative, No-Code Workflow
Editors](http://msdn.microsoft.com/library/60dfda8d-e724-4d7d-9578-aa239c362dcf(Office.15).aspx).


------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following example shows a Template element for a workflow
configuration.

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code](../icons/copycode.gif "Copy code")Copy code</span>
    <Template
        BaseID="{68B99644-EDCE-4988-9D11-7FD5CCAE09CC}"
        DocLibID="{74FAE22C-0176-46DF-AA12-988CE79C8889}"
        XomlHref="Workflows/Notify Me/Notify Me.xoml"
        XomlVersion="V3.0"
        RulesHref="Workflows/Notify Me/Notify Me.xoml.rules"
        RulesVersion="V3.0"
    >


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








