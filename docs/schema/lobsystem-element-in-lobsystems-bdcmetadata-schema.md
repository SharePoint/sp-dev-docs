---


manager: soliver
ms.date: 3/9/2015
ms.audience: Developer
ms.topic: reference
f1_keywords:
- VS.SharePointTools.BDC.LobSystem
ms.prod: office-online-server
localization_priority: Normal
ms.assetid: d4e58d7d-a628-8093-97fe-7c3136e8f6f2
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
<td align="left"># LobSystem Element in LobSystems (BDCMetadata Schema)</td>
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

Represents an external data source.

**Namespace:**
http://schemas.microsoft.com/windows/2007/BusinessDataCatalog

**Schema:** BDCMetadata

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
<td align="left"><pre><code>&lt;LobSystem Type = &quot;String&quot; Name = &quot;String&quot; DefaultDisplayName = &quot;String&quot; IsCached = &quot;Boolean&quot;&gt; &lt;/LobSystem&gt;</code></pre></td>
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
<td align="left"><p>Type</p></td>
<td align="left"><p>The type of the LobSystem.</p>
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
<td align="left"><p>Database</p></td>
<td align="left"><p>The represented external data source is a database.</p></td>
</tr>
<tr class="even">
<td align="left"><p>DotNetAssembly</p></td>
<td align="left"><p>The represented external data source is a set of .NET Framework classes.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Wcf</p></td>
<td align="left"><p>The represented external data source is a WCF Service endpoint.</p></td>
</tr>
<tr class="even">
<td align="left"><p>WebService</p></td>
<td align="left"><p>The represented external data source is a Web service. This has been deprecated, use Wcf instead.</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Custom</p></td>
<td align="left"><p>The represented external data source has a custom connector implemented to manage the connection and data transfer.</p></td>
</tr>
</tbody>
</table>
</div></td>
</tr>
<tr class="even">
<td align="left"><p>Name</p></td>
<td align="left"><p>The name of the LobSystem.</p>
<p>Required.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="odd">
<td align="left"><p>DefaultDisplayName</p></td>
<td align="left"><p>The default display name of the LobSystem.</p>
<p>Optional.</p>
<p>Attribute type: **String**</p></td>
</tr>
<tr class="even">
<td align="left"><p>IsCached</p></td>
<td align="left"><p>Specifies whether the LobSystem is frequently used. If frequently used, Business Data Connectivity (BDC) service caches the LobSystem.</p>
<p>Optional.</p>
<p>Default value: **true**</p>
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
<td align="left"><p><span sdata="link"><a href="localizeddisplaynames-element-in-metadataobject-bdcmetadata-schema.htm">LocalizedDisplayNames Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>The localized names of the **LobSystem**.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="properties-element-in-metadataobject-bdcmetadata-schema.htm">Properties Element in MetadataObject (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>Specifies the properties of an **LobSystem**.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="accesscontrollist-element-bdcmetadata-schema.htm">AccessControlList Element (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>Specifies the access control list (ACL) of an **LobSystem**.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="proxy-element-in-lobsystem-bdcmetadata-schema.htm">Proxy Element in LobSystem (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>Specifies a user-provided proxy that is identical to the one that would be generated if this element was not present.</p></td>
</tr>
<tr class="odd">
<td align="left"><p><span sdata="link"><a href="lobsysteminstances-element-in-lobsystem-bdcmetadata-schema.htm">LobSystemInstances Element in LobSystem (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>Specifies the external system instances for this external system.</p></td>
</tr>
<tr class="even">
<td align="left"><p><span sdata="link"><a href="entities-element-in-lobsystem-bdcmetadata-schema.htm">Entities Element in LobSystem (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>Specifies the external content types in this external system.</p></td>
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
<td align="left"><p><span sdata="link"><a href="lobsystems-element-in-model-bdcmetadata-schema.htm">LobSystems Element in Model (BDCMetadata Schema)</a></span></p></td>
<td align="left"><p>Specifies a list of external systems in this model.</p></td>
</tr>
</tbody>
</table>








