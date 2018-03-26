---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 427da5ae-bc81-34ae-84ad-b4d723650b9f
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
<td align="left"># DeclarativeContextDefinitionGroup Element (SolutionManifestDeclarativeExtensions Schema)</td>
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

The <span
class="keyword">DOCS-LESSTHANDeclarativeContextDefinitionGroupDOCS-GREATERTHAN</span>
element derives from the <span
class="keyword">DOCS-LESSTHANContextDefinitionGroupDOCS-GREATERTHAN</span>
element. In intermediate declarative Microsoft Outlook 2010 solutions,
this element is used to define a context definition group that
containins a list of context definitions for one of the Outlook Item
Types, such as Contact, Task, Post, or Calendar, or if showing data in a
taskpane, an **EntityView**.

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
<td align="left"><pre><code>&lt;ContextDefinitionGroup xsl:type=&quot;DeclarativeContextDefinitionGroup&quot; xmlns:xsl=http://www.w3.org/2001/XMLSchema-instance&quot; RibbonFileName = &quot;String&quot; ItemType = &quot;String&quot; Description = &quot;String&quot;&gt; &lt;/ContextDefinitionGroup&gt;</code></pre></td>
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
<td align="left"><p>RibbonFileName</p></td>
<td align="left"><p>The relative path to the ribbon file for this context. The path is relative to the location of the solution manifest file.</p>
<p>Optional.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="even">
<td align="left"><p>ItemType</p></td>
<td align="left"><p>The Outlook Item Type that this context definition group represents.</p>
<p>Required.</p>
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
<td align="left"><p>EntityView</p></td>
<td align="left"><p>This value indicates that the context for this context definition group is an Outlook taskpane.</p></td>
</tr>
<tr class="even">
<td align="left"><p>OutlookAppointment</p></td>
<td align="left"><p>This value indicates that the context for this context definition group is an Outlook Appointment item.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>OutlookContact</p></td>
<td align="left"><p>This value indicates that the context for this context definition group is the Outlook Contact item.</p></td>
</tr>
<tr class="even">
<td align="left"><p>OutlookPost</p></td>
<td align="left"><p>This value indicates that the context for this context definition group is the Outlook Post item.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>OutlookTask</p></td>
<td align="left"><p>This value indicates that the context for this context definition group is the Outlook Task item.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="odd">
<td align="left"><p>Description</p></td>
<td align="left"><p>A description for this context definition group.</p>
<p>Optional.</p>
<p>Attribute type: String</p></td>
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
<td align="left"><p><a href="http://msdn.microsoft.com/library/8b647f38-f31c-747a-5637-339140cbcba3.aspx">ContextDefinition</a></p></td>
<td align="left"><p>The **DOCS-LESSTHANContextDefinitionDOCS-GREATERTHAN** element is used to define a context for an external content type that is of this Outlook Item Type.</p></td>
</tr>
</tbody>
</table>

#### Parent elements

None.








