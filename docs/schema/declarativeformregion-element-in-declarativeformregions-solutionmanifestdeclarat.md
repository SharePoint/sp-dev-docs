---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 0cb3c1b0-96c7-0f7c-5451-3c60c5b5aca7
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
<td align="left"># DeclarativeFormRegion Element in DeclarativeFormRegions (SolutionManifestDeclarativeExtensions Schema)</td>
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
class="keyword">DOCS-LESSTHANDeclarativeFormRegionDOCS-GREATERTHAN</span>
element is used to describe the form region in which external data is
displayed in Microsoft Outlook 2010.

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
<td align="left"><pre><code>&lt;FormRegion  xsl:type=&quot;DeclarativeFormRegion&quot; InternalName = &quot;String&quot; Type = &quot;String&quot; ShowInspectorComposeMode = &quot;Boolean&quot; ShowInspectorReadMode = &quot;Boolean&quot; Title = &quot;String&quot; Name = &quot;String&quot; Description = &quot;String&quot;&gt; &lt;/FormRegion&gt;</code></pre></td>
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
<td align="left"><p>InternalName</p></td>
<td align="left"><p>Required.</p>
<p>The name of the form region.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="even">
<td align="left"><p>Type</p></td>
<td align="left"><p>Required.</p>
<p>The type of the form region.</p>
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
<td align="left"><p>Adjoining</p></td>
<td align="left"><p>The form region is displayed at the bottom of the first page of a form.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Replacement</p></td>
<td align="left"><p>The form region replaces the default page of the form.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ReplaceAll</p></td>
<td align="left"><p>The form region replaces the entire form.</p></td>
</tr>
<tr class="even">
<td align="left"><p>Separate</p></td>
<td align="left"><p>Displayed as a full additional form page.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="odd">
<td align="left"><p>ShowInspectorComposeMode</p></td>
<td align="left"><p>Optional.</p>
<p>Determines whether the form region is available in compose mode in Outlook.</p>
<p>Attribute type: Boolean</p></td>
</tr>
<tr class="even">
<td align="left"><p>ShowInspectorReadMode</p></td>
<td align="left"><p>Optional.</p>
<p>Determines whether the form region is available in read mode in Outlook.</p>
<p>Attribute type: Boolean</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Title</p></td>
<td align="left"><p>Optional.</p>
<p>The title of the form region.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="even">
<td align="left"><p>Name</p></td>
<td align="left"><p>Required.</p>
<p>The name of the form region.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Description</p></td>
<td align="left"><p>Optional.</p>
<p>A description for the form region.</p>
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
<td align="left"><p><span sdata="link"><a href="picture-element-in-declarativeformregion-solutionmanifestdeclarativeextensions-s.md">Picture Element in DeclarativeFormRegion (SolutionManifestDeclarativeExtensions Schema)</a></span></p></td>
<td align="left"><p>The **DOCS-LESSTHANPictureDOCS-GREATERTHAN** element is used to describe the icon to use in Outlook 2010 for the form region.</p></td>
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
<td align="left"><p><span sdata="link"><a href="declarativeformregions-element-solutionmanifestdeclarativeextensions-schema.md">DeclarativeFormRegions Element (SolutionManifestDeclarativeExtensions Schema)</a></span></p></td>
<td align="left"><p>The **DeclarativeFormRegions** element that contains this form region.</p></td>
</tr>
</tbody>
</table>








