---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: f50e24c6-674b-241f-5af6-1b6205be93be
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
<td align="left"># OBPart Element in ArrayOfOBPart (LayoutDefinitions Schema)</td>
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

Specifies an External Data Part.

**Namespace:**
http://schemas.microsoft.com/office/2009/05/BusinessApplications/Layout

**Schema:** LayoutDefinitions

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
<td align="left"><pre><code>&lt;OBPart PartType = &quot;String&quot; QualifiedTypeName = &quot;String&quot; DataSourceName = &quot;String&quot; DataSourceOrigin = &quot;String&quot; Description = &quot;String&quot; Text = &quot;String&quot; Expanded = &quot;Boolean&quot; FillParent = &quot;Boolean&quot;&gt; &lt;/OBPart&gt;</code></pre></td>
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
<td align="left"><p>PartType</p></td>
<td align="left"><p>Required.</p>
<p>The type of the Office External Part.</p>
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
<td align="left"><p>InfoPath</p></td>
<td align="left"><p>The default Microsoft InfoPath Office External Part.</p></td>
</tr>
<tr class="even">
<td align="left"><p>List</p></td>
<td align="left"><p>The default List Office External Part.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Custom</p></td>
<td align="left"><p>A custom Office External Part.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="even">
<td align="left"><p>QualifiedTypeName</p></td>
<td align="left"><p>Optional.</p>
<p>If PartType is Custom, you must provide this attribute. It specifies the fully qualified .NET Framework type name of the custom Office External Part.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>DataSourceName</p></td>
<td align="left"><p>Optional.</p>
<p>The name of the data source to use for this Office External Part (for example, the name of the external content type's view, the **SpecificFinder** method instance).</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>DataSourceOrigin</p></td>
<td align="left"><p>Optional.</p>
<p>This is not used in the current release.</p>
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
<td align="left"><p>Context</p></td>
<td align="left"></td>
</tr>
<tr class="even">
<td align="left"><p>Container</p></td>
<td align="left"></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="odd">
<td align="left"><p>Description</p></td>
<td align="left"><p>Optional.</p>
<p>A brief phrase that describes what the Office External Part does, for use in ToolTips.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>Text</p></td>
<td align="left"><p>Optional.</p>
<p>The title of the Office External Part.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Expanded</p></td>
<td align="left"><p>Optional.</p>
<p>Determines whether the Office External Part is expanded when it is displayed for the first time in a Stack container.</p>
<p>Attribute type: **Boolean</span>. <span class="keyword">true</span> if the External Data Part is expanded when it is displayed for the first time in a Stack container; otherwise, <span class="keyword">false**.</p></td>
</tr>
<tr class="even">
<td align="left"><p>FillParent</p></td>
<td align="left"><p>Optional.</p>
<p>Specifies if this Office External Part is maximized within its parent container.</p>
<p>Attribute type: **Boolean**</p></td>
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
<td align="left"><p><span sdata="link"><a href="customproperties-element-in-uielement-layoutdefinitions-schema.md">CustomProperties Element in UIElement (LayoutDefinitions Schema)</a></span></p></td>
<td align="left"><p>The list of the custom properties of the Container or Office External Part.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="titlebar-element-in-obpart-layoutdefinitions-schema.md">TitleBar Element in OBPart (LayoutDefinitions Schema)</a></span></p></td>
<td align="left"><p>The UI and behavior of the title bar of the Office External Part.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="actionnames-element-in-obpart-layoutdefinitions-schema.md">ActionNames Element in OBPart (LayoutDefinitions Schema)</a></span></p></td>
<td align="left"><p>The actions that are exposed by this Office External Part.</p></td>
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
<td align="left"><p><span sdata="link"><a href="children-element-in-container-layoutdefinitions-schema.md">Children Element in Container (LayoutDefinitions Schema)</a></span></p></td>
<td align="left"></td>
</tr>
</tbody>
</table>








