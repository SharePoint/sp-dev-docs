---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 55db90e4-b32d-1e97-5909-7afa7152276f
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
<td align="left"># DeclarativeSolutionSettings Element (SolutionManifestDeclarativeExtensions Schema)</td>
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
class="keyword">DOCS-LESSTHANSolutionSettingsDOCS-GREATERTHAN</span>
element is used to define the settings for the declarative solution,
such as the ID, display name, description, and so on.

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
<td align="left"><pre><code>&lt;SolutionSettings xsl:type=&quot;DeclarativeSolutionSettings&quot; xmlns:xsl=http://www.w3.org/2001/XMLSchema-instance&quot; CustomRibbonManager = &quot;String&quot; SolutionId = &quot;String&quot; SolutionDisplayName = &quot;String&quot; SolutionVersion = &quot;String&quot; Description = &quot;String&quot;&gt; &lt;/SolutionSettings&gt;</code></pre></td>
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
<td align="left"><p>CustomRibbonManager</p></td>
<td align="left"><p>Optional.</p>
<p>The custom ribbon manager that is used by the solution.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="even">
<td align="left"><p>SolutionId</p></td>
<td align="left"><p>Required.</p>
<p>A unique identifier for this solution. This can be a GUID. In the log, the solution ID may be used to locate errors and warnings pertaining to this solution.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="odd">
<td align="left"><p>SolutionDisplayName</p></td>
<td align="left"><p>Required.</p>
<p>The display name of the solution. This is used in the user interface (UI), for example, in the taskpane.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="even">
<td align="left"><p>SolutionVersion</p></td>
<td align="left"><p>Required.</p>
<p>The version of this solution. This attribute is not used by the product in its current release.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Description</p></td>
<td align="left"><p>Optional.</p>
<p>A description for this solution.</p>
<p>Attribute type: String</p></td>
</tr>
</tbody>
</table>

#### Child elements

None.

#### Parent elements

None.








