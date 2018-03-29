---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 1e7a8225-6a52-ba74-e109-2ec7eddaca3d
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
<td align="left"># SolutionDefinition Element (SolutionManifestDefinitions Schema)</td>
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

Specifies the root element of a Microsoft Business Connectivity Services
(BCS) solution manifest file. A solution manifest file enables a
solution developer to describe the user interface (UI), behavior, and
business logic associated with a Microsoft Outlook Item Type such as
Outlook Contact, Task, Post, or Calendar. For example, in the manifest
file, a solution developer would be able to indicate that for an Outlook
Item Type of Contact, a certain UI should be used (example, an Office
External Part) and a specific method from the external system (for
example, <span class="keyword">UpdateCustomerInstance(ID,
NewInstanceValues)</span>) should be called when the data in the item
changes. There will always be at least one namespace declaration on the
**SolutionDefinition** element, typically:

**Namespace:**
http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest

**Schema:** SolutionManifestDefinitions

<span codelanguage="xmlLang"></span>
XML 
<span class="copyCode" onclick="CopyCode(this)"
onkeypress="CopyCode_CheckKey(this, event)"
onmouseover="ChangeCopyCodeIcon(this)"
onmouseout="ChangeCopyCodeIcon(this)" tabindex="0">![Copy
code] "Copy code")Copy code</span>
    xmlns="http://schemas.microsoft.com/office/2009/05/BusinessApplications/Manifest"

This is necessary to identify the contents of the XML file as a Business
Connectivity Services solution manifest file. The URI part must be
written exactly as shown. You can also use a prefix such as <span
class="keyword">DOCS-LESSTHANDOCS-LESSTHANsolmDOCS-GREATERTHANDOCS-GREATERTHAN</span>,
but if you do that, then you would have to name the elements <span
class="keyword">DOCS-LESSTHANsolm:SolutionDefinitionDOCS-GREATERTHAN</span>
instead of <span
class="keyword">DOCS-LESSTHANSolutionDefinitionDOCS-GREATERTHAN</span>.

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
<td align="left"><pre><code>&lt;SolutionDefinition&gt;&lt;/SolutionDefinition&gt;</code></pre></td>
</tr>
</tbody>
</table>


--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

The following sections describe attributes, child elements, and parent
elements.

#### Attributes

None.

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
<td align="left"><p><span sdata="link"><a href="solutionsettings-element-in-solutiondefinition-solutionmanifestdefinitions-schem.md">SolutionSettings Element in SolutionDefinition (SolutionManifestDefinitions Schema)</a></span></p></td>
<td align="left"><p>Defines the settings for this Business Connectivity Services solution such as the ID, display name, and description.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="contextdefinitiongroups-element-in-solutiondefinition-solutionmanifestdefinition.md">ContextDefinitionGroups Element in SolutionDefinition (SolutionManifestDefinitions Schema)</a></span></p></td>
<td align="left"><p>Defines the context definitions that are part of this solution, grouped by the Outlook Item Type to which they refer. The manifest file can contain a context definition group containing a list of context definitions for each one of the Outlook Item Types such as Contact, Task, Post, or Calendar, or **EntityView** if showing related external data in a task pane.</p></td>
</tr>
</tbody>
</table>

#### Parent elements

None.








