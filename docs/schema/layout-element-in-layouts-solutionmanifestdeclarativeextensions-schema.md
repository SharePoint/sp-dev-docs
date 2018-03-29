---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: 3cb10648-a1ac-9aba-5273-efc0aa34041c
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
<td align="left"># Layout Element in Layouts (SolutionManifestDeclarativeExtensions Schema)</td>
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

The **Layout** element is used to specify the
location of the layout file that contains layout information for the
external data part.

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
<td align="left"><pre><code>&lt;Layout  DisposeOnContextDeactivation = &quot;Boolean&quot; LayoutFileName = &quot;String&quot; Name = &quot;String&quot; Description = &quot;String&quot;&gt; &lt;/Layout&gt;</code></pre></td>
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
<td align="left"><p>DisposeOnContextDeactivation</p></td>
<td align="left"><p>Optional.</p>
<p>Determines whether the layout resources should be released when the context is deactivated.</p>
<p>Attribute type: Boolean</p></td>
</tr>
<tr class="even">
<td align="left"><p>LayoutFileName</p></td>
<td align="left"><p>Required.</p>
<p>The XML layout file name without the .xml extension.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Name</p></td>
<td align="left"><p>Required.</p>
<p>The name of the layout.</p>
<p>Attribute type: String</p></td>
</tr>
<tr class="even">
<td align="left"><p>Description</p></td>
<td align="left"><p>Optional.</p>
<p>A description</p>
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
<td align="left"><p><a href="http://msdn.microsoft.com/library/9c1b404f-2cab-313d-a1ec-529325bae676.aspx">Properties</a></p></td>
<td align="left"><p>Can contain a property named **AssociatedActionType** to specify the type of action that is associated with this layout. Accepted values are Edit, Create, and ViewDetails.</p></td>
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
<td align="left"><p><span sdata="link"><a href="layouts-element-in-declarativecontextdefinition-solutionmanifestdeclarativeexten.md">Layouts Element in DeclarativeContextDefinition (SolutionManifestDeclarativeExtensions Schema)</a></span></p></td>
<td align="left"><p>The **Layouts** element that contains this layout.</p></td>
</tr>
</tbody>
</table>








