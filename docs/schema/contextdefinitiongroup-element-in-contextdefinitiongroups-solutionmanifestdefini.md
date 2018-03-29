---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 39f8840b-4970-041d-f0d8-13168662249c
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
<td align="left"># ContextDefinitionGroup Element in ContextDefinitionGroups (SolutionManifestDefinitions Schema)</td>
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

Defines a context definition group containing a list of context
definitions for one of the Outlook Item Types such as Contact, Task,
Post, or Calendar, or if showing data in a task pane, an <span
class="keyword">EntityView</span>.

**Namespace:**
http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest

**Schema:** SolutionManifestDefinitions

<span codelanguage="xmlLang"></span>
<table>
<colgroup>
<col width="100%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">XML</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><pre><code>&lt;ContextDefinitionGroup ItemType = &quot;String&quot; Description = &quot;String&quot;&gt; &lt;/ContextDefinitionGroup&gt;</code></pre></td>
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
<td align="left"><p>**ItemType**</p></td>
<td align="left"><p>Required.</p>
<p>The Outlook Item Type this context definition group represents.</p>
<p>The following table lists the possible values for this attribute.</p>
<div class="tableSection">
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
<td align="left"><p>**EntityView**</p></td>
<td align="left"><p>This value indicates that the context for this context definition group is an Outlook task pane.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**OutlookAppointment**</p></td>
<td align="left"><p>This value indicates that the context for this context definition group is an Outlook Appointment item.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**OutlookContact**</p></td>
<td align="left"><p>This value indicates that the context for this context definition group is the Outlook Contact item.</p></td>
</tr>
<tr class="even">
<td align="left"><p>**OutlookPost**</p></td>
<td align="left"><p>This value indicates that the context for this context definition group is the Outlook Post item.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>**OutlookTask**</p></td>
<td align="left"><p>This value indicates that the context for this context definition group is the Outlook Task item.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="even">
<td align="left"><p>**Description**</p></td>
<td align="left"><p>Optional.</p>
<p>A description for this context definition group.</p>
<p>Attribute type: **String**</p></td>
</tr>
</tbody>
</table>

#### Child elements

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
<td align="left"><p><span sdata="link"><a href="contextdefinition-element-in-contextdefinitiongroup-solutionmanifestdefinitions.htm">ContextDefinition Element in ContextDefinitionGroup (SolutionManifestDefinitions Schema)</a></span></p></td>
<td align="left"><p>Defines a context for an external content type that is of this Outlook Item Type.</p></td>
</tr>
</tbody>
</table>

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
<td align="left"><p><span sdata="link"><a href="contextdefinitiongroups-element-in-solutiondefinition-solutionmanifestdefinition.htm">ContextDefinitionGroups Element in SolutionDefinition (SolutionManifestDefinitions Schema)</a></span></p></td>
<td align="left"><p>The **ContextDefinitionGroups** element that contains this context definition group.</p></td>
</tr>
</tbody>
</table>








