---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 12b3bdb6-09d0-b59a-e36c-6f8f628bfd27
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
<td align="left"># ConstantParameter Element in ActionParameterDefinitions (SolutionManifestDeclarativeExtensions Schema)</td>
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

**Last modified:** March 09, 2015

**Applies to**: SharePoint 2016 | SharePoint Foundation 2013 |
SharePoint Online | SharePoint Server 2013

The **ConstantParameter** element defines a
constant parameter for an action.

Namespace:
http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest/DeclarativeExtensions

Schema: SolutionManifestDeclarativeExtensions

<span codelanguage="other"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><pre><code><ConstantParameter  ValueType = "String" Value = "String" Name = "String" Description = "String"> </ConstantParameter></code></pre></td>
</tr>
</tbody>
</table>


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following sections describe attributes, child elements, and parent
elements.

#### Attributes

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
<td align="left"><p>ValueType</p></td>
<td align="left"><p>The .NET type name of the parameter to be passed to the method of a code-based action. Must be one of the following:</p>
<div class="tableSection">
<table>
<colgroup>
<col width="100%" />
</colgroup>
<tbody>
<tr class="odd">
<td align="left"><p>System.Boolean</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.Byte</p></td>
</tr>
<tr class="odd">
<td align="left"><p>System.SByte</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.Char</p></td>
</tr>
<tr class="odd">
<td align="left"><p>System.Decimal</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.Double</p></td>
</tr>
<tr class="odd">
<td align="left"><p>System.Single</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.Int32</p></td>
</tr>
<tr class="odd">
<td align="left"><p>System.UInt32</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.Int64</p></td>
</tr>
<tr class="odd">
<td align="left"><p>System.UInt64</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.Int16</p></td>
</tr>
<tr class="odd">
<td align="left"><p>System.UInt16</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.String</p></td>
</tr>
<tr class="odd">
<td align="left"><p>System.Guid</p></td>
</tr>
<tr class="even">
<td align="left"><p>System.DateTime</p></td>
</tr>
</tbody>
</table>
</div>
<p>Required.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="even">
<td align="left"><p>Value</p></td>
<td align="left"><p>The constant value of the parameter.</p>
<p>Required.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Name</p></td>
<td align="left"><p>A name for the constant parameter.</p>
<p>Required.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="even">
<td align="left"><p>Description</p></td>
<td align="left"><p>A description for the parameter.</p>
<p>Optional.</p>
<p>Attribute type: String</p></td>
</tr>
</tbody>
</table>

#### Child elements

None.

#### Parent elements

<table>
<colgroup>
<col width="50%" />
<col width="50%" />
</colgroup>
<thead>
<tr class="header">
<th align="left"><p>Element</p></th>
<th align="left"><p>Description</p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="parameters-element-in-actiondefinition-solutionmanifestdeclarativeextensions-sch.md">Parameters Element in ActionDefinition (SolutionManifestDeclarativeExtensions Schema)</a></span></p></td>
<td align="left"><p>The **Parameters** element that contains all of the parameters of an action.</p></td>
</tr>
</tbody>
</table>








